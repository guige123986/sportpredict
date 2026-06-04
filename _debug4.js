const fs = require('fs');
const h = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const UQ = String.fromCharCode(65533) + '?';

// The context shows the file has backslash-escaped quotes in the onclick attribute
// but our pattern uses plain quotes. Let me check the exact context
const idx = h.indexOf(UQ);
console.log('UQ at:', idx);
const context = h.substring(idx - 60, idx + 20);
console.log('Context:', JSON.stringify(context));

// Check each char around the UQ
for (let i = idx - 5; i < idx + 10; i++) {
  console.log(i, h.charCodeAt(i).toString(16).padStart(4, '0'), h[i] === '"' ? 'DQUOTE' : h[i] === '\\' ? 'BACKSLASH' : h[i]);
}
