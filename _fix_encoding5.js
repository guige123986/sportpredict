const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const R = String.fromCharCode(0xFFFD) + '?'; // U+FFFD followed by literal ?

// Use a simple key-value approach: find R + context, replace with correct text
const fixes = [
  // Chinese NEW_I18N (second instance)
  [R + "分钟更新", "5分钟更新"],
  ["所有赛" + R, "所有赛事"],
  ["进行" + R, "进行中"],
  ["即将开" + R, "即将开始"],
  ["未开" + R, "未开始"],
  ["已结" + R, "已结束"],
  ["橄榄球联" + R, "橄榄球联赛"],
  ["队" + R + "..", "队伍..."],
  ["已收" + R, "已收藏"],
  ["已取消收" + R, "已取消收藏"],
  [R + "即将开" + R, "⏰ 即将开始"],
  ["🟢 进行" + R, "🟢 进行中"],
  [R + "高关注度", "🔥 高关注度"],
  ["{n}分钟" + R, "{n}分钟后"],
  ["{n}小时" + R, "{n}小时后"],
  ["已开" + R, "已开始"],

  // Chinese analysis panel
  ["被看" + R, "被看好"],
  ["发现赔率差异机会" + R, "发现赔率差异机会！"],
  ["最高" + R, "最高"], // highest - check context
  ["最低" + R, "最低"], // lowest
  ["最后更" + R, "最后更新"],
  ["家机构提供赔" + R, "家机构提供赔率"],
  ["已投" + R, "已投票"],
  ["投票成功" + R, "投票成功！"],
  ["已复制到剪贴" + R, "已复制到剪贴板"],

  // Japanese NEW_I18N
  ["予定されたイベントな" + R, "予定されたイベントなし"],
  ["最終更" + R, "最終更新"],
  ["すべて表" + R, "すべて表示"],
  ["全イベン" + R, "全イベント"],
  ["試合" + R, "試合中"],
  ["ラグビーリー" + R, "ラグビーリーグ"],
  ["機会あ" + R, "機会あり"],
  ["チームを検" + R + "..", "チームを検索..."],
  ["お気に入" + R, "お気に入り"],
  ["お気に入りな" + R, "お気に入りなし"],
  ["お気に入りから削" + R, "お気に入りから削除"],
  [R + "開始間近", "⏰ 開始間近"],
  [R + "高注" + R, "🔥 高注目"],
  ["{n}時間" + R, "{n}時間後"],
  ["開始" + R, "開始済"],

  // Japanese analysis panel
  ["市場の注目度" + R, "市場の注目度が高い"],
  ["投票統" + R, "投票統計"],
  ["オッズに基づ" + R, "オッズに基づく"],
  ["社がオッズ提" + R, "社がオッズ提供"],
  ["市場の傾" + R, "市場の傾向"],
  ["投票しました" + R, "投票しました！"],
  ["コピーしまし" + R, "コピーしました"],
  ["リーグを選択してください" + R, "リーグを選択してください。"],

  // Korean NEW_I18N
  ["전체 이벤" + R, "전체 이벤트"],
  ["종합격투" + R, "종합격투기"],
  ["경기 배당" + R + "차이 기회 있음", "경기 배당률 차이 기회 있음"],
  ["경기, 팀 검" + R + "..", "경기, 팀 검색..."],
  [R + R + "시작", "⏰ 곧 시작"],
  ["🟢 진행 " + R, "🟢 진행 중"],
  [R + "높은 관" + R, "🔥 높은 관심"],
  ["{n}" + R + R, "{n}분 후"], // timeMinutesLater
  ["{n}시간 " + R, "{n}시간 후"],
  ["시작" + R, "시작됨"],
  ["진행 " + R, "진행 중"],

  // Korean analysis panel
  ["마지" + R + "업데이트", "마지막 업데이트"],
  [R + "투표 " + R, "총 투표 수"],
  ["가" + R + "인기 있는 투표 경기", "가장 인기 있는 투표 경기"],
  ["배당" + R + "차이 기회 발견!", "배당률 차이 기회 발견!"],
  ["배당" + R + "기반", "배당률 기반"],
  [R + "업체 배당" + R + "제공", "개 업체 배당률 제공"],
  ["누가 이길 " + R + "같나" + R, "누가 이길 것 같나요?"],
  ["클립보드" + R + "복사" + R, "클립보드에 복사됨"],

  // LEAGUE_NAMES
  ["世界" + R, "世界杯"],
  ["ワールドカッ" + R, "ワールドカップ"],
  ["월드" + R, "월드컵"],
  ["プレミアリー" + R, "プレミアリーグ"],
  ["Jリー" + R, "Jリーグ"],
  ["ラ・リー" + R, "ラ・リーガ"],
  ["ブンデスリー" + R, "ブンデスリーガ"],
  ["コパ・リベルタドーレ" + R, "コパ・リベルタドーレス"],
  ["코파 리베르타도레" + R, "코파 리베르타도레스"],
  ["チャンピオンシッ" + R, "チャンピオンシップ"],
  ["리그" + R, "리그1"],
  ["墨西哥联" + R, "墨西哥联赛"],
  ["Aリー" + R, "Aリーグ"],
  ["欧国" + R, "欧国联"],
  ["超级橄榄" + R, "超级橄榄球"],
  ["NRL橄榄球联" + R, "NRL橄榄球联赛"],
  ["PGA高尔" + R, "PGA高尔夫"],
  ["유로파리" + R, "유로파리그"],
  ["에레디비" + R, "에레디비시"],
  ["スコティッシュ・プレミアシッ" + R, "スコティッシュ・プレミアシップ"],
  ["스코티시 프리미어" + R, "스코티시 프리미어십"],

  // Europa League double-文字 corruption
  ["ヨーロッパリーグ'リーグ", "ヨーロッパリーグ"],

  // Page titles
  ["全赛事数据分析平" + R, "全赛事数据分析平台"],
  ["リアルタイムオッズ分" + R, "リアルタイムオッズ分析"],
  ["스포" + R + "분석 - 실시", "스포츠 분석 - 실시간"],

  // Korean sidebarFooter in HTML
  ["데이터는 참고" + R + "· 금융 조언" + R + "아닙니다", "데이터는 참고용 · 금융 조언이 아닙니다"],

  // HTML template
  ["所有赛" + R + "</div>", "所有赛事</div>"],
  ["所有数据仅供分析参考" + R + "</p>", "所有数据仅供分析参考。</p>"],
  ["<span class=\"emoji\">" + R + "</span>", "<span class=\"emoji\">⚽</span>"],

  // Various template items
  ["closeWatchModal()\">" + R + "</button>", "closeWatchModal()\">✕</button>"],
  ["scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">" + R + "</button>", "scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">↑</button>"],
  ["mobileMenuBtn\" onclick=\"openSidebarDrawer()\">" + R + "</button>", "mobileMenuBtn\" onclick=\"openSidebarDrawer()\">☰</button>"],
  ["searchClear\" onclick=\"clearSearch()\">" + R + "</button>", "searchClear\" onclick=\"clearSearch()\">✕</button>"],
  ["<span style=\"font-size:10px\">" + R + "</span>", "<span style=\"font-size:10px\">▼</span>"],

  // GROUP_MAP emojis
  ["{ emoji: '" + R + "', i18nKey: 'sportSoccer'", "{ emoji: '⚽', i18nKey: 'sportSoccer'"],
  ["{ emoji: '" + R + "', i18nKey: 'sportBaseball'", "{ emoji: '⚾', i18nKey: 'sportBaseball'"],
  ["{ emoji: '" + R + "', i18nKey: 'sportGolf'", "{ emoji: '⛳', i18nKey: 'sportGolf'"],
  ["{ emoji: '" + R + "', i18nKey: 'sportFutsal'", "{ emoji: '⚽', i18nKey: 'sportFutsal'"],
  ["{ emoji: '🗳" + R + "', i18nKey: 'sportPolitics'", "{ emoji: '🗳️', i18nKey: 'sportPolitics'"],

  // Channel icons
  ["{ icon: '" + R + "', nameKey: 'chFIFA'", "{ icon: '⚽', nameKey: 'chFIFA'"],
  ["{ icon: '" + R + "', nameKey: 'chMLBtv'", "{ icon: '⚾', nameKey: 'chMLBtv'"],

  // Theme toggle
  ["'☀" + R + "'", "'☀️'"],

  // Fav button
  ["favActive ? '" + R + "' : '" + R + "'", "favActive ? '★' : '☆'"],

  // Fav page title
  ["'" + R + "' + t('myFavorites')", "'⭐ ' + t('myFavorites')"],

  // Odds arrows
  ["<span class=\"odds-up\">" + R + "</span>", "<span class=\"odds-up\">↑</span>"],
  ["<span class=\"odds-down\">" + R + "</span>", "<span class=\"odds-down\">↓</span>"],

  // Match status emoji
  ["emoji: '" + R + "', cssClass: 'finished'", "emoji: '✅', cssClass: 'finished'"],
  ["emoji: '" + R + "', cssClass: 'upcoming'", "emoji: '⏰', cssClass: 'upcoming'"],

  // Empty sport icon
  ["<div class=\"empty-icon\">" + R + "</div>", "<div class=\"empty-icon\">⭐</div>"],

  // Channel link arrow
  [">" + R + "</a>", ">→</a>"],

  // API quota fallback
  ["API额度已用完，请等待下月重" + R, "API额度已用完，请等待下月重置"],
  ["免费版每" + R + "00次请" + R, "免费版每月500次请求"],
  ["点击上方联赛名加载赔率数" + R, "点击上方联赛名加载赔率数据"],

  // Combo comments
  ["// Same-sport 2" + R, "// Same-sport 2-way"],
  ["// 3" + R, "// 3-way"],

  // Analysis spans
  ["<span style=\"color:#4ade80\">" + R + "</span> ${t('homeTeam')}", "<span style=\"color:#4ade80\">●</span> ${t('homeTeam')}"],
  ["<span style=\"color:#6e7681\">" + R + "</span> ${t('draw')}", "<span style=\"color:#6e7681\">●</span> ${t('draw')}"],
  ["<span style=\"color:#ef4444\">" + R + "</span> ${t('awayTeam')}", "<span style=\"color:#ef4444\">●</span> ${t('awayTeam')}"],

  // Analysis separators
  ["${t('winRate')}" + R + "${prob.homeProb}%", "${t('winRate')}：${prob.homeProb}%"],
  ["${t('drawProbability')}" + R + "${prob.drawProb}%", "${t('drawProbability')}：${prob.drawProb}%"],
  ["${t('winRate')}" + R + "${prob.awayProb}%", "${t('winRate')}：${prob.awayProb}%"],
  ["${t('basedOnOdds')}" + R, "${t('basedOnOdds')}）"],
  ["${t('highMarketAttention')}" + R, "${t('highMarketAttention')}】"],
  ["${t('bookmakersProviding')}" + R, "${t('bookmakersProviding')}】"],
  ["${t('highest')}${t('homeTeam')}${highestHome.odds.toFixed(2)}" + R, "${t('highest')}${t('homeTeam')}${highestHome.odds.toFixed(2)}（"],
  ["${t('marketTendency')}" + R, "${t('marketTendency')}："],
  ["${t('lastUpdated')}" + R, "${t('lastUpdated')}："],

  // View all button
  ["${t('viewAll')} " + R + "</button>", "${t('viewAll')} →</button>"],

  // Korean analysis panel continuation
  ["데이" + R + "없음. 리그" + R + "먼저 선택하세" + R, "데이터 없음. 리그를 먼저 선택하세요"],

  // Votes
  ["votes: '" + R + "'", "votes: '票'"],
];

