const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const UQ = String.fromCharCode(65533) + '?';

// The corruption pattern: > U+FFFD ? /tag> means the original was > CHAR </tag>
// where CHAR was a symbol and the < before CHAR was also consumed by the corruption
// So UQ + / = should be replaced with CHAR + </

// Fix all HTML buttons/tags where UQ appears before /tag>
const tagFixes = [
  // modal close: >UQ/button> -> >✕</button>
  ['closeWatchModal()">' + UQ + '/button>', 'closeWatchModal()">✕</button>'],
  // scroll top: >UQ/button> -> >↑</button>
  ["scrollTo({top:0,behavior:'smooth'})\">" + UQ + '/button>', "scrollTo({top:0,behavior:'smooth'})\">↑</button>"],
  // emoji: >UQ/span> -> >⚽</span>
  ['class="emoji">' + UQ + '/span>', 'class="emoji">⚽</span>'],
  // mobile menu: >UQ/button> -> >☰</button>
  ['openSidebarDrawer()">' + UQ + '/button>', 'openSidebarDrawer()">☰</button>'],
  // lang arrow: >UQ/span> -> >▼</span>
  ['font-size:10px">' + UQ + '/span>', 'font-size:10px">▼</span>'],
  // search clear: >UQ/button> -> >✕</button>
  ['clearSearch()">' + UQ + '/button>', 'clearSearch()">✕</button>'],
  // footer: 参考UQ/p> -> 参考。</p>
  ['分析参考' + UQ + '/p>', '分析参考。</p>'],
  // view all: UQ/button> -> →</button>
  ["${t('viewAll')} " + UQ + '/button>', "${t('viewAll')} →</button>"],
  // channel link: >UQ/a> -> >→</a>
  ['nofollow">' + UQ + '/a>', 'nofollow">→</a>'],
  // empty icon: >UQ/div> -> >⭐</div>
  ['empty-icon">' + UQ + '/div>', 'empty-icon">⭐</div>'],
  // odds up: >UQ/span> -> >↑</span>
  ['odds-up">' + UQ + '/span>', 'odds-up">↑</span>'],
  // odds down: >UQ/span> -> >↓</span>
  ['odds-down">' + UQ + '/span>', 'odds-down">↓</span>'],
  // analysis green: >UQ/span> -> >●</span>
  ['color:#4ade80">' + UQ + '/span>', 'color:#4ade80">●</span>'],
  // analysis gray: >UQ/span> -> >●</span>
  ['color:#6e7681">' + UQ + '/span>', 'color:#6e7681">●</span>'],
  // analysis red: >UQ/span> -> >●</span>
  ['color:#ef4444">' + UQ + '/span>', 'color:#ef4444">●</span>'],
  // fav button inactive: >UQ/button> -> >☆</button>
  ["event)\">" + UQ + '/button>', "event)\">☆</button>"],
];

let applied = 0;
for (const [bad, good] of tagFixes) {
  if (c.includes(bad)) {
    c = c.replaceAll(bad, good);
    applied++;
  } else {
    console.log('NOT FOUND:', bad.substring(0, 60));
  }
}

// Fav button with mixed UQ pattern: favActive ? 'UQ : 'UQ'
// This one: the original was favActive ? '★' : '☆'
// After corruption: UQ replaced <★ and <☆ parts... no, these are in template literals
// Let me check the actual pattern
const favIdx = c.indexOf("favActive ? '");
if (favIdx >= 0) {
  const seg = c.substring(favIdx, favIdx + 40);
  console.log('Fav segment:', JSON.stringify(seg));
}

// Analysis template literal patterns
// ${t('winRate')}UQ{prob.homeProb}% -> ${t('winRate')}：${prob.homeProb}%
const analysisFixes = [
  ["${t('winRate')}" + UQ + '{prob.homeProb}%', "${t('winRate')}：${prob.homeProb}%"],
  ["${t('basedOnOdds')}" + UQ + '/span>', "${t('basedOnOdds')}）</span>"],
  ["${t('drawProbability')}" + UQ + '{prob.drawProb}%', "${t('drawProbability')}：${prob.drawProb}%"],
  ["${t('winRate')}" + UQ + '{prob.awayProb}%', "${t('winRate')}：${prob.awayProb}%"],
  ['lowestHome.odds.toFixed(2)}' + UQ + '{lowestHome.bookmaker}', 'lowestHome.odds.toFixed(2)}（{lowestHome.bookmaker}'],
  ["${t('marketTendency')}" + UQ + '{favored}', "${t('marketTendency')}：{favored}"],
  ["highest: '最" + UQ + "'", "highest: '最高'"],
  ["lowest: '最" + UQ + "'", "lowest: '最低'"],
  ["votes: '" + UQ + "'", "votes: '票'"],
];

for (const [bad, good] of analysisFixes) {
  if (c.includes(bad)) {
    c = c.replaceAll(bad, good);
    applied++;
  } else {
    console.log('NOT FOUND:', bad.substring(0, 60));
  }
}

// Theme toggle
const sunBad = "textContent = '" + String.fromCharCode(0x2600) + UQ + ';';
const sunGood = "textContent = '" + String.fromCharCode(0x2600) + String.fromCharCode(0xFE0F) + "';";
if (c.includes(sunBad)) { c = c.replaceAll(sunBad, sunGood); applied++; }
else console.log('NOT FOUND: theme toggle');

fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Applied:', applied);
console.log('Remaining U+FFFD:', remaining);
