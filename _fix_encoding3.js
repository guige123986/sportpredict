const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let content = fs.readFileSync(path, 'utf8');
const R = '\ufffd'; // replacement char

// ===== Fix HTML template static content =====
content = content.replace('全赛事数据分' + R + '/span></div>', '全赛事数据分析</span></div>');
content = content.replace('数据仅供参' + R + '· 不构成任何建' + R + '/div>', '数据仅供参考 · 不构成任何建议</div>');
content = content.replace(R + '足球数据分析</h1>', '⚽ 足球数据分析</h1>');
content = content.replace('所有赛' + R + '/div>', '所有赛事</div>');
content = content.replace('所有数据仅供分析参考' + R + '/p>', '所有数据仅供分析参考。</p>');

// Fix sidebar nav emoji
content = content.replace('<span class="emoji">' + R + '</span>', '<span class="emoji">⚽</span>');

// Fix modal close, scroll-top, menu, search buttons
content = content.replace('closeWatchModal()">' + R + '</button>', "closeWatchModal()\">✕</button>");
content = content.replace("scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">" + R + '</button>', "scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">↑</button>");
content = content.replace('mobileMenuBtn" onclick="openSidebarDrawer()">' + R + '</button>', "mobileMenuBtn\" onclick=\"openSidebarDrawer()\">☰</button>");
content = content.replace('searchClear" onclick="clearSearch()">' + R + '</button>', "searchClear\" onclick=\"clearSearch()\">✕</button>");
content = content.replace('<span style="font-size:10px">' + R + '</span>', '<span style="font-size:10px">▼</span>');

// Fix footerDisclaimer HTML
content = content.replace('所有数据仅供分析参考' + R + '/p>', '所有数据仅供分析参考。</p>');

// ===== Fix NEW_I18N (second copy of i18n data) =====
// zh
content = content.replace("every5Min: '" + R + "分钟更新'", "every5Min: '5分钟更新'");
content = content.replace("tabAllEvents: '所有赛" + R + "',", "tabAllEvents: '所有赛事',");
content = content.replace("matchLive: '进行" + R + "',", "matchLive: '进行中',");
content = content.replace("matchUpcoming: '即将开" + R + "',", "matchUpcoming: '即将开始',");
content = content.replace("matchScheduled: '未开" + R + "',", "matchScheduled: '未开始',");
content = content.replace("matchFinished: '已结" + R + "',", "matchFinished: '已结束',");
content = content.replace("sportRugbyLeague: '橄榄球联" + R + "',", "sportRugbyLeague: '橄榄球联赛',");
content = content.replace("searchPlaceholder: '搜索比赛、队" + R + "..',", "searchPlaceholder: '搜索比赛、队伍...',");
content = content.replace("favAdded: '已收" + R + "',", "favAdded: '已收藏',");
content = content.replace("favRemoved: '已取消收" + R + "',", "favRemoved: '已取消收藏',");
content = content.replace("filterUpcoming: '" + R + "即将开" + R + "',", "filterUpcoming: '⏰ 即将开始',");
content = content.replace("filterLive: '🟢 进行" + R + "',", "filterLive: '🟢 进行中',");
content = content.replace("filterHighAttention: '" + R + "高关注度',", "filterHighAttention: '🔥 高关注度',");
content = content.replace("timeMinutesLater: '{n}分钟" + R + "',", "timeMinutesLater: '{n}分钟后',");
content = content.replace("timeHoursLater: '{n}小时" + R + "',", "timeHoursLater: '{n}小时后',");
content = content.replace("timeStarted: '已开" + R + "',", "timeStarted: '已开始',");

// en
content = content.replace("filterUpcoming: '" + R + "Starting Soon',", "filterUpcoming: '⏰ Starting Soon',");
content = content.replace("filterHighAttention: '" + R + "High Attention',", "filterHighAttention: '🔥 High Attention',");

// es
content = content.replace("filterUpcoming: '" + R + "Pr\u00f3ximo',", "filterUpcoming: '⏰ Próximo',");
content = content.replace("filterHighAttention: '" + R + "Alta atenci\u00f3n',", "filterHighAttention: '🔥 Alta atención',");

// pt
content = content.replace("filterUpcoming: '" + R + "Em breve',", "filterUpcoming: '⏰ Em breve',");
content = content.replace("filterHighAttention: '" + R + "Alta aten\u00e7\u00e3o',", "filterHighAttention: '🔥 Alta atenção',");

// ar
content = content.replace("filterUpcoming: '" + R + "\u0642ريباً',", "filterUpcoming: '⏰ قريباً',");
content = content.replace("filterHighAttention: '" + R + "\u0627هتمام عالي',", "filterHighAttention: '🔥 اهتمام عالي',");

