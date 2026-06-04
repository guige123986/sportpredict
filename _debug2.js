const fs = require('fs');
const h = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const U = String.fromCharCode(65533);

// Find first corruption
const idx = h.indexOf('closeWatchModal()');
if (idx >= 0) {
  const seg = h.substring(idx, idx + 60);
  console.log('Segment:', JSON.stringify(seg));
  for (let i = 0; i < seg.length; i++) {
    if (seg.charCodeAt(i) > 127 || seg[i] === '?') {
      console.log(`  pos ${i}: char=${seg[i]} code=${seg.charCodeAt(i).toString(16)}`);
    }
  }
}
