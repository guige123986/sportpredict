const fs = require('fs');
const baseDir = 'C:\\Users\\wzgui\\.openclaw-autoclaw\\workspace\\sportpredict';

const preloadBlock = `
<link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" as="script" />
<link rel="prefetch" href="daily.html" />
<link rel="prefetch" href="compare.html" />
<link rel="prefetch" href="analyzer.html" />
<link rel="prefetch" href="leagues/world-cup.html" />
`;

// Fix calculator, analyzer, compare - add preload before <style>
const toolPages = ['calculator.html', 'analyzer.html', 'compare.html'];
for (const f of toolPages) {
  const p = baseDir + '\\' + f;
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('rel="preload"')) {
    // Insert before <style> tag
    c = c.replace('<style>', preloadBlock + '<style>');
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log(f + ' preload added');
}
console.log('Done');
