#!/usr/bin/env python3
"""Fix encoding corruption in sportpredict/index.html translations."""
import re

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

# Read as raw bytes, decode as UTF-8
with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

# ============================================================
# I18N object - hero translations (first translations block)
# ============================================================
# These are inside const I18N = { zh: { ... }, en: { ... }, ... }

# Strategy: For each language block in I18N, find the hero keys and replace them.
# We'll use regex to find each language block and fix the hero lines within it.

# Correct hero translations for all 10 languages
i18n_hero_fixes = {
    'zh': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'全球体育赔率数据分析平台'",
        'heroTag1': "'📊 实时赔率'",
        'heroTag2': "'🎯 市场概率'",
        'heroTag3': "'🔮 差异分析'",
        'heroBtnAnalyze': "'📊 开始分析'",
        'heroBtnFavorites': "'⭐ 收藏赛事'",
    },
    'en': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'Global Sports Odds Data Analysis Platform'",
        'heroTag1': "'📊 Live Odds'",
        'heroTag2': "'🎯 Market Probability'",
        'heroTag3': "'🔮 Discrepancy Analysis'",
        'heroBtnAnalyze': "'📊 Start Analysis'",
        'heroBtnFavorites': "'⭐ Favorites'",
    },
    'es': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'Plataforma global de análisis de datos de cuotas deportivas'",
        'heroTag1': "'📊 Cuotas en vivo'",
        'heroTag2': "'🎯 Probabilidad de mercado'",
        'heroTag3': "'🔮 Análisis de discrepancia'",
        'heroBtnAnalyze': "'📊 Iniciar análisis'",
        'heroBtnFavorites': "'⭐ Favoritos'",
    },
    'pt': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'Plataforma global de análise de dados de odds esportivas'",
        'heroTag1': "'📊 Odds ao vivo'",
        'heroTag2': "'🎯 Probabilidade de mercado'",
        'heroTag3': "'🔮 Análise de discrepância'",
        'heroBtnAnalyze': "'📊 Iniciar análise'",
        'heroBtnFavorites': "'⭐ Favoritos'",
    },
    'ar': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'منصة عالمية لتحليل بيانات احتمالات الرياضة'",
        'heroTag1': "'📊 احتمالات مباشرة'",
        'heroTag2': "'🎯 احتمال السوق'",
        'heroTag3': "'🔮 تحليل التباين'",
        'heroBtnAnalyze': "'📊 بدء التحليل'",
        'heroBtnFavorites': "'⭐ المفضلة'",
    },
    'ja': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'グローバルスポーツオッズデータ分析プラットフォーム'",
        'heroTag1': "'📊 リアルタイムオッズ'",
        'heroTag2': "'🎯 市場確率'",
        'heroTag3': "'🔮 差異分析'",
        'heroBtnAnalyze': "'📊 分析開始'",
        'heroBtnFavorites': "'⭐ お気に入り'",
    },
    'ko': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'글로벌 스포츠 배당률 데이터 분석 플랫폼'",
        'heroTag1': "'📊 실시간 배당률'",
        'heroTag2': "'🎯 시장 확률'",
        'heroTag3': "'🔮 차이 분석'",
        'heroBtnAnalyze': "'📊 분석 시작'",
        'heroBtnFavorites': "'⭐ 즐겨찾기'",
    },
    'ru': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'Глобальная платформа анализа данных спортивных коэффициентов'",
        'heroTag1': "'📊 Коэффициенты в реальном времени'",
        'heroTag2': "'🎯 Рыночная вероятность'",
        'heroTag3': "'🔮 Анализ расхождений'",
        'heroBtnAnalyze': "'📊 Начать анализ'",
        'heroBtnFavorites': "'⭐ Избранное'",
    },
    'fr': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'Plateforme mondiale d\\'analyse des cotes sportives'",
        'heroTag1': "'📊 Cotes en direct'",
        'heroTag2': "'🎯 Probabilité du marché'",
        'heroTag3': "'🔮 Analyse des écarts'",
        'heroBtnAnalyze': "'📊 Commencer l\\'analyse'",
        'heroBtnFavorites': "'⭐ Favoris'",
    },
    'de': {
        'heroTitle': "'🏆 SportPredict'",
        'heroSubtitle': "'Globale Sportquoten-Datenanalyse-Plattform'",
        'heroTag1': "'📊 Live-Quoten'",
        'heroTag2': "'🎯 Marktwahrscheinlichkeit'",
        'heroTag3': "'🔮 Abweichungsanalyse'",
        'heroBtnAnalyze': "'📊 Analyse starten'",
        'heroBtnFavorites': "'⭐ Favoriten'",
    },
}

