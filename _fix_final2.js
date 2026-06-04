const fs = require('fs');
let c = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');

// Fix remaining HTML template items using more flexible regex
c = c.replace(/closeWatchModal\(\)">[\ufffd].?<\/button>/g, "closeWatchModal()\">✕</button>");
c = c.replace(/scrollTopBtn[^>]*>[\ufffd].?<\/button>/g, "scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">↑</button>");
c = c.replace(/openSidebarDrawer\(\)">[\ufffd].?<\/button>/g, "openSidebarDrawer()\">☰</button>");
c = c.replace(/clearSearch\(\)">[\ufffd].?<\/button>/g, "clearSearch()\">✕</button>");
c = c.replace(/font-size:10px">[\ufffd].?<\/span>/g, "font-size:10px\">▼</span>");
c = c.replace(/class="emoji">[\ufffd].?<\/span>/g, "class=\"emoji\">⚽</span>");
c = c.replace(/分析参考[\ufffd].?<\/p>/g, "分析参考。</p>");

// Highest/lowest/votes remaining
c = c.replace(/highest: '最[\ufffd].?'/g, "highest: '最高'");
c = c.replace(/lowest: '最[\ufffd].?'/g, "lowest: '最低'");
c = c.replace(/votes: '[\ufffd].?'/g, "votes: '票'");

// Analysis spans
c = c.replace(/color:#4ade80">[\ufffd].?<\/span>/g, "color:#4ade80\">●</span>");
c = c.replace(/color:#6e7681">[\ufffd].?<\/span>/g, "color:#6e7681\">●</span>");
c = c.replace(/color:#ef4444">[\ufffd].?<\/span>/g, "color:#ef4444\">●</span>");

// Odds arrows
c = c.replace(/odds-up">[\ufffd].?<\/span>/g, "odds-up\">↑</span>");
c = c.replace(/odds-down">[\ufffd].?<\/span>/g, "odds-down\">↓</span>");

// Empty icon
c = c.replace(/empty-icon">[\ufffd].?<\/div>/g, "empty-icon\">⭐</div>");

// Channel link
c = c.replace(/nofollow">[\ufffd].?<\/a>/g, "nofollow\">→</a>");

// View all button
c = c.replace(/\$\{t\('viewAll'\)\} [\ufffd].?<\/button>/g, "${t('viewAll')} →</button>");

// Theme toggle
c = c.replace(/'☀[\ufffd].?;/g, "'☀️';");

// Fav button
c = c.replace(/favActive \? '[\ufffd].?' : '[\ufffd].?'/g, "favActive ? '★' : '☆'");
c = c.replace(/toggleFavorite\('[^']+', event\)">[\ufffd].?<\/button>/g, (m) => {
  return m.replace(/>[\ufffd].?<\/button>/, ">☆</button>");
});

// Analysis separators (in template literals)
c = c.replace(/\$\{t\('winRate'\)\}[\ufffd].?\$\{prob\.homeProb\}/g, "${t('winRate')}：${prob.homeProb}");
c = c.replace(/\$\{t\('drawProbability'\)\}[\ufffd].?\$\{prob\.drawProb\}/g, "${t('drawProbability')}：${prob.drawProb}");
c = c.replace(/\$\{t\('winRate'\)\}[\ufffd].?\$\{prob\.awayProb\}/g, "${t('winRate')}：${prob.awayProb}");
c = c.replace(/\$\{t\('basedOnOdds'\)\}[\ufffd].?/g, "${t('basedOnOdds')}）");
c = c.replace(/\$\{t\('highMarketAttention'\)\}[\ufffd].?/g, "${t('highMarketAttention')}】");
c = c.replace(/\$\{t\('bookmakersProviding'\)\}[\ufffd].?/g, "${t('bookmakersProviding')}】");
c = c.replace(/\$\{t\('marketTendency'\)\}[\ufffd].?/g, "${t('marketTendency')}：");

// Win rate separator pattern in the analysis findings block
c = c.replace(/\$\{t\('lastUpdated'\)\}[\ufffd].?/g, "${t('lastUpdated')}：");

fs.writeFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
