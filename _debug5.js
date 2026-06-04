const fs = require('fs');
const h = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const UQ = String.fromCharCode(65533) + '?';
const idx = h.indexOf(UQ);
if (idx >= 0) {
  const seg = h.substring(idx - 25, idx + 15);
  console.log('Context bytes:');
  for (let i = 0; i < seg.length; i++) {
    const ch = seg.charCodeAt(i);
    console.log('  ' + i + ': ' + seg[i] + ' (' + ch.toString(16) + ')');
  }
}
