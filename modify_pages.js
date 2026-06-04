// modify_pages.js - Add SEO enhancements to all 4 existing pages
const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\wzgui\\.openclaw-autoclaw\\workspace\\sportpredict';

const shareCSS = `
/* Share Bar */
.share-bar{display:flex;align-items:center;gap:8px;margin:20px 0;padding:14px 16px;background:var(--bg-card,var(--card,#1c2128));border-radius:10px;border:1px solid var(--border)}
.share-bar span{font-size:13px;color:var(--text2,#8b949e);font-weight:600}
.share-btn{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:transparent;color:var(--text,#e6edf3);font-size:13px;cursor:pointer;transition:all .2s;text-decoration:none}
.share-btn:hover{border-color:var(--accent,#4ade80);background:rgba(74,222,128,.08)}
.share-btn.twitter:hover{border-color:#1da1f2;color:#1da1f2}
.share-btn.facebook:hover{border-color:#1877f2;color:#1877f2}
.share-btn.reddit:hover{border-color:#ff4500;color:#ff4500}
.share-btn.whatsapp:hover{border-color:#25d366;color:#25d366}
.breadcrumb{padding:10px 24px;font-size:13px;color:var(--text2,#8b949e);border-bottom:1px solid var(--border);background:var(--bg2,#161b22)}
.breadcrumb a{color:var(--text2,#8b949e);transition:color .2s;text-decoration:none}
.breadcrumb a:hover{color:var(--accent,#4ade80)}
.breadcrumb .sep{margin:0 6px}
.explore-section{margin:24px 0;padding:20px;background:var(--bg-card,var(--card,#1c2128));border:1px solid var(--border);border-radius:10px}
.explore-section h3{font-size:15px;margin-bottom:12px}
.explore-links-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}
.explore-link-item{display:block;padding:12px;background:var(--bg,var(--bg-primary,#0d1117));border:1px solid var(--border);border-radius:8px;color:var(--text,#e6edf3);font-weight:600;font-size:13px;transition:all .2s;text-decoration:none}
.explore-link-item:hover{border-color:var(--accent,#4ade80)}
.explore-link-item .link-desc{font-size:11px;color:var(--text2,#8b949e);font-weight:400;margin-top:2px}
.last-updated-bar{font-size:12px;color:var(--text2,#8b949e);text-align:center;padding:8px}
`;

const shareJS = `
function shareTwitter(){window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href))}
function shareFacebook(){window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href))}
function shareReddit(){window.open('https://reddit.com/submit?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title))}
function shareWhatsApp(){window.open('https://wa.me/?text='+encodeURIComponent(document.title+' '+location.href))}
function copyLink(){navigator.clipboard.writeText(location.href);alert('Link copied!')}
try{document.querySelectorAll('.last-updated-time').forEach(function(el){el.textContent=new Date().toLocaleString()})}catch(e){}
`;

function makeShareBar(prefix = '') {
  return `
    <div class="share-bar">
      <span>Share:</span>
      <a href="javascript:shareTwitter()" class="share-btn twitter">\u{1D54F}</a>
      <a href="javascript:shareFacebook()" class="share-btn facebook">FB</a>
      <a href="javascript:shareReddit()" class="share-btn reddit">Reddit</a>
      <a href="javascript:shareWhatsApp()" class="share-btn whatsapp">WA</a>
      <a href="javascript:copyLink()" class="share-btn copy">\u{1F4CB}</a>
    </div>
    <div class="explore-section">
      <h3>Explore More</h3>
      <div class="explore-links-grid">
        <a href="${prefix}daily.html" class="explore-link-item">\u{1F4F0} Daily Analysis<span class="link-desc">Match previews and odds insights</span></a>
        <a href="${prefix}calculator.html" class="explore-link-item">\u{1F4CA} Odds Calculator<span class="link-desc">Convert odds, Kelly, arbitrage</span></a>
        <a href="${prefix}compare.html" class="explore-link-item">\u{1F4CB} Odds Comparison<span class="link-desc">Best odds across bookmakers</span></a>
        <a href="${prefix}analyzer.html" class="explore-link-item">\u{1F52C} Probability Analyzer<span class="link-desc">Market probability and heatmaps</span></a>
        <a href="${prefix}leagues/world-cup.html" class="explore-link-item">\u{1F3C6} World Cup 2026<span class="link-desc">FIFA World Cup odds</span></a>
        <a href="${prefix}leagues/nfl.html" class="explore-link-item">\u{1F3C8} NFL<span class="link-desc">NFL odds and analysis</span></a>
      </div>
    </div>
    <div class="last-updated-bar">Last updated: <span class="last-updated-time">--</span></div>
`;
}

