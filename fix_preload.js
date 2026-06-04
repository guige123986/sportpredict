const fs = require('fs');
const baseDir = 'C:\\Users\\wzgui\\.openclaw-autoclaw\\workspace\\sportpredict';

const preloadBlock = `
<link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" as="script" />
<link rel="prefetch" href="daily.html" />
<link rel="prefetch" href="calculator.html" />
<link rel="prefetch" href="compare.html" />
<link rel="prefetch" href="analyzer.html" />
<link rel="prefetch" href="leagues/world-cup.html" />
`;

// Fix calculator, analyzer, compare - add preload after icon link
const toolPages = ['calculator.html', 'analyzer.html', 'compare.html'];
for (const f of toolPages) {
  const p = baseDir + '\\' + f;
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('rel="preload"')) {
    const iconIdx = c.indexOf('<link rel="icon"');
    if (iconIdx > 0) {
      const iconEnd = c.indexOf('/>', iconIdx) + 2;
      c = c.slice(0, iconEnd) + '\n' + preloadBlock + c.slice(iconEnd);
    }
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log(f + ' preload added');
}

// Fix league pages - add explore links
const exploreBlock = `
  <h3>Explore More</h3>
  <div class="explore-links">
    <a href="../daily.html">📰 Daily Analysis<span class="link-desc">Today's match analysis</span></a>
    <a href="../calculator.html">📊 Odds Calculator<span class="link-desc">Convert odds, Kelly, arbitrage</span></a>
    <a href="../compare.html">📋 Odds Comparison<span class="link-desc">Live odds across bookmakers</span></a>
    <a href="world-cup.html">🏆 World Cup 2026<span class="link-desc">FIFA World Cup odds</span></a>
  </div>
`;

// League pages already have explore-links class in their HTML - let me verify
const leaguePages = ['world-cup.html', 'nfl.html', 'nba.html', 'mlb.html', 'premier-league.html'];
for (const f of leaguePages) {
  const p = baseDir + '\\leagues\\' + f;
  let c = fs.readFileSync(p, 'utf8');
  if (c.includes('explore-link-item')) {
    console.log(f + ' already has explore links');
  } else {
    console.log(f + ' needs explore links (but uses different class - explore-links)');
  }
}

console.log('Done');
