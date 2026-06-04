const fs = require('fs');
let c = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const U = '\ufffd';
const UQ = U + '?'; // U+FFFD + literal ?

// Direct string replacements based on the debug output
const fixes = [
  // #1 modal close button
  ['closeWatchModal()">' + UQ + '</button>', 'closeWatchModal()">✕</button>'],
  // #2 scroll top button
  ["scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">" + UQ + '</button>', "scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">↑</button>"],
  // #3 sidebar emoji
  ['class="emoji">' + UQ + '</span>', 'class="emoji">⚽</span>'],
  // #4 mobile menu
  ['openSidebarDrawer()">' + UQ + '</button>', 'openSidebarDrawer()">☰</button>'],
  // #5 lang dropdown arrow
  ['font-size:10px">' + UQ + '</span>', 'font-size:10px">▼</span>'],
  // #6 search clear
  ['clearSearch()">' + UQ + '</button>', 'clearSearch()">✕</button>'],
  // #7 footer disclaimer
  ['分析参考' + UQ + '</p>', '分析参考。</p>'],
  // #8 & #17 view all button
  ["${t('viewAll')} " + UQ + '</button>', "${t('viewAll')} →</button>"],
  // #9 channel link
  ['nofollow">' + UQ + '</a>', 'nofollow">→</a>'],
  // #10 & #11 empty icon
  ['empty-icon">' + UQ + '</div>', 'empty-icon">⭐</div>'],
  // #12 odds up
  ['odds-up">' + UQ + '</span>', 'odds-up">↑</span>'],
  // #13 odds down
  ['odds-down">' + UQ + '</span>', 'odds-down">↓</span>'],
  // #14 & #15 fav button
  ["favActive ? '" + UQ + " : '" + UQ + "'}</button>", "favActive ? '★' : '☆'}</button>"],
  // #16 fav button inactive
  ["toggleFavorite('${m.id}', event)\">" + UQ + '</button>', "toggleFavorite('${m.id}', event)\">☆</button>"],
  // #18-20 analysis spans
  ['color:#4ade80">' + UQ + '</span>', 'color:#4ade80\">●</span>'],
  ['color:#6e7681">' + UQ + '</span>', 'color:#6e7681\">●</span>'],
  ['color:#ef4444">' + UQ + '</span>', 'color:#ef4444\">●</span>'],
  // #21-23 win rate separators
  ["${t('winRate')}" + UQ + "${prob.homeProb}%", "${t('winRate')}：${prob.homeProb}%"],
  ["${t('basedOnOdds')}" + UQ + '</span>', "${t('basedOnOdds')}）</span>"],
  // #24 draw prob separator
  ["${t('drawProbability')}" + UQ + "${prob.drawProb}%", "${t('drawProbability')}：${prob.drawProb}%"],
  // #25 away win rate separator
  ["${t('winRate')}" + UQ + "${prob.awayProb}%", "${t('winRate')}：${prob.awayProb}%"],
  // #26 lowestHome odds separator
  ["lowestHome.odds.toFixed(2)}" + UQ + "{lowestHome.bookmaker}", "lowestHome.odds.toFixed(2)}（{lowestHome.bookmaker}"],
  // #27 market tendency
  ["${t('marketTendency')}" + UQ + "{favored}", "${t('marketTendency')}：{favored}"],
  // highest/lowest/votes
  ["highest: '最" + UQ + "'", "highest: '最高'"],
  ["lowest: '最" + UQ + "'", "lowest: '最低'"],
  ["votes: '" + UQ + "'", "votes: '票'"],
  // Theme toggle
  // Theme toggle - handle separately below
];

for (const [bad, good] of fixes) {
  // Use replaceAll to handle multiple occurrences
  c = c.replaceAll(bad, good);
}

fs.writeFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