# For each language in I18N, replace the hero key lines
# Pattern: match "    heroKey: '...'  ," within a language block
# We'll find each language block and replace within it

hero_keys = ['heroTitle', 'heroSubtitle', 'heroTag1', 'heroTag2', 'heroTag3', 'heroBtnAnalyze', 'heroBtnFavorites']

# We need to be careful about which block (I18N vs NEW_I18N) we're modifying.
# The I18N block comes first. Let's find the boundaries.
# I18N starts at "const I18N = {" and NEW_I18N starts at "const NEW_I18N = {"

i18n_start = content.find('const I18N = {')
new_i18n_start = content.find('const NEW_I18N = {')

print(f"I18N starts at char {i18n_start}")
print(f"NEW_I18N starts at char {new_i18n_start}")

# For the I18N block, fix hero translations
for lang, fixes in i18n_hero_fixes.items():
    # Find the language block within I18N
    # Pattern: "  lang: {"
    # We need to find it within the I18N section only
    
    # Search for "  lang: {" pattern
    lang_pattern = re.compile(r'  ' + lang + r': \{')
    
    for match in lang_pattern.finditer(content):
        block_start = match.start()
        
        # Only process if this is within the I18N block (before NEW_I18N)
        if block_start > new_i18n_start:
            continue
        
        # Find the end of this language block (next "  },")
        # or next "  xx: {" 
        block_end = content.find('\n  },', block_start)
        if block_end == -1:
            block_end = content.find('\n  }', block_start)
        
        block_content = content[block_start:block_end]
        
        # Now fix each hero key within this block
        for key in hero_keys:
            if key not in fixes:
                continue
            
            new_value = fixes[key]
            
            # Find the line with this key in the block
            # Pattern: "    key: '...'  ," or "    key: '...',"
            # The value might be garbled, so we match on the key name
            key_pattern = re.compile(
                r"(    " + re.escape(key) + r":\s*)'[^']*(?:'[^']*)*',",
                re.DOTALL
            )
            
            # For keys with escaped quotes like fr heroSubtitle
            key_pattern2 = re.compile(
                r"(    " + re.escape(key) + r":\s*)\"[^\"]*\",",
                re.DOTALL
            )
            
            m = key_pattern.search(block_content)
            if m:
                old_line = m.group(0)
                new_line = m.group(1) + new_value + ","
                if old_line != new_line:
                    print(f"  [{lang}] {key}: replacing garbled line")
                    block_content = block_content.replace(old_line, new_line, 1)
            else:
                m2 = key_pattern2.search(block_content)
                if m2:
                    old_line = m2.group(0)
                    new_line = m2.group(1) + new_value + ","
                    if old_line != new_line:
                        print(f"  [{lang}] {key}: replacing garbled line (double-quote)")
                        block_content = block_content.replace(old_line, new_line, 1)
                else:
                    print(f"  [{lang}] {key}: NOT FOUND in block")
        
        # Replace the block in content
        content = content[:block_start] + block_content + content[block_end:]

print("\n=== I18N hero fixes applied ===\n")

# ============================================================
# Now fix NEW_I18N - the V3 features translations
# ============================================================

