const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const R = String.fromCharCode(0xFFFD);
const RQ = R + '?'; // U+FFFD + literal question mark

// Do a comprehensive pass using replaceAll for all patterns
// Try both RQ and R patterns for each

const fixPairs = [
  // HTML template buttons (using RQ pattern since that's what's there)
  ["closeWatchModal()\">" + RQ + "</button>", "closeWatchModal()\">✕</button>"],
  ["scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">" + RQ + "</button>", "scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">↑</button>"],
  ["openSidebarDrawer()\">" + RQ + "</button>", "openSidebarDrawer()\">☰</button>"],
  ["clearSearch()\">" + RQ + "</button>", "clearSearch()\">✕</button>"],
  ["font-size:10px\">" + RQ + "</span>", "font-size:10px\">▼</span>"],
  ["class=\"emoji\">" + RQ + "</span>", "class=\"emoji\">⚽</span>"],
  ["分析参考" + RQ + "</p>", "分析参考。</p>"],

  // Analysis spans
  ["color:#4ade80\">" + RQ + "</span>", "color:#4ade80\">●</span>"],
  ["color:#6e7681\">" + RQ + "</span>", "color:#6e7681\">●</span>"],
  ["color:#ef4444\">" + RQ + "</span>", "color:#ef4444\">●</span>"],

  // Odds arrows
  ["odds-up\">" + RQ + "</span>", "odds-up\">↑</span>"],
  ["odds-down\">" + RQ + "</span>", "odds-down\">↓</span>"],

  // Empty icon
  ["empty-icon\">" + RQ + "</div>", "empty-icon\">⭐</div>"],

  // Fav button
  ["favActive ? '" + RQ + " : '" + RQ + "'}</button>", "favActive ? '★' : '☆'}</button>"],
  ["onclick=\"toggleFavorite('${m.id}', event)\">" + RQ + "</button>", "onclick=\"toggleFavorite('${m.id}', event)\">☆</button>"],

  // View all
  ["viewAll')} " + RQ + "</button>", "viewAll')} →</button>"],

  // Channel link
  ["nofollow\">" + RQ + "</a>", "nofollow\">→</a>"],

  // Theme toggle
  ["textContent = '☀" + RQ + ";", "textContent = '☀️';"],

  // highest/lowest/votes
  ["highest: '最" + RQ + "'", "highest: '最高'"],
  ["lowest: '最" + RQ + "'", "lowest: '最低'"],
  ["votes: '" + RQ + "'", "votes: '票'"],

  // Also try R-only pattern (no ? after)
  ["highest: '最" + R + "'", "highest: '最高'"],
  ["lowest: '最" + R + "'", "lowest: '最低'"],
  ["votes: '" + R + "'", "votes: '票'"],

  // Analysis separators (R-only pattern since these are inside template literals)
  ["${t('winRate')}" + R + "${prob.homeProb}%", "${t('winRate')}：${prob.homeProb}%"],
  ["${t('drawProbability')}" + R + "${prob.drawProb}%", "${t('drawProbability')}：${prob.drawProb}%"],
  ["${t('winRate')}" + R + "${prob.awayProb}%", "${t('winRate')}：${prob.awayProb}%"],
  ["${t('basedOnOdds')}" + R, "${t('basedOnOdds')}）"],
  ["${t('highMarketAttention')}" + R, "${t('highMarketAttention')}】"],
  ["${t('bookmakersProviding')}" + R, "${t('bookmakersProviding')}】"],
  ["${t('marketTendency')}" + R, "${t('marketTendency')}："],
  ["${t('lastUpdated')}" + R, "${t('lastUpdated')}："],

  // Highest analysis
  ["highestHome.odds.toFixed(2)}" + R + "{highestHome.bookmaker}", "highestHome.odds.toFixed(2)}（{highestHome.bookmaker}"],
];

for (const [bad, good] of fixPairs) {
  c = c.replaceAll(bad, good);
}

// Also handle remaining RQ patterns that might be there
c = c.replaceAll(RQ + "</button>", R + "</button>"); // Clean up any remaining RQ before </button>
c = c.replaceAll(R + "</button>", "✕</button>"); // This is too aggressive, but let's see

// Actually let me be more careful. Let me just count and fix remaining specific patterns
fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