for (const [bad, good] of fixes) {
  let count = 0;
  while (c.includes(bad) && count < 10) {
    c = c.replace(bad, good);
    count++;
  }
}

// Handle the highest/lowest context-dependent fix
// "highest: '最" + R -> "highest: '最高'"
c = c.replace(/highest: '最[\ufffd]\?'/g, "highest: '最高'");
c = c.replace(/lowest: '最[\ufffd]\?'/g, "lowest: '最低'");

// Handle remaining votes: ' replacements
c = c.replace(/votes: '[\ufffd]\?'/g, "votes: '票'");

// Korean long strings that need regex
c = c.replace(
  /privacyP2: 'SportPredict[\ufffd]\?다음 데이터만 수집합니[\ufffd]\?[^']*',/g,
  "privacyP2: 'SportPredict는 다음 데이터만 수집합니다: 언어 기본 설정(브라우저에 로컬 저장), API 캐시 데이터(배당률 정보, 5분 후 만료). 개인 식별 정보는 수집하지 않습니다.',"
);

c = c.replace(
  /privacyP3: '[\ufffd]\?웹사이트[\ufffd]\?localStorage[\ufffd]\?사용하여[^']*',/g,
  "privacyP3: '이 웹사이트는 localStorage를 사용하여 언어 기본 설정과 쿠키 동의 상태를 저장합니다. Google AdSense를 통해 쿠키를 사용하여 맞춤형 광고를 표시할 수 있습니다. 브라우저 설정에서 쿠키를 관리할 수 있습니다.',"
);

