const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const UQ = String.fromCharCode(65533) + '?';

// The HTML source has escaped quotes: \" not "
// Fix all patterns with the correct escaping

const fixes = [
  // HTML template items (escaped quotes in HTML attributes)
  ['closeWatchModal()\">' + UQ + '</button>', 'closeWatchModal()\">✕</button>'],
  ["scrollTo({top:0,behavior:'smooth'})\">" + UQ + '</button>', "scrollTo({top:0,behavior:'smooth'})\">↑</button>"],
  ['class=\"emoji\">' + UQ + '</span>', 'class=\"emoji\">⚽</span>'],
  ['openSidebarDrawer()\">' + UQ + '</button>', 'openSidebarDrawer()\">☰</button>'],
  ['font-size:10px\">' + UQ + '</span>', 'font-size:10px\">▼</span>'],
  ['clearSearch()\">' + UQ + '</button>', 'clearSearch()\">✕</button>'],
  ['分析参考' + UQ + '</p>', '分析参考。</p>'],

  // JS template literal items (unescaped quotes)
  ['nofollow\">' + UQ + '</a>', 'nofollow\">→</a>'],
  ['empty-icon\">' + UQ + '</div>', 'empty-icon\">⭐</div>'],
  ['odds-up\">' + UQ + '</span>', 'odds-up\">↑</span>'],
  ['odds-down\">' + UQ + '</span>', 'odds-down\">↓</span>'],
  ['color:#4ade80\">' + UQ + '</span>', 'color:#4ade80\">●</span>'],
  ['color:#6e7681\">' + UQ + '</span>', 'color:#6e7681\">●</span>'],
  ['color:#ef4444\">' + UQ + '</span>', 'color:#ef4444\">●</span>'],
  ["${t('viewAll')} " + UQ + '</button>', "${t('viewAll')} →</button>"],
  ["event)\">" + UQ + '</button>', "event)\">☆</button>"],

  // Fav button with mixed UQ
  ["favActive ? '" + UQ + " : '" + UQ + "'", "favActive ? '★' : '☆'"],

  // Analysis separators (UQ in template literals)
  ["${t('winRate')}" + UQ + "${prob.homeProb}%", "${t('winRate')}：${prob.homeProb}%"],
  ["${t('basedOnOdds')}" + UQ + '</span>', "${t('basedOnOdds')}）</span>"],
  ["${t('drawProbability')}" + UQ + "${prob.drawProb}%", "${t('drawProbability')}：${prob.drawProb}%"],
  ["${t('winRate')}" + UQ + "${prob.awayProb}%", "${t('winRate')}：${prob.awayProb}%"],
  ['lowestHome.odds.toFixed(2)}' + UQ + '{lowestHome.bookmaker}', 'lowestHome.odds.toFixed(2)}（{lowestHome.bookmaker}'],
  ["${t('marketTendency')}" + UQ + '{favored}', "${t('marketTendency')}：{favored}"],

  // i18n values
  ["highest: '最" + UQ + "'", "highest: '最高'"],
  ["lowest: '最" + UQ + "'", "lowest: '最低'"],
  ["votes: '" + UQ + "'", "votes: '票'"],

  // Theme toggle
  const sunBad = "textContent = '" + String.fromCharCode(0x2600) + UQ + ';';
  const sunGood = "textContent = '" + String.fromCharCode(0x2600) + String.fromCharCode(0xFE0F) + "';";
  if (c.includes(sunBad)) { c = c.replaceAll(sunBad, sunGood); applied++; }
];

let applied = 0;
for (const [bad, good] of fixes) {
  if (c.includes(bad)) {
    c = c.replaceAll(bad, good);
    applied++;
  } else {
    // Debug why not found
    console.log('NOT FOUND:', JSON.stringify(bad).substring(0, 80));
  }
}

fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Applied:', applied);
console.log('Remaining U+FFFD:', remaining);
