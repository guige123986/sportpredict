//+------------------------------------------------------------------+
//|                                                    贵哥V3.mq5     |
//|                             基于 AlgoLee 9秒狙击手策略              |
//|                             黄金XAUUSD 专用版                       |
//+------------------------------------------------------------------+
#property copyright "贵哥"
#property link      "https://10110289.xyz"
#property version   "2.20"

#include <Trade\Trade.mqh>
#include <Trade\PositionInfo.mqh>

//+------------------------------------------------------------------+
//| 输入参数                                                          |
//+------------------------------------------------------------------+
input group "══════ 基础设置 ══════"
input int      魔术号              = 20260618;     // EA魔术号
input double   固定手数            = 0.01;         // 固定手数
input bool     自动手数            = false;        // 根据余额自动算手数
input double   风险百分比          = 0.5;          // 单笔风险%
input int      最大持仓数          = 1;            // 最多同时持仓+挂单
input ENUM_TIMEFRAMES 工作周期     = PERIOD_M1;    // K线周期
input string   交易时间段          = "00:00-23:59";// 交易时间

input group "══════ SAR指标 ══════"
input double   SAR步长             = 0.02;
input double   SAR最大值           = 0.2;

input group "══════ 入场设置 ══════"
input double   挂单距离点          = 60.0;         // 挂单距当前价点数
input double   波动阈值点          = 100.0;        // 价格波动多少点才考虑入场
input double   止损激活点          = 120.0;        // 回撤多少点激活止损
input double   止损缓冲点          = 60.0;         // 止损额外缓冲

input group "══════ 止盈止损 ══════"
input double   止损点数            = 180.0;        // 止损=180点=1.8美元
input double   止盈点数            = 300.0;        // 止盈=300点=3美元
input double   集体止盈金额        = 0.0;          // 总浮盈超此金额全平(0=关)
input bool     启用追踪止损        = false;

input group "══════ 风控 ══════"
input int      挂单超时秒          = 20;           // 挂单超时自动撤
input double   最大点差            = 100.0;        // 超过此点差不交易

input group "══════ 系统 ══════"
input int      缓冲区大小          = 100;

//+------------------------------------------------------------------+
//| 环形缓冲区                                                        |
//+------------------------------------------------------------------+
template<typename T>
class CRingBuffer {
private:T m_buf[];int m_h,m_n,m_c;
public:
    CRingBuffer():m_h(0),m_n(0),m_c(0){}
    void Init(int c){m_c=c;ArrayResize(m_buf,c);m_h=0;m_n=0;}
    void Put(const T v){m_buf[m_h]=v;m_h=(m_h+1)%m_c;if(m_n<m_c)m_n++;}
    T Peek(int i=0)const{if(i<0||i>=m_n)return(T)0;int x=(m_h-1-i+m_c)%m_c;return m_buf[x];}
    int Count()const{return m_n;} bool IsFull()const{return m_n>=m_c;}
    T Avg(int n=-1)const{if(n<=0||n>m_n)n=m_n;if(n==0)return(T)0;double s=0;for(int i=0;i<n;i++)s+=(double)Peek(i);return(T)(s/n);}
};

CTrade 交易;
CPositionInfo 持仓信息;

CRingBuffer<double> 点差缓冲;
CRingBuffer<double> 价格缓冲;
CRingBuffer<long>   时间缓冲;

double 均点差=0, 当前点差=0, 价格动量=0, 止盈目标=0;
double 最低开仓价=999999, 最高开仓价=-999999;
string EA备注=__FILE__;
int 买挂时间=0, 卖挂时间=0, SAR句柄=-1;
bool 启用时段=true;
datetime 上次检测=0;

//+------------------------------------------------------------------+
int OnInit(){
    交易.SetExpertMagicNumber(魔术号);
    ChartSetInteger(0,CHART_SHOW_GRID,false);
    启用时段=(交易时间段!="00:00-23:59"&&交易时间段!="00:00-24:00");
    点差缓冲.Init(缓冲区大小);
    价格缓冲.Init(缓冲区大小);
    时间缓冲.Init(缓冲区大小);
    SAR句柄=iSAR(_Symbol,工作周期,SAR步长,SAR最大值);
    if(SAR句柄==INVALID_HANDLE){Print("❌ SAR指标创建失败!");return(INIT_FAILED);}
    Print("✅ 贵哥V3 黄金狙击已启动 | 魔术号=",魔术号," | 止损=",止损点数,"点 | 止盈=",止盈点数,"点");
    return(INIT_SUCCEEDED);
}
void OnDeinit(const int r){if(SAR句柄!=INVALID_HANDLE)IndicatorRelease(SAR句柄);}

