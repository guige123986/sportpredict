//+------------------------------------------------------------------+
//|                                           9SecondSniper_v2.mq5    |
//|                                   基于 AlgoLee 9秒狙击手策略       |
//|                                   黄金XAUUSD 专用版                |
//+------------------------------------------------------------------+
#property copyright "SportPredict"
#property link      "https://10110289.xyz"
#property version   "2.10"

#include <Trade\Trade.mqh>
#include <Trade\PositionInfo.mqh>

input group "=== 交易设置 ==="
input int      Magic              = 20260618;
input double   LotSize_Fixed      = 0.01;
input bool     AutoLot            = false;
input double   RiskPercent        = 0.5;
input int      Max_Concurrent_Orders = 1;
input ENUM_TIMEFRAMES Timeframe   = PERIOD_M1;
input string   TradingTime        = "00:00-23:59";

input group "=== SAR 指标 ==="
input double   Sar_Step           = 0.02;
input double   Sar_Maximum        = 0.2;

input group "=== 入场(黄金) ==="
input double   Step               = 60.0;
input double   PriceMvmtThreshold = 100.0;
input double   StopActivationPoints = 120.0;
input double   StopActivationBuffer = 60.0;

input group "=== 止盈止损(黄金) ==="
input double   SlPoints           = 180.0;   // 止损=180点(StopActivation+Buffer)
input double   TpPoints           = 300.0;   // 止盈=300点
input double   Profit_Target      = 0.0;     // 集体止盈金额(0=关闭)
input bool     UseTrailingStop    = false;

input group "=== 风控 ==="
input int      OrderTimeout_Seconds = 20;
input double   Max_Spread         = 100.0;

input group "=== 缓冲区 ==="
input int      BUFFER_SIZE        = 100;

//+------------------------------------------------------------------+
template<typename T>
class CRingBuffer {
private:T m_buffer[];int m_head,m_count,m_capacity;
public:
    CRingBuffer():m_head(0),m_count(0),m_capacity(0){}
    void Init(int c){m_capacity=c;ArrayResize(m_buffer,c);m_head=0;m_count=0;}
    void Put(const T v){m_buffer[m_head]=v;m_head=(m_head+1)%m_capacity;if(m_count<m_capacity)m_count++;}
    T Peek(int idx=0)const{if(idx<0||idx>=m_count)return(T)0;int i=(m_head-1-idx+m_capacity)%m_capacity;return m_buffer[i];}
    int Count()const{return m_count;}
    bool IsFull()const{return m_count>=m_capacity;}
    T Average(int n=-1)const{if(n<=0||n>m_count)n=m_count;if(n==0)return(T)0;double s=0;for(int i=0;i<n;i++)s+=(double)Peek(i);return(T)(s/n);}
};

CTrade trade;
CPositionInfo posInfo;

CRingBuffer<double> SpreadHistoryBuffer;
CRingBuffer<double> PriceHistoryBuffer;
CRingBuffer<long>   TimeHistoryBuffer;

double AvgSpread=0,CurSpread=0,PriceMvmt=0,ProfitTarget=0;
double lowestOpen=DBL_MAX,highestOpen=-DBL_MAX;
string EAComment=__FILE__;
int BuyTime=0,SellTime=0,SarH=INVALID_HANDLE;
datetime LastBar=0;
bool TradeAllowed=true;

int OnInit(){
    trade.SetExpertMagicNumber(Magic);
    ChartSetInteger(0,CHART_SHOW_GRID,false);
    TradeAllowed=(TradingTime!="00:00-23:59"&&TradingTime!="00:00-24:00");
    SpreadHistoryBuffer.Init(BUFFER_SIZE);
    PriceHistoryBuffer.Init(BUFFER_SIZE);
    TimeHistoryBuffer.Init(BUFFER_SIZE);
    SarH=iSAR(_Symbol,Timeframe,Sar_Step,Sar_Maximum);
    if(SarH==INVALID_HANDLE){Print("SAR失败!");return(INIT_FAILED);}
    Print("9S Sniper Gold v2.1 | Magic=",Magic," | SL=",SlPoints," TP=",TpPoints);
    return(INIT_SUCCEEDED);
}
void OnDeinit(const int r){if(SarH!=INVALID_HANDLE)IndicatorRelease(SarH);}

