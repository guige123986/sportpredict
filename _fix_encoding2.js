const fs = require('fs');
const path = 'C:/Users/wzgui/.openclaw-autoclaw/workspace/sportpredict/index.html';
let content = fs.readFileSync(path, 'utf8');

// Generic approach: replace known corrupted patterns with their correct forms
// The corruption truncates multi-byte characters at the end of strings

// Fix heroBtnFavorites star - across all languages
content = content.replace(/heroBtnFavorites: '[\ufffd]收藏赛事'/g, "heroBtnFavorites: '⭐ 收藏赛事'");
content = content.replace(/heroBtnFavorites: '[\ufffd]Favorites'/g, "heroBtnFavorites: '⭐ Favorites'");
content = content.replace(/heroBtnFavorites: '[\ufffd]Favoritos'/g, "heroBtnFavorites: '⭐ Favoritos'");
content = content.replace(/heroBtnFavorites: '[\ufffd]المفضلة'/g, "heroBtnFavorites: '⭐ المفضلة'");
content = content.replace(/heroBtnFavorites: '[\ufffd]Избранное'/g, "heroBtnFavorites: '⭐ Избранное'");
content = content.replace(/heroBtnFavorites: '[\ufffd]Favoris'/g, "heroBtnFavorites: '⭐ Favoris'");
content = content.replace(/heroBtnFavorites: '[\ufffd]Favoriten'/g, "heroBtnFavorites: '⭐ Favoriten'");
content = content.replace(/heroBtnFavorites: '[\ufffd]お気に入[\ufffd]'/g, "heroBtnFavorites: '⭐ お気に入り'");
content = content.replace(/heroBtnFavorites: '[\ufffd]즐겨찾기'/g, "heroBtnFavorites: '⭐ 즐겨찾기'");

// Fix filterUpcoming across all languages
content = content.replace(/filterUpcoming: '[\ufffd]即将开[\ufffd]'/g, "filterUpcoming: '⏰ 即将开始'");
content = content.replace(/filterUpcoming: '[\ufffd]Starting Soon'/g, "filterUpcoming: '⏰ Starting Soon'");
content = content.replace(/filterUpcoming: '[\ufffd]Pr[\u00f3]ximo'/g, "filterUpcoming: '⏰ Próximo'");
content = content.replace(/filterUpcoming: '[\ufffd]Em breve'/g, "filterUpcoming: '⏰ Em breve'");
content = content.replace(/filterUpcoming: '[\ufffd][\u0642]ريباً'/g, "filterUpcoming: '⏰ قريباً'");
content = content.replace(/filterUpcoming: '[\ufffd]開始間近'/g, "filterUpcoming: '⏰ 開始間近'");
content = content.replace(/filterUpcoming: '[\ufffd][\ufffd]시작'/g, "filterUpcoming: '⏰ 곧 시작'");
content = content.replace(/filterUpcoming: '[\ufffd]Скоро'/g, "filterUpcoming: '⏰ Скоро'");
content = content.replace(/filterUpcoming: '[\ufffd]Bient[\u00f4]t'/g, "filterUpcoming: '⏰ Bientôt'");
content = content.replace(/filterUpcoming: '[\ufffd]Bald'/g, "filterUpcoming: '⏰ Bald'");

// Fix filterHighAttention across all languages
content = content.replace(/filterHighAttention: '[\ufffd]高关注度'/g, "filterHighAttention: '🔥 高关注度'");
content = content.replace(/filterHighAttention: '[\ufffd]High Attention'/g, "filterHighAttention: '🔥 High Attention'");
content = content.replace(/filterHighAttention: '[\ufffd]Alta atenci[\u00f3]n'/g, "filterHighAttention: '🔥 Alta atención'");
content = content.replace(/filterHighAttention: '[\ufffd]Alta aten[\u00e7][\u00e3]o'/g, "filterHighAttention: '🔥 Alta atenção'");
content = content.replace(/filterHighAttention: '[\ufffd][\u0627]هتمام عالي'/g, "filterHighAttention: '🔥 اهتمام عالي'");
content = content.replace(/filterHighAttention: '[\ufffd]高注[\ufffd]'/g, "filterHighAttention: '🔥 高注目'");
content = content.replace(/filterHighAttention: '[\ufffd]높은 관[\ufffd]'/g, "filterHighAttention: '🔥 높은 관심'");
content = content.replace(/filterHighAttention: '[\ufffd]Высокий интерес'/g, "filterHighAttention: '🔥 Высокий интерес'");
content = content.replace(/filterHighAttention: '[\ufffd]Forte attention'/g, "filterHighAttention: '🔥 Forte attention'");
content = content.replace(/filterHighAttention: '[\ufffd]Hohe Aufmerksamkeit'/g, "filterHighAttention: '🔥 Hohe Aufmerksamkeit'");

