#!/usr/bin/env python3
"""Clean up duplicate hero keys and fix wrong assignments in I18N blocks."""
import sys, re
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

# Correct hero keys for each language (to add after heroTitle)
correct_hero = {
    'zh': [
        "    heroSubtitle: '全球体育赔率数据分析平台',",
        "    heroTag1: '📊 实时赔率',",
        "    heroTag2: '🎯 市场概率',",
        "    heroTag3: '🔮 差异分析',",
        "    heroBtnAnalyze: '📊 开始分析',",
        "    heroBtnFavorites: '⭐ 收藏赛事',",
    ],
    'en': [
        "    heroSubtitle: 'Global Sports Odds Data Analysis Platform',",
        "    heroTag1: '📊 Live Odds',",
        "    heroTag2: '🎯 Market Probability',",
        "    heroTag3: '🔮 Discrepancy Analysis',",
        "    heroBtnAnalyze: '📊 Start Analysis',",
        "    heroBtnFavorites: '⭐ Favorites',",
    ],
    'es': [
        "    heroSubtitle: 'Plataforma global de análisis de datos de cuotas deportivas',",
        "    heroTag1: '📊 Cuotas en vivo',",
        "    heroTag2: '🎯 Probabilidad de mercado',",
        "    heroTag3: '🔮 Análisis de discrepancia',",
        "    heroBtnAnalyze: '📊 Iniciar análisis',",
        "    heroBtnFavorites: '⭐ Favoritos',",
    ],
    'pt': [
        "    heroSubtitle: 'Plataforma global de análise de dados de odds esportivas',",
        "    heroTag1: '📊 Odds ao vivo',",
        "    heroTag2: '🎯 Probabilidade de mercado',",
        "    heroTag3: '🔮 Análise de discrepância',",
        "    heroBtnAnalyze: '📊 Iniciar análise',",
        "    heroBtnFavorites: '⭐ Favoritos',",
    ],
    'ar': [
        "    heroSubtitle: 'منصة عالمية لتحليل بيانات احتمالات الرياضة',",
        "    heroTag1: '📊 احتمالات مباشرة',",
        "    heroTag2: '🎯 احتمال السوق',",
        "    heroTag3: '🔮 تحليل التباين',",
        "    heroBtnAnalyze: '📊 بدء التحليل',",
        "    heroBtnFavorites: '⭐ المفضلة',",
    ],
    'ja': [
        "    heroSubtitle: 'グローバルスポーツオッズデータ分析プラットフォーム',",
        "    heroTag1: '📊 リアルタイムオッズ',",
        "    heroTag2: '🎯 市場確率',",
        "    heroTag3: '🔮 差異分析',",
        "    heroBtnAnalyze: '📊 分析開始',",
        "    heroBtnFavorites: '⭐ お気に入り',",
    ],
    'ko': [
        "    heroSubtitle: '글로벌 스포츠 배당률 데이터 분석 플랫폼',",
        "    heroTag1: '📊 실시간 배당률',",
        "    heroTag2: '🎯 시장 확률',",
        "    heroTag3: '🔮 차이 분석',",
        "    heroBtnAnalyze: '📊 분석 시작',",
        "    heroBtnFavorites: '⭐ 즐겨찾기',",
    ],
    'ru': [
        "    heroSubtitle: 'Глобальная платформа анализа данных спортивных коэффициентов',",
        "    heroTag1: '📊 Коэффициенты в реальном времени',",
        "    heroTag2: '🎯 Рыночная вероятность',",
        "    heroTag3: '🔮 Анализ расхождений',",
        "    heroBtnAnalyze: '📊 Начать анализ',",
        "    heroBtnFavorites: '⭐ Избранное',",
    ],
    'fr': [
        "    heroSubtitle: \"Plateforme mondiale d'analyse des cotes sportives\",",
        "    heroTag1: '📊 Cotes en direct',",
        "    heroTag2: '🎯 Probabilité du marché',",
        "    heroTag3: '🔮 Analyse des écarts',",
        "    heroBtnAnalyze: \"📊 Commencer l'analyse\",",
        "    heroBtnFavorites: '⭐ Favoris',",
    ],
    'de': [
        "    heroSubtitle: 'Globale Sportquoten-Datenanalyse-Plattform',",
        "    heroTag1: '📊 Live-Quoten',",
        "    heroTag2: '🎯 Marktwahrscheinlichkeit',",
        "    heroTag3: '🔮 Abweichungsanalyse',",
        "    heroBtnAnalyze: '📊 Analyse starten',",
        "    heroBtnFavorites: '⭐ Favoriten',",
    ],
}

hero_key_names = ['heroSubtitle', 'heroTag1', 'heroTag2', 'heroTag3', 'heroBtnAnalyze', 'heroBtnFavorites']

lines = content.split('\n')

# Strategy: Process line by line
# 1. Track which language block we're in (within I18N only)
# 2. When we see heroTitle, mark the position
# 3. After heroTitle, collect all hero key lines until a non-hero-key line or },
# 4. Replace those collected lines with the correct hero keys for the current language

i18n_start_line = None
new_i18n_start_line = None
current_lang = None
result_lines = []
i = 0

while i < len(lines):
    line = lines[i]
    stripped = line.rstrip('\r')
    
    # Track I18N and NEW_I18N boundaries
    if 'const I18N = {' in stripped:
        i18n_start_line = i
    if 'const NEW_I18N = {' in stripped:
        new_i18n_start_line = i
        current_lang = None  # Reset when entering NEW_I18N
    
    # Detect language block start (only in I18N)
    if i18n_start_line is not None and (new_i18n_start_line is None or i < new_i18n_start_line):
        lang_match = re.match(r'\s+(zh|en|es|pt|ar|ja|ko|ru|fr|de):\s*\{', stripped)
        if lang_match:
            current_lang = lang_match.group(1)
    
    # Detect block end
    if stripped.strip() == '},' or stripped.strip() == '}':
        if current_lang and i18n_start_line is not None and (new_i18n_start_line is None or i < new_i18n_start_line):
            current_lang = None
    
    # When we see heroTitle within I18N, process the hero keys
    if current_lang and 'heroTitle:' in stripped and (new_i18n_start_line is None or i < new_i18n_start_line):
        # Add the heroTitle line
        result_lines.append(stripped)
        i += 1
        
        # Collect all hero key lines that follow
        hero_lines_to_remove = []
        while i < len(lines):
            next_line = lines[i].rstrip('\r')
            # Check if this line contains any hero key name
            is_hero_key = False
            for key in hero_key_names:
                if key + ':' in next_line:
                    is_hero_key = True
                    break
            
            if is_hero_key:
                hero_lines_to_remove.append(i)
                i += 1
            else:
                break
        
        # Add the correct hero keys for the current language
        if current_lang in correct_hero:
            for hero_line in correct_hero[current_lang]:
                result_lines.append(hero_line)
        else:
            print(f"WARNING: No correct hero keys for language '{current_lang}'")
        
        # Don't increment i, the next line will be processed in the next iteration
        continue
    
    result_lines.append(stripped)
    i += 1

content = '\n'.join(result_lines)

# Write back
with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

print(f"File saved! Total chars: {len(content)}")

# Verify hero keys
for lang in correct_hero:
    if f"heroBtnFavorites: '" in content or "heroBtnFavorites: '" in content:
        pass  # We'll verify with debug script

print("\nDone! Verifying...")
