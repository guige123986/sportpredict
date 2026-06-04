import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

# Find I18N and NEW_I18N boundaries
i18n_start = content.find('const I18N = {')
i18n_end = content.find('};', i18n_start) + 2
new_i18n_start = content.find('const NEW_I18N = {')
new_i18n_end = content.find('};', new_i18n_start) + 2

print(f"I18N block: chars {i18n_start}-{i18n_end}")
print(f"NEW_I18N block: chars {new_i18n_start}-{new_i18n_end}")

# Find all language block starts in I18N
import re
for m in re.finditer(r'  (\w+): \{', content[i18n_start:new_i18n_start]):
    lang = m.group(1)
    pos = i18n_start + m.start()
    # Count lines in this block (approximate)
    line_num = content[:pos].count('\n') + 1
    print(f"  I18N language block '{lang}' starts at line {line_num}")

print()

# Same for NEW_I18N
for m in re.finditer(r'  (\w+): \{', content[new_i18n_start:new_i18n_end]):
    lang = m.group(1)
    pos = new_i18n_start + m.start()
    line_num = content[:pos].count('\n') + 1
    print(f"  NEW_I18N language block '{lang}' starts at line {line_num}")

# Also check: what's between I18N end and NEW_I18N start?
between = content[i18n_end:new_i18n_start].strip()
print(f"\nBetween I18N and NEW_I18N: {len(between)} chars")
if between:
    print(f"  First 200 chars: {between[:200]}")