// 检查交易时间
bool InTradeTime(){
    if(!TradeAllowed)return true;
    string p[];if(StringSplit(TradingTime,'-',p)!=2)return true;
    MqlDateTime dt;TimeToStruct(TimeCurrent(),dt);
    string sp[],ep[];if(StringSplit(p[0],':',sp)!=2||StringSplit(p[1],':',ep)!=2)return true;
    int s=(int)sp[0]*60+(int)sp[1],e=(int)ep[0]*60+(int)ep[1],n=dt.hour*60+dt.min;
    return(s<=e)?(n>=s&&n<=e):(n>=s||n<=e);
}

// 计算总单数(持仓+挂单)
int TotalMyOrders(){
    int c=0;
    for(int i=PositionsTotal()-1;i>=0;i--){
        ulong t=PositionGetTicket(i);
        if(PositionSelectByTicket(t)&&PositionGetString(POSITION_SYMBOL)==_Symbol&&PositionGetInteger(POSITION_MAGIC)==Magic)c++;
    }
    for(int i=OrdersTotal()-1;i>=0;i--){
        ulong t=OrderGetTicket(i);
        if(OrderSelect(t)&&OrderGetString(ORDER_SYMBOL)==_Symbol&&OrderGetInteger(ORDER_MAGIC)==Magic)c++;
    }
    return c;
}

double CalcLot(){
    if(!AutoLot)return LotSize_Fixed;
    double b=AccountInfoDouble(ACCOUNT_BALANCE);
    double tv=SymbolInfoDouble(_Symbol,SYMBOL_TRADE_TICK_VALUE);
    if(tv<=0)return LotSize_Fixed;
    double lot=b*RiskPercent/100.0/(SlPoints*tv);
    double vs=SymbolInfoDouble(_Symbol,SYMBOL_VOLUME_STEP),vm=SymbolInfoDouble(_Symbol,SYMBOL_VOLUME_MIN),vx=SymbolInfoDouble(_Symbol,SYMBOL_VOLUME_MAX);
    lot=MathFloor(lot/vs)*vs;return MathMax(vm,MathMin(vx,lot));
}

void CheckTimeout(){
    int now=(int)TimeCurrent();
    if(BuyTime>0&&(now-BuyTime)>OrderTimeout_Seconds){
        for(int i=OrdersTotal()-1;i>=0;i--){ulong t=OrderGetTicket(i);if(OrderSelect(t)&&OrderGetString(ORDER_SYMBOL)==_Symbol&&OrderGetInteger(ORDER_MAGIC)==Magic&&OrderGetInteger(ORDER_TYPE)==ORDER_TYPE_BUY_STOP)trade.OrderDelete(t);}
        BuyTime=0;
    }
    if(SellTime>0&&(now-SellTime)>OrderTimeout_Seconds){
        for(int i=OrdersTotal()-1;i>=0;i--){ulong t=OrderGetTicket(i);if(OrderSelect(t)&&OrderGetString(ORDER_SYMBOL)==_Symbol&&OrderGetInteger(ORDER_MAGIC)==Magic&&OrderGetInteger(ORDER_TYPE)==ORDER_TYPE_SELL_STOP)trade.OrderDelete(t);}
        SellTime=0;
    }
}

void UpdateBuffers(double ask,double bid){
    CurSpread=NormalizeDouble(ask-bid,_Digits);
    if(!SpreadHistoryBuffer.IsFull()){for(int i=0;i<BUFFER_SIZE;i++){SpreadHistoryBuffer.Put(CurSpread);PriceHistoryBuffer.Put(ask);TimeHistoryBuffer.Put(TimeCurrent());}}
    else{SpreadHistoryBuffer.Put(CurSpread);PriceHistoryBuffer.Put(ask);TimeHistoryBuffer.Put(TimeCurrent());}
    AvgSpread=SpreadHistoryBuffer.Average(BUFFER_SIZE);
    double op=PriceHistoryBuffer.Peek(20);
    if(op>0)PriceMvmt=NormalizeDouble(ask-op,_Digits);
}

