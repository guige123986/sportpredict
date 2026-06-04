const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let content = fs.readFileSync(path, 'utf8');

// Fix corrupted Chinese (zh) strings
const zhFixes = {
  "sidebarLogo: '全赛事数据分\\?": "sidebarLogo: '全赛事数据分析'",
  "sidebarLogo: '全赛事数据分�?": "sidebarLogo: '全赛事数据分析'",
  "sidebarFooter: '数据仅供参\\?· 不构成任何建\\?": "sidebarFooter: '数据仅供参考 · 不构成任何建议'",
  "sidebarFooter: '数据仅供参�?· 不构成任何建�?": "sidebarFooter: '数据仅供参考 · 不构成任何建议'",
  "draw: '\\?": "draw: '平'",
  "draw: '�?": "draw: '平'",
  "confidence: '数据一致\\?": "confidence: '数据一致性'",
  "confidence: '数据一致�?": "confidence: '数据一致性'",
  "crossCombo: '跨运动数据洞\\?": "crossCombo: '跨运动数据洞察'",
  "crossCombo: '跨运动数据洞�?": "crossCombo: '跨运动数据洞察'",
  "crossCombo3: '跨运动三场组\\?": "crossCombo3: '跨运动三场组合'",
  "crossCombo3: '跨运动三场组�?": "crossCombo3: '跨运动三场组合'",
  "lowRisk: '低风\\?": "lowRisk: '低风险'",
  "lowRisk: '低风�?": "lowRisk: '低风险'",
  "mediumRisk: '中风\\?": "mediumRisk: '中风险'",
  "mediumRisk: '中风�?": "mediumRisk: '中风险'",
  "highRisk: '高风\\?": "highRisk: '高风险'",
  "highRisk: '高风�?": "highRisk: '高风险'",
  "dashHitRate: '📊 各运动隐含胜率分\\?": "dashHitRate: '📊 各运动隐含胜率分布'",
  "dashHitRate: '📊 各运动隐含胜率分�?": "dashHitRate: '📊 各运动隐含胜率分布'",
  "dashArbDesc: '差异\\?": "dashArbDesc: '差异率'",
  "dashArbDesc: '差异�?": "dashArbDesc: '差异率'",
  "loading: '加载\\?..'": "loading: '加载中...'",
  "loading: '加载�?..'": "loading: '加载中...'",
  "arbProfit: '差异\\?": "arbProfit: '差异率'",
  "arbProfit: '差异�?": "arbProfit: '差异率'",
  "bestOdds: '最优赔\\?": "bestOdds: '最优赔率'",
  "bestOdds: '最优赔�?": "bestOdds: '最优赔率'",
  "sportAmericanFootball: '橄榄\\?": "sportAmericanFootball: '橄榄球'",
  "sportAmericanFootball: '橄榄�?": "sportAmericanFootball: '橄榄球'",
  "sportRugby: '英式橄榄\\?": "sportRugby: '英式橄榄球'",
  "sportRugby: '英式橄榄�?": "sportRugby: '英式橄榄球'",
  "sportGolf: '高尔\\?": "sportGolf: '高尔夫'",
  "sportGolf: '高尔�?": "sportGolf: '高尔夫'",
  "sportCycling: '自行\\?": "sportCycling: '自行车'",
  "sportCycling: '自行�?": "sportCycling: '自行车'",
  "sportSnooker: '斯诺\\?": "sportSnooker: '斯诺克'",
  "sportSnooker: '斯诺�?": "sportSnooker: '斯诺克'",
  "sportTableTennis: '乒乓\\?": "sportTableTennis: '乒乓球'",
  "sportTableTennis: '乒乓�?": "sportTableTennis: '乒乓球'",
  "sportBadminton: '羽毛\\?": "sportBadminton: '羽毛球'",
  "sportBadminton: '羽毛�?": "sportBadminton: '羽毛球'",
  "chFIFADesc: 'FIFA官方流媒体平\\?": "chFIFADesc: 'FIFA官方流媒体平台'",
  "chFIFADesc: 'FIFA官方流媒体平�?": "chFIFADesc: 'FIFA官方流媒体平台'",
  "chLeagueOfficialDesc: '各联赛官方数字转播平\\?": "chLeagueOfficialDesc: '各联赛官方数字转播平台'",
  "chLeagueOfficialDesc: '各联赛官方数字转播平�?": "chLeagueOfficialDesc: '各联赛官方数字转播平台'",
  "chNBALeaguePassDesc: 'NBA官方流媒体订阅服\\?": "chNBALeaguePassDesc: 'NBA官方流媒体订阅服务'",
  "chNBALeaguePassDesc: 'NBA官方流媒体订阅服�?": "chNBALeaguePassDesc: 'NBA官方流媒体订阅服务'",
  "chESPNPlusDesc: 'ESPN流媒体订阅服\\?": "chESPNPlusDesc: 'ESPN流媒体订阅服务'",
  "chESPNPlusDesc: 'ESPN流媒体订阅服�?": "chESPNPlusDesc: 'ESPN流媒体订阅服务'",
  "chEurosportDesc: '欧洲体育频道流媒\\?": "chEurosportDesc: '欧洲体育频道流媒体'",
  "chEurosportDesc: '欧洲体育频道流媒�?": "chEurosportDesc: '欧洲体育频道流媒体'",
  "chMLBtvDesc: 'MLB官方流媒体订阅服\\?": "chMLBtvDesc: 'MLB官方流媒体订阅服务'",
  "chMLBtvDesc: 'MLB官方流媒体订阅服�?": "chMLBtvDesc: 'MLB官方流媒体订阅服务'",
  "chNFLGamePassDesc: 'NFL官方流媒体订阅服\\?": "chNFLGamePassDesc: 'NFL官方流媒体订阅服务'",
  "chNFLGamePassDesc: 'NFL官方流媒体订阅服�?": "chNFLGamePassDesc: 'NFL官方流媒体订阅服务'",
  "chNHLtvDesc: 'NHL官方流媒体订阅服\\?": "chNHLtvDesc: 'NHL官方流媒体订阅服务'",
  "chNHLtvDesc: 'NHL官方流媒体订阅服�?": "chNHLtvDesc: 'NHL官方流媒体订阅服务'",
  "chDAZNDesc: '全球体育流媒体平\\?": "chDAZNDesc: '全球体育流媒体平台'",
  "chDAZNDesc: '全球体育流媒体平�?": "chDAZNDesc: '全球体育流媒体平台'",
  "disclaimer: '⚠️ 免责声明：本平台所有分析数据均基于市场赔率计算，仅供参考，不构成任何建议\\?": "disclaimer: '⚠️ 免责声明：本平台所有分析数据均基于市场赔率计算，仅供参考，不构成任何建议。'",
  "disclaimer: '⚠️ 免责声明：本平台所有分析数据均基于市场赔率计算，仅供参考，不构成任何建议�?": "disclaimer: '⚠️ 免责声明：本平台所有分析数据均基于市场赔率计算，仅供参考，不构成任何建议。'",
  "disclaimer2: '体育赛事结果受多种因素影响，历史数据不代表未来表现。请理性参考\\?": "disclaimer2: '体育赛事结果受多种因素影响，历史数据不代表未来表现。请理性参考。'",
  "disclaimer2: '体育赛事结果受多种因素影响，历史数据不代表未来表现。请理性参考�?": "disclaimer2: '体育赛事结果受多种因素影响，历史数据不代表未来表现。请理性参考。'",
  "heatUnit: '\\?": "heatUnit: '场'",
  "heatUnit: '�?": "heatUnit: '场'",
  "privacyP1: '最后更新：2026\\?\\?\\?": "privacyP1: '最后更新：2026年6月3日'",
  "privacyP1: '最后更新：2026�?�?�?": "privacyP1: '最后更新：2026年6月3日'",
  "privacyP2: 'SportPredict 仅收集以下数据：语言偏好设置（存储在浏览器本地）、API缓存数据（赔率信息，5分钟过期）。我们不收集个人身份信息\\?": "privacyP2: 'SportPredict 仅收集以下数据：语言偏好设置（存储在浏览器本地）、API缓存数据（赔率信息，5分钟过期）。我们不收集个人身份信息。'",
  "privacyP2: 'SportPredict 仅收集以下数据：语言偏好设置（存储在浏览器本地）、API缓存数据（赔率信息，5分钟过期）。我们不收集个人身份信息�?": "privacyP2: 'SportPredict 仅收集以下数据：语言偏好设置（存储在浏览器本地）、API缓存数据（赔率信息，5分钟过期）。我们不收集个人身份信息。'",
  "privacyP3: '本网站使用localStorage存储语言偏好和Cookie同意状态。我们可能通过Google AdSense使用Cookie展示个性化广告。您可以通过浏览器设置管理Cookie\\?": "privacyP3: '本网站使用localStorage存储语言偏好和Cookie同意状态。我们可能通过Google AdSense使用Cookie展示个性化广告。您可以通过浏览器设置管理Cookie。'",
  "privacyP3: '本网站使用localStorage存储语言偏好和Cookie同意状态。我们可能通过Google AdSense使用Cookie展示个性化广告。您可以通过浏览器设置管理Cookie�?": "privacyP3: '本网站使用localStorage存储语言偏好和Cookie同意状态。我们可能通过Google AdSense使用Cookie展示个性化广告。您可以通过浏览器设置管理Cookie。'",
  "privacyH3: '第三方服\\?": "privacyH3: '第三方服务'",
  "privacyH3: '第三方服�?": "privacyH3: '第三方服务'",
  "privacyP4: '我们使用The Odds API获取体育赔率数据，可能使用Google AdSense展示广告。这些服务有自己的隐私政策\\?": "privacyP4: '我们使用The Odds API获取体育赔率数据，可能使用Google AdSense展示广告。这些服务有自己的隐私政策。'",
  "privacyP4: '我们使用The Odds API获取体育赔率数据，可能使用Google AdSense展示广告。这些服务有自己的隐私政策�?": "privacyP4: '我们使用The Odds API获取体育赔率数据，可能使用Google AdSense展示广告。这些服务有自己的隐私政策。'",
  "privacyP5: '根据GDPR，您有权访问、更正、删除您的个人数据。如需行使权利，请通过下方联系方式与我们联系\\?": "privacyP5: '根据GDPR，您有权访问、更正、删除您的个人数据。如需行使权利，请通过下方联系方式与我们联系。'",
  "privacyP5: '根据GDPR，您有权访问、更正、删除您的个人数据。如需行使权利，请通过下方联系方式与我们联系�?": "privacyP5: '根据GDPR，您有权访问、更正、删除您的个人数据。如需行使权利，请通过下方联系方式与我们联系。'",
  "aboutP1: 'SportPredict 是一个专业的体育数据分析平台，致力于为全球体育爱好者提供基于市场数据的赛事统计和概率分析\\?": "aboutP1: 'SportPredict 是一个专业的体育数据分析平台，致力于为全球体育爱好者提供基于市场数据的赛事统计和概率分析。'",
  "aboutP1: 'SportPredict 是一个专业的体育数据分析平台，致力于为全球体育爱好者提供基于市场数据的赛事统计和概率分析�?": "aboutP1: 'SportPredict 是一个专业的体育数据分析平台，致力于为全球体育爱好者提供基于市场数据的赛事统计和概率分析。'",
  "aboutP2: '我们的使命是通过透明的数据可视化，帮助用户理解体育赛事中的市场概率和统计趋势。所有分析均基于公开市场数据，使用数学模型计算得出\\?": "aboutP2: '我们的使命是通过透明的数据可视化，帮助用户理解体育赛事中的市场概率和统计趋势。所有分析均基于公开市场数据，使用数学模型计算得出。'",
  "aboutP2: '我们的使命是通过透明的数据可视化，帮助用户理解体育赛事中的市场概率和统计趋势。所有分析均基于公开市场数据，使用数学模型计算得出�?": "aboutP2: '我们的使命是通过透明的数据可视化，帮助用户理解体育赛事中的市场概率和统计趋势。所有分析均基于公开市场数据，使用数学模型计算得出。'",
  "aboutP3: '⚠️ 重要声明：SportPredict 不提供任何博彩服务，不收取任何费用，不鼓励或促进任何形式的赌博行为。本站所有内容仅供信息参考和学术研究\\?": "aboutP3: '⚠️ 重要声明：SportPredict 不提供任何博彩服务，不收取任何费用，不鼓励或促进任何形式的赌博行为。本站所有内容仅供信息参考和学术研究。'",
  "aboutP3: '⚠️ 重要声明：SportPredict 不提供任何博彩服务，不收取任何费用，不鼓励或促进任何形式的赌博行为。本站所有内容仅供信息参考和学术研究�?": "aboutP3: '⚠️ 重要声明：SportPredict 不提供任何博彩服务，不收取任何费用，不鼓励或促进任何形式的赌博行为。本站所有内容仅供信息参考和学术研究。'",
  "termsP2: '1. 本站提供的所有数据和分析仅供参考，不构成任何投注建议\\?": "termsP2: '1. 本站提供的所有数据和分析仅供参考，不构成任何投注建议。'",
  "termsP2: '1. 本站提供的所有数据和分析仅供参考，不构成任何投注建议�?": "termsP2: '1. 本站提供的所有数据和分析仅供参考，不构成任何投注建议。'",
  "termsP3: '2. 用户应自行判断数据的准确性和适用性，并承担使用风险\\?": "termsP3: '2. 用户应自行判断数据的准确性和适用性，并承担使用风险。'",
  "termsP3: '2. 用户应自行判断数据的准确性和适用性，并承担使用风险�?": "termsP3: '2. 用户应自行判断数据的准确性和适用性，并承担使用风险。'",
  "termsP4: '3. 本站内容受知识产权保护，未经许可不得复制或重新分发\\?": "termsP4: '3. 本站内容受知识产权保护，未经许可不得复制或重新分发。'",
  "termsP4: '3. 本站内容受知识产权保护，未经许可不得复制或重新分发�?": "termsP4: '3. 本站内容受知识产权保护，未经许可不得复制或重新分发。'",
  "termsP5: '4. 本站不保证数据的实时性和准确性，市场数据可能存在延迟\\?": "termsP5: '4. 本站不保证数据的实时性和准确性，市场数据可能存在延迟。'",
  "termsP5: '4. 本站不保证数据的实时性和准确性，市场数据可能存在延迟�?": "termsP5: '4. 本站不保证数据的实时性和准确性，市场数据可能存在延迟。'",
  "footerDisclaimer: '⚠️ SportPredict 是体育数据分析平台，不提供任何博彩服务，不收取任何费用。所有数据仅供分析参考\\?": "footerDisclaimer: '⚠️ SportPredict 是体育数据分析平台，不提供任何博彩服务，不收取任何费用。所有数据仅供分析参考。'",
  "footerDisclaimer: '⚠️ SportPredict 是体育数据分析平台，不提供任何博彩服务，不收取任何费用。所有数据仅供分析参考�?": "footerDisclaimer: '⚠️ SportPredict 是体育数据分析平台，不提供任何博彩服务，不收取任何费用。所有数据仅供分析参考。'",
  "clickToLoadOdds: '点击上方联赛名加载赔率数\\?": "clickToLoadOdds: '点击上方联赛名加载赔率数据'",
  "clickToLoadOdds: '点击上方联赛名加载赔率数�?": "clickToLoadOdds: '点击上方联赛名加载赔率数据'",
  "apiQuotaExceeded: 'API额度已用完，请等待下月重\\?": "apiQuotaExceeded: 'API额度已用完，请等待下月重置'",
  "apiQuotaExceeded: 'API额度已用完，请等待下月重�?": "apiQuotaExceeded: 'API额度已用完，请等待下月重置'",
  "apiQuotaHint: '免费版每\\?00次请\\?": "apiQuotaHint: '免费版每月500次请求'",
  "apiQuotaHint: '免费版每�?00次请�?": "apiQuotaHint: '免费版每月500次请求'",
  "heroBtnAnalyze: '📊 开始分\\?": "heroBtnAnalyze: '📊 开始分析'",
  "heroBtnAnalyze: '📊 开始分�?": "heroBtnAnalyze: '📊 开始分析'",
};