// ja NEW_I18N
content = content.replace("noEvents: '予定されたイベントな" + R + "',", "noEvents: '予定されたイベントなし',");
content = content.replace("lastRefresh: '最終更" + R + "',", "lastRefresh: '最終更新',");
content = content.replace("viewAll: 'すべて表" + R + "',", "viewAll: 'すべて表示',");
content = content.replace("tabAllEvents: '全イベン" + R + "',", "tabAllEvents: '全イベント',");
content = content.replace("matchLive: '試合" + R + "',", "matchLive: '試合中',");
content = content.replace("sportRugbyLeague: 'ラグビーリー" + R + "',", "sportRugbyLeague: 'ラグビーリーグ',");
content = content.replace("arbOpportunityCount: '{count}試合にオッズ差異の機会あ" + R + "',", "arbOpportunityCount: '{count}試合にオッズ差異の機会あり',");
content = content.replace("searchPlaceholder: '試合、チームを検" + R + "..',", "searchPlaceholder: '試合、チームを検索...',");
content = content.replace("myFavorites: 'お気に入" + R + "',", "myFavorites: 'お気に入り',");
content = content.replace("noFavorites: 'お気に入りな" + R + "',", "noFavorites: 'お気に入りなし',");
content = content.replace("favRemoved: 'お気に入りから削" + R + "',", "favRemoved: 'お気に入りから削除',");
content = content.replace("filterUpcoming: '" + R + "開始間近',", "filterUpcoming: '⏰ 開始間近',");
content = content.replace("filterLive: '🟢 試合" + R + "',", "filterLive: '🟢 試合中',");
content = content.replace("filterHighAttention: '" + R + "高注" + R + "',", "filterHighAttention: '🔥 高注目',");
content = content.replace("timeHoursLater: '{n}時間" + R + "',", "timeHoursLater: '{n}時間後',");
content = content.replace("timeStarted: '開始" + R + "',", "timeStarted: '開始済',");

// ko NEW_I18N
content = content.replace("noEvents: '予定されたイベントな" + R + "'", "noEvents: '予定されたイベントなし'"); // in case of different quote style
content = content.replace("noEvents: '예정" + R + "이벤" + R + "없음',", "noEvents: '예정된 이벤트 없음',");
content = content.replace("every5Min: '5분마" + R + "업데이트',", "every5Min: '5분마다 업데이트',");
content = content.replace("lastRefresh: '마지" + R + "새로고침',", "lastRefresh: '마지막 새로고침',");
content = content.replace("tabAllEvents: '전체 이벤" + R + "',", "tabAllEvents: '전체 이벤트',");
content = content.replace("matchLive: '진행 " + R + "',", "matchLive: '진행 중',");
content = content.replace("matchUpcoming: '" + R + "시작',", "matchUpcoming: '곧 시작',");
content = content.replace("sportMixedMartialArts: '종합격투" + R + "',", "sportMixedMartialArts: '종합격투기',");
content = content.replace("arbOpportunityCount: '{count}경기 배당" + R + "차이 기회 있음',", "arbOpportunityCount: '{count}경기 배당률 차이 기회 있음',");
content = content.replace("searchPlaceholder: '경기, 팀 검" + R + "..',", "searchPlaceholder: '경기, 팀 검색...',");
content = content.replace("filterUpcoming: '" + R + R + "시작',", "filterUpcoming: '⏰ 곧 시작',");
content = content.replace("filterLive: '🟢 진행 " + R + "',", "filterLive: '🟢 진행 중',");
content = content.replace("filterHighAttention: '" + R + "높은 관" + R + "',", "filterHighAttention: '🔥 높은 관심',");
content = content.replace("timeMinutesLater: '{n}" + R + R + "',", "timeMinutesLater: '{n}분 후',");
content = content.replace("timeHoursLater: '{n}시간 " + R + "',", "timeHoursLater: '{n}시간 후',");
content = content.replace("timeDaysLater: '{n}" + R + R + "',", "timeDaysLater: '{n}일 후',");
content = content.replace("timeStarted: '시작" + R + "',", "timeStarted: '시작됨',");

// ru
content = content.replace("filterUpcoming: '" + R + "Скоро',", "filterUpcoming: '⏰ Скоро',");
content = content.replace("filterHighAttention: '" + R + "Высокий интерес',", "filterHighAttention: '🔥 Высокий интерес',");

// fr
content = content.replace("filterUpcoming: '" + R + "Bient\u00f4t',", "filterUpcoming: '⏰ Bientôt',");
content = content.replace("filterHighAttention: '" + R + "Forte attention',", "filterHighAttention: '🔥 Forte attention',");