//+------------------------------------------------------------------+
bool 在交易时段(){
    if(!启用时段)return true;
    string p[];if(StringSplit(交易时间段,'-',p)!=2)return true;
    MqlDateTime dt;TimeToStruct(TimeCurrent(),dt);
    string sp[],ep[];if(StringSplit(p[0],':',sp)!=2||StringSplit(p[1],':',ep)!=2)return true;
    int s=(int)sp[0]*60+(int)sp[1],e=(int)ep[0]*60+(int)ep[1],n=dt.hour*60+dt.min;
    return(s<=e)?(n>=s&&n<=e):(n>=s||n<=e);
}

//+------------------------------------------------------------------+
int 统计持仓挂单数(){
    int c=0;
    for(int i=PositionsTotal()-1;i>=0;i--){
        ulong t=PositionGetTicket(i);
        if(PositionSelectByTicket(t)&&PositionGetString(POSITION_SYMBOL)==_Symbol&&PositionGetInteger(POSITION_MAGIC)==魔术号)c++;
    }
    for(int i=OrdersTotal()-1;i>=0;i--){
        ulong t=OrderGetTicket(i);
        if(OrderSelect(t)&&OrderGetString(ORDER_SYMBOL)==_Symbol&&OrderGetInteger(ORDER_MAGIC)==魔术号)c++;
    }
    return c;
}

//+------------------------------------------------------------------+
double 计算手数(){
    if(!自动手数)return 固定手数;
    double b=AccountInfoDouble(ACCOUNT_BALANCE);
    double tv=SymbolInfoDouble(_Symbol,SYMBOL_TRADE_TICK_VALUE);
    if(tv<=0)return 固定手数;
    double lot=b*风险百分比/100.0/(止损点数*tv);
    double vs=SymbolInfoDouble(_Symbol,SYMBOL_VOLUME_STEP),vm=SymbolInfoDouble(_Symbol,SYMBOL_VOLUME_MIN),vx=SymbolInfoDouble(_Symbol,SYMBOL_VOLUME_MAX);
    lot=MathFloor(lot/vs)*vs;return MathMax(vm,MathMin(vx,lot));
}

//+------------------------------------------------------------------+
void 检查挂单超时(){
    int now=(int)TimeCurrent();
    if(买挂时间>0&&(now-买挂时间)>挂单超时秒){
        for(int i=OrdersTotal()-1;i>=0;i--){ulong t=OrderGetTicket(i);if(OrderSelect(t)&&OrderGetString(ORDER_SYMBOL)==_Symbol&&OrderGetInteger(ORDER_MAGIC)==魔术号&&OrderGetInteger(ORDER_TYPE)==ORDER_TYPE_BUY_STOP)交易.OrderDelete(t);}
        买挂时间=0; Print("⏰ 买挂超时,已撤单");
    }
    if(卖挂时间>0&&(now-卖挂时间)>挂单超时秒){
        for(int i=OrdersTotal()-1;i>=0;i--){ulong t=OrderGetTicket(i);if(OrderSelect(t)&&OrderGetString(ORDER_SYMBOL)==_Symbol&&OrderGetInteger(ORDER_MAGIC)==魔术号&&OrderGetInteger(ORDER_TYPE)==ORDER_TYPE_SELL_STOP)交易.OrderDelete(t);}
        卖挂时间=0; Print("⏰ 卖挂超时,已撤单");
    }
}

//+------------------------------------------------------------------+
void 更新缓冲区(double ask,double bid){
    当前点差=NormalizeDouble(ask-bid,_Digits);
    if(!点差缓冲.IsFull()){for(int i=0;i<缓冲区大小;i++){点差缓冲.Put(当前点差);价格缓冲.Put(ask);时间缓冲.Put(TimeCurrent());}}
    else{点差缓冲.Put(当前点差);价格缓冲.Put(ask);时间缓冲.Put(TimeCurrent());}
    均点差=点差缓冲.Avg(缓冲区大小);
    double op=价格缓冲.Peek(20);
    if(op>0)价格动量=NormalizeDouble(ask-op,_Digits);
}

