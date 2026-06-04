const fs = require('fs');
const h = fs.readFileSync('C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html', 'utf8');
const UQ = String.fromCharCode(65533) + '?';

// Build the pattern character by character to match what's in the file
const pat = 'closeWatchModal()">' + UQ + '</button>';
console.log('Pattern length:', pat.length);
console.log('Pattern hex:');
for (let i = 0; i < pat.length; i++) {
  console.log('  ' + i + ': ' + pat.charCodeAt(i).toString(16) + ' (' + pat[i] + ')');
}

// Extract the same length from the file at the UQ position
const idx = h.indexOf(UQ);
const fileSeg = h.substring(idx - 23, idx + 12);
console.log('File segment hex:');
for (let i = 0; i < fileSeg.length; i++) {
  console.log('  ' + i + ': ' + fileSeg.charCodeAt(i).toString(16) + ' (' + fileSeg[i] + ')');
}

console.log('Match:', pat === fileSeg);