// Fix Japanese I18N main section - using regex for corrupted chars
const jaMainReplacements = [
  [/sidebarLogo: '全スポーツ分[\ufffd]'/g, "sidebarLogo: '全スポーツ分析'"],
  [/tabMatches: '試合一[\ufffd]'/g, "tabMatches: '試合一覧'"],
  [/homeTeam: 'ホーム勝[\ufffd]'/g, "homeTeam: 'ホーム勝ち'"],
  [/confidence: 'データ整合[\ufffd]'/g, "confidence: 'データ整合性'"],
  [/all: 'すべ[\ufffd]'/g, "all: 'すべて'"],
  [/combo2: '\{sport\} ダブルコン[\ufffd]'/g, "combo2: '{sport} ダブルコンボ'"],
  [/combo3: '\{sport\} トリプルコン[\ufffd]'/g, "combo3: '{sport} トリプルコンボ'"],
  [/crossCombo: '🌍 競技横断インサイ[\ufffd]'/g, "crossCombo: '🌍 競技横断インサイト'"],
  [/dashArbDesc: '差异[\ufffd]'/g, "dashArbDesc: '差異率'"],
  [/dashArbDesc: '差異[\ufffd]'/g, "dashArbDesc: '差異率'"],
  [/modalDisclaimer: '⚖️ 公式の合法チャンネルで視聴してくださ[\ufffd]'/g, "modalDisclaimer: '⚖️ 公式の合法チャンネルで視聴してください'"],
  [/refreshOdds: 'オッズ更[\ufffd]'/g, "refreshOdds: 'オッズ更新'"],
  [/loading: '読み込み[\ufffd]\.\.'/g, "loading: '読み込み中...'"],
  [/retry: '再試[\ufffd]'/g, "retry: '再試行'"],
  [/noData: 'データな[\ufffd]'/g, "noData: 'データなし'"],
  [/oddsCompare: 'オッズ比[\ufffd]'/g, "oddsCompare: 'オッズ比較'"],
  [/showOdds: 'オッズ表[\ufffd]'/g, "showOdds: 'オッズ表示'"],
  [/arbOpportunity: 'オッズ差[\ufffd]'/g, "arbOpportunity: 'オッズ差異'"],
  [/arbProfit: '差異[\ufffd]'/g, "arbProfit: '差異率'"],
  [/bookmaker: 'ブックメーカ[\ufffd]'/g, "bookmaker: 'ブックメーカー'"],
  [/sportIceHockey: 'アイスホッケ[\ufffd]'/g, "sportIceHockey: 'アイスホッケー'"],
  [/sportTennis: 'テニ[\ufffd]'/g, "sportTennis: 'テニス'"],
  [/sportBoxing: 'ボクシン[\ufffd]'/g, "sportBoxing: 'ボクシング'"],
  [/sportCricket: 'クリケッ[\ufffd]'/g, "sportCricket: 'クリケット'"],
  [/sportEsports: 'eスポ[\ufffd][\ufffd]'/g, "sportEsports: 'eスポーツ'"],
  [/sportAussieRules: 'オージールー[\ufffd]'/g, "sportAussieRules: 'オージールール'"],
  [/sportGolf: 'ゴル[\ufffd]'/g, "sportGolf: 'ゴルフ'"],
  [/sportSnooker: 'スヌーカ[\ufffd]'/g, "sportSnooker: 'スヌーカー'"],
  [/sportFutsal: 'フットサ[\ufffd]'/g, "sportFutsal: 'フットサル'"],
  [/chFIFADesc: 'FIFA公式ストリーミン[\ufffd]'/g, "chFIFADesc: 'FIFA公式ストリーミング'"],
  [/chLeagueOfficial: 'リーグ公式放[\ufffd]'/g, "chLeagueOfficial: 'リーグ公式放送'"],
  [/chLeagueOfficialDesc: '各リーグ公式デジタル放[\ufffd]'/g, "chLeagueOfficialDesc: '各リーグ公式デジタル放送'"],
  [/chNBALeaguePassDesc: 'NBA公式ストリーミングサブス[\ufffd]'/g, "chNBALeaguePassDesc: 'NBA公式ストリーミングサブスク'"],
  [/chESPNPlusDesc: 'ESPNストリーミングサブス[\ufffd]'/g, "chESPNPlusDesc: 'ESPNストリーミングサブスク'"],
  [/chMLBtvDesc: 'MLB公式ストリーミングサブス[\ufffd]'/g, "chMLBtvDesc: 'MLB公式ストリーミングサブスク'"],
  [/chNFLGamePassDesc: 'NFL公式ストリーミングサブス[\ufffd]'/g, "chNFLGamePassDesc: 'NFL公式ストリーミングサブスク'"],
  [/chNHLtvDesc: 'NHL公式ストリーミングサブス[\ufffd]'/g, "chNHLtvDesc: 'NHL公式ストリーミングサブスク'"],
  [/chYoutubeSportsDesc: 'YouTubeスポーツチャンネ[\ufffd]'/g, "chYoutubeSportsDesc: 'YouTubeスポーツチャンネル'"],
  [/disclaimer: '⚠️ 免責事項：本プラットフォームの分析データは市場オッズに基づき、参考用のみです[\ufffd]'/g, "disclaimer: '⚠️ 免責事項：本プラットフォームの分析データは市場オッズに基づき、参考用のみです。'"],
  [/disclaimer2: 'スポーツ結果は多くの要因に影響されます。過去のデータは将来の結果を保証しません[\ufffd]'/g, "disclaimer2: 'スポーツ結果は多くの要因に影響されます。過去のデータは将来の結果を保証しません。'"],
  [/privacyP1: '最終更新：2026[\ufffd][\ufffd][\ufffd]'/g, "privacyP1: '最終更新：2026年6月3日'"],
  [/privacyH1: 'データ収[\ufffd]'/g, "privacyH1: 'データ収集'"],
  [/privacyH2: 'Cookieの使[\ufffd]'/g, "privacyH2: 'Cookieの使用'"],
  [/privacyP2: 'SportPredictは次のデータのみを収集します：言語設定（ブラウザにローカル保存）、APIキャッシュデータ（オッズ情報[\ufffd]分で期限切れ）。個人識別情報は収集しません[\ufffd]'/g, "privacyP2: 'SportPredictは次のデータのみを収集します：言語設定（ブラウザにローカル保存）、APIキャッシュデータ（オッズ情報、5分で期限切れ）。個人識別情報は収集しません。'"],
  [/privacyH3: 'サードパーティサービ[\ufffd]'/g, "privacyH3: 'サードパーティサービス'"],
  [/privacyP4: 'The Odds APIを使用してスポーツオッズデータを取得し、Google AdSenseを使用して広告を表示する場合があります。これらのサービスには独自のプライバシーポリシーがあります[\ufffd]'/g, "privacyP4: 'The Odds APIを使用してスポーツオッズデータを取得し、Google AdSenseを使用して広告を表示する場合があります。これらのサービスには独自のプライバシーポリシーがあります。'"],
  [/privacyH4: 'GDPRの権[\ufffd]'/g, "privacyH4: 'GDPRの権利'"],
  [/privacyP5: 'GDPRに基づき、個人データへのアクセス、訂正、削除の権利があります。権利を行使するには、下記の連絡先までご連絡ください[\ufffd]'/g, "privacyP5: 'GDPRに基づき、個人データへのアクセス、訂正、削除の権利があります。権利を行使するには、下記の連絡先までご連絡ください。'"],
  [/privacyH5: '連絡[\ufffd]'/g, "privacyH5: '連絡先'"],
  [/aboutP1: 'SportPredictは、世界中のスポーツ愛好家に市場データに基づくイベント統計と確率分析を提供する専門的なスポーツデータ分析プラットフォームです[\ufffd]'/g, "aboutP1: 'SportPredictは、世界中のスポーツ愛好家に市場データに基づくイベント統計と確率分析を提供する専門的なスポーツデータ分析プラットフォームです。'"],
  [/aboutP2: '私たちの使命は、透明なデータ可視化を通じて、スポーツイベントにおける市場確率と統計的傾向の理解を支援することです。すべての分析は公開市場データに基づき、数学的モデルを使用して計算されています[\ufffd]'/g, "aboutP2: '私たちの使命は、透明なデータ可視化を通じて、スポーツイベントにおける市場確率と統計的傾向の理解を支援することです。すべての分析は公開市場データに基づき、数学的モデルを使用して計算されています。'"],
  [/aboutP3: '⚠️ 重要：SportPredictは賭博サービスを提供せず、料金を徴収せず、いかなる形態のギャンブルも奨励または促進しません。本サイトのすべてのコンテンツは情報参考および学術研究のみを目的としています[\ufffd]'/g, "aboutP3: '⚠️ 重要：SportPredictは賭博サービスを提供せず、料金を徴収せず、いかなる形態のギャンブルも奨励または促進しません。本サイトのすべてのコンテンツは情報参考および学術研究のみを目的としています。'"],
  [/termsP2: '1\. 本サイトで提供されるすべてのデータと分析は参考用であり、賭博の助言を構成するものではありません[\ufffd]'/g, "termsP2: '1. 本サイトで提供されるすべてのデータと分析は参考用であり、賭博の助言を構成するものではありません。'"],
  [/termsP3: '2\. ユーザーはデータの正確性と適用性を独自に判断し、使用のリスクを負うものとします[\ufffd]'/g, "termsP3: '2. ユーザーはデータの正確性と適用性を独自に判断し、使用のリスクを負うものとします。'"],
  [/termsP4: '3\. 本サイトのコンテンツは知的財産権により保護されており、許可なく複製または再配布することはできません[\ufffd]'/g, "termsP4: '3. 本サイトのコンテンツは知的財産権により保護されており、許可なく複製または再配布することはできません。'"],
  [/termsP5: '4\. 本サイトはデータのリアルタイム性と正確性を保証せず、市場データに遅延が生じる場合があります[\ufffd]'/g, "termsP5: '4. 本サイトはデータのリアルタイム性と正確性を保証せず、市場データに遅延が生じる場合があります。'"],
  [/footerDisclaimer: '⚠️ SportPredictはスポーツデータ分析プラットフォームであり、賭博サービスを提供せず、料金も徴収しません。すべてのデータは分析参考用です[\ufffd]'/g, "footerDisclaimer: '⚠️ SportPredictはスポーツデータ分析プラットフォームであり、賭博サービスを提供せず、料金も徴収しません。すべてのデータは分析参考用です。'"],
  [/footerAbout: '私たちについ[\ufffd]'/g, "footerAbout: '私たちについて'"],
  [/heroSubtitle: 'グローバルスポーツオッズデータ分析プラットフォー[\ufffd]'/g, "heroSubtitle: 'グローバルスポーツオッズデータ分析プラットフォーム'"],
  [/heroTag1: '📊 リアルタイムオッ[\ufffd]'/g, "heroTag1: '📊 リアルタイムオッズ'"],
];