//+------------------------------------------------------------------+
void OnTick(){
    if(TimeCurrent()-上次检测<3)return;
    上次检测=TimeCurrent();

    if(!在交易时段()){Comment("贵哥V3 ⏸ 非交易时段");return;}

    double ask=SymbolInfoDouble(_Symbol,SYMBOL_ASK),bid=SymbolInfoDouble(_Symbol,SYMBOL_BID);
    double rawSpread=NormalizeDouble(ask-bid,_Digits);
    if(rawSpread>最大点差*_Point){Comment("贵哥V3 🛑 点差过大:",DoubleToString(rawSpread/_Point,0),"点 > ",最大点差);return;}

    更新缓冲区(ask,bid);
    检查挂单超时();

    int 总单数=统计持仓挂单数();
    double 总浮盈=0;
    最低开仓价=999999; 最高开仓价=-999999;

    // 管理已有持仓
    for(int i=PositionsTotal()-1;i>=0;i--){
        ulong ticket=PositionGetTicket(i);
        if(!PositionSelectByTicket(ticket))continue;
        if(PositionGetString(POSITION_SYMBOL)!=_Symbol||PositionGetInteger(POSITION_MAGIC)!=魔术号)continue;
        总浮盈+=PositionGetDouble(POSITION_PROFIT)+PositionGetDouble(POSITION_SWAP);
        double op=PositionGetDouble(POSITION_PRICE_OPEN),sl=PositionGetDouble(POSITION_SL);
        long pt=PositionGetInteger(POSITION_TYPE);
        if(op<最低开仓价)最低开仓价=op;
        if(op>最高开仓价)最高开仓价=op;

        if(pt==POSITION_TYPE_BUY){
            if(bid<(op-_Point*止损激活点)&&sl==0){
                交易.PositionModify(ticket,op-(止损激活点+止损缓冲点)*_Point,op+止盈点数*_Point);
                Print("🛡 买仓设止损 @",DoubleToString(op-(止损激活点+止损缓冲点)*_Point,_Digits));
            }
            if(启用追踪止损&&sl>0){double ns=bid-止损缓冲点*_Point;if(ns>sl)交易.PositionModify(ticket,ns,PositionGetDouble(POSITION_TP));}
        }
        if(pt==POSITION_TYPE_SELL){
            if(ask>(op+_Point*止损激活点)&&sl==0){
                交易.PositionModify(ticket,op+(止损激活点+止损缓冲点)*_Point,op-止盈点数*_Point);
                Print("🛡 卖仓设止损 @",DoubleToString(op+(止损激活点+止损缓冲点)*_Point,_Digits));
            }
            if(启用追踪止损&&sl>0){double ns=ask+止损缓冲点*_Point;if(ns<sl)交易.PositionModify(ticket,ns,PositionGetDouble(POSITION_TP));}
        }
    }

    if(集体止盈金额>0)止盈目标=集体止盈金额;
    if(总浮盈>止盈目标&&止盈目标>0){
        for(int i=PositionsTotal()-1;i>=0;i--){ulong t=PositionGetTicket(i);if(PositionSelectByTicket(t)&&PositionGetString(POSITION_SYMBOL)==_Symbol&&PositionGetInteger(POSITION_MAGIC)==魔术号)交易.PositionClose(t);}
        Print("🎯 集体止盈触发! 浮盈=",DoubleToString(总浮盈,2));
        return;
    }

    // 开仓
    if(总单数>=最大持仓数){Comment("贵哥V3 🔒 已达最大持仓:",总单数,"单");return;}

    double sv[];if(CopyBuffer(SAR句柄,0,1,1,sv)<=0)return;
    double lot=计算手数(),sp=挂单距离点*_Point;

    Comment("贵哥V3 🔍 检测中\n",
           "Ask=",DoubleToString(ask,_Digits)," Bid=",DoubleToString(bid,_Digits),"\n",
           "点差=",DoubleToString(rawSpread/_Point,0)," 允许=",最大点差,"\n",
           "波动=",DoubleToString(价格动量/_Point,1),"点 需要=",波动阈值点,"点\n",
           "SAR=",DoubleToString(sv[0],_Digits),"\n",
           "买信号:",(sv[0]-sp>ask?"✅":"❌")," 卖信号:",(sv[0]+sp<bid?"✅":"❌"),
           " 总单:",总单数,"/",最大持仓数);

    // 买入
    if(价格动量>(_Point*波动阈值点)&&sv[0]-sp>ask&&(总单数==0||(ask+sp)<最低开仓价)){
        double entry=NormalizeDouble(ask+sp,_Digits);
        double sl=NormalizeDouble(entry-止损点数*_Point,_Digits);
        double tp=NormalizeDouble(entry+止盈点数*_Point,_Digits);
        if(交易.BuyStop(lot,entry,_Symbol,sl,tp,ORDER_TIME_GTC,0,EA备注)){
            买挂时间=(int)TimeCurrent();
            Print("📈 买入挂单 @",entry," 止损=",sl," 止盈=",tp);
        }
    }

    // 卖出
    if(价格动量<(_Point*-波动阈值点)&&sv[0]+sp<bid&&(总单数==0||(bid-sp)>最高开仓价||最高开仓价<=0)){
        double entry=NormalizeDouble(bid-sp,_Digits);
        double sl=NormalizeDouble(entry+止损点数*_Point,_Digits);
        double tp=NormalizeDouble(entry-止盈点数*_Point,_Digits);
        if(交易.SellStop(lot,entry,_Symbol,sl,tp,ORDER_TIME_GTC,0,EA备注)){
            卖挂时间=(int)TimeCurrent();
            Print("📉 卖出挂单 @",entry," 止损=",sl," 止盈=",tp);
        }
    }
}
//+------------------------------------------------------------------+
