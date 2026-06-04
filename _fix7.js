const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const UQ = String.fromCharCode(65533) + '?';

// #1: %UQ{t('basedOnOdds')} -> %（${t('basedOnOdds')}）
const pat1 = "%" + UQ + "${t('basedOnOdds')}";
const good1 = "%（${t('basedOnOdds')}）";
if (c.includes(pat1)) { c = c.replaceAll(pat1, good1); console.log('Fixed #1'); }
else console.log('NOT #1');

// #2: UQ/span> -> ）</span> (after basedOnOdds closing)
const pat2 = ")}" + UQ + "/span>";
const good2 = ")}</span>";
if (c.includes(pat2)) { c = c.replaceAll(pat2, good2); console.log('Fixed #2'); }
else console.log('NOT #2');

// #3: UQ{favored} -> ：{favored}
const pat3 = ")}" + UQ + "{favored}";
const good3 = ")}：{favored}";
if (c.includes(pat3)) { c = c.replaceAll(pat3, good3); console.log('Fixed #3'); }
else console.log('NOT #3');

fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
