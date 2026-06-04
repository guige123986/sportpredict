$content = [System.IO.File]::ReadAllText('C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html', [System.Text.Encoding]::UTF8)
$lines = $content -split "`n"
# Check for mojibake patterns - lines with garbled characters near translation keys
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'skeleton|backToTop|fadeIn|searchPlaceholder|toast|filterTab|favEmpty|favAdd|favRemove|noFavorites|clearFav') {
        $trimmed = $lines[$i].Trim()
        if ($trimmed.Length -gt 200) { $trimmed = $trimmed.Substring(0, 200) }
        Write-Host "$($i+1): $trimmed"
    }
}
