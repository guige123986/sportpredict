const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const UQ = String.fromCharCode(65533) + '?';
const U = String.fromCharCode(65533);

// #1-2: Fav button in template literal
// The actual pattern is: ${favActive ? 'UQ : 'UQ}
// Original should be: ${favActive ? '★' : '☆'}
// Since the < before ★ and ☆ was consumed by corruption, and the ' before ☆ was also consumed
// Let me find the exact pattern
const favPat1 = "favActive ? '" + UQ + " : '" + UQ + "}</button>";
const favGood = "favActive ? '★' : '☆'}</button>";
if (c.includes(favPat1)) {
  c = c.replaceAll(favPat1, favGood);
  console.log('Fixed fav pattern 1');
} else {
  // Debug
  const idx = c.indexOf("favActive ?");
  if (idx >= 0) {
    console.log('Fav context:', JSON.stringify(c.substring(idx, idx + 50)));
  }
}

// #3-4: basedOnOdds + span
// Pattern: %UQ{t('basedOnOdds')}UQ/span>
// Should be: %（${t('basedOnOdds')}）</span>
const basedPat = "%" + UQ + "${t('basedOnOdds')}" + UQ + "/span>";
const basedGood = "%（${t('basedOnOdds')}）</span>";
if (c.includes(basedPat)) {
  c = c.replaceAll(basedPat, basedGood);
  console.log('Fixed basedOnOdds pattern');
} else {
  const idx = c.indexOf("${t('basedOnOdds')}");
  if (idx >= 0) {
    console.log('BasedOnOdds context:', JSON.stringify(c.substring(idx - 20, idx + 30)));
  }
}

// #5: market tendency
const mktPat = "${t('marketTendency')}" + UQ + "{favored}";
const mktGood = "${t('marketTendency')}：{favored}";
if (c.includes(mktPat)) {
  c = c.replaceAll(mktPat, mktGood);
  console.log('Fixed market tendency');
} else {
  const idx = c.indexOf("${t('marketTendency')}");
  if (idx >= 0) {
    console.log('Market context:', JSON.stringify(c.substring(idx, idx + 30)));
  }
}

fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
