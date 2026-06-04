const fs = require('fs');
const h = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const U = String.fromCharCode(65533);
const UQ = U + '?';

// Test pattern matching
const testPat = 'closeWatchModal()">' + UQ + '</button>';
console.log('Pattern exists:', h.includes(testPat));

// Try indexOf
const idx = h.indexOf(testPat);
console.log('indexOf result:', idx);

// Try indexOf with just UQ
const idx2 = h.indexOf(UQ);
console.log('UQ first at:', idx2);
console.log('Context:', JSON.stringify(h.substring(idx2 - 30, idx2 + 10)));