c = c.replace(
  /privacyH3: '[\ufffd]\?[\ufffd]\?서비[\ufffd]\?',/g,
  "privacyH3: '제3자 서비스',"
);

c = c.replace(
  /privacyP4: 'The Odds API[\ufffd]\?사용하여[^']*',/g,
  "privacyP4: 'The Odds API를 사용하여 스포츠 배당률 데이터를 가져오고 Google AdSense를 사용하여 광고를 표시할 수 있습니다. 이러한 서비스에는 자체 개인정보 보호정책이 있습니다.',"
);

c = c.replace(
  /privacyP5: 'GDPR[\ufffd]\?따라[^']*',/g,
  "privacyP5: 'GDPR에 따라 개인 데이터에 접근, 수정, 삭제할 권리가 있습니다. 권리를 행사하려면 아래 연락처로 문의해 주세요.',"
);

c = c.replace(/privacyH5: '연락[\ufffd]\?',/g, "privacyH5: '연락처',");
c = c.replace(/privacyH1: '데이[\ufffd]\?수집',/g, "privacyH1: '데이터 수집',");

c = c.replace(
  /aboutP1: 'SportPredict[\ufffd]\?[\ufffd]\?세계 스포[\ufffd]\?애호가에게[^']*',/g,
  "aboutP1: 'SportPredict는 전 세계 스포츠 애호가에게 시장 데이터 기반의 이벤트 통계와 확률 분석을 제공하는 전문 스포츠 데이터 분석 플랫폼입니다.',"
);

