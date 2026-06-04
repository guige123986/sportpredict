import re

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

# Find zh block in I18N
i18n_start = content.find('const I18N = {')
new_i18n_start = content.find('const NEW_I18N = {')

# Find zh: { within I18N
m = re.search(r'  zh: \{', content[i18n_start:new_i18n_start])
if m:
    block_start = i18n_start + m.start()
    # Find end of block
    depth = 0
    i = block_start
    while i < len(content):
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
            if depth == 0:
                block_end = i + 1
                break
        i += 1
    
    block = content[block_start:block_end]
    
    # Find heroSubtitle line
    for line in block.split('\n'):
        if 'heroSubtitle' in line:
            print(f"heroSubtitle line repr: {repr(line)}")
            print(f"heroSubtitle line bytes: {line.encode('utf-8')[:200]}")
        if 'heroTag2' in line:
            print(f"heroTag2 line repr: {repr(line)}")
        if 'heroBtnAnalyze' in line:
            print(f"heroBtnAnalyze line repr: {repr(line)}")
        if 'heroBtnFavorites' in line:
            print(f"heroBtnFavorites line repr: {repr(line)}")
