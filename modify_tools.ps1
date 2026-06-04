# modify_pages.ps1 - Modify all 4 existing pages
# Using file-based approach to avoid PowerShell escaping issues

$baseDir = "C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict"

# Shared additions
$preloadHTML = @"
<link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" as="script" />
<link rel="prefetch" href="daily.html" />
<link rel="prefetch" href="calculator.html" />
<link rel="prefetch" href="compare.html" />
<link rel="prefetch" href="analyzer.html" />
"@

$shareCSS = @'
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
'@

$shareJS = @'
function shareTwitter(){window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href))}
function shareFacebook(){window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href))}
function shareReddit(){window.open('https://reddit.com/submit?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title))}
function shareWhatsApp(){window.open('https://wa.me/?text='+encodeURIComponent(document.title+' '+location.href))}
function copyLink(){navigator.clipboard.writeText(location.href);alert('Link copied!')}
try{document.querySelectorAll('.last-updated-time').forEach(function(el){el.textContent=new Date().toLocaleString()})}catch(e){}
'@

function Add-ShareBarHtml {
  param([string]$Dir = "")
  $prefix = if ($Dir) { "$Dir/" } else { "" }
  return @"
    <div class="share-bar">
      <span>Share:</span>
      <a href="javascript:shareTwitter()" class="share-btn twitter">&#x1D54F;</a>
      <a href="javascript:shareFacebook()" class="share-btn facebook">FB</a>
      <a href="javascript:shareReddit()" class="share-btn reddit">Reddit</a>
      <a href="javascript:shareWhatsApp()" class="share-btn whatsapp">WA</a>
      <a href="javascript:copyLink()" class="share-btn copy">&#x1F4CB;</a>
    </div>
    <div class="explore-section">
      <h3>Explore More</h3>
      <div class="explore-links-grid">
        <a href="$($prefix)daily.html" class="explore-link-item">&#x1F4F0; Daily Analysis<span class="link-desc">Match previews and odds insights</span></a>
        <a href="$($prefix)calculator.html" class="explore-link-item">&#x1F4CA; Odds Calculator<span class="link-desc">Convert odds, Kelly, arbitrage</span></a>
        <a href="$($prefix)compare.html" class="explore-link-item">&#x1F4CB; Odds Comparison<span class="link-desc">Best odds across bookmakers</span></a>
        <a href="$($prefix)analyzer.html" class="explore-link-item">&#x1F52C; Probability Analyzer<span class="link-desc">Market probability and heatmaps</span></a>
        <a href="$($prefix)leagues/world-cup.html" class="explore-link-item">&#x1F3C6; World Cup 2026<span class="link-desc">FIFA World Cup odds</span></a>
        <a href="$($prefix)leagues/nfl.html" class="explore-link-item">&#x1F3C8; NFL<span class="link-desc">NFL odds and analysis</span></a>
      </div>
    </div>
    <div class="last-updated-bar">Last updated: <span class="last-updated-time">--</span></div>
"@
}

# === Modify calculator.html ===
Write-Output "Modifying calculator.html..."
$c = [System.IO.File]::ReadAllText("$baseDir\calculator.html", [System.Text.Encoding]::UTF8)

# Add preload after the icon link
$c = $c.Replace(
  '<link rel="alternate" hreflang="x-default" href="https://10110289.xyz/calculator.html" />',
  '<link rel="alternate" hreflang="x-default" href="https://10110289.xyz/calculator.html" />' + "`n" + $preloadHTML.Replace('daily.html', '../daily.html').Replace('calculator.html', 'calculator.html').Replace('compare.html', 'compare.html').Replace('analyzer.html', 'analyzer.html')
)

# Add CSS before </style>
$c = $c.Replace('</style>', $shareCSS + "`n</style>")

# Add breadcrumb after top-nav closing div, before container
$c = $c.Replace(
  '<div class="container">',
  '<div class="breadcrumb"><a href="https://10110289.xyz/">Home</a><span class="sep">&#x203A;</span><a href="index.html">Tools</a><span class="sep">&#x203A;</span>Calculator</div>' + "`n<div class="container">"
)

# Add share bar + explore before disclaimer
$c = $c.Replace(
  '<div class="disclaimer"',
  (Add-ShareBarHtml) + "`n<div class="disclaimer""
)

# Add share JS before last </script>
$lastIdx = $c.LastIndexOf('</script>')
$c = $c.Substring(0, $lastIdx) + $shareJS + "`n" + $c.Substring($lastIdx)

[System.IO.File]::WriteAllText("$baseDir\calculator.html", $c, (New-Object System.Text.UTF8Encoding($false)))
Write-Output "calculator.html done"

# === Modify analyzer.html ===
Write-Output "Modifying analyzer.html..."
$c = [System.IO.File]::ReadAllText("$baseDir\analyzer.html", [System.Text.Encoding]::UTF8)

$c = $c.Replace(
  '<link rel="alternate" hreflang="x-default" href="https://10110289.xyz/analyzer.html" />',
  '<link rel="alternate" hreflang="x-default" href="https://10110289.xyz/analyzer.html" />' + "`n" + $preloadHTML
)

$c = $c.Replace('</style>', $shareCSS + "`n</style>")

$c = $c.Replace(
  '<div class="container">',
  '<div class="breadcrumb"><a href="https://10110289.xyz/">Home</a><span class="sep">&#x203A;</span><a href="index.html">Tools</a><span class="sep">&#x203A;</span>Analyzer</div>' + "`n<div class="container">"
)

$c = $c.Replace(
  '<div class="disclaimer"',
  (Add-ShareBarHtml) + "`n<div class="disclaimer""
)

$lastIdx = $c.LastIndexOf('</script>')
$c = $c.Substring(0, $lastIdx) + $shareJS + "`n" + $c.Substring($lastIdx)

[System.IO.File]::WriteAllText("$baseDir\analyzer.html", $c, (New-Object System.Text.UTF8Encoding($false)))
Write-Output "analyzer.html done"

# === Modify compare.html ===
Write-Output "Modifying compare.html..."
$c = [System.IO.File]::ReadAllText("$baseDir\compare.html", [System.Text.Encoding]::UTF8)

$c = $c.Replace(
  '<link rel="alternate" hreflang="x-default" href="https://10110289.xyz/compare.html" />',
  '<link rel="alternate" hreflang="x-default" href="https://10110289.xyz/compare.html" />' + "`n" + $preloadHTML
)

$c = $c.Replace('</style>', $shareCSS + "`n</style>")

$c = $c.Replace(
  '<div class="container">',
  '<div class="breadcrumb"><a href="https://10110289.xyz/">Home</a><span class="sep">&#x203A;</span><a href="index.html">Tools</a><span class="sep">&#x203A;</span>Compare</div>' + "`n<div class="container">"
)

$c = $c.Replace(
  '<div class="disclaimer"',
  (Add-ShareBarHtml) + "`n<div class="disclaimer""
)

$lastIdx = $c.LastIndexOf('</script>')
$c = $c.Substring(0, $lastIdx) + $shareJS + "`n" + $c.Substring($lastIdx)

[System.IO.File]::WriteAllText("$baseDir\compare.html", $c, (New-Object System.Text.UTF8Encoding($false)))
Write-Output "compare.html done"

Write-Output "All 3 tool pages modified successfully"
