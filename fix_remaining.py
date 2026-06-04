import sys, re
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'C:\Users\wzgui\.openclaw-autoclaw\workspace\sportpredict\index.html'

with open(filepath, 'rb') as f:
    raw = f.read()
content = raw.decode('utf-8', errors='replace')

# Fix garbled compact lines in NEW_I18N
# These are lines with missing closing quotes on values
# Pattern: key: 'value, key2: 'value2  (missing ' before ,)

# NEW_I18N zh fixes (compact format)
content = content.replace(
    "    lastRefresh: '上次刷新', viewAll: '查看全部', tabAllEvents: '所有赛事,",
    "    lastRefresh: '上次刷新', viewAll: '查看全部', tabAllEvents: '所有赛事',"
)
content = content.replace(
    "    matchLive: '进行中, matchUpcoming: '即将开始, matchScheduled: '未开始, matchFinished: '已结束,",
    "    matchLive: '进行中', matchUpcoming: '即将开始', matchScheduled: '未开始', matchFinished: '已结束',"
)
content = content.replace(
    "    sportLacrosse: '长曲棍球', sportMixedMartialArts: '综合格斗', sportPolitics: '政治', sportRugbyLeague: '橄榄球联赛,",
    "    sportLacrosse: '长曲棍球', sportMixedMartialArts: '综合格斗', sportPolitics: '政治', sportRugbyLeague: '橄榄球联赛',"
)

# NEW_I18N ja fixes
content = content.replace(
    "    noEvents: '予定されたイベントなし, autoRefresh: '自動更新', every5Min: '5分ごとに更新',",
    "    noEvents: '予定されたイベントなし', autoRefresh: '自動更新', every5Min: '5分ごとに更新',"
)
content = content.replace(
    "    lastRefresh: '最終更新, viewAll: 'すべて表示, tabAllEvents: '全イベント,",
    "    lastRefresh: '最終更新', viewAll: 'すべて表示', tabAllEvents: '全イベント',"
)
content = content.replace(
    "    matchLive: '試合中, matchUpcoming: 'まもなく開始', matchScheduled: '予定', matchFinished: '終了',",
    "    matchLive: '試合中', matchUpcoming: 'まもなく開始', matchScheduled: '予定', matchFinished: '終了',"
)
content = content.replace(
    "    sportLacrosse: 'ラクロス', sportMixedMartialArts: '総合格闘技', sportPolitics: '政治', sportRugbyLeague: 'ラグビーリーグ,",
    "    sportLacrosse: 'ラクロス', sportMixedMartialArts: '総合格闘技', sportPolitics: '政治', sportRugbyLeague: 'ラグビーリーグ',"
)
content = content.replace(
    "    arbOpportunityCount: '{count}試合にオッズ差異の機会あり,",
    "    arbOpportunityCount: '{count}試合にオッズ差異の機会あり',"
)
content = content.replace(
    "    myFavorites: 'お気に入り,",
    "    myFavorites: 'お気に入り',"
)

# NEW_I18N ko fixes
content = content.replace(
    "    lastRefresh: '마지막 새로고침', viewAll: '전체 보기', tabAllEvents: '전체 이벤트,",
    "    lastRefresh: '마지막 새로고침', viewAll: '전체 보기', tabAllEvents: '전체 이벤트',"
)
content = content.replace(
    "    matchLive: '진행 중, matchUpcoming: '곧 시작', matchScheduled: '예정', matchFinished: '종료',",
    "    matchLive: '진행 중', matchUpcoming: '곧 시작', matchScheduled: '예정', matchFinished: '종료',"
)
content = content.replace(
    "    sportLacrosse: '라크로스', sportMixedMartialArts: '종합격투기, sportPolitics: '정치', sportRugbyLeague: '럭비리그',",
    "    sportLacrosse: '라크로스', sportMixedMartialArts: '종합격투기', sportPolitics: '정치', sportRugbyLeague: '럭비리그',"
)

# Now fix ANALYSIS_I18N garbled lines
# Let me find and fix the zh block in ANALYSIS_I18N
analysis_fixes_zh = [
    ("favored: '被看好,", "favored: '被看好',"),
    ("oddsDiscrepancyFound: '发现赔率差异机会！,", "oddsDiscrepancyFound: '发现赔率差异机会！',"),
    ("highest: '最�?,", "highest: '最高',"),
    ("lowest: '最�?,", "lowest: '最低',"),
    ("lastUpdated: '最后更新,", "lastUpdated: '最后更新',"),
    ("bookmakersProviding: '家机构提供赔率,", "bookmakersProviding: '家机构提供赔率',"),
    ("votes: '�?,", "votes: '票',"),
    ("voted: '已投票,", "voted: '已投票',"),
    ("voteSuccess: '投票成功！,", "voteSuccess: '投票成功！',"),
    ("copiedToClipboard: '已复制到剪贴板,", "copiedToClipboard: '已复制到剪贴板',"),
]

for old, new in analysis_fixes_zh:
    content = content.replace(old, new)

# Write back
with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

print(f"File saved! Total chars: {len(content)}")
