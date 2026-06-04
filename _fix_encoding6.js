const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const R = String.fromCharCode(0xFFFD) + '?';

// Final cleanup pass - fix remaining corrupted patterns

// HTML template buttons
c = c.replace('closeWatchModal()">' + R + '</button>', "closeWatchModal()\">✕</button>");
c = c.replace("scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">" + R + '</button>', "scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">↑</button>");
c = c.replace('mobileMenuBtn\" onclick="openSidebarDrawer()">' + R + '</button>', "mobileMenuBtn\" onclick=\"openSidebarDrawer()\">☰</button>");
c = c.replace('searchClear\" onclick="clearSearch()">' + R + '</button>', "searchClear\" onclick=\"clearSearch()\">✕</button>");
c = c.replace('<span style=\"font-size:10px\">' + R + '</span>', '<span style=\"font-size:10px\">▼</span>');
c = c.replace('<span class=\"emoji\">' + R + '</span>', '<span class=\"emoji\">⚽</span>');
c = c.replace('所有数据仅供分析参考' + R + '</p>', '所有数据仅供分析参考。</p>');

// LEAGUE_NAMES UEFA Nations League
c = c.replace("zh:'欧国联,", "zh:'欧国联',");
c = c.replace("ja:'UEFAネーションズリー" + R, "ja:'UEFAネーションズリーグ'");

// GROUP_MAP emojis
c = c.replace("{ emoji: '" + R + ", i18nKey: 'sportSoccer'", "{ emoji: '⚽', i18nKey: 'sportSoccer'");
c = c.replace("{ emoji: '" + R + ", i18nKey: 'sportBaseball'", "{ emoji: '⚾', i18nKey: 'sportBaseball'");
c = c.replace("{ emoji: '" + R + ", i18nKey: 'sportGolf'", "{ emoji: '⛳', i18nKey: 'sportGolf'");
c = c.replace("{ emoji: '" + R + ", i18nKey: 'sportFutsal'", "{ emoji: '⚽', i18nKey: 'sportFutsal'");
c = c.replace("{ emoji: '🗳" + R + ", i18nKey: 'sportPolitics'", "{ emoji: '🗳️', i18nKey: 'sportPolitics'");

// Channel icons
c = c.replace("{ icon: '" + R + ", nameKey: 'chFIFA'", "{ icon: '⚽', nameKey: 'chFIFA'");
c = c.replace("{ icon: '" + R + ", nameKey: 'chMLBtv'", "{ icon: '⚾', nameKey: 'chMLBtv'");

// Match status emoji
c = c.replace("emoji: '" + R + ", cssClass: 'finished'", "emoji: '✅', cssClass: 'finished'");
c = c.replace("emoji: '" + R + ", cssClass: 'upcoming'", "emoji: '⏰', cssClass: 'upcoming'");

// View all button arrow
c = c.replaceAll("${t('viewAll')} " + R + "</button>", "${t('viewAll')} →</button>");

// Channel link arrow
c = c.replaceAll(">" + R + "</a>", ">→</a>");

// Theme toggle
c = c.replaceAll("'☀" + R + ";", "'☀️';");

// Empty sport icon
c = c.replaceAll("<div class=\"empty-icon\">" + R + "</div>", "<div class=\"empty-icon\">⭐</div>");

// Odds arrows
c = c.replaceAll("<span class=\"odds-up\">" + R + "</span>", "<span class=\"odds-up\">↑</span>");
c = c.replaceAll("<span class=\"odds-down\">" + R + "</span>", "<span class=\"odds-down\">↓</span>");

// Fav button
c = c.replaceAll("favActive ? '" + R + " : '" + R + "'}</button>", "favActive ? '★' : '☆'}</button>");
c = c.replaceAll(">" + R + "</button>", ">☆</button>"); // remaining unfav buttons

// Analysis spans
c = c.replaceAll("<span style=\"color:#4ade80\">" + R + "</span>", "<span style=\"color:#4ade80\">●</span>");
c = c.replaceAll("<span style=\"color:#6e7681\">" + R + "</span>", "<span style=\"color:#6e7681\">●</span>");
c = c.replaceAll("<span style=\"color:#ef4444\">" + R + "</span>", "<span style=\"color:#ef4444\">●</span>");

// Analysis separators - the remaining ones have R without ? pattern
const R2 = String.fromCharCode(0xFFFD);
c = c.replaceAll("${t('winRate')}" + R2 + "${prob.homeProb}%", "${t('winRate')}：${prob.homeProb}%");
c = c.replaceAll("${t('drawProbability')}" + R2 + "${prob.drawProb}%", "${t('drawProbability')}：${prob.drawProb}%");
c = c.replaceAll("${t('winRate')}" + R2 + "${prob.awayProb}%", "${t('winRate')}：${prob.awayProb}%");
c = c.replaceAll("${t('basedOnOdds')}" + R2, "${t('basedOnOdds')}）");
c = c.replaceAll("${t('highMarketAttention')}" + R2, "${t('highMarketAttention')}】");
c = c.replaceAll("${t('bookmakersProviding')}" + R2, "${t('bookmakersProviding')}】");

// Highest analysis finding
c = c.replace("${t('highest')${t('homeTeam')}", "${t('highest')}${t('homeTeam')}");
c = c.replaceAll("highestHome.odds.toFixed(2)}" + R2 + "{highestHome.bookmaker}", "highestHome.odds.toFixed(2)}（{highestHome.bookmaker}");

// Market tendency
c = c.replaceAll("${t('marketTendency')}" + R2 + "{favored}", "${t('marketTendency')}：{favored}");

// Last updated
c = c.replaceAll("${t('lastUpdated')}" + R2 + "{new Date()", "${t('lastUpdated')}：{new Date()");

// Votes - remaining
c = c.replaceAll("votes: '" + R2 + "'", "votes: '票'");
c = c.replaceAll("votes: '" + R + "'", "votes: '票'");

// highest/lowest without R pattern
c = c.replaceAll("highest: '最" + R2 + "'", "highest: '最高'");
c = c.replaceAll("highest: '最" + R + "'", "highest: '最高'");
c = c.replaceAll("lowest: '最" + R2 + "'", "lowest: '最低'");
c = c.replaceAll("lowest: '最" + R + "'", "lowest: '最低'");

// filterUpcoming remaining
c = c.replace("filterUpcoming: '" + R + "即将开始,", "filterUpcoming: '⏰ 即将开始',");

// UEFA Nations League zh fix
c = c.replace("zh:'欧国联,", "zh:'欧国联',");

// Write
fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
