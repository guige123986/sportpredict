const fs = require('fs');
let c = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const R = String.fromCharCode(65533);
const RQ = R + '?';

// Debug: show exact bytes around a known corrupted location
const idx = c.indexOf('closeWatchModal()');
if (idx >= 0) {
  const segment = c.substring(idx, idx + 50);
  console.log('Modal close segment:', JSON.stringify(segment));
}

// Let's try a completely different approach - use raw byte replacement
// Find all instances of RQ pattern and log them
let pos = 0;
const found = [];
while ((pos = c.indexOf(RQ, pos)) !== -1) {
  found.push({ pos, context: c.substring(Math.max(0, pos - 30), pos + 30) });
  pos += 2;
}
console.log('RQ patterns found:', found.length);

// Try to match the exact string from the file
const modalPattern = 'closeWatchModal()">' + RQ + '</button>';
console.log('Modal pattern found:', c.includes(modalPattern));

// Maybe the issue is that RQ is in different positions
// Let me try using a regex approach instead
const replacements = [
  [/closeWatchModal\(\)">[\ufffd]\?<\/button>/g, "closeWatchModal()\">✕</button>"],
  [/scrollTopBtn"[^>]*>[\ufffd]\?<\/button>/g, "scrollTopBtn\" onclick=\"document.getElementById('contentArea').scrollTo({top:0,behavior:'smooth'})\">↑</button>"],
  [/openSidebarDrawer\(\)">[\ufffd]\?<\/button>/g, "openSidebarDrawer()\">☰</button>"],
  [/clearSearch\(\)">[\ufffd]\?<\/button>/g, "clearSearch()\">✕</button>"],
  [/font-size:10px">[\ufffd]\?<\/span>/g, "font-size:10px\">▼</span>"],
  [/class="emoji">[\ufffd]\?<\/span>/g, "class=\"emoji\">⚽</span>"],
  [/分析参考[\ufffd]\?<\/p>/g, "分析参考。</p>"],
  [/highest: '最[\ufffd]\?'/g, "highest: '最高'"],
  [/lowest: '最[\ufffd]\?'/g, "lowest: '最低'"],
  [/votes: '[\ufffd]\?'/g, "votes: '票'"],
  [/color:#4ade80">[\ufffd]\?<\/span>/g, "color:#4ade80\">●</span>"],
  [/color:#6e7681">[\ufffd]\?<\/span>/g, "color:#6e7681\">●</span>"],
  [/color:#ef4444">[\ufffd]\?<\/span>/g, "color:#ef4444\">●</span>"],
  [/odds-up">[\ufffd]\?<\/span>/g, "odds-up\">↑</span>"],
  [/odds-down">[\ufffd]\?<\/span>/g, "odds-down\">↓</span>"],
  [/empty-icon">[\ufffd]\?<\/div>/g, "empty-icon\">⭐</div>"],
  [/nofollow">[\ufffd]\?<\/a>/g, "nofollow\">→</a>"],
  [/viewAll'\)} [\ufffd]\?<\/button>/g, "viewAll')} →</button>"],
  [/textContent = '☀[\ufffd]\?;/g, "textContent = '☀️';"],
  [/\$\{t\('winRate'\)\}[\ufffd]\?\$\{prob\.homeProb\}/g, "${t('winRate')}：${prob.homeProb}"],
  [/\$\{t\('drawProbability'\)\}[\ufffd]\?\$\{prob\.drawProb\}/g, "${t('drawProbability')}：${prob.drawProb}"],
  [/\$\{t\('winRate'\)\}[\ufffd]\?\$\{prob\.awayProb\}/g, "${t('winRate')}：${prob.awayProb}"],
  [/\$\{t\('basedOnOdds'\)\}[\ufffd]\?/g, "${t('basedOnOdds')}）"],
  [/\$\{t\('highMarketAttention'\)\}[\ufffd]\?/g, "${t('highMarketAttention')}】"],
  [/\$\{t\('bookmakersProviding'\)\}[\ufffd]\?/g, "${t('bookmakersProviding')}】"],
  [/\$\{t\('marketTendency'\)\}[\ufffd]\?/g, "${t('marketTendency')}："],
  [/\$\{t\('lastUpdated'\)\}[\ufffd]\?/g, "${t('lastUpdated')}："],
  [/highestHome\.odds\.toFixed\(2\)\}[\ufffd]\?\{highestHome\.bookmaker\}/g, "highestHome.odds.toFixed(2)}（{highestHome.bookmaker}"],
  [/favActive \? '[\ufffd]\?' : '[\ufffd]\?'/g, "favActive ? '★' : '☆'"],
  [/toggleFavorite\('[^']+', event\)">[\ufffd]\?<\/button>/g, (m) => m.replace(/>[\ufffd]\?<\/button>/, ">☆</button>")],
];

for (const [regex, replacement] of replacements) {
  c = c.replace(regex, replacement);
}

fs.writeFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