c = c.replace(
  /aboutP2: '우리[\ufffd]\?사명은[^']*',/g,
  "aboutP2: '우리의 사명은 투명한 데이터 시각화를 통해 스포츠 이벤트의 시장 확률과 통계적 추세를 이해하도록 돕는 것입니다. 모든 분석은 공개 시장 데이터를 기반으로 수학적 모델을 사용하여 계산됩니다.'"
);

c = c.replace(
  /aboutP3: '⚠️ 중요: SportPredict[\ufffd]\?도박[^']*',/g,
  "aboutP3: '⚠️ 중요: SportPredict는 도박 서비스를 제공하지 않으며, 수수료를 부과하지 않으며, 어떤 형태의 도박도 장려하거나 촉진하지 않습니다. 이 사이트의 모든 콘텐츠는 정보 참고 및 학술 연구 목적입니다.'"
);

c = c.replace(
  /termsP1: '[\ufffd]\?웹사이트[\ufffd]\?사용함으로써[^']*',/g,
  "termsP1: '이 웹사이트를 사용함으로써 다음 약관에 동의하는 것으로 간주됩니다.',"
);

c = c.replace(
  /termsP2: '1\. [\ufffd]\?사이트에[\ufffd]\?제공하는[^']*',/g,
  "termsP2: '1. 이 사이트에서 제공하는 모든 데이터와 분석은 참고용이며 베팅 조언을 구성하지 않습니다.',"
);

c = c.replace(
  /termsP3: '2\. 사용자는 데이터의 정확성과 적용성을 독립적으[\ufffd]\?[^']*',/g,
  "termsP3: '2. 사용자는 데이터의 정확성과 적용성을 독립적으로 판단하고 사용 위험을 부담해야 합니다.',"
);

c = c.replace(
  /termsP4: '3\. [\ufffd]\?사이트의 콘텐츠는 지[\ufffd]\?[^']*',/g,
  "termsP4: '3. 이 사이트의 콘텐츠는 지적 재산권으로 보호되며 허가 없이 복사하거나 재배포할 수 없습니다.',"
);

c = c.replace(
  /termsP5: '4\. [\ufffd]\?사이트는 데이터의[^']*',/g,
  "termsP5: '4. 이 사이트는 데이터의 실시간성과 정확성을 보장하지 않으며 시장 데이터에 지연이 있을 수 있습니다.',"
);

c = c.replace(
  /cookieText: '[\ufffd]\?웹사이트[\ufffd]\?쿠키[\ufffd]\?[^']*',/g,
  "cookieText: '이 웹사이트는 쿠키를 사용하여 경험을 향상시키고 Google AdSense를 통해 광고를 표시할 수 있습니다. 계속 사용하면',"
);

c = c.replace(
  /footerDisclaimer: '⚠️ SportPredict[\ufffd]\?스포[\ufffd]\?[^']*',/g,
  "footerDisclaimer: '⚠️ SportPredict는 스포츠 데이터 분석 플랫폼으로 도박 서비스를 제공하지 않으며 수수료도 부과하지 않습니다. 모든 데이터는 분석 참고용입니다.',"
);

// Korean analysis long strings
c = c.replace(
  /privacyP1: '최종 업데이트: 2026[\ufffd]\?6[\ufffd]\?3[\ufffd]\?',/g,
  "privacyP1: '최종 업데이트: 2026년6월3일',"
);

// Korean noAnalysisData
c = c.replace(
  /noAnalysisData: '분석 데이[\ufffd]\?없음\. 리그[\ufffd]\?먼저 선택하세[\ufffd]\?',/g,
  "noAnalysisData: '분석 데이터 없음. 리그를 먼저 선택하세요',"
);

// Fix duplicated text from earlier partial replacement (Europa League)
c = c.replace("ヨーロッパリーグ'リーグ", "ヨーロッパリーグ'");

// Fix Primeira Liga double text
c = c.replace("プリメイラ・リーガ'イラ・リー" + R, "プリメイラ・リーガ'");

fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