function makeBreadcrumb(parts) {
  const items = parts.map((p, i) => {
    if (i === parts.length - 1) return p.label;
    return `<a href="${p.href}">${p.label}</a><span class="sep">\u203A</span>`;
  }).join('');
  return `<div class="breadcrumb">${items}</div>`;
}

function makePreload(pageDir = '') {
  const p = pageDir;
  return `
<link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" as="script" />
<link rel="prefetch" href="${p}daily.html" />
<link rel="prefetch" href="${p}calculator.html" />
<link rel="prefetch" href="${p}compare.html" />
<link rel="prefetch" href="${p}analyzer.html" />
<link rel="prefetch" href="${p}leagues/world-cup.html" />
`;
}

// === Process each page ===
const pages = [
  {
    file: 'calculator.html',
    breadcrumb: [{label:'Home',href:'https://10110289.xyz/'},{label:'Tools',href:'index.html'},{label:'Calculator'}],
    preloadDir: '',
    xdefaultMarker: 'hreflang="x-default" href="https://10110289.xyz/calculator.html"'
  },
  {
    file: 'analyzer.html',
    breadcrumb: [{label:'Home',href:'https://10110289.xyz/'},{label:'Tools',href:'index.html'},{label:'Analyzer'}],
    preloadDir: '',
    xdefaultMarker: 'hreflang="x-default" href="https://10110289.xyz/analyzer.html"'
  },
  {
    file: 'compare.html',
    breadcrumb: [{label:'Home',href:'https://10110289.xyz/'},{label:'Tools',href:'index.html'},{label:'Compare'}],
    preloadDir: '',
    xdefaultMarker: 'hreflang="x-default" href="https://10110289.xyz/compare.html"'
  }
];

for (const page of pages) {
  const filePath = path.join(baseDir, page.file);
  console.log(`Modifying ${page.file}...`);
  let c = fs.readFileSync(filePath, 'utf8');

  // 1. Add preload links after x-default hreflang
  const xdIdx = c.indexOf(page.xdefaultMarker);
  if (xdIdx > 0) {
    const insertPos = c.indexOf('/>', xdIdx) + 2;
    c = c.slice(0, insertPos) + '\n' + makePreload(page.preloadDir) + c.slice(insertPos);
  }

  // 2. Add CSS before </style>
  c = c.replace('</style>', shareCSS + '\n</style>');

  // 3. Add breadcrumb before <div class="container">
  c = c.replace(
    '<div class="container">',
    makeBreadcrumb(page.breadcrumb) + '\n<div class="container">'
  );

  // 4. Add share bar + explore before disclaimer
  c = c.replace(
    '<div class="disclaimer"',
    makeShareBar(page.preloadDir) + '\n<div class="disclaimer"'
  );

  // 5. Add share JS before last </script>
  const lastScriptIdx = c.lastIndexOf('</script>');
  if (lastScriptIdx > 0) {
    c = c.slice(0, lastScriptIdx) + shareJS + '\n' + c.slice(lastScriptIdx);
  }

  fs.writeFileSync(filePath, c, 'utf8');
  console.log(`${page.file} done`);
}

// === Process index.html separately (different structure) ===
console.log('Modifying index.html...');
let idx = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

// Add preload after the icon link
const iconMatch = idx.indexOf('<link rel="icon"');
if (iconMatch > 0) {
  const iconEnd = idx.indexOf('/>', iconMatch) + 2;
  idx = idx.slice(0, iconEnd) + '\n' + makePreload('') + idx.slice(iconEnd);
}

// CSS already added by previous script, but check if it's there
if (!idx.includes('.share-bar{')) {
  idx = idx.replace('</style>', shareCSS + '\n</style>');
}

// Add breadcrumb after <div class="main-content">
if (!idx.includes('class="breadcrumb"')) {
  idx = idx.replace(
    '<div class="main-content">',
    '<div class="main-content">\n    ' + makeBreadcrumb([{label:'Home',href:'https://10110289.xyz/'},{label:'Live Odds'}])
  );
}

// Share bar + explore already added by previous script, check
if (!idx.includes('class="share-bar"')) {
  idx = idx.replace(
    '<footer style="text-align:center;padding:20px;',
    makeShareBar('') + '\n<footer style="text-align:center;padding:20px;'
  );
}

// Add share JS if not present
if (!idx.includes('function shareTwitter')) {
  const lastScriptIdx = idx.lastIndexOf('</script>');
  if (lastScriptIdx > 0) {
    idx = idx.slice(0, lastScriptIdx) + shareJS + '\n' + idx.slice(lastScriptIdx);
  }
}

// Add last-updated-time update on load
if (!idx.includes('last-updated-time')) {
  // Already handled above in share bar
}

fs.writeFileSync(path.join(baseDir, 'index.html'), idx, 'utf8');
console.log('index.html done');

console.log('All pages modified!');