new_i18n_fixes = {
    'zh': {
        'searchPlaceholder': "'搜索比赛、队伍...'",
        'noFavorites': "'暂无收藏'",
        'favAdded': "'已收藏'",
        'favRemoved': "'已取消收藏'",
        'filterHot': "'🔥 热门'",
        'filterUpcoming': "'⏱ 即将开始'",
        'filterLive': "'🟢 进行中'",
        'filterArb': "'🌟 差异分析'",
        'filterHighAttention': "'👀 高关注度'",
        'timeJustNow': "'刚刚'",
        'timeMinutesLater': "'{n}分钟后'",
        'timeHoursLater': "'{n}小时后'",
        'timeTomorrow': "'明天'",
        'timeDaysLater': "'{n}天后'",
        'timeStarted': "'已开始'",
    },
    'en': {
        'searchPlaceholder': "'Search matches, teams...'",
        'noFavorites': "'No favorites yet'",
        'favAdded': "'Added to favorites'",
        'favRemoved': "'Removed from favorites'",
        'filterHot': "'🔥 Hot'",
        'filterUpcoming': "'⏱ Starting Soon'",
        'filterLive': "'🟢 Live'",
        'filterArb': "'🌟 Discrepancy'",
        'filterHighAttention': "'👀 High Attention'",
        'timeJustNow': "'Just now'",
        'timeMinutesLater': "'{n} min'",
        'timeHoursLater': "'{n}h'",
        'timeTomorrow': "'Tomorrow'",
        'timeDaysLater': "'{n} days'",
        'timeStarted': "'Started'",
    },
    'es': {
        'searchPlaceholder': "'Buscar partidos, equipos...'",
        'noFavorites': "'Sin favoritos'",
        'favAdded': "'Añadido a favoritos'",
        'favRemoved': "'Eliminado de favoritos'",
        'filterHot': "'🔥 Popular'",
        'filterUpcoming': "'⏱ Próximo'",
        'filterLive': "'🟢 En vivo'",
        'filterArb': "'🌟 Discrepancia'",
        'filterHighAttention': "'👀 Alta atención'",
        'timeJustNow': "'Ahora'",
        'timeMinutesLater': "'{n} min'",
        'timeHoursLater': "'{n}h'",
        'timeTomorrow': "'Mañana'",
        'timeDaysLater': "'{n} días'",
        'timeStarted': "'Comenzado'",
    },
    'pt': {
        'searchPlaceholder': "'Buscar jogos, times...'",
        'noFavorites': "'Sem favoritos'",
        'favAdded': "'Adicionado aos favoritos'",
        'favRemoved': "'Removido dos favoritos'",
        'filterHot': "'🔥 Popular'",
        'filterUpcoming': "'⏱ Em breve'",
        'filterLive': "'🟢 Ao vivo'",
        'filterArb': "'🌟 Discrepância'",
        'filterHighAttention': "'👀 Alta atenção'",
        'timeJustNow': "'Agora'",
        'timeMinutesLater': "'{n} min'",
        'timeHoursLater': "'{n}h'",
        'timeTomorrow': "'Amanhã'",
        'timeDaysLater': "'{n} dias'",
        'timeStarted': "'Iniciado'",
    },
    'ar': {
        'searchPlaceholder': "'بحث عن مباريات، فرق...'",
        'noFavorites': "'لا مفضلات'",
        'favAdded': "'أضيف إلى المفضلة'",
        'favRemoved': "'أزيل من المفضلة'",
        'filterHot': "'🔥 رائج'",
        'filterUpcoming': "'⏱ قريباً'",
        'filterLive': "'🟢 مباشر'",
        'filterArb': "'🌟 تباين'",
        'filterHighAttention': "'👀 اهتمام عالي'",
        'timeJustNow': "'الآن'",
        'timeMinutesLater': "'{n} د'",
        'timeHoursLater': "'{n} س'",
        'timeTomorrow': "'غداً'",
        'timeDaysLater': "'{n} أيام'",
        'timeStarted': "'بدأ'",
    },
    'ja': {
        'searchPlaceholder': "'試合、チームを検索...'",
        'noFavorites': "'お気に入りなし'",
        'favAdded': "'お気に入りに追加'",
        'favRemoved': "'お気に入りから削除'",
        'filterHot': "'🔥 人気'",
        'filterUpcoming': "'⏱ 開始間近'",
        'filterLive': "'🟢 試合中'",
        'filterArb': "'🌟 差異分析'",
        'filterHighAttention': "'👀 高注目'",
        'timeJustNow': "'たった今'",
        'timeMinutesLater': "'{n}分後'",
        'timeHoursLater': "'{n}時間後'",
        'timeTomorrow': "'明日'",
        'timeDaysLater': "'{n}日後'",
        'timeStarted': "'開始済'",
    },
    'ko': {
        'searchPlaceholder': "'경기, 팀 검색...'",
        'noFavorites': "'즐겨찾기 없음'",
        'favAdded': "'즐겨찾기 추가'",
        'favRemoved': "'즐겨찾기 제거'",
        'filterHot': "'🔥 인기'",
        'filterUpcoming': "'⏱ 곧 시작'",
        'filterLive': "'🟢 진행 중'",
        'filterArb': "'🌟 차이 분석'",
        'filterHighAttention': "'👀 높은 관심'",
        'timeJustNow': "'방금'",
        'timeMinutesLater': "'{n}분 후'",
        'timeHoursLater': "'{n}시간 후'",
        'timeTomorrow': "'내일'",
        'timeDaysLater': "'{n}일 후'",
        'timeStarted': "'시작됨'",
    },
    'ru': {
        'searchPlaceholder': "'Поиск матчей, команд...'",
        'noFavorites': "'Нет избранных'",
        'favAdded': "'Добавлено в избранное'",
        'favRemoved': "'Удалено из избранного'",
        'filterHot': "'🔥 Популярные'",
        'filterUpcoming': "'⏱ Скоро'",
        'filterLive': "'🟢 В эфире'",
        'filterArb': "'🌟 Расхождение'",
        'filterHighAttention': "'👀 Высокий интерес'",
        'timeJustNow': "'Сейчас'",
        'timeMinutesLater': "'{n} мин'",
        'timeHoursLater': "'{n} ч'",
        'timeTomorrow': "'Завтра'",
        'timeDaysLater': "'{n} дн.'",
        'timeStarted': "'Началось'",
    },
    'fr': {
        'searchPlaceholder': "'Rechercher matchs, équipes...'",
        'noFavorites': "'Aucun favori'",
        'favAdded': "'Ajouté aux favoris'",
        'favRemoved': "'Retiré des favoris'",
        'filterHot': "'🔥 Tendance'",
        'filterUpcoming': "'⏱ Bientôt'",
        'filterLive': "'🟢 En direct'",
        'filterArb': "'🌟 Écart'",
        'filterHighAttention': "'👀 Forte attention'",
        'timeJustNow': "'À l\\'instant'",
        'timeMinutesLater': "'{n} min'",
        'timeHoursLater': "'{n}h'",
        'timeTomorrow': "'Demain'",
        'timeDaysLater': "'{n} jours'",
        'timeStarted': "'Commencé'",
    },
    'de': {
        'searchPlaceholder': "'Spiele, Teams suchen...'",
        'noFavorites': "'Keine Favoriten'",
        'favAdded': "'Zu Favoriten hinzugefügt'",
        'favRemoved': "'Aus Favoriten entfernt'",
        'filterHot': "'🔥 Beliebt'",
        'filterUpcoming': "'⏱ Bald'",
        'filterLive': "'🟢 Live'",
        'filterArb': "'🌟 Differenz'",
        'filterHighAttention': "'👀 Hohe Aufmerksamkeit'",
        'timeJustNow': "'Gerade eben'",
        'timeMinutesLater': "'{n} Min.'",
        'timeHoursLater': "'{n} Std.'",
        'timeTomorrow': "'Morgen'",
        'timeDaysLater': "'{n} Tage'",
        'timeStarted': "'Gestartet'",
    },
}

