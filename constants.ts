import { LanguageCode, Question, Translation, QuadrantInfo, PoliticalFigure } from './types';

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
    analyzing: "Matching ideology...",
    resultsTitle: "Your Political Alignment",
    economicAxis: "Economic Axis",
    socialAxis: "Social Axis",
    left: "Left",
    right: "Right",
    libertarian: "Libertarian",
    authoritarian: "Authoritarian",
    geminiAnalysis: "Ideology Analysis",
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
    ideologies: "Ideologies",
    close: "Close",
    // Board
    boardTitle: "Board",
    newPost: "New Post",
    createPost: "Create a Post",
    postTitlePlaceholder: "Title",
    postContentPlaceholder: "Share your thoughts...",
    authorPlaceholder: "Your Name (Optional)",
    submit: "Post",
    cancel: "Cancel",
    comments: "Comments",
    addComment: "Add a comment...",
    noPosts: "No posts yet. Be the first to share!",
    readMore: "Read More",
    board: "Board",
    communityTab: "Community",
    guideTab: "Ideology Guide",
    // Legal
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    ugcWarning: "Please respect others. Hate speech, spam, or inappropriate content will be removed in accordance with our policies."
  },
  es: {
    title: "¿Cuál es tu alineación política?",
    start: "Comenzar Análisis",
    next: "Siguiente",
    back: "Atrás",
    analyzing: "Analizando...",
    resultsTitle: "Tu Alineación Política",
    economicAxis: "Eje Económico",
    socialAxis: "Eje Social",
    left: "Izquierda",
    right: "Derecha",
    libertarian: "Libertario",
    authoritarian: "Autoritario",
    geminiAnalysis: "Análisis de Ideología",
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
    ideologies: "Ideologías",
    close: "Cerrar",
    // Board
    boardTitle: "Foro",
    newPost: "Nueva Publicación",
    createPost: "Crear Publicación",
    postTitlePlaceholder: "Título",
    postContentPlaceholder: "Comparte tus pensamientos...",
    authorPlaceholder: "Tu Nombre (Opcional)",
    submit: "Publicar",
    cancel: "Cancelar",
    comments: "Comentarios",
    addComment: "Añadir un comentario...",
    noPosts: "No hay publicaciones. ¡Sé el primero!",
    readMore: "Leer más",
    board: "Foro",
    communityTab: "Comunidad",
    guideTab: "Guía Ideológica",
    // Legal
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    ugcWarning: "Por favor respeta a los demás. El discurso de odio o contenido inapropiado será eliminado."
  },
  fr: {
    title: "Quel est votre alignement politique ?",
    start: "Commencer l'analyse",
    next: "Suivant",
    back: "Retour",
    analyzing: "Analyse...",
    resultsTitle: "Votre Alignement Politique",
    economicAxis: "Axe Économique",
    socialAxis: "Axe Social",
    left: "Gauche",
    right: "Droite",
    libertarian: "Libertaire",
    authoritarian: "Autoritaire",
    geminiAnalysis: "Analyse Idéologique",
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
    ideologies: "Idéologies",
    close: "Fermer",
    // Board
    boardTitle: "Forum",
    newPost: "Nouveau Post",
    createPost: "Créer un Post",
    postTitlePlaceholder: "Titre",
    postContentPlaceholder: "Partagez vos pensées...",
    authorPlaceholder: "Votre Nom (Optionnel)",
    submit: "Publier",
    cancel: "Annuler",
    comments: "Commentaires",
    addComment: "Ajouter un commentaire...",
    noPosts: "Aucun post. Soyez le premier !",
    readMore: "Lire la suite",
    board: "Forum",
    communityTab: "Communauté",
    guideTab: "Guide Idéologique",
    // Legal
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    ugcWarning: "Veuillez respecter les autres. Les discours haineux ou les contenus inappropriés seront supprimés."
  },
  ko: {
    title: "당신의 정치 성향은?",
    start: "분석 시작하기",
    next: "다음",
    back: "이전",
    analyzing: "성향 분석 중...",
    resultsTitle: "당신의 정치적 성향",
    economicAxis: "경제적 축",
    socialAxis: "사회적 축",
    left: "좌파",
    right: "우파",
    libertarian: "자유주의",
    authoritarian: "권위주의",
    geminiAnalysis: "이념 상세 분석",
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
    ideologies: "정치 이념 백과",
    close: "닫기",
    // Board
    boardTitle: "게시판",
    newPost: "글쓰기",
    createPost: "새 글 작성",
    postTitlePlaceholder: "제목",
    postContentPlaceholder: "내용을 입력하세요...",
    authorPlaceholder: "작성자 (선택)",
    submit: "등록",
    cancel: "취소",
    comments: "댓글",
    addComment: "댓글을 남겨주세요...",
    noPosts: "아직 게시글이 없습니다. 첫 번째 글을 남겨보세요!",
    readMore: "더 보기",
    board: "게시판",
    communityTab: "커뮤니티",
    guideTab: "이념 가이드",
    // Legal
    privacyPolicy: "개인정보처리방침",
    termsOfService: "이용약관",
    ugcWarning: "타인을 존중해주세요. 욕설, 비방, 스팸 및 부적절한 콘텐츠는 정책에 따라 삭제될 수 있습니다."
  },
  ja: {
    title: "あなたの政治的立ち位置は？",
    start: "分析を開始",
    next: "次へ",
    back: "戻る",
    analyzing: "分析中...",
    resultsTitle: "あなたの政治的立ち位置",
    economicAxis: "経済軸",
    socialAxis: "社会軸",
    left: "左派",
    right: "右派",
    libertarian: "リバタリアン",
    authoritarian: "権威主義",
    geminiAnalysis: "イデオロギー分析",
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
    ideologies: "政治イデオロギー",
    close: "閉じる",
    // Board
    boardTitle: "掲示板",
    newPost: "新規投稿",
    createPost: "投稿を作成",
    postTitlePlaceholder: "タイトル",
    postContentPlaceholder: "考えを共有しましょう...",
    authorPlaceholder: "お名前 (任意)",
    submit: "投稿",
    cancel: "キャンセル",
    comments: "コメント",
    addComment: "コメントを追加...",
    noPosts: "まだ投稿がありません。最初の投稿者になりましょう！",
    readMore: "続きを読む",
    board: "掲示板",
    communityTab: "コミュニティ",
    guideTab: "イデオロギーガイド",
    // Legal
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    ugcWarning: "他人を尊重してください。ヘイトスピーチや不適切なコンテンツは削除されます。"
  },
};