void OnTick(){
    // 每个新K线才执行一次
    datetime curBar=iTime(_Symbol,Timeframe,0);
    if(curBar==LastBar)return;
    LastBar=curBar;

    if(!InTradeTime())return;
    double ask=SymbolInfoDouble(_Symbol,SYMBOL_ASK),bid=SymbolInfoDouble(_Symbol,SYMBOL_BID);
    if(NormalizeDouble(ask-bid,_Digits)>Max_Spread*_Point)return;
    UpdateBuffers(ask,bid);
    CheckTimeout();

    int totalOrders=TotalMyOrders();
    double totalProfit=0;
    lowestOpen=DBL_MAX;highestOpen=-DBL_MAX;

    // 管理已有持仓
    for(int i=PositionsTotal()-1;i>=0;i--){
        ulong ticket=PositionGetTicket(i);
        if(!PositionSelectByTicket(ticket))continue;
        if(PositionGetString(POSITION_SYMBOL)!=_Symbol||PositionGetInteger(POSITION_MAGIC)!=Magic)continue;
        totalProfit+=PositionGetDouble(POSITION_PROFIT)+PositionGetDouble(POSITION_SWAP);
        double op=PositionGetDouble(POSITION_PRICE_OPEN),sl=PositionGetDouble(POSITION_SL);
        long pt=PositionGetInteger(POSITION_TYPE);
        if(op<lowestOpen)lowestOpen=op;
        if(op>highestOpen)highestOpen=op;

        // 延迟止损: 价格回撤到开仓价+激活距离后,才设止损
        if(pt==POSITION_TYPE_BUY){
            if(bid<(op-_Point*StopActivationPoints)&&sl==0){
                double newSl=op-(StopActivationPoints+StopActivationBuffer)*_Point;
                double newTp=op+TpPoints*_Point;
                trade.PositionModify(ticket,newSl,newTp);
            }
            if(UseTrailingStop&&sl>0){double ns=bid-StopActivationBuffer*_Point;if(ns>sl)trade.PositionModify(ticket,ns,PositionGetDouble(POSITION_TP));}
        }
        if(pt==POSITION_TYPE_SELL){
            if(ask>(op+_Point*StopActivationPoints)&&sl==0){
                double newSl=op+(StopActivationPoints+StopActivationBuffer)*_Point;
                double newTp=op-TpPoints*_Point;
                trade.PositionModify(ticket,newSl,newTp);
            }
            if(UseTrailingStop&&sl>0){double ns=ask+StopActivationBuffer*_Point;if(ns<sl)trade.PositionModify(ticket,ns,PositionGetDouble(POSITION_TP));}
        }
    }

    // 集体止盈
    if(Profit_Target>0)ProfitTarget=Profit_Target;
    if(totalProfit>ProfitTarget&&ProfitTarget>0){
        for(int i=PositionsTotal()-1;i>=0;i--){ulong t=PositionGetTicket(i);if(PositionSelectByTicket(t)&&PositionGetString(POSITION_SYMBOL)==_Symbol&&PositionGetInteger(POSITION_MAGIC)==Magic)trade.PositionClose(t);}
        return;
    }

    // 开仓——只允许1单
    if(totalOrders>=Max_Concurrent_Orders)return;

    double sv[];if(CopyBuffer(SarH,0,1,1,sv)<=0)return;
    double lot=CalcLot(),sp=Step*_Point;

    // BUY
    if(PriceMvmt>(_Point*StopActivationPoints)&&sv[0]-sp>ask&&(totalOrders==0||(ask+sp)<lowestOpen)){
        double entry=NormalizeDouble(ask+sp,_Digits);
        double sl=NormalizeDouble(entry-SlPoints*_Point,_Digits);
        double tp=NormalizeDouble(entry+TpPoints*_Point,_Digits);
        trade.BuyStop(lot,entry,_Symbol,sl,tp,ORDER_TIME_GTC,0,EAComment);
        BuyTime=(int)TimeCurrent();
    }

    // SELL
    if(PriceMvmt<(_Point*-StopActivationPoints)&&sv[0]+sp<bid&&(totalOrders==0||(bid-sp)>highestOpen||highestOpen<=0)){
        double entry=NormalizeDouble(bid-sp,_Digits);
        double sl=NormalizeDouble(entry+SlPoints*_Point,_Digits);
        double tp=NormalizeDouble(entry-TpPoints*_Point,_Digits);
        trade.SellStop(lot,entry,_Symbol,sl,tp,ORDER_TIME_GTC,0,EAComment);
        SellTime=(int)TimeCurrent();
    }
}
//+------------------------------------------------------------------+
