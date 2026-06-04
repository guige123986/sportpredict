const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');

// The U+FFFD has been removed by previous fixes, but the literal '?' (0x3f) that followed
// each U+FFFD remains in the file. We need to find these orphaned '?' characters
// that should be replaced with the correct symbol.

// Strategy: match by surrounding context to identify what the '?' should be

const replacements = [
  // Modal close button: '>?</button>' should be '>✕</button>'
  ['closeWatchModal()">?</button>', 'closeWatchModal()">✕</button>'],

  // Scroll top button
  ["scrollTo({top:0,behavior:'smooth'})\">?</button>", "scrollTo({top:0,behavior:'smooth'})\">↑</button>"],

  // Sidebar emoji
  ['class="emoji">?</span>', 'class="emoji">⚽</span>'],

  // Mobile menu
  ['openSidebarDrawer()">?</button>', 'openSidebarDrawer()">☰</button>'],

  // Lang dropdown arrow
  ['font-size:10px">?</span>', 'font-size:10px">▼</span>'],

  // Search clear
  ['clearSearch()">?</button>', 'clearSearch()">✕</button>'],

  // Footer disclaimer period
  ['分析参考?</p>', '分析参考。</p>'],

  // View all arrow
  ["${t('viewAll')} ?</button>", "${t('viewAll')} →</button>"],

  // Channel link arrow
  ['nofollow">?</a>', 'nofollow">→</a>'],

  // Empty sport icon
  ['empty-icon">?</div>', 'empty-icon">⭐</div>'],

  // Odds up arrow
  ['odds-up">?</span>', 'odds-up">↑</span>'],

  // Odds down arrow
  ['odds-down">?</span>', 'odds-down">↓</span>'],

  // Fav button active/inactive
  ["favActive ? '? : '?']", "favActive ? '★' : '☆'"],

  // Fav button inactive only
  ["event)\">?</button>", "event)\">☆</button>"],

  // Analysis colored dots
  ['color:#4ade80">?</span>', 'color:#4ade80">●</span>'],
  ['color:#6e7681">?</span>', 'color:#6e7681">●</span>'],
  ['color:#ef4444">?</span>', 'color:#ef4444">●</span>'],

  // Win rate colon separators
  ["${t('winRate')}?{prob.homeProb}%", "${t('winRate')}：${prob.homeProb}%"],
  ["${t('basedOnOdds')}?</span>", "${t('basedOnOdds')}）</span>"],
  ["${t('drawProbability')}?{prob.drawProb}%", "${t('drawProbability')}：${prob.drawProb}%"],
  ["${t('winRate')}?{prob.awayProb}%", "${t('winRate')}：${prob.awayProb}%"],

  // Lowest home odds
  ['lowestHome.odds.toFixed(2)}?{lowestHome.bookmaker}', 'lowestHome.odds.toFixed(2)}（{lowestHome.bookmaker}'],

  // Market tendency colon
  ["${t('marketTendency')}?{favored}", "${t('marketTendency')}：{favored}"],

  // highest/lowest/votes i18n
  ["highest: '最?'", "highest: '最高'"],
  ["lowest: '最?'", "lowest: '最低'"],
  ["votes: '?'", "votes: '票'"],

  // Theme toggle
  ["textContent = '☀?;", "textContent = '☀️';"],
];

let totalFixed = 0;
for (const [bad, good] of replacements) {
  const before = c.length;
  c = c.replaceAll(bad, good);
  if (c.length !== before) totalFixed++;
}

fs.writeFileSync(path, c, 'utf8');

// Count remaining orphaned ? that might be from corruption
// These are ? that appear right before </button>, </span>, </div>, </a>, </p> in suspicious contexts
const suspiciousPatterns = [
  /">\?<\/button>/g,
  /">\?<\/span>/g,
  /">\?<\/div>/g,
  /">\?<\/a>/g,
  /\?\<\/p>/g,
  /\?\{prob\./g,
  /\?\{t\('/g,
  /\?\{favored\}/g,
  /\?\{lowestHome\./g,
];

let suspicious = 0;
for (const p of suspiciousPatterns) {
  const m = c.match(p);
  if (m) suspicious += m.length;
}
console.log('Fixes applied:', totalFixed);
console.log('Remaining suspicious patterns:', suspicious);
console.log('Remaining U+FFFD:', (c.match(/\ufffd/g) || []).length);