export const QUESTIONS: Question[] = [
  // --- Economic Axis: Left (Equality) vs. Right (Market) ---
  {
    id: 1,
    category: 'economic',
    multiplier: -1, // Agree = Left (Socialism)
    text: {
      en: "Access to healthcare is a fundamental human right that the state must provide free at the point of use, regardless of the cost to the taxpayer or efficiency.",
      es: "El acceso a la atención médica es un derecho humano fundamental que el estado debe proporcionar de forma gratuita, independientemente del costo.",
      fr: "L'accès aux soins de santé est un droit humain fondamental que l'État doit fournir gratuitement, quel que soit le coût.",
      ko: "의료 접근권은 비용이나 효율성과 관계없이 국가가 무료로 제공해야 하는 기본 인권입니다.",
      ja: "医療へのアクセスは基本的な人権であり、コストに関係なく国家が無料で提供しなければならない。"
    }
  },
  {
    id: 2,
    category: 'economic',
    multiplier: -1, // Agree = Left (Public Ownership)
    text: {
      en: "Major utility companies (water, energy, rail) should be brought into public ownership because the profit motive in these sectors harms the consumer.",
      es: "Las principales empresas de servicios públicos deben ser de propiedad pública porque el afán de lucro perjudica al consumidor.",
      fr: "Les grandes entreprises de services publics devraient être propriété publique car la recherche de profit nuit au consommateur.",
      ko: "수도, 에너지, 철도 같은 주요 공공 서비스는 이윤 추구가 소비자에게 해를 끼치므로 국유화해야 합니다.",
      ja: "主要な公益事業会社（水、エネルギー、鉄道）は、利益追求が消費者に害を及ぼすため、公的所有にするべきである。"
    }
  },
  {
    id: 3,
    category: 'economic',
    multiplier: -1, // Agree = Left (Redistribution)
    text: {
      en: "The government should heavily tax inherited wealth (inheritance tax) because allowing wealth to accumulate across generations creates an unfair playing field.",
      es: "El gobierno debería gravar fuertemente la riqueza heredada para evitar una acumulación injusta.",
      fr: "Le gouvernement devrait taxer lourdement la richesse héritée car son accumulation crée une inégalité des chances.",
      ko: "부는 세대를 거쳐 축적되면 불공정한 출발선을 만들기 때문에, 정부는 상속 재산에 대해 중과세해야 합니다.",
      ja: "富が世代を超えて蓄積されることは不公平を生むため、政府は相続財産に重税を課すべきである。"
    }
  },
  {
    id: 4,
    category: 'economic',
    multiplier: 1, // Agree = Right (Market Darwinism/Laissez-faire)
    text: {
      en: "If a large corporation or bank is failing due to poor management, the government should let it go bankrupt rather than bailing it out with public money.",
      es: "Si una gran corporación falla, el gobierno debería dejarla quebrar en lugar de rescatarla.",
      fr: "Si une grande entreprise échoue, le gouvernement devrait la laisser faire faillite plutôt que de la renflouer.",
      ko: "대기업이나 은행이 경영 부실로 실패하면, 공적 자금으로 구제하기보다는 파산하도록 내버려 두어야 합니다.",
      ja: "大企業や銀行が経営不振で破綻しそうな場合、政府は公的資金で救済するのではなく、破産させるべきである。"
    }
  },
  {
    id: 5,
    category: 'economic',
    multiplier: 1, // Agree = Right (Friedman Doctrine)
    text: {
      en: "The only social responsibility of a corporation is to increase its profits within the bounds of the law; expecting them to solve social issues is inefficient.",
      es: "La única responsabilidad social de una corporación es aumentar sus ganancias dentro de la ley.",
      fr: "La seule responsabilité sociale d'une entreprise est d'augmenter ses profits dans le respect de la loi.",
      ko: "기업의 유일한 사회적 책임은 법의 테두리 안에서 이익을 늘리는 것이며, 사회 문제 해결을 기대하는 것은 비효율적입니다.",
      ja: "企業の唯一の社会的責任は法の範囲内で利益を増やすことであり、社会問題の解決を期待するのは非効率的である。"
    }
  },
  // --- Social Axis: Authoritarian (Order) vs. Libertarian (Freedom) ---
  {
    id: 6,
    category: 'social',
    multiplier: 1, // Agree = Auth (Security)
    text: {
      en: "To combat terrorism and serious crime, the state should have the right to access private digital communications without a warrant.",
      es: "Para combatir el terrorismo, el estado debe tener derecho a acceder a las comunicaciones privadas sin orden judicial.",
      fr: "Pour combattre le terrorisme, l'État devrait avoir le droit d'accéder aux communications privées sans mandat.",
      ko: "테러와 중범죄에 맞서기 위해, 국가는 영장 없이 개인의 디지털 통신에 접근할 권리가 있어야 합니다.",
      ja: "テロや重犯罪と戦うために、国家は令状なしで個人のデジタル通信にアクセスする権利を持つべきである。"
    }
  },
  {
    id: 7,
    category: 'social',
    multiplier: 1, // Agree = Auth/Tradition
    text: {
      en: "Traditional family values are the bedrock of society, and the government has a duty to actively promote them in education and media.",
      es: "Los valores familiares tradicionales son la base de la sociedad y el gobierno debe promoverlos activamente.",
      fr: "Les valeurs familiales traditionnelles sont le fondement de la société et le gouvernement doit les promouvoir.",
      ko: "전통적인 가족 가치는 사회의 기반이며, 정부는 교육과 미디어를 통해 이를 적극적으로 장려해야 할 의무가 있습니다.",
      ja: "伝統的な家族の価値観は社会の基盤であり、政府は教育やメディアでそれを積極的に推進する義務がある。"
    }
  },
  {
    id: 8,
    category: 'social',
    multiplier: -1, // Agree = Lib (Personal Freedom)
    text: {
      en: "Consenting adults should be free to engage in whatever lifestyle or drug use they choose, provided they do not physically harm others.",
      es: "Los adultos deben ser libres de elegir su estilo de vida o uso de drogas siempre que no dañen a otros.",
      fr: "Les adultes consentants devraient être libres de choisir leur mode de vie, tant qu'ils ne nuisent pas aux autres.",
      ko: "합의한 성인은 타인에게 신체적 해를 끼치지 않는 한, 어떤 생활 방식이나 약물 사용이든 자유롭게 선택할 수 있어야 합니다.",
      ja: "合意した成人は、他人に物理的な害を与えない限り、どのようなライフスタイルや薬物使用も自由に選択できるべきである。"
    }
  },
  {
    id: 9,
    category: 'social',
    multiplier: 1, // Agree = Auth (Punishment)
    text: {
      en: "The primary purpose of the prison system should be punishment and deterrence rather than rehabilitation.",
      es: "El objetivo principal del sistema penitenciario debe ser el castigo y la disuasión, no la rehabilitación.",
      fr: "Le but principal du système carcéral devrait être la punition et la dissuasion plutôt que la réhabilitation.",
      ko: "교도소 시스템의 주된 목적은 교화보다는 처벌과 범죄 억제에 있어야 합니다.",
      ja: "刑務所制度の主な目的は、更生よりも処罰と抑止にあるべきである。"
    }
  },
  {
    id: 10,
    category: 'social',
    multiplier: 1, // Agree = Auth (State Power)
    text: {
      en: "In times of national crisis or pandemic, it is acceptable for the government to temporarily suspend democratic processes and civil liberties to ensure stability.",
      es: "En tiempos de crisis nacional, es aceptable que el gobierno suspenda temporalmente las libertades civiles.",
      fr: "En temps de crise, il est acceptable que le gouvernement suspende temporairement les libertés civiles.",
      ko: "국가적 위기나 전염병 유행 시, 안정을 위해 정부가 민주적 절차와 시민의 자유를 일시적으로 제한하는 것은 용인될 수 있습니다.",
      ja: "国家的危機やパンデミックの際、安定を確保するために政府が民主的手続きや市民の自由を一時的に停止することは容認される。"
    }
  },
  // --- Foreign Policy & Nation (Mapped to Social/Auth) ---
  {
    id: 11,
    category: 'social',
    multiplier: 1, // Agree = Auth/Nationalism
    text: {
      en: "Our nation is superior to others, and we must prioritise our national interests above international cooperation, treaties, or global human rights.",
      es: "Nuestra nación es superior y debemos priorizar nuestros intereses nacionales sobre la cooperación internacional.",
      fr: "Notre nation est supérieure et nous devons prioriser nos intérêts nationaux sur la coopération internationale.",
      ko: "우리 국가는 타국보다 우월하며, 국제 협력이나 조약, 보편적 인권보다 국익을 최우선시해야 합니다.",
      ja: "わが国は他国より優れており、国際協力や条約、世界的な人権よりも国益を優先しなければならない。"
    }
  },
  {
    id: 12,
    category: 'social',
    multiplier: 1, // Agree = Interventionism (Usually Auth)
    text: {
      en: "It is legitimate for powerful nations to intervene militarily in other countries to stop dictators from committing human rights abuses.",
      es: "Es legítimo que las naciones poderosas intervengan militarmente para detener abusos de derechos humanos.",
      fr: "Il est légitime que les nations puissantes interviennent militairement pour arrêter les violations des droits de l'homme.",
      ko: "강대국이 독재자의 인권 유린을 막기 위해 타국에 군사적으로 개입하는 것은 정당합니다.",
      ja: "独裁者による人権侵害を阻止するために、大国が他国に軍事介入することは正当である。"
    }
  },
  {
    id: 13,
    category: 'social',
    multiplier: 1, // Agree = Nativist/Auth
    text: {
      en: "Multiculturalism has failed; a society functions best when there is a strong, unified cultural and ethnic identity.",
      es: "El multiculturalismo ha fallado; una sociedad funciona mejor con una identidad cultural unificada.",
      fr: "Le multiculturalisme a échoué ; une société fonctionne mieux avec une identité culturelle unifiée.",
      ko: "다문화주의는 실패했습니다. 사회는 강력하고 통일된 문화적, 민족적 정체성이 있을 때 가장 잘 기능합니다.",
      ja: "多文化主義は失敗した。社会は、強力で統一された文化的・民族的アイデンティティがあるときに最もよく機能する。"
    }
  },
  // --- The Role of the State ---
  {
    id: 14,
    category: 'economic',
    multiplier: 1, // Agree = Right (Individual Responsibility)
    text: {
      en: "People who refuse to work when they are physically able should not expect any financial support from society.",
      es: "Las personas que se niegan a trabajar no deberían esperar apoyo financiero de la sociedad.",
      fr: "Les personnes qui refusent de travailler ne devraient pas attendre de soutien financier de la société.",
      ko: "신체적으로 일할 수 있음에도 일하지 않는 사람은 사회로부터 어떤 경제적 지원도 기대해서는 안 됩니다.",
      ja: "身体的に可能であるにもかかわらず働くことを拒否する人々は、社会からの経済的支援を期待すべきではない。"
    }
  },
  {
    id: 15,
    category: 'social',
    multiplier: -1, // Agree = Lib (Anarchism)
    text: {
      en: "The ultimate goal of political evolution should be the abolition of the state, as it is inherently an instrument of oppression.",
      es: "El objetivo final de la evolución política debería ser la abolición del estado.",
      fr: "Le but ultime de l'évolution politique devrait être l'abolition de l'État.",
      ko: "정치적 진화의 궁극적인 목표는 국가의 철폐여야 합니다. 국가는 본질적으로 억압의 도구이기 때문입니다.",
      ja: "国家は本質的に抑圧の道具であるため、政治的進化の最終目標は国家の廃止であるべきだ。"
    }
  }
];