for (const [regex, replacement] of jaMainReplacements) {
  content = content.replace(regex, replacement);
}

// Fix Japanese privacyP3 (long string that got partially replaced + corrupted)
content = content.replace(
  /privacyP3: '本ウェブサイトはlocalStorageを使用して言語設定とCookie同意状況を保存します。Google AdSenseを通じてCookieを使用し、パーソナライズされた広告を表示する場合があります。ブラウザの設定でCookieを管理できます。'の設定でCookie[^']*',/g,
  "privacyP3: '本ウェブサイトはlocalStorageを使用して言語設定とCookie同意状況を保存します。Google AdSenseを通じてCookieを使用し、パーソナライズされた広告を表示する場合があります。ブラウザの設定でCookieを管理できます。',"
);

// Fix cookieText in Japanese (partially replaced + corrupted)
content = content.replace(
  /cookieText: '本ウェブサイトはCookieを使用してエクスペリエンスを向上させ、Google AdSenseを通じて広告を表示する場合があります。継続して使用することにより、プライバシーポリシーに同意したものとみなされます。'[\ufffd]',/g,
  "cookieText: '本ウェブサイトはCookieを使用してエクスペリエンスを向上させ、Google AdSenseを通じて広告を表示する場合があります。継続して使用することにより、プライバシーポリシーに同意したものとみなされます。',"
);

// Fix Korean I18N main section using regex
const koMainReplacements = [
  [/sidebarLogo: '전체 스포[\ufffd]분석'/g, "sidebarLogo: '전체 스포츠분석'"],
  [/sidebarFooter: '데이터는 참고[\ufffd]· 금융 조언[\ufffd]아닙니다'/g, "sidebarFooter: '데이터는 참고용 · 금융 조언이 아닙니다'"],
  [/tabCombos: '데이[\ufffd]인사이트'/g, "tabCombos: '데이터 인사이트'"],
  [/tabDashboard: '대시보[\ufffd]'/g, "tabDashboard: '대시보드'"],
  [/homeTeam: '[\ufffd][\ufffd]'/g, "homeTeam: '홈승'"],
  [/awayTeam: '원정 [\ufffd]'/g, "awayTeam: '원정 승'"],
  [/confidence: '데이[\ufffd]일관[\ufffd]'/g, "confidence: '데이터 일관성'"],
  [/noMatches: '\{sport\} 경기 데이[\ufffd]없음'/g, "noMatches: '{sport} 경기 데이터 없음'"],
  [/combo3: '\{sport\} 트리[\ufffd]콤보'/g, "combo3: '{sport} 트리플 콤보'"],
  [/combo3Label: '트리[\ufffd]'/g, "combo3Label: '트리플'"],
  [/crossCombo3: '교차 트리[\ufffd]'/g, "crossCombo3: '교차 트리플'"],
  [/mediumRisk: '중위[\ufffd]'/g, "mediumRisk: '중위험'"],
  [/highRisk: '고위[\ufffd]'/g, "highRisk: '고위험'"],
  [/dashArb: '🌟 배당[\ufffd]차이 기회'/g, "dashArb: '🌟 배당률 차이 기회'"],
  [/dashArbNone: '배당[\ufffd]차이 기회 없음'/g, "dashArbNone: '배당률 차이 기회 없음'"],
  [/dashArbDesc: '차이[\ufffd]'/g, "dashArbDesc: '차이율'"],
  [/modalTitle: '📺 공식 생중[\ufffd]채널'/g, "modalTitle: '📺 공식 생중계 채널'"],
  [/modalDisclaimer: '⚖️ 공식 합법 채널[\ufffd]통해 시청하세[\ufffd]'/g, "modalDisclaimer: '⚖️ 공식 합법 채널을 통해 시청하세요'"],
  [/refreshOdds: '배당[\ufffd]새로고침'/g, "refreshOdds: '배당률 새로고침'"],
  [/loading: '로딩 [\ufffd]\.\.'/g, "loading: '로딩 중...'"],
  [/retry: '재시[\ufffd]'/g, "retry: '재시도'"],
  [/noData: '데이[\ufffd]없음'/g, "noData: '데이터 없음'"],
  [/oddsCompare: '배당[\ufffd]비교'/g, "oddsCompare: '배당률 비교'"],
  [/showOdds: '배당[\ufffd]보기'/g, "showOdds: '배당률 보기'"],
  [/hideOdds: '배당[\ufffd]숨기[\ufffd]'/g, "hideOdds: '배당률 숨기기'"],
  [/arbOpportunity: '배당[\ufffd]차이'/g, "arbOpportunity: '배당률 차이'"],
  [/arbProfit: '차이[\ufffd]'/g, "arbProfit: '차이율'"],
  [/bestOdds: '최고 배당[\ufffd]'/g, "bestOdds: '최고 배당률'"],
  [/sportIceHockey: '아이스하[\ufffd]'/g, "sportIceHockey: '아이스하키'"],
  [/sportTennis: '테니[\ufffd]'/g, "sportTennis: '테니스'"],
  [/sportCricket: '크리[\ufffd]'/g, "sportCricket: '크리켓'"],
  [/sportEsports: 'e스포[\ufffd]'/g, "sportEsports: 'e스포츠'"],
  [/sportSnooker: '스누[\ufffd]'/g, "sportSnooker: '스누커'"],
  [/sportHandball: '핸드[\ufffd]'/g, "sportHandball: '핸드볼'"],
  [/chLeagueOfficialDesc: '공식 디지[\ufffd]중계'/g, "chLeagueOfficialDesc: '공식 디지털 중계'"],
  [/chEurosportDesc: '유럽 스포[\ufffd]스트리밍'/g, "chEurosportDesc: '유럽 스포츠 스트리밍'"],
  [/chYoutubeSportsDesc: 'YouTube 스포[\ufffd]채널'/g, "chYoutubeSportsDesc: 'YouTube 스포츠 채널'"],
  [/chDAZNDesc: '글로벌 스포[\ufffd]스트리밍'/g, "chDAZNDesc: '글로벌 스포츠 스트리밍'"],
  [/disclaimer: '⚠️ 면책: 모든 분석 데이터는 시장 배당[\ufffd]기반이며 참고용입니다.'/g, "disclaimer: '⚠️ 면책: 모든 분석 데이터는 시장 배당률 기반이며 참고용입니다.'"],
  [/disclaimer2: '스포[\ufffd]결과[\ufffd]여러 요인[\ufffd]영향[\ufffd]받습니다\. 과거 데이터가 미래 성과[\ufffd]보장하지 않습니다.'/g, "disclaimer2: '스포츠 결과는 여러 요인의 영향을 받습니다. 과거 데이터가 미래 성과를 보장하지 않습니다.'"],
  [/heroSubtitle: '글로벌 스포[\ufffd]배당[\ufffd]데이[\ufffd]분석 플랫[\ufffd]'/g, "heroSubtitle: '글로벌 스포츠 배당률 데이터 분석 플랫폼'"],
  [/heroTag1: '📊 실시[\ufffd]배당[\ufffd]'/g, "heroTag1: '📊 실시간 배당률'"],
];

for (const [regex, replacement] of koMainReplacements) {
  content = content.replace(regex, replacement);
}

// Fix Korean privacy/about/terms (long strings with many corrupted chars)
// These are very corrupted, need to replace entire lines
const koLongReplacements = [
  [/privacyP1: '최종 업데이트: 2026[\ufffd]6[\ufffd]3[\ufffd]'/g, "privacyP1: '최종 업데이트: 2026년6월3일'"],
  [/privacyH1: '데이[\ufffd]수집'/g, "privacyH1: '데이터 수집'"],
  [/privacyH3: '[\ufffd][\ufffd]서비[\ufffd]'/g, "privacyH3: '제3자 서비스'"],
  [/privacyH5: '연락[\ufffd]'/g, "privacyH5: '연락처'"],
  [/footerAbout: '私たちについ[\ufffd]'/g, "footerAbout: '私たちについて'"],
];

for (const [regex, replacement] of koLongReplacements) {
  content = content.replace(regex, replacement);
}

// Fix Korean NEW_I18N
const koNewI18nReplacements = [
  [/noEvents: '예정[\ufffd]이벤[\ufffd]없음'/g, "noEvents: '예정된 이벤트 없음'"],
  [/every5Min: '5분마[\ufffd]업데이트'/g, "every5Min: '5분마다 업데이트'"],
  [/lastRefresh: '마지[\ufffd]새로고침'/g, "lastRefresh: '마지막 새로고침'"],
  [/tabAllEvents: '전체 이벤[\ufffd]'/g, "tabAllEvents: '전체 이벤트'"],
  [/matchLive: '진행 [\ufffd]'/g, "matchLive: '진행 중'"],
  [/matchUpcoming: '[\ufffd]시작'/g, "matchUpcoming: '곧 시작'"],
  [/sportMixedMartialArts: '종합격투[\ufffd]'/g, "sportMixedMartialArts: '종합격투기'"],
  [/arbOpportunityCount: '\{count\}경기 배당[\ufffd]차이 기회 있음'/g, "arbOpportunityCount: '{count}경기 배당률 차이 기회 있음'"],
  [/searchPlaceholder: '경기, 팀 검[\ufffd]\.\.'/g, "searchPlaceholder: '경기, 팀 검색...'"],
  [/filterUpcoming: '[\ufffd][\ufffd]시작'/g, "filterUpcoming: '⏰ 곧 시작'"],
  [/filterLive: '🟢 진행 [\ufffd]'/g, "filterLive: '🟢 진행 중'"],
  [/filterHighAttention: '[\ufffd]높은 관[\ufffd]'/g, "filterHighAttention: '🔥 높은 관심'"],
  [/timeMinutesLater: '\{n\}[\ufffd][\ufffd]'/g, "timeMinutesLater: '{n}분 후'"],
  [/timeHoursLater: '\{n\}시간 [\ufffd]'/g, "timeHoursLater: '{n}시간 후'"],
  [/timeDaysLater: '\{n\}[\ufffd][\ufffd]'/g, "timeDaysLater: '{n}일 후'"],
  [/timeStarted: '시작[\ufffd]'/g, "timeStarted: '시작됨'"],
];

for (const [regex, replacement] of koNewI18nReplacements) {
  content = content.replace(regex, replacement);
}

// Fix Japanese NEW_I18N
const jaNewI18nReplacements = [
  [/noEvents: '予定されたイベントな[\ufffd]'/g, "noEvents: '予定されたイベントなし'"],
  [/lastRefresh: '最終更[\ufffd]'/g, "lastRefresh: '最終更新'"],
  [/viewAll: 'すべて表[\ufffd]'/g, "viewAll: 'すべて表示'"],
  [/tabAllEvents: '全イベン[\ufffd]'/g, "tabAllEvents: '全イベント'"],
  [/matchLive: '試合[\ufffd]'/g, "matchLive: '試合中'"],
  [/sportRugbyLeague: 'ラグビーリー[\ufffd]'/g, "sportRugbyLeague: 'ラグビーリーグ'"],
  [/arbOpportunityCount: '\{count\}試合にオッズ差異の機会あ[\ufffd]'/g, "arbOpportunityCount: '{count}試合にオッズ差異の機会あり'"],
  [/searchPlaceholder: '試合、チームを検[\ufffd]\.\.'/g, "searchPlaceholder: '試合、チームを検索...'"],
  [/myFavorites: 'お気に入[\ufffd]'/g, "myFavorites: 'お気に入り'"],
  [/noFavorites: 'お気に入りな[\ufffd]'/g, "noFavorites: 'お気に入りなし'"],
  [/favRemoved: 'お気に入りから削[\ufffd]'/g, "favRemoved: 'お気に入りから削除'"],
  [/filterUpcoming: '[\ufffd]開始間近'/g, "filterUpcoming: '⏰ 開始間近'"],
  [/filterLive: '🟢 試合[\ufffd]'/g, "filterLive: '🟢 試合中'"],
  [/filterHighAttention: '[\ufffd]高注[\ufffd]'/g, "filterHighAttention: '🔥 高注目'"],
  [/timeHoursLater: '\{n\}時間[\ufffd]'/g, "timeHoursLater: '{n}時間後'"],
  [/timeStarted: '開始[\ufffd]'/g, "timeStarted: '開始済'"],
];

for (const [regex, replacement] of jaNewI18nReplacements) {
  content = content.replace(regex, replacement);
}

// Fix GROUP_MAP emojis
content = content.replace(/\{ emoji: '[\ufffd]', i18nKey: 'sportSoccer'/g, "{ emoji: '⚽', i18nKey: 'sportSoccer'");
content = content.replace(/\{ emoji: '[\ufffd]', i18nKey: 'sportBaseball'/g, "{ emoji: '⚾', i18nKey: 'sportBaseball'");
content = content.replace(/\{ emoji: '[\ufffd]', i18nKey: 'sportGolf'/g, "{ emoji: '⛳', i18nKey: 'sportGolf'");
content = content.replace(/\{ emoji: '[\ufffd]', i18nKey: 'sportFutsal'/g, "{ emoji: '⚽', i18nKey: 'sportFutsal'");
content = content.replace(/\{ emoji: '🗳[\ufffd]', i18nKey: 'sportPolitics'/g, "{ emoji: '🗳️', i18nKey: 'sportPolitics'");

// Fix LEAGUE_NAMES
content = content.replace(/zh:'世界[\ufffd]',/g, "zh:'世界杯',");
content = content.replace(/ja:'Jリー[\ufffd]',/g, "ja:'Jリーグ',");
content = content.replace(/ja:'ラ・リー[\ufffd]',/g, "ja:'ラ・リーガ',");
content = content.replace(/ja:'ブンデスリー[\ufffd]',/g, "ja:'ブンデスリーガ',");
content = content.replace(/ja:'ワールドカッ[\ufffd]',/g, "ja:'ワールドカップ',");
content = content.replace(/ko:'월드[\ufffd]',/g, "ko:'월드컵',");
content = content.replace(/ja:'プレミアリー[\ufffd]',/g, "ja:'プレミアリーグ',");
content = content.replace(/ja:'コパ・リベルタドーレ[\ufffd]',/g, "ja:'コパ・リベルタドーレス',");
content = content.replace(/ja:'チャンピオンシッ[\ufffd]',/g, "ja:'チャンピオンシップ',");
content = content.replace(/ko:'리그[\ufffd]',/g, "ko:'리그1',");
content = content.replace(/zh:'墨西哥联[\ufffd]',/g, "zh:'墨西哥联赛',");
content = content.replace(/ja:'Aリー[\ufffd]',/g, "ja:'Aリーグ',");
content = content.replace(/zh:'欧国[\ufffd]',/g, "zh:'欧国联',");
content = content.replace(/zh:'超级橄榄[\ufffd]',/g, "zh:'超级橄榄球',");
content = content.replace(/zh:'NRL橄榄球联[\ufffd]',/g, "zh:'NRL橄榄球联赛',");
content = content.replace(/zh:'PGA高尔[\ufffd]',/g, "zh:'PGA高尔夫',");
content = content.replace(/ja:'ラグビーリー[\ufffd]',/g, "ja:'ラグビーリーグ',");
content = content.replace(/ko:'유로파리[\ufffd]',/g, "ko:'유로파리그',");
content = content.replace(/ko:'에레디비[\ufffd]',/g, "ko:'에레디비시',");

// Fix page title translations
content = content.replace(/zh: '全赛事データ分析平[\ufffd]- 实时赔率分析 \| SportPredict'/g, "zh: '全赛事数据分析平台 - 实时赔率分析 | SportPredict'");
content = content.replace(/ja: 'スポーツ分析 - リアルタイムオッズ分[\ufffd]\| SportPredict'/g, "ja: 'スポーツ分析 - リアルタイムオッズ分析 | SportPredict'");
content = content.replace(/ko: '스포[\ufffd]분석 - 실시[\ufffd]배당[\ufffd]분석 \| SportPredict'/g, "ko: '스포츠 분석 - 실시간 배당률 분석 | SportPredict'");

// Fix channel icons
content = content.replace(/\{ icon: '[\ufffd]', nameKey: 'chFIFA'/g, "{ icon: '⚽', nameKey: 'chFIFA'");
content = content.replace(/\{ icon: '[\ufffd]', nameKey: 'chMLBtv'/g, "{ icon: '⚾', nameKey: 'chMLBtv'");

// Fix various other corrupted patterns
content = content.replace(/favored: '被看[\ufffd]'/g, "favored: '被看好'");
content = content.replace(/oddsDiscrepancyFound: '发现赔率差异机会[\ufffd]'/g, "oddsDiscrepancyFound: '发现赔率差异机会！'");
content = content.replace(/highest: '最[\ufffd]'/g, "highest: '最高'");
content = content.replace(/lowest: '最[\ufffd]'/g, "lowest: '最低'");
content = content.replace(/lastUpdated: '最后更[\ufffd]'/g, "lastUpdated: '最后更新'");
content = content.replace(/lastUpdated: '最終更[\ufffd]'/g, "lastUpdated: '最終更新'");
content = content.replace(/lastUpdated: '마지[\ufffd]업데이트'/g, "lastUpdated: '마지막 업데이트'");
content = content.replace(/bookmakersProviding: '家机构提供赔[\ufffd]'/g, "bookmakersProviding: '家机构提供赔率'");
content = content.replace(/votes: '[\ufffd]'/g, "votes: '票'");
content = content.replace(/voted: '已投[\ufffd]'/g, "voted: '已投票'");
content = content.replace(/voteSuccess: '投票成功[\ufffd]'/g, "voteSuccess: '投票成功！'");
content = content.replace(/copiedToClipboard: '已复制到剪贴[\ufffd]'/g, "copiedToClipboard: '已复制到剪贴板'");

// Fix analysis panel
content = content.replace(/highMarketAttention: '市場の注目度[\ufffd]'/g, "highMarketAttention: '市場の注目度が高い'");
content = content.replace(/todayVoteStats: '本日の投票統[\ufffd]'/g, "todayVoteStats: '本日の投票統計'");
content = content.replace(/basedOnOdds: 'オッズに基づ[\ufffd]'/g, "basedOnOdds: 'オッズに基づく'");
content = content.replace(/bookmakersProviding: '社がオッズ提[\ufffd]'/g, "bookmakersProviding: '社がオッズ提供'");
content = content.replace(/marketTendency: '市場の傾[\ufffd]'/g, "marketTendency: '市場の傾向'");
content = content.replace(/voteSuccess: '投票しました[\ufffd]'/g, "voteSuccess: '投票しました！'");
content = content.replace(/copiedToClipboard: 'コピーしまし[\ufffd]'/g, "copiedToClipboard: 'コピーしました'");
content = content.replace(/noAnalysisData: '分析データなし。リーグを選択してください[\ufffd]'/g, "noAnalysisData: '分析データなし。リーグを選択してください。'");

// Fix Korean analysis panel
content = content.replace(/oddsDiscrepancyFound: '배당[\ufffd]차이 기회 발견!'/g, "oddsDiscrepancyFound: '배당률 차이 기회 발견!'");
content = content.replace(/totalVotes: '[\ufffd]투표 [\ufffd]'/g, "totalVotes: '총 투표 수'");
content = content.replace(/hottestVoteMatch: '가[\ufffd]인기 있는 투표 경기'/g, "hottestVoteMatch: '가장 인기 있는 투표 경기'");
content = content.replace(/basedOnOdds: '배당[\ufffd]기반'/g, "basedOnOdds: '배당률 기반'");
content = content.replace(/bookmakersProviding: '[\ufffd]업체 배당[\ufffd]제공'/g, "bookmakersProviding: '개 업체 배당률 제공'");
content = content.replace(/whoWillWin: '누가 이길 [\ufffd]같나[\ufffd]'/g, "whoWillWin: '누가 이길 것 같나요?'");
content = content.replace(/copiedToClipboard: '클립보드[\ufffd]복사[\ufffd]'/g, "copiedToClipboard: '클립보드에 복사됨'");
content = content.replace(/noAnalysisData: '분석 데이[\ufffd]없음\. 리그[\ufffd]먼저 선택하세[\ufffd]'/g, "noAnalysisData: '분석 데이터 없음. 리그를 먼저 선택하세요'");

// Fix other HTML/template corrupted chars
content = content.replace(/\$\{favActive \? '[\ufffd] : '[\ufffd]'\}/g, "${favActive ? '★ ' : '☆'}");
content = content.replace(/<button class="fav-btn" onclick="toggleFavorite\('[^']+', event\)">[\ufffd]<\/button>/g, "<button class=\"fav-btn\" onclick=\"toggleFavorite('$1', event)\">☆</button>");
content = content.replace(/\$\{t\('viewAll'\)\} [\ufffd]<\/button>/g, "${t('viewAll')} →</button>");

// Fix theme toggle
content = content.replace(/'☀[\ufffd]'/g, "'☀️'");

// Fix page title for favorites
content = content.replace(/'[🌟⭐]' \+ t\('myFavorites'\)/g, "'⭐ ' + t('myFavorites')");

// Fix odds arrows
content = content.replace(/<span class="odds-up">[\ufffd]<\/span>/g, "<span class=\"odds-up\">↑</span>");
content = content.replace(/<span class="odds-down">[\ufffd]<\/span>/g, "<span class=\"odds-down\">↓</span>");

// Fix match status emoji
content = content.replace(/emoji: '[\ufffd]', cssClass: 'finished'/g, "emoji: '✅', cssClass: 'finished'");
content = content.replace(/emoji: '[\ufffd]', cssClass: 'upcoming'/g, "emoji: '⏰', cssClass: 'upcoming'");

// Fix empty-sport icons
content = content.replace(/<div class="empty-icon">[\ufffd]<\/div>/g, "<div class=\"empty-icon\">⭐</div>");

// Fix channel link arrow
content = content.replace(/>[\ufffd]<\/a>/g, ">→</a>");

// Fix analysis findings
content = content.replace(/<div class="analysis-finding-item">[\ufffd]\$\{numBookmakers\}/g, "<div class=\"analysis-finding-item\">📊 ${numBookmakers}");
content = content.replace(/<div class="analysis-finding-item">[\ufffd]\$\{t\('highest'\)/g, "<div class=\"analysis-finding-item\">📈 ${t('highest')");
content = content.replace(/style="color:#4ade80">[\ufffd]\$\{t\('oddsDiscrepancyFound'\)/g, "style=\"color:#4ade80\">🌟 ${t('oddsDiscrepancyFound')");
content = content.replace(/<div class="analysis-finding-item">[\ufffd]\$\{t\('marketTendency'\)/g, "<div class=\"analysis-finding-item\">📊 ${t('marketTendency')");

// Fix analysis separators - 场/率/时/中
content = content.replace(/\$\{t\('winRate'\)\}[\ufffd]\$\{prob\.homeProb\}%[\ufffd]\$\{t\('basedOnOdds'\)\}[\ufffd]/g, "${t('winRate')}：${prob.homeProb}%（${t('basedOnOdds')}）");
content = content.replace(/\$\{t\('drawProbability'\)\}[\ufffd]\$\{prob\.drawProb\}%/g, "${t('drawProbability')}：${prob.drawProb}%");
content = content.replace(/\$\{t\('winRate'\)\}[\ufffd]\$\{prob\.awayProb\}%/g, "${t('winRate')}：${prob.awayProb}%");

// Fix analysis spans
content = content.replace(/<span style="color:#4ade80">[\ufffd]<\/span> \$\{t\('homeTeam'\)\}/g, "<span style=\"color:#4ade80\">●</span> ${t('homeTeam')}");
content = content.replace(/<span style="color:#6e7681">[\ufffd]<\/span> \$\{t\('draw'\)\}/g, "<span style=\"color:#6e7681\">●</span> ${t('draw')}");
content = content.replace(/<span style="color:#ef4444">[\ufffd]<\/span> \$\{t\('awayTeam'\)\}/g, "<span style=\"color:#ef4444\">●</span> ${t('awayTeam')}");

// Fix apiQuota fallback strings
content = content.replace(/'API额度已用完，请等待下月重[\ufffd]'\}/g, "'API额度已用完，请等待下月重置'}");
content = content.replace(/'免费版每[\ufffd]00次请[\ufffd]'\}/g, "'免费版每月500次请求'}");
content = content.replace(/'点击上方联赛名加载赔率数[\ufffd]'\}/g, "'点击上方联赛名加载赔率数据'}");

// Fix Combo 2/3 comments
content = content.replace(/\/\/ Same-sport 2[\ufffd]/g, "// Same-sport 2-way");
content = content.replace(/\/\/ 3[\ufffd]/g, "// 3-way");

// Fix Russian aboutP1 (truncated)
content = content.replace(/aboutP1: 'SportPredict [\ufffd]профессиональная платформа анализа спортивных данных[^']*'/g, "aboutP1: 'SportPredict — профессиональная платформа анализа спортивных данных, предназначенная для предоставления статистики событий и вероятностного анализа для любителей спорта по всему миру.'");
content = content.replace(/aboutP2: 'Наша миссия [\ufffd]помочь пользователям понять рыночные вероятности[^']*'/g, "aboutP2: 'Наша миссия — помочь пользователям понять рыночные вероятности и статистические тенденции в спортивных событиях посредством прозрачной визуализации данных. Весь анализ основан на открытых рыночных данных с использованием математических моделей.'");
content = content.replace(/footerDisclaimer: '⚠️ SportPredict [\ufffd]платформа анализа спортивных данных[^']*'/g, "footerDisclaimer: '⚠️ SportPredict — платформа анализа спортивных данных, не предоставляющая букмекерские услуги и не взимающая плату. Все данные для справки.'");

// Write the fixed content using Node's writeFileSync (proper UTF-8)
fs.writeFileSync(path, content, 'utf8');

// Count remaining U+FFFD characters
const remaining = (content.match(/\ufffd/g) || []).length;
console.log('Remaining U+FFFD characters:', remaining);