// Apply zh fixes
for (const [bad, good] of Object.entries(zhFixes)) {
  const badClean = bad.replace(/\\?/g, '\ufffd');
  if (content.includes(bad) || content.includes(badClean)) {
    content = content.replace(bad, good);
    content = content.replace(badClean, good);
  }
}

// Fix heroBtnFavorites star symbol corruption
content = content.replace(/heroBtnFavorites: '\ufffd收藏赛事'/g, "heroBtnFavorites: '⭐ 收藏赛事'");
content = content.replace(/heroBtnFavorites: '\ufffdFavorites'/g, "heroBtnFavorites: '⭐ Favorites'");
content = content.replace(/heroBtnFavorites: '\ufffdFavoritos'/g, "heroBtnFavorites: '⭐ Favoritos'");
content = content.replace(/heroBtnFavorites: '\ufffdالمفضلة'/g, "heroBtnFavorites: '⭐ المفضلة'");
content = content.replace(/heroBtnFavorites: '\ufffdИзбранное'/g, "heroBtnFavorites: '⭐ Избранное'");
content = content.replace(/heroBtnFavorites: '\ufffdFavoris'/g, "heroBtnFavorites: '⭐ Favoris'");
content = content.replace(/heroBtnFavorites: '\ufffdFavoriten'/g, "heroBtnFavorites: '⭐ Favoriten'");
content = content.replace(/heroBtnFavorites: '\ufffdお気に入\u308a'/g, "heroBtnFavorites: '⭐ お気に入り'");
content = content.replace(/heroBtnFavorites: '\ufffd즐겨찾기'/g, "heroBtnFavorites: '⭐ 즐겨찾기'");

