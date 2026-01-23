import { LanguageCode, Question, Translation } from './types';

export const LANGUAGES: { code: LanguageCode; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

export const TRANSLATIONS: Record<LanguageCode, Translation> = {
  en: {
    title: "What is your political alignment?",
    start: "Start Analysis",
    next: "Next",
    back: "Back",
    analyzing: "Analyzing your worldview...",
    resultsTitle: "Your Political Alignment",
    economicAxis: "Economic Axis",
    socialAxis: "Social Axis",
    left: "Left",
    right: "Right",
    libertarian: "Libertarian",
    authoritarian: "Authoritarian",
    geminiAnalysis: "AI Insight",
    restart: "Start Over",
    agreeStrongly: "Strongly Agree",
    agree: "Agree",
    neutral: "Neutral",
    disagree: "Disagree",
    disagreeStrongly: "Strongly Disagree",
    questionCount: "Question",
    download: "Save Image",
    share: "Share",
    copied: "Link Copied!",
  },
  es: {
    title: "¿Cuál es tu alineación política?",
    start: "Comenzar Análisis",
    next: "Siguiente",
    back: "Atrás",
    analyzing: "Analizando tu visión del mundo...",
    resultsTitle: "Tu Alineación Política",
    economicAxis: "Eje Económico",
    socialAxis: "Eje Social",
    left: "Izquierda",
    right: "Derecha",
    libertarian: "Libertario",
    authoritarian: "Autoritario",
    geminiAnalysis: "Perspectiva de IA",
    restart: "Reiniciar",
    agreeStrongly: "Muy de acuerdo",
    agree: "De acuerdo",
    neutral: "Neutral",
    disagree: "En desacuerdo",
    disagreeStrongly: "Muy en desacuerdo",
    questionCount: "Pregunta",
    download: "Guardar Imagen",
    share: "Compartir",
    copied: "¡Enlace Copiado!",
  },
  fr: {
    title: "Quel est votre alignement politique ?",
    start: "Commencer l'analyse",
    next: "Suivant",
    back: "Retour",
    analyzing: "Analyse de votre vision...",
    resultsTitle: "Votre Alignement Politique",
    economicAxis: "Axe Économique",
    socialAxis: "Axe Social",
    left: "Gauche",
    right: "Droite",
    libertarian: "Libertaire",
    authoritarian: "Autoritaire",
    geminiAnalysis: "Analyse IA",
    restart: "Recommencer",
    agreeStrongly: "Tout à fait d'accord",
    agree: "D'accord",
    neutral: "Neutre",
    disagree: "Pas d'accord",
    disagreeStrongly: "Pas du tout d'accord",
    questionCount: "Question",
    download: "Sauvegarder",
    share: "Partager",
    copied: "Lien Copié !",
  },
  ko: {
    title: "당신의 정치 성향은?",
    start: "분석 시작하기",
    next: "다음",
    back: "이전",
    analyzing: "당신의 가치관을 분석 중입니다...",
    resultsTitle: "당신의 정치적 성향",
    economicAxis: "경제적 축",
    socialAxis: "사회적 축",
    left: "좌파",
    right: "우파",
    libertarian: "자유주의",
    authoritarian: "권위주의",
    geminiAnalysis: "AI 분석 결과",
    restart: "다시 시작하기",
    agreeStrongly: "매우 동의함",
    agree: "동의함",
    neutral: "중립",
    disagree: "동의하지 않음",
    disagreeStrongly: "전혀 동의하지 않음",
    questionCount: "질문",
    download: "이미지 저장",
    share: "공유하기",
    copied: "링크 복사됨!",
  },
  ja: {
    title: "あなたの政治的立ち位置は？",
    start: "分析を開始",
    next: "次へ",
    back: "戻る",
    analyzing: "あなたの世界観を分析中...",
    resultsTitle: "あなたの政治的立ち位置",
    economicAxis: "経済軸",
    socialAxis: "社会軸",
    left: "左派",
    right: "右派",
    libertarian: "リバタリアン",
    authoritarian: "権威主義",
    geminiAnalysis: "AI インサイト",
    restart: "やり直す",
    agreeStrongly: "強く同意する",
    agree: "同意する",
    neutral: "中立",
    disagree: "同意しない",
    disagreeStrongly: "全く同意しない",
    questionCount: "質問",
    download: "画像を保存",
    share: "共有",
    copied: "コピーしました！",
  },
};

export const QUESTIONS: Question[] = [
  // ECONOMIC (Left vs Right)
  {
    id: 1,
    category: 'economic',
    multiplier: -1, // Left
    text: {
      en: "The government should regulate major industries to ensure fair practices.",
      es: "El gobierno debería regular las grandes industrias para garantizar prácticas justas.",
      fr: "Le gouvernement devrait réguler les grandes industries pour garantir des pratiques équitables.",
      ko: "정부는 공정한 관행을 보장하기 위해 주요 산업을 규제해야 합니다.",
      ja: "政府は公正な慣行を確保するために主要産業を規制すべきである。"
    }
  },
  {
    id: 2,
    category: 'economic',
    multiplier: 1, // Right
    text: {
      en: "A freer market without government interference leads to better economic outcomes.",
      es: "Un mercado más libre sin interferencia gubernamental conduce a mejores resultados económicos.",
      fr: "Un marché plus libre sans ingérence gouvernementale conduit à de meilleurs résultats économiques.",
      ko: "정부 간섭 없는 자유로운 시장이 더 나은 경제적 결과를 가져옵니다.",
      ja: "政府の干渉のない自由市場は、より良い経済的成果をもたらす。"
    }
  },
  {
    id: 3,
    category: 'economic',
    multiplier: -1, // Left
    text: {
      en: "Wealthy individuals should be taxed at a significantly higher rate.",
      es: "Las personas ricas deberían pagar impuestos a una tasa significativamente más alta.",
      fr: "Les personas riches devraient être imposées à un taux nettement plus élevé.",
      ko: "부유한 개인은 훨씬 더 높은 세율로 세금을 내야 합니다.",
      ja: "富裕層はかなり高い税率で課税されるべきである。"
    }
  },
  {
    id: 4,
    category: 'economic',
    multiplier: 1, // Right
    text: {
      en: "Private charity is more effective than government welfare programs.",
      es: "La caridad privada es más efectiva que los programas de bienestar del gobierno.",
      fr: "La charité privée est plus efficace que les programmes sociaux gouvernementaux.",
      ko: "민간 자선단체가 정부의 복지 프로그램보다 더 효과적입니다.",
      ja: "民間の慈善活動は政府の福祉プログラムよりも効果的である。"
    }
  },
  {
    id: 5,
    category: 'economic',
    multiplier: -1, // Left
    text: {
      en: "Essential services like healthcare and water should not be privatized.",
      es: "Los servicios esenciales como la salud y el agua no deberían ser privatizados.",
      fr: "Les services essentiels comme la santé et l'eau ne devraient pas être privatisés.",
      ko: "의료 및 수도와 같은 필수 서비스는 민영화되어서는 안 됩니다.",
      ja: "医療や水などの必要不可欠なサービスは民営化されるべきではない。"
    }
  },
  {
    id: 6,
    category: 'economic',
    multiplier: 1, // Right
    text: {
      en: "Labor unions often do more harm than good to the economy.",
      es: "Los sindicatos a menudo hacen más daño que bien a la economía.",
      fr: "Les syndicats font souvent plus de mal que de bien à l'économie.",
      ko: "노동조합은 종종 경제에 득보다 실이 됩니다.",
      ja: "労働組合はしばしば経済に利益よりも害をもたらす。"
    }
  },
  {
    id: 7,
    category: 'economic',
    multiplier: -1, // Left
    text: {
      en: "From each according to their ability, to each according to their needs.",
      es: "De cada cual según sus capacidades, a cada cual según sus necesidades.",
      fr: "De chacun selon ses capacités, à chacun selon ses besoins.",
      ko: "능력에 따라 일하고 필요에 따라 분배받아야 합니다.",
      ja: "能力に応じて働き、必要に応じて受け取るべきだ。"
    }
  },
  {
    id: 8,
    category: 'economic',
    multiplier: 1, // Right
    text: {
      en: "Competition is the driving force of progress.",
      es: "La competencia es la fuerza impulsora del progreso.",
      fr: "La concurrence est le moteur du progrès.",
      ko: "경쟁은 발전의 원동력입니다.",
      ja: "競争は進歩の原動力である。"
    }
  },
  {
    id: 9,
    category: 'economic',
    multiplier: -1, // Left
    text: {
      en: "The rich are too rich, and the poor are too poor.",
      es: "Los ricos son demasiado ricos y los pobres son demasiado pobres.",
      fr: "Les riches sont trop riches et les pauvres sont trop pauvres.",
      ko: "부자는 너무 부유하고 가난한 사람은 너무 가난합니다.",
      ja: "金持ちは金を持ちすぎており、貧乏人は貧しすぎる。"
    }
  },
  {
    id: 10,
    category: 'economic',
    multiplier: 1, // Right
    text: {
      en: "Land ownership should be a commodity to be bought and sold.",
      es: "La propiedad de la tierra debe ser una mercancía para comprar y vender.",
      fr: "La propiedad foncière doit être une marchandise à acheter et à vendre.",
      ko: "토지 소유권은 사고팔 수 있는 상품이어야 합니다.",
      ja: "土地所有権は売買される商品であるべきだ。"
    }
  },

  // SOCIAL (Libertarian vs Authoritarian)
  {
    id: 11,
    category: 'social',
    multiplier: 1, // Auth
    text: {
      en: "A strong military is necessary to defend our national interests.",
      es: "Un ejército fuerte es necesario para defender nuestros intereses nacionales.",
      fr: "Une armée forte est nécessaire pour défendre nos intérêts nationaux.",
      ko: "국익을 수호하기 위해서는 강력한 군대가 필요합니다.",
      ja: "国益を守るためには強力な軍隊が必要である。"
    }
  },
  {
    id: 12,
    category: 'social',
    multiplier: -1, // Lib
    text: {
      en: "What consenting adults do in their bedroom is none of the government's business.",
      es: "Lo que hacen los adultos con consentimiento en su dormitorio no es asunto del gobierno.",
      fr: "Ce que font les adultes consentants dans leur chambre ne regarde pas le gouvernement.",
      ko: "합의된 성인이 침실에서 하는 일은 정부가 관여할 일이 아닙니다.",
      ja: "合意の上で大人が寝室で行うことは政府の関知することではない。"
    }
  },
  {
    id: 13,
    category: 'social',
    multiplier: 1, // Auth
    text: {
      en: "Traditional values must be upheld to maintain social order.",
      es: "Los valores tradicionales deben mantenerse para preservar el orden social.",
      fr: "Les valeurs traditionnelles doivent être maintenues pour préserver l'ordre social.",
      ko: "사회 질서를 유지하기 위해 전통적 가치를 지켜야 합니다.",
      ja: "社会秩序を維持するためには伝統的な価値観を守らなければならない。"
    }
  },
  {
    id: 14,
    category: 'social',
    multiplier: -1, // Lib
    text: {
      en: "People should be free to migrate and live wherever they want.",
      es: "Las personas deberían ser libres de migrar y vivir donde quieran.",
      fr: "Les gens devraient être libres de migrer et de vivre où ils veulent.",
      ko: "사람들은 원하는 곳으로 자유롭게 이주하고 살 수 있어야 합니다.",
      ja: "人々は自由に移動し、好きな場所に住むことができるべきだ。"
    }
  },
  {
    id: 15,
    category: 'social',
    multiplier: 1, // Auth
    text: {
      en: "Criminals require punishment more than rehabilitation.",
      es: "Los delincuentes requieren castigo más que rehabilitación.",
      fr: "Les criminels ont besoin de punition plus que de réhabilitation.",
      ko: "범죄자에게는 교화보다 처벌이 더 필요합니다.",
      ja: "犯罪者には更生よりも罰が必要である。"
    }
  },
  {
    id: 16,
    category: 'social',
    multiplier: -1, // Lib
    text: {
      en: "No authority should be above question.",
      es: "Ninguna autoridad debe estar por encima de los cuestionamientos.",
      fr: "Aucune autorité ne devrait être au-dessus de toute remise en question.",
      ko: "어떤 권위도 의문을 제기할 수 없는 성역이 되어서는 안 됩니다.",
      ja: "いかなる権威も疑問の余地がないものであってはならない。"
    }
  },
  {
    id: 17,
    category: 'social',
    multiplier: 1, // Auth
    text: {
      en: "Surveillance of citizens is necessary for safety.",
      es: "La vigilancia de los ciudadanos es necesaria para la seguridad.",
      fr: "La surveillance des citoyens est nécessaire pour la sécurité.",
      ko: "안전을 위해서는 시민에 대한 감시가 필요합니다.",
      ja: "安全のためには市民の監視が必要である。"
    }
  },
  {
    id: 18,
    category: 'social',
    multiplier: -1, // Lib
    text: {
      en: "The possession of drugs for personal use should be decriminalized.",
      es: "La posesión de drogas para uso personal debería ser despenalizada.",
      fr: "La possession de drogues pour usage personnel devrait être dépénalisée.",
      ko: "개인적 사용을 위한 마약 소지는 비범죄화되어야 합니다.",
      ja: "個人的な使用のための薬物所持は非犯罪化されるべきである。"
    }
  },
  {
    id: 19,
    category: 'social',
    multiplier: 1, // Auth
    text: {
      en: "Patriotism and loyalty to the state are primary virtues.",
      es: "El patriotismo y la lealtad al estado son virtudes primordiales.",
      fr: "Le patriotisme et la loyauté envers l'État sont des vertus primordiales.",
      ko: "애국심과 국가에 대한 충성심은 주된 미덕입니다.",
      ja: "愛国心と国家への忠誠は主要な美徳である。"
    }
  },
  {
    id: 20,
    category: 'social',
    multiplier: -1, // Lib
    text: {
      en: "Art should not be censored, even if it is offensive.",
      es: "El arte no debe ser censurado, incluso si es ofensivo.",
      fr: "L'art ne doit pas être censuré, même s'il est offensant.",
      ko: "예술은 불쾌감을 주더라도 검열되어서는 안 됩니다.",
      ja: "芸術は、たとえ不快なものであっても検閲されるべきではない。"
    }
  }
];