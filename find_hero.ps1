$content = [System.IO.File]::ReadAllText('C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html', [System.Text.Encoding]::UTF8)
$lines = $content -split "`n"
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'heroTitle|heroSubtitle|heroTag1|heroTag2|heroTag3|heroBtnAnalyze|heroBtnFavorites') {
        $trimmed = $lines[$i].Trim()
        if ($trimmed.Length -gt 200) { $trimmed = $trimmed.Substring(0, 200) }
        Write-Host "$($i+1): $trimmed"
    }
}
