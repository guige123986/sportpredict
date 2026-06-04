import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

lines = content.split('\n')

# Find NEW_I18N start
new_i18n_line = None
for i, line in enumerate(lines):
    if 'const NEW_I18N' in line:
        new_i18n_line = i
        break

# Print all NEW_I18N content
for i in range(new_i18n_line, min(new_i18n_line + 350, len(lines))):
    print(f"L{i+1}: {lines[i].rstrip()[:200]}")
