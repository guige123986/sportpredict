const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let c = fs.readFileSync(path, 'utf8');
const UQ = String.fromCharCode(65533) + '?';

// #1: }%UQ{t('basedOnOdds')} -> }%（${t('basedOnOdds')}）
const pat1 = "}%\uFFFD?{t('basedOnOdds')}";
const good1 = "}%（${t('basedOnOdds')}）";
console.log('Pat1 found:', c.includes(pat1));
c = c.replaceAll(pat1, good1);

// #2: ')UQ{favored} -> ')}：{favored}
const pat2 = "')\uFFFD?{favored}";
const good2 = "')}：{favored}";
console.log('Pat2 found:', c.includes(pat2));
c = c.replaceAll(pat2, good2);

fs.writeFileSync(path, c, 'utf8');
const remaining = (c.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD:', remaining);