// Fix Japanese (ja) section
const jaFixes = [
  ["sidebarLogo: '全スポーツ分\u6790'", "sidebarLogo: '全スポーツ分析'"],
  ["sidebarLogo: '全スポーツ分\ufffd'", "sidebarLogo: '全スポーツ分析'"],
  ["tabMatches: '試合一\u89a7'", "tabMatches: '試合一覧'"],
  ["tabMatches: '試合一\ufffd'", "tabMatches: '試合一覧'"],
  ["homeTeam: 'ホーム勝\u3061'", "homeTeam: 'ホーム勝ち'"],
  ["homeTeam: 'ホーム勝\ufffd'", "homeTeam: 'ホーム勝ち'"],
  ["confidence: 'データ整合\u6027'", "confidence: 'データ整合性'"],
  ["confidence: 'データ整合\ufffd'", "confidence: 'データ整合性'"],
  ["all: 'すべ\u3066'", "all: 'すべて'"],
  ["all: 'すべ\ufffd'", "all: 'すべて'"],
  ["combo2: '{sport} ダブルコン\u30dc'", "combo2: '{sport} ダブルコンボ'"],
  ["combo2: '{sport} ダブルコン\ufffd'", "combo2: '{sport} ダブルコンボ'"],
  ["combo3: '{sport} トリプルコン\u30dc'", "combo3: '{sport} トリプルコンボ'"],
  ["combo3: '{sport} トリプルコン\ufffd'", "combo3: '{sport} トリプルコンボ'"],
  ["crossCombo: '🌍 競技横断インサイ\u30c8'", "crossCombo: '🌍 競技横断インサイト'"],
  ["crossCombo: '🌍 競技横断インサイ\ufffd'", "crossCombo: '🌍 競技横断インサイト'"],
  ["dashArbDesc: '差异\u7387'", "dashArbDesc: '差異率'"],
  ["dashArbDesc: '差異\ufffd'", "dashArbDesc: '差異率'"],
  ["modalDisclaimer: '⚖️ 公式の合法チャンネルで視聴してくださ\u3044'", "modalDisclaimer: '⚖️ 公式の合法チャンネルで視聴してください'"],
  ["modalDisclaimer: '⚖️ 公式の合法チャンネルで視聴してくださ\ufffd'", "modalDisclaimer: '⚖️ 公式の合法チャンネルで視聴してください'"],
  ["refreshOdds: 'オッズ更\u65b0'", "refreshOdds: 'オッズ更新'"],
  ["refreshOdds: 'オッズ更\ufffd'", "refreshOdds: 'オッズ更新'"],
  ["loading: '読み込み\u4e2d...'", "loading: '読み込み中...'"],
  ["loading: '読み込み\ufffd..'", "loading: '読み込み中...'"],
  ["retry: '再試\u884c'", "retry: '再試行'"],
  ["retry: '再試\ufffd'", "retry: '再試行'"],
  ["noData: 'データな\u3057'", "noData: 'データなし'"],
  ["noData: 'データな\ufffd'", "noData: 'データなし'"],
  ["oddsCompare: 'オッズ比\u8f03'", "oddsCompare: 'オッズ比較'"],
  ["oddsCompare: 'オッズ比\ufffd'", "oddsCompare: 'オッズ比較'"],
  ["showOdds: 'オッズ表\u793a'", "showOdds: 'オッズ表示'"],
  ["showOdds: 'オッズ表\ufffd'", "showOdds: 'オッズ表示'"],
  ["arbOpportunity: 'オッズ差\u7570'", "arbOpportunity: 'オッズ差異'"],
  ["arbOpportunity: 'オッズ差\ufffd'", "arbOpportunity: 'オッズ差異'"],
  ["arbProfit: '差異\ufffd'", "arbProfit: '差異率'"],
  ["bookmaker: 'ブックメーカ\u30fc'", "bookmaker: 'ブックメーカー'"],
  ["bookmaker: 'ブックメーカ\ufffd'", "bookmaker: 'ブックメーカー'"],
  ["sportIceHockey: 'アイスホッケ\u30fc'", "sportIceHockey: 'アイスホッケー'"],
  ["sportIceHockey: 'アイスホッケ\ufffd'", "sportIceHockey: 'アイスホッケー'"],
  ["sportTennis: 'テニ\u30b9'", "sportTennis: 'テニス'"],
  ["sportTennis: 'テニ\ufffd'", "sportTennis: 'テニス'"],
  ["sportBoxing: 'ボクシン\u30b0'", "sportBoxing: 'ボクシング'"],
  ["sportBoxing: 'ボクシン\ufffd'", "sportBoxing: 'ボクシング'"],
  ["sportCricket: 'クリケッ\u30c8'", "sportCricket: 'クリケット'"],
  ["sportCricket: 'クリケッ\ufffd'", "sportCricket: 'クリケット'"],
  ["sportEsports: 'eスポ\u30fc\u30c4'", "sportEsports: 'eスポーツ'"],
  ["sportEsports: 'eスポ\ufffd\ufffd'", "sportEsports: 'eスポーツ'"],
  ["sportAussieRules: 'オージールー\u30eb'", "sportAussieRules: 'オージールール'"],
  ["sportAussieRules: 'オージールー\ufffd'", "sportAussieRules: 'オージールール'"],
  ["sportGolf: 'ゴル\u30d5'", "sportGolf: 'ゴルフ'"],
  ["sportGolf: 'ゴル\ufffd'", "sportGolf: 'ゴルフ'"],
  ["sportSnooker: 'スヌーカ\u30fc'", "sportSnooker: 'スヌーカー'"],
  ["sportSnooker: 'スヌーカ\ufffd'", "sportSnooker: 'スヌーカー'"],
  ["sportFutsal: 'フットサ\u30eb'", "sportFutsal: 'フットサル'"],
  ["sportFutsal: 'フットサ\ufffd'", "sportFutsal: 'フットサル'"],
  ["chFIFADesc: 'FIFA公式ストリーミン\u30b0'", "chFIFADesc: 'FIFA公式ストリーミング'"],
  ["chFIFADesc: 'FIFA公式ストリーミン\ufffd'", "chFIFADesc: 'FIFA公式ストリーミング'"],
  ["chLeagueOfficial: 'リーグ公式放\u9001'", "chLeagueOfficial: 'リーグ公式放送'"],
  ["chLeagueOfficial: 'リーグ公式放\ufffd'", "chLeagueOfficial: 'リーグ公式放送'"],
  ["chLeagueOfficialDesc: '各リーグ公式デジタル放\u9001'", "chLeagueOfficialDesc: '各リーグ公式デジタル放送'"],
  ["chLeagueOfficialDesc: '各リーグ公式デジタル放\ufffd'", "chLeagueOfficialDesc: '各リーグ公式デジタル放送'"],
  ["chNBALeaguePassDesc: 'NBA公式ストリーミングサブス\u30af'", "chNBALeaguePassDesc: 'NBA公式ストリーミングサブスク'"],
  ["chNBALeaguePassDesc: 'NBA公式ストリーミングサブス\ufffd'", "chNBALeaguePassDesc: 'NBA公式ストリーミングサブスク'"],
  ["chESPNPlusDesc: 'ESPNストリーミングサブス\u30af'", "chESPNPlusDesc: 'ESPNストリーミングサブスク'"],
  ["chESPNPlusDesc: 'ESPNストリーミングサブス\ufffd'", "chESPNPlusDesc: 'ESPNストリーミングサブスク'"],
  ["chMLBtvDesc: 'MLB公式ストリーミングサブス\u30af'", "chMLBtvDesc: 'MLB公式ストリーミングサブスク'"],
  ["chMLBtvDesc: 'MLB公式ストリーミングサブス\ufffd'", "chMLBtvDesc: 'MLB公式ストリーミングサブスク'"],
  ["chNFLGamePassDesc: 'NFL公式ストリーミングサブス\u30af'", "chNFLGamePassDesc: 'NFL公式ストリーミングサブスク'"],
  ["chNFLGamePassDesc: 'NFL公式ストリーミングサブス\ufffd'", "chNFLGamePassDesc: 'NFL公式ストリーミングサブスク'"],
  ["chNHLtvDesc: 'NHL公式ストリーミングサブス\u30af'", "chNHLtvDesc: 'NHL公式ストリーミングサブスク'"],
  ["chNHLtvDesc: 'NHL公式ストリーミングサブス\ufffd'", "chNHLtvDesc: 'NHL公式ストリーミングサブスク'"],
  ["chYoutubeSportsDesc: 'YouTubeスポーツチャンネ\u30eb'", "chYoutubeSportsDesc: 'YouTubeスポーツチャンネル'"],
  ["chYoutubeSportsDesc: 'YouTubeスポーツチャンネ\ufffd'", "chYoutubeSportsDesc: 'YouTubeスポーツチャンネル'"],
  ["disclaimer: '⚠️ 免責事項：本プラットフォームの分析データは市場オッズに基づき、参考用のみです\ufffd'", "disclaimer: '⚠️ 免責事項：本プラットフォームの分析データは市場オッズに基づき、参考用のみです。'"],
  ["disclaimer2: 'スポーツ結果は多くの要因に影響されます。過去のデータは将来の結果を保証しません\ufffd'", "disclaimer2: 'スポーツ結果は多くの要因に影響されます。過去のデータは将来の結果を保証しません。'"],
  ["privacyP1: '最終更新：2026\ufffd\ufffd\ufffd'", "privacyP1: '最終更新：2026年6月3日'"],
  ["privacyH1: 'データ収\u96c6'", "privacyH1: 'データ収集'"],
  ["privacyH1: 'データ収\ufffd'", "privacyH1: 'データ収集'"],
  ["privacyH2: 'Cookieの使\u7528'", "privacyH2: 'Cookieの使用'"],
  ["privacyH2: 'Cookieの使\ufffd'", "privacyH2: 'Cookieの使用'"],
  ["privacyH4: 'GDPRの権\u5229'", "privacyH4: 'GDPRの権利'"],
  ["privacyH4: 'GDPRの権\ufffd'", "privacyH4: 'GDPRの権利'"],
  ["privacyH5: '連絡\u5148'", "privacyH5: '連絡先'"],
  ["privacyH5: '連絡\ufffd'", "privacyH5: '連絡先'"],
  ["footerAbout: '私たちについ\u3066'", "footerAbout: '私たちについて'"],
  ["footerAbout: '私たちについ\ufffd'", "footerAbout: '私たちについて'"],
  ["heroSubtitle: 'グローバルスポーツオッズデータ分析プラットフォー\u30e0'", "heroSubtitle: 'グローバルスポーツオッズデータ分析プラットフォーム'"],
  ["heroSubtitle: 'グローバルスポーツオッズデータ分析プラットフォー\ufffd'", "heroSubtitle: 'グローバルスポーツオッズデータ分析プラットフォーム'"],
  ["heroTag1: '📊 リアルタイムオッ\u30ba'", "heroTag1: '📊 リアルタイムオッズ'"],
  ["heroTag1: '📊 リアルタイムオッ\ufffd'", "heroTag1: '📊 リアルタイムオッズ'"],
  ["heroBtnFavorites: '\ufffdお気に入\u308a'", "heroBtnFavorites: '⭐ お気に入り'"],
  ["heroBtnFavorites: '\ufffdお気に入\ufffd'", "heroBtnFavorites: '⭐ お気に入り'"],
];

