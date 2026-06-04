const fs = require('fs');
const h = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const U = String.fromCharCode(65533);
const idx = h.indexOf(U);
// Show 10 chars before and 20 chars after
console.log('Wide context:');
const seg = h.substring(idx - 3, idx + 20);
for (let i = 0; i < seg.length; i++) {
  console.log('  ' + i + ': ' + seg.charCodeAt(i).toString(16).padStart(4, '0') + ' ' + seg[i]);
}
// So the pattern in the file is: > U+FFFD ? /button>
// The < before /button was eaten by the corruption
