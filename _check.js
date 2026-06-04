
// ===== API CONFIG =====
const API_KEY = '1560e77265ec5a6f65265a96ad7c36cb';
const API_BASE = 'https://api.the-odds-api.com/v4';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// ===== I18N SYSTEM =====
const LANGS = [
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

const I18N = {
  zh: {
    sidebarLogo: '全赛事数据分�?,
    sidebarFooter: '数据仅供参�?· 不构成任何建�?,
    tabMatches: '赛事列表',
    tabCombos: '数据洞察',
    tabDashboard: '数据看板',
    pageTitle: '{emoji} {sport}数据分析',
    homeTeam: '主胜',
    awayTeam: '客胜',
    draw: '�?,
    confidence: '数据一致�?,
    noMatches: '暂无{sport}赛事数据',
    all: '全部',
    combo2: '{sport} 双场组合',
    combo3: '{sport} 三场组合',
    combo2Label: '双场组合',
    combo3Label: '三场组合',
    crossCombo: '跨运动数据洞�?,
    crossCombo3: '跨运动三场组�?,
    comboWinRate: '综合胜率',
    lowRisk: '低风�?,
    mediumRisk: '中风�?,
    highRisk: '高风�?,
    dashHitRate: '📊 各运动隐含胜率分�?,
    dashHot: '🔥 热门赛事排行',
    dashArb: '🌟 差异机会',
    dashArbNone: '暂无差异机会',
    dashArbDesc: '差异�?,
    watchLive: '📺 观赛',
    modalTitle: '📺 官方直播渠道',
    modalDisclaimer: '⚖️ 请通过官方合法渠道观看比赛',
    vs: 'vs',
    refreshOdds: '刷新赔率',
    loading: '加载�?..',
    loadError: '加载失败',
    retry: '重试',
    noData: '暂无数据',
    oddsCompare: '赔率对比',
    showOdds: '展开赔率',
    hideOdds: '收起赔率',
    impliedProb: '隐含胜率',
    arbOpportunity: '差异机会',
    arbProfit: '差异�?,
    apiRemaining: 'API剩余',
    bookmaker: '博彩公司',
    bestOdds: '最优赔�?,
    // Sport names
    sportSoccer: '足球',
    sportBasketball: '篮球',
    sportBaseball: '棒球',
    sportIceHockey: '冰球',
    sportTennis: '网球',
    sportAmericanFootball: '橄榄�?,
    sportBoxing: '拳击',
    sportMma: '格斗',
    sportCricket: '板球',
    sportRugby: '英式橄榄�?,
    sportEsports: '电竞',
    sportAussieRules: '澳式足球',
    sportGolf: '高尔�?,
    sportDarts: '飞镖',
    sportCycling: '自行�?,
    sportSnooker: '斯诺�?,
    sportVolleyball: '排球',
    sportHandball: '手球',
    sportFutsal: '室内足球',
    sportTableTennis: '乒乓�?,
    sportBadminton: '羽毛�?,
    // Channel names
    chFIFA: 'FIFA+',
    chFIFADesc: 'FIFA官方流媒体平�?,
    chLeagueOfficial: '联赛官方转播',
    chLeagueOfficialDesc: '各联赛官方数字转播平�?,
    chNBALeaguePass: 'NBA League Pass',
    chNBALeaguePassDesc: 'NBA官方流媒体订阅服�?,
    chESPNPlus: 'ESPN+',
    chESPNPlusDesc: 'ESPN流媒体订阅服�?,
    chEurosport: 'Eurosport',
    chEurosportDesc: '欧洲体育频道流媒�?,
    chMLBtv: 'MLB.tv',
    chMLBtvDesc: 'MLB官方流媒体订阅服�?,
    chNFLGamePass: 'NFL Game Pass',
    chNFLGamePassDesc: 'NFL官方流媒体订阅服�?,
    chNHLtv: 'NHL.tv',
    chNHLtvDesc: 'NHL官方流媒体订阅服�?,
    chYoutubeSports: 'YouTube Sports',
    chYoutubeSportsDesc: 'YouTube体育频道',
    chDAZN: 'DAZN',
    chDAZNDesc: '全球体育流媒体平�?,
    // Disclaimer
    disclaimer: '⚠️ 免责声明：本平台所有分析数据均基于市场赔率计算，仅供参考，不构成任何建议�?,
    disclaimer2: '体育赛事结果受多种因素影响，历史数据不代表未来表现。请理性参考�?,
    heatUnit: '�?,
    // Legal pages
    privacyTitle: '隐私政策',
    privacyP1: '最后更新：2026�?�?�?,
    privacyH1: '数据收集',
    privacyP2: 'SportPredict 仅收集以下数据：语言偏好设置（存储在浏览器本地）、API缓存数据（赔率信息，5分钟过期）。我们不收集个人身份信息�?,
    privacyH2: 'Cookie使用',
    privacyP3: '本网站使用localStorage存储语言偏好和Cookie同意状态。我们可能通过Google AdSense使用Cookie展示个性化广告。您可以通过浏览器设置管理Cookie�?,
    privacyH3: '第三方服�?,
    privacyP4: '我们使用The Odds API获取体育赔率数据，可能使用Google AdSense展示广告。这些服务有自己的隐私政策�?,
    privacyH4: 'GDPR权利',
    privacyP5: '根据GDPR，您有权访问、更正、删除您的个人数据。如需行使权利，请通过下方联系方式与我们联系�?,
    privacyH5: '联系方式',
    aboutTitle: '关于 SportPredict',
    aboutP1: 'SportPredict 是一个专业的体育数据分析平台，致力于为全球体育爱好者提供基于市场数据的赛事统计和概率分析�?,
    aboutP2: '我们的使命是通过透明的数据可视化，帮助用户理解体育赛事中的市场概率和统计趋势。所有分析均基于公开市场数据，使用数学模型计算得出�?,
    aboutP3: '⚠️ 重要声明：SportPredict 不提供任何博彩服务，不收取任何费用，不鼓励或促进任何形式的赌博行为。本站所有内容仅供信息参考和学术研究�?,
    termsTitle: '使用条款',
    termsP1: '使用本网站即表示您同意以下条款：',
    termsP2: '1. 本站提供的所有数据和分析仅供参考，不构成任何投注建议�?,
    termsP3: '2. 用户应自行判断数据的准确性和适用性，并承担使用风险�?,
    termsP4: '3. 本站内容受知识产权保护，未经许可不得复制或重新分发�?,
    termsP5: '4. 本站不保证数据的实时性和准确性，市场数据可能存在延迟�?,
    cookieText: '本网站使用Cookie提升您的体验，并可能通过Google AdSense展示广告。继续使用即表示您同意我们的',
    cookieLink: '隐私政策',
    cookieAccept: '接受',
    footerDisclaimer: '⚠️ SportPredict 是体育数据分析平台，不提供任何博彩服务，不收取任何费用。所有数据仅供分析参考�?,
    footerAbout: '关于我们',
    footerPrivacy: '隐私政策',
    footerTerms: '使用条款',
    footerContact: '联系我们',
    allEventsGuide: '点击左侧联赛加载数据，赔率将自动缓存5分钟',
    clickToLoadOdds: '点击上方联赛名加载赔率数�?,
    apiQuotaExceeded: 'API额度已用完，请等待下月重�?,
    apiQuotaHint: '免费版每�?00次请�?,
    heroTitle: '🏆 SportPredict',
    heroSubtitle: '全球体育赔率数据分析平台',
    heroTag1: '📊 实时赔率',
    heroTag2: '📈 市场概率',
    heroTag3: '🌟 差异分析',
    heroBtnAnalyze: '📊 开始分�?,
    heroBtnFavorites: '�?收藏赛事',
  },
  en: {
    sidebarLogo: 'All Sports Analysis',
    sidebarFooter: 'Data for reference only · Not financial advice',
    tabMatches: 'Matches',
    tabCombos: 'Insights',
    tabDashboard: 'Dashboard',
    pageTitle: '{emoji} {sport} Analysis',
    homeTeam: 'Home',
    awayTeam: 'Away',
    draw: 'Draw',
    confidence: 'Data Consistency',
    noMatches: 'No {sport} match data',
    all: 'All',
    combo2: '{sport} Double Combo',
    combo3: '{sport} Triple Combo',
    combo2Label: 'Double',
    combo3Label: 'Triple',
    crossCombo: '🌍 Cross-Sport Insights',
    crossCombo3: 'Cross-Sport Triple',
    comboWinRate: 'Combined Win Rate',
    lowRisk: 'Low Risk',
    mediumRisk: 'Medium Risk',
    highRisk: 'High Risk',
    dashHitRate: '📊 Implied Win Rate Distribution',
    dashHot: '🔥 Trending Matches',
    dashArb: '🌟 Odds Discrepancy Opportunities',
    dashArbNone: 'No odds discrepancy opportunities',
    dashArbDesc: 'Discrepancy rate',
    watchLive: '📺 Watch Live',
    modalTitle: '📺 Official Live Channels',
    modalDisclaimer: '⚖️ Please watch through official legal channels',
    vs: 'vs',
    refreshOdds: 'Refresh Odds',
    loading: 'Loading...',
    loadError: 'Failed to load',
    retry: 'Retry',
    noData: 'No data',
    oddsCompare: 'Odds Comparison',
    showOdds: 'Show Odds',
    hideOdds: 'Hide Odds',
    impliedProb: 'Implied Prob.',
    arbOpportunity: 'Odds Discrepancy',
    arbProfit: 'Discrepancy Rate',
    apiRemaining: 'API Remaining',
    bookmaker: 'Bookmaker',
    bestOdds: 'Best Odds',
    sportSoccer: 'Soccer',
    sportBasketball: 'Basketball',
    sportBaseball: 'Baseball',
    sportIceHockey: 'Ice Hockey',
    sportTennis: 'Tennis',
    sportAmericanFootball: 'American Football',
    sportBoxing: 'Boxing',
    sportMma: 'MMA',
    sportCricket: 'Cricket',
    sportRugby: 'Rugby',
    sportEsports: 'Esports',
    sportAussieRules: 'Aussie Rules',
    sportGolf: 'Golf',
    sportDarts: 'Darts',
    sportCycling: 'Cycling',
    sportSnooker: 'Snooker',
    sportVolleyball: 'Volleyball',
    sportHandball: 'Handball',
    sportFutsal: 'Futsal',
    sportTableTennis: 'Table Tennis',
    sportBadminton: 'Badminton',
    chFIFA: 'FIFA+',
    chFIFADesc: 'FIFA official streaming platform',
    chLeagueOfficial: 'League Official Broadcast',
    chLeagueOfficialDesc: 'Official digital broadcast platforms',
    chNBALeaguePass: 'NBA League Pass',
    chNBALeaguePassDesc: 'NBA official streaming subscription',
    chESPNPlus: 'ESPN+',
    chESPNPlusDesc: 'ESPN streaming subscription',
    chEurosport: 'Eurosport',
    chEurosportDesc: 'European sports streaming',
    chMLBtv: 'MLB.tv',
    chMLBtvDesc: 'MLB official streaming subscription',
    chNFLGamePass: 'NFL Game Pass',
    chNFLGamePassDesc: 'NFL official streaming subscription',
    chNHLtv: 'NHL.tv',
    chNHLtvDesc: 'NHL official streaming subscription',
    chYoutubeSports: 'YouTube Sports',
    chYoutubeSportsDesc: 'YouTube Sports channel',
    chDAZN: 'DAZN',
    chDAZNDesc: 'Global sports streaming platform',
    disclaimer: '⚠️ Disclaimer: All analysis data is based on market odds, for reference only, not financial advice.',
    disclaimer2: 'Match results are affected by many factors. Past data does not guarantee future performance.',
    heatUnit: 'matches',
    // Legal pages
    privacyTitle: 'Privacy Policy',
    privacyP1: 'Last updated: June 3, 2026',
    privacyH1: 'Data Collection',
    privacyP2: 'SportPredict only collects the following data: language preferences (stored locally in your browser), API cache data (odds information, expires after 5 minutes). We do not collect personal identification information.',
    privacyH2: 'Cookie Usage',
    privacyP3: 'This website uses localStorage to store language preferences and cookie consent status. We may use cookies through Google AdSense to display personalized ads. You can manage cookies through your browser settings.',
    privacyH3: 'Third-Party Services',
    privacyP4: 'We use The Odds API to obtain sports odds data, and may use Google AdSense to display ads. These services have their own privacy policies.',
    privacyH4: 'GDPR Rights',
    privacyP5: 'Under GDPR, you have the right to access, correct, and delete your personal data. To exercise your rights, please contact us using the information below.',
    privacyH5: 'Contact',
    aboutTitle: 'About SportPredict',
    aboutP1: 'SportPredict is a professional sports data analysis platform dedicated to providing market-data-based event statistics and probability analysis for sports enthusiasts worldwide.',
    aboutP2: 'Our mission is to help users understand market probabilities and statistical trends in sports events through transparent data visualization. All analyses are based on public market data, calculated using mathematical models.',
    aboutP3: '⚠️ Important: SportPredict does not provide any betting services, charges no fees, and does not encourage or promote any form of gambling. All content on this site is for informational reference and academic research only.',
    termsTitle: 'Terms of Service',
    termsP1: 'By using this website, you agree to the following terms:',
    termsP2: '1. All data and analysis provided on this site are for reference only and do not constitute any betting advice.',
    termsP3: '2. Users should independently judge the accuracy and applicability of the data and bear the risk of use.',
    termsP4: '3. The content of this site is protected by intellectual property rights and may not be copied or redistributed without permission.',
    termsP5: '4. This site does not guarantee the real-time nature and accuracy of data, and market data may be delayed.',
    cookieText: 'This website uses cookies to improve your experience and may display ads through Google AdSense. By continuing to use this site, you agree to our',
    cookieLink: 'Privacy Policy',
    cookieAccept: 'Accept',
    footerDisclaimer: '⚠️ SportPredict is a sports data analysis platform that does not provide any betting services or charge any fees. All data is for analysis reference only.',
    footerAbout: 'About Us',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    footerContact: 'Contact Us',
    allEventsGuide: 'Click a league on the sidebar to load data. Odds are cached for 5 minutes.',
    clickToLoadOdds: 'Click the league above to load odds data',
    apiQuotaExceeded: 'API quota exceeded. Please wait for next month reset.',
    apiQuotaHint: 'Free tier: 500 requests per month',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: 'Global Sports Odds Data Analysis Platform',
    heroTag1: '📊 Live Odds',
    heroTag2: '📈 Market Prob.',
    heroTag3: '🌟 Discrepancy',
    heroBtnAnalyze: '📊 Start Analysis',
    heroBtnFavorites: '�?Favorites',
  },
  es: {
    sidebarLogo: 'Análisis Deportivo',
    sidebarFooter: 'Datos solo de referencia · No es consejo financiero',
    tabMatches: 'Partidos',
    tabCombos: 'Perspectivas',
    tabDashboard: 'Panel',
    pageTitle: '{emoji} Análisis {sport}',
    homeTeam: 'Local',
    awayTeam: 'Visitante',
    draw: 'Empate',
    confidence: 'Consistencia de datos',
    noMatches: 'Sin datos de {sport}',
    all: 'Todos',
    combo2: '{sport} Combinación Doble',
    combo3: '{sport} Combinación Triple',
    combo2Label: 'Doble',
    combo3Label: 'Triple',
    crossCombo: '🌍 Perspectivas Multideporte',
    crossCombo3: 'Multideporte Triple',
    comboWinRate: 'Tasa Combinada',
    lowRisk: 'Riesgo Bajo',
    mediumRisk: 'Riesgo Medio',
    highRisk: 'Riesgo Alto',
    dashHitRate: '📊 Distribución de Probabilidad Implícita',
    dashHot: '🔥 Partidos en Tendencia',
    dashArb: '🌟 Oportunidades de Discrepancia de Cuotas',
    dashArbNone: 'Sin oportunidades de discrepancia',
    dashArbDesc: 'Tasa de discrepancia',
    watchLive: '📺 Ver en Vivo',
    modalTitle: '📺 Canales Oficiales en Vivo',
    modalDisclaimer: '⚖️ Vea a través de canales oficiales legales',
    vs: 'vs',
    refreshOdds: 'Actualizar Cuotas',
    loading: 'Cargando...',
    loadError: 'Error al cargar',
    retry: 'Reintentar',
    noData: 'Sin datos',
    oddsCompare: 'Comparación de Cuotas',
    showOdds: 'Ver Cuotas',
    hideOdds: 'Ocultar Cuotas',
    impliedProb: 'Prob. Implícita',
    arbOpportunity: 'Discrepancia de cuotas',
    arbProfit: 'Tasa de discrepancia',
    apiRemaining: 'API Restante',
    bookmaker: 'Casa de Apuestas',
    bestOdds: 'Mejor Cuota',
    sportSoccer: 'Fútbol',
    sportBasketball: 'Baloncesto',
    sportBaseball: 'Béisbol',
    sportIceHockey: 'Hockey sobre Hielo',
    sportTennis: 'Tenis',
    sportAmericanFootball: 'Fútbol Americano',
    sportBoxing: 'Boxeo',
    sportMma: 'MMA',
    sportCricket: 'Críquet',
    sportRugby: 'Rugby',
    sportEsports: 'Esports',
    sportAussieRules: 'Fútbol Australiano',
    sportGolf: 'Golf',
    sportDarts: 'Dardos',
    sportCycling: 'Ciclismo',
    sportSnooker: 'Snooker',
    sportVolleyball: 'Voleibol',
    sportHandball: 'Balonmano',
    sportFutsal: 'Fútbol Sala',
    sportTableTennis: 'Tenis de Mesa',
    sportBadminton: 'Bádminton',
    chFIFA: 'FIFA+', chFIFADesc: 'Plataforma oficial de streaming de FIFA',
    chLeagueOfficial: 'Transmisión Oficial de Liga', chLeagueOfficialDesc: 'Plataformas oficiales de transmisión digital',
    chNBALeaguePass: 'NBA League Pass', chNBALeaguePassDesc: 'Suscripción oficial de streaming NBA',
    chESPNPlus: 'ESPN+', chESPNPlusDesc: 'Suscripción de streaming ESPN',
    chEurosport: 'Eurosport', chEurosportDesc: 'Streaming deportivo europeo',
    chMLBtv: 'MLB.tv', chMLBtvDesc: 'Suscripción oficial de streaming MLB',
    chNFLGamePass: 'NFL Game Pass', chNFLGamePassDesc: 'Suscripción oficial de streaming NFL',
    chNHLtv: 'NHL.tv', chNHLtvDesc: 'Suscripción oficial de streaming NHL',
    chYoutubeSports: 'YouTube Sports', chYoutubeSportsDesc: 'Canal deportivo de YouTube',
    chDAZN: 'DAZN', chDAZNDesc: 'Plataforma global de streaming deportivo',
    disclaimer: '⚠️ Aviso: Todos los datos de análisis se basan en cuotas de mercado, solo para referencia, no consejo financiero.',
    disclaimer2: 'Los resultados deportivos dependen de muchos factores. Los datos pasados no garantizan resultados futuros.',
    heatUnit: 'partidos',
    // Legal pages
    privacyTitle: 'Política de Privacidad',
    privacyP1: 'Última actualización: 3 de junio de 2026',
    privacyH1: 'Recopilación de Datos',
    privacyP2: 'SportPredict solo recopila los siguientes datos: preferencias de idioma (almacenadas localmente en el navegador), datos de caché de API (información de cuotas, caducan en 5 minutos). No recopilamos información de identificación personal.',
    privacyH2: 'Uso de Cookies',
    privacyP3: 'Este sitio web utiliza localStorage para almacenar preferencias de idioma y el estado de consentimiento de cookies. Podemos usar cookies a través de Google AdSense para mostrar anuncios personalizados. Puede administrar las cookies a través de la configuración de su navegador.',
    privacyH3: 'Servicios de Terceros',
    privacyP4: 'Usamos The Odds API para obtener datos de cuotas deportivas y podemos usar Google AdSense para mostrar anuncios. Estos servicios tienen sus propias políticas de privacidad.',
    privacyH4: 'Derechos GDPR',
    privacyP5: 'Según el GDPR, tiene derecho a acceder, corregir y eliminar sus datos personales. Para ejercer sus derechos, contáctenos usando la información a continuación.',
    privacyH5: 'Contacto',
    aboutTitle: 'Sobre SportPredict',
    aboutP1: 'SportPredict es una plataforma profesional de análisis de datos deportivos dedicada a proporcionar estadísticas de eventos y análisis de probabilidad basados en datos de mercado para entusiastas deportivos de todo el mundo.',
    aboutP2: 'Nuestra misión es ayudar a los usuarios a comprender las probabilidades de mercado y las tendencias estadísticas en eventos deportivos a través de visualización de datos transparente. Todos los análisis se basan en datos de mercado públicos, calculados usando modelos matemáticos.',
    aboutP3: '⚠️ Importante: SportPredict no proporciona servicios de apuestas, no cobra tarifas y no fomenta ni promueve ninguna forma de juego. Todo el contenido de este sitio es solo para referencia informativa e investigación académica.',
    termsTitle: 'Términos de Servicio',
    termsP1: 'Al usar este sitio web, acepta los siguientes términos:',
    termsP2: '1. Todos los datos y análisis proporcionados son solo para referencia y no constituyen consejo de apuestas.',
    termsP3: '2. Los usuarios deben juzgar independientemente la precisión y aplicabilidad de los datos y asumir el riesgo de uso.',
    termsP4: '3. El contenido de este sitio está protegido por derechos de propiedad intelectual y no puede copiarse ni redistribuirse sin permiso.',
    termsP5: '4. Este sitio no garantiza la naturaleza en tiempo real y la precisión de los datos, y los datos del mercado pueden estar retrasados.',
    cookieText: 'Este sitio web utiliza cookies para mejorar su experiencia y puede mostrar anuncios a través de Google AdSense. Al continuar usando este sitio, acepta nuestra',
    cookieLink: 'Política de Privacidad',
    cookieAccept: 'Aceptar',
    footerDisclaimer: '⚠️ SportPredict es una plataforma de análisis de datos deportivos que no proporciona servicios de apuestas ni cobra tarifas. Todos los datos son solo para referencia de análisis.',
    footerAbout: 'Sobre Nosotros',
    footerPrivacy: 'Política de Privacidad',
    footerTerms: 'Términos de Servicio',
    footerContact: 'Contáctenos',
    allEventsGuide: 'Haga clic en una liga en la barra lateral para cargar datos. Las cuotas se almacenan en caché durante 5 minutos.',
    clickToLoadOdds: 'Haga clic en la liga de arriba para cargar datos de cuotas',
    apiQuotaExceeded: 'Cuota de API excedida. Espere al reinicio del próximo mes.',
    apiQuotaHint: 'Plan gratuito: 500 solicitudes por mes',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: 'Plataforma global de análisis de datos de cuotas deportivas',
    heroTag1: '📊 Cuotas en vivo',
    heroTag2: '📈 Prob. de mercado',
    heroTag3: '🌟 Discrepancia',
    heroBtnAnalyze: '📊 Iniciar análisis',
    heroBtnFavorites: '�?Favoritos',
  },
  pt: {
    sidebarLogo: 'Análise Esportiva',
    sidebarFooter: 'Dados apenas de referência · Não é conselho financeiro',
    tabMatches: 'Jogos', tabCombos: 'Perspectivas', tabDashboard: 'Painel',
    pageTitle: '{emoji} Análise {sport}', homeTeam: 'Mandante', awayTeam: 'Visitante', draw: 'Empate',
    confidence: 'Consistência de dados', noMatches: 'Sem dados de {sport}', all: 'Todos',
    combo2: '{sport} Combinação Dupla', combo3: '{sport} Combinação Tripla',
    combo2Label: 'Dupla', combo3Label: 'Tripla',
    crossCombo: '🌍 Perspectivas Multiesporte', crossCombo3: 'Multiesporte Tripla',
    comboWinRate: 'Taxa Combinada', lowRisk: 'Baixo Risco', mediumRisk: 'Risco Médio', highRisk: 'Alto Risco',
    dashHitRate: '📊 Distribuição de Probabilidade Implícita',
    dashHot: '🔥 Jogos em Alta', dashArb: '🌟 Oportunidades de Discrepância de Odds', dashArbNone: 'Sem oportunidades de discrepância', dashArbDesc: 'Taxa de discrepância',
    watchLive: '📺 Assistir Ao Vivo', modalTitle: '📺 Canais Oficiais Ao Vivo', modalDisclaimer: '⚖️ Assista através de canais oficiais legais',
    vs: 'vs', refreshOdds: 'Atualizar Odds', loading: 'Carregando...', loadError: 'Erro ao carregar', retry: 'Tentar novamente', noData: 'Sem dados',
    oddsCompare: 'Comparação de Odds', showOdds: 'Ver Odds', hideOdds: 'Ocultar Odds',
    impliedProb: 'Prob. Implícita', arbOpportunity: 'Discrepância de odds', arbProfit: 'Taxa de discrepância', apiRemaining: 'API Restante',
    bookmaker: 'Casa de Apostas', bestOdds: 'Melhor Odd',
    sportSoccer: 'Futebol', sportBasketball: 'Basquete', sportBaseball: 'Beisebol', sportIceHockey: 'Hóquei no Gelo',
    sportTennis: 'Tênis', sportAmericanFootball: 'Futebol Americano', sportBoxing: 'Boxe', sportMma: 'MMA',
    sportCricket: 'Críquete', sportRugby: 'Rugby', sportEsports: 'Esports', sportAussieRules: 'Futebol Australiano',
    sportGolf: 'Golfe', sportDarts: 'Dardos', sportCycling: 'Ciclismo', sportSnooker: 'Snooker',
    sportVolleyball: 'Voleibol', sportHandball: 'Handebol', sportFutsal: 'Futsal', sportTableTennis: 'Tênis de Mesa', sportBadminton: 'Badmínton',
    chFIFA: 'FIFA+', chFIFADesc: 'Plataforma oficial de streaming da FIFA',
    chLeagueOfficial: 'Transmissão Oficial', chLeagueOfficialDesc: 'Plataformas oficiais',
    chNBALeaguePass: 'NBA League Pass', chNBALeaguePassDesc: 'Assinatura oficial NBA',
    chESPNPlus: 'ESPN+', chESPNPlusDesc: 'Assinatura de streaming ESPN',
    chEurosport: 'Eurosport', chEurosportDesc: 'Streaming esportivo europeu',
    chMLBtv: 'MLB.tv', chMLBtvDesc: 'Assinatura oficial MLB',
    chNFLGamePass: 'NFL Game Pass', chNFLGamePassDesc: 'Assinatura oficial NFL',
    chNHLtv: 'NHL.tv', chNHLtvDesc: 'Assinatura oficial NHL',
    chYoutubeSports: 'YouTube Sports', chYoutubeSportsDesc: 'Canal esportivo YouTube',
    chDAZN: 'DAZN', chDAZNDesc: 'Plataforma global de streaming esportivo',
    disclaimer: '⚠️ Aviso: Todos os dados de análise são baseados em odds de mercado, apenas para referência, não conselho financeiro.',
    disclaimer2: 'Resultados esportivos dependem de muitos fatores. Dados passados não garantem resultados futuros.',
    heatUnit: 'jogos',
    // Legal pages
    privacyTitle: 'Política de Privacidade',
    privacyP1: 'Última atualização: 3 de junho de 2026',
    privacyH1: 'Coleta de Dados',
    privacyP2: 'O SportPredict coleta apenas os seguintes dados: preferências de idioma (armazenadas localmente no navegador), dados de cache da API (informações de odds, expiram em 5 minutos). Não coletamos informações de identificação pessoal.',
    privacyH2: 'Uso de Cookies',
    privacyP3: 'Este site usa localStorage para armazenar preferências de idioma e status de consentimento de cookies. Podemos usar cookies pelo Google AdSense para exibir anúncios personalizados. Você pode gerenciar cookies nas configurações do navegador.',
    privacyH3: 'Serviços de Terceiros',
    privacyP4: 'Usamos The Odds API para obter dados de odds esportivas e podemos usar Google AdSense para exibir anúncios. Esses serviços têm suas próprias políticas de privacidade.',
    privacyH4: 'Direitos GDPR',
    privacyP5: 'De acordo com o GDPR, você tem o direito de acessar, corrigir e excluir seus dados pessoais. Para exercer seus direitos, entre em contato conosco.',
    privacyH5: 'Contato',
    aboutTitle: 'Sobre o SportPredict',
    aboutP1: 'O SportPredict é uma plataforma profissional de análise de dados esportivos dedicada a fornecer estatísticas de eventos e análises de probabilidade baseadas em dados de mercado para entusiastas esportivos em todo o mundo.',
    aboutP2: 'Nossa missão é ajudar os usuários a entender as probabilidades de mercado e tendências estatísticas em eventos esportivos por meio de visualização de dados transparente. Todas as análises são baseadas em dados de mercado públicos, calculados usando modelos matemáticos.',
    aboutP3: '⚠️ Importante: O SportPredict não fornece serviços de apostas, não cobra taxas e não incentiva ou promove qualquer forma de jogo. Todo o conteúdo deste site é apenas para referência informativa e pesquisa acadêmica.',
    termsTitle: 'Termos de Serviço',
    termsP1: 'Ao usar este site, você concorda com os seguintes termos:',
    termsP2: '1. Todos os dados e análises fornecidos são apenas para referência e não constituem conselho de apostas.',
    termsP3: '2. Os usuários devem julgar independentemente a precisão e aplicabilidade dos dados e assumir o risco de uso.',
    termsP4: '3. O conteúdo deste site é protegido por direitos de propriedade intelectual e não pode ser copiado ou redistribuído sem permissão.',
    termsP5: '4. Este site não garante a natureza em tempo real e a precisão dos dados, e os dados de mercado podem estar atrasados.',
    cookieText: 'Este site usa cookies para melhorar sua experiência e pode exibir anúncios pelo Google AdSense. Ao continuar usando este site, você concorda com nossa',
    cookieLink: 'Política de Privacidade',
    cookieAccept: 'Aceitar',
    footerDisclaimer: '⚠️ SportPredict é uma plataforma de análise de dados esportivos que não fornece serviços de apostas nem cobra taxas. Todos os dados são apenas para referência de análise.',
    footerAbout: 'Sobre Nós',
    footerPrivacy: 'Política de Privacidade',
    footerTerms: 'Termos de Serviço',
    footerContact: 'Contate-nos',
    allEventsGuide: 'Clique em uma liga na barra lateral para carregar dados. As probabilidades sao armazenadas em cache por 5 minutos.',
    clickToLoadOdds: 'Clique na liga acima para carregar dados de probabilidades',
    apiQuotaExceeded: 'Cota de API excedida. Aguarde o reset do proximo mes.',
    apiQuotaHint: 'Plano gratuito: 500 solicitacoes por mes',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: 'Plataforma global de análise de dados de odds esportivas',
    heroTag1: '📊 Odds ao vivo',
    heroTag2: '📈 Prob. de mercado',
    heroTag3: '🌟 Discrepância',
    heroBtnAnalyze: '📊 Iniciar análise',
    heroBtnFavorites: '�?Favoritos',
  },
  ar: {
    sidebarLogo: 'تحليل رياضي', sidebarFooter: 'بيانات مرجعية فقط · ليست نصيحة مالية',
    tabMatches: 'المباريات', tabCombos: 'رؤى البيانات', tabDashboard: 'لوحة المعلومات',
    pageTitle: '{emoji} تحليل {sport}', homeTeam: 'المضيف', awayTeam: 'الضيف', draw: 'تعادل',
    confidence: 'اتساق البيانات', noMatches: 'لا بيانات {sport}', all: 'الكل',
    combo2: '{sport} مجموعة مزدوجة', combo3: '{sport} مجموعة ثلاثية', combo2Label: 'مزدوجة', combo3Label: 'ثلاثية',
    crossCombo: '🌍 رؤى متعددة الرياضات', crossCombo3: 'متعدد ثلاثي',
    comboWinRate: 'نسبة الفوز المجمعة', lowRisk: 'خطر منخفض', mediumRisk: 'خطر متوسط', highRisk: 'خطر مرتفع',
    dashHitRate: '📊 توزيع الاحتمال الضمني', dashHot: '🔥 المباريات الرائجة',
    dashArb: '🌟 فرص تباين الاحتمالات', dashArbNone: 'لا فرص تباين', dashArbDesc: 'معدل التباين',
    watchLive: '📺 شاهد مباشر', modalTitle: '📺 القنوات الرسمية المباشرة', modalDisclaimer: '⚖️ يرجى المشاهدة عبر القنوات الرسمية',
    vs: 'ضد', refreshOdds: 'تحديث الاحتمالات', loading: 'جارٍ التحميل...', loadError: 'فشل التحميل', retry: 'إعادة المحاولة', noData: 'لا بيانات',
    oddsCompare: 'مقارنة الاحتمالات', showOdds: 'عرض الاحتمالات', hideOdds: 'إخفاء الاحتمالات',
    impliedProb: 'الاحتمال الضمني', arbOpportunity: 'تباين الاحتمالات', arbProfit: 'معدل التباين', apiRemaining: 'API المتبقي',
    bookmaker: 'وكيل المراهنات', bestOdds: 'أفضل الاحتمالات',
    sportSoccer: 'كرة القدم', sportBasketball: 'كرة السلة', sportBaseball: 'البيسبول', sportIceHockey: 'الهوكي على الجليد',
    sportTennis: 'التنس', sportAmericanFootball: 'كرة القدم الأمريكية', sportBoxing: 'الملاكمة', sportMma: 'MMA',
    sportCricket: 'الكريكيت', sportRugby: 'الرجبي', sportEsports: 'الرياضات الإلكترونية',
    sportAussieRules: 'كرة القدم الأسترالية', sportGolf: 'الجولف', sportDarts: 'رمي السهام', sportCycling: 'الدراجات',
    sportSnooker: 'السنوكر', sportVolleyball: 'الكرة الطائرة', sportHandball: 'كرة اليد', sportFutsal: 'كرة الصالات',
    sportTableTennis: 'كرة الطاولة', sportBadminton: 'الريشة',
    chFIFA: 'FIFA+', chFIFADesc: 'منصة البث الرسمية للفيفا',
    chLeagueOfficial: 'البث الرسمي', chLeagueOfficialDesc: 'المنصات الرسمية',
    chNBALeaguePass: 'NBA League Pass', chNBALeaguePassDesc: 'اشتراك البث الرسمي NBA',
    chESPNPlus: 'ESPN+', chESPNPlusDesc: 'اشتراك بث ESPN',
    chEurosport: 'Eurosport', chEurosportDesc: 'بث رياضي أوروبي',
    chMLBtv: 'MLB.tv', chMLBtvDesc: 'اشتراك البث الرسمي MLB',
    chNFLGamePass: 'NFL Game Pass', chNFLGamePassDesc: 'اشتراك البث الرسمي NFL',
    chNHLtv: 'NHL.tv', chNHLtvDesc: 'اشتراك البث الرسمي NHL',
    chYoutubeSports: 'YouTube Sports', chYoutubeSportsDesc: 'قناة YouTube الرياضية',
    chDAZN: 'DAZN', chDAZNDesc: 'منصة بث رياضي عالمية',
    disclaimer: '⚠️ إخلاء مسؤولية: جميع بيانات التحليل مبنية على احتمالات السوق للمرجعية فقط، ليست نصيحة مالية.',
    disclaimer2: 'تتأثر نتائج المباريات بعوامل عديدة. البيانات السابقة لا تضمن النتائج المستقبلية.',
    heatUnit: 'مباراة',
    // Legal pages
    privacyTitle: 'سياسة الخصوصية',
    privacyP1: 'آخر تحديث: 3 يونيو 2026',
    privacyH1: 'جمع البيانات',
    privacyP2: 'يجمع SportPredict البيانات التالية فقط: تفضيلات اللغة (المخزنة محليًا في المتصفح)، بيانات ذاكرة التخزين المؤقت للواجهة (معلومات الاحتمالات، تنتهي بعد 5 دقائق). لا نجمع معلومات التعريف الشخصية.',
    privacyH2: 'استخدام ملفات تعريف الارتباط',
    privacyP3: 'يستخدم هذا الموقع localStorage لتخزين تفضيلات اللغة وحالة موافقة ملفات تعريف الارتباط. قد نستخدم ملفات تعريف الارتباط عبر Google AdSense لعرض إعلانات مخصصة. يمكنك إدارة ملفات تعريف الارتباط من خلال إعدادات المتصفح.',
    privacyH3: 'خدمات الطرف الثالث',
    privacyP4: 'نستخدم The Odds API للحصول على بيانات احتمالات الرياضية، وقد نستخدم Google AdSense لعرض الإعلانات. هذه الخدمات لديها سياسات خصوصية خاصة بها.',
    privacyH4: 'حقوق GDPR',
    privacyP5: 'بموجب GDPR، يحق لك الوصول إلى بياناتك الشخصية وتصحيحها وحذفها. لممارسة حقوقك، يرجى الاتصال بنا.',
    privacyH5: 'الاتصال',
    aboutTitle: 'حول SportPredict',
    aboutP1: 'SportPredict هي منصة احترافية لتحليل البيانات الرياضية مكرسة لتوفير إحصائيات الأحداث وتحليل الاحتمالات القائمة على بيانات السوق لعشاق الرياضة حول العالم.',
    aboutP2: 'مهمتنا هي مساعدة المستخدمين على فهم احتمالات السوق والاتجاهات الإحصائية في الأحداث الرياضية من خلال تصور البيانات الشفاف. جميع التحليلات مبنية على بيانات السوق العامة، محسوبة باستخدام نماذج رياضية.',
    aboutP3: '⚠️ مهم: SportPredict لا يقدم أي خدمات رهان، لا يفرض أي رسوم، ولا يشجع أو يعزز أي شكل من أشكال القمار. جميع المحتوى على هذا الموقع للمرجعية المعلوماتية والبحث الأكاديمي فقط.',
    termsTitle: 'شروط الخدمة',
    termsP1: 'باستخدام هذا الموقع، فإنك توافق على الشروط التالية:',
    termsP2: '1. جميع البيانات والتحليلات المقدمة هي للمرجعية فقط ولا تشكل نصيحة رهان.',
    termsP3: '2. يجب على المستخدمين الحكم بشكل مستقل على دقة وتطبيق البيانات وتحمل مخاطر الاستخدام.',
    termsP4: '3. محتوى هذا الموقع محمي بحقوق الملكية الفكرية ولا يمكن نسخه أو إعادة توزيعه دون إذن.',
    termsP5: '4. لا يضمن هذا الموقع طبيعة البيانات في الوقت الفعلي ودقتها، وقد تتأخر بيانات السوق.',
    cookieText: 'يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك وقد يعرض إعلانات عبر Google AdSense. بالاستمرار في استخدام هذا الموقع، فإنك توافق على',
    cookieLink: 'سياسة الخصوصية',
    cookieAccept: 'قبول',
    footerDisclaimer: '⚠️ SportPredict منصة تحليل بيانات رياضية لا تقدم خدمات رهان ولا تفرض أي رسوم. جميع البيانات للمرجعية التحليلية فقط.',
    footerAbout: 'من نحن',
    footerPrivacy: 'سياسة الخصوصية',
    footerTerms: 'شروط الخدمة',
    footerContact: 'اتصل بنا',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: 'منصة تحليل بيانات الاحتمالات الرياضية العالمية',
    heroTag1: '📊 احتمالات مباشرة',
    heroTag2: '📈 احتمال السوق',
    heroTag3: '🌟 تباين',
    heroBtnAnalyze: '📊 بدء التحليل',
    heroBtnFavorites: '�?المفضلة',
    sidebarLogo: '全スポーツ分�?, sidebarFooter: 'データは参考用 · 投資アドバイスではありません',
    tabMatches: '試合一�?, tabCombos: 'データインサイト', tabDashboard: 'ダッシュボード',
    pageTitle: '{emoji} {sport}分析', homeTeam: 'ホーム勝�?, awayTeam: 'アウェイ勝ち', draw: '引き分け',
    confidence: 'データ整合�?, noMatches: '{sport}の試合データがありません', all: 'すべ�?,
    combo2: '{sport} ダブルコン�?, combo3: '{sport} トリプルコン�?, combo2Label: 'ダブル', combo3Label: 'トリプル',
    crossCombo: '🌍 競技横断インサイ�?, crossCombo3: '競技横断トリプル',
    comboWinRate: '総合勝率', lowRisk: '低リスク', mediumRisk: '中リスク', highRisk: '高リスク',
    dashHitRate: '📊 インプライド勝率分布', dashHot: '🔥 トレンド試合',
    dashArb: '🌟 オッズ差異の機会', dashArbNone: 'オッズ差異の機会なし', dashArbDesc: '差異�?,
    watchLive: '📺 観戦する', modalTitle: '📺 公式生放送チャンネル', modalDisclaimer: '⚖️ 公式の合法チャンネルで視聴してくださ�?,
    vs: 'vs', refreshOdds: 'オッズ更�?, loading: '読み込み�?..', loadError: '読み込み失敗', retry: '再試�?, noData: 'データな�?,
    oddsCompare: 'オッズ比�?, showOdds: 'オッズ表�?, hideOdds: 'オッズ非表示',
    impliedProb: 'インプライド勝率', arbOpportunity: 'オッズ差�?, arbProfit: '差異�?, apiRemaining: 'API残り',
    bookmaker: 'ブックメーカ�?, bestOdds: '最高オッズ',
    sportSoccer: 'サッカー', sportBasketball: 'バスケットボール', sportBaseball: '野球', sportIceHockey: 'アイスホッケ�?,
    sportTennis: 'テニ�?, sportAmericanFootball: 'アメフト', sportBoxing: 'ボクシン�?, sportMma: 'MMA',
    sportCricket: 'クリケッ�?, sportRugby: 'ラグビー', sportEsports: 'eスポーツ',
    sportAussieRules: 'オージールー�?, sportGolf: 'ゴル�?, sportDarts: 'ダーツ', sportCycling: 'サイクリング',
    sportSnooker: 'スヌーカ�?, sportVolleyball: 'バレーボール', sportHandball: 'ハンドボール', sportFutsal: 'フットサ�?,
    sportTableTennis: '卓球', sportBadminton: 'バドミントン',
    chFIFA: 'FIFA+', chFIFADesc: 'FIFA公式ストリーミン�?,
    chLeagueOfficial: 'リーグ公式放�?, chLeagueOfficialDesc: '各リーグ公式デジタル放�?,
    chNBALeaguePass: 'NBA League Pass', chNBALeaguePassDesc: 'NBA公式ストリーミングサブス�?,
    chESPNPlus: 'ESPN+', chESPNPlusDesc: 'ESPNストリーミングサブス�?,
    chEurosport: 'Eurosport', chEurosportDesc: 'ヨーロッパスポーツストリーミング',
    chMLBtv: 'MLB.tv', chMLBtvDesc: 'MLB公式ストリーミングサブス�?,
    chNFLGamePass: 'NFL Game Pass', chNFLGamePassDesc: 'NFL公式ストリーミングサブス�?,
    chNHLtv: 'NHL.tv', chNHLtvDesc: 'NHL公式ストリーミングサブス�?,
    chYoutubeSports: 'YouTube Sports', chYoutubeSportsDesc: 'YouTubeスポーツチャンネ�?,
    chDAZN: 'DAZN', chDAZNDesc: 'グローバルスポーツストリーミング',
    disclaimer: '⚠️ 免責事項：本プラットフォームの分析データは市場オッズに基づき、参考用のみです�?,
    disclaimer2: 'スポーツ結果は多くの要因に影響されます。過去のデータは将来の結果を保証しません�?,
    heatUnit: '試合',
    // Legal pages
    privacyTitle: 'プライバシーポリシー',
    privacyP1: '最終更新：2026�?�?�?,
    privacyH1: 'データ収�?,
    privacyP2: 'SportPredictは次のデータのみを収集します：言語設定（ブラウザにローカル保存）、APIキャッシュデータ（オッズ情報�?分で期限切れ）。個人識別情報は収集しません�?,
    privacyH2: 'Cookieの使�?,
    privacyP3: '本ウェブサイトはlocalStorageを使用して言語設定とCookie同意状況を保存します。Google AdSenseを通じてCookieを使用し、パーソナライズされた広告を表示する場合があります。ブラウザの設定でCookieを管理できます�?,
    privacyH3: 'サードパーティサービ�?,
    privacyP4: 'The Odds APIを使用してスポーツオッズデータを取得し、Google AdSenseを使用して広告を表示する場合があります。これらのサービスには独自のプライバシーポリシーがあります�?,
    privacyH4: 'GDPRの権�?,
    privacyP5: 'GDPRに基づき、個人データへのアクセス、訂正、削除の権利があります。権利を行使するには、下記の連絡先までご連絡ください�?,
    privacyH5: '連絡�?,
    aboutTitle: 'SportPredictについて',
    aboutP1: 'SportPredictは、世界中のスポーツ愛好家に市場データに基づくイベント統計と確率分析を提供する専門的なスポーツデータ分析プラットフォームです�?,
    aboutP2: '私たちの使命は、透明なデータ可視化を通じて、スポーツイベントにおける市場確率と統計的傾向の理解を支援することです。すべての分析は公開市場データに基づき、数学的モデルを使用して計算されています�?,
    aboutP3: '⚠️ 重要：SportPredictは賭博サービスを提供せず、料金を徴収せず、いかなる形態のギャンブルも奨励または促進しません。本サイトのすべてのコンテンツは情報参考および学術研究のみを目的としています�?,
    termsTitle: '利用規約',
    termsP1: '本ウェブサイトを使用することにより、以下の規約に同意したものとみなします：',
    termsP2: '1. 本サイトで提供されるすべてのデータと分析は参考用であり、賭博の助言を構成するものではありません�?,
    termsP3: '2. ユーザーはデータの正確性と適用性を独自に判断し、使用のリスクを負うものとします�?,
    termsP4: '3. 本サイトのコンテンツは知的財産権により保護されており、許可なく複製または再配布することはできません�?,
    termsP5: '4. 本サイトはデータのリアルタイム性と正確性を保証せず、市場データに遅延が生じる場合があります�?,
    cookieText: '本ウェブサイトはCookieを使用してエクスペリエンスを向上させ、Google AdSenseを通じて広告を表示する場合があります。継続して使用することにより�?,
    cookieLink: 'プライバシーポリシー',
    cookieAccept: '同意する',
    footerDisclaimer: '⚠️ SportPredictはスポーツデータ分析プラットフォームであり、賭博サービスを提供せず、料金も徴収しません。すべてのデータは分析参考用です�?,
    footerAbout: '私たちについ�?,
    footerPrivacy: 'プライバシーポリシー',
    footerTerms: '利用規約',
    footerContact: 'お問い合わせ',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: 'グローバルスポーツオッズデータ分析プラットフォー�?,
    heroTag1: '📊 リアルタイムオッ�?,
    heroTag2: '📈 市場確率',
    heroTag3: '🌟 輻度分析',
    heroBtnAnalyze: '📊 分析開始',
    heroBtnFavorites: '�?お気に入�?,
    sidebarLogo: '전체 스포�?분석', sidebarFooter: '데이터는 참고�?· 금융 조언�?아닙니다',
    tabMatches: '경기 목록', tabCombos: '데이�?인사이트', tabDashboard: '대시보�?,
    pageTitle: '{emoji} {sport} 분석', homeTeam: '�?�?, awayTeam: '원정 �?, draw: '무승부',
    confidence: '데이�?일관�?, noMatches: '{sport} 경기 데이�?없음', all: '전체',
    combo2: '{sport} 더블 콤보', combo3: '{sport} 트리�?콤보', combo2Label: '더블', combo3Label: '트리�?,
    crossCombo: '🌍 종목 교차 인사이트', crossCombo3: '교차 트리�?,
    comboWinRate: '종합 승률', lowRisk: '저위험', mediumRisk: '중위�?, highRisk: '고위�?,
    dashHitRate: '📊 내재 승률 분포', dashHot: '🔥 인기 경기',
    dashArb: '🌟 배당�?차이 기회', dashArbNone: '배당�?차이 기회 없음', dashArbDesc: '차이�?,
    watchLive: '📺 시청하기', modalTitle: '📺 공식 생중�?채널', modalDisclaimer: '⚖️ 공식 합법 채널�?통해 시청하세�?,
    vs: 'vs', refreshOdds: '배당�?새로고침', loading: '로딩 �?..', loadError: '로딩 실패', retry: '재시�?, noData: '데이�?없음',
    oddsCompare: '배당�?비교', showOdds: '배당�?보기', hideOdds: '배당�?숨기�?,
    impliedProb: '내재 확률', arbOpportunity: '배당�?차이', arbProfit: '차이�?, apiRemaining: 'API 남은',
    bookmaker: '북메이커', bestOdds: '최고 배당�?,
    sportSoccer: '축구', sportBasketball: '농구', sportBaseball: '야구', sportIceHockey: '아이스하�?,
    sportTennis: '테니�?, sportAmericanFootball: '미식축구', sportBoxing: '권투', sportMma: 'MMA',
    sportCricket: '크리�?, sportRugby: '럭비', sportEsports: 'e스포�?,
    sportAussieRules: '호식축구', sportGolf: '골프', sportDarts: '다트', sportCycling: '사이클링',
    sportSnooker: '스누�?, sportVolleyball: '배구', sportHandball: '핸드�?, sportFutsal: '풋살',
    sportTableTennis: '탁구', sportBadminton: '배드민턴',
    chFIFA: 'FIFA+', chFIFADesc: 'FIFA 공식 스트리밍',
    chLeagueOfficial: '리그 공식 중계', chLeagueOfficialDesc: '공식 디지�?중계',
    chNBALeaguePass: 'NBA League Pass', chNBALeaguePassDesc: 'NBA 공식 스트리밍 구독',
    chESPNPlus: 'ESPN+', chESPNPlusDesc: 'ESPN 스트리밍 구독',
    chEurosport: 'Eurosport', chEurosportDesc: '유럽 스포�?스트리밍',
    chMLBtv: 'MLB.tv', chMLBtvDesc: 'MLB 공식 스트리밍 구독',
    chNFLGamePass: 'NFL Game Pass', chNFLGamePassDesc: 'NFL 공식 스트리밍 구독',
    chNHLtv: 'NHL.tv', chNHLtvDesc: 'NHL 공식 스트리밍 구독',
    chYoutubeSports: 'YouTube Sports', chYoutubeSportsDesc: 'YouTube 스포�?채널',
    chDAZN: 'DAZN', chDAZNDesc: '글로벌 스포�?스트리밍',
    disclaimer: '⚠️ 면책: 모든 분석 데이터는 시장 배당�?기반이며 참고용입니다.',
    disclaimer2: '스포�?결과�?여러 요인�?영향�?받습니다. 과거 데이터가 미래 성과�?보장하지 않습니다.',
    heatUnit: '경기',
    // Legal pages
    privacyTitle: '개인정보 보호정책',
    privacyP1: '최종 업데이트: 2026�?6�?3�?,
    privacyH1: '데이�?수집',
    privacyP2: 'SportPredict�?다음 데이터만 수집합니�? 언어 기본 설정(브라우저�?로컬 저�?, API 캐시 데이�?배당�?정보, 5�?�?만료). 개인 식별 정보�?수집하지 않습니다.',
    privacyH2: '쿠키 사용',
    privacyP3: '�?웹사이트�?localStorage�?사용하여 언어 기본 설정�?쿠키 동의 상태�?저장합니다. Google AdSense�?통해 쿠키�?사용하여 맞춤�?광고�?표시�?�?있습니다. 브라우저 설정에서 쿠키�?관리할 �?있습니다.',
    privacyH3: '�?�?서비�?,
    privacyP4: 'The Odds API�?사용하여 스포�?배당�?데이터를 가져오�? Google AdSense�?사용하여 광고�?표시�?�?있습니다. 이러�?서비스에�?자체 개인정보 보호정책�?있습니다.',
    privacyH4: 'GDPR 권리',
    privacyP5: 'GDPR�?따라 개인 데이터에 접근, 수정, 삭제�?권리가 있습니다. 권리�?행사하려�?아래 연락처로 문의�?주세�?',
    privacyH5: '연락�?,
    aboutTitle: 'SportPredict 소개',
    aboutP1: 'SportPredict�?�?세계 스포�?애호가에게 시장 데이�?기반�?이벤�?통계 �?확률 분석�?제공하는 전문 스포�?데이�?분석 플랫폼입니다.',
    aboutP2: '우리�?사명은 투명�?데이�?시각화를 통해 스포�?이벤트의 시장 확률�?통계�?추세�?이해하도�?돕는 것입니다. 모든 분석은 공개 시장 데이터를 기반으로 수학�?모델�?사용하여 계산됩니�?',
    aboutP3: '⚠️ 중요: SportPredict�?도박 서비스를 제공하지 않으�? 수수료를 부과하지 않으�? 어떤 형태�?도박�?장려하거�?촉진하지 않습니다. �?사이트의 모든 콘텐츠는 정보 참고 �?학술 연구 목적으로�?제공됩니�?',
    termsTitle: '이용약관',
    termsP1: '�?웹사이트�?사용함으로써 다음 약관�?동의하는 것으�?간주됩니�?',
    termsP2: '1. �?사이트에�?제공하는 모든 데이�?�?분석은 참고용이�?베팅 조언�?구성하지 않습니다.',
    termsP3: '2. 사용자는 데이터의 정확성과 적용성을 독립적으�?판단하고 사용 위험�?부담해�?합니�?',
    termsP4: '3. �?사이트의 콘텐츠는 지�?재산권으�?보호되며 허가 없이 복사하거�?재배포할 �?없습니다.',
    termsP5: '4. �?사이트는 데이터의 실시간성�?정확성을 보장하지 않으�? 시장 데이터에 지연이 있을 �?있습니다.',
    cookieText: '�?웹사이트�?쿠키�?사용하여 경험�?향상시키�? Google AdSense�?통해 광고�?표시�?�?있습니다. 계속 사용하면',
    cookieLink: '개인정보 보호정책',
    cookieAccept: '수락',
    footerDisclaimer: '⚠️ SportPredict�?스포�?데이�?분석 플랫폼으�? 도박 서비스를 제공하지 않으�?수수료도 부과하지 않습니다. 모든 데이터는 분석 참고용입니다.',
    footerAbout: '회사 소개',
    footerPrivacy: '개인정보 보호정책',
    footerTerms: '이용약관',
    footerContact: '문의하기',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: '글로벌 스포�?배당�?데이�?분석 플랫�?,
    heroTag1: '📊 실시�?배당�?,
    heroTag2: '📈 시장 확률',
    heroTag3: '🌟 괴리 분석',
    heroBtnAnalyze: '📊 분석 시작',
    heroBtnFavorites: '�?즐겨찾기',
    sidebarLogo: 'Спортивный Анализ', sidebarFooter: 'Данные для справки · Не финансовый совет',
    tabMatches: 'Матчи', tabCombos: 'Аналитические данные', tabDashboard: 'Панель',
    pageTitle: '{emoji} Анализ {sport}', homeTeam: 'Хозяева', awayTeam: 'Гости', draw: 'Ничья',
    confidence: 'Согласованность данных', noMatches: 'Нет данных {sport}', all: 'Все',
    combo2: '{sport} Двойной комбо', combo3: '{sport} Тройной комбо', combo2Label: 'Двойной', combo3Label: 'Тройной',
    crossCombo: '🌍 Кросс-спортивные инсайты', crossCombo3: 'Кросс тройной',
    comboWinRate: 'Общий рейтинг', lowRisk: 'Низкий риск', mediumRisk: 'Средний риск', highRisk: 'Высокий риск',
    dashHitRate: '📊 Распределение подразумеваемой вероятности', dashHot: '🔥 Популярные матчи',
    dashArb: '🌟 Возможности расхождения коэффициентов', dashArbNone: 'Нет возможностей расхождения', dashArbDesc: 'Степень расхождения',
    watchLive: '📺 Смотреть', modalTitle: '📺 Официальные каналы трансляций', modalDisclaimer: '⚖️ Смотрите через официальные каналы',
    vs: 'vs', refreshOdds: 'Обновить коэффициенты', loading: 'Загрузка...', loadError: 'Ошибка загрузки', retry: 'Повторить', noData: 'Нет данных',
    oddsCompare: 'Сравнение коэффициентов', showOdds: 'Показать коэффициенты', hideOdds: 'Скрыть коэффициенты',
    impliedProb: 'Подразумеваемая вер.', arbOpportunity: 'Расхождение коэффициентов', arbProfit: 'Степень расхождения', apiRemaining: 'API осталось',
    bookmaker: 'Букмекер', bestOdds: 'Лучший коэфф.',
    sportSoccer: 'Футбол', sportBasketball: 'Баскетбол', sportBaseball: 'Бейсбол', sportIceHockey: 'Хоккей',
    sportTennis: 'Теннис', sportAmericanFootball: 'Американский футбол', sportBoxing: 'Бокс', sportMma: 'ММА',
    sportCricket: 'Крикет', sportRugby: 'Регби', sportEsports: 'Киберспорт',
    sportAussieRules: 'Австралийский футбол', sportGolf: 'Гольф', sportDarts: 'Дартс', sportCycling: 'Велоспорт',
    sportSnooker: 'Снукер', sportVolleyball: 'Волейбол', sportHandball: 'Гандбол', sportFutsal: 'Мини-футбол',
    sportTableTennis: 'Настольный теннис', sportBadminton: 'Бадминтон',
    chFIFA: 'FIFA+', chFIFADesc: 'Официальная стриминговая платформа FIFA',
    chLeagueOfficial: 'Официальная трансляция', chLeagueOfficialDesc: 'Официальные платформы',
    chNBALeaguePass: 'NBA League Pass', chNBALeaguePassDesc: 'Официальная подписка NBA',
    chESPNPlus: 'ESPN+', chESPNPlusDesc: 'Стриминговая подписка ESPN',
    chEurosport: 'Eurosport', chEurosportDesc: 'Европейский спортивный стриминг',
    chMLBtv: 'MLB.tv', chMLBtvDesc: 'Официальная подписка MLB',
    chNFLGamePass: 'NFL Game Pass', chNFLGamePassDesc: 'Официальная подписка NFL',
    chNHLtv: 'NHL.tv', chNHLtvDesc: 'Официальная подписка NHL',
    chYoutubeSports: 'YouTube Sports', chYoutubeSportsDesc: 'Спортивный канал YouTube',
    chDAZN: 'DAZN', chDAZNDesc: 'Глобальная спортивная стриминговая платформа',
    disclaimer: '⚠️ Дисклеймер: Все данные анализа основаны на рыночных коэффициентах, для справки.',
    disclaimer2: 'На результаты матчей влияют многие факторы. Прошлые данные не гарантируют будущих результатов.',
    heatUnit: 'матчей',
    // Legal pages
    privacyTitle: 'Политика конфиденциальности',
    privacyP1: 'Последнее обновление: 3 июня 2026 г.',
    privacyH1: 'Сбор данных',
    privacyP2: 'SportPredict собирает только следующие данные: языковые настройки (хранятся локально в браузере), кэшированные данные API (информация о коэффициентах, срок действия 5 минут). Мы не собираем личную идентификационную информацию.',
    privacyH2: 'Использование файлов cookie',
    privacyP3: 'Этот веб-сайт использует localStorage для хранения языковых настроек и состояния согласия на использование файлов cookie. Мы можем использовать файлы cookie через Google AdSense для отображения персонализированной рекламы. Вы можете управлять файлами cookie в настройках браузера.',
    privacyH3: 'Сторонние сервисы',
    privacyP4: 'Мы используем The Odds API для получения данных о спортивных коэффициентах и можем использовать Google AdSense для отображения рекламы. У этих сервисов есть собственные политики конфиденциальности.',
    privacyH4: 'Права GDPR',
    privacyP5: 'Согласно GDPR, вы имеете право на доступ, исправление и удаление ваших персональных данных. Для осуществления прав свяжитесь с нами.',
    privacyH5: 'Контакты',
    aboutTitle: 'О SportPredict',
    aboutP1: 'SportPredict �?профессиональная платформа анализа спортивных данных, предназначенная для предоставления статистики событий и вероятностного анализа на основе рыночных данных спортивным энтузиастам по всему миру.',
    aboutP2: 'Наша миссия �?помочь пользователям понять рыночные вероятности и статистические тенденции в спортивных событиях посредством прозрачной визуализации данных. Все анализы основаны на общедоступных рыночных данных, рассчитанных с использованием математических моделей.',
    aboutP3: '⚠️ Важно: SportPredict не предоставляет букмекерские услуги, не взимает плату и не поощряет и не способствует каким-либо формам азартных игр. Все содержание этого сайта предназначено только для информационных целей и академических исследований.',
    termsTitle: 'Условия использования',
    termsP1: 'Используя этот веб-сайт, вы соглашаетесь со следующими условиями:',
    termsP2: '1. Все данные и анализы, представленные на этом сайте, предназначены только для справки и не являются советом по ставкам.',
    termsP3: '2. Пользователи должны самостоятельно оценивать точность и применимость данных и нести риск использования.',
    termsP4: '3. Содержание этого сайта защищено правами интеллектуальной собственности и не может быть скопировано или распространено без разрешения.',
    termsP5: '4. Этот сайт не гарантирует оперативность и точность данных, рыночные данные могут быть задержаны.',
    cookieText: 'Этот веб-сайт использует файлы cookie для улучшения вашего опыта и может отображать рекламу через Google AdSense. Продолжая использовать этот сайт, вы соглашаетесь с нашей',
    cookieLink: 'Политикой конфиденциальности',
    cookieAccept: 'Принять',
    footerDisclaimer: '⚠️ SportPredict �?платформа анализа спортивных данных, не предоставляющая букмекерские услуги и не взимающая плату. Все данные предназначены только для аналитических целей.',
    footerAbout: 'О нас',
    footerPrivacy: 'Политика конфиденциальности',
    footerTerms: 'Условия использования',
    footerContact: 'Связаться с нами',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: 'Глобальная платформа аналитики спортивных коэффициентов',
    heroTag1: '📊 Коэффициенты в реальном времени',
    heroTag2: '📈 Рыночная вероятность',
    heroTag3: '🌟 Расхождение',
    heroBtnAnalyze: '📊 Начать анализ',
    heroBtnFavorites: '�?Избранное',
    sidebarLogo: 'Analyse Sportive', sidebarFooter: 'Données à titre indicatif · Pas un conseil financier',
    tabMatches: 'Matchs', tabCombos: 'Perspectives', tabDashboard: 'Tableau de Bord',
    pageTitle: '{emoji} Analyse {sport}', homeTeam: 'Domicile', awayTeam: 'Extérieur', draw: 'Nul',
    confidence: 'Cohérence des données', noMatches: 'Aucune donnée {sport}', all: 'Tous',
    combo2: '{sport} Combo Double', combo3: '{sport} Combo Triple', combo2Label: 'Double', combo3Label: 'Triple',
    crossCombo: '🌍 Perspectives Multi-Sports', crossCombo3: 'Multi-Sports Triple',
    comboWinRate: 'Taux Combiné', lowRisk: 'Risque Faible', mediumRisk: 'Risque Moyen', highRisk: 'Risque Élevé',
    dashHitRate: '📊 Distribution des Probabilités Implicites', dashHot: '🔥 Matchs Tendance',
    dashArb: '🌟 Opportunités d\'Écart de Cotes', dashArbNone: 'Aucune opportunité d\'écart', dashArbDesc: 'Taux d\'écart',
    watchLive: '📺 Regarder en Direct', modalTitle: '📺 Chaînes Officielles en Direct', modalDisclaimer: '⚖️ Veuillez regarder via des chaînes officielles',
    vs: 'vs', refreshOdds: 'Actualiser les Cotes', loading: 'Chargement...', loadError: 'Erreur de chargement', retry: 'Réessayer', noData: 'Aucune donnée',
    oddsCompare: 'Comparaison des Cotes', showOdds: 'Voir les Cotes', hideOdds: 'Masquer les Cotes',
    impliedProb: 'Prob. Implicite', arbOpportunity: 'Écart de cotes', arbProfit: 'Taux d\'écart', apiRemaining: 'API Restant',
    bookmaker: 'Bookmaker', bestOdds: 'Meilleure Cote',
    sportSoccer: 'Football', sportBasketball: 'Basketball', sportBaseball: 'Baseball', sportIceHockey: 'Hockey sur Glace',
    sportTennis: 'Tennis', sportAmericanFootball: 'Football Américain', sportBoxing: 'Boxe', sportMma: 'MMA',
    sportCricket: 'Cricket', sportRugby: 'Rugby', sportEsports: 'Esports',
    sportAussieRules: 'Football Australien', sportGolf: 'Golf', sportDarts: 'Fléchettes', sportCycling: 'Cyclisme',
    sportSnooker: 'Snooker', sportVolleyball: 'Volleyball', sportHandball: 'Handball', sportFutsal: 'Futsal',
    sportTableTennis: 'Tennis de Table', sportBadminton: 'Badminton',
    chFIFA: 'FIFA+', chFIFADesc: 'Plateforme officielle FIFA',
    chLeagueOfficial: 'Diffusion Officielle', chLeagueOfficialDesc: 'Plateformes officielles',
    chNBALeaguePass: 'NBA League Pass', chNBALeaguePassDesc: 'Abonnement officiel NBA',
    chESPNPlus: 'ESPN+', chESPNPlusDesc: 'Abonnement streaming ESPN',
    chEurosport: 'Eurosport', chEurosportDesc: 'Streaming sportif européen',
    chMLBtv: 'MLB.tv', chMLBtvDesc: 'Abonnement officiel MLB',
    chNFLGamePass: 'NFL Game Pass', chNFLGamePassDesc: 'Abonnement officiel NFL',
    chNHLtv: 'NHL.tv', chNHLtvDesc: 'Abonnement officiel NHL',
    chYoutubeSports: 'YouTube Sports', chYoutubeSportsDesc: 'Chaîne sportive YouTube',
    chDAZN: 'DAZN', chDAZNDesc: 'Plateforme de streaming sportif mondiale',
    disclaimer: '⚠️ Avertissement : Toutes les données d\'analyse sont basées sur les cotes du marché, à titre indicatif uniquement.',
    disclaimer2: 'Les résultats sportifs dépendent de nombreux facteurs. Les données passées ne garantissent pas les résultats futurs.',
    heatUnit: 'matchs',
    // Legal pages
    privacyTitle: 'Politique de Confidentialité',
    privacyP1: 'Dernière mise à jour : 3 juin 2026',
    privacyH1: 'Collecte de Données',
    privacyP2: "SportPredict collecte uniquement les données suivantes : préférences linguistiques (stockées localement dans le navigateur), données de cache API (informations de cotes, expirent après 5 minutes). Nous ne collectons pas d'informations d'identification personnelle.",
    privacyH2: 'Utilisation des Cookies',
    privacyP3: 'Ce site web utilise localStorage pour stocker les préférences linguistiques et l\'état de consentement aux cookies. Nous pouvons utiliser des cookies via Google AdSense pour afficher des publicités personnalisées. Vous pouvez gérer les cookies dans les paramètres de votre navigateur.',
    privacyH3: 'Services Tiers',
    privacyP4: "Nous utilisons The Odds API pour obtenir les données de cotes sportives et pouvons utiliser Google AdSense pour afficher des publicités. Ces services ont leurs propres politiques de confidentialité.",
    privacyH4: 'Droits RGPD',
    privacyP5: 'Conformément au RGPD, vous avez le droit d\'accéder, de corriger et de supprimer vos données personnelles. Pour exercer vos droits, veuillez nous contacter.',
    privacyH5: 'Contact',
    aboutTitle: 'À propos de SportPredict',
    aboutP1: 'SportPredict est une plateforme professionnelle d\'analyse de données sportives dédiée à fournir des statistiques d\'événements et des analyses de probabilités basées sur les données de marché aux passionnés de sport du monde entier.',
    aboutP2: "Notre mission est d'aider les utilisateurs à comprendre les probabilités de marché et les tendances statistiques dans les événements sportifs grâce à une visualisation transparente des données. Toutes les analyses sont basées sur des données de marché publiques, calculées à l'aide de modèles mathématiques.",
    aboutP3: '⚠️ Important : SportPredict ne fournit aucun service de paris, ne facture aucun frais et n\'encourage ni ne promeut aucune forme de jeu. Tout le contenu de ce site est destiné uniquement à la référence informative et à la recherche académique.',
    termsTitle: 'Conditions d\'Utilisation',
    termsP1: 'En utilisant ce site web, vous acceptez les conditions suivantes :',
    termsP2: "1. Toutes les données et analyses fournies sur ce site sont à titre indicatif uniquement et ne constituent pas un conseil de paris.",
    termsP3: '2. Les utilisateurs doivent juger indépendamment de l\'exactitude et de l\'applicabilité des données et assumer le risque d\'utilisation.',
    termsP4: '3. Le contenu de ce site est protégé par les droits de propriété intellectuelle et ne peut être copié ou redistribué sans autorisation.',
    termsP5: '4. Ce site ne garantit pas la nature en temps réel et l\'exactitude des données, et les données de marché peuvent être retardées.',
    cookieText: 'Ce site web utilise des cookies pour améliorer votre expérience et peut afficher des publicités via Google AdSense. En continuant à utiliser ce site, vous acceptez notre',
    cookieLink: 'Politique de Confidentialité',
    cookieAccept: 'Accepter',
    footerDisclaimer: '⚠️ SportPredict est une plateforme d\'analyse de données sportives qui ne fournit aucun service de paris ni ne facture de frais. Toutes les données sont à titre d\'analyse indicative uniquement.',
    footerAbout: 'À Propos',
    footerPrivacy: 'Politique de Confidentialité',
    footerTerms: "Conditions d'Utilisation",
    footerContact: 'Contactez-nous',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: 'Plateforme mondiale d\'analyse des cotes sportives',
    heroTag1: '📊 Cotes en direct',
    heroTag2: '📈 Prob. du marché',
    heroTag3: '🌟 Écart',
    heroBtnAnalyze: '📊 Commencer l\'analyse',
    heroBtnFavorites: '�?Favoris',
    sidebarLogo: 'Sportanalyse', sidebarFooter: 'Daten nur als Referenz · Keine Finanzberatung',
    tabMatches: 'Spiele', tabCombos: 'Daten-Einblicke', tabDashboard: 'Dashboard',
    pageTitle: '{emoji} {sport} Analyse', homeTeam: 'Heim', awayTeam: 'Auswärts', draw: 'Unentschieden',
    confidence: 'Datenkonsistenz', noMatches: 'Keine {sport}-Daten', all: 'Alle',
    combo2: '{sport} Doppel-Kombo', combo3: '{sport} Dreier-Kombo', combo2Label: 'Doppel', combo3Label: 'Dreier',
    crossCombo: '🌍 Sportübergreifende Einblicke', crossCombo3: 'Sportübergreifend Dreier',
    comboWinRate: 'Kombinierte Gewinnquote', lowRisk: 'Niedriges Risiko', mediumRisk: 'Mittleres Risiko', highRisk: 'Hohes Risiko',
    dashHitRate: '📊 Implizite Wahrscheinlichkeitsverteilung', dashHot: '🔥 Trendspiele',
    dashArb: '🌟 Quotendifferenzen', dashArbNone: 'Keine Quotendifferenzen', dashArbDesc: 'Differenzrate',
    watchLive: '📺 Live ansehen', modalTitle: '📺 Offizielle Live-Kanäle', modalDisclaimer: '⚖️ Bitte über offizielle Kanäle schauen',
    vs: 'vs', refreshOdds: 'Quoten aktualisieren', loading: 'Laden...', loadError: 'Laden fehlgeschlagen', retry: 'Erneut versuchen', noData: 'Keine Daten',
    oddsCompare: 'Quotenvergleich', showOdds: 'Quoten anzeigen', hideOdds: 'Quoten ausblenden',
    impliedProb: 'Impl. Wahrscheinlichkeit', arbOpportunity: 'Quotendifferenz', arbProfit: 'Differenzrate', apiRemaining: 'API verbleibend',
    bookmaker: 'Buchmacher', bestOdds: 'Beste Quote',
    sportSoccer: 'Fußball', sportBasketball: 'Basketball', sportBaseball: 'Baseball', sportIceHockey: 'Eishockey',
    sportTennis: 'Tennis', sportAmericanFootball: 'American Football', sportBoxing: 'Boxen', sportMma: 'MMA',
    sportCricket: 'Cricket', sportRugby: 'Rugby', sportEsports: 'E-Sport',
    sportAussieRules: 'Australischer Fußball', sportGolf: 'Golf', sportDarts: 'Darts', sportCycling: 'Radsport',
    sportSnooker: 'Snooker', sportVolleyball: 'Volleyball', sportHandball: 'Handball', sportFutsal: 'Futsal',
    sportTableTennis: 'Tischtennis', sportBadminton: 'Badminton',
    chFIFA: 'FIFA+', chFIFADesc: 'Offizielle FIFA-Streaming-Plattform',
    chLeagueOfficial: 'Offizielle Ligaübertragung', chLeagueOfficialDesc: 'Offizielle Plattformen',
    chNBALeaguePass: 'NBA League Pass', chNBALeaguePassDesc: 'Offizielles NBA-Streaming-Abo',
    chESPNPlus: 'ESPN+', chESPNPlusDesc: 'ESPN-Streaming-Abo',
    chEurosport: 'Eurosport', chEurosportDesc: 'Europäisches Sport-Streaming',
    chMLBtv: 'MLB.tv', chMLBtvDesc: 'Offizielles MLB-Streaming-Abo',
    chNFLGamePass: 'NFL Game Pass', chNFLGamePassDesc: 'Offizielles NFL-Streaming-Abo',
    chNHLtv: 'NHL.tv', chNHLtvDesc: 'Offizielles NHL-Streaming-Abo',
    chYoutubeSports: 'YouTube Sports', chYoutubeSportsDesc: 'YouTube-Sportkanal',
    chDAZN: 'DAZN', chDAZNDesc: 'Globale Sport-Streaming-Plattform',
    disclaimer: '⚠️ Haftungsausschluss: Alle Analysedaten basieren auf Marktquoten, nur zur Information.',
    disclaimer2: 'Sportergebnisse werden von vielen Faktoren beeinflusst. Vergangene Daten garantieren keine zukünftigen Ergebnisse.',
    heatUnit: 'Spiele',
    // Legal pages
    privacyTitle: 'Datenschutzerklärung',
    privacyP1: 'Letzte Aktualisierung: 3. Juni 2026',
    privacyH1: 'Datenerhebung',
    privacyP2: 'SportPredict erhebt nur folgende Daten: Spracheinstellungen (lokal im Browser gespeichert), API-Cache-Daten (Quotierungsinformationen, verfallen nach 5 Minuten). Wir erheben keine personenbezogenen Identifikationsdaten.',
    privacyH2: 'Cookie-Nutzung',
    privacyP3: 'Diese Website verwendet localStorage zum Speichern von Spracheinstellungen und Cookie-Zustimmungsstatus. Wir können Cookies über Google AdSense verwenden, um personalisierte Anzeigen zu schalten. Sie können Cookies in Ihren Browser-Einstellungen verwalten.',
    privacyH3: 'Drittanbieter-Dienste',
    privacyP4: 'Wir verwenden The Odds API, um Sportquotendaten zu erhalten, und können Google AdSense zum Schalten von Anzeigen verwenden. Diese Dienste haben eigene Datenschutzerklärungen.',
    privacyH4: 'DSGVO-Rechte',
    privacyP5: 'Gemäß DSGVO haben Sie das Recht auf Zugang, Berichtigung und Löschung Ihrer personenbezogenen Daten. Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte.',
    privacyH5: 'Kontakt',
    aboutTitle: 'Über SportPredict',
    aboutP1: 'SportPredict ist eine professionelle Sportdatenanalyse-Plattform, die sich der Bereitstellung von marktdatenbasierten Ereignisstatistiken und Wahrscheinlichkeitsanalysen für Sportbegeisterte weltweit widmet.',
    aboutP2: 'Unsere Mission ist es, Nutzern durch transparente Datenvisualisierung zu helfen, Marktwahrscheinlichkeiten und statistische Trends bei Sportereignissen zu verstehen. Alle Analysen basieren auf öffentlichen Marktdaten, die mit mathematischen Modellen berechnet werden.',
    aboutP3: '⚠️ Wichtig: SportPredict bietet keine Wettdienstleistungen an, erhebt keine Gebühren und fördert oder betreibt keine Form von Glücksspiel. Alle Inhalte dieser Website dienen nur der Information und der akademischen Forschung.',
    termsTitle: 'Nutzungsbedingungen',
    termsP1: 'Durch die Nutzung dieser Website stimmen Sie den folgenden Bedingungen zu:',
    termsP2: '1. Alle auf dieser Website bereitgestellten Daten und Analysen dienen nur zur Information und stellen keine Wettberatung dar.',
    termsP3: '2. Nutzer sollten die Genauigkeit und Anwendbarkeit der Daten selbst beurteilen und das Nutzungsrisiko tragen.',
    termsP4: '3. Der Inhalt dieser Website ist durch Urheberrechte geschützt und darf ohne Genehmigung nicht kopiert oder weiterverbreitet werden.',
    termsP5: '4. Diese Website garantiert nicht die Echtzeit-Natur und Genauigkeit der Daten, Marktdaten können verzögert sein.',
    cookieText: 'Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern, und kann Anzeigen über Google AdSense schalten. Durch die weitere Nutzung stimmen Sie unserer',
    cookieLink: 'Datenschutzerklärung',
    cookieAccept: 'Akzeptieren',
    footerDisclaimer: '⚠️ SportPredict ist eine Sportdatenanalyse-Plattform, die keine Wettdienstleistungen anbietet und keine Gebühren erhebt. Alle Daten dienen nur der Analyse.',
    footerAbout: 'Über Uns',
    footerPrivacy: 'Datenschutzerklärung',
    footerTerms: 'Nutzungsbedingungen',
    footerContact: 'Kontakt',
    heroTitle: '🏆 SportPredict',
    heroSubtitle: 'Globale Sportquoten-Datenanalyse-Plattform',
    heroTag1: '📊 Live-Quoten',
    heroTag2: '📈 Marktwahrscheinlichkeit',
    heroTag3: '🌟 Abweichungsanalyse',
    heroBtnAnalyze: '📊 Analyse starten',
    heroBtnFavorites: '�?Favoriten',
  },
};
const NEW_I18N = {
  zh: {
    noEvents: '暂无赛事安排', autoRefresh: '自动刷新', every5Min: '�?分钟更新',
    lastRefresh: '上次刷新', viewAll: '查看全部', tabAllEvents: '所有赛�?,
    matchLive: '进行�?, matchUpcoming: '即将开�?, matchScheduled: '未开�?, matchFinished: '已结�?,
    sportLacrosse: '长曲棍球', sportMixedMartialArts: '综合格斗', sportPolitics: '政治', sportRugbyLeague: '橄榄球联�?,
    arbOpportunityCount: '{count}场有差异分析机会',
    // V3 features
    searchPlaceholder: '搜索比赛、队�?..',
    myFavorites: '我的收藏',
    noFavorites: '暂无收藏',
    favAdded: '已收�?,
    favRemoved: '已取消收�?,
    filterHot: '🔥 热门',
    filterUpcoming: '�?即将开�?,
    filterLive: '🟢 进行�?,
    filterArb: '🌟 差异分析',
    filterHighAttention: '�?高关注度',
    timeJustNow: '刚刚',
    timeMinutesLater: '{n}分钟�?,
    timeHoursLater: '{n}小时�?,
    timeTomorrow: '明天',
    timeDaysLater: '{n}天后',
    timeStarted: '已开�?,
    oddsUp: '上升',
    oddsDown: '下降',
  },
  en: {
    noEvents: 'No events scheduled', autoRefresh: 'Auto Refresh', every5Min: 'Updates every 5 min',
    lastRefresh: 'Last refresh', viewAll: 'View All', tabAllEvents: 'All Events',
    matchLive: 'Live', matchUpcoming: 'Starting Soon', matchScheduled: 'Scheduled', matchFinished: 'Finished',
    sportLacrosse: 'Lacrosse', sportMixedMartialArts: 'Mixed Martial Arts', sportPolitics: 'Politics', sportRugbyLeague: 'Rugby League',
    arbOpportunityCount: '{count} matches with discrepancy opportunities',
    // V3 features
    searchPlaceholder: 'Search matches, teams...',
    myFavorites: 'My Favorites',
    noFavorites: 'No favorites yet',
    favAdded: 'Added to favorites',
    favRemoved: 'Removed from favorites',
    filterHot: '🔥 Hot',
    filterUpcoming: '�?Starting Soon',
    filterLive: '🟢 Live',
    filterArb: '🌟 Discrepancy',
    filterHighAttention: '�?High Attention',
    timeJustNow: 'Just now',
    timeMinutesLater: '{n} min',
    timeHoursLater: '{n}h',
    timeTomorrow: 'Tomorrow',
    timeDaysLater: '{n} days',
    timeStarted: 'Started',
    oddsUp: 'Up',
    oddsDown: 'Down',
  },
  es: {
    noEvents: 'Sin eventos programados', autoRefresh: 'Actualización automática', every5Min: 'Cada 5 minutos',
    lastRefresh: 'Última actualización', viewAll: 'Ver todo', tabAllEvents: 'Todos los eventos',
    matchLive: 'En vivo', matchUpcoming: 'Próximo', matchScheduled: 'Programado', matchFinished: 'Finalizado',
    sportLacrosse: 'Lacrosse', sportMixedMartialArts: 'Artes Marciales Mixtas', sportPolitics: 'Política', sportRugbyLeague: 'Liga de Rugby',
    arbOpportunityCount: '{count} partidos con oportunidades de discrepancia',
    // V3 features
    searchPlaceholder: 'Buscar partidos, equipos...',
    myFavorites: 'Mis Favoritos',
    noFavorites: 'Sin favoritos',
    favAdded: 'Añadido a favoritos',
    favRemoved: 'Eliminado de favoritos',
    filterHot: '🔥 Popular',
    filterUpcoming: '�?Próximo',
    filterLive: '🟢 En vivo',
    filterArb: '🌟 Discrepancia',
    filterHighAttention: '�?Alta atención',
    timeJustNow: 'Ahora',
    timeMinutesLater: '{n} min',
    timeHoursLater: '{n}h',
    timeTomorrow: 'Mañana',
    timeDaysLater: '{n} días',
    timeStarted: 'Comenzado',
    oddsUp: 'Subió',
    oddsDown: 'Bajó',
  },
  pt: {
    noEvents: 'Sem eventos programados', autoRefresh: 'Atualização automática', every5Min: 'A cada 5 minutos',
    lastRefresh: 'Última atualização', viewAll: 'Ver tudo', tabAllEvents: 'Todos os eventos',
    matchLive: 'Ao vivo', matchUpcoming: 'Começando em breve', matchScheduled: 'Programado', matchFinished: 'Finalizado',
    sportLacrosse: 'Lacrosse', sportMixedMartialArts: 'Artes Marciais Mistas', sportPolitics: 'Política', sportRugbyLeague: 'Liga de Rugby',
    arbOpportunityCount: '{count} jogos com oportunidades de discrepância',
    // V3 features
    searchPlaceholder: 'Buscar jogos, times...',
    myFavorites: 'Meus Favoritos',
    noFavorites: 'Sem favoritos',
    favAdded: 'Adicionado aos favoritos',
    favRemoved: 'Removido dos favoritos',
    filterHot: '🔥 Popular',
    filterUpcoming: '�?Em breve',
    filterLive: '🟢 Ao vivo',
    filterArb: '🌟 Discrepância',
    filterHighAttention: '�?Alta atenção',
    timeJustNow: 'Agora',
    timeMinutesLater: '{n} min',
    timeHoursLater: '{n}h',
    timeTomorrow: 'Amanhã',
    timeDaysLater: '{n} dias',
    timeStarted: 'Iniciado',
    oddsUp: 'Subiu',
    oddsDown: 'Desceu',
  },
  ar: {
    noEvents: 'لا أحداث مجدولة', autoRefresh: 'تحديث تلقائي', every5Min: 'كل 5 دقائق',
    lastRefresh: 'آخر تحديث', viewAll: 'عرض الكل', tabAllEvents: 'جميع الأحداث',
    matchLive: 'مباشر', matchUpcoming: 'يبدأ قريباً', matchScheduled: 'مجدول', matchFinished: 'منتهي',
    sportLacrosse: 'لاكروس', sportMixedMartialArts: 'فنون القتال المختلطة', sportPolitics: 'سياسة', sportRugbyLeague: 'دوري الركبي',
    arbOpportunityCount: '{count} مباريات بفرص تباين',
    // V3 features
    searchPlaceholder: 'بحث عن مباريات، فرق...',
    myFavorites: 'مفضلاتي',
    noFavorites: 'لا مفضلات',
    favAdded: 'أضيف إلى المفضلة',
    favRemoved: 'أزيل من المفضلة',
    filterHot: '🔥 رائج',
    filterUpcoming: '�?قريباً',
    filterLive: '🟢 مباشر',
    filterArb: '🌟 تباين',
    filterHighAttention: '�?اهتمام عالي',
    timeJustNow: 'الآن',
    timeMinutesLater: '{n} د',
    timeHoursLater: '{n} س',
    timeTomorrow: 'غداً',
    timeDaysLater: '{n} أيام',
    timeStarted: 'بدأ',
    oddsUp: 'ارتفع',
    oddsDown: 'انخفض',
  },
  ja: {
    noEvents: '予定されたイベントな�?, autoRefresh: '自動更新', every5Min: '5分ごとに更新',
    lastRefresh: '最終更�?, viewAll: 'すべて表�?, tabAllEvents: '全イベン�?,
    matchLive: '試合�?, matchUpcoming: 'まもなく開始', matchScheduled: '予定', matchFinished: '終了',
    sportLacrosse: 'ラクロス', sportMixedMartialArts: '総合格闘技', sportPolitics: '政治', sportRugbyLeague: 'ラグビーリー�?,
    arbOpportunityCount: '{count}試合にオッズ差異の機会あ�?,
    // V3 features
    searchPlaceholder: '試合、チームを検�?..',
    myFavorites: 'お気に入�?,
    noFavorites: 'お気に入りな�?,
    favAdded: 'お気に入りに追加',
    favRemoved: 'お気に入りから削�?,
    filterHot: '🔥 人気',
    filterUpcoming: '�?開始間近',
    filterLive: '🟢 試合�?,
    filterArb: '🌟 差異分析',
    filterHighAttention: '�?高注�?,
    timeJustNow: 'たった今',
    timeMinutesLater: '{n}分後',
    timeHoursLater: '{n}時間�?,
    timeTomorrow: '明日',
    timeDaysLater: '{n}日後',
    timeStarted: '開始�?,
    oddsUp: '上昇',
    oddsDown: '下落',
  },
  ko: {
    noEvents: '예정�?이벤�?없음', autoRefresh: '자동 새로고침', every5Min: '5분마�?업데이트',
    lastRefresh: '마지�?새로고침', viewAll: '전체 보기', tabAllEvents: '전체 이벤�?,
    matchLive: '진행 �?, matchUpcoming: '�?시작', matchScheduled: '예정', matchFinished: '종료',
    sportLacrosse: '라크로스', sportMixedMartialArts: '종합격투�?, sportPolitics: '정치', sportRugbyLeague: '럭비리그',
    arbOpportunityCount: '{count}경기 배당�?차이 기회 있음',
    // V3 features
    searchPlaceholder: '경기, 팀 검�?..',
    myFavorites: '즐겨찾기',
    noFavorites: '즐겨찾기 없음',
    favAdded: '즐겨찾기 추가',
    favRemoved: '즐겨찾기 제거',
    filterHot: '🔥 인기',
    filterUpcoming: '�?�?시작',
    filterLive: '🟢 진행 �?,
    filterArb: '🌟 차이 분석',
    filterHighAttention: '�?높은 관�?,
    timeJustNow: '방금',
    timeMinutesLater: '{n}�?�?,
    timeHoursLater: '{n}시간 �?,
    timeTomorrow: '내일',
    timeDaysLater: '{n}�?�?,
    timeStarted: '시작�?,
    oddsUp: '상승',
    oddsDown: '하락',
  },
  ru: {
    noEvents: 'Нет запланированных событий', autoRefresh: 'Автообновление', every5Min: 'Обновление каждые 5 мин',
    lastRefresh: 'Последнее обновление', viewAll: 'Показать все', tabAllEvents: 'Все события',
    matchLive: 'В прямом эфире', matchUpcoming: 'Скоро начнётся', matchScheduled: 'Запланировано', matchFinished: 'Завершено',
    sportLacrosse: 'Лакросс', sportMixedMartialArts: 'Смешанные единоборства', sportPolitics: 'Политика', sportRugbyLeague: 'Регбилиг',
    arbOpportunityCount: '{count} матчей с расхождением коэффициентов',
    // V3 features
    searchPlaceholder: 'Поиск матчей, команд...',
    myFavorites: 'Избранное',
    noFavorites: 'Нет избранных',
    favAdded: 'Добавлено в избранное',
    favRemoved: 'Удалено из избранного',
    filterHot: '🔥 Популярные',
    filterUpcoming: '�?Скоро',
    filterLive: '🟢 В эфире',
    filterArb: '🌟 Расхождение',
    filterHighAttention: '�?Высокий интерес',
    timeJustNow: 'Сейчас',
    timeMinutesLater: '{n} мин',
    timeHoursLater: '{n} ч',
    timeTomorrow: 'Завтра',
    timeDaysLater: '{n} дн.',
    timeStarted: 'Началось',
    oddsUp: 'Рост',
    oddsDown: 'Падение',
  },
  fr: {
    noEvents: 'Aucun événement prévu', autoRefresh: 'Actualisation auto', every5Min: 'Mise à jour toutes les 5 min',
    lastRefresh: 'Dernière actualisation', viewAll: 'Voir tout', tabAllEvents: 'Tous les événements',
    matchLive: 'En direct', matchUpcoming: 'Commence bientôt', matchScheduled: 'Programmé', matchFinished: 'Terminé',
    sportLacrosse: 'Crosse', sportMixedMartialArts: 'Arts martiaux mixtes', sportPolitics: 'Politique', sportRugbyLeague: 'Rugby à XIII',
    arbOpportunityCount: "{count} matchs avec opportunités d'écart",
    // V3 features
    searchPlaceholder: 'Rechercher matchs, équipes...',
    myFavorites: 'Mes Favoris',
    noFavorites: 'Aucun favori',
    favAdded: 'Ajouté aux favoris',
    favRemoved: 'Retiré des favoris',
    filterHot: '🔥 Tendance',
    filterUpcoming: '�?Bientôt',
    filterLive: '🟢 En direct',
    filterArb: '🌟 Écart',
    filterHighAttention: '�?Forte attention',
    timeJustNow: "À l'instant",
    timeMinutesLater: '{n} min',
    timeHoursLater: '{n}h',
    timeTomorrow: 'Demain',
    timeDaysLater: '{n} jours',
    timeStarted: 'Commencé',
    oddsUp: 'Hausse',
    oddsDown: 'Baisse',
  },
  de: {
    noEvents: 'Keine Veranstaltungen geplant', autoRefresh: 'Auto-Aktualisierung', every5Min: 'Alle 5 Min. aktualisiert',
    lastRefresh: 'Letzte Aktualisierung', viewAll: 'Alle anzeigen', tabAllEvents: 'Alle Veranstaltungen',
    matchLive: 'Live', matchUpcoming: 'Beginnt bald', matchScheduled: 'Geplant', matchFinished: 'Beendet',
    sportLacrosse: 'Lacrosse', sportMixedMartialArts: 'Mixed Martial Arts', sportPolitics: 'Politik', sportRugbyLeague: 'Rugby League',
    arbOpportunityCount: '{count} Spiele mit Quotendifferenz',
    // V3 features
    searchPlaceholder: 'Spiele, Teams suchen...',
    myFavorites: 'Meine Favoriten',
    noFavorites: 'Keine Favoriten',
    favAdded: 'Zu Favoriten hinzugefügt',
    favRemoved: 'Aus Favoriten entfernt',
    filterHot: '🔥 Beliebt',
    filterUpcoming: '�?Bald',
    filterLive: '🟢 Live',
    filterArb: '🌟 Differenz',
    filterHighAttention: '�?Hohe Aufmerksamkeit',
    timeJustNow: 'Gerade eben',
    timeMinutesLater: '{n} Min.',
    timeHoursLater: '{n} Std.',
    timeTomorrow: 'Morgen',
    timeDaysLater: '{n} Tage',
    timeStarted: 'Gestartet',
    oddsUp: 'Steigung',
    oddsDown: 'Gefälle',
  },
};

Object.keys(NEW_I18N).forEach(lang => {
  if (I18N[lang]) Object.assign(I18N[lang], NEW_I18N[lang]);
});

// ===== Analysis & Vote I18N =====
const ANALYSIS_I18N = {
  zh: {
    tabAnalysis: '📊 赛事分析',
    marketProbAnalysis: '市场概率分析',
    keyFindings: '关键发现',
    winRate: '胜率',
    drawProbability: '平局概率',
    favored: '被看�?,
    highMarketAttention: '市场关注度高',
    oddsDiscrepancyFound: '发现赔率差异机会�?,
    highest: '最�?,
    lowest: '最�?,
    difference: '差异',
    lastUpdated: '最后更�?,
    share: '分享',
    todayVoteStats: '今日投票统计',
    totalVotes: '总投票数',
    hottestVoteMatch: '最热门投票比赛',
    basedOnOdds: '基于赔率反推',
    bookmakersProviding: '家机构提供赔�?,
    marketTendency: '市场整体倾向',
    whoWillWin: '你认为谁会获胜？',
    votes: '�?,
    voted: '已投�?,
    voteSuccess: '投票成功�?,
    copiedToClipboard: '已复制到剪贴�?,
    noAnalysisData: '暂无分析数据，请先选择联赛加载数据',
  },
  en: {
    tabAnalysis: '📊 Match Analysis',
    marketProbAnalysis: 'Market Probability Analysis',
    keyFindings: 'Key Findings',
    winRate: 'Win Rate',
    drawProbability: 'Draw Probability',
    favored: 'favored',
    highMarketAttention: 'High market attention',
    oddsDiscrepancyFound: 'Odds discrepancy opportunity found!',
    highest: 'Highest',
    lowest: 'Lowest',
    difference: 'Diff',
    lastUpdated: 'Last updated',
    share: 'Share',
    todayVoteStats: "Today's Vote Stats",
    totalVotes: 'Total votes',
    hottestVoteMatch: 'Hottest vote match',
    basedOnOdds: 'Based on odds',
    bookmakersProviding: 'bookmakers providing odds',
    marketTendency: 'Market tendency',
    whoWillWin: 'Who will win?',
    votes: 'votes',
    voted: 'Voted',
    voteSuccess: 'Vote successful!',
    copiedToClipboard: 'Copied to clipboard',
    noAnalysisData: 'No analysis data. Please select a league first.',
  },
  es: {
    tabAnalysis: '📊 Análisis de Partidos',
    marketProbAnalysis: 'Análisis de Probabilidad de Mercado',
    keyFindings: 'Hallazgos Clave',
    winRate: 'Tasa de victoria',
    drawProbability: 'Probabilidad de empate',
    favored: 'favorito',
    highMarketAttention: 'Alta atención del mercado',
    oddsDiscrepancyFound: '¡Oportunidad de discrepancia de cuotas encontrada!',
    highest: 'Máximo',
    lowest: 'Mínimo',
    difference: 'Dif.',
    lastUpdated: 'Última actualización',
    share: 'Compartir',
    todayVoteStats: 'Estadísticas de votos de hoy',
    totalVotes: 'Total de votos',
    hottestVoteMatch: 'Partido más votado',
    basedOnOdds: 'Basado en cuotas',
    bookmakersProviding: 'casas de apuestas ofrecen cuotas',
    marketTendency: 'Tendencia del mercado',
    whoWillWin: '¿Quién ganará?',
    votes: 'votos',
    voted: 'Votado',
    voteSuccess: '¡Voto exitoso!',
    copiedToClipboard: 'Copiado al portapapeles',
    noAnalysisData: 'Sin datos de análisis. Seleccione una liga primero.',
  },
  pt: {
    tabAnalysis: '📊 Análise de Jogos',
    marketProbAnalysis: 'Análise de Probabilidade de Mercado',
    keyFindings: 'Descobertas Chave',
    winRate: 'Taxa de vitória',
    drawProbability: 'Probabilidade de empate',
    favored: 'favorito',
    highMarketAttention: 'Alta atenção do mercado',
    oddsDiscrepancyFound: 'Oportunidade de discrepância de odds encontrada!',
    highest: 'Máximo',
    lowest: 'Mínimo',
    difference: 'Dif.',
    lastUpdated: 'Última atualização',
    share: 'Compartilhar',
    todayVoteStats: 'Estatísticas de votos de hoje',
    totalVotes: 'Total de votos',
    hottestVoteMatch: 'Jogo mais votado',
    basedOnOdds: 'Baseado em odds',
    bookmakersProviding: 'casas oferecem odds',
    marketTendency: 'Tendência do mercado',
    whoWillWin: 'Quem vencerá?',
    votes: 'votos',
    voted: 'Votado',
    voteSuccess: 'Voto registrado!',
    copiedToClipboard: 'Copiado',
    noAnalysisData: 'Sem dados de análise. Selecione uma liga primeiro.',
  },
  ar: {
    tabAnalysis: '📊 تحليل المباريات',
    marketProbAnalysis: 'تحليل احتمالية السوق',
    keyFindings: 'النتائج الرئيسية',
    winRate: 'نسبة الفوز',
    drawProbability: 'احتمالية التعادل',
    favored: 'مرشح',
    highMarketAttention: 'اهتمام سوقي عالي',
    oddsDiscrepancyFound: 'تم العثور على فرصة تباين الاحتمالات!',
    highest: 'الأعلى',
    lowest: 'الأدنى',
    difference: 'الفرق',
    lastUpdated: 'آخر تحديث',
    share: 'مشاركة',
    todayVoteStats: 'إحصائيات التصويت اليوم',
    totalVotes: 'إجمالي الأصوات',
    hottestVoteMatch: 'أكثر مباراة تصويتاً',
    basedOnOdds: 'بناءً على الاحتمالات',
    bookmakersProviding: 'وكلاء يقدمون احتمالات',
    marketTendency: 'اتجاه السوق',
    whoWillWin: 'من سيفوز؟',
    votes: 'أصوات',
    voted: 'تم التصويت',
    voteSuccess: 'تم التصويت بنجاح!',
    copiedToClipboard: 'تم النسخ',
    noAnalysisData: 'لا بيانات تحليل. اختر دورياً أولاً.',
  },
  ja: {
    tabAnalysis: '📊 試合分析',
    marketProbAnalysis: '市場確率分析',
    keyFindings: '主な発見',
    winRate: '勝率',
    drawProbability: '引き分け確率',
    favored: '有利',
    highMarketAttention: '市場の注目度�?,
    oddsDiscrepancyFound: 'オッズ差異の機会を発見！',
    highest: '最�?,
    lowest: '最�?,
    difference: '差異',
    lastUpdated: '最終更�?,
    share: '共有',
    todayVoteStats: '本日の投票統�?,
    totalVotes: '総投票数',
    hottestVoteMatch: '最も投票された試合',
    basedOnOdds: 'オッズに基づ�?,
    bookmakersProviding: '社がオッズ提�?,
    marketTendency: '市場の傾�?,
    whoWillWin: 'どちらが勝ちますか？',
    votes: '�?,
    voted: '投票済み',
    voteSuccess: '投票しました�?,
    copiedToClipboard: 'コピーしまし�?,
    noAnalysisData: '分析データなし。リーグを選択してください�?,
  },
  ko: {
    tabAnalysis: '📊 경기 분석',
    marketProbAnalysis: '시장 확률 분석',
    keyFindings: '주요 발견',
    winRate: '승률',
    drawProbability: '무승부 확률',
    favored: '유리',
    highMarketAttention: '시장 관심도 높음',
    oddsDiscrepancyFound: '배당�?차이 기회 발견!',
    highest: '최고',
    lowest: '최저',
    difference: '차이',
    lastUpdated: '마지�?업데이트',
    share: '공유',
    todayVoteStats: '오늘 투표 통계',
    totalVotes: '�?투표 �?,
    hottestVoteMatch: '가�?인기 있는 투표 경기',
    basedOnOdds: '배당�?기반',
    bookmakersProviding: '�?업체 배당�?제공',
    marketTendency: '시장 경향',
    whoWillWin: '누가 이길 �?같나�?',
    votes: '�?,
    voted: '투표 완료',
    voteSuccess: '투표 성공!',
    copiedToClipboard: '클립보드�?복사�?,
    noAnalysisData: '분석 데이�?없음. 리그�?먼저 선택하세�?',
  },
  ru: {
    tabAnalysis: '📊 Анализ матчей',
    marketProbAnalysis: 'Анализ рыночной вероятности',
    keyFindings: 'Ключевые выводы',
    winRate: 'Вероятность победы',
    drawProbability: 'Вероятность ничьей',
    favored: 'фаворит',
    highMarketAttention: 'Высокий интерес рынка',
    oddsDiscrepancyFound: 'Найдена возможность расхождения коэффициентов!',
    highest: 'Макс.',
    lowest: 'Мин.',
    difference: 'Разница',
    lastUpdated: 'Последнее обновление',
    share: 'Поделиться',
    todayVoteStats: 'Статистика голосований за сегодня',
    totalVotes: 'Всего голосов',
    hottestVoteMatch: 'Самый популярный матч',
    basedOnOdds: 'На основе коэффициентов',
    bookmakersProviding: 'букмекеров предлагают коэффициенты',
    marketTendency: 'Тенденция рынка',
    whoWillWin: 'Кто победит?',
    votes: 'голосов',
    voted: 'Проголосовали',
    voteSuccess: 'Голос принят!',
    copiedToClipboard: 'Скопировано',
    noAnalysisData: 'Нет данных для анализа. Сначала выберите лигу.',
  },
  fr: {
    tabAnalysis: '📊 Analyse des matchs',
    marketProbAnalysis: 'Analyse de probabilité du marché',
    keyFindings: 'Constats clés',
    winRate: 'Taux de victoire',
    drawProbability: 'Probabilité de nul',
    favored: 'favori',
    highMarketAttention: 'Forte attention du marché',
    oddsDiscrepancyFound: "Opportunité d'écart de cotes détectée !",
    highest: 'Max.',
    lowest: 'Min.',
    difference: 'Écart',
    lastUpdated: 'Dernière mise à jour',
    share: 'Partager',
    todayVoteStats: 'Statistiques de vote du jour',
    totalVotes: 'Total des votes',
    hottestVoteMatch: 'Match le plus voté',
    basedOnOdds: 'Basé sur les cotes',
    bookmakersProviding: 'bookmakers proposent des cotes',
    marketTendency: 'Tendance du marché',
    whoWillWin: 'Qui va gagner ?',
    votes: 'votes',
    voted: 'A voté',
    voteSuccess: 'Vote enregistré !',
    copiedToClipboard: 'Copié',
    noAnalysisData: "Pas de données d'analyse. Sélectionnez d'abord une ligue.",
  },
  de: {
    tabAnalysis: '📊 Spielanalyse',
    marketProbAnalysis: 'Marktwahrscheinlichkeitsanalyse',
    keyFindings: 'Wesentliche Erkenntnisse',
    winRate: 'Gewinnquote',
    drawProbability: 'Unentschieden-Wahrscheinlichkeit',
    favored: 'bevorzugt',
    highMarketAttention: 'Hohe Marktaufmerksamkeit',
    oddsDiscrepancyFound: 'Quotendifferenz-Gelegenheit entdeckt!',
    highest: 'Höchst',
    lowest: 'Niedrigst',
    difference: 'Differenz',
    lastUpdated: 'Zuletzt aktualisiert',
    share: 'Teilen',
    todayVoteStats: 'Heutige Abstimmungsstatistik',
    totalVotes: 'Gesamtstimmen',
    hottestVoteMatch: 'Beliebteste Abstimmung',
    basedOnOdds: 'Basierend auf Quoten',
    bookmakersProviding: 'Buchmacher bieten Quoten',
    marketTendency: 'Markttendenz',
    whoWillWin: 'Wer wird gewinnen?',
    votes: 'Stimmen',
    voted: 'Abgestimmt',
    voteSuccess: 'Stimme abgegeben!',
    copiedToClipboard: 'Kopiert',
    noAnalysisData: 'Keine Analysedaten. Bitte zuerst eine Liga auswählen.',
  },
};

Object.keys(ANALYSIS_I18N).forEach(lang => {
  if (I18N[lang]) Object.assign(I18N[lang], ANALYSIS_I18N[lang]);
});

// ===== League Name Translations =====
const LEAGUE_I18N = {
  'FIFA World Cup': { zh:'世界�?, en:'FIFA World Cup', es:'Copa Mundial FIFA', pt:'Copa do Mundo FIFA', ar:'كأس العالم', ja:'ワールドカッ�?, ko:'월드�?, ru:'Чемпионат мира', fr:'Coupe du Monde', de:'Weltmeisterschaft' },
  'Premier League': { zh:'英超', en:'Premier League', es:'Premier League', pt:'Premier League', ar:'الدوري الإنجليزي', ja:'プレミアリー�?, ko:'프리미어리그', ru:'АПЛ', fr:'Premier League', de:'Premier League' },
  'NFL': { zh:'美式足球NFL', en:'NFL', es:'NFL', pt:'NFL', ar:'NFL', ja:'NFL', ko:'NFL', ru:'НФЛ', fr:'NFL', de:'NFL' },
  'MLB': { zh:'美国职业棒球', en:'MLB', es:'MLB', pt:'MLB', ar:'MLB', ja:'MLB', ko:'MLB', ru:'МЛБ', fr:'MLB', de:'MLB' },
  'KBO': { zh:'韩国棒球', en:'KBO', es:'KBO', pt:'KBO', ar:'KBO', ja:'KBO', ko:'KBO', ru:'KBO', fr:'KBO', de:'KBO' },
  'NPB': { zh:'日本棒球', en:'NPB', es:'NPB', pt:'NPB', ar:'NPB', ja:'NPB', ko:'NPB', ru:'NPB', fr:'NPB', de:'NPB' },
  'Copa Libertadores': { zh:'南美解放者杯', en:'Copa Libertadores', es:'Copa Libertadores', pt:'Copa Libertadores', ar:'كوبا ليبرتادوريس', ja:'コパ・リベルタドーレ�?, ko:'코파 리베르타도레�?, ru:'Копа Либертадорес', fr:'Copa Libertadores', de:'Copa Libertadores' },
  'J League': { zh:'日本J联赛', en:'J League', es:'J League', pt:'J League', ar:'الدوري الياباني', ja:'Jリー�?, ko:'J리그', ru:'Джей-лига', fr:'J League', de:'J League' },
  'La Liga': { zh:'西甲', en:'La Liga', es:'La Liga', pt:'La Liga', ar:'الدوري الإسباني', ja:'ラ・リー�?, ko:'라리가', ru:'Ла Лига', fr:'La Liga', de:'La Liga' },
  'Serie A': { zh:'意甲', en:'Serie A', es:'Serie A', pt:'Serie A', ar:'الدوري الإيطالي', ja:'セリエA', ko:'세리에A', ru:'Серия А', fr:'Serie A', de:'Serie A' },
  'Bundesliga': { zh:'德甲', en:'Bundesliga', es:'Bundesliga', pt:'Bundesliga', ar:'الدوري الألماني', ja:'ブンデスリー�?, ko:'분데스리가', ru:'Бундеслига', fr:'Bundesliga', de:'Bundesliga' },
  'Ligue 1': { zh:'法甲', en:'Ligue 1', es:'Ligue 1', pt:'Ligue 1', ar:'الدوري الفرنسي', ja:'リーグ・アン', ko:'리그1', ru:'Лига 1', fr:'Ligue 1', de:'Ligue 1' },
  'NBA': { zh:'NBA', en:'NBA', es:'NBA', pt:'NBA', ar:'NBA', ja:'NBA', ko:'NBA', ru:'НБА', fr:'NBA', de:'NBA' },
  'NHL': { zh:'NHL冰球', en:'NHL', es:'NHL', pt:'NHL', ar:'NHL', ja:'NHL', ko:'NHL', ru:'НХЛ', fr:'NHL', de:'NHL' },
  'Champions League': { zh:'欧冠', en:'Champions League', es:'Champions League', pt:'Champions League', ar:'دوري أبطال أوروبا', ja:'チャンピオンズリーグ', ko:'챔피언스리그', ru:'Лига чемпионов', fr:'Ligue des Champions', de:'Champions League' },
  'Europa League': { zh:'欧联', en:'Europa League', es:'Europa League', pt:'Europa League', ar:'الدوري الأوروبي', ja:'ヨーロッパリーグ', ko:'유로파리�?, ru:'Лига Европы', fr:'Ligue Europa', de:'Europa League' },
  'MLS': { zh:'美国职业足球', en:'MLS', es:'MLS', pt:'MLS', ar:'MLS', ja:'MLS', ko:'MLS', ru:'MLS', fr:'MLS', de:'MLS' },
  'Eredivisie': { zh:'荷甲', en:'Eredivisie', es:'Eredivisie', pt:'Eredivisie', ar:'الدوري الهولندي', ja:'エールディヴィジ', ko:'에레디비�?, ru:'Эредивизи', fr:'Eredivisie', de:'Eredivisie' },
  'Primeira Liga': { zh:'葡超', en:'Primeira Liga', es:'Primeira Liga', pt:'Primeira Liga', ar:'الدوري البرتغالي', ja:'プリメイラ・リー�?, ko:'프리메이라리가', ru:'Примейра', fr:'Primeira Liga', de:'Primeira Liga' },
  'Scottish Premiership': { zh:'苏超', en:'Scottish Premiership', es:'Premiership Escocesa', pt:'Premiership Escocesa', ar:'الدوري الاسكتلندي', ja:'スコティッシュ・プレミアシッ�?, ko:'스코티시 프리미어�?, ru:'Шотландская Премьер-лига', fr:'Premiership écossaise', de:'Scottish Premiership' },
  'Championship': { zh:'英冠', en:'Championship', es:'Championship', pt:'Championship', ar:'البطولة الإنجليزية', ja:'チャンピオンシッ�?, ko:'챔피언십', ru:'Чемпионшип', fr:'Championship', de:'Championship' },
  'League One': { zh:'英甲', en:'League One', es:'League One', pt:'League One', ar:'الدوري الأول', ja:'リー�?', ko:'리그�?, ru:'Первая лига', fr:'League One', de:'League One' },
  'Serie B': { zh:'意乙', en:'Serie B', es:'Serie B', pt:'Serie B', ar:'الدوري الإيطالي ب', ja:'セリエB', ko:'세리에B', ru:'Серия B', fr:'Serie B', de:'Serie B' },
  'Liga MX': { zh:'墨西哥联�?, en:'Liga MX', es:'Liga MX', pt:'Liga MX', ar:'ليغا MX', ja:'リーガMX', ko:'리가MX', ru:'Лига MX', fr:'Liga MX', de:'Liga MX' },
  'A-League': { zh:'澳超', en:'A-League', es:'A-League', pt:'A-League', ar:'الدوري الأسترالي', ja:'Aリー�?, ko:'A리그', ru:'А-Лига', fr:'A-League', de:'A-League' },
  'UEFA Nations League': { zh:'欧国�?, en:'UEFA Nations League', es:'Liga de Naciones UEFA', pt:'Liga das Nações UEFA', ar:'دوري الأمم الأوروبي', ja:'UEFAネーションズリー�?, ko:'UEFA 네이션스리그', ru:'Лига наций УЕФА', fr:'Ligue des Nations UEFA', de:'UEFA Nations League' },
  'NCAA': { zh:'NCAA', en:'NCAA', es:'NCAA', pt:'NCAA', ar:'NCAA', ja:'NCAA', ko:'NCAA', ru:'NCAA', fr:'NCAA', de:'NCAA' },
  'UFC': { zh:'UFC', en:'UFC', es:'UFC', pt:'UFC', ar:'UFC', ja:'UFC', ko:'UFC', ru:'UFC', fr:'UFC', de:'UFC' },
  'Bellator': { zh:'Bellator', en:'Bellator', es:'Bellator', pt:'Bellator', ar:'Bellator', ja:'Bellator', ko:'Bellator', ru:'Bellator', fr:'Bellator', de:'Bellator' },
  'PFL': { zh:'PFL', en:'PFL', es:'PFL', pt:'PFL', ar:'PFL', ja:'PFL', ko:'PFL', ru:'PFL', fr:'PFL', de:'PFL' },
  'Super Rugby': { zh:'超级橄榄�?, en:'Super Rugby', es:'Super Rugby', pt:'Super Rugby', ar:'سوبر رجبي', ja:'スーパーラグビー', ko:'수퍼 럭비', ru:'Супер Регби', fr:'Super Rugby', de:'Super Rugby' },
  'NRL': { zh:'NRL橄榄球联�?, en:'NRL', es:'NRL', pt:'NRL', ar:'NRL', ja:'NRL', ko:'NRL', ru:'NRL', fr:'NRL', de:'NRL' },
  'IPL': { zh:'印度板球超级联赛', en:'IPL', es:'IPL', pt:'IPL', ar:'IPL', ja:'IPL', ko:'IPL', ru:'IPL', fr:'IPL', de:'IPL' },
  'PGA': { zh:'PGA高尔�?, en:'PGA', es:'PGA', pt:'PGA', ar:'PGA', ja:'PGA', ko:'PGA', ru:'PGA', fr:'PGA', de:'PGA' },
  'Formula 1': { zh:'F1', en:'Formula 1', es:'Fórmula 1', pt:'Fórmula 1', ar:'فورمولا 1', ja:'F1', ko:'F1', ru:'Формула 1', fr:'Formule 1', de:'Formel 1' },
};

function getLeagueLocalizedName(leagueTitle) {
  if (!leagueTitle) return '';
  if (LEAGUE_I18N[leagueTitle]) return LEAGUE_I18N[leagueTitle][currentLang] || LEAGUE_I18N[leagueTitle].en || leagueTitle;
  return leagueTitle;
}

// Current language
let currentLang = 'zh';

function t(key, replacements) {
  let str = (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key]) || (I18N.zh[key]) || key;
  if (replacements) {
    Object.keys(replacements).forEach(k => {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), replacements[k]);
    });
  }
  return str;
}

// Group-to-emoji & i18n key mapping
const GROUP_MAP = {
  'Soccer': { emoji: '�?, i18nKey: 'sportSoccer', accent: '--accent-football', accentVal: '#4ade80' },
  'Basketball': { emoji: '🏀', i18nKey: 'sportBasketball', accent: '--accent-basketball', accentVal: '#4ade80' },
  'Baseball': { emoji: '�?, i18nKey: 'sportBaseball', accent: '--accent-baseball', accentVal: '#4ade80' },
  'Ice Hockey': { emoji: '🏒', i18nKey: 'sportIceHockey', accent: '--accent-hockey', accentVal: '#4ade80' },
  'Tennis': { emoji: '🎾', i18nKey: 'sportTennis', accent: '--accent-tennis', accentVal: '#4ade80' },
  'American Football': { emoji: '🏈', i18nKey: 'sportAmericanFootball', accent: '--accent-football-nfl', accentVal: '#4ade80' },
  'Boxing': { emoji: '🥊', i18nKey: 'sportBoxing', accent: '--accent-fighting', accentVal: '#4ade80' },
  'MMA': { emoji: '🥊', i18nKey: 'sportMma', accent: '--accent-fighting', accentVal: '#4ade80' },
  'Cricket': { emoji: '🏏', i18nKey: 'sportCricket', accent: '--accent-cricket', accentVal: '#4ade80' },
  'Rugby': { emoji: '🏉', i18nKey: 'sportRugby', accent: '--accent-rugby', accentVal: '#4ade80' },
  'Esports': { emoji: '🎮', i18nKey: 'sportEsports', accent: '--accent-esports', accentVal: '#4ade80' },
  'Aussie Rules': { emoji: '🏉', i18nKey: 'sportAussieRules', accent: '--accent-rugby', accentVal: '#4ade80' },
  'Golf': { emoji: '�?, i18nKey: 'sportGolf', accent: '--accent-football', accentVal: '#4ade80' },
  'Darts': { emoji: '🎯', i18nKey: 'sportDarts', accent: '--accent-basketball', accentVal: '#4ade80' },
  'Cycling': { emoji: '🚴', i18nKey: 'sportCycling', accent: '--accent-hockey', accentVal: '#4ade80' },
  'Snooker': { emoji: '🎱', i18nKey: 'sportSnooker', accent: '--accent-esports', accentVal: '#4ade80' },
  'Volleyball': { emoji: '🏐', i18nKey: 'sportVolleyball', accent: '--accent-tennis', accentVal: '#4ade80' },
  'Handball': { emoji: '🤾', i18nKey: 'sportHandball', accent: '--accent-basketball', accentVal: '#4ade80' },
  'Futsal': { emoji: '�?, i18nKey: 'sportFutsal', accent: '--accent-football', accentVal: '#4ade80' },
  'Table Tennis': { emoji: '🏓', i18nKey: 'sportTableTennis', accent: '--accent-hockey', accentVal: '#4ade80' },
  'Badminton': { emoji: '🏸', i18nKey: 'sportBadminton', accent: '--accent-tennis', accentVal: '#4ade80' },
  'Lacrosse': { emoji: '🥍', i18nKey: 'sportLacrosse', accent: '--accent-rugby', accentVal: '#4ade80' },
  'Mixed Martial Arts': { emoji: '🥊', i18nKey: 'sportMixedMartialArts', accent: '--accent-fighting', accentVal: '#4ade80' },
  'Politics': { emoji: '🗳�?, i18nKey: 'sportPolitics', accent: '--accent-esports', accentVal: '#4ade80' },
  'Rugby League': { emoji: '🏉', i18nKey: 'sportRugbyLeague', accent: '--accent-rugby', accentVal: '#4ade80' },
};
const DEFAULT_GROUP = { emoji: '🏆', i18nKey: null, accent: '--accent-football', accentVal: '#4ade80' };

function getGroupInfo(group) { return GROUP_MAP[group] || { ...DEFAULT_GROUP, i18nKey: null }; }
function getGroupLocalizedName(group) {
  const info = getGroupInfo(group);
  return info.i18nKey ? t(info.i18nKey) : group;
}

function detectLang() {
  const stored = localStorage.getItem('sportsPredictorLang');
  if (stored && I18N[stored]) return stored;
  const browserLang = (navigator.language || navigator.userLanguage || 'zh').toLowerCase().split('-')[0];
  if (I18N[browserLang]) return browserLang;
  return 'zh';
}

function setLang(code) {
  if (!I18N[code]) return;
  currentLang = code;
  localStorage.setItem('sportsPredictorLang', code);
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
  const langMap = { zh:'zh-CN', en:'en', es:'es', pt:'pt-BR', ar:'ar', ja:'ja', ko:'ko', ru:'ru', fr:'fr', de:'de' };
  document.documentElement.lang = langMap[code] || code;
  const titleMap = {
    zh: '全赛事数据分析平�?- 实时赔率分析 | SportPredict',
    en: 'Sports Data Analysis Today - Real-Time Odds Analysis | SportPredict',
    es: 'Análisis Deportivo - Análisis de Cuotas en Tiempo Real | SportPredict',
    pt: 'Análise Esportiva - Análise de Odds em Tempo Real | SportPredict',
    ar: 'تحليل رياضي - تحليل الاحتمالات الفوري | SportPredict',
    ja: 'スポーツ分析 - リアルタイムオッズ分�?| SportPredict',
    ko: '스포�?분석 - 실시�?배당�?분석 | SportPredict',
    ru: 'Спортивный Анализ - Анализ Коэффициентов | SportPredict',
    fr: 'Analyse Sportive - Analyse des Cotes en Temps Réel | SportPredict',
    de: 'Sportanalyse - Echtzeit-Quotenanalyse | SportPredict',
  };
  document.title = titleMap[code] || titleMap.en;
  applyLang();
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  const langInfo = LANGS.find(l => l.code === currentLang);
  document.getElementById('langLabel').textContent = langInfo ? langInfo.label : '中文';
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === currentLang);
  });
  buildSidebar();
  buildMobileNav();
  if (currentSportKey) updatePageTitle();
  updateApiBadge();
  // Update search placeholder
  const searchInput = document.getElementById('searchInput');
  if (searchInput && !searchInput.value) searchInput.placeholder = t('searchPlaceholder');
  // Update favorites label
  const favLabel = document.querySelector('#favNavItem .nav-label');
  if (favLabel) favLabel.textContent = t('myFavorites');
}

function updateDate() {
  const dateEl = document.getElementById('currentDate');
  const localeMap = { zh:'zh-CN', en:'en-US', es:'es-ES', pt:'pt-BR', ar:'ar-SA', ja:'ja-JP', ko:'ko-KR', ru:'ru-RU', fr:'fr-FR', de:'de-DE' };
  dateEl.textContent = new Date().toLocaleDateString(localeMap[currentLang] || 'zh-CN', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
  });
}

function buildLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  dropdown.innerHTML = LANGS.map(l =>
    `<div class="lang-option${l.code === currentLang ? ' active' : ''}" data-lang="${l.code}" onclick="setLang('${l.code}');closeLangDropdown();">
      <span class="lang-flag">${l.flag}</span>
      <span>${l.label}</span>
    </div>`
  ).join('');
}

function toggleLangDropdown() { document.getElementById('langDropdown').classList.toggle('open'); }
function closeLangDropdown() { document.getElementById('langDropdown').classList.remove('open'); }
document.addEventListener('click', function(e) {
  const sw = document.getElementById('langSwitcher');
  if (!sw.contains(e.target)) closeLangDropdown();
});

// ===== API STATE =====
let sportsList = [];       // [{key, group, title, active, ...}]
let currentSportKey = null; // sport_key like "soccer_epl"
let oddsCache = {};        // { sport_key: { data: [...], ts: timestamp } }
let apiRequestsRemaining = null;
let apiRequestsUsed = 0;   // Track API requests used this month
let isLoadingOdds = false;
let currentPage = 'matches';
let currentSubFilter = null; // sport_key for sub-filter, or null for "all"
let autoRefreshEnabled = false;
let autoRefreshTimer = null;
let lastRefreshTime = null;
let loadingSportKey = null; // Track which sport is currently loading

// ===== LIVE CHANNELS CONFIG =====
const LIVE_CHANNELS = {
  'Soccer': [
    { icon: '�?, nameKey: 'chFIFA', descKey: 'chFIFADesc', url: 'https://www.fifa.com/fifaplus/' },
    { icon: '📺', nameKey: 'chDAZN', descKey: 'chDAZNDesc', url: 'https://www.dazn.com/' },
  ],
  'Basketball': [
    { icon: '🏀', nameKey: 'chNBALeaguePass', descKey: 'chNBALeaguePassDesc', url: 'https://www.nba.com/watch/league-pass' },
  ],
  'Esports': [
    { icon: '🎮', nameKey: 'chYoutubeSports', descKey: 'chYoutubeSportsDesc', url: 'https://www.youtube.com/gaming' },
  ],
  'Tennis': [
    { icon: '🎾', nameKey: 'chEurosport', descKey: 'chEurosportDesc', url: 'https://www.eurosport.com/' },
  ],
  'Baseball': [
    { icon: '�?, nameKey: 'chMLBtv', descKey: 'chMLBtvDesc', url: 'https://www.mlb.com/tv' },
  ],
  'American Football': [
    { icon: '🏈', nameKey: 'chNFLGamePass', descKey: 'chNFLGamePassDesc', url: 'https://www.nfl.com/gamepass/' },
  ],
  'Ice Hockey': [
    { icon: '🏒', nameKey: 'chNHLtv', descKey: 'chNHLtvDesc', url: 'https://www.nhl.com/tv' },
  ],
  'Boxing': [
    { icon: '🥊', nameKey: 'chESPNPlus', descKey: 'chESPNPlusDesc', url: 'https://www.espn.com/espnplus/' },
    { icon: '📺', nameKey: 'chDAZN', descKey: 'chDAZNDesc', url: 'https://www.dazn.com/' },
  ],
  'MMA': [
    { icon: '🥊', nameKey: 'chESPNPlus', descKey: 'chESPNPlusDesc', url: 'https://www.espn.com/espnplus/' },
  ],
  'Cricket': [
    { icon: '🏏', nameKey: 'chYoutubeSports', descKey: 'chYoutubeSportsDesc', url: 'https://www.youtube.com/sports' },
  ],
  'Rugby': [
    { icon: '🏉', nameKey: 'chEurosport', descKey: 'chEurosportDesc', url: 'https://www.eurosport.com/' },
  ],
  'default': [
    { icon: '📺', nameKey: 'chYoutubeSports', descKey: 'chYoutubeSportsDesc', url: 'https://www.youtube.com/sports' },
  ],
};

// ===== API FUNCTIONS =====
async function fetchSports() {
  const cacheKey = 'odds_api_sports';
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.ts < CACHE_TTL) {
        sportsList = parsed.data;
        return sportsList;
      }
    } catch(e) {}
  }
  try {
    const resp = await fetch(`${API_BASE}/sports/?apiKey=${API_KEY}`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const remaining = resp.headers.get('X-Requests-Remaining');
    if (remaining) apiRequestsRemaining = parseInt(remaining);
    const data = await resp.json();
    sportsList = data.filter(s => s.active);
    localStorage.setItem(cacheKey, JSON.stringify({ data: sportsList, ts: Date.now() }));
    return sportsList;
  } catch(e) {
    // Try stale cache
    if (cached) {
      try { sportsList = JSON.parse(cached).data; return sportsList; } catch(e2) {}
    }
    throw e;
  }
}

async function fetchOdds(sportKey, forceRefresh = false) {
  // Check memory cache first
  if (!forceRefresh && oddsCache[sportKey] && Date.now() - oddsCache[sportKey].ts < CACHE_TTL) {
    return oddsCache[sportKey].data;
  }
  // Check localStorage cache
  if (!forceRefresh) {
    const cacheKey = `odds_api_odds_${sportKey}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.ts < CACHE_TTL) {
          oddsCache[sportKey] = parsed;
          return parsed.data;
        }
      } catch(e) {}
    }
  }

  loadingSportKey = sportKey;
  isLoadingOdds = true;
  renderContent();

  try {
    // Only request h2h market, only eu region - saves API credits
    const resp = await fetch(`${API_BASE}/sports/${sportKey}/odds/?apiKey=${API_KEY}&regions=eu&markets=h2h`);
    if (!resp.ok) {
      if (resp.status === 429) {
        throw new Error('API_QUOTA_EXCEEDED');
      }
      throw new Error(`HTTP ${resp.status}`);
    }
    const remaining = resp.headers.get('X-Requests-Remaining');
    if (remaining) {
      apiRequestsRemaining = parseInt(remaining);
      apiRequestsUsed = 500 - apiRequestsRemaining;
      localStorage.setItem('odds_api_usage', JSON.stringify({ used: apiRequestsUsed, remaining: apiRequestsRemaining, ts: Date.now() }));
    }
    updateApiBadge();
    const data = await resp.json();
    const cacheObj = { data, ts: Date.now() };
    oddsCache[sportKey] = cacheObj;
    localStorage.setItem(`odds_api_odds_${sportKey}`, JSON.stringify(cacheObj));
    return data;
  } catch(e) {
    // Try stale cache on error
    const cacheKey = `odds_api_odds_${sportKey}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        oddsCache[sportKey] = parsed;
        return parsed.data;
      } catch(e2) {}
    }
    throw e;
  } finally {
    isLoadingOdds = false;
    loadingSportKey = null;
  }
}

// ===== ODDS CALCULATION =====
function calcImpliedProbabilities(match) {
  if (!match.bookmakers || !match.bookmakers.length) return null;

  let bestHome = 0, bestDraw = 0, bestAway = 0;
  let allOdds = []; // for odds comparison table

  match.bookmakers.forEach(bk => {
    const h2h = bk.markets?.find(m => m.key === 'h2h');
    if (!h2h) return;
    const outcomes = h2h.outcomes;
    const homeOdds = outcomes.find(o => o.name === match.home_team)?.price || 0;
    const awayOdds = outcomes.find(o => o.name === match.away_team)?.price || 0;
    const drawOdds = outcomes.find(o => o.name === 'Draw')?.price || 0;

    allOdds.push({ bookmaker: bk.title, homeOdds, awayOdds, drawOdds });

    if (homeOdds > bestHome) bestHome = homeOdds;
    if (awayOdds > bestAway) bestAway = awayOdds;
    if (drawOdds > bestDraw) bestDraw = drawOdds;
  });

  if (!bestHome || !bestAway) return null;

  const hasDraw = bestDraw > 0;
  let totalImplied;
  if (hasDraw) {
    totalImplied = 1/bestHome + 1/bestDraw + 1/bestAway;
  } else {
    totalImplied = 1/bestHome + 1/bestAway;
  }

  const homeProb = Math.round((1/bestHome / totalImplied) * 100);
  const awayProb = Math.round((1/bestAway / totalImplied) * 100);
  const drawProb = hasDraw ? 100 - homeProb - awayProb : 0;

  // Arbitrage detection
  const arbSum = totalImplied;
  const isArb = arbSum < 1;
  const arbProfit = isArb ? Math.round((1 - arbSum) * 100 * 100) / 100 : 0;

  // Confidence based on market consensus (lower margin = higher confidence)
  const margin = totalImplied - 1;
  const confidence = Math.max(50, Math.min(95, Math.round((1 - margin) * 100)));

  return {
    homeProb, awayProb, drawProb, hasDraw,
    bestHome, bestAway, bestDraw,
    isArb, arbProfit,
    confidence,
    allOdds,
  };
}

// ===== SIDEBAR / NAVIGATION =====
function buildSidebar() {
  const nav = document.getElementById('sidebarNav');
  if (!sportsList.length) {
    nav.innerHTML = renderSkeletonSidebar(5);
    return;
  }

  // Group sports by group
  const groups = {};
  sportsList.forEach(s => {
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s);
  });

  let html = '';
  const groupOrder = Object.keys(groups).sort((a, b) => {
    const order = ['Soccer','Basketball','Baseball','Ice Hockey','Tennis','American Football','Boxing','MMA','Mixed Martial Arts','Esports','Cricket','Rugby','Rugby League','Aussie Rules','Golf','Handball','Lacrosse','Politics','Darts','Cycling','Snooker','Volleyball','Futsal','Table Tennis','Badminton'];
    const ia = order.indexOf(a), ib = order.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  groupOrder.forEach(group => {
    const info = getGroupInfo(group);
    const sports = groups[group];
    html += `<div class="nav-group-label">${info.emoji} ${getGroupLocalizedName(group)}</div>`;
    sports.forEach(s => {
      const isActive = currentSportKey === s.key;
      const cached = oddsCache[s.key];
      const hasData = cached && cached.data && cached.data.length > 0;
      const noDataClass = (cached && !hasData) ? ' no-data' : '';
      const hotCount = hasData ? cached.data.filter(m => isHotMatch(m)).length : 0;
      const countBadge = hasData ? `<span class="nav-count">${cached.data.length}</span>` : (cached ? '<span class="nav-count" style="opacity:.4">0</span>' : '');
      html += `<div class="nav-item${isActive ? ' active' : ''}${noDataClass}" data-sport="${s.key}" data-group="${group}" onclick="setSport('${s.key}')">
        <span class="emoji">${info.emoji}</span>
        <span class="nav-label" title="${s.title}">${getLeagueLocalizedName(s.title) || s.title}</span>
        ${hotCount > 0 ? `<span class="hot-badge">🔥</span>` : ''}
        ${countBadge}
      </div>`;
    });
  });

  nav.innerHTML = html;
}

function buildMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (!sportsList.length) return;

  // Show groups, not individual leagues (too many)
  const groups = {};
  sportsList.forEach(s => {
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s);
  });

  const groupOrder = Object.keys(groups).sort((a, b) => {
    const order = ['Soccer','Basketball','Baseball','Ice Hockey','Tennis','American Football','Boxing','MMA','Mixed Martial Arts','Esports','Cricket','Rugby','Rugby League','Aussie Rules','Golf','Handball','Lacrosse','Politics','Darts','Cycling','Snooker','Volleyball','Futsal','Table Tennis','Badminton'];
    const ia = order.indexOf(a), ib = order.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1; if (ib === -1) return -1;
    return ia - ib;
  });

  // Add "All Events" item first
  let html = `<div class="mobile-nav-item${currentSportKey === '__allevents__' ? ' active' : ''}" onclick="showAllEvents()">🏆 ${t('tabAllEvents')}</div>`;

  // Show first sport of each group as the group nav item
  groupOrder.forEach(group => {
    const info = getGroupInfo(group);
    const firstSport = groups[group][0];
    const isActive = currentSportKey && groups[group].some(s => s.key === currentSportKey);
    html += `<div class="mobile-nav-item${isActive ? ' active' : ''}" data-group="${group}" onclick="setSport('${firstSport.key}')">${info.emoji} ${getGroupLocalizedName(group)}</div>`;
  });

  nav.innerHTML = html;
}

function updatePageTitle() {
  if (!currentSportKey) return;
  const sport = sportsList.find(s => s.key === currentSportKey);
  if (!sport) return;
  const info = getGroupInfo(sport.group);
  document.getElementById('pageTitle').textContent = t('pageTitle', { emoji: info.emoji, sport: sport.title || getGroupLocalizedName(sport.group) });
}

async function setSport(sportKey) {
  currentSportKey = sportKey;
  currentSubFilter = null;
  currentPage = 'matches';

  // Update accent color
  const sport = sportsList.find(s => s.key === sportKey);
  if (sport) {
    const info = getGroupInfo(sport.group);
    document.documentElement.style.setProperty('--accent-current', '#4ade80');
  }

  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.sport === sportKey));
  document.querySelectorAll('.mobile-nav-item').forEach(el => {
    const group = el.dataset.group;
    const sport = sportsList.find(s => s.key === sportKey);
    el.classList.toggle('active', sport && sport.group === group);
  });

  updatePageTitle();
  document.querySelectorAll('.page-tab').forEach(el => el.classList.toggle('active', el.dataset.page === currentPage));

  // Load odds with skeleton loading
  const area = document.getElementById('contentArea');
  area.innerHTML = renderSkeletonCards(5);

  try {
    await fetchOdds(sportKey);
  } catch(e) {
    console.error('Failed to load odds:', e);
    if (e.message === 'API_QUOTA_EXCEEDED') {
      area.innerHTML = `<div class="error-state">
        <div class="error-icon">🔴</div>
        <div class="error-msg">${t('apiQuotaExceeded') || 'API额度已用完，请等待下月重�?}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${t('apiQuotaHint') || '免费版每�?00次请�?}</div>
        <button class="retry-btn" onclick="setSport('${sportKey}')">${t('retry')}</button>
      </div>`;
      return;
    }
    area.innerHTML = `<div class="error-state">
      <div class="error-icon">⚠️</div>
      <div class="error-msg">${t('loadError')}: ${e.message}</div>
      <button class="retry-btn" onclick="setSport('${sportKey}')">${t('retry')}</button>
    </div>`;
    return;
  }
  renderContent();
}

function switchPage(page) {
  currentPage = page;
  document.querySelectorAll('.page-tab').forEach(el => el.classList.toggle('active', el.dataset.page === page));
  if (page === 'allevents') {
    showAllEvents();
  } else {
    renderContent();
  }
}

async function refreshOdds() {
  if (currentSportKey === '__allevents__') {
    // On all-events page, refresh only loads data if there's none cached
    // Don't bulk-load all leagues
    renderContent();
    return;
  }
  if (!currentSportKey) return;
  const btn = document.getElementById('refreshBtn');
  btn.classList.add('spinning');

  try {
    await fetchOdds(currentSportKey, true);
    lastRefreshTime = new Date();
    updateLastRefreshTime();
  } catch(e) {
    console.error('Refresh failed:', e);
    if (e.message === 'API_QUOTA_EXCEEDED') {
      const area = document.getElementById('contentArea');
      area.innerHTML = `<div class="error-state">
        <div class="error-icon">🔴</div>
        <div class="error-msg">${t('apiQuotaExceeded') || 'API额度已用完，请等待下月重�?}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${t('apiQuotaHint') || '免费版每�?00次请�?}</div>
      </div>`;
    }
  }
  btn.classList.remove('spinning');
  renderContent();
}

function toggleAutoRefresh() {
  autoRefreshEnabled = !autoRefreshEnabled;
  const toggle = document.getElementById('autoRefreshToggle');
  toggle.classList.toggle('active', autoRefreshEnabled);
  if (autoRefreshEnabled) {
    startAutoRefresh();
  } else {
    stopAutoRefresh();
  }
}

function startAutoRefresh() {
  stopAutoRefresh();
  autoRefreshTimer = setInterval(async () => {
    if (currentSportKey && currentSportKey !== '__allevents__') {
      try {
        await fetchOdds(currentSportKey, true);
        lastRefreshTime = new Date();
        updateLastRefreshTime();
        renderContent();
      } catch(e) { console.error('Auto-refresh failed:', e); }
    }
    // Don't auto-refresh all-events page (would burn 13 API calls)
  }, 5 * 60 * 1000);
}

function stopAutoRefresh() {
  if (autoRefreshTimer) {
    clearInterval(autoRefreshTimer);
    autoRefreshTimer = null;
  }
}

function updateLastRefreshTime() {
  const el = document.getElementById('lastRefreshTime');
  if (!el) return;
  if (!lastRefreshTime) { el.textContent = ''; return; }
  const localeMap = { zh:'zh-CN', en:'en-US', es:'es-ES', pt:'pt-BR', ar:'ar-SA', ja:'ja-JP', ko:'ko-KR', ru:'ru-RU', fr:'fr-FR', de:'de-DE' };
  el.textContent = t('lastRefresh') + ': ' + lastRefreshTime.toLocaleTimeString(localeMap[currentLang] || 'en-US', { hour:'2-digit', minute:'2-digit' });
}

// ===== MATCH STATUS =====
function getMatchStatus(commenceTime, scores) {
  const now = Date.now();
  const start = new Date(commenceTime).getTime();
  const diff = now - start;
  const hasScores = scores && Object.keys(scores).length > 0;
  if (diff > 4 * 3600 * 1000 && hasScores) {
    return { key: 'finished', emoji: '�?, cssClass: 'finished', label: t('matchFinished') };
  } else if (diff >= 0 && diff <= 2 * 3600 * 1000) {
    return { key: 'live', emoji: '🟢', cssClass: 'live', label: t('matchLive') };
  } else if (diff < 0 && Math.abs(diff) <= 3 * 3600 * 1000) {
    return { key: 'upcoming', emoji: '�?, cssClass: 'upcoming', label: t('matchUpcoming') };
  } else {
    return { key: 'scheduled', emoji: '📅', cssClass: 'scheduled', label: t('matchScheduled') };
  }
}

function updateApiBadge() {
  const badge = document.getElementById('apiBadge');
  if (apiRequestsRemaining === null) {
    // Try to load from localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('odds_api_usage'));
      if (stored) {
        apiRequestsUsed = stored.used;
        apiRequestsRemaining = stored.remaining;
      }
    } catch(e) {}
  }
  if (apiRequestsRemaining === null) {
    badge.textContent = 'API: --';
    badge.className = 'api-badge';
  } else if (apiRequestsRemaining > 200) {
    badge.textContent = `API: ${apiRequestsUsed}/500`;
    badge.className = 'api-badge';
  } else if (apiRequestsRemaining > 50) {
    badge.textContent = `API: ${apiRequestsUsed}/500 ⚠`;
    badge.className = 'api-badge warning';
  } else {
    badge.textContent = `API: ${apiRequestsUsed}/500 🔴`;
    badge.className = 'api-badge danger';
  }
  // Update footer counter too
  const footerCounter = document.getElementById('apiFooterCounter');
  if (footerCounter) {
    footerCounter.textContent = `${apiRequestsUsed}/500`;
    const warnEl = document.getElementById('apiFooterWarning');
    if (warnEl) {
      warnEl.style.display = apiRequestsRemaining !== null && apiRequestsRemaining < 50 ? 'inline' : 'none';
    }
  }
}

// ===== RENDER =====
function renderContent() {
  const area = document.getElementById('contentArea');

  if (currentSportKey === '__allevents__') {
    area.innerHTML = renderAllEvents();
    return;
  }

  if (!currentSportKey) {
    area.innerHTML = renderSkeletonCards(3);
    return;
  }

  if (isLoadingOdds && loadingSportKey === currentSportKey) {
    area.innerHTML = renderSkeletonCards(5);
    return;
  }

  if (currentPage === 'matches') area.innerHTML = renderMatches();
  else if (currentPage === 'combos') area.innerHTML = renderCombos();
  else if (currentPage === 'dashboard') area.innerHTML = renderDashboard();
}

function getCurrentOdds() {
  if (!currentSportKey) return [];
  return oddsCache[currentSportKey]?.data || [];
}

function getCurrentSportInfo() {
  const sport = sportsList.find(s => s.key === currentSportKey);
  return sport ? { sport, groupInfo: getGroupInfo(sport.group) } : null;
}

// ===== ALL EVENTS PAGE =====
async function showAllEvents() {
  currentSportKey = '__allevents__';
  currentPage = 'allevents';
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-item').forEach(el => el.classList.toggle('active', el.onclick && el.onclick.toString().includes('showAllEvents')));
  document.querySelectorAll('.page-tab').forEach(el => el.classList.toggle('active', el.dataset.page === 'allevents'));
  document.getElementById('pageTitle').textContent = '🏆 ' + t('tabAllEvents');
  document.documentElement.style.setProperty('--accent-current', '#4ade80');
  // Don't fetch any odds data on all-events page - just show what's cached
  // User clicks into a specific league to load its odds
  renderContent();
}

async function loadAllEventsData(forceRefresh = false) {
  // Load schedule-only data for popular sports (no odds to save API credits)
  // Only load odds when user clicks into a specific league
  const popularKeys = [
    'soccer_epl', 'soccer_fifa_world_cup', 'basketball_nba', 'baseball_mlb',
    'icehockey_nhl', 'soccer_germany_bundesliga', 'soccer_italy_serie_a',
    'soccer_spain_la_liga', 'soccer_france_ligue_one', 'tennis_atp_aus_open',
    'americanfootball_nfl', 'soccer_champions_league', 'soccer_europa_league'
  ];
  const keysToLoad = popularKeys.filter(k => sportsList.some(s => s.key === k));
  for (const key of keysToLoad) {
    // Only fetch if not already cached (even stale cache is fine for schedule display)
    if (forceRefresh || !oddsCache[key]) {
      try { await fetchOdds(key, forceRefresh); } catch(e) { /* skip failed loads */ }
    }
  }
  if (forceRefresh || !lastRefreshTime) {
    lastRefreshTime = new Date();
    updateLastRefreshTime();
  }
}

function renderAllEvents() {
  // Show matches from cached data, grouped by sport group
  // If no cached data, show schedule-only view with sport list
  const groupMatches = {};
  const groupSports = {};

  Object.keys(oddsCache).forEach(sk => {
    const sInfo = sportsList.find(s => s.key === sk);
    if (!sInfo) return;
    const group = sInfo.group;
    if (!groupMatches[group]) { groupMatches[group] = []; groupSports[group] = []; }
    if (!groupSports[group].some(s => s.key === sk)) groupSports[group].push(sInfo);
    oddsCache[sk].data.forEach(m => {
      const prob = calcImpliedProbabilities(m);
      groupMatches[group].push({ match: m, prob, sportKey: sk, sportInfo: sInfo });
    });
  });

  // Sort groups by number of matches (most first)
  const sortedGroups = Object.keys(groupMatches).sort((a, b) => groupMatches[b].length - groupMatches[a].length);

  // If no cached data at all, show guide to click a league
  if (!sortedGroups.length) {
    let guideHtml = `<div class="loading-state" style="min-height:40vh">
      <div style="font-size:48px;margin-bottom:12px">🏆</div>
      <div style="font-size:18px;font-weight:600;margin-bottom:8px">${t('tabAllEvents')}</div>
      <div style="font-size:14px;color:var(--text-muted);max-width:360px;text-align:center;line-height:1.6">${t('allEventsGuide') || '点击左侧联赛加载数据，赔率将自动缓存5分钟'}</div>
    </div>`;
    // Show all available leagues as clickable items
    guideHtml += '<div style="margin-top:20px">';
    const groups = {};
    sportsList.forEach(s => {
      if (!groups[s.group]) groups[s.group] = [];
      groups[s.group].push(s);
    });
    const groupOrder = Object.keys(groups).sort((a, b) => {
      const order = ['Soccer','Basketball','Baseball','Ice Hockey','Tennis','American Football','Boxing','MMA','Mixed Martial Arts','Esports','Cricket','Rugby','Rugby League','Aussie Rules','Golf','Handball','Lacrosse','Politics','Darts','Cycling','Snooker','Volleyball','Futsal','Table Tennis','Badminton'];
      const ia = order.indexOf(a), ib = order.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1; if (ib === -1) return -1;
      return ia - ib;
    });
    groupOrder.forEach(group => {
      const info = getGroupInfo(group);
      const sports = groups[group];
      guideHtml += `<div style="margin-bottom:16px">`;
      guideHtml += `<div style="font-size:13px;color:var(--text-muted);margin-bottom:8px;padding-left:4px">${info.emoji} ${getGroupLocalizedName(group)}</div>`;
      guideHtml += `<div style="display:flex;flex-wrap:wrap;gap:6px">`;
      sports.forEach(s => {
        guideHtml += `<button class="sub-filter-btn" onclick="setSport('${s.key}')" style="font-size:12px">${getLeagueLocalizedName(s.title) || s.title}</button>`;
      });
      guideHtml += `</div></div>`;
    });
    guideHtml += '</div>';
    return guideHtml;
  }

  let html = '';
  sortedGroups.forEach(group => {
    const matches = groupMatches[group];
    const info = getGroupInfo(group);
    const sports = groupSports[group];
    const displayMatches = matches.slice(0, 3);
    const matchesWithOdds = matches.filter(m => m.prob);
    const arbCount = matchesWithOdds.filter(m => m.prob.isArb).length;

    html += `<div class="all-events-group">`;
    html += `<div class="all-events-header">
      <h2>${info.emoji} ${getGroupLocalizedName(group)}
        ${arbCount > 0 ? `<span class="arb-count">🌟 ${t('arbOpportunityCount', {count: arbCount})}</span>` : ''}
      </h2>
      <button class="view-all-btn" onclick="setSport('${sports[0].key}')">${t('viewAll')} �?/button>
    </div>`;

    displayMatches.forEach((m, idx) => {
      const timeStr = formatTime(m.match.commence_time);
      const status = getMatchStatus(m.match.commence_time, m.match.scores);

      if (m.prob) {
        // Match has odds data - show full prediction bar
        const prob = m.prob;
        const hasDraw = prob.hasDraw;
        const confClass = prob.confidence >= 80 ? 'high' : prob.confidence >= 65 ? 'medium' : 'low';

        html += `<div class="match-card${prob.isArb ? ' arb-highlight' : ''}" style="margin-bottom:8px">
          <div class="match-header">
            <span class="match-league">${info.emoji} ${getLeagueLocalizedName(m.match.sport_title) || m.match.sport_title}</span>
            <span class="match-time">${timeStr}</span>
            <span class="match-status ${status.cssClass}">${status.emoji} ${status.label}</span>
          </div>
          <div class="match-body">
            <div class="team">
              <span class="team-name">${m.match.home_team}</span>
            </div>
            <div class="predict-bar-wrap">
              <div class="predict-bar">
                <div class="fill fill-home" style="width:${prob.homeProb}%">${prob.homeProb}%</div>
                ${hasDraw ? `<div class="fill fill-draw" style="width:${prob.drawProb}%">${prob.drawProb}%</div>` : ''}
                <div class="fill fill-away" style="width:${prob.awayProb}%">${prob.awayProb}%</div>
              </div>
              <div class="predict-labels">
                <span>${t('homeTeam')} ${prob.bestHome.toFixed(2)}</span>
                ${hasDraw ? `<span>${t('draw')} ${prob.bestDraw.toFixed(2)}</span>` : ''}
                <span>${t('awayTeam')} ${prob.bestAway.toFixed(2)}</span>
              </div>
            </div>
            <div class="team">
              <span class="team-name">${m.match.away_team}</span>
            </div>
          </div>
          <div class="match-card-footer">
            <div class="confidence">
              <span class="confidence-label">${t('confidence')}</span>
              <span class="confidence-value ${confClass}">${prob.confidence}%</span>
              ${prob.isArb ? `<span class="arb-badge">🌟 ${t('arbOpportunity')} ${prob.arbProfit}%</span>` : ''}
            </div>
          </div>
        </div>`;
      } else {
        // Match has no odds data - show schedule-only view
        html += `<div class="match-card" style="margin-bottom:8px">
          <div class="match-header">
            <span class="match-league">${info.emoji} ${getLeagueLocalizedName(m.match.sport_title) || m.match.sport_title}</span>
            <span class="match-time">${timeStr}</span>
            <span class="match-status ${status.cssClass}">${status.emoji} ${status.label}</span>
          </div>
          <div class="match-body" style="justify-content:center;gap:20px">
            <div class="team">
              <span class="team-name">${m.match.home_team}</span>
            </div>
            <span style="color:var(--text-muted);font-size:14px">vs</span>
            <div class="team">
              <span class="team-name">${m.match.away_team}</span>
            </div>
          </div>
          <div class="match-card-footer" style="justify-content:center">
            <span style="font-size:11px;color:var(--text-muted)">${t('clickToLoadOdds') || '点击上方联赛名加载赔率数�?}</span>
          </div>
        </div>`;
      }
    });

    if (matches.length > 3) {
      html += `<div style="text-align:center;padding:4px 0;font-size:12px;color:var(--text-muted)">+${matches.length - 3} ${t('heatUnit')}</div>`;
    }

    html += `</div>`;
  });

  return html;
}

// ===== MATCHES =====
function renderMatches() {
  const matches = getCurrentOdds();
  const info = getCurrentSportInfo();
  if (!info) return '';

  const { sport, groupInfo } = info;

  // Build sub-filter: list unique sport_titles (leagues)
  const leagues = [...new Set(matches.map(m => m.sport_title))];
  const allLabel = t('all');

  let html = `<div class="sub-filter">`;
  html += `<button class="sub-filter-btn${!currentSubFilter ? ' active' : ''}" onclick="filterSub(null)">${allLabel}</button>`;
  leagues.forEach(l => {
    const isActive = currentSubFilter === l;
    const displayName = getLeagueLocalizedName(l) || l;
    html += `<button class="sub-filter-btn${isActive ? ' active' : ''}" onclick="filterSub('${l.replace(/'/g, "\\'")}')">${displayName}</button>`;
  });
  html += `</div>`;

  const filtered = currentSubFilter ? matches.filter(m => m.sport_title === currentSubFilter) : matches;

  if (!filtered.length) {
    html += `<div class="empty-sport"><div class="empty-icon">${groupInfo.emoji}</div><div>${t('noEvents')}</div><div style="margin-top:4px;font-size:12px">${getLeagueLocalizedName(sport.title) || sport.title}</div></div>`;
    return html;
  }

  filtered.forEach((m, idx) => {
    const prob = calcImpliedProbabilities(m);
    if (!prob) return; // skip matches without odds

    const timeStr = formatTime(m.commence_time);
    const status = getMatchStatus(m.commence_time, m.scores);
    const hasDraw = prob.hasDraw;
    const confClass = prob.confidence >= 80 ? 'high' : prob.confidence >= 65 ? 'medium' : 'low';

    html += `<div class="match-card${prob.isArb ? ' arb-highlight' : ''}">
      <div class="match-header">
        <span class="match-league">${groupInfo.emoji} ${getLeagueLocalizedName(m.sport_title) || m.sport_title}</span>
        <span class="match-time">${timeStr}</span>
        <span class="match-status ${status.cssClass}">${status.emoji} ${status.label}</span>
      </div>
      <div class="match-body">
        <div class="team">
          <span class="team-name">${m.home_team}</span>
        </div>
        <div class="predict-bar-wrap">
          <div class="predict-bar">
            <div class="fill fill-home" style="width:${prob.homeProb}%">${prob.homeProb}%</div>
            ${hasDraw ? `<div class="fill fill-draw" style="width:${prob.drawProb}%">${prob.drawProb}%</div>` : ''}
            <div class="fill fill-away" style="width:${prob.awayProb}%">${prob.awayProb}%</div>
          </div>
          <div class="predict-labels">
            <span>${t('homeTeam')} ${prob.bestHome.toFixed(2)}</span>
            ${hasDraw ? `<span>${t('draw')} ${prob.bestDraw.toFixed(2)}</span>` : ''}
            <span>${t('awayTeam')} ${prob.bestAway.toFixed(2)}</span>
          </div>
        </div>
        <div class="team">
          <span class="team-name">${m.away_team}</span>
        </div>
      </div>
      <div class="match-card-footer">
        <div class="confidence">
          <span class="confidence-label">${t('confidence')}</span>
          <span class="confidence-value ${confClass}">${prob.confidence}%</span>
          ${prob.isArb ? `<span class="arb-badge">🌟 ${t('arbOpportunity')} ${prob.arbProfit}%</span>` : ''}
        </div>
        <div>
          <button class="odds-toggle" onclick="toggleOddsTable('odds_${idx}')">${t('showOdds')}</button>
          <button class="watch-btn" onclick="openWatchModal('${sport.group}')">${t('watchLive')}</button>
        </div>
      </div>
      <div class="odds-table-wrap" id="odds_${idx}">
        ${renderOddsTable(m, prob)}
      </div>
    </div>`;
  });

  return html;
}

function renderOddsTable(match, prob) {
  if (!prob.allOdds || !prob.allOdds.length) return '';

  // Find best odds per outcome
  let maxHome = 0, maxAway = 0, maxDraw = 0;
  prob.allOdds.forEach(o => {
    if (o.homeOdds > maxHome) maxHome = o.homeOdds;
    if (o.awayOdds > maxAway) maxAway = o.awayOdds;
    if (o.drawOdds > maxDraw) maxDraw = o.drawOdds;
  });
  const hasDraw = maxDraw > 0;

  let html = `<table class="odds-table">
    <thead><tr>
      <th>${t('bookmaker')}</th>
      <th>${match.home_team}</th>
      ${hasDraw ? '<th>Draw</th>' : ''}
      <th>${match.away_team}</th>
    </tr></thead><tbody>`;

  prob.allOdds.forEach(o => {
    html += `<tr>
      <td>${o.bookmaker}</td>
      <td class="${o.homeOdds === maxHome ? 'best-odd' : ''}">${o.homeOdds.toFixed(2)}</td>
      ${hasDraw ? `<td class="${o.drawOdds === maxDraw ? 'best-odd' : ''}">${o.drawOdds.toFixed(2)}</td>` : ''}
      <td class="${o.awayOdds === maxAway ? 'best-odd' : ''}">${o.awayOdds.toFixed(2)}</td>
    </tr>`;
  });

  html += `</tbody></table>`;
  html += `<div style="margin-top:8px;font-size:11px;color:var(--text-muted);display:flex;gap:16px;flex-wrap:wrap;">
    <span>${t('bestOdds')}: <strong style="color:#4ade80">${match.home_team} ${maxHome.toFixed(2)}</strong></span>
    ${hasDraw ? `<span>Draw <strong style="color:#4ade80">${maxDraw.toFixed(2)}</strong></span>` : ''}
    <span>${match.away_team} <strong style="color:#4ade80">${maxAway.toFixed(2)}</strong></span>
  </div>`;

  return html;
}

function toggleOddsTable(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('open');
  // Update toggle button text
  const btn = el.parentElement.querySelector('.odds-toggle');
  if (btn) btn.textContent = el.classList.contains('open') ? t('hideOdds') : t('showOdds');
}

function filterSub(league) {
  currentSubFilter = league;
  renderContent();
}

function formatTime(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  const localeMap = { zh:'zh-CN', en:'en-US', es:'es-ES', pt:'pt-BR', ar:'ar-SA', ja:'ja-JP', ko:'ko-KR', ru:'ru-RU', fr:'fr-FR', de:'de-DE' };
  return d.toLocaleDateString(localeMap[currentLang] || 'en-US', { month:'2-digit', day:'2-digit' }) + ' ' +
         d.toLocaleTimeString(localeMap[currentLang] || 'en-US', { hour:'2-digit', minute:'2-digit', hour12:false });
}

// ===== COMBOS =====
function renderCombos() {
  const matches = getCurrentOdds();
  const info = getCurrentSportInfo();
  if (!info) return '';

  const { sport, groupInfo } = info;
  const sportName = sport.title;
  let html = '';

  // Calculate probabilities for all matches
  const matchProbs = matches.map(m => ({ match: m, prob: calcImpliedProbabilities(m) })).filter(mp => mp.prob);

  // Same-sport 2�?
  if (matchProbs.length >= 2) {
    html += `<h3 style="margin-bottom:12px;font-size:16px;">${groupInfo.emoji} ${t('combo2', {sport: sportName})}</h3>`;
    for (let i = 0; i < matchProbs.length - 1; i += 2) {
      const mp1 = matchProbs[i], mp2 = matchProbs[i+1];
      const pick1 = mp1.prob.homeProb >= mp1.prob.awayProb ? 'home' : 'away';
      const pick2 = mp2.prob.homeProb >= mp2.prob.awayProb ? 'home' : 'away';
      const pct1 = pick1 === 'home' ? mp1.prob.homeProb : mp1.prob.awayProb;
      const pct2 = pick2 === 'home' ? mp2.prob.homeProb : mp2.prob.awayProb;
      const comboPct = Math.round(pct1 * pct2 / 100);
      const riskClass = comboPct >= 40 ? 'low' : comboPct >= 30 ? 'medium' : 'high';
      const riskLabel = riskClass === 'low' ? t('lowRisk') : riskClass === 'medium' ? t('mediumRisk') : t('highRisk');
      html += `<div class="combo-card">
        <div class="combo-header">
          <span class="combo-type s2">${t('combo2Label')}</span>
          <span class="combo-risk ${riskClass}">${riskLabel} · ${t('comboWinRate')} ${comboPct}%</span>
        </div>
        <div class="combo-picks">
          <div class="combo-pick">
            <span class="sport-emoji">${groupInfo.emoji}</span>
            <span class="pick-info"><span class="pick-team">${pick1 === 'home' ? mp1.match.home_team : mp1.match.away_team}</span> <span class="pick-opp">${t('vs')} ${pick1 === 'home' ? mp1.match.away_team : mp1.match.home_team}</span></span>
            <span class="pick-pct" style="color:var(--accent-current)">${pct1}%</span>
          </div>
          <div class="combo-pick">
            <span class="sport-emoji">${groupInfo.emoji}</span>
            <span class="pick-info"><span class="pick-team">${pick2 === 'home' ? mp2.match.home_team : mp2.match.away_team}</span> <span class="pick-opp">${t('vs')} ${pick2 === 'home' ? mp2.match.away_team : mp2.match.home_team}</span></span>
            <span class="pick-pct" style="color:var(--accent-current)">${pct2}%</span>
          </div>
        </div>
        <div class="combo-footer">
          <span>${t('comboWinRate')}</span>
          <span class="combo-total">${comboPct}%</span>
        </div>
      </div>`;
    }
  }

  // 3�?
  if (matchProbs.length >= 3) {
    html += `<h3 style="margin:20px 0 12px;font-size:16px;">${groupInfo.emoji} ${t('combo3', {sport: sportName})}</h3>`;
    const mp1 = matchProbs[0], mp2 = matchProbs[1], mp3 = matchProbs[2];
    const picks = [mp1, mp2, mp3].map(mp => {
      const pick = mp.prob.homeProb >= mp.prob.awayProb ? 'home' : 'away';
      return { team: pick === 'home' ? mp.match.home_team : mp.match.away_team, opp: pick === 'home' ? mp.match.away_team : mp.match.home_team, pct: pick === 'home' ? mp.prob.homeProb : mp.prob.awayProb };
    });
    const comboPct = Math.round(picks[0].pct * picks[1].pct * picks[2].pct / 10000);
    const riskClass = comboPct >= 30 ? 'low' : comboPct >= 20 ? 'medium' : 'high';
    const riskLabel = riskClass === 'low' ? t('lowRisk') : riskClass === 'medium' ? t('mediumRisk') : t('highRisk');
    html += `<div class="combo-card">
      <div class="combo-header">
        <span class="combo-type s3">${t('combo3Label')}</span>
        <span class="combo-risk ${riskClass}">${riskLabel} · ${t('comboWinRate')} ${comboPct}%</span>
      </div>
      <div class="combo-picks">
        ${picks.map(p => `<div class="combo-pick">
          <span class="sport-emoji">${groupInfo.emoji}</span>
          <span class="pick-info"><span class="pick-team">${p.team}</span> <span class="pick-opp">${t('vs')} ${p.opp}</span></span>
          <span class="pick-pct" style="color:var(--accent-current)">${p.pct}%</span>
        </div>`).join('')}
      </div>
      <div class="combo-footer">
        <span>${t('comboWinRate')}</span>
        <span class="combo-total">${comboPct}%</span>
      </div>
    </div>`;
  }

  // Cross-sport combos from cached data
  html += `<h3 style="margin:20px 0 12px;font-size:16px;">🌍 ${t('crossCombo')}</h3>`;
  const crossSportMatches = [];
  Object.keys(oddsCache).forEach(sk => {
    const data = oddsCache[sk].data;
    data.forEach(m => {
      const prob = calcImpliedProbabilities(m);
      if (prob) crossSportMatches.push({ match: m, prob, sportKey: sk });
    });
  });

  if (crossSportMatches.length >= 3) {
    // Pick top 3 highest confidence from different sports
    const bySport = {};
    crossSportMatches.forEach(cm => {
      if (!bySport[cm.sportKey] || cm.prob.confidence > bySport[cm.sportKey].prob.confidence) {
        bySport[cm.sportKey] = cm;
      }
    });
    const topCross = Object.values(bySport).sort((a,b) => b.prob.confidence - a.prob.confidence).slice(0, 3);

    if (topCross.length >= 3) {
      const comboPct = Math.round(topCross.reduce((acc, cm) => {
        const pick = cm.prob.homeProb >= cm.prob.awayProb ? 'home' : 'away';
        return acc * (pick === 'home' ? cm.prob.homeProb : cm.prob.awayProb);
      }, 100) / 10000);
      const riskClass = comboPct >= 30 ? 'low' : comboPct >= 20 ? 'medium' : 'high';
      const riskLabel = riskClass === 'low' ? t('lowRisk') : riskClass === 'medium' ? t('mediumRisk') : t('highRisk');

      html += `<div class="combo-card">
        <div class="combo-header">
          <span class="combo-type cross">${t('crossCombo3')}</span>
          <span class="combo-risk ${riskClass}">${riskLabel} · ${t('comboWinRate')} ${comboPct}%</span>
        </div>
        <div class="combo-picks">
          ${topCross.map(cm => {
            const sInfo = sportsList.find(s => s.key === cm.sportKey);
            const gInfo = sInfo ? getGroupInfo(sInfo.group) : DEFAULT_GROUP;
            const pick = cm.prob.homeProb >= cm.prob.awayProb ? 'home' : 'away';
            const team = pick === 'home' ? cm.match.home_team : cm.match.away_team;
            const opp = pick === 'home' ? cm.match.away_team : cm.match.home_team;
            const pct = pick === 'home' ? cm.prob.homeProb : cm.prob.awayProb;
            return `<div class="combo-pick">
              <span class="sport-emoji">${gInfo.emoji}</span>
              <span class="pick-info"><span class="pick-team">${team}</span> <span class="pick-opp">${t('vs')} ${opp}</span></span>
              <span class="pick-pct" style="color:var(--accent-current)">${pct}%</span>
            </div>`;
          }).join('')}
        </div>
        <div class="combo-footer">
          <span>${t('comboWinRate')}</span>
          <span class="combo-total">${comboPct}%</span>
        </div>
      </div>`;
    }
  } else {
    html += `<div style="text-align:center;padding:30px;color:var(--text-muted);font-size:13px;">${t('noData')}</div>`;
  }

  return html;
}

// ===== DASHBOARD =====
function renderDashboard() {
  let html = '<div class="dashboard-grid">';

  // Implied win rate distribution by group
  html += `<div class="dash-card"><h3>${t('dashHitRate')}</h3>`;
  const groupStats = {};
  Object.keys(oddsCache).forEach(sk => {
    const sInfo = sportsList.find(s => s.key === sk);
    if (!sInfo) return;
    const group = sInfo.group;
    if (!groupStats[group]) groupStats[group] = { totalProb: 0, count: 0 };
    oddsCache[sk].data.forEach(m => {
      const prob = calcImpliedProbabilities(m);
      if (prob) {
        const maxProb = Math.max(prob.homeProb, prob.awayProb);
        groupStats[group].totalProb += maxProb;
        groupStats[group].count++;
      }
    });
  });

  Object.entries(groupStats).sort((a,b) => {
    const avgA = a[1].count ? a[1].totalProb / a[1].count : 0;
    const avgB = b[1].count ? b[1].totalProb / b[1].count : 0;
    return avgB - avgA;
  }).forEach(([group, stats]) => {
    const info = getGroupInfo(group);
    const avg = stats.count ? Math.round(stats.totalProb / stats.count) : 0;
    html += `<div class="hit-rate-row">
      <span class="emoji">${info.emoji}</span>
      <span class="sport-name">${getGroupLocalizedName(group)}</span>
      <div class="hit-rate-bar-bg"><div class="hit-rate-bar" style="width:${avg}%;background:var(${info.accent})"></div></div>
      <span class="hit-rate-pct" style="color:var(${info.accent})">${avg}%</span>
    </div>`;
  });
  html += `</div>`;

  // Hot matches - top matches by highest implied probability
  html += `<div class="dash-card"><h3>${t('dashHot')}</h3>`;
  const allMatchProbs = [];
  Object.keys(oddsCache).forEach(sk => {
    const sInfo = sportsList.find(s => s.key === sk);
    if (!sInfo) return;
    oddsCache[sk].data.forEach(m => {
      const prob = calcImpliedProbabilities(m);
      if (prob) {
        const maxProb = Math.max(prob.homeProb, prob.awayProb);
        const fav = prob.homeProb >= prob.awayProb ? m.home_team : m.away_team;
        allMatchProbs.push({
          name: `${m.home_team} vs ${m.away_team}`,
          sport: `${getGroupInfo(sInfo.group).emoji} ${sInfo.title}`,
          prob: maxProb,
          fav,
        });
      }
    });
  });
  allMatchProbs.sort((a,b) => b.prob - a.prob);
  allMatchProbs.slice(0, 8).forEach((m, i) => {
    const rc = i===0?'r1':i===1?'r2':i===2?'r3':'';
    html += `<div class="hot-item">
      <span class="hot-rank ${rc}">${i+1}</span>
      <span style="flex:1;font-weight:500">${m.name}</span>
      <span style="color:var(--text-muted);font-size:12px">${m.sport}</span>
      <span style="color:var(--accent-current);font-weight:600;font-size:12px">${m.prob}%</span>
    </div>`;
  });
  html += `</div>`;

  // Arbitrage opportunities
  html += `<div class="dash-card"><h3>${t('dashArb')}</h3>`;
  const arbOpportunities = [];
  Object.keys(oddsCache).forEach(sk => {
    const sInfo = sportsList.find(s => s.key === sk);
    if (!sInfo) return;
    oddsCache[sk].data.forEach(m => {
      const prob = calcImpliedProbabilities(m);
      if (prob && prob.isArb) {
        arbOpportunities.push({
          name: `${m.home_team} vs ${m.away_team}`,
          sport: `${getGroupInfo(sInfo.group).emoji} ${sInfo.title}`,
          profit: prob.arbProfit,
          bestHome: prob.bestHome,
          bestAway: prob.bestAway,
          bestDraw: prob.bestDraw,
          hasDraw: prob.hasDraw,
        });
      }
    });
  });

  if (arbOpportunities.length) {
    arbOpportunities.sort((a,b) => b.profit - a.profit);
    arbOpportunities.slice(0, 8).forEach(arb => {
      html += `<div class="hot-item">
        <span class="hot-rank r1">🌟</span>
        <span style="flex:1;font-weight:500">${arb.name}</span>
        <span style="color:var(--text-muted);font-size:12px">${arb.sport}</span>
        <span style="color:#4ade80;font-weight:600;font-size:12px">+${arb.profit}% ${t('arbProfit')}</span>
      </div>`;
    });
  } else {
    html += `<div style="text-align:center;padding:20px;color:var(--text-muted);font-size:13px;">${t('dashArbNone')}</div>`;
  }
  html += `</div>`;

  html += '</div>';
  return html;
}

// ===== WATCH LIVE MODAL =====
function openWatchModal(group) {
  const channels = LIVE_CHANNELS[group] || LIVE_CHANNELS['default'];
  const listEl = document.getElementById('channelList');
  document.getElementById('modalTitle').textContent = t('modalTitle');
  document.getElementById('modalDisclaimer').innerHTML = t('modalDisclaimer');

  listEl.innerHTML = channels.map(ch => `
    <div class="channel-item">
      <span class="channel-icon">${ch.icon}</span>
      <div class="channel-info">
        <div class="channel-name">${t(ch.nameKey)}</div>
        <div class="channel-desc">${t(ch.descKey)}</div>
      </div>
      <a class="channel-link" href="${ch.url}" target="_blank" rel="noopener noreferrer nofollow">�?/a>
    </div>
  `).join('');

  document.getElementById('watchModal').classList.add('open');
}

function closeWatchModal() {
  document.getElementById('watchModal').classList.remove('open');
}

document.getElementById('watchModal').addEventListener('click', function(e) {
  if (e.target === this) closeWatchModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeWatchModal();
});

// ===== INIT =====
async function init() {
  currentLang = detectLang();
  buildLangDropdown();
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  const langMapInit = { zh:'zh-CN', en:'en', es:'es', pt:'pt-BR', ar:'ar', ja:'ja', ko:'ko', ru:'ru', fr:'fr', de:'de' };
  document.documentElement.lang = langMapInit[currentLang] || currentLang;
  const langInfo = LANGS.find(l => l.code === currentLang);
  document.getElementById('langLabel').textContent = langInfo ? langInfo.label : '中文';

  updateDate();
  updateApiBadge();

  // Render initial loading state
  renderContent();

  try {
    await fetchSports();
    buildSidebar();
    buildMobileNav();

    // Default to All Events page (no API calls - just shows cached data)
    currentSportKey = '__allevents__';
    currentPage = 'allevents';
    document.querySelectorAll('.page-tab').forEach(el => el.classList.toggle('active', el.dataset.page === 'allevents'));
    document.getElementById('pageTitle').textContent = '🏆 ' + t('tabAllEvents');
    // Don't call loadAllEventsData() - save API credits
    // User clicks into a league to load its data
    updateApiBadge();
    renderContent();
  } catch(e) {
    console.error('Init failed:', e);
    document.getElementById('contentArea').innerHTML = `
      <div class="error-state">
        <div class="error-icon">⚠️</div>
        <div class="error-msg">${t('loadError')}: ${e.message}</div>
        <button class="retry-btn" onclick="init()">${t('retry')}</button>
      </div>`;
  }

  applyLang();
}

// ===== V3 FEATURES: Search, Hot Match, Timeline, Quick Filters, Theme, Favorites, Odds Change =====

// --- Search ---
let searchQuery = '';

function onSearchInput(val) {
  searchQuery = val.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClear');
  clearBtn.classList.toggle('visible', searchQuery.length > 0);
  renderContent();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  searchQuery = '';
  document.getElementById('searchClear').classList.remove('visible');
  renderContent();
}

function toggleMobileSearch() {
  const wrap = document.getElementById('searchWrap');
  wrap.classList.toggle('collapsed');
  wrap.classList.toggle('expanded');
  if (wrap.classList.contains('expanded')) {
    document.getElementById('searchInput').focus();
  }
}

function matchesSearch(m) {
  if (!searchQuery) return true;
  const q = searchQuery;
  const homeTeam = (m.home_team || '').toLowerCase();
  const awayTeam = (m.away_team || '').toLowerCase();
  const sportTitle = (m.sport_title || '').toLowerCase();
  const sportInfo = sportsList.find(s => s.key === (m.sport_key || currentSportKey));
  const groupName = sportInfo ? (getGroupLocalizedName(sportInfo.group) || '').toLowerCase() : '' ;
  return homeTeam.includes(q) || awayTeam.includes(q) || sportTitle.includes(q) || groupName.includes(q);
}

function highlightText(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return text.substring(0, idx) + '<span class="search-highlight">' + text.substring(idx, idx + query.length) + '</span>' + text.substring(idx + query.length);
}

// --- Hot Match ---
function isHotMatch(match) {
  return match.bookmakers && match.bookmakers.length >= 3;
}

function isHighAttention(match) {
  return match.bookmakers && match.bookmakers.length >= 5;
}

// --- Match Timeline ---
function getTimeUntilStart(commenceTime) {
  const now = Date.now();
  const start = new Date(commenceTime).getTime();
  const diff = start - now;
  if (diff <= 0) return { text: t('timeStarted'), cssClass: 'urgent' };
  const minutes = Math.floor(diff / 60000);
  if (minutes <= 1) return { text: t('timeJustNow'), cssClass: 'urgent' };
  if (minutes < 60) return { text: t('timeMinutesLater', {n: minutes}), cssClass: 'urgent' };
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return { text: t('timeHoursLater', {n: hours}), cssClass: hours <= 3 ? 'soon' : '' };
  const days = Math.floor(hours / 24);
  if (days === 1) return { text: t('timeTomorrow'), cssClass: '' };
  return { text: t('timeDaysLater', {n: days}), cssClass: '' };
}

// --- Quick Filters ---
let activeQuickFilter = null; // 'hot' | 'upcoming' | 'live' | 'arb' | 'high' | null

function toggleQuickFilter(filter) {
  activeQuickFilter = activeQuickFilter === filter ? null : filter;
  document.querySelectorAll('.quick-filter-tag').forEach(el => {
    el.classList.toggle('active', el.dataset.filter === activeQuickFilter);
  });
  renderContent();
}

function passesQuickFilter(match, prob) {
  if (!activeQuickFilter) return true;
  const status = getMatchStatus(match.commence_time, match.scores);
  switch(activeQuickFilter) {
    case 'hot': return isHotMatch(match);
    case 'upcoming': return status.key === 'upcoming';
    case 'live': return status.key === 'live';
    case 'arb': return prob && prob.isArb;
    case 'high': return isHighAttention(match);
    default: return true;
  }
}

function renderQuickFilters() {
  return `<div class="quick-filters">
    <button class="quick-filter-tag${activeQuickFilter==='hot'?' active':''}" data-filter="hot" onclick="toggleQuickFilter('hot')">${t('filterHot')}</button>
    <button class="quick-filter-tag${activeQuickFilter==='upcoming'?' active':''}" data-filter="upcoming" onclick="toggleQuickFilter('upcoming')">${t('filterUpcoming')}</button>
    <button class="quick-filter-tag${activeQuickFilter==='live'?' active':''}" data-filter="live" onclick="toggleQuickFilter('live')">${t('filterLive')}</button>
    <button class="quick-filter-tag${activeQuickFilter==='arb'?' active':''}" data-filter="arb" onclick="toggleQuickFilter('arb')">${t('filterArb')}</button>
    <button class="quick-filter-tag${activeQuickFilter==='high'?' active':''}" data-filter="high" onclick="toggleQuickFilter('high')">${t('filterHighAttention')}</button>
  </div>`;
}

// --- Theme Toggle ---
function initTheme() {
  const saved = localStorage.getItem('sportpredict-theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('themeToggle').textContent = '☀�?;
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const isLight = html.getAttribute('data-theme') === 'light';
  if (isLight) {
    html.removeAttribute('data-theme');
    btn.textContent = '🌙';
    localStorage.setItem('sportpredict-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    btn.textContent = '☀�?;
    localStorage.setItem('sportpredict-theme', 'light');
  }
}

// --- Favorites ---
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('sportpredict-favorites') || '[]'); } catch(e) { return []; }
}

function saveFavorites(favs) {
  localStorage.setItem('sportpredict-favorites', JSON.stringify(favs));
  updateFavCount();
}

function isFavorite(matchId) {
  return getFavorites().includes(matchId);
}

function toggleFavorite(matchId, event) {
  if (event) event.stopPropagation();
  let favs = getFavorites();
  if (favs.includes(matchId)) {
    favs = favs.filter(id => id !== matchId);
  } else {
    favs.push(matchId);
  }
  saveFavorites(favs);
  renderContent();
}

function updateFavCount() {
  const el = document.getElementById('favCount');
  if (el) el.textContent = getFavorites().length;
}

function showFavorites() {
  currentSportKey = '__favorites__';
  currentPage = 'matches';
  document.querySelectorAll('.page-tab').forEach(el => el.classList.toggle('active', el.dataset.page === 'matches'));
  document.getElementById('pageTitle').textContent = '�?' + t('myFavorites');
  renderContent();
}

function renderFavorites() {
  const favs = getFavorites();
  if (!favs.length) {
    return `<div class="empty-sport"><div class="empty-icon">�?/div><div>${t('noFavorites')}</div></div>`;
  }

  let html = renderQuickFilters();
  const favMatches = [];

  Object.keys(oddsCache).forEach(sk => {
    const sInfo = sportsList.find(s => s.key === sk);
    if (!sInfo) return;
    oddsCache[sk].data.forEach(m => {
      if (favs.includes(m.id)) {
        favMatches.push({ match: m, sportKey: sk, sportInfo: sInfo });
      }
    });
  });

  if (!favMatches.length) {
    html += `<div class="empty-sport"><div class="empty-icon">�?/div><div>${t('noFavorites')}</div></div>`;
    return html;
  }

  // Sort: hot first, then by commence_time
  favMatches.sort((a, b) => {
    const hotA = isHotMatch(a.match) ? 0 : 1;
    const hotB = isHotMatch(b.match) ? 0 : 1;
    if (hotA !== hotB) return hotA - hotB;
    return new Date(a.match.commence_time) - new Date(b.match.commence_time);
  });

  favMatches.forEach(item => {
    const m = item.match;
    const prob = calcImpliedProbabilities(m);
    if (!passesQuickFilter(m, prob)) return;
    html += renderMatchCard(m, prob, item.sportInfo, true);
  });

  // Animate vote bars after render
  setTimeout(() => animateVoteBars(), 100);

  return html;
}

// --- Odds Change Tracking ---
let previousOdds = {}; // { matchId: { home: X, away: Y, draw: Z } }

function storePreviousOdds() {
  try {
    const saved = localStorage.getItem('sportpredict-prev-odds');
    if (saved) previousOdds = JSON.parse(saved);
  } catch(e) {}
}

function saveCurrentOddsAsPrevious() {
  const current = {};
  Object.keys(oddsCache).forEach(sk => {
    oddsCache[sk].data.forEach(m => {
      const prob = calcImpliedProbabilities(m);
      if (prob) {
        current[m.id] = { home: prob.bestHome, away: prob.bestAway, draw: prob.bestDraw };
      }
    });
  });
  // Merge: keep existing entries, update/add new ones
  Object.assign(previousOdds, current);
  try { localStorage.setItem('sportpredict-prev-odds', JSON.stringify(previousOdds)); } catch(e) {}
}

function getOddsChangeIndicator(matchId, outcome, currentOdds) {
  if (!previousOdds[matchId]) return '';
  const prev = previousOdds[matchId][outcome];
  if (!prev) return '';
  if (currentOdds > prev + 0.01) return ' <span class="odds-up">�?/span>';
  if (currentOdds < prev - 0.01) return ' <span class="odds-down">�?/span>';
  return '';
}

// --- Shared match card renderer ---
function renderMatchCard(m, prob, sportInfo, showLeagueName) {
  const groupInfo = getGroupInfo(sportInfo.group);
  const timeStr = formatTime(m.commence_time);
  const status = getMatchStatus(m.commence_time, m.scores);
  const timeline = getTimeUntilStart(m.commence_time);
  const hasDraw = prob ? prob.hasDraw : false;
  const confClass = prob ? (prob.confidence >= 80 ? 'high' : prob.confidence >= 65 ? 'medium' : 'low') : '';
  const hot = isHotMatch(m);
  const favActive = isFavorite(m.id);
  const leagueName = getLeagueLocalizedName(m.sport_title) || m.sport_title;
  const homeTeamDisp = highlightText(m.home_team, searchQuery);
  const awayTeamDisp = highlightText(m.away_team, searchQuery);
  const leagueDisp = highlightText(leagueName, searchQuery);

  // Odds change indicators
  let homeChange = '', awayChange = '', drawChange = '';
  if (prob) {
    homeChange = getOddsChangeIndicator(m.id, 'home', prob.bestHome);
    awayChange = getOddsChangeIndicator(m.id, 'away', prob.bestAway);
    if (hasDraw) drawChange = getOddsChangeIndicator(m.id, 'draw', prob.bestDraw);
  }

  if (prob) {
    return `<div class="match-card${prob.isArb ? ' arb-highlight' : ''}">
      <button class="fav-btn${favActive ? ' active' : ''}" onclick="toggleFavorite('${m.id}', event)">${favActive ? '�? : '�?}</button>
      <div class="match-header">
        <span class="match-league">${groupInfo.emoji} ${leagueDisp}${hot ? ' <span class="hot-badge">🔥</span>' : ''}</span>
        <span class="match-time">${timeStr}</span>
        <span class="match-timeline ${timeline.cssClass}">${timeline.text}</span>
        <span class="match-status ${status.cssClass}">${status.emoji} ${status.label}</span>
      </div>
      <div class="match-body">
        <div class="team"><span class="team-name">${homeTeamDisp}</span></div>
        <div class="predict-bar-wrap">
          <div class="predict-bar">
            <div class="fill fill-home" style="width:${prob.homeProb}%">${prob.homeProb}%</div>
            ${hasDraw ? `<div class="fill fill-draw" style="width:${prob.drawProb}%">${prob.drawProb}%</div>` : ''}
            <div class="fill fill-away" style="width:${prob.awayProb}%">${prob.awayProb}%</div>
          </div>
          <div class="predict-labels">
            <span>${t('homeTeam')} ${prob.bestHome.toFixed(2)}${homeChange}</span>
            ${hasDraw ? `<span>${t('draw')} ${prob.bestDraw.toFixed(2)}${drawChange}</span>` : ''}
            <span>${t('awayTeam')} ${prob.bestAway.toFixed(2)}${awayChange}</span>
          </div>
        </div>
        <div class="team"><span class="team-name">${awayTeamDisp}</span></div>
      </div>
      <div class="match-card-footer">
        <div class="confidence">
          <span class="confidence-label">${t('confidence')}</span>
          <span class="confidence-value ${confClass}">${prob.confidence}%</span>
          ${prob.isArb ? `<span class="arb-badge">🌟 ${t('arbOpportunity')} ${prob.arbProfit}%</span>` : ''}
        </div>
        <div>
          <button class="odds-toggle" onclick="toggleOddsTable('odds_${m.id}')">${t('showOdds')}</button>
          <button class="watch-btn" onclick="openWatchModal('${sportInfo.group}')">${t('watchLive')}</button>
        </div>
      </div>
      ${renderVoteSection(m.id, m.home_team, m.away_team, hasDraw)}
      <div class="odds-table-wrap" id="odds_${m.id}">
        ${renderOddsTable(m, prob)}
      </div>
    </div>`;
  } else {
    return `<div class="match-card">
      <button class="fav-btn" onclick="toggleFavorite('${m.id}', event)">�?/button>
      <div class="match-header">
        <span class="match-league">${groupInfo.emoji} ${leagueDisp}</span>
        <span class="match-time">${timeStr}</span>
        <span class="match-timeline ${timeline.cssClass}">${timeline.text}</span>
        <span class="match-status ${status.cssClass}">${status.emoji} ${status.label}</span>
      </div>
      <div class="match-body" style="justify-content:center;gap:20px">
        <div class="team"><span class="team-name">${homeTeamDisp}</span></div>
        <span style="color:var(--text-muted);font-size:14px">vs</span>
        <div class="team"><span class="team-name">${awayTeamDisp}</span></div>
      </div>
      <div class="match-card-footer" style="justify-content:center">
        <span style="font-size:11px;color:var(--text-muted)">${t('clickToLoadOdds') || '点击上方联赛名加载赔率数�?}</span>
      </div>
    </div>`;
  }
}

// Override renderContent to handle favorites + search + quick filters
const _originalRenderContent = renderContent;
renderContent = function() {
  const area = document.getElementById('contentArea');

  // Page transition animation
  area.classList.add('page-enter');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      area.classList.remove('page-enter');
    });
  });

  // Update search placeholder
  const searchInput = document.getElementById('searchInput');
  if (searchInput && !searchInput.value) {
    searchInput.placeholder = t('searchPlaceholder');
  }

  // Update scroll-to-top visibility
  updateScrollTopBtn();

  if (currentSportKey === '__favorites__') {
    area.innerHTML = renderFavorites();
    applyCardAnimations(area);
    return;
  }

  if (currentSportKey === '__allevents__') {
    area.innerHTML = renderAllEvents();
    applyCardAnimations(area);
    return;
  }

  if (!currentSportKey) {
    area.innerHTML = renderSkeletonCards(3);
    return;
  }

  if (isLoadingOdds && loadingSportKey === currentSportKey) {
    area.innerHTML = renderSkeletonCards(5);
    return;
  }

  if (currentPage === 'matches') {
    area.innerHTML = renderMatches();
  } else if (currentPage === 'combos') {
    area.innerHTML = renderCombos();
  } else if (currentPage === 'dashboard') {
    area.innerHTML = renderDashboard();
  } else if (currentPage === 'analysis') {
    area.innerHTML = renderAnalysis();
    setTimeout(() => animateVoteBars(), 100);
  }
  applyCardAnimations(area);
  }
};

// Override renderMatches to use new renderMatchCard with search/filter/hot/fav/timeline
// We redefine the function entirely
renderMatches = function() {
  const matches = getCurrentOdds();
  const info = getCurrentSportInfo();
  if (!info) return '';

  const { sport, groupInfo } = info;

  // Build sub-filter
  const leagues = [...new Set(matches.map(m => m.sport_title))];
  const allLabel = t('all');

  let html = renderQuickFilters();

  html += `<div class="sub-filter">`;
  html += `<button class="sub-filter-btn${!currentSubFilter ? ' active' : ''}" onclick="filterSub(null)">${allLabel}</button>`;
  leagues.forEach(l => {
    const isActive = currentSubFilter === l;
    const displayName = getLeagueLocalizedName(l) || l;
    html += `<button class="sub-filter-btn${isActive ? ' active' : ''}" onclick="filterSub('${l.replace(/'/g, "\\'")}')">${displayName}</button>`;
  });
  html += `</div>`;

  let filtered = currentSubFilter ? matches.filter(m => m.sport_title === currentSubFilter) : matches;

  // Apply search filter
  if (searchQuery) {
    filtered = filtered.filter(m => matchesSearch(m));
  }

  if (!filtered.length) {
    html += `<div class="empty-sport"><div class="empty-icon">${groupInfo.emoji}</div><div>${t('noEvents')}</div><div style="margin-top:4px;font-size:12px">${getLeagueLocalizedName(sport.title) || sport.title}</div></div>`;
    return html;
  }

  // Sort: hot matches first
  filtered.sort((a, b) => {
    const hotA = isHotMatch(a) ? 0 : 1;
    const hotB = isHotMatch(b) ? 0 : 1;
    if (hotA !== hotB) return hotA - hotB;
    return new Date(a.commence_time) - new Date(b.commence_time);
  });

  filtered.forEach(m => {
    const prob = calcImpliedProbabilities(m);
    if (!passesQuickFilter(m, prob)) return;
    html += renderMatchCard(m, prob, sport, false);
  });

  // Animate vote bars after render
  setTimeout(() => animateVoteBars(), 100);

  return html;
};

// Update renderAllEvents to also use search + hot + timeline
const _origRenderAllEvents = renderAllEvents;
renderAllEvents = function() {
  // Hero Banner (only on allevents page)
  let heroHtml = `<div class="hero-banner">
    <div class="hero-title">${t('heroTitle')}</div>
    <div class="hero-subtitle">${t('heroSubtitle')}</div>
    <div class="hero-tags">
      <span class="hero-tag">${t('heroTag1')}</span>
      <span class="hero-tag">${t('heroTag2')}</span>
      <span class="hero-tag">${t('heroTag3')}</span>
    </div>
    <div class="hero-actions">
      <button class="hero-btn hero-btn-primary btn-click" onclick="document.getElementById('contentArea').querySelector('.all-events-group,.loading-state')?.scrollIntoView({behavior:'smooth',block:'start'})">${t('heroBtnAnalyze')}</button>
      <button class="hero-btn hero-btn-secondary btn-click" onclick="showFavorites()">${t('heroBtnFavorites')}</button>
    </div>
  </div>`;

  const groupMatches = {};
  const groupSports = {};

  Object.keys(oddsCache).forEach(sk => {
    const sInfo = sportsList.find(s => s.key === sk);
    if (!sInfo) return;
    const group = sInfo.group;
    if (!groupMatches[group]) { groupMatches[group] = []; groupSports[group] = []; }
    if (!groupSports[group].some(s => s.key === sk)) groupSports[group].push(sInfo);
    oddsCache[sk].data.forEach(m => {
      if (searchQuery && !matchesSearch(m)) return;
      const prob = calcImpliedProbabilities(m);
      groupMatches[group].push({ match: m, prob, sportKey: sk, sportInfo: sInfo });
    });
  });

  const sortedGroups = Object.keys(groupMatches).sort((a, b) => groupMatches[b].length - groupMatches[a].length);

  if (!sortedGroups.length) {
    let guideHtml = `<div class="loading-state" style="min-height:40vh">
      <div style="font-size:48px;margin-bottom:12px">🏆</div>
      <div style="font-size:18px;font-weight:600;margin-bottom:8px">${t('tabAllEvents')}</div>
      <div style="font-size:14px;color:var(--text-muted);max-width:360px;text-align:center;line-height:1.6">${t('allEventsGuide') || '点击左侧联赛加载数据，赔率将自动缓存5分钟'}</div>
    </div>`;
    guideHtml += '<div style="margin-top:20px">';
    const groups = {};
    sportsList.forEach(s => { if (!groups[s.group]) groups[s.group] = []; groups[s.group].push(s); });
    const groupOrder = Object.keys(groups).sort((a, b) => {
      const order = ['Soccer','Basketball','Baseball','Ice Hockey','Tennis','American Football','Boxing','MMA','Mixed Martial Arts','Esports','Cricket','Rugby','Rugby League','Aussie Rules','Golf','Handball','Lacrosse','Politics','Darts','Cycling','Snooker','Volleyball','Futsal','Table Tennis','Badminton'];
      const ia = order.indexOf(a), ib = order.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1; if (ib === -1) return -1;
      return ia - ib;
    });
    groupOrder.forEach(group => {
      const info = getGroupInfo(group);
      const sports = groups[group];
      guideHtml += `<div style="margin-bottom:16px">`;
      guideHtml += `<div style="font-size:13px;color:var(--text-muted);margin-bottom:8px;padding-left:4px">${info.emoji} ${getGroupLocalizedName(group)}</div>`;
      guideHtml += `<div style="display:flex;flex-wrap:wrap;gap:6px">`;
      sports.forEach(s => {
        guideHtml += `<button class="sub-filter-btn" onclick="setSport('${s.key}')" style="font-size:12px">${getLeagueLocalizedName(s.title) || s.title}</button>`;
      });
      guideHtml += `</div></div>`;
    });
    guideHtml += '</div>';
    return heroHtml + guideHtml;
  }

  let html = heroHtml + renderQuickFilters();

  sortedGroups.forEach(group => {
    let matches = groupMatches[group];
    const info = getGroupInfo(group);
    const sports = groupSports[group];

    // Apply quick filter
    if (activeQuickFilter) {
      matches = matches.filter(m => passesQuickFilter(m.match, m.prob));
    }
    if (!matches.length) return;

    // Sort: hot first
    matches.sort((a, b) => {
      const hotA = isHotMatch(a.match) ? 0 : 1;
      const hotB = isHotMatch(b.match) ? 0 : 1;
      if (hotA !== hotB) return hotA - hotB;
      return new Date(a.match.commence_time) - new Date(b.match.commence_time);
    });

    const displayMatches = matches.slice(0, 3);
    const matchesWithOdds = matches.filter(m => m.prob);
    const arbCount = matchesWithOdds.filter(m => m.prob.isArb).length;
    const hotCount = matches.filter(m => isHotMatch(m.match)).length;

    html += `<div class="all-events-group">`;
    html += `<div class="all-events-header">
      <h2>${info.emoji} ${getGroupLocalizedName(group)}${hotCount > 0 ? ` <span class="hot-badge">🔥 ${hotCount}</span>` : ''}
        ${arbCount > 0 ? `<span class="arb-count">🌟 ${t('arbOpportunityCount', {count: arbCount})}</span>` : ''}
      </h2>
      <button class="view-all-btn" onclick="setSport('${sports[0].key}')">${t('viewAll')} �?/button>
    </div>`;

    displayMatches.forEach(m => {
      html += renderMatchCard(m.match, m.prob, m.sportInfo, true);
    });

    if (matches.length > 3) {
      html += `<div style="text-align:center;padding:4px 0;font-size:12px;color:var(--text-muted)">+${matches.length - 3} ${t('heatUnit')}</div>`;
    }

    html += `</div>`;
  });

  // Animate vote bars after render
  setTimeout(() => animateVoteBars(), 100);

  return html;
};

// Patch refreshOdds to save odds snapshots for change tracking
const _origRefreshOdds = refreshOdds;
refreshOdds = async function() {
  // Save current odds as previous before refreshing
  saveCurrentOddsAsPrevious();
  return _origRefreshOdds.call(this);
};

// ===== V4: Analysis & Voting Features =====

// --- Seeded Random ---
function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  h = Math.abs(h);
  return function() {
    h = (h * 16807 + 0) % 2147483647;
    return (h - 1) / 2147483646;
  };
}

// --- Vote Data ---
function getVoteData(matchId, homeTeam, awayTeam, hasDraw) {
  const rng = seededRandom(matchId);
  const baseHome = Math.floor(500 + rng() * 1500);
  const baseDraw = hasDraw ? Math.floor(500 + rng() * 1500) : 0;
  const baseAway = Math.floor(500 + rng() * 1500);

  // Load user adjustments from localStorage
  const adjKey = 'vote_adj_' + matchId;
  let adj = { home: 0, draw: 0, away: 0 };
  try {
    const stored = localStorage.getItem(adjKey);
    if (stored) adj = JSON.parse(stored);
  } catch(e) {}

  return {
    home: baseHome + adj.home,
    draw: baseDraw + adj.draw,
    away: baseAway + adj.away,
  };
}

function getUserVote(matchId) {
  return localStorage.getItem('vote_' + matchId);
}

function castVote(matchId, choice) {
  const existing = getUserVote(matchId);
  if (existing) return; // Already voted

  localStorage.setItem('vote_' + matchId, choice);

  // Update adjustment
  const adjKey = 'vote_adj_' + matchId;
  let adj = { home: 0, draw: 0, away: 0 };
  try {
    const stored = localStorage.getItem(adjKey);
    if (stored) adj = JSON.parse(stored);
  } catch(e) {}
  adj[choice] = (adj[choice] || 0) + 1;
  localStorage.setItem(adjKey, JSON.stringify(adj));

  // Update today's vote stats
  const statsKey = 'vote_stats_' + new Date().toISOString().slice(0, 10);
  let stats = { totalVotes: 0, matchVotes: {} };
  try {
    const stored = localStorage.getItem(statsKey);
    if (stored) stats = JSON.parse(stored);
  } catch(e) {}
  stats.totalVotes++;
  stats.matchVotes[matchId] = (stats.matchVotes[matchId] || 0) + 1;
  localStorage.setItem(statsKey, JSON.stringify(stats));

  // Re-render the vote section for this match
  const voteEl = document.getElementById('vote_' + matchId);
  if (voteEl) {
    // Find match data
    let match = null, prob = null;
    Object.keys(oddsCache).forEach(sk => {
      oddsCache[sk].data.forEach(m => {
        if (m.id === matchId) { match = m; prob = calcImpliedProbabilities(m); }
      });
    });
    if (match && prob) {
      voteEl.outerHTML = renderVoteSection(matchId, match.home_team, match.away_team, prob.hasDraw);
      // Animate the bars
      setTimeout(() => animateVoteBars('vote_' + matchId), 50);
    }
  }

  showVoteToast();
}

function showVoteToast() {
  let toast = document.getElementById('voteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'voteToast';
    toast.className = 'vote-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = t('voteSuccess');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function animateVoteBars(containerId) {
  const container = containerId ? document.getElementById(containerId) : document;
  if (!container) return;
  const bars = container.querySelectorAll('.vote-result-bar[data-target]');
  bars.forEach(bar => {
    const target = bar.dataset.target;
    requestAnimationFrame(() => {
      bar.style.width = target + '%';
    });
  });
}

// --- Vote Section Renderer ---
function renderVoteSection(matchId, homeTeam, awayTeam, hasDraw) {
  const userVote = getUserVote(matchId);
  const data = getVoteData(matchId, homeTeam, awayTeam, hasDraw);
  const total = data.home + data.draw + data.away;
  const homePct = total ? Math.round(data.home / total * 100) : 0;
  const drawPct = total ? Math.round(data.draw / total * 100) : 0;
  const awayPct = total ? Math.max(0, 100 - homePct - drawPct) : 0;

  let html = `<div class="vote-section" id="vote_${matchId}">`;
  html += `<div class="vote-question">${t('whoWillWin')}</div>`;

  if (!userVote) {
    html += `<div class="vote-options">`;
    html += `<button class="vote-btn" onclick="castVote('${matchId}','home')">${homeTeam} 🏠</button>`;
    if (hasDraw) html += `<button class="vote-btn" onclick="castVote('${matchId}','draw')">${t('draw')} ⚖️</button>`;
    html += `<button class="vote-btn" onclick="castVote('${matchId}','away')">${awayTeam} ✈️</button>`;
    html += `</div>`;
  } else {
    html += `<div class="vote-options">`;
    html += `<button class="vote-btn voted${userVote==='home'?' voted-home':''}">${homeTeam} 🏠</button>`;
    if (hasDraw) html += `<button class="vote-btn voted${userVote==='draw'?' voted-draw':''}">${t('draw')} ⚖️</button>`;
    html += `<button class="vote-btn voted${userVote==='away'?' voted-away':''}">${awayTeam} ✈️</button>`;
    html += `</div>`;
  }

  html += `<div class="vote-results">`;
  html += `<div class="vote-result-row">
    <span class="vote-result-label">${homeTeam}</span>
    <div class="vote-result-bar-bg"><div class="vote-result-bar home" data-target="${homePct}" style="width:0%"></div></div>
    <span class="vote-result-pct">${homePct}%</span>
    <span class="vote-result-count">(${data.home.toLocaleString()} ${t('votes')})</span>
  </div>`;
  if (hasDraw) {
    html += `<div class="vote-result-row">
      <span class="vote-result-label">${t('draw')}</span>
      <div class="vote-result-bar-bg"><div class="vote-result-bar draw" data-target="${drawPct}" style="width:0%"></div></div>
      <span class="vote-result-pct">${drawPct}%</span>
      <span class="vote-result-count">(${data.draw.toLocaleString()} ${t('votes')})</span>
    </div>`;
  }
  html += `<div class="vote-result-row">
    <span class="vote-result-label">${awayTeam}</span>
    <div class="vote-result-bar-bg"><div class="vote-result-bar away" data-target="${awayPct}" style="width:0%"></div></div>
    <span class="vote-result-pct">${awayPct}%</span>
    <span class="vote-result-count">(${data.away.toLocaleString()} ${t('votes')})</span>
  </div>`;
  html += `</div>`;

  if (userVote) {
    html += `<div style="font-size:11px;color:var(--text-muted);margin-top:6px">${t('voted')}</div>`;
  }

  html += `</div>`;
  return html;
}

// --- Vote Stats ---
function renderVoteStats() {
  const statsKey = 'vote_stats_' + new Date().toISOString().slice(0, 10);
  let stats = { totalVotes: 0, matchVotes: {} };
  try {
    const stored = localStorage.getItem(statsKey);
    if (stored) stats = JSON.parse(stored);
  } catch(e) {}

  if (stats.totalVotes === 0) return '';

  // Find hottest match
  let hottestId = '', hottestCount = 0;
  Object.entries(stats.matchVotes).forEach(([id, count]) => {
    if (count > hottestCount) { hottestId = id; hottestCount = count; }
  });

  let hottestName = '';
  if (hottestId) {
    Object.keys(oddsCache).forEach(sk => {
      oddsCache[sk].data.forEach(m => {
        if (m.id === hottestId) hottestName = m.home_team + ' vs ' + m.away_team;
      });
    });
  }

  let html = `<div class="vote-stats-card">
    <div class="vote-stats-title">📊 ${t('todayVoteStats')}</div>
    <div class="vote-stats-grid">
      <div class="vote-stat-item">
        <div class="vote-stat-value">${stats.totalVotes}</div>
        <div class="vote-stat-label">${t('totalVotes')}</div>
      </div>`;
  if (hottestName) {
    html += `<div class="vote-stat-item">
        <div class="vote-stat-value" style="font-size:14px">${hottestName}</div>
        <div class="vote-stat-label">${t('hottestVoteMatch')} (${hottestCount} ${t('votes')})</div>
      </div>`;
  }
  html += `</div></div>`;
  return html;
}

// --- Share Analysis ---
function shareAnalysis(matchId) {
  const url = window.location.origin + window.location.pathname + '?match=' + matchId;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => showCopyToast());
  } else {
    // Fallback
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showCopyToast();
  }
}

function showCopyToast() {
  let toast = document.getElementById('voteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'voteToast';
    toast.className = 'vote-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = t('copiedToClipboard');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// --- Analysis Page Renderer ---
function renderAnalysis() {
  let matches = [];

  if (currentSportKey === '__allevents__' || currentSportKey === '__favorites__') {
    Object.keys(oddsCache).forEach(sk => {
      const sInfo = sportsList.find(s => s.key === sk);
      if (!sInfo) return;
      oddsCache[sk].data.forEach(m => {
        const prob = calcImpliedProbabilities(m);
        if (prob) matches.push({ match: m, prob, sportInfo: sInfo });
      });
    });
  } else if (currentSportKey) {
    const data = getCurrentOdds();
    const info = getCurrentSportInfo();
    if (info) {
      data.forEach(m => {
        const prob = calcImpliedProbabilities(m);
        if (prob) matches.push({ match: m, prob, sportInfo: info.sport });
      });
    }
  }

  if (!matches.length) {
    return `<div class="empty-sport"><div class="empty-icon">📊</div><div>${t('noAnalysisData')}</div></div>`;
  }

  let html = renderVoteStats();

  matches.forEach(item => {
    html += renderAnalysisCard(item.match, item.prob, item.sportInfo);
  });

  return html;
}

function renderAnalysisCard(m, prob, sportInfo) {
  const groupInfo = getGroupInfo(sportInfo.group);
  const timeStr = formatTime(m.commence_time);
  const leagueName = getLeagueLocalizedName(m.sport_title) || m.sport_title;
  const hasDraw = prob.hasDraw;

  // Determine favored team
  const favored = prob.homeProb >= prob.awayProb ? m.home_team : m.away_team;
  const maxProb = Math.max(prob.homeProb, prob.awayProb);

  // Key findings
  const numBookmakers = m.bookmakers ? m.bookmakers.length : 0;

  // Find highest and lowest home odds
  let highestHome = { odds: 0, bookmaker: '' };
  let lowestHome = { odds: Infinity, bookmaker: '' };
  if (prob.allOdds) {
    prob.allOdds.forEach(o => {
      if (o.homeOdds > highestHome.odds) highestHome = { odds: o.homeOdds, bookmaker: o.bookmaker };
      if (o.homeOdds < lowestHome.odds) lowestHome = { odds: o.homeOdds, bookmaker: o.bookmaker };
    });
  }
  const homeOddsDiff = lowestHome.odds > 0 && lowestHome.odds !== Infinity
    ? ((highestHome.odds - lowestHome.odds) / lowestHome.odds * 100).toFixed(1) : 0;

  // SVG concentric rings for probability visualization
  const outerR = 52, outerC = 2 * Math.PI * outerR;
  const midR = 42, midC = 2 * Math.PI * midR;
  const innerR = 32, innerC = 2 * Math.PI * innerR;

  const ringHtml = `<svg width="120" height="120" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="${outerR}" stroke="rgba(46,160,67,0.2)" stroke-width="8" fill="none"/>
    <circle cx="60" cy="60" r="${outerR}" stroke="#4ade80" stroke-width="8" fill="none"
            stroke-dasharray="${outerC.toFixed(2)}" stroke-dashoffset="${(outerC - outerC * prob.homeProb / 100).toFixed(2)}"
            transform="rotate(-90 60 60)" stroke-linecap="round"/>
    ${hasDraw ? `<circle cx="60" cy="60" r="${midR}" stroke="rgba(110,118,129,0.2)" stroke-width="8" fill="none"/>
    <circle cx="60" cy="60" r="${midR}" stroke="#6e7681" stroke-width="8" fill="none"
            stroke-dasharray="${midC.toFixed(2)}" stroke-dashoffset="${(midC - midC * prob.drawProb / 100).toFixed(2)}"
            transform="rotate(-90 60 60)" stroke-linecap="round"/>` : ''}
    <circle cx="60" cy="60" r="${innerR}" stroke="rgba(239,68,68,0.2)" stroke-width="8" fill="none"/>
    <circle cx="60" cy="60" r="${innerR}" stroke="#ef4444" stroke-width="8" fill="none"
            stroke-dasharray="${innerC.toFixed(2)}" stroke-dashoffset="${(innerC - innerC * prob.awayProb / 100).toFixed(2)}"
            transform="rotate(-90 60 60)" stroke-linecap="round"/>
    <text x="60" y="54" text-anchor="middle" fill="var(--text-primary)" font-size="12" font-weight="700">${maxProb}%</text>
    <text x="60" y="68" text-anchor="middle" fill="var(--text-muted)" font-size="9">${favored.substring(0, 12)}</text>
  </svg>`;

  let html = `<div class="analysis-card">
    <div class="analysis-header">
      <div>
        <div class="analysis-teams">🏆 ${m.home_team} vs ${m.away_team}</div>
        <div class="analysis-meta">📅 ${timeStr} | ${groupInfo.emoji} ${leagueName}</div>
      </div>
    </div>
    <div class="analysis-body">
      <div class="analysis-ring-section">
        ${ringHtml}
        <div class="analysis-ring-label">
          <span style="color:#4ade80">�?/span> ${t('homeTeam')}
          ${hasDraw ? ` <span style="color:#6e7681">�?/span> ${t('draw')}` : ''}
          <span style="color:#ef4444">�?/span> ${t('awayTeam')}
        </div>
      </div>
      <div class="analysis-details">
        <div>
          <div class="analysis-section-title">📊 ${t('marketProbAnalysis')}</div>
          <div class="analysis-prob-list">
            <div class="analysis-prob-item">
              <span class="analysis-prob-dot" style="background:#4ade80"></span>
              <span>${m.home_team} ${t('winRate')}�?{prob.homeProb}%�?{t('basedOnOdds')}�?/span>
            </div>
            ${hasDraw ? `<div class="analysis-prob-item">
              <span class="analysis-prob-dot" style="background:#6e7681"></span>
              <span>${t('drawProbability')}�?{prob.drawProb}%</span>
            </div>` : ''}
            <div class="analysis-prob-item">
              <span class="analysis-prob-dot" style="background:#ef4444"></span>
              <span>${m.away_team} ${t('winRate')}�?{prob.awayProb}%</span>
            </div>
          </div>
        </div>
        <div>
          <div class="analysis-section-title">💡 ${t('keyFindings')}</div>
          <div class="analysis-finding-item">�?${numBookmakers} ${t('bookmakersProviding')}�?{t('highMarketAttention')}</div>
          ${lowestHome.odds !== Infinity ? `<div class="analysis-finding-item">�?${t('highest')}${t('homeTeam')}${highestHome.odds.toFixed(2)}�?{highestHome.bookmaker}），${t('lowest')}${lowestHome.odds.toFixed(2)}�?{lowestHome.bookmaker}），${t('difference')}${homeOddsDiff}%</div>` : ''}
          ${prob.isArb ? `<div class="analysis-finding-item" style="color:#4ade80">�?${t('oddsDiscrepancyFound')} ${t('arbProfit')}${prob.arbProfit}%</div>` : ''}
          <div class="analysis-finding-item">�?${t('marketTendency')}�?{favored} ${t('favored')}</div>
        </div>
        <div>
          <div class="analysis-section-title">📈 ${t('oddsCompare')}</div>
          ${renderOddsTable(m, prob)}
        </div>
      </div>
    </div>
    ${renderVoteSection(m.id, m.home_team, m.away_team, hasDraw)}
    <div class="analysis-footer">
      <span>${t('lastUpdated')}�?{new Date().toLocaleString()}</span>
      <button class="share-btn" onclick="shareAnalysis('${m.id}')">🔗 ${t('share')}</button>
    </div>
  </div>`;

  return html;
}

// ===== V5: Performance & UX Helpers =====

function renderSkeletonCards(count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<div class="skeleton-card skeleton">
      <div class="skeleton-line w60 h20"></div>
      <div class="skeleton-line w80"></div>
      <div class="skeleton-line h28"></div>
      <div class="skeleton-line w40"></div>
    </div>`;
  }
  return html;
}

function renderSkeletonSidebar(count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<div class="skeleton-sidebar-item skeleton"></div>`;
  }
  return html;
}

function applyCardAnimations(container) {
  const cards = container.querySelectorAll('.match-card, .combo-card, .analysis-card, .dash-card');
  cards.forEach((card, i) => {
    card.classList.add('match-card-enter');
    card.style.animationDelay = (i * 50) + 'ms';
  });
}

function updateScrollTopBtn() {
  const area = document.getElementById('contentArea');
  const btn = document.getElementById('scrollTopBtn');
  if (!area || !btn) return;
  if (area.scrollTop > 500) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
}

// Scroll listener for scroll-to-top button
(function() {
  const area = document.getElementById('contentArea');
  if (area) {
    area.addEventListener('scroll', updateScrollTopBtn);
  }
})();

function openSidebarDrawer() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.add('drawer-open');
  if (overlay) overlay.classList.add('open');
}

function closeSidebarDrawer() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.remove('drawer-open');
  if (overlay) overlay.classList.remove('open');
}

// Close sidebar on nav click (mobile)
document.addEventListener('click', function(e) {
  if (window.innerWidth <= 768 && e.target.closest('.nav-item')) {
    closeSidebarDrawer();
  }
});

// Init theme + favorites + odds change on load
storePreviousOdds();
initTheme();
updateFavCount();

init();