// Ideology Encyclopedia Data with Coordinates
const IDEOLOGIES_EN: QuadrantInfo[] = [
  {
    name: "Authoritarian Left",
    description: "Supports strong state intervention to achieve economic equality and prioritises community discipline over individual freedom.",
    items: [
      {
        name: "Marxism-Leninism",
        coords: { x: -10, y: 8 },
        definition: "An ideology adapted by Lenin from Imperial-era Marxism to fit the reality of Russia.",
        explanation: "It argues that instead of waiting for capitalism to collapse on its own, a select group of elite revolutionaries, the 'Vanguard Party (Communist Party)', must lead the workers to incite a revolution. It asserts that a period of 'dictatorship of the proletariat' is necessary after the revolution to prevent a counter-attack by the capitalist class, during which strong state control and a planned economy are implemented.",
        figures: "Vladimir Lenin, Ho Chi Minh",
        keywords: "Vanguard party, Centralisation, Planned economy, Democratic centralism"
      },
      {
        name: "Stalinism / Maoism",
        coords: { x: -9, y: 9.5 },
        definition: "A more extreme form of Marxism-Leninism combined with the specific governing philosophy of a leader.",
        explanation: "Stalinism: Promoted 'Socialism in One Country', focusing on internal industrialisation and strengthening national defence within the Soviet Union. Characterised by harsh purges of political opponents, information control, and a cult of personality. Maoism: Reflecting the reality of China as an agrarian nation, it viewed 'peasants' rather than urban workers as the main agents of revolution. Emphasised continuous internal struggle (such as the Cultural Revolution).",
        figures: "Joseph Stalin, Mao Zedong, Pol Pot",
        keywords: "Cult of personality, Great Purge, Rural encircling cities, Permanent revolution"
      },
      {
        name: "Religious Socialism",
        coords: { x: -6, y: 4 },
        definition: "An ideology that seeks a socialist economic system based on the doctrines of a specific religion.",
        explanation: "It interprets religious teachings, such as 'It is easier for a camel to go through the eye of a needle than for a rich man to enter the kingdom of God', in a socio-structural context. It regards capitalist greed as sinful and advocates for distribution and welfare for the poor in accordance with God's will. 'Liberation Theology' in Latin America is a representative example.",
        figures: "Gustavo Gutiérrez, Dorothy Day",
        keywords: "Liberation theology, Christian socialism, Buddhist socialism"
      },
      {
        name: "State Socialism",
        coords: { x: -5, y: 6 },
        definition: "A system where the state owns the means of production and leads the economy, but differs from revolutionary communism.",
        explanation: "It believes that leaving the economy to capitalists leads to inequality and inefficiency, so the state should manage industries acting like a massive corporation. As seen in Bismarck's social policies or the early ideas of the Fabian Society, it tends to seek improvement in workers' lives through top-down reform.",
        figures: "Otto von Bismarck, Ferdinand Lassalle",
        keywords: "Nationalisation, Bureaucracy-led, Top-down reform"
      }
    ]
  },
  {
    name: "Authoritarian Right",
    description: "Supports a market economy and private property, but the state strongly controls society for national security, tradition, and moral order.",
    items: [
      {
        name: "Absolute Monarchy",
        coords: { x: 5, y: 9 },
        definition: "A pre-modern form of government where a monarch monopolises all legislative, judicial, and executive powers.",
        explanation: "Based on the 'Divine Right of Kings', asserting that the right to rule is granted by God. The will of the monarch is law, unbound by parliament or constitution. While classified as dictatorship from a modern democratic perspective, historically it played a role in quelling feudal chaos and creating centralised states.",
        figures: "Louis XIV, Thomas Hobbes",
        keywords: "Divine right of kings, Loyalty, Class society"
      },
      {
        name: "Fascism / Nazism",
        coords: { x: 2, y: 9.5 },
        definition: "An ideology combining extreme nationalism and totalitarianism, viewing the state as a living organism and individuals as its components.",
        explanation: "It defines the pluralism of democracy as 'division' and loathes it. Believes a strong single dictator must unite the nation and persecutes external enemies or specific races (e.g., Jews) to solidify internal unity. War and violence are sometimes glorified as means of purification.",
        figures: "Benito Mussolini, Adolf Hitler",
        keywords: "Totalitarianism, Ultranationalism, Anti-communism, Racism (Nazism)"
      },
      {
        name: "Neoconservatism",
        coords: { x: 6, y: 5 },
        definition: "A modern right-wing ideology in the United States that does not hesitate to use force (military power) to preserve liberal values.",
        explanation: "Often formed by former left-wing activists converting to conservatism. Believes in active intervention (including war) in the international community for national interests and the spread of democracy. Economically supports a market economy but prefers a 'strong government' over a small one.",
        figures: "George W. Bush, Leo Strauss",
        keywords: "Peace through strength, Interventionism, Moral absolutism"
      },
      {
        name: "Theocracy",
        coords: { x: 4, y: 9.5 },
        definition: "A system where religious leaders hold political power and religious law becomes the governing principle of the state.",
        explanation: "Rejects the separation of church and state. The content of scriptures (Bible, Quran, etc.) serves as the constitution, and religious police monitor and punish citizens' private lives, attire, and behaviour. Modern Iran or the Taliban regime in Afghanistan are representative examples.",
        figures: "Ruhollah Khomeini, Oliver Cromwell",
        keywords: "Unity of church and state, Religious law, Rejection of secularism"
      }
    ]
  },
  {
    name: "Libertarian Left",
    description: "Prioritises resolving economic inequality but seeks individual freedom and voluntary solidarity rather than coercive state control.",
    items: [
      {
        name: "Democratic Socialism",
        coords: { x: -7, y: -2 },
        definition: "An ideology seeking to realise socialist ideals through democratic procedures (elections, parliament).",
        explanation: "Opposes revolution or dictatorship. However, unlike social democracy, it views the capitalist system itself as something to be overcome and seeks to fundamentally change the economic system through public ownership of key industries or worker-managed enterprises.",
        figures: "Salvador Allende, George Orwell",
        keywords: "Economic democracy, Worker participation in management, Universal suffrage"
      },
      {
        name: "Social Democracy",
        coords: { x: -4, y: -2 },
        definition: "An ideology that accepts the capitalist market economy but seeks to alleviate inequality and build a welfare state through active state intervention.",
        explanation: "Abandoned revolution and chose compromise with capitalism. Raises funds through high progressive tax rates and invests them in universal welfare such as healthcare, education, and housing. The model adopted by Nordic countries, also called 'revised capitalism'.",
        figures: "Eduard Bernstein, Olof Palme",
        keywords: "Welfare state, Mixed economy, Labour-management-government compromise"
      },
      {
        name: "Green Politics",
        coords: { x: -5, y: -5 },
        definition: "An ideology with core values of ecological wisdom, social justice, non-violence, and grassroots democracy.",
        explanation: "Criticises industrialisation-centred growth policies (whether left or right). Leads modern agendas such as climate crisis response, denuclearisation, LGBTQ+ rights, and animal rights. Values consensus and participation over authoritative leadership in decision-making processes.",
        figures: "Petra Kelly, Rachel Carson",
        keywords: "Sustainability, Ecology, Respect for diversity"
      },
      {
        name: "Anarchism / Anarcho-Communism",
        coords: { x: -9.5, y: -9 },
        definition: "Seeks a community based on voluntary mutual aid by abolishing all forms of class and state power.",
        explanation: "Views the state simply as 'an instrument of oppression'. Abolishes private property and shares means of production within the community; however, unlike communist states controlled centrally, production and distribution are determined by free associations at the local level.",
        figures: "Pyotr Kropotkin, Mikhail Bakunin",
        keywords: "Anarchy, Mutual aid, Autonomous solidarity"
      }
    ]
  },
  {
    name: "Libertarian Right",
    description: "Regards individual freedom and property rights as the supreme values and defines state interference (taxes, regulations) as evil or seeks to minimise it.",
    items: [
      {
        name: "Classical Liberalism",
        coords: { x: 5, y: -3 },
        definition: "The foundational ideology of modern civil society emphasising individual liberty, private property rights, a free market economy, and the rule of law.",
        explanation: "Emerged in opposition to feudalism and absolute monarchy. Believes the state should remain in a minimal role (night-watchman state) such as national defence and public security, and the economy should be left to be regulated by the 'invisible hand'.",
        figures: "John Locke, Adam Smith",
        keywords: "Natural rights, Laissez-faire, Small government"
      },
      {
        name: "Neoliberalism",
        coords: { x: 4, y: -1 },
        definition: "An ideology emerging in the late 20th century criticising the failure of Keynesianism (state intervention) and advocating for the full expansion of market principles.",
        explanation: "Promotes reduction of state welfare spending, privatisation of public enterprises, labour market flexibility, and free trade agreements (FTA). Believes that increasing efficiency through competition increases overall wealth, but is criticised for deepening polarisation.",
        figures: "Friedrich Hayek, Margaret Thatcher",
        keywords: "Deregulation, Privatisation, Globalisation, Trickle-down effect"
      },
      {
        name: "Libertarianism",
        coords: { x: 8, y: -7 },
        definition: "An ideology asserting absolute self-ownership of one's body and property and rejecting state infringement.",
        explanation: "Values social freedom as well as economic freedom. Views drug use, prostitution, and gambling as individual choices 'as long as they do not harm others'. Often opposes conscription and defends the freedom to own firearms.",
        figures: "Robert Nozick, Ron Paul",
        keywords: "Self-ownership, Minimal state, Taxation is theft"
      },
      {
        name: "Anarcho-Capitalism",
        coords: { x: 9.5, y: -9.5 },
        definition: "An extreme form of libertarian thought arguing that the state itself should be completely abolished and all social functions left to the market.",
        explanation: "Believes that even areas considered public goods like police, courts, and road construction should be provided as services by private companies. Disputes are resolved through private arbitration agencies rather than state courts. A world where capitalist market principles become the social order.",
        figures: "Murray Rothbard, David Friedman",
        keywords: "Abolition of the state, Private security, Market absolutism"
      }
    ]
  },
  {
    name: "Major US Political Figures",
    description: "Analysis of the political ideologies of former and current US Presidents and major influencers.",
    items: [
      {
        name: "Donald Trump",
        coords: { x: 5, y: 7 },
        definition: "Republican Party",
        explanation: "Trump leads the 'MAGA (Make America Great Again)' movement, which differs significantly from the traditional conservatism of the Republican Party. Ideologically, he is closer to the 'Authoritarian Right'. Economically, he seeks to protect domestic industries through protectionism, while socially, he promotes 'America First' with strong border controls and anti-immigration policies.",
        figures: "Right-wing Populism, National Conservatism",
        keywords: "Protectionism, Anti-immigration, Anti-establishment"
      },
      {
        name: "Charlie Kirk",
        coords: { x: 6, y: 6 },
        definition: "Conservative Activist / Turning Point USA",
        explanation: "Charlie Kirk is a conservative commentator targeting the younger generation. While he supports economic libertarianism (tax cuts), he has recently focused more on the 'Culture War'. Believing that universities and corporations have been taken over by leftist ideologies, he argues for active state intervention to restore Christian values and traditional family views.",
        figures: "New Right, Christian Nationalism",
        keywords: "Culture War, Anti-Woke, Christian Values"
      },
      {
        name: "Joe Biden",
        coords: { x: 2, y: 2 },
        definition: "Democratic Party",
        explanation: "Biden represents the moderate wing of the Democratic Party. He prefers gradual reform over radical change. As represented by 'Bidenomics', he seeks to restore the middle class by having the government actively invest in key industries such as infrastructure and semiconductors, and by strengthening trade unions. Diplomatically, he opposes isolationism.",
        figures: "Social Liberalism, Centrism",
        keywords: "Middle Class, International Alliances, Big Government Investment"
      },
      {
        name: "Barack Obama",
        coords: { x: 3, y: 1 },
        definition: "Democratic Party",
        explanation: "While Obama uses idealistic rhetoric, policy-wise he is a pragmatist who prefers market-friendly solutions. 'Obamacare' is a prime example, where he chose to reform the private insurance market to expand coverage rather than having the state take over healthcare entirely. Socially, he championed progressive values such as the legalisation of same-sex marriage.",
        figures: "Third Way, Progressive Pragmatism",
        keywords: "Pragmatism, Social Justice, Global Cooperation"
      },
      {
        name: "Bernie Sanders",
        coords: { x: -5, y: -2 },
        definition: "Independent (Caucuses with Democrats)",
        explanation: "He is one of the furthest left figures in US politics. Although he calls himself a 'Democratic Socialist', his actual policies are closer to Nordic-style 'Social Democracy'. He strongly criticises the structural inequalities of capitalism, advocating for full nationalisation of health insurance (Medicare for All) and the introduction of a wealth tax.",
        figures: "Democratic Socialism, Social Democracy",
        keywords: "Wealth Redistribution, Universal Healthcare, Anti-Corporate"
      },
      {
        name: "Ron DeSantis",
        coords: { x: 6, y: 8 },
        definition: "Republican Party",
        explanation: "As the Governor of Florida, he is assessed as a figure who inherits Trump's ideology but executes it more competently and systematically. He is particularly at the forefront of legally blocking the spread of progressive culture by mobilising state administrative power, such as banning gender identity education in schools and abolishing diversity (DEI) programmes.",
        figures: "Authoritarian Conservatism",
        keywords: "War on Woke, Executive Power, Social Order"
      }
    ]
  }
];