// de
content = content.replace("filterUpcoming: '" + R + "Bald',", "filterUpcoming: '⏰ Bald',");
content = content.replace("filterHighAttention: '" + R + "Hohe Aufmerksamkeit',", "filterHighAttention: '🔥 Hohe Aufmerksamkeit',");

// Fav button
content = content.replace("${favActive ? '" + R + " : '" + R + "'}</button>", "${favActive ? '★' : '☆'}</button>");

// Korean privacy long strings - use broader regex
content = content.replace(
  /privacyP2: 'SportPredict[\ufffd]다음 데이터만 수집합니[\ufffd] 언어 기본 설정\(브라우저[\ufffd]로컬 저[\ufffd], API 캐시 데이[\ufffd]배당[\ufffd]정보, 5[\ufffd][\ufffd]만료\)\. 개인 식별 정보[\ufffd]수집하지 않습니다\.',/g,
  "privacyP2: 'SportPredict는 다음 데이터만 수집합니다: 언어 기본 설정(브라우저에 로컬 저장), API 캐시 데이터(배당률 정보, 5분 후 만료). 개인 식별 정보는 수집하지 않습니다.',"
);

content = content.replace(
  /privacyP3: '[\ufffd]웹사이트[\ufffd]localStorage[\ufffd]사용하여 언어 기본 설정[\ufffd]쿠키 동의 상태[\ufffd]저장합니다\. Google AdSense[\ufffd]통해 쿠키[\ufffd]사용하여 맞춤[\ufffd]광고[\ufffd]표시[\ufffd][\ufffd] 있습니다\. 브라우저 설정에서 쿠키[\ufffd]관리할 [\ufffd]있습니다\.',/g,
  "privacyP3: '이 웹사이트는 localStorage를 사용하여 언어 기본 설정과 쿠키 동의 상태를 저장합니다. Google AdSense를 통해 쿠키를 사용하여 맞춤형 광고를 표시할 수 있습니다. 브라우저 설정에서 쿠키를 관리할 수 있습니다.',"
);

content = content.replace(
  /privacyH3: '[\ufffd][\ufffd]서비[\ufffd]',/g,
  "privacyH3: '제3자 서비스',"
);

content = content.replace(
  /privacyP4: 'The Odds API[\ufffd]사용하여 스포[\ufffd]배당[\ufffd]데이터를 가져오[\ufffd] Google AdSense[\ufffd]사용하여 광고[\ufffd]표시[\ufffd][\ufffd] 있습니다\. 이러[\ufffd]서비스에[\ufffd]자체 개인정보 보호정책[\ufffd]있습니다\.',/g,
  "privacyP4: 'The Odds API를 사용하여 스포츠 배당률 데이터를 가져오고 Google AdSense를 사용하여 광고를 표시할 수 있습니다. 이러한 서비스에는 자체 개인정보 보호정책이 있습니다.',"
);

content = content.replace(
  /privacyP5: 'GDPR[\ufffd]따라 개인 데이터에 접근, 수정, 삭제[\ufffd]권리가 있습니다\. 권리[\ufffd]행사하려[\ufffd]아래 연락처로 문의[\ufffd]주세[\ufffd]',/g,
  "privacyP5: 'GDPR에 따라 개인 데이터에 접근, 수정, 삭제할 권리가 있습니다. 권리를 행사하려면 아래 연락처로 문의해 주세요.',"
);

content = content.replace(
  /privacyH5: '연락[\ufffd]',/g,
  "privacyH5: '연락처',"
);

content = content.replace(
  /aboutP1: 'SportPredict[\ufffd][\ufffd]세계 스포[\ufffd]애호가에게 시장 데이[\ufffd]기반[\ufffd]이벤[\ufffd]통계 [\ufffd]확률 분석[\ufffd]제공하는 전문 스포[\ufffd]데이[\ufffd]분석 플랫폼입니다\.',/g,
  "aboutP1: 'SportPredict는 전 세계 스포츠 애호가에게 시장 데이터 기반의 이벤트 통계와 확률 분석을 제공하는 전문 스포츠 데이터 분석 플랫폼입니다.',"
);

content = content.replace(
  /aboutP2: '우리[\ufffd]사명은 투명[\ufffd]데이[\ufffd]시각화를 통해 스포[\ufffd]이벤트의 시장 확률[\ufffd]통계[\ufffd]추세[\ufffd]이해하도[\ufffd]돕는 것입니다\. 모든 분석은 공개 시장 데이터를 기반으로 수학[\ufffd]모델[\ufffd]사용하여 계산됩니[\ufffd]',/g,
  "aboutP2: '우리의 사명은 투명한 데이터 시각화를 통해 스포츠 이벤트의 시장 확률과 통계적 추세를 이해하도록 돕는 것입니다. 모든 분석은 공개 시장 데이터를 기반으로 수학적 모델을 사용하여 계산됩니다.'"
);

