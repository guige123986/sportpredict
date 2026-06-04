const fs = require('fs');
const h = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const UQ = String.fromCharCode(65533) + '?';
const pat = 'closeWatchModal()">' + UQ + '</button>';
console.log('Pattern:', JSON.stringify(pat));
console.log('Found:', h.includes(pat));
const idx = h.indexOf('closeWatchModal()');
console.log('Actual around:', JSON.stringify(h.substring(idx + 20, idx + 50)));
// Check individual characters
const seg = h.substring(idx + 20, idx + 50);
for (let i = 0; i < seg.length; i++) {
  console.log(i, seg[i], seg.charCodeAt(i).toString(16));
}