const IDEOLOGIES_KO: QuadrantInfo[] = [
  {
    name: "권위주의적 좌파 (Authoritarian Left)",
    description: "경제적 평등을 달성하기 위한 강력한 국가 개입을 지지하며, 개인의 자유보다 공동체의 규율을 우선시합니다.",
    items: [
      {
        name: "마르크스-레닌주의",
        coords: { x: -10, y: 8 },
        definition: "제정 러시아의 현실에 맞게 레닌이 마르크스주의를 변용하여 정립한 혁명 사상.",
        explanation: "자본주의가 스스로 붕괴하기를 기다리는 대신, 소수의 엘리트 혁명가 집단인 '전위당(공산당)'이 노동자를 이끌고 혁명을 일으켜야 한다고 주장합니다. 혁명 직후 자본가 계급의 반격을 막기 위해 '프롤레타리아 독재' 기간이 필요하며, 이 기간 동안 강력한 국가 통제와 계획 경제를 실시합니다.",
        figures: "블라디미르 레닌, 호찌민",
        keywords: "전위당, 중앙집권, 계획경제, 민주집중제"
      },
      {
        name: "스탈린주의 / 마오주의",
        coords: { x: -9, y: 9.5 },
        definition: "마르크스-레닌주의에 지도자 개인의 통치 철학이 결합된 더 극단적인 형태.",
        explanation: "스탈린주의: '일국사회주의'를 내세워 소련 내부의 공업화와 국방력 강화에 집중했습니다. 정적에 대한 가혹한 숙청, 정보 통제, 개인 숭배가 특징입니다. 마오주의: 농업 국가인 중국의 현실을 반영해 도시 노동자가 아닌 '농민'을 혁명의 주체로 보았습니다. 끊임없는 내부 투쟁(문화대혁명 등)을 강조했습니다.",
        figures: "이오시프 스탈린, 마오쩌둥, 폴 포트",
        keywords: "개인숭배, 대숙청, 농촌의 도시 포위, 영구혁명"
      },
      {
        name: "종교적 사회주의",
        coords: { x: -6, y: 4 },
        definition: "특정 종교의 교리에 기반하여 사회주의적 경제 체제를 추구하는 사상.",
        explanation: "'부자가 천국에 가는 것은 낙타가 바늘구멍을 통과하는 것보다 어렵다'는 등의 종교적 가르침을 사회 구조적 차원에서 해석합니다. 자본주의적 탐욕을 죄악시하고, 신의 뜻에 따라 빈민을 위한 분배와 복지를 주장합니다. 라틴 아메리카의 '해방 신학'이 대표적입니다.",
        figures: "구스타보 구티에레스, 도로시 데이",
        keywords: "해방신학, 기독교 사회주의, 불교 사회주의"
      },
      {
        name: "국가 사회주의",
        coords: { x: -5, y: 6 },
        definition: "국가가 생산 수단을 소유하고 경제를 주도하지만, 혁명적 공산주의와는 결이 다른 체제.",
        explanation: "경제를 자본가에게 맡기면 불평등과 비효율이 발생하므로, 국가가 거대한 기업처럼 산업을 관리해야 한다고 봅니다. 비스마르크의 사회 정책이나 페이비언 협회의 초기 사상처럼, 위로부터의 개혁을 통해 노동자의 삶을 개선하려는 경향이 있습니다.",
        figures: "오토 폰 비스마르크, 페르디난트 라살",
        keywords: "국유화, 관료 주도, 위로부터의 개혁"
      }
    ]
  },
  {
    name: "권위주의적 우파 (Authoritarian Right)",
    description: "시장 경제와 사유 재산을 지지하지만, 국가 안보와 전통, 도덕적 질서를 위해 국가가 사회를 강력하게 통제합니다.",
    items: [
      {
        name: "절대 왕정",
        coords: { x: 5, y: 9 },
        definition: "군주가 입법, 사법, 행정의 모든 권력을 독점하는 전근대적 통치 형태.",
        explanation: "통치권은 신이 부여했다는 '왕권신수설'에 기반합니다. 군주의 의지가 곧 법이며, 의회나 헌법에 구속받지 않습니다. 현대 민주주의 관점에서는 독재로 분류되지만, 역사적으로는 봉건적 혼란을 잠재우고 중앙집권 국가를 만드는 역할을 했습니다.",
        figures: "루이 14세, 토머스 홉스",
        keywords: "왕권신수설, 충성, 신분제"
      },
      {
        name: "파시즘 / 나치즘",
        coords: { x: 2, y: 9.5 },
        definition: "국가를 하나의 살아있는 유기체로, 개인을 그 부속품으로 보는 극단적 민족주의 및 전체주의 사상.",
        explanation: "민주주의의 다원성을 '분열'로 규정하며 혐오합니다. 강력한 1인 독재자가 국가를 통합해야 한다고 믿으며, 내부 결속을 다지기 위해 외부의 적이나 특정 인종(예: 유대인)을 탄압합니다. 전쟁과 폭력을 정화의 수단으로 미화하기도 합니다.",
        figures: "베니토 무솔리니, 아돌프 히틀러",
        keywords: "전체주의, 초민족주의, 반공주의, 인종주의(나치즘)"
      },
      {
        name: "네오콘 (신보수주의)",
        coords: { x: 6, y: 5 },
        definition: "자유주의적 가치를 수호하기 위해 힘(군사력)의 사용을 주저하지 않는 미국의 현대 우파 사상.",
        explanation: "주로 좌파 운동권 출신이 보수로 전향하며 형성되었습니다. 국익과 민주주의 확산을 위해 국제 사회에 적극적으로 개입(전쟁 포함)해야 한다고 믿습니다. 경제적으로는 시장 경제를 지지하지만, 작은 정부보다는 '강한 정부'를 선호합니다.",
        figures: "조지 W. 부시, 레오 스트라우스",
        keywords: "힘을 통한 평화, 개입주의, 도덕적 절대주의"
      },
      {
        name: "신정 국가 (Theocracy)",
        coords: { x: 4, y: 9.5 },
        definition: "종교 지도자가 정치 권력을 장악하고, 종교법이 곧 국가의 통치 원리가 되는 체제.",
        explanation: "정교분리를 거부합니다. 경전(성경, 코란 등)의 내용이 헌법 역할을 하며, 종교 경찰이 시민의 사생활, 복장, 행동을 감시하고 처벌합니다. 현대의 이란이나 아프가니스탄 탈레반 정권이 대표적입니다.",
        figures: "루홀라 호메이니, 올리버 크롬웰",
        keywords: "제정일치, 종교법, 세속주의 거부"
      }
    ]
  },
  {
    name: "자유주의적 좌파 (Libertarian Left)",
    description: "경제적 불평등 해소를 중시하되, 강압적인 국가 통제보다는 개인의 자유와 자발적 연대를 추구합니다.",
    items: [
      {
        name: "민주 사회주의",
        coords: { x: -7, y: -2 },
        definition: "민주적 절차(선거, 의회)를 통해 사회주의적 이상을 실현하고자 하는 사상.",
        explanation: "혁명이나 독재를 반대합니다. 하지만 사회민주주의와 달리 자본주의 체제 자체를 극복 대상으로 보며, 주요 산업의 공공 소유나 노동자 자주 관리 기업 등을 통해 경제 시스템을 근본적으로 바꾸려 합니다.",
        figures: "살바도르 아옌데, 조지 오웰",
        keywords: "경제 민주화, 노동자 경영 참여, 보통 선거"
      },
      {
        name: "사회 민주주의",
        coords: { x: -4, y: -2 },
        definition: "자본주의 시장 경제를 인정하되, 국가의 적극적 개입으로 불평등을 완화하고 복지 국가를 건설하려는 사상.",
        explanation: "혁명을 포기하고 자본주의와의 타협을 선택했습니다. 높은 누진세율로 재원을 마련해 의료, 교육, 주거 등 보편적 복지에 투자합니다. 북유럽 국가들이 채택한 모델로 '수정 자본주의'라고도 불립니다.",
        figures: "에두아르트 베른슈타인, 올로프 팔메",
        keywords: "복지 국가, 혼합 경제, 노사정 타협"
      },
      {
        name: "녹색 정치",
        coords: { x: -5, y: -5 },
        definition: "생태학적 지혜, 사회 정의, 비폭력, 풀뿌리 민주주의를 핵심 가치로 삼는 사상.",
        explanation: "산업화 중심의 성장 정책(좌파든 우파든)을 비판합니다. 기후 위기 대응, 탈원전, 성소수자 권리, 동물권 등 현대적 의제를 주도합니다. 의사 결정 과정에서 권위적인 리더십보다 합의와 참여를 중시합니다.",
        figures: "페트라 켈리, 레이첼 카슨",
        keywords: "지속 가능성, 생태주의, 다양성 존중"
      },
      {
        name: "아나키즘 / 아나코-코뮤니즘",
        coords: { x: -9.5, y: -9 },
        definition: "모든 형태의 계급과 국가 권력을 철폐하고, 자발적인 상호 부조에 기초한 공동체를 지향합니다.",
        explanation: "국가를 그저 '억압의 도구'로 봅니다. 사유 재산을 철폐하고 생산 수단을 공동체 내에서 공유하되, 중앙에서 통제하는 공산주의 국가와 달리 지역 단위의 자유로운 연합체에서 생산과 분배를 결정합니다.",
        figures: "표트르 크로포트킨, 미하일 바쿠닌",
        keywords: "무정부, 상호 부조, 자치 연대"
      }
    ]
  },
  {
    name: "자유주의적 우파 (Libertarian Right)",
    description: "개인의 자유와 재산권을 최고의 가치로 여기며, 국가의 간섭(세금, 규제)을 악으로 규정하거나 최소화를 지향합니다.",
    items: [
      {
        name: "고전적 자유주의",
        coords: { x: 5, y: -3 },
        definition: "개인의 자유, 사유 재산권, 자유 시장 경제, 법치주의를 강조하는 근대 시민 사회의 기초 사상.",
        explanation: "봉건제와 절대 왕정에 반대하며 등장했습니다. 국가는 국방, 치안 등 최소한의 역할(야경 국가)에 머물러야 하며, 경제는 '보이지 않는 손'에 의해 조절되도록 내버려 두어야 한다고 믿습니다.",
        figures: "존 로크, 애덤 스미스",
        keywords: "천부인권, 자유방임, 작은 정부"
      },
      {
        name: "신자유주의",
        coords: { x: 4, y: -1 },
        definition: "20세기 후반, 케인스주의(국가 개입)의 실패를 비판하며 시장 원리의 전면적 확대를 주장하며 등장한 사상.",
        explanation: "국가의 복지 지출 축소, 공기업 민영화, 노동 유연화, 자유 무역 협정(FTA) 등을 추진합니다. 경쟁을 통한 효율성 증대가 전체의 부를 늘린다고 보지만, 양극화를 심화시킨다는 비판을 받습니다.",
        figures: "프리드리히 하이에크, 마거릿 대처",
        keywords: "규제 완화, 민영화, 세계화, 낙수 효과"
      },
      {
        name: "리버테리어니즘 (자유지상주의)",
        coords: { x: 8, y: -7 },
        definition: "자신의 신체와 재산에 대한 절대적인 자기 소유권을 주장하며, 국가의 침해를 거부하는 사상.",
        explanation: "경제적 자유뿐만 아니라 사회적 자유도 중시합니다. 마약, 성매매, 도박 등도 '타인에게 피해를 주지 않는 한' 개인의 선택으로 봅니다. 징병제를 반대하고 총기 소유의 자유를 옹호하는 경우가 많습니다.",
        figures: "로버트 노직, 론 폴",
        keywords: "자기 소유권, 최소 국가, 세금은 도둑질"
      },
      {
        name: "아나코-캐피탈리즘",
        coords: { x: 9.5, y: -9.5 },
        definition: "국가 자체를 완전히 없애고 모든 사회 기능을 시장에 맡겨야 한다는 극단적 자유주의 사상.",
        explanation: "경찰, 법원, 도로 건설 등 공공재로 여겨지는 영역조차 민간 기업이 서비스 상품으로 제공해야 한다고 봅니다. 분쟁은 국가 재판소가 아닌 사설 중재 기구를 통해 해결합니다. 자본주의 시장 원리가 곧 사회 질서가 되는 세상입니다.",
        figures: "머리 로스바드, 데이비드 프리드먼",
        keywords: "국가 철폐, 사설 보안, 시장 절대주의"
      }
    ]
  },
  {
    name: "주요 미국 정치인",
    description: "전/현직 미국 대통령 및 주요 인플루언서들의 정치적 성향 분석",
    items: [
      {
        name: "도널드 트럼프",
        coords: { x: 5, y: 7 },
        definition: "공화당 (Republican Party)",
        explanation: "트럼프는 공화당의 전통적 보수주의와는 결이 다른 'MAGA(미국을 다시 위대하게)' 운동을 이끌고 있습니다. 이념적으로는 '권위주의적 우파'에 가깝습니다. 경제적으로는 보호무역을 통해 자국 산업을 보호하려 하고, 사회적으로는 강력한 국경 통제와 반이민 정책을 내세우며 '미국 우선주의'를 실현하려 합니다.",
        figures: "우파 포퓰리즘, 내셔널 컨서버티즘",
        keywords: "보호무역, 반이민, 반기득권"
      },
      {
        name: "찰리 커크",
        coords: { x: 6, y: 6 },
        definition: "보수 활동가 / 터닝 포인트 USA",
        explanation: "찰리 커크는 젊은 층을 타겟으로 하는 보수 논객입니다. 경제적 자유주의(감세)를 지지하면서도, 최근에는 '문화 전쟁(Culture War)'에 더 집중하고 있습니다. 대학과 기업이 좌파 이념에 점령당했다고 보고, 기독교적 가치와 전통적 가족관을 회복하기 위해 국가가 적극 개입해야 한다고 주장합니다.",
        figures: "뉴라이트, 기독교 민족주의",
        keywords: "문화 전쟁, 반-PC(Anti-Woke), 기독교 가치"
      },
      {
        name: "조 바이든",
        coords: { x: 2, y: 2 },
        definition: "민주당 (Democratic Party)",
        explanation: "바이든은 민주당 내 온건파를 대표합니다. 급진적 변화보다는 점진적 개혁을 선호합니다. '바이든노믹스'로 대표되듯, 인프라나 반도체 등 핵심 산업에 정부가 적극 투자하고 노조를 강화하여 중산층을 복원하려 합니다. 외교적으로는 고립주의를 반대합니다.",
        figures: "사회 자유주의, 중도주의",
        keywords: "중산층 복원, 국제 동맹, 큰 정부 투자"
      },
      {
        name: "버락 오바마",
        coords: { x: 3, y: 1 },
        definition: "민주당 (Democratic Party)",
        explanation: "오바마는 이상적인 수사를 구사하지만, 정책적으로는 시장 친화적인 해결책을 선호하는 실용주의자입니다. '오바마케어'가 대표적인데, 국가가 의료를 전담하기보다 민간 보험 시장을 개혁해 보장성을 넓히는 방식을 택했습니다. 사회적으로는 동성 결혼 합법화 등 진보적 가치를 옹호했습니다.",
        figures: "제3의 길, 진보적 실용주의",
        keywords: "실용주의, 사회 정의, 글로벌 협력"
      },
      {
        name: "버니 샌더스",
        coords: { x: -5, y: -2 },
        definition: "무소속 (민주당 코커스)",
        explanation: "미국 정치권에서 가장 좌측에 위치한 인물 중 하나입니다. 스스로 '민주 사회주의자'라 칭하지만, 실제 정책은 북유럽식 '사회 민주주의'에 가깝습니다. 자본주의의 구조적 불평등을 강하게 비판하며, 건강 보험의 완전 국유화(Medicare for All)와 부유세 도입을 주장합니다.",
        figures: "민주 사회주의, 사회 민주주의",
        keywords: "부의 재분배, 보편적 의료, 반기업"
      },
      {
        name: "론 디샌티스",
        coords: { x: 6, y: 8 },
        definition: "공화당 (Republican Party)",
        explanation: "플로리다 주지사로서, 트럼프의 이념을 계승하되 더 유능하고 체계적으로 실행하는 인물로 평가받습니다. 특히 학교에서의 성 정체성 교육 금지, 다양성(DEI) 프로그램 폐지 등 주정부의 행정력을 동원해 진보적 문화 확산을 법적으로 차단하는 데 앞장서고 있습니다.",
        figures: "권위주의적 보수",
        keywords: "PC주의와의 전쟁, 행정권 발동, 사회 질서"
      }
    ]
  }
];

