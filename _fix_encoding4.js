const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let content = fs.readFileSync(path, 'utf8');

// The corruption pattern is U+FFFD followed by literal '?' (0x3f)
// The original char was truncated - the last byte was replaced with U+FFFD and the next byte became '?'

// Strategy: find all \ufffd? sequences and replace based on context

// Chinese fixes (\ufffd? at end of words = last char was cut off)
const zhContextFixes = [
  ["全赛事数据分\ufffd?", "全赛事数据分析"],
  ["数据仅供参\ufffd?· 不构成任何建\ufffd?", "数据仅供参考 · 不构成任何建议"],
  ["'进\ufffd?'", "'进行中'"],
  ["数据一致\ufffd?", "数据一致性"],
  ["跨运动数据洞\ufffd?", "跨运动数据洞察"],
  ["跨运动三场组\ufffd?", "跨运动三场组合"],
  ["'低风\ufffd?'", "'低风险'"],
  ["'中风\ufffd?'", "'中风险'"],
  ["'高风\ufffd?'", "'高风险'"],
  ["各运动隐含胜率分\ufffd?", "各运动隐含胜率分布"],
  ["'差异\ufffd?'", "'差异率'"],
  ["'加载\ufffd?..'", "'加载中...'"],
  ["'最优赔\ufffd?'", "'最优赔率'"],
  ["'橄榄\ufffd?'", "'橄榄球'"],
  ["'英式橄榄\ufffd?'", "'英式橄榄球'"],
  ["'高尔\ufffd?'", "'高尔夫'"],
  ["'自行\ufffd?'", "'自行车'"],
  ["'斯诺\ufffd?'", "'斯诺克'"],
  ["'乒乓\ufffd?'", "'乒乓球'"],
  ["'羽毛\ufffd?'", "'羽毛球'"],
  ["FIFA官方流媒体平\ufffd?", "FIFA官方流媒体平台"],
  ["各联赛官方数字转播平\ufffd?", "各联赛官方数字转播平台"],
  ["NBA官方流媒体订阅服\ufffd?", "NBA官方流媒体订阅服务"],
  ["ESPN流媒体订阅服\ufffd?", "ESPN流媒体订阅服务"],
  ["欧洲体育频道流媒\ufffd?", "欧洲体育频道流媒体"],
  ["MLB官方流媒体订阅服\ufffd?", "MLB官方流媒体订阅服务"],
  ["NFL官方流媒体订阅服\ufffd?", "NFL官方流媒体订阅服务"],
  ["NHL官方流媒体订阅服\ufffd?", "NHL官方流媒体订阅服务"],
  ["全球体育流媒体平\ufffd?", "全球体育流媒体平台"],
  ["不构成任何建议\ufffd?'", "不构成任何建议。'"],
  ["请理性参考\ufffd?'", "请理性参考。'"],
  ["'场\ufffd?'", "'场'"],
  ["最后更新：2026\ufffd?\ufffd?\ufffd?'", "最后更新：2026年6月3日'"],
  ["我们不收集个人身份信息\ufffd?'", "我们不收集个人身份信息。'"],
  ["您可以通过浏览器设置管理Cookie\ufffd?'", "您可以通过浏览器设置管理Cookie。'"],
  ["'第三方服\ufffd?'", "'第三方服务'"],
  ["这些服务有自己的隐私政策\ufffd?'", "这些服务有自己的隐私政策。'"],
  ["请通过下方联系方式与我们联系\ufffd?'", "请通过下方联系方式与我们联系。'"],
  ["概率分析\ufffd?'", "概率分析。'"],
  ["使用数学模型计算得出\ufffd?'", "使用数学模型计算得出。'"],
  ["本站所有内容仅供信息参考和学术研究\ufffd?'", "本站所有内容仅供信息参考和学术研究。'"],
  ["不构成任何投注建议\ufffd?'", "不构成任何投注建议。'"],
  ["并承担使用风险\ufffd?'", "并承担使用风险。'"],
  ["未经许可不得复制或重新分发\ufffd?'", "未经许可不得复制或重新分发。'"],
  ["市场数据可能存在延迟\ufffd?'", "市场数据可能存在延迟。'"],
  ["所有数据仅供分析参考\ufffd?'", "所有数据仅供分析参考。'"],
  ["点击上方联赛名加载赔率数\ufffd?'", "点击上方联赛名加载赔率数据'"],
  ["API额度已用完，请等待下月重\ufffd?'", "API额度已用完，请等待下月重置'"],
  ["'免费版每\ufffd?00次请\ufffd?'", "'免费版每月500次请求'"],
  ["'📊 开始分\ufffd?'", "'📊 开始分析'"],
  ["\ufffd?收藏赛事'", "⭐ 收藏赛事'"],
  ["'5\ufffd?分钟更新'", "'5分钟更新'"],
  ["'所有赛\ufffd?'", "'所有赛事'"],
  ["'进行\ufffd?'", "'进行中'"],
  ["'即将开\ufffd?'", "'即将开始'"],
  ["'未开\ufffd?'", "'未开始'"],
  ["'已结\ufffd?'", "'已结束'"],
  ["'橄榄球联\ufffd?'", "'橄榄球联赛'"],
  ["'搜索比赛、队\ufffd?..'", "'搜索比赛、队伍...'"],
  ["'已收\ufffd?'", "'已收藏'"],
  ["'已取消收\ufffd?'", "'已取消收藏'"],
  ["'\ufffd?即将开\ufffd?'", "'⏰ 即将开始'"],
  ["'🟢 进行\ufffd?'", "'🟢 进行中'"],
  ["'\ufffd?高关注度'", "'🔥 高关注度'"],
  ["'{n}分钟\ufffd?'", "'{n}分钟后'"],
  ["'{n}小时\ufffd?'", "'{n}小时后'"],
  ["'已开\ufffd?'", "'已开始'"],
  ["'被看\ufffd?'", "'被看好'"],
  ["'发现赔率差异机会\ufffd?'", "'发现赔率差异机会！'"],
  ["'最\ufffd?'", "'最高'"],  // highest
  ["家机构提供赔\ufffd?'", "家机构提供赔率'"],
  ["'已投\ufffd?'", "'已投票'"],
  ["'投票成功\ufffd?'", "'投票成功！'"],
  ["'已复制到剪贴\ufffd?'", "'已复制到剪贴板'"],
  ["'分析数据均基于市场赔率计算，仅供参考，不构成任何建议\ufffd?'", "'分析数据均基于市场赔率计算，仅供参考，不构成任何建议。'"],
];

