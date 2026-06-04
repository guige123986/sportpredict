const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const UQ = '\ufffd' + '?';

const fixes = [
  ['closeWatchModal()">' + UQ + '</button>', 'closeWatchModal()">✕</button>'],
  ["scrollTo({top:0,behavior:'smooth'})\">" + UQ + '</button>', "scrollTo({top:0,behavior:'smooth'})\">↑</button>"],
  ['class="emoji">' + UQ + '</span>', 'class="emoji">⚽</span>'],
  ['openSidebarDrawer()">' + UQ + '</button>', 'openSidebarDrawer()">☰</button>'],
  ['font-size:10px">' + UQ + '</span>', 'font-size:10px">▼</span>'],
  ['clearSearch()">' + UQ + '</button>', 'clearSearch()">✕</button>'],
  ['分析参考' + UQ + '</p>', '分析参考。</p>'],
  ["${t('viewAll')} " + UQ + '</button>', "${t('viewAll')} →</button>"],
  ['nofollow">' + UQ + '</a>', 'nofollow">→</a>'],
  ['empty-icon">' + UQ + '</div>', 'empty-icon">⭐</div>'],
  ['odds-up">' + UQ + '</span>', 'odds-up">↑</span>'],
  ['odds-down">' + UQ + '</span>', 'odds-down">↓</span>'],
  ["favActive ? '" + UQ + " : '" + UQ + "'", "favActive ? '★' : '☆'"],
  ["event)\">" + UQ + '</button>', "event)\">☆</button>"],
  ['color:#4ade80">' + UQ + '</span>', 'color:#4ade80">●</span>'],
  ['color:#6e7681">' + UQ + '</span>', 'color:#6e7681">●</span>'],
  ['color:#ef4444">' + UQ + '</span>', 'color:#ef4444">●</span>'],
  ["${t('winRate')}" + UQ + "${prob.homeProb}%", "${t('winRate')}：${prob.homeProb}%"],
  ["${t('basedOnOdds')}" + UQ + '</span>', "${t('basedOnOdds')}）</span>"],
  ["${t('drawProbability')}" + UQ + "${prob.drawProb}%", "${t('drawProbability')}：${prob.drawProb}%"],
  ["${t('winRate')}" + UQ + "${prob.awayProb}%", "${t('winRate')}：${prob.awayProb}%"],
  ['lowestHome.odds.toFixed(2)}' + UQ + '{lowestHome.bookmaker}', 'lowestHome.odds.toFixed(2)}（{lowestHome.bookmaker}'],
  ["${t('marketTendency')}" + UQ + '{favored}', "${t('marketTendency')}：{favored}"],
  ["highest: '最" + UQ + "'", "highest: '最高'"],
  ["lowest: '最" + UQ + "'", "lowest: '最低'"],
  ["votes: '" + UQ + "'", "votes: '票'"],
];

for (const [bad, good] of fixes) {
  c = c.replaceAll(bad, good);
}

// Theme toggle (sun emoji)
const sunCorrupt = "textContent = '" + '\u2600' + UQ + ';';
const sunFixed = "textContent = '" + '\u2600\uFE0F' + "';";
c = c.replaceAll(sunCorrupt, sunFixed);

fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