for (const [bad, good] of jaFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix Japanese longer privacy/about/terms strings
const jaLongFixes = [
  ["privacyP2: 'SportPredictは次のデータのみを収集します：言語設定（ブラウザにローカル保存）、APIキャッシュデータ（オッズ情報\ufffd分で期限切れ）。個人識別情報は収集しません\ufffd'", "privacyP2: 'SportPredictは次のデータのみを収集します：言語設定（ブラウザにローカル保存）、APIキャッシュデータ（オッズ情報、5分で期限切れ）。個人識別情報は収集しません。'"],
  ["privacyP4: 'The Odds APIを使用してスポーツオッズデータを取得し、Google AdSenseを使用して広告を表示する場合があります。これらのサービスには独自のプライバシーポリシーがあります\ufffd'", "privacyP4: 'The Odds APIを使用してスポーツオッズデータを取得し、Google AdSenseを使用して広告を表示する場合があります。これらのサービスには独自のプライバシーポリシーがあります。'"],
  ["privacyP5: 'GDPRに基づき、個人データへのアクセス、訂正、削除の権利があります。権利を行使するには、下記の連絡先までご連絡ください\ufffd'", "privacyP5: 'GDPRに基づき、個人データへのアクセス、訂正、削除の権利があります。権利を行使するには、下記の連絡先までご連絡ください。'"],
  ["aboutP1: 'SportPredictは、世界中のスポーツ愛好家に市場データに基づくイベント統計と確率分析を提供する専門的なスポーツデータ分析プラットフォームです\ufffd'", "aboutP1: 'SportPredictは、世界中のスポーツ愛好家に市場データに基づくイベント統計と確率分析を提供する専門的なスポーツデータ分析プラットフォームです。'"],
  ["aboutP2: '私たちの使命は、透明なデータ可視化を通じて、スポーツイベントにおける市場確率と統計的傾向の理解を支援することです。すべての分析は公開市場データに基づき、数学的モデルを使用して計算されています\ufffd'", "aboutP2: '私たちの使命は、透明なデータ可視化を通じて、スポーツイベントにおける市場確率と統計的傾向の理解を支援することです。すべての分析は公開市場データに基づき、数学的モデルを使用して計算されています。'"],
  ["aboutP3: '⚠️ 重要：SportPredictは賭博サービスを提供せず、料金を徴収せず、いかなる形態のギャンブルも奨励または促進しません。本サイトのすべてのコンテンツは情報参考および学術研究のみを目的としています\ufffd'", "aboutP3: '⚠️ 重要：SportPredictは賭博サービスを提供せず、料金を徴収せず、いかなる形態のギャンブルも奨励または促進しません。本サイトのすべてのコンテンツは情報参考および学術研究のみを目的としています。'"],
  ["termsP2: '1. 本サイトで提供されるすべてのデータと分析は参考用であり、賭博の助言を構成するものではありません\ufffd'", "termsP2: '1. 本サイトで提供されるすべてのデータと分析は参考用であり、賭博の助言を構成するものではありません。'"],
  ["termsP3: '2. ユーザーはデータの正確性と適用性を独自に判断し、使用のリスクを負うものとします\ufffd'", "termsP3: '2. ユーザーはデータの正確性と適用性を独自に判断し、使用のリスクを負うものとします。'"],
  ["termsP4: '3. 本サイトのコンテンツは知的財産権により保護されており、許可なく複製または再配布することはできません\ufffd'", "termsP4: '3. 本サイトのコンテンツは知的財産権により保護されており、許可なく複製または再配布することはできません。'"],
  ["termsP5: '4. 本サイトはデータのリアルタイム性と正確性を保証せず、市場データに遅延が生じる場合があります\ufffd'", "termsP5: '4. 本サイトはデータのリアルタイム性と正確性を保証せず、市場データに遅延が生じる場合があります。'"],
  ["footerDisclaimer: '⚠️ SportPredictはスポーツデータ分析プラットフォームであり、賭博サービスを提供せず、料金も徴収しません。すべてのデータは分析参考用です\ufffd'", "footerDisclaimer: '⚠️ SportPredictはスポーツデータ分析プラットフォームであり、賭博サービスを提供せず、料金も徴収しません。すべてのデータは分析参考用です。'"],
];

for (const [bad, good] of jaLongFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix privacyP3 in ja (truncated in output)
// The string continues after the truncated part
const jaTruncFixes = [
  // Search for partial match of privacyP3 ja
  ["privacyP3: '本ウェブサイトはlocalStorageを使用して言語設定とCookie同意状況を保存します。Google AdSenseを通じてCookieを使用し、パーソナライズされた広告を表示する場合があります。ブラウザ", "privacyP3: '本ウェブサイトはlocalStorageを使用して言語設定とCookie同意状況を保存します。Google AdSenseを通じてCookieを使用し、パーソナライズされた広告を表示する場合があります。ブラウザの設定でCookieを管理できます。'"],
  ["cookieText: '本ウェブサイトはCookieを使用してエクスペリエンスを向上させ、Google AdSenseを通じて広告を表示する場合があります。継続して使用することにより", "cookieText: '本ウェブサイトはCookieを使用してエクスペリエンスを向上させ、Google AdSenseを通じて広告を表示する場合があります。継続して使用することにより、プライバシーポリシーに同意したものとみなされます。'"],
];

for (const [bad, good] of jaTruncFixes) {
  // Use includes and replace with partial match
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix NEW_I18N section - common corrupted strings
const newI18nFixes = {
  "every5Min: '\\?分钟更新'": "every5Min: '5分钟更新'",
  "every5Min: '\ufffd分钟更新'": "every5Min: '5分钟更新'",
  "tabAllEvents: '所有赛\\?'": "tabAllEvents: '所有赛事'",
  "tabAllEvents: '所有赛\ufffd'": "tabAllEvents: '所有赛事'",
  "matchLive: '进行\\?'": "matchLive: '进行中'",
  "matchLive: '进行\ufffd'": "matchLive: '进行中'",
  "matchUpcoming: '即将开\\?'": "matchUpcoming: '即将开始'",
  "matchUpcoming: '即将开\ufffd'": "matchUpcoming: '即将开始'",
  "matchScheduled: '未开\\?'": "matchScheduled: '未开始'",
  "matchScheduled: '未开\ufffd'": "matchScheduled: '未开始'",
  "matchFinished: '已结\\?'": "matchFinished: '已结束'",
  "matchFinished: '已结\ufffd'": "matchFinished: '已结束'",
  "sportRugbyLeague: '橄榄球联\\?'": "sportRugbyLeague: '橄榄球联赛'",
  "sportRugbyLeague: '橄榄球联\ufffd'": "sportRugbyLeague: '橄榄球联赛'",
  "searchPlaceholder: '搜索比赛、队\\?..'": "searchPlaceholder: '搜索比赛、队伍...'",
  "searchPlaceholder: '搜索比赛、队\ufffd..'": "searchPlaceholder: '搜索比赛、队伍...'",
  "favAdded: '已收\\?'": "favAdded: '已收藏'",
  "favAdded: '已收\ufffd'": "favAdded: '已收藏'",
  "favRemoved: '已取消收\\?'": "favRemoved: '已取消收藏'",
  "favRemoved: '已取消收\ufffd'": "favRemoved: '已取消收藏'",
  "filterUpcoming: '\\?即将开\\?'": "filterUpcoming: '⏰ 即将开始'",
  "filterUpcoming: '\ufffd即将开\ufffd'": "filterUpcoming: '⏰ 即将开始'",
  "filterLive: '🟢 进行\\?'": "filterLive: '🟢 进行中'",
  "filterLive: '🟢 进行\ufffd'": "filterLive: '🟢 进行中'",
  "filterHighAttention: '\\?高关注度'": "filterHighAttention: '🔥 高关注度'",
  "filterHighAttention: '\ufffd高关注度'": "filterHighAttention: '🔥 高关注度'",
  "timeMinutesLater: '{n}分钟\\?'": "timeMinutesLater: '{n}分钟后'",
  "timeMinutesLater: '{n}分钟\ufffd'": "timeMinutesLater: '{n}分钟后'",
  "timeHoursLater: '{n}小时\\?'": "timeHoursLater: '{n}小时后'",
  "timeHoursLater: '{n}小时\ufffd'": "timeHoursLater: '{n}小时后'",
  "timeStarted: '已开\\?'": "timeStarted: '已开始'",
  "timeStarted: '已开\ufffd'": "timeStarted: '已开始'",
};

for (const [bad, good] of Object.entries(newI18nFixes)) {
  const badClean = bad.replace(/\\?/g, '\ufffd');
  if (content.includes(bad) || content.includes(badClean)) {
    content = content.replace(bad, good);
    content = content.replace(badClean, good);
  }
}

// Fix English filter icons
const enFilterFixes = [
  ["filterUpcoming: '\ufffdStarting Soon'", "filterUpcoming: '⏰ Starting Soon'"],
  ["filterHighAttention: '\ufffdHigh Attention'", "filterHighAttention: '🔥 High Attention'"],
  ["filterUpcoming: '\ufffdPróximo'", "filterUpcoming: '⏰ Próximo'"],
  ["filterHighAttention: '\ufffdAlta atención'", "filterHighAttention: '🔥 Alta atención'"],
  ["filterUpcoming: '\ufffdEm breve'", "filterUpcoming: '⏰ Em breve'"],
  ["filterHighAttention: '\ufffdAlta atenção'", "filterHighAttention: '🔥 Alta atenção'"],
  ["filterUpcoming: '\ufffdقريباً'", "filterUpcoming: '⏰ قريباً'"],
  ["filterHighAttention: '\ufffdاهتمام عالي'", "filterHighAttention: '🔥 اهتمام عالي'"],
  ["filterUpcoming: '\ufffdСкоро'", "filterUpcoming: '⏰ Скоро'"],
  ["filterHighAttention: '\ufffdВысокий интерес'", "filterHighAttention: '🔥 Высокий интерес'"],
  ["filterUpcoming: '\ufffdBientôt'", "filterUpcoming: '⏰ Bientôt'"],
  ["filterHighAttention: '\ufffdForte attention'", "filterHighAttention: '🔥 Forte attention'"],
  ["filterUpcoming: '\ufffdBald'", "filterUpcoming: '⏰ Bald'"],
  ["filterHighAttention: '\ufffdHohe Aufmerksamkeit'", "filterHighAttention: '🔥 Hohe Aufmerksamkeit'"],
];

for (const [bad, good] of enFilterFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix Japanese NEW_I18N section
const jaNewI18nFixes = [
  ["noEvents: '予定されたイベントな\u3057'", "noEvents: '予定されたイベントなし'"],
  ["noEvents: '予定されたイベントな\ufffd'", "noEvents: '予定されたイベントなし'"],
  ["lastRefresh: '最終更\u65b0'", "lastRefresh: '最終更新'"],
  ["lastRefresh: '最終更\ufffd'", "lastRefresh: '最終更新'"],
  ["viewAll: 'すべて表\u793a'", "viewAll: 'すべて表示'"],
  ["viewAll: 'すべて表\ufffd'", "viewAll: 'すべて表示'"],
  ["tabAllEvents: '全イベン\u30c8'", "tabAllEvents: '全イベント'"],
  ["tabAllEvents: '全イベン\ufffd'", "tabAllEvents: '全イベント'"],
  ["matchLive: '試合\u4e2d'", "matchLive: '試合中'"],
  ["matchLive: '試合\ufffd'", "matchLive: '試合中'"],
  ["sportRugbyLeague: 'ラグビーリー\u30b0'", "sportRugbyLeague: 'ラグビーリーグ'"],
  ["sportRugbyLeague: 'ラグビーリー\ufffd'", "sportRugbyLeague: 'ラグビーリーグ'"],
  ["arbOpportunityCount: '{count}試合にオッズ差異の機会あ\u308a'", "arbOpportunityCount: '{count}試合にオッズ差異の機会あり'"],
  ["arbOpportunityCount: '{count}試合にオッズ差異の機会あ\ufffd'", "arbOpportunityCount: '{count}試合にオッズ差異の機会あり'"],
  ["searchPlaceholder: '試合、チームを検\u7d22...'", "searchPlaceholder: '試合、チームを検索...'"],
  ["searchPlaceholder: '試合、チームを検\ufffd..'", "searchPlaceholder: '試合、チームを検索...'"],
  ["myFavorites: 'お気に入\u308a'", "myFavorites: 'お気に入り'"],
  ["myFavorites: 'お気に入\ufffd'", "myFavorites: 'お気に入り'"],
  ["noFavorites: 'お気に入りな\u3057'", "noFavorites: 'お気に入りなし'"],
  ["noFavorites: 'お気に入りな\ufffd'", "noFavorites: 'お気に入りなし'"],
  ["favRemoved: 'お気に入りから削\u9664'", "favRemoved: 'お気に入りから削除'"],
  ["favRemoved: 'お気に入りから削\ufffd'", "favRemoved: 'お気に入りから削除'"],
  ["filterUpcoming: '\ufffd開始間近'", "filterUpcoming: '⏰ 開始間近'"],
  ["filterLive: '🟢 試合\u4e2d'", "filterLive: '🟢 試合中'"],
  ["filterLive: '🟢 試合\ufffd'", "filterLive: '🟢 試合中'"],
  ["filterHighAttention: '\ufffd高注\u76ee'", "filterHighAttention: '🔥 高注目'"],
  ["filterHighAttention: '\ufffd高注\ufffd'", "filterHighAttention: '🔥 高注目'"],
  ["timeHoursLater: '{n}時間\u5f8c'", "timeHoursLater: '{n}時間後'"],
  ["timeHoursLater: '{n}時間\ufffd'", "timeHoursLater: '{n}時間後'"],
  ["timeStarted: '開始\u6e08'", "timeStarted: '開始済'"],
  ["timeStarted: '開始\ufffd'", "timeStarted: '開始済'"],
  ["privacyP2: 'SportPredictは次のデータのみを収集します：言語設定（ブラウザにローカル保存）、APIキャッシュデータ（オッズ情報\ufffd分で期限切れ）。個人識別情報は収集しません。'", "privacyP2: 'SportPredictは次のデータのみを収集します：言語設定（ブラウザにローカル保存）、APIキャッシュデータ（オッズ情報、5分で期限切れ）。個人識別情報は収集しません。'"],
];

for (const [bad, good] of jaNewI18nFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix Korean (ko) section  
const koFixes = [
  ["sidebarLogo: '전체 스포\ufffd분석'", "sidebarLogo: '전체 스포츠분석'"],
  ["sidebarFooter: '데이터는 참고\ufffd· 금융 조언\ufffd아닙니다'", "sidebarFooter: '데이터는 참고용 · 금융 조언이 아닙니다'"],
  ["tabCombos: '데이\ufffd인사이트'", "tabCombos: '데이터 인사이트'"],
  ["tabDashboard: '대시보\ufffd'", "tabDashboard: '대시보드'"],
  ["homeTeam: '\ufffd\ufffd'", "homeTeam: '홈승'"],
  ["awayTeam: '원정 \ufffd'", "awayTeam: '원정 승'"],
  ["confidence: '데이\ufffd일관\ufffd'", "confidence: '데이터 일관성'"],
  ["noMatches: '{sport} 경기 데이\ufffd없음'", "noMatches: '{sport} 경기 데이터 없음'"],
  ["combo3: '{sport} 트리\ufffd콤보'", "combo3: '{sport} 트리플 콤보'"],
  ["combo3Label: '트리\ufffd'", "combo3Label: '트리플'"],
  ["crossCombo3: '교차 트리\ufffd'", "crossCombo3: '교차 트리플'"],
  ["mediumRisk: '중위\ufffd'", "mediumRisk: '중위험'"],
  ["highRisk: '고위\ufffd'", "highRisk: '고위험'"],
  ["dashArb: '🌟 배당\ufffd차이 기회'", "dashArb: '🌟 배당률 차이 기회'"],
  ["dashArbNone: '배당\ufffd차이 기회 없음'", "dashArbNone: '배당률 차이 기회 없음'"],
  ["dashArbDesc: '차이\ufffd'", "dashArbDesc: '차이율'"],
  ["modalTitle: '📺 공식 생중\ufffd채널'", "modalTitle: '📺 공식 생중계 채널'"],
  ["modalDisclaimer: '⚖️ 공식 합법 채널\ufffd통해 시청하세\ufffd'", "modalDisclaimer: '⚖️ 공식 합법 채널을 통해 시청하세요'"],
  ["refreshOdds: '배당\ufffd새로고침'", "refreshOdds: '배당률 새로고침'"],
  ["loading: '로딩 \ufffd..'", "loading: '로딩 중...'"],
  ["retry: '재시\ufffd'", "retry: '재시도'"],
  ["noData: '데이\ufffd없음'", "noData: '데이터 없음'"],
  ["oddsCompare: '배당\ufffd비교'", "oddsCompare: '배당률 비교'"],
  ["showOdds: '배당\ufffd보기'", "showOdds: '배당률 보기'"],
  ["hideOdds: '배당\ufffd숨기\ufffd'", "hideOdds: '배당률 숨기기'"],
  ["arbOpportunity: '배당\ufffd차이'", "arbOpportunity: '배당률 차이'"],
  ["arbProfit: '차이\ufffd'", "arbProfit: '차이율'"],
  ["bestOdds: '최고 배당\ufffd'", "bestOdds: '최고 배당률'"],
  ["sportIceHockey: '아이스하\ufffd'", "sportIceHockey: '아이스하키'"],
  ["sportTennis: '테니\ufffd'", "sportTennis: '테니스'"],
  ["sportCricket: '크리\ufffd'", "sportCricket: '크리켓'"],
  ["sportEsports: 'e스포\ufffd'", "sportEsports: 'e스포츠'"],
  ["sportSnooker: '스누\ufffd'", "sportSnooker: '스누커'"],
  ["sportHandball: '핸드\ufffd'", "sportHandball: '핸드볼'"],
  ["chLeagueOfficialDesc: '공식 디지\ufffd중계'", "chLeagueOfficialDesc: '공식 디지털 중계'"],
  ["chEurosportDesc: '유럽 스포\ufffd스트리밍'", "chEurosportDesc: '유럽 스포츠 스트리밍'"],
  ["chYoutubeSportsDesc: 'YouTube 스포\ufffd채널'", "chYoutubeSportsDesc: 'YouTube 스포츠 채널'"],
  ["chDAZNDesc: '글로벌 스포\ufffd스트리밍'", "chDAZNDesc: '글로벌 스포츠 스트리밍'"],
  ["disclaimer: '⚠️ 면책: 모든 분석 데이터는 시장 배당\ufffd기반이며 참고용입니다.'", "disclaimer: '⚠️ 면책: 모든 분석 데이터는 시장 배당률 기반이며 참고용입니다.'"],
  ["disclaimer2: '스포\ufffd결과\ufffd여러 요인\ufffd영향\ufffd받습니다. 과거 데이터가 미래 성과\ufffd보장하지 않습니다.'", "disclaimer2: '스포츠 결과는 여러 요인의 영향을 받습니다. 과거 데이터가 미래 성과를 보장하지 않습니다.'"],
  ["heroSubtitle: '글로벌 스포\ufffd배당\ufffd데이\ufffd분석 플랫\ufffd'", "heroSubtitle: '글로벌 스포츠 배당률 데이터 분석 플랫폼'"],
  ["heroTag1: '📊 실시\ufffd배당\ufffd'", "heroTag1: '📊 실시간 배당률'"],
  ["heroBtnFavorites: '\ufffd즐겨찾기'", "heroBtnFavorites: '⭐ 즐겨찾기'"],
];

for (const [bad, good] of koFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix Korean NEW_I18N
const koNewI18nFixes = [
  ["noEvents: '예정\ufffd이벤\ufffd없음'", "noEvents: '예정된 이벤트 없음'"],
  ["every5Min: '5분마\ufffd업데이트'", "every5Min: '5분마다 업데이트'"],
  ["lastRefresh: '마지\ufffd새로고침'", "lastRefresh: '마지막 새로고침'"],
  ["tabAllEvents: '전체 이벤\ufffd'", "tabAllEvents: '전체 이벤트'"],
  ["matchLive: '진행 \ufffd'", "matchLive: '진행 중'"],
  ["matchUpcoming: '\ufffd시작'", "matchUpcoming: '곧 시작'"],
  ["sportMixedMartialArts: '종합격투\ufffd'", "sportMixedMartialArts: '종합격투기'"],
  ["arbOpportunityCount: '{count}경기 배당\ufffd차이 기회 있음'", "arbOpportunityCount: '{count}경기 배당률 차이 기회 있음'"],
  ["searchPlaceholder: '경기, 팀 검\ufffd..'", "searchPlaceholder: '경기, 팀 검색...'"],
  ["filterUpcoming: '\ufffd\ufffd시작'", "filterUpcoming: '⏰ 곧 시작'"],
  ["filterLive: '🟢 진행 \ufffd'", "filterLive: '🟢 진행 중'"],
  ["filterHighAttention: '\ufffd높은 관\ufffd'", "filterHighAttention: '🔥 높은 관심'"],
  ["timeMinutesLater: '{n}\ufffd\ufffd'", "timeMinutesLater: '{n}분 후'"],
  ["timeHoursLater: '{n}시간 \ufffd'", "timeHoursLater: '{n}시간 후'"],
  ["timeDaysLater: '{n}\ufffd\ufffd'", "timeDaysLater: '{n}일 후'"],
  ["timeStarted: '시작\ufffd'", "timeStarted: '시작됨'"],
];

for (const [bad, good] of koNewI18nFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix Korean longer strings (privacy/about/terms) using partial matching
const koLongFixes = [
  // Korean privacy/about/terms - these are complex, reconstruct from partial
  ["privacyP1: '최종 업데이트: 2026\ufffd6\ufffd3\ufffd'", "privacyP1: '최종 업데이트: 2026년6월3일'"],
  ["privacyH1: '데이\ufffd수집'", "privacyH1: '데이터 수집'"],
  ["totalVotes: '\ufffd투표 \ufffd'", "totalVotes: '총 투표 수'"],
  ["hottestVoteMatch: '가\ufffd인기 있는 투표 경기'", "hottestVoteMatch: '가장 인기 있는 투표 경기'"],
  ["basedOnOdds: '배당\ufffd기반'", "basedOnOdds: '배당률 기반'"],
  ["bookmakersProviding: '\ufffd업체 배당\ufffd제공'", "bookmakersProviding: '개 업체 배당률 제공'"],
  ["whoWillWin: '누가 이길 \ufffd같나\ufffd'", "whoWillWin: '누가 이길 것 같나요?'"],
  ["votes: '\ufffd'", "votes: '표'"],
  ["copiedToClipboard: '클립보드\ufffd복사\ufffd'", "copiedToClipboard: '클립보드에 복사됨'"],
  ["noAnalysisData: '분석 데이\ufffd없음. 리그\ufffd먼저 선택하세\ufffd'", "noAnalysisData: '분석 데이터 없음. 리그를 먼저 선택하세요'"],
  ["highMarketAttention: '시장의 관심도\ufffd'", "highMarketAttention: '시장의 관심도 높음'"],
  ["lastUpdated: '마지\ufffd업데이트'", "lastUpdated: '마지막 업데이트'"],
  ["todayVoteStats: '본일의 투표 통\ufffd'", "todayVoteStats: '본일의 투표 통계'"],
  ["basedOnOdds: '오토즈に基づ\ufffd'", "basedOnOdds: 'オッズに基づく'"],
  ["bookmakersProviding: '社がオッズ提\ufffd'", "bookmakersProviding: '社がオッズ提供'"],
  ["marketTendency: '市場の傾\ufffd'", "marketTendency: '市場の傾向'"],
  ["voteSuccess: '投票しました\ufffd'", "voteSuccess: '投票しました！'"],
  ["copiedToClipboard: 'コピーしまし\ufffd'", "copiedToClipboard: 'コピーしました'"],
  ["noAnalysisData: '分析データなし。リーグを選択してください\ufffd'", "noAnalysisData: '分析データなし。リーグを選択してください。'"],
  ["oddsDiscrepancyFound: '배당\ufffd차이 기회 발견!'", "oddsDiscrepancyFound: '배당률 차이 기회 발견!'"],
];

for (const [bad, good] of koLongFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix GROUP_MAP emoji corruption
content = content.replace("{ emoji: '\ufffd', i18nKey: 'sportSoccer'", "{ emoji: '⚽', i18nKey: 'sportSoccer'");
content = content.replace("{ emoji: '\ufffd', i18nKey: 'sportBaseball'", "{ emoji: '⚾', i18nKey: 'sportBaseball'");
content = content.replace("{ emoji: '\ufffd', i18nKey: 'sportGolf'", "{ emoji: '⛳', i18nKey: 'sportGolf'");
content = content.replace("{ emoji: '\ufffd', i18nKey: 'sportFutsal'", "{ emoji: '⚽', i18nKey: 'sportFutsal'");
content = content.replace("{ emoji: '🗳\ufffd', i18nKey: 'sportPolitics'", "{ emoji: '🗳️', i18nKey: 'sportPolitics'");

// Fix other corrupted emoji/symbols throughout
content = content.replace("favored: '被看\ufffd'", "favored: '被看好'");
content = content.replace("oddsDiscrepancyFound: '发现赔率差异机会\ufffd'", "oddsDiscrepancyFound: '发现赔率差异机会！'");
content = content.replace("highest: '最\ufffd'", "highest: '最高'");
content = content.replace("lowest: '最\ufffd'", "lowest: '最低'");
content = content.replace("lastUpdated: '最后更\ufffd'", "lastUpdated: '最后更新'");
content = content.replace("bookmakersProviding: '家机构提供赔\ufffd'", "bookmakersProviding: '家机构提供赔率'");
content = content.replace("votes: '\ufffd'", "votes: '票'");
content = content.replace("voted: '已投\ufffd'", "voted: '已投票'");
content = content.replace("voteSuccess: '投票成功\ufffd'", "voteSuccess: '投票成功！'");
content = content.replace("copiedToClipboard: '已复制到剪贴\ufffd'", "copiedToClipboard: '已复制到剪贴板'");

// Fix page title
content = content.replace("'🏆' + t('myFavorites')", "'⭐ ' + t('myFavorites')");

// Fix odds arrows
content = content.replace("' <span class=\"odds-up\">\ufffd</span>'", "' <span class=\"odds-up\">↑</span>'");
content = content.replace("' <span class=\"odds-down\">\ufffd</span>'", "' <span class=\"odds-down\">↓</span>'");

// Fix theme toggle
content = content.replace("'☀\ufffd'", "'☀️'");
content = content.replace("'🌙'", "'🌙'");

// Fix fav button star
content = content.replace(">${favActive ? '\ufffd '", ">${favActive ? '★ '");
content = content.replace(">\ufffd</button>", ">☆</button>");

// Fix view-all button arrow
content = content.replace("${t('viewAll')} \ufffd</button>", "${t('viewAll')} →</button>");

// Fix clickToLoadOdds fallback
content = content.replace("'点击上方联赛名加载赔率数\ufffd'}", "'点击上方联赛名加载赔率数据'}");
content = content.replace("'点击上方联赛名加载赔率数\ufffd'}", "'点击上方联赛名加载赔率数据'}");

// Fix API quota fallback strings
content = content.replace("'API额度已用完，请等待下月重\ufffd'}", "'API额度已用完，请等待下月重置'}");
content = content.replace("'免费版每\ufffd00次请\ufffd'}", "'免费版每月500次请求'}");

// Fix match status emoji
content = content.replace("emoji: '\ufffd', cssClass: 'finished'", "emoji: '✅', cssClass: 'finished'");
content = content.replace("emoji: '\ufffd', cssClass: 'upcoming'", "emoji: '⏰', cssClass: 'upcoming'");

// Fix Korean longer privacy strings (partial match)
// privacyP2 ko
const koPrivacyFixes = [
  ["privacyP2: 'SportPredict\ufffd다음 데이터만 수집합니\ufffd 언어 기본 설정(브라우저\ufffd로컬 저\ufffd, API 캐시 데이\ufffd배당\ufffd정보, 5\ufffd\ufffd만료). 개인 식별 정보\ufffd수집하지 않습니다.'", "privacyP2: 'SportPredict는 다음 데이터만 수집합니다: 언어 기본 설정(브라우저에 로컬 저장), API 캐시 데이터(배당률 정보, 5분 후 만료). 개인 식별 정보는 수집하지 않습니다.'"],
  ["privacyP3: '\ufffd웹사이트\ufffdlocalStorage\ufffd사용하여 언어 기본 설정\ufffd쿠키 동의 상태\ufffd저장합니다. Google AdSense\ufffd통해 쿠키\ufffd사용하여 맞춤\ufffd광고\ufffd표시\ufffd\ufffd 있습니다. 브라", "privacyP3: '이 웹사이트는 localStorage를 사용하여 언어 기본 설정과 쿠키 동의 상태를 저장합니다. Google AdSense를 통해 쿠키를 사용하여 맞춤형 광고를 표시할 수 있습니다. 브라우저 설정에서 쿠키를 관리할 수 있습니다.'"],
  ["privacyH3: '\ufffd\ufffd서비\ufffd'", "privacyH3: '제3자 서비스'"],
  ["privacyP4: 'The Odds API\ufffd사용하여 스포\ufffd배당\ufffd데이터를 가져오\ufffd Google AdSense\ufffd사용하여 광고\ufffd표시\ufffd\ufffd 있습니다. 이러\ufffd서비스에\ufffd자체 개인정보 보호정책\ufffd있습니다.", "privacyP4: 'The Odds API를 사용하여 스포츠 배당률 데이터를 가져오고 Google AdSense를 사용하여 광고를 표시할 수 있습니다. 이러한 서비스에는 자체 개인정보 보호정책이 있습니다.'"],
  ["privacyP5: 'GDPR\ufffd따라 개인 데이터에 접근, 수정, 삭제\ufffd권리가 있습니다. 권리\ufffd행사하려\ufffd아래 연락처로 문의\ufffd주세\ufffd'", "privacyP5: 'GDPR에 따라 개인 데이터에 접근, 수정, 삭제할 권리가 있습니다. 권리를 행사하려면 아래 연락처로 문의해 주세요.'"],
  ["privacyH5: '연락\ufffd'", "privacyH5: '연락처'"],
  ["aboutP1: 'SportPredict\ufffd\ufffd세계 스포\ufffd애호가에게 시장 데이\ufffd기반\ufffd이벤\ufffd통계 \ufffd확률 분석\ufffd제공하는 전문 스포\ufffd데이\ufffd분석 플랫폼입니다.'", "aboutP1: 'SportPredict는 전 세계 스포츠 애호가에게 시장 데이터 기반의 이벤트 통계와 확률 분석을 제공하는 전문 스포츠 데이터 분석 플랫폼입니다.'"],
  ["aboutP2: '우리\ufffd사명은 투명\ufffd데이\ufffd시각화를 통해 스포\ufffd이벤트의 시장 확률\ufffd통계\ufffd추세\ufffd이해하도\ufffd돕는 것입니다. 모든 분석은 공개 시장 데이터를 기반으로 수학\ufffd모델\ufffd사용하여 계산됩니\ufffd'", "aboutP2: '우리의 사명은 투명한 데이터 시각화를 통해 스포츠 이벤트의 시장 확률과 통계적 추세를 이해하도록 돕는 것입니다. 모든 분석은 공개 시장 데이터를 기반으로 수학적 모델을 사용하여 계산됩니다.'"],
  ["aboutP3: '⚠️ 중요: SportPredict\ufffd도박 서비스를 제공하지 않으\ufffd 수수료를 부과하지 않으\ufffd 어떤 형태\ufffd도박\ufffd장려하거\ufffd촉진하지 않습니다. \ufffd사이트의 모든 콘텐츠는 정보 참고 \ufffd학", "aboutP3: '⚠️ 중요: SportPredict는 도박 서비스를 제공하지 않으며, 수수료를 부과하지 않으며, 어떤 형태의 도박도 장려하거나 촉진하지 않습니다. 이 사이트의 모든 콘텐츠는 정보 참고 및 학술 연구 목적입니다.'"],
  ["termsP1: '\ufffd웹사이트\ufffd사용함으로써 다음 약관\ufffd동의하는 것으\ufffd간주됩니\ufffd'", "termsP1: '이 웹사이트를 사용함으로써 다음 약관에 동의하는 것으로 간주됩니다.'"],
  ["termsP2: '1. \ufffd사이트에\ufffd제공하는 모든 데이\ufffd\ufffd분석은 참고용이\ufffd베팅 조언\ufffd구성하지 않습니다.'", "termsP2: '1. 이 사이트에서 제공하는 모든 데이터와 분석은 참고용이며 베팅 조언을 구성하지 않습니다.'"],
  ["termsP3: '2. 사용자는 데이터의 정확성과 적용성을 독립적으\ufffd판단하고 사용 위험\ufffd부담해\ufffd합니\ufffd'", "termsP3: '2. 사용자는 데이터의 정확성과 적용성을 독립적으로 판단하고 사용 위험을 부담해야 합니다.'"],
  ["termsP4: '3. \ufffd사이트의 콘텐츠는 지\ufffd재산권으\ufffd보호되며 허가 없이 복사하거\ufffd재배포할 \ufffd없습니다.'", "termsP4: '3. 이 사이트의 콘텐츠는 지적 재산권으로 보호되며 허가 없이 복사하거나 재배포할 수 없습니다.'"],
  ["termsP5: '4. \ufffd사이트는 데이터의 실시간성\ufffd정확성을 보장하지 않으\ufffd 시장 데이터에 지연이 있을 \ufffd있습니다.'", "termsP5: '4. 이 사이트는 데이터의 실시간성과 정확성을 보장하지 않으며 시장 데이터에 지연이 있을 수 있습니다.'"],
  ["cookieText: '\ufffd웹사이트\ufffd쿠키\ufffd사용하여 경험\ufffd향상시키\ufffd Google AdSense\ufffd통해 광고\ufffd표시\ufffd\ufffd 있습니다. 계속 사용하면'", "cookieText: '이 웹사이트는 쿠키를 사용하여 경험을 향상시키고 Google AdSense를 통해 광고를 표시할 수 있습니다. 계속 사용하면'"],
  ["footerDisclaimer: '⚠️ SportPredict\ufffd스포\ufffd데이\ufffd분석 플랫폼으\ufffd 도박 서비스를 제공하지 않으\ufffd수수료도 부과하지 않습니다. 모든 데이터는 분석 참고용입니다\ufffd'", "footerDisclaimer: '⚠️ SportPredict는 스포츠 데이터 분석 플랫폼으로 도박 서비스를 제공하지 않으며 수수료도 부과하지 않습니다. 모든 데이터는 분석 참고용입니다.'"],
  ["footerAbout: '私たちについ\ufffd'", "footerAbout: '私たちについて'"],
];

for (const [bad, good] of koPrivacyFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix LEAGUE_NAMES corrupted entries
const leagueFixes = [
  ["zh:'世界\ufffd',", "zh:'世界杯',"],
  ["ja:'Jリー\ufffd',", "ja:'Jリーグ',"],
  ["ja:'ラ・リー\ufffd',", "ja:'ラ・リーガ',"],
  ["ja:'ブンデスリー\ufffd',", "ja:'ブンデスリーガ',"],
  ["ja:'ヨーロッパ", "ja:'ヨーロッパリーグ'"],
  ["ja:'プリメ", "ja:'プリメイラ・リーガ'"],
  ["ja:'チャンピオ", "ja:'チャンピオンシップ'"],
  ["ja:'リー\ufffd?',", "ja:'リーグ1',"],
  ["ko:'리그\ufffd?',", "ko:'리그1',"],
  ["zh:'墨西哥联\ufffd',", "zh:'墨西哥联赛',"],
  ["ja:'Aリー\ufffd',", "ja:'Aリーグ',"],
  ["zh:'欧国\ufffd',", "zh:'欧国联',"],
  ["zh:'超级橄榄\ufffd',", "zh:'超级橄榄球',"],
  ["zh:'NRL橄榄球联\ufffd',", "zh:'NRL橄榄球联赛',"],
  ["zh:'PGA高尔\ufffd',", "zh:'PGA高尔夫',"],
  ["ja:'ラグビーリー\ufffd',", "ja:'ラグビーリーグ',"],
];

for (const [bad, good] of leagueFixes) {
  if (content.includes(bad)) {
    content = content.replace(bad, good);
  }
}

// Fix page title translations
content = content.replace("zh: '全赛事数据分析平\ufffd- 实时赔率分析 | SportPredict'", "zh: '全赛事数据分析平台 - 实时赔率分析 | SportPredict'");
content = content.replace("ja: 'スポーツ分析 - リアルタイムオッズ分\ufffd| SportPredict'", "ja: 'スポーツ分析 - リアルタイムオッズ分析 | SportPredict'");
content = content.replace("ko: '스포\ufffd분석 - 실시\ufffd배당\ufffd분석 | SportPredict'", "ko: '스포츠 분석 - 실시간 배당률 분석 | SportPredict'");

// Fix channel icons
content = content.replace("{ icon: '\ufffd', nameKey: 'chFIFA'", "{ icon: '⚽', nameKey: 'chFIFA'");
content = content.replace("{ icon: '\ufffd', nameKey: 'chMLBtv'", "{ icon: '⚾', nameKey: 'chMLBtv'");

// Fix analysis panel corrupted strings
content = content.replace("basedOnOdds: 'オッズに基づ\ufffd'", "basedOnOdds: 'オッズに基づく'");
content = content.replace("bookmakersProviding: '社がオッズ提\ufffd'", "bookmakersProviding: '社がオッズ提供'");
content = content.replace("marketTendency: '市場の傾\ufffd'", "marketTendency: '市場の傾向'");
content = content.replace("highest: '最\ufffd'", "highest: '最高'");
content = content.replace("lowest: '最\ufffd'", "lowest: '最低'");

// Fix analysis panel Korean
content = content.replace("highMarketAttention: '市場の注目度\ufffd'", "highMarketAttention: '市場の注目度が高い'");
content = content.replace("lastUpdated: '最終更\ufffd'", "lastUpdated: '最終更新'");
content = content.replace("todayVoteStats: '本日の投票統\ufffd'", "todayVoteStats: '本日の投票統計'");

// Write the fixed content
fs.writeFileSync(path, content, 'utf8');
console.log('Fix script completed. Checking for remaining corrupted characters...');

// Check remaining
const remaining = (content.match(/\ufffd/g) || []).length;
console.log('Remaining replacement characters (U+FFFD):', remaining);
