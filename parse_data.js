const fs = require('fs');

function parseFile(filepath, maxMatches = 8) {
  const raw = fs.readFileSync(filepath, 'utf8');
  const matches = JSON.parse(raw);
  if (!Array.isArray(matches)) return [];
  
  return matches.slice(0, maxMatches).map(m => {
    const bookmakers = (m.bookmakers || []).slice(0, 6).map(b => {
      const outcomes = (b.markets && b.markets[0] && b.markets[0].outcomes) ? b.markets[0].outcomes : [];
      return {
        key: b.key,
        title: b.title,
        outcomes: outcomes.map(o => ({ name: o.name, price: o.price }))
      };
    });
    return {
      home: m.home_team,
      away: m.away_team,
      sport: m.sport_title,
      commence: m.commence_time,
      bookmakers
    };
  });
}

const sports = {
  'WC': 'tmp_wc.json',
  'MLB': 'tmp_mlb.json',
  'WNBA': 'tmp_wnba.json',
  'Libertadores': 'tmp_libertadores.json',
  'ATP Wimbledon': 'tmp_atp.json',
  'WTA Wimbledon': 'tmp_wta.json'
};

for (const [name, file] of Object.entries(sports)) {
  const fullPath = `C:\\Users\\wzgui\\.openclaw-autoclaw\\workspace\\sportpredict\\${file}`;
  try {
    const data = parseFile(fullPath, name === 'MLB' ? 8 : 6);
    console.log(`\n===== ${name} (${data.length} matches) =====`);
    data.forEach(m => {
      console.log(`\nMATCH: ${m.home} vs ${m.away} | ${m.commence}`);
      m.bookmakers.forEach(b => {
        const odds = b.outcomes.map(o => `${o.name}@${o.price}`).join(', ');
        console.log(`  ${b.key}: ${odds}`);
      });
    });
  } catch(e) {
    console.log(`\n===== ${name}: ERROR - ${e.message} =====`);
  }
}