content = content.replace(
  /aboutP3: '⚠️ 중요: SportPredict[\ufffd]도박 서비스를 제공하지 않으[\ufffd] 수수료를 부과하지 않으[\ufffd] 어떤 형태[\ufffd]도박[\ufffd]장려하거[\ufffd]촉진하지 않습니다\. [\ufffd]사이트의 모든 콘텐츠는 정보 참고 [\ufffd]학술 연구 목적으로[\ufffd]제공됩니[\ufffd]',/g,
  "aboutP3: '⚠️ 중요: SportPredict는 도박 서비스를 제공하지 않으며, 수수료를 부과하지 않으며, 어떤 형태의 도박도 장려하거나 촉진하지 않습니다. 이 사이트의 모든 콘텐츠는 정보 참고 및 학술 연구 목적입니다.'"
);

content = content.replace(
  /termsP1: '[\ufffd]웹사이트[\ufffd]사용함으로써 다음 약관[\ufffd]동의하는 것으[\ufffd]간주됩니[\ufffd]',/g,
  "termsP1: '이 웹사이트를 사용함으로써 다음 약관에 동의하는 것으로 간주됩니다.',"
);

content = content.replace(
  /termsP2: '1\. [\ufffd]사이트에[\ufffd]제공하는 모든 데이[\ufffd][\ufffd]분석은 참고용이[\ufffd]베팅 조언[\ufffd]구성하지 않습니다\.',/g,
  "termsP2: '1. 이 사이트에서 제공하는 모든 데이터와 분석은 참고용이며 베팅 조언을 구성하지 않습니다.',"
);

content = content.replace(
  /termsP3: '2\. 사용자는 데이터의 정확성과 적용성을 독립적으[\ufffd]판단하고 사용 위험[\ufffd]부담해[\ufffd]합니[\ufffd]',/g,
  "termsP3: '2. 사용자는 데이터의 정확성과 적용성을 독립적으로 판단하고 사용 위험을 부담해야 합니다.',"
);

content = content.replace(
  /termsP4: '3\. [\ufffd]사이트의 콘텐츠는 지[\ufffd]재산권으[\ufffd]보호되며 허가 없이 복사하거[\ufffd]재배포할 [\ufffd]없습니다\.',/g,
  "termsP4: '3. 이 사이트의 콘텐츠는 지적 재산권으로 보호되며 허가 없이 복사하거나 재배포할 수 없습니다.',"
);

content = content.replace(
  /termsP5: '4\. [\ufffd]사이트는 데이터의 실시간성[\ufffd]정확성을 보장하지 않으[\ufffd] 시장 데이터에 지연이 있을 [\ufffd]있습니다\.',/g,
  "termsP5: '4. 이 사이트는 데이터의 실시간성과 정확성을 보장하지 않으며 시장 데이터에 지연이 있을 수 있습니다.',"
);

content = content.replace(
  /cookieText: '[\ufffd]웹사이트[\ufffd]쿠키[\ufffd]사용하여 경험[\ufffd]향상시키[\ufffd] Google AdSense[\ufffd]통해 광고[\ufffd]표시[\ufffd][\ufffd] 있습니다\. 계속 사용하면',/g,
  "cookieText: '이 웹사이트는 쿠키를 사용하여 경험을 향상시키고 Google AdSense를 통해 광고를 표시할 수 있습니다. 계속 사용하면',"
);

content = content.replace(
  /footerDisclaimer: '⚠️ SportPredict[\ufffd]스포[\ufffd]데이[\ufffd]분석 플랫폼으[\ufffd] 도박 서비스를 제공하지 않으[\ufffd]수수료도 부과하지 않습니다\. 모든 데이터는 분석 참고용입니다[\ufffd]',/g,
  "footerDisclaimer: '⚠️ SportPredict는 스포츠 데이터 분석 플랫폼으로 도박 서비스를 제공하지 않으며 수수료도 부과하지 않습니다. 모든 데이터는 분석 참고용입니다.',"
);

content = content.replace(
  /privacyP1: '최종 업데이트: 2026[\ufffd]6[\ufffd]3[\ufffd]',/g,
  "privacyP1: '최종 업데이트: 2026년6월3일',"
);

content = content.replace(
  /privacyH1: '데이[\ufffd]수집',/g,
  "privacyH1: '데이터 수집',"
);

// Write
fs.writeFileSync(path, content, 'utf8');
const remaining = (content.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