export const IDEOLOGIES: Record<LanguageCode, QuadrantInfo[]> = {
  en: IDEOLOGIES_EN,
  ko: IDEOLOGIES_KO,
  es: IDEOLOGIES_EN, // Fallback to EN
  fr: IDEOLOGIES_EN, // Fallback to EN
  ja: IDEOLOGIES_EN, // Fallback to EN
};

export const POLITICAL_FIGURES: PoliticalFigure[] = [
  // Quadrant 1: Authoritarian Right
  {
    name: "Adolf Hitler",
    x: 3.0,
    y: 10.0,
    description: "Extreme totalitarianism. Economy involves collusion between state and corporations (distinct from free market capitalism), with complete deprivation of individual freedom."
  },
  {
    name: "Benito Mussolini",
    x: 3.0,
    y: 9.0,
    description: "Corporatist economy where the state controls corporations. Totalitarianism based on the slogan 'Everything within the state'."
  },
  {
    name: "Ron DeSantis",
    x: 6.0,
    y: 7.0,
    description: "Hardliner within the modern US Republican Party. Supports free markets but actively uses state power for the 'Culture War' (anti-woke)."
  },
  {
    name: "Donald Trump",
    x: 5.0,
    y: 6.0,
    description: "Slightly lower economic right-wing score due to preference for protectionism (tariffs). Prioritises border control and strict law enforcement."
  },
  {
    name: "Charlie Kirk",
    x: 7.0,
    y: 5.0,
    description: "Advocates for economic freedom but strongly argues for state intervention and social conservatism to defend Christian values."
  },
  {
    name: "Edmund Burke",
    x: 6.0,
    y: 4.0,
    description: "Respect for tradition and custom. The archetype of conservatism defending the establishment and order to prevent radical change."
  },
  {
    name: "Joe Biden",
    x: 1.0,
    y: 2.0,
    description: "[Note] Considered liberal in the US, but centre-right globally. Corporate-friendly but increases state investment and values the rule of law."
  },
  {
    name: "Barack Obama",
    x: 2.0,
    y: 1.0,
    description: "Implement neoliberal market policies but socially slightly more liberal than Biden."
  },
  // Quadrant 2: Authoritarian Left
  {
    name: "Joseph Stalin",
    x: -10.0,
    y: 9.6,
    description: "Complete planned economy and communisation. Thorough dictatorship through purges of opponents and surveillance."
  },
  {
    name: "Vladimir Lenin",
    x: -10.0,
    y: 8.0,
    description: "Abolition of private property. Establishment of a strong vanguard party system for the dictatorship of the proletariat."
  },
  {
    name: "Mao Zedong",
    x: -10.0,
    y: 9.0,
    description: "Rural-centred communism. Controlled ideology by mobilising the masses through movements like the Cultural Revolution."
  },
  {
    name: "Juan Perón",
    x: -2.0,
    y: 5.0,
    description: "Policies supporting workers and nationalisation (Economic Left), but the governing style, including suppression of opposition, was authoritarian."
  },
  // Quadrant 3: Libertarian Left
  {
    name: "Mikhail Bakunin",
    x: -10.0,
    y: -9.6,
    description: "Anarchism denying both state and capital. Pursues complete community autonomy and freedom."
  },
  {
    name: "Karl Marx",
    x: -10.0,
    y: -4.0,
    description: "[Theoretical Position] Believed communist society should be stateless. Less authoritarian than the implementations by Lenin or Stalin."
  },
  {
    name: "Petra Kelly",
    x: -5.0,
    y: -6.0,
    description: "Founder of the German Green Party. Rejected authoritarianism and aimed for grassroots democracy for anti-war, peace, human rights, and the environment."
  },
  {
    name: "Bernie Sanders",
    x: -4.0,
    y: -3.0,
    description: "Radical Left by US standards. Aims for Nordic-style social democracy. Very lenient on individual freedoms (abortion, cannabis, etc.)."
  },
  {
    name: "John Stuart Mill",
    x: -1.0,
    y: -5.0,
    description: "Initially a classical liberal, later defended socialist distribution, labour rights, and women's suffrage."
  },
  // Quadrant 4: Libertarian Right
  {
    name: "Friedrich Hayek",
    x: 9.0,
    y: -3.0,
    description: "A giant of neoliberalism. Believed political freedom is impossible without economic freedom and was extremely wary of planned economies."
  },
  {
    name: "Robert Nozick",
    x: 9.0,
    y: -8.0,
    description: "Minarchism. Viewed taxation as forced labour and absolutely defended individual ownership."
  },
  {
    name: "John Locke",
    x: 5.0,
    y: -5.0,
    description: "Classical liberalism. The sole purpose of the state is to protect life, liberty, and property."
  },
  {
    name: "Ron Paul",
    x: 9.0,
    y: -7.0,
    description: "US Libertarian politician. Advocated for abolishing the Federal Reserve, withdrawing troops from overseas, and decriminalising drugs."
  }
];