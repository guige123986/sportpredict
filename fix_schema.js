const fs = require('fs');
const baseDir = 'C:\\Users\\wzgui\\.openclaw-autoclaw\\workspace\\sportpredict';

const schemas = {
  'calculator.html': `  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"WebApplication",
    "name":"SportPredict Odds Calculator",
    "url":"https://10110289.xyz/calculator.html",
    "applicationCategory":"UtilityApplication",
    "operatingSystem":"Any",
    "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
    "description":"Convert odds formats, calculate Kelly criterion, find arbitrage opportunities, and analyze implied probabilities."
  }
  </script>`,
  'analyzer.html': `  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"WebApplication",
    "name":"SportPredict Probability Analyzer",
    "url":"https://10110289.xyz/analyzer.html",
    "applicationCategory":"UtilityApplication",
    "operatingSystem":"Any",
    "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
    "description":"Analyze market probability distribution, track historical odds, and compare bookmaker heatmaps."
  }
  </script>`,
  'compare.html': `  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"WebApplication",
    "name":"SportPredict Odds Comparison",
    "url":"https://10110289.xyz/compare.html",
    "applicationCategory":"UtilityApplication",
    "operatingSystem":"Any",
    "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
    "description":"Compare odds across bookmakers and find the best odds for any sports match."
  }
  </script>`
};

for (const [file, schema] of Object.entries(schemas)) {
  const p = baseDir + '\\' + file;
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('schema.org')) {
    // Insert before </head>
    c = c.replace('</head>', schema + '\n</head>');
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log(file + ' schema added');
}
console.log('Done');