# Apply NEW_I18N fixes - same approach but within NEW_I18N block
for lang, fixes in new_i18n_fixes.items():
    lang_pattern = re.compile(r'  ' + lang + r': \{')
    
    for match in lang_pattern.finditer(content):
        block_start = match.start()
        
        # Only process if this is within the NEW_I18N block
        if block_start < new_i18n_start:
            continue
        
        # Find end of block
        block_end = content.find('\n  },', block_start)
        if block_end == -1:
            block_end = content.find('\n  }', block_start)
        
        block_content = content[block_start:block_end]
        
        for key, new_value in fixes.items():
            # Match "    key: '...',"
            key_pattern = re.compile(
                r"(    " + re.escape(key) + r":\s*)'[^']*(?:'[^']*)*',",
                re.DOTALL
            )
            key_pattern2 = re.compile(
                r"(    " + re.escape(key) + r":\s*)\"[^\"]*\",",
                re.DOTALL
            )
            
            m = key_pattern.search(block_content)
            if m:
                old_line = m.group(0)
                new_line = m.group(1) + new_value + ","
                if old_line != new_line:
                    print(f"  [NEW_I18N/{lang}] {key}: replacing garbled line")
                    block_content = block_content.replace(old_line, new_line, 1)
            else:
                m2 = key_pattern2.search(block_content)
                if m2:
                    old_line = m2.group(0)
                    new_line = m2.group(1) + new_value + ","
                    if old_line != new_line:
                        print(f"  [NEW_I18N/{lang}] {key}: replacing garbled line (double-quote)")
                        block_content = block_content.replace(old_line, new_line, 1)
                else:
                    print(f"  [NEW_I18N/{lang}] {key}: NOT FOUND in block")
        
        content = content[:block_start] + block_content + content[block_end:]

print("\n=== NEW_I18N V3 feature fixes applied ===\n")

# Write back as UTF-8 without BOM
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("File saved successfully as UTF-8!")

# Verify by re-reading
with open(filepath, 'rb') as f:
    verify = f.read()
decoded = verify.decode('utf-8')
print(f"File size: {len(decoded)} chars")