for (const [bad, good] of zhContextFixes) {
  // Replace all occurrences
  while (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix Japanese with \ufffd? pattern
const jaContextFixes = [
  ["全スポーツ分\ufffd?", "全スポーツ分析"],
  ["'試合一\ufffd?'", "'試合一覧'"],
  ["'ホーム勝\ufffd?'", "'ホーム勝ち'"],
  ["'データ整合\ufffd?'", "'データ整合性'"],
  ["'すべ\ufffd?'", "'すべて'"],
  ["'ダブルコン\ufffd?'", "'ダブルコンボ'"],
  ["'トリプルコン\ufffd?'", "'トリプルコンボ'"],
  ["'競技横断インサイ\ufffd?'", "'競技横断インサイト'"],
  ["'差異\ufffd?'", "'差異率'"],
  ["'公式の合法チャンネルで視聴してくださ\ufffd?'", "'公式の合法チャンネルで視聴してください'"],
  ["'オッズ更\ufffd?'", "'オッズ更新'"],
  ["'読み込み\ufffd?..'", "'読み込み中...'"],
  ["'再試\ufffd?'", "'再試行'"],
  ["'データな\ufffd?'", "'データなし'"],
  ["'オッズ比\ufffd?'", "'オッズ比較'"],
  ["'オッズ表\ufffd?'", "'オッズ表示'"],
  ["'オッズ差\ufffd?'", "'オッズ差異'"],
  ["'ブックメーカ\ufffd?'", "'ブックメーカー'"],
  ["'アイスホッケ\ufffd?'", "'アイスホッケー'"],
  ["'テニ\ufffd?'", "'テニス'"],
  ["'ボクシン\ufffd?'", "'ボクシング'"],
  ["'クリケッ\ufffd?'", "'クリケット'"],
  ["'eスポ\ufffd?\ufffd?'", "'eスポーツ'"],
  ["'オージールー\ufffd?'", "'オージールール'"],
  ["'ゴル\ufffd?'", "'ゴルフ'"],
  ["'スヌーカ\ufffd?'", "'スヌーカー'"],
  ["'フットサ\ufffd?'", "'フットサル'"],
  ["'FIFA公式ストリーミン\ufffd?'", "'FIFA公式ストリーミング'"],
  ["'リーグ公式放\ufffd?'", "'リーグ公式放送'"],
  ["'各リーグ公式デジタル放\ufffd?'", "'各リーグ公式デジタル放送'"],
  ["'NBA公式ストリーミングサブス\ufffd?'", "'NBA公式ストリーミングサブスク'"],
  ["'ESPNストリーミングサブス\ufffd?'", "'ESPNストリーミングサブスク'"],
  ["'MLB公式ストリーミングサブス\ufffd?'", "'MLB公式ストリーミングサブスク'"],
  ["'NFL公式ストリーミングサブス\ufffd?'", "'NFL公式ストリーミングサブスク'"],
  ["'NHL公式ストリーミングサブス\ufffd?'", "'NHL公式ストリーミングサブスク'"],
  ["'YouTubeスポーツチャンネ\ufffd?'", "'YouTubeスポーツチャンネル'"],
  ["'参考用のみです\ufffd?'", "'参考用のみです。'"],
  ["'結果を保証しません\ufffd?'", "'結果を保証しません。'"],
  ["'最終更新：2026\ufffd?\ufffd?\ufffd?'", "'最終更新：2026年6月3日'"],
  ["'データ収\ufffd?'", "'データ収集'"],
  ["'Cookieの使\ufffd?'", "'Cookieの使用'"],
  ["'オッズ情報\ufffd?分で期限切れ'", "'オッズ情報、5分で期限切れ'"],
  ["'個人識別情報は収集しません\ufffd?'", "'個人識別情報は収集しません。'"],
  ["'サードパーティサービ\ufffd?'", "'サードパーティサービス'"],
  ["'プライバシーポリシーがあります\ufffd?'", "'プライバシーポリシーがあります。'"],
  ["'GDPRの権\ufffd?'", "'GDPRの権利'"],
  ["'下記の連絡先までご連絡ください\ufffd?'", "'下記の連絡先までご連絡ください。'"],
  ["'連絡\ufffd?'", "'連絡先'"],
  ["'プラットフォームです\ufffd?'", "'プラットフォームです。'"],
  ["'計算されています\ufffd?'", "'計算されています。'"],
  ["'目的としています\ufffd?'", "'目的としています。'"],
  ["'構成するものではありません\ufffd?'", "'構成するものではありません。'"],
  ["'リスクを負うものとします\ufffd?'", "'リスクを負うものとします。'"],
  ["'再配布することはできません\ufffd?'", "'再配布することはできません。'"],
  ["'遅延が生じる場合があります\ufffd?'", "'遅延が生じる場合があります。'"],
  ["'分析参考用です\ufffd?'", "'分析参考用です。'"],
  ["'私たちについ\ufffd?'", "'私たちについて'"],
  ["'分析プラットフォー\ufffd?'", "'分析プラットフォーム'"],
  ["'リアルタイムオッ\ufffd?'", "'リアルタイムオッズ'"],
  ["\ufffd?お気に入\ufffd?'", "⭐ お気に入り'"],
  ["'予定されたイベントな\ufffd?'", "'予定されたイベントなし'"],
  ["'最終更\ufffd?'", "'最終更新'"],
  ["'すべて表\ufffd?'", "'すべて表示'"],
  ["'全イベン\ufffd?'", "'全イベント'"],
  ["'試合\ufffd?'", "'試合中'"],
  ["'ラグビーリー\ufffd?'", "'ラグビーリーグ'"],
  ["'機会あ\ufffd?'", "'機会あり'"],
  ["'チームを検\ufffd?..'", "'チームを検索...'"],
  ["'お気に入\ufffd?'", "'お気に入り'"],
  ["'お気に入りな\ufffd?'", "'お気に入りなし'"],
  ["'お気に入りから削\ufffd?'", "'お気に入りから削除'"],
  ["'\ufffd?開始間近'", "'⏰ 開始間近'"],
  ["'\ufffd?高注\ufffd?'", "'🔥 高注目'"],
  ["'{n}時間\ufffd?'", "'{n}時間後'"],
  ["'開始\ufffd?'", "'開始済'"],
  ["'オッズに基づ\ufffd?'", "'オッズに基づく'"],
  ["'社がオッズ提\ufffd?'", "'社がオッズ提供'"],
  ["'市場の傾\ufffd?'", "'市場の傾向'"],
  ["'注目度\ufffd?'", "'注目度が高い'"],
  ["'投票統\ufffd?'", "'投票統計'"],
  ["'投票しました\ufffd?'", "'投票しました！'"],
  ["'コピーしまし\ufffd?'", "'コピーしました'"],
  ["'リーグを選択してください\ufffd?'", "'リーグを選択してください。'"],
  ["\ufffd?お気に入\ufffd?'", "⭐ お気に入り'"],
];

for (const [bad, good] of jaContextFixes) {
  while (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix Korean with \ufffd? pattern
const koContextFixes = [
  ["전체 스포\ufffd?분석", "전체 스포츠분석"],
  ["'데이\ufffd?인사이트'", "'데이터 인사이트'"],
  ["'대시보\ufffd?'", "'대시보드'"],
  ["'\ufffd?\ufffd?'", "'홈승'"], // homeTeam
  ["'원정 \ufffd?'", "'원정 승'"],
  ["'데이\ufffd?일관\ufffd?'", "'데이터 일관성'"],
  ["'경기 데이\ufffd?없음'", "'경기 데이터 없음'"],
  ["'트리\ufffd?콤보'", "'트리플 콤보'"],
  ["'트리\ufffd?'", "'트리플'"],
  ["'교차 트리\ufffd?'", "'교차 트리플'"],
  ["'중위\ufffd?'", "'중위험'"],
  ["'고위\ufffd?'", "'고위험'"],
  ["'배당\ufffd?차이 기회'", "'배당률 차이 기회'"],
  ["'배당\ufffd?차이 기회 없음'", "'배당률 차이 기회 없음'"],
  ["'차이\ufffd?'", "'차이율'"],
  ["'공식 생중\ufffd?채널'", "'공식 생중계 채널'"],
  ["'공식 합법 채널\ufffd?통해 시청하세\ufffd?'", "'공식 합법 채널을 통해 시청하세요'"],
  ["'배당\ufffd?새로고침'", "'배당률 새로고침'"],
  ["'로딩 \ufffd?..'", "'로딩 중...'"],
  ["'재시\ufffd?'", "'재시도'"],
  ["'데이\ufffd?없음'", "'데이터 없음'"],
  ["'배당\ufffd?비교'", "'배당률 비교'"],
  ["'배당\ufffd?보기'", "'배당률 보기'"],
  ["'배당\ufffd?숨기\ufffd?'", "'배당률 숨기기'"],
  ["'배당\ufffd?차이'", "'배당률 차이'"],
  ["'최고 배당\ufffd?'", "'최고 배당률'"],
  ["'아이스하\ufffd?'", "'아이스하키'"],
  ["'테니\ufffd?'", "'테니스'"],
  ["'크리\ufffd?'", "'크리켓'"],
  ["'e스포\ufffd?'", "'e스포츠'"],
  ["'스누\ufffd?'", "'스누커'"],
  ["'핸드\ufffd?'", "'핸드볼'"],
  ["'공식 디지\ufffd?중계'", "'공식 디지털 중계'"],
  ["'유럽 스포\ufffd?스트리밍'", "'유럽 스포츠 스트리밍'"],
  ["'YouTube 스포\ufffd?채널'", "'YouTube 스포츠 채널'"],
  ["'글로벌 스포\ufffd?스트리밍'", "'글로벌 스포츠 스트리밍'"],
  ["'시장 배당\ufffd?기반이며 참고용입니다'", "'시장 배당률 기반이며 참고용입니다'"],
  ["스포\ufffd?결과\ufffd?여러 요인\ufffd?영향\ufffd?받습니다", "스포츠 결과는 여러 요인의 영향을 받습니다"],
  ["'글로벌 스포\ufffd?배당\ufffd?데이\ufffd?분석 플랫\ufffd?'", "'글로벌 스포츠 배당률 데이터 분석 플랫폼'"],
  ["'📊 실시\ufffd?배당\ufffd?'", "'📊 실시간 배당률'"],
  ["\ufffd?즐겨찾기'", "⭐ 즐겨찾기'"],
  ["'예정\ufffd?이벤\ufffd?없음'", "'예정된 이벤트 없음'"],
  ["'5분마\ufffd?업데이트'", "'5분마다 업데이트'"],
  ["'마지\ufffd?새로고침'", "'마지막 새로고침'"],
  ["'전체 이벤\ufffd?'", "'전체 이벤트'"],
  ["'진행 \ufffd?'", "'진행 중'"],
  ["'\ufffd?시작'", "'곧 시작'"],
  ["'종합격투\ufffd?'", "'종합격투기'"],
  ["'경기 배당\ufffd?차이 기회 있음'", "'경기 배당률 차이 기회 있음'"],
  ["'경기, 팀 검\ufffd?..'", "'경기, 팀 검색...'"],
  ["'\ufffd?\ufffd?시작'", "'⏰ 곧 시작'"],
  ["'\ufffd?높은 관\ufffd?'", "'🔥 높은 관심'"],
  ["'{n}\ufffd?\ufffd?'", "'{n}분 후'"],  // timeMinutesLater
  ["'{n}시간 \ufffd?'", "'{n}시간 후'"],
  ["'{n}일 \ufffd?'", "'{n}일 후'"],  // timeDaysLater
  ["'시작\ufffd?'", "'시작됨'"],
  ["'최종 업데이트: 2026\ufffd?6\ufffd?3\ufffd?'", "'최종 업데이트: 2026년6월3일'"],
  ["'데이\ufffd?수집'", "'데이터 수집'"],
  ["\ufffd?Favoritos'", "⭐ Favoritos'"],
  ["\ufffd?المفضلة'", "⭐ المفضلة'"],
  ["\ufffd?Избранное'", "⭐ Избранное'"],
  ["\ufffd?Favoris'", "⭐ Favoris'"],
  ["\ufffd?Favoriten'", "⭐ Favoriten'"],
  ["\ufffd?Favorites'", "⭐ Favorites'"],
  ["\ufffd?Starting Soon'", "⏰ Starting Soon'"],
  ["\ufffd?High Attention'", "🔥 High Attention'"],
  ["\ufffd?Скоро'", "⏰ Скоро'"],
  ["\ufffd?Высокий интерес'", "🔥 Высокий интерес'"],
  ["\ufffd?Bient\u00f4t'", "⏰ Bientôt'"],
  ["\ufffd?Forte attention'", "🔥 Forte attention'"],
  ["\ufffd?Bald'", "⏰ Bald'"],
  ["\ufffd?Hohe Aufmerksamkeit'", "🔥 Hohe Aufmerksamkeit'"],
  ["\ufffd?Pr\u00f3ximo'", "⏰ Próximo'"],
  ["\ufffd?Alta atenci\u00f3n'", "🔥 Alta atención'"],
  ["\ufffd?Em breve'", "⏰ Em breve'"],
  ["\ufffd?Alta aten\u00e7\u00e3o'", "🔥 Alta atenção'"],
  ["\ufffd?قريباً'", "⏰ قريباً'"],
  ["\ufffd?اهتمام عالي'", "🔥 اهتمام عالي'"],
];

for (const [bad, good] of koContextFixes) {
  while (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix GROUP_MAP emojis with \ufffd? pattern
content = content.replace("{ emoji: '\ufffd?', i18nKey: 'sportSoccer'", "{ emoji: '⚽', i18nKey: 'sportSoccer'");
content = content.replace("{ emoji: '\ufffd?', i18nKey: 'sportBaseball'", "{ emoji: '⚾', i18nKey: 'sportBaseball'");
content = content.replace("{ emoji: '\ufffd?', i18nKey: 'sportGolf'", "{ emoji: '⛳', i18nKey: 'sportGolf'");
content = content.replace("{ emoji: '\ufffd?', i18nKey: 'sportFutsal'", "{ emoji: '⚽', i18nKey: 'sportFutsal'");
content = content.replace("{ emoji: '🗳\ufffd?', i18nKey: 'sportPolitics'", "{ emoji: '🗳️', i18nKey: 'sportPolitics'");

// Fix LEAGUE_NAMES with \ufffd? pattern
content = content.replace("zh:'世界\ufffd?',", "zh:'世界杯',");
content = content.replace("ja:'ワールドカッ\ufffd?',", "ja:'ワールドカップ',");
content = content.replace("ko:'월드\ufffd?',", "ko:'월드컵',");
content = content.replace("ja:'プレミアリー\ufffd?',", "ja:'プレミアリーグ',");
content = content.replace("ja:'Jリー\ufffd?',", "ja:'Jリーグ',");
content = content.replace("ja:'ラ・リー\ufffd?',", "ja:'ラ・リーガ',");
content = content.replace("ja:'ブンデスリー\ufffd?',", "ja:'ブンデスリーガ',");
content = content.replace("ja:'コパ・リベルタドーレ\ufffd?',", "ja:'コパ・リベルタドーレス',");
content = content.replace("ja:'チャンピオンシッ\ufffd?',", "ja:'チャンピオンシップ',");
content = content.replace("ko:'리그\ufffd?',", "ko:'리그1',");
content = content.replace("zh:'墨西哥联\ufffd?',", "zh:'墨西哥联赛',");
content = content.replace("ja:'Aリー\ufffd?',", "ja:'Aリーグ',");
content = content.replace("zh:'欧国\ufffd?',", "zh:'欧国联',");
content = content.replace("zh:'超级橄榄\ufffd?',", "zh:'超级橄榄球',");
content = content.replace("zh:'NRL橄榄球联\ufffd?',", "zh:'NRL橄榄球联赛',");
content = content.replace("zh:'PGA高尔\ufffd?',", "zh:'PGA高尔夫',");
content = content.replace("ja:'ラグビーリー\ufffd?',", "ja:'ラグビーリーグ',");
content = content.replace("ko:'유로파리\ufffd?',", "ko:'유로파리그',");
content = content.replace("ko:'에레디비\ufffd?',", "ko:'에레디비시',");

// Fix page titles
content = content.replace("全赛事データ分析平\ufffd?- 实时赔率分析", "全赛事数据分析平台 - 实时赔率分析");
content = content.replace("リアルタイムオッズ分\ufffd?|", "リアルタイムオッズ分析 |");
content = content.replace("스포\ufffd?분석 - 실시\ufffd?배당\ufffd?분석", "스포츠 분석 - 실시간 배당률 분석");

// Fix channel icons
content = content.replace("{ icon: '\ufffd?', nameKey: 'chFIFA'", "{ icon: '⚽', nameKey: 'chFIFA'");
content = content.replace("{ icon: '\ufffd?', nameKey: 'chMLBtv'", "{ icon: '⚾', nameKey: 'chMLBtv'");

// Fix HTML template elements
content = content.replace('全赛事数据分\ufffd?</span>', '全赛事数据分析</span>');
content = content.replace('数据仅供参\ufffd?· 不构成任何建\ufffd?</div>', '数据仅供参考 · 不构成任何建议</div>');
content = content.replace('\ufffd?足球数据分析</h1>', '⚽ 足球数据分析</h1>');
content = content.replace('所有赛\ufffd?</div>', '所有赛事</div>');
content = content.replace('所有数据仅供分析参考\ufffd?</p>', '所有数据仅供分析参考。</p>');

// Fix Korean longer privacy strings with \ufffd? pattern
content = content.replace(
  /privacyP2: 'SportPredict\ufffd?다음 데이터만 수집합니\ufffd? 언어 기본 설정\(브라우저\ufffd?로컬 저\ufffd?, API 캐시 데이\ufffd?배당\ufffd?정보, 5\ufffd?\ufffd?만료\)\. 개인 식별 정보\ufffd?수집하지 않습니다\.',/g,
  "privacyP2: 'SportPredict는 다음 데이터만 수집합니다: 언어 기본 설정(브라우저에 로컬 저장), API 캐시 데이터(배당률 정보, 5분 후 만료). 개인 식별 정보는 수집하지 않습니다.',"
);

content = content.replace(
  /privacyP3: '\ufffd?웹사이트\ufffd?localStorage\ufffd?사용하여 언어 기본 설정\ufffd?쿠키 동의 상태\ufffd?저장합니다\. Google AdSense\ufffd?통해 쿠키\ufffd?사용하여 맞춤\ufffd?광고\ufffd?표시\ufffd?\ufffd? 있습니다\. 브라우저 설정에서 쿠키\ufffd?관리할 \ufffd?있습니다\.',/g,
  "privacyP3: '이 웹사이트는 localStorage를 사용하여 언어 기본 설정과 쿠키 동의 상태를 저장합니다. Google AdSense를 통해 쿠키를 사용하여 맞춤형 광고를 표시할 수 있습니다. 브라우저 설정에서 쿠키를 관리할 수 있습니다.',"
);

content = content.replace(
  /privacyH3: '\ufffd?\ufffd?서비\ufffd?',/g,
  "privacyH3: '제3자 서비스',"
);

content = content.replace(
  /privacyP4: 'The Odds API\ufffd?사용하여 스포\ufffd?배당\ufffd?데이터를 가져오\ufffd? Google AdSense\ufffd?사용하여 광고\ufffd?표시\ufffd?\ufffd? 있습니다\. 이러\ufffd?서비스에\ufffd?자체 개인정보 보호정책\ufffd?있습니다\.',/g,
  "privacyP4: 'The Odds API를 사용하여 스포츠 배당률 데이터를 가져오고 Google AdSense를 사용하여 광고를 표시할 수 있습니다. 이러한 서비스에는 자체 개인정보 보호정책이 있습니다.',"
);

content = content.replace(
  /privacyP5: 'GDPR\ufffd?따라 개인 데이터에 접근, 수정, 삭제\ufffd?권리가 있습니다\. 권리\ufffd?행사하려\ufffd?아래 연락처로 문의\ufffd?주세\ufffd?',/g,
  "privacyP5: 'GDPR에 따라 개인 데이터에 접근, 수정, 삭제할 권리가 있습니다. 권리를 행사하려면 아래 연락처로 문의해 주세요.',"
);

content = content.replace(/privacyH5: '연락\ufffd?',/g, "privacyH5: '연락처',");
content = content.replace(/privacyH1: '데이\ufffd?수집',/g, "privacyH1: '데이터 수집',");

content = content.replace(
  /aboutP1: 'SportPredict\ufffd?\ufffd?세계 스포\ufffd?애호가에게 시장 데이\ufffd?기반\ufffd?이벤\ufffd?통계 \ufffd?확률 분석\ufffd?제공하는 전문 스포\ufffd?데이\ufffd?분석 플랫폼입니다\.',/g,
  "aboutP1: 'SportPredict는 전 세계 스포츠 애호가에게 시장 데이터 기반의 이벤트 통계와 확률 분석을 제공하는 전문 스포츠 데이터 분석 플랫폼입니다.',"
);

content = content.replace(
  /aboutP2: '우리\ufffd?사명은 투명\ufffd?데이\ufffd?시각화를 통해 스포\ufffd?이벤트의 시장 확률\ufffd?통계\ufffd?추세\ufffd?이해하도\ufffd?돕는 것입니다\. 모든 분석은 공개 시장 데이터를 기반으로 수학\ufffd?모델\ufffd?사용하여 계산됩니\ufffd?',/g,
  "aboutP2: '우리의 사명은 투명한 데이터 시각화를 통해 스포츠 이벤트의 시장 확률과 통계적 추세를 이해하도록 돕는 것입니다. 모든 분석은 공개 시장 데이터를 기반으로 수학적 모델을 사용하여 계산됩니다.'"
);

content = content.replace(
  /aboutP3: '⚠️ 중요: SportPredict\ufffd?도박 서비스를 제공하지 않으\ufffd? 수수료를 부과하지 않으\ufffd? 어떤 형태\ufffd?도박\ufffd?장려하거\ufffd?촉진하지 않습니다\. \ufffd?사이트의 모든 콘텐츠는 정보 참고 \ufffd?학술 연구 목적으로\ufffd?제공됩니\ufffd?',/g,
  "aboutP3: '⚠️ 중요: SportPredict는 도박 서비스를 제공하지 않으며, 수수료를 부과하지 않으며, 어떤 형태의 도박도 장려하거나 촉진하지 않습니다. 이 사이트의 모든 콘텐츠는 정보 참고 및 학술 연구 목적입니다.'"
);

content = content.replace(
  /termsP1: '\ufffd?웹사이트\ufffd?사용함으로써 다음 약관\ufffd?동의하는 것으\ufffd?간주됩니\ufffd?',/g,
  "termsP1: '이 웹사이트를 사용함으로써 다음 약관에 동의하는 것으로 간주됩니다.',"
);

content = content.replace(
  /termsP2: '1\. \ufffd?사이트에\ufffd?제공하는 모든 데이\ufffd?\ufffd?분석은 참고용이\ufffd?베팅 조언\ufffd?구성하지 않습니다\.',/g,
  "termsP2: '1. 이 사이트에서 제공하는 모든 데이터와 분석은 참고용이며 베팅 조언을 구성하지 않습니다.',"
);

content = content.replace(
  /termsP3: '2\. 사용자는 데이터의 정확성과 적용성을 독립적으\ufffd?판단하고 사용 위험\ufffd?부담해\ufffd?합니\ufffd?',/g,
  "termsP3: '2. 사용자는 데이터의 정확성과 적용성을 독립적으로 판단하고 사용 위험을 부담해야 합니다.',"
);

content = content.replace(
  /termsP4: '3\. \ufffd?사이트의 콘텐츠는 지\ufffd?재산권으\ufffd?보호되며 허가 없이 복사하거\ufffd?재배포할 \ufffd?없습니다\.',/g,
  "termsP4: '3. 이 사이트의 콘텐츠는 지적 재산권으로 보호되며 허가 없이 복사하거나 재배포할 수 없습니다.',"
);

content = content.replace(
  /termsP5: '4\. \ufffd?사이트는 데이터의 실시간성\ufffd?정확성을 보장하지 않으\ufffd? 시장 데이터에 지연이 있을 \ufffd?있습니다\.',/g,
  "termsP5: '4. 이 사이트는 데이터의 실시간성과 정확성을 보장하지 않으며 시장 데이터에 지연이 있을 수 있습니다.',"
);

content = content.replace(
  /cookieText: '\ufffd?웹사이트\ufffd?쿠키\ufffd?사용하여 경험\ufffd?향상시키\ufffd? Google AdSense\ufffd?통해 광고\ufffd?표시\ufffd?\ufffd? 있습니다\. 계속 사용하면',/g,
  "cookieText: '이 웹사이트는 쿠키를 사용하여 경험을 향상시키고 Google AdSense를 통해 광고를 표시할 수 있습니다. 계속 사용하면',"
);

content = content.replace(
  /footerDisclaimer: '⚠️ SportPredict\ufffd?스포\ufffd?데이\ufffd?분석 플랫폼으\ufffd? 도박 서비스를 제공하지 않으\ufffd?수수료도 부과하지 않습니다\. 모든 데이터는 분석 참고용입니다\ufffd?',/g,
  "footerDisclaimer: '⚠️ SportPredict는 스포츠 데이터 분석 플랫폼으로 도박 서비스를 제공하지 않으며 수수료도 부과하지 않습니다. 모든 데이터는 분석 참고용입니다.',"
);

// Korean analysis panel
content = content.replace("oddsDiscrepancyFound: '배당\ufffd?차이 기회 발견!'", "oddsDiscrepancyFound: '배당률 차이 기회 발견!'");
content = content.replace("totalVotes: '\ufffd?투표 \ufffd?'", "totalVotes: '총 투표 수'");
content = content.replace("hottestVoteMatch: '가\ufffd?인기 있는 투표 경기'", "hottestVoteMatch: '가장 인기 있는 투표 경기'");
content = content.replace("basedOnOdds: '배당\ufffd?기반'", "basedOnOdds: '배당률 기반'");
content = content.replace("bookmakersProviding: '\ufffd?업체 배당\ufffd?제공'", "bookmakersProviding: '개 업체 배당률 제공'");
content = content.replace("whoWillWin: '누가 이길 \ufffd?같나\ufffd?'", "whoWillWin: '누가 이길 것 같나요?'");
content = content.replace("copiedToClipboard: '클립보드\ufffd?복사\ufffd?'", "copiedToClipboard: '클립보드에 복사됨'");
content = content.replace("noAnalysisData: '분석 데이\ufffd?없음. 리그\ufffd?먼저 선택하세\ufffd?'", "noAnalysisData: '분석 데이터 없음. 리그를 먼저 선택하세요'");

// Fav button template
content = content.replace("${favActive ? '\ufffd?' : '\ufffd?'}</button>", "${favActive ? '★' : '☆'}</button>");

// Other template items
content = content.replace("closeWatchModal()\">\ufffd?</button>", "closeWatchModal()\">✕</button>");
content = content.replace("scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">\ufffd?</button>", "scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">↑</button>");
content = content.replace("mobileMenuBtn\" onclick=\"openSidebarDrawer()\">\ufffd?</button>", "mobileMenuBtn\" onclick=\"openSidebarDrawer()\">☰</button>");
content = content.replace("searchClear\" onclick=\"clearSearch()\">\ufffd?</button>", "searchClear\" onclick=\"clearSearch()\">✕</button>");
content = content.replace("<span style=\"font-size:10px\">\ufffd?</span>", "<span style=\"font-size:10px\">▼</span>");
content = content.replace("<span class=\"emoji\">\ufffd?</span>", "<span class=\"emoji\">⚽</span>");

// Theme toggle
content = content.replace("'☀\ufffd?'", "'☀️'");

// Page title for favorites
content = content.replace("'🏆' + t('myFavorites')", "'⭐ ' + t('myFavorites')");

// Odds arrows
content = content.replace("<span class=\"odds-up\">\ufffd?</span>", "<span class=\"odds-up\">↑</span>");
content = content.replace("<span class=\"odds-down\">\ufffd?</span>", "<span class=\"odds-down\">↓</span>");

// Match status
content = content.replace("emoji: '\ufffd?', cssClass: 'finished'", "emoji: '✅', cssClass: 'finished'");
content = content.replace("emoji: '\ufffd?', cssClass: 'upcoming'", "emoji: '⏰', cssClass: 'upcoming'");

// Empty sport icons
content = content.replace("<div class=\"empty-icon\">\ufffd?</div>", "<div class=\"empty-icon\">⭐</div>");

// Channel link arrow
content = content.replace(">\ufffd?</a>", ">→</a>");

// API quota fallback
content = content.replace("'API额度已用完，请等待下月重\ufffd?'}", "'API额度已用完，请等待下月重置'}");
content = content.replace("'免费版每\ufffd?00次请\ufffd?'}", "'免费版每月500次请求'}");
content = content.replace("'点击上方联赛名加载赔率数\ufffd?'}", "'点击上方联赛名加载赔率数据'}");

// Combo comments
content = content.replace("// Same-sport 2\ufffd?", "// Same-sport 2-way");
content = content.replace("// 3\ufffd?", "// 3-way");

// Analysis findings
content = content.replace("<span style=\"color:#4ade80\">\ufffd?</span> ${t('homeTeam')}", "<span style=\"color:#4ade80\">●</span> ${t('homeTeam')}");
content = content.replace("<span style=\"color:#6e7681\">\ufffd?</span> ${t('draw')}", "<span style=\"color:#6e7681\">●</span> ${t('draw')}");
content = content.replace("<span style=\"color:#ef4444\">\ufffd?</span> ${t('awayTeam')}", "<span style=\"color:#ef4444\">●</span> ${t('awayTeam')}");

// Analysis separators
content = content.replace("${t('winRate')}\ufffd?${prob.homeProb}%\ufffd?${t('basedOnOdds')}\ufffd?", "${t('winRate')}：${prob.homeProb}%（${t('basedOnOdds')}）");
content = content.replace("${t('drawProbability')}\ufffd?${prob.drawProb}%", "${t('drawProbability')}：${prob.drawProb}%");
content = content.replace("${t('winRate')}\ufffd?${prob.awayProb}%", "${t('winRate')}：${prob.awayProb}%");

// Analysis finding items
content = content.replace("<div class=\"analysis-finding-item\">\ufffd?${numBookmakers}", "<div class=\"analysis-finding-item\">📊 ${numBookmakers}");
content = content.replace("<div class=\"analysis-finding-item\">\ufffd?${t('highest')}", "<div class=\"analysis-finding-item\">📈 ${t('highest')");
content = content.replace("style=\"color:#4ade80\">\ufffd?${t('oddsDiscrepancyFound')}", "style=\"color:#4ade80\">🌟 ${t('oddsDiscrepancyFound')");
content = content.replace("<div class=\"analysis-finding-item\">\ufffd?${t('marketTendency')}", "<div class=\"analysis-finding-item\">📊 ${t('marketTendency')");

// View all button arrow
content = content.replace("${t('viewAll')} \ufffd?</button>", "${t('viewAll')} →</button>");

// Korean sidebar footer in HTML
content = content.replace('데이터는 참고\ufffd?· 금융 조언\ufffd?아닙니다', '데이터는 참고용 · 금융 조언이 아닙니다');

// Russian aboutP1, aboutP2
content = content.replace(/aboutP1: 'SportPredict \ufffd?профессиональная[^']*'/g, "aboutP1: 'SportPredict — профессиональная платформа анализа спортивных данных, предназначенная для предоставления статистики событий и вероятностного анализа для любителей спорта по всему миру.'");
content = content.replace(/aboutP2: 'Наша миссия \ufffd?помочь пользователям понять[^']*'/g, "aboutP2: 'Наша миссия — помочь пользователям понять рыночные вероятности и статистические тенденции в спортивных событиях посредством прозрачной визуализации данных. Весь анализ основан на открытых рыночных данных с использованием математических моделей.'");
content = content.replace(/footerDisclaimer: '⚠️ SportPredict \ufffd?платформа анализа спортивных данных[^']*'/g, "footerDisclaimer: '⚠️ SportPredict — платформа анализа спортивных данных, не предоставляющая букмекерские услуги и не взимающая плату. Все данные для справки.'");

fs.writeFileSync(path, content, 'utf8');
const remaining = (content.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
