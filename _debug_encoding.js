const fs = require('fs');
let c = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');

// Use a two-char pattern: \ufffd followed by optional ?
const U = '\ufffd';
const UP = U + '\\?'; // pattern: U+FFFD optionally followed by ?

// Debug: check what's actually in the file
const idx = c.indexOf('closeWatchModal()');
if (idx >= 0) {
  const seg = c.substring(idx + 20, idx + 40);
  console.log('Modal segment hex:', [...seg].map(ch => ch.charCodeAt(0).toString(16)));
}

// Use plain string replacement instead of regex
// Find the corrupted char and its context, then replace

// For buttons/spans: the pattern is [char] + ? + </tag>
// Let's just find all \ufffd occurrences and their surrounding context
let pos = 0;
let count = 0;
while ((pos = c.indexOf(U, pos)) !== -1) {
  const before = c.substring(Math.max(0, pos - 40), pos);
  const after = c.substring(pos, Math.min(c.length, pos + 40));
  console.log(`#${++count} at ${pos}: ...${before}>>>${after}...`);
  pos += 1;
}
