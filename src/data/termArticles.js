/**
 * 主要用語の詳しい解説。
 *
 * termsData.js の1行解説（meaning / detail）とは別に、
 * 「読んで役に立つページ」にするための長文をここに置く。
 * キーは用語ページのスラッグ（term を小文字にしてスペースをハイフンに）。
 *
 * このファイルに項目がある用語だけ、静的ページに詳しい解説セクションが出力される。
 */

export const termArticles = {

  'con-allegrezza': {
    lead: 'Con allegrezza は「喜びを持って」。allegrezza は形容詞 allegro（陽気な）の名詞形で、テンポ用語としての Allegro と同じラテン語 alacer（活発な、機敏な）に遡る。',
    sections: [
      {
        heading: 'Allegro と語源を共有する',
        body: 'Allegro が単独でテンポと性格の両方を兼ねる語であるのに対し、allegrezza はその性格面だけを抽象名詞として取り出し、con を添えて別の速度指示に付加するための語形。同じ語根から、テンポ語と抽象名詞という文法的に異なる2つの形が枝分かれしている。',
      },
    ],
    confusions: [
      { term: 'Con brio', slug: 'con-brio', note: '同じ「con＋抽象名詞」の構文。brio は輝きと推進力、allegrezza は喜びに重心がある。' },
    ],
  },

  'con-audacia': {
    lead: 'Con audacia は「大胆に」。audacia はラテン語 audacia（大胆さ）そのままの借用で、動詞 audere（あえて〜する）から派生した名詞。',
    sections: [
      {
        heading: '形容詞形との対応',
        body: '同じ語根を持つ形容詞 audace（大胆な）は単独で表情指示として使われる一方、audacia は con を伴って別のテンポ・性格用語に大胆さを付け足す働きをする。英語の audacity, audacious も同じラテン語根の子孫にあたる。',
      },
    ],
    confusions: [
      { term: 'Audace', slug: 'audace', note: '形容詞形。単独で使われる場合はこちら。' },
      { term: 'Con franchezza', slug: 'con-franchezza', note: '「率直に、大胆に」。恐れのなさより、飾らない率直さに重心がある。' },
    ],
  },

  'con-bravura': {
    lead: 'Con bravura は「妙技を持って」。bravura は形容詞 bravo（見事な、腕の立つ）の名詞形で、技巧的な輝きを誇示するように演奏することを求める。',
    sections: [
      {
        heading: 'bravo の語源は諸説あり',
        body: 'bravo の語源はイタリア語の語源辞典でも確定していない。ラテン語 barbarus（異邦人、野蛮な）が変化したとする説と、ラテン語 pravus（曲がった、よこしまな）が「恐れを知らぬ」という肯定的な意味に転じたとする説があり、どちらか一方に定まっていない。「悪い」意味の語が「見事な」という賞賛の語に転じた点だけは共通している。',
      },
    ],
    confusions: [
      { term: 'Bravura', slug: 'bravura', note: '名詞形。単独で「技巧的なパッセージ」そのものを指すことが多い。' },
      { term: 'Con brio', slug: 'con-brio', note: '「活気をもって」。輝きの質が近いが、bravura はより技巧の誇示に寄る。' },
    ],
  },

  'con-entusiasmo': {
    lead: 'Con entusiasmo は「熱中して」。entusiasmo はギリシャ語 enthousiasmos（神が内に宿ること）に由来し、en（中に）と theos（神）が組み合わさった語。',
    sections: [
      {
        heading: '「神懸かり」から「熱中」へ',
        body: '古代ギリシャでは、詩人や巫女が神霊に取り憑かれたような状態を enthousiasmos と呼んだ。この「自分を超えた力に突き動かされている」という語の核が、現在の「我を忘れるほどの熱中」という意味に受け継がれている。英語の enthusiasm も同じ語根から。',
      },
    ],
    confusions: [
      { term: 'Con fervore', slug: 'con-fervore', note: '「熱烈に」。fervore は「内側で燃える熱」、entusiasmo は「我を忘れる高揚」に重心がある。' },
    ],
  },

  'con-espansione': {
    lead: 'Con espansione は「広がりを持って」。espansione はラテン語 expandere（外へ広げる。ex＋pandere「広げる」）に由来し、音を空間的に広げていくような表現を指す。',
    sections: [
      {
        heading: '英語 expansion と同じ語根',
        body: 'expandere は英語の expand, expansion とまったく同じ語根で、意味の隔たりも小さい。音楽での con espansione は、音量を単に大きくするというより、フレーズが内側から膨らみ、時間的にも間を広く取るような演奏を求める指示として使われる。',
      },
    ],
    confusions: [
      { term: 'Expansion', slug: 'expansion', note: '英語での同義語。強弱法の文脈で使われる。' },
      { term: 'Con vigore', slug: 'con-vigore', note: '「活力に満ちて」。広がりではなく力の量に重心がある。' },
    ],
  },

  'con-fervore': {
    lead: 'Con fervore は「熱烈に」。fervore はラテン語 fervor（沸騰、燃えるような熱）、動詞 fervere（煮え立つ）に由来する。',
    sections: [
      {
        heading: '「煮え立つ」が語の芯',
        body: 'fervere は文字通り液体が沸騰する様子を表す動詞で、そこから転じて感情が内側で沸き立つ状態を指すようになった。英語の fervent, fervor も同じ語根。con calore（温かさを持って）が穏やかな熱であるのに対し、con fervore はより沸き立つような切迫感を伴う。',
      },
    ],
    confusions: [
      { term: 'Calore', slug: 'calore', note: '「熱さ、温かみ」。fervore より穏やかで、内側の温もりに寄る。' },
      { term: 'Con entusiasmo', slug: 'con-entusiasmo', note: '「熱中して」。fervore が燃える熱そのものなら、entusiasmo は我を忘れる高揚感。' },
    ],
  },

  'con-franchezza': {
    lead: 'Con franchezza は「率直に、大胆に」。franchezza は形容詞 franco（率直な、自由な）の名詞形で、この franco はゲルマン系部族フランク人の名に由来する。',
    sections: [
      {
        heading: '民族名が「自由」の意味になった経緯',
        body: '中世、フランク王国の支配層であったフランク人は、被支配民と異なり課税や賦役を免除された自由身分だった。この歴史的背景から中世ラテン語 francus は「フランク人の」と同時に「自由な」を意味するようになり、そこから「束縛のない、率直な」という現在の意味が育った。英語の frank（率直な）、franchise（特権、加盟権）も同じ語根を持つ。',
      },
    ],
    confusions: [
      { term: 'Con audacia', slug: 'con-audacia', note: '「大胆に」。franchezza は飾らなさ、audacia は恐れのなさに重心がある。' },
    ],
  },

  'con-garbo': {
    lead: 'Con garbo は「優雅に、礼儀正しく」。garbo はゲルマン系の語根に遡ると言われるが、細部は辞典によって説が分かれ確定していない。',
    sections: [
      {
        heading: '節度のある優雅さ',
        body: 'garbo が指す優雅さは、grazioso のような身のこなしの優雅さよりも、振る舞いの節度や礼儀正しさに重心がある。イタリア語には形容詞形 garbato（上品な、礼儀正しい）も存在し、con garbo はその名詞形に con を添えたもの。',
      },
    ],
    confusions: [
      { term: 'Grazioso', slug: 'grazioso', note: '「優雅に」。garbo は礼儀・節度、grazioso は身のこなしのしなやかさに寄る。' },
      { term: 'Con suavita', slug: 'con-suavita', note: '「優雅に、快く」。suavita は心地よさ、garbo は礼儀正しさに重心がある。' },
    ],
  },

  'con-gusto': {
    lead: 'Con gusto は「趣味良く、味わい深く」。gusto はラテン語 gustus（味、味覚）に由来し、味わうように演奏することを求める指示。',
    sections: [
      {
        heading: '「味覚」から「センス」へ',
        body: 'gustus はもともと文字通りの味覚を指すラテン語で、そこから「物事を見分ける感覚」「趣味の良さ」へと意味が広がった。英語の gusto, gustatory（味覚の）も同じ語根。演奏における con gusto は、単に楽譜通りに弾くのではなく、演奏者自身の解釈や工夫を味わい深く加えることを求める。',
      },
    ],
    confusions: [
      { term: 'Con espressione', slug: 'con-espressione', note: '表現を込めて演奏する点は共通するが、gusto はより演奏者個人の趣味・工夫に寄る。' },
    ],
  },

  'con-rabbia': {
    lead: 'Con rabbia は「怒り狂って」。rabbia はラテン語 rabies（狂気、激しい怒り）そのままの子孫で、英語で狂犬病を指す rabies も同じ語源。',
    sections: [
      {
        heading: '「狂気」を意味した語',
        body: 'ラテン語 rabies は本来、動物や人が理性を失って荒れ狂う状態を指した。狂犬病にかかった動物の狂暴な様子からこの病名が生まれ、同じ語がイタリア語では感情としての「激しい怒り」を意味するようになった。con rabbia は数ある怒りの表現の中でも、抑制を失った激しさを指す点で際立つ。',
      },
    ],
    confusions: [
      { term: 'Con afflizione', slug: 'con-afflizione', note: '「苦しみを持って」。怒りではなく内向きの苦悩に重心がある。' },
    ],
  },

  'con-slancio': {
    lead: 'Con slancio は「躍動して」。slancio は動詞 slanciare（勢いよく投げ出す）の名詞形で、さらに槍を意味する lancia（ランス）に遡る。',
    sections: [
      {
        heading: '「槍を投げる」勢い',
        body: 'lancia（槍）に、完了・放出のニュアンスを持つ接頭辞 s- が付いた slanciare は、槍を勢いよく投げ放つ様子を表す動詞。そこから、それまで溜め込んでいたエネルギーを一気に解き放つ躍動感を指す名詞 slancio が生まれた。',
      },
    ],
    confusions: [
      { term: 'Slancio', slug: 'slancio', note: '前置詞のない名詞形。単独で指示として置かれることもある。' },
      { term: 'Con bravura', slug: 'con-bravura', note: '「妙技を持って」。技巧の誇示に寄る点が、勢いそのものを表す slancio と異なる。' },
    ],
  },

  'con-suavita': {
    lead: 'Con suavita は「優雅に、快く」。suavita はラテン語 suavis（甘美な、心地よい）の名詞形で、英語の suave（洗練された、如才ない）と同じ語根を持つ。',
    sections: [
      {
        heading: 'soave との関係',
        body: '形容詞 soave（甘美な、柔らかな）は suavis がイタリア語として定着した形で、suavita はその名詞形にあたる。con suavita は soave が持つ音色の柔らかさを、抽象名詞として con に添える形で表現している。',
      },
    ],
    confusions: [
      { term: 'Soave', slug: 'soave', note: '形容詞形。同じ語根で、単独の表情指示として使われる。' },
      { term: 'Dolce', slug: 'dolce', note: '「甘く、柔らかく」。suavita はより上品さ・洗練を含む点が dolce と異なる。' },
    ],
  },

  'con-tristezza': {
    lead: 'Con tristezza は「悲しみを伴って」。tristezza はラテン語 tristitia（悲しみ）、形容詞 tristis（悲しい）に由来する名詞。',
    sections: [
      {
        heading: '静かな悲しみ',
        body: 'tristezza が指す悲しみは、lamentoso のような嘆きの表出や、patetico のような悲劇性の強調とは異なり、より静かで内向きな沈んだ心情に近い。フランス語 triste（悲しい）も同じラテン語根から。',
      },
    ],
    confusions: [
      { term: 'Con afflizione', slug: 'con-afflizione', note: '「苦しみを持って」。afflizione はより苦痛が強く、tristezza は静かな沈鬱さに寄る。' },
    ],
  },

  'con-vigore': {
    lead: 'Con vigore は「活力に満ちて」。vigore はラテン語 vigor（活力、生命力）、動詞 vigere（生き生きとしている、盛んである）に由来する。',
    sections: [
      {
        heading: '「みなぎる力」の系統',
        body: '英語の vigor, vigorous と同じ語根で、体力・生命力が満ちている状態が語の核にある。con brio が輝きや推進力を含むのに対し、con vigore はより単純に力強さそのものを指す点で用途が異なる。',
      },
    ],
    confusions: [
      { term: 'Con brio', slug: 'con-brio', note: '「活気をもって」。brio は輝きを伴う勢い、vigore は力そのもの。' },
      { term: 'Con espansione', slug: 'con-espansione', note: '「広がりを持って」。vigore は力の量、espansione は空間的な広がりに重心がある。' },
    ],
  },

  'con-zelo': {
    lead: 'Con zelo は「熱心に、精出して」。zelo はギリシャ語 zelos（熱心、競争心）がラテン語 zelus を経てイタリア語に入った語。',
    sections: [
      {
        heading: '「熱意」の語源',
        body: 'ギリシャ語 zelos はもともと、優れたものに対する強い憧れや競争心を意味した。英語の zeal, zealous も同じ語根から。con zelo はひたむきに、集中力を保ちながら演奏することを求める指示で、entusiasmo のような高揚感よりも、地道な熱心さに重心がある。',
      },
    ],
    confusions: [
      { term: 'Zelo', slug: 'zelo', note: '前置詞のない名詞形。単独で指示として置かれることもある。' },
      { term: 'Con entusiasmo', slug: 'con-entusiasmo', note: '「熱中して」。entusiasmo は高揚感、zelo は地道な熱心さに寄る。' },
    ],
  },

  'con-afflizione': {
    lead: 'Con afflizione は「苦しみを持って、悲痛に」。afflizione はラテン語 afflictio、動詞 affligere（ad＋fligere「打ちのめす」）に由来する。',
    sections: [
      {
        heading: '「打ちのめされる」が語の芯',
        body: 'affligere は文字通り「何かに打ちつける、打ちのめす」という動詞で、そこから精神的に打ちのめされた苦痛の状態を指す afflizione が生まれた。英語の affliction も同じ語根。tristezza が静かな悲しみであるのに対し、afflizione はより強い苦悩・苦痛を伴う。',
      },
    ],
    confusions: [
      { term: 'Con tristezza', slug: 'con-tristezza', note: '「悲しみを伴って」。afflizione より穏やかで静かな悲しみ。' },
      { term: 'Con rabbia', slug: 'con-rabbia', note: '「怒り狂って」。afflizione が内向きの苦痛なら、rabbia は外に向かう激情。' },
    ],
  },

  'con-calma': {
    lead: 'Con calma は「冷静に、落ち着いて」。calma はラテン語 cauma（真昼の焼けつく暑さ）、さらにギリシャ語 kauma（灼熱）に由来し、意味が大きく転じた語。',
    sections: [
      {
        heading: '「焼けつく暑さ」から「凪」へ',
        body: 'ギリシャ語 kauma は本来、船乗りが使った言葉で、真昼の暑さで風が止み、海面が凪いだ状態を指した。この「暑さで動きが止まる」というイメージが、俗ラテン語の段階で「静止・静けさ」の意味に転じ、現在の「穏やかさ、落ち着き」を意味する calma が生まれた。暑さを表す語が、正反対に見える静けさの語に転じた点が興味深い。',
      },
    ],
    confusions: [
      { term: 'Placido', slug: 'placido', note: '「静かに、穏やかな」。calma は興奮を抑える動的な落ち着き、placido はもとから静かな状態を指す。' },
    ],
  },

  'abbandono': {
    lead: 'Abbandono は「気ままに、身を任せて」。動詞 abbandonare（委ねる、見捨てる）の名詞形で、前置詞なしに単独の指示として楽譜に置かれることもある。',
    sections: [
      {
        heading: 'con を伴わない単独の使われ方',
        body: 'イタリア語の演奏指示には、dolce や cantabile のように、文法上は名詞・形容詞であっても前置詞なしに単独で副詞的に置かれる語が多くある。abbandono もその一つで、con abbandono と同じ意味を、より簡潔な単語一つで表す。',
      },
    ],
    confusions: [
      { term: 'Con abbandono', slug: 'con-abbandono', note: '前置詞を伴う形。語源の説明はこちら。' },
    ],
  },

  'bravura': {
    lead: 'Bravura は「技巧的、華麗」。単独では、超絶技巧を誇示する派手なパッセージそのものを指す名詞として使われることが多い。',
    sections: [
      {
        heading: '「妙技」を指す名詞として',
        body: 'con bravura が演奏の性格を指定する副詞句であるのに対し、bravura は単独では「妙技を要する華麗な部分」そのものを指す名詞として使われる場面が多い。「bravura passage（妙技的な楽句）」のような言い方はその典型。',
      },
    ],
    confusions: [
      { term: 'Con bravura', slug: 'con-bravura', note: '前置詞を伴う演奏指示の形。語源の説明はこちら。' },
      { term: 'Virtuoso', slug: 'virtuoso', note: '「超絶技巧の演奏家」。bravura が楽句の性質を指すのに対し、virtuoso は演奏者本人を指す。' },
    ],
  },

  'slancio': {
    lead: 'Slancio は「跳躍、はずみ、一気呵成」。con slancio と同じ語源を持つが、単独では溜め込まれたエネルギーの解放そのものを指す名詞として使われる。',
    sections: [
      {
        heading: '槍投げのイメージ',
        body: '動詞 slanciare（勢いよく投げ出す）の名詞形で、根には「槍（lancia）を投げ放つ」イメージがある。con slancio が演奏の性格を指定する副詞句であるのに対し、slancio 単独では「その一気呵成の勢い」自体を指す名詞として扱われる。',
      },
    ],
    confusions: [
      { term: 'Con slancio', slug: 'con-slancio', note: '前置詞を伴う演奏指示の形。語源の説明はこちら。' },
    ],
  },

  'zelo': {
    lead: 'Zelo は「熱心に、熱烈に」。ギリシャ語 zelos に由来する名詞で、con zelo と同様、地道な熱心さを表す。',
    sections: [
      {
        heading: '単独での使われ方',
        body: 'con zelo が「con＋名詞」という明示的な構文であるのに対し、zelo 単独で楽譜に置かれる場合は、dolce や cantabile と同じように前置詞を省いた慣用的な指示として機能する。意味そのものに大きな違いはない。',
      },
    ],
    confusions: [
      { term: 'Con zelo', slug: 'con-zelo', note: '前置詞を伴う形。語源の説明はこちら。' },
    ],
  },
  'dolcemente': {
    lead: 'Dolcemente は「甘く、優しく」。形容詞 dolce（甘い）に副詞語尾 -mente を付けた副詞形。',
    sections: [
      {
        heading: '-mente 語尾の由来',
        body: 'イタリア語の -mente 副詞語尾は、ラテン語で「〜な心・様子で」を意味した mente（mens「心」の奪格形）が、形容詞に付く決まり文句として定着し、やがて語尾として化石化したもの。dolcemente は文字通りには「甘い心で」に近い成り立ちを持つ。',
      },
      {
        heading: '形容詞形との使い分け',
        body: 'dolce は単独でも副詞的に「甘く弾け」という指示として通用するため、dolcemente とほぼ同じ場面で使われる。ただし dolcemente のほうが副詞であることが文法上明示される分、フレーズ全体にかかる指示であることがはっきりする。',
      },
    ],
    confusions: [
      { term: 'Dolce', slug: 'dolce', note: '形容詞形。単独でも副詞的に使われ、意味はほぼ同じ。' },
      { term: 'Teneramente', slug: 'teneramente', note: '「優しく、慈しんで」。dolcemente より庇護的な柔らかさを含む。' },
    ],
  },

  'teneramente': {
    lead: 'Teneramente は「優しく、慈しんで」。形容詞 tenero（柔らかい、幼い）の副詞形で、ラテン語 tener に由来する。',
    sections: [
      {
        heading: '「若く柔らかいもの」への視線',
        body: 'ラテン語 tener はもともと、若い植物や幼い生き物のような、傷つきやすく柔らかいものを指した。英語の tender も同じ語根。teneramente が表す優しさには、対象を壊れやすいものとして慈しむニュアンスが込められている。',
      },
    ],
    confusions: [
      { term: 'Tenero', slug: 'tenero', note: '形容詞形。壊れやすさ、柔らかさそのものを指す。' },
      { term: 'Dolcemente', slug: 'dolcemente', note: '「甘く、優しく」。teneramente より庇護・慈しみの色合いが強い。' },
    ],
  },

  'appassionatamente': {
    lead: 'Appassionatamente は「情熱的に、熱烈に」。appassionato の副詞形で、ラテン語 passio（苦しみを受けること）に遡る passione（情熱）を語根に持つ。',
    sections: [
      {
        heading: '「受苦」が「情熱」になった経緯',
        body: 'ラテン語 passio は本来、動詞 pati（耐え忍ぶ、苦しみを受ける）から派生した「受苦」を意味する語で、英語の passion も patient（忍耐強い）も同じ語根を持つ。キリスト教で「キリストの受難（Passion）」を指したこの語が、中世以降「強い感情に突き動かされる状態」全般を指すよう意味を広げ、現在の「情熱」の意味が定着した。',
      },
    ],
    confusions: [
      { term: 'Appassionato', slug: 'appassionato', note: '形容詞形。単独でも副詞的に使われ、意味はほぼ同じ。' },
      { term: 'Con fervore', slug: 'con-fervore', note: '「熱烈に」。fervore は沸き立つ熱、passione はより広く強い感情全般を指す。' },
    ],
  },

  'ardentemente': {
    lead: 'Ardentemente は「燃えるように」。形容詞 ardente（燃えている）の副詞形で、ラテン語 ardere（燃える）の現在分詞に由来する。',
    sections: [
      {
        heading: '燃焼のイメージが今も生きている',
        body: 'ardere はラテン語で文字通り炎が燃える様子を表す動詞。そこから転じた ardente / ardentemente は、比喩としての「情熱」ではなく、絶えず燃え続ける火のような熱量の持続を指すニュアンスが強い。英語の ardent, ardor も同じ語根。',
      },
    ],
    confusions: [
      { term: 'Ardente', slug: 'ardente', note: '形容詞形。単独でも副詞的に使われる。' },
      { term: 'Con fuoco', slug: 'con-fuoco', note: '「火のように」。fuoco は火そのもの、ardente は燃え続ける状態を指す。' },
    ],
  },

  'armonioso': {
    lead: 'Armonioso は「調和のとれた、和声豊かな」。armonia（和声、調和）から派生した形容詞で、armonia はギリシャ語 harmonia（結合、調和）に由来する。',
    sections: [
      {
        heading: '「継ぎ目を合わせる」が語の芯',
        body: 'ギリシャ語 harmonia は動詞 harmozein（継ぎ合わせる、はめ込む）に由来し、もとは大工仕事で部材の継ぎ目をぴったり合わせることを指した。そこから「異なる音や要素がぴったり調和する」という音楽用語としての意味が育った。英語の harmony, harmonic も同じ語根を持つ。',
      },
    ],
    confusions: [
      { term: 'Sonore', slug: 'sonore', note: '「朗々と」。armonioso が声部間のバランスを指すのに対し、sonore は音の豊かな響きそのものを指す。' },
    ],
  },

  'animo': {
    lead: 'Animo は「魂、精神」。con animo（魂を込めて）の形で使われることが多い名詞で、ラテン語 animus（精神、気概、意志）に由来する。',
    sections: [
      {
        heading: 'animus と anima の違い',
        body: 'ラテン語には似た語形の名詞が2つある。animus は理性・気概・意志を担う「精神」、anima は生命そのものを支える「息・魂」を指し、両者は本来役割が異なっていた。イタリア語 animo はこのうち animus の系統を継ぎ、勇気や気概を伴う「精神」を意味する。',
      },
    ],
    confusions: [
      { term: 'Animoso', slug: 'animoso', note: '形容詞形。「魂の込もった、勇壮な」状態そのものを形容する。' },
    ],
  },

  'animoso': {
    lead: 'Animoso は「いきいきと、勇壮に」。animo（魂、精神）に形容詞語尾 -oso を付けた語で、精神が満ち満ちている状態を表す。',
    sections: [
      {
        heading: '「満ちている」を表す -oso',
        body: '-oso はラテン語 -osus に由来する形容詞語尾で、「〜に満ちた」という意味を付け加える。animoso は文字通りには「精神・気概に満ちた」であり、単なる元気の良さよりも、内面の意志の強さを伴ういきいきとした状態を指す。',
      },
    ],
    confusions: [
      { term: 'Animo', slug: 'animo', note: '名詞形。con animo の形でよく使われる。' },
      { term: 'Con vigore', slug: 'con-vigore', note: '「活力に満ちて」。vigore は身体的な力、animoso は精神面のいきいきとした強さに寄る。' },
    ],
  },

  'graziosamente': {
    lead: 'Graziosamente は「優雅に」。grazioso の副詞形で、意味の内容は grazioso とほぼ変わらない。',
    sections: [
      {
        heading: '形容詞形と何が違うのか',
        body: 'grazioso はそれ自体、単独で副詞的に演奏指示として使われる語であるため、graziosamente との違いは実質的な意味よりも文法上の明示性にある。副詞語尾 -mente が付くことで「優雅な仕方で（弾け）」という副詞的な働きが文法的にはっきりする分、graziosamente のほうがやや形式張った書き方になる。',
      },
    ],
    confusions: [
      { term: 'Grazioso', slug: 'grazioso', note: '形容詞形。単独でも副詞的に使われ、演奏上のヒントはこちらに詳しい。' },
    ],
  },

  'focoso': {
    lead: 'Focoso は「燃えるような、熱烈な」。fuoco（火）から派生した形容詞で、con fuoco とほぼ同じ性格を単語一つで表す。',
    sections: [
      {
        heading: 'fuoco は「炉」から「火」へ',
        body: 'fuoco の語源であるラテン語 focus は、本来「炉、暖炉」を指す語で、「火」そのものを意味するようになったのは後の意味の広がりによる。この focus という語は、天文学者ケプラーが1604年の光学書で、レンズが光を集める点を「炉（燃焼点）」に見立てて命名したことから、英語の焦点を意味する focus としても定着した。「熱烈さ」の語と、光学・数学の「焦点」がまったく別の道筋で同じラテン語から枝分かれしている。',
      },
    ],
    confusions: [
      { term: 'Con fuoco', slug: 'con-fuoco', note: '「火のように」。同じ語根を持つ前置詞句の形。' },
    ],
  },

  'audace': {
    lead: 'Audace は「大胆に、無謀なほど勇敢に」。ラテン語 audax（大胆な）、動詞 audere（あえて〜する）に由来する形容詞。',
    sections: [
      {
        heading: '「あえてする」勇気',
        body: 'audere は「恐れず、あえて行動する」という意味の動詞で、英語の audacity, audacious も同じ語根を持つ。audace が指す大胆さは、無鉄砲さというより、困難を承知であえて踏み込む意志の強さに重心がある。',
      },
    ],
    confusions: [
      { term: 'Con audacia', slug: 'con-audacia', note: '名詞形に con を添えた形。語源はこちらで詳述。' },
    ],
  },

  'bizzarro': {
    lead: 'Bizzarro は「奇妙な、風変わりな、奇抜な」。イタリア語の語源辞典でも由来が確定していない、成り立ちに議論のある語。',
    sections: [
      {
        heading: '語源に複数の説がある',
        body: 'bizzarro の語源は諸説あり定まっていない。スペイン語 bizarro（勇敢な、りりしい）が変化したという説では、さらにバスク語で「ひげ」を意味する bizar に遡るとされ、ひげを蓄えた男の勇ましい見た目が語源になったと説明される。一方、イタリア語内部の「かんしゃく、むら気」を意味する bizza に由来するという説もあり、両者のどちらが正しいかは確定していない。',
      },
    ],
    confusions: [],
  },

  'brio': {
    lead: 'Brio は「活気、元気」。con brio の名詞部分で、比較言語学ではケルト語系の語根 *brigos（力、強さ）に遡ると考えられている。',
    sections: [
      {
        heading: 'ケルト語からスペイン語を経て',
        body: 'brio はイタリア語が直接ラテン語から受け継いだ語ではなく、スペイン語・カタルーニャ語の brío を経由してイタリア語に入ったと考えられている。その大元は、アイルランド語 brí（力、意義）などに残るケルト祖語の語根 *brigos に遡るとされる。ラテン語系の語彙が多いイタリア語の音楽用語の中で、ケルト語系の語根を持つ点は brio の際立った特徴。',
      },
    ],
    confusions: [
      { term: 'Con brio', slug: 'con-brio', note: '前置詞を伴う演奏指示の形。演奏上のヒントはこちらに詳しい。' },
    ],
  },

  'buffo': {
    lead: 'Buffo は「喜劇的な、こっけいな」。動詞 buffare（頬を膨らませて息を吹く）に由来するとされる語で、道化が頬を膨らませる仕草から意味が育った。',
    sections: [
      {
        heading: '英語 buffoon の親戚',
        body: 'buffare は音や動作を写し取った擬態的な語とされ、頬を膨らませて滑稽な顔をする様子を表した。この buffo からイタリア語 buffone（道化者）が生まれ、フランス語 bouffon を経て英語の buffoon になった。「オペラ・ブッファ（opera buffa、喜劇オペラ）」の buffa も同じ語根。',
      },
    ],
    confusions: [
      { term: 'Opera buffa', slug: 'opera-buffa', note: '喜劇オペラという様式名。buffo はその形容詞・登場人物を指す語として使われる。' },
    ],
  },

  'calore': {
    lead: 'Calore は「熱さ、熱情、温かみ」。ラテン語 calor（熱）に由来し、con calore（温かく、熱情を込めて）の形でよく使われる。',
    sections: [
      {
        heading: '「熱」を表す語族',
        body: 'ラテン語 calor は英語 calorie（カロリー、熱量の単位）や calorific（発熱の）と同じ語根を持つ。音楽用語としての calore は、con fuoco のような燃え上がる激しさとは異なり、内側からじんわりと伝わる温もりに近い熱を指す。',
      },
    ],
    confusions: [
      { term: 'Con fervore', slug: 'con-fervore', note: '「熱烈に」。fervore は沸き立つ熱、calore はより穏やかな温もり。' },
    ],
  },

  'affettuoso': {
    lead: 'Affettuoso は「愛情を込めて、優しく」。名詞 affetto（愛情）から派生した形容詞で、affetto はラテン語 affectus（動詞 afficere「働きかける、影響を与える」の過去分詞）に由来する。',
    sections: [
      {
        heading: '「働きかけられた状態」が「愛情」に',
        body: 'afficere は「〜に影響を与える、働きかける」という意味の動詞で、その過去分詞 affectus は本来「(何かに)働きかけられて生じた状態」を広く指した。ここから「心に働きかけられて生まれる情愛」という意味の affetto が育ち、affettuoso はその形容詞形にあたる。英語の affection, affectionate も同じ語根。',
      },
    ],
    confusions: [
      { term: 'Con affetto', slug: 'con-affetto', note: '名詞 affetto に con を添えた前置詞句の形。意味はほぼ同じ。' },
      { term: 'Teneramente', slug: 'teneramente', note: '「優しく、慈しんで」。affettuoso は愛情そのもの、teneramente は壊れやすいものへの慈しみに寄る。' },
    ],
  },

  'deciso': {
    lead: 'Deciso は「きっぱりと、決然と」。動詞 decidere（決定する）の過去分詞で、decidere はラテン語 de（〜から離して）と caedere（切る）の合成語。',
    sections: [
      {
        heading: '「切り離す」ことが「決める」こと',
        body: 'decidere は文字通りには「切り落とす」という意味の動詞で、他の選択肢を断ち切ることで結論に至る、という発想から「決定する」の意味が生まれた。deciso が求めるのは、迷いなく音を切り出すような明確なアタックであり、語源の「切る」イメージとも重なる。',
      },
    ],
    confusions: [
      { term: 'Rigoroso', slug: 'rigoroso', note: '「厳格に、正確に」。deciso が意志の明確さなら、rigoroso は規律の厳しさに寄る。' },
    ],
  },

  'delicato': {
    lead: 'Delicato は「繊細に、優美に」。ラテン語 delicatus に由来し、快楽・喜びを意味する deliciae と語根を共有すると考えられている。',
    sections: [
      {
        heading: '「快さ」から「繊細さ」へ',
        body: 'delicatus はもともと「快さに耽った、贅沢な」というニュアンスを含んだ語で、そこから「壊れやすいほど上質な」という意味を経て、現在の「繊細な」という意味に定着したとされる。英語の delicate, delicious（美味な）も同じ語根の子孫にあたる。',
      },
    ],
    confusions: [
      { term: 'Dolce', slug: 'dolce', note: '「甘く、柔らかく」。delicato は壊れやすさへの丁寧な扱い、dolce は音そのものの甘さを指す。' },
    ],
  },

  'virtuoso': {
    lead: 'Virtuoso は「達人、超絶技巧の演奏家」。ラテン語 virtus（卓越性、力量。もとは vir「男」に由来し「男らしさ、武勇」を意味した）から派生した語。',
    sections: [
      {
        heading: '「学識ある人」から「名演奏家」へ',
        body: 'ルネサンス期のイタリアで virtuoso は当初、音楽に限らず学問・芸術全般に通じた博識な人物を指す語だった。ガリレオのような学者も virtuoso と呼ばれた記録が残っている。この語が特に音楽の卓越した技巧を持つ演奏家を指すよう意味を狭めていったのは、18世紀以降のこととされる。',
      },
    ],
    confusions: [
      { term: 'Bravura', slug: 'bravura', note: '「技巧的、華麗」。virtuoso が演奏者を指すのに対し、bravura は楽句や演奏の性質を指す。' },
    ],
  },

  'prima-donna': {
    lead: 'Prima Donna は「第一の女性」を意味し、オペラ一座で主役を歌う女性歌手を指す。prima（第一の、女性形）と donna（女性、貴婦人。ラテン語 domina「女主人」に由来）の複合語。',
    sections: [
      {
        heading: 'オペラの序列を反映した呼称',
        body: '17〜18世紀のオペラ・セリアでは、歌手の序列がはっきりしており、主役の女性歌手が prima donna、その次に位置づけられる役が seconda donna（第二の女性）と呼ばれた。プリマドンナという呼称そのものが、当時の一座の階層構造をそのまま言葉にしたもの。',
      },
    ],
    confusions: [],
  },

  'sturm-und-drang': {
    lead: 'Sturm und Drang（疾風怒濤）は「嵐と衝動」を意味するドイツ語で、1776年に出版されたクリンガーの戯曲の題名に由来する、18世紀後半ドイツの文学運動の呼称。',
    sections: [
      {
        heading: '文学運動としての疾風怒濤',
        body: '啓蒙主義の理性偏重への反発として、若きゲーテやシラーらが個人の激しい感情や主観を重んじた1760〜80年代の潮流を指す。理性より情念を、規範より個の衝動を前面に出す姿勢が特徴とされる。',
      },
      {
        heading: '音楽への適用は議論がある',
        body: 'ハイドンの中期の短調交響曲などを「Sturm und Drang 期の作品」と呼ぶ慣習が20世紀の音楽学で広まったが、これはこの文学運動の名を後から音楽作品に当てはめたものであり、当の作品の多くは文学運動の中心的な時期より前に書かれている。文学運動と音楽の激情的な作品群を直接結びつけてよいかどうかは、音楽学者の間で見解が分かれている。',
      },
    ],
    confusions: [],
  },
  'empfindsamer-stil': {
    lead: 'Empfindsamer Stil（多感様式）はドイツ語で「感じやすい様式」を意味し、C.P.E.バッハらが確立した、18世紀半ばの北ドイツを中心とする様式。',
    sections: [
      {
        heading: '一瞬ごとの感情の揺れを描く',
        body: '同時代のギャラント様式が優美で均整の取れた表現を志向したのに対し、多感様式は突然の休止や予期しない和声の変化、細かい強弱の揺れを用いて、瞬間ごとに移ろう繊細な心の動きを描き出そうとした。C.P.E.バッハの独奏用ファンタジアや幻想曲的な楽章に、この様式の特徴が顕著に表れる。',
      },
    ],
    confusions: [
      { term: 'Sturm und Drang', slug: 'sturm-und-drang', note: '同じ18世紀ドイツ語圏の潮流だが、多感様式が繊細な機微、Sturm und Drang はより激しい情念に寄る。' },
      { term: 'Affektenlehre', slug: 'affektenlehre', note: 'バロック期の情念論。多感様式はその後、より個人的で流動的な感情表現へと展開した様式。' },
    ],
  },

  'affektenlehre': {
    lead: 'Affektenlehre（情念論）はドイツ語で、バロック時代に広まった、特定の音型や調性が特定の感情（アフェクト）を表すとする理論の総称。',
    sections: [
      {
        heading: '感情を客観的な記号として扱う',
        body: '情念論では、喜び・悲しみ・怒りといった感情はそれぞれ固有の音楽的な型（急速な上行音型、半音階的な下行、特定の調性など）と結びつくと考えられた。作曲家個人の主観的な表現というより、聴き手に共通して特定の感情を呼び起こすための、いわば客観的な語彙・記号の体系として音型が用いられた点が特徴。',
      },
      {
        heading: '多感様式との対比',
        body: '情念論が1曲・1楽章を通じて単一の感情を描くことを基本とするのに対し、後の多感様式（Empfindsamer Stil）は同じ楽章の中でも感情が刻々と移ろうことを許容する。バロックから前古典派への様式変化は、この「単一の情念」から「揺れ動く感情」への移行としても説明される。',
      },
    ],
    confusions: [
      { term: 'Doctrine of Affections', slug: 'doctrine-of-affections', note: '同じ理論の英語名。' },
      { term: 'Empfindsamer Stil', slug: 'empfindsamer-stil', note: '情念論の後に広まった、より繊細で流動的な感情表現の様式。' },
    ],
  },

  'doctrine-of-affections': {
    lead: 'Doctrine of Affections はドイツ語 Affektenlehre の英語名で、指している理論の内容は同じ。バロック音楽が聴き手の心に特定の感情状態を引き起こすとする理論的基盤を指す。',
    sections: [
      {
        heading: '英語圏での呼び方',
        body: 'この理論はドイツの音楽理論家たち（マッテゾンら）によって体系化されたが、英語圏の音楽学では Doctrine of Affections という訳語で広く言及される。affection は現代英語の「愛情」ではなく、より広く「情念・感情の状態」を指す古い語義で使われている。',
      },
    ],
    confusions: [
      { term: 'Affektenlehre', slug: 'affektenlehre', note: '同じ理論のドイツ語名。内容の説明はこちらに詳しい。' },
    ],
  },

  'madrigalism': {
    lead: 'Madrigalism（マドリガリズム）は、歌詞の内容を音そのもので描写する技法を指す英語で、ルネサンス期のマドリガーレ（多声世俗歌曲）で特に発達した。',
    sections: [
      {
        heading: '言葉を音で「絵に描く」',
        body: '「天に昇る」という歌詞で旋律を上行させる、「ため息」という歌詞で音を短く区切る、「死」という歌詞で不協和音を用いるなど、歌詞の意味そのものを聴覚的なイメージに翻訳する手法を指す。ルネサンス期のマドリガーレ作曲家たちがこの技法を洗練させ、後の時代の作曲家にも影響を与えた。',
      },
    ],
    confusions: [
      { term: 'Word painting', slug: 'word-painting', note: '同じ技法を指す、より一般的な英語表現。' },
    ],
  },

  'word-painting': {
    lead: 'Word painting（ワード・ペインティング）は、歌詞の意味を音楽で視覚的・感覚的に描写する技法を指す一般的な英語表現。',
    sections: [
      {
        heading: 'madrigalism との関係',
        body: 'madrigalism がルネサンス期のマドリガーレという特定の様式・時代に結びついた呼び方であるのに対し、word painting はより時代を問わず使われる一般名称。同じ技法を指しているが、madrigalism はその技法が最も洗練された歴史的文脈を強調する呼び方であり、word painting はその文脈を問わない広い括りにあたる。',
      },
    ],
    confusions: [
      { term: 'Madrigalism', slug: 'madrigalism', note: 'ルネサンスのマドリガーレに結びついた、より限定的な呼び方。' },
    ],
  },

  'mannheim-sigh': {
    lead: 'Mannheim sigh（マンハイムの溜息）は、下降する2度の音型に、前の音へアクセントを置くことでため息のような効果を生む古典派の音型。18世紀のマンハイム楽派の管弦楽様式と結びつけて呼ばれる。',
    sections: [
      {
        heading: '前打音に重みを置く仕組み',
        body: '通常のアクセントが小節や拍の頭に置かれるのに対し、マンハイムの溜息では下降する2音のうち前の音（多くは非和声音である前打音・掛留音）に重みが置かれ、後の音へ抜けるように収まる。この重心の位置がずれることで、ため息をつくような脱力感が生まれる。',
      },
    ],
    confusions: [],
  },

  'aumentando': {
    lead: 'Aumentando は「増しながら、強くしながら」。動詞 aumentare（増やす、増大する）の現在分詞形で、ラテン語 augere（増やす）に由来する。',
    sections: [
      {
        heading: 'crescendo との違い',
        body: 'crescendo も aumentando も音量が増していく点は同じだが、crescendo が「育つ、成長する」という動詞 crescere に由来するのに対し、aumentando は「量として増える」という動詞 augere に由来する。前者が有機的な成長のイメージ、後者が物理的な増大のイメージという語感の違いを持つが、実際の演奏指示としての効果はほぼ同じ。',
      },
    ],
    confusions: [
      { term: 'Crescendo', slug: 'crescendo', note: '同じく音量の増大を指すが、より一般的に使われる語。' },
    ],
  },

  'dynamics': {
    lead: 'Dynamics（ダイナミクス）は、楽曲における音量の変化全般を指す英語。ギリシャ語 dynamis（力、能力）に由来する。',
    sections: [
      {
        heading: '「力」を意味した語根',
        body: 'ギリシャ語 dynamis は物理的な「力」を意味し、英語の dynamic, dynamite（ダイナマイト）も同じ語根を持つ。音楽における dynamics は、fortissimo から pianissimo までの音量の幅とその変化を指す包括的な用語で、個々の記号（f、p、crescendo など）を束ねる上位概念にあたる。',
      },
    ],
    confusions: [],
  },

  'leise': {
    lead: 'Leise はドイツ語で「静かに、弱く」を意味し、イタリア語の piano に相当する。',
    sections: [
      {
        heading: 'piano との使い分け',
        body: 'ドイツ語圏の作曲家でも演奏指示自体はイタリア語で書くのが伝統的な慣習であり、leise が実際の楽譜に強弱記号として書き込まれる例は piano ほど多くない。leise はむしろ、曲名や発想標語、歌曲の歌詞の中で「静かに」という意味を表す際に使われることが多い語。',
      },
    ],
    confusions: [
      { term: 'Piano', slug: 'piano', note: 'イタリア語での同義語。強弱記号としてはこちらが標準的に使われる。' },
    ],
  },

  'fort': {
    lead: 'Fort はフランス語で「強く」を意味し、イタリア語の forte に相当する。ともにラテン語 fortis（強い）に由来する。',
    sections: [
      {
        heading: '各国語に共通する語根',
        body: 'ラテン語 fortis は、イタリア語 forte、フランス語 fort、そして英語の fort（要塞）、force（力）に至るまで、ロマンス諸語と英語の双方に語根を残している。フランス語の楽譜で fort が使われる場合も、実際にはイタリア語の演奏指示が国際的な慣習として優先されることが多く、fort 単独での表記は限定的。',
      },
    ],
    confusions: [
      { term: 'Forte', slug: 'forte', note: 'イタリア語での同義語。強弱記号としてはこちらが標準的に使われる。' },
    ],
  },

  'sotto-piano': {
    lead: 'Sotto piano は「極めて弱いピアノ」。sotto（〜の下に）と piano（弱く）の組み合わせで、文字通りには「piano より下」を意味する。',
    sections: [
      {
        heading: '「下」で強弱を表す発想',
        body: 'sotto はラテン語 subtus（下に）に由来する前置詞で、音量の強弱を上下の位置関係になぞらえる発想がここにも表れている。pianissimo が piano の最上級（-issimo）という文法的な強調であるのに対し、sotto piano は「piano のさらに下」という空間的な比喩で弱音を表す点が異なる。',
      },
    ],
    confusions: [
      { term: 'Pianissimo', slug: 'pianissimo', note: '同じく piano より弱い音量を指すが、最上級による表現。' },
    ],
  },

  'diluendo': {
    lead: 'Diluendo は「消えゆくように」。動詞 diluire（薄める、希釈する）の現在分詞形で、ラテン語 diluere（洗い流す、薄める）に由来する。',
    sections: [
      {
        heading: '「薄まる」という発想',
        body: 'diluire は英語の dilute（薄める）と同じ語根を持つ動詞で、液体が薄まっていく様子を表す。diluendo が指す音の消え方は、morendo（死にゆくように）のような重さを伴う消え方ではなく、音がだんだん希薄になり、輪郭を失いながら透明になっていくイメージに近い。',
      },
    ],
    confusions: [
      { term: 'Morendo', slug: 'morendo', note: '「死にゆくように」。diluendo より重く、生命が絶えるイメージを伴う。' },
    ],
  },

  'estinto': {
    lead: 'Estinto は「絶え入るように」。動詞 estinguere（消す、絶やす）の過去分詞で、ラテン語 exstinguere（ex＋stinguere「消す」）に由来する。',
    sections: [
      {
        heading: '「火を消す」動詞から',
        body: 'stinguere はもともと燃えている火を消す動作を指す動詞で、英語の extinguish, extinct（絶滅した）も同じ語根を持つ。estinto が求める弱音は、単に音量が小さいだけでなく、命の火が消え入るような、音の存在感そのものが消滅する寸前の状態を指す。',
      },
    ],
    confusions: [
      { term: 'Morendo', slug: 'morendo', note: '「死にゆくように」。estinto は消滅の瞬間、morendo は消えていく過程を指す。' },
    ],
  },

  'expansion': {
    lead: 'Expansion（エクスパンション）は「広がり、拡張」を意味する英語で、con espansione のイタリア語 espansione と同じくラテン語 expandere に由来する。',
    sections: [
      {
        heading: 'con espansione との関係',
        body: 'expansion は英語の音楽用語として使われる場合、イタリア語 con espansione とほぼ同じ内容、すなわち音量だけでなく間やフレーズの広がりを指す。語根はまったく同じで、単に言語が異なるだけの関係にある。',
      },
    ],
    confusions: [
      { term: 'Con espansione', slug: 'con-espansione', note: 'イタリア語での同義語。演奏上のヒントはこちらに詳しい。' },
    ],
  },

  'abnehmend': {
    lead: 'Abnehmend はドイツ語で「だんだん弱く」を意味し、イタリア語の diminuendo に相当する。動詞 abnehmen（減る、取り去る）の現在分詞形。',
    sections: [
      {
        heading: 'ab- が持つ「離れる」イメージ',
        body: 'ドイツ語の接頭辞 ab- は「〜から離れて、外れて」という方向を表し、nehmen（取る）と組み合わさった abnehmen は「取り去る、減っていく」を意味する。diminuendo がラテン語 minuere（小さくする）に由来し「小さくなっていく」ことに重心を置くのに対し、abnehmend は「量が引かれていく」という発想の違いがある。',
      },
    ],
    confusions: [
      { term: 'Diminuendo', slug: 'diminuendo', note: 'イタリア語での同義語。強弱記号としてはこちらが標準的に使われる。' },
    ],
  },
  'allemande': {
    lead: 'Allemande（アルマンド）はフランス語で「ドイツの（舞曲）」を意味し、バロック組曲の冒頭に置かれることが多い4拍子の器楽曲。18世紀には実際に踊られる舞曲ではなく、様式化された抽象的な楽章になっていた。',
    sections: [
      {
        heading: '短い上拍から始まる',
        body: 'アルマンドの多くは、小節の頭ではなく直前の拍から始まる短い上拍（アウフタクト）を持つ。この開始の仕方と、各声部が互いを模倣し合うような書き方が組み合わさり、落ち着いた歩みの中に声部間の対話が生まれる。速度は中庸で、極端に速くも遅くもならない。',
      },
      {
        heading: '組曲の中の位置',
        body: 'バロック組曲の標準的な並びは、アルマンド・クーラント・サラバンド・ジーグの4楽章を核とする。アルマンドはこの並びの先頭に置かれ、後に続く楽章がテンポや拍子の点で対照を作っていく出発点としての役割を持つ。',
      },
    ],
    confusions: [
      { term: 'Courante', slug: 'courante', note: '組曲でアルマンドの次に置かれる楽章。3拍子系で、アルマンドより動きが速い。' },
      { term: 'Sarabande', slug: 'sarabande', note: '組曲の3番目に置かれることが多い、遅い3拍子の楽章。' },
    ],
    works: [
      { title: 'バッハ フランス組曲・イギリス組曲・パルティータ', note: 'いずれも冒頭にアルマンドを置く、バロック組曲の標準的な構成を示す。' },
    ],
  },

  'courante': {
    lead: 'Courante（クーラント）はフランス語 courir（走る）に由来する3拍子系の舞曲で、バロック組曲ではアルマンドに続く2番目の楽章に置かれることが多い。',
    sections: [
      {
        heading: '2つの系統',
        body: 'クーラントにはフランス系とイタリア系の2つの様式がある。フランス風クーラント（courante）は3/2拍子と6/4拍子が交互に感じられる複雑なヘミオラを含み、テンポは遅めで対位法的。イタリア風コレンテ（corrente）は3/4や3/8で書かれ、テンポが速く、走るような音型が続く、より和声的な書法を持つ。同じ名前の由来を持ちながら、実際の性格はかなり異なる。',
      },
      {
        heading: '拍子表記の意味',
        body: 'フランス風クーラントで3/2拍子と6/4拍子が交錯するのは記譜上の癖ではなく、2拍子的なまとまりと3拍子的なまとまりが同じ小節内でせめぎ合う効果を狙ったもので、演奏者はどちらの拍子で感じるべきかを楽句ごとに判断する必要がある。',
      },
    ],
    confusions: [
      { term: 'Allemande', slug: 'allemande', note: 'クーラントの前に置かれる4拍子の楽章。' },
      { term: 'Gigue', slug: 'gigue', note: '組曲の最後に置かれる、複合拍子の速い楽章。' },
    ],
  },

  'sarabande': {
    lead: 'Sarabande（サラバンド）は遅い3拍子の荘重な舞曲で、バロック組曲では3番目、感情の頂点となる楽章に置かれることが多い。しかし元々は正反対の、速く激しい舞曲だった。',
    sections: [
      {
        heading: '速い舞曲から遅い舞曲へ',
        body: '16世紀のスペインでサラバンドは、身体の動きが大きく扇情的とみなされたために1583年に禁止令が出されるほど激しい踊りだった。この舞曲がフランスの宮廷に取り入れられる過程で性格が一変し、17世紀には遅く威厳のある3拍子の舞曲として定着した。どのように、なぜこれほど劇的に性格が変わったかについては諸説あり、確定していない部分が多い。',
      },
      {
        heading: '2拍目への重み',
        body: 'フランス化されたサラバンドの特徴は、3拍子の2拍目に重みが置かれること。しばしば2拍目が付点リズムで長く伸ばされ、通常の3拍子が持つ1拍目への重心とは異なる、独特の足取りの遅さを生む。',
      },
    ],
    confusions: [
      { term: 'Chaconne', slug: 'chaconne', note: '同じく3拍子で2拍目に重みを置くことが多いが、低音や和声進行の反復による変奏形式である点が異なる。' },
      { term: 'Siciliana', slug: 'siciliana', note: '牧歌的な性格を持つ複合拍子の舞曲で、サラバンドとは拍子・性格ともに異なる。' },
    ],
    works: [
      { title: 'バッハ 無伴奏チェロ組曲', note: '各組曲にサラバンド楽章を含み、遅い3拍子の性格を示す代表例として広く演奏される。' },
    ],
  },

  'gigue': {
    lead: 'Gigue（ジーグ）は複合拍子（6/8や12/8など）の活発な舞曲で、バロック組曲の最後に置かれることが多い。英語のjig（ジグ）と同系の語。',
    sections: [
      {
        heading: '前半と後半の関係',
        body: 'ジーグの多くは2部形式（AABB）で書かれ、前半で提示された主題が、後半では上下を逆にした形（反行形）で現れることが多い。冒頭がフーガのように模倣で始まる書き方も多く、組曲の中では最も対位法的に書き込まれた楽章になりやすい。',
      },
      {
        heading: '組曲の締めくくり',
        body: '遅く重々しいサラバンドの後に置かれることで、組曲全体を活発な気分で締めくくる役割を持つ。跳ねるような複合拍子のリズムは、それまでの楽章の拍子感と明確な対照をなす。',
      },
    ],
    confusions: [
      { term: 'Jig', slug: 'jig', note: '英語圏の民俗舞曲としてのジグ。ジーグはこれが大陸の器楽組曲に取り入れられ様式化されたもの。' },
      { term: 'Tarentella', slug: 'tarentella', note: '同じく速い複合拍子系の舞曲だが、南イタリア起源で性格が異なる。' },
    ],
  },

  'gavotte': {
    lead: 'Gavotte（ガヴォット）は中庸な速さの2拍子（4/4または2/2）のフランス舞曲。小節の頭ではなく、小節の半ばから始まる独特のフレーズ構造を持つ。',
    sections: [
      {
        heading: '小節半ばで始まるフレーズ',
        body: 'ガヴォットの旋律句は通常、小節の3拍目（4/4の場合）から始まり、次の小節の2拍目で終わる。この「半小節ずれた」フレーズの切り方が、他の多くの舞曲にはない独特の弾みを生む。演奏する際は、小節線ではなくこのフレーズの区切りを意識する必要がある。',
      },
      {
        heading: '組曲の中の位置',
        body: 'アルマンド・クーラント・サラバンド・ジーグという核となる4楽章に対し、ガヴォットはメヌエットやブーレとともに、サラバンドとジーグの間に自由に挿入される「ガランテリー」と呼ばれる任意楽章の一つに数えられる。',
      },
    ],
    confusions: [
      { term: 'Passepied', slug: 'passepied', note: '同じくガランテリーに分類される3拍子の舞曲で、ガヴォットより速い。' },
      { term: 'Bourrée', slug: 'bourrée', note: '同じく2拍子系のガランテリーだが、上拍の長さが異なる。' },
    ],
  },

  'passepied': {
    lead: 'Passepied（パスピエ）は速い3拍子（3/8または6/8）のフランス舞曲で、性格の近いメヌエットより軽快なテンポで踊られる。',
    sections: [
      {
        heading: '起源と性格',
        body: 'ブルターニュ地方の民俗舞曲に由来するとされ、17世紀にフランス宮廷に取り入れられて洗練された。メヌエットと拍子・性格が近いため混同されやすいが、パスピエは上拍を持ち、テンポも速い点で区別される。',
      },
      {
        heading: '組曲の中の位置',
        body: 'ガヴォットやブーレと同じく、バロック組曲では任意楽章（ガランテリー）として、サラバンドとジーグの間に挿入されることが多い。',
      },
    ],
    confusions: [
      { term: 'Gavotte', slug: 'gavotte', note: '同じくガランテリーに分類される2拍子の舞曲。パスピエは3拍子で、より速い。' },
    ],
  },

  'siciliana': {
    lead: 'Siciliana（シチリアーナ）は複合拍子（6/8や12/8）で書かれる、付点リズムを特徴とする牧歌的な楽曲。多くは短調で、物悲しく穏やかな性格を持つ。',
    sections: [
      {
        heading: '付点リズムと牧歌的性格',
        body: '特徴的なのは、長短のリズムが規則的に繰り返される付点のパターンで、これがゆったりと揺れるような足取りを作る。羊飼いの笛の音を思わせる旋律と結びつけられることが多く、オペラや器楽曲で牧歌的な場面を描く際にしばしば用いられる。',
      },
      {
        heading: '名称と起源をめぐる議論',
        body: '名称はシチリア島に由来すると考えられているが、実際のシチリア民俗舞踊との直接的な結びつきがどの程度確かなものかについては、音楽学者の間でも見解が分かれている。',
      },
    ],
    confusions: [
      { term: 'Gigue', slug: 'gigue', note: '同じ複合拍子系だが、ジーグは速く活発、シチリアーナは緩やかで牧歌的という対照的な性格を持つ。' },
    ],
  },
  'subject': {
    lead: 'Subject（主題）はフーガの核となる旋律で、楽曲冒頭で単独の声部により、伴奏を伴わずに提示される。',
    sections: [
      {
        heading: '単独で提示される理由',
        body: 'フーガは複数の声部が同じ主題を順に模倣していく形式であるため、最初にその主題がどのような旋律なのかを聴き手に明確に印象づける必要がある。そのため主題は最初、他のどの声部にも重ねられず、単独で鳴らされる。2番目の声部が主題を模倣し始めた時点で、最初の声部は主題に対する対旋律（対主題）を奏し始める。',
      },
      {
        heading: '主題の性格が展開を決める',
        body: '主題に含まれる音程やリズムの特徴は、後の展開部（エピソード）でどのように主題を分解・変形できるかを左右する。跳躍を含む主題は反行（上下逆転）や転回対位法との相性がよく、細かい音価を含む主題は縮小・拡大の技法に向く、というように、主題そのものの形が曲全体の可能性を規定する。',
      },
    ],
    confusions: [
      { term: 'Answer', slug: 'answer', note: '主題が2番目の声部に模倣される際の形。' },
      { term: 'Countersubject', slug: 'countersubject', note: '主題を提示した声部が、答唱に対して奏する対旋律。' },
    ],
  },

  'answer': {
    lead: 'Answer（答唱）は、フーガの主題が2番目の声部で模倣される際の呼び名。多くは主調に対する属調（5度上、または4度下）に移調されて現れる。',
    sections: [
      {
        heading: 'なぜ属調に移すのか',
        body: '主題をそのまま同じ高さで重ねると声部同士がぶつかりやすく、また調性的な広がりも生まれにくい。属調に移すことで、主題（トニック）と答唱（ドミナント）という2つの調の領域が生まれ、これが曲全体の調的な骨格の出発点になる。',
      },
      {
        heading: '正格と変格',
        body: '答唱には、主題の音程関係をそのまま正確に移調する「正格の答唱」と、主題冒頭の跳躍などを主調・属調の関係に収まるよう微調整する「変格の答唱」の2種類がある。どちらを用いるかは主題の形によって決まる。',
      },
    ],
    confusions: [
      { term: 'Real answer', slug: 'real-answer', note: '主題を正確に移調する答唱の形。' },
      { term: 'Tonal answer', slug: 'tonal-answer', note: '音程を調整して移調する答唱の形。' },
    ],
  },

  'real-answer': {
    lead: 'Real answer（正格の答唱）は、フーガの主題を音程関係を一切変えずに、そのまま属調（多くは5度上）へ移調した答唱。',
    sections: [
      {
        heading: '正確な移調がもたらす効果',
        body: '主題の音程がすべて保たれるため、答唱は主題の完全な「コピー」として聴こえる。主題自体が属調へ跳躍する音を含まない場合や、旋律的な同一性を強く保ちたい場合に用いられやすい。',
      },
      {
        heading: '変格の答唱との使い分け',
        body: '主題の冒頭が主音から属音へ跳躍するような形を持つ場合、正格のまま移調すると新しい調の中心が不明瞭になることがある。そのような主題では、次に述べる変格の答唱（tonal answer）が選ばれることが多い。',
      },
    ],
    confusions: [
      { term: 'Tonal answer', slug: 'tonal-answer', note: '主題の音程を一部調整して移調する答唱。冒頭に跳躍を含む主題で選ばれやすい。' },
      { term: 'Subject', slug: 'subject', note: '答唱のもとになる、最初に提示される主題。' },
    ],
  },

  'tonal-answer': {
    lead: 'Tonal answer（変格の答唱）は、フーガの主題を属調へ移調する際、冒頭部分などの音程を意図的に調整した答唱。正確な移調ではない点が正格の答唱（real answer）と異なる。',
    sections: [
      {
        heading: '調整が必要になる場合',
        body: '主題の冒頭が主音から属音へ跳躍する形を持つとき、これをそのまま属調に移調すると、答唱の冒頭は属音から主音の上の音へ跳躍することになり、新しい調の中心である属音が旋律の重心として響きにくくなる。変格の答唱では、この跳躍の音程を調整し、答唱の冒頭が属調の主音を明確に示すようにする。',
      },
      {
        heading: '主題の一部だけが変わる',
        body: '調整されるのは通常、主題の冒頭部分のみで、主題の残りの部分はそのまま移調される。そのため答唱は主題と完全に同じ形にはならないが、聴き手には「同じ主題が違う調で現れている」と自然に認識される程度の変化にとどまる。',
      },
    ],
    confusions: [
      { term: 'Real answer', slug: 'real-answer', note: '音程を一切変えずに移調する答唱。' },
    ],
  },

  'countersubject': {
    lead: 'Countersubject（対主題）は、主題を提示した声部が、別の声部が答唱を奏している間に重ねる対旋律。',
    sections: [
      {
        heading: '主題との組み合わせを前提に書かれる',
        body: '対主題は単独の旋律としてではなく、答唱と同時に鳴らされることを前提に作られる。多くのフーガでは、この対主題が曲中で繰り返し主題や答唱に伴って現れ、いわば「主題の相棒」として機能する。すべてのフーガに固定した対主題があるわけではなく、声部ごとに異なる対旋律が自由に付けられる場合もある。',
      },
      {
        heading: '転回対位法との関係',
        body: '主題と対主題が、上下を入れ替えても（つまり対主題を主題より低い声部に置いても）不協和を作らずに響き合うよう書かれていることがあり、この性質は転回対位法と呼ばれる。すべての対主題がこの条件を満たすわけではないが、満たす場合は曲中でより自由に声部を組み替えることができる。',
      },
    ],
    confusions: [
      { term: 'Subject', slug: 'subject', note: '対主題が寄り添う相手となる、フーガの主旋律。' },
    ],
  },

  'episodes': {
    lead: 'Episodes（エピソード、間奏部）は、フーガの中で主題や答唱が完全な形では現れない、つなぎの部分。',
    sections: [
      {
        heading: '主題の断片で作られる',
        body: 'エピソードは主題全体をそのまま使うのではなく、主題や対主題の一部の音型を取り出し、それを異なる高さで繰り返す（模進、ゼクエンツ）ことで作られることが多い。そのため聴き手は、主題そのものは鳴っていないのに、どこかで聴いた素材が形を変えて流れているという印象を受ける。',
      },
      {
        heading: '転調の役割も担う',
        body: 'エピソードは、ある調での主題提示と、次の調での主題提示の間をつなぐ役割も持つ。模進を用いることで、調を少しずつ移動させながら次の主題提示にふさわしい調へ自然に導くことができる。',
      },
    ],
    confusions: [
      { term: 'Subject', slug: 'subject', note: 'エピソードで断片として使われる素材のもとになる主題。' },
    ],
  },

  'stretto': {
    lead: 'Stretto（ストレット）は、フーガで主題が本来の間隔よりも早いタイミングで次の声部に模倣され、複数の主題が重なり合う技法。曲の緊迫感を高めるために使われる。',
    sections: [
      {
        heading: '重なりが生む切迫感',
        body: '通常、ある声部が主題を歌い終えてから次の声部が主題を始めるが、ストレットでは前の声部の主題がまだ鳴っている途中で次の声部が主題を始める。複数の主題が追いかけ合うように重なるため、声部が互いを追い立てるような切迫した印象が生まれる。',
      },
      {
        heading: '曲の終盤に置かれやすい理由',
        body: '主題同士が密に重なるストレットは、和声的にも技巧的にも緊張度が高く、曲の中で最も密度の高い瞬間になりやすい。このため、曲全体を締めくくる直前、クライマックスとして曲の終盤に置かれることが多い。',
      },
    ],
    confusions: [
      { term: 'Canon', slug: 'canon', note: '一つの旋律を厳格に模倣し続ける形式。ストレットはフーガの主題が部分的・一時的に重なる技法で、曲全体の構造ではない。' },
    ],
  },
  'monophony': {
    lead: 'Monophony（モノフォニー、単旋律）は、単一の旋律線だけで構成される音楽組織。伴奏や和声を伴わない。ギリシャ語 monos（単一）と phone（音）から。',
    sections: [
      {
        heading: '複数人で歌っても単旋律',
        body: 'モノフォニーは声部の数ではなく、和声の有無で決まる。大勢が同じ旋律を斉唱する場合も、鳴っている音の高さは常に一つ（またはオクターブ違いの同じ音）であるため、モノフォニーに分類される。中世のグレゴリオ聖歌が代表例で、独立した伴奏声部を持たない。',
      },
      {
        heading: '対義語との関係',
        body: '複数の独立した旋律が同時に進行する状態はポリフォニー、旋律と伴奏に役割が分かれた状態はホモフォニーと呼ばれ、モノフォニーはこれらいずれとも異なる、もっとも単純な音楽組織にあたる。',
      },
    ],
    confusions: [
      { term: 'Homophony', slug: 'homophony', note: '旋律に和声的な伴奏が付く組織。モノフォニーには伴奏がない。' },
      { term: 'Unison', slug: 'unison', note: '複数の声部が同じ音（またはオクターブ違い）を同時に鳴らす状態。モノフォニーの一形態といえる。' },
    ],
  },

  'homophony': {
    lead: 'Homophony（ホモフォニー、和声的音楽）は、主旋律と、それを支える和声的な伴奏とに役割が分かれた音楽組織。ギリシャ語 homos（同じ）と phone（音）から。',
    sections: [
      {
        heading: '主従関係のある声部',
        body: 'ポリフォニーでは各声部が対等に独立した旋律を担うのに対し、ホモフォニーでは1つの声部（多くは最高音）が旋律を担い、他の声部は和音を構成する伴奏に徹する。ポピュラー音楽の大半や、古典派以降の多くの器楽曲がこの組織を基本とする。',
      },
      {
        heading: '和声リズムの一致',
        body: 'ホモフォニーの一種として、すべての声部が同じリズムで動く「コラール様式」（ホモリズミック）がある。ホモフォニーはより広い概念で、伴奏声部のリズムが旋律と一致していなくても、和声的に旋律を支えていればホモフォニーに含まれる。',
      },
    ],
    confusions: [
      { term: 'Polyphony', slug: 'polyphony', note: '複数の声部が対等に独立した旋律を持つ組織。ホモフォニーでは声部に主従がある。' },
      { term: 'Monophony', slug: 'monophony', note: '伴奏を持たない単一の旋律線。' },
    ],
  },

  'polyphony': {
    lead: 'Polyphony（ポリフォニー、多声音楽）は、複数の独立した旋律線が同時に進行する音楽組織。ギリシャ語 polys（多くの）と phone（音）から。',
    sections: [
      {
        heading: '声部の対等性',
        body: 'ポリフォニーでは、各声部がそれぞれ旋律として意味を持ち、単独で歌っても成立する程度の独立性を持つ。フーガはポリフォニーの代表的な形式で、複数の声部が同じ主題を時間差で模倣しながら、互いに独立した動きを保つ。',
      },
      {
        heading: '和声との両立',
        body: '声部が独立していることと、全体として和声的に響くこととは矛盾しない。バロック期以降の多くのポリフォニー作品は、対位法の規則によって声部の独立性を保ちながら、同時に和声の枠組みの中に収まるよう書かれている。',
      },
    ],
    confusions: [
      { term: 'Homophony', slug: 'homophony', note: '旋律と伴奏に役割が分かれた組織。ポリフォニーでは声部が対等。' },
      { term: 'Heterophony', slug: 'heterophony', note: '一つの旋律を複数の演奏者がわずかに異なる形で同時に演奏する組織。声部が独立した旋律として設計されるポリフォニーとは成り立ちが異なる。' },
    ],
  },

  'heterophony': {
    lead: 'Heterophony（ヘテロフォニー）は、本来同じ旋律を演奏しているはずの複数の声部が、装飾やタイミングのわずかな違いによって同時にずれて響く音楽組織。ギリシャ語 heteros（異なる）と phone（音）から。',
    sections: [
      {
        heading: 'ポリフォニーとの違い',
        body: 'ポリフォニーの各声部があらかじめ異なる旋律として設計されているのに対し、ヘテロフォニーは元々同じ一つの旋律から出発し、演奏する人・楽器がそれぞれ独自の装飾や間の取り方を加えることで結果的に生じるずれである。作曲時にあらかじめ複数の声部が書き分けられているとは限らない。',
      },
      {
        heading: '見られる音楽の例',
        body: 'インドネシアのガムラン合奏や、多くの民俗音楽の合奏で、同じ旋律を異なる楽器や声が少しずつ異なる装飾を加えながら同時に奏する場合に見られる組織で、西洋の五線譜による記譜法では捉えにくい性質を持つ。',
      },
    ],
    confusions: [
      { term: 'Polyphony', slug: 'polyphony', note: 'あらかじめ独立した複数の旋律が組み合わされる組織。ヘテロフォニーは一つの旋律の変奏的なずれから生まれる。' },
      { term: 'Gamelan', slug: 'gamelan', note: 'ヘテロフォニーの組織がよく見られるインドネシアの合奏形態。' },
    ],
  },
  'ground-bass': {
    lead: 'Ground bass（グラウンドベース）は、曲全体を通じて低音部に繰り返される旋律型。上声部は変化し続けるのに対し、低音だけが同じ形を保ち続ける。',
    sections: [
      {
        heading: '固定される声部と変化する声部',
        body: 'グラウンドベースの曲では、低音の旋律型（多くは4〜8小節程度の長さ）が繰り返されるたびに、その上に乗る旋律や和声処理が変奏されていく。低音自体はほとんど変化しないため、聴き手は低音の反復を土台として、上声部の変化に注意を向けることになる。',
      },
      {
        heading: 'パッサカリアやシャコンヌとの関係',
        body: 'グラウンドベースは英語圏で使われる呼び名で、同じ原理に基づく大陸ヨーロッパの形式にパッサカリアやシャコンヌがある。厳密な使い分けは曲や国によって異なり、低音の型が和声進行として抽象化されている場合はパッサカリアやシャコンヌ、具体的な旋律型として反復される場合はグラウンドベースと呼ばれる傾向があるが、この境界は必ずしも明確ではない。',
      },
    ],
    confusions: [
      { term: 'Passacaglia', slug: 'passacaglia', note: '低音や和声進行の反復に基づく変奏形式。グラウンドベースとほぼ同じ原理を持つ。' },
      { term: 'Chaconne', slug: 'chaconne', note: '同じく反復に基づく変奏形式で、パッサカリアと厳密な区別が難しい。' },
    ],
  },

  'passacaglia': {
    lead: 'Passacaglia（パッサカリア）は、低音または和声進行の反復を土台に、その上で変奏を重ねていく形式。多くは重々しい3拍子で書かれる。',
    sections: [
      {
        heading: '起源',
        body: '語源はスペイン語の pasar（歩く、通る）と calle（通り）の組み合わせとされ、もともとは弦楽器の伴奏で街頭を歩きながら奏される即興的な間奏だったと考えられている。17世紀にイタリアやフランスの器楽曲に取り入れられ、荘重な変奏形式として発展した。',
      },
      {
        heading: 'シャコンヌとの区別をめぐる議論',
        body: 'シャコンヌと非常に近い性格を持ち、両者を明確に区別する基準については音楽学者の間でも議論がある。バッハ自身が同種の作品に「パッサカリア」「シャコンヌ」の両方の名前を使っていることも、この区別が当時から厳密ではなかったことを示している。',
      },
    ],
    confusions: [
      { term: 'Chaconne', slug: 'chaconne', note: '性格が非常に近く、両者の厳密な区別には議論がある。' },
      { term: 'Ground bass', slug: 'ground-bass', note: '低音の反復という同じ原理を指す、より広い（また英語圏で好まれる）呼び方。' },
    ],
    works: [
      { title: 'バッハ パッサカリアとフーガ ハ短調', note: 'オルガンのための代表的なパッサカリア。低音主題の反復の上に変奏が積み重ねられる。' },
    ],
  },

  'chaconne': {
    lead: 'Chaconne（シャコンヌ）は、繰り返される低音または和声進行を土台に変奏を重ねていく形式で、多くは3拍子。パッサカリアと極めて近い性格を持つ。',
    sections: [
      {
        heading: '起源をめぐる議論',
        body: 'サラバンドと同様、16世紀のスペインまたはラテンアメリカ起源とされる速く情熱的な舞曲・歌が元になったと考えられているが、正確な発祥地や成立の経緯は確定していない。フランスの宮廷に取り入れられる過程で、次第に落ち着いた性格の変奏形式へと変化した。',
      },
      {
        heading: 'パッサカリアとの違いをめぐる議論',
        body: '厳密な区別としては、和声進行の反復に基づくのがシャコンヌ、独立した低音旋律の反復に基づくのがパッサカリアとする説があるが、実作品ではこの原則に当てはまらない例も多く、両者を統一的に区別する基準は定まっていない。',
      },
    ],
    confusions: [
      { term: 'Passacaglia', slug: 'passacaglia', note: '同じ原理に基づく変奏形式で、区別の基準には議論がある。' },
      { term: 'Sarabande', slug: 'sarabande', note: '同じく3拍子で2拍目に重みを置く舞曲だが、変奏形式ではない。' },
    ],
    works: [
      { title: 'バッハ 無伴奏ヴァイオリンのためのパルティータ第2番', note: '終曲の「シャコンヌ」は、独奏ヴァイオリンだけで変奏を積み重ねる代表作として知られる。' },
    ],
  },

  'basso-continuo': {
    lead: 'Basso continuo（通奏低音）は、バロック音楽で標準的だった伴奏の仕組み。低音の旋律線と、それに付けられた和音の指示（数字）をもとに、鍵盤奏者などがその場で和音を組み立てて演奏する。',
    sections: [
      {
        heading: '数字付き低音との関係',
        body: '通奏低音のパートには、低音の音符の下や上に数字が書き添えられることが多く、これは低音から数えた音程を示す。演奏者はこの数字をもとに、どの和音を重ねるかをその場で判断して弾く。同じ低音・同じ数字でも、演奏者によって選ぶ音の並べ方は異なってよく、即興の要素を含む。',
      },
      {
        heading: '担当する楽器',
        body: '通奏低音は通常、和音を鳴らせる楽器（チェンバロ、オルガン、リュートなど）と、低音の旋律だけを担う楽器（チェロ、ヴィオローネ、ファゴットなど）の組み合わせで演奏される。前者が和声を、後者が低音線をそれぞれ担当し、両者が揃って一つの通奏低音パートを構成する。',
      },
    ],
    confusions: [
      { term: 'Continuo', slug: 'continuo', note: 'basso continuo の略称として使われることが多い呼び方。' },
      { term: 'Ground bass', slug: 'ground-bass', note: '低音が同じ旋律型を繰り返す形式。通奏低音は伴奏の仕組みそのものを指し、低音が繰り返されるとは限らない。' },
    ],
  },

  'continuo': {
    lead: 'Continuo（コンティヌオ）は basso continuo（通奏低音）の略称。低音の旋律と和音の指示にもとづき、鍵盤楽器などが和声を即興的に補う、バロック音楽の伴奏の仕組みを指す。',
    sections: [
      {
        heading: '呼び方の違い',
        body: '「通奏低音」「basso continuo」「continuo」はいずれも同じ仕組みを指す呼び名で、意味の違いはない。楽譜や文献では文脈に応じて使い分けられているだけで、continuo はその中でも最も簡略な呼び方として使われる。',
      },
    ],
    confusions: [
      { term: 'Basso continuo', slug: 'basso-continuo', note: '正式名称。仕組みの詳しい説明はこちらを参照。' },
    ],
  },

  'walking-bass': {
    lead: 'Walking bass（ウォーキングベース）は、一定のテンポで音階的・順次進行的に動き続ける低音の伴奏形。ジャズやブルースで多用されるが、バロック音楽にも同様の書法が見られる。',
    sections: [
      {
        heading: '「歩く」ように動く低音',
        body: '和音の構成音だけを跳躍して結ぶのではなく、経過音を交えて隣り合う音へほぼ均等な音価で移動し続けるのが特徴。1拍に1音という規則的な足取りが、まるで人が一歩ずつ歩くような印象を生むことからこの名がある。',
      },
      {
        heading: '和声を示す役割',
        body: '規則的に動きながらも、各拍の音は多くの場合その瞬間の和音の構成音か、それに近い経過音であるため、ウォーキングベースは単なる伴奏にとどまらず、和声の進行を聴き手に伝える役割も担う。',
      },
    ],
    confusions: [
      { term: 'Ground bass', slug: 'ground-bass', note: '同じ旋律型を繰り返す低音。ウォーキングベースは型の反復ではなく、順次進行という動き方の特徴を指す。' },
    ],
  },

  'drone': {
    lead: 'Drone（ドローン）は、旋律の背後で音高を変えずに鳴らし続けられる持続音。単一またはごく少数の音が、曲全体を通じて（あるいは長い区間にわたって）保たれる。',
    sections: [
      {
        heading: '見られる楽器・音楽',
        body: 'バグパイプは構造上、常にドローン管から一定の音を鳴らし続けながら旋律管を演奏する楽器で、ドローンを伴う音楽の代表例。インド古典音楽のタンプーラも、旋律や即興の背後で主音と5度音などを鳴らし続けるドローン楽器として使われる。',
      },
      {
        heading: '和声的な役割',
        body: 'ドローンは変化しないため、その上を動く旋律との関係で協和・不協和の印象が生まれる。西洋の機能和声のように和音が次々に交代する音楽とは異なり、ドローンを土台とする音楽では、一つの基準音に対する旋律の動きそのものが響きの中心になる。',
      },
    ],
    confusions: [
      { term: 'Bourdon', slug: 'bourdon', note: 'ドローン音、またはそれを鳴らすパイプ・弦を指す語。ドローンとほぼ同義で使われる。' },
      { term: 'Ground bass', slug: 'ground-bass', note: '低音が旋律型として反復される仕組み。ドローンは音高が変化しない点で異なる。' },
    ],
  },
  'opera-seria': {
    lead: 'Opera seria（オペラ・セリア）は「まじめなオペラ」を意味し、18世紀のイタリアで主流だった、神話や古代史上の英雄を題材とする格式高いオペラの形式。',
    sections: [
      {
        heading: '定型化された構成',
        body: 'レチタティーヴォ（語りに近い、台詞を進める部分）とアリア（登場人物の感情を歌い込む部分）が明確に交互に置かれる構成が特徴。アリアの多くは、主部を繰り返す際に歌手が自由な装飾を加える「ダ・カーポ・アリア」の形式で書かれ、歌手の技巧を聴かせる場としての性格が強い。',
      },
      {
        heading: '喜劇的要素の排除',
        body: '題材は神話や古代の英雄に限られ、庶民的・滑稽な要素は原則として含まれない。この生真面目さと形式の硬直化が、後にオペラ・ブッファのような対照的なジャンルが人気を集める背景の一つになった。',
      },
    ],
    confusions: [
      { term: 'Opera buffa', slug: 'opera-buffa', note: '庶民的な題材を扱う喜劇的なオペラ。オペラ・セリアとは題材・性格ともに対照的。' },
    ],
  },

  'opera-buffa': {
    lead: 'Opera buffa（オペラ・ブッファ）は「喜劇的なオペラ」を意味し、18世紀イタリアで発展した、庶民的な登場人物と滑稽な筋を扱う喜歌劇の形式。',
    sections: [
      {
        heading: '重唱によるアンサンブル・フィナーレ',
        body: 'オペラ・セリアが独唱アリア中心であるのに対し、オペラ・ブッファでは複数の登場人物が同時に異なる感情や台詞を歌い合う重唱、特に幕の終わりを飾る大規模なアンサンブル・フィナーレが発展した点が特徴とされる。',
      },
      {
        heading: '題材の身近さ',
        body: '登場人物には召使いや商人など日常的な人物が多く用いられ、機知に富んだやり取りや誤解から生じる混乱が筋の中心になる。神話や英雄を扱うオペラ・セリアとは題材の点で明確に対照をなす。',
      },
    ],
    confusions: [
      { term: 'Opera seria', slug: 'opera-seria', note: '神話・英雄を題材とする格式高いオペラ。オペラ・ブッファと対照的なジャンル。' },
      { term: 'Operetta', slug: 'operetta', note: '19世紀以降に発展した、より小規模で軽快な歌劇。オペラ・ブッファの系譜に連なる。' },
    ],
    works: [
      { title: 'モーツァルト 《フィガロの結婚》', note: '召使いを主人公とする筋立てと重唱の充実が、オペラ・ブッファの性格をよく示す作品。' },
    ],
  },

  'singspiel': {
    lead: 'Singspiel（ジングシュピール）は、歌われる部分と台詞で語られる部分が交互に置かれる、ドイツ語圏の歌劇形式。',
    sections: [
      {
        heading: 'レチタティーヴォとの違い',
        body: 'イタリア・オペラでは物語を進める部分もレチタティーヴォという歌唱形式で歌われるのに対し、ジングシュピールではこの部分が完全な話し言葉の台詞として演じられる。歌と芝居がはっきり分かれた構成を持つ点が最大の特徴。',
      },
      {
        heading: 'ドイツ語による大衆性',
        body: 'イタリア語やフランス語で歌われる宮廷向けのオペラに対し、ジングシュピールは自国語であるドイツ語の台詞と歌詞を用いることで、より広い層の観客に親しまれる娯楽として発展した。',
      },
    ],
    confusions: [
      { term: 'Opera', slug: 'opera', note: '一般に、進行部分も含めてすべて歌われる歌劇。ジングシュピールは台詞と歌が分かれる点で異なる。' },
      { term: 'Operetta', slug: 'operetta', note: '同じく台詞と歌が交互に置かれる軽歌劇。より軽快で娯楽性の高い題材を扱うことが多い。' },
    ],
    works: [
      { title: 'モーツァルト 《魔笛》', note: '歌の部分と台詞の部分が明確に分かれた、ジングシュピールの代表作。' },
    ],
  },

  'grand-opera': {
    lead: 'Grand Opera（グランド・オペラ）は、19世紀フランスで発展した、台詞を一切含まず、大規模な合唱・バレエ・舞台装置を伴う壮大な様式のオペラ。',
    sections: [
      {
        heading: '規模の大きさが定義に含まれる',
        body: '通常4幕または5幕からなる長大な構成で、史実に基づく重厚な題材が好まれた。舞台転換や合唱、群衆場面を大規模に用い、多くの場合いずれかの幕にバレエの場面が組み込まれることが求められた。この規模の大きさと様式の徹底が、他のオペラのジャンルと区別する基準になっている。',
      },
      {
        heading: 'パリのオペラ座という制度',
        body: 'グランド・オペラという呼び名は、当時のパリ・オペラ座で上演されることを前提とした様式を指しており、単に「大規模なオペラ」という意味の緩やかな形容ではなく、特定の劇場と時代に結びついた歴史的なジャンル名として使われる。',
      },
    ],
    confusions: [
      { term: 'Opera seria', slug: 'opera-seria', note: '18世紀イタリアの格式高いオペラ。グランド・オペラは19世紀フランスに特有の様式で、時代・国が異なる。' },
    ],
  },

  'operetta': {
    lead: 'Operetta（オペレッタ）は「小さなオペラ」を意味し、19世紀に発展した、台詞を交え、軽快で娯楽性の高い内容を扱う小規模な歌劇。',
    sections: [
      {
        heading: 'オペラとの規模・内容の違い',
        body: '通常のオペラより上演時間が短く、編成も小さい。悲劇的な結末を避け、風刺や恋愛喜劇など軽い題材を好んで扱う。台詞の場面を交えるジングシュピールと構成上の共通点を持つが、オペレッタはより娯楽性・大衆性を前面に出したジャンルとして19世紀後半に独自の流れを作った。',
      },
      {
        heading: 'ミュージカルへの影響',
        body: '歌・台詞・ダンスを組み合わせる構成は、20世紀に発展するミュージカルの直接の先駆けとされる。実際、初期のミュージカルの多くはオペレッタの様式を強く引き継いでいた。',
      },
    ],
    confusions: [
      { term: 'Opera buffa', slug: 'opera-buffa', note: '18世紀イタリアの喜歌劇。オペレッタはその後の時代に発展した、より軽量な様式。' },
      { term: 'Musical', slug: 'musical', note: 'オペレッタの様式を引き継いで20世紀に発展した、歌・ダンス・芝居を融合する舞台芸術。' },
    ],
  },

  'intermezzo': {
    lead: 'Intermezzo（インテルメッツォ、間奏曲）は、元来オペラ・セリアの幕間に上演された、軽い内容の短い喜劇的作品を指した語。後には器楽曲の楽章の間に置かれる短い曲を指す語としても使われるようになった。',
    sections: [
      {
        heading: '幕間劇からの独立',
        body: '18世紀前半、格式張ったオペラ・セリアの幕間に、気分転換として上演された小規模な喜劇的作品がインテルメッツォと呼ばれた。これらは題材の軽さと親しみやすさから人気を集め、やがて幕間の添え物にとどまらず、独立した作品として上演されるようになり、オペラ・ブッファの成立に影響を与えたとされる。',
      },
      {
        heading: '器楽曲での用法',
        body: '19世紀以降は、交響曲や組曲の楽章の間に置かれる、比較的短く性格的な器楽曲を指す語としても使われるようになった。この用法では、幕間劇という原義から離れ、単に「間に置かれる小品」という意味で用いられている。',
      },
    ],
    confusions: [
      { term: 'Opera buffa', slug: 'opera-buffa', note: 'インテルメッツォの人気が成立に影響を与えたとされる、喜劇的なオペラのジャンル。' },
    ],
  },

  'cavatina': {
    lead: 'Cavatina（カヴァティーナ）は、通常のアリアより短く、主部の反復（ダ・カーポ）を伴わない、簡潔な叙情的独唱曲。',
    sections: [
      {
        heading: 'アリアとの構造的な違い',
        body: '18〜19世紀の標準的なアリアの多くは、主部を繰り返して歌手が装飾を加える機会を作る構成（ダ・カーポ形式）を持つのに対し、カヴァティーナはこの反復を持たず、一度きりの単純な形式で書かれることが多い。技巧を誇示するより、旋律の抒情性そのものを聴かせることに重きが置かれる。',
      },
    ],
    confusions: [
      { term: 'Opera seria', slug: 'opera-seria', note: 'ダ・カーポ・アリアを標準的な形式とするオペラ。カヴァティーナはこの反復構造を持たない点で対照的。' },
    ],
  },

  'zarzuela': {
    lead: 'Zarzuela（サルスエラ）は、歌われる場面と台詞で語られる場面を組み合わせた、スペイン独自の音楽劇の形式。',
    sections: [
      {
        heading: '台詞と歌の組み合わせ',
        body: 'ジングシュピールやオペレッタと同様、物語の進行を担う台詞の場面と、感情を歌い上げる音楽の場面が明確に分かれて構成される。スペインの民俗的な舞曲や旋律の要素を取り入れることが多く、題材にも自国の風俗を反映した作品が多い。',
      },
      {
        heading: '名称の由来',
        body: '名称は、この形式の初期の上演が行われたマドリード近郊の離宮「サルスエラ宮」に由来するとされる。',
      },
    ],
    confusions: [
      { term: 'Singspiel', slug: 'singspiel', note: '同じく台詞と歌を組み合わせるドイツ語圏の歌劇形式。' },
      { term: 'Operetta', slug: 'operetta', note: '同じく台詞を交える軽歌劇。サルスエラはスペインに特有の形式。' },
    ],
  },
  'ottava': {
    lead: 'Ottava（オッターヴァ、8va）は、記譜された音を実際にはオクターブ上げて（または下げて）演奏することを指示する記号。イタリア語で「8度」を意味する。',
    sections: [
      {
        heading: '記号の位置と効果の範囲',
        body: '五線の上に "8va" または "8" と書き、そこから点線を引いて効果の及ぶ範囲を示す。五線の上に書かれた場合はオクターブ上、五線の下に "8vb"（ottava bassa）として書かれた場合はオクターブ下で演奏する。点線が途切れる、または "loco" の指示がある位置まで効果が続く。',
      },
      {
        heading: '使われる理由',
        body: '実際の音高をそのまま五線に書くと、加線が何本も必要になり読みにくくなる場合がある。オッターヴァを使うことで、加線の少ない読みやすい高さに音符を書きながら、実際にはより高い（低い）音を指定できる。',
      },
    ],
    confusions: [
      { term: 'Quindicesima', slug: 'quindicesima', note: '2オクターブの移動を指示する記号。オッターヴァは1オクターブの移動を指す。' },
      { term: 'Loco', slug: 'loco', note: 'オッターヴァなどによる移動を解除し、記譜どおりの高さに戻す指示。' },
    ],
  },

  'quindicesima': {
    lead: 'Quindicesima（クインディチェジマ、15ma）は、記譜された音を実際には2オクターブ上げて（または下げて）演奏することを指示する記号。イタリア語で「15番目」を意味する。',
    sections: [
      {
        heading: 'オッターヴァとの関係',
        body: '1オクターブの移動を示すオッターヴァ（8va）に対し、クインディチェジマは2オクターブ分（8度＋8度で、起点から数えると15番目の音にあたる）の移動を示す。記譜法上の考え方はオッターヴァと同じで、五線の上または下に "15ma" と書き、点線で効果の及ぶ範囲を示す。',
      },
      {
        heading: '使われる場面',
        body: 'ピアノなど音域の広い楽器の極端に高い、または低い箇所で、加線を大量に使わずに済ませるために用いられる。1オクターブの移動では読みにくさが解消しきれない、非常に離れた音域を指定する際に選ばれる。',
      },
    ],
    confusions: [
      { term: 'Ottava', slug: 'ottava', note: '1オクターブの移動を指示する記号。' },
      { term: 'Loco', slug: 'loco', note: '移動の指示を解除し、記譜どおりの高さに戻す指示。' },
    ],
  },

  'loco': {
    lead: 'Loco（ロコ）は、オッターヴァ（8va）などによって移動していた演奏音高を解除し、記譜どおりの高さに戻すことを示す指示。イタリア語で「その場所で」を意味する。',
    sections: [
      {
        heading: '点線の終わりとの関係',
        body: 'オッターヴァやクインディチェジマの効果は、それを示す点線が終わる位置、または loco の指示がある位置で終わる。点線の終端だけで十分な場合も多いが、区切りを明確にしたい箇所では loco の文字が改めて書き添えられる。',
      },
    ],
    confusions: [
      { term: 'Ottava', slug: 'ottava', note: 'locoによって解除される、1オクターブの移動指示。' },
      { term: 'Quindicesima', slug: 'quindicesima', note: 'locoによって解除される、2オクターブの移動指示。' },
    ],
  },

  'natural': {
    lead: 'Natural（ナチュラル、本位記号）は、直前に付いていた変化記号（シャープやフラット）や調号の効果を打ち消し、音を幹音（変化していない元の高さ）に戻す記号。',
    sections: [
      {
        heading: '効力の範囲',
        body: 'シャープやフラットと同様、本位記号も原則としてその小節内、同じ高さの音符に対して効果を持ち続ける。小節をまたぐと効果は自動的に失われ、次の小節で同じ変化が必要な場合は改めて記号を書き直す必要がある。',
      },
      {
        heading: '調号との関係',
        body: '調号によってあらかじめシャープやフラットが指定されている音に対しても、本位記号はその効果を一時的に打ち消すために使われる。曲の途中で頻繁に調号と異なる音が必要になる場合、五線の見た目は本位記号とシャープ・フラットが混在した形になる。',
      },
    ],
    confusions: [
      { term: 'Sharp', slug: 'sharp', note: '音を半音上げる記号。ナチュラルはこの効果を打ち消す。' },
      { term: 'Flat', slug: 'flat', note: '音を半音下げる記号。ナチュラルはこの効果を打ち消す。' },
    ],
  },
  'consonance': {
    lead: 'Consonance（協和）は、複数の音が同時に鳴らされたときに、安定して心地よく溶け合って聴こえる響きの性質。',
    sections: [
      {
        heading: '物理的な裏づけ',
        body: '協和と感じられる音程の多くは、2つの音の周波数比が単純な整数比に近い関係にある。オクターブ（2:1）や完全5度（3:2）はその代表で、周波数比が単純であるほど、音波同士の重なりが規則的になり、うなりが少なく安定して聴こえる。ただし、どこまでを協和とみなすかは時代や文化によって基準が異なり、歴史的に協和の範囲は徐々に広がってきた。',
      },
      {
        heading: '不協和との相対性',
        body: '協和はそれ単独で絶対的に定義されるものではなく、不協和との対比の中で機能する。不協和な響きが協和へ解決することで音楽に進行感が生まれるため、協和は「動きが落ち着く到達点」としての役割を持つ。',
      },
    ],
    confusions: [
      { term: 'Consonant', slug: 'consonant', note: '協和という性質を持つ音・響きを形容する語。consonanceはその性質自体を指す名詞。' },
      { term: 'Dissonance', slug: 'dissonance', note: '協和の対義語にあたる、不安定な響きの性質。' },
    ],
  },

  'consonant': {
    lead: 'Consonant（コンソナント）は、協和（consonance）の性質を持つ、安定して心地よく響く音程や和音を形容する語。',
    sections: [
      {
        heading: 'consonanceとの違い',
        body: 'consonanceが「協和」という響きの性質・概念そのものを指す名詞であるのに対し、consonantはその性質を持つ具体的な音程・和音を形容する形容詞として使われる。「この音程はconsonantである」というように、個々の響きを評価する際に用いられる。',
      },
    ],
    confusions: [
      { term: 'Consonance', slug: 'consonance', note: '協和という響きの性質そのものを指す名詞。物理的な裏づけなどの詳しい説明はこちらを参照。' },
      { term: 'Dissonant', slug: 'dissonant', note: '不協和な響きを形容する対義語。' },
    ],
  },

  'dissonance': {
    lead: 'Dissonance（不協和）は、複数の音が同時に鳴らされたときに、緊張感を伴い、協和した響きへ進みたくなるような不安定さを感じさせる性質。',
    sections: [
      {
        heading: '緊張と解決',
        body: '不協和な響きは、それ自体で完結せず、より安定した協和の響きへ進むことを聴き手に予感させる。この「不安定から安定へ」という動きが、和声進行に方向性と推進力を与える。西洋の調性音楽は、不協和の生成と解決を繰り返す仕組みを軸に組み立てられている。',
      },
      {
        heading: '基準は時代とともに変化する',
        body: '何が不協和とみなされるかは固定的ではない。ルネサンス期には不協和とされた音程が、後の時代には協和として扱われるようになるなど、協和・不協和の境界線は音楽史の中で少しずつ移動してきた。20世紀以降の音楽では、不協和を「解決すべきもの」としてではなく、それ自体で独立した響きとして用いる作品も現れている。',
      },
    ],
    confusions: [
      { term: 'Consonance', slug: 'consonance', note: '不協和の対義語にあたる、安定した響きの性質。' },
      { term: 'Suspension', slug: 'suspension', note: '前の和音の音をわざと保持することで意図的に不協和を作り出し、その後解決させる技法。' },
    ],
  },

  'dissonant': {
    lead: 'Dissonant（ディソナント）は、不協和（dissonance）の性質を持つ、緊張感を伴う不安定な音程や和音を形容する語。',
    sections: [
      {
        heading: 'dissonanceとの違い',
        body: 'dissonanceが「不協和」という響きの性質・概念そのものを指す名詞であるのに対し、dissonantはその性質を持つ具体的な音程・和音を形容する形容詞として使われる。',
      },
    ],
    confusions: [
      { term: 'Dissonance', slug: 'dissonance', note: '不協和という響きの性質そのものを指す名詞。' },
      { term: 'Consonant', slug: 'consonant', note: '協和した響きを形容する対義語。' },
    ],
  },

  'resolution': {
    lead: 'Resolution（解決）は、不協和な音・和音が、それに続く協和した音・和音へ進む動きを指す用語。',
    sections: [
      {
        heading: '声部ごとの動き方',
        body: '和声全体としての解決は、多くの場合、不協和を構成する個々の音がそれぞれ隣り合う音へ順次進行することで実現する。特に、係留（サスペンション）で保持された不協和音は、下へ1音（多くは半音か全音）進んで解決するのが基本的な型とされる。',
      },
      {
        heading: '解決を先延ばしにする技法',
        body: '不協和がすぐには解決されず、別の不協和に進んでから改めて解決する、あるいは解決すべき音が別の声部に受け渡されるなど、解決を引き延ばす書法も多く使われる。これにより緊張が長く保たれ、実際に解決が訪れたときの効果が強まる。',
      },
    ],
    confusions: [
      { term: 'Suspension', slug: 'suspension', note: '不協和を意図的に作り出す技法。作られた不協和は、その後の解決によって完結する。' },
      { term: 'Dissonance', slug: 'dissonance', note: '解決される対象となる、不安定な響き。' },
    ],
  },

  'suspension': {
    lead: 'Suspension（サスペンション、係留）は、和音が交代する瞬間に、前の和音の音をあえてそのまま保持することで一時的な不協和を作り出し、その後隣の音へ進んで解決させる技法。',
    sections: [
      {
        heading: '3つの段階',
        body: 'サスペンションは通常、①前の和音の中で協和していた音を（②）次の和音に持ち越して不協和を作り、③その音が隣接する音へ下行して解決する、という3段階の流れを持つ。この流れのうち、持ち越された音が不協和として鳴っている瞬間そのものがサスペンションと呼ばれる。',
      },
      {
        heading: '緊張を作る手段としての価値',
        body: '和音が交代する瞬間に自然に生まれる協和ではなく、あえて音を遅らせて不協和を挟むことで、その解決の瞬間により強い安堵感を作り出す。旋律線を滑らかに保ちながら和声的な緊張を加えられる点で、対位法的な書法において重要な技法とされる。',
      },
    ],
    confusions: [
      { term: 'Resolution', slug: 'resolution', note: 'サスペンションで作られた不協和が、隣の音へ進んで安定する動き。' },
      { term: 'Dissonance', slug: 'dissonance', note: 'サスペンションによって一時的に作り出される、不安定な響きの性質。' },
    ],
  },

  'atonality': {
    lead: 'Atonality（無調）は、特定の音を中心（主音）とする調の枠組みを持たない音楽のあり方。20世紀初頭、シェーンベルクらの作品を通じて広く意識されるようになった語。',
    sections: [
      {
        heading: '調性からの離脱',
        body: '長調・短調のような調性音楽では、ある音（主音）を中心に他の音が引き寄せられ、和音の進行にも中心への求心力が働く。無調の音楽では、特定の音や和音が他より優先されることを避け、すべての音が対等に扱われることを目指す。',
      },
      {
        heading: '十二音技法との関係',
        body: '無調は特定の作曲技法を指す語ではなく、調の中心を持たないという結果的な性質を指す。十二音技法やセリー主義は、無調を実現するために考案された組織的な作曲手法の一つであり、無調そのものとは区別される。',
      },
    ],
    confusions: [
      { term: 'Twelve-tone technique', slug: 'twelve-tone-technique', note: '無調を組織的に実現するために考案された作曲技法の一つ。' },
    ],
  },

  'twelve-tone-technique': {
    lead: 'Twelve-tone technique（十二音技法）は、シェーンベルクが考案した作曲技法。1オクターブ内の12の半音すべてを、特定の順序（音列）で均等に使うことを原則とする。',
    sections: [
      {
        heading: '音列という骨格',
        body: '作曲の前に、12の音すべてを1回ずつ含む特定の並び順（音列、トーン・ロウ）を定める。曲中の旋律や和音は、この音列、およびそれを逆行させたり、上下を反転させたり、移調させたりした派生形から作られる。特定の音が繰り返し中心として扱われることを避けることで、無調の状態を組織的に維持する。',
      },
      {
        heading: '調性への回帰を防ぐ仕組み',
        body: '12の音を均等に、1周するまでは繰り返さずに使うという原則があるため、特定の音が主音のように突出して感じられにくくなる。これは、無調を単なる無秩序としてではなく、体系立った規則のもとで実現しようとする試みだった。',
      },
    ],
    confusions: [
      { term: 'Atonality', slug: 'atonality', note: '調の中心を持たないという状態そのもの。十二音技法はそれを実現する具体的な技法。' },
      { term: 'Serialism', slug: 'serialism', note: '音列の考え方を音高だけでなくリズムや強弱など他の要素にも拡張した手法。' },
    ],
  },

  'serialism': {
    lead: 'Serialism（セリー主義、セリー技法）は、十二音技法の音列の考え方を、音高だけでなくリズム・強弱・音色など音楽の他の要素にも拡張し、それぞれを規則的な数列（セリー）として組織する作曲手法。',
    sections: [
      {
        heading: '十二音技法からの拡張',
        body: '十二音技法は主に音高の並び順を規則化する技法だったが、セリー主義ではこの発想を音の長さや強弱の段階、音色の変化などにも当てはめ、作品のあらゆる側面を数列的な規則のもとに置こうとする。第二次世界大戦後、この徹底した組織化を目指す作曲家が現れたことで発展した。',
      },
    ],
    confusions: [
      { term: 'Twelve-tone technique', slug: 'twelve-tone-technique', note: '音高の並び順のみを音列として組織する技法。セリー主義はこれを他の要素にも拡張する。' },
    ],
  },
  'overtones': {
    lead: 'Overtones（倍音）は、一つの音を鳴らしたときに基音（最も低く、基準となる周波数の音）とともに同時に含まれる、より高い周波数の音の成分。',
    sections: [
      {
        heading: '物理的な仕組み',
        body: '弦や空気柱が振動するとき、全体が一度に振動する基本振動だけでなく、その半分・3分の1・4分の1……という長さで振動する部分振動が同時に生じる。基本振動が基音を、部分振動がそれぞれ倍音を作り、基音の周波数の整数倍にあたる周波数を持つ。',
      },
      {
        heading: '音色を決める要素',
        body: '同じ高さの音でも楽器によって音色が異なって聴こえるのは、含まれる倍音の種類と強さの割合（倍音構成）が楽器ごとに異なるためである。基音は音の高さを決めるが、どの倍音がどれだけ強く鳴っているかが、音色という別の側面を決める。',
      },
    ],
    confusions: [
      { term: 'Natural harmonic series', slug: 'natural-harmonic-series', note: '基音とその倍音を、低いものから順に並べた音の系列。倍音そのものを体系として捉えた呼び方。' },
    ],
  },

  'natural-harmonic-series': {
    lead: 'Natural harmonic series（自然倍音列）は、ある基音とその倍音を、周波数の低い順に並べた音の系列。楽器の音響的な性質から自然に生じる、人為的に決められたものではない音の並びを指す。',
    sections: [
      {
        heading: '音程の広がり方',
        body: '基音を1として、2倍・3倍・4倍……という整数倍の周波数を持つ音が並ぶと、音程間の幅は低い方から順にオクターブ、完全5度、完全4度、長3度……と、上に行くほど狭くなっていく。この幅の変化は、倍音同士の周波数比が単純な整数比であることの直接の帰結である。',
      },
      {
        heading: '金管楽器やホルンとの関係',
        body: 'バルブやスライドを持たない自然倍音のみの金管楽器（ナチュラルホルンやナチュラルトランペットなど）では、演奏者は唇の振動の仕方（アンブシュア）を変えることで、この倍音列に含まれる音だけを吹き分ける。バルブが発明される以前、これらの楽器で自由に半音階を演奏できなかったのは、この倍音列の構造そのものが制約になっていたためである。',
      },
    ],
    confusions: [
      { term: 'Overtones', slug: 'overtones', note: '倍音そのものを指す語。自然倍音列はそれを周波数順に並べた系列を指す。' },
    ],
  },
  'sonata-form': {
    lead: 'Sonata form（ソナタ形式）は、対照的な2つ（以上）の主題を提示し、それを展開したのち、最初の調に統一して再現する、古典派以降の器楽曲で広く用いられた形式。',
    sections: [
      {
        heading: '提示・展開・再現の3部構成',
        body: '「提示部」で主調の第1主題と、対比する調（多くは属調または平行調）の第2主題が示され、「展開部」でこれらの主題の断片が変形・転調を重ねながら発展し、「再現部」で両方の主題が主調に統一されて戻ってくる。この「対立してから統一される」という調的な筋道が、ソナタ形式の核心にある。',
      },
      {
        heading: '再現部での調の解決',
        body: '提示部では主調と異なる調で現れていた第2主題が、再現部では主調で現れる。この「調のずれが最後にそろう」という動きは、単なる旋律の繰り返しではなく、提示部で生じた調的な緊張が解決される過程として機能する。',
      },
    ],
    confusions: [
      { term: 'Rondo form', slug: 'rondo-form', note: '一つの主題が繰り返し戻ってくる形式。ソナタ形式は複数の主題が対立・統一される点で異なる。' },
      { term: 'Ternary form', slug: 'ternary-form', note: 'A-B-Aという単純な3部構成。ソナタ形式は主題の展開と調的な解決を伴う、より複雑な仕組みを持つ。' },
    ],
  },

  'rondo-form': {
    lead: 'Rondo form（ロンド形式）は、一つの主要な主題（リフレイン）が繰り返し立ち戻り、その間に対照的な副次的部分（エピソード）が挟まれる形式。',
    sections: [
      {
        heading: '基本的な構造',
        body: 'A-B-A-C-A のように、主題Aが複数回現れ、その合間に異なる部分（B、Cなど）が挿入される構成をとる。エピソードの数や長さは曲によって様々だが、主題が繰り返し「帰ってくる」という感覚が形式全体を支えている。',
      },
      {
        heading: 'ソナタ形式との組み合わせ',
        body: '古典派以降の多楽章作品では、しばしば最終楽章にロンド形式が用いられ、軽快で親しみやすい主題が繰り返される。ロンドの構造にソナタ形式的な調の対立と解決を組み合わせた「ソナタ・ロンド形式」もよく使われる。',
      },
    ],
    confusions: [
      { term: 'Sonata form', slug: 'sonata-form', note: '対立する主題が展開され、統一されて再現される形式。ロンド形式は主題の反復を軸とする。' },
    ],
  },

  'ternary-form': {
    lead: 'Ternary form（三部形式）は、A-B-Aという3つの部分から成り、中間部（B）を挟んで最初の部分（A）が戻ってくる形式。',
    sections: [
      {
        heading: '対比と回帰',
        body: '最初のA部分で提示された旋律や気分が、中間のB部分で対照的な内容に転じ、最後に最初のAが（多くはほぼそのままの形で）再び現れる。この単純な「対比してから元に戻る」という構造は、様々な規模の楽曲に応用できる、最も基本的な形式の一つとされる。',
      },
      {
        heading: 'ソナタ形式との違い',
        body: '三部形式のA部分の回帰は、多くの場合、調的な緊張の解決を伴わない単純な再現である。これに対しソナタ形式では、提示部と再現部の間に主題の展開と調の対立・統一という過程が挟まる点で、三部形式より複雑な仕組みを持つ。',
      },
    ],
    confusions: [
      { term: 'Sonata form', slug: 'sonata-form', note: '主題の展開と調的な解決を伴う、より複雑な構成を持つ形式。' },
    ],
  },

  'theme-and-variations': {
    lead: 'Theme and Variations（主題と変奏）は、最初に提示された主題（テーマ）が、その後何度も形を変えながら繰り返される形式。',
    sections: [
      {
        heading: '何が保たれ、何が変わるか',
        body: '変奏では、主題の旋律・和声進行・構造上の区切りなど、いずれかの要素が保たれたまま、リズム、装飾、調（長調・短調の交替）、テンポ、伴奏の書法などが変えられる。どの要素を固定し、どの要素を変化させるかは変奏ごとに異なってよく、この選択の幅の広さが形式全体の多様さを生む。',
      },
      {
        heading: '曲全体の構成としての役割',
        body: '単独の楽曲として書かれることもあれば、多楽章作品の一つの楽章として置かれることも多い。いずれの場合も、主題が持つ性格や制約が、その後に続く変奏でどこまで自由に展開できるかを規定する出発点になる。',
      },
    ],
    confusions: [
      { term: 'Passacaglia', slug: 'passacaglia', note: '低音や和声進行の反復を土台にする変奏形式。主題と変奏は、旋律全体を主題として扱う点でより自由度が高い。' },
    ],
  },
  'prelude': {
    lead: 'Prelude（前奏曲）は、もともと他の曲や組曲の導入として演奏された、即興的な性格の曲。19世紀以降は、独立した性格的小品としても書かれるようになった。',
    sections: [
      {
        heading: '「導入」から「独立した曲」へ',
        body: 'バロック期の前奏曲は、フーガや組曲の前に置かれ、演奏者がその日の楽器の調子や調性を確かめるような即興的な性格を持っていた。バッハの《平均律クラヴィーア曲集》のように、前奏曲とフーガが対になる構成が広く用いられた。19世紀に入ると、ショパンの《24の前奏曲集》のように、何にも先立たれない独立した小品として前奏曲が書かれるようになり、「前奏」という原義から離れた使われ方が定着した。',
      },
      {
        heading: '即興性という共通点',
        body: '導入曲であっても独立した小品であっても、前奏曲には形式にとらわれない自由な性格、あるいは即興を思わせる書法がしばしば見られる。この即興性は、この語の起源である「本編の前に自由に弾く」という慣習の名残と考えられる。',
      },
    ],
    confusions: [
      { term: 'Etude', slug: 'etude', note: '特定の演奏技術の習得を主目的とする曲。前奏曲は技術習得を主目的としない、より自由な性格を持つ。' },
      { term: 'Toccata', slug: 'toccata', note: '技巧的で即興的な性格を持つ鍵盤曲。前奏曲と性格が近い場合もある。' },
    ],
  },

  'etude': {
    lead: 'Etude（練習曲）は、特定の演奏技術（オクターブ、アルペジオ、トリルなど）の習得や向上を主な目的として書かれた曲。フランス語で「研究、勉強」を意味する。',
    sections: [
      {
        heading: '技術訓練から演奏会用の曲へ',
        body: '古くから練習曲は教育目的で書かれてきたが、ショパンやリストらは、特定の技術的課題を扱いながらも、それ自体が演奏会で聴かせるに値する音楽的な内容を持つ練習曲を書いた。このため「練習曲」という呼び名は、技術訓練用の教材と、音楽的完成度の高い演奏会用作品の両方を含む、幅の広い語になっている。',
      },
      {
        heading: '課題の一貫性',
        body: '一つの練習曲は通常、曲を通じて同じ種類の技術的課題（例えば終始オクターブで旋律を弾き続ける、など）に取り組み続ける構成をとる。この一貫性が、様々な技術を扱う他の性格的小品と練習曲とを区別する目安になる。',
      },
    ],
    confusions: [
      { term: 'Prelude', slug: 'prelude', note: '技術習得を主目的としない、自由な性格の小品。' },
    ],
  },

  'toccata': {
    lead: 'Toccata（トッカータ）は、速い音型や技巧的なパッセージを特徴とする、即興的な性格の鍵盤楽器（またはリュートなど）のための曲。イタリア語 toccare（触れる）に由来する。',
    sections: [
      {
        heading: '「触れる」という語源が示すもの',
        body: '楽器に「触れて」その響きや機構を確かめるような、自由で技巧的な性格を持つ曲であることを、語源が示している。和声的な支えの薄い速いパッセージ、装飾的な走句、対照的なテンポの部分の連続など、即興演奏に近い自由さを楽譜上に定着させた書法が特徴とされる。',
      },
      {
        heading: 'フーガとの組み合わせ',
        body: 'バロック期のオルガン曲には、自由で技巧的なトッカータの後に、規則正しい対位法で書かれたフーガが続く構成のものが多く見られ、両者の対照的な性格を組み合わせる書き方が広く用いられた。',
      },
    ],
    confusions: [
      { term: 'Prelude', slug: 'prelude', note: '同じく即興的な性格を持つ導入的な曲。トッカータはより技巧的な速いパッセージを特徴とする。' },
    ],
  },

  'impromptu': {
    lead: 'Impromptu（即興曲）は、即興で弾いているかのような自由な雰囲気を持ちながら、実際には形式の整った、19世紀に発展した性格的小品。',
    sections: [
      {
        heading: '「即興らしさ」は書き込まれたもの',
        body: '即興曲という名前にもかかわらず、実際の演奏はその場の即興ではなく、あらかじめ作曲・記譜された曲である。気まぐれで自由な雰囲気そのものを、明確な形式（多くは三部形式）の中に書き込んで定着させた点に、このジャンルの特徴がある。',
      },
    ],
    confusions: [
      { term: 'Nocturne', slug: 'nocturne', note: '同じく19世紀に発展した性格的小品だが、夜の情緒という主題を持つ点で異なる。' },
    ],
    works: [
      { title: 'シューベルト 即興曲集', note: 'この分野の代表作の一つとして広く知られる。' },
    ],
  },

  'nocturne': {
    lead: 'Nocturne（夜想曲）は、夜の静けさや情緒を思わせる、抒情的で穏やかな性格の器楽小品。フランス語で「夜の」を意味する。',
    sections: [
      {
        heading: '成立の経緯',
        body: '夜想曲というジャンルは、19世紀初頭のアイルランドの作曲家ジョン・フィールドによって確立され、後にショパンがこの形式を数多く手がけたことで広く知られるようになった。多くは、装飾的な旋律線が伴奏の上に浮かぶような書法を特徴とする。',
      },
      {
        heading: '伴奏の書法',
        body: '左手に広い音域にわたる分散和音や規則的な伴奏形を置き、その上に右手が自由な装飾を伴う旋律を歌わせる書法が典型的で、これによりオーケストラのような広がりのある響きをピアノ一台で作り出そうとする試みでもあった。',
      },
    ],
    confusions: [
      { term: 'Impromptu', slug: 'impromptu', note: '同じく19世紀の性格的小品だが、夜の情緒という特定の主題は持たない。' },
    ],
  },
  'polonaise': {
    lead: 'Polonaise（ポロネーズ）は、ポーランドに由来する、中庸な速さの3拍子の行進的な舞曲。フランス語で「ポーランド風の」を意味する。',
    sections: [
      {
        heading: '特徴的なリズム型',
        body: 'ポロネーズの多くは、1拍目に8分音符2つと16分音符2つを組み合わせたリズム型を繰り返し用いる。このリズムが、速すぎず堂々とした足取りの行進的な性格を生む。踊りとしては、宮廷などでの入場行進に用いられる儀礼的な性格を持っていた。',
      },
      {
        heading: 'ショパンによる芸術化',
        body: 'ショパンは一連のポロネーズを通じ、もとは実際に踊るための舞曲だったこの形式を、演奏会用の芸術的な作品として発展させた。彼のポロネーズには、母国ポーランドへの思いが込められているとしばしば語られる。',
      },
    ],
    confusions: [
      { term: 'Mazurka', slug: 'mazurka', note: '同じくポーランド由来の舞曲だが、拍子内でのアクセントの位置が異なる、より民俗的な性格の舞曲。' },
    ],
  },

  'mazurka': {
    lead: 'Mazurka（マズルカ）は、ポーランドの民俗舞曲に由来する3拍子の舞曲で、1拍目以外（多くは2拍目または3拍目）にアクセントが置かれる点が特徴。',
    sections: [
      {
        heading: '揺れるアクセント',
        body: '通常の3拍子は1拍目に重心があるが、マズルカでは2拍目や3拍目に強いアクセントが置かれることが多く、この重心のずれが独特の揺れるような足取りを生む。アクセントの位置は曲や部分によって変化してよく、規則的とは限らない。',
      },
      {
        heading: 'ショパンによる芸術化',
        body: 'ポロネーズと同様、ショパンは多数のマズルカを作曲し、民俗舞曲の要素を取り入れながら演奏会用の作品として発展させた。ポーランドの民俗音楽的な音階や和声の響きが取り入れられることも多い。',
      },
    ],
    confusions: [
      { term: 'Polonaise', slug: 'polonaise', note: '同じくポーランド由来の3拍子舞曲だが、行進的で1拍目に重心がある点が異なる。' },
      { term: 'Waltz', slug: 'waltz', note: '同じ3拍子だが、ウィンナ・ワルツ系の1拍目に重心を置く舞曲。マズルカのアクセントのずれとは異なる。' },
    ],
  },

  'waltz': {
    lead: 'Waltz（ワルツ、円舞曲）は、3拍子で、1拍目に重心を置きながら回転して踊る舞曲。18世紀末から19世紀にかけてウィーンを中心にヨーロッパ中で流行した。',
    sections: [
      {
        heading: '「オンパー」の伴奏形',
        body: '典型的なワルツの伴奏は、低音を1拍目に、和音を2・3拍目に置く「オン・パッ・パッ」のパターンで書かれる。この単純で規則的な伴奏形が、旋律に自由な起伏を持たせる余地を作り、踊りとしても演奏会用の音楽としても広く用いられる基盤になった。',
      },
      {
        heading: 'レントラーからの発展',
        body: 'ワルツは、それ以前にオーストリア・南ドイツの農村で踊られていたレントラーという、より素朴な3拍子の舞曲から発展したと考えられている。宮廷や社交界に取り入れられる過程で、テンポが上がり洗練された形へと変化した。',
      },
    ],
    confusions: [
      { term: 'Mazurka', slug: 'mazurka', note: '同じ3拍子だが、アクセントが1拍目以外に置かれる点でワルツと異なる。' },
    ],
  },

  'tarentella': {
    lead: 'Tarentella（タランテラ）は、南イタリアに由来する、複合拍子（多くは6/8）の非常に速く激しい舞曲。',
    sections: [
      {
        heading: '名前をめぐる言い伝え',
        body: '名称は、南イタリアの都市タラントに由来するとも、毒グモ（タランチュラ）に咬まれた毒を汗とともに踊って追い出すという民間伝承に由来するともいわれる。この毒グモにまつわる話は広く語られる伝説だが、実際の医学的根拠があるわけではなく、あくまで民間伝承として伝わっているものである。',
      },
      {
        heading: '曲の性格',
        body: '拍子は6/8などの複合拍子で書かれることが多く、絶え間なく続く速いテンポと高揚感のある反復が特徴。踊りとしては、次第に速度を上げながら熱狂的な雰囲気を作っていく性格を持つとされる。',
      },
    ],
    confusions: [
      { term: 'Gigue', slug: 'gigue', note: '同じ複合拍子系の速い舞曲。ジーグはバロック組曲の一部として様式化された点で異なる。' },
    ],
  },

  'habanera': {
    lead: 'Habanera（ハバネラ）は、キューバのハバナに由来する2拍子の舞曲。付点を含む特徴的なリズム型を持つ。',
    sections: [
      {
        heading: '特徴的なリズム型',
        body: 'ハバネラの伴奏には、1拍を「付点8分音符＋16分音符＋8分音符2つ」というパターンで刻む特徴的なリズム型が繰り返し使われる。このリズムは後にタンゴなど他のラテン系舞曲にも受け継がれ、これらの舞曲に共通する足取りの源の一つとされる。',
      },
      {
        heading: 'スペイン音楽への影響',
        body: 'キューバで生まれたこのリズムは、19世紀にスペインへ伝わり、スペインの作曲家の作品にも取り入れられた。ビゼーの歌劇《カルメン》に含まれる「ハバネラ」の楽曲は、この舞曲の名を広く知らしめた例として知られる。',
      },
    ],
    confusions: [
      { term: 'Tango', slug: 'tango', note: 'ハバネラのリズムから影響を受けたとされる、アルゼンチン由来のシンコペーションを伴う舞曲。' },
    ],
  },

  'tango': {
    lead: 'Tango（タンゴ）は、アルゼンチン・ウルグアイの都市部で生まれた、シンコペーションを特徴とする2拍子の舞曲。',
    sections: [
      {
        heading: '特徴的なシンコペーション',
        body: 'タンゴの旋律・伴奏には、拍の重心をずらすシンコペーションが多用され、これが独特の緊張感と切迫した歩みを生む。ハバネラのリズム型と類似する要素を持つことから、ハバネラなどラテン系の舞曲の影響を受けて成立したと考えられている。',
      },
      {
        heading: 'バンドネオンという楽器',
        body: 'タンゴの合奏（オルケスタ・típica）では、蛇腹を持つ小型のリード楽器バンドネオンが中心的な役割を担うことが多く、その特徴的な音色がタンゴの響きを印象づける要素の一つになっている。',
      },
    ],
    confusions: [
      { term: 'Habanera', slug: 'habanera', note: 'タンゴのリズムに影響を与えたとされる、キューバ由来の舞曲。' },
    ],
  },
  'schnell': {
    lead: 'Schnell（シュネル）はドイツ語で「速く」を意味し、イタリア語の Allegro に相当する速度指示。',
    sections: [
      {
        heading: 'なぜドイツ語で書くのか',
        body: '19世紀のドイツ語圏の作曲家の一部は、イタリア語の速度用語をドイツ語の日常語に置き換えることで、演奏者により直接的な自国語のニュアンスを伝えようとした。Schnellはその代表例で、Allegroと意味の範囲に違いはない。',
      },
    ],
    confusions: [
      { term: 'Allegro', slug: 'allegro', note: '同じ「速く」を意味するイタリア語の標準的な速度指示。' },
    ],
  },

  'langsam': {
    lead: 'Langsam（ラングザム）はドイツ語で「遅く」を意味し、イタリア語の Lento に相当する速度指示。',
    sections: [
      {
        heading: 'Schnellとの対',
        body: 'Schnell（速く）と対になるドイツ語の基本語彙で、意味の範囲はLentoとほぼ重なる。マーラーやブラームスなど、ドイツ語圏の作曲家の楽譜で見られる。',
      },
    ],
    confusions: [
      { term: 'Lento', slug: 'lento', note: '同じ「遅く」を意味するイタリア語の標準的な速度指示。' },
    ],
  },

  'molto': {
    lead: 'Molto（モルト）はイタリア語で「非常に、大いに」を意味する強意の副詞。単独では速度を指定せず、Allegro molto や Molto Allegro のように他の速度・表情用語に添えて度合いを強める。',
    sections: [
      {
        heading: '語順による違い',
        body: 'MoltoはAllegroなどの前後どちらにも置かれるが、度合いを強めるという働き自体に大きな違いはない。',
      },
    ],
    confusions: [
      { term: 'Assai', slug: 'assai', note: '同じく度合いを強める強意語。' },
      { term: 'Poco', slug: 'poco', note: '反対に度合いを弱める強意語。' },
    ],
  },

  'assai': {
    lead: 'Assai（アッサイ）はイタリア語で「十分に、非常に」を意味する強意語で、Allegro assai のように速度・表情用語の後ろに添えて度合いを強める。',
    sections: [
      {
        heading: '強さの程度をめぐる議論',
        body: 'assaiがどの程度の強さを示すかについては見解が分かれている。現代イタリア語のassaiは「かなり、非常に」という強い意味で使われるが、古い時代の用法ではmoltoよりも弱い「まあまあ、十分に」程度を指していたとする説もあり、歴史的な用法の変化について議論がある。',
      },
    ],
    confusions: [
      { term: 'Molto', slug: 'molto', note: '同じく度合いを強める強意語。' },
    ],
  },

  'non-troppo': {
    lead: 'Non troppo（ノン・トロッポ）はイタリア語で「あまり~しすぎない」を意味する制限語。Allegro ma non troppo（速く、しかし速すぎずに）のように、直前の指示が行き過ぎないよう歯止めをかける。',
    sections: [
      {
        heading: 'troppoの意味',
        body: 'troppoは「あまりに、過度に」を意味する語で、non troppoはそれを否定した形。単独の速度指示ではなく、他の指示に対する制限として機能する。',
      },
    ],
    confusions: [
      { term: 'Ma non troppo', slug: 'ma-non-troppo', note: '「しかし」を加えた同種の制限表現。' },
    ],
  },

  'poco': {
    lead: 'Poco（ポーコ）はイタリア語で「少し、わずかに」を意味する程度の副詞。Poco accelerando（わずかに加速して）のように、変化の幅を控えめに指定する際に使われる。',
    sections: [
      {
        heading: 'Un pocoとの関係',
        body: '冠詞を伴うUn poco（あるいはPocoはその短縮形）も同じ意味で使われ、両者に意味上の違いはない。',
      },
    ],
    confusions: [
      { term: 'Un poco', slug: 'un-poco', note: '同じ意味を持つ、冠詞を伴った形。' },
      { term: 'Molto', slug: 'molto', note: '反対に度合いを強める強意語。' },
    ],
  },

  'veloce': {
    lead: 'Veloce（ヴェローチェ）はイタリア語で「速く、俊敏に」を意味する速度指示。曲全体よりも、パッセージの一部を機敏に滑るように速く演奏する箇所に使われることが多い。',
    sections: [
      {
        heading: '語源',
        body: 'ラテン語のvelox（速い）に由来し、英語のvelocity（速度）と語根を共有する。',
      },
    ],
    confusions: [
      { term: 'Vivace', slug: 'vivace', note: '同じく速さを示すが、活気や生命感のニュアンスが強い語。' },
    ],
  },

  'l’istesso-tempo': {
    lead: 'L’istesso tempo（リステッソ・テンポ）はイタリア語で「同じ速さで」を意味する指示。拍子記号が変わっても、1拍（または基準となる音符）の実際の長さを変えないことを示す。',
    sections: [
      {
        heading: '拍子が変わる場面での役割',
        body: 'たとえば4分の3拍子から8分の6拍子に変わる際、4分音符の長さをそのまま保つのか、拍の数え方だけを変えるのかは曲によって異なる。L’istesso tempoは、表記上の拍子が変化しても内部の速度感覚は連続していることを演奏者に伝える。',
      },
    ],
    confusions: [
      { term: 'Tempo', slug: 'tempo', note: '速度そのものを指す基本語。' },
    ],
  },

  'sollecitando': {
    lead: 'Sollecitando（ソレチタンド）はイタリア語で「急かして、せき立てて」を意味する速度指示。動詞sollecitare（催促する、急がせる）の現在分詞形で、次第にテンポを上げていくニュアンスを持つ。',
    sections: [
      {
        heading: '類似語との違い',
        body: 'accelerando（加速して）が客観的なテンポの増加を示すのに対し、sollecitandoやaffrettandoは「急き立てられるような」心理的な切迫感を伴う点で使い分けられる。',
      },
    ],
    confusions: [
      { term: 'Affrettando', slug: 'affrettando', note: '同じく「急いで」を意味する類語。' },
      { term: 'Accelerando', slug: 'accelerando', note: '客観的な加速を示す標準的な速度変化の指示。' },
    ],
  },

  'adagio-religioso': {
    lead: 'Adagio religioso（アダージョ・レリジオーゾ）は、速度指示Adagio（ゆるやかに）に性格を表す形容詞religioso（宗教的な、敬虔な）を組み合わせた複合指示。',
    sections: [
      {
        heading: 'religiosoが加わる意味',
        body: 'religiosoは速度そのものを変えるものではなく、Adagioの遅さの中でどのような性格を持たせるかを示す形容詞。祈りや瞑想を思わせる、静かで敬虔な表情を求める指示として添えられる。',
      },
    ],
    confusions: [
      { term: 'Adagio', slug: 'adagio', note: 'ゆるやかな速度を示す基本語。religiosoはその性格を限定する修飾語。' },
    ],
  },

  'affrettando': {
    lead: 'Affrettando（アッフレッタンド）はイタリア語の動詞affrettare（急がせる）の現在分詞形で、「急いで、せき立てて」次第にテンポを上げていくことを示す。',
    sections: [
      {
        heading: 'Accelerandoとの違い',
        body: 'accelerandoが比較的中立的な「加速」を指すのに対し、affrettandoは切迫感や焦りといった心理的なニュアンスを伴う点で区別されることが多い。',
      },
    ],
    confusions: [
      { term: 'Accelerando', slug: 'accelerando', note: '中立的な加速を示す標準語。' },
      { term: 'Sollecitando', slug: 'sollecitando', note: '同じく切迫感を伴う類語。' },
    ],
  },

  'battuta': {
    lead: 'Battuta（バットゥータ）はイタリア語で「拍、打ち方、小節」を意味する名詞。楽譜上ではa battuta（正確な拍子で）という形で使われ、rit.などで緩めたテンポを、指揮者の打つ拍に厳格に合わせて戻すことを指示する。',
    sections: [
      {
        heading: '語源',
        body: '動詞battere（打つ）に由来し、指揮者が拍を「打つ」動作、あるいは小節線で区切られた「打拍の単位」を指す語として使われてきた。',
      },
    ],
    confusions: [
      { term: 'A tempo', slug: 'a-tempo', note: 'テンポを元に戻す点で似た働きを持つ指示。' },
      { term: 'Colla parte', slug: 'colla-parte', note: '逆に厳格な拍から離れ、独奏者に合わせることを指示する語。' },
    ],
  },

  'belebt': {
    lead: 'Belebt（ベレープト）はドイツ語で「生気を与えられた、活発な」を意味し、イタリア語のAnimatoに相当する表情・速度の指示。',
    sections: [
      {
        heading: '語源',
        body: '動詞beleben（生命を吹き込む、活気づける）の過去分詞形。動きに勢いと生き生きとした性格を与えることを求める。',
      },
    ],
    confusions: [
      { term: 'Animato', slug: 'animato', note: '同じ意味を持つイタリア語の標準的な指示。' },
    ],
  },

  'breit': {
    lead: 'Breit はドイツ語で「幅広く」。イタリア語の Largo に対応します。速さではなく空間の広さを表す語であり、そこが他の遅い速度用語との違いです。',
    sections: [
      {
        heading: '英語の broad と同じ語根',
        body: 'ゲルマン語系の語で、英語の broad、breadth と語根を共有します。示しているのは長さや遅さではなく、幅です。Largo も同じく「広い」を意味するイタリア語であり、両者は語の性質まで一致しています。',
      },
      {
        heading: '「遅い」ではなく「広い」',
        body: 'langsam（遅く）が時間の進み方を指すのに対して、breit は空間の広がりを指します。したがってこの指示は、テンポを落とすことだけでは満たされません。音を十分に鳴らし、フレーズを大きく取り、間を詰めないことで幅が生まれます。速度を落としても音が細ければ、幅広くは聞こえません。',
      },
      {
        heading: 'ドイツ語の速度語彙の中で',
        body: 'ドイツ語圏の作曲家が自国語で指示を書く場合、schnell（速く）、langsam（遅く）、mäßig（中くらいに）、bewegt（動きをもって）、ruhig（静かに）と並んでこの語が使われます。breiter（より幅広く）という比較級の形で現れることもあります。',
      },
    ],
    confusions: [
      { term: 'Largo', slug: 'largo', note: '対応するイタリア語。同じく「広い」が原義。' },
      { term: 'Langsam', slug: 'langsam', note: 'ドイツ語で遅く。時間の進み方を指す。' },
      { term: 'Largamente', slug: 'largamente', note: '幅広く。イタリア語の副詞形。' },
    ],
  },

  'a-bene-placito': {
    lead: 'A bene placito（ア・ベーネ・プラーチト）はイタリア語で「よい望みのままに」を意味し、Ad libitumとほぼ同義で使われる、演奏者の裁量に委ねる指示。',
    sections: [
      {
        heading: '成り立ち',
        body: 'a（~に）+ bene（よく）+ placito（望まれたこと、動詞placere「気に入る」の過去分詞由来）という3語の組み合わせで、直訳すれば「望むままによく」となる。',
      },
    ],
    confusions: [
      { term: 'Ad libitum', slug: 'ad-libitum', note: '同じく演奏者の裁量に委ねる、より一般に使われるラテン語の指示。' },
    ],
  },

  'a-capriccio': {
    lead: 'A capriccio（ア・カプリッチョ）はイタリア語で「気ままに、思いつくままに」を意味し、形式や規則的な拍節から離れて自由に演奏することを示す指示。',
    sections: [
      {
        heading: 'capriccioという語',
        body: '名詞capriccio（気まぐれ、奇想）は器楽曲の一形式・性格を表す語としても使われており、a capriccioという速度指示はその形容詞的な用法にあたる。',
      },
    ],
    confusions: [
      { term: 'Ad libitum', slug: 'ad-libitum', note: '同じく自由な演奏を許容する指示。' },
    ],
  },

  'ad-libitum': {
    lead: 'Ad libitum（アド・リビトゥム、略号ad lib.）はラテン語で「望むがままに」を意味し、テンポ・装飾・楽器編成などについて演奏者に裁量の余地を認める指示。',
    sections: [
      {
        heading: '及ぶ範囲の広さ',
        body: 'テンポを自由にする用法のほか、カデンツァの長さや即興的な装飾を演奏者に委ねる用法、パート譜で特定の楽器の演奏を任意（省略可）とする用法など、ad libitumが指す自由の種類は文脈によって異なる。',
      },
    ],
    confusions: [
      { term: 'A bene placito', slug: 'a-bene-placito', note: '同じくイタリア語で自由な演奏を示す表現。' },
      { term: 'Cadenza', slug: 'cadenza', note: 'ad libitumで自由が認められることが多い箇所の代表例。' },
    ],
  },

  'tempo': {
    lead: 'Tempo（テンポ）はイタリア語で「時間」を意味し、音楽においては拍が刻まれる速さそのものを指す基本語。',
    sections: [
      {
        heading: '表し方',
        body: 'Allegroなど性格を伴う言葉で示される場合と、1分間の拍数（BPM）を示すメトロノーム記号で数値として示される場合がある。',
      },
    ],
    confusions: [
      { term: 'Metronome mark', slug: 'metronome-mark', note: 'テンポを数値で示す表記法。' },
      { term: 'A tempo', slug: 'a-tempo', note: '一時的に変化させたテンポを元に戻す指示。' },
    ],
  },

  'metronome': {
    lead: 'Metronome（メトロノーム）は一定の拍を機械的に刻む道具。作曲家が意図したテンポを、演奏者が離れた時代・場所でも数値として再現できるようにする。',
    sections: [
      {
        heading: '発明をめぐる経緯',
        body: '現在広く知られる振り子式メトロノームは、1815年にヨハン・ネポムク・メルツェルが特許を取得して普及させたが、その基本的な仕組みはディートリヒ・ニコラウス・ヴィンケルが先に考案していたとされ、両者の間で発明の先後をめぐる論争があったことが知られている。ベートーヴェンの楽譜に付された「M.M.」という表記はメルツェルの頭文字に由来する。',
      },
    ],
    confusions: [
      { term: 'Metronome mark', slug: 'metronome-mark', note: 'メトロノームの数値で示されるテンポ表記。' },
    ],
  },

  'mäßig': {
    lead: 'Mäßig（メーシッヒ）はドイツ語で「適度に、中くらいの速さで」を意味し、イタリア語のModeratoに相当する速度指示。',
    sections: [
      {
        heading: '語源',
        body: '名詞Maß（尺度、程度）に由来する形容詞で、極端に走らず「ほどよさ」を保つことを示す。',
      },
    ],
    confusions: [
      { term: 'Moderato', slug: 'moderato', note: '同じ意味を持つイタリア語の標準的な指示。' },
    ],
  },

  'bewegt': {
    lead: 'Bewegt（ベヴェークト）はドイツ語で「動きを持って」を意味し、イタリア語のCon moto・Animatoに近い性格を示す指示。',
    sections: [
      {
        heading: '語源',
        body: '動詞bewegen（動かす）の過去分詞形。静止した状態と対比される「動きのある」性格を表す。',
      },
    ],
    confusions: [
      { term: 'Con moto', slug: 'con-moto', note: '同じく「動きを持って」を意味するイタリア語の指示。' },
    ],
  },

  'ruhig': {
    lead: 'Ruhig（ルーイヒ）はドイツ語で「静かに、安らかに」を意味し、イタリア語のTranquilloに相当する指示。',
    sections: [
      {
        heading: '語源',
        body: '名詞Ruhe（静けさ、安らぎ）に由来する形容詞で、テンポだけでなく心情的な落ち着きも含めて示す語。',
      },
    ],
    confusions: [
      { term: 'Tranquillo', slug: 'tranquillo', note: '同じ意味を持つイタリア語の標準的な指示。' },
    ],
  },

  'meno': {
    lead: 'Meno（メーノ）はイタリア語で「より少なく」を意味する比較の副詞。Meno mosso（より動きを抑えて、遅く）のように、直前の速度からの相対的な変化を指定する。',
    sections: [
      {
        heading: '比較の基準',
        body: '絶対的な速度を指定するのではなく、その直前に置かれていたテンポと比べて「より少なく（遅く、弱く）」することを示す相対的な指示である点が特徴。',
      },
    ],
    confusions: [
      { term: 'Più', slug: 'più', note: '反対に「より多く」を意味する対の語。' },
    ],
  },

  'più': {
    lead: 'Più（ピウ）はイタリア語で「より多く」を意味する比較の副詞。Più mosso（より動きを増して、速く）のように、直前の速度からの相対的な変化を指定する。',
    sections: [
      {
        heading: '比較の基準',
        body: 'Menoと同様、絶対的な速度そのものではなく、直前のテンポと比べた相対的な変化を示す点が特徴。',
      },
    ],
    confusions: [
      { term: 'Meno', slug: 'meno', note: '反対に「より少なく」を意味する対の語。' },
    ],
  },

  'ma-non-troppo': {
    lead: 'Ma non troppo（マ・ノン・トロッポ）はイタリア語で「しかし、あまり~しすぎない」を意味する制限句。Allegro ma non troppo（速く、しかし速すぎずに）のように、直前の指示に歯止めをかける。',
    sections: [
      {
        heading: 'Non troppoとの違い',
        body: 'maは「しかし」を意味する接続詞で、直前の指示との対比を明確にする働きを持つ。制限の内容自体はNon troppoと変わらない。',
      },
    ],
    confusions: [
      { term: 'Non troppo', slug: 'non-troppo', note: '「しかし」を伴わない、同様の制限表現。' },
    ],
  },

  'tempo-comodo': {
    lead: 'Tempo comodo（テンポ・コモド）はイタリア語で「都合のよい速さで」を意味し、演奏者が無理なく感じられる、快適なテンポで演奏することを示す指示。',
    sections: [
      {
        heading: 'comodoという語',
        body: '形容詞comodo（快適な、都合のよい）に由来し、副詞形comodamenteも同様の場面で使われる。',
      },
    ],
    confusions: [
      { term: 'Comodamente', slug: 'comodamente', note: '同じ語根を持つ副詞形の指示。' },
      { term: 'Ad libitum', slug: 'ad-libitum', note: '演奏者の裁量を認める点で共通する指示。' },
    ],
  },

  'l\'istesso-tempo': {
    lead: 'L\'istesso tempo（リステッソ・テンポ）はイタリア語で「同じ速さで」を意味する指示で、アポストロフィの字体違い（\' と ’）を除けば、同じ用語として楽譜に現れる。',
    sections: [
      {
        heading: '拍子が変わっても速さは同じ',
        body: '拍子記号が変化しても、1拍あるいは基準となる音符の実際の長さは変えないことを演奏者に伝える指示。表記上の拍子だけが変わり、体感の速度は連続する。',
      },
    ],
    confusions: [
      { term: 'Tempo', slug: 'tempo', note: '速度そのものを指す基本語。' },
    ],
  },

  'common-time': {
    lead: 'Common time（コモン・タイム）は英語で4分の4拍子を指す語で、記号「C」で表される。',
    sections: [
      {
        heading: '記号「C」の由来',
        body: 'このCは英単語commonの頭文字ではなく、中世の計量記譜法（メンスーラル記譜法）に由来する。当時、完全な円は3拍子系（tempus perfectum）を、円の一部を欠いた半円は2拍子系（tempus imperfectum）を示しており、4分の4拍子の記号「C」はこの半円の名残とされる。',
      },
    ],
    confusions: [
      { term: 'Cut time', slug: 'cut-time', note: '同じ記譜の系統から派生した、2分の2拍子を示す記号。' },
    ],
  },

  'cut-time': {
    lead: 'Cut time（カット・タイム）は英語で2分の2拍子を指す語で、Common timeの記号「C」に縦線を入れた記号（cut C）で表される。イタリア語のAlla breveと同じ拍子を指す。',
    sections: [
      {
        heading: '記号の意味',
        body: 'Common timeの記号に由来する系譜を引き継ぎつつ、縦線によって「半分に切られた」ことを示し、記譜上は4分の4拍子と同じ音符でも、2拍子として速く感じて演奏することを示す。',
      },
    ],
    confusions: [
      { term: 'Common time', slug: 'common-time', note: 'この記号の元になった4分の4拍子の記号。' },
      { term: 'Alla breve', slug: 'alla-breve', note: '同じ拍子を指すイタリア語の指示。' },
    ],
  },

  'zunehmend': {
    lead: 'Zunehmend（ツーネーメント）はドイツ語で「増していく、次第に強まる」を意味する語。文脈に応じて音量の増大（crescendo）にも、速度の増大（accelerando）にも使われる。',
    sections: [
      {
        heading: '語源',
        body: '動詞zunehmen（増える、増加する）の現在分詞形で、何が増えるかは前後の文脈（Lautstärke=音量、Tempo=速度など）によって決まる。',
      },
    ],
    confusions: [
      { term: 'Accelerando', slug: 'accelerando', note: '速度の増大を示すイタリア語の標準語。' },
      { term: 'Crescendo', slug: 'crescendo', note: '音量の増大を示すイタリア語の標準語。' },
    ],
  },

  'lent': {
    lead: 'Lent（ラン）はフランス語で「遅く」を意味し、イタリア語のLentoに相当する速度指示。',
    sections: [
      {
        heading: 'フランス語の速度語彙',
        body: 'ドビュッシーやラヴェルなど、フランス語で書かれた楽譜ではイタリア語に代わってフランス語の速度用語が使われることが多く、Lentはその基本語のひとつ。',
      },
    ],
    confusions: [
      { term: 'Lento', slug: 'lento', note: '同じ意味を持つイタリア語の標準的な指示。' },
      { term: 'Tres lent', slug: 'tres-lent', note: '「とても」を加えて遅さを強調した形。' },
    ],
  },

  'modéré': {
    lead: 'Modéré はフランス語で「中くらいの速さで」。イタリア語の Moderato に対応します。行きすぎないことを求める語で、速さの中間点を指すだけの語ではありません。',
    sections: [
      {
        heading: 'ラテン語 modus（尺度）から',
        body: '動詞 modérer（節度を保つ、加減する）の過去分詞で、ラテン語の moderari に由来します。その語根は modus（尺度、限度）で、英語の moderate、mode、modest も同じ語根を持ちます。示しているのは「尺度の内に収まっている」状態であり、中間の速さはその結果です。',
      },
      {
        heading: '節度という含み',
        body: '語源に「限度を守る」という意味があるため、この指示は速度だけでなく表現の度合いにも及びます。極端に振らないこと、行きすぎないことが求められます。したがって、正しいテンポで弾いていても表情を過剰に付ければ、この語の方向から外れます。',
      },
      {
        heading: '表記の揺れ',
        body: 'この辞典にはアクサン記号を省いた Modere という表記も別項目として収録されています。同じ語であり、意味に違いはありません。フランス語として正しい綴りは Modéré です。',
      },
    ],
    confusions: [
      { term: 'Moderato', slug: 'moderato', note: '対応するイタリア語。同じ語根。' },
      { term: 'Modere', slug: 'modere', note: 'アクサン記号を省いた同じ語の表記。' },
      { term: 'Comodo', slug: 'comodo', note: '無理のない速さで。こちらも modus を語根に持つ。' },
    ],
  },

  'vif': {
    lead: 'Vif（ヴィフ）はフランス語で「生き生きと、快活に」を意味し、イタリア語のVivaceに相当する速度指示。',
    sections: [
      {
        heading: '関連するフランス語の指示',
        body: 'Animé（生気を持って）やTres vite（とても速く）などとともに、フランス語の楽譜で速度と性格を同時に示す語のひとつとして使われる。',
      },
    ],
    confusions: [
      { term: 'Vivace', slug: 'vivace', note: '同じ意味を持つイタリア語の標準的な指示。' },
    ],
  },

  'animé': {
    lead: 'Animé（アニメ）はフランス語で「生気を持って、活気づけられて」を意味し、イタリア語のAnimatoに相当する指示。',
    sections: [
      {
        heading: '語源',
        body: '動詞animer（生命・活気を与える）の過去分詞形で、Animatoと同じラテン語animus（生命、心）に由来する。',
      },
    ],
    confusions: [
      { term: 'Animato', slug: 'animato', note: '同じ意味を持つイタリア語の標準的な指示。' },
    ],
  },

  'calme': {
    lead: 'Calme はフランス語で「静かに、穏やかに」。イタリア語の Tranquillo に対応します。語源をたどると「真昼の暑さ」に行き着く語です。',
    sections: [
      {
        heading: '「真昼の暑さ」という語源',
        body: 'ギリシャ語の kauma（焼けつく暑さ）が後期ラテン語 cauma を経てイタリア語 calma になり、フランス語に入りました。英語の calm も同じ経路です。真昼の暑い時間帯は人も動物も動きを止めて休むため、「暑さ」から「静けさ」へ意味が移りました。風がやんだ海の状態を指す語としても使われます。',
      },
      {
        heading: '静けさは音量ではない',
        body: 'この指示は音量記号ではありません。弱く弾いても落ち着きがなければ静けさは生まれず、ある程度の音量があっても動きが収まっていれば静けさは成立します。テンポの安定、音の立ち上がりの穏やかさ、フレーズの起伏の小ささが、この語に応える要素です。',
      },
      {
        heading: 'フランス語の指示の中で',
        body: 'フランス語で性格を指定する作曲家の楽譜では、très calme（とても静かに）や calme et doux（静かに柔らかく）のように、他の語と組み合わせて現れることがあります。フランス語の指示は、イタリア語の定型よりも文として書かれる傾向があります。',
      },
    ],
    confusions: [
      { term: 'Tranquillo', slug: 'tranquillo', note: '対応するイタリア語。' },
      { term: 'Calma', slug: 'calma', note: '同じ語根のイタリア語。' },
      { term: 'Pacato', slug: 'pacato', note: '穏やかに。鎮まった状態を指す。' },
    ],
  },

  'g.p.': {
    lead: 'G.P.は、ドイツ語Generalpause（総休止）の略号。オーケストラや合奏の全パートが同時に演奏を止め、完全な沈黙を作る箇所に記される。',
    sections: [
      {
        heading: '効果',
        body: '一部の楽器だけが休む通常の休符と異なり、全奏者が一斉に止まることで作られる沈黙は際立って聴こえ、直前・直後の音楽的な緊張を強調する効果を持つ。',
      },
    ],
    confusions: [
      { term: 'Rest', slug: 'rest', note: '個々のパートが休む、より一般的な休符の記号。' },
      { term: 'Generalpause', slug: 'generalpause', note: 'G.P.の元になったドイツ語の正式名称。' },
    ],
  },

  'senza-tempo': {
    lead: 'Senza tempo（センツァ・テンポ）はイタリア語で「テンポなしで」を意味し、拍節の規則的な進行から離れ、自由な時間感覚で演奏することを示す指示。',
    sections: [
      {
        heading: 'senzaという語',
        body: '前置詞senza（~なしで）はsenza pedale（ペダルなしで）などにも使われる、除外・不在を示す基本語。',
      },
    ],
    confusions: [
      { term: 'Ad libitum', slug: 'ad-libitum', note: '同じく自由な演奏を認める指示。' },
      { term: 'Battuta', slug: 'battuta', note: '反対に厳格な拍へ戻ることを示す語。' },
    ],
  },

  'metronome-mark': {
    lead: 'Metronome mark（メトロノーム記号）は、1分間に刻む拍の数（BPM）を数値で示す表記。たとえば「♩=120」のように書かれる。',
    sections: [
      {
        heading: '性格を表す言葉との違い',
        body: 'AllegroやAdagioのような言葉による指示が演奏者の解釈の幅を残すのに対し、メトロノーム記号は客観的な数値として速度を固定する点で性格が異なる。',
      },
    ],
    confusions: [
      { term: 'Metronome', slug: 'metronome', note: 'この数値を計測・提示するための道具。' },
      { term: 'Tempo', slug: 'tempo', note: '速度そのものを指す基本語。' },
    ],
  },

  'alla-tedesca': {
    lead: 'Alla tedesca（アッラ・テデスカ）はイタリア語で「ドイツ風に」を意味し、素朴な3拍子の舞曲（レントラーなど）を思わせる性格を示す指示。ベートーヴェンの弦楽四重奏曲やピアノソナタなどに見られる。',
    sections: [
      {
        heading: 'tedescaという語',
        body: '形容詞tedesco（ドイツの）の女性形。ここでの「ドイツ風」は、当時ドイツ語圏で親しまれていた素朴な舞曲の様式を指すと考えられている。',
      },
    ],
  },

  'alla-zingarese': {
    lead: 'Alla zingarese（アッラ・ツィンガレーゼ）はイタリア語で「ジプシー（ロマ）風に」を意味し、自由な速度変化や情熱的な性格を伴う演奏様式を示す指示。ブラームスの作品などに見られる。',
    sections: [
      {
        heading: '様式としての性格',
        body: '厳格な拍節よりも即興的な緩急を強調する性格づけの語として使われ、19世紀のヨーロッパでロマの音楽家たちの演奏様式として広く知られていたイメージに基づくとされる。',
      },
    ],
  },

  'metronomic': {
    lead: 'Metronomic（メトロノミック）は英語で「メトロノームのように正確な」を意味する形容詞。テンポの揺れを排し、機械的なまでに均一な拍で演奏することを求める指示として使われる。',
    sections: [
      {
        heading: '語源',
        body: 'Metronome（メトロノーム）に形容詞語尾-icを付けた語。',
      },
    ],
    confusions: [
      { term: 'Metronome', slug: 'metronome', note: '語源となった道具。' },
      { term: 'Agogic', slug: 'agogic', note: '反対に、楽譜にない微妙なテンポの揺らぎを指す語。' },
    ],
  },

  'agogic': {
    lead: 'Agogic（アゴーギク）は、譜面には明記されないが、表現のために演奏者が加える微妙なテンポの伸び縮みを指す音楽理論の用語。',
    sections: [
      {
        heading: '語源と理論的背景',
        body: 'ギリシャ語のagōgē（導き、運び）に由来する語で、19世紀末にドイツの音楽理論家フーゴー・リーマンが、強調したい音を周囲よりわずかに長く取るなどの現象を説明するために理論化したことで知られる。',
      },
    ],
    confusions: [
      { term: 'Rubato', slug: 'rubato', note: '同じくテンポの伸縮を伴うが、より大きな時間的自由を指す語。' },
    ],
  },

  'largamente': {
    lead: 'Largamente（ラルガメンテ）はイタリア語で「幅広く、堂々と」を意味し、Largoの副詞形にあたる。',
    sections: [
      {
        heading: 'Largoとの違い',
        body: '独立した速度指示として楽章冒頭に置かれるLargoに対し、Largamenteは曲の途中の一部区間を一時的に幅広く、ゆったりと演奏することを示す場合に使われることが多い。',
      },
    ],
    confusions: [
      { term: 'Largo', slug: 'largo', note: 'Largamenteの元になった速度指示。' },
    ],
  },

  'tres-vite': {
    lead: 'Tres vite（トレ・ヴィト、正しくは Très vite）はフランス語で「とても速く」を意味する速度指示。',
    sections: [
      {
        heading: '成り立ち',
        body: 'très（とても）+ vite（速く）という2語の組み合わせで、ドビュッシーやラヴェルなどフランス語で書かれた楽譜に見られる。',
      },
    ],
    confusions: [
      { term: 'Vif', slug: 'vif', note: '同じく「速く、生き生きと」を意味する類語。' },
    ],
  },

  'assez-vite': {
    lead: 'Assez vite（アッセ・ヴィト）はフランス語で「十分に速く」を意味する速度指示。',
    sections: [
      {
        heading: '成り立ち',
        body: 'assez（十分に、かなり）+ vite（速く）の組み合わせ。Tres viteほどの極端な速さではなく、ほどよい快活さを示す。',
      },
    ],
    confusions: [
      { term: 'Tres vite', slug: 'tres-vite', note: 'assezよりも強い「とても」を用いた、より速いことを示す表現。' },
    ],
  },

  'modere': {
    lead: 'Modere（モデレ）は、フランス語Modéré（中くらいの速さで）からアクサン記号（´）を省いた表記。指し示す速度に違いはない。',
    sections: [
      {
        heading: 'アクサンが省かれる理由',
        body: '手書きの楽譜や版によっては、印刷上の制約や記譜の慣習からアクサン記号が省略されることがあり、Modereはその一例である。',
      },
    ],
    confusions: [
      { term: 'Moderato', slug: 'moderato', note: '同じ意味を持つイタリア語の標準的な指示。' },
    ],
  },

  'tres-lent': {
    lead: 'Très lent はフランス語で「とても遅く」。辞典にはアクサン記号のない Tres lent の形で収録されていますが、正しい綴りは Très lent です。',
    sections: [
      {
        heading: '成り立ち',
        body: 'très（とても）と lent（遅い）の組み合わせです。lent はラテン語の lentus（緩慢な、粘り気のある）に由来し、イタリア語の lento と同じ語根を持ちます。lentus には「粘る」という含みがあり、単に時間がかかることではなく、進みにくさを表す語です。',
      },
      {
        heading: 'フランス語の程度副詞',
        body: 'très は形容詞や副詞の前に置いて程度を強めます。イタリア語の molto、ドイツ語の sehr に対応する語です。フランス語で書かれた楽譜では、très calme（とても静かに）、très doux（とても柔らかく）のように、この語を伴った指示が頻繁に現れます。',
      },
      {
        heading: '極端に遅いテンポの扱い',
        body: 'テンポが遅くなるほど、拍の間隔が広がって拍節の感覚が失われやすくなります。この状態で各音を独立に置くと、音楽が進まなくなります。遅い箇所では、より大きな単位（2小節や4小節）を一つのまとまりとして感じることで、進行が保たれます。',
      },
    ],
    confusions: [
      { term: 'Lent', slug: 'lent', note: 'フランス語で遅く。très が付かない形。' },
      { term: 'Lento', slug: 'lento', note: '対応するイタリア語。同じ語根。' },
      { term: 'Largo', slug: 'largo', note: '幅広く。遅さではなく空間を指す。' },
    ],
  },

  'etwas-bewegt': {
    lead: 'Etwas bewegt（エトヴァス・ベヴェークト）はドイツ語で「いくぶん動きを持って」を意味する速度指示。',
    sections: [
      {
        heading: '成り立ち',
        body: 'etwas（いくぶん、やや）+ bewegt（動きを持って）の組み合わせで、Bewegt単体よりも控えめな動きの感覚を示す。',
      },
    ],
    confusions: [
      { term: 'Bewegt', slug: 'bewegt', note: 'Etwas bewegtの元になった基本語。' },
    ],
  },

  'moving': {
    lead: 'Moving は英語で「動いて」。停滞せず前へ進むことを求める指示です。イタリア語ではなく英語で速度を書く流儀があり、これはその一例です。',
    sections: [
      {
        heading: '英語で速度指示を書く流儀',
        body: '19世紀末から20世紀にかけて、英語圏の作曲家の一部が、イタリア語の伝統的な速度用語を自国語に置き換えて楽譜に書きました。パーシー・グレインジャーはこの方針を徹底し、強弱や奏法の指示までイタリア語を避けて英語で記しています。演奏者が辞書を引かずに意図を受け取れることが、この流儀の狙いです。',
      },
      {
        heading: 'con moto との対応',
        body: 'イタリア語の con moto（動きをもって）が対応する指示です。どちらも絶対的な速さを指定せず、進行が止まらないことを求めます。したがって、テンポを速めることではなく、各音に留まらず次へ渡していくことがこの指示の内容になります。フレーズの中で音を溜めると、速度が保たれていても歩みが止まって聞こえます。',
      },
      {
        heading: 'flowing との違い',
        body: 'flowing は流れのなめらかさを指し、moving は前進そのものを指します。moving は角のある動きでも成立しますが、flowing は途切れのなさが要件になります。同じ英語の指示ですが、求めている性質が違います。',
      },
    ],
    confusions: [
      { term: 'Flowing', slug: 'flowing', note: 'なめらかさを求める英語の指示。moving は前進を求める。' },
      { term: 'Con moto', slug: 'con-moto', note: 'イタリア語で対応する指示。' },
      { term: 'Camminando', slug: 'camminando', note: '歩くように。止まらないことを求める点で近い。' },
    ],
  },

  'flowing': {
    lead: 'Flowing は英語で「流れるように」。途切れのないなめらかな動きを求める指示で、イタリア語の伝統的な用語に代えて英語で書かれたものです。',
    sections: [
      {
        heading: '何が「流れる」のか',
        body: '流れが成立するには、音と音のあいだに切れ目がないこと、そして進行が止まらないことの両方が必要です。前者はレガートの問題であり、後者はテンポの問題です。片方だけでは流れになりません。音がつながっていても各音に留まれば淀み、前へ進んでいても切れていれば流れではなくなります。',
      },
      {
        heading: '対応するイタリア語',
        body: 'scorrevole（流れるように）が近い語です。また、フレーズを歌うようにつなぐという点では cantabile と重なります。英語で speaking よりも flowing が選ばれている箇所では、言葉としての区切りではなく、連続した線が求められていると読めます。',
      },
      {
        heading: '演奏上の要点',
        body: '流れを作るうえで問題になりやすいのは、小節線と拍の頭です。ここに自然な重心が来るため、意識しないと毎小節で区切りが生まれます。フレーズの行き先を先に決め、小節線を通過点として扱うと流れが保たれます。',
      },
    ],
    confusions: [
      { term: 'Moving', slug: 'moving', note: '前進を求める英語の指示。flowing はなめらかさを求める。' },
      { term: 'Legato', slug: 'legato', note: '音をつなぐ指示。流れの半分を担う。' },
      { term: 'Cantabile', slug: 'cantabile', note: '歌うように。連続した線を作る点で近い。' },
    ],
  },

  'un-poco': {
    lead: 'Un poco はイタリア語で「少し」。冠詞 un を伴わない poco と意味は同じで、Un poco allegro と Poco allegro は同じ内容を指します。',
    sections: [
      {
        heading: '冠詞の有無は意味を変えない',
        body: 'poco は「少し」を意味する語で、un poco は不定冠詞を付けた形です。イタリア語として自然な言い方の違いであり、程度の差を示すものではありません。楽譜でどちらが書かれているかによって演奏を変える必要はありません。',
      },
      {
        heading: '注意すべき別の語との違い',
        body: '混同してはならないのが poco a poco（少しずつ）です。これは程度ではなく変化の速さを指す指示で、「行きすぎるな」という制動の意味を持ちます。また、否定を伴う poco meno（少し控えて）や、まったく別の意味になる pochissimo（きわめてわずかに）もあります。un poco と poco a poco の混同は、実際に起きやすい読み間違いです。',
      },
      {
        heading: '程度を示す語の階層',
        body: '弱いほうから pochissimo（きわめてわずかに）、appena（かろうじて）、poco / un poco（少し）、assai（十分に）、molto（非常に）という順に並びます。楽譜の中で複数の程度指示が現れる箇所では、この相対関係で読むことになります。',
      },
    ],
    confusions: [
      { term: 'Poco', slug: 'poco', note: '同じ意味。冠詞の有無だけの違い。' },
      { term: 'Poco a poco', slug: 'poco-a-poco', note: '少しずつ。程度ではなく変化の速さを指す別の指示。' },
      { term: 'Appena', slug: 'appena', note: 'かろうじて。poco より弱い。' },
      { term: 'Molto', slug: 'molto', note: '非常に。poco の反対方向。' },
    ],
  },

  'al-rigore-di-tempo': {
    lead: 'Al rigore di tempo（アル・リゴーレ・ディ・テンポ）はイタリア語で「厳格な速さで」を意味し、テンポの揺れ（ルバートなど）を排して正確な拍を保つことを求める指示。',
    sections: [
      {
        heading: 'rigoreという語',
        body: '名詞rigore（厳格さ、厳密さ）に由来し、rigoroso（厳格な）という形容詞とも語根を共有する。',
      },
    ],
    confusions: [
      { term: 'Rubato', slug: 'rubato', note: '反対に、拍を意図的に揺らすことを示す語。' },
      { term: 'Battuta', slug: 'battuta', note: '同じく厳格な拍への回帰を示すa battutaの元になる語。' },
    ],
  },

  'as-sai': {
    lead: 'As sai は Assai（十分に、非常に）と同じ語です。辞典には語の途中に空白が入った形で収録されていますが、これは表記の揺れであり、別の用語ではありません。',
    sections: [
      {
        heading: '正しい綴りは Assai',
        body: 'イタリア語の assai は1語で綴ります。ad（〜へ）と satis（十分）に由来し、英語の satisfy や satisfaction と語根を共有します。原義は「十分なところまで」で、そこから「非常に」という強意の意味が生じました。',
      },
      {
        heading: '程度を強める語として',
        body: '単独では使われず、他の指示に添えて程度を強めます。Allegro assai なら「十分に速く」、Adagio assai なら「十分に遅く」です。molto（非常に）と近い働きをしますが、assai は「足りている」という含みを持つため、際限なく強めるのではなく、その語が指す性格が十分に出ている状態を求めます。',
      },
      {
        heading: '前に付くか後に付くか',
        body: 'assai は修飾する語の後ろに置かれるのが通例です（Allegro assai）。molto は前に置かれることが多く（Molto allegro）、この語順の差が両者を見分ける手がかりになります。',
      },
    ],
    confusions: [
      { term: 'Assai', slug: 'assai', note: '正しい綴り。内容はこちらを参照。' },
      { term: 'Molto', slug: 'molto', note: '非常に。assai と近いが語順の慣習が異なる。' },
      { term: 'Poco', slug: 'poco', note: '少し。assai の反対方向。' },
    ],
  },

  'colla-parte': {
    lead: 'Colla parte（コッラ・パルテ）はイタリア語で「その声部とともに」を意味し、伴奏者や合奏者に対して、自由なテンポを取る独奏者・主声部にテンポを合わせるよう指示する語。',
    sections: [
      {
        heading: '指揮者・伴奏者の役割',
        body: '独奏者が事前に決められた拍節ではなく、その場の解釈でテンポを揺らす箇所において、伴奏側がそれに追従することを明確にするために使われる。',
      },
    ],
    confusions: [
      { term: 'Col canto', slug: 'col-canto', note: '同じ働きを持つが、特に歌唱パートに合わせる場合に使われる語。' },
      { term: 'Rubato', slug: 'rubato', note: '独奏者側がテンポを揺らす行為そのものを指す語。' },
    ],
  },

  'come-prima': {
    lead: 'Come prima（コメ・プリマ）はイタリア語で「最初のように」を意味し、曲の冒頭や以前の箇所と同じテンポ・性格に戻ることを示す指示。',
    sections: [
      {
        heading: 'Tempo primoとの関係',
        body: '同じ内容をTempo primo（あるいはTempo I）という表記で示すこともあり、come primaはその言い換えにあたる。',
      },
    ],
    confusions: [
      { term: 'Tempo primo', slug: 'tempo-primo', note: '同じ内容を示す、より一般的な表記。' },
    ],
  },

  'eilen': {
    lead: 'Eilen はドイツ語で「急ぐ」。速度指示としてはテンポを速めることを示しますが、楽譜では否定形の nicht eilen（急がないで）として現れることのほうが多い語です。',
    sections: [
      {
        heading: 'nicht eilen という書き方',
        body: 'この語が否定形で使われるのは、演奏者が先走ってテンポを速めてしまいがちな箇所に釘を刺す目的です。マーラーは自作の楽譜に nicht eilen をはじめとする詳細なドイツ語の注意書きを多数記しており、演奏上の判断を細かく指定しています。否定形で書かれているということは、そこが実際に走りやすい箇所だという情報でもあります。',
      },
      {
        heading: 'なぜ走るのか',
        body: '音符が細かくなる箇所、音量が上がっていく箇所、そして緊張が高まる箇所では、テンポが自然に前へ出ます。演奏者が意図せず速めてしまうのは、身体が興奮に反応するためです。nicht eilen が書かれている箇所では、この反応を意識して抑える必要があります。',
      },
      {
        heading: '関連するドイツ語の指示',
        body: 'nicht schleppen（引きずらないで）が反対方向の注意書きで、遅くなりすぎることを禁じます。この二つが同じ楽譜に現れることがあり、その場合はテンポを両方向から固定していることになります。etwas（やや）、nicht zu（〜しすぎないで）といった限定の語も併用されます。',
      },
    ],
    confusions: [
      { term: 'Accelerando', slug: 'accelerando', note: '速度を上げていく指示。eilen は多くの場合これを禁じる文脈で現れる。' },
      { term: 'Stringendo', slug: 'stringendo', note: '切迫して速く。意図された加速。' },
      { term: 'Geschwind', slug: 'geschwind', note: 'ドイツ語で速く。状態を指す形容詞。' },
    ],
  },

  'en-serrant': {
    lead: 'En serrant（アン・セラン）はフランス語で「締め付けながら、せき立てて」を意味し、イタリア語のStringendoに相当する速度指示。',
    sections: [
      {
        heading: '語源',
        body: '動詞serrer（締める、詰める）の現在分詞形で、Stringendoの語源であるラテン語stringere（締める）と発想が共通している。',
      },
    ],
    confusions: [
      { term: 'Stringendo', slug: 'stringendo', note: '同じ発想に基づくイタリア語の標準的な指示。' },
    ],
  },

  'geschwind': {
    lead: 'Geschwind はドイツ語で「速く」。Schnell とほぼ同じ意味ですが、現代の日常語としては schnell のほうが一般的で、geschwind は古い語感を持ちます。',
    sections: [
      {
        heading: 'ドイツ語で速度を書く流儀',
        body: 'イタリア語の速度用語が国際的な標準として使われる一方で、ドイツ語圏の作曲家の一部は自国語で指示を書きました。schnell（速く）、langsam（遅く）、mäßig（中くらいに）、breit（幅広く）などがその語彙です。geschwind もこの系列に属します。',
      },
      {
        heading: 'Schnell との関係',
        body: '速度としての意味の範囲に違いはありません。両者が同じ曲の中で書き分けられている場合は何らかの区別が意図されている可能性がありますが、一般的な規則として定まったものはありません。楽譜でこの語を見たら Allegro に相当する速さと読むのが確実です。',
      },
      {
        heading: '語の成り立ち',
        body: '接頭辞 ge- を持つ形容詞で、ドイツ語では ge- が付くことで完了や集合の意味を帯びることがあります。現代ドイツ語では geschwind の使用頻度は schnell より低く、やや文語的な位置にあります。',
      },
    ],
    confusions: [
      { term: 'Schnell', slug: 'schnell', note: 'ドイツ語で速く。こちらが一般的な語。' },
      { term: 'Eilen', slug: 'eilen', note: '急ぐ。速度を上げていく動きを指す動詞。' },
      { term: 'Allegro', slug: 'allegro', note: '対応するイタリア語の速度標語。' },
    ],
  },

  'accellerato': {
    lead: 'Accellerato（アッチェレラート）は、イタリア語Accelerando（加速して）と語根を共有する関連語で、加速した状態を示す。標準的な綴りはaccelerato（lが1つ）で、accellerato（lが2つ）は綴りの異形として現れる。',
    sections: [],
    confusions: [
      { term: 'Accelerando', slug: 'accelerando', note: '加速していく過程そのものを示す標準的な指示。' },
    ],
  },

  'affrettoso': {
    lead: 'Affrettoso（アフレットーゾ）はイタリア語で「急いだ、せかせかした」を意味する形容詞的な語で、Affrettando（急いで）と同じ動詞affrettareに由来する。',
    sections: [
      {
        heading: 'Affrettandoとの違い',
        body: '現在分詞形で「変化していく過程」を示すaffrettandoに対し、affrettosoは性格・様子を表す形容詞的な形として使われる。',
      },
    ],
    confusions: [
      { term: 'Affrettando', slug: 'affrettando', note: '同じ動詞に由来する、変化の過程を示す語。' },
    ],
  },

  'cede': {
    lead: 'Cédez はフランス語の動詞 céder（譲る、緩める）の命令形で、テンポを緩めることを示します。辞典にはアクサン記号のない Cede の形で収録されています。',
    sections: [
      {
        heading: 'ラテン語 cedere（譲る、退く）から',
        body: 'céder はラテン語の cedere に由来し、英語の cede、concede、recede、precede も同じ語根を持ちます。原義は「退く、場所を譲る」です。したがってこの指示は、単に遅くすることではなく、押していた力を引く動きを表します。',
      },
      {
        heading: 'ritardando との違い',
        body: 'ritardando は「遅らせる」で、テンポの数値が下がることを指します。cédez は「譲る」で、力を緩めた結果として速度が落ちます。前者はテンポの操作、後者は力の操作です。この差は、緩め方の質に現れます。cédez では音量や張りも同時に引くのが語の方向に沿った扱いになります。',
      },
      {
        heading: '命令形で書かれる指示',
        body: 'フランス語の楽譜では、動詞の命令形で指示が書かれることがあります。cédez（緩めて）、retenez（引き止めて）、pressez（急いで）、serrez（詰めて）などがその形です。イタリア語が現在分詞（ritardando、accelerando）で過程を示すのに対して、フランス語は演奏者への呼びかけとして書かれます。',
      },
    ],
    confusions: [
      { term: 'Ritardando', slug: 'ritardando', note: '遅らせる。テンポの操作を指す。' },
      { term: 'Rallentando', slug: 'rallentando', note: '緩めていく。近い方向の指示。' },
      { term: 'Calando', slug: 'calando', note: '弱めながら遅く。力を引く点で cédez に近い。' },
    ],
  },

  'col-canto': {
    lead: 'Col canto（コル・カント）はイタリア語で「歌とともに」を意味し、伴奏者に対して、自由にテンポを取る歌唱パートにテンポを合わせるよう指示する語。',
    sections: [
      {
        heading: 'Colla parteとの関係',
        body: '声部を限定しない一般的な指示であるColla parte（その声部とともに）のうち、特に「歌（canto）」に合わせる場合を明示した言い方にあたる。',
      },
    ],
    confusions: [
      { term: 'Colla parte', slug: 'colla-parte', note: '声部を限定しない、より一般的な同種の指示。' },
    ],
  },

  'comodamente': {
    lead: 'Comodamente（コモダメンテ）はイタリア語で「心地よく、無理なく」を意味する副詞で、Tempo comodoの副詞形にあたる。',
    sections: [
      {
        heading: '語源',
        body: '形容詞comodo（快適な、都合のよい）に由来し、演奏者が窮屈さを感じない自然なテンポで演奏することを求める。',
      },
    ],
    confusions: [
      { term: 'Tempo comodo', slug: 'tempo-comodo', note: '同じ語根を持つ、速度そのものを指す表現。' },
    ],
  },

  'con-fretta': {
    lead: 'Con fretta はイタリア語で「急いで」。名詞 fretta（急ぎ、慌ただしさ）を con（〜を伴って）で受けた形です。速さではなく、慌ただしさという心理的な質を指します。',
    sections: [
      {
        heading: '速さと慌ただしさは別',
        body: 'この指示が示しているのは、テンポの数値ではなく状態です。fretta には落ち着きを失っているという含みがあり、余裕のなさが性格になります。したがって、単に速く弾くのではなく、追われているように聞こえることが求められます。逆に、遅いテンポの中でも慌ただしさは表現できます。',
      },
      {
        heading: 'con ＋名詞という構造',
        body: 'con moto（動きをもって）、con brio（活気をもって）、con fuoco（火をもって）と同じ文法構造です。con 自体には方向性がなく、後に続く名詞がすべてを決めます。したがって、この形の指示を読むときは名詞の意味を取ることが要点になります。',
      },
      {
        heading: '近い指示との違い',
        body: 'affrettando（急いていく）は現在分詞で、変化していく過程を示します。con fretta は状態を示すため、その区間を通してその性格が保たれます。stringendo は切迫して速度を上げることを明示する指示で、こちらはテンポの変化そのものを指定しています。',
      },
    ],
    confusions: [
      { term: 'Affrettando', slug: 'affrettando', note: '同じ語根。急いでいく過程を示す。' },
      { term: 'Stringendo', slug: 'stringendo', note: '切迫して速度を上げる。テンポ変化を明示する。' },
      { term: 'Con', slug: 'con', note: '「〜を伴って」。この構造を作る前置詞。' },
    ],
  },

  'con-vivo': {
    lead: 'Con vivo（コン・ヴィーヴォ）はイタリア語で「生き生きとした様子を伴って」を意味する速度・性格の指示。',
    sections: [
      {
        heading: 'Con brioとの関係',
        body: 'con（~を伴って）+ vivo（生き生きとした）という組み合わせで、con brio（生気を伴って）やcon moto（動きを伴って）と同じ文法構造を持つ。',
      },
    ],
    confusions: [
      { term: 'Vivo', slug: 'vivo', note: '同じ語根を持つ、単独で使われる形容詞形。' },
      { term: 'Con brio', slug: 'con-brio', note: '同じ文法構造を持つ類語。' },
    ],
  },

  'finalement': {
    lead: 'Finalement はフランス語で「ついに、最後に」。それまでの経過を経てある状態に至ることを示し、終結に向かう箇所に置かれます。',
    sections: [
      {
        heading: '語源',
        body: '形容詞 final（最後の）に副詞語尾 -ment を付けた形です。ラテン語の finis（終わり、境界）に由来し、英語の final、finish、finite、そして音楽用語の fine も同じ語根を持ちます。finis の原義は「境界」で、そこから「終わり」の意味が生じました。',
      },
      {
        heading: '-ment というフランス語の副詞語尾',
        body: 'フランス語では形容詞の女性形に -ment を付けて副詞を作ります。final → finalement、grave → gravement、doux → doucement がこの形です。イタリア語の -mente と同じラテン語起源の語尾で、両者は対応関係にあります。フランス語の楽譜で -ment で終わる語を見たら、元の形容詞を切り出せば意味が取れます。',
      },
      {
        heading: '楽譜での位置',
        body: 'この語は速度や音量を指定しません。示しているのは、その箇所が到達点にあたるということです。したがって、そこまでの経過があって初めて意味を持つ指示であり、前段をどう積み上げたかが結果を決めます。',
      },
    ],
    confusions: [
      { term: 'Fine', slug: 'fine', note: '曲の終わり。同じ finis を語根に持つ。' },
      { term: 'Coda', slug: 'coda', note: '結尾部。楽曲構造上の区分。' },
      { term: 'Gravement', slug: 'gravement', note: '同じ -ment 語尾を持つフランス語の副詞。' },
    ],
  },

  'gravement': {
    lead: 'Gravement はフランス語で「重々しく、荘重に」。イタリア語の Grave に相当します。フランス語の grave には「低い音の」という意味もあり、この語源が音楽と直接つながっています。',
    sections: [
      {
        heading: 'ラテン語 gravis（重い）から',
        body: '形容詞 grave に副詞語尾 -ment を付けた形です。ラテン語の gravis（重い）に由来し、英語の grave、gravity、gravitate も同じ語根を持ちます。重さという物理的な性質が、そのまま深刻さや荘重さという意味へ広がった語です。',
      },
      {
        heading: '「低い音」という意味',
        body: 'フランス語では son grave が「低い音」を意味し、高い音を指す aigu と対をなします。低音は物理的に振動が遅く、重い弦や長い管から出ます。重さと低さが同じ語で結ばれているのは、この物理的な対応があるためです。この語が付いた箇所で低音域が厚く書かれていることが多いのは偶然ではありません。',
      },
      {
        heading: '演奏上の判断',
        body: '重々しさは音量では作れません。テンポを広く取り、音を鳴らしきり、次の音へ急がないことで重心が生まれます。速く弾くと、音量が大きくても軽く聞こえます。逆に、遅くしただけで支えが抜けると、重さではなく緩みになります。',
      },
    ],
    confusions: [
      { term: 'Grave', slug: 'grave', note: '対応するイタリア語。同じ語根。' },
      { term: 'Pesante', slug: 'pesante', note: '重々しく。重量そのものを指す。' },
      { term: 'Maestoso', slug: 'maestoso', note: '荘厳に。威厳と格式を含む。' },
    ],
  },

  'calcando': {
    lead: 'Calcando（カルカンド）はイタリア語の動詞calcare（踏みしめる、踏み込む）の現在分詞形で、力を込めて踏み込むようにテンポを速めていくことを示す。',
    sections: [
      {
        heading: '語感',
        body: 'calcareは「踏む、踏みつける」を原義とする語で、accelerandoのような中立的な加速というより、力を込めて押し進めるような身体的なニュアンスを持つ。',
      },
    ],
    confusions: [
      { term: 'Stringendo', slug: 'stringendo', note: '同じくテンポを高めていくことを示す類語。' },
    ],
  },

  'en-pressant': {
    lead: 'En pressant（アン・プレッサン）はフランス語で「急いで、押し進めて」を意味し、動詞presser（急がせる、押す）の現在分詞形。',
    sections: [
      {
        heading: '語源',
        body: '英語のpress（押す）と同じ語根を持ち、テンポを前へ押し進めるような加速のニュアンスを示す。',
      },
    ],
    confusions: [
      { term: 'Accelerando', slug: 'accelerando', note: '同じくテンポを速めることを示すイタリア語の標準語。' },
    ],
  },

  'gravemente': {
    lead: 'Gravemente（グラーヴェメンテ）はイタリア語で「重々しく、深刻に」を意味する副詞で、Graveの副詞形にあたる。',
    sections: [
      {
        heading: 'Gravementとの違い',
        body: '綴りは似ているが、Gravemente（イタリア語）とGravement（フランス語、語末にeがない）は言語が異なる語で、意味はほぼ同じ。',
      },
    ],
    confusions: [
      { term: 'Grave', slug: 'grave', note: 'Gravementeの元になったイタリア語の標準的な指示。' },
      { term: 'Gravement', slug: 'gravement', note: '同じ意味を持つフランス語の副詞形。' },
    ],
  },

  'rapidamente': {
    lead: 'Rapidamente はイタリア語で「急速に」。形容詞 rapido に副詞語尾 -mente を付けた形です。語源をたどると、単に速いことではなく「さらっていく」動きを指す語だと分かります。',
    sections: [
      {
        heading: 'ラテン語 rapere（奪い去る）から',
        body: 'rapido はラテン語の rapidus に由来し、これは動詞 rapere（つかむ、奪い去る）から派生した語です。英語の rapid、rapture はいずれも同じ語根を持ちます。原義は「さらっていくような」で、速度そのものより、勢いで運び去られる感覚を含みます。この含みが veloce（速い）との違いです。',
      },
      {
        heading: 'veloce との違い',
        body: 'veloce はラテン語 velox に由来し、速さそのものを指す語です。rapidamente は上記のとおり「奪い去る」という動きの質を含みます。したがって前者は速度の指定として読め、後者は勢いの指定として読めます。同じ速さでも、一音ずつ整えて速く弾くのが veloce、流れに押されて進むのが rapidamente に近い性格です。',
      },
      {
        heading: '-mente という語尾',
        body: 'イタリア語では形容詞の女性形に -mente を付けて副詞を作ります。rapido → rapidamente、dolce → dolcemente、delicato → delicatamente がこの形です。楽譜に -mente で終わる語が現れたら、元の形容詞を切り出せば意味が取れます。',
      },
    ],
    confusions: [
      { term: 'Veloce', slug: 'veloce', note: '速さそのものを指す語。rapidamente は勢いを含む。' },
      { term: 'Presto', slug: 'presto', note: '速度標語。rapidamente は性格の指示として添えられる。' },
      { term: 'Con fretta', slug: 'con-fretta', note: '急いで。慌ただしさを含む。' },
    ],
  },

  'calandando': {
    lead: 'Calandando（カランダンド）はイタリア語Calando（弱めながら遅くして）の関連語で、意味は同じくテンポと音量を同時に落ち着かせていくことを示す。',
    sections: [
      {
        heading: 'Calandoとの関係',
        body: '標準的な表記はCalandoであり、Calandandoは同じ動詞calare（下げる、弱める）から作られた語形のバリエーションにあたる。',
      },
    ],
    confusions: [
      { term: 'Calando', slug: 'calando', note: '標準的な表記の形。' },
    ],
  },

  'note': {
    lead: 'Note（音符）は音の高さと長さを楽譜上に固定する記号。符頭の位置が音高を、符頭・符幹・符尾の形が長さを表します。',
    sections: [
      {
        heading: '符頭・符幹・符尾',
        body: '全音符は符幹を持たない白い符頭のみ、2分音符は白い符頭に符幹が付き、4分音符以下は黒く塗りつぶした符頭に符幹が付きます。8分音符以降はさらに符尾（旗）または連桁が加わり、旗が1本増えるごとに長さは半分になります。',
      },
      {
        heading: '五線と音高',
        body: '音の高さは五線上のどの線・間に符頭があるかと、その前に置かれた音部記号（clef）の組み合わせで決まります。同じ位置の音符でも、ト音記号とヘ音記号では指す音がまったく異なります。',
      },
    ],
    confusions: [
      { term: 'Rest', slug: 'rest', note: '音符の長さに対応する「無音」の記号。' },
      { term: 'Clef', slug: 'clef', note: '音符が指す音高を決める記号。' },
    ],
  },

  'rest': {
    lead: 'Rest（休符）は音を出さない時間の長さを楽譜上に示す記号。全休符・2分休符・4分休符など、音符と対応する長さの体系を持ちます。',
    sections: [
      {
        heading: '音符との対応',
        body: '全休符は五線の第4線からぶら下がる四角、2分休符は第3線に乗る四角というように、音符と同じ長さの単位ごとに固有の形が定められています。',
      },
      {
        heading: '数え続ける沈黙',
        body: '休符は単に「音がない」区間ではなく、拍を正確に数え続ける必要がある時間です。演奏者は休符の間も内的に拍を刻み続け、次の音の入りに備えます。',
      },
    ],
    confusions: [
      { term: 'Note', slug: 'note', note: '音の長さを持つ記号。休符はその「無音版」。' },
      { term: 'Generalpause', slug: 'generalpause', note: '全奏者が同時に止まる箇所を示す語で、休符そのものとは別の概念。' },
    ],
  },

  'sharp': {
    lead: 'Sharp（嬰記号、♯）は音を半音高くする変化記号。音符の前に置くと、その小節内の同じ高さの音すべてに効力が続きます。',
    sections: [
      {
        heading: '効力の範囲',
        body: '臨時記号としてのシャープは、置かれた小節が終わるまで有効です。次の小節には持ち越されません。五線の冒頭に調号として置かれた場合は、転調するまで曲全体に効力を持ちます。',
      },
      {
        heading: 'ダブルシャープ',
        body: 'さらに半音（全音）高くする記号として double sharp（×）があり、異名同音の書き分けのために使われます。',
      },
    ],
    confusions: [
      { term: 'Flat', slug: 'flat', note: '半音下げる、対になる変化記号。' },
      { term: 'Natural', slug: 'natural', note: '変化記号を打ち消して元の音高に戻す記号。' },
      { term: 'Double sharp', slug: 'double-sharp', note: 'さらに半音（全音）高くする記号。' },
      { term: 'Enharmonic', slug: 'enharmonic', note: '異名同音の関係。' },
    ],
  },

  'flat': {
    lead: 'Flat（変号、♭）は音を半音低くする変化記号。効力の範囲や表記のルールはシャープと対になります。',
    sections: [
      {
        heading: '記号の由来',
        body: 'シャープとフラットの記号はいずれもラテン文字 b に由来するとされます。中世の記譜法で「四角い b」（b quadratum）がナチュラル・シャープ系の記号へ、「丸い b」（b rotundum、b molle）がフラットの記号へと分かれて発展したことの名残です。',
      },
    ],
    confusions: [
      { term: 'Sharp', slug: 'sharp', note: '半音上げる、対になる変化記号。' },
      { term: 'Double flat', slug: 'double-flat', note: 'さらに半音（全音）低くする記号。' },
      { term: 'Natural', slug: 'natural', note: '変化記号を打ち消す記号。' },
    ],
  },

  'clef': {
    lead: 'Clef（音部記号）は五線上の特定の線が表す音の高さを定める記号。ト音記号・ヘ音記号・ハ音記号の3系統があります。',
    sections: [
      {
        heading: '3系統の由来',
        body: 'ト音記号（G clef）は文字Gの装飾体で、渦の中心がト音（G）の位置を示します。ヘ音記号（F clef）は文字Fに由来し、2つの点がヘ音（F）を挟む線を示します。ハ音記号（C clef）は装飾されたCの形で、中央にハ音（C）を置く線の位置を五線上で移動させて使います（アルト記号・テノール記号など）。',
      },
      {
        heading: '楽器との結びつき',
        body: 'ピアノ楽譜では上段にト音記号、下段にヘ音記号を置くのが標準です。ヴィオラはハ音記号（アルト記号）を用いる代表的な楽器です。',
      },
    ],
    confusions: [
      { term: 'Treble clef', slug: 'treble-clef', note: 'ト音記号。' },
      { term: 'Bass clef', slug: 'bass-clef', note: 'ヘ音記号。' },
      { term: 'Alto', slug: 'alto', note: 'ハ音記号（アルト記号）が使われる音域。' },
    ],
  },

  'octave': {
    lead: 'Octave（オクターヴ）は周波数比が2:1になる音程で、同じ音名を持つ最も近い2つの音の隔たりを指します。',
    sections: [
      {
        heading: '語源',
        body: 'ラテン語で「8番目」を意味する octava に由来します。ド・レ・ミ・ファ・ソ・ラ・シ・ドと数えたときの8番目の音であることから名付けられました。',
      },
      {
        heading: '記譜上の扱い',
        body: '高いオクターヴ・低いオクターヴを表すため、五線の上下に 8va（オッターヴァ、1オクターヴ上）、8va bassa（1オクターヴ下）、15ma（2オクターヴ上）といった記号が添えられます。',
      },
    ],
    confusions: [
      { term: 'Unison', slug: 'unison', note: '同じ高さの音同士の関係。' },
      { term: 'Interval', slug: 'interval', note: '2つの音の高さの隔たり全般を指す語。' },
    ],
  },

  'bar': {
    lead: 'Bar（小節）は拍子記号によって定められた拍数のまとまりごとに、縦線（小節線）で区切られた単位。英語圏では measure とも呼ばれます。',
    sections: [
      {
        heading: '小節線の役割',
        body: '拍子記号が4/4なら、1小節には4分音符換算で4拍分の音符・休符が収まるよう区切られます。小節線は、拍のまとまりを視覚的に把握しやすくするための記譜上の工夫です。',
      },
    ],
    confusions: [
      { term: 'Time signature', slug: 'time-signature', note: '1小節に何拍入るかを定める記号。' },
      { term: 'Double bar line', slug: 'double-bar-line', note: '2本の縦線で示す、より大きな区切り。' },
      { term: 'Beat', slug: 'beat', note: '小節を構成する拍そのもの。' },
    ],
  },

  'beat': {
    lead: 'Beat（拍）は音楽の時間を等間隔に分割する基本単位。拍子記号の分母が、1拍がどの音符の長さに相当するかを示します。',
    sections: [
      {
        heading: '拍子記号との関係',
        body: '例えば4/4拍子は「4分音符を1拍として、1小節に4拍」を意味します。拍は物理的な音の長さそのものではなく、聴き手や演奏者が感じ取る規則的な脈動です。',
      },
      {
        heading: '強拍と弱拍',
        body: '1つの小節の中でも拍には強弱の序列があります。4/4拍子であれば1拍目が最も強く、3拍目が次に強いというように、拍ごとに重みが異なります。',
      },
    ],
    confusions: [
      { term: 'Bar', slug: 'bar', note: '拍が集まってできる区画。' },
      { term: 'Downbeat', slug: 'downbeat', note: '小節内で最も強く感じられる拍。' },
      { term: 'Upbeat', slug: 'upbeat', note: '次の強拍の直前に置かれる拍。' },
    ],
  },

  'key': {
    lead: 'Key（調）は特定の音階の音を中心に音楽が構成されている状態を指します。中心の音（主音）と長調・短調の別によって「ハ長調」「イ短調」のように呼ばれます。',
    sections: [
      {
        heading: '調号との関係',
        body: 'それぞれの調には固有のシャープ・フラットの組み合わせ（調号）があります。五線の冒頭にまとめて示すことで、曲中で毎回変化記号を書く手間を省いています。',
      },
    ],
    confusions: [
      { term: 'Diatonic', slug: 'diatonic', note: 'ある調の音階を構成する音のみを使うこと。' },
    ],
  },

  'tune': {
    lead: 'Tune は英語で口ずさめるようなまとまりのある旋律を指す口語的な語であると同時に、動詞としては楽器の音高を基準に合わせる作業（チューニング）も指します。',
    sections: [
      {
        heading: '動詞としての tune',
        body: '弦楽器なら弦の張力を、管楽器なら管の長さ（抜き差し管）を調整して、基準音（多くはA=440Hz前後）に合わせる作業をチューニングと呼びます。オーケストラでは演奏前にオーボエが基準のA音を出し、全員がそれに合わせる慣習があります。',
      },
    ],
    confusions: [
      { term: 'Key', slug: 'key', note: '音楽が中心とする調。' },
      { term: 'Melody', slug: 'melody', note: '旋律を指すより一般的な語。' },
    ],
  },

  'texture': {
    lead: 'Texture（テクスチャ）は複数の音のラインが同時に鳴るときの重なり方の性質、密度や独立性の度合いを指す語です。',
    sections: [
      {
        heading: '3つの基本分類',
        body: '単一の旋律線だけで構成される monophony（単旋律）、複数の独立した旋律線が同時に進行する polyphony（多声）、1つの主旋律を他の声部が和声的に支える homophony（和声的音楽）の3種類が、テクスチャを分類する際の基本的な枠組みとして用いられます。',
      },
    ],
    confusions: [
      { term: 'Monophony', slug: 'monophony', note: '単一の旋律線のみのテクスチャ。' },
      { term: 'Polyphony', slug: 'polyphony', note: '複数の独立した旋律線が同時に進むテクスチャ。' },
      { term: 'Homophony', slug: 'homophony', note: '主旋律を他の声部が和声的に支えるテクスチャ。' },
      { term: 'Harmony', slug: 'harmony', note: '音の縦の重なりそのものを扱う分野。' },
    ],
  },

  'harmony': {
    lead: 'Harmony（和声）は複数の音が同時に重なって生まれる響き、およびその重なり方を扱う音楽理論の分野を指します。',
    sections: [
      {
        heading: 'melody との違い',
        body: '時間軸に沿って音が横に並ぶ melody（旋律）に対して、harmony は同時に鳴る音の縦の重なりを扱います。西洋音楽理論では3度を積み重ねてできる和音（chord）を基本単位とし、それらがどう連結・進行するかを扱う体系として発展してきました。',
      },
    ],
    confusions: [
      { term: 'Melody', slug: 'melody', note: '音が横に並ぶ旋律。harmony は縦の重なり。' },
      { term: 'Chord', slug: 'chord', note: '和声を構成する基本単位。' },
      { term: 'Texture', slug: 'texture', note: '複数の声部の重なり方の性質全般。' },
    ],
  },

  'score': {
    lead: 'Score（総譜）は、演奏に参加するすべてのパートを、同時に鳴る箇所が縦に揃うよう1段ずつ重ねて記した楽譜です。',
    sections: [
      {
        heading: 'パート譜との違い',
        body: '個々の奏者が使うのは自分のパートだけを抜き出したパート譜（part）で、全体を見渡せるスコアは主に指揮者や作曲家、学習者が用います。オーケストラスコアでは、上から木管、金管、打楽器、弦楽器という並び順が慣習として定着しています。',
      },
    ],
    confusions: [
      { term: 'Sheet music', slug: 'sheet-music', note: '演奏用に出版された楽譜全般を指すより広い語。' },
    ],
  },

  'sheet-music': {
    lead: 'Sheet music は演奏のために印刷・出版された楽譜全般を指す英語表現です。',
    sections: [
      {
        heading: 'score との違い',
        body: 'score がすべてのパートを重ねた総譜を指すのに対し、sheet music はより広い言葉で、1曲だけを抜き出したパート譜や、ピアノ用の単独楽譜なども含みます。19世紀後半から20世紀にかけて家庭用ピアノが普及すると、1曲単位で販売される sheet music が音楽産業の主要な商品になりました。',
      },
    ],
    confusions: [
      { term: 'Score', slug: 'score', note: 'すべてのパートを重ねた総譜。' },
    ],
  },

  'double-bar-line': {
    lead: 'Double bar line（複縦線）は2本の縦線を並べた記号で、楽曲や大きなセクションの区切りを示します。',
    sections: [
      {
        heading: '使われる場面',
        body: '通常の小節線が拍のまとまりごとの区切りであるのに対し、複縦線は転調や拍子の変化、大きな部分の切れ目、あるいは曲の終わり（終止線、後ろの線を太くしたもの）を示すために使われます。',
      },
    ],
    confusions: [
      { term: 'Bar', slug: 'bar', note: '拍のまとまりを区切る通常の小節線。' },
      { term: 'Fine', slug: 'fine', note: '曲の終わりの位置を示す語。' },
    ],
  },

  'segno': {
    lead: 'Segno（セーニョ、記号 𝄋）は反復の戻り先を示す記号。Dal segno（D.S.）と組み合わせて「segno の位置まで戻る」という指示に使われます。',
    sections: [
      {
        heading: '使い方',
        body: '曲中の1箇所に segno 記号を置き、後方に D.S.（dal segno＝セーニョから）と書くことで、そこまで進んだ演奏を segno の位置に戻して繰り返します。Da capo（D.C.＝最初から）が曲の冒頭に戻るのに対し、segno は曲中の任意の地点に戻れる点が異なります。',
      },
    ],
    confusions: [
      { term: 'Dal segno', slug: 'dal-segno', note: 'segno の位置まで戻れという指示。' },
      { term: 'Da capo', slug: 'da-capo', note: '曲の冒頭まで戻れという指示。' },
      { term: 'Coda', slug: 'coda', note: '反復を抜けた後に進む結尾部。' },
    ],
  },

  'repeat': {
    lead: 'Repeat（リピート）は反復記号、あるいは反復そのものを指す語。楽譜上では小節線に2つの点を加えた記号で示されます。',
    sections: [
      {
        heading: '記号の形と範囲',
        body: '開始の反復記号は小節線の右側に、終了の反復記号は左側に点を2つ縦に並べて書きます。この2つで囲まれた区間を、演奏では指定された回数（通常2回）繰り返します。開始記号が省略されている場合は、曲の冒頭または直前の反復記号まで戻ります。',
      },
    ],
    confusions: [
      { term: 'Bis', slug: 'bis', note: '短いフレーズの反復を指示する語。' },
      { term: 'Replica', slug: 'replica', note: '反復の有無を明示するイタリア語。' },
      { term: 'Da capo', slug: 'da-capo', note: '曲の冒頭に戻る反復指示。' },
    ],
  },

  'segue': {
    lead: 'Segue はイタリア語で「続く」を意味し、楽譜上では前の部分から間を置かずに次の部分へ進むことを指示する語です。',
    sections: [
      {
        heading: 'attacca との近さ',
        body: '楽章間や曲間に本来ある休止・拍手の間を取らず、そのまま続けて演奏することを求める指示です。attacca もほぼ同じ意味で使われますが、attacca は特に楽章の切れ目で次に「襲いかかるように」続けて始めることを強調するニュアンスを持つ語とされます。',
      },
    ],
    confusions: [
      { term: 'Attacca', slug: 'attacca', note: '同じく間を置かず続けることを指示する語。' },
    ],
  },

  'volti-subito': {
    lead: 'Volti subito（略記 V.S.）はイタリア語で「すぐにページをめくれ」を意味し、パート譜の下端に印刷されてページをめくるタイミングを演奏者に知らせる指示です。',
    sections: [
      {
        heading: '実用的な記号',
        body: '演奏中に休符がほとんどないままページの最後に達すると、めくる間もなく次のページの音符が始まってしまいます。V.S. はそうした箇所で演奏者に心構えを促す実用的な記号であり、音楽表現そのものへの指示ではありません。',
      },
    ],
  },

  'generalpause': {
    lead: 'Generalpause（略 G.P.）はドイツ語由来の用語で、オーケストラや合奏の全パートが同時に演奏を止める休止を指します。',
    sections: [
      {
        heading: '全休符との違い',
        body: '単なる全休符が各パートの譜面に個別に書かれているのに対し、G.P. という表記は「ここは全員が止まる、書き間違いではない」ということを演奏者に明示する実用的な合図としての意味合いが強い語です。',
      },
    ],
    confusions: [
      { term: 'Rest', slug: 'rest', note: '個々のパートの休止を示す通常の休符。' },
    ],
  },

  'introduction': {
    lead: 'Introduction（序奏）は楽曲の主要部分が始まる前に置かれる導入区間を指します。',
    sections: [
      {
        heading: '交響曲の序奏とポピュラー音楽のイントロ',
        body: '交響曲や序曲では、主部の速い楽章の前に遅いテンポの序奏が置かれることがあります。ポピュラー音楽でも、歌が始まる前の器楽部分をイントロと呼び、同じ語の略称として定着しています。',
      },
    ],
    confusions: [
      { term: 'Coda', slug: 'coda', note: '序奏が曲の始まりに置かれるのに対し、coda は終わりに置かれる締めくくりの部分。' },
    ],
  },

  'bridge': {
    lead: 'Bridge はポピュラー音楽の形式用語で、それまでのセクションとは異なる旋律・和声を持ち、曲中に一度だけ現れることが多い部分を指します。',
    sections: [
      {
        heading: '32小節形式での用法',
        body: 'ジャズのスタンダード曲でよく使われる32小節形式（AABA）では、2回のAセクションの後に置かれる異なる8小節のセクションを bridge と呼びます。それまでの繰り返しに変化を持ち込み、最後のAセクションへの橋渡しをする役割からこの名があります。',
      },
    ],
    confusions: [
      { term: 'Standard', slug: 'standard', note: 'AABA形式が多く使われるジャズの定番曲。' },
    ],
  },

  'vamp': {
    lead: 'Vamp は同じ短い伴奏パターンを、次の展開の合図があるまで繰り返すセクションを指す語です。',
    sections: [
      {
        heading: '可変長のセクション',
        body: 'ミュージカルやジャズでは、歌手が登場するまでの時間稼ぎや、ソロ奏者が即興を始める前の土台として使われます。長さがあらかじめ決まっておらず、指揮者や演奏者の合図で次に進む、可変長のセクションであることが特徴です。',
      },
    ],
  },

  'fade-out': {
    lead: 'Fade out は録音において、演奏を止めるのではなく音量を徐々に下げていくことで曲を終わらせる手法です。',
    sections: [
      {
        heading: '録音時代の技法',
        body: '生演奏では実現しにくく、ミキシングの操作によって可能になる技法のため、主にレコード時代以降のポピュラー音楽で広まりました。曲の構造上、明確な終止（cadence）を書かずに済むため、演奏がずっと続いているような印象を残したいときに使われます。',
      },
    ],
  },

  'hook': {
    lead: 'Hook はポピュラー音楽で、聴き手の注意を引きつけて記憶に残る、短く反復的な旋律やフレーズを指す語です。',
    sections: [
      {
        heading: '「サビ」との違い',
        body: '日本語の「サビ」がしばしば曲の中で最も盛り上がるコーラス部分全体を指すのに対し、hook はコーラスの一部や、イントロのリフ、タイトルを歌う一小節など、曲中のどこにあってもよい、より短い単位を指すことがあります。',
      },
    ],
  },

  'standard': {
    lead: 'Standard は、特定の作者や初演者に限定されず、長期間にわたり多くの演奏家によって繰り返し演奏・録音されてきた楽曲を指す語です。',
    sections: [
      {
        heading: 'ジャズにおける用法',
        body: '特にジャズの文脈で使われることが多く、ミュージカルや映画のために書かれた楽曲が、元の文脈を離れて即興演奏の共通の題材（レパートリー）として定着したものを指します。',
      },
    ],
    confusions: [
      { term: 'Bridge', slug: 'bridge', note: 'スタンダード曲で多いAABA形式のBセクション。' },
    ],
  },

  'take': {
    lead: 'Take は録音において、1回分の演奏の収録単位を指す語です。',
    sections: [
      {
        heading: '使われ方',
        body: '同じ曲・同じ箇所を複数回録音し直した場合、それぞれを「テイク1」「テイク2」のように区別して呼びます。発表される音源は、複数のテイクの中から最良のものを選ぶか、複数のテイクの良い部分をつなぎ合わせて作られることもあります。',
      },
    ],
  },

  'binary-form': {
    lead: 'Binary form（2部形式）は、対照的または関連する2つのセクション（AとB）から成る楽曲構成の基本形です。',
    sections: [
      {
        heading: '反復と調の設計',
        body: 'バロック組曲の舞曲楽章に多く見られる形式で、多くの場合それぞれのセクションが反復記号で繰り返されます。Aセクションが主調から属調（または平行調）へ転調して終わり、Bセクションが主調に戻ってくるという調の設計が典型的です。',
      },
    ],
    confusions: [
      { term: 'Ternary form', slug: 'ternary-form', note: '3つのセクションから成る形式。' },
      { term: 'Sonata form', slug: 'sonata-form', note: '2部形式から発展したとされる、より大規模な形式。' },
    ],
  },

  'canon': {
    lead: 'Canon（カノン）は、1つの旋律を複数の声部が一定の間隔をおいて厳格に模倣し続ける作曲技法・形式です。',
    sections: [
      {
        heading: '輪唱との関係',
        body: '最も単純なカノンは輪唱（round）で、全声部が同じ旋律・同じ調のまま開始のタイミングだけをずらして重ねます。「かえるの合唱」のような童謡がこの形です。より高度なカノンでは、後続の声部が反行（逆さま）や拡大・縮小といった変形を伴って模倣することもあります。',
      },
      {
        heading: '代表曲',
        body: 'ヨハン・パッヘルベルの「カノンとジーグ ニ長調」は、3声のカノンの上に独立した低音（通奏低音）のパターンを繰り返し重ねた作品として広く知られています。',
      },
    ],
    confusions: [
      { term: 'Fugue', slug: 'fugue', note: 'カノンが1つの旋律の厳格な模倣であるのに対し、フーガは主題が自由に展開・変形される、より複雑な多声形式。' },
      { term: 'Stretto', slug: 'stretto', note: 'フーガなどで主題の模倣が本来より早いタイミングで重なる技法。' },
    ],
  },

  'alla-breve': {
    lead: 'Alla breve は「2分の2拍子で」という意味のイタリア語の指示で、記号 𝄴（Cに縦線を引いた形）で示されます。',
    sections: [
      {
        heading: '記号の由来',
        body: 'この記号はコモンタイムを示すCに、演奏を速く（2つ分をひとまとめに）数えることを示す縦線を加えたもので、中世の記譜法（メンスーラ記譜法）で完全な分割を示したCと、速い演奏を示した breve（短い）の名残が組み合わさったものです。',
      },
      {
        heading: '実際の効果',
        body: '4分の4拍子として書かれた楽曲にこの指示が付くと、4分音符4つ分を4拍ではなく2拍（2分音符2つ分）として数え、体感的なテンポが2倍近くになります。行進曲や快活な楽章の終楽章などでよく使われます。',
      },
    ],
    confusions: [
      { term: 'Common time', slug: 'common-time', note: '4分の4拍子を示す記号 C。' },
      { term: 'Cut time', slug: 'cut-time', note: 'alla breve の英語での呼び方。' },
      { term: 'Breve', slug: 'breve', note: 'この語の由来になった音符名。' },
    ],
  },

  'breve': {
    lead: 'Breve は現代の記譜法で全音符の2倍の長さを持つ音符ですが、語源のラテン語 brevis は「短い」を意味します。',
    sections: [
      {
        heading: '名前と長さが逆転した理由',
        body: '中世の記譜法では、現在よりもさらに長い longa（ロンガ）や maxima（マキシマ）という音符が標準的に使われており、breve はそれらに対して「短い」音符でした。時代が下って音符の長さの基準が全体的に短くなった結果、breve は現存する音符の中で最も長い部類として残り、名前と実際の長さの関係が逆転しました。alla breve という用語名にも、この歴史的な名残が残っています。',
      },
    ],
    confusions: [
      { term: 'Alla breve', slug: 'alla-breve', note: 'breve という音符名が語源になっている拍子指示。' },
    ],
  },

  'bianca': {
    lead: 'Bianca はイタリア語で「白」を意味し、2分音符（符頭が白抜きの音符）を指す伝統的な呼び名です。',
    sections: [
      {
        heading: '符頭の色による命名',
        body: 'イタリア語の音符名は見た目の色に基づいており、白抜きの符頭を持つ全音符・2分音符系は bianca（白い）、黒く塗りつぶされた4分音符以下は nera（黒い）と呼ばれます。音価の分数に基づく英語の呼び名（half noteなど）とは異なる命名の考え方です。',
      },
    ],
    confusions: [
      { term: 'Blanche', slug: 'blanche', note: 'フランス語での同じ意味の呼び名。' },
    ],
  },

  'blanche': {
    lead: 'Blanche はフランス語で「白い」を意味し、2分音符を指す呼び名です。イタリア語の bianca と同じ発想で、符頭が白抜きであることに由来します。',
    sections: [
      {
        heading: 'フランス式の音符名',
        body: 'フランス語の音符名は音価の分数ではなく符頭の色や形に基づいており、全音符は ronde（丸い）、2分音符は blanche（白い）、4分音符は noire（黒い）、8分音符は croche（かぎ）と呼ばれます。',
      },
    ],
    confusions: [
      { term: 'Bianca', slug: 'bianca', note: 'イタリア語での同じ意味の呼び名。' },
    ],
  },

  'bis': {
    lead: 'Bis はラテン語で「2回」を意味し、楽譜では特定の箇所を1回繰り返す指示として、また演奏会では聴衆がアンコールを求める掛け声として使われます。',
    sections: [
      {
        heading: '2つの使われ方',
        body: '反復記号を使うほどではない短いフレーズを繰り返す際に、その部分に bis と書き添えて指示することがあります。フランス語圏やイタリア語圏の演奏会では、聴衆が拍手とともに「Bis！」と叫んでアンコールを求める習慣が今も残っています。',
      },
    ],
    confusions: [
      { term: 'Repeat', slug: 'repeat', note: '楽譜上の反復記号。' },
      { term: 'Replica', slug: 'replica', note: '反復の有無を明示するイタリア語。' },
    ],
  },

  'replica': {
    lead: 'Replica はイタリア語で「反復」を意味し、"Da Capo senza replica"（反復せずに最初へ戻る）のような形で、反復の有無を明示するために使われます。',
    sections: [
      {
        heading: 'なぜわざわざ明示するのか',
        body: 'Da capo（D.C.＝最初から）で曲の冒頭に戻った際、冒頭部分にリピート記号があると、そこも再度繰り返すべきか判断が分かれます。senza replica（反復なしで）と書き添えることで、「2回目に戻ってきたときは繰り返さずに先へ進む」ことを明示的に指示できます。',
      },
    ],
    confusions: [
      { term: 'Da capo', slug: 'da-capo', note: '曲の冒頭に戻る反復指示。' },
      { term: 'Repeat', slug: 'repeat', note: '楽譜上の反復記号。' },
      { term: 'Bis', slug: 'bis', note: '短いフレーズの反復指示。' },
    ],
  },

  'authentic-cadence': {
    lead: 'Authentic cadence（正格終止）は属和音（V）から主和音（I）へ進む終止で、調性音楽における最も基本的な「終わった」感覚を作る和声進行です。',
    sections: [
      {
        heading: '完全と不完全',
        body: '両方の和音が根音を最低音に持ち、かつIの最上声部が主音である場合は perfect authentic cadence（完全正格終止）、そうでない場合は imperfect authentic cadence（不完全正格終止）と区別されます。',
      },
    ],
    confusions: [
      { term: 'Plagal cadence', slug: 'plagal-cadence', note: 'IV-Iで終わる終止。「アーメン終止」とも呼ばれる。' },
      { term: 'Half cadence', slug: 'half-cadence', note: '属和音で止まり、まだ終わっていない印象を残す終止。' },
      { term: 'Deceptive cadence', slug: 'deceptive-cadence', note: '属和音の後、主和音ではない和音へ進む終止。' },
    ],
  },

  'baroque': {
    lead: 'Baroque は主に1600年頃から1750年頃（バッハの没年）までの西洋音楽の様式・時代を指す語です。',
    sections: [
      {
        heading: '語源',
        body: 'フランス語の baroque は元来「歪んだ真珠」を意味するポルトガル語 barroco に由来し、18世紀には過度に装飾的で奇抜な様式を批判的に指す言葉として使われました。時代様式を指す中立的な呼称として定着したのは19世紀以降のことです。',
      },
      {
        heading: '音楽的特徴',
        body: '通奏低音（basso continuo）の使用や、装飾音の多用などが特徴として挙げられます。バッハ、ヘンデル、ヴィヴァルディがこの時代を代表する作曲家です。',
      },
    ],
  },

  'ballade': {
    lead: 'Ballade は物語的な内容を持つ、規模の大きな器楽曲、または声楽曲を指す語です。',
    sections: [
      {
        heading: '定形詩から器楽曲へ',
        body: '元は中世フランスの定形詩・歌曲の形式（バラード形式）を指す語でしたが、19世紀にショパンが4曲のピアノのためのバラードを作曲したことで、物語的で劇的な展開を持つ自由な形式の器楽曲を指す語として広く定着しました。',
      },
    ],
    confusions: [
      { term: 'Bagatelle', slug: 'bagatelle', note: '対照的に、規模の小さい気軽な性格の小品を指す語。' },
    ],
  },

  'bagatelle': {
    lead: 'Bagatelle はフランス語で「取るに足らないもの、些細なこと」を意味し、規模の小さい、気軽な性格の器楽小品を指します。',
    sections: [
      {
        heading: '謙遜的な命名',
        body: '作曲家自身が「大したものではない」という含みを込めてこの語を曲名に用いることが多いです。ベートーヴェンは複数の「バガテル集」を残しており、その中の1曲「エリーゼのために」は特に広く知られています。',
      },
    ],
    confusions: [
      { term: 'Ballade', slug: 'ballade', note: '対照的に、規模の大きい物語的な曲を指す語。' },
      { term: 'Impromptu', slug: 'impromptu', note: '即興的な性格を持つ小品を指す語。' },
    ],
  },

  'bolero': {
    lead: 'Bolero はスペイン発祥の3拍子の舞曲、またはその舞曲に基づく楽曲を指す語です。',
    sections: [
      {
        heading: 'スペインの舞曲として',
        body: '18世紀末にスペインで生まれたとされる舞曲で、カスタネットのリズムを伴う情熱的な性格が特徴です。',
      },
      {
        heading: 'ラヴェルの「ボレロ」',
        body: 'モーリス・ラヴェルが1928年に作曲した管弦楽曲「ボレロ」は、同じリズムパターンと旋律を、楽器編成を変えながら約15分間にわたり反復・クレッシェンドさせ続ける作品で、伝統的なスペインのボレロの舞曲そのものとは性格が大きく異なります。',
      },
    ],
    confusions: [
      { term: 'Habanera', slug: 'habanera', note: '同じくスペイン起源の舞曲。' },
      { term: 'Fandango', slug: 'fandango', note: 'スペインの活発な舞曲。' },
    ],
  },

  'bourrée': {
    lead: 'Bourrée は17〜18世紀のフランス発祥の快活な舞曲で、バロック組曲の任意楽章としてよく用いられます。',
    sections: [
      {
        heading: '拍子と始まり方',
        body: '多くは2分の2拍子（または4分の4拍子）で書かれ、小節の最後の4分音符から始まるアウフタクト（弱起）を特徴とします。バッハの「フランス組曲」や無伴奏チェロ組曲などにも例が見られます。',
      },
    ],
    confusions: [
      { term: 'Gavotte', slug: 'gavotte', note: '同じくバロック組曲で使われるフランスの舞曲。' },
      { term: 'Allemande', slug: 'allemande', note: 'バロック組曲の標準的な舞曲楽章の1つ。' },
      { term: 'Gigue', slug: 'gigue', note: 'バロック組曲の標準的な舞曲楽章の1つ。' },
    ],
  },

  'ballo': {
    lead: 'Ballo はイタリア語で「踊り、舞曲」を意味する一般的な語です。',
    sections: [
      {
        heading: 'オペラの中での用法',
        body: 'イタリア・オペラの文脈では、劇中に挿入される舞踊場面を指して ballo と呼ぶことがあります。ヴェルディの歌劇「仮面舞踏会（Un ballo in maschera）」のように、作品タイトルの中に現れることもあります。',
      },
    ],
  },

  'burla': {
    lead: 'Burla はイタリア語で「いたずら、冗談」を意味し、ユーモラスで奇抜な性格を持つ短い器楽曲を指します。',
    sections: [
      {
        heading: 'scherzo との近さ',
        body: '「冗談」を意味する点で scherzo（スケルツォ）と語感が近く、突飛な和声や予想外のリズムの変化によってユーモアを表現する点も共通しています。リヒャルト・シュトラウスがピアノと管弦楽のために書いた「ブルレスケ ニ短調」は、同じ語根を持つ近い性格の作品として知られています。',
      },
    ],
    confusions: [
      { term: 'Caccia', slug: 'caccia', note: '活発な追いかけ合いを特徴とする、別の起源を持つ語。' },
    ],
  },

  'caccia': {
    lead: 'Caccia はイタリア語で「狩り」を意味し、14世紀イタリアの多声音楽の一形式、および声部同士が追いかけ合うカノン風の書法を指します。',
    sections: [
      {
        heading: '音楽上の特徴',
        body: 'トレチェント（14世紀イタリア）の世俗曲の一形式で、上2声がカノン風に旋律を追いかけ合い、しばしば狩りの掛け声や動物の鳴き声を描写する具体的な歌詞を伴いました。カノン的な模倣書法という点で、後のカノンの先駆けの一つとされます。',
      },
    ],
    confusions: [
      { term: 'Canon', slug: 'canon', note: '声部同士が旋律を模倣し合う、より厳格な形式。' },
    ],
  },

  'brindisi': {
    lead: 'Brindisi はイタリア語で「乾杯」を意味し、オペラなどの劇中で歌われる乾杯の歌を指します。',
    sections: [
      {
        heading: '代表例',
        body: 'ヴェルディの歌劇「椿姫」第1幕でアルフレードとヴィオレッタが歌う「乾杯の歌（Libiamo ne\' lieti calici）」が、この形式の最もよく知られた例です。祝祭的な場面で歌われる、明るく親しみやすい旋律を特徴とします。',
      },
    ],
  },

  'bouffe': {
    lead: 'Bouffe はフランス語で「喜劇的な、こっけいな」を意味し、opéra bouffe（オペラ・ブッフ）のように、風刺やドタバタ劇を含む軽喜劇的なオペラのジャンルを表す語として使われます。',
    sections: [
      {
        heading: 'opéra comique との違い',
        body: 'opéra bouffe はオッフェンバックが確立したジャンルで、社会風刺や政治的パロディを含む点に特徴があります。より広く「台詞を伴う軽いオペラ」を指す opéra comique に対して、bouffe は特に滑稽さ・風刺性を強調する語です。',
      },
    ],
    confusions: [
      { term: 'Opera buffa', slug: 'opera-buffa', note: '同じ「喜劇的な」を意味するイタリア語のジャンル名。' },
    ],
  },

  'badinage': {
    lead: 'Badinage はフランス語で「冗談、からかい」を意味し、軽妙で遊び心のある性格を持つ短い楽曲や楽章を指す語です。',
    sections: [
      {
        heading: '組曲の中での用法',
        body: 'バロック組曲において、標準的な舞曲楽章の合間に挿入される自由な性格の楽章の1つとして現れます。同じ語根を持つ badinerie という語もあり、バッハの管弦楽組曲第2番の終曲の曲名として知られています。',
      },
    ],
    confusions: [
      { term: 'Burla', slug: 'burla', note: '同じく冗談めいた性格を持つ短い楽曲を指す語。' },
    ],
  },

  'arabesque': {
    lead: 'Arabesque は元々イスラーム美術に見られる、幾何学的で流れるような装飾文様を指す語で、音楽では複雑に絡み合う装飾的な旋律線を持つ楽曲を指します。',
    sections: [
      {
        heading: 'ドビュッシーとシューマン',
        body: 'クロード・ドビュッシーの「2つのアラベスク」やロベルト・シューマンの「アラベスク ハ長調」など、19世紀末から20世紀初頭のピアノ作品にこの曲名が多く見られます。共通するのは、装飾模様を思わせる、流れるように連続する旋律線という特徴です。',
      },
    ],
  },

  'arioso': {
    lead: 'Arioso は「歌うように」を意味し、レチタティーヴォ（叙唱）よりも旋律的でありながら、アリアほど厳格な形式を持たない声楽様式・楽曲を指します。',
    sections: [
      {
        heading: 'レチタティーヴォとアリアの中間',
        body: 'バロック・オペラやカンタータでは、語りに近いレチタティーヴォと、旋律美を重視するアリアの間に、arioso と呼ばれる中間的な様式が置かれることがあります。バッハのカンタータにも arioso 様式の楽章が多く見られます。',
      },
    ],
    confusions: [
      { term: 'Recitative', slug: 'recitative', note: '語りに近い、より自由なリズムの声楽様式。' },
      { term: 'Aria', slug: 'aria', note: '旋律美を重視する、より形式的な声楽曲。' },
    ],
  },

  'anglican-chant': {
    lead: 'Anglican chant は、英国国教会（Anglican Church）の礼拝で詩篇（Psalm）を歌うために発展した、和声を伴う簡潔な聖歌の形式です。',
    sections: [
      {
        heading: 'グレゴリオ聖歌との違い',
        body: '単旋律であるグレゴリオ聖歌（Gregorian chant）とは異なり、Anglican chant は通常4声の和声で書かれます。決まった数の和音進行に、長さの異なる詩篇の各節の歌詞を柔軟に当てはめて歌う点が特徴です。',
      },
    ],
    confusions: [
      { term: 'Gregorian chant', slug: 'gregorian-chant', note: '単旋律で歌われるカトリック教会の聖歌。' },
      { term: 'Antiphon', slug: 'antiphon', note: '交互に歌い交わす形式の聖歌。' },
    ],
  },

  'antiphon': {
    lead: 'Antiphon（交唱）は、2つの合唱グループが交互に旋律を歌い交わす形式、またはその際に歌われる短い聖歌を指します。',
    sections: [
      {
        heading: '語源と典礼での用法',
        body: 'ギリシャ語の antiphonos（対する声）に由来し、キリスト教の典礼音楽で詩篇唱の前後に添えられる短い定型句を指す語としても使われます。左右の聖歌隊が交互に応答するように歌う配置は、後の複合唱様式にもつながる考え方です。',
      },
    ],
    confusions: [
      { term: 'Anglican chant', slug: 'anglican-chant', note: '英国国教会で発展した詩篇のための聖歌形式。' },
    ],
  },

  'alto': {
    lead: 'Alto はイタリア語で「高い」を意味する語に由来しますが、現在では合唱の低い女声パート、または楽器の中音域を指す語として使われます。',
    sections: [
      {
        heading: '名前と音域が逆転した理由',
        body: '元来この名称は、ルネサンス期の男声合唱でテノールより高い声部を指していたことに由来します。後に混声合唱が一般化し女声が加わったことで、alto はソプラノより低い声部を指す語として定着しました。楽器では、ヴィオラの音域（ハ音記号＝アルト記号で書かれる）のように、その楽器群の中音域を担う楽器の名前にも使われます。',
      },
    ],
    confusions: [
      { term: 'Baryton', slug: 'baryton', note: '男声の中音域を指す語。' },
    ],
  },

  'bass': {
    lead: 'Bass は音楽における最も低い音域、またはその音域を担当するパート・声部・楽器を指す語です。',
    sections: [
      {
        heading: '和声上の役割',
        body: '最低音部は和声の根音を示すことが多く、和声進行の方向性を実質的に決定づける役割を持ちます。通奏低音（basso continuo）のように、バロック音楽では低音部が和声全体を支える骨格として重視されました。',
      },
    ],
    confusions: [
      { term: 'Baryton', slug: 'baryton', note: '男声のうち、バスより高い中音域を指す語。' },
    ],
  },

  'baryton': {
    lead: 'Baryton は男声の中音域（テノールとバスの間）、またはその声域を歌う歌手を指す語です。',
    sections: [
      {
        heading: '語源',
        body: 'ギリシャ語の barytonos（重い響きを持つ）に由来します。オペラでは、悲劇の主役をテノールが、その対立者や父親役をバリトンが歌うという配役の型がしばしば見られます。なお同じ綴りで、18世紀に用いられた撥弦と擦弦を併せ持つ弦楽器（バリトン）を指すこともあります。',
      },
    ],
    confusions: [
      { term: 'Alto', slug: 'alto', note: '合唱では低い女声、器楽では中音域を指す語。' },
      { term: 'Bass', slug: 'bass', note: 'バリトンより低い音域。' },
    ],
  },

  'brass': {
    lead: 'Brass は真鍮などの金属で作られた管楽器の総称で、唇の振動によって音を出す楽器群（金管楽器）を指します。',
    sections: [
      {
        heading: '発音原理による分類',
        body: '楽器を素材ではなく発音原理で分類する現代の楽器学では、金管楽器は「奏者の唇の振動を音源とする管楽器」と定義され、フルートのように金属製でも息を吹き込むだけで発音する木管楽器とは区別されます。トランペット、ホルン、トロンボーン、チューバなどが代表的な金管楽器です。',
      },
    ],
    confusions: [
      { term: 'Blech', slug: 'blech', note: 'ドイツ語で金管楽器セクションを指す語。' },
    ],
  },

  'blech': {
    lead: 'Blech はドイツ語で「金属板、ブリキ」を意味し、オーケストラ用語としては金管楽器セクション全体を指す語として使われます。',
    sections: [
      {
        heading: '使われ方',
        body: 'スコアの指示や楽団内の会話で、金管楽器奏者全体、あるいは金管楽器群のパートをまとめて指す口語的な呼び方として用いられます。',
      },
    ],
    confusions: [
      { term: 'Brass', slug: 'brass', note: '英語での金管楽器の総称。' },
    ],
  },

  'bell': {
    lead: 'Bell は鐘、鈴などの体鳴楽器、また金管楽器の音が出る開口部（朝顔部分）を指す語です。',
    sections: [
      {
        heading: 'Bell up という指示',
        body: '金管楽器の楽譜に見られる "bell up"（ベルを上げて）という指示は、楽器の開口部を通常より上に向けて構えることで、音をより直接的に、鋭く客席に届けるための奏法指示です。ジャズビッグバンドの譜面などでよく見られます。',
      },
    ],
  },

  'bouton': {
    lead: 'Bouton はフランス語で「ボタン、キイ」を意味し、木管楽器のキイや、アコーディオンのボタン式鍵盤を指す語として使われます。',
    sections: [
      {
        heading: '楽器のキイ機構',
        body: '木管楽器の多くは、指で押さえる穴を直接ふさぐのではなく、キイ（bouton）と呼ばれる金属製の部品を介して穴を開閉する機構を採用しています。これにより、指では直接届かない位置の音孔も操作できるようになっています。',
      },
    ],
  },

  'blue-note': {
    lead: 'Blue note は長音階の第3音・第5音・第7音を、半音よりわずかに低く演奏する、ブルースおよびそこから派生したジャズに特徴的な音の扱いを指します。',
    sections: [
      {
        heading: '固定されない音高',
        body: '西アフリカ系の音組織と、西洋の平均律に基づく音階が接触する中で生まれたとされる音使いで、ピアノのように音高を連続的に変えられない楽器では、装飾的な短前打音やベンドで近似的に表現されます。厳密に何セント低いかは演奏者や文脈によって幅があり、固定された音高ではありません。',
      },
    ],
  },

  'amabile': {
    lead: 'Amabile は「愛らしく、好ましく」。amare（愛する）から派生した語で、「愛されるにふさわしい」が原義です。',
    sections: [
      {
        heading: '愛するのではなく、愛される側',
        body: 'amabile は amare に「〜されうる」を意味する接尾辞が付いた形です。したがって、演奏者が愛情を注ぐ（con amore）のではなく、音楽そのものが好ましく感じられる状態を指します。英語の amiable、amenable と同じ語源です。指示の向きが逆であることが、con amore や con affetto との違いになります。',
      },
      {
        heading: '演奏上の判断',
        body: '聴き手にとって心地よい響きが目標なので、強い主張や激しい感情の表出とは方向が違います。音を押しつけず、角を立てないことがこの指示に沿った扱いになります。',
      },
    ],
    confusions: [
      { term: 'Amarevole', slug: 'amarevole', note: '同じ語根から派生した近い意味の語。' },
      { term: 'Con amore', slug: 'con-amore', note: '愛を込めて。愛する側の行為を指す。' },
      { term: 'Dolce', slug: 'dolce', note: '甘く、柔らかく。amabile は好ましさ、dolce は甘さ。' },
    ],
  },

  'amarevole': {
    lead: 'Amarevole は amabile と同じ amare（愛する）を語根に持ち、「愛らしく、慈しんで」を意味します。',
    sections: [
      {
        heading: 'amabile との関係',
        body: 'どちらも amare から派生した語で、意味は近接しています。amabile が「愛されるにふさわしい」を表すのに対して、amarevole はより慈しみや愛着の情を含む語感を持ちます。ただし両者の使い分けが規則として定まっているわけではなく、作曲者による選択の差と見るのが実際に近いです。',
      },
      {
        heading: '注意すべき似た語',
        body: 'イタリア語の amaro は「苦い」を意味し、amarevole とは無関係です。字面が近いため混同されることがありますが、amarevole の語根は amare（愛する）です。',
      },
    ],
    confusions: [
      { term: 'Amabile', slug: 'amabile', note: '同じ語根の語。「愛されるにふさわしい」が原義。' },
      { term: 'Con affetto', slug: 'con-affetto', note: '愛情を込めて。慈しみという点で近い。' },
    ],
  },

  'tenero': {
    lead: 'Tenero は「優しく、柔らかく」。ラテン語の tener（柔らかい、若い）に由来し、英語の tender と同じ語源です。',
    sections: [
      {
        heading: '語の含み',
        body: '原義は「柔らかい」「若い」で、そこから傷つきやすさ、壊れやすさという含みが生まれます。したがってこの指示は、単に優しく弾くことではなく、扱いに注意を要するものに触れるような質を求めています。強く出すと壊れてしまうという前提が語の中にあります。',
      },
      {
        heading: 'con tenerezza との関係',
        body: 'tenero が形容詞、tenerezza がその名詞形で、con tenerezza は「優しさをもって」となります。指示としての内容はほぼ同じですが、con tenerezza は演奏者が優しさを持ち込むことを、tenero は音楽がそういう性質であることを示します。',
      },
    ],
    confusions: [
      { term: 'Con tenerezza', slug: 'con-tenerezza', note: '名詞形を使った同内容の指示。' },
      { term: 'Dolce', slug: 'dolce', note: '甘く。tenero は柔らかさと壊れやすさ。' },
      { term: 'Carezzevole', slug: 'carezzevole', note: '愛撫するように。触れる動作の柔らかさを指す。' },
    ],
  },

  'con-tenerezza': {
    lead: 'Con tenerezza は「優しさをもって」。tenero（柔らかい、優しい）の名詞形 tenerezza を使った指示です。',
    sections: [
      {
        heading: 'tenero との違い',
        body: '形容詞 tenero は音楽の性質を述べ、con tenerezza は演奏者がその質を持ち込むことを述べます。実際の演奏上の違いはほとんどありませんが、後者は「優しさ」という抽象名詞を明示するため、態度としての指示に近い語感があります。',
      },
    ],
    confusions: [
      { term: 'Tenero', slug: 'tenero', note: '形容詞形。詳しい説明はこちら。' },
      { term: 'Con affetto', slug: 'con-affetto', note: '愛情を込めて。近い方向の指示。' },
    ],
  },

  'caloroso': {
    lead: 'Caloroso は「温かく、熱意をもって」。calore（熱）から派生した形容詞です。',
    sections: [
      {
        heading: '熱さの種類',
        body: 'calore は物理的な熱を指す語です。したがって caloroso が求めるのは、燃え上がる激しさ（fuoco = 火）ではなく、じんわりと伝わる温かさに近いものです。同じ「熱」を語根に持ちながら、con fuoco や fuocoso が炎の激しさを指すのに対して、caloroso はより穏やかな方向にあります。',
      },
      {
        heading: 'con calore との関係',
        body: 'caloroso が形容詞、con calore が「熱をもって」という前置詞句です。両者の指示内容はほぼ同じで、作曲者による表記の選択の違いです。',
      },
    ],
    confusions: [
      { term: 'Con calore', slug: 'con-calore', note: '同じ語根を使った前置詞句の形。' },
      { term: 'Con fuoco', slug: 'con-fuoco', note: '火をもって。calore より激しい熱。' },
      { term: 'Appassionato', slug: 'appassionato', note: '情熱的に。感情の激しさを指す。' },
    ],
  },

  'con-calore': {
    lead: 'Con calore は「熱をもって」。calore は物理的な熱を意味する語で、燃え上がる炎とは区別されます。',
    sections: [
      {
        heading: 'caloroso との違い',
        body: 'caloroso が形容詞で音楽の性質を示すのに対して、con calore は「熱を伴って」という行為を示します。実際の演奏上の差はほとんどなく、作曲者の表記の選択によるものです。どちらも、con fuoco のような炎の激しさではなく、内側から伝わる温かさの方向にあります。',
      },
    ],
    confusions: [
      { term: 'Caloroso', slug: 'caloroso', note: '形容詞形。詳しい説明はこちら。' },
      { term: 'Con fuoco', slug: 'con-fuoco', note: '火をもって。より激しい熱。' },
    ],
  },

  'con-amore': {
    lead: 'Con amore は「愛をもって」。amore（愛）を明示した指示で、19世紀の楽譜に多く見られます。',
    sections: [
      {
        heading: 'amabile との向きの違い',
        body: 'amabile は「愛されるにふさわしい」で、音楽が好ましく感じられる状態を指します。con amore は演奏者が愛を注ぐ側であり、向きが逆です。同じ amare を語根に持ちながら、指示の主体が違います。',
      },
      {
        heading: '「愛」の対象',
        body: 'この語が何への愛を指すのかは明示されません。音楽そのものへの愛と読むこともでき、曲の内容が示す対象への愛と読むこともできます。楽譜が語っている以上のことは決まっていないため、その箇所の文脈から判断することになります。',
      },
    ],
    confusions: [
      { term: 'Amabile', slug: 'amabile', note: '愛されるにふさわしい。向きが逆。' },
      { term: 'Con affetto', slug: 'con-affetto', note: '愛情を込めて。affetto は情愛。' },
      { term: 'Appassionato', slug: 'appassionato', note: '情熱的に。passione は激しい感情。' },
    ],
  },

  'con-affetto': {
    lead: 'Con affetto は「情愛をもって」。affetto は英語の affection と同じ語源で、心を向けることを意味します。',
    sections: [
      {
        heading: 'affetto という語',
        body: 'ラテン語の affectus（心を動かされた状態）に由来します。バロック期の音楽論では、affetto（複数形 affetti）は音楽が表現すべき情感を指す重要な用語でした。この語が指示として書かれる場合、単に優しく弾くことではなく、心が向いている状態を音に反映させることを求めています。',
      },
      {
        heading: '近い語との関係',
        body: 'con amore が「愛」、con tenerezza が「優しさ」、con affetto が「情愛」。いずれも近い方向にありますが、affetto は心が対象へ向かうという動きを含む点で、状態を述べる語とは違います。affettuoso という形容詞形も同じ意味で使われます。',
      },
    ],
    confusions: [
      { term: 'Con amore', slug: 'con-amore', note: '愛をもって。' },
      { term: 'Con tenerezza', slug: 'con-tenerezza', note: '優しさをもって。' },
      { term: 'Espressivo', slug: 'espressivo', note: '表情豊かに。affetto より広い指示。' },
    ],
  },

  'con-passione': {
    lead: 'Con passione は「情熱をもって」。passione は英語の passion と同じ語源で、appassionato と同じ語根です。',
    sections: [
      {
        heading: 'passione の原義',
        body: 'ラテン語の passio に由来し、原義は「受けること、被ること」です。受難（キリストの受難を Passion と呼ぶ）という意味も同じ語から来ています。つまり passione は、能動的に振るう感情ではなく、抑えきれずに襲ってくる感情を指す語です。この語源を踏まえると、この指示が求めるのは制御された表現ではなく、感情に押されている状態だと読めます。',
      },
      {
        heading: 'appassionato との関係',
        body: 'appassionato が形容詞、con passione が前置詞句で、指示内容はほぼ同じです。どちらも激しい感情を求めますが、テンポやリズムの枠を崩すことは含みません。枠の中で抑えきれずに溢れているように聞こえることが、この指示の実現になります。',
      },
    ],
    confusions: [
      { term: 'Appassionato', slug: 'appassionato', note: '形容詞形。詳しい説明はこちら。' },
      { term: 'Con fuoco', slug: 'con-fuoco', note: '火をもって。外へ向かう激しさ。' },
      { term: 'Agitato', slug: 'agitato', note: '興奮して。落ち着きのなさを指す。' },
    ],
  },

  'con-espressione': {
    lead: 'Con espressione は「表情をもって」。espressivo と同じ内容の指示を、名詞を使って表したものです。',
    sections: [
      {
        heading: 'espressivo との関係',
        body: 'espressivo が形容詞、espressione がその名詞形です。指示内容の違いはなく、作曲者の表記の選択によるものです。楽譜では espressivo または espr. の略記が一般的で、con espressione のほうが少なくなります。',
      },
      {
        heading: '何を求めている指示か',
        body: 'この語は具体的な操作を示していません。悲しく弾くのか喜ばしく弾くのかも指定していません。指示しているのは、音を並べるだけで終わらせず、その箇所が何かを語っている状態にすることです。したがって、何を表現するかは楽譜の他の情報（和声、旋律の形、調、前後の文脈）から読み取ることになります。',
      },
    ],
    confusions: [
      { term: 'Espressivo', slug: 'espressivo', note: '形容詞形。こちらのほうが一般的な表記。' },
      { term: 'Con affetto', slug: 'con-affetto', note: '情愛をもって。方向が指定されている。' },
    ],
  },

  'dolcissimo': {
    lead: 'Dolcissimo は dolce の最上級で「この上なく甘く、極めて柔らかく」。',
    sections: [
      {
        heading: '最上級であることの意味',
        body: 'イタリア語の形容詞に -issimo が付くと最上級になります。dolce → dolcissimo は、forte → fortissimo と同じ構造です。したがってこの語が現れる箇所は、同じ曲の中に dolce の箇所があり、それより一段進んだ質を求めていると読めます。曲の中の相対的な指示です。',
      },
      {
        heading: '音量との関係',
        body: 'dolce は音量記号ではなく音色の指示です。したがって dolcissimo も「もっと小さく」ではありません。ただし実際には、甘く柔らかい音色は音量を抑えたところで作りやすいため、結果として弱くなることが多くあります。音量を落としても硬い音では指示に応えていないことになります。',
      },
    ],
    confusions: [
      { term: 'Dolce', slug: 'dolce', note: '甘く、柔らかく。dolcissimo はその最上級。' },
      { term: 'Tenero', slug: 'tenero', note: '優しく。柔らかさと壊れやすさを含む。' },
      { term: 'Delicatamente', slug: 'delicatamente', note: '繊細に。細心の扱いを求める。' },
    ],
  },

  'lamentoso': {
    lead: 'Lamentoso は「嘆き悲しんで」。lamento（嘆き）から派生した語で、悲しみを声に出して表す状態を指します。',
    sections: [
      {
        heading: 'lamento という形式',
        body: 'lamento は、17世紀のイタリアの声楽曲において、嘆きを歌う楽曲の型を指す語でもありました。下降する低音の反復（半音階的に下がる四度など）を土台に、その上で悲しみを歌う書法が用いられました。lamentoso という指示は、この伝統に連なる語です。',
      },
      {
        heading: '静かな悲しみとの違い',
        body: 'mesto や dolente が沈んだ悲しみを指すのに対して、lamentoso は嘆きを外へ出す方向にあります。したがって、抑えて内に籠らせるのではなく、訴えとして聞こえることがこの指示に沿った扱いになります。',
      },
    ],
    confusions: [
      { term: 'Mesto', slug: 'mesto', note: '沈んだ悲しみ。外へ出さない。' },
      { term: 'Dolente', slug: 'dolente', note: '痛みを伴う悲しみ。' },
      { term: 'Flebile', slug: 'flebile', note: 'か細く弱々しい悲しみ。' },
    ],
  },

  'mesto': {
    lead: 'Mesto は「悲しい、沈んだ」。劇的な嘆きではなく、静かに沈んでいる悲しみを指します。',
    sections: [
      {
        heading: '外へ出さない悲しみ',
        body: 'lamentoso が嘆きを声に出す方向にあるのに対して、mesto は内に沈んだ状態を指します。したがって、この指示のある箇所で表現を大きくすると、語の方向から外れます。抑えたまま、しかし空虚にならないという扱いが求められます。',
      },
      {
        heading: '関連する語形',
        body: 'mestamente（悲しげに）、mestizia（悲しみ）という語形もあり、楽譜では con mestizia として現れることもあります。いずれも同じ語根です。',
      },
    ],
    confusions: [
      { term: 'Lamentoso', slug: 'lamentoso', note: '嘆きを外へ出す方向。' },
      { term: 'Malinconico', slug: 'malinconico', note: '憂鬱。悲しみの原因が特定されない状態。' },
      { term: 'Dolente', slug: 'dolente', note: '痛みを伴う悲しみ。' },
    ],
  },

  'malinconico': {
    lead: 'Malinconico は「憂鬱に」。ギリシャ語の melan（黒）と kholē（胆汁）に由来する語です。',
    sections: [
      {
        heading: '「黒い胆汁」という語源',
        body: '古代ギリシャの体液説では、人間の気質は4つの体液の配分で決まると考えられ、黒い胆汁が多い状態が憂鬱な気質にあたるとされていました。melancholy、Melancholie、malinconia はいずれもこの語に由来します。語源が示すのは、一時的な悲しみではなく、気質や状態としての憂鬱です。',
      },
      {
        heading: '悲しみとの違い',
        body: 'mesto や dolente が悲しみそのものを指すのに対して、malinconico は原因が特定されない沈んだ状態を指します。何かを失った嘆きではなく、晴れないという状態です。この違いは、演奏で嘆きの対象を示すか示さないかという扱いの差になります。',
      },
      {
        heading: 'con malinconia',
        body: '名詞形 malinconia を使った con malinconia も同じ内容の指示です。表記の選択の違いです。',
      },
    ],
    confusions: [
      { term: 'Con malinconia', slug: 'con-malinconia', note: '名詞形を使った同内容の指示。' },
      { term: 'Mesto', slug: 'mesto', note: '沈んだ悲しみ。対象がある。' },
      { term: 'Languido', slug: 'languido', note: '気だるい。力の抜けた状態。' },
    ],
  },

  'con-malinconia': {
    lead: 'Con malinconia は「憂鬱をもって」。malinconico の名詞形を使った指示です。',
    sections: [
      {
        heading: 'malinconico との関係',
        body: '形容詞 malinconico と指示内容は同じです。語源はギリシャ語の「黒い胆汁」で、一時的な悲しみではなく、原因が特定されない沈んだ状態を指します。詳しい説明は malinconico のページにあります。',
      },
    ],
    confusions: [
      { term: 'Malinconico', slug: 'malinconico', note: '形容詞形。詳しい説明はこちら。' },
    ],
  },

  'dolente': {
    lead: 'Dolente は「痛みを伴って、悲しげに」。dolore（痛み、苦しみ）から派生した語です。',
    sections: [
      {
        heading: '痛みとしての悲しみ',
        body: 'dolore は身体的な痛みも精神的な苦痛も指す語です。したがって dolente が示す悲しみには、痛みという要素が含まれます。mesto の静かな沈み込みや malinconico の晴れない状態とは違い、こちらは苦痛が現在進行している状態です。英語の doleful、フランス語の douleur も同じ語根です。',
      },
      {
        heading: 'con dolore との関係',
        body: '名詞形 dolore を使った con dolore も同じ内容です。addolorato（苦しめられて）という形も現れます。いずれも同じ語根から派生した語形です。',
      },
    ],
    confusions: [
      { term: 'Con dolore', slug: 'con-dolore', note: '名詞形を使った同内容の指示。' },
      { term: 'Mesto', slug: 'mesto', note: '静かに沈んだ悲しみ。痛みの要素はない。' },
      { term: 'Lamentoso', slug: 'lamentoso', note: '嘆きを外へ出す悲しみ。' },
    ],
  },

  'con-dolore': {
    lead: 'Con dolore は「痛みをもって、苦しげに」。dolore は身体的な痛みも精神的な苦痛も指す語です。',
    sections: [
      {
        heading: 'dolente との関係',
        body: '形容詞形 dolente と指示内容は同じです。悲しみの中に痛みという要素が含まれる点が、mesto や malinconico との違いになります。詳しい説明は dolente のページにあります。',
      },
    ],
    confusions: [
      { term: 'Dolente', slug: 'dolente', note: '形容詞形。詳しい説明はこちら。' },
    ],
  },

  'flebile': {
    lead: 'Flebile は「か細く、弱々しく悲しげに」。ラテン語の flere（泣く）に由来します。',
    sections: [
      {
        heading: '泣き声としての音',
        body: '語根が「泣く」であることから、この語は涙声、あるいは漏れ出る泣き声のような響きを指します。lamentoso が声に出した嘆きであるのに対して、flebile は声にならず途切れそうな状態です。したがって音量は弱く、しかも安定していないという方向になります。',
      },
      {
        heading: '弱さを保つこと',
        body: '弱く演奏すると音が失われがちですが、この指示が求めているのは音が消えることではなく、か細いままで存在し続けることです。支えが抜けて鳴らなくなると、指示に応えていないことになります。',
      },
    ],
    confusions: [
      { term: 'Flebilmente', slug: 'flebilmente', note: '副詞形。同じ内容の指示。' },
      { term: 'Lamentoso', slug: 'lamentoso', note: '声に出した嘆き。flebile はより弱い。' },
      { term: 'Sospirando', slug: 'sospirando', note: '溜め息をつくように。息の漏れを指す。' },
    ],
  },

  'flebilmente': {
    lead: 'Flebilmente は flebile の副詞形で「か細く悲しげに」。ラテン語の flere（泣く）を語根に持ちます。',
    sections: [
      {
        heading: 'flebile との関係',
        body: 'イタリア語では形容詞に -mente を付けて副詞を作ります。flebile → flebilmente はこの形で、指示内容は同じです。楽譜では形容詞形と副詞形の両方が使われ、意味の差はありません。',
      },
    ],
    confusions: [
      { term: 'Flebile', slug: 'flebile', note: '形容詞形。詳しい説明はこちら。' },
    ],
  },

  'sospirando': {
    lead: 'Sospirando は「溜め息をつくように」。sospiro（溜め息）の現在分詞形です。',
    sections: [
      {
        heading: '溜め息の形',
        body: '溜め息は、息を出すときに強く始まって弱く終わる形をとります。したがってこの指示は、フレーズの中で音が減衰していく形を求めていると読めます。上から下へ2音が下がる音型は、しばしば溜め息の形として扱われます。',
      },
      {
        heading: '記譜との関係',
        body: 'この指示のある箇所では、音楽が息を吐く方向にあります。したがって、フレーズの後半で押すのではなく、抜けていく処理になります。管楽器や声楽では実際に息の扱いがそのまま対応し、他の楽器では音量と音の長さで同じ形を作ります。',
      },
    ],
    confusions: [
      { term: 'Flebile', slug: 'flebile', note: 'か細い泣き声のような響き。' },
      { term: 'Morendo', slug: 'morendo', note: '死に絶えるように。減衰の指示。' },
      { term: 'Languido', slug: 'languido', note: '気だるく。力の抜けた状態。' },
    ],
  },

  'disperato': {
    lead: 'Disperato は「絶望した」。ラテン語の sperare（希望する）に否定の接頭辞が付いた形で、「希望を失った」が原義です。',
    sections: [
      {
        heading: '希望の欠如という状態',
        body: '語源が示すのは、悲しみでも怒りでもなく、行き先がないという状態です。英語の desperate、despair も同じ語源です。したがってこの指示は、感情の激しさだけでなく、その激しさに出口がないことを含んでいます。強く弾いても解決へ向かわない、という質が求められます。',
      },
      {
        heading: '静と動の両方に現れる',
        body: '絶望は、激しい爆発としても、力を失った静けさとしても現れます。この語が付いた箇所がどちらなのかは、音量記号や音型から判断します。fortissimo に disperato があれば出口のない激しさ、pianissimo にあれば力尽きた状態です。語自体は方向を指定していません。',
      },
    ],
    confusions: [
      { term: 'Angoscioso', slug: 'angoscioso', note: '苦悶して。締めつけられる苦しさ。' },
      { term: 'Furioso', slug: 'furioso', note: '荒れ狂って。外へ向かう激しさ。' },
      { term: 'Mesto', slug: 'mesto', note: '沈んだ悲しみ。絶望の要素はない。' },
    ],
  },

  'angoscioso': {
    lead: 'Angoscioso は「苦悶して、切迫して」。angoscia（苦悩）から派生した語で、語源は「狭さ」を意味します。',
    sections: [
      {
        heading: '「狭い」という語源',
        body: 'ラテン語の angustia（狭さ、窮屈さ）に由来します。英語の anguish、anxiety、ドイツ語の Angst も同じ語根です。語源が示すのは、締めつけられて逃げ場がない状態です。悲しみではなく、圧迫による苦しさを指す語です。',
      },
      {
        heading: '演奏で何を作るか',
        body: '締めつけられている状態なので、開放的な響きとは逆の方向になります。音を広く鳴らすのではなく、緊張を保ったまま出口を与えない扱いです。テンポの切迫、和声の解決の遅延といった書法がこの指示と組み合わされることがあります。',
      },
    ],
    confusions: [
      { term: 'Disperato', slug: 'disperato', note: '絶望した。希望の欠如を指す。' },
      { term: 'Agitato', slug: 'agitato', note: '興奮して。落ち着きのなさを指す。' },
    ],
  },

  'furioso': {
    lead: 'Furioso は「荒れ狂って」。furia（激怒、狂乱）から派生した語です。',
    sections: [
      {
        heading: 'furia という語',
        body: 'ラテン語の furia に由来し、ローマ神話の復讐の女神たち（フーリアエ）の名でもあります。英語の fury、furious も同じ語源です。単なる怒りではなく、我を失った状態を含む語です。',
      },
      {
        heading: '制御を失うことと崩れること',
        body: 'この指示は激しさを求めますが、演奏が崩れることを求めているわけではありません。制御を失っているように聞こえるためには、実際にはリズムと音程が保たれている必要があります。実際に崩れると、狂乱ではなく事故として受け取られます。',
      },
    ],
    confusions: [
      { term: 'Feroce', slug: 'feroce', note: '荒々しく。獣のような野生の激しさ。' },
      { term: 'Agitatissimo', slug: 'agitatissimo', note: 'きわめて激しく。agitato の最上級。' },
      { term: 'Con impeto', slug: 'con-impeto', note: '衝動をもって。突発的な激しさ。' },
    ],
  },

  'feroce': {
    lead: 'Feroce は「荒々しく、野生的に」。ラテン語の ferus（野生の、獣の）に由来します。',
    sections: [
      {
        heading: '獣という語源',
        body: 'ferus は野生動物を指す語で、英語の fierce、ferocious も同じ語根です。したがってこの指示は、人間の怒り（furioso）とは違い、洗練されていない、獣のような強さを求めています。整えられた美しさとは逆の方向です。',
      },
      {
        heading: '音色の選択',
        body: '洗練を避ける方向なので、丸く整った音ではなく、角のある音が指示に沿います。弦楽器なら弓を強く当てて雑音成分を残す、ピアノなら打鍵を鋭くする、といった扱いになります。ただし音程やリズムが崩れると、荒々しさではなく粗さになります。',
      },
    ],
    confusions: [
      { term: 'Barbaro', slug: 'barbaro', note: '未開の、荒々しい。洗練を排する点で近い。' },
      { term: 'Furioso', slug: 'furioso', note: '荒れ狂って。我を失った激しさ。' },
      { term: 'Marcato', slug: 'marcato', note: '際立たせて。鋭さを作る手段になる。' },
    ],
  },

  'barbaro': {
    lead: 'Barbaro は「未開の、野蛮な」。洗練をあえて排し、原初的な力を求める指示です。',
    sections: [
      {
        heading: '語源',
        body: 'ギリシャ語の barbaros に由来します。この語はもともと、ギリシャ語を話さない者を指す語でした。そこから「未開の」という意味が生じています。英語の barbarian、barbaric も同じ語源です。',
      },
      {
        heading: 'バルトークの《アレグロ・バルバロ》',
        body: 'バルトークのピアノ曲《アレグロ・バルバロ》は、この語を曲名に用いた作品です。打楽器的な打鍵と繰り返される強い和音を用いた書法で知られています。',
      },
      {
        heading: '演奏上の判断',
        body: '洗練を排する方向の指示ですが、それは技術を捨てることではありません。硬く角のある音を意図して作るには、打鍵や弓の制御が必要です。制御を失った演奏は、barbaro ではなく単に不正確な演奏になります。',
      },
    ],
    confusions: [
      { term: 'Feroce', slug: 'feroce', note: '獣のような荒々しさ。洗練を排する点で近い。' },
      { term: 'Pesante', slug: 'pesante', note: '重々しく。重量感を作る点で組み合わせやすい。' },
    ],
  },

  'bellicoso': {
    lead: 'Bellicoso は「勇ましく、好戦的に」。ラテン語の bellum（戦争）に由来します。',
    sections: [
      {
        heading: '戦いという語源',
        body: 'bellum は戦争を意味する語で、英語の bellicose、belligerent も同じ語根です。イタリア語の bello（美しい）とは別の語で、字面が近いため混同されることがあります。この指示が求めるのは美しさではなく、戦いへ向かう気構えです。',
      },
      {
        heading: '音楽上の慣習',
        body: '戦いを描く音楽では、金管楽器のファンファーレ、太鼓の連打、付点リズムによる行進の形などが用いられてきました。この指示のある箇所がそうした書法を伴っている場合、その性格を明確に出すことが指示に沿った扱いになります。',
      },
    ],
    confusions: [
      { term: 'Eroico', slug: 'eroico', note: '英雄的に。戦いより人物の性格を指す。' },
      { term: 'Marcato', slug: 'marcato', note: '際立たせて。行進の性格を作る手段になる。' },
      { term: 'Risoluto', slug: 'risoluto', note: '決然と。迷いのなさを指す。' },
    ],
  },

  'collerico': {
    lead: 'Collerico は「腹を立てて、怒って」。ギリシャ語の kholē（胆汁）に由来する語です。',
    sections: [
      {
        heading: '体液説に由来する語',
        body: '古代ギリシャの体液説では、黄色い胆汁が多い気質が怒りやすい性質にあたるとされていました。英語の choleric、フランス語の colère も同じ語根です。malinconico（黒い胆汁）と対をなす語で、どちらも同じ体液説の枠組みから来ています。',
      },
      {
        heading: '怒りの種類',
        body: 'furioso が我を失った狂乱を指すのに対して、collerico は気質としての怒りやすさ、あるいは苛立ちを含みます。爆発ではなく、抑えられていない不機嫌という方向です。',
      },
    ],
    confusions: [
      { term: 'Malinconico', slug: 'malinconico', note: '黒い胆汁に由来する語。同じ体液説の枠組み。' },
      { term: 'Furioso', slug: 'furioso', note: '荒れ狂って。我を失った激しさ。' },
      { term: 'Agitato', slug: 'agitato', note: '興奮して。落ち着きのなさ。' },
    ],
  },

  'ardente': {
    lead: 'Ardente は「燃えるように、熱烈に」。ardere（燃える）の現在分詞形です。',
    sections: [
      {
        heading: '燃えている状態',
        body: '現在分詞なので、この語は「燃えている」という進行中の状態を表します。英語の ardent も同じ語源です。con fuoco が「火をもって」と道具を示すのに対して、ardente は対象自身が燃えていることを述べます。',
      },
      {
        heading: '持続する熱',
        body: '燃え続けている状態なので、一瞬の爆発とは違います。con impeto のような突発性ではなく、高い熱量を保ち続けることがこの指示の内容です。したがって、途中で緩めると語の方向から外れます。',
      },
    ],
    confusions: [
      { term: 'Con fuoco', slug: 'con-fuoco', note: '火をもって。同じ火のイメージ。' },
      { term: 'Fuocoso', slug: 'fuocoso', note: '火のように。同方向の指示。' },
      { term: 'Caloroso', slug: 'caloroso', note: '温かく。calore は炎ではなく熱。' },
    ],
  },

  'fuocoso': {
    lead: 'Fuocoso は「火のように、熱情的に」。fuoco（火）から派生した形容詞です。',
    sections: [
      {
        heading: 'con fuoco との関係',
        body: 'con fuoco が「火をもって」という前置詞句、fuocoso が形容詞形です。指示内容はほぼ同じで、作曲者の表記の選択によります。focoso という綴りも用いられます。',
      },
      {
        heading: '火と熱の区別',
        body: 'fuoco（火）を語根とする語は、燃え上がる激しさを指します。calore（熱）を語根とする caloroso が伝わる温かさを指すのに対して、こちらは外へ向かう炎です。同じ「熱い」でも方向が違います。',
      },
    ],
    confusions: [
      { term: 'Con fuoco', slug: 'con-fuoco', note: '前置詞句の形。詳しい説明はこちら。' },
      { term: 'Ardente', slug: 'ardente', note: '燃えている状態を表す現在分詞。' },
      { term: 'Caloroso', slug: 'caloroso', note: '温かく。炎ではなく伝わる熱。' },
    ],
  },

  'con-impeto': {
    lead: 'Con impeto は「衝動をもって、激しく」。impeto は突進する動きを意味する語です。',
    sections: [
      {
        heading: '突進としての激しさ',
        body: 'ラテン語の impetus（突進、勢い）に由来し、英語の impetus、impetuous も同じ語根です。この語が示すのは、持続する熱（ardente）ではなく、前へ突き出す瞬間的な勢いです。したがって加速を伴うことが多く、その箇所で音楽が押し出される形になります。',
      },
      {
        heading: '演奏上の要点',
        body: '衝動なので、準備されていないように聞こえることが効果になります。したがって、その手前で構えを見せると衝動性が失われます。impetuoso という形容詞形も同じ意味で使われます。',
      },
    ],
    confusions: [
      { term: 'Ardente', slug: 'ardente', note: '燃え続ける熱。持続が主体。' },
      { term: 'Agitato', slug: 'agitato', note: '興奮して。落ち着きのなさ。' },
      { term: 'Stringendo', slug: 'stringendo', note: '切迫して速く。加速を明示する指示。' },
    ],
  },

  'energico': {
    lead: 'Energico は「精力的に、力強く」。ギリシャ語の energeia（活動、働き）に由来します。',
    sections: [
      {
        heading: '力を出すこと',
        body: 'energeia は「仕事の中にある状態」を意味する語で、活動そのものを指します。英語の energy、energetic も同じ語源です。この指示が求めるのは音量ではなく、動きに力が込められていることです。したがって弱音の中でも energico は成立します。',
      },
      {
        heading: 'forte との違い',
        body: 'forte は音量、energico は質の指示です。両者が同時に書かれることもあり、その場合は大きくかつ力の込もった音になります。energico だけが書かれている箇所で音量を上げると、指示していないことを加えることになります。リズムの明確さや音の立ち上がりの鋭さが、この指示に応える手段です。',
      },
    ],
    confusions: [
      { term: 'Vigoroso', slug: 'vigoroso', note: '力強く。vigore は活力そのもの。' },
      { term: 'Con forza', slug: 'con-forza', note: '力をもって。力の投入を指す。' },
      { term: 'Risoluto', slug: 'risoluto', note: '決然と。意志の明確さを指す。' },
    ],
  },

  'vigoroso': {
    lead: 'Vigoroso は「力強く、活力をもって」。ラテン語の vigor（活力、生気）に由来します。',
    sections: [
      {
        heading: 'vigor という語',
        body: 'vigor は生命の勢い、生気を意味する語で、英語の vigor、vigorous も同じ語根です。energico が「働き」を語根に持つのに対して、vigoroso は生命力を語根に持ちます。どちらも力強さを求める指示ですが、後者は健康的な躍動という語感を含みます。',
      },
      {
        heading: '演奏上の判断',
        body: '生命力の指示なので、硬く力んだ音とは方向が違います。しなやかさを保ったままの強さが求められます。力を入れて体が固まると、vigoroso ではなく pesante に近い重さになります。',
      },
    ],
    confusions: [
      { term: 'Energico', slug: 'energico', note: '精力的に。「働き」を語根に持つ。' },
      { term: 'Con brio', slug: 'con-brio', note: '活気をもって。輝きと勢いを指す。' },
      { term: 'Pesante', slug: 'pesante', note: '重々しく。重量が主体。' },
    ],
  },

  'con-forza': {
    lead: 'Con forza は「力をもって」。forza は力そのものを意味し、forte と同じ語根です。',
    sections: [
      {
        heading: 'forte との関係',
        body: 'forte（強い）と forza（力）はどちらもラテン語の fortis に由来します。ただし forte は音量記号として体系に組み込まれているのに対して、con forza は音量段階を示すものではなく、力を込めるという行為を指します。したがって、どの音量段階なのかは別に指定される必要があります。',
      },
      {
        heading: '力の使い方',
        body: '力を込めることは、体を固めることではありません。固めると音が詰まり、力が音に変わりません。腕の重さを使う、体幹から支えるといった方法で、力が音として出る経路を確保することになります。',
      },
    ],
    confusions: [
      { term: 'Forte', slug: 'forte', note: '音量記号。con forza は行為の指示。' },
      { term: 'Energico', slug: 'energico', note: '精力的に。力の質を指す。' },
      { term: 'Pesante', slug: 'pesante', note: '重々しく。重量を使う。' },
    ],
  },

  'animato': {
    lead: 'Animato は「生き生きと、活気を持って」。anima（生命、魂）から派生した語です。',
    sections: [
      {
        heading: 'テンポの指示も含む',
        body: 'この語は表情の指示ですが、実際にはテンポがやや速くなることを含む場合が多くあります。楽譜で più animato（もっと生き生きと）と書かれている箇所では、テンポの前進として扱われるのが一般的です。表情だけの変化なのかテンポの変化なのかは、その箇所の文脈から判断します。',
      },
      {
        heading: 'con anima との関係',
        body: 'con anima は「魂をもって」で、同じ語根です。ただし歴史的には、con anima がテンポを速める意味なのか、逆に情感を込めて落ち着ける意味なのかについて解釈が分かれてきました。animato は前進の方向で解釈されることが多く、con anima のほうが曖昧です。',
      },
    ],
    confusions: [
      { term: 'Con anima', slug: 'con-anima', note: '魂をもって。解釈が分かれる語。' },
      { term: 'Con brio', slug: 'con-brio', note: '活気をもって。輝きを含む。' },
      { term: 'Con moto', slug: 'con-moto', note: '動きをもって。前進を明示する。' },
    ],
  },

  'con-anima': {
    lead: 'Con anima は「魂をもって」。anima は生命、魂を意味する語です。この指示の解釈は歴史的に分かれています。',
    sections: [
      {
        heading: '解釈が分かれる指示',
        body: 'この語をテンポの前進と読む立場と、情感を込めることと読む立場があります。前者では animato と同じくやや速くなり、後者ではむしろ落ち着いて内容を込める方向になります。どちらが正しいという結論は出ていません。楽譜でこの指示に出会ったときは、前後の文脈と、その作曲者が他の箇所でどう使っているかを見て判断することになります。',
      },
      {
        heading: '語源',
        body: 'ラテン語の anima（息、生命、魂）に由来します。英語の animal、animate も同じ語根です。原義が「息」であることから、生きて動いているという含みを持ちます。',
      },
    ],
    confusions: [
      { term: 'Animato', slug: 'animato', note: '同じ語根。テンポの前進として解釈されることが多い。' },
      { term: 'Con moto', slug: 'con-moto', note: '動きをもって。前進を明示する。' },
      { term: 'Espressivo', slug: 'espressivo', note: '表情豊かに。情感を込める方向。' },
    ],
  },

  'con-spirito': {
    lead: 'Con spirito は「活気をもって」。spirito は原義が「息」で、そこから精神、活気を意味します。',
    sections: [
      {
        heading: 'spirito という語',
        body: 'ラテン語の spiritus（息、呼吸）に由来し、そこから精神、霊という意味が生じました。英語の spirit、inspire（息を吹き込む）も同じ語根です。anima も原義が「息」であり、この二つの語は語源の構造が同じです。',
      },
      {
        heading: 'テンポとの関係',
        body: 'Allegro con spirito のように速度標語と組み合わされることが多く、その場合はその速度を保ちながら活気を加えることを意味します。この語自体はテンポの指示ではありませんが、活気は結果として前進の感覚を生むため、走らないように保つことが実際の課題になります。',
      },
    ],
    confusions: [
      { term: 'Spiritoso', slug: 'spiritoso', note: '形容詞形。機知に富むという含みも持つ。' },
      { term: 'Con brio', slug: 'con-brio', note: '活気をもって。輝きを含む。' },
      { term: 'Animato', slug: 'animato', note: '生き生きと。' },
    ],
  },

  'spiritoso': {
    lead: 'Spiritoso は「活気をもって、機知に富んで」。spirito（息、精神）から派生した形容詞です。',
    sections: [
      {
        heading: '「機知」という含み',
        body: 'イタリア語の spiritoso には、活気があるという意味に加えて、機知に富む、洒落ているという意味があります。英語で witty にあたる語感です。したがってこの指示は、単に元気よく弾くことではなく、知的な軽やかさを含む場合があります。con spirito よりこの含みが強く出ます。',
      },
      {
        heading: '演奏上の判断',
        body: '機知は、予想を軽く外すところに生じます。したがって、この指示のある箇所では、リズムや音色のわずかな仕掛けを見つけて生かすことが効果になります。力任せに元気よく弾くと、この含みは消えます。',
      },
    ],
    confusions: [
      { term: 'Con spirito', slug: 'con-spirito', note: '前置詞句の形。活気が主体。' },
      { term: 'Scherzando', slug: 'scherzando', note: 'おどけて。冗談としての軽さ。' },
      { term: 'Giocoso', slug: 'giocoso', note: '遊び心をもって。' },
    ],
  },

  'capriccioso': {
    lead: 'Capriccioso は「気まぐれに、奔放に」。capriccio（気まぐれ）から派生した語です。',
    sections: [
      {
        heading: '語源',
        body: 'capriccio の語源については、capra（山羊）に由来し山羊の跳ねるような動きを表すという説と、capo（頭）に関わる語から来ているという説があります。いずれにしても、予測できない動きという含みは共通しています。英語の caprice、capricious も同じ語です。',
      },
      {
        heading: '楽譜が指示していること',
        body: 'この指示は、規則的な進行から外れることを求めています。ただし、演奏者が自由にテンポや音量を変えてよいという意味ではありません。多くの場合、楽譜自体に急な変化が書き込まれており、それを不意打ちとして聞かせることが求められています。書かれた変化を滑らかにつないでしまうと、気まぐれさが消えます。',
      },
    ],
    confusions: [
      { term: 'Fantastico', slug: 'fantastico', note: '幻想的に。論理を離れる点で近い。' },
      { term: 'Rubato', slug: 'rubato', note: 'テンポを揺らす指示。capriccioso は書かれた変化を生かす。' },
    ],
  },

  'burlesco': {
    lead: 'Burlesco は「おどけて、こっけいに」。burla（冗談、からかい）から派生した語です。',
    sections: [
      {
        heading: 'burlesque という様式',
        body: 'この語は、まじめなものを大げさに模して笑いを生む様式を指す語としても使われます。英語の burlesque、フランス語の burlesque も同じ語です。音楽では、荘重な形式や旋律をわざと不釣り合いな文脈に置くことでこの効果が生まれます。',
      },
      {
        heading: 'scherzando との違い',
        body: 'scherzando は冗談としての軽やかさを指しますが、burlesco はより誇張と滑稽さに寄ります。まじめさを装って外すという構造を持つため、演奏では大げさに扱うことがそのまま効果になります。',
      },
    ],
    confusions: [
      { term: 'Scherzando', slug: 'scherzando', note: 'おどけて。より軽やかな冗談。' },
      { term: 'Giocoso', slug: 'giocoso', note: '遊び心をもって。' },
      { term: 'Con scherzo', slug: 'con-scherzo', note: '冗談をもって。' },
    ],
  },

  'con-scherzo': {
    lead: 'Con scherzo は「冗談をもって」。scherzo（冗談）を用いた指示で、scherzando と同じ内容です。',
    sections: [
      {
        heading: 'scherzando との関係',
        body: 'scherzando が動詞 scherzare（ふざける）の現在分詞、con scherzo が名詞を用いた前置詞句です。指示内容の違いはありません。楽譜では scherzando のほうが一般的です。',
      },
      {
        heading: '楽曲名としての scherzo との区別',
        body: 'scherzo は、交響曲や室内楽の第3楽章などに置かれる楽曲の型を指す語でもあります。con scherzo は表情の指示であり、楽曲の型を指すものではありません。',
      },
    ],
    confusions: [
      { term: 'Scherzando', slug: 'scherzando', note: '同内容の指示。こちらが一般的。' },
      { term: 'Scherzo', slug: 'scherzo', note: '楽曲の型としての scherzo。' },
    ],
  },

  'nobile': {
    lead: 'Nobile は「高貴に、気高く」。ラテン語の nobilis（よく知られた、名高い）に由来します。',
    sections: [
      {
        heading: '語源が示すもの',
        body: 'nobilis は「知る」を意味する語根から来ており、原義は「よく知られた」です。そこから名門、高貴という意味が生じました。英語の noble も同じ語です。この語が音楽の指示として求めるのは、装飾的な華やかさではなく、節度と品格です。',
      },
      {
        heading: '感情を出しすぎないこと',
        body: '高貴さは、感情をそのまま表に出さないところに現れます。したがってこの指示のある箇所では、表情を強く付けることが逆効果になります。抑制を保ちながら空虚にならないという扱いが求められます。maestoso が規模の大きさを含むのに対して、nobile は規模とは関係なく成立します。',
      },
    ],
    confusions: [
      { term: 'Maestoso', slug: 'maestoso', note: '荘厳に。規模の大きさを含む。' },
      { term: 'Dignitoso', slug: 'dignitoso', note: '威厳をもって。近い方向の指示。' },
      { term: 'Grandioso', slug: 'grandioso', note: '壮大に。規模が主体。' },
    ],
  },

  'dignitoso': {
    lead: 'Dignitoso は「威厳をもって」。ラテン語の dignitas（価値、尊厳）に由来します。',
    sections: [
      {
        heading: '語源',
        body: 'dignus（ふさわしい、値する）から派生した語で、英語の dignity、dignified も同じ語根です。原義は「価値がある」で、そこから尊厳、威厳という意味が生じています。',
      },
      {
        heading: 'nobile との違い',
        body: 'nobile は「よく知られた」を語源とし、生まれや品格に関わります。dignitoso は「価値がある」を語源とし、自らを高く保つ姿勢に関わります。実際の演奏上の差はわずかですが、後者はより意志の要素を含みます。どちらもテンポを落ち着かせ、動きに重心を持たせる方向にあります。',
      },
    ],
    confusions: [
      { term: 'Nobile', slug: 'nobile', note: '高貴に。品格が主体。' },
      { term: 'Maestoso', slug: 'maestoso', note: '荘厳に。規模の大きさを含む。' },
      { term: 'Serioso', slug: 'serioso', note: 'まじめに。真剣さが主体。' },
    ],
  },

  'grandioso': {
    lead: 'Grandioso は「壮大に、堂々と」。grande（大きい）から派生した語です。',
    sections: [
      {
        heading: '規模の指示',
        body: 'この語が求めるのは規模の大きさです。音量を上げるだけでは達成されず、時間の扱いが伴います。テンポをやや広く取り、音を十分に鳴らしきることで、大きさが感じられます。速く駆け抜けると、音量が大きくても壮大には聞こえません。',
      },
      {
        heading: 'maestoso との違い',
        body: 'maestoso（荘厳に）は maestà（威厳）を語根に持ち、権威や格式を含みます。grandioso は大きさそのものを指し、格式の要素は含みません。したがって grandioso は、荘重でない音楽でも成立します。両者が同時に書かれることもあります。',
      },
    ],
    confusions: [
      { term: 'Maestoso', slug: 'maestoso', note: '荘厳に。威厳と格式を含む。' },
      { term: 'Nobile', slug: 'nobile', note: '高貴に。規模とは関係なく成立する。' },
      { term: 'Pesante', slug: 'pesante', note: '重々しく。重量が主体。' },
    ],
  },

  'eroico': {
    lead: 'Eroico は「英雄的に」。ギリシャ語の hērōs（英雄）に由来します。',
    sections: [
      {
        heading: 'ベートーヴェンの《エロイカ》',
        body: 'ベートーヴェンの交響曲第3番は《エロイカ（英雄）》という副題で知られています。楽譜には「Sinfonia eroica」と記され、ある偉大な人物の記憶を祝うために作曲されたという趣旨の献辞が付されています。この語が音楽の性格を表す語として定着した背景に、この作品があります。',
      },
      {
        heading: '何を表す指示か',
        body: '英雄的という性格には、勝利の輝きだけでなく、困難に立ち向かう姿も含まれます。したがってこの指示は、必ずしも明るく力強い箇所だけに置かれるわけではありません。長大な構造の中で意志を保ち続けることが、この性格の表現になります。',
      },
    ],
    confusions: [
      { term: 'Bellicoso', slug: 'bellicoso', note: '好戦的に。戦いそのものを指す。' },
      { term: 'Maestoso', slug: 'maestoso', note: '荘厳に。威厳と格式。' },
      { term: 'Risoluto', slug: 'risoluto', note: '決然と。意志の明確さ。' },
    ],
  },

  'serioso': {
    lead: 'Serioso は「まじめに、真剣に」。ラテン語の serius（重大な、まじめな）に由来します。',
    sections: [
      {
        heading: 'ベートーヴェンの《セリオーソ》',
        body: 'ベートーヴェンの弦楽四重奏曲第11番 作品95 は、第3楽章に Allegro assai vivace ma serioso という指示が置かれており、この語から《セリオーソ》と呼ばれています。速く活発でありながらまじめに、という指示の組み合わせです。',
      },
      {
        heading: '軽さを排する指示',
        body: 'この語が求めるのは、冗談や軽妙さを排することです。したがってテンポが速い箇所でも成立します。上に挙げた例のように、活発さと真剣さは両立しうるものとして書かれています。速いことと軽いことを同一視すると、この指示は読めません。',
      },
    ],
    confusions: [
      { term: 'Scherzando', slug: 'scherzando', note: 'おどけて。serioso の反対方向。' },
      { term: 'Dignitoso', slug: 'dignitoso', note: '威厳をもって。自らを高く保つ姿勢。' },
      { term: 'Maestoso', slug: 'maestoso', note: '荘厳に。格式が主体。' },
    ],
  },

  'declamando': {
    lead: 'Declamando は「朗読するように、語りかけるように」。declamare（朗読する、演説する）の現在分詞です。',
    sections: [
      {
        heading: '言葉としての音楽',
        body: 'この指示は、旋律を歌としてではなく、語りとして扱うことを求めます。歌では音の長さと高さが旋律線を作りますが、語りでは言葉の意味に応じて強弱と間が変わります。したがって、拍を均等に刻むのではなく、重要な音に重みを置き、句の区切りで間を取るという扱いになります。',
      },
      {
        heading: 'レチタティーヴォとの関係',
        body: 'オペラのレチタティーヴォは、まさにこの原理で書かれた部分です。器楽曲に declamando が書かれている場合、その箇所をレチタティーヴォのように扱うことが示唆されています。',
      },
    ],
    confusions: [
      { term: 'Recitative', slug: 'recitative', note: '語るように歌う部分。同じ原理に基づく。' },
      { term: 'Parlando', slug: 'parlando', note: '話すように。近い方向の指示。' },
      { term: 'Cantabile', slug: 'cantabile', note: '歌うように。declamando と対になる。' },
    ],
  },

  'decisivo': {
    lead: 'Decisivo は「決然と、断固として」。decidere（決める）から派生した語です。',
    sections: [
      {
        heading: '語源',
        body: 'ラテン語の decidere は「切り落とす」が原義で、そこから「決定する」という意味が生じました。英語の decide、decisive も同じ語根です。迷いを断ち切るという語感が、語源の段階から含まれています。',
      },
      {
        heading: 'risoluto との関係',
        body: 'risoluto も「決然と」を意味し、両者は近い指示です。risoluto は risolvere（解決する）を語根に持ち、決意が固まった状態を指します。decisivo は決断する行為を指します。実際の演奏上の差はわずかで、どちらもアクセントとリズムの明確さによって表されます。',
      },
    ],
    confusions: [
      { term: 'Risoluto', slug: 'risoluto', note: '決然と。決意が固まった状態。' },
      { term: 'Ardito', slug: 'ardito', note: '大胆に。恐れのなさを指す。' },
      { term: 'Energico', slug: 'energico', note: '精力的に。力の質を指す。' },
    ],
  },

  'ardito': {
    lead: 'Ardito は「大胆に、勇敢に」。躊躇のない、はっきりとした表現を求める指示です。',
    sections: [
      {
        heading: '恐れのなさ',
        body: 'この語が指すのは、力の強さではなく、ためらわないことです。したがって、音量が大きいかどうかとは別の指示になります。難しい箇所で慎重になると音が縮みますが、この指示はその逆を求めています。',
      },
      {
        heading: 'esitante との対',
        body: 'esitante（ためらいながら）はこの語の反対にあたります。同じ曲の中で両方が現れる場合、その対比が構造の一部になっています。',
      },
    ],
    confusions: [
      { term: 'Esitante', slug: 'esitante', note: 'ためらいながら。ardito の反対。' },
      { term: 'Risoluto', slug: 'risoluto', note: '決然と。決意が固まった状態。' },
      { term: 'Decisivo', slug: 'decisivo', note: '決然と。決断する行為。' },
    ],
  },

  'esitante': {
    lead: 'Esitante は「ためらいながら、躊躇して」。esitare（ためらう）の現在分詞です。',
    sections: [
      {
        heading: '不安定さを作る指示',
        body: 'ためらいは、動きが一定でないところに現れます。したがってこの指示は、テンポやリズムにわずかな揺らぎを求めます。ただし崩れることとは違い、進もうとして止まるという動きが必要です。均等に遅く弾くと、ためらいではなく単に遅い演奏になります。',
      },
      {
        heading: '書かれた休符や間を生かす',
        body: 'この指示のある箇所では、休符や短い間が書き込まれていることが多くあります。それらを埋めずに残すことが、ためらいの表現になります。',
      },
    ],
    confusions: [
      { term: 'Ardito', slug: 'ardito', note: '大胆に。esitante の反対。' },
      { term: 'Rubato', slug: 'rubato', note: 'テンポを揺らす。手段として関わる。' },
    ],
  },

  'con-grazia': {
    lead: 'Con grazia は「優雅に」。grazia は英語の grace と同じ語源で、恵み、優美さを意味します。',
    sections: [
      {
        heading: 'grazia という語',
        body: 'ラテン語の gratia（好意、恵み、感謝）に由来します。英語の grace、gratitude、フランス語の grâce も同じ語根です。優美さと同時に「与えられたもの」という含みを持ちます。努力の跡が見えない自然な美しさ、という語感がここから来ています。',
      },
      {
        heading: '演奏上の判断',
        body: '努力の跡が見えないことが求められるため、力を込めた表現とは方向が違います。音量の変化を大きく取ったり、リズムを強調したりすると、優雅さは失われます。無理のない流れを保つことが指示に沿った扱いになります。grazioso という形容詞形も同じ意味です。',
      },
    ],
    confusions: [
      { term: 'Grazioso', slug: 'grazioso', note: '形容詞形。同じ内容の指示。' },
      { term: 'Elegante', slug: 'elegante', note: '優雅に。洗練と選択が主体。' },
      { term: 'Con leggerezza', slug: 'con-leggerezza', note: '軽やかに。軽さが主体。' },
    ],
  },

  'elegante': {
    lead: 'Elegante は「優雅に、上品に」。ラテン語の eligere（選び出す）に由来します。',
    sections: [
      {
        heading: '「選ぶ」という語源',
        body: 'elegans は eligere（選び出す）から派生した語で、原義は「よく選ばれた」です。英語の elegant、elect（選挙する）も同じ語根です。この語源が示すのは、余計なものを排して選び抜かれた状態です。grazia が「与えられた恵み」を語源とするのに対して、こちらは選択という行為を含みます。',
      },
      {
        heading: '演奏上の判断',
        body: '選び抜かれた状態を目指すため、過剰な表情を加えないことが要点になります。音量の変化、テンポの揺れ、装飾の付け方をいずれも控えめにし、プロポーションを整えることがこの指示に応える扱いです。con eleganza も同じ内容です。',
      },
    ],
    confusions: [
      { term: 'Con eleganza', slug: 'con-eleganza', note: '名詞形を使った同内容の指示。' },
      { term: 'Con grazia', slug: 'con-grazia', note: '優雅に。「恵み」を語源とする。' },
      { term: 'Semplice', slug: 'semplice', note: '素朴に。余計なものを排する点で近い。' },
    ],
  },

  'con-eleganza': {
    lead: 'Con eleganza は「優雅さをもって」。elegante の名詞形を用いた指示です。',
    sections: [
      {
        heading: 'elegante との関係',
        body: '形容詞 elegante と指示内容は同じです。語源は「選び出す」で、余計なものを排して選び抜かれた状態を指します。詳しい説明は elegante のページにあります。',
      },
    ],
    confusions: [
      { term: 'Elegante', slug: 'elegante', note: '形容詞形。詳しい説明はこちら。' },
      { term: 'Con grazia', slug: 'con-grazia', note: '優雅に。語源が異なる。' },
    ],
  },

  'delicatamente': {
    lead: 'Delicatamente は「繊細に」。ラテン語の delicatus（心地よい、繊細な）に由来します。',
    sections: [
      {
        heading: '扱いに注意を要するもの',
        body: 'delicatus は、そのままでは損なわれてしまうものを指す語です。英語の delicate も同じで、壊れやすさと同時に、扱いに注意を要するという含みを持ちます。したがってこの指示は、音を小さくすることではなく、細心の扱いを求めています。',
      },
      {
        heading: '弱音との違い',
        body: '音量を落としても、打鍵や弓が乱暴であれば繊細にはなりません。逆に、ある程度の音量があっても、音の立ち上がりが整っていれば繊細に聞こえます。この指示が扱っているのは音量ではなく、音を出す動作の精度です。con delicatezza も同じ内容です。',
      },
    ],
    confusions: [
      { term: 'Con delicatezza', slug: 'con-delicatezza', note: '名詞形を使った同内容の指示。' },
      { term: 'Dolcissimo', slug: 'dolcissimo', note: 'この上なく甘く。dolce の最上級。' },
      { term: 'Leggero', slug: 'leggero', note: '軽く。重さの指示。' },
    ],
  },

  'con-delicatezza': {
    lead: 'Con delicatezza は「繊細さをもって」。delicatamente と同じ内容を名詞形で表した指示です。',
    sections: [
      {
        heading: 'delicatamente との関係',
        body: '副詞形 delicatamente と指示内容は同じです。求められているのは音量の小ささではなく、音を出す動作の精度です。詳しい説明は delicatamente のページにあります。',
      },
    ],
    confusions: [
      { term: 'Delicatamente', slug: 'delicatamente', note: '副詞形。詳しい説明はこちら。' },
    ],
  },

  'carezzevole': {
    lead: 'Carezzevole は「愛撫するように」。carezza（愛撫）から派生した語です。',
    sections: [
      {
        heading: '触れる動作としての指示',
        body: 'carezza は手で優しく撫でる動作を指す語です。英語の caress も同じ語源です。この指示が求めているのは感情ではなく、触れ方です。したがって、鍵盤や弦に接触する瞬間の扱いが直接この指示に対応します。押すのではなく撫でるという動作の違いが、音の立ち上がりに現れます。',
      },
      {
        heading: '近い語との違い',
        body: 'tenero や dolce が音楽の性質を述べるのに対して、carezzevole は動作を述べます。指示の抽象度が違うため、こちらのほうが具体的に何をすべきかが分かる語です。',
      },
    ],
    confusions: [
      { term: 'Tenero', slug: 'tenero', note: '優しく。性質を述べる語。' },
      { term: 'Con morbidezza', slug: 'con-morbidezza', note: '柔らかく。感触を述べる語。' },
      { term: 'Dolce', slug: 'dolce', note: '甘く、柔らかく。' },
    ],
  },

  'con-morbidezza': {
    lead: 'Con morbidezza は「柔らかさをもって」。morbido（柔らかい）から来た語で、病気を意味する語とは無関係です。',
    sections: [
      {
        heading: '誤解されやすい語',
        body: 'イタリア語の morbido は「柔らかい」を意味します。英語の morbid（病的な）と字面が近いため誤解されますが、こちらはラテン語の morbus（病気）に由来する別の語です。イタリア語の morbido はラテン語の morbidus に遡りますが、イタリア語では意味が「柔らかい」へ移っており、指示としては柔らかさだけを意味します。',
      },
      {
        heading: '求められる音',
        body: '硬さを排した、なめらかな感触の音です。打鍵や弓が弦や鍵に当たる音が目立たないこと、音の立ち上がりに角がないことが要点になります。音量とは独立した指示です。',
      },
    ],
    confusions: [
      { term: 'Carezzevole', slug: 'carezzevole', note: '愛撫するように。触れ方を述べる語。' },
      { term: 'Dolce', slug: 'dolce', note: '甘く、柔らかく。' },
      { term: 'Souple', slug: 'souple', note: 'フランス語で柔軟に。同じ方向の指示。' },
    ],
  },

  'con-leggerezza': {
    lead: 'Con leggerezza は「軽やかに」。leggero（軽い）の名詞形を用いた指示です。',
    sections: [
      {
        heading: '重さを抜くこと',
        body: 'この指示が求めるのは、音に重さを乗せないことです。音量を落とすこととは違い、腕や弓の重量を音に伝えないという操作になります。ピアノでは指先だけで打鍵し、腕の重さを鍵に預けません。弦楽器では弓の重さを弦に掛けず、速度で鳴らします。',
      },
      {
        heading: '軽さと速さ',
        body: '軽い音は速いパッセージで求められることが多いのですが、遅い箇所でも成立します。テンポとは独立した指示です。leggero、leggermente、leggiero も同じ語根の語形で、同じ内容を指します。',
      },
    ],
    confusions: [
      { term: 'Leggero', slug: 'leggero', note: '形容詞形。同じ内容の指示。' },
      { term: 'Con agilità', slug: 'con-agilità', note: '敏捷に。動きの速さが主体。' },
      { term: 'Volante', slug: 'volante', note: '飛ぶように。軽さと速さの両方を含む。' },
    ],
  },

  'con-agilità': {
    lead: 'Con agilità は「敏捷に、軽快に」。agile（素早い）の名詞形を用いた指示です。',
    sections: [
      {
        heading: '語源',
        body: 'ラテン語の agere（動かす、行う）に由来し、agilis は「動かしやすい」を意味します。英語の agile、agility も同じ語根です。指しているのは軽さではなく、動きの素早さと切り替えの容易さです。',
      },
      {
        heading: 'con leggerezza との違い',
        body: 'con leggerezza は重さを抜くこと、con agilità は素早く動くことを求めます。両者は同時に成立することが多いのですが、指示している内容は別です。重い音でも敏捷に動くことはでき、軽い音でもゆっくり動くことはできます。',
      },
    ],
    confusions: [
      { term: 'Con leggerezza', slug: 'con-leggerezza', note: '軽やかに。重さを抜くことが主体。' },
      { term: 'Volante', slug: 'volante', note: '飛ぶように。' },
      { term: 'Brillante', slug: 'brillante', note: '輝かしく。技巧の華やかさを含む。' },
    ],
  },

  'fresco': {
    lead: 'Fresco は「爽やかに、新鮮に」。ゲルマン語系の「新しい、冷たい」を意味する語に由来します。',
    sections: [
      {
        heading: '語の広がり',
        body: '英語の fresh、ドイツ語の frisch と同じ語源です。イタリア語の fresco は「涼しい」「新鮮な」の両方を意味します。壁画の技法をフレスコと呼ぶのは、漆喰が乾かないうちに描くことから「新しい（湿った）」状態を指したものです。',
      },
      {
        heading: '演奏上の判断',
        body: '重さや粘りを排する方向の指示です。音を引き伸ばさず、余韻を溜めないことで、乾いた新鮮さが生まれます。ペダルを多用して響きを溜めると、この方向から外れます。',
      },
    ],
    confusions: [
      { term: 'Leggero', slug: 'leggero', note: '軽く。重さを抜く点で近い。' },
      { term: 'Semplice', slug: 'semplice', note: '素朴に。飾りを排する点で近い。' },
    ],
  },

  'festivo': {
    lead: 'Festivo は「祝祭的に」。festa（祭り）から派生した語です。',
    sections: [
      {
        heading: '語源',
        body: 'ラテン語の festum（祝祭）に由来し、英語の festival、feast も同じ語根です。祝祭の場に相応しい華やかさを求める指示です。',
      },
      {
        heading: '音楽上の慣習',
        body: '祝祭を描く音楽では、金管楽器の輝かしい響き、打楽器の加わった編成、明るい調が用いられてきました。この指示のある箇所がそうした書法を伴っている場合、その明るさを前に出すことが指示に沿った扱いになります。',
      },
    ],
    confusions: [
      { term: 'Brillante', slug: 'brillante', note: '輝かしく。技巧の華やかさを含む。' },
      { term: 'Grandioso', slug: 'grandioso', note: '壮大に。規模が主体。' },
      { term: 'Con brio', slug: 'con-brio', note: '活気をもって。' },
    ],
  },

  'estatico': {
    lead: 'Estatico は「恍惚として」。ギリシャ語の ekstasis（外に立つこと）に由来します。',
    sections: [
      {
        heading: '「外に立つ」という語源',
        body: 'ek（外へ）と stasis（立つこと）から成る語で、自分の外に出た状態を意味します。英語の ecstasy、ecstatic も同じ語源です。したがってこの指示が示すのは、単なる幸福感ではなく、通常の意識の外にある状態です。',
      },
      {
        heading: '演奏上の判断',
        body: '通常の状態から外れていることが表現の内容なので、日常的な進行の感覚を保ったままでは伝わりません。時間の感覚が薄れるような扱い、たとえばテンポの枠を意識させない処理が効果を持つ場合があります。ただし楽譜に書かれた構造を崩すことではありません。',
      },
    ],
    confusions: [
      { term: 'Con devozione', slug: 'con-devozione', note: '献身的に。祈りの方向。' },
      { term: 'Religioso', slug: 'religioso', note: '宗教的に、厳かに。' },
      { term: 'Fantastico', slug: 'fantastico', note: '幻想的に。論理を離れる点で近い。' },
    ],
  },

  'fantastico': {
    lead: 'Fantastico は「幻想的に」。ギリシャ語の phantasia（想像、心に現れるもの）に由来します。',
    sections: [
      {
        heading: '語源',
        body: 'phainein（現れる）を語根とし、phantasia は心に現れる像を意味します。英語の fantasy、phantom も同じ語根です。したがってこの語が指すのは、現実ではなく心に浮かんだものという性質です。',
      },
      {
        heading: 'fantasia という楽曲の型',
        body: 'この語根から派生した fantasia は、定型に縛られない自由な構成を持つ楽曲を指す語でもあります。fantastico という指示は、その自由さと同じ方向を向いています。',
      },
      {
        heading: '演奏上の判断',
        body: '論理的な進行から外れる性質を求める指示ですが、演奏者が構造を無視してよいという意味ではありません。多くの場合、楽譜自体に予測しにくい転換が書き込まれており、それを唐突なまま生かすことが求められています。',
      },
    ],
    confusions: [
      { term: 'Fantasie', slug: 'fantasie', note: '自由な構成を持つ楽曲の型。同じ語根。' },
      { term: 'Capriccioso', slug: 'capriccioso', note: '気まぐれに。予測できなさが主体。' },
      { term: 'Misterioso', slug: 'misterioso', note: '神秘的に。隠されていることが主体。' },
    ],
  },

  'languido': {
    lead: 'Languido は「気だるく、物憂げに」。ラテン語の languere（弱る、衰える）に由来します。',
    sections: [
      {
        heading: '力が抜けた状態',
        body: '語源が示すのは、力が失われている状態です。英語の languid、languish も同じ語根です。悲しみでも眠気でもなく、動く力が足りていないという状態を指します。',
      },
      {
        heading: '演奏上の判断',
        body: '力が抜けた状態を作るには、実際に支えを失うのではなく、支えたまま推進力を抜くという扱いになります。テンポが前へ行かず、フレーズが上へ向かわない処理です。実際に音が鳴らなくなると、languido ではなく演奏の不備になります。',
      },
    ],
    confusions: [
      { term: 'Malinconico', slug: 'malinconico', note: '憂鬱に。晴れない状態を指す。' },
      { term: 'Sospirando', slug: 'sospirando', note: '溜め息をつくように。' },
      { term: 'Pacato', slug: 'pacato', note: '穏やかに。落ち着きが主体。' },
    ],
  },

  'pacato': {
    lead: 'Pacato は「穏やかに、落ち着いて」。ラテン語の pax（平和）に由来します。',
    sections: [
      {
        heading: '語源',
        body: 'pacare（和らげる、鎮める）の過去分詞から来た語で、pax（平和）と同じ語根です。英語の pacify、Pacific（太平洋）も同じ語源です。原義は「鎮められた」で、もともと乱れていたものが収まった状態を含みます。',
      },
      {
        heading: '静けさの種類',
        body: 'tranquillo が静かな状態そのものを指すのに対して、pacato は鎮まった状態を指します。したがって、激しい展開の後にこの指示が現れる場合、語源の含みがそのまま文脈に合っています。',
      },
    ],
    confusions: [
      { term: 'Tranquillo', slug: 'tranquillo', note: '静かに。状態そのものを指す。' },
      { term: 'Calmo', slug: 'calma', note: '静けさ。' },
      { term: 'Comodo', slug: 'comodo', note: '気楽に。無理のなさが主体。' },
    ],
  },

  'comodo': {
    lead: 'Comodo は「気楽に、無理のない速さで」。ラテン語の commodus（適切な、都合のよい）に由来します。',
    sections: [
      {
        heading: 'テンポの指示として',
        body: 'この語は、速すぎず遅すぎない、無理のないテンポを示します。tempo comodo という形で現れることが多く、その場合は「ちょうどよい速さで」となります。絶対的な速度を示さないため、その曲の性格から判断することになります。',
      },
      {
        heading: '「都合がよい」という語源',
        body: 'commodus は con（ともに）と modus（尺度）から成り、尺度に合っているという意味です。英語の commodious、commodity も同じ語根です。演奏者にとって扱いやすい状態を指す語であり、そこから「気楽に」という語感が生じています。',
      },
    ],
    confusions: [
      { term: 'Tempo giusto', slug: 'tempo-giusto', note: '正確なテンポで。厳密さが主体。' },
      { term: 'Moderato', slug: 'moderato', note: '中庸の速さで。' },
      { term: 'A piacere', slug: 'a-piacere', note: '奏者の自由に。' },
    ],
  },

  'camminando': {
    lead: 'Camminando は「歩くように、止まらずに」。camminare（歩く）の現在分詞です。',
    sections: [
      {
        heading: 'andante との関係',
        body: 'andante も andare（行く）の現在分詞で、歩く速さという語感を持ちます。camminando はより明確に「歩く」を語根に持ち、前へ進み続けることが強調されます。停滞しないことがこの指示の内容です。',
      },
      {
        heading: '演奏上の判断',
        body: '歩みが止まらないことが求められるため、各音に留まらず次へ渡していく扱いになります。フレーズの中で音を溜めると歩みが止まります。テンポを速めることではなく、進行を切らさないことが要点です。',
      },
    ],
    confusions: [
      { term: 'Andante', slug: 'andante', note: '歩く速さで。同じく現在分詞の語形。' },
      { term: 'Con moto', slug: 'con-moto', note: '動きをもって。前進を明示する。' },
    ],
  },

  'con-abbandono': {
    lead: 'Con abbandono は「身を任せて、奔放に」。abbandono は「放棄、委ねること」を意味します。',
    sections: [
      {
        heading: '委ねるという指示',
        body: 'この語が求めるのは、制御しようとする意識を手放すことです。英語の abandon も同じ語で、「自制を捨てる」という用法があります。感情を作るのではなく、流れに委ねるという方向です。',
      },
      {
        heading: '崩すことではない',
        body: '委ねるという指示は、テンポやリズムを自由に扱ってよいという意味ではありません。委ねているように聞こえるためには、実際には構造が保たれている必要があります。崩れると、委ねた印象ではなく不安定な演奏になります。',
      },
    ],
    confusions: [
      { term: 'Rubato', slug: 'rubato', note: 'テンポを揺らす指示。手段として関わる。' },
      { term: 'Appassionato', slug: 'appassionato', note: '情熱的に。感情に押される状態。' },
      { term: 'A piacere', slug: 'a-piacere', note: '奏者の自由に。裁量を明示する。' },
    ],
  },

  'con-devozione': {
    lead: 'Con devozione は「献身的に、信心深く」。ラテン語の devovere（誓いを立てて捧げる）に由来します。',
    sections: [
      {
        heading: '語源',
        body: 'de（完全に）と vovere（誓う）から成り、原義は「誓って捧げる」です。英語の devotion、devout も同じ語根です。宗教的な文脈から来た語であり、自己を差し出すという含みを持ちます。',
      },
      {
        heading: '演奏上の判断',
        body: '自己を差し出す方向の指示なので、演奏者の表現を前に出すこととは逆になります。個人的な感情の表出を抑え、音そのものを澄んだ状態で置くことが指示に沿った扱いです。religioso と近い方向にありますが、こちらは態度としての献身を指します。',
      },
    ],
    confusions: [
      { term: 'Religioso', slug: 'religioso', note: '宗教的に、厳かに。' },
      { term: 'Estatico', slug: 'estatico', note: '恍惚として。意識の外へ出る状態。' },
      { term: 'Semplice', slug: 'semplice', note: '素朴に。飾りを排する点で近い。' },
    ],
  },

  'religioso': {
    lead: 'Religioso は「宗教的に、厳かに」。ラテン語の religio に由来します。',
    sections: [
      {
        heading: '語源',
        body: 'religio の語源については、relegere（読み返す、注意深く行う）に由来するという説と、religare（結び直す）に由来するという説があります。いずれの説でも、注意深さや結びつきという含みが指摘されています。英語の religion も同じ語です。',
      },
      {
        heading: '演奏上の判断',
        body: '個人的な感情の表出を抑え、澄んだ響きを保つ方向の指示です。音量を落とすこととは違い、雑味のない音を作ることが要点になります。教会の空間を前提とした響きを想定する場合、残響を含んだ長い音の扱いが関わります。',
      },
    ],
    confusions: [
      { term: 'Con devozione', slug: 'con-devozione', note: '献身的に。態度としての献身を指す。' },
      { term: 'Maestoso', slug: 'maestoso', note: '荘厳に。格式が主体。' },
      { term: 'Semplice', slug: 'semplice', note: '素朴に。飾りを排する。' },
    ],
  },

  'con-nostalgia': {
    lead: 'Con nostalgia は「郷愁をもって」。ギリシャ語の nostos（帰郷）と algos（痛み）から作られた語です。',
    sections: [
      {
        heading: '「帰郷の痛み」という語源',
        body: 'この語は、17世紀にスイスの医学者が故郷を離れた者に現れる症状を指して作った造語に遡ります。nostos（帰ること）と algos（痛み）を組み合わせたもので、原義は帰郷への渇望による苦痛です。英語の nostalgia も同じ語です。単なる懐かしさではなく、戻れないことによる痛みという含みを持ちます。',
      },
      {
        heading: '演奏上の判断',
        body: '戻れない過去への思いという性質なので、明るい懐かしさとは違います。同時に、悲しみそのものでもありません。温かさと届かなさの両方が含まれる状態です。表情を明るくしすぎても、暗くしすぎても、この語の指す状態から外れます。',
      },
    ],
    confusions: [
      { term: 'Con malinconia', slug: 'con-malinconia', note: '憂鬱をもって。原因が特定されない沈み。' },
      { term: 'Mesto', slug: 'mesto', note: '沈んだ悲しみ。' },
      { term: 'Con affetto', slug: 'con-affetto', note: '情愛をもって。' },
    ],
  },

  'lusingando': {
    lead: 'Lusingando は「おもねるように、誘い込むように」。lusingare（おだてる、誘惑する）の現在分詞です。',
    sections: [
      {
        heading: '誘い込むという指示',
        body: 'この語は、相手に取り入る、心地よく思わせるという行為を指します。したがってこの指示は、聴き手に働きかける方向を持っています。自分の感情を表出するのではなく、相手の反応を引き出そうとする性質です。',
      },
      {
        heading: '演奏上の判断',
        body: '誘い込むには、押しつけるのではなく、余地を残す必要があります。フレーズを言い切らず、わずかに引くことで、聴き手が近づいてくる形になります。強く提示すると、誘いではなく主張になります。',
      },
    ],
    confusions: [
      { term: 'Dolce', slug: 'dolce', note: '甘く。心地よさが主体。' },
      { term: 'Carezzevole', slug: 'carezzevole', note: '愛撫するように。触れ方を述べる。' },
      { term: 'Con grazia', slug: 'con-grazia', note: '優雅に。' },
    ],
  },

  'con-sentimento': {
    lead: 'Con sentimento は「感情をもって」。sentire（感じる）から派生した名詞を用いた指示です。',
    sections: [
      {
        heading: '語源',
        body: 'ラテン語の sentire（感じる、知覚する）に由来し、英語の sentiment、sense も同じ語根です。感情という抽象的な内容を指すため、この指示は具体的な操作を示していません。',
      },
      {
        heading: 'espressivo との関係',
        body: 'espressivo が「表現すること」を求めるのに対して、con sentimento は「感じていること」を求めます。前者は外へ出す方向、後者は内側の状態を指します。ただし演奏上の区別は明確ではなく、いずれも音を並べるだけで終わらせないことを求める指示として機能します。何を感じるべきかは、和声、旋律の形、前後の文脈から読み取ることになります。',
      },
    ],
    confusions: [
      { term: 'Espressivo', slug: 'espressivo', note: '表情豊かに。外へ出す方向。' },
      { term: 'Con affetto', slug: 'con-affetto', note: '情愛をもって。対象へ向かう心。' },
      { term: 'Con anima', slug: 'con-anima', note: '魂をもって。解釈が分かれる語。' },
    ],
  },

  'agitatissimo': {
    lead: 'Agitatissimo は agitato の最上級で「きわめて激しく、騒然として」。',
    sections: [
      {
        heading: '最上級であることの意味',
        body: 'agitato に -issimo が付いた形です。したがってこの指示が現れる箇所は、同じ曲の中に agitato の箇所があり、それより一段進んだ状態を求めていると読めます。曲の中の相対的な指示です。',
      },
      {
        heading: '崩れないこと',
        body: 'agitato は agitare（揺り動かす）を語根に持ち、落ち着かない状態を指します。その最上級であっても、演奏が崩れることを求めているわけではありません。制御を失っているように聞こえるためには、リズムと音程が保たれている必要があります。',
      },
    ],
    confusions: [
      { term: 'Agitato', slug: 'agitato', note: '興奮して、落ち着きなく。agitatissimo はその最上級。' },
      { term: 'Furioso', slug: 'furioso', note: '荒れ狂って。我を失った激しさ。' },
      { term: 'Con impeto', slug: 'con-impeto', note: '衝動をもって。突発性が主体。' },
    ],
  },

  'allegro-appassionato': {
    lead: 'Allegro appassionato は「速く、かつ情熱的に」。速度標語と表情の指示を組み合わせたものです。',
    sections: [
      {
        heading: '2つの指示の関係',
        body: 'allegro が速度、appassionato が表情を指定しています。速いテンポの中で情熱を保つという組み合わせで、どちらか一方を優先すると指示から外れます。情熱を表そうとしてテンポを揺らしすぎれば allegro が失われ、速度を守ることに集中すれば appassionato が失われます。',
      },
      {
        heading: 'ブラームスのピアノ協奏曲第2番',
        body: 'ブラームスのピアノ協奏曲第2番 変ロ長調 作品83 の第2楽章に、Allegro appassionato という指示が置かれています。',
      },
    ],
    confusions: [
      { term: 'Allegro', slug: 'allegro', note: '速度標語。「陽気に」が原義。' },
      { term: 'Appassionato', slug: 'appassionato', note: '情熱的に。' },
      { term: 'Con passione', slug: 'con-passione', note: '情熱をもって。' },
    ],
  },

  'appena': {
    lead: 'Appena は「かろうじて、わずかに」。単独ではなく、他の語と組み合わせて程度を限定します。',
    sections: [
      {
        heading: '程度を弱める語',
        body: 'appena udibile（かろうじて聞こえる程度に）、appena marcato（わずかに際立たせて）のように、後に続く語の程度を最小限に抑えます。poco（少し）よりさらに弱く、ほとんど行わないという方向です。',
      },
      {
        heading: '「ほとんどしない」という指示',
        body: 'この語が付いた指示は、実行するかしないかの境目に置かれます。したがって、はっきり実行すると指示から外れます。聴き手がそれと気づかない程度に留めることが求められます。',
      },
    ],
    confusions: [
      { term: 'Poco a poco', slug: 'poco-a-poco', note: '少しずつ。程度ではなく変化の速さを指す。' },
      { term: 'Ben', slug: 'ben', note: '十分に。appena の反対方向。' },
      { term: 'Niente', slug: 'niente', note: '無。appena はゼロではない。' },
    ],
  },

  'ben': {
    lead: 'Ben は「十分に、よく」。bene の短縮形で、後に続く語の程度を強めます。',
    sections: [
      {
        heading: '程度を強める語',
        body: 'ben marcato（十分に際立たせて）、ben tenuto（十分に保って）、ben ritmato（十分にリズミカルに）のように使われます。後に続く指示を控えめに済ませず、はっきり実行することを求めます。appena（かろうじて）の反対方向にあたります。',
      },
      {
        heading: '語形',
        body: 'イタリア語の bene（よく）が、子音の前で ben に短縮されます。楽譜では ben の形で現れることが一般的です。molto（非常に）が量の増大を示すのに対して、ben は「十分に、しっかりと」という完全性を示します。',
      },
    ],
    confusions: [
      { term: 'Appena', slug: 'appena', note: 'かろうじて。ben の反対方向。' },
      { term: 'Marcato', slug: 'marcato', note: 'ben marcato の形で頻出する。' },
    ],
  },

  'bruscamente': {
    lead: 'Bruscamente は「不意に、ぶっきらぼうに」。brusco（無愛想な、急な）の副詞形です。',
    sections: [
      {
        heading: '準備しないこと',
        body: 'この指示が求めるのは、変化に準備を与えないことです。音量やテンポの変化を滑らかにつなぐと、この語の指す唐突さが失われます。したがって、その手前まで前の状態を保ち、切り替わる瞬間に一気に変えるという扱いになります。',
      },
      {
        heading: '演奏の慣習との衝突',
        body: '演奏では一般に、変化を自然につなぐことが求められます。bruscamente はその慣習をあえて破る指示です。滑らかにしようとする習慣が働くと、この指示は実現されません。意識してつながりを断つ必要があります。',
      },
    ],
    confusions: [
      { term: 'Subito', slug: 'subito', note: '突然に。同じく急な変化を指す。' },
      { term: 'Attacca', slug: 'attacca', note: '切れ目なく続けて。次への接続を指す。' },
    ],
  },

  'chiuso': {
    lead: 'Chiuso は「閉じた」。ホルンではベルを手で塞ぐ奏法を指し、表情の指示としては感情を内に閉じた状態を指します。',
    sections: [
      {
        heading: 'ホルンでの意味',
        body: 'ホルンのパート譜にこの語がある場合、右手をベルに深く差し込む奏法を指します。この奏法では音程が約半音上がるため、奏者は半音低い運指で補正します。音色は刺すような鋭さを帯びます。英語では stopped、ドイツ語では gestopft にあたります。記号としては音符の上の + が使われます。',
      },
      {
        heading: '表情の指示としての意味',
        body: 'ホルン以外の楽器でこの語が現れる場合、閉じた響き、あるいは感情を内側に閉じ込めた状態を指します。開放的に鳴らさず、抑えた音色を作ることが求められます。どちらの意味なのかは、楽器と文脈から判断します。',
      },
      {
        heading: 'aperto との対',
        body: 'aperto（開いた）がこの語の反対にあたります。ホルンでは手を離すこと、表情の指示としては開放的な響きを指します。',
      },
    ],
    confusions: [
      { term: 'Stopped', slug: 'stopped', note: '英語で同じホルンの奏法。' },
      { term: 'Open', slug: 'open', note: '開いた状態に戻す指示。' },
      { term: 'Horn', slug: 'horn', note: 'この奏法を用いる楽器。' },
    ],
  },

  'fieramente': {
    lead: 'Fieramente は「誇り高く、激しく」。fiero（誇り高い、猛々しい）の副詞形です。',
    sections: [
      {
        heading: '二つの方向を含む語',
        body: 'イタリア語の fiero は「誇り高い」と「猛々しい」の両方を意味します。語源はラテン語の ferus（野生の）で、feroce と同じ語根です。したがってこの語には、品格としての誇りと、野生の激しさという二つの方向が含まれます。どちらに寄るかは文脈で判断します。',
      },
      {
        heading: '演奏上の判断',
        body: '誇りとしての側面を取るなら、自らを低くしない毅然とした提示になります。激しさとしての側面を取るなら、角のある音になります。同じ語根から派生した feroce は後者に寄り、この語は前者の含みを持つ点が違います。',
      },
    ],
    confusions: [
      { term: 'Feroce', slug: 'feroce', note: '同じ語根。野生の激しさに寄る。' },
      { term: 'Nobile', slug: 'nobile', note: '高貴に。誇りの方向。' },
      { term: 'Risoluto', slug: 'risoluto', note: '決然と。意志の明確さ。' },
    ],
  },

  'drammatico': {
    lead: 'Drammatico は「劇的に」。ギリシャ語の drama（行為、劇）に由来します。',
    sections: [
      {
        heading: '語源が示すもの',
        body: 'ギリシャ語の dran（行う）を語根とし、drama は「行われること」を意味します。舞台上で出来事が起こることが原義です。したがってこの指示が求めるのは、感情の強さそのものよりも、何かが起こっているという感覚です。',
      },
      {
        heading: '対比が要点になる',
        body: '劇的であるためには、変化の幅が必要です。強い箇所だけを強くしても劇的にはならず、弱い箇所を十分に弱くすることで対比が生まれます。したがってこの指示のある楽曲では、最も静かな箇所の扱いが劇的な効果を決めます。',
      },
    ],
    confusions: [
      { term: 'Appassionato', slug: 'appassionato', note: '情熱的に。感情の強さが主体。' },
      { term: 'Espressivo', slug: 'espressivo', note: '表情豊かに。より広い指示。' },
      { term: 'Grandioso', slug: 'grandioso', note: '壮大に。規模が主体。' },
    ],
  },

  'legatissimo': {
    lead: 'Legatissimo は legato の最上級で「極めてなめらかに」。単に切れ目をなくすだけでなく、音が互いに重なるところまで求める指示です。',
    sections: [
      {
        heading: 'legato との違いは重なり',
        body: 'legato は音を切らずにつなぐことですが、legatissimo ではさらに進んで、前の音がまだ鳴っているうちに次の音を出します。ピアノでは前の鍵を離すのを遅らせ、指を重ねることで実現します。結果として和音のような濁りがわずかに生じますが、それがこの指示の求める密度です。切れ目をなくすことと音を重ねることは別の操作であり、後者が legatissimo の内容です。',
      },
      {
        heading: '楽器ごとの実現',
        body: 'ピアノでは指の重なりとペダルで作ります。ペダルだけに頼ると音が混ざりすぎて輪郭が失われるため、指のつなぎを基本に置きます。弦楽器では弓を返す瞬間の切れ目をなくすことが要点で、返しの直前に弓速を落とし、返した直後に戻します。管楽器や声楽では、音と音のあいだに息の切れ目を作らないことになりますが、ここでは重なりが物理的に不可能なため、実質的には最上のレガートを指す指示になります。',
      },
      {
        heading: '濁りとの境目',
        body: '重なりを増やしていくと、どこかで濁りが表現を損ないます。どこまで重ねられるかは、音域と和声によって変わります。低音域では倍音が多く濁りやすいため重なりを控え、高音域では多めに取れます。和声的に協和する音の連続なら重ねやすく、不協和な音がぶつかる箇所では抑える、という判断になります。',
      },
    ],
    confusions: [
      { term: 'Legato', slug: 'legato', note: '音を切らずにつなぐ指示。legatissimo はさらに重ねる。' },
      { term: 'Portato', slug: 'portato', note: 'つなぎながらも各音を軽く分ける奏法。legatissimo とは逆方向。' },
    ],
  },

  'staccatissimo': {
    lead: 'Staccatissimo は staccato の最上級で、さらに短く鋭く切ることを求めます。記号は点ではなく、縦に細長い楔（くさび）の形で書かれます。',
    sections: [
      {
        heading: '記号の見分け方',
        body: 'staccato は音符の上下に点、staccatissimo は縦向きの楔で書かれます。楔の記号は staccato の点よりも短く鋭い音を指しますが、時代によって記号の使い分けは一定していません。18世紀から19世紀初めの楽譜では点と楔が明確に区別されていない場合もあり、筆写譜と初版でどちらが書かれていたかが問題になる箇所もあります。',
      },
      {
        heading: '短さは長さではなく密度',
        body: '音を極端に短くすると、音程が聞き取れない打撃音になってしまいます。狙うのは、音の実体が保たれたまま輪郭が鋭いことです。ピアノでは打鍵の速度を上げ、指を素早く離します。弦楽器では弓を弦に強く当ててすぐ離すのではなく、短い距離を速く弾いて即座に止めます。管楽器では舌で音を切りますが、切った後に息が残らないよう支えを保ちます。',
      },
      {
        heading: 'テンポとの関係',
        body: '速い楽章では、staccato と staccatissimo の絶対的な長さの差はわずかになります。それでも指示が書き分けられているのは、音の性格が違うためです。遅い楽章のほうが差を作りやすく、記号の意図がはっきり伝わります。',
      },
    ],
    confusions: [
      { term: 'Staccato', slug: 'staccato', note: '音を切って演奏する指示。staccatissimo はさらに短く鋭い。' },
      { term: 'Spiccato', slug: 'spiccato', note: '弦楽器で弓を弦から跳ばす奏法。記譜が似るが弓の使い方の指示。' },
      { term: 'Martellato', slug: 'martellato', note: '槌で打つような強い切り方。鋭さより重さが主体。' },
    ],
  },

  'accent': {
    lead: 'アクセント記号（>）は、その音を周囲より際立たせる指示です。音量を上げることだけが方法ではありません。',
    sections: [
      {
        heading: '際立たせる方法は複数ある',
        body: '音量を上げるのが最も単純な方法ですが、それだけではありません。音の立ち上がりを鋭くする、わずかに長く保つ、直前にほんのわずかな間を置く、といった方法でも音は際立ちます。音量だけで処理すると、弱音の中のアクセントが場を壊すことがあります。前後との差を作ることが目的であり、差の作り方は文脈で選べます。',
      },
      {
        heading: 'sforzando との違い',
        body: 'sforzando は突発的で衝撃的な強調を指すのに対して、アクセント記号はより穏やかで、リズムの骨格を示す性格が強いものです。不規則な拍や、拍節と旋律のずれを明示するために置かれることが多く、その場合は「重み」としての強調になります。すべてのアクセントを衝撃として扱うと、リズムが伝わらなくなります。',
      },
      {
        heading: '何のためのアクセントか',
        body: '楽譜のアクセントには、少なくとも二つの目的があります。ひとつは、拍節上は弱いはずの位置を強調してリズムを組み替えるもの。もうひとつは、和声上の重要な音や旋律の頂点を示すものです。前者はリズムの位置を伝えるためなので鋭さが要り、後者は音楽的な重心を示すため厚みが要ります。記号は同じでも、扱いは変わります。',
      },
    ],
    confusions: [
      { term: 'Sforzando', slug: 'sforzando', note: '突発的で衝撃的な強調。アクセントより鋭い。' },
      { term: 'Marcato', slug: 'marcato', note: '一連の音を際立たせる指示。アクセントは一音ごと。' },
      { term: 'Tenuto', slug: 'tenuto', note: '音を保つ指示。長さで際立たせる点が近い。' },
    ],
  },

  'alberti-bass': {
    lead: 'アルベルティ・バスは、和音を「低・高・中・高」の順に分散させて繰り返す伴奏形です。ハ長調の主和音なら、ド・ソ・ミ・ソという並びになります。',
    sections: [
      {
        heading: '形の決まり方',
        body: '三和音の3つの音を使い、最低音を1番目、最高音を2番目と4番目、中間の音を3番目に置きます。単純に低い音から順に鳴らすのではなく、高い音を2度使って上下に往復させるのが特徴です。この往復によって、和音を保ちながらリズムが生まれます。',
      },
      {
        heading: '古典派の鍵盤曲で多用された',
        body: 'モーツァルトやハイドンの鍵盤曲の左手に頻繁に現れます。当時の鍵盤楽器は音を長く保つ力が弱く、和音を押さえたままでは響きが途切れました。分散させて繰り返すことで、和音を鳴らし続けながら軽やかなリズムを保てます。楽器の制約から生まれた書法です。',
      },
      {
        heading: '演奏上の要点',
        body: 'この伴奏形は、そのまま弾くと機械的な繰り返しになります。目立たせるべきは1番目の最低音で、これが和声の土台と拍を示します。2番目以降は軽く扱い、全体を一つの和音として響かせます。手首を固めて指だけで打つと硬くなるため、手全体をゆるやかに動かして支えるのが基本です。右手の旋律を邪魔しない音量に収めることが、この伴奏の役目です。',
      },
      {
        heading: '名前の由来',
        body: 'イタリアの作曲家ドメニコ・アルベルティの名に由来する呼称です。ただし、この伴奏形を最初に用いた人物であるという意味ではなく、後世に付けられた名称です。',
      },
    ],
    confusions: [
      { term: 'Arpeggio', slug: 'arpeggio', note: '和音を下から順に分散させる。アルベルティ・バスは上下に往復する。' },
      { term: 'Broken chord', slug: 'broken-chord', note: '和音を崩して弾くことの総称。アルベルティ・バスはその特定の型。' },
      { term: 'Ostinato', slug: 'ostinato', note: '同じ形を繰り返す音型。アルベルティ・バスも繰り返しを前提とする。' },
    ],
  },

  'altissimo': {
    lead: 'Altissimo は「極めて高い」。管楽器で、通常の音域を超えた超高音域を指します。',
    sections: [
      {
        heading: '通常の音域の外側',
        body: '管楽器の音域は、運指と倍音の組み合わせで決まる範囲があります。その範囲を超えた高さを出すには、唇の締め方、息の速度、喉の開き方を通常とは変えて、より高い倍音を選び出す必要があります。サクソフォンやクラリネットで用いられる語で、運指表に載っていない特殊な指使いが使われることもあります。',
      },
      {
        heading: '安定させにくい',
        body: 'この音域では、狙った倍音の隣の倍音が出てしまう危険が常にあります。音程も不安定になりやすく、楽器と奏者の組み合わせによって出やすさが変わります。作曲上は、この音域を使うかどうかで演奏の難度が大きく変わるため、書く側にも判断が要ります。',
      },
    ],
    confusions: [
      { term: 'Harmonics', slug: 'harmonics', note: '倍音。altissimo は高次の倍音を選び出して出す音域。' },
      { term: 'Register', slug: 'register', note: '音域。altissimo は最上部の音域を指す語。' },
    ],
  },

  'arcato': {
    lead: 'Arcato は「弓で弾く」。arco と同じ意味で、ピッツィカートの後に弓での演奏へ戻ることを指示します。',
    sections: [
      {
        heading: 'arco との関係',
        body: 'arco が「弓」という名詞、arcato がその形容詞的な形です。楽譜上の機能はどちらも同じで、pizzicato を解除して弓に戻す合図として書かれます。arco のほうが一般的な表記で、arcato はやや少ないですが意味の差はありません。',
      },
      {
        heading: '切り替えに要る時間',
        body: 'この指示が現れる箇所では、奏者は弓を持ち替える動作をします。ピッツィカートでは右手の指で弦をはじくため、弓は手に持ったまま、あるいは構えを変えて待機しています。弓での演奏に戻るには、弓を弦に正しく置き直す必要があり、わずかな時間がかかります。短い休符しかない箇所での切り替えは技術的な負担になります。',
      },
    ],
    confusions: [
      { term: 'Arco', slug: 'arco', note: '同じ意味。こちらのほうが一般的な表記。' },
      { term: 'Pizzicato', slug: 'pizzicato', note: '指で弦をはじく奏法。arcato はこれを解除する指示。' },
    ],
  },

  'articolato': {
    lead: 'Articolato は「はっきりと、明瞭に区切って」。一音一音が埋もれないように演奏することを求めます。',
    sections: [
      {
        heading: '切ることとは違う',
        body: 'この指示は音を短く切ることではありません。求められているのは、それぞれの音の始まりが聞き取れることです。レガートの中でも articolato は成立し、その場合はつながっていながら各音の輪郭が保たれている状態になります。切ることで明瞭さを作ると、フレーズが途切れます。',
      },
      {
        heading: '楽器ごとの手段',
        body: 'ピアノでは、指の打鍵の立ち上がりをそろえることで各音が聞こえます。速いパッセージで音が埋もれるのは、指の独立が足りず打鍵の瞬間が曖昧になるためです。管楽器では舌の使い方、弦楽器では弓の圧力の変化や指の押さえ替えの明確さが手段になります。声楽では子音をはっきり出すことが直接この指示に対応します。',
      },
      {
        heading: '語の由来',
        body: 'ラテン語の articulus（節、関節）に由来し、articulation（アーティキュレーション）と同じ語源です。関節で区切られているように、音の連なりに節目があることを表しています。',
      },
    ],
    confusions: [
      { term: 'Phrasing', slug: 'phrasing', note: 'フレーズのまとめ方。アーティキュレーションは音単位、フレージングは句単位。' },
      { term: 'Staccato', slug: 'staccato', note: '音を切る指示。articolato は切ることを求めていない。' },
    ],
  },

  'caesura': {
    lead: 'カエスーラは、音楽の流れを完全に断ち切る一瞬の沈黙です。五線の上に斜めの二重線（//）を書き、その形から「線路」とも呼ばれます。',
    sections: [
      {
        heading: '休符ではない',
        body: '休符は長さが決まっており、拍として数えられます。カエスーラは長さが指定されておらず、そこで時間の流れそのものが止まります。したがって、何拍分かを数えて次へ進むのではなく、間が十分に取れたと判断してから再開します。指揮者やアンサンブルでは、この判断を共有しておく必要があります。',
      },
      {
        heading: '記号の書かれ方',
        body: '斜めの二重線を五線の上部、あるいは五線を横切るように書きます。同じ位置に置かれる似た記号としてフェルマータがありますが、フェルマータは音や休符を延ばす指示で、カエスーラは流れを断つ指示です。両方が併記される箇所もあり、その場合は音を延ばした後で間を取ることになります。',
      },
      {
        heading: '演奏上の要点',
        body: '断ち切ることが目的なので、余韻を残して自然に消えるのではなく、明確に止めます。管楽器や声楽ではここで息を取れますが、間の長さを息継ぎの必要から決めると音楽的な意図と合わなくなることがあります。劇的な場面転換に使われる記号なので、間の長さがそのまま効果を決めます。短すぎれば断ち切った感じにならず、長すぎれば流れが失われます。',
      },
    ],
    confusions: [
      { term: 'Fermata', slug: 'fermata', note: '音や休符を延ばす指示。カエスーラは流れを断つ。' },
      { term: 'Generalpause', slug: 'generalpause', note: '全員が休止すること。G.P. と書かれる。' },
      { term: 'Breath mark', slug: 'breath-mark', note: '息継ぎの位置を示す記号。カエスーラより短い区切り。' },
    ],
  },

  'phrasing': {
    lead: 'フレージングは、旋律をどこで区切り、どこをひとまとまりとして扱うかという判断です。楽譜に書かれていない部分が多く残る領域です。',
    sections: [
      {
        heading: 'アーティキュレーションとの違い',
        body: 'アーティキュレーションは一音一音の切り方やつなぎ方を扱います。フレージングはより大きな単位で、いくつかの音をまとめて一つの句とし、その句のどこに向かってどこから収まるかを扱います。言葉に例えれば、アーティキュレーションが発音、フレージングが文の区切りと抑揚にあたります。',
      },
      {
        heading: '楽譜のスラーは必ずしもフレーズではない',
        body: '弦楽器の楽譜のスラーは、しばしば弓の使い方（一弓で弾く範囲）を示しています。管楽器では舌を使わない範囲を示します。これらは奏法上の区切りであり、音楽的なフレーズの区切りとは一致しないことがあります。フレーズの区切りを見つけるには、和声がどこで一区切りつくか、旋律の形がどこで反復や変化を見せるかを見ることになります。',
      },
      {
        heading: '小節線との関係',
        body: '小節線は拍の重心を示す線で、フレーズの区切りではありません。多くの曲でフレーズは小節線をまたいで始まり、小節の途中で終わります。小節ごとに区切って弾くと、音楽が細かく分断されます。フレーズがどこから始まってどこへ向かうかを先に決めれば、小節線は通過点になります。',
      },
      {
        heading: '判断の手がかり',
        body: 'フレーズの終わりは、和声が一区切りつく場所（終止）と重なることが多くあります。旋律が下降して落ち着く、音価が長くなる、同じ形が新たに始まる、といった箇所も手がかりです。歌詞のある曲なら、言葉の区切りがそのまま答えになります。器楽曲でも、旋律を声で歌ってみるとどこで息を取りたくなるかが分かり、それがフレーズの区切りと一致することが多くあります。',
      },
    ],
    confusions: [
      { term: 'Articolato', slug: 'articolato', note: '一音単位の明瞭さ。フレージングは句単位のまとめ方。' },
      { term: 'Legato', slug: 'legato', note: '音のつなぎ方。スラーが示すのは奏法で、フレーズの区切りとは別。' },
      { term: 'Breath mark', slug: 'breath-mark', note: '息継ぎの位置。フレーズの区切りと一致することが多い。' },
    ],
  },

  'attack': {
    lead: 'アタックは音の出だし、発音の瞬間を指します。音の性格の大部分がこの一瞬で決まります。',
    sections: [
      {
        heading: '最初の一瞬が音色を決める',
        body: '同じ楽器の同じ高さの音でも、出だしの立ち上がりが違えば別の音として聞こえます。人間の耳は音の始まりの数十ミリ秒から多くの情報を取り出しているため、そこでの違いが音色の違いとして認識されます。強弱記号やアーティキュレーション記号が指示しているのは、多くの場合この立ち上がりの質です。',
      },
      {
        heading: '楽器ごとの操作',
        body: 'ピアノでは打鍵の速度と、指が鍵に触れる瞬間の状態で決まります。鍵の上に指を置いてから押すか、上から落とすかで立ち上がりが変わります。弦楽器では弓を弦に置いてから動かすか、動きながら接触させるかで違います。管楽器では舌の使い方と息の到達のタイミング、声楽では子音の処理が対応します。打楽器では撥の速度と当てる位置です。',
      },
      {
        heading: 'アンサンブルでのそろえ方',
        body: '複数の奏者が同時に音を出すとき、音が鳴った瞬間をそろえようとしても遅れます。楽器によって、動作を始めてから音が鳴るまでの時間が違うためです。管楽器は息が管を通る時間があり、弦楽器は弓が弦を動かし始める時間があります。実際には、音が鳴る瞬間を予測して動作を先に始めることでそろえます。指揮の動きは、この予測のための共通の基準として働きます。',
      },
    ],
    confusions: [
      { term: 'Release', slug: 'release', note: '音の終わり方。アタックと対になる。' },
      { term: 'Accent', slug: 'accent', note: 'その音を際立たせる指示。アタックの操作がその手段になる。' },
    ],
  },

  'release': {
    lead: 'リリースは音の終わり方、消音の瞬間の扱いです。アタックと同じくらい音楽の質を決めますが、意識されにくい部分です。',
    sections: [
      {
        heading: '終わりも音の一部',
        body: '音が終わる瞬間の処理は、その音の性格を決めます。急に切れば断ち切った印象、徐々に減らせば余韻が残ります。同じ長さの音でも、終わり方が違えば聞こえ方が違います。休符の直前や、フレーズの終わりでは、この処理が音楽の区切りの質を決めます。',
      },
      {
        heading: '楽器ごとの操作',
        body: 'ピアノでは、鍵を離す速度でダンパーが弦に戻る速さが変わり、音の切れ方が変わります。素早く離せば鋭く切れ、ゆっくり離せば余韻が残ります。弦楽器では弓を弦から離すか、圧力を抜いて止めるかで違います。管楽器では舌で止めるか息を止めるかで、声楽では母音を切るか子音を付けるかで変わります。',
      },
      {
        heading: 'アンサンブルでそろえる',
        body: '音の終わりをそろえることは、始まりをそろえることより難しい場合があります。始まりには指揮や合図がありますが、終わりには明確な合図がないことが多いためです。長い音の終わりでは、あらかじめどの拍のどこで切るかを決めておく必要があります。フェルマータや延ばした音の終わりは、指揮者の合図で処理されます。',
      },
    ],
    confusions: [
      { term: 'Attack', slug: 'attack', note: '音の出だし。リリースと対になる。' },
      { term: 'Tenuto', slug: 'tenuto', note: '音を十分に保つ指示。リリースの位置が問題になる。' },
    ],
  },

  'register': {
    lead: 'レジスターは音域を指す語です。同じ楽器でも、音域によって音色と鳴りやすさが大きく変わります。',
    sections: [
      {
        heading: '音域ごとに別の楽器のように鳴る',
        body: 'クラリネットは低音域と高音域で音色の性格がはっきり異なり、その境目には運指の切り替わりがあります。声楽では、地声に近い音域と頭に響く音域があり、その移り目を滑らかにつなぐことが技術上の課題になります。ピアノでは低音域の弦が太く長いため倍音が多く、高音域は減衰が速くなります。音域は単に高さの範囲ではなく、音の性質が変わる区分です。',
      },
      {
        heading: '編曲での意味',
        body: 'どの楽器のどの音域を使うかが、響きの設計そのものになります。同じ和音でも、各楽器がそれぞれ得意な音域にいるかどうかで鳴り方が変わります。低音域で3度を狭く重ねると濁りやすいという原則は、その音域の倍音構造から来ています。',
      },
      {
        heading: 'クラリネットのレジスターキー',
        body: 'クラリネットには、押すと音が高い倍音へ切り替わるキーがあります。これをレジスターキーと呼びます。この楽器では、そのキーによって音域が構造的に区分されています。',
      },
    ],
    confusions: [
      { term: 'Range', slug: 'range', note: '出せる最低音から最高音までの幅。レジスターはその中の区分。' },
      { term: 'Altissimo', slug: 'altissimo', note: '通常の音域を超えた最上部の音域。' },
    ],
  },

  'gehalten': {
    lead: 'Gehalten はドイツ語で「保持して」。イタリア語の sostenuto に相当し、音を短く切らずに長さを十分に保つことを求めます。',
    sections: [
      {
        heading: '長さと支え',
        body: '書かれた音価いっぱいまで音を保つことが基本ですが、この指示が求めているのは長さだけではありません。保っているあいだ、音が力を失わないことも含まれます。音を出した後に息や弓の支えが抜けると、長さは足りていても保持されている印象になりません。',
      },
      {
        heading: '関連するドイツ語の指示',
        body: 'gehalten の程度を強めた形として、良く保持することを求める表現が使われることがあります。また、breit（幅広く）や getragen（担われるように、荘重に）といった語も、音を十分に保つ方向の指示として現れます。ドイツ語圏の楽譜では、これらの語がイタリア語の指示と混在して書かれます。',
      },
    ],
    confusions: [
      { term: 'Sostenuto', slug: 'sostenuto', note: 'イタリア語で同じ内容の指示。' },
      { term: 'Tenuto', slug: 'tenuto', note: '個々の音を保つ記号。gehalten は区間に対する指示。' },
    ],
  },

  'betont': {
    lead: 'Betont はドイツ語で「アクセントを置いて」。特定の音に重みを加えて際立たせることを求めます。',
    sections: [
      {
        heading: 'イタリア語の marcato に相当',
        body: '一連の音を一つずつ際立たせるという内容で、marcato に近い指示です。音量を上げることだけが方法ではなく、音の立ち上がりを明確にし、わずかに長く保つことでも重みは伝わります。ドイツ語圏の楽譜では、markiert（際立たせて）や hervortretend（前へ出て）といった語も同じ方向の指示として現れます。',
      },
      {
        heading: '拍節の強調との違い',
        body: 'betont が書かれている箇所では、多くの場合、通常の拍節では強くないはずの位置が強調されます。したがって、この指示に従うとリズムの重心が移動します。すべての音を均等に強くするのではなく、指示のある音だけを浮かび上がらせることで、書かれた意図が伝わります。',
      },
    ],
    confusions: [
      { term: 'Marcato', slug: 'marcato', note: 'イタリア語で同じ方向の指示。' },
      { term: 'Accent', slug: 'accent', note: 'アクセント記号。一音ごとの強調を示す。' },
    ],
  },

  'bocca-chiusa': {
    lead: 'Bocca chiusa は「口を閉じて」。合唱で口を閉じたまま歌う、いわゆるハミングの指示です。',
    sections: [
      {
        heading: '響きの性質',
        body: '口を閉じているため音は鼻腔から抜け、口を開けた発声より柔らかく、輪郭のぼやけた響きになります。母音の色がなくなるため、言葉としての情報が消え、純粋な音の層として機能します。他の声部の歌う旋律の背景を作る目的で使われることが多くあります。',
      },
      {
        heading: '歌う上での要点',
        body: '口を閉じると音量が出にくくなりますが、息の支えを緩めると音程が下がり、響きも失われます。口の中の空間を広く保ったまま唇だけを閉じることで、鼻腔へ抜ける響きが確保できます。音程は開けた発声より取りにくくなるため、正確さの確認が必要です。',
      },
      {
        heading: '記譜',
        body: '楽譜には歌詞の代わりにこの指示が書かれ、母音は示されません。音符だけが並ぶ箇所にこの語があれば、ハミングで歌う区間です。フランス語では bouche fermée が同じ意味で使われます。',
      },
    ],
    confusions: [
      { term: 'Bouche fermée', slug: 'bouche-fermée', note: 'フランス語で同じ意味。' },
      { term: 'Sotto voce', slug: 'sotto-voce', note: '押し殺した声。口は開けたまま抑える。' },
    ],
  },

  'bouche-fermée': {
    lead: 'Bouche fermée はフランス語で「閉じた口」。イタリア語の bocca chiusa と同じく、口を閉じたまま歌うハミングの指示です。',
    sections: [
      {
        heading: 'フランス語圏の楽譜で',
        body: 'フランス語で書かれた声楽曲・合唱曲の楽譜に現れます。指示の内容は bocca chiusa と同じで、口を閉じて鼻腔へ響かせる発声を求めます。母音の色がなくなり、言葉としての情報を持たない柔らかな音の層になります。',
      },
      {
        heading: '使われた作品',
        body: 'ドビュッシーの管弦楽曲《夜想曲》の第3曲〈シレーヌ〉で、女声合唱が言葉を持たずに歌う部分があります。声を器楽的な音色として扱う書法の例として知られています。',
      },
    ],
    confusions: [
      { term: 'Bocca chiusa', slug: 'bocca-chiusa', note: 'イタリア語で同じ意味。' },
    ],
  },

  'dämpfer': {
    lead: 'Dämpfer はドイツ語で弱音器（ミュート）。「mit Dämpfer」で装着、「ohne Dämpfer」で外すことを指示します。',
    sections: [
      {
        heading: '楽器によって指すものが違う',
        body: '弦楽器では駒に取り付ける弱音器、金管楽器ではベルに差し込む弱音器を指します。ピアノでは、弦の振動を止める装置であるダンパーがこの語にあたり、ダンパーペダルはこの装置を弦から離すペダルです。同じ語が、楽器によって異なる装置を指します。楽譜でこの語を見たら、その楽器で何を指しているかを確認する必要があります。',
      },
      {
        heading: '音量ではなく音色が変わる',
        body: '弱音器の主な効果は音量の低下ですが、演奏上より重要なのは音色の変化です。弦楽器では倍音が減って鼻にかかったような響きになり、金管楽器では弱音器の種類によって鋭くもくぐもった音にもなります。したがって、この指示は「小さく」ではなく「別の音色に」と読むほうが実際に近くなります。',
      },
      {
        heading: '装着の時間',
        body: '弱音器の着脱には時間がかかります。作曲者はそのための休符を用意しますが、短い場合は演奏上の負担になります。オーケストラの楽譜でこの指示が現れる箇所では、前後にどれだけ余裕があるかが実務的な問題になります。',
      },
    ],
    confusions: [
      { term: 'Con sordino', slug: 'con-sordino', note: 'イタリア語で弱音器を付ける指示。' },
      { term: 'Mute', slug: 'mute', note: '英語で弱音器。金管楽器では多様な種類がある。' },
      { term: 'Stopped', slug: 'stopped', note: 'ホルンでベルを手で塞ぐ奏法。弱音器とは別の操作。' },
    ],
  },

  'mute': {
    lead: 'ミュートは楽器に装着して音量と音色を変える器具です。金管楽器では種類が多く、それぞれ別の音色を持ちます。',
    sections: [
      {
        heading: '金管楽器のミュートの種類',
        body: 'ストレートミュートは円錐形で、鋭く金属的な音になります。カップミュートは先端にカップが付いており、丸くくぐもった音になります。ワウワウミュート（ハーマンミュート）は中央に管が通っており、これを手で開閉すると「ワウワウ」という音の変化が生まれます。プランジャーは手で持ってベルの前を開閉します。それぞれ別の楽器のような音色になるため、楽譜では種類が指定されます。',
      },
      {
        heading: '弦楽器のミュート',
        body: '駒に取り付けるゴムや金属の器具で、駒の振動を抑えます。音量が下がるとともに倍音が減り、輪郭のぼやけた響きになります。金管楽器のミュートほど種類は多くありませんが、練習用の重いものと演奏用の軽いものは効果が大きく違います。',
      },
      {
        heading: '演奏上の要点',
        body: '装着すると楽器の鳴りが変わるため、同じ吹き方・弾き方では音程や反応が変わります。特に金管楽器のミュートは音程を変化させるものがあり、装着した状態での調整が必要です。また着脱に時間がかかるため、楽譜の指示がある箇所では前後の余裕を確認しておきます。',
      },
    ],
    confusions: [
      { term: 'Con sordino', slug: 'con-sordino', note: 'イタリア語で弱音器を付ける指示。' },
      { term: 'Dämpfer', slug: 'dämpfer', note: 'ドイツ語で弱音器。' },
      { term: 'Open', slug: 'open', note: '弱音器を外す指示。' },
      { term: 'Stopped', slug: 'stopped', note: 'ホルンで手をベルに差し込む奏法。器具は使わない。' },
    ],
  },

  'muted': {
    lead: 'Muted は「弱音器を使って」。装着によって音量が下がるだけでなく、音色そのものが変わります。',
    sections: [
      {
        heading: '色を変える指示として読む',
        body: 'この指示を「小さく」と読むと、意図の半分を取り落とします。弱音器を付けた音は、倍音の構成が変わって鼻にかかったようなくぐもった響きになります。作曲者が求めているのは多くの場合この音色であり、音量の低下はその副産物です。したがって、装着した上でしっかり鳴らすことが求められる箇所もあります。',
      },
      {
        heading: '解除の指示',
        body: 'muted の区間が終わったら、open（開放）や senza sordino（弱音器なしで）といった指示で解除されます。解除の指示が書かれていない場合でも、楽章の変わり目やセクションの区切りで外すのが自然な箇所があります。',
      },
    ],
    confusions: [
      { term: 'Mute', slug: 'mute', note: '弱音器そのもの。金管楽器では種類が多い。' },
      { term: 'Open', slug: 'open', note: '弱音器を外して楽器本来の響きに戻す指示。' },
      { term: 'Con sordino', slug: 'con-sordino', note: 'イタリア語で同じ内容の指示。' },
    ],
  },

  'open': {
    lead: 'Open は弱音器を外し、楽器本来の響きに戻す指示です。ホルンでは、ベルに差し込んでいた手を離すことも指します。',
    sections: [
      {
        heading: '何を解除するのか',
        body: 'ミュートを装着していた箇所の後に置かれ、それを外すことを示します。ホルンの場合は、stopped（ベルを手で塞ぐ）の解除としても使われます。楽器によって解除の対象が違うため、直前にどの指示が出ていたかを見て判断します。',
      },
      {
        heading: '音色の切り替わりが目的',
        body: 'この指示が置かれた箇所では、音色が明確に変わります。したがって、外した後の音は開放的で鋭くなります。前の区間の音色を引きずらず、切り替わったことが聞き取れるように鳴らすのが基本です。',
      },
      {
        heading: '記譜の別の意味',
        body: 'ワウワウミュートを使う箇所では、+（閉）と o（開）の記号でミュートの開閉を細かく指示することがあります。この o は open の略で、器具を外す指示ではなく、手で穴を開けた状態を指します。ジャズやビッグバンドの楽譜で頻繁に現れます。',
      },
    ],
    confusions: [
      { term: 'Mute', slug: 'mute', note: '弱音器。open はこれを外す指示。' },
      { term: 'Stopped', slug: 'stopped', note: 'ホルンで手をベルに深く差し込む奏法。open はその解除でもある。' },
      { term: 'Senza', slug: 'senza', note: '「〜なしで」。senza sordino も弱音器を外す指示。' },
    ],
  },

  'stopped': {
    lead: 'ホルンで右手をベルに深く差し込んで吹く奏法です。記号は音符の上の + で示されます。音量が抑えられ、刺すような鋭い音色になります。',
    sections: [
      {
        heading: '音程が上がる',
        body: '手を深く差し込むと、管の実効的な長さが変わり、音程が約半音上がります。そのため奏者は、半音低い運指を使って書かれた音を出します。この補正は奏法の一部であり、楽譜には書かれた音そのものが記されています。ホルンの奏者にとっては前提知識ですが、他の楽器の奏者には見えない操作です。',
      },
      {
        heading: '手の位置による調整',
        body: 'ホルンでは、通常の演奏でも右手をベルの中に入れています。手の位置と開き方を変えることで音色と音程が微妙に変わり、これは常に使われている技術です。stopped はこの操作を極端まで進めたもので、通常の状態との連続した関係にあります。',
      },
      {
        heading: 'ミュートとの違い',
        body: 'ストップミュートという器具を使って同様の効果を得る方法もありますが、手による stopped とは音色が異なります。器具を使う場合は着脱の時間が必要で、手による方法は即座に切り替えられます。速い切り替えが必要な箇所では手による方法が使われます。',
      },
      {
        heading: '記号',
        body: '+ が閉、o が開を示します。この記号はワウワウミュートの開閉にも使われるため、楽器によって意味が違います。ホルンのパート譜での + は、手をベルに差し込むことを指します。',
      },
    ],
    confusions: [
      { term: 'Mute', slug: 'mute', note: '器具による弱音。stopped は手で行う。' },
      { term: 'Open', slug: 'open', note: '手を離して通常の状態に戻す指示。' },
      { term: 'Horn', slug: 'horn', note: 'この奏法を用いる楽器。' },
    ],
  },

  'double-tongue': {
    lead: 'ダブルタンギングは「トゥ・ク」のように舌の前と後ろを交互に使い、速い音の連続を切り分ける管楽器の技法です。',
    sections: [
      {
        heading: 'なぜ2種類の動きを使うのか',
        body: '通常のタンギングは舌の先を使って「トゥ」の動きを繰り返します。この動きには速度の限界があり、速いパッセージでは追いつきません。舌の後ろを使う「ク」の動きを交互に挟むと、1回の往復で2音を切れるため、実質的に倍の速度で処理できます。',
      },
      {
        heading: '2つの音の質をそろえる',
        body: '「トゥ」と「ク」は舌の使う部位が違うため、そのままでは音の立ち上がりが違って聞こえます。特に「ク」は喉に近い位置で作るため弱く鈍くなりやすく、練習では「ク」を単独で繰り返して質を上げることが行われます。2つの音が同じに聞こえて初めて、この技法は連続した音の列として機能します。',
      },
      {
        heading: 'トリプルタンギング',
        body: '3つずつの音の連続では「トゥ・トゥ・ク」または「トゥ・ク・トゥ」の組み合わせが使われます。これをトリプルタンギングと呼びます。どちらの並びを使うかは奏者や教則本によって異なります。',
      },
      {
        heading: '使う楽器',
        body: 'フルート、トランペット、ホルン、トロンボーンなど多くの管楽器で使われます。リード楽器では、口の中の状態がリードの振動に影響するため、この技法の使い方が金管楽器とは異なります。',
      },
    ],
    confusions: [
      { term: 'Flutter-tongue', slug: 'flutter-tongue', note: '舌を震わせて唸る音を出す技法。速度のためではなく音色のため。' },
      { term: 'Slap tongue', slug: 'slap-tongue', note: '舌をリードから急に離して打撃音を出す技法。' },
    ],
  },

  'flutter-tongue': {
    lead: 'フラッタータンギングは、巻き舌をしながら楽器を吹く技法です。息の流れが舌の振動で断続し、唸るような響きが生まれます。',
    sections: [
      {
        heading: '巻き舌の動きを使う',
        body: 'イタリア語やドイツ語の R の発音のように舌先を震わせながら、通常どおり息を送ります。舌が息の通り道で振動するため、音が細かく断続します。トレモロのような効果になりますが、奏者が意図的に刻んでいるのではなく、舌の振動によって自動的に生じるものです。',
      },
      {
        heading: 'できない奏者もいる',
        body: '巻き舌は言語によって使う機会が異なり、舌先を震わせられない人もいます。その場合は、喉を使ってうがいのように震わせる方法（喉によるフラッター）が代替として用いられます。舌によるものと喉によるものでは音の質が違います。',
      },
      {
        heading: '楽器ごとの使いやすさ',
        body: 'フルートでは息の流れが直接音になるため、この技法が明確に効きます。金管楽器でも使われます。リード楽器では、舌の振動がリードの振動に干渉するため、フルートほど扱いやすくはありません。',
      },
      {
        heading: '記譜',
        body: 'トレモロのような複数の斜線を音符の軸に書き、その上に flutter tongue や Flatterzunge（ドイツ語）などの語を添えます。イタリア語では frullato と呼ばれます。',
      },
    ],
    confusions: [
      { term: 'Frullato', slug: 'frullato', note: 'イタリア語で同じ技法。' },
      { term: 'Double tongue', slug: 'double-tongue', note: '速度のための技法。フラッターは音色のため。' },
      { term: 'Tremolo', slug: 'tremolo', note: '記譜が似るが、音の刻みを奏者が作る点が違う。' },
    ],
  },

  'frullato': {
    lead: 'Frullato はイタリア語で、フラッタータンギングを指します。巻き舌をしながら吹くことで、唸るような響きを作る技法です。',
    sections: [
      {
        heading: '呼び名の違い',
        body: '英語では flutter tongue、ドイツ語では Flatterzunge、イタリア語では frullato。同じ技法を指す語です。楽譜に書かれる言語は作曲者によって異なります。',
      },
      {
        heading: '用いられた作品',
        body: 'リヒャルト・シュトラウスの管弦楽作品、マーラーの交響曲などでこの技法が用いられています。管楽器に通常とは異なる音色を求める箇所で、色彩上の効果として使われます。',
      },
    ],
    confusions: [
      { term: 'Flutter-tongue', slug: 'flutter-tongue', note: '英語での同じ技法。詳しい説明はこちら。' },
    ],
  },

  'slap-tongue': {
    lead: 'スラップタンギングは、舌をリードに押し付けてから急に引き離し、「パチッ」という打撃的な音を出す技法です。',
    sections: [
      {
        heading: '仕組み',
        body: '舌をリードに密着させると、そこに吸着が生じます。舌を急に引き離すとその吸着が破れ、リードが跳ねて打撃音が発生します。息を送る前の段階で音が出るため、通常の発音とはまったく異なる立ち上がりになります。',
      },
      {
        heading: '2つの使い方',
        body: '打撃音だけを出して音程を持たせない使い方と、打撃音の直後に息を送って通常の音につなげる使い方があります。前者は打楽器のような点として機能し、後者は極端に鋭いアタックを持った音になります。楽譜の指示や文脈で判断します。',
      },
      {
        heading: '使う楽器',
        body: 'サクソフォン、クラリネットなどのシングルリード楽器で用いられます。リードが舌に接触できる構造が前提のため、金管楽器やフルートではこの技法は成立しません。',
      },
    ],
    confusions: [
      { term: 'Key-click', slug: 'key-click', note: 'キイを叩く打撃音。息もリードも使わない。' },
      { term: 'Double tongue', slug: 'double-tongue', note: '速度のための舌の技法。' },
    ],
  },

  'key-click': {
    lead: 'キークリックは、管楽器で息を入れずにキイを強く押して、その打撃音だけを鳴らす技法です。',
    sections: [
      {
        heading: '楽器を打楽器として使う',
        body: '管楽器のキイは金属で、押すと管体に当たって音が出ます。通常の演奏ではこの音は雑音として抑えられますが、この技法ではそれを目的として使います。息を送らないため音程は持たず、管の長さに応じたわずかな共鳴を伴う打撃音になります。',
      },
      {
        heading: '音量の制約',
        body: 'キイの打撃音は本来小さく、オーケストラの中では聞こえません。この技法が効果を持つのは、独奏曲や小さな編成、あるいは周囲が沈黙している箇所です。作曲者がこの音を使う場面は、その音量を計算して選ばれています。',
      },
      {
        heading: '記譜',
        body: '通常の音符ではなく、×印の音符頭やその他の特殊な記号で示され、key click や slap といった語が添えられます。記譜の方法は作曲者によって異なるため、楽譜の凡例を確認する必要があります。',
      },
    ],
    confusions: [
      { term: 'Slap tongue', slug: 'slap-tongue', note: 'リードを使う打撃音。キークリックはキイの機械音。' },
      { term: 'Dead note', slug: 'dead-note', note: '音程を持たない打撃音。弦楽器で用いられる。' },
    ],
  },

  'multiphonics': {
    lead: 'マルチフォニックスは、単音しか出せないはずの管楽器から同時に複数の音を鳴らす技法です。',
    sections: [
      {
        heading: '仕組み',
        body: '管楽器は通常、一つの倍音列の中から一つの音を選び出して鳴らします。特殊な運指と息・唇の制御によって、複数の倍音を同時に不安定な状態で成立させると、いくつかの音が重なって聞こえます。協和した和音になることは少なく、多くの場合はうなりを含んだ複雑な響きになります。',
      },
      {
        heading: '安定させにくい',
        body: 'どの運指でどの組み合わせが出るかは、楽器の個体、マウスピース、リードによって変わります。同じ運指でも奏者によって結果が違うため、作曲者は運指を指定し、出る音を近似的に記譜することが一般的です。実際の演奏では、奏者と作曲者が実験して決める場合もあります。',
      },
      {
        heading: '使う楽器',
        body: 'サクソフォン、クラリネット、フルート、オーボエ、金管楽器で用いられます。フルートでは、通常の運指の一部を変えることで比較的容易に出る組み合わせがあります。',
      },
      {
        heading: '声との併用',
        body: '楽器を吹きながら同時に声を出すことでも複数の音が鳴りますが、これは別の技法です。マルチフォニックスは楽器の管の中で複数の振動を成立させるものです。',
      },
    ],
    confusions: [
      { term: 'Harmonics', slug: 'harmonics', note: '倍音。マルチフォニックスは複数の倍音を同時に鳴らす。' },
      { term: 'Singing while playing', slug: 'singing-while-playing', note: '声と楽器の音を重ねる別の技法。' },
    ],
  },

  'prepared-piano': {
    lead: 'プリペアド・ピアノは、ピアノの弦にネジ、ゴム、木片などを挟んで音色を変えた状態で演奏する方法です。',
    sections: [
      {
        heading: '何が起きるか',
        body: '弦に物を挟むと、その弦の振動の仕方が変わります。挟む物の材質と、弦のどの位置に挟むかによって、金属的な音、打楽器のような音、本来より高いまたは低い音程など、さまざまな結果になります。挟む位置が弦の振動の節に近いか腹に近いかで効果が大きく違うため、位置の指定が重要です。',
      },
      {
        heading: 'ジョン・ケージによる考案',
        body: 'アメリカの作曲家ジョン・ケージが1940年前後にこの方法を用いた作品を書いています。《ソナタとインターリュード》は、多数の弦に細かく指定された物を挟んで演奏する作品です。',
      },
      {
        heading: '準備に時間がかかる',
        body: '演奏の前に、楽譜の指示に従って弦に物を挟む作業が必要です。ケージの作品では挟む物と位置が詳細に指定されており、この準備に長い時間を要します。また、演奏中に挟んだ物がずれることがあり、その管理も演奏の一部になります。楽器を傷める可能性があるため、使用するピアノについて所有者の了解が必要です。',
      },
    ],
    confusions: [
      { term: 'String piano', slug: 'string-piano', note: '弦を直接触って演奏する方法。物を挟まない。' },
    ],
  },

  'string-piano': {
    lead: 'ストリング・ピアノは、鍵盤を使わずにピアノの弦を直接触って音を出す演奏法です。内部奏法とも呼ばれます。',
    sections: [
      {
        heading: 'どのように音を出すか',
        body: '弦を指ではじく、指の腹や爪でこする、手のひらでミュートする、撥や他の物で叩く、といった方法があります。それぞれ別の音色になります。弦をはじくと減衰の短い撥弦楽器のような音、こすると持続音、手で押さえながら鍵盤を弾くと倍音だけが残る音になります。',
      },
      {
        heading: 'ダンパーの扱い',
        body: 'ピアノの弦は、鍵を押していない状態ではダンパーが触れていて振動しません。したがって内部奏法では、ダンパーペダルを踏んで弦を解放しておく必要があります。ペダルを離せば音が止まるため、ペダルが音の長さを制御することになります。',
      },
      {
        heading: '実務上の注意',
        body: 'グランドピアノの蓋を開けて弦に手を入れるため、アップライトピアノでは構造上できないか、できる範囲が限られます。弦や響板に触れるため、楽器を傷める可能性があり、使用するピアノについて所有者の了解が必要です。演奏者は立ち上がるか身を乗り出す姿勢になるため、鍵盤との行き来がある曲では動作の設計も要ります。',
      },
    ],
    confusions: [
      { term: 'Prepared piano', slug: 'prepared-piano', note: '弦に物を挟んで音色を変える方法。鍵盤で演奏する。' },
      { term: 'Harmonics', slug: 'harmonics', note: '弦を軽く押さえて倍音を出すこと。内部奏法でも使われる。' },
    ],
  },

  'bartók-pizzicato': {
    lead: 'バルトーク・ピッツィカートは、弦を指で強くつまみ上げて離し、指板に叩きつけるようにして鋭い打撃音を出す奏法です。',
    sections: [
      {
        heading: '通常のピッツィカートとの違い',
        body: '通常のピッツィカートは弦を横方向にはじきます。この奏法では弦を垂直方向に引き上げて離すため、弦が指板に当たり、「パチン」という打撃音が加わります。音程は保たれますが、それに強い打撃の要素が重なります。',
      },
      {
        heading: '記号',
        body: '音符の上に、円の上部に短い縦線を付けた記号（+ の上半分のような形）で示されます。この記号はバルトークの作品で用いられ、その名で呼ばれるようになりました。スナップ・ピッツィカートという呼び方もあります。',
      },
      {
        heading: '演奏上の要点',
        body: '強い力で弦を引くため、弦を傷める可能性があります。また、力任せに行うと音程が上がったり弦が指板に当たり続けて雑音になったりします。引き上げる高さと離す速さで打撃の強さを調整します。この奏法は音量が大きくなるため、アンサンブルの中での位置づけを確認しておく必要があります。',
      },
    ],
    confusions: [
      { term: 'Pizzicato', slug: 'pizzicato', note: '指で弦をはじく奏法。バルトーク・ピッツィカートは垂直に引く。' },
      { term: 'Snap pizzicato', slug: 'snap-pizzicato', note: '同じ奏法の別の呼び名。' },
    ],
  },

  'snap-pizzicato': {
    lead: 'スナップ・ピッツィカートは、バルトーク・ピッツィカートと同じ奏法の別名です。弦を垂直に引き上げて離し、指板に当たる打撃音を伴わせます。',
    sections: [
      {
        heading: '呼び名の違い',
        body: 'バルトークの作品で用いられた記号と結びついて「バルトーク・ピッツィカート」と呼ばれ、動作の性質から「スナップ・ピッツィカート」とも呼ばれます。同じ奏法を指す語で、内容の違いはありません。楽譜に書かれる呼び名は作曲者や版によって異なります。',
      },
    ],
    confusions: [
      { term: 'Bartók pizzicato', slug: 'bartók-pizzicato', note: '同じ奏法。詳しい説明はこちら。' },
      { term: 'Pizzicato', slug: 'pizzicato', note: '通常のピッツィカート。弦を横にはじく。' },
    ],
  },

  'artificial-harmonics': {
    lead: '人工ハーモニクスは、弦楽器で一本の指で弦を押さえて音の高さを決め、別の指で軽く触れて倍音を出す奏法です。',
    sections: [
      {
        heading: '自然ハーモニクスとの違い',
        body: '自然ハーモニクスは、開放弦の特定の位置に指を軽く触れて出します。この場合、出せる音は開放弦の倍音列に限られます。人工ハーモニクスでは、まず1本の指（多くは1の指）でしっかり押さえて弦の長さを短くし、そこを新しい開放弦とみなします。その上で別の指（多くは4の指）を4度上の位置に軽く触れると、押さえた音の2オクターブ上が出ます。押さえる位置を動かせるため、任意の音で倍音を出せます。',
      },
      {
        heading: '記譜',
        body: '押さえる音を通常の音符で、触れる位置をひし形の音符頭で示します。実際に鳴る音は書かれておらず、演奏者が計算します。作曲者が実音を小さく併記することもあります。4度の間隔が最も一般的ですが、5度や長3度の位置に触れる書き方もあり、それぞれ別の倍音が出ます。',
      },
      {
        heading: '演奏上の要点',
        body: '押さえる指の力と触れる指の力を同時に別々に制御する必要があります。触れる指が強すぎると通常の音になり、弱すぎると鳴りません。また、二つの指の間隔を正確に保ったまま位置を移動させるため、高い音域では間隔が狭くなり難度が上がります。弓は速く軽く動かすと倍音が出やすくなります。',
      },
    ],
    confusions: [
      { term: 'Harmonics', slug: 'harmonics', note: '倍音全般。人工ハーモニクスはその一つの出し方。' },
      { term: 'Flautando', slug: 'flautando', note: 'フルートのような音色で弾く指示。倍音が多い響きになる。' },
    ],
  },

  'broken-chord': {
    lead: '和音を同時に鳴らさず、構成音を分けて鳴らすことを指します。アルペッジョもこの一種ですが、より広い範囲を含む語です。',
    sections: [
      {
        heading: 'アルペッジョとの関係',
        body: 'アルペッジョは和音を下から上へ（または上から下へ）順に鳴らすことで、進む方向が決まっています。broken chord は順序を問わず、構成音を分けて鳴らすことの総称です。アルベルティ・バスのように上下に往復する形も、順序が不規則な形も含まれます。',
      },
      {
        heading: 'なぜ和音を崩すのか',
        body: '和音を同時に鳴らすと一つの塊になりますが、分けて鳴らすと時間の中に広がり、リズムが生まれます。また、鍵盤楽器では持続力の制約から、和音を保つより分散させたほうが響きが続きます。手が届かない広い和音を分けて鳴らすという実務的な理由もあります。',
      },
      {
        heading: '演奏上の要点',
        body: '分けて鳴らしても、聴き手には一つの和音として届く必要があります。個々の音を等しく強調すると、和音ではなく旋律として聞こえてしまいます。最低音（和声の土台）と、旋律に関わる音を残し、他は響きの一部として扱うのが基本です。ペダルの使い方が、分散した音を一つの和音にまとめるかどうかを左右します。',
      },
    ],
    confusions: [
      { term: 'Arpeggio', slug: 'arpeggio', note: '和音を順に鳴らす。方向が決まっている。' },
      { term: 'Alberti bass', slug: 'alberti-bass', note: '低・高・中・高と往復する特定の分散形。' },
    ],
  },

  'tacet': {
    lead: 'Tacet はラテン語で「黙る」。その楽章やセクションのあいだ、まったく演奏しないことを示します。',
    sections: [
      {
        heading: '休符とは違う書き方',
        body: '長い休みを休符で書くと紙面を占めるため、パート譜ではその区間に tacet と書いて省略します。楽章全体を休む場合は、楽章番号とともに「II. Tacet」のように書かれます。休符ではなく文字による指示なので、拍を数えるのではなく、次に出る箇所まで待つことになります。',
      },
      {
        heading: '出る箇所を把握しておく',
        body: 'tacet の区間が長いと、いつ演奏に戻るかを見失う危険があります。パート譜には、再開の前にキュー（他の楽器の旋律の断片）が書かれることがあり、これを手がかりに待ちます。オーケストラの打楽器やハープなど、出番が限られる楽器では、この待ち方が実務上の技術になります。',
      },
      {
        heading: 'tacet al fine',
        body: '「終わりまで休み」を意味し、その先はもう出番がないことを示します。これがあれば、その楽器の奏者はそこで演奏を終えます。',
      },
    ],
    confusions: [
      { term: 'Generalpause', slug: 'generalpause', note: '全員が同時に休止すること。tacet は特定のパートの長い休み。' },
      { term: 'Fine', slug: 'fine', note: '曲の終わり。tacet al fine はそこまで休むことを示す。' },
    ],
  },

  'breath-mark': {
    lead: 'ブレスマークは息継ぎの位置を示す記号です。五線の上にアポストロフィのような小さな記号（’）や v の形で書かれます。',
    sections: [
      {
        heading: '管楽器と声楽で',
        body: '息を使う楽器では、どこで息を取るかがフレーズの区切りと直結します。作曲者や編曲者が位置を指定することもありますが、多くは奏者が判断し、書き込みます。合唱やアンサンブルでは、全員が同じ位置で息を取るかどうかを決めておく必要があります。ずらして取れば途切れない持続音を作れます。',
      },
      {
        heading: '弦楽器やピアノでも意味を持つ',
        body: '息を使わない楽器でも、この記号が書かれることがあります。この場合は、実際に息を吸うのではなく、フレーズの区切りとしてわずかな間を取ることを指します。息を取るのと同じ時間的な区切りを作ることで、音楽の呼吸が伝わります。ピアノでは手首を持ち上げる動作、弦楽器では弓を離す動作がこれに対応します。',
      },
      {
        heading: '時間はどこから取るか',
        body: '息継ぎのための時間は、直前の音を短くして作るのが基本です。次の音を遅らせるとテンポが崩れます。ただし、フレーズの終わりで意図的に間を取る場合は別です。どちらの扱いなのかは、その箇所がフレーズの内部か区切りかで決まります。',
      },
    ],
    confusions: [
      { term: 'Caesura', slug: 'caesura', note: '流れを完全に断ち切る記号。ブレスマークより長い間。' },
      { term: 'Phrasing', slug: 'phrasing', note: 'フレーズのまとめ方。息継ぎの位置はその判断に含まれる。' },
    ],
  },

  'simile': {
    lead: 'Simile は「同様に」。直前と同じ奏法や音型を続けることを示し、記譜の繰り返しを省略します。',
    sections: [
      {
        heading: '何を省略しているか',
        body: 'スタッカートやアクセントの記号が何小節も続く場合、すべてに書くと譜面が煩雑になります。最初の1、2小節に書いた後 simile と記せば、同じ扱いを続けることが伝わります。伴奏形が同じまま和音だけが変わる箇所では、音型を書かずに和音だけを示し、simile で音型の継続を指示することもあります。',
      },
      {
        heading: 'どこまで続くのか',
        body: 'この指示の効力が及ぶ範囲は明示されないことが多く、演奏者が判断します。奏法が変わる指示が新たに出るまで、あるいはセクションが変わるまでと読むのが一般的です。範囲が曖昧な箇所では、アンサンブルで解釈をそろえておく必要があります。',
      },
      {
        heading: '関連する記号',
        body: '同じ小節をそのまま繰り返す場合は、斜線と点を組み合わせた小節反復記号が使われます。simile は音型や奏法の継続を指す語で、小節をそのまま複製する記号とは役割が違います。',
      },
    ],
    confusions: [
      { term: 'Ostinato', slug: 'ostinato', note: '同じ音型を繰り返すこと自体を指す語。simile は記譜の省略。' },
    ],
  },

  "coll'ottava": {
    lead: "Coll'ottava は「オクターブを伴って」。書かれた旋律に、1オクターブ上または下の音を重ねて演奏することを指示します。",
    sections: [
      {
        heading: '記譜と読み方',
        body: "con l'ottava の縮約形で、coll'8va とも書かれます。どちらのオクターブを重ねるかは、多くの場合 8va（上）または 8vb / 8va bassa（下）で示されます。示されていない場合は、音域と文脈から判断します。1声の旋律を2声のオクターブで演奏することになるため、書かれた音符の数と実際に弾く音の数が変わります。",
      },
      {
        heading: '何のために重ねるのか',
        body: 'オクターブを重ねると音量が増し、響きが太くなります。同じ音名の音が加わるだけなので和声は変わらず、音色と厚みだけが変化します。クライマックスや、旋律を際立たせたい箇所で使われます。低音部でオクターブを重ねると、土台が明確になります。',
      },
      {
        heading: '演奏上の要点',
        body: 'ピアノではオクターブを片手で押さえるため、手の大きさによって難度が変わります。速いパッセージでは、手首の動きで移動を作ると腕の負担が減ります。オルガンでは、オクターブを加えるストップを使うことで手を増やさずに同じ効果を得られます。オーケストラでは、別の楽器がオクターブ下または上を重ねる書き方が同じ働きをします。',
      },
    ],
    confusions: [
      { term: 'Octave', slug: 'octave', note: '1対2の振動数比を持つ音程。' },
      { term: 'Divisi', slug: 'divisi', note: 'パートを分けること。coll’ottava は同じ奏者が重ねる。' },
    ],
  },

  'senza': {
    lead: 'Senza は「〜なしで」。単独では意味を持たず、後に続く語と組み合わせて使われる前置詞です。',
    sections: [
      {
        heading: '組み合わせの例',
        body: 'senza sordino は弱音器なしで、senza pedale はペダルなしで、senza replica は繰り返しなしで、senza vibrato はビブラートなしで、senza rallentare は遅くせずに、をそれぞれ意味します。何をしないのかは後に続く語で決まるため、その語が分からなければ指示の内容も分かりません。',
      },
      {
        heading: '「しない」ことの積極的な意味',
        body: 'senza の指示は、通常なら行われることをあえて行わないよう求めています。つまり、そこで何が期待されているかを作曲者が把握している上での指示です。senza vibrato があれば、その箇所は本来ビブラートを掛ける場所であり、それを外すことで別の質を作ろうとしていると読めます。単に何もしないのではなく、控えることによる効果が意図されています。',
      },
      {
        heading: 'con との対',
        body: 'con は「〜を伴って」で、senza の反対にあたります。con sordino と senza sordino、con pedale と senza pedale のように対で使われ、区間の切り替えを示します。',
      },
    ],
    confusions: [
      { term: 'Con', slug: 'con', note: '「〜を伴って」。senza の反対。' },
      { term: 'Con sordino', slug: 'con-sordino', note: '弱音器を付ける指示。senza sordino がその解除。' },
    ],
  },

  'con': {
    lead: 'Con は「〜を伴って」「〜とともに」。単独では意味を持たず、後に続く語と組み合わせて表情や奏法を指示します。',
    sections: [
      {
        heading: '組み合わせで意味が決まる',
        body: 'con brio は活気をもって、con moto は動きをもって、con sordino は弱音器を付けて、con fuoco は火のように、con espressione は表情をもって。con 自体には方向性がなく、後に続く語がすべてを決めます。楽譜で con を見たときは、その後の語を読むまで内容が確定しません。',
      },
      {
        heading: 'col / coll’ という形',
        body: '後に続く語が定冠詞を伴う場合、con il が col に、con la が colla に、con l’ が coll’ に縮約されます。col legno（弓の木部で）、coll’ottava（オクターブを伴って）、colla parte（独奏に合わせて）がこの形です。別の語ではなく、con の縮約形です。',
      },
      {
        heading: 'senza との対',
        body: 'senza は「〜なしで」で、con の反対にあたります。con sordino と senza sordino のように対で使われ、奏法の切り替えを示します。',
      },
    ],
    confusions: [
      { term: 'Senza', slug: 'senza', note: '「〜なしで」。con の反対。' },
      { term: 'Col legno', slug: 'col-legno', note: 'con il legno の縮約形。弓の木部で弾く指示。' },
    ],
  },

  'solo': {
    lead: 'Solo は「独奏」「ひとり」。楽譜では、そのパートが単独で前に出ることを示します。',
    sections: [
      {
        heading: '楽譜上の機能',
        body: 'オーケストラのパート譜に solo と書かれていれば、その箇所はそのパートが主役になります。同じパートを複数人で演奏している場合は、首席奏者だけが演奏することを意味します。tutti（全員）の指示が出るまで、この状態が続きます。伴奏側の楽譜に solo が書かれる場合は、他のパートに独奏があることを示し、音量を控えて合わせることが求められます。',
      },
      {
        heading: '協奏曲での意味',
        body: '協奏曲では、独奏楽器のパート全体が solo であり、オーケストラの部分が tutti です。スコアでは、独奏が入る箇所と管弦楽だけの箇所が solo / tutti で区分されます。この区分は音量の問題ではなく、構造上の区分です。',
      },
      {
        heading: '演奏上の要点',
        body: '独奏箇所では、それまで合わせることに注意を向けていたところから、自分が音楽を導く立場に切り替わります。テンポの取り方、フレーズの作り方の主導権が移るため、伴奏側はこちらに合わせます。逆に solo が終わる箇所では、主導権を戻す必要があり、この移り目の処理がアンサンブルの質を決めます。',
      },
    ],
    confusions: [
      { term: 'Tutti', slug: 'tutti', note: '全員で演奏すること。solo の反対。' },
      { term: 'Divisi', slug: 'divisi', note: 'パートを複数に分けること。solo は一人に絞ること。' },
      { term: 'Concerto', slug: 'concerto', note: '独奏と管弦楽が対比される形式。' },
    ],
  },

  'harpsichord': {
    lead: 'ハープシコードは、弦を爪ではじいて鳴らす鍵盤楽器です。ピアノのように鍵を押す強さで音量を変えることができません。',
    sections: [
      {
        heading: '発音の仕組み',
        body: '鍵を押すと、ジャックと呼ばれる部品が持ち上がり、そこに取り付けられた爪（プレクトラム）が弦をはじきます。はじく動作は爪が弦を通過することで完結するため、鍵を押す速さは弦をはじく強さにほとんど影響しません。これが音量を変えられない理由です。ピアノは弦を叩く仕組みで、打つ速度が音量に直結します。この構造の違いが、両者の表現の違いを生んでいます。',
      },
      {
        heading: '音量を変える手段',
        body: '打鍵で変えられない代わりに、別の手段があります。複数の弦の列（レジスター）を持つ楽器では、ストップの操作で鳴らす列を増減できます。鍵盤が2段ある楽器では、段を持ち替えることで音色と音量を変えられます。これらの切り替えは段階的なので、連続的なクレッシェンドは作れません。バロック音楽の強弱が段で切り替わる書き方は、この構造を前提としています。',
      },
      {
        heading: '演奏上の表現手段',
        body: '音量が使えない代わりに、音の長さと出るタイミングが表現の中心になります。音を保つ長さを変える、和音の音をわずかにずらして鳴らす、装飾を加える、といった方法で重みや強調を作ります。同じ音を強く聞かせたいときは、その直前にわずかな間を置くと際立ちます。',
      },
      {
        heading: '呼び名',
        body: 'イタリア語では clavicembalo または cembalo、フランス語では clavecin、ドイツ語では Cembalo。日本語では「チェンバロ」が定着していますが、これはドイツ語・イタリア語由来の呼び方です。',
      },
    ],
    confusions: [
      { term: 'Clavicembalo', slug: 'clavicembalo', note: 'イタリア語で同じ楽器。' },
      { term: 'Terraced dynamics', slug: 'terraced-dynamics', note: '段で切り替わる強弱。この楽器の構造から生まれた考え方。' },
      { term: 'Fortepiano', slug: 'fortepiano', note: '打鍵で音量を変えられる初期のピアノ。' },
    ],
  },

  'celesta': {
    lead: 'チェレスタは、鍵盤で金属板を叩いて鳴らす楽器です。見た目は小型のアップライトピアノに似ています。',
    sections: [
      {
        heading: '発音の仕組み',
        body: '鍵を押すとハンマーが金属板（鋼板）を叩きます。各金属板の下には木製の共鳴箱が付いており、これが響きを支えます。金属を叩く音でありながら、グロッケンシュピールのような鋭さがなく、柔らかく澄んだ鐘のような音になるのは、この共鳴箱の働きによります。ダンパーペダルを備えており、音を保つことができます。',
      },
      {
        heading: '記譜と音域',
        body: '大譜表で書かれ、多くの場合、実際に鳴る音より1オクターブ低く記譜されます。したがって、楽譜に書かれた音を実音と思って読むと1オクターブ違います。音域は楽器によって異なり、4オクターブ程度のものが一般的です。',
      },
      {
        heading: '用いられた作品',
        body: 'チャイコフスキーのバレエ《くるみ割り人形》の〈金平糖の精の踊り〉で旋律を担当しています。バルトークの《弦楽器、打楽器とチェレスタのための音楽》では、曲名に楽器名が含まれています。',
      },
      {
        heading: '音量の制約',
        body: '音量が小さいため、オーケストラの中で聞こえる箇所は限られます。作曲者はこの楽器を使うとき、周囲の編成を薄くするか、他の楽器と重ねて音色を加える形で書きます。',
      },
    ],
    confusions: [
      { term: 'Celeste', slug: 'celeste', note: '「天上の」を意味する語。楽器名の由来。' },
      { term: 'Glass harmonica', slug: 'glass-harmonica', note: 'ガラスを擦って鳴らす楽器。澄んだ音色という点で近い。' },
    ],
  },

  'glass-harmonica': {
    lead: 'グラスハーモニカは、回転するガラスの器の縁に濡れた指を触れて鳴らす楽器です。摩擦によってガラスが振動し、音が出ます。',
    sections: [
      {
        heading: '構造',
        body: '大きさの異なるガラスの椀を軸に並べ、これを回転させます。奏者は濡らした指を縁に当て、摩擦で振動を起こします。椀の大きさが音の高さを決めます。ワイングラスの縁を指でこすって音を出すのと同じ原理を、鍵盤のように配列した楽器です。',
      },
      {
        heading: '音の性質',
        body: '摩擦による持続音で、始まりと終わりの輪郭がはっきりしません。減衰も遅く、どこから鳴り始めてどこで消えたかが分かりにくい響きになります。音量は小さく、他の楽器と合わせるのが難しい楽器です。',
      },
      {
        heading: 'ベンジャミン・フランクリンによる考案',
        body: 'アメリカのベンジャミン・フランクリンが1760年代にこの形の楽器を考案しました。18世紀後半から19世紀初めにかけて用いられ、モーツァルトもこの楽器のための作品を書いています。',
      },
    ],
    confusions: [
      { term: 'Celesta', slug: 'celesta', note: '金属板を叩く鍵盤楽器。澄んだ音色という点で近い。' },
      { term: 'Theremin', slug: 'theremin', note: '手を触れずに演奏する電子楽器。滑らかな持続音という点で近い。' },
    ],
  },

  'theremin': {
    lead: 'テルミンは、楽器に手を触れずに演奏する電子楽器です。2本のアンテナに手を近づけたり離したりして音を操ります。',
    sections: [
      {
        heading: '演奏の仕組み',
        body: '垂直のアンテナが音の高さ、水平のループ状のアンテナが音量を制御します。奏者の手がアンテナに近づくと、その周辺の電気的な状態が変わり、それが音の高さや音量の変化になります。手の位置がそのまま音になるため、鍵盤やフレットのような区切りがありません。',
      },
      {
        heading: '音程を取る難しさ',
        body: '触れる場所がないため、どの位置がどの音になるかを体で覚える必要があります。しかも、奏者の体全体が電気的な状態に影響するため、姿勢が変わると音程も変わります。演奏中に立ち位置や体の向きを一定に保つことが要求されます。この難しさから、音程を持たない滑らかなスライド音として使われることが多くあります。',
      },
      {
        heading: 'レフ・テルミンによる考案',
        body: 'ロシアの物理学者レフ・テルミンが1920年に発明しました。開発者の名がそのまま楽器名になっています。初期の電子楽器の一つとして知られています。',
      },
    ],
    confusions: [
      { term: 'Ondes Martenot', slug: 'ondes-martenot', note: '同時期のフランスの電子楽器。鍵盤やリングで操作する。' },
      { term: 'Glissando', slug: 'glissando', note: '音を滑らせる奏法。テルミンでは連続的な音程変化が基本になる。' },
    ],
  },

  'ondes-martenot': {
    lead: 'オンド・マルトノは、フランスで開発された初期の電子楽器です。鍵盤とリボン状の装置の両方で音の高さを操ります。',
    sections: [
      {
        heading: '2つの操作方法',
        body: '鍵盤を押して音を出す方法と、鍵盤の前に張られたリボン（指にはめるリングで動かす）を左右に動かして連続的に音の高さを変える方法があります。前者は音程が確定した演奏、後者は滑らかなスライドを作ります。左手は音量と音色を制御する装置を操作します。',
      },
      {
        heading: 'モーリス・マルトノによる考案',
        body: 'フランスのモーリス・マルトノが1928年に発表しました。「マルトノの波」という意味の名です。テルミンと同じ時期に登場した電子楽器で、こちらは鍵盤による確定した音程の演奏が可能な点が異なります。',
      },
      {
        heading: '用いられた作品',
        body: 'メシアンの《トゥーランガリラ交響曲》でこの楽器が用いられています。オーケストラの中で使われた例として知られています。',
      },
    ],
    confusions: [
      { term: 'Theremin', slug: 'theremin', note: '同時期の電子楽器。手を触れずに演奏する。' },
    ],
  },

  'didgeridoo': {
    lead: 'ディジュリドゥは、オーストラリアの先住民（アボリジナル）の管楽器です。1本の管で、持続する低音を鳴らし続けます。',
    sections: [
      {
        heading: '構造',
        body: 'シロアリに内部を食われて空洞になったユーカリの幹を用います。人工的に穴を開けるのではなく、自然にできた空洞を使うため、内径が不規則で、それが音色に影響します。マウスピースを持たないものと、蜜蝋で吹き口を整えたものがあります。',
      },
      {
        heading: '循環呼吸',
        body: '鼻から息を吸いながら、口の中に溜めた空気を頬の筋肉で押し出すことで、音を切らずに吹き続けられます。この技法を循環呼吸と呼びます。ディジュリドゥの演奏では基本となる技術で、これによって切れ目のない持続音（ドローン）が生まれます。他の管楽器でも用いられる技法です。',
      },
      {
        heading: '音の変化',
        body: '運指がないため、音の高さは基本的に1つです。表情は、唇の締め方を変えて倍音を出す、声を同時に出す、舌や喉の形を変えて倍音の構成を変える、といった方法で作ります。持続音の中で音色が変化していくのがこの楽器の表現です。',
      },
    ],
    confusions: [
      { term: 'Ostinato', slug: 'ostinato', note: '同じ音型の反復。ドローンは持続音による同種の土台。' },
      { term: 'Multiphonics', slug: 'multiphonics', note: '複数の音を同時に出す技法。声との併用が近い効果を持つ。' },
    ],
  },

  'sitar': {
    lead: 'シタールは北インドの撥弦楽器です。演奏する弦の下に共鳴弦が張られており、それが独特の残響を作ります。',
    sections: [
      {
        heading: '弦の構成',
        body: '旋律を弾く弦、リズムや持続音を担う弦、そして演奏では直接触れない共鳴弦（タラフ弦）があります。共鳴弦は旋律の弦が鳴ったときに共振して響き、演奏していない音まで残響として加わります。この重なりが、この楽器の音の厚みを作っています。',
      },
      {
        heading: 'フレットと音程',
        body: 'フレットは湾曲した金属で、位置を動かすことができます。演奏する旋法（ラーガ）に応じて配置を変えます。また、弦をフレットに沿って横に引くことで音程を滑らかに変えられ、この技法をミーンドと呼びます。西洋音楽の平均律とは異なる音程が用いられます。',
      },
      {
        heading: '演奏の様式',
        body: '北インドの古典音楽では、旋法（ラーガ）とリズム周期（ターラ）の枠組みの中で即興を展開します。楽譜に書かれた曲を再現するのではなく、枠組みを共有した上でその場で音楽を作る形式です。',
      },
    ],
    confusions: [
      { term: 'Tabla', slug: 'tabla', note: '北インドの太鼓。シタールとの合奏で用いられる。' },
      { term: 'Glissando', slug: 'glissando', note: '音を滑らせること。シタールのミーンドは弦を引いて行う。' },
    ],
  },

  'tabla': {
    lead: 'タブラーは北インドの一対の太鼓です。高い音のダーヤーンと低い音のバーヤーンを組み合わせて演奏します。',
    sections: [
      {
        heading: '2つの太鼓',
        body: '小さいほうが高音を出し、大きいほうが低音を出します。それぞれの皮の中央には黒い円形の部分があり、これは重りとして貼り付けられたものです。この重りがあることで、皮の振動に特定の高さが生まれ、太鼓が音程を持ちます。西洋の多くの太鼓が音程を持たないのに対して、この楽器は明確な高さで調律されます。',
      },
      {
        heading: '打つ位置と音色',
        body: '中央の黒い部分、その周囲、縁のそれぞれを、指先や手のひらで打つと別の音が出ます。低音側では、手のひらで皮を押しながら打つことで音程を変化させられ、水滴が落ちるような音の変化が生まれます。奏者はこれらを組み合わせて多様な音色を作ります。',
      },
      {
        heading: 'ボルによる伝承',
        body: 'それぞれの打ち方に「ボル」と呼ばれる音節（ター、ディン、ナー、ゲなど）が対応しており、これを唱えることでリズムのパターンが伝えられます。楽譜ではなく音節の連なりとして記憶され、伝承される仕組みです。',
      },
    ],
    confusions: [
      { term: 'Sitar', slug: 'sitar', note: '北インドの撥弦楽器。タブラーとの合奏で用いられる。' },
      { term: 'Timpani', slug: 'timpan', note: '西洋の音程を持つ太鼓。調律の仕組みが異なる。' },
    ],
  },

  'shamisen': {
    lead: '三味線は3本の弦を持つ日本の撥弦楽器です。大きな撥（ばち）で弦と皮を同時に打つため、打楽器的な要素を持ちます。',
    sections: [
      {
        heading: '撥による発音',
        body: '撥は先端が幅広く、弦をはじくと同時に皮に当たります。この皮を打つ音が、弦の音と一体になって鳴ります。撥が皮に当たる音を含めて一つの音として設計されているため、弦だけを鳴らす楽器とは音の性質が異なります。',
      },
      {
        heading: 'サワリ',
        body: '一の糸（最も低い弦）は、上駒（かみごま）に乗せず、わずかに棹に触れる状態にします。この構造をサワリと呼びます。弦が振動するときに棹にわずかに当たり、うなりを含んだ余韻が生まれます。この響きは、インドのシタールの共鳴弦と同様に、意図的に作られた雑音成分です。',
      },
      {
        heading: '種類',
        body: '棹の太さによって細棹、中棹、太棹に分かれ、それぞれ長唄、地唄・民謡、義太夫や津軽三味線などの用途に対応します。棹の太さと皮の張り、撥の大きさが変わるため、音の性質も異なります。',
      },
      {
        heading: '調弦',
        body: '本調子、二上り、三下りという主な調弦があり、曲によって使い分けます。絶対的な高さではなく、3本の弦の相対的な関係として定められています。',
      },
    ],
    confusions: [
      { term: 'Koto', slug: 'koto', note: '日本の箏。爪で弾き、柱で音程を変える。' },
      { term: 'Sitar', slug: 'sitar', note: '共鳴による余韻という点で近い構造を持つ。' },
    ],
  },

  'koto': {
    lead: '箏（こと）は日本の撥弦楽器です。13本の弦を持ち、柱（じ）と呼ばれる可動式の駒を動かして音程を決めます。',
    sections: [
      {
        heading: '柱による調弦',
        body: '弦の下に柱を立て、その位置を動かすことで各弦の音の高さを決めます。フレットで音程を変えるのではなく、演奏の前に柱を配置して音階を作ります。曲によって音階が違うため、曲ごとに柱の配置を変えます。演奏中に柱を動かして転調する場合もあります。',
      },
      {
        heading: '爪による発音',
        body: '右手の親指、人差し指、中指に爪を装着して弦を弾きます。爪の形には流派による違いがあり、生田流は角爪、山田流は丸爪を用います。爪の形が変わると弦への当たり方が変わり、音色に差が出ます。座り方も流派によって異なります。',
      },
      {
        heading: '左手による変化',
        body: '左手で弦を押したり引いたりして音程を変え、余韻に変化を加えます。押し手（弦を押して音程を上げる）などの技法により、柱で決めた音以外の高さも出せます。',
      },
    ],
    confusions: [
      { term: 'Shamisen', slug: 'shamisen', note: '3本の弦を撥で打つ日本の撥弦楽器。' },
      { term: 'Shakuhachi', slug: 'shakuhachi', note: '日本の縦笛。箏との合奏で用いられる。' },
    ],
  },

  'shakuhachi': {
    lead: '尺八は日本の竹製の縦笛です。指孔は5つしかありませんが、息と首の動きで多様な音程と音色を作ります。',
    sections: [
      {
        heading: '5つの孔で音階を作る',
        body: '指孔は表に4つ、裏に1つの計5つです。これだけでは半音階を出せないため、孔を半分ふさぐ（メリ）、首を振って歌口への息の角度を変える、といった方法で音程を細かく変えます。首を下に振ると音程が下がり（メリ）、上げると戻ります（カリ）。音程を作る操作が、そのまま音色の変化も伴います。',
      },
      {
        heading: '歌口の構造',
        body: '管の上端を斜めに切り落とした形で、リードもマウスピースもありません。唇と歌口の位置関係だけで息を切り、音を作ります。この構造のため、息の角度や量のわずかな違いが音に直接現れます。',
      },
      {
        heading: 'ムラ息',
        body: '息を強く吹き込んで雑音成分を含ませる奏法をムラ息と呼びます。風の音のような響きが加わります。これは音を汚すのではなく、表現の一部として用いられます。西洋の管楽器が雑音を排する方向で発達したのに対して、雑音を積極的に扱う点が特徴です。',
      },
      {
        heading: '名前の由来',
        body: '「一尺八寸」（約54.5センチ）という標準的な長さから、尺八と呼ばれます。ただし長さの異なる管も用いられ、それぞれ基音の高さが違います。',
      },
    ],
    confusions: [
      { term: 'Koto', slug: 'koto', note: '日本の箏。尺八との合奏で用いられる。' },
      { term: 'Shamisen', slug: 'shamisen', note: '日本の撥弦楽器。三曲合奏では箏・三味線・尺八が組む。' },
    ],
  },

  'kalimba': {
    lead: 'カリンバは、共鳴箱に取り付けた金属片を親指で弾いて鳴らす楽器です。アフリカの楽器を起源とします。',
    sections: [
      {
        heading: '構造',
        body: '木製の共鳴箱や板に、長さの異なる金属片（タイン）を並べて固定します。金属片の突き出た部分の長さが音の高さを決め、短いほど高くなります。両手の親指で弾くため、金属片は中央が低く外側が高い、あるいはその逆といった配列になっているものが一般的です。',
      },
      {
        heading: '音の性質',
        body: '金属片の振動が共鳴箱で増幅され、オルゴールに似た柔らかい音になります。減衰は比較的速く、音を長く保つことはできません。音量は小さく、独奏や少人数での演奏に向いています。',
      },
      {
        heading: '呼び名',
        body: 'アフリカ各地に同種の楽器があり、ムビラ、サンサなど地域によって異なる名で呼ばれます。カリンバという名称は、20世紀に西洋向けに製作されたものに用いられ、広まりました。',
      },
    ],
    confusions: [
      { term: 'Celesta', slug: 'celesta', note: '金属板を叩く鍵盤楽器。柔らかい金属の音という点で近い。' },
    ],
  },

  'steelpan': {
    lead: 'スティールパンは、ドラム缶の底面を叩き出して作る旋律打楽器です。カリブ海のトリニダード・トバゴで生まれました。',
    sections: [
      {
        heading: '構造と音程',
        body: 'ドラム缶の底を内側へくぼませ、その表面を叩き出して複数の面を作ります。それぞれの面が異なる音の高さを持ち、これを撥で叩いて演奏します。金属の面積と厚みが音の高さを決めるため、製作には高い精度が求められます。作る職人はチューナーと呼ばれ、面ごとの調律を手作業で行います。',
      },
      {
        heading: '音域による種類',
        body: '高音を担うテナー、中音のギターパンやセロパン、低音のベースパンなど、音域ごとに種類があります。低音の楽器では1つの缶に載せられる面の数が少なくなるため、複数の缶を並べて1人が演奏します。これらを組み合わせた合奏体をスティールバンドと呼びます。',
      },
      {
        heading: '成立の背景',
        body: '20世紀のトリニダード・トバゴで、ドラム缶を用いた楽器として発達しました。打楽器から旋律楽器を作り出した例として知られています。',
      },
    ],
    confusions: [
      { term: 'Timpani', slug: 'timpan', note: '音程を持つ西洋の太鼓。調律の仕組みが異なる。' },
    ],
  },

  'bandoneon': {
    lead: 'バンドネオンは蛇腹を開閉して音を出す楽器です。アコーディオンの仲間ですが、鍵盤ではなくボタンで音を選びます。',
    sections: [
      {
        heading: '構造',
        body: '四角い箱を両側に持ち、そのあいだに蛇腹があります。両側にボタンが並び、これを押しながら蛇腹を開閉すると、空気がリードを振動させて音が出ます。ボタンの配列は音階順ではなく、押す位置と音の高さに規則的な対応がありません。',
      },
      {
        heading: '開くときと閉じるときで音が違う',
        body: '多くのバンドネオンでは、同じボタンを押しても、蛇腹を開くときと閉じるときで別の音が鳴ります。したがって奏者は、1つのボタンについて2つの音を覚える必要があり、両手で合わせると記憶すべき対応関係が非常に多くなります。演奏の難しさの主な理由がここにあります。',
      },
      {
        heading: 'タンゴでの使用',
        body: 'ドイツで作られた楽器がアルゼンチンへ渡り、タンゴの中心的な楽器になりました。蛇腹の操作で音量と音の立ち上がりを直接制御できるため、強い加速と減速、鋭いアクセントを作れます。この表現力がタンゴの様式と結びついています。',
      },
    ],
    confusions: [
      { term: 'Ondes Martenot', slug: 'ondes-martenot', note: '同時期に発達した別系統の楽器。' },
    ],
  },

  'riff': {
    lead: 'リフは、繰り返される短く印象的なフレーズです。ロックやジャズで、曲の土台と同時に「顔」になります。',
    sections: [
      {
        heading: '土台であり主役でもある',
        body: '伴奏の役割を持ちながら、その曲を識別する要素にもなります。多くの場合、和音の進行に沿って反復され、旋律の下で構造を支えます。同時に、そのフレーズを聞けば曲が分かるほど特徴的である点が、単なる伴奏形と違います。',
      },
      {
        heading: 'クラシックのオスティナートとの関係',
        body: '同じ音型を繰り返して土台を作るという点で、オスティナートと構造上の共通性があります。呼び名が違うのは、用いられる音楽の分野が違うためで、機能としては近いものです。',
      },
      {
        heading: '演奏上の要点',
        body: '繰り返しであるため、機械的に同じに弾くと退屈になります。一方で、変化を付けすぎると土台としての働きが失われます。実際には、音量や音の長さをわずかに変えながら、形は保つという扱いになります。',
      },
    ],
    confusions: [
      { term: 'Ostinato', slug: 'ostinato', note: 'クラシックで同じ音型を繰り返すこと。構造上は近い。' },
      { term: 'Lick', slug: 'lick', note: '即興で使う短いフレーズ。反復して土台にはならない。' },
    ],
  },

  'lick': {
    lead: 'リックは、即興演奏の中で使われる短いフレーズのパターンです。奏者が蓄えている定型句にあたります。',
    sections: [
      {
        heading: '即興の語彙',
        body: '即興演奏は、その瞬間にすべてを新しく作り出しているわけではありません。奏者は使い慣れたフレーズの断片を多数持っており、それを和音進行や文脈に合わせて選び、つなぎ、変形させます。この断片がリックです。言葉に例えれば、文法ではなく語彙にあたります。',
      },
      {
        heading: 'リフとの違い',
        body: 'リフは曲の中で反復されて土台になるもので、その曲に属します。リックは奏者に属し、複数の曲で使い回されます。反復して構造を作るのではなく、その場の演奏の中で一度使われます。',
      },
      {
        heading: '手癖という側面',
        body: '同じリックを使い続けると、演奏が予測可能になります。そのため、蓄えを増やすことと、同じ形に頼りすぎないことの両方が課題になります。',
      },
    ],
    confusions: [
      { term: 'Riff', slug: 'riff', note: '曲の中で反復される土台。リックは奏者の定型句。' },
      { term: 'Fill-in', slug: 'fill-in', note: '区切りを埋める短いフレーズ。位置が決まっている。' },
    ],
  },

  'fill-in': {
    lead: 'フィルインは、旋律の切れ目やセクションの継ぎ目を埋める短いフレーズです。ドラムでよく用いられます。',
    sections: [
      {
        heading: '置かれる位置',
        body: '旋律が途切れているところ、あるいは次のセクションへ移る直前に置かれます。フレーズの終わりで音が減ったところを埋め、同時に次への移行を予告します。位置が決まっている点が、リックとの違いです。',
      },
      {
        heading: '長さと次への接続',
        body: 'フィルインは、次の小節の頭に着地するように作られます。長さが合わないと、次のセクションの開始がずれて聞こえます。特にドラムでは、フィルインの終わりが次の1拍目にどうつながるかが、バンド全体のリズムに影響します。',
      },
      {
        heading: '入れすぎない',
        body: '隙間を見つけるたびに入れると、音楽が休む場所を失います。フィルインが効果を持つのは、それがない箇所との対比があるときです。次の展開を予告する位置に絞ることで、機能が保たれます。',
      },
    ],
    confusions: [
      { term: 'Lick', slug: 'lick', note: '奏者の定型句。位置は決まっていない。' },
      { term: 'Break', slug: 'break', note: 'リズム隊が止まる箇所。フィルインは隙間を埋める。' },
    ],
  },

  'break': {
    lead: 'ブレイクは、演奏の途中でリズム隊が一時的に止まる箇所です。それまで鳴っていたものが消えることで、緊張が生まれます。',
    sections: [
      {
        heading: '止まることが効果になる',
        body: '継続していた伴奏が突然なくなると、聴き手はそこに注意を向けます。その空白に独奏が短いフレーズを入れる、あるいは完全な沈黙にする、といった使い方があります。音を足すのではなく引くことで場面を作る手法です。',
      },
      {
        heading: '再開のタイミングをそろえる',
        body: 'ブレイクのあいだ、拍を刻むものがなくなります。したがって、全員が同じテンポの感覚を保っていなければ、再開したときにずれます。演奏では、止まっているあいだも内的に拍を数え続けることが要点です。ブレイクが長いほど、この難度が上がります。',
      },
    ],
    confusions: [
      { term: 'Generalpause', slug: 'generalpause', note: '全員が休止すること。クラシックでの同種の効果。' },
      { term: 'Fill-in', slug: 'fill-in', note: '隙間を埋めるフレーズ。ブレイクは隙間そのものを作る。' },
    ],
  },

  'dead-note': {
    lead: 'デッドノートは、弦をミュートしたまま弾いて、音程を持たない打撃音だけを鳴らす奏法です。',
    sections: [
      {
        heading: '出し方',
        body: '左手で弦に触れるが押さえきらない状態にすると、弦が振動しても音程が定まりません。この状態で右手で弾くと、「ドッ」という短い打撃音だけが出ます。ギターやベースで用いられ、記譜では ×印の音符頭で示されます。',
      },
      {
        heading: 'リズムを刻む道具として',
        body: '音程を持たないため、和声に影響しません。したがって、リズムの刻みを加えたい箇所で自由に挿入できます。ファンクやカッティングの奏法では、実音とデッドノートを交互に配置してリズムの密度を作ります。休符にすると音が途切れますが、デッドノートを置くと打撃が続くため、流れが保たれます。',
      },
      {
        heading: '演奏上の要点',
        body: '左手の力の加減が要点です。弱すぎると弦が開放弦として鳴り、強すぎると押さえた音程が出てしまいます。音程が聞こえない状態を保ちながら、打撃音が明確に出る力の範囲を見つけることになります。',
      },
    ],
    confusions: [
      { term: 'Key-click', slug: 'key-click', note: '管楽器のキイの打撃音。音程を持たない打撃という点で近い。' },
      { term: 'Pizzicato', slug: 'pizzicato', note: '指で弦をはじく奏法。デッドノートは音程を消す。' },
    ],
  },

  'souple': {
    lead: 'Souple はフランス語で「柔軟に、しなやかに」。硬さを避け、自由な流れを求める指示です。',
    sections: [
      {
        heading: '何を避けるのか',
        body: 'この語が求めているのは、拍やリズムが硬直しないことです。正確に刻むことに意識が向くと、フレーズが角張ります。souple はその逆で、拍の枠を保ちながらも、その中の動きに柔らかさを持たせることを求めます。テンポを崩す指示ではなく、質を指定する指示です。',
      },
      {
        heading: '身体の使い方',
        body: 'フランス語の souple は、体の柔軟さを表す語としても日常的に使われます。演奏では、手首や腕の力が抜けていることが音の質に直結します。関節が固まった状態では、この指示の求める音は出ません。',
      },
    ],
    confusions: [
      { term: 'Rubato', slug: 'rubato', note: 'テンポを揺らす指示。souple はテンポではなく質を指す。' },
      { term: 'Legato', slug: 'legato', note: '音をつなぐ指示。柔らかさの表現として近い。' },
    ],
  },

  'sync': {
    lead: 'シンクは同期のことで、リズムやピッチを他の演奏者、機器、映像と一致させることを指します。',
    sections: [
      {
        heading: '基準に合わせる',
        body: 'クリックトラック（メトロノームの信号）に合わせる、映像のタイミングに合わせる、他のトラックと重ねる、といった場面で使われます。生の演奏では奏者同士が互いに合わせますが、この語が使われるのは多くの場合、外部の固定された基準に合わせる状況です。',
      },
      {
        heading: '固定された基準に合わせる難しさ',
        body: '奏者同士の合奏では、互いにわずかに調整し合うことで一致が保たれます。クリックトラックのような固定された基準では、この相互調整ができません。ずれた場合、こちらが一方的に戻す必要があります。また、揺らぎを含む音楽表現と、揺るがない基準の両立が課題になります。',
      },
    ],
    confusions: [
      { term: 'Tempo giusto', slug: 'tempo-giusto', note: '正確なテンポで。基準に合わせるという点で近い。' },
    ],
  },

  'accompagnato': {
    lead: 'Accompagnato は「伴奏を伴って」。オペラやオラトリオで、管弦楽の伴奏が付いたレチタティーヴォを指します。',
    sections: [
      {
        heading: 'secco との対比',
        body: 'レチタティーヴォには2つの形があります。recitativo secco は通奏低音（チェンバロとチェロなど）だけの簡素な伴奏で、言葉の運びに任せて自由に進みます。recitativo accompagnato は管弦楽が伴奏し、和音が変わるタイミングや間の取り方が書き込まれます。stromentato（楽器を伴った）という語も同じ意味で使われます。',
      },
      {
        heading: '劇的な場面で使われる',
        body: '管弦楽が付くことで、和声の色や音量の変化を使えるようになります。そのため、物語の展開が大きく動く箇所や、登場人物の感情が高まる箇所でこの形が選ばれます。secco が情報を伝える部分を担い、accompagnato が劇的な場面を担うという使い分けになります。',
      },
      {
        heading: '演奏上の要点',
        body: '伴奏が付くため、secco ほど自由には進められません。ただしアリアのように拍が一定に流れるわけでもなく、言葉の運びに応じて伸縮します。指揮者と歌手のあいだで、どこで待ちどこで進むかを共有しておく必要があります。',
      },
    ],
    confusions: [
      { term: 'Recitative', slug: 'recitative', note: 'レチタティーヴォ。accompagnato はその一形態。' },
      { term: 'Aria', slug: 'aria', note: '旋律的な独唱曲。レチタティーヴォと対をなす。' },
      { term: 'Accompagnamento', slug: 'accompagnamento', note: '伴奏そのものを指す語。' },
    ],
  },

  'dominant': {
    lead: '属音は音階の第5音。ハ長調ならソです。主音に次いで重要な音とされますが、なぜ「次に重要」なのかは、倍音と引力という二つの側面から説明できます。',
    sections: [
      {
        heading: 'なぜ第5音が特別なのか',
        body: '主音と属音は完全5度の関係にあり、振動数の比は2対3という単純な整数比になります。単純な比の音程はよく溶け合うため、主音を鳴らしたとき、その倍音の中に属音が含まれて聞こえます。つまり属音は主音がもともと持っている響きの一部であり、外から借りてきた音ではありません。音階の中で主音と最も強く結びついているのがこの音です。',
      },
      {
        heading: '属和音が主和音を引き寄せる仕組み',
        body: '属音を根音とする和音（V）は、ハ長調ならソ・シ・レ。この中のシは音階の第7音、すなわち導音で、主音ドの半音下にあります。半音は最も狭い距離であり、そこへ吸い寄せられる力が強く働きます。さらに第7音を加えて属七の和音（ソ・シ・レ・ファ）にすると、ファはミへ半音で下がりたがるため、二つの半音が同時に主和音を指し示すことになります。これが V から I への進行が決着として聞こえる理由です。',
      },
      {
        heading: '楽譜で属音に着地したら',
        body: '楽章やフレーズの途中で属和音に落ち着いて止まる場所があれば、それは半終止です。話が途中で切れて「続き」を期待させる感覚が残るため、そこで音楽が終わったように弾いてはいけません。次の句へ渡す意識を持ち、和音を鳴らしきったまま少し前へ張った状態で保つと、続きへの期待が保たれます。',
      },
      {
        heading: '転調の起点にもなる',
        body: 'ある調の属音を新しい調の主音として扱うと、シャープが1つ増える方向へ、つまり五度圏を時計回りに1つ進んだ調へ移ります。ハ長調からト長調への移行がこれです。ソナタ形式の提示部で第1主題から第2主題へ移るとき、長調の曲では属調へ行くのが基本形とされてきました。属調は最も近い親戚のような調であり、離れすぎないまま景色を変えられます。',
      },
    ],
    confusions: [
      { term: 'Tonic', slug: 'tonic', note: '主音。属和音が向かっていく先であり、決着の場所。' },
      { term: 'Subdominant', slug: 'subdominant', note: '下属音（第4音）。属音とは主音を挟んで対称の位置にあり、緊張ではなく開放感を担う。' },
      { term: 'Dominant seventh', slug: 'dominant-seventh', note: '属音を根音とする七の和音。主和音への引力が最も強い和音。' },
    ],
  },

  'subdominant': {
    lead: '下属音は音階の第4音。ハ長調ならファです。「下」が付いているため属音より低い音だと思われがちですが、名前の由来は高さではなく、主音からの距離の対称性にあります。',
    sections: [
      {
        heading: '名前の由来は対称性',
        body: '属音は主音から完全5度上にあります。下属音は主音から完全5度下、つまりハ長調ならドから下へ数えてファです。上へ5度と下へ5度、主音を挟んでちょうど対称の位置にある二つの音を、上の方を属音、下の方を下属音と呼び分けています。ハ長調のファは音階の中では主音より上に置かれますが、これはオクターブ上に折り返して並べているためで、関係としては主音の5度下です。',
      },
      {
        heading: '外へ広がる和音',
        body: '下属音を根音とする和音（IV）は、ハ長調ならファ・ラ・ド。主和音（ド・ミ・ソ）と比べると、ドを共有しながら残りが外側へ動いています。属和音が主和音へ収束していく感覚を持つのに対して、下属和音は主和音から外へ広がっていく感覚を作ります。緊張ではなく、視界が開けるような開放感を担う和音です。',
      },
      {
        heading: '変格終止（アーメン終止）',
        body: 'IV から I へ進む終止を変格終止と呼びます。讃美歌の最後に置かれた「アーメン」がこの和音進行で歌われることから、アーメン終止とも呼ばれます。属和音から主和音へ進む完全終止と比べると決着の力は弱く、終わりを宣言するというより余韻を残す性格があります。そのため、完全終止で曲を閉じた後に付け足しのように置かれることもあります。',
      },
      {
        heading: '演奏上の扱い',
        body: 'IV の和音が出てきたところで音量を落とすと、和音が持つ広がりが消えてしまいます。逆に属和音と同じように前へ押すと、行き先のない緊張になります。外へ開く方向の動きだと捉え、音を広く取って豊かに鳴らすと、この和音の性格が出ます。',
      },
    ],
    confusions: [
      { term: 'Dominant', slug: 'dominant', note: '属音（第5音）。主音を挟んで下属音と対称の位置にあり、主和音へ強く引き寄せられる。' },
      { term: 'Plagal cadence', slug: 'plagal-cadence', note: '下属和音から主和音へ進む終止。変格終止、アーメン終止。' },
    ],
  },

  'leading-tone': {
    lead: '導音は音階の第7音、主音の半音下にある音です。ハ長調ならシ。この音の働きは、調の中心がどこにあるかを聴き手に感じさせる仕組みそのものです。',
    sections: [
      {
        heading: '半音の引力',
        body: '導音と主音のあいだは半音しか離れていません。半音は西洋音楽の音階における最小の距離で、これ以上狭められないところまで近づいた状態です。近ければ近いほどそこへ収まりたい力が強く働くため、導音が鳴ると次に主音が来ることを聴き手は予想します。この予想が成立していることが、調性が機能している状態です。「導く音」という名前は、主音へ導くという役割から来ています。',
      },
      {
        heading: '短調では導音が最初から存在しない',
        body: '自然短音階では、第7音と主音のあいだが全音離れています。イ短調ならソとラで、半音ではありません。そのため主音への引力が弱く、素朴で古風な響きになります。この引力を取り戻すために第7音を半音上げたものが和声的短音階で、イ短調ならソ♯を使います。短調の曲で臨時記号のシャープが頻繁に出てくるのは、多くの場合これが理由です。',
      },
      {
        heading: '楽譜でこの音を見たら',
        body: '導音は次に主音へ進むことを前提に書かれている音です。したがって、そこで音量を落としたり切ったりすると、進行が途中で止まってしまいます。少し張りを持たせて、次の主音へ音を渡す意識で扱います。逆に、導音が主音へ行かずに別の音へ動く箇所は、作曲者が意図的に予想を外している場所です。そこは目立たせる価値があります。',
      },
      {
        heading: '呼び名について',
        body: '日本語では導音、英語では leading tone（アメリカ）または leading note（イギリス）と呼ばれます。同じ音を指す語で、意味の違いはありません。',
      },
    ],
    confusions: [
      { term: 'Tonic', slug: 'tonic', note: '主音。導音が向かっていく先。' },
      { term: 'Harmonic minor', slug: 'harmonic-minor', note: '自然短音階の第7音を半音上げ、導音を作った音階。' },
      { term: 'Dominant', slug: 'dominant', note: '属音。属和音の中に導音が含まれるため、主和音への引力が生まれる。' },
    ],
  },

  'supertonic': {
    lead: '上主音は音階の第2音。ハ長調ならレです。super は「上の」を意味するラテン語由来の語で、主音のすぐ上にあることを表しています。',
    sections: [
      {
        heading: 'II-V-I の起点',
        body: 'この音を根音とする和音（II）は、長調では短三和音になります。ハ長調ならレ・ファ・ラ。II から V へ、V から I へと進む「II-V-I」は、クラシックでもジャズでも中心的な和音進行です。II の根音レから V の根音ソへは完全4度上（完全5度下）の動き、ソからドへも同じ動きになるため、同じ方向の推進が二度続いて主和音に着きます。',
      },
      {
        heading: '下属和音との関係',
        body: 'ハ長調の II（レ・ファ・ラ）と IV（ファ・ラ・ド）は、ファとラの2音を共有しています。そのため II は下属和音に近い性格を持ち、属和音の前に置かれる準備の和音として同じ位置で使えます。IV より II を選ぶと、根音が動く分だけ響きが引き締まります。',
      },
    ],
    confusions: [
      { term: 'Mediant', slug: 'mediant', note: '中音（第3音）。調が長調か短調かを決める音。' },
      { term: 'Dominant', slug: 'dominant', note: '属音（第5音）。II-V-I 進行で上主音の次に来る。' },
    ],
  },

  'mediant': {
    lead: '中音は音階の第3音。ハ長調ならミです。主音と属音のちょうど中間にあることから「中音」と呼ばれます。調の性格を決定づける最も重要な音です。',
    sections: [
      {
        heading: '長調と短調を分ける音',
        body: '主音と第3音のあいだが長3度（半音4つ）なら長調、短3度（半音3つ）なら短調になります。ハ長調のド・ミ・ソのミを半音下げてミ♭にすると、そのままハ短調の主和音になります。音階の中でこの1音だけを変えれば明暗が入れ替わるため、調の性格を担っているのはこの音だと言えます。',
      },
      {
        heading: '和音の中での扱い',
        body: '主和音を鳴らすとき、第3音をどう配置するかで響きが変わります。低音域で根音と第3音を狭く重ねると濁りやすく、逆に第3音を上の方に置くと和音の性格がはっきり出ます。第3音を強く鳴らしすぎると和音が甘くなり、弱すぎると長短の区別が曖昧になります。合唱やアンサンブルでは、第3音を担当する声部の音量調整が和音の印象を大きく左右します。',
      },
      {
        heading: '第3音を根音とする和音',
        body: 'ハ長調で第3音を根音とする和音（III）はミ・ソ・シで、短三和音です。主和音とミ・ソを共有し、属和音とソ・シを共有するため、その両方に近い曖昧な位置にあります。使用頻度は I・IV・V ほど高くありません。',
      },
    ],
    confusions: [
      { term: 'Major third', slug: 'major-third', note: '主音から第3音までが長3度なら長調になる。' },
      { term: 'Minor third', slug: 'minor-third', note: '主音から第3音までが短3度なら短調になる。' },
      { term: 'Submediant', slug: 'submediant', note: '下中音（第6音）。主音を挟んで中音と対称の位置にある。' },
    ],
  },

  'submediant': {
    lead: '下中音は音階の第6音。ハ長調ならラです。中音（第3音）が主音の3度上にあるのに対して、この音は主音の3度下にあたります。',
    sections: [
      {
        heading: '名前の由来',
        body: '主音から上へ3度が中音、下へ3度が下中音です。ハ長調でドから下へ3度下がるとラで、これをオクターブ上へ折り返すと音階の第6音の位置に来ます。属音と下属音が主音を挟んで5度で対称なのと同じ構造が、3度でも成り立っています。',
      },
      {
        heading: '長調の中の陰り',
        body: 'この音を根音とする和音（VI）は、長調では短三和音になります。ハ長調ならラ・ド・ミ。主和音とド・ミを共有しているため響きは近いのですが、短三和音であるために明るさが失われ、長調の中に一瞬の陰りが差します。同じ旋律を I で受けるか VI で受けるかで、場面の色が変わります。',
      },
      {
        heading: '偽終止を作る',
        body: '属和音（V）から主和音（I）へ進むと予想されるところを VI へ進めると、終わるはずだった場所で終わらなくなります。これを偽終止と呼びます。曲を終わらせずに引き延ばしたい場面、あるいは意外性を出したい場面で使われます。演奏では、聴き手が I を予想していることを利用する箇所なので、VI が現れた瞬間の音色を変えると効果が際立ちます。',
      },
      {
        heading: '平行調との関係',
        body: 'ハ長調の第6音ラを主音とする短調がイ短調で、この二つは同じ調号を共有する平行調です。長調の第6音から始めれば自然短音階になるという関係が、平行調の仕組みそのものです。',
      },
    ],
    confusions: [
      { term: 'Mediant', slug: 'mediant', note: '中音（第3音）。主音を挟んで下中音と対称の位置にある。' },
      { term: 'Deceptive cadence', slug: 'deceptive-cadence', note: 'V から VI へ進む偽終止。下中音の和音が使われる。' },
      { term: 'Relative keys', slug: 'relative-keys', note: '長調の第6音を主音とする短調が平行調にあたる。' },
    ],
  },

  'perfect-fifth': {
    lead: '完全5度はドとソのような音程です。数多くある音程の中で、オクターブを除いて最も協和的に響きます。その理由は物理的に説明できます。',
    sections: [
      {
        heading: '2対3という比',
        body: '二つの音の振動数の比が2対3になっているとき、その音程が完全5度です。比が単純な整数であるほど二つの波形が規則的に重なり、耳には濁りのない一つの響きとして届きます。オクターブが1対2で最も単純、次に単純なのがこの2対3です。多くの音楽文化がこの音程を基礎に据えているのは、比の単純さという物理的な事実に基づいています。',
      },
      {
        heading: '調弦の基準',
        body: 'ヴァイオリン、ヴィオラ、チェロの隣り合う弦は完全5度ずつ離れています。奏者が二本の弦を同時に鳴らして調弦できるのは、この音程がわずかに狂うと「うなり」として明確に聞こえるためです。濁りのない音程だからこそ、濁りが誤差の指標になります。',
      },
      {
        heading: '和音の骨格',
        body: '三和音は根音・第3音・第5音からなり、根音と第5音のあいだは完全5度です。この5度が和音の骨格を作り、第3音が長短の性格を与えます。5度を抜いた和音は響きが薄くなり、逆に5度だけの和音は長短の区別を持たない中立的な響きになります。中世の音楽ではこの中立的な響きを積み重ねて多声が組み立てられていました。',
      },
      {
        heading: '五度圏との関係',
        body: '完全5度を積み重ねていくと、12回で元の音に戻ります。この巡回を図にしたものが五度圏で、調と調の近さを表す地図として使われます。属調への転調が自然に聞こえるのは、それが五度圏で隣にあるからです。',
      },
    ],
    confusions: [
      { term: 'Octave', slug: 'octave', note: '振動数の比が1対2。完全5度よりさらに単純で、同じ音として聞こえる。' },
      { term: 'Tritone', slug: 'tritone', note: '完全5度を半音狭めた減5度。最も不安定な音程。' },
      { term: 'Circle of fifths', slug: 'circle-of-fifths', note: '完全5度を積み重ねた巡回を図にしたもの。' },
    ],
  },

  'major-third': {
    lead: '長3度はドとミのように、半音4つ分離れた音程です。和音の骨格を作るのが完全5度なら、和音の表情を決めるのがこの音程です。',
    sections: [
      {
        heading: '明るさの正体',
        body: '長三和音（ド・ミ・ソ）の中で、根音と第3音のあいだが長3度になっています。この音程を半音狭めて短3度にすると、同じ和音が短三和音に変わり、響きが一気に暗くなります。半音1つの違いで明暗が入れ替わるという事実は、和音の性格が第3音に集中していることを示しています。',
      },
      {
        heading: '純正な長3度と平均律の長3度',
        body: '振動数の比が4対5のとき、長3度は最も濁りなく響きます。しかし現代のピアノが用いる十二平均律では、長3度は純正な比よりわずかに広く取られています。そのため平均律の長3度は純正なものより緊張を含んだ響きになります。合唱や弦楽アンサンブルで第3音をやや低めに取ると和音が澄むと言われるのは、この差を耳が聞き分けているためです。',
      },
      {
        heading: '演奏上の要点',
        body: '和音の中で第3音を担当するとき、他の音と同じ音量で鳴らすと和音が甘くなりすぎることがあります。長三和音では第3音を少し控えめに置くと、骨格である5度がはっきりして響きが締まります。逆に和音の性格を強く出したい場面では、第3音を前に出します。',
      },
    ],
    confusions: [
      { term: 'Minor third', slug: 'minor-third', note: '長3度より半音狭い音程。短三和音の性格を決める。' },
      { term: 'Perfect fifth', slug: 'perfect-fifth', note: '和音の骨格を作る音程。3度は表情を決める。' },
      { term: 'Mediant', slug: 'mediant', note: '音階の第3音。主音との音程が長3度か短3度かで調の明暗が決まる。' },
    ],
  },

  'minor-third': {
    lead: '短3度はドとミ♭のように、半音3つ分離れた音程です。長3度より半音狭く、それだけの差で響きが憂いを帯びます。',
    sections: [
      {
        heading: '短三和音を作る音程',
        body: '短三和音（ド・ミ♭・ソ）では、根音と第3音のあいだが短3度、第3音と第5音のあいだが長3度になります。長三和音とは3度の並び順が入れ替わった関係にあります。同じ完全5度の枠の中で、内側の音を半音動かすだけで長短が切り替わるという構造です。',
      },
      {
        heading: '減三和音と増三和音との関係',
        body: '短3度を2つ積み重ねると減三和音になり、外側の音程が減5度になって不安定な響きが生まれます。長3度を2つ積み重ねると増三和音になり、外側が増5度になって浮遊感が出ます。三和音の性格は、2つの3度をどう組み合わせるかで決まります。',
      },
      {
        heading: '世界各地の民謡に現れる',
        body: '短3度は日本の民謡、ケルト音楽、ブルースなど、地理的に離れた地域の音楽に共通して頻繁に現れます。五音音階の多くの形にもこの音程が含まれています。',
      },
    ],
    confusions: [
      { term: 'Major third', slug: 'major-third', note: '短3度より半音広い音程。長三和音の性格を決める。' },
      { term: 'Diminished chord', slug: 'diminished-chord', note: '短3度を2つ積み重ねた和音。' },
    ],
  },

  'tritone': {
    lead: '三全音は全音3つ分、半音6つ分の音程です。オクターブのちょうど半分にあたり、西洋音楽で最も不安定に響く音程として扱われてきました。',
    sections: [
      {
        heading: 'オクターブの真ん中',
        body: '半音12個でオクターブになるため、その半分の6半音がこの音程です。真ん中にあるということは、上下どちらの端からも等距離にあるということで、どちらへ収まるべきかが決まりません。この方向の定まらなさが不安定さの理由です。増4度（ファとシ）と減5度（シとファ）は同じ半音6つの幅を持ち、音程としては同一の響きになります。',
      },
      {
        heading: '中世に忌避された音程',
        body: '中世の理論では、この音程は歌ってはならないものとして扱われ、diabolus in musica（音楽における悪魔）という表現で呼ばれました。当時の協和の基準は単純な整数比に基づいていたため、比が複雑なこの音程は枠の外にありました。回避のために音を半音変える操作が行われ、これが臨時記号の使用の一因になっています。',
      },
      {
        heading: '属七の和音の中では推進力になる',
        body: 'ハ長調の属七の和音（ソ・シ・レ・ファ）には、シとファという三全音が含まれています。シは主音ドへ半音上がりたく、ファはミへ半音下がりたい。二つの半音が外側と内側へ同時に解決することで、主和音へ向かう強い推進力が生まれます。忌避された音程が、調性音楽では最も重要な進行の原動力になっているという逆転がここにあります。',
      },
      {
        heading: '演奏上の扱い',
        body: 'この音程は解決を前提として書かれています。したがって、含まれる和音でテンポを緩めたり音量を落としたりすると、行き先を失って響きだけが濁ります。緊張を保ったまま次の和音へ渡すのが基本です。20世紀以降の作品では解決を伴わずに使われることもあり、その場合は不安定さそのものが目的になっています。',
      },
    ],
    confusions: [
      { term: 'Perfect fifth', slug: 'perfect-fifth', note: '最も協和的な音程。半音1つ狭めると減5度になる。' },
      { term: 'Dominant seventh', slug: 'dominant-seventh', note: '三全音を含む和音。この音程が主和音への推進力を生む。' },
      { term: 'Diminished chord', slug: 'diminished-chord', note: '外側の音程が減5度になる不安定な和音。' },
    ],
  },

  'major-scale': {
    lead: '長音階は全音・全音・半音・全音・全音・全音・半音という順で並ぶ7音の音階です。ハ長調ならピアノの白鍵だけで弾けます。',
    sections: [
      {
        heading: '半音がどこにあるか',
        body: 'この並びで半音になるのは、第3音と第4音のあいだ、そして第7音と主音のあいだの2か所だけです。ハ長調ならミとファ、シとドにあたります。半音の位置がこの2か所に決まっていることが長音階の定義であり、主音がどの音であってもこの間隔を保てば長音階になります。ト長調でファに♯が付くのは、第7音と主音のあいだ、すなわちファとソのあいだを半音にするためです。',
      },
      {
        heading: '明るく聞こえる理由',
        body: '主音から第3音までが長3度になるため、主和音が長三和音になります。加えて第7音が主音の半音下、すなわち導音として働くため、主音へ帰る力が明確です。明るさと帰属感がはっきりしているという二つの性質が、この音階を西洋音楽の基本にしました。',
      },
      {
        heading: '練習での意味',
        body: '音階練習は指の運動としてだけ扱われがちですが、半音がどこにあるかを耳で確認する作業でもあります。第3音から第4音、第7音から主音へ移るときの狭さを意識して弾くと、その調の輪郭がつかめます。指番号を覚えるより、半音の位置を体で覚えることのほうが読譜に直結します。',
      },
    ],
    confusions: [
      { term: 'Natural minor', slug: 'natural-minor', note: '長音階の第6音から始めたときと同じ並びになる短音階。' },
      { term: 'Key signature', slug: 'key-signature', note: 'どの音に♯や♭を付ければ長音階の間隔が保たれるかを示すもの。' },
      { term: 'Diatonic', slug: 'diatonic', note: 'この音階に含まれる音だけで構成されている状態。' },
    ],
  },

  'natural-minor': {
    lead: '自然短音階は、長音階の第6音から始めたときと同じ並びになる短音階です。イ短調ならピアノの白鍵だけで弾けます。',
    sections: [
      {
        heading: '長音階との関係',
        body: 'ハ長調の音階をラから始めて並べ直すと、ラ・シ・ド・レ・ミ・ファ・ソとなり、これがイ短調の自然短音階です。使っている音はまったく同じで、どの音を中心と感じるかだけが違います。この関係にある長調と短調を平行調と呼び、調号を共有します。',
      },
      {
        heading: '導音がないという性質',
        body: 'イ短調の第7音はソで、主音ラとのあいだが全音離れています。半音ではないため主音へ吸い寄せられる力が弱く、終わりの感覚が弱くなります。この性質から、素朴で古風な響きになります。逆に言えば、調の中心をはっきり示したい場合には第7音を半音上げる必要があり、それが和声的短音階です。',
      },
      {
        heading: '楽譜で見分ける',
        body: '短調の曲で第7音に臨時記号のシャープが付いていない箇所は、自然短音階の音が使われています。同じ曲の中で、和音が主和音へ向かう場所では第7音を上げ、旋律が下降する場所や旋法的な響きを狙う場所では上げない、という書き分けが行われることがあります。臨時記号の有無は装飾ではなく、その箇所の和声的な意図を示しています。',
      },
    ],
    confusions: [
      { term: 'Harmonic minor', slug: 'harmonic-minor', note: '第7音を半音上げ、導音を作った短音階。' },
      { term: 'Melodic minor', slug: 'melodic-minor', note: '上行と下行で形が変わる短音階。下行時は自然短音階に戻る。' },
      { term: 'Relative keys', slug: 'relative-keys', note: '同じ調号を共有する長調と短調の関係。' },
    ],
  },

  'harmonic-minor': {
    lead: '和声的短音階は、自然短音階の第7音を半音上げた音階です。イ短調ならソ♯を使います。名前に「和声的」と付くのは、和音の要求から生まれた形だからです。',
    sections: [
      {
        heading: 'なぜ第7音を上げるのか',
        body: '自然短音階では第7音と主音のあいだが全音離れているため、主音へ向かう引力が弱くなります。第7音を半音上げると主音の半音下に来て導音になり、主和音へ帰る力が生まれます。同時に、属音を根音とする和音が長三和音になり、属七の和音が使えるようになります。短調でも属和音による決着が可能になるのは、この操作の結果です。',
      },
      {
        heading: '代償として生じる響き',
        body: '第7音を上げると、第6音と第7音のあいだが1音半（半音3つ）に広がります。イ短調ならファとソ♯のあいだで、これは増2度と呼ばれる音程です。この広い跳躍が、和声的短音階に独特の響きを与えています。歌うには不自然な幅であるため、旋律としては扱いにくく、その解決策として旋律的短音階が用いられます。',
      },
      {
        heading: '楽譜での現れ方',
        body: '短調の曲で第7音に臨時記号のシャープが付いているのは、和声的短音階の音を使っているためです。調号には含まれず、必要な箇所ごとに臨時記号で書かれるのが慣習です。イ短調の楽譜でソ♯が繰り返し現れるのは作曲者の気分ではなく、その箇所が属和音を経由していることの表示です。',
      },
    ],
    confusions: [
      { term: 'Natural minor', slug: 'natural-minor', note: '第7音を上げていない短音階。主音への引力が弱い。' },
      { term: 'Melodic minor', slug: 'melodic-minor', note: '第6音と第7音の広い跳躍を避けるため、上行時に第6音も上げる。' },
      { term: 'Leading tone', slug: 'leading-tone', note: '主音の半音下の音。和声的短音階はこの音を作るための操作。' },
    ],
  },

  'melodic-minor': {
    lead: '旋律的短音階は、上行時に第6音と第7音を半音上げ、下行時は自然短音階に戻る音階です。上行と下行で形が変わるのが特徴です。',
    sections: [
      {
        heading: '生まれた理由',
        body: '和声的短音階では第6音と第7音のあいだが1音半に広がり、歌うには不自然な幅になります。この跳躍を避けるために第6音も半音上げると、第6音・第7音・主音がすべて全音と半音でなめらかにつながります。イ短調なら上行はラ・シ・ド・レ・ミ・ファ♯・ソ♯・ラです。旋律を自然に歌わせるための工夫であり、それが名前の由来です。',
      },
      {
        heading: '下行で元に戻す理由',
        body: '下行するときは主音へ上がっていく必要がないため、導音を作る意味がありません。第7音と第6音を元に戻すと自然短音階の並びになり、短調本来の響きが保たれます。上行では主音へ向かうなめらかさを、下行では短調らしさを取る、という使い分けです。',
      },
      {
        heading: '実際の曲での扱い',
        body: '上行なら必ず上げ、下行なら必ず戻すという規則が機械的に適用されるわけではありません。実際の楽譜では、その箇所の和声や旋律の向かう先に応じて書き分けられています。練習用の音階として上行下行を作り分けて弾くのは、この二つの形を耳と指に入れておくためです。',
      },
    ],
    confusions: [
      { term: 'Harmonic minor', slug: 'harmonic-minor', note: '第7音のみを上げた短音階。第6音と第7音のあいだが1音半に開く。' },
      { term: 'Natural minor', slug: 'natural-minor', note: '旋律的短音階の下行形と同じ並び。' },
    ],
  },

  'chromatic-scale': {
    lead: '半音階はオクターブを12の半音ですべて埋めた音階です。ピアノの白鍵と黒鍵を順に全部弾くとこの音階になります。',
    sections: [
      {
        heading: '中心を持たない',
        body: 'すべての音が等間隔に並んでいるため、どの音が中心なのかを響きから決めることができません。長音階や短音階が半音の位置によって主音を示すのに対して、この音階には目印がありません。そのため単独では方向感を持たず、旋律として自立しにくい性質があります。',
      },
      {
        heading: '使われ方',
        body: '実際の曲では、音階全体としてではなく部分的に用いられます。旋律を装飾する、緊張を高める、二つの調のあいだを橋渡しする、といった目的です。調の外の音を通ることで一時的に不安定さを作り、それが解決したときの安定感を強めます。',
      },
      {
        heading: '演奏上の要点',
        body: '半音の連続は音の間隔が均等であるため、粒をそろえて弾かないと不均一さが目立ちます。ピアノでは白鍵と黒鍵が交互に来るため指がかりが変わり、指番号を決めておくことが必要です。速い半音階では、一つ一つの音を聞かせるより、全体を一本の線として通すほうが目的に合うことが多くあります。',
      },
    ],
    confusions: [
      { term: 'Whole tone scale', slug: 'whole-tone-scale', note: 'すべて全音で並ぶ6音の音階。こちらも中心を持たない。' },
      { term: 'Diatonic', slug: 'diatonic', note: '調の音階に含まれる音だけを使う状態。半音階的の対義語。' },
    ],
  },

  'whole-tone-scale': {
    lead: '全音音階は、すべての音が全音間隔で並ぶ6音の音階です。半音がないため、この音階には導音が存在しません。',
    sections: [
      {
        heading: '主音へ帰る力がない',
        body: '調性が機能するのは、導音が主音の半音下にあって強く引き寄せられるからです。全音音階には半音の隣接が一つもないため、この引力が働きません。どの音も他の音と同じ関係にあり、中心を決める根拠がありません。結果として、輪郭のぼやけた浮遊感が生まれます。',
      },
      {
        heading: '2種類しか存在しない',
        body: 'ドから全音ずつ積むとド・レ・ミ・ファ♯・ソ♯・ラ♯、ド♯から積むとド♯・レ♯・ファ・ソ・ラ・シ。この2つで12の半音がすべて尽きるため、全音音階は移調しても実質2種類しかありません。長音階が12の調を持つのに対して、この音階は色の選択肢が2つだけです。',
      },
      {
        heading: '使われた例',
        body: 'ドビュッシーをはじめとする印象主義の作品で特徴的に用いられました。調性の枠を保ちながら、その中心を一時的に曖昧にする手段として機能します。',
      },
    ],
    confusions: [
      { term: 'Chromatic scale', slug: 'chromatic-scale', note: 'すべて半音で並ぶ12音の音階。こちらも中心を持たない。' },
      { term: 'Pentatonic scale', slug: 'pentatonic-scale', note: '半音を含まない5音の音階。全音音階と同じく濁りにくい。' },
    ],
  },

  'pentatonic-scale': {
    lead: '五音音階は5つの音からなる音階です。半音を含まない形が広く使われ、どの音を重ねても濁りにくいという性質を持ちます。',
    sections: [
      {
        heading: 'どんな並びか',
        body: '代表的な形は、長音階から第4音と第7音を抜いたものです。ハ長調ならド・レ・ミ・ソ・ラ。抜いた2音は、長音階で半音の隣接を作っていた音です。これらを取り除くと音階の中に半音が一つもなくなり、どの2音を同時に鳴らしても強い不協和が生じません。ピアノの黒鍵5つを弾くと、この音階になります。',
      },
      {
        heading: '各地で独立に発達した',
        body: '日本の民謡、中国音楽、スコットランド民謡、ブルースなど、地理的に離れた文化圏で五音音階が使われています。互いの影響では説明できない広がりであることから、人間の耳にとって自然な音の並びだと考えられています。',
      },
      {
        heading: '演奏と即興での扱い',
        body: '半音を含まないため、この音階の中で音を選べば大きく外れることがありません。即興演奏の入り口として使われるのはこの理由です。一方で、導音がないため終止の力が弱く、はっきり終わらせたい場面では音階の外の音が必要になります。',
      },
    ],
    confusions: [
      { term: 'Gapped scale', slug: 'gapped-scale', note: '特定の音を抜いた音階の総称。五音音階はその代表例。' },
      { term: 'Major scale', slug: 'major-scale', note: '五音音階は長音階から第4音と第7音を抜いた形にあたる。' },
    ],
  },

  'treble-clef': {
    lead: 'ト音記号は、五線の下から2番目の線がト音（G）であることを示す記号です。記号の渦の中心がその線を通っています。',
    sections: [
      {
        heading: '渦の中心を見る',
        body: 'この記号の役割は、五線のどの線がどの音かを一つ決めることです。渦を巻いている部分の中心が第2線（下から2番目）を通っており、その線がG音を表します。基準が1つ決まれば、残りの線と間はそこから順に数えられます。記号の形はアルファベットの G が変形したものです。',
      },
      {
        heading: 'どのパートで使われるか',
        body: '高音域を加線なしで書けるため、ヴァイオリン、フルート、オーボエ、クラリネット、トランペット、女声、ピアノの右手など、多くのパートで使われます。楽譜で最も目にする機会が多い音部記号です。',
      },
      {
        heading: 'オクターブ下で読む場合',
        body: 'テノールの声楽譜やギターの楽譜では、ト音記号の下に小さく 8 を付けて、記された音より1オクターブ低く演奏することを示すことがあります。数字がない場合でも、慣習的に1オクターブ下で読む楽譜があります。',
      },
    ],
    confusions: [
      { term: 'Bass clef', slug: 'bass-clef', note: 'ヘ音記号。低音域を記すのに使う。' },
      { term: 'Alto clef', slug: 'alto-clef', note: 'ハ音記号。中音域を記すのに使う。' },
    ],
  },

  'bass-clef': {
    lead: 'ヘ音記号は、五線の上から2番目の線がヘ音（F）であることを示す記号です。記号の点二つがその線を挟んでいます。',
    sections: [
      {
        heading: '点の位置を見る',
        body: '記号の右側にある2つの点が、第4線（下から4番目、上から2番目）を上下から挟んでいます。その線がF音です。記号の形はアルファベットの F が変形したものです。書くときに点の位置がずれると基準が変わってしまうため、線を挟む位置を守る必要があります。',
      },
      {
        heading: 'どのパートで使われるか',
        body: '低音域を加線なしで書けるため、チェロ、コントラバス、ファゴット、トロンボーン、テューバ、男声の低声部、ピアノの左手などで使われます。',
      },
      {
        heading: 'ト音記号との位置関係',
        body: 'ヘ音記号の第4線がF、ト音記号の第2線がG。この二つを大譜表として上下に並べると、あいだに中央ハ（C）が来ます。中央ハはヘ音記号の上に1本加線した位置、ト音記号の下に1本加線した位置にあたり、同じ音を二通りに書けます。ピアノの楽譜で右手と左手のあいだの音がどちらの段にも書けるのは、この重なりのためです。',
      },
    ],
    confusions: [
      { term: 'Treble clef', slug: 'treble-clef', note: 'ト音記号。高音域を記すのに使う。' },
      { term: 'Ledger line', slug: 'ledger-line', note: '五線に収まらない音を書くための加線。' },
    ],
  },

  'alto-clef': {
    lead: 'ハ音記号は、記号の中心が置かれた線が中央ハ（C）であることを示します。五線の第3線に置かれたものをアルト記号と呼びます。',
    sections: [
      {
        heading: '置く位置が変えられる記号',
        body: 'ト音記号とヘ音記号が五線上の決まった位置に置かれるのに対して、ハ音記号は置く位置を変えられます。記号の中央がくぼんでいる部分が通る線が中央ハになるため、その位置を上下させれば基準が移動します。第3線に置いたものがアルト記号、第4線に置いたものがテノール記号です。',
      },
      {
        heading: 'ヴィオラのための記譜',
        body: 'アルト記号を主に使うのはヴィオラです。ヴィオラの音域はト音記号では下に加線が多くなり、ヘ音記号では上に加線が多くなります。中央ハを五線の中央に置くアルト記号なら、その音域の大半を加線なしで書けます。読みにくい記号だと言われますが、その楽器にとっては最も読みやすい記譜です。',
      },
      {
        heading: 'テノール記号との使い分け',
        body: '第4線に置くテノール記号は、チェロやファゴット、トロンボーンの高音域で使われます。ヘ音記号のままだと加線が増える範囲を、記号を切り替えることで五線内に収めます。曲の途中で音部記号が変わるのは、この読みやすさの調整のためです。',
      },
    ],
    confusions: [
      { term: 'Treble clef', slug: 'treble-clef', note: '第2線をGに固定した記号。' },
      { term: 'Bass clef', slug: 'bass-clef', note: '第4線をFに固定した記号。' },
    ],
  },

  'accidental': {
    lead: '臨時記号は、調号とは別に、曲の途中で音の高さを一時的に変える記号です。効力の範囲を誤解すると読み間違いにつながります。',
    sections: [
      {
        heading: '効力はその小節の中だけ',
        body: '臨時記号が有効なのは、それが書かれた小節の中だけです。小節線を越えると効力が切れ、調号の状態に戻ります。同じ小節内であれば、同じ高さの音すべてに適用されます。1拍目でファに♯が付いていれば、その小節の3拍目のファも♯です。ここで♯を付け忘れて読むのが、最もよくある読譜の誤りです。',
      },
      {
        heading: 'オクターブ違いには適用されない',
        body: '臨時記号は「その高さの音」に効きます。したがって、1オクターブ上や下の同名の音には適用されません。実際の楽譜では混乱を避けるため、必要なオクターブに改めて記号を書き添えることが一般的です。',
      },
      {
        heading: '親切記号',
        body: '効力が切れているにもかかわらず、念のために書かれる記号があります。小節をまたいだ直後や、直前の小節で臨時記号が付いていた音に対して、♮ を書いて元に戻ったことを明示する場合です。規則上は不要ですが、読み間違いを防ぐために置かれます。括弧に入れて書かれることもあります。',
      },
      {
        heading: 'タイで小節を越えた場合',
        body: '臨時記号の付いた音がタイで次の小節へつながっている場合、その音は臨時記号の高さを保ちます。ただし、そのタイが切れた後に同じ高さの音が改めて出てきたときは、効力は残りません。この箇所は誤読が起きやすいため、慎重な楽譜では改めて記号が書かれます。',
      },
    ],
    confusions: [
      { term: 'Key signature', slug: 'key-signature', note: '曲全体に効く記号。臨時記号は一時的な変更。' },
      { term: 'Double sharp', slug: 'double-sharp', note: '半音2つ上げる臨時記号。' },
      { term: 'Double flat', slug: 'double-flat', note: '半音2つ下げる臨時記号。' },
    ],
  },

  'double-sharp': {
    lead: '重嬰記号は、音を半音2つ分（全音）上げる臨時記号です。♯を2つ書く代わりに、x に似た形の記号を使います。',
    sections: [
      {
        heading: 'なぜ2つ上げる必要があるのか',
        body: 'ファを全音上げた音は、鍵盤の上ではソと同じ鍵です。それならソと書けばよいはずですが、そう書けない場合があります。たとえば嬰ト短調（G♯ minor）で導音を作るには、第7音のファ♯をさらに半音上げる必要があります。この音をソと書くと、音階の第7音であるべき音が第1音の名前になってしまい、音階の構造が読めなくなります。ファ♯♯（重嬰ファ）と書くことで、あくまで第7音を上げた音であることが保たれます。',
      },
      {
        heading: '記号の読み方',
        body: '重嬰記号が付いた音は、調号の♯を含めた上でさらに半音2つ上げるのではなく、素の音名から半音2つ上げた高さになります。調号でファに♯が付いている調でファに重嬰記号が書かれていれば、その音はファから全音上、つまり鍵盤上のソです。臨時記号は調号を上書きします。',
      },
      {
        heading: '実際に出会う場面',
        body: '♯の多い短調の曲で、導音を作るときに現れます。嬰ト短調、嬰ニ短調、嬰イ短調などです。見慣れない記号ですが、意味は単純で、そこが導音であることの合図として読めば混乱しません。',
      },
    ],
    confusions: [
      { term: 'Double flat', slug: 'double-flat', note: '半音2つ下げる記号。♭の多い調で現れる。' },
      { term: 'Enharmonic', slug: 'enharmonic', note: '同じ高さの音が異なる音名で書かれる関係。重嬰記号はこの関係の一例。' },
    ],
  },

  'double-flat': {
    lead: '重変記号は、音を半音2つ分（全音）下げる臨時記号です。♭を2つ並べて書きます。',
    sections: [
      {
        heading: '鍵盤上では隣の音と同じ',
        body: 'シを全音下げた音は、鍵盤の上ではラと同じです。それでも重変記号を使うのは、その音が音階の中で果たしている役割を保つためです。♭の多い調で音階の音を半音下げる必要が生じたとき、すでに♭が付いている音をさらに下げることになり、重変記号が必要になります。',
      },
      {
        heading: '和音の中での役割',
        body: '減七の和音や増六の和音を書き表すとき、和音の構成音を3度の積み重ねとして正しく示すために重変記号が使われます。同じ響きを異名同音で書き換えれば記号は減りますが、その和音がどういう構造なのかが読み取れなくなります。記号の多さは、和声を正確に書くための代償です。',
      },
      {
        heading: '演奏上の要点',
        body: '読むときは、まず素の音名から半音2つ下げた高さを確定させます。調号は臨時記号に上書きされるため、調号の♭と重ねて数える必要はありません。指の位置としては隣接する白鍵や黒鍵になることが多く、いったん実際の鍵を確認してから書き込んでおくと安全です。',
      },
    ],
    confusions: [
      { term: 'Double sharp', slug: 'double-sharp', note: '半音2つ上げる記号。♯の多い調で現れる。' },
      { term: 'Enharmonic', slug: 'enharmonic', note: '同じ高さの音を異なる音名で書く関係。' },
    ],
  },

  'dotted-note': {
    lead: '付点音符の点は、その音符の半分の長さを加えることを意味します。付点4分音符なら4分音符＋8分音符で1拍半になります。',
    sections: [
      {
        heading: '計算の仕組み',
        body: '点は「元の音符の半分」を足します。付点2分音符は2分音符＋4分音符で3拍、付点4分音符は1拍半、付点8分音符は4分音符の4分の3にあたる長さです。元の音符が何拍かによって加わる量が変わるため、点の意味を「半拍足す」と覚えると誤ります。',
      },
      {
        heading: '複付点',
        body: '点を2つ付けた複付点は、さらにその半分を加えます。複付点4分音符なら、4分音符＋8分音符＋16分音符で、4分音符の4分の7の長さです。付点の後に続く短い音符がさらに短くなるため、リズムの鋭さが増します。',
      },
      {
        heading: '演奏上の要点',
        body: '付点のリズムは、付点の音を長く取りすぎるか、後に続く短い音を早く出しすぎるかで崩れます。付点8分音符＋16分音符の組み合わせでは、16分音符を拍の4分の1の位置に正確に置く必要があります。数えるときは、付点の音を細かい単位に分解して、短い音がどこに入るかを確認します。',
      },
      {
        heading: '時代による解釈の違い',
        body: 'バロック時代の付点の長さについては、記譜どおりに演奏したのか、より鋭くあるいは緩く演奏したのかという議論があります。当時の演奏習慣に関する問題であり、演奏者や研究者のあいだで見解が分かれています。',
      },
    ],
    confusions: [
      { term: 'Triplet', slug: 'triplet', note: '本来2分割される長さを3等分したもの。付点とは分割の仕組みが異なる。' },
      { term: 'Tie', slug: 'tie', note: 'タイでも音を延ばせるが、小節をまたぐ場合や複雑な長さではタイを使う。' },
    ],
  },

  'tie': {
    lead: 'タイは、同じ高さの2つの音符を結んで1つの長い音として演奏することを示す弧線です。形が似ているスラーとは意味がまったく違います。',
    sections: [
      {
        heading: 'スラーとの見分け方',
        body: '結ばれている2つの音が同じ高さならタイ、違う高さならスラーです。タイでは2つ目の音を弾き直さず、1つ目の音を延ばし続けます。スラーは高さの違う音をなめらかにつなぐ指示で、それぞれの音は発音されます。見た目が同じ弧線なので、音の高さを見て判断します。',
      },
      {
        heading: 'なぜタイが必要なのか',
        body: '小節線を越えて音を延ばす場合、1つの音符では書き表せません。3拍半のような、単一の音符や付点では表せない長さも同じです。タイを使えば、小節の区切りと拍の構造を壊さずに任意の長さを書けます。逆に言えば、タイのある場所は、そこに小節線か拍の区切りがあることの表示でもあります。',
      },
      {
        heading: '演奏上の要点',
        body: 'タイでつながれた音を延ばしているあいだも、拍は進んでいます。2つ目の音の位置を数えないまま延ばすと、長さが曖昧になります。特に小節をまたぐタイでは、次の小節の1拍目が音の中に埋もれるため、そこを意識しておく必要があります。管楽器や声楽では、タイの途中でブレスを入れないことが前提です。',
      },
      {
        heading: '臨時記号との関係',
        body: '臨時記号の付いた音がタイで次の小節へつながる場合、その音は臨時記号の高さを保ちます。タイが切れた後に同じ高さの音が改めて出てきたときは、効力は残りません。',
      },
    ],
    confusions: [
      { term: 'Legato', slug: 'legato', note: '音をつなげて演奏する指示。スラーがこれを表し、タイとは別物。' },
      { term: 'Dotted note', slug: 'dotted-note', note: '付点でも音を延ばせるが、小節をまたぐ場合はタイを使う。' },
    ],
  },

  'triplet': {
    lead: '3連符は、本来2つに分割される長さを3等分したものです。4分音符1拍を3つに分ける8分3連符が代表的です。',
    sections: [
      {
        heading: '記譜の見方',
        body: '3つの音符を連桁でくくり、上または下に 3 の数字を書きます。8分音符3つに 3 が付いていれば、それは1拍の中に3つ入るという意味です。通常の8分音符2つで1拍なので、記号としては同じ8分音符でありながら長さが違うことになります。数字がその読み替えの合図です。',
      },
      {
        heading: 'リズムに揺らぎが生まれる理由',
        body: '曲の基本的な分割が2分割であるとき、そこへ3分割が持ち込まれると、拍の内部で異なる格子が同時に働きます。この不一致が推進力や揺らぎとして感じられます。3連符が多用される箇所は、拍を割る単位が切り替わる場所として読めます。',
      },
      {
        heading: '正確に演奏するために',
        body: '3連符は、真ん中の音の位置が崩れやすいところです。最初と最後は拍の位置に近いため合わせやすいのですが、2番目の音が早すぎたり遅すぎたりすると、付点のリズムのように聞こえてしまいます。3つを均等に入れることが要点です。テンポの遅い箇所では、3連符を口で言いながら手で拍を打つ練習が有効です。',
      },
      {
        heading: '2つのリズムが重なる場合',
        body: '片手が3連符、もう片手が8分音符や16分音符という書き方があります。この場合、両方の最初の音だけが拍の頭で一致し、あいだの音は互いにずれます。それぞれを別々に正確に刻み、頭だけを合わせるという意識で扱います。',
      },
    ],
    confusions: [
      { term: 'Dotted note', slug: 'dotted-note', note: '付点は2分割の枠内で長さを配分する。3連符は枠そのものを3分割する。' },
      { term: 'Compound meter', slug: 'compound-meter', note: '1拍が3等分されることが前提の拍子。3連符は2分割の拍子に3分割を持ち込む。' },
    ],
  },

  'time-signature': {
    lead: '拍子記号は、拍のまとまり方を指定する記号です。分数の形で書かれますが、分数として計算する記号ではありません。',
    sections: [
      {
        heading: '上と下の数字の意味',
        body: '下の数字は、何を1拍の単位とするかを示します。4なら4分音符、8なら8分音符、2なら2分音符です。上の数字は、その単位がいくつで1小節になるかを示します。4分の3なら4分音符が3つで1小節です。上下を割り算するのではなく、それぞれ別の情報を持っています。',
      },
      {
        heading: '単純拍子と複合拍子',
        body: '4分の4や4分の3のように1拍が2等分される拍子を単純拍子、8分の6や8分の9のように1拍が3等分される拍子を複合拍子と呼びます。8分の6は8分音符6つですが、実際には2拍として感じ、各拍が3つに割れます。8分の3と8分の6の違いは、この拍の感じ方にあります。',
      },
      {
        heading: 'C に似た記号',
        body: 'C のような記号は4分の4を表し、日本語では「4分の4拍子」と読みます。この記号に縦線を引いたものは2分の2を表し、alla breve とも呼ばれます。C は Common time の頭文字ではなく、中世の記譜法で完全な拍子を表す円が半分に欠けた形に由来します。',
      },
      {
        heading: '演奏上の意味',
        body: '同じ音符の並びでも、拍子が違えばどこに重心が来るかが変わります。4分の3と4分の4では、強拍の周期が3拍ごとか4拍ごとかで違い、フレーズの区切りも変わります。拍子記号を読むことは、小節のどこに重みがあるかを確認する作業です。曲の途中で拍子が変わる箇所は、その重心の周期が切り替わる場所です。',
      },
    ],
    confusions: [
      { term: 'Simple meter', slug: 'simple-meter', note: '1拍が2等分される拍子。' },
      { term: 'Compound meter', slug: 'compound-meter', note: '1拍が3等分される拍子。' },
      { term: 'Downbeat', slug: 'downbeat', note: '小節の1拍目。拍子記号はこの周期を決める。' },
    ],
  },

  'anacrusis': {
    lead: 'アウフタクトは、曲やフレーズが小節の1拍目ではなく、その前の弱拍から始まることです。日本語では「弱起」と呼びます。',
    sections: [
      {
        heading: '呼び名',
        body: '英語では anacrusis、ドイツ語由来の Auftakt（アウフタクト）でも呼ばれ、日本では後者が定着しています。pickup（ピックアップ）という言い方もあります。いずれも同じものを指します。',
      },
      {
        heading: '最初と最後の小節',
        body: 'アウフタクトで始まる曲では、冒頭の小節が拍子記号どおりの長さに足りません。慣習として、曲の最後の小節を同じ分だけ短くし、冒頭と合わせて1小節分になるように書きます。4分の4の曲が4分音符1つで始まっていれば、最後の小節は3拍で終わります。この対応が取れていることが、アウフタクトである証拠にもなります。',
      },
      {
        heading: '演奏上の要点',
        body: 'アウフタクトの音は、次に来る1拍目へ向かう途中の音です。ここを強く弾くと、そこが小節の頭のように聞こえてしまい、拍節の感覚が1拍ずれます。軽く扱い、重心を次の音に置くのが基本です。指揮では、この拍を振ることで奏者に開始の合図を出します。',
      },
      {
        heading: 'フレーズの途中でも現れる',
        body: '曲の冒頭に限らず、フレーズが小節線をまたいで始まる箇所は同じ扱いになります。旋律の区切りが小節線と一致していない曲では、どこがフレーズの頭なのかを見極める必要があります。小節線はフレーズの区切りではなく、拍の重心を示す線です。',
      },
    ],
    confusions: [
      { term: 'Upbeat', slug: 'upbeat', note: '小節の最後の弱拍。アウフタクトはこの位置から始まること。' },
      { term: 'Downbeat', slug: 'downbeat', note: '小節の1拍目。アウフタクトが向かっていく先。' },
    ],
  },

  'downbeat': {
    lead: '強拍は小節の1拍目です。指揮者の腕が下へ振り下ろされることに由来する名前で、小節の中で最も重みのある位置です。',
    sections: [
      {
        heading: 'なぜ重みがあるのか',
        body: '小節の1拍目は、和音が変わる位置であることが多く、旋律の区切りもここに置かれます。拍子記号が決めているのは、この重心が何拍ごとに来るかという周期です。楽譜の小節線は、次の1拍目がどこかを示すための線であり、フレーズの区切りを示すものではありません。',
      },
      {
        heading: '演奏上の要点',
        body: '1拍目に自然な重心が来ているかどうかが、リズムの安定感を左右します。ただし、重みを音量で表そうとすると、すべての小節の頭が強くなって単調になります。実際には、和音の変化、微妙な時間の取り方、音の立ち上がりの質などで重心が伝わります。長いフレーズでは、いくつかの小節をまとめて一つの大きな重心へ向かう構造になっていることが多く、すべての1拍目を同じ重さで扱うとその構造が消えます。',
      },
      {
        heading: '意図的にずらす場合',
        body: '1拍目を休符にする、あるいはタイで前の小節から音を延ばして1拍目に新しい音を置かない、という書き方があります。この場合、重心があるべき位置に音がないため、拍節の感覚が揺らぎます。シンコペーションはこの仕組みを利用したものです。',
      },
    ],
    confusions: [
      { term: 'Upbeat', slug: 'upbeat', note: '小節の最後の弱拍。次の強拍へ向かう拍。' },
      { term: 'Anacrusis', slug: 'anacrusis', note: '弱拍から始まること。最初の強拍が小節の2つ目以降に来る。' },
    ],
  },

  'upbeat': {
    lead: '弱拍は小節の最後の拍です。指揮者の腕が上へ上がることに由来する名前で、次の強拍へ向かっていく位置にあります。',
    sections: [
      {
        heading: '向かう拍',
        body: 'この拍は、それ自体で完結するのではなく、次の小節の1拍目へ渡すための位置にあります。したがって重く弾くと音楽が前へ進まなくなり、そこで一区切りついたように聞こえてしまいます。軽く扱い、次へ渡す意識を持つのが基本です。',
      },
      {
        heading: '指揮での意味',
        body: '指揮者が最初の音を出す前に腕を上げる動作は、この拍を示しています。奏者はその動きの速さから曲のテンポを読み取り、下へ振り下ろされる瞬間に音を出します。アウフタクトで始まる曲では、この上げる動作そのものが最初の音の合図になります。',
      },
      {
        heading: '用語の使い方について',
        body: '英語の upbeat は、小節の最後の弱拍を指す場合と、曲の冒頭のアウフタクト（弱起）を指す場合の両方に使われます。文脈で判断する必要があります。日本語では前者を弱拍、後者をアウフタクトと呼び分けるのが一般的です。',
      },
    ],
    confusions: [
      { term: 'Downbeat', slug: 'downbeat', note: '小節の1拍目。弱拍が向かっていく先。' },
      { term: 'Anacrusis', slug: 'anacrusis', note: '曲やフレーズが弱拍から始まること。' },
    ],
  },

  'perfect-cadence': {
    lead: '完全終止は属和音から主和音へ進む終止で、最も強い決着感を持ちます。「ここで終わる」ことを聴き手に明確に伝えます。',
    sections: [
      {
        heading: 'V から I へ',
        body: '属和音には導音が含まれ、属七の和音にすれば三全音も含まれます。これらが主和音へ向かって解決することで、決着の感覚が生まれます。ハ長調ならソ・シ・レ（＋ファ）からド・ミ・ソへ。シがドへ半音上がり、ファがミへ半音下がる動きが、この終止の力の源です。',
      },
      {
        heading: '「完全」の条件',
        body: '英語では authentic cadence（正格終止）と perfect cadence が区別されることがあります。V-I の進行であれば正格終止で、そのうえで両方の和音が基本形（根音が最低音）にあり、旋律が主音で終わるものを完全終止と呼びます。旋律が主音以外で終われば決着の力が弱まり、不完全終止として扱われます。用語の区別は教科書や言語圏によって揺れがあるため、実際に和音がどう配置されているかを見るのが確実です。',
      },
      {
        heading: '演奏上の要点',
        body: 'この終止は決着を示す場所なので、そこへ向かってフレーズを収める必要があります。しかし曲の途中にある完全終止をすべて曲の終わりのように扱うと、音楽が何度も止まってしまいます。段落の終わりなのか楽章の終わりなのかを見極め、収め方の深さを変えることが求められます。属和音から主和音へ移るときにわずかな時間を取るかどうかも、決着の重さを調整する手段です。',
      },
    ],
    confusions: [
      { term: 'Plagal cadence', slug: 'plagal-cadence', note: 'IV から I へ進む終止。決着より余韻を残す。' },
      { term: 'Half cadence', slug: 'half-cadence', note: 'V で止まる終止。続きを期待させる。' },
      { term: 'Deceptive cadence', slug: 'deceptive-cadence', note: 'V から I へ行くと思わせて別の和音へ進む終止。' },
    ],
  },

  'plagal-cadence': {
    lead: '変格終止は下属和音から主和音へ進む終止です。讃美歌の最後の「アーメン」がこの進行で歌われることから、アーメン終止とも呼ばれます。',
    sections: [
      {
        heading: '完全終止との違い',
        body: 'IV から I へ進む場合、導音が含まれないため主音への半音の引力が働きません。ハ長調ならファ・ラ・ドからド・ミ・ソへ。共通音のドを保ったまま外側の音が内側へ収まる動きで、緊張の解決というより、広がった響きが元へ戻る感覚になります。そのため決着の力は完全終止より弱く、終わりを宣言するというより余韻を残します。',
      },
      {
        heading: '完全終止の後に付け加えられる',
        body: 'この性格から、曲を V-I で締めた後に IV-I を付け足して閉じることがあります。決着はすでに済んでおり、その後に響きを広げてから収める形です。讃美歌の「アーメン」がまさにこの位置に置かれています。',
      },
      {
        heading: '演奏上の要点',
        body: '完全終止と同じように前へ押すと、行き先のない緊張になります。IV の和音は外へ開く方向の響きなので、音を広く取って豊かに鳴らし、そこから静かに主和音へ収めると性格が出ます。音量を落として終わるのが唯一の形ではなく、開いた響きを保ったまま収めることもできます。',
      },
    ],
    confusions: [
      { term: 'Perfect cadence', slug: 'perfect-cadence', note: 'V から I へ進む終止。導音があるため決着が強い。' },
      { term: 'Subdominant', slug: 'subdominant', note: '下属音。変格終止の起点となる和音の根音。' },
    ],
  },

  'half-cadence': {
    lead: '半終止は属和音で一区切りつける終止です。安定した主和音で終わらないため、話の途中で息を継いだような感覚が残ります。',
    sections: [
      {
        heading: '終わらない終止',
        body: '終止と呼ばれますが、この形は完結しません。属和音には導音や三全音が含まれ、それらが解決していない状態で止まるため、続きへの期待が保たれます。ハ長調ならソ・シ・レで止まった状態です。区切りではあるが結論ではない、という位置づけになります。',
      },
      {
        heading: '楽曲の中での位置',
        body: '楽曲の前半を締めくくり、後半へ橋渡しする場面でよく使われます。二部形式や小規模な楽曲では、前半の終わりが半終止、後半の終わりが完全終止という対応になることが多くあります。この対比があることで、どちらが本当の終わりなのかが聴き手に伝わります。',
      },
      {
        heading: '演奏上の要点',
        body: 'ここで音楽が終わったように収めてしまうと、続きが唐突に始まったように聞こえます。和音を鳴らしきったまま、少し前へ張った状態で保つのが基本です。テンポを緩めるとしても、完全終止のときより浅く留めます。',
      },
    ],
    confusions: [
      { term: 'Perfect cadence', slug: 'perfect-cadence', note: 'V から I へ進み完結する終止。' },
      { term: 'Dominant', slug: 'dominant', note: '属音。半終止はこの和音で止まる。' },
    ],
  },

  'deceptive-cadence': {
    lead: '偽終止は、属和音から主和音へ進むと思わせて別の和音へ進む終止です。多くの場合、進む先は VI の和音です。',
    sections: [
      {
        heading: '予想を利用する仕組み',
        body: '属和音が鳴れば次に主和音が来る、という予想が聴き手の中に成立しています。この予想を外すことが偽終止の効果です。ハ長調でソ・シ・レ（＋ファ）からラ・ド・ミへ進むと、主和音と2音を共有しながら短三和音になるため、着地したのに落ち着かないという状態になります。',
      },
      {
        heading: '曲を引き延ばす',
        body: '終わるはずの場所で終わらなかったため、音楽は続きを必要とします。この性質を使って、終結部を長くしたり、もう一度クライマックスを作ったりします。終わりそうな箇所が何度も続く終結部は、この操作が繰り返されている場合があります。',
      },
      {
        heading: '演奏上の要点',
        body: '聴き手が主和音を予想していることが前提の箇所です。したがって、そこまでは完全終止へ向かうつもりで進め、和音が変わった瞬間に音色や重心を変えると、予想が外れたことが伝わります。最初から違う和音が来ると分かっているように弾くと、効果が消えます。',
      },
      {
        heading: '呼び名',
        body: '英語では interrupted cadence（イギリス）や deceptive cadence とも呼ばれます。V から VI への進行を指す場合に interrupted、より広く予想を外す終止を指す場合に deceptive を使う例がありますが、用語の範囲は文献によって異なります。',
      },
    ],
    confusions: [
      { term: 'Perfect cadence', slug: 'perfect-cadence', note: '予想どおり V から I へ進む終止。偽終止はこれを外す。' },
      { term: 'Submediant', slug: 'submediant', note: '下中音。偽終止で進む先となる VI の和音の根音。' },
    ],
  },

  'transposition': {
    lead: '移調は、曲全体を別の調へそっくり移すことです。音程の関係は保たれるため、旋律の形は変わりません。',
    sections: [
      {
        heading: 'なぜ移調するのか',
        body: '歌い手の声域に合わせる、演奏しやすい調に直す、移調楽器のために書き換える、といった実用上の必要から行われます。歌曲では同じ曲が複数の調で出版されることがあり、これは声域の違いに対応するためです。',
      },
      {
        heading: '移調楽器',
        body: 'クラリネットやトランペットなどは、記譜された音と実際に鳴る音が異なります。B♭管の楽器なら、ドと書かれた音が実際にはB♭の高さで鳴ります。オーケストラのスコアを読むとき、これらのパートは記譜された音のまま読むと他の楽器と合いません。指揮者やスコアを読む人は、頭の中で移調しながら読むことになります。',
      },
      {
        heading: '響きは同じではない',
        body: '音程の関係が保たれるため、理屈の上では移調しても同じ曲です。しかし実際には響きが変わります。弦楽器では開放弦が使えるかどうかで音色が変わり、管楽器では運指の難しさや各音域の鳴りが変わります。ピアノでも黒鍵と白鍵の配分が変わり、打鍵の感覚が違います。作曲者が選んだ調には、こうした楽器の事情が関わっている場合があります。',
      },
      {
        heading: '転調との違い',
        body: '移調は曲全体を別の調へ移すことで、曲の中の調関係は変わりません。転調は曲の途中で調が移ることで、曲の構造そのものの一部です。ハ長調の曲をニ長調に移調しても、途中の転調は同じ関係のまま移動します。',
      },
    ],
    confusions: [
      { term: 'Modulation', slug: 'modulation', note: '曲の途中で調が変わること。移調は曲全体を移すこと。' },
      { term: 'Key signature', slug: 'key-signature', note: '移調すると調号が変わる。' },
    ],
  },

  'diatonic': {
    lead: '全音階的とは、その調の音階に含まれる音だけで構成されていることを指します。対義語は半音階的（クロマチック）です。',
    sections: [
      {
        heading: '楽譜での見分け方',
        body: '調号以外の臨時記号が付いていない音は、基本的にその調の音階に属する音です。臨時記号が付いた音は、調の外へ出た合図として読めます。楽譜を追うとき、臨時記号がどこに現れるかを見れば、作曲者がどこで調の枠を離れているかが分かります。この読み方は、和声を分析しないでも使える実用的な手がかりです。',
      },
      {
        heading: '短調での注意',
        body: '短調では、和声的短音階や旋律的短音階の音も、その調の音として扱われます。イ短調のソ♯は臨時記号が付いていますが、調の外へ出たわけではなく、導音を作るための調内の操作です。臨時記号のすべてが調外を意味するわけではないため、短調ではその区別が必要になります。',
      },
      {
        heading: '語の由来',
        body: 'ギリシャ語の dia（〜を通って）と tonos（音）に由来し、音階の音を順に通っていくことを表します。半音を挟まずに音階の枠内を進む、という意味合いです。',
      },
    ],
    confusions: [
      { term: 'Chromatic scale', slug: 'chromatic-scale', note: '半音をすべて含む音階。全音階的の対になる概念。' },
      { term: 'Major scale', slug: 'major-scale', note: '全音階的な音の集まりの代表例。' },
      { term: 'Accidental', slug: 'accidental', note: '調の外の音を示す記号。全音階的かどうかの手がかりになる。' },
    ],
  },

  'tonality': {
    lead: '調性とは、特定の音を中心として他の音がその周囲に秩序づけられている状態です。何気なく「明るい」「暗い」と感じているものの土台になっています。',
    sections: [
      {
        heading: '中心があるとはどういうことか',
        body: '調性の中では、すべての音が対等ではありません。主音は帰るべき場所、属音は主音を指し示す音、導音は主音へ吸い寄せられる音、という役割の階層があります。この階層があるために、聴き手は曲がどこへ向かっているのかを感じ取れます。音階のどこに半音があるかが、この階層を作る仕組みです。',
      },
      {
        heading: '歴史的な位置',
        body: '西洋音楽はおよそ17世紀から19世紀にかけて調性を土台としてきました。それ以前には教会旋法に基づく体系があり、20世紀に入ると中心を意図的に持たない無調の音楽が現れます。調性は音楽の普遍的な法則ではなく、特定の時代と地域で発達した体系です。',
      },
      {
        heading: '演奏で調性を扱う',
        body: '主和音へ帰ったところで安定を感じさせ、属和音のところで続きを期待させる、という響きの階層を意識すると、曲の構造が聴き手に伝わります。転調した箇所では、そこが元の調とどういう関係にあるのか（近いのか遠いのか）で扱い方が変わります。遠い調へ移ったときに音色を変えると、移動したことが伝わります。',
      },
    ],
    confusions: [
      { term: 'Atonality', slug: 'atonality', note: '調の中心を持たない音楽。20世紀に現れた。' },
      { term: 'Tonic', slug: 'tonic', note: '調の中心となる音。' },
      { term: 'Modulation', slug: 'modulation', note: '曲の途中で調の中心が移ること。' },
    ],
  },

  'forzato': {
    lead: 'Forzato は「強調して」。fz と略されます。forzare（強いる、力を加える）から来た語で、特定の音に重みを乗せて際立たせる指示です。',
    sections: [
      {
        heading: 'sforzando との関係',
        body: 'sforzando（sf、sfz）と forzato（fz）は、どちらも特定の音を強く出す指示で、実際の演奏上の区別は明確ではありません。作曲者によって使い分けの意図が異なり、同じ曲の中で両方が現れる場合には何らかの区別を意図している可能性がありますが、一般的な規則として定まったものはありません。楽譜でこの記号を見たら、その音を周囲より際立たせる、と読むのが確実です。',
      },
      {
        heading: '前後との関係で決まる',
        body: '強さの絶対量ではなく、周囲との差が指示の内容です。pianissimo の中の fz は小さな音の中での強調であり、fortissimo の中の fz とは音量がまったく違います。前後の音をどう置くかを先に決めれば、その音をどれだけ出すべきかが決まります。',
      },
    ],
    confusions: [
      { term: 'Sforzando', slug: 'sforzando', note: '同じく特定の音を強く出す指示。実際の区別は明確でない。' },
      { term: 'Rinforzando', slug: 'rinforzando', note: '一点ではなく、数音にわたって強めていく指示。' },
    ],
  },

  'sforzato-piano': {
    lead: 'sfzp は、鋭いアクセントの直後に即座に弱くする指示です。sforzato と piano を続けて書いたもので、一つの音の中で強さが切り替わります。',
    sections: [
      {
        heading: '一音の中の落差',
        body: '音の立ち上がりを強く出し、そのまま持続させずに即座に弱音へ落とします。fp（forte-piano）と同じ構造で、こちらはアタックがより鋭いことを示します。二つの音を並べる指示ではなく、一つの音の中で音量が変わる指示です。',
      },
      {
        heading: '楽器ごとの実現方法',
        body: 'ピアノでは打鍵の瞬間の速度で強さを作った後、音は自然に減衰するため、続く音を弱く弾くか、ペダルの扱いで残響を制御します。弦楽器では強い弓速で入った直後に圧力と速度を抜きます。管楽器では強い発音の後に息の量を落としますが、音程が下がりやすいため支えを保つ必要があります。いずれも、落とした後の弱音が消えてしまわないことが要点です。',
      },
    ],
    confusions: [
      { term: 'Forte piano', slug: 'forte-piano', note: '強く出してすぐ弱くする指示。sfzp はアタックがより鋭い。' },
      { term: 'Sforzando', slug: 'sforzando', note: '鋭く強調する指示。その後の弱音の指定は含まない。' },
    ],
  },

  'poco-forte': {
    lead: 'Poco forte は「少し強く」。pf と略されますが、この略号はピアノフォルテ（楽器名）と紛らわしいため、注意が必要です。',
    sections: [
      {
        heading: 'mezzo forte との違い',
        body: 'どちらも forte と piano のあいだの音量にあたりますが、poco forte は forte を基準にして「そこから少し控える」という方向、mezzo forte は中間の音量そのものを指します。結果としての音量は近くても、forte の性格を残したまま量を抑えるという点で、明るく前へ出る質感が求められることが多い指示です。',
      },
      {
        heading: '略号の紛らわしさ',
        body: 'pf という略号は、楽器のピアノフォルテを指す略記としても使われます。また forte-piano（強く出してすぐ弱く）を fp と書くため、それとの混同も起こります。楽譜で pf を見たときは、前後の音量指示との関係から判断します。単独の音に付いているのか、区間に対する指示なのかも手がかりになります。',
      },
    ],
    confusions: [
      { term: 'Mezzo forte', slug: 'mezzo-forte', note: '中間の音量。poco forte は forte から少し控えた方向。' },
      { term: 'Forte piano', slug: 'forte-piano', note: 'fp と略される別の指示。強く出してすぐ弱くする。' },
    ],
  },

  'al-niente': {
    lead: 'Al niente は「無になるまで」。niente（何もない、ゼロ）へ向かって減衰していく指示です。最小の音量へ落とすのではなく、聞こえなくなるところまで持っていきます。',
    sections: [
      {
        heading: 'pianissimo との違い',
        body: 'pianissimo は非常に弱い音量ですが、聞こえる音です。al niente は音が存在しなくなる地点を終点に据えます。減衰の記号（デクレッシェンドの三角）の先端が完全に閉じて書かれることがあり、これは音量がゼロに達することを示します。',
      },
      {
        heading: '消えた後も終わらない',
        body: '音が聞こえなくなった時点で演奏を終えると、途中で切ったように聞こえます。最後の音が消えた後も動作と緊張を保ち続けることで、消えていった軌跡が伝わります。弦楽器なら弓を弦から離さずに動かし続ける、管楽器なら息の支えを保つ、といった扱いになります。',
      },
      {
        heading: '楽器ごとの難しさ',
        body: '弦楽器では、弓の圧力を抜きすぎると音が鳴らずに雑音になります。圧力を減らしながら弓速を保つことで、音の輪郭を残したまま量を落とせます。管楽器では、息の量を減らすと音程が下がるため、支えを保ったまま量だけを落とす技術が要ります。ピアノでは減衰が自然に起こるため、打鍵をどこまで弱くできるかと、ペダルで残響をどう扱うかが問題になります。',
      },
    ],
    confusions: [
      { term: 'Niente', slug: 'niente', note: '無音そのものを指す語。al niente はそこへ向かう指示。' },
      { term: 'Dal niente', slug: 'dal-niente', note: '無から音が生まれてくる指示。al niente の逆。' },
      { term: 'Morendo', slug: 'morendo', note: '死に絶えるように。テンポの緩みも含むことが多い。' },
    ],
  },

  'dal-niente': {
    lead: 'Dal niente は「無から徐々に」。静寂の中から音が生まれてくることを求める指示です。al niente の逆向きの動きにあたります。',
    sections: [
      {
        heading: '開始点を悟らせない',
        body: '音が始まった瞬間が聴き手に分かってしまうと、無から生まれた感じにはなりません。目指すのは、いつのまにか音が鳴っていたという状態です。そのため、聞こえるかどうかの境目から立ち上げる必要があります。増大の記号（クレッシェンドの三角）の始点が完全に閉じて書かれることがあり、これがゼロからの出発を示します。',
      },
      {
        heading: '楽器ごとの実現方法',
        body: '弦楽器では、弓を弦に置いた状態から圧力をかけずに動かし始め、徐々に圧力を加えます。管楽器では、発音の子音を作らずに息だけを通してから音に変えていきます。どちらも、はっきりした発音を避けることが要点です。ピアノでは打鍵の瞬間が必ず音の開始になるため、この効果は原理的に作りにくく、極端に弱い打鍵とペダルによる残響で近づけることになります。',
      },
      {
        heading: '会場との関係',
        body: 'ゼロから立ち上げる音は、会場の静けさに依存します。客席の物音や空調の音がある中では、聞こえ始める地点そのものが変わります。実際の演奏では、その場の静けさの水準に合わせて開始の音量を決めることになります。',
      },
    ],
    confusions: [
      { term: 'Al niente', slug: 'al-niente', note: '無へ向かって消えていく指示。dal niente の逆。' },
      { term: 'Niente', slug: 'niente', note: '無音そのものを指す語。' },
    ],
  },

  'perdendosi': {
    lead: 'Perdendosi は「消えゆくように」。perdere（失う）の再帰形で、「自らを見失う」が原義です。音量が減るだけでなく、どこへ行ったか分からなくなる状態を求めます。',
    sections: [
      {
        heading: '音量とテンポの両方',
        body: 'この語は音量の減少だけを指すのではなく、テンポの緩みを伴うことが一般的です。減衰しながら進行そのものが失われていく、という二重の動きになります。diminuendo が音量だけの指示であるのに対して、perdendosi は音楽が消散していく過程全体を指します。',
      },
      {
        heading: '演奏上の要点',
        body: '音量を落とすことと、進行を緩めることを同時に行うため、どちらかだけが進むと不自然になります。また、消えていく過程で音の輪郭まで失うと、単に聞こえなくなっただけになります。音の質を保ったまま量と速さが減っていくと、遠ざかっていくように聞こえます。最後がどこで終わったか分からない状態が目的なので、はっきり切って終わらないことが重要です。',
      },
    ],
    confusions: [
      { term: 'Morendo', slug: 'morendo', note: '死に絶えるように。こちらも音量とテンポの両方を含む。' },
      { term: 'Smorzando', slug: 'smorzando', note: '消えるように弱めていく指示。' },
      { term: 'Calando', slug: 'calando', note: '弱めながら遅くする指示。' },
    ],
  },

  'mezzo-voce': {
    lead: 'Mezzo voce は「半分の声で」。m.v. と略されます。声楽由来の語ですが、器楽の楽譜にも使われます。',
    sections: [
      {
        heading: '音量ではなく声の使い方',
        body: 'mezzo forte や mezzo piano が音量の段階を指すのに対して、この語は声の出し方を指しています。全力の声量を使わず、半分に抑えた発声で歌うという指示です。結果として音量は下がりますが、指示しているのは量ではなく質です。歌いすぎず、少し距離を置いたような響きになります。',
      },
      {
        heading: 'sotto voce との違い',
        body: 'sotto voce は「声の下で」、すなわち押し殺したような、内緒話のような響きを指します。mezzo voce は抑制はしていますが、隠しているわけではありません。適度に控えた、客観的な美しさを保った声です。sotto voce のほうが秘めた性格が強くなります。',
      },
      {
        heading: '器楽での読み替え',
        body: '器楽の楽譜にこの指示がある場合、楽器を鳴らしきらずに響きを抑えるという意味になります。弦楽器なら弓の圧力を控えめにし、管楽器なら息の量を抑えます。単に小さく弾くのではなく、余力を残した状態で鳴らすことが求められています。',
      },
    ],
    confusions: [
      { term: 'Sotto voce', slug: 'sotto-voce', note: '押し殺した声。mezzo voce より秘めた性格が強い。' },
      { term: 'Mezzo piano', slug: 'mezzo-piano', note: '音量の段階を示す指示。mezzo voce は声の使い方を示す。' },
    ],
  },

  'terraced-dynamics': {
    lead: '階段状の強弱は、中間の推移を伴わずに音量が段で切り替わる表現です。バロック時代の鍵盤楽器の構造から生まれた考え方です。',
    sections: [
      {
        heading: '楽器の構造から来ている',
        body: 'チェンバロは、鍵盤を押す速さで音量を変えることができません。オルガンも同様です。これらの楽器で音量を変えるには、ストップ（音栓）を切り替える、鍵盤を持ち替える、といった操作が必要で、その結果として音量は段階的に切り替わります。連続的なクレッシェンドは原理的に作れません。',
      },
      {
        heading: '対比としての効果',
        body: '段で切り替わることは制約ですが、同時に明確な対比を作る手段でもあります。同じ楽句を強く鳴らした後に弱く繰り返すエコーのような書き方は、この切り替えを前提としています。フォルテとピアノの表示が交互に現れる楽譜は、推移ではなく対比が意図されていると読めます。',
      },
      {
        heading: '現代の楽器で演奏する場合',
        body: 'ピアノでバロック作品を弾くとき、この楽器はクレッシェンドが可能です。そこで連続的な音量変化を加えるかどうかは、演奏者の判断になります。段を明確に保つことで当時の響きの構造を示す立場と、現代の楽器の可能性を使う立場があり、どちらが正しいという結論は出ていません。少なくとも、楽譜に書かれた強弱の切り替わりが段として意図されていることは、楽器の構造から確認できる事実です。',
      },
    ],
    confusions: [
      { term: 'Crescendo', slug: 'crescendo', note: '連続的に強くしていく指示。階段状の強弱とは対になる考え方。' },
      { term: 'Clavicembalo', slug: 'clavicembalo', note: 'チェンバロ。打鍵で音量を変えられない構造がこの表現の背景にある。' },
    ],
  },

  'appassionato': {
    lead: 'Appassionato は「熱情的に」。passione（情熱）から来た語で、感情を抑えずに解き放つことを求めます。ただし、乱れることとは違います。',
    sections: [
      {
        heading: '熱さと制御は両立する',
        body: 'appassionato を「思い切り弾く」と受け取ると、テンポが走り、音が荒れ、結果として何を表現したいのか伝わらなくなります。熱情が伝わるのは、強い感情が枠の中で抑えきれずに溢れているように聞こえるときです。つまり枠、すなわちテンポとリズムの骨格が保たれていることが前提になります。骨格が崩れると、熱情ではなく単なる混乱として受け取られます。',
      },
      {
        heading: '振れ幅で作る',
        body: '熱情の印象を作るのは、絶対的な音量ではなく変化の幅です。強い箇所を大きくするだけでなく、弱い箇所を十分に抑えることで、幅が広がります。最も熱く聞かせたい箇所の直前を意識的に引くと、そこへ到達したときの効果が跳ね上がります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '腕の重さを使い、指で叩かないこと。力任せに弾くと音が硬くなり、熱ではなく雑音になります。' },
      { name: '弦楽器', tip: 'ビブラートを速く広くしすぎると不安定に聞こえます。弓速で熱を作るほうが確実です。' },
      { name: '管楽器', tip: '息の圧を上げすぎるとピッチが乱れます。量を増やしつつ支えを保つ配分が必要です。' },
    ],
    confusions: [
      { term: 'Espressivo', slug: 'espressivo', note: '「表情豊かに」。appassionato はその中でも振れ幅が大きく、方向が限定されます。' },
      { term: 'Con fuoco', slug: 'con-fuoco', note: '「火のように」。より攻撃的で、速度の切迫を伴うことが多い指示です。' },
      { term: 'Agitato', slug: 'agitato', note: '「興奮して、落ち着かなく」。熱情より不安や動揺に寄ります。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第23番「熱情」', note: '出版社が付けた副題ですが、枠の中で熱が渦巻く構造がこの語をよく表しています。' },
      { title: 'ブラームス ヴァイオリン・ソナタ第3番 第1楽章', note: '抑制された記譜の中で熱情を作る、appassionato の実践的な例です。' },
    ],
  },

  'agitato': {
    lead: 'Agitato は agitare（揺さぶる）の過去分詞で、「揺さぶられた」。落ち着きなく、興奮した状態を指します。速く弾く指示ではありません。',
    sections: [
      {
        heading: '速さではなく落ち着きのなさ',
        body: 'agitato と書かれると速度を上げたくなりますが、この語が指しているのは心理状態です。実際、Andante agitato のように遅い速度用語と併記されることもあります。落ち着かなさを作るのは、テンポではなくリズムの扱いです。拍の重心が定まらない、音の長さが不揃いに感じられる、休符が落ち着かない——こうした要素が動揺を生みます。',
      },
      {
        heading: '不安定さを意図的に作る',
        body: '通常の演奏では、拍を安定させ音を揃えることを目指します。agitato ではその一部を意図的に崩します。ただし崩し方は制御されている必要があります。たとえばシンコペーションを強調する、弱拍にアクセントを置く、フレーズの終わりを切り上げるなど、具体的な手段を決めてから実行してください。ただ乱れただけでは agitato にはなりません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '左手の伴奏形を機械的に刻まず、わずかに前へ詰めると切迫感が出ます。' },
      { name: '弦楽器', tip: '弓の返しを目立たせ、音の始まりを不揃いに感じさせると動揺が生まれます。' },
      { name: '管楽器', tip: 'ブレスをぎりぎりまで我慢し、短く速く吸うと、緊迫した印象になります。' },
    ],
    confusions: [
      { term: 'Appassionato', slug: 'appassionato', note: '「熱情的に」。agitato は熱ではなく不安に寄ります。' },
      { term: 'Con moto', slug: 'con-moto', note: '「動きをもって」。前進する動きの指示で、動揺の意味は含みません。' },
      { term: 'Inquieto', slug: 'inquieto', note: '「落ち着かず」。agitato に近い心理状態を指します。' },
    ],
    works: [
      { title: 'ショパン「幻想即興曲」', note: '右手と左手のリズムのずれが、そのまま落ち着かなさを作っています。' },
      { title: 'メンデルスゾーン「無言歌集」より「胸さわぎ」', note: '曲名そのものが agitato の心理状態を表しています。' },
    ],
  },

  'maestoso': {
    lead: 'Maestoso は maestà（威厳、荘厳）から来た語で、「堂々と」。速度ではなく佇まいの指示で、多くの場合テンポはやや遅めに取られます。',
    sections: [
      {
        heading: '威厳は「急がないこと」から生まれる',
        body: '堂々とした印象を作る最大の要素は、急がないことです。maestoso が書かれた箇所で少しでも前のめりになると、威厳が損なわれます。逆に、一つ一つの音に十分な時間を与え、拍の頭をしっかり置くだけで、それらしく聞こえはじめます。ただし遅くしすぎると重苦しくなるため、堂々と歩ける速さを探すのが要点です。',
      },
      {
        heading: '音の長さを削らない',
        body: '威厳のある響きは、音が最後まで保たれることで生まれます。付点のリズムでは短い音符を短くしすぎない、和音は全声部が同時に切れる、といった細部が印象を左右します。切り上げが早いと、堂々ではなく慌ただしく聞こえます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '和音は全ての音を同時に、深く。アルペジオ気味になると威厳が崩れます。' },
      { name: '弦楽器', tip: '弓を長く使い、音の最後まで圧を保ちます。弓を余らせると音が痩せます。' },
      { name: '管楽器', tip: '音の始まりを明確に、しかし硬くならないように。息の支えを最後まで保つことが重要です。' },
    ],
    confusions: [
      { term: 'Grave', slug: 'grave', note: '「重々しく」。深刻さを伴う遅さで、maestoso の輝かしさとは性格が異なります。' },
      { term: 'Pesante', slug: 'pesante', note: '「重々しく」。重さが主眼で、威厳の含みは薄くなります。' },
      { term: 'Solenne', slug: 'solenne', note: '「荘厳に」。宗教的な厳粛さに寄った語です。' },
      { term: 'Marcato', slug: 'marcato', note: '「際立たせて」。maestoso と併記され、輪郭を与えることがあります。' },
    ],
    works: [
      { title: 'エルガー「威風堂々」第1番', note: '曲名がそのまま maestoso の性格を表しています。' },
      { title: 'ヘンデル「メサイア」より「ハレルヤ」', note: '和音の重なりが、急がないテンポによって威厳を得ています。' },
    ],
  },

  'grazioso': {
    lead: 'Grazioso は grazia（優美、優雅）から来た語で、「優雅に」。力みのない、しなやかな身のこなしを音で表す指示です。',
    sections: [
      {
        heading: '優雅さは「抜き方」で決まる',
        body: 'grazioso でよく起こる失敗は、丁寧に弾こうとして全ての音に力が入ることです。優雅さを作るのは、力を入れる箇所ではなく抜く箇所です。フレーズの終わりを軽く収める、拍の裏を強調しない、和音の最上音以外を控えるといった「抜き」が、しなやかさを生みます。すべての音を等しく丁寧に扱うと、優雅ではなく几帳面に聞こえます。',
      },
      {
        heading: '舞曲との関係',
        body: 'grazioso はメヌエットやガヴォットなど、宮廷の舞曲でしばしば見られます。これらの舞曲には固有のステップとリズムの重心があり、それを知っていると自然に優雅さが出ます。3拍子の舞曲で2拍目をどう扱うかなど、様式ごとの慣習を調べておくと演奏が変わります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵を浅めに、手首を柔らかく。フレーズの終わりは手首を持ち上げながら抜きます。' },
      { name: '弦楽器', tip: '弓の圧を軽く、返しを目立たせないこと。ビブラートは細めがよく合います。' },
      { name: '管楽器', tip: 'タンギングを軽く。フレーズの終わりは息を切るのではなく、自然に細らせます。' },
    ],
    confusions: [
      { term: 'Grazioso', slug: 'graziosamente', note: 'Graziosamente は副詞形。意味はほぼ同じです。' },
      { term: 'Dolce', slug: 'dolce', note: '「甘く」。音色の指示で、grazioso の身のこなしとは層が違います。' },
      { term: 'Leggero', slug: 'leggero', note: '「軽やかに」。重さの指示で、優雅さの一要素になります。' },
      { term: 'Scherzando', slug: 'scherzando', note: '「戯れるように」。優雅さより遊び心が前に出ます。' },
    ],
    works: [
      { title: 'モーツァルト ピアノソナタ第11番 第1楽章', note: '変奏の各所で、力を抜く箇所の選択が優雅さを決めます。' },
      { title: 'バッハ「フランス組曲」のガヴォット', note: '舞曲のステップを踏まえると、優雅さが自然に現れます。' },
    ],
  },

  'con-brio': {
    lead: 'Con brio は「活気をもって」。brio は「輝き、生気」を意味し、単独では使われず、速度用語に添えて推進力を加える指示です。',
    sections: [
      {
        heading: '速さではなく勢い',
        body: 'Allegro con brio は「Allegro より速く」ではありません。同じテンポでも、音楽が前へ押し出されている状態を指します。この推進力を作るのは、拍の扱いです。1拍目に重心を置きつつ、次の小節へ向かう流れを切らないこと。小節ごとに区切ってしまうと、テンポが速くても停滞して聞こえます。',
      },
      {
        heading: '輝きは倍音から',
        body: 'brio の「輝き」は、明るい音色から生まれます。音量を上げるより、発音を明確にして倍音を増やすほうが効果的です。とくに合奏では、全員が音量を上げると濁って輝きが失われます。旋律や刻みを担当するパートが音色を明るくすることで、全体が輝いて聞こえます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵の速度を上げ、深さは控えめに。深く押し込むと重くなり、輝きが失われます。' },
      { name: '弦楽器', tip: '弓を弦の近くで速く。圧より速度を優先すると明るい音になります。' },
      { name: '管楽器', tip: '息のスピードを上げます。量を増やすだけでは太くなるだけで、輝きは出ません。' },
    ],
    confusions: [
      { term: 'Con fuoco', slug: 'con-fuoco', note: '「火のように」。brio より激しく、攻撃的です。' },
      { term: 'Vivace', slug: 'vivace', note: '「生き生きと」。それ自体が速度用語である点が con brio と異なります。' },
      { term: 'Con moto', slug: 'con-moto', note: '「動きをもって」。前進を促す点は似ていますが、輝きの含みはありません。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第1楽章', note: 'Allegro con brio。動機が絶えず前へ押し出される構造そのものが brio です。' },
      { title: 'ベートーヴェン ピアノソナタ第8番「悲愴」第1楽章', note: 'Allegro di molto e con brio。速度と勢いの両方が指定されています。' },
    ],
  },

  'con-moto': {
    lead: 'Con moto は「動きをもって」。moto（動き）を伴って、という意味で、速度用語に添えられ、停滞せずに前へ進むことを求めます。',
    sections: [
      {
        heading: '遅い曲を救う指示',
        body: 'Andante con moto、Adagio con moto のように、遅めの速度用語に添えられることが多い指示です。これは作曲家が「遅くしすぎるな」と釘を刺していると読めます。同じ Andante でも、con moto が付いていれば、より前へ進む扱いが求められます。逆に言えば、この指示がある箇所は停滞しやすい場所だということです。',
      },
      {
        heading: '動きはテンポではなく方向で作る',
        body: '「動き」を出そうとしてテンポを上げると、指定された速度用語から外れます。実際に前進感を作るのは、フレーズがどこへ向かっているかが聞こえることです。次の小節、次の頂点へ向かって音が積み上がっていれば、テンポを変えなくても音楽は動きます。長い音符の途中で減衰させず、次へ渡す意識を持つのが具体的な手段です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '左手の和音を拍ごとに落とさず、小節単位で方向を持たせます。' },
      { name: '弦楽器', tip: '弓の返しでフレーズが切れないようにします。返し位置を音楽の切れ目と一致させてください。' },
      { name: '管楽器', tip: 'ブレスの位置がフレーズの方向を決めます。頂点の直前で息を取らないよう設計します。' },
    ],
    confusions: [
      { term: 'Più mosso', slug: 'più-mosso', note: '「より動いて」。テンポそのものを一段速くする指示で、con moto とは別です。' },
      { term: 'Agitato', slug: 'agitato', note: '「落ち着かなく」。con moto の前進とは異なり、心理的な動揺を指します。' },
      { term: 'Andante', slug: 'andante', note: '歩くような速さ。con moto が添えられると、より歩みが前へ出ます。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第2楽章', note: 'Andante con moto。歌わせながらも停滞させない扱いが求められます。' },
      { title: 'シューベルト ピアノ五重奏曲「ます」第4楽章', note: 'Andantino con moto。軽やかさと前進が同居します。' },
    ],
  },

  'da-capo': {
    lead: 'Da Capo（D.C.）は「頭から」。capo は「頭、先端」を意味し、曲の冒頭に戻って演奏し直すことを指示します。',
    sections: [
      {
        heading: 'どこまで戻り、どこで終わるか',
        body: 'D.C. だけなら冒頭に戻り、Fine（終わり）の記号があるところで曲を終えます。D.C. al Fine と明記されることもあります。D.C. al Coda の場合は、冒頭に戻ったあと「to Coda」の指示があるところからコーダへ跳びます。演奏前に、戻る位置・跳ぶ位置・終わる位置の3点を楽譜上で確認しておくと、本番で迷いません。',
      },
      {
        heading: '繰り返しは省略するのが原則',
        body: 'D.C. で戻ったあと、途中にある反復記号は原則として繰り返しません。ただし作曲家や版によって指示が異なる場合があるため、楽譜に注記がないか確認が必要です。バロックのダ・カーポ・アリアでは、戻ったあとに歌手が装飾を加えるのが慣習であり、単なる繰り返しではなく変奏として扱われます。',
      },
    ],
    instruments: [
      { name: '共通', tip: '譜めくりの位置を事前に決めておきます。D.C. は物理的にページを大きく戻る操作を伴います。' },
      { name: '合奏', tip: '全員が同じ理解でいるかを合わせておきます。戻り方の解釈がずれると、その場で崩壊します。' },
    ],
    confusions: [
      { term: 'Dal Segno', slug: 'dal-segno', note: 'D.S.。冒頭ではなくセーニョ記号の位置へ戻ります。' },
      { term: 'Fine', slug: 'fine', note: '「終わり」。D.C. や D.S. で戻ったあと、ここで曲を終えます。' },
      { term: 'Coda', slug: 'coda', note: '結尾部。al Coda の指示があるとき、ここへ跳びます。' },
      { term: 'Coda sign', slug: 'coda-sign', note: 'コーダへの跳躍先を示す記号です。' },
    ],
    works: [
      { title: 'ヘンデル「オンブラ・マイ・フ」', note: 'ダ・カーポ・アリアの形式。戻ったあとの装飾が歌手の見せ場になります。' },
      { title: 'モーツァルト メヌエット楽章', note: 'メヌエット—トリオ—メヌエットの構造が D.C. で書かれます。' },
    ],
  },

  'coda': {
    lead: 'Coda はイタリア語で「尻尾」。楽曲の主要部分が終わったあとに置かれる結尾部で、曲を締めくくるために付け加えられた部分です。',
    sections: [
      {
        heading: '付け足しではなく、着地',
        body: 'コーダは形式上は「余分な部分」ですが、音楽的にはここで曲が着地します。ソナタ形式では再現部のあとに置かれ、主題を回想したり、和声的な決着を強めたりします。ベートーヴェン以降、コーダは単なる終わりの合図ではなく、第2の展開部と呼べるほどの規模を持つことがあり、曲の重心がここに置かれる場合すらあります。',
      },
      {
        heading: '演奏上の扱い',
        body: 'コーダに入ったことが聴き手に伝わることが重要です。多くの場合、和声が主調に落ち着き、リズムが単純化されます。この変化を明確にすると、曲が終わりへ向かっていることが伝わります。逆に、コーダで新たに盛り上げる設計の曲もあるため、その曲のコーダが「収束型」か「頂点型」かを見極めてから配分を決めてください。',
      },
    ],
    instruments: [
      { name: '共通', tip: 'コーダに入る直前でテンポと音量の基準を確認します。ここまでの疲労で無意識に速くなりがちです。' },
      { name: '合奏', tip: 'コーダは終止和音が続くことが多く、切り方の統一が印象を左右します。事前に長さを決めておきます。' },
    ],
    confusions: [
      { term: 'Coda sign', slug: 'coda-sign', note: 'コーダへの跳躍先を示す記号です。' },
      { term: 'Cadence', slug: 'cadence', note: '終止形。コーダは、この決着をさらに補強し確定させるために置かれます。' },
      { term: 'Da Capo', slug: 'da-capo', note: 'al Coda と組み合わせて、コーダへ跳ぶ経路を作ります。' },
      { term: 'Fine', slug: 'fine', note: '「終わり」。コーダを使わずに終える場合の終止位置を示します。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第4楽章', note: '長大なコーダが、それ自体で一つの頂点を作ります。' },
      { title: 'ショパン バラード第1番', note: 'コーダが激烈な性格を持ち、曲全体の帰結として機能します。' },
    ],
  },

  'ostinato': {
    lead: 'Ostinato は「執拗な、頑固な」を意味する形容詞。同じ音型を執拗に繰り返す技法で、繰り返しそのものが音楽の推進力になります。',
    sections: [
      {
        heading: '繰り返しが変化を際立たせる',
        body: 'オスティナートの本質は、変わらない要素を置くことで、その上で起きる変化を際立たせる点にあります。低音が同じ音型を繰り返していると、上声部の和声やリズムの変化が明確に聞こえます。演奏では、繰り返す側が一定であることが最も重要です。飽きて表情を付けはじめると、この構造が壊れます。',
      },
      {
        heading: '一定に保つことの難しさ',
        body: '長い区間を同じ音型で保つのは、想像以上に難しい作業です。無意識のうちにテンポが速まったり、音量が上がったりします。定期的に録音して確認するか、メトロノームと合わせて確認するのが確実です。ただし完全な機械的反復が目的ではなく、全体の設計に沿った緩やかな変化は必要になる場合もあります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '繰り返す側の手が疲れると音量が落ちます。脱力できる指づかいを選ぶことが持続の鍵です。' },
      { name: '弦楽器', tip: '同じ弓使いを繰り返すため、弓の配分が崩れやすくなります。1周ごとに元の位置へ戻る配分にします。' },
      { name: '打楽器', tip: 'テンポの基準を担うことが多く、揺れが全体に波及します。安定を最優先します。' },
    ],
    confusions: [
      { term: 'Ground bass', slug: 'ground-bass', note: '繰り返される低音旋律。オスティナートを低音に置き、その上に変奏を重ねる形です。' },
      { term: 'Passacaglia', slug: 'passacaglia', note: '低音の音型を繰り返しながら変奏を重ねる形式。オスティナートを構造の土台にした代表例です。' },
      { term: 'Chaconne', slug: 'chaconne', note: '低音主題に基づく変奏曲。パッサカリアと近く、いずれも執拗な反復を前提にしています。' },
      { term: 'Pedal point', slug: 'pedal-point', note: '同じ音を保続する技法。音型ではなく単音を持続させます。' },
      { term: 'Sequence', slug: 'sequence', note: '同じ音型を別の高さで繰り返す技法。高さが変わる点が異なります。' },
    ],
    works: [
      { title: 'ラヴェル「ボレロ」', note: '小太鼓のリズムが全曲を通して繰り返され、変化はすべて上で起きます。' },
      { title: 'パッヘルベル「カノン」', note: '低音の8音が繰り返され、その上に変奏が積み重なります。' },
    ],
  },

  'pizzicato': {
    lead: 'Pizzicato（pizz.）は pizzicare（つまむ）から来た語で、弓を使わず指で弦をはじく奏法。弦楽器の音色を根本から変える指示です。',
    sections: [
      {
        heading: '弓と指では減衰がまったく違う',
        body: '弓で弾いた音は持続しますが、はじいた音は鳴らした瞬間から減衰していきます。この違いは音楽の設計に直結します。pizz. の旋律では音が伸びないため、フレーズのつながりは音そのものではなく、音と音の間隔と音量の配分で作る必要があります。長い音符が書かれていても実際には響きが消えるため、その空白をどう扱うかが表現になります。',
      },
      {
        heading: 'どこをはじくかで音が変わる',
        body: '指板寄りをはじくと柔らかく丸い音、駒寄りをはじくと硬く鋭い音になります。また、指の腹ではじくと太く、爪に近い部分だと明るくなります。楽譜には位置の指定がないことがほとんどなので、曲の性格に合わせて演奏者が選びます。同じ pizz. でも、この選択で印象がまったく変わります。',
      },
      {
        heading: '持ち替えの時間を確保する',
        body: 'arco（弓に戻す）との切り替えには物理的な時間が必要です。楽譜上で pizz. の直後に arco が来る場合、その持ち替えが間に合うかを必ず確認してください。間に合わない場合は、直前の音を少し early に切り上げるか、運指を変えて対応します。合奏では全員のタイミングをそろえておく必要があります。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '弓を持ったまま人差し指ではじくのが標準です。速い箇所では複数の指を使い分けます。' },
      { name: 'コントラバス', tip: '弦が太いため、指の側面を使って弦を横に引くように弾くと、太く豊かな音が出ます。' },
      { name: 'ピアノ', tip: '該当しませんが、pizz. を模した音色を求められることがあります。打鍵を速く浅くし、ペダルを外すと近づきます。' },
    ],
    confusions: [
      { term: 'Arco', slug: 'arco', note: '弓に戻す指示。pizz. とセットで現れます。' },
      { term: 'Bartók pizzicato', slug: 'bartók-pizzicato', note: '弦を強く引き上げて指板に叩きつける特殊奏法。通常の pizz. とは音がまったく異なります。' },
      { term: 'Col legno', slug: 'col-legno', note: '弓の木部で弦を叩く奏法。これも打楽器的な音色を作ります。' },
    ],
    works: [
      { title: 'チャイコフスキー 交響曲第4番 第3楽章', note: '弦楽器全体が pizzicato で通される、この奏法の代表的な楽章です。' },
      { title: 'ドリーブ「シルヴィア」より「ピッツィカート」', note: '曲名そのものが奏法。減衰する音でどう旋律を作るかの見本です。' },
    ],
  },

  'arco': {
    lead: 'Arco は「弓」を意味する名詞で、pizzicato で指ではじいていた状態から、弓での演奏に戻す指示です。',
    sections: [
      {
        heading: '「戻す」ための指示',
        body: 'arco は単独で現れることはほとんどなく、pizz. の後に置かれます。つまり「ここから弓に戻る」という合図であり、それ自体が特別な奏法を指すわけではありません。楽譜で arco を見落とすと、そのまま pizz. を続けてしまうことになるため、pizz. が出てきたら必ず arco がどこにあるかを確認しておく習慣が有効です。',
      },
      {
        heading: '戻ったあとの音色を意識する',
        body: 'pizz. から arco に戻った直後は、音色の落差が大きく聞こえます。作曲家がその対比を狙っている場合はそのままで構いませんが、なめらかに接続したい場合は、arco の最初の音を柔らかく入るなどの配慮が必要です。合奏では、全員が同じタイミングで戻ることも重要になります。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: 'pizz. 中に弓をどう保持していたかで、戻る速さが変わります。長い pizz. 区間では弓を構え直す余裕があります。' },
      { name: 'コントラバス', tip: '弓が大きいぶん持ち替えに時間がかかります。切り替え位置の確認はとくに重要です。' },
    ],
    confusions: [
      { term: 'Pizzicato', slug: 'pizzicato', note: '指ではじく奏法。arco はこれを解除する指示です。' },
      { term: 'Col legno', slug: 'col-legno', note: '弓の木部で弾く奏法。これも arco で通常の奏法に戻ります。' },
      { term: 'Con sordino', slug: 'con-sordino', note: '弱音器を付ける指示。奏法の切り替えという点で似た働きをします。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第3楽章', note: '低弦の pizz. と arco の切り替えが、緊張の増減を作っています。' },
    ],
  },

  'glissando': {
    lead: 'Glissando（gliss.）はフランス語 glisser（滑る）に由来し、ある音から別の音へ滑らかに滑らせる奏法。楽器によって実現方法がまったく異なります。',
    sections: [
      {
        heading: '楽器ごとに別物になる',
        body: '同じ glissando でも、実際に鳴る音は楽器で大きく異なります。ピアノでは鍵盤を指で滑らせるため、半音階の各音が個別に聞こえます。弦楽器やトロンボーンでは、音の高さが連続的に変化する本当の意味での滑走になります。ハープでは調弦された音だけを通過します。楽譜に gliss. とあっても、自分の楽器で何が起きるのかを理解しておく必要があります。',
      },
      {
        heading: '始点と終点を正確に',
        body: 'glissando は滑る過程が目立つため、始まりと終わりの音がおろそかになりがちです。しかし音楽的に重要なのは、多くの場合この2つの音です。とくに終点は次のフレーズの出発点になることが多いため、正確な高さで到達し、そこから改めて演奏が始まるように扱ってください。滑る速度の配分も、終点に着地する時点から逆算して決めます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '白鍵は爪側で、指を寝かせて滑らせます。力を入れると指を痛めるため、体重ではなく腕の移動で行います。' },
      { name: '弦楽器', tip: '指の圧を保ったまま移動します。圧が抜けると音が途切れ、glissando ではなくポジション移動の雑音になります。' },
      { name: '管楽器', tip: 'トロンボーンはスライドで自然に行えます。他の管楽器では、唇と運指の組み合わせによる擬似的な glissando になります。' },
    ],
    confusions: [
      { term: 'Portamento', slug: 'portamento', note: '音から音へ滑らせる点は同じですが、より歌唱的で、経過音を強調しません。' },
      { term: 'Arpeggio', slug: 'arpeggio', note: '和音を分散して弾く奏法。滑らせるのではなく、和音構成音を順に鳴らします。' },
      { term: 'Glissandando', slug: 'glissandando', note: '連続的な音高変化を指す語。gliss. とほぼ同義に用いられます。' },
    ],
    works: [
      { title: 'ガーシュウィン「ラプソディ・イン・ブルー」冒頭', note: 'クラリネットの glissando。管楽器で連続的な滑走を実現した象徴的な例です。' },
      { title: 'リスト「ハンガリー狂詩曲 第2番」', note: 'ピアノの glissando が華やかな効果として用いられます。' },
    ],
  },

  'trill': {
    lead: 'Trill（tr）は、書かれた音とその2度上の音を素早く交互に演奏する装飾。速さより、どの音から始めてどう終わるかが重要です。',
    sections: [
      {
        heading: '上から始めるか、書かれた音から始めるか',
        body: 'これは時代によって異なります。バロックから古典派前期にかけては、上の音（補助音）から始めるのが原則でした。ロマン派以降は、書かれた音から始めるのが一般的になります。したがって、作曲家と時代を確認せずに一律に処理すると、様式から外れます。判断に迷う場合は、その音がどの和音に属しているかを見ると、どちらが自然かが分かります。',
      },
      {
        heading: '終わり方を先に決める',
        body: '多くのトリルには終止形（ターン）が付き、次の音へ滑らかに接続します。楽譜に小さな音符で書かれている場合はそれに従いますが、書かれていなくても補うのが慣習という場面があります。トリルは終わり方が決まっていないと、途中で回数が合わなくなり、次の音に飛び込むことになります。まず終わりを決め、そこから逆算して回数を決めてください。',
      },
      {
        heading: '速さより均等さ',
        body: '速く回すことより、粒がそろっていることのほうが美しく聞こえます。速度を上げると多くの場合むらが出るため、確実に均等に回せる速さを選ぶのが実践的です。ゆっくりから始めて徐々に速める練習が有効です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '指を高く上げず、鍵盤に近い位置で細かく動かします。使う指の組み合わせを変えるだけで回しやすくなることがあります。' },
      { name: '弦楽器', tip: '押さえる指の動きだけで作ります。弓は一定に保ち、トリルにつられて揺れないよう注意します。' },
      { name: '管楽器', tip: '運指によってはトリル専用のキーがあります。通常の運指では困難な組み合わせは、代替運指を調べてください。' },
    ],
    confusions: [
      { term: 'Mordent', slug: 'mordent', note: '書かれた音と隣接音を1回だけ往復する装飾。トリルより短く、アクセント的に働きます。' },
      { term: 'Turn', slug: 'turn', note: '音の上下を回るように装飾します。トリルの終止形として現れることもあります。' },
      { term: 'Tremolo', slug: 'tremolo', note: '同じ音、または離れた2音を素早く反復します。2度に限られるトリルとは別物です。' },
      { term: 'Acciaccatura', slug: 'acciaccatura', note: '極めて短い装飾音。主音の直前に一瞬だけ挟みます。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第32番 第2楽章', note: '長大なトリルが持続する中で旋律が進む、技術的にも音楽的にも難所です。' },
      { title: 'バッハ「ゴルトベルク変奏曲」', note: 'バロックの装飾法が随所に現れ、開始音の扱いが様式判断の練習になります。' },
    ],
  },

  'arpeggio': {
    lead: 'Arpeggio は arpa（ハープ）から派生した語で、「ハープのように」が原義。和音を同時にではなく、下から順に分散して鳴らす奏法です。',
    sections: [
      {
        heading: '波線の記号が意味するもの',
        body: '和音の左に縦の波線が書かれていたら、その和音を分散して弾きます。原則として下から上へ、素早く。ただし矢印が下向きに付いている場合は上から下へ弾きます。分散のタイミングも重要で、最上音を拍に合わせるのが基本ですが、最低音を拍に合わせる流儀もあり、様式や文脈で選択します。',
      },
      {
        heading: '装飾ではなく響きの手段',
        body: 'アルペジオを単なる飾りと考えると、機械的な演奏になります。本来これは、鍵盤や撥弦楽器で和音に厚みと時間的な広がりを与えるための手段です。とくに最上音は旋律であることが多く、そこへ向けて下の音が支えを作るという構造で弾くと、和音が生きた響きになります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '手が届かない広い和音では必然的にアルペジオになります。この場合も最上音のタイミングを揃えることを優先します。' },
      { name: '弦楽器', tip: '3声・4声の和音は同時に鳴らせないため、下から素早く分散します。上2声を残して響かせるのが一般的です。' },
      { name: 'ハープ／ギター', tip: 'この奏法の本来の形。指の順序を決めておくと、速い箇所でも安定します。' },
    ],
    confusions: [
      { term: 'Broken chord', slug: 'broken-chord', note: '和音を崩して弾くこと全般。アルペジオはその一形態で、より素早い分散を指します。' },
      { term: 'Arpeggiato', slug: 'arpeggiato', note: '「ハープのように一音ずつ」。ほぼ同義で用いられます。' },
      { term: 'Glissando', slug: 'glissando', note: '滑らせる奏法。和音構成音だけを鳴らすアルペジオとは異なります。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第14番「月光」第1楽章', note: '全編が分散和音。アルペジオが伴奏ではなく曲そのものになっています。' },
      { title: 'バッハ 平均律クラヴィーア曲集 第1巻 第1番 前奏曲', note: '分散和音だけで構成され、和声の移り変わりがそのまま音楽になります。' },
    ],
  },

  'con-sordino': {
    lead: 'Con sordino は「弱音器を付けて」。sordo（鈍い、聞こえにくい）が語源で、音量を下げるだけでなく音色そのものを変える装置です。',
    sections: [
      {
        heading: '音量装置ではなく音色装置',
        body: '弱音器（ミュート）を付けると音量は下がりますが、それ以上に大きく変わるのは音色です。高い倍音が抑えられ、こもった、あるいは遠くから聞こえるような響きになります。したがって con sordino は、静かにしたいときではなく、その独特の音色がほしいときに指定されます。f で con sordino という指定もあり、その場合は音量ではなく音質だけが目的です。',
      },
      {
        heading: '着脱の時間を確保する',
        body: '弱音器の着脱には数秒かかります。楽譜上でどこに時間があるかを事前に確認し、間に合わない場合は指揮者や仲間と相談して対応を決めます。合奏では全員のタイミングをそろえることも必要です。金管楽器では複数種類のミュートを使い分けることがあり、持ち替えの管理も演奏準備の一部になります。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '駒に装着します。付けた直後は音程感が変わって感じられるため、耳を切り替える必要があります。' },
      { name: '金管楽器', tip: 'ストレート、カップ、ハーモンなど種類ごとに音色が大きく異なります。指定がある場合は必ず従います。' },
      { name: 'ピアノ', tip: '左ペダル（ソフトペダル）が近い働きをします。音量というより音色の変化として使うのが本来の用法です。' },
    ],
    confusions: [
      { term: 'Senza sordino', slug: 'senza-sordino', note: '弱音器を外す指示。con sordino とセットで現れます。' },
      { term: 'Mute', slug: 'mute', note: '弱音器そのもの。英語圏の楽譜ではこの語で指示されます。' },
      { term: 'Sotto voce', slug: 'sotto-voce', note: '「声をひそめて」。装置を使わず、奏法だけで抑えた表現を作ります。' },
    ],
    works: [
      { title: 'マーラー 交響曲第5番 第4楽章「アダージェット」', note: '弦の音色そのものが楽章の性格を決めています。' },
      { title: 'ラヴェル「ボレロ」', note: '金管のミュートが、同じ旋律の音色を変化させる手段として使われます。' },
    ],
  },

  'tremolo': {
    lead: 'Tremolo は tremare（震える）から来た語で、同じ音を素早く反復する、あるいは離れた2音を交互に往復する奏法。震えるような効果を作ります。',
    sections: [
      {
        heading: '2種類のトレモロ',
        body: '一つは同じ音を素早く繰り返す形で、弦楽器では弓を細かく往復させます。もう一つは離れた2つの音を交互に鳴らす形で、鍵盤楽器でよく用いられます。楽譜では音符の符尾に斜線を引いて示され、斜線の数で細かさが指定されます。どちらの形かは、書かれている音符の数で判断します。',
      },
      {
        heading: '緊張を作る装置',
        body: 'トレモロは、単独では和音の色を持たないため、和声そのものより緊張感を作る目的で使われます。オーケストラでは、静かなトレモロが不穏さを、大音量のトレモロが切迫を表現します。演奏では、細かさを揃えることより、区間全体の緊張の変化を作ることのほうが音楽的に重要です。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '弓先付近で手首を細かく使います。腕全体を動かすと速度が上がらず、音も不均等になります。' },
      { name: 'ピアノ', tip: '手首を回転させるように使います。指だけで往復すると、すぐに疲れて速度が落ちます。' },
      { name: '打楽器', tip: 'ティンパニやマリンバのロールが該当します。左右の均等さが音の質を決めます。' },
    ],
    confusions: [
      { term: 'Trill', slug: 'trill', note: '2度の音を交互に演奏する装飾。トレモロは音程の幅が限定されません。' },
      { term: 'Vibrato', slug: 'vibrato', note: '音の高さをわずかに揺らす技法。音を反復するトレモロとは別物です。' },
      { term: 'Martellato', slug: 'martellato', note: '「叩くように」。弓を弦に置いたまま強く切る奏法で、細かい反復とは対照的です。' },
    ],
    works: [
      { title: 'シューベルト「魔王」', note: 'ピアノの反復が疾走と不安を同時に作り出します。' },
      { title: 'ワーグナー「ラインの黄金」前奏曲', note: '弦のトレモロが、水の流れと世界の生成を描きます。' },
    ],
  },

  'spiccato': {
    lead: 'Spiccato は spiccare（際立たせる、切り離す）から来た語で、弓を弦から弾ませて演奏する弦楽器固有の奏法です。',
    sections: [
      {
        heading: '弓の弾力に任せる',
        body: 'spiccato は腕で弓を持ち上げて落とす奏法ではありません。弓の自然な弾力を利用し、適切な位置と速度で動かすことで、弓が勝手に跳ねる状態を作ります。意識的に上下させると、音が硬くなり、速い箇所では追いつかなくなります。弓のどの位置を使うかが最も重要で、一般に中央よりやや下（手元寄り）が跳ねやすくなります。',
      },
      {
        heading: 'テンポで使う位置が変わる',
        body: '遅い spiccato では弓の毛が弦から離れる時間が長くなるため、弓の下側を使います。速くなるほど跳ねる幅は小さくなり、使用位置も中央寄りへ移動します。同じ曲の中でテンポが変われば、使う位置も変える必要があります。うまく跳ねないときは、まず弓の位置を疑ってください。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '手首と指の柔軟さが要です。腕を固めると弓の弾力が殺され、跳ねなくなります。' },
      { name: 'コントラバス', tip: '弓が重いため跳ねにくく、実際には短いデタシェで代用することもあります。' },
      { name: 'ピアノ', tip: '該当しませんが、spiccato 的な軽さを求められる場合は、手首を使った浅く速い打鍵が近い効果を生みます。' },
    ],
    confusions: [
      { term: 'Staccato', slug: 'staccato', note: '切り離して演奏する記譜上の指示。spiccato はそれを実現する弦楽器の奏法の一つです。' },
      { term: 'Saltando', slug: 'saltando', note: '弓を跳ねさせる奏法。spiccato とほぼ同義に用いられます。' },
      { term: 'Martellato', slug: 'martellato', note: '弓を弦に置いたまま強く切る奏法。跳ねさせない点が spiccato と対照的です。' },
    ],
    works: [
      { title: 'メンデルスゾーン「真夏の夜の夢」スケルツォ', note: '軽快な spiccato が妖精の動きを描きます。' },
      { title: 'ロッシーニ「ウィリアム・テル」序曲 終曲', note: '速い spiccato の連続で疾走感が作られます。' },
    ],
  },

  'portato': {
    lead: 'Portato は portare（運ぶ）から来た語で、スラーと点が併記された記号。つなげながらも一音ずつ分離させるという、二つの要求を同時に満たす奏法です。',
    sections: [
      {
        heading: 'legato と staccato のあいだ',
        body: 'portato は「なめらかに」と「切り離して」の中間に位置します。音は分離しますが、staccato のように短くはせず、音価の大部分を保ったまま、発音だけを一音ずつ与えます。結果として、押し出すような、あるいは重みを持って運ぶような表情になります。「切る」ではなく「区切る」と考えると近いです。',
      },
      {
        heading: '重みは音量ではなく発音で',
        body: 'portato で音を強くしてしまうと、marcato のような際立ちになり、なめらかさが失われます。求められているのは音量の変化ではなく、一音ずつの始まりが感じられる状態です。発音を柔らかく、しかし明確に与えることで、つながりを保ったまま粒が見えるようになります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '鍵盤を離さず、次の音の直前まで保ちます。指を替えるタイミングでわずかな切れ目を作るイメージです。' },
      { name: '弦楽器', tip: '弓を返さず、同じ弓の中で圧をわずかに変化させて区切ります。弓を止めると staccato になります。' },
      { name: '管楽器', tip: '息は流し続け、舌を軽く触れるだけで区切ります。息まで止めると分離しすぎます。' },
    ],
    confusions: [
      { term: 'Legato', slug: 'legato', note: 'なめらかにつなぐ指示。portato は分離を含む点が異なります。' },
      { term: 'Staccato', slug: 'staccato', note: '切り離す指示。portato は音価を保つ点が異なります。' },
      { term: 'Tenuto', slug: 'tenuto', note: '音を保つ指示。portato は tenuto が連続した状態に近いと考えられます。' },
      { term: 'Marcato', slug: 'marcato', note: '「際立たせて」。portato より強い輪郭を求めます。' },
    ],
    works: [
      { title: 'モーツァルト ピアノ協奏曲第23番 第2楽章', note: '伴奏の portato が、歌に寄り添う独特の質感を作ります。' },
    ],
  },

  'vibrato': {
    lead: 'Vibrato は vibrare（震わせる）から来た語で、音の高さをわずかに揺らして響きに生命感を与える技法。装飾ではなく、音そのものの一部です。',
    sections: [
      {
        heading: '速さと幅は別々に制御する',
        body: 'ビブラートには「どのくらい速く揺らすか」と「どのくらい広く揺らすか」の二つの要素があり、これらは独立して変えられます。速く狭いビブラートは緊張感を、遅く広いビブラートは温かさを生みます。この二つを混同して一種類しか使えないと、どんな曲でも同じ表情になってしまいます。まず速さだけ、次に幅だけを変える練習を分けて行うのが有効です。',
      },
      {
        heading: 'かけ続けないという選択',
        body: '20世紀の演奏習慣では、すべての音にビブラートをかけるのが一般的でした。しかし古楽の研究が進み、バロックや古典派では装飾的に用いられていたことが分かってきています。かけない音があるからこそ、かけた音が際立ちます。長い音の入りをノンビブラートで始め、途中からかけていく手法は、様式を問わず有効です。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '指先ではなく腕や手首から動かします。指だけで作ると幅が狭く、音程も不安定になります。' },
      { name: '管楽器', tip: '横隔膜または喉で作ります。喉のビブラートは速くなりがちなので、息の支えで制御するのが基本です。' },
      { name: '声楽', tip: '意識的に作るものではなく、脱力した発声から自然に生じるものとされます。' },
    ],
    confusions: [
      { term: 'Tremolo', slug: 'tremolo', note: '音を反復する技法。音高を揺らすビブラートとは別物です。' },
      { term: 'Portamento', slug: 'portamento', note: '音から音へ滑らせる技法。ビブラートは一つの音の中での揺れです。' },
      { term: 'Senza', slug: 'senza', note: '「〜なしで」。senza vibrato の形でビブラートを禁じる指示になります。' },
    ],
    works: [
      { title: 'マーラー 交響曲第5番 第4楽章「アダージェット」', note: '弦のビブラートの質が、そのまま楽章の性格になります。' },
      { title: 'バッハ 無伴奏ヴァイオリンのためのソナタとパルティータ', note: 'ビブラートをかけない選択が、様式判断として問われる作品です。' },
    ],
  },

  'portamento': {
    lead: 'Portamento は portare（運ぶ）から来た語で、「音を運ぶ」。ある音から次の音へ、声のように滑らかに移る技法です。',
    sections: [
      {
        heading: 'glissando との違い',
        body: 'どちらも音の高さを連続的に変えますが、目的が異なります。glissando は滑る過程そのものを聴かせる効果であるのに対し、portamento は二つの音を結ぶための移動であり、過程は目立たないほうがよいとされます。したがって portamento では、滑る速度は速く、到達点で止まることが重要です。滑りが長いと、意図しない効果として聞こえます。',
      },
      {
        heading: '様式によって許容度が変わる',
        body: '19世紀から20世紀初頭にかけて、portamento は歌にも弦楽器にも豊かに用いられていました。当時の録音を聴くと、現代の演奏よりはるかに頻繁です。その後、過度な portamento は趣味が悪いとされる時期があり、現在は曲の様式に応じて選択するのが一般的です。ロマン派の作品で控えすぎると、かえって無味乾燥になることもあります。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: 'ポジション移動の際、指の圧を保ったまま移動します。どの指で滑るかで印象が変わります。' },
      { name: '声楽', tip: '母音を保ったまま移動します。子音で区切ってしまうと portamento になりません。' },
      { name: 'トロンボーン', tip: 'スライドで自然に生じます。むしろ portamento にしないための工夫のほうが必要です。' },
    ],
    confusions: [
      { term: 'Glissando', slug: 'glissando', note: '滑走そのものを聴かせる奏法。portamento は結ぶことが目的です。' },
      { term: 'Legato', slug: 'legato', note: 'なめらかにつなぐ指示。portamento は音高の移動を伴う点が異なります。' },
      { term: 'Vibrato', slug: 'vibrato', note: '一つの音の中で揺らす技法。移動を伴いません。' },
    ],
    works: [
      { title: 'クライスラー「愛の悲しみ」', note: '作曲者自身の録音に、当時の portamento の使い方が残されています。' },
      { title: 'マーラー 交響曲第9番 第1楽章', note: '弦のポルタメントが楽譜に明記され、表現の一部として指定されています。' },
    ],
  },

  'martellato': {
    lead: 'Martellato は martello（ハンマー）から来た語で、「槌で打つように」。弓を弦に置いたまま、鋭く切るように音を出す弦楽器の奏法です。',
    sections: [
      {
        heading: '弓を離さない',
        body: 'spiccato が弓を跳ねさせるのに対し、martellato は弓を弦に置いたまま行います。弓を置いて圧をかけ、瞬間的に加速して止める。この「置く・加速・止める」という一連の動作が、子音のような鋭い立ち上がりを作ります。音と音のあいだで弓は弦の上に留まっているため、音は分離しますが、跳ねる音とは質感がまったく異なります。',
      },
      {
        heading: '止めることが音を作る',
        body: 'この奏法では、音を出す動作と同じくらい、止める動作が重要です。加速したあと弓を弦の上で止めることで、音の輪郭が確定します。止めずに流すと、単なるアクセント付きのデタシェになります。次の音の準備は、止まっている時間の中で行います。したがってテンポが速くなるほど、この奏法は難しくなります。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '弓元寄りを使うと重い martellato、中央寄りだと軽い martellato になります。曲想で選びます。' },
      { name: 'コントラバス', tip: '弓が重いぶん、置いてから加速する感覚がつかみやすい奏法です。' },
      { name: 'ピアノ', tip: '該当しませんが、martellato 的な打鍵を求められることがあります。指を固定し、腕の重さを瞬間的に落とします。' },
    ],
    confusions: [
      { term: 'Spiccato', slug: 'spiccato', note: '弓を跳ねさせる奏法。弓を弦から離す点が martellato と対照的です。' },
      { term: 'Staccato', slug: 'staccato', note: '切り離す記譜上の指示。martellato はそれを実現する奏法の一つです。' },
      { term: 'Marcato', slug: 'marcato', note: '「際立たせて」。martellato はこれを弦楽器で実現する手段になります。' },
      { term: 'Sforzando', slug: 'sforzando', note: '一音を突出させる指示。martellato の発音がその手段として使われます。' },
    ],
    works: [
      { title: 'ヴィヴァルディ「四季」より「夏」第3楽章', note: '鋭い発音の連続が嵐を描きます。' },
    ],
  },

  'sul-ponticello': {
    lead: 'Sul ponticello は「駒の上で」。弓を駒のすぐ近くで弾くことで、金属的でガラスのような特殊な音色を作る弦楽器の奏法です。',
    sections: [
      {
        heading: 'なぜ音色が変わるのか',
        body: '弦は、弾く位置によって発生する倍音の構成が変わります。駒に近づくほど高次の倍音が強調され、基音が相対的に弱くなります。その結果、音の芯が失われ、ざらついた、あるいは透明で不気味な響きになります。極端に駒へ寄せると、音程感すら曖昧になり、風の音のような効果が得られます。',
      },
      {
        heading: '距離で連続的に変えられる',
        body: 'sul ponticello はオンとオフの二択ではなく、駒からの距離で連続的に音色が変わります。楽譜に poco sul ponticello（やや駒寄りで）と書かれていれば控えめに、molto sul ponticello なら極端に寄せます。指示がない場合でも、曲想に応じて弾く位置を選ぶことは常に行われています。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '駒に寄るほど弓の圧を減らす必要があります。同じ圧のままだと潰れた雑音になります。' },
      { name: 'コントラバス', tip: '弦が長いため、位置による変化がとくに大きく現れます。' },
    ],
    confusions: [
      { term: 'Sul tasto', slug: 'sul-tasto', note: '「指板の上で」。逆に指板寄りで弾き、柔らかく空虚な音色を作ります。' },
      { term: 'Col legno', slug: 'col-legno', note: '弓の木部で弾く奏法。これも通常と異なる音色を作る特殊奏法です。' },
      { term: 'Flautando', slug: 'flautando', note: '「フルートのように」。指板寄りで軽く弾き、笛のような音色を得ます。' },
    ],
    works: [
      { title: 'バルトーク 弦楽四重奏曲', note: '特殊奏法が構造的に組み込まれ、sul ponticello も音色の一要素として扱われます。' },
      { title: 'ショスタコーヴィチ 交響曲第4番', note: '不気味な効果として弦の特殊奏法が用いられます。' },
    ],
  },

  'sul-tasto': {
    lead: 'Sul tasto は「指板の上で」。弓を指板の上あたりで弾くことで、柔らかく、芯のない、遠くから聞こえるような音色を作ります。',
    sections: [
      {
        heading: '倍音が減ることで柔らかくなる',
        body: '駒から離れて指板寄りで弾くと、高次の倍音が減り、基音が相対的に強くなります。その結果、輪郭のぼやけた、丸く霞んだ音になります。sul ponticello とは正反対の効果で、両者は弾く位置という同じパラメータの両端に位置しています。この関係を理解しておくと、指示がない場面でも音色の設計に応用できます。',
      },
      {
        heading: '音量は下がるが「弱音」ではない',
        body: 'sul tasto では自然に音量が下がりますが、これは音色を得た結果であって目的ではありません。p や pp と併記されることが多いものの、f で sul tasto という指定もあり得ます。音量を落としたいだけなら弓の圧を減らせばよく、わざわざ位置を変えるのは音色が目的だと考えてください。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '弓速を保たないと音が消えます。圧は軽く、しかし弓は動かし続けます。' },
      { name: 'ヴィオラ・チェロ', tip: '弦が太いぶん、位置による音色差がヴァイオリンより穏やかに出ます。' },
    ],
    confusions: [
      { term: 'Sul ponticello', slug: 'sul-ponticello', note: '「駒の上で」。正反対の位置で、金属的な音色を作ります。' },
      { term: 'Flautando', slug: 'flautando', note: '「フルートのように」。sul tasto に近い奏法で、より軽い音色を指します。' },
      { term: 'Con sordino', slug: 'con-sordino', note: '弱音器を使って音色を変える方法。sul tasto は装置なしで似た方向の変化を作ります。' },
    ],
    works: [
      { title: 'ドビュッシー 弦楽四重奏曲', note: '音色の変化が構造の一部として扱われます。' },
    ],
  },

  'col-legno': {
    lead: 'Col legno は「木で」。弓の毛ではなく、木の部分（棹）を使って弦を弾く、あるいは叩く特殊奏法です。',
    sections: [
      {
        heading: '2種類ある',
        body: 'col legno battuto は木の部分で弦を叩く奏法で、乾いた打楽器的な音が出ます。col legno tratto は木の部分を弦に当てたまま引く奏法で、かすれた、ほとんど音程のない響きになります。単に col legno と書かれている場合は battuto を指すのが一般的ですが、曲想によって判断が必要です。',
      },
      {
        heading: '楽器を傷める可能性がある',
        body: '弓の棹で弦を叩くため、弓に負担がかかります。高価な弓を使っている奏者が、この箇所だけ安価な弓に持ち替えることもあります。オーケストラでは全員が一斉に行うため、この持ち替えの時間を確保する必要があります。楽譜に col legno があったら、事前に対応を決めておくのが実務です。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '叩く強さより、全員のタイミングを揃えるほうが効果に直結します。音量が小さい奏法です。' },
      { name: 'コントラバス', tip: '弦が太く張力も高いため、他の弦楽器より明確な音が出ます。' },
    ],
    confusions: [
      { term: 'Bartók pizzicato', slug: 'bartók-pizzicato', note: '弦を引き上げて指板に叩きつける奏法。これも打楽器的な効果を作ります。' },
      { term: 'Sul ponticello', slug: 'sul-ponticello', note: '駒寄りで弾く奏法。いずれも通常と異なる音色を求める特殊奏法です。' },
      { term: 'Pizzicato', slug: 'pizzicato', note: '指ではじく奏法。col legno は弓の木部を使う点が異なります。' },
    ],
    works: [
      { title: 'ベルリオーズ「幻想交響曲」第5楽章', note: '骸骨の踊りを描く場面で col legno が用いられ、この奏法を有名にしました。' },
      { title: 'ホルスト「惑星」より「火星」', note: '冒頭の弦が col legno で不気味なリズムを刻みます。' },
    ],
  },

  'appoggiatura': {
    lead: 'Appoggiatura は appoggiare（もたれかかる）から来た語で、前打音。主要な音の直前に置かれ、和音の外の音から解決へ向かう装飾です。',
    sections: [
      {
        heading: '「もたれかかる」という原義',
        body: 'appoggiatura は単なる飾りではなく、和声的な緊張を作る音です。和音に属さない音が拍の上に置かれ、そこから半音または全音で和音の音へ解決します。原義の「もたれかかる」は、この不安定な音が解決先へ寄りかかっている状態を表しています。したがって演奏では、装飾音のほうを強く、解決音を弱く弾くのが原則です。',
      },
      {
        heading: '長さは書かれていないことが多い',
        body: '古典派までの記譜では、appoggiatura の長さは慣習に委ねられていました。一般には主要音の半分（付点の場合は3分の2）を取るとされますが、テンポや曲想で変わります。19世紀以降は実際の音価で書かれることが増えました。古い楽譜では、書かれた通りの短さで弾くと和声的な意味が失われることがあるため、注意が必要です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '装飾音を拍の上に置きます。拍の前に押し込むと acciaccatura のようになり、性格が変わります。' },
      { name: '弦楽器', tip: '装飾音にも十分な弓を配分します。急いで弾くと和声的な緊張が伝わりません。' },
      { name: '管楽器', tip: '装飾音のタンギングを主要音より明確にし、解決を柔らかく収めます。' },
    ],
    confusions: [
      { term: 'Acciaccatura', slug: 'acciaccatura', note: '極めて短い装飾音。もたれかかるのではなく、一瞬かすめるように弾きます。' },
      { term: 'Mordent', slug: 'mordent', note: '隣接音を1回往復する装飾。解決へ向かう緊張は含みません。' },
      { term: 'Suspension', slug: 'suspension', note: '掛留。前の和音の音が残って解決する技法で、和声的な働きが近いものです。' },
      { term: 'Passing tone', slug: 'passing-tone', note: '経過音。和音外の音である点は同じですが、拍の上に置かれません。' },
    ],
    works: [
      { title: 'モーツァルト「アヴェ・ヴェルム・コルプス」', note: '前打音による緊張と解決が、和声の色を作っています。' },
      { title: 'バッハ「マタイ受難曲」より「憐れみたまえ」', note: '嘆きの表情が、前打音の連続によって作られています。' },
    ],
  },

  'acciaccatura': {
    lead: 'Acciaccatura は acciaccare（押しつぶす）から来た語で、極めて短い装飾音。斜線の入った小さな音符で示され、主要音の直前を一瞬かすめます。',
    sections: [
      {
        heading: 'appoggiatura との違い',
        body: '見た目が似ていますが、性格は正反対です。appoggiatura が拍の上に置かれ、時間を持ってもたれかかるのに対し、acciaccatura は可能な限り短く、主要音に吸収されるように弾かれます。記譜上の違いは音符の旗に斜線があるかどうかで、これがある場合は acciaccatura です。原義の「押しつぶす」が、その短さを表しています。',
      },
      {
        heading: '拍の前か上か',
        body: '主要音を拍の頭に置き、装飾音をその直前に押し込む弾き方と、装飾音を拍の頭に置く弾き方があります。バロックから古典派では拍の上に置くのが原則とされ、ロマン派以降は拍の前に置く演奏が増えました。ピアノでは、ほぼ同時に弾いてすぐ離す方法も取られます。作曲家と時代を確認したうえで判断してください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '装飾音と主要音をほぼ同時に打鍵し、装飾音だけ即座に離すと自然に聞こえます。' },
      { name: '弦楽器', tip: '弓ではなく左手の動きで作ります。弓を分けると長くなりすぎます。' },
      { name: '管楽器', tip: '運指の切り替えだけで作り、タンギングは主要音にのみ与えます。' },
    ],
    confusions: [
      { term: 'Appoggiatura', slug: 'appoggiatura', note: '前打音。時間を持ち、和声的な緊張を作る点が正反対です。' },
      { term: 'Mordent', slug: 'mordent', note: '隣接音を往復する装飾。acciaccatura は1音のみです。' },
      { term: 'Coloratura', slug: 'coloratura', note: '華麗な装飾を伴う歌唱。短い装飾音を連ねる技巧が声楽で発展した形です。' },
    ],
    works: [
      { title: 'ショパン ノクターン第2番', note: '旋律の装飾に短い装飾音が多用され、歌のニュアンスを作ります。' },
    ],
  },

  'mordent': {
    lead: 'Mordent は mordere（噛む）から来た語で、書かれた音と隣接音を素早く1往復する装飾。短く鋭いアクセントとして働きます。',
    sections: [
      {
        heading: '上か下か',
        body: '記号が波線だけなら上の音へ往復し、波線に縦線が入っていれば下の音へ往復します。前者を単に mordent（またはプラルトリラー）、後者を inverted mordent と呼ぶ流儀もありますが、用語の使い方は地域や時代で揺れがあります。演奏する版の凡例を確認するのが確実です。',
      },
      {
        heading: '装飾ではなくアクセント',
        body: 'mordent は「噛む」という原義が示すとおり、その音に鋭さを与えるための装飾です。ゆっくり丁寧に弾くと、装飾音符の羅列になってしまいます。3つの音（主音・隣接音・主音）をひとまとまりの発音として、素早く処理するのが基本です。テンポが速い曲では、実質的に単なるアクセントとして聞こえるくらいで構いません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '3音を一つの動作で処理します。指を個別に動かそうとすると間に合いません。' },
      { name: '弦楽器', tip: '左手だけで作り、弓は一定に保ちます。弓を分けると装飾ではなく別の音になります。' },
      { name: '管楽器', tip: '運指の往復のみで、タンギングは最初の1回だけ与えます。' },
    ],
    confusions: [
      { term: 'Trill', slug: 'trill', note: '隣接音を連続して往復します。mordent は1往復のみです。' },
      { term: 'Turn', slug: 'turn', note: '音の上下を回る装飾。往復ではなく、4音以上で円を描きます。' },
      { term: 'Acciaccatura', slug: 'acciaccatura', note: '極めて短い1音の装飾。往復を含みません。' },
    ],
    works: [
      { title: 'バッハ「インヴェンション」', note: '装飾記号の扱いを学ぶ標準的な教材で、mordent が頻出します。' },
    ],
  },

  'harmonics': {
    lead: 'Harmonics（ハーモニクス／フラジオレット）は、弦や管の倍音だけを鳴らす奏法。通常とは異なる、透明で笛のような音色が得られます。',
    sections: [
      {
        heading: '押さえずに触れる',
        body: '弦楽器では、弦を指板に押し付けるのではなく、特定の位置に軽く触れた状態で弓を引きます。すると基音が消え、その位置に対応する倍音だけが鳴ります。弦の中央に触れれば1オクターブ上、3分の1の位置なら1オクターブと5度上といった具合に、触れる位置と鳴る音が数学的に対応しています。',
      },
      {
        heading: '自然ハーモニクスと人工ハーモニクス',
        body: '開放弦に触れて出すものを自然ハーモニクス、ある音を押さえたうえで、その4度上に別の指で軽く触れて出すものを人工ハーモニクスと呼びます。後者はどの音でも作れるため、旋律をハーモニクスで演奏することが可能になります。楽譜では、押さえる音を通常の音符、触れる位置をひし形の音符で書き分けます。',
      },
      {
        heading: '不安定さを前提に扱う',
        body: 'ハーモニクスは、触れる位置がわずかでもずれると鳴りません。また音量が小さく、大編成の中では埋もれます。作曲家がこの奏法を選ぶのは、音量ではなく音色が目的なので、周囲が十分に引く必要があります。演奏側も、確実に鳴る位置を事前に見つけて印を付けておくのが実務的です。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '弓は駒寄りで、圧は軽く、速度は保ちます。圧をかけると倍音が消えます。' },
      { name: 'ギター', tip: 'フレットの真上に触れます。12フレットが最も出しやすい位置です。' },
      { name: '管楽器', tip: '運指を変えずに息のスピードだけで倍音列を移動できます。これが金管楽器の基本原理でもあります。' },
    ],
    confusions: [
      { term: 'Artificial harmonics', slug: 'artificial-harmonics', note: '押弦と接触を併用する人工ハーモニクス。任意の音で作れます。' },
      { term: 'Flagelletto', slug: 'flagelletto', note: 'ハーモニクスの別称。透明な高音を指します。' },
      { term: 'Natural harmonic series', slug: 'natural-harmonic-series', note: '倍音列。ハーモニクスが鳴る仕組みの背景にある自然法則です。' },
    ],
    works: [
      { title: 'ラヴェル「弦楽四重奏曲」', note: 'ハーモニクスが色彩の一部として組み込まれています。' },
      { title: 'レスピーギ「ローマの松」', note: '弦のハーモニクスが、透明な響きの層を作ります。' },
    ],
  },

  'pianississimo': {
    lead: 'Pianississimo（ppp）は「できるだけ弱く」。piano を三重にした形で、物理的な音量の限界を指しますが、実際に表現しているのは静寂そのものです。',
    sections: [
      {
        heading: '限界を決めるのは会場',
        body: 'ppp がどのくらいかは、演奏する空間で決まります。残響の長いホールでは驚くほど小さくしても届きますが、乾いた会場では同じ音量が消えてしまいます。また、大編成の中の ppp と独奏の ppp では基準がまったく違います。リハーサルで客席側から確認するのが最も確実で、それができない場合は少し離れた位置から録音して判断します。',
      },
      {
        heading: '静寂を演出する',
        body: 'ppp が効果を持つのは、聴き手が耳を澄ませるからです。この状態を作るには、そこへ至るまでの過程が重要になります。直前を十分に落として差を作ること、そして ppp の区間ではテンポを揺らさずに保つこと。緊張が保たれていれば、音量が極小でも聴き手の集中は途切れません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵が浅すぎると音が出ないか、雑音だけが残ります。深さを保ち、速度だけを極端に落とします。' },
      { name: '弦楽器', tip: '駒寄りを保ったまま圧を抜き、弓速も落とします。指板へ逃げると音が消えます。' },
      { name: '管楽器', tip: '発音が最も難しい音量域です。息のスピードを保ち、量だけを減らすのが基本です。' },
    ],
    confusions: [
      { term: 'Pianissimo', slug: 'pianissimo', note: 'pp。ppp はさらにその下で、音量というより静寂の質が問われます。' },
      { term: 'Niente', slug: 'niente', note: '「無、ゼロ」。ppp の行き着く先にある、音量を完全に失った状態です。' },
      { term: 'Morendo', slug: 'morendo', note: '「絶え入るように」。ppp が状態なら、morendo はそこへ向かう過程です。' },
    ],
    works: [
      { title: 'チャイコフスキー 交響曲第6番「悲愴」第4楽章', note: '終結で ppp から pppp へ。極限の弱音が長く続きます。' },
    ],
  },

  'fortississimo': {
    lead: 'Fortississimo（fff）は「できるだけ強く」。forte を三重にした形で、その曲における最大の音量を指します。',
    sections: [
      {
        heading: '曲全体で1か所とは限らない',
        body: 'fff が複数ある曲では、すべてを同じ音量で弾くとクライマックスが平坦になります。楽譜全体を見渡し、どの fff が最終的な頂点かを決めてから配分してください。最後の fff が最大になるとは限らず、途中に真の頂点が置かれている曲もあります。構造を読んでから音量を決めるのが順序です。',
      },
      {
        heading: '限界を超えると逆効果',
        body: 'fff で楽器の限界を超えて鳴らそうとすると、音が割れ、倍音が減り、かえって小さく聞こえます。とくに管楽器と声楽では、無理をした瞬間に音色が破綻します。楽器が最もよく鳴る状態を上限とし、それ以上は編成の厚みやアーティキュレーションの鋭さで補うのが実践的です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '腕と上体の重さを使います。速く叩くと打鍵音だけが増え、響きは増えません。' },
      { name: '弦楽器', tip: '弓速を最大にし、駒寄りで圧を足します。逆順だと弦が押さえ込まれます。' },
      { name: '管楽器', tip: '口の中と喉を最大限に広く。息を強くするだけでは割れます。' },
    ],
    confusions: [
      { term: 'Fortissimo', slug: 'fortissimo', note: 'ff。fff はその上ですが、単純な倍ではなく響きの質が変わります。' },
      { term: 'Forte', slug: 'forte', note: '「強く」。fff の基準を決めるうえで、f との差が設計の出発点になります。' },
      { term: 'Pesante', slug: 'pesante', note: '「重々しく」。fff と併記され、重量を加えることがあります。' },
    ],
    works: [
      { title: 'マーラー 交響曲第2番「復活」終楽章', note: '巨大な編成による fff が、音量ではなく厚みで作られています。' },
    ],
  },

  'mezzo-forte': {
    lead: 'Mezzo forte（mf）は「半分の強さで」。mezzo（半分）＋ forte で、f と p のちょうど中間にあたる、最も基準になる音量です。',
    sections: [
      {
        heading: '基準点として使う',
        body: 'mf は「中くらい」という曖昧な指示に見えますが、実際には曲全体の音量設計の基準点として機能します。mf を決めてから、f がどのくらい上か、p がどのくらい下かを配分すると、全体の幅が破綻しません。逆に mf を決めずに f や p だけを作ると、極端に振れて中間が失われます。',
      },
      {
        heading: 'アンサンブルの標準音量',
        body: '合奏では、mf は他のパートと調和を取りやすい音量として機能します。旋律以外のパートが mf で演奏していれば、旋律がその上に自然に乗ります。逆に全員が f で弾くと、誰が主役か分からなくなります。楽譜に mf と書かれている箇所では、自分が支える側なのか主張する側なのかを確認してください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '最も自然に出る音量です。ここを基準に、f と p の幅を体で覚えます。' },
      { name: '弦楽器', tip: '弓の中央付近を標準的な圧で使う音量です。ここからの増減で全体を設計します。' },
      { name: '管楽器', tip: '最も音程が安定し、音色も良い音量域です。ここを基準にすると全体が整います。' },
    ],
    confusions: [
      { term: 'Mezzo Piano', slug: 'mezzo-piano', note: 'mp。mf のすぐ下で、この2つの差を作れるかが強弱表現の精度を決めます。' },
      { term: 'Forte', slug: 'forte', note: '「強く」。mf との差をどう作るかが設計の要点です。' },
      { term: 'Poco Forte', slug: 'poco-forte', note: '「少し強く」。mf に近いが、より前へ出る明るい質感を求められます。' },
    ],
    works: [
      { title: 'ブラームス 交響曲第3番 第3楽章', note: '中間的な音量の中で音色を変化させる書法が全編に及びます。' },
    ],
  },

  'mezzo-piano': {
    lead: 'Mezzo piano（mp）は「半分の弱さで」。p と mf のあいだにあり、優しさの中に方向性を残した音量です。',
    sections: [
      {
        heading: 'p との差を作る',
        body: 'mp と p の差は、演奏でしばしば失われます。どちらも「弱め」として同じように扱ってしまうためです。両者を区別するには、音量だけでなく性格の違いを決めるのが有効です。p が引いて聴かせる音なら、mp は語りかける音。この違いを意識すると、自然に扱いが変わります。',
      },
      {
        heading: '伴奏で最も使う音量',
        body: '実際の楽譜では、伴奏パートに mp が指定されることが多くあります。旋律を邪魔せず、しかし存在感は保つという役割にちょうど合うためです。伴奏で mp と書かれていたら、旋律がどのくらいの音量かを確認し、その下に収まる位置を選んでください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵の深さを保ち、速度をやや落とします。浅くすると音が痩せ、p との区別がつかなくなります。' },
      { name: '弦楽器', tip: '弓速は保ち、圧をわずかに減らします。密度を保つのが p との違いになります。' },
      { name: '管楽器', tip: '息の量をわずかに減らす程度で、支えは mf と同じに保ちます。' },
    ],
    confusions: [
      { term: 'Piano', slug: 'piano', note: '「弱く」。mp との差を明確にすることが、強弱表現の精度を上げます。' },
      { term: 'Mezzo Forte', slug: 'mezzo-forte', note: 'mf。mp のすぐ上にあり、この2つが音量設計の中心になります。' },
      { term: 'Dolce', slug: 'dolce', note: '「甘く」。mp と併記されることが多く、音色の指示を補います。' },
    ],
    works: [
      { title: 'シューベルト「楽興の時」第3番', note: '限られた音量の幅の中で、性格を書き分ける必要があります。' },
    ],
  },

  'decrescendo': {
    lead: 'Decrescendo（decresc.）は「だんだん弱く」。crescendo の反対で、de（下へ）＋ crescere（成長する）から成る語です。',
    sections: [
      {
        heading: 'diminuendo との関係',
        body: '実用上は diminuendo とほぼ同義で、多くの楽譜が両者を区別せずに使っています。厳密な区別を語る立場では、decrescendo は音量の減少、diminuendo は音の存在感そのものの減少とされることがあります。作曲家が両方を使い分けている楽譜では、その意図を読み取る手がかりになりますが、規則ではありません。',
      },
      {
        heading: '松葉記号の読み方',
        body: '実際の楽譜では、decresc. という文字より、閉じていく松葉の記号で書かれることのほうが多くなります。この記号は開始点と終了点が明確なので、どこからどこまでで減らすかが視覚的に分かります。ただし到達点の音量が書かれていないことが多く、その場合は次の強弱記号から逆算します。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '減衰する楽器なので、次の音を前の音の減衰後の音量に合わせると自然につながります。' },
      { name: '弦楽器', tip: '弓速を保ったまま圧を減らします。両方を減らすと途中で音が消えます。' },
      { name: '管楽器', tip: '息を減らすとピッチが下がります。終点で音程が下がっていないか確認してください。' },
    ],
    confusions: [
      { term: 'Diminuendo', slug: 'diminuendo', note: 'ほぼ同義。実用上は区別せずに扱われます。' },
      { term: 'Crescendo', slug: 'crescendo', note: '反対の指示。設計の考え方（終点から逆算する）は共通です。' },
      { term: 'Calando', slug: 'calando', note: '弱めながら遅くもする指示。速度の変化を含みます。' },
      { term: 'Abnehmend', slug: 'abnehmend', note: 'ドイツ語で「減少していく」。同じ内容をドイツ語で指示した形です。' },
    ],
    works: [
      { title: 'ブラームス 交響曲第1番 第1楽章', note: '長い区間をかけた decresc. が、緊張の解放を段階的に作ります。' },
    ],
  },

  'forte-piano': {
    lead: 'Forte piano（fp）は「強く、すぐに弱く」。一つの音の中で、強い出だしから即座に弱音へ切り替える指示です。',
    sections: [
      {
        heading: '1音の中で起きる変化',
        body: 'fp は2つの音への指示ではなく、1つの音の中で完結します。音の出だしを f で発音し、その直後に p まで落とす。持続する楽器ではこの落差を作れますが、ピアノのように減衰する楽器では、強く弾いた音が自然に減衰することを利用します。したがって、楽器によって実現方法がまったく異なる指示です。',
      },
      {
        heading: '次の音を大きくしない',
        body: 'fp の最も多い失敗は、次の音以降も大きいまま弾いてしまうことです。fp の p は、その音だけでなく、次の指示があるまで続きます。楽譜に fp があったら、そのあとどこまで p が続くのかを確認してください。多くの場合、次の crescendo か強弱記号までです。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '強く打鍵し、自然減衰に任せます。ペダルを踏み続けると響きが残り、p にならない点に注意します。' },
      { name: '弦楽器', tip: '弓の出だしで速度と圧を最大にし、直後に両方を抜きます。切り替えの速さが効果を決めます。' },
      { name: '管楽器', tip: 'タンギングを強く、直後に息を絞ります。ピッチが動きやすいので支えは保ちます。' },
    ],
    confusions: [
      { term: 'Sforzando', slug: 'sforzando', note: 'その音だけを強調する指示。その後の音量については指定していません。' },
      { term: 'Sforzato Piano', slug: 'sforzato-piano', note: 'sfp。fp とほぼ同じ内容を、より鋭いアタックで求めます。' },
      { term: 'Subito', slug: 'subito', note: '「すぐに」。subito p が2音以上にまたがるのに対し、fp は1音の中で完結します。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第3番「英雄」第1楽章', note: '拍の重心をずらす位置に fp が置かれ、リズムを揺さぶります。' },
      { title: 'モーツァルト 交響曲第40番 第1楽章', note: '劇的な効果を生む fp が、緊張の起伏を作ります。' },
    ],
  },

  'sotto-voce': {
    lead: 'Sotto voce は「声の下で」、つまり「声をひそめて」。音量の指示というより、話し方そのものを指定する言葉です。',
    sections: [
      {
        heading: '内緒話をするように',
        body: '原義は「小さい声で」ですが、実際に求められているのは秘密を打ち明けるような話し方です。単に音量を落とすだけでは、遠くから聞こえる音になってしまいます。sotto voce は近くにいて、しかし抑えている状態です。したがって音は近く、しかし張らない。この質感の違いが、p との差になります。',
      },
      {
        heading: '緊張を保つ',
        body: '声をひそめるのは、多くの場合それだけの理由があるからです。演奏でも、抑えているだけの緩んだ音ではなく、抑えているという意志が感じられる必要があります。リズムを保ち、発音を明確にしたまま音量だけを落とすと、この緊張が伝わります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵は浅くせず、速度だけ落とします。近さを保つため、ペダルは控えめに。' },
      { name: '弦楽器', tip: '駒寄りを保ち、圧を抜きます。指板へ逃げると遠くなり、sotto voce ではなくなります。' },
      { name: '管楽器', tip: '息の量を減らしつつ、発音は明確に。タンギングを曖昧にすると意志が消えます。' },
    ],
    confusions: [
      { term: 'Mezzo voce', slug: 'mezzo-voce', note: '「半分の声で」。抑制の程度が sotto voce より穏やかです。' },
      { term: 'Piano', slug: 'piano', note: '「弱く」。音量の指示であり、話し方を指す sotto voce とは層が違います。' },
      { term: 'Misterioso', slug: 'misterioso', note: '「神秘的に」。sotto voce がその手段として用いられます。' },
    ],
    works: [
      { title: 'ヴェルディ「レクイエム」冒頭', note: '合唱の sotto voce が、祈りの内密さを作ります。' },
      { title: 'ベートーヴェン 交響曲第5番 第3楽章', note: '弦の sotto voce が、次の爆発への緊張を溜めます。' },
    ],
  },

  'niente': {
    lead: 'Niente はイタリア語で「無、何もない」。音量がゼロの状態を指し、現代作品では音の始まりや終わりを規定する指示として用いられます。',
    sections: [
      {
        heading: 'ゼロという指定',
        body: 'ppp が「限りなく小さい」なのに対し、niente は「無い」です。この違いは実際の演奏に影響します。al niente（無になるまで）では、音が完全に消えるまで減衰させ、聞こえなくなった後も動作を続けます。dal niente（無から）では、開始の瞬間を聴き手に悟らせないよう、聞こえない音量から立ち上げます。',
      },
      {
        heading: '静寂も演奏の一部',
        body: 'niente を扱う演奏では、音が鳴っていない時間も演奏の一部として扱われます。音が消えた瞬間に演奏姿勢を解くと、静寂が断ち切られます。合奏では、指揮者が手を下ろすまで全員が動きません。この静寂の管理ができるかどうかで、作品の印象が大きく変わります。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '弓を弦に触れたまま圧をゼロへ近づけます。弓を離す動作は音が完全に消えてから。' },
      { name: '管楽器', tip: '息を止めるのではなく、量を限りなく減らします。止めると音が切れてしまいます。' },
      { name: 'ピアノ', tip: '自然減衰に任せます。ペダルを離すタイミングが、消える瞬間を決めます。' },
    ],
    confusions: [
      { term: 'Al niente', slug: 'al-niente', note: '「無になるまで」。消滅へ向かう過程を指示します。' },
      { term: 'Dal niente', slug: 'dal-niente', note: '「無から」。聞こえない状態からの立ち上げを指示します。' },
      { term: 'Morendo', slug: 'morendo', note: '「絶え入るように」。niente へ向かう過程を表す語です。' },
      { term: 'Pianississimo', slug: 'pianississimo', note: 'ppp。限りなく小さいが、ゼロではありません。' },
    ],
    works: [
      { title: 'ノーノ、シャリーノなど現代作品', note: '音と静寂の境界を扱う作品で、niente が構造的に用いられます。' },
    ],
  },

  'poco-a-poco': {
    lead: 'Poco a poco は「少しずつ、徐々に」。単独では使われず、他の指示に添えて、変化を長い時間をかけて行うことを求めます。',
    sections: [
      {
        heading: '「行きすぎるな」という制動',
        body: 'cresc. poco a poco のように使われます。この poco a poco が付いている場合、作曲家は「一気にやるな」と釘を刺していると読めます。つまり、その変化は通常より長い区間をかけて行われるべきだということです。crescendo の設計と同じく、終点を先に決め、そこまでの距離を配分してください。最初のうちはほとんど変化させないくらいでちょうど良くなります。',
      },
      {
        heading: '長い区間ほど設計が要る',
        body: 'poco a poco が付く区間は、しばしば数十小節に及びます。感覚だけで弾くと、途中で目標に到達してしまうか、逆に最後まで何も起きないかのどちらかになります。区間を4等分し、各地点での音量やテンポを数値的に決めてしまうのが確実です。楽譜に書き込んでおくと、本番でも再現できます。',
      },
    ],
    instruments: [
      { name: '共通', tip: '区間の中間地点でどうなっているべきかを決めます。両端だけ決めても途中で崩れます。' },
      { name: '合奏', tip: '全員の配分がずれると変化が不明瞭になります。中間地点の目標を共有しておきます。' },
    ],
    confusions: [
      { term: 'Poco', slug: 'poco', note: '「少し」。poco a poco はこれを重ねて、段階性を強調した形です。' },
      { term: 'Subito', slug: 'subito', note: '「すぐに」。poco a poco と正反対の指示です。' },
      { term: 'Crescendo', slug: 'crescendo', note: 'poco a poco が添えられる代表的な指示です。' },
    ],
    works: [
      { title: 'ラヴェル「ボレロ」', note: '曲全体が poco a poco の crescendo として設計されています。' },
      { title: 'ロッシーニ「セビリアの理髪師」序曲', note: '長い区間をかけた段階的な増大が、この作曲家の代名詞です。' },
    ],
  },

  'smorzando': {
    lead: 'Smorzando（smorz.）は smorzare（和らげる、消す）から来た語で、「消えゆくように」。音量と勢いを同時に静めていく指示です。',
    sections: [
      {
        heading: '勢いを静める',
        body: 'diminuendo が音量に焦点を当てるのに対し、smorzando は音楽の勢いそのものを鎮めることを求めます。したがって、音量だけでなくテンポもわずかに緩み、アーティキュレーションも丸くなるのが自然です。ただし calando ほど明確に速度を落とすわけではなく、緊張が緩んでいく感覚が主眼です。',
      },
      {
        heading: '緩和としての位置づけ',
        body: 'smorzando は、緊張から緩和へ向かう場面で用いられます。したがってその前に緊張があることが前提です。何も高まっていない状態で smorzando をかけても、単に音が小さくなるだけになります。楽譜でこの指示を見つけたら、その手前がどう高まっているかを先に確認してください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '音量とともに打鍵の角を落とします。硬いまま小さくすると、緩和になりません。' },
      { name: '弦楽器', tip: 'ビブラートも同時に狭く遅くしていくと、緊張が解けていく感覚が出ます。' },
      { name: '管楽器', tip: 'タンギングを徐々に柔らかくします。息だけ減らすと痩せて聞こえます。' },
    ],
    confusions: [
      { term: 'Morendo', slug: 'morendo', note: '「絶え入るように」。消滅までを含意し、smorzando より徹底しています。' },
      { term: 'Calando', slug: 'calando', note: '弱めながら遅く。速度の低下がより明確です。' },
      { term: 'Diminuendo', slug: 'diminuendo', note: '音量のみの指示。smorzando は勢い全体を含みます。' },
      { term: 'Perdendosi', slug: 'perdendosi', note: '「見失うように」。どこへ消えたか分からなくなる効果を狙います。' },
    ],
    works: [
      { title: 'ショパン ノクターン第1番', note: 'フレーズの終わりで勢いが静まっていく処理が繰り返されます。' },
    ],
  },

  'violino': {
    lead: 'Violino はイタリア語でヴァイオリン。弦楽器の最高音域を担い、オーケストラでも室内楽でも旋律の中心を受け持つ楽器です。',
    sections: [
      {
        heading: '4本の弦と音域',
        body: '低いほうから G・D・A・E の4本が完全5度ずつ離れて張られています。この5度の関係が、和音の共鳴と音程の判断を支えています。開放弦と同じ音や、その5度・オクターブにあたる音は、他の弦が共鳴して豊かに響きます。逆に共鳴しない音は痩せて聞こえるため、演奏では意識的に補う必要があります。',
      },
      {
        heading: '楽譜での表記',
        body: 'オーケストラのスコアでは第1ヴァイオリンと第2ヴァイオリンに分かれ、イタリア語では Violino I / Violino II と書かれます。第2ヴァイオリンは第1の補助ではなく、和声の内声とリズムの推進を担う独立したパートです。この2つのバランスが、弦楽セクション全体の厚みを決めます。',
      },
      {
        heading: 'ポジションという考え方',
        body: '左手を弦のどの位置に構えるかによって、第1ポジション、第3ポジションなどと呼び分けます。高い音を出すには高いポジションへ移動しますが、同じ音でもどのポジションのどの弦で弾くかによって音色が変わります。楽譜に指定がない場合、この選択が演奏者の解釈の一部になります。',
      },
    ],
    instruments: [
      { name: 'ヴァイオリン', tip: '開放弦の共鳴を利用すると音程の基準になります。とくに5度と重音の確認に有効です。' },
      { name: '合奏', tip: '第1と第2で音色を揃えるか、あえて変えるかを事前に決めます。' },
    ],
    confusions: [
      { term: 'Violoncello', slug: 'violoncello', note: 'チェロ。同じ弦楽器族で、2オクターブ下の音域を担います。' },
      { term: 'Harmonics', slug: 'harmonics', note: 'ハーモニクス。開放弦を利用した奏法が基本形になります。' },
      { term: 'Divisi', slug: 'divisi', note: 'パートを分ける指示。ヴァイオリンでは頻繁に用いられます。' },
    ],
    works: [
      { title: 'バッハ 無伴奏ヴァイオリンのためのソナタとパルティータ', note: '1本で和声と旋律を同時に成立させる、この楽器の極限を示す作品です。' },
    ],
  },

  'violoncello': {
    lead: 'Violoncello（チェロ）は、ヴァイオリン属の低音楽器。人の声に最も近い音域を持つとされ、旋律と低音の両方を担える点が特徴です。',
    sections: [
      {
        heading: '二つの役割',
        body: 'オーケストラや室内楽では、チェロは和声の土台を支えると同時に、旋律を歌う役割も担います。この二面性がこの楽器の性格を決めています。低音を弾いているときはリズムと和声の基準となり、旋律を弾くときは中心になる。楽譜を読むとき、いまどちらの役割なのかを把握することが最初の作業になります。',
      },
      {
        heading: '複数の音部記号',
        body: '音域が広いため、ヘ音記号を基本としながら、高音域ではハ音記号（テノール記号）やト音記号が使われます。記号が切り替わる箇所を見落とすと、まったく違う音を弾くことになります。楽譜を読み始める前に、どこで記号が変わるかを確認しておくのが実務です。',
      },
    ],
    instruments: [
      { name: 'チェロ', tip: '低音域では弓の圧より速度を優先します。押さえ込むと弦が鳴らなくなります。' },
      { name: '合奏', tip: 'コントラバスと同じ動きをする場面では、オクターブの関係を意識して音程を合わせます。' },
    ],
    confusions: [
      { term: 'Contrabbasso', slug: 'contrabbasso', note: 'コントラバス。さらに1オクターブ下を担い、チェロと重ねられることが多い楽器です。' },
      { term: 'Violino', slug: 'violino', note: 'ヴァイオリン。同族の高音楽器です。' },
      { term: 'Alto clef', slug: 'alto-clef', note: 'ハ音記号。チェロの高音域ではテノール記号として用いられます。' },
    ],
    works: [
      { title: 'バッハ 無伴奏チェロ組曲', note: '単旋律の中に和声を感じさせる書法が、この楽器の可能性を示します。' },
      { title: 'ドヴォルザーク チェロ協奏曲', note: '歌う楽器としてのチェロの代表作です。' },
    ],
  },

  'contrabbasso': {
    lead: 'Contrabbasso（コントラバス）は、オーケストラの最低音を担う弦楽器。記譜より1オクターブ低く鳴る移調楽器でもあります。',
    sections: [
      {
        heading: '実音は1オクターブ下',
        body: 'コントラバスは、書かれた音より1オクターブ低く鳴ります。これは加線が増えすぎるのを避けるための慣習です。チェロと同じ譜面を演奏すると、自動的にオクターブ下が加わり、豊かな低音の層が生まれます。スコアを読むときは、この移調を頭に入れておかないと和声の判断を誤ります。',
      },
      {
        heading: '調弦がヴァイオリン属と異なる',
        body: 'ヴァイオリン、ヴィオラ、チェロが完全5度ずつで調弦されるのに対し、コントラバスは完全4度ずつです。楽器が大きく、5度調弦では左手が届かないためです。この違いから、運指の考え方も他の弦楽器とは別系統になります。ヴィオール属の名残とされ、楽器の形状にもその特徴が残っています。',
      },
      {
        heading: '低音は遅れて聞こえる',
        body: '低い音ほど立ち上がりに時間がかかります。そのため、他のパートと同時に発音すると、客席では遅れて聞こえることがあります。大きなホールでは、わずかに早めに弾くことでタイミングが揃います。これは技術ではなく物理の問題なので、リハーサルで確認する価値があります。',
      },
    ],
    instruments: [
      { name: 'コントラバス', tip: '弓を弦に置いてから動かします。空中から当てると発音がさらに遅れます。' },
      { name: '合奏', tip: 'チェロと同じ譜面のとき、オクターブ違いの音程を合わせる必要があります。' },
    ],
    confusions: [
      { term: 'Violoncello', slug: 'violoncello', note: 'チェロ。1オクターブ上を担い、しばしば同じ動きをします。' },
      { term: 'Transposition', slug: 'transposition', note: '移調。コントラバスは記譜と実音が1オクターブ異なります。' },
      { term: 'Pizzicato', slug: 'pizzicato', note: '指ではじく奏法。コントラバスでは太い弦を横に引くように弾きます。' },
    ],
    works: [
      { title: 'サン＝サーンス「動物の謝肉祭」より「象」', note: 'コントラバスが独奏で旋律を担う、珍しい例です。' },
    ],
  },

  'flauto': {
    lead: 'Flauto はイタリア語でフルート。息を穴の縁に当てて音を出すエアリード楽器で、木管楽器の中では最も高い音域を受け持ちます。',
    sections: [
      {
        heading: 'リードを持たない木管楽器',
        body: 'クラリネットやオーボエがリードの振動で音を出すのに対し、フルートは息そのものが歌口の縁で分かれることで音を生みます。この仕組みのため、音色は透明で、他の木管楽器と混ざりやすい性質を持ちます。反面、息の消費が多く、長いフレーズではブレスの設計が課題になります。',
      },
      {
        heading: 'バロックのフラウトは別の楽器',
        body: 'バロック期の楽譜で単に flauto と書かれている場合、多くはリコーダーを指します。現在のフルートにあたる横笛は flauto traverso（横向きの笛）と区別して書かれました。バッハの作品でどちらが指定されているかは、演奏の前に確認すべき点です。',
      },
    ],
    instruments: [
      { name: 'フルート', tip: '低音域は息の量、高音域は息のスピードで支えます。同じ吹き方では音域が変わると鳴りません。' },
      { name: '合奏', tip: '高音域では非常によく通ります。旋律でないときは想像以上に控える必要があります。' },
    ],
    confusions: [
      { term: 'Clarinetto', slug: 'clarinetto', note: 'クラリネット。単簧のリードを持ち、音域も音色も異なります。' },
      { term: 'Flautando', slug: 'flautando', note: '「フルートのように」。弦楽器でこの音色を模す奏法です。' },
      { term: 'Harmonics', slug: 'harmonics', note: '倍音。フルートも息のスピードで倍音列を移動して音域を変えます。' },
    ],
    works: [
      { title: 'ドビュッシー「牧神の午後への前奏曲」', note: '冒頭のフルート独奏が、この楽器の音色の可能性を広げました。' },
      { title: 'バッハ「管弦楽組曲第2番」', note: 'flauto traverso のための作品で、バロックの用法が確認できます。' },
    ],
  },

  'clarinetto': {
    lead: 'Clarinetto（クラリネット）は、単簧のリードを持つ木管楽器。木管の中で最も広い音域を持ち、音域ごとに音色が大きく変わることが特徴です。',
    sections: [
      {
        heading: '音域ごとに別の楽器のよう',
        body: 'クラリネットは音域によって名前が付くほど音色が異なります。低音域のシャリュモーは暗く豊かで、中音域のクラリオンは明るく澄み、高音域は鋭く輝きます。この差は他の木管楽器より顕著で、作曲家はこれを意図的に使い分けます。演奏する側も、音域をまたぐフレーズでは音色の段差が出ないよう配慮が必要です。',
      },
      {
        heading: '移調楽器であること',
        body: '最も一般的な B♭管では、記譜されたドが実際には B♭で鳴ります。つまり実音は記譜より長2度低くなります。A管も広く使われ、こちらは短3度低くなります。調号の多い曲でA管に持ち替えるのは、指づかいを楽にするためです。合奏では実音で和声を把握しておく必要があります。',
      },
      {
        heading: '奇数倍音が中心',
        body: 'クラリネットは片側が閉じた管として振動するため、偶数倍音が弱く奇数倍音が強く出ます。これが独特の音色の理由であり、また音域を切り替えるとき12度（1オクターブ＋5度）飛ぶ理由でもあります。他の木管がオクターブで切り替わるのと異なる、この楽器固有の性質です。',
      },
    ],
    instruments: [
      { name: 'クラリネット', tip: '音域をまたぐフレーズでは、息の支えを一定に保って音色差を埋めます。' },
      { name: '合奏', tip: '記譜と実音が異なるため、他パートと音を確認するときは実音で話します。' },
    ],
    confusions: [
      { term: 'Flauto', slug: 'flauto', note: 'フルート。リードを持たず、音色も音域も異なります。' },
      { term: 'Fagotto', slug: 'fagotto', note: 'ファゴット。二枚のリードを持つ低音の木管楽器です。' },
      { term: 'Transposition', slug: 'transposition', note: '移調。クラリネットは記譜と実音が異なる移調楽器です。' },
    ],
    works: [
      { title: 'モーツァルト クラリネット協奏曲', note: '音域による音色の変化が、旋律の表情として活かされています。' },
      { title: 'ガーシュウィン「ラプソディ・イン・ブルー」', note: '冒頭のグリッサンドが、この楽器の代名詞になりました。' },
    ],
  },

  'fagotto': {
    lead: 'Fagotto（ファゴット、バスーン）は、二枚重ねのリードを持つ低音の木管楽器。木管群の低音を支えつつ、独奏では独特の表情も持ちます。',
    sections: [
      {
        heading: '二重の役割',
        body: 'ファゴットは木管セクションの低音を担当し、和声の土台を作ります。同時に、独奏では哀愁のある音色から滑稽な表情まで幅広く扱える楽器でもあります。この二面性のため、楽譜を読むときは、いま支える側なのか歌う側なのかの判断が重要になります。',
      },
      {
        heading: '長い管を折り返した構造',
        body: '実際の管長は2.5メートルほどあり、それを折り返してこの大きさに収めています。この構造のため運指が複雑で、同じ音を出す運指が複数ある場合もあります。速いパッセージでは、どの運指を選ぶかが演奏可能かどうかを左右します。',
      },
      {
        heading: '複数の音部記号',
        body: '基本はヘ音記号ですが、高音域ではハ音記号（テノール記号）が用いられます。チェロと同様、記号の切り替わりを見落とさないことが読譜の前提になります。',
      },
    ],
    instruments: [
      { name: 'ファゴット', tip: 'リードの状態が音色と音程を大きく左右します。調整が演奏準備の一部になります。' },
      { name: '合奏', tip: 'チェロやコントラバスと同じ動きをする場面では、発音のタイミングを揃えます。' },
    ],
    confusions: [
      { term: 'Clarinetto', slug: 'clarinetto', note: 'クラリネット。単簧で、音域も構造も異なります。' },
      { term: 'Euphonium', slug: 'euphonium', note: 'ユーフォニアム。同じ音域帯の金管楽器です。' },
      { term: 'Alto clef', slug: 'alto-clef', note: 'ハ音記号。ファゴットの高音域でも用いられます。' },
    ],
    works: [
      { title: 'ストラヴィンスキー「春の祭典」冒頭', note: '極端な高音域による独奏が、緊張した音色を作ります。' },
      { title: 'デュカス「魔法使いの弟子」', note: 'ファゴットの主題が、滑稽さと不気味さを同時に表現します。' },
    ],
  },

  'corno': {
    lead: 'Corno（ホルン）は、金管楽器の中で最も柔らかい音色を持つ楽器。木管とも金管とも溶け合い、オーケストラの響きを結びつける役割を担います。',
    sections: [
      {
        heading: '橋渡しをする楽器',
        body: 'ホルンは、木管セクションと金管セクションの両方と混ざる音色を持っています。このため、オーケストラの中で両者をつなぐ役割を担うことが多く、和声の内声を埋める書き方が頻繁に用いられます。目立つ独奏だけでなく、この「見えない接着剤」としての働きが、実は最も重要な役割です。',
      },
      {
        heading: '右手を朝顔に入れる',
        body: 'ホルンは演奏中、右手をベル（朝顔）の中に入れます。これは楽器を支えるためだけでなく、音色と音程を微調整するためでもあります。手をさらに深く入れて音を変化させるゲシュトップという奏法もあり、金属的で鋭い音色が得られます。楽譜では + の記号で指示されます。',
      },
      {
        heading: '移調と記譜の歴史',
        body: 'バルブが発明される以前、ホルンは管を差し替えて調を変えていました。その名残で、古典派の楽譜では曲ごとに異なる調のホルンが指定されています。現代では F 管が標準で、記譜より完全5度低く鳴ります。古い楽譜を読むときは、指定された調を確認して読み替える必要があります。',
      },
    ],
    instruments: [
      { name: 'ホルン', tip: '倍音が密集した音域を使うため、狙った音を外しやすい楽器です。息のスピードで音を定めます。' },
      { name: '合奏', tip: '木管と重なる場面では木管寄りの、金管と重なる場面では金管寄りの音色を選びます。' },
    ],
    confusions: [
      { term: 'Tromba', slug: 'tromba', note: 'トランペット。同じ金管ですが、直接的で明るい音色を持ちます。' },
      { term: 'Euphonium', slug: 'euphonium', note: 'ユーフォニアム。柔らかい音色という点でホルンと近い性格を持ちます。' },
      { term: 'Harmonics', slug: 'harmonics', note: '倍音。金管楽器は倍音列を利用して音高を変えます。' },
    ],
    works: [
      { title: 'R.シュトラウス「ホルン協奏曲第1番」', note: 'ホルン奏者を父に持つ作曲家による、楽器の性質を知り尽くした作品です。' },
      { title: 'ブラームス 交響曲第1番 第4楽章', note: 'ホルンの主題が、暗から明への転換を告げます。' },
    ],
  },

  'tromba': {
    lead: 'Tromba（トランペット）は、金管楽器の中で最も高く明るい音色を持つ楽器。輝かしい響きで、しばしば宣言や祝祭を象徴します。',
    sections: [
      {
        heading: 'ナチュラル・トランペットの時代',
        body: 'バルブが発明される以前のトランペットは、倍音列にある音しか出せませんでした。そのため、旋律を演奏するには極端に高い音域を使う必要があり、これをクラリーノ奏法と呼びます。バッハの作品に現れる華麗なトランペットのパートは、この技法によるものです。バルブの発明後、あらゆる音が出せるようになり、書法も大きく変わりました。',
      },
      {
        heading: 'ミュートによる音色変化',
        body: 'トランペットは弱音器（ミュート）の種類が豊富で、ストレート、カップ、ハーモン、プランジャーなど、それぞれ音色がまったく異なります。楽譜に種類の指定がある場合は必ず従います。指定がない場合でも、曲想に応じて選ぶことが演奏解釈の一部になります。',
      },
    ],
    instruments: [
      { name: 'トランペット', tip: '非常によく通る楽器です。旋律でない場面では、想像以上に控える必要があります。' },
      { name: '合奏', tip: 'ミュートの着脱に時間がかかります。持ち替えの余裕を楽譜上で確認しておきます。' },
    ],
    confusions: [
      { term: 'Corno', slug: 'corno', note: 'ホルン。同じ金管ですが、柔らかく溶け合う音色を持ちます。' },
      { term: 'Con sordino', slug: 'con-sordino', note: '弱音器を付ける指示。トランペットでは種類の指定が重要になります。' },
      { term: 'Fanfare', slug: 'fanfare', note: 'ファンファーレ。トランペットの象徴的な用法です。' },
    ],
    works: [
      { title: 'バッハ「ブランデンブルク協奏曲第2番」', note: 'クラリーノ奏法による極めて高い音域が要求されます。' },
      { title: 'ムソルグスキー／ラヴェル「展覧会の絵」冒頭', note: 'トランペットのプロムナードが全曲の性格を決めます。' },
    ],
  },

  'organo': {
    lead: 'Organo（オルガン）は、送風によってパイプを鳴らす鍵盤楽器。「楽器の王」と呼ばれ、建物と一体化した巨大な構造を持ちます。',
    sections: [
      {
        heading: 'ストップという概念',
        body: 'オルガンには音色の異なるパイプ群が複数あり、どれを鳴らすかをストップという装置で選びます。ストップを組み合わせることで音色を作るため、演奏者は曲を弾く前に「音色を設計する」作業を行います。同じ曲でも、どの楽器のどのストップを使うかで印象がまったく変わります。',
      },
      {
        heading: '足でも弾く',
        body: '手鍵盤に加えて、足で演奏するペダル鍵盤があります。低音声部を足で担当することで、両手が上声部に専念できます。バッハのオルガン作品では、ペダルが独立した声部として書かれており、3声以上を同時に扱うことになります。',
      },
      {
        heading: '音量が変わらない楽器',
        body: 'パイプオルガンは、鍵盤を強く押しても音量が変わりません。したがって表現は、ストップの選択、音の長さ、そして間の取り方で行います。強弱をつけられないという制約が、アーティキュレーションによる表現を発達させました。この点で、鍵盤楽器でありながらピアノとは根本的に異なります。',
      },
    ],
    instruments: [
      { name: 'オルガン', tip: '楽器ごとにストップ構成が違います。本番の楽器で必ず音色を作り直す必要があります。' },
      { name: '共通', tip: '残響が長い空間が多く、テンポは通常より遅めが適切な場合があります。' },
    ],
    confusions: [
      { term: 'Clavicembalo', slug: 'clavicembalo', note: 'チェンバロ。同じく打鍵の強さで音量が変わらない鍵盤楽器です。' },
      { term: 'Fortepiano', slug: 'fortepiano', note: '初期のピアノ。強弱がつけられる点が画期的でした。' },
      { term: 'Fugue', slug: 'fugue', note: 'フーガ。オルガンはストップで声部を色分けできるため、この形式と相性がよい楽器です。' },
    ],
    works: [
      { title: 'バッハ「トッカータとフーガ ニ短調」', note: 'オルガンの響きの可能性を示す、最も知られた作品です。' },
      { title: 'サン＝サーンス 交響曲第3番「オルガン付き」', note: 'オーケストラと組み合わせた壮大な用法です。' },
    ],
  },

  'clavicembalo': {
    lead: 'Clavicembalo（チェンバロ、ハープシコード）は、弦を爪ではじいて音を出す鍵盤楽器。バロック音楽の中心を担いました。',
    sections: [
      {
        heading: 'はじく楽器',
        body: 'ピアノが弦をハンマーで打つのに対し、チェンバロは爪（プレクトラム）ではじきます。この違いから、打鍵の強さを変えても音量がほとんど変わりません。減衰も速く、音を保つことが困難です。バロック音楽に装飾音が多いのは、この減衰を補い、音を持続しているように聞かせるためでもあります。',
      },
      {
        heading: '表現の手段',
        body: '音量で表現できないため、チェンバロでは音の長さと間の取り方が表現の中心になります。同じ音符でも、どこまで保つか、次の音との間をどう取るかで、まったく違う表情が生まれます。また、複数の鍵盤やストップを持つ楽器では、音色を切り替えることで段階的な変化を作ります。',
      },
      {
        heading: '通奏低音の担い手',
        body: 'バロックの合奏では、チェンバロが数字付き低音をもとに和音を即興で補いました。楽譜に書かれているのは低音と数字だけで、どう和音を配置するかは奏者に委ねられます。この役割は、現代でいえば伴奏の編曲を演奏しながら行うようなものです。',
      },
    ],
    instruments: [
      { name: 'チェンバロ', tip: '音量が変わらないため、アーティキュレーションが唯一の表現手段になります。' },
      { name: '通奏低音', tip: '数字付き低音の読み方を身につけると、和音の選択に自由が生まれます。' },
    ],
    confusions: [
      { term: 'Fortepiano', slug: 'fortepiano', note: '初期のピアノ。強弱がつけられることが、チェンバロに対する画期性でした。' },
      { term: 'Organo', slug: 'organo', note: 'オルガン。同じく打鍵の強さで音量が変わりません。' },
      { term: 'Figured bass', slug: 'figured-bass', note: '数字付き低音。チェンバロが担った通奏低音の記譜法です。' },
    ],
    works: [
      { title: 'スカルラッティ ソナタ集', note: 'チェンバロの機構を前提とした書法が徹底されています。' },
      { title: 'バッハ「ゴルトベルク変奏曲」', note: '2段鍵盤のチェンバロを想定して書かれています。' },
    ],
  },

  'fortepiano': {
    lead: 'Fortepiano は、18世紀から19世紀前半に用いられた初期のピアノ。「弱くも強くも出せる」という、当時としては画期的な特性が名前になりました。',
    sections: [
      {
        heading: '名前が示す革新',
        body: 'それ以前の主流だったチェンバロは、鍵盤をどう押しても音量が変わりませんでした。ハンマーで弦を打つ機構により打鍵の強さが音量に反映されるようになったことが、この楽器の革命でした。piano e forte（弱くも強くも）という呼び名がそのまま楽器名になり、のちに略されて piano となります。',
      },
      {
        heading: '現代ピアノとの違い',
        body: '現代のピアノより弦の張力が低く、フレームも木製で、音量は小さく減衰も速くなります。音域も狭く、モーツァルトの時代は5オクターブ程度でした。その代わり音の立ち上がりが速く、装飾音が明瞭に聞こえます。モーツァルトやベートーヴェン初期の作品が、現代ピアノで弾くと厚く重く聞こえるのは、この差によります。',
      },
      {
        heading: '演奏解釈への影響',
        body: '当時の楽器を知ると、楽譜の指示の意味が変わって見えます。ペダルの指示が少ないのは、減衰が速く濁りにくかったためです。fortissimo が現代ほどの音量を想定していないことも分かります。現代ピアノで演奏する場合でも、この背景を踏まえると音量や響きの設計が変わります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '古典派の作品では、現代ピアノでも音量の上限を抑えると様式に近づきます。' },
      { name: 'フォルテピアノ', tip: '減衰が速いため、テンポと装飾の扱いが現代ピアノとは異なります。' },
    ],
    confusions: [
      { term: 'Clavicembalo', slug: 'clavicembalo', note: 'チェンバロ。強弱がつけられない点が、フォルテピアノとの決定的な違いです。' },
      { term: 'Piano', slug: 'piano', note: '強弱記号としての piano と、楽器名は同じ語源を持ちます。' },
      { term: 'Forte', slug: 'forte', note: '「強く」。fortepiano という楽器名の後半にあたります。' },
    ],
    works: [
      { title: 'モーツァルト ピアノソナタ集', note: '当時の楽器の音域と音量を前提に書かれています。' },
      { title: 'ベートーヴェン ピアノソナタ第29番「ハンマークラヴィーア」', note: '楽器の進化そのものが作品名になっています。' },
    ],
  },

  'timpan': {
    lead: 'Timpani（ティンパニ）は、音程を持つ打楽器。半球状の胴に張った皮をペダルで調整し、特定の音高を鳴らせる点が他の打楽器と異なります。',
    sections: [
      {
        heading: '音程を持つ打楽器',
        body: '大半の打楽器が明確な音高を持たないのに対し、ティンパニは調律されます。古典派では主音と属音に合わせた2台が標準で、和声の土台を打楽器で補強する役割を担いました。ペダルで音高を変えられるようになると、旋律的な扱いも可能になり、現代では複数台を用いるのが一般的です。',
      },
      {
        heading: 'マレットの選択',
        body: '音色を決める最大の要素はマレット（撥）です。硬いものは輪郭が明確で鋭く、柔らかいものは丸く重い響きになります。楽譜に指定があることは少なく、多くは奏者が曲想に応じて選びます。同じ曲の中で持ち替えることもあり、この判断が演奏の一部になります。',
      },
      {
        heading: '打点と余韻の管理',
        body: '皮のどこを叩くかで音色が変わり、縁寄りは倍音が多く、中央寄りは詰まった音になります。また、鳴らしたあと手や布で止めるかどうかも音楽的な判断です。休符が書かれていれば余韻も止めるのが原則ですが、和声の一部として残す選択もあります。',
      },
    ],
    instruments: [
      { name: 'ティンパニ', tip: '打点は縁から3分の1程度が標準です。中央を叩くと音程感が失われます。' },
      { name: '合奏', tip: '低音楽器と同じ音を担当することが多く、発音のタイミングを揃える必要があります。' },
    ],
    confusions: [
      { term: 'Cimbali', slug: 'cimbali', note: 'シンバル。音高を持たない打楽器で、役割が異なります。' },
      { term: 'Tremolo', slug: 'tremolo', note: 'トレモロ。ティンパニではロールと呼ばれ、持続音を作る手段になります。' },
      { term: 'Coperto', slug: 'coperto', note: '「覆われた」。ティンパニに布をかけて音を抑える指示です。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第9番 第2楽章', note: 'ティンパニが主題を提示する、当時としては異例の扱いです。' },
      { title: 'ハイドン 交響曲第103番「太鼓連打」', note: '冒頭のティンパニのロールが曲名になりました。' },
    ],
  },

  'cachucha': {
    lead: 'Cachucha（カチューチャ）は、スペインに由来する3拍子の舞曲。カスタネットを伴って踊られます。',
    sections: [
      {
        heading: '確実に言えること',
        body: 'スペイン起源の3拍子の舞曲で、リズミカルで情熱的な性格を持ちます。19世紀にはバレエの演目として取り上げられ、舞台作品を通じて広く知られるようになりました。ただし、この舞曲の成立の経緯や地域的な分布については、確実な情報が限られます。楽譜でこの語を見た場合は、3拍子であること、カスタネットのリズムを伴う性格であることを手がかりに扱うのが安全です。',
      },
    ],
    confusions: [
      { term: 'Fandango', slug: 'fandango', note: '同じくスペインの3拍子の舞曲。より広く知られ、クラシック音楽への流入例も多く残っています。' },
      { term: 'Bolero', slug: 'bolero', note: 'スペインの3拍子の舞曲。カスタネットを伴う点が共通します。' },
    ],
  },

  'fugal': {
    lead: 'Fugal は「フーガ的な」という形容詞。フーガそのものではなく、フーガの技法を部分的に用いていることを示します。',
    sections: [
      {
        heading: 'フーガとフーガ的の違い',
        body: 'フーガは形式であり、主題の提示と応答、展開という一連の構造を持ちます。一方 fugal は、その技法の一部が使われていることを指す言葉です。たとえばソナタ形式の展開部で主題が声部間を追いかける箇所は fugal ですが、フーガではありません。楽曲分析でこの語が現れたときは、「フーガの手法を借りている」と読むのが正確です。',
      },
      {
        heading: '演奏上の扱い',
        body: 'fugal な箇所では、フーガと同じ原則が適用されます。つまり、いま主題がどの声部にあるかを聴き手に伝えることが最優先になります。主題を担当する声部をわずかに前に出し、他を控える。この処理をしないと、複数の線が混ざって和音の連続に聞こえてしまいます。',
      },
    ],
    confusions: [
      { term: 'Fugue', slug: 'fugue', note: 'フーガ。形式そのものを指します。fugal はその技法を部分的に用いた状態です。' },
      { term: 'Counterpoint', slug: 'counterpoint', note: '対位法。fugal な書法はこの技法の一部です。' },
      { term: 'Stretto', slug: 'stretto', note: '主題が重なって現れる技法。fugal な箇所の頂点で用いられます。' },
    ],
    works: [
      { title: 'モーツァルト 交響曲第41番「ジュピター」第4楽章', note: 'ソナタ形式の中で対位法的な書法が徹底されています。' },
    ],
  },

  'ballata': {
    lead: 'Ballata（バッラータ）は、14世紀イタリアの詩と音楽の形式。語源は ballare（踊る）で、もともと踊りを伴う歌でした。',
    sections: [
      {
        heading: '踊りに由来する形式',
        body: 'ballata という語は動詞 ballare（踊る）から来ており、成立当初は舞踏を伴う歌でした。14世紀イタリアの世俗音楽、いわゆるアルス・ノヴァの時代を代表する形式の一つで、リトルネッロと呼ばれる反復部分を持つ構造が知られています。作曲家としてはフランチェスコ・ランディーニの作品が多く伝わっています。',
      },
      {
        heading: 'バラードとの関係',
        body: '現代の日本語で「バラード」と言えば、叙情的なゆったりした歌を指すことが多くなります。しかし語をたどると、この ballata や、物語を歌う各国の伝統的な歌に行き着きます。ショパンのバラードのように、器楽で物語性を持つ作品を指す用法もあり、時代によって意味が変化してきた語です。',
      },
    ],
    confusions: [
      { term: 'Ballade', slug: 'ballade', note: 'バラード。物語を歌う、あるいは物語性を持つ器楽曲を指します。' },
      { term: 'Canto', slug: 'canto', note: '歌、主旋律。ballata は歌われる形式の一つです。' },
    ],
  },

  'galanterie': {
    lead: 'Galanterie（ガランテリー）は、バロック組曲において、標準的な舞曲のあいだに任意で挿入される小曲の総称です。',
    sections: [
      {
        heading: '任意で挿入される曲',
        body: 'バロックの組曲は、アルマンド、クーラント、サラバンド、ジーグという4つの舞曲を基本とします。ガランテリーは、その中のサラバンドとジーグのあいだなどに、任意で加えられる曲を指す総称です。メヌエット、ブーレ、ガヴォット、パスピエなどがこれにあたります。作曲家が自由に選んで配置できるため、組曲ごとに構成が異なります。',
      },
      {
        heading: '「優雅な」という語感',
        body: 'galant はフランス語で「優雅な、洗練された」を意味します。これらの挿入曲が、標準の4舞曲より軽く親しみやすい性格を持つことから、この名で呼ばれます。演奏でも、重厚に構えるより軽やかに扱うほうが性格に合います。',
      },
    ],
    confusions: [
      { term: 'Minuet', slug: 'minuet', note: 'メヌエット。ガランテリーとして最も多く用いられる舞曲です。' },
      { term: 'Bourrée', slug: 'bourree', note: 'ブーレ。同じくガランテリーとして挿入される舞曲です。' },
      { term: 'Gavotte', slug: 'gavotte', note: 'ガヴォット。これもガランテリーに含まれます。' },
      { term: 'Galante', slug: 'galante', note: '「上品で親しみやすい」。同じ語源を持つ性格の指示です。' },
    ],
    works: [
      { title: 'バッハ「フランス組曲」', note: '各組曲で挿入される舞曲が異なり、ガランテリーの自由さが確認できます。' },
    ],
  },

  'bicinium': {
    lead: 'Bicinium（ビチニウム）は、2声で書かれた対位法的な楽曲。ルネサンス期に、対位法の教材としても用いられました。',
    sections: [
      {
        heading: '2声という最小の対位法',
        body: 'bi（2つの）＋ canere（歌う）に由来し、2つの声部だけで構成される曲を指します。声部が2つしかないため、和声で補うことができず、旋律線そのものの良さと2声の絡み合いだけで音楽を成立させなければなりません。この制約から、対位法を学ぶ教材として重用されました。',
      },
      {
        heading: '演奏上の要点',
        body: '2声では、どちらかが伴奏に回ることはありません。常に両方が主役であり、互いの動きを聴き合う必要があります。片方が動いているときは他方が静止する、といった役割の交替が頻繁に起こるため、その受け渡しを明確にすることが演奏の中心的な課題になります。',
      },
    ],
    confusions: [
      { term: 'Counterpoint', slug: 'counterpoint', note: '対位法。bicinium はその最小構成にあたります。' },
      { term: 'Duo', slug: 'duo', note: '二重奏。編成としては同じ2人ですが、bicinium は書法を指す語です。' },
      { term: 'Canon', slug: 'canon', note: 'カノン。2声で書かれることが多く、bicinium の一形態にもなります。' },
    ],
  },

  'finalino': {
    lead: 'Finalino は finale（終曲）に縮小辞 -ino が付いた形。「小さな終曲」、つまり短い規模の終結部分を指します。',
    sections: [
      {
        heading: '縮小辞が示す規模',
        body: 'イタリア語の -ino は「小さな」を意味する縮小辞です。finale が楽曲や組曲全体を締めくくる大規模な終曲を指すのに対し、finalino はより短く、小規模な終わりの部分を指します。規模の指定であり、性格や速度を指定する語ではありません。',
      },
    ],
    confusions: [
      { term: 'Coda', slug: 'coda', note: '結尾部。曲を着地させるために付け加えられる部分です。' },
      { term: 'Fine', slug: 'fine', note: '「終わり」。曲を終える位置を示す指示です。' },
    ],
  },

  'coppia': {
    lead: 'Coppia はイタリア語で「一対、二つ組」。楽曲分析では、対になって現れる二つの要素を指して使われます。',
    sections: [
      {
        heading: '対という単位',
        body: '音楽では、二つの要素が対になって機能する場面が多くあります。パヴァーヌとガリアルドのような遅い舞曲と速い舞曲の組、メヌエットとトリオ、提示部の第1主題と第2主題。coppia はこうした「対」を指す語です。楽曲を分析するとき、要素を単独で見るのではなく、何と対になっているかを探すと構造が見えやすくなります。',
      },
    ],
    confusions: [
      { term: 'Duo', slug: 'duo', note: '二重奏。奏者が2人という編成を指し、coppia の概念的な「対」とは異なります。' },
      { term: 'Pavane', slug: 'pavane', note: 'パヴァーヌ。ガリアルドと対で演奏される慣習がありました。' },
      { term: 'Minuet', slug: 'minuet', note: 'メヌエット。トリオと対になる三部形式を作ります。' },
    ],
  },

  'dengue': {
    lead: 'Dengue は、キューバに由来する舞曲を指す語として音楽用語集に載ることがあります。ただし確実な情報は限られます。',
    sections: [
      {
        heading: '確認できる範囲',
        body: 'キューバの舞曲を指す語とされていますが、この語について確実に言えることは少なく、成立の経緯や具体的なリズム型、演奏習慣についての信頼できる情報は乏しいのが実情です。楽譜でこの語に出会った場合は、その楽譜の出典や作曲者の他の指示から性格を判断するほうが確実です。ここで推測を並べることは避けます。',
      },
    ],
    confusions: [
      { term: 'Habanera', slug: 'habanera', note: 'キューバ起源の舞曲で、クラシック音楽への流入例が多く記録されています。' },
    ],
  },

  'gigelira': {
    lead: 'Gigelira は、木琴（シロフォン）にあたるイタリア語として音楽用語集に載る語です。',
    sections: [
      {
        heading: '確認できる範囲',
        body: '木片を並べて叩く鍵盤打楽器、すなわち木琴を指すイタリア語とされます。ただし、この綴りの語がどの時代のどの地域の楽譜で用いられたかについては、確実な情報が限られます。現代のイタリア語では xilofono が一般的です。楽譜でこの語に出会った場合は、木琴系の楽器を指していると理解しておけば、演奏上の判断は足ります。',
      },
    ],
    confusions: [
      { term: 'Cimbali', slug: 'cimbali', note: 'シンバル。同じ打楽器ですが、音高を持ちません。' },
      { term: 'Celesta', slug: 'celeste', note: 'チェレスタ。鍵盤で金属板を叩く楽器で、木琴とは素材が異なります。' },
    ],
  },

  'ebony': {
    lead: 'Ebony（黒檀）は、木管楽器の管体や弦楽器の指板に用いられる硬く緻密な木材。楽器の音色と耐久性に関わります。',
    sections: [
      {
        heading: 'なぜ楽器に使われるのか',
        body: '黒檀は密度が高く硬いため、摩耗に強く、加工後の寸法が安定しています。この性質から、弦楽器の指板やペグ、木管楽器の管体に用いられてきました。指板は弦が繰り返し当たる場所なので、硬さが直接寿命に関わります。',
      },
      {
        heading: '音色との関係',
        body: '管体の材質は、木管楽器の音色に影響します。黒檀やグラナディラのような緻密な木材は、内壁が滑らかで振動を効率よく伝えるとされ、クラリネットやオーボエの標準的な材料になっています。ただし音色を決める要素は材質だけでなく、内径の設計、リード、奏者の吹き方が複合的に働きます。',
      },
    ],
    confusions: [
      { term: 'Clarinetto', slug: 'clarinetto', note: 'クラリネット。管体に黒檀系の木材が用いられる代表的な楽器です。' },
      { term: 'Violino', slug: 'violino', note: 'ヴァイオリン。指板に黒檀が使われます。' },
    ],
  },

  'bourree': {
    lead: 'Bourrée（ブーレ）は、17世紀フランスに起源を持つ活発な2拍子の舞曲。バロック組曲の中で、任意で挿入される舞曲の一つです。',
    sections: [
      {
        heading: '4分音符1つ分の弱起',
        body: 'ブーレの最大の特徴は、小節線の前から始まる弱起です。多くの場合、4分音符1つ分だけ先に出ます。この出だしが舞曲の性格を決めており、1拍目から始めてしまうと、まったく別の舞曲に聞こえます。楽譜を読むとき、最初の音がどの拍にあたるかを確認することが、この舞曲を扱う出発点です。',
      },
      {
        heading: '軽快さは音の終わりで作る',
        body: '速い2拍子ですが、勢いだけで押すと粗くなります。ブーレの軽快さは、音を短めに切り上げ、次へ跳ねていく処理から生まれます。とくに弱起の音を長く保ちすぎると、足取りが重くなります。8分音符が続く箇所では、拍の裏を軽く扱うと自然に前へ進みます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '左手を短めに切ります。踏みっぱなしのペダルは、この舞曲の軽さを最も損ないます。' },
      { name: '弦楽器', tip: '弓を短く、中弓付近で。弱起の音は次の小節へ渡す弓使いにします。' },
      { name: '管楽器', tip: 'タンギングを軽く。弱起で息を使いすぎると、1拍目で支えが足りなくなります。' },
    ],
    confusions: [
      { term: 'Gavotte', slug: 'gavotte', note: '同じく2拍子系の舞曲ですが、2拍分の弱起から始まる点が異なります。' },
      { term: 'Galliard', slug: 'galliard', note: '活発な3拍子の舞曲。拍子が異なります。' },
      { term: 'Minuet', slug: 'minuet', note: 'メヌエット。3拍子で、より優雅な性格を持ちます。' },
    ],
    works: [
      { title: 'バッハ「無伴奏チェロ組曲第3番」ブーレ', note: '2つのブーレが対になった構成で、性格の対比が明快です。' },
      { title: 'バッハ「管弦楽組曲第2番」ブーレ', note: '軽快な弱起が、この舞曲の性格をよく示します。' },
    ],
  },

  'galliard': {
    lead: 'Galliard（ガリアルド）は、16世紀の宮廷で踊られた活発な3拍子の舞曲。ゆったりしたパヴァーヌと組で演奏されるのが慣習でした。',
    sections: [
      {
        heading: 'パヴァーヌとの対',
        body: '当時の舞踏会では、荘重なパヴァーヌのあとに、活発なガリアルドが続けて演奏されました。この遅い舞曲と速い舞曲のペアが、のちの組曲という形式の原型の一つになります。両者が同じ旋律素材を共有することもあり、対比と統一が同時に成立する構成でした。',
      },
      {
        heading: '跳躍する舞曲',
        body: 'ガリアルドは実際に跳躍を含む踊りで、5歩のステップを持つことから cinque pas（5歩）とも呼ばれました。この身体性を知っていると、演奏で必要な弾みが分かります。均等に3拍を刻むのではなく、跳ねて着地する周期を感じることが、舞曲としての説得力につながります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '3拍子を2小節でひとまとまりと感じると、跳躍の周期が生まれます。' },
      { name: 'リュート・ギター', tip: '当時の主要な演奏楽器です。撥弦の減衰を利用したリズムの作り方が参考になります。' },
    ],
    confusions: [
      { term: 'Pavane', slug: 'pavane', note: 'パヴァーヌ。ゆったりした2拍子の舞曲で、ガリアルドと組で演奏されました。' },
      { term: 'Minuet', slug: 'minuet', note: 'メヌエット。同じ3拍子ですが、時代が下り、より優雅です。' },
      { term: 'Estampie', slug: 'estampie', note: '中世の舞曲。器楽舞曲の最も古い形式の一つです。' },
    ],
    works: [
      { title: 'ダウランド リュート作品', note: 'パヴァーヌとガリアルドの対が、当時の慣習をそのまま伝えます。' },
    ],
  },

  'fandango': {
    lead: 'Fandango（ファンダンゴ）は、スペインに起源を持つ情熱的な3拍子の舞曲。ギターとカスタネットを伴い、男女が向き合って踊ります。',
    sections: [
      {
        heading: 'リズムの特徴',
        body: '3拍子ですが、ギターの伴奏がしばしば拍の裏を強調し、独特の推進力を生みます。また、踊り手の動きに合わせて音楽が一時停止し、また再開するという構造を持つことがあります。この停止と再開が、ファンダンゴの緊張感の源です。演奏では、この間の取り方が性格を決めます。',
      },
      {
        heading: 'クラシック音楽への流入',
        body: '18世紀以降、スペイン以外の作曲家もこの舞曲を取り入れました。スカルラッティやボッケリーニの作品に現れるほか、モーツァルト「フィガロの結婚」の第3幕にもファンダンゴが登場します。異国的な色彩を求める文脈で用いられることが多く、様式としてのスペインを表す記号になっています。',
      },
    ],
    instruments: [
      { name: 'ギター', tip: 'ラスゲアードによる和音の連打が、この舞曲の推進力を作ります。' },
      { name: 'ピアノ', tip: '左手の伴奏を打楽器的に扱います。均等に刻むとスペイン的な性格が失われます。' },
      { name: '打楽器', tip: 'カスタネットのリズムが踊りの周期を示します。' },
    ],
    confusions: [
      { term: 'Cachucha', slug: 'cachucha', note: '同じくスペインの3拍子の舞曲。より軽快な性格を持ちます。' },
      { term: 'Bolero', slug: 'bolero', note: 'スペインの3拍子の舞曲。ファンダンゴから派生したとされます。' },
      { term: 'Chitarra', slug: 'chitarra', note: 'ギター。ファンダンゴに不可欠な楽器です。' },
    ],
    works: [
      { title: 'モーツァルト「フィガロの結婚」第3幕', note: 'ファンダンゴが劇中の舞踏場面で用いられます。' },
      { title: 'ボッケリーニ ギター五重奏曲第4番', note: '終楽章がファンダンゴで、ギターとカスタネットが加わります。' },
    ],
  },

  'estampie': {
    lead: 'Estampie（エスタンピー）は、13世紀から14世紀にかけての中世ヨーロッパの舞曲。楽譜が現存する器楽舞曲としては最も古い部類に入ります。',
    sections: [
      {
        heading: '記録に残る最古の器楽舞曲',
        body: '中世の音楽の大半は声楽であり、器楽だけの作品はほとんど記録に残っていません。エスタンピーは、その数少ない例外です。単旋律で書かれ、和声や伴奏は記されていないため、実際にどう演奏されていたかは推測に頼る部分が大きくなります。この不確かさ自体が、中世音楽の演奏における課題です。',
      },
      {
        heading: '反復と終止の構造',
        body: 'エスタンピーは、いくつかの部分（プンクトゥス）が連なり、各部分が2回繰り返される構造を持ちます。1回目は開いた終止（未完結）、2回目は閉じた終止（完結）で終わるのが典型で、この対が形式の骨格になっています。この構造は、のちの多くの舞曲形式に引き継がれました。',
      },
    ],
    instruments: [
      { name: '古楽器', tip: '単旋律のため、どの楽器で演奏するか、伴奏を付けるかが演奏者の判断になります。' },
      { name: '共通', tip: '開いた終止と閉じた終止の違いを、音の切り方で示すと構造が伝わります。' },
    ],
    confusions: [
      { term: 'Galliard', slug: 'galliard', note: 'ルネサンス期の舞曲。エスタンピーより時代が下ります。' },
      { term: 'Pavane', slug: 'pavane', note: '16世紀の宮廷舞曲。器楽舞曲の発展した形です。' },
      { term: 'Cadence', slug: 'cadence', note: '終止形。開いた終止と閉じた終止の対が、この形式の要です。' },
    ],
    works: [
      { title: '写本「ロベルツブリッジ写本」', note: '現存する最古の鍵盤楽譜の一つで、エスタンピーが含まれます。' },
    ],
  },

  'accompagnamento': {
    lead: 'Accompagnamento（伴奏）は、主旋律を支えるパート。目立たない役割に見えますが、旋律がどう聞こえるかは伴奏の扱いで決まります。',
    sections: [
      {
        heading: '伴奏が旋律を作る',
        body: '同じ旋律でも、伴奏の和音の置き方、リズムの刻み方、音量によって、まったく違う音楽になります。伴奏は旋律の背景ではなく、旋律が立つ土台です。演奏では、まず伴奏だけを弾いてみて、それ自体が音楽として成立しているかを確認すると、扱いが変わります。',
      },
      {
        heading: '3つの要素を分けて考える',
        body: '伴奏には、和声を示す、リズムを刻む、低音の線を作るという3つの役割が同居しています。どれが主目的かは場面によって変わります。和声が主なら和音の変化を丁寧に、リズムが主なら刻みの均一さを、低音の線が主ならバスの旋律性を優先します。この判断ができると、機械的な伴奏から抜け出せます。',
      },
      {
        heading: '音量は旋律から逆算する',
        body: '伴奏の音量は絶対値ではなく、旋律との差で決まります。旋律が p なら伴奏はさらに下、旋律が f なら伴奏も上げられます。合わせる相手が決まってから音量を決めるのが順序で、一人で練習した音量をそのまま持ち込むと、ほぼ必ず大きすぎます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '旋律を弾く手と伴奏の手で、明確に音量差をつけます。同じ手で両方を担当する場合は重心を移します。' },
      { name: '弦楽器', tip: '伴奏形では弓を短く、圧を軽く。旋律のときと同じ弓使いだと出すぎます。' },
      { name: '通奏低音', tip: '数字付き低音では和音の配置が奏者に委ねられます。旋律の音域を避けて配置します。' },
    ],
    confusions: [
      { term: 'Cantabile', slug: 'cantabile', note: '「歌うように」。伴奏が引くことで初めて成立します。' },
      { term: 'Figured bass', slug: 'figured-bass', note: '数字付き低音。バロックにおける伴奏の記譜法です。' },
      { term: 'Ostinato', slug: 'ostinato', note: '執拗な反復。伴奏形として用いられることが多い技法です。' },
    ],
    works: [
      { title: 'シューベルト「魔王」', note: 'ピアノの三連符が、伴奏でありながら曲の性格そのものを作ります。' },
      { title: 'ショパン ノクターン第2番', note: '左手の分散和音が、右手の歌を支える構造の典型です。' },
    ],
  },

  'canto': {
    lead: 'Canto はイタリア語で「歌」。楽曲の中で歌われるべき主旋律を指し、器楽曲でも「ここを歌わせよ」という指示として用いられます。',
    sections: [
      {
        heading: '主旋律を指す語',
        body: '複数の声部がある音楽で、どれが主旋律かを示すために canto という語が使われます。col canto（歌に合わせて）という指示は、伴奏者が旋律のテンポに従うことを意味します。また marcato il canto（旋律を際立たせて）のように、旋律を明確にせよという指示にもなります。',
      },
      {
        heading: '器楽における「歌」',
        body: '器楽曲で canto が指定されている場合、そのパートを声のように扱うことが求められます。ブレスの位置を決める、フレーズに頂点を作る、音と音のつながりを保つ——歌手が自然に行うことを、器楽奏者は意識的に設計する必要があります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '旋律の指だけ深く打鍵します。内声と同じ扱いだと canto になりません。' },
      { name: '合奏', tip: '旋律を持つパート以外が引くことで、canto が浮かび上がります。' },
    ],
    confusions: [
      { term: 'Cantabile', slug: 'cantabile', note: '「歌うように」。canto が対象を指すのに対し、こちらは歌い方の指示です。' },
      { term: 'Col canto', slug: 'col-canto', note: '「歌に合わせて」。伴奏者が旋律のテンポに従う指示です。' },
      { term: 'Cantus firmus', slug: 'cantus-firmus', note: '定旋律。対位法の土台として置かれる旋律です。' },
    ],
    works: [
      { title: 'ベッリーニ「清教徒」', note: 'ベルカントの旋律線が、器楽の歌わせ方の手本とされてきました。' },
    ],
  },

  'esercizio': {
    lead: 'Esercizio（エセルチツィオ）は「練習、訓練」。特定の技術を集中的に鍛えるために書かれた短い曲を指します。',
    sections: [
      {
        heading: '練習曲と演奏会用練習曲',
        body: '本来は技術習得のための教材で、音楽的な魅力より訓練の効率が優先されます。しかし19世紀になると、ショパンやリストが技術的課題と音楽的価値を両立させた作品を書き、練習曲が演奏会の演目になりました。同じ「練習曲」でも、ツェルニーとショパンでは目的がまったく異なります。',
      },
      {
        heading: '課題を特定してから弾く',
        body: '練習曲は、一曲につき一つの技術的課題を扱うのが原則です。まずその課題が何かを特定してください。跳躍なのか、指のくぐりなのか、両手の独立なのか。課題が分かれば、どこを重点的にさらうべきかが決まります。ただ通して弾くだけでは、練習曲を弾く意味が半減します。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: 'テンポを上げる前に、その課題が完全に解決しているか確認します。速度は最後です。' },
      { name: '共通', tip: '練習曲で身につけた技術を、実際の曲のどこで使うかを結びつけると定着します。' },
    ],
    confusions: [
      { term: 'Etude', slug: 'etude', note: '練習曲。フランス語で、esercizio と同じ内容を指します。' },
      { term: 'Toccata', slug: 'toccata', note: '「触れる」が原義。技巧的な楽曲という点で近い性格を持ちます。' },
      { term: 'Con bravura', slug: 'con-bravura', note: '「妙技をもって」。練習曲が演奏会の演目になった時代の性格を表す指示です。' },
    ],
    works: [
      { title: 'ショパン 練習曲集 作品10・25', note: '技術的課題と音楽的価値を両立させた、この分野の転換点です。' },
      { title: 'スカルラッティ ソナタ集', note: '初版の題名が Essercizi（練習曲集）でした。' },
    ],
  },

  'euphonium': {
    lead: 'Euphonium（ユーフォニアム）は、バリトン音域を担当する金管楽器。ギリシャ語 euphonos（良い響きの）に由来し、名前どおり柔らかく豊かな音色を持ちます。',
    sections: [
      {
        heading: '吹奏楽の中核',
        body: 'オーケストラでの出番は限られますが、吹奏楽では中低音の旋律を担う中心的な楽器です。金管の中では最も柔らかい音色を持ち、木管とも溶け合います。この性質から、対旋律や内声を担当することが多く、合奏の厚みを作る役割を果たします。',
      },
      {
        heading: '広い音域と敏捷性',
        body: '低音楽器でありながら、同じ音域の他の金管より速い動きに対応できます。管が円錐形で、マウスピースも大きめのため、低音域でも音の立ち上がりが比較的速いのが理由です。この特性を活かし、装飾的なパッセージや技巧的な独奏が書かれることもあります。',
      },
    ],
    instruments: [
      { name: 'ユーフォニアム', tip: '音色が溶けやすいぶん、旋律では意識的に前へ出す必要があります。' },
      { name: '吹奏楽', tip: 'トロンボーンやホルンと重なる音域です。音色の役割分担を決めておきます。' },
    ],
    confusions: [
      { term: 'Corno', slug: 'corno', note: 'ホルン。柔らかい音色という点で近い性格を持ちます。' },
      { term: 'Tromba', slug: 'tromba', note: 'トランペット。明るく直接的な音色で、対照的です。' },
      { term: 'Fagotto', slug: 'fagotto', note: 'ファゴット。同じ音域帯の木管楽器です。' },
    ],
    works: [
      { title: 'ホルスト「惑星」より「火星」', note: 'テナー・チューバとして書かれ、重厚な旋律を担います。' },
    ],
  },

  'celeste': {
    lead: 'Celesta（チェレスタ）は、鍵盤で金属板を叩いて音を出す楽器。céleste（天上の）というフランス語の名のとおり、澄んだ神秘的な響きを持ちます。',
    sections: [
      {
        heading: '仕組みと音色',
        body: 'ピアノのような鍵盤とハンマー機構を持ちますが、叩くのは弦ではなく金属板です。各板には共鳴箱が付いており、これが柔らかく甘い響きを作ります。グロッケンシュピールが金属的で鋭いのに対し、チェレスタはずっと丸く、控えめです。音量が小さいため、大編成の中では埋もれやすい楽器でもあります。',
      },
      {
        heading: '記譜と実音',
        body: 'チェレスタは記譜より1オクターブ高く鳴ります。大譜表で書かれ、ピアノ奏者が持ち替えで演奏することが多い楽器です。ピアノと同じ感覚で弾けますが、鍵盤は軽く、強弱の幅も狭いため、繊細な扱いが求められます。',
      },
    ],
    instruments: [
      { name: 'チェレスタ', tip: '音量が出ないため、周囲が引かないと聞こえません。編成のバランス設計が前提になります。' },
      { name: 'ピアノ奏者', tip: '持ち替えの場合、タッチの違いに慣れる時間が必要です。本番の楽器で必ず試します。' },
    ],
    confusions: [
      { term: 'Campana', slug: 'campana', note: '鐘。金属を鳴らす点は共通ですが、音量も音色も大きく異なります。' },
      { term: 'Cimbali', slug: 'cimbali', note: 'シンバル。金属打楽器ですが音高を持ちません。' },
      { term: 'Harmonics', slug: 'harmonics', note: 'ハーモニクス。透明な音色という点で、チェレスタと似た効果を持ちます。' },
    ],
    works: [
      { title: 'チャイコフスキー「くるみ割り人形」より「金平糖の精の踊り」', note: 'チェレスタを一躍有名にした、この楽器の代名詞となる作品です。' },
      { title: 'バルトーク「弦楽器、打楽器とチェレスタのための音楽」', note: '曲名に楽器名が入るほど、構造上の中心を担います。' },
    ],
  },

  'chitarra': {
    lead: 'Chitarra はイタリア語でギター。指または爪で弦をはじく撥弦楽器で、和音と旋律を一人で同時に演奏できる点が特徴です。',
    sections: [
      {
        heading: '6本の弦と記譜',
        body: '標準的な調弦は低いほうから E・A・D・G・B・E です。楽譜はト音記号で書かれますが、実際には記譜より1オクターブ低く鳴る移調楽器です。他の楽器と合わせるとき、この点を忘れると和声の判断を誤ります。またタブ譜という、弦とフレットの位置を直接示す記譜法も広く使われます。',
      },
      {
        heading: '減衰する楽器としての設計',
        body: 'はじいた音は鳴らした瞬間から減衰していきます。したがって、長い音符が書かれていても実際には響きが消えるため、フレーズのつながりは音の間隔と音量の配分で作る必要があります。ギター曲に装飾音や分散和音が多いのは、この減衰を補って音を持続しているように聞かせるためでもあります。',
      },
      {
        heading: '音色の選択肢',
        body: 'どこをはじくかで音色が大きく変わります。ブリッジ寄りは硬く鋭く、サウンドホール寄りや指板寄りは丸く柔らかくなります。また爪ではじくか指の腹ではじくかでも変わります。楽譜に指定がないことが多いため、この選択が演奏解釈の中心的な部分になります。',
      },
    ],
    instruments: [
      { name: 'ギター', tip: '右手の位置を曲想に応じて変えます。同じ位置で通すと単調になります。' },
      { name: '合奏', tip: '音量が小さいため、他の楽器が引く必要があります。編成の設計段階で考慮します。' },
    ],
    confusions: [
      { term: 'Capotasto', slug: 'capotasto', note: 'カポタスト。全弦を同時に押さえ、移調を可能にする器具です。' },
      { term: 'Pizzicato', slug: 'pizzicato', note: '弦をはじく奏法。ギターは常にこの方法で発音します。' },
      { term: 'Arpeggio', slug: 'arpeggio', note: '分散和音。ギターの語源となったハープの奏法に由来します。' },
    ],
    works: [
      { title: 'ロドリーゴ「アランフエス協奏曲」', note: 'ギター協奏曲の代表作で、音量のバランス設計が課題になります。' },
      { title: 'タレガ「アルハンブラの想い出」', note: 'トレモロ奏法で、減衰する楽器に持続音を作り出しています。' },
    ],
  },

  'campana': {
    lead: 'Campana はイタリア語で鐘。教会の鐘に由来し、管弦楽ではチューブラーベル（管状の金属を吊るした楽器）で代用されます。',
    sections: [
      {
        heading: '象徴としての鐘',
        body: '鐘は単なる音色ではなく、意味を持つ音です。時を告げ、祝祭を知らせ、葬送を伝える。管弦楽で鐘が鳴るとき、それは多くの場合これらの場面を指し示しています。演奏では、その鐘が何を告げているのかを理解すると、打ち方と音量の判断ができます。',
      },
      {
        heading: '実際の鐘と代用楽器',
        body: '本物の教会の鐘は巨大で持ち運べないため、管弦楽ではチューブラーベルが使われます。音色は本物とは異なり、より澄んで倍音が少なくなります。作曲家によっては本物の鐘を指定することもあり、その場合は演奏機会が限られます。楽譜の指定を確認し、代用する場合はその旨を了解しておく必要があります。',
      },
    ],
    instruments: [
      { name: '打楽器', tip: '余韻が長いため、次の和声と濁らないようダンパーで止める判断が必要です。' },
      { name: '合奏', tip: '鐘は非常によく通ります。他が引かないと和声を覆い隠してしまいます。' },
    ],
    confusions: [
      { term: 'Campanella', slug: 'campanella', note: '小さな鐘。高音域での澄んだ打撃音を指します。' },
      { term: 'Celeste', slug: 'celeste', note: 'チェレスタ。金属を鳴らしますが、はるかに柔らかく小さな音です。' },
      { term: 'Cimbali', slug: 'cimbali', note: 'シンバル。音高を持たない金属打楽器です。' },
    ],
    works: [
      { title: 'ベルリオーズ「幻想交響曲」第5楽章', note: '弔いの鐘が、この楽章の場面を決定づけます。' },
      { title: 'チャイコフスキー「1812年」', note: '祝祭の鐘が終結を飾ります。' },
    ],
  },

  'cimbali': {
    lead: 'Cimbali（シンバル）は、2枚の金属円盤を打ち合わせて鳴らす打楽器。音高を持たず、輝きと衝撃を同時に与える役割を担います。',
    sections: [
      {
        heading: '合わせ方で音が変わる',
        body: '2枚を平行に打ちつけると空気が逃げず、音が詰まります。わずかにずらして擦り上げるように合わせるのが基本で、これによって豊かな響きが得られます。また、合わせる速度と角度で音量も音色も変わります。単純な楽器に見えて、実際には細かい制御が必要です。',
      },
      {
        heading: '止め方も演奏のうち',
        body: 'シンバルは余韻が非常に長いため、いつ止めるかが音楽的な判断になります。楽譜に休符があれば胸などに当てて止め（ダンプ）、余韻を残す場合はそのまま保持します。この処理を怠ると、次の静かな部分に響きが残ってしまいます。とくに終止では、全体が切れるタイミングと合わせる必要があります。',
      },
      {
        heading: '吊るしシンバルとの違い',
        body: '2枚を打ち合わせる合わせシンバルに対し、1枚を吊るしてマレットで叩く吊るしシンバルがあります。後者はロールによる持続音が作れ、緊張の高まりを表現するのに用いられます。楽譜では a2（合わせ）と sospeso（吊るし）で区別されます。',
      },
    ],
    instruments: [
      { name: '打楽器', tip: '一撃で場面が決まるため、音量と音色を事前に決めて臨みます。やり直しがききません。' },
      { name: '合奏', tip: 'シンバルの一撃は構造上の頂点であることが多く、その前後の設計が重要になります。' },
    ],
    confusions: [
      { term: 'Timpani', slug: 'timpan', note: 'ティンパニ。音高を持つ打楽器で、和声を補強します。' },
      { term: 'Campana', slug: 'campana', note: '鐘。音高を持ち、象徴的な意味を担います。' },
      { term: 'Tremolo', slug: 'tremolo', note: 'トレモロ。吊るしシンバルのロールがこれにあたります。' },
    ],
    works: [
      { title: 'ハイドン 交響曲第100番「軍隊」', note: 'トルコ風の打楽器としてシンバルが用いられます。' },
      { title: 'ムソルグスキー／ラヴェル「展覧会の絵」より「キエフの大門」', note: '一撃が構造の頂点を示します。' },
    ],
  },

  'capotasto': {
    lead: 'Capotasto（カポタスト）は、ギターなどの撥弦楽器で全弦を同時に押さえる器具。取り付ける位置によって、調をまとめて上げられます。',
    sections: [
      {
        heading: '移調のための道具',
        body: 'カポを第2フレットに付ければ全弦が長2度上がり、第5フレットなら完全4度上がります。押さえる形（コードフォーム）を変えずに調だけを移せるため、歌の音域に合わせる用途で広く使われます。楽譜には「Capo 3」のように装着位置が指定されます。',
      },
      {
        heading: '音色も変わる',
        body: 'カポを付けると弦の振動する長さが短くなるため、音色が明るく張りのあるものに変わります。したがって、移調だけが目的でなく、音色を求めて使われることもあります。同じ曲を開放弦で弾く場合とカポを付けて弾く場合では、響きが別物になります。',
      },
      {
        heading: '開放弦が使えるという利点',
        body: 'カポの本当の利点は、移調しても開放弦が使えることです。たとえば E♭ 調の曲は開放弦がほとんど使えず、押さえる形も難しくなりますが、カポを第1フレットに付けて D 調の形で弾けば、開放弦の共鳴を利用できます。演奏の難易度と響きの両方が改善します。',
      },
    ],
    instruments: [
      { name: 'ギター', tip: '装着後は必ずチューニングを確認します。カポの圧で音程がずれることがあります。' },
      { name: '合奏', tip: '実音がどこかを他パートと共有します。カポを付けた奏者の記譜と実音は異なります。' },
    ],
    confusions: [
      { term: 'Chitarra', slug: 'chitarra', note: 'ギター。カポタストが用いられる代表的な楽器です。' },
      { term: 'Transposition', slug: 'transposition', note: '移調。カポタストはこれを物理的に実現する器具です。' },
      { term: 'Open string', slug: 'chitarra', note: '開放弦。カポを使う最大の利点は、これが利用できることにあります。' },
    ],
    works: [
      { title: 'ポピュラー音楽全般', note: '歌手の音域に合わせる目的で、日常的に用いられます。' },
    ],
  },

  'strumenti': {
    lead: 'Strumenti はイタリア語で「楽器（複数形）」。単数形は strumento で、語源のラテン語 instrumentum は「道具」を意味します。',
    sections: [
      {
        heading: '「音楽の道具」という原義',
        body: '楽器を意味する語が「道具」に由来するのは、多くの言語に共通しています。英語の instrument、ドイツ語の Instrument も同じ語源です。この原義は、楽器が目的ではなく手段であるという当たり前の事実を思い出させます。技術の習得が目的化しやすい演奏の世界では、この視点が役に立つことがあります。',
      },
      {
        heading: 'スコアでの用法',
        body: 'イタリア語のスコアでは、楽器名の一覧や、特定の楽器群を指す言葉として現れます。tutti gli strumenti（すべての楽器で）、strumenti a fiato（管楽器）、strumenti ad arco（弦楽器）のように、修飾語と組み合わせて楽器の分類を示します。古い楽譜を読むときに知っておくと役立つ語です。',
      },
    ],
    instruments: [
      { name: '共通', tip: 'イタリア語のスコアでは楽器名もイタリア語表記です。主要な楽器名を覚えておくと読譜が速くなります。' },
    ],
    confusions: [
      { term: 'Violino', slug: 'violino', note: 'ヴァイオリン。イタリア語の楽器名の一つです。' },
      { term: 'Flauto', slug: 'flauto', note: 'フルート。同じくイタリア語の楽器名です。' },
      { term: 'Tutti', slug: 'tutti', note: '「全員」。tutti gli strumenti の形で用いられます。' },
    ],
    works: [
      { title: 'バロック期のイタリア語スコア全般', note: '楽器の指定がイタリア語で書かれ、この語彙が必要になります。' },
    ],
  },

  'symphony': {
    lead: 'Symphony（交響曲）は、オーケストラのための多楽章の大規模作品。ギリシャ語 syn（共に）＋ phone（響き）に由来し、「共に響く」が原義です。',
    sections: [
      {
        heading: '4楽章という標準形',
        body: '古典派で確立した標準は4楽章構成です。第1楽章はソナタ形式の速い楽章、第2楽章は緩徐楽章、第3楽章はメヌエット（のちにスケルツォ）、第4楽章は速いフィナーレ。この配置は、速い—遅い—舞曲—速いという対比によって、長い時間を聴き手が飽きずに辿れるよう設計されています。ハイドンが100曲以上を書く中でこの形を洗練させました。',
      },
      {
        heading: 'ベートーヴェン以降の拡張',
        body: 'ベートーヴェンは第3番「英雄」で規模を大幅に拡大し、第5番では楽章間を切れ目なくつなぎ、第9番では合唱を導入しました。以降、交響曲は「作曲家が全力を注ぐ形式」という位置づけになります。マーラーは1時間を超える作品を書き、楽章数も自由になりました。標準形は出発点であって、規則ではありません。',
      },
      {
        heading: '聴くとき・演奏するときの手がかり',
        body: '長大な作品を把握する近道は、第1楽章の主題を覚えることです。多くの交響曲では、その素材が全曲にわたって形を変えて現れます。演奏する側も、自分のパートだけでなく、いま鳴っている主題が第1楽章のどれに由来するかを知っていると、音量やアーティキュレーションの判断が変わります。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '長時間の演奏になるため、弓の配分と体力の配分を全楽章通しで設計します。' },
      { name: '管楽器', tip: '長い休みのあとに重要な独奏が来ることがあります。休み中の準備が本番の質を決めます。' },
      { name: '打楽器', tip: '出番は少なくても、その一撃が構造上の頂点であることが多くなります。' },
    ],
    confusions: [
      { term: 'Concerto', slug: 'concerto', note: '協奏曲。独奏楽器とオーケストラの対比が中心で、交響曲とは主眼が異なります。' },
      { term: 'Overture', slug: 'overture', note: '序曲。単一楽章で、交響曲の第1楽章に近い構造を持つことがあります。' },
      { term: 'Exposition', slug: 'exposition', note: '提示部。交響曲の第1楽章は多くがソナタ形式で書かれます。' },
      { term: 'Scherzo', slug: 'scherzo', note: 'スケルツォ。第3楽章に置かれ、メヌエットに取って代わりました。' },
    ],
    works: [
      { title: 'ハイドン 交響曲第94番「驚愕」', note: '標準形が完成した時期の代表作です。' },
      { title: 'ベートーヴェン 交響曲第9番', note: '合唱を導入し、形式の枠組みを大きく広げました。' },
    ],
  },

  'concerto': {
    lead: 'Concerto（協奏曲）は、独奏楽器とオーケストラのための作品。語源には「競う」と「協力する」の両説があり、この二面性が形式の本質を表しています。',
    sections: [
      {
        heading: '対立と協調',
        body: 'concerto の語源はラテン語 concertare で、「競い合う」とも「協力する」とも解されます。実際、協奏曲は独奏者とオーケストラが対抗しながら、同時に一つの音楽を作るという構造を持ちます。独奏が主張する場面と、オーケストラに溶け込む場面が交互に現れ、この関係の変化が曲の推進力になります。',
      },
      {
        heading: '3楽章という標準',
        body: '交響曲が4楽章なのに対し、協奏曲は速—緩—速の3楽章が標準です。舞曲楽章がないぶん、独奏の技巧と歌が前面に出ます。第1楽章では、オーケストラが主題を提示してから独奏が入るという二重提示部の形が古典派で定型化しました。終楽章はロンド形式が多く、軽快な性格を持ちます。',
      },
      {
        heading: '独奏とオーケストラの音量関係',
        body: '演奏上の最大の課題は、独奏が埋もれないことです。ただしこれは独奏が大きく弾くことでは解決しません。オーケストラ側が、独奏が鳴っている間は明確に引く必要があります。とくに独奏と同じ音域を担当するパートは、音量だけでなく音色も変えて場所を空けます。',
      },
    ],
    instruments: [
      { name: '独奏者', tip: 'tutti の間も音楽は続いています。次の入りのテンポと性格を、聴きながら準備します。' },
      { name: 'オーケストラ', tip: '独奏が入った瞬間に音量を落とします。落とすタイミングを事前に決めておきます。' },
    ],
    confusions: [
      { term: 'Symphony', slug: 'symphony', note: '交響曲。独奏を持たず、全体で一つの構造を作ります。' },
      { term: 'Cadenza', slug: 'cadenza', note: 'カデンツァ。協奏曲の中で独奏者が単独で演奏する部分です。' },
      { term: 'Tutti', slug: 'tutti', note: '「全員」。協奏曲では独奏に対するオーケストラ全体を指します。' },
      { term: 'Solo', slug: 'solo', note: '独奏。tutti と交替することで協奏曲の構造が成立します。' },
    ],
    works: [
      { title: 'ヴィヴァルディ「四季」', note: '独奏と tutti の交替が明快で、この形式の原理がよく分かります。' },
      { title: 'ベートーヴェン ピアノ協奏曲第5番「皇帝」', note: '冒頭から独奏が入り、定型を破った例として知られます。' },
    ],
  },

  'string-quartet': {
    lead: 'String quartet（弦楽四重奏曲）は、ヴァイオリン2、ヴィオラ、チェロによる作品。室内楽の中心的な編成で、作曲家の書法が最も裸で現れる形式とされます。',
    sections: [
      {
        heading: 'なぜこの4本なのか',
        body: '高音から低音まで、同族の楽器で隙間なく音域を埋められることがこの編成の強みです。音色が均質なため、4つの声部が対等に扱え、和声も対位法も自在に書けます。ハイドンがこの編成を確立し、以降、作曲家がその力量を問われる場として扱われるようになりました。',
      },
      {
        heading: '4人が対等であること',
        body: '第1ヴァイオリンが旋律、他が伴奏という構造の曲もありますが、優れた四重奏曲では4つの声部がそれぞれ独立した役割を持ちます。演奏では、いま誰が主導しているかが常に移り変わるため、その受け渡しを聴き合うことが最大の課題になります。指揮者がいないため、テンポも呼吸も4人で作ります。',
      },
      {
        heading: '内声の重要性',
        body: '第2ヴァイオリンとヴィオラは目立たない役割に見えますが、実際には響きの厚みとリズムの推進を担っています。この2声が弱いと、外声だけが浮いて薄い響きになります。逆に内声がしっかりしていると、四重奏がオーケストラのように鳴ります。',
      },
    ],
    instruments: [
      { name: '第1ヴァイオリン', tip: '主導する場面が多いぶん、引くべき場面での判断がより重要になります。' },
      { name: '第2ヴァイオリン・ヴィオラ', tip: '内声は和音の第3音を担当することが多く、音程がわずかでもずれると全体が濁ります。' },
      { name: 'チェロ', tip: '和声の土台とテンポの基準を同時に担います。ここが揺れると全体が揺れます。' },
    ],
    confusions: [
      { term: 'Chamber music', slug: 'chamber-music', note: '室内楽。弦楽四重奏はその中心的な編成です。' },
      { term: 'Divisi', slug: 'divisi', note: 'パートを分ける指示。四重奏では各奏者が独立しているため用いられません。' },
      { term: 'Symphony', slug: 'symphony', note: '交響曲。楽章構成は似ていますが、音色の幅がまったく異なります。' },
    ],
    works: [
      { title: 'ハイドン 弦楽四重奏曲 作品33', note: '4声が対等に扱われる書法が確立された作品群です。' },
      { title: 'ベートーヴェン 後期弦楽四重奏曲', note: '形式の枠を超えた表現で、この編成の可能性を極限まで広げました。' },
    ],
  },

  'chamber-music': {
    lead: 'Chamber music（室内楽）は、少人数の奏者がそれぞれ独立したパートを受け持つ音楽。指揮者を置かず、奏者同士の対話で成立します。',
    sections: [
      {
        heading: '「一人一パート」が条件',
        body: '室内楽の定義は人数の少なさではなく、一つのパートを一人が担当することにあります。オーケストラでは同じパートを複数人で演奏しますが、室内楽では各奏者が唯一の担い手です。したがって一人が抜けると音楽が成立せず、それぞれの責任が大きくなります。この構造が、室内楽特有の緊張感と自由さを生みます。',
      },
      {
        heading: '指揮者がいないということ',
        body: 'テンポも音量も、奏者同士で決めます。誰かが主導する場面では他が合わせ、その役割は曲の中で移り変わります。演奏中は視線、呼吸、身体の動きが合図になります。リハーサルでは音を出す前に、どこで誰が主導するかを言葉で確認しておくと効率が上がります。',
      },
      {
        heading: '聴き合うことが技術',
        body: '室内楽で最も重要な技術は、自分のパートを弾きながら他を聴くことです。自分の音に集中しすぎると合わなくなり、聴くことに集中しすぎると自分が崩れます。この配分を身につけるには、自分のパートを暗譜に近い状態まで仕上げ、意識を外へ向ける余裕を作るのが近道です。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: 'ボウイングを統一するかどうかを事前に決めます。統一しない選択も音色の設計になります。' },
      { name: 'ピアノ', tip: '音量が大きいため、蓋の開き方を含めてバランスを設計します。' },
      { name: '管楽器', tip: 'ブレスの位置を他パートのフレーズと合わせると、音楽の呼吸が揃います。' },
    ],
    confusions: [
      { term: 'String quartet', slug: 'string-quartet', note: '弦楽四重奏曲。室内楽の中心的な編成です。' },
      { term: 'Duo', slug: 'duo', note: '二重奏。最小単位の室内楽です。' },
      { term: 'Tutti', slug: 'tutti', note: '「全員」。オーケストラの概念で、室内楽では常に全員が独立しています。' },
    ],
    works: [
      { title: 'シューベルト ピアノ五重奏曲「ます」', note: '各楽器の性格が明快で、対話の構造が聴き取りやすい作品です。' },
      { title: 'ブラームス クラリネット五重奏曲', note: '管と弦の音色の融合が、室内楽の可能性を示します。' },
    ],
  },

  'aria': {
    lead: 'Aria はイタリア語で「空気、様子」から転じて「歌」を意味します。オペラやオラトリオの中で、登場人物が心情を歌い上げる独唱曲です。',
    sections: [
      {
        heading: '物語を止めて心を描く',
        body: 'オペラでは、レチタティーヴォが物語を進行させ、アリアがその場面で登場人物が何を感じているかを描きます。アリアの間、物語は基本的に停止します。同じ言葉が繰り返されるのはこのためで、時間の進行より心情の深さを表現することが目的だからです。演奏では、この「止まっている時間」をどう充実させるかが問われます。',
      },
      {
        heading: 'ダ・カーポ・アリア',
        body: 'バロックで確立した形式が、A—B—A の三部形式を取るダ・カーポ・アリアです。最後のAは Da Capo の指示で戻りますが、単なる繰り返しではなく、歌手が装飾を加えて変奏することが慣習でした。楽譜に書かれていない部分に歌手の技量が表れる、即興性を含んだ形式です。',
      },
    ],
    instruments: [
      { name: '声楽', tip: '言葉の意味とフレーズの頂点を一致させます。技巧が目的化すると心情が伝わりません。' },
      { name: '伴奏', tip: '歌の呼吸に合わせます。楽譜どおりのテンポより、歌い手のブレスが優先されます。' },
      { name: '器楽の独奏', tip: 'アリアを器楽で演奏する場合、原曲の歌詞を読んでからフレーズを設計します。' },
    ],
    confusions: [
      { term: 'Recitative', slug: 'recitative', note: 'レチタティーヴォ。物語を進行させる語りで、アリアと交替します。' },
      { term: 'Cantabile', slug: 'cantabile', note: '「歌うように」。器楽でアリア的な性格を求める指示です。' },
      { term: 'Da Capo', slug: 'da-capo', note: 'ダ・カーポ・アリアの構造を作る指示です。' },
      { term: 'Coloratura', slug: 'coloratura', note: '華麗な装飾を伴う歌唱。アリアの装飾で用いられます。' },
    ],
    works: [
      { title: 'ヘンデル「オンブラ・マイ・フ」', note: 'ダ・カーポ・アリアの代表例で、戻ったあとの装飾が見せ場です。' },
      { title: 'モーツァルト「フィガロの結婚」より「恋とはどんなものかしら」', note: '短いアリアの中に心情が凝縮されています。' },
    ],
  },

  'recitative': {
    lead: 'Recitative（レチタティーヴォ）は「語るように歌う」部分。オペラやオラトリオで物語を進める役割を担い、アリアと交互に現れます。',
    sections: [
      {
        heading: '言葉が音楽を決める',
        body: 'レチタティーヴォでは、旋律やリズムが言葉のアクセントと抑揚に従います。したがって楽譜に書かれた音価は目安であり、自然な語りになるよう調整するのが原則です。母音を伸ばして歌い上げるのではなく、話すときの速さと区切りを保ちます。演奏の準備は、まず歌詞を声に出して読むことから始めます。',
      },
      {
        heading: '2つの種類',
        body: '通奏低音のみが伴奏するものをセッコ（乾いた）、オーケストラが伴奏するものをアッコンパニャート（伴奏付き）と呼びます。セッコは語りの自由度が高く、テンポも歌手に委ねられます。アッコンパニャートは劇的な場面で用いられ、オーケストラが心情を描くため、より音楽的な扱いになります。',
      },
    ],
    instruments: [
      { name: '声楽', tip: '歌うのではなく語ります。音価を守りすぎると不自然になります。' },
      { name: '通奏低音', tip: '歌手の語りを追いかけます。和音を置くタイミングが語りの句読点になります。' },
      { name: 'オーケストラ', tip: 'アッコンパニャートでは、歌の切れ目に反応します。指揮者が歌手を見て合図します。' },
    ],
    confusions: [
      { term: 'Aria', slug: 'aria', note: 'アリア。物語を止めて心情を描く独唱曲で、レチタティーヴォと交替します。' },
      { term: 'Parlando', slug: 'parlando', note: '「語るように」。器楽でもこの性格を求める指示として使われます。' },
      { term: 'Figured bass', slug: 'figured-bass', note: '数字付き低音。セッコの伴奏はこの記譜で書かれます。' },
    ],
    works: [
      { title: 'バッハ「マタイ受難曲」', note: '福音史家のレチタティーヴォが物語を進めます。' },
      { title: 'モーツァルト「ドン・ジョヴァンニ」', note: 'セッコとアッコンパニャートが場面に応じて使い分けられます。' },
    ],
  },

  'overture': {
    lead: 'Overture（序曲）は、オペラやオラトリオの冒頭に置かれる器楽曲。フランス語 ouverture（開くこと）に由来し、幕開けを告げる役割を持ちます。',
    sections: [
      {
        heading: '2つの型',
        body: 'フランス風序曲は、付点リズムの重々しい遅い部分に始まり、速いフーガ的な部分が続きます。イタリア風序曲は速—緩—速の3部構成で、これが交響曲の原型になったとされます。バロックのこれらの型を経て、古典派以降の序曲はソナタ形式による単一楽章が主流になりました。',
      },
      {
        heading: '本編との関係',
        body: '序曲が本編の主題を予告する形は、モーツァルト以降に定着しました。ウェーバーやワーグナーではさらに進み、序曲が劇の内容を凝縮して語る役割を担います。演奏する際は、その序曲が本編とどう関係しているかを知っておくと、各主題の扱いが決まります。',
      },
      {
        heading: '演奏会用序曲',
        body: '19世紀には、劇を伴わない独立した「演奏会用序曲」というジャンルが生まれました。メンデルスゾーンの「フィンガルの洞窟」などがこれにあたり、単一楽章の管弦楽曲として、のちの交響詩につながっていきます。',
      },
    ],
    instruments: [
      { name: 'オーケストラ', tip: '冒頭で聴衆の集中を作る役割があります。最初の一音の質が全体の印象を決めます。' },
      { name: '弦楽器', tip: 'フランス風序曲の付点リズムは、書かれた以上に鋭く演奏する慣習があります。' },
    ],
    confusions: [
      { term: 'Prelude', slug: 'prelude', note: '前奏曲。より短く、規模の小さい導入曲です。' },
      { term: 'Symphony', slug: 'symphony', note: '交響曲。イタリア風序曲がその原型になったとされます。' },
      { term: 'Exposition', slug: 'exposition', note: '提示部。古典派以降の序曲はソナタ形式で書かれます。' },
    ],
    works: [
      { title: 'モーツァルト「フィガロの結婚」序曲', note: '本編の性格を凝縮した、快活な単一楽章です。' },
      { title: 'メンデルスゾーン「フィンガルの洞窟」', note: '劇を伴わない演奏会用序曲の代表例です。' },
    ],
  },

  'mass': {
    lead: 'Mass（ミサ曲）は、カトリック教会のミサ典礼のための音楽。定められた式文に作曲されるため、時代を超えて同じ言葉が繰り返し扱われてきました。',
    sections: [
      {
        heading: '通常文の5部',
        body: '音楽作品として扱われるのは、毎回の典礼で共通する通常文です。キリエ（憐れみの賛歌）、グロリア（栄光の賛歌）、クレド（信仰宣言）、サンクトゥス（感謝の賛歌）、アニュス・デイ（平和の賛歌）の5つ。この順序と言葉は固定されているため、作曲家の個性は同じテキストをどう扱うかに現れます。',
      },
      {
        heading: 'レクイエムとの違い',
        body: 'レクイエムは死者のためのミサで、通常文の一部が省かれ、代わりに続唱「怒りの日」などが加わります。グロリアとクレドが除かれるため、全体の性格が大きく変わります。同じミサでも目的によって構成が異なる点は、演奏の準備で確認すべきところです。',
      },
    ],
    instruments: [
      { name: '合唱', tip: 'ラテン語の発音と、言葉の意味を先に確認します。意味を知らずに歌うと表情が定まりません。' },
      { name: 'オーケストラ', tip: '合唱の言葉を邪魔しない音量が基本です。子音が聞こえるかを客席側で確認します。' },
      { name: 'オルガン', tip: '典礼での実演では、声を支える役割が中心になります。' },
    ],
    confusions: [
      { term: 'Anthem', slug: 'anthem', note: '賛歌。英国国教会の教会音楽で、ミサとは典礼上の位置づけが異なります。' },
      { term: 'Cantus firmus', slug: 'cantus-firmus', note: '定旋律。ルネサンスのミサ曲では、既存の旋律が全曲の土台に用いられました。' },
      { term: 'Counterpoint', slug: 'counterpoint', note: '対位法。ミサ曲は対位法の発展を担った主要なジャンルです。' },
    ],
    works: [
      { title: 'バッハ「ロ短調ミサ」', note: '典礼での実演を超えた規模で、通常文全体が作曲されています。' },
      { title: 'パレストリーナ「教皇マルチェルスのミサ」', note: 'ルネサンス期の対位法の到達点とされます。' },
    ],
  },

  'fantasie': {
    lead: 'Fantasie（幻想曲）は、定型に縛られない自由な形式の楽曲。ラテン語 phantasia（想像、幻想）に由来し、着想の自由さそのものが形式になっています。',
    sections: [
      {
        heading: '「形式がない」という形式',
        body: 'ソナタ形式やロンド形式のような定型を持たず、楽想の展開が作曲家の裁量に委ねられます。ただし無秩序ではなく、多くの場合、対比する複数の性格が並置され、それらが有機的に関連づけられています。演奏では、どこで性格が切り替わるかを見極め、その対比を明確にすることが構造を伝える手段になります。',
      },
      {
        heading: '即興の記録として',
        body: 'ルネサンスやバロックの幻想曲は、即興演奏を書き留めたものに近い性格を持っていました。したがって演奏でも、その場で思いついたかのような自由さが求められます。テンポの揺れや間の取り方に、演奏者の判断が大きく反映される形式です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '性格の切り替わりで音色を変えます。同じタッチで通すと構造が見えません。' },
      { name: '共通', tip: '自由な形式ほど、演奏者が構造を決める必要があります。区切りに印を付けてから練習します。' },
    ],
    confusions: [
      { term: 'Prelude', slug: 'prelude', note: '前奏曲。即興的な性格を持つ点で近いですが、より短く導入的です。' },
      { term: 'Impromptu', slug: 'impromptu', note: '即興曲。思いつきの自由さを表す点で幻想曲と近い性格を持ちます。' },
      { term: 'Improvisation', slug: 'improvisation', note: '即興演奏。幻想曲の原型にあたります。' },
      { term: 'A piacere', slug: 'a-piacere', note: '「自由に」。幻想曲の精神を演奏指示にした形です。' },
    ],
    works: [
      { title: 'モーツァルト 幻想曲 ニ短調 K.397', note: '性格の異なる部分が並置され、対比が構造を作ります。' },
      { title: 'シューベルト「さすらい人幻想曲」', note: '4部が切れ目なく続き、共通の動機で結ばれます。' },
    ],
  },

  'pavane': {
    lead: 'Pavane（パヴァーヌ）は、16世紀ヨーロッパの宮廷で踊られた、ゆったりした2拍子の舞曲。行列を思わせる、威厳のある歩みが特徴です。',
    sections: [
      {
        heading: '行列の舞曲',
        body: 'パヴァーヌは、宮廷の儀式で入場や行進に用いられた舞曲です。踊りというより歩行に近く、速度は遅く、拍は明確です。この由来を知っていると、演奏で必要なのが優雅さと同時に威厳であることが分かります。軽く扱うと舞曲の性格が失われます。',
      },
      {
        heading: 'ガリアルドとの組',
        body: '当時の慣習では、ゆったりしたパヴァーヌのあとに、活発な3拍子のガリアルドが続けて演奏されました。この遅い舞曲と速い舞曲の組み合わせが、のちの組曲の原型の一つになります。両者は同じ旋律素材を共有することもあり、対比と統一が同時に成立していました。',
      },
      {
        heading: '近代の復活',
        body: '19世紀末から20世紀にかけて、フォーレやラヴェルが古い舞曲名を借りた作品を書き、パヴァーヌは新しい文脈で復活しました。これらは実際の舞踏音楽ではなく、古い時代への憧憬を表す様式として用いられています。',
      },
    ],
    instruments: [
      { name: '共通', tip: '2拍子の1拍目に重心を置き、歩行の周期を作ります。均等に刻むと行列になりません。' },
      { name: 'ピアノ', tip: '和音を厚く、しかし重すぎないように。ペダルで威厳を作ろうとすると濁ります。' },
    ],
    confusions: [
      { term: 'Galliard', slug: 'galliard', note: 'ガリアルド。活発な3拍子の舞曲で、パヴァーヌと組で演奏されました。' },
      { term: 'Minuet', slug: 'minuet', note: 'メヌエット。同じ宮廷舞曲ですが、時代も拍子も異なります。' },
      { term: 'Maestoso', slug: 'maestoso', note: '「堂々と」。パヴァーヌの性格を表す指示として適合します。' },
    ],
    works: [
      { title: 'フォーレ「パヴァーヌ」', note: '古い舞曲名を借りた近代の作品で、優雅さと憂いが同居します。' },
      { title: 'ラヴェル「亡き王女のためのパヴァーヌ」', note: '過去への憧憬を様式として表現しています。' },
    ],
  },

  'anthem': {
    lead: 'Anthem（アンセム）は、英国国教会の礼拝で歌われる合唱曲。ギリシャ語 antiphona（交唱）が英語化した語で、のちに国歌の意味でも使われるようになりました。',
    sections: [
      {
        heading: '英語で歌われる教会音楽',
        body: '宗教改革後の英国では、ラテン語のモテットに代わり、英語の聖句による合唱曲が発展しました。これがアンセムです。言葉が英語であるため、歌詞が理解できることが前提となり、旋律も言葉のアクセントに沿って書かれます。フル・アンセム（合唱のみ）とヴァース・アンセム（独唱と合唱が交替）に分かれます。',
      },
      {
        heading: '国歌としての用法',
        body: '現代の英語では、national anthem（国歌）という用法のほうが一般的です。これは、儀式で全員が歌う荘厳な歌という性格が共通するためです。もともとの教会音楽としてのアンセムと区別する必要がある場合は、文脈から判断します。',
      },
    ],
    instruments: [
      { name: '合唱', tip: '英語の子音を明確に。言葉が伝わることがこのジャンルの前提です。' },
      { name: 'オルガン', tip: '声を支える役割が中心です。合唱の言葉を消さない音量を保ちます。' },
    ],
    confusions: [
      { term: 'Mass', slug: 'mass', note: 'ミサ曲。カトリックの典礼音楽で、言語も構成も異なります。' },
      { term: 'Antiphon', slug: 'antiphon', note: '交唱。anthem の語源にあたる、交互に歌う形式です。' },
      { term: 'Anglican chant', slug: 'anglican-chant', note: '英国国教会風の唱詠。アンセムと同じ礼拝で用いられる、詩篇の唱え方です。' },
    ],
    works: [
      { title: 'ヘンデル「戴冠式アンセム」', note: '英国王の戴冠式のために書かれた、壮大な合唱曲です。' },
    ],
  },

  'duo': {
    lead: 'Duo（二重奏）は、2人の奏者による作品。室内楽の最小単位であり、対話という構造が最も純粋な形で現れます。',
    sections: [
      {
        heading: '2人だからこその難しさ',
        body: '人数が少ないほど演奏は易しいと思われがちですが、実際は逆です。隠れる場所がなく、テンポや音程のずれがすべて露出します。また、常に相手との関係が問われるため、一瞬でも聴くのをやめると音楽が破綻します。3人以上なら他の奏者が補える場面でも、2人ではその余地がありません。',
      },
      {
        heading: '主従が入れ替わる',
        body: '良い二重奏曲では、旋律と伴奏の役割が絶えず入れ替わります。自分がいま主導する側なのか支える側なのかを、小節単位で把握する必要があります。楽譜に色分けして書き込んでおくと、リハーサルの効率が上がります。',
      },
    ],
    instruments: [
      { name: 'ピアノ伴奏', tip: '蓋の開き方と音量で、相手とのバランスを設計します。' },
      { name: '弦・管楽器', tip: 'ピアノは減衰するため、長い音では相手の音量変化に合わせる必要があります。' },
    ],
    confusions: [
      { term: 'Chamber music', slug: 'chamber-music', note: '室内楽。二重奏はその最小単位です。' },
      { term: 'Solo', slug: 'solo', note: '独奏。二重奏では、常に相手との関係の中で演奏します。' },
      { term: 'Coppia', slug: 'coppia', note: '「二つ、ペア」。二つの要素の対比を指す語です。' },
    ],
    works: [
      { title: 'ベートーヴェン ヴァイオリン・ソナタ第5番「春」', note: '2つの楽器が対等に扱われ、主従が絶えず入れ替わります。' },
      { title: 'ブラームス チェロ・ソナタ第1番', note: 'ピアノが伴奏にとどまらず、対等な声部として書かれています。' },
    ],
  },

  'larghetto': {
    lead: 'Larghetto は Largo に縮小辞 -etto が付いた形。「小さな Largo」、つまり Largo の幅広さを保ちつつ、やや速く動く速度です。',
    sections: [
      {
        heading: '縮小辞が示すもの',
        body: 'イタリア語の -etto は「小さな」を意味します。Larghetto は Largo より速いというより、Largo の性格を一段控えめにした状態だと考えるほうが実際に近くなります。広さは保ちながらも、重々しさは減り、上品な落ち着きが前に出ます。Largo で沈み込むほどの遅さを求められていないことが、この語からわかります。',
      },
      {
        heading: '歩みを止めない',
        body: 'Largo と同じ扱いをすると、Larghetto は間延びします。広さを保ちつつも音楽が前へ進んでいる状態を作るには、長い音符の中に方向を持たせることが必要です。次の和音、次のフレーズへ向かって何かが動いているかを常に確認してください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '長い音の減衰を計算し、次の音を減衰後の音量に合わせると線が途切れません。' },
      { name: '弦楽器', tip: '弓の配分をフレーズ単位で決めます。1小節ごとに区切ると停滞します。' },
      { name: '管楽器', tip: 'ブレスの位置を音楽の切れ目と一致させます。息の都合で切ると流れが止まります。' },
    ],
    confusions: [
      { term: 'Largo', slug: 'largo', note: '「幅広く」。Larghetto はその縮小形で、より軽く速くなります。' },
      { term: 'Adagio', slug: 'adagio', note: '「くつろいで」。遅さの理由が空間ではなく緊張の解放にあります。' },
      { term: 'Andante', slug: 'andante', note: '歩くような速さ。Larghetto より明確に前進します。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第2番 第2楽章', note: 'Larghetto。広さと歩みが同居する典型例です。' },
      { title: 'ショパン ピアノ協奏曲第1番 第2楽章', note: 'Romanze - Larghetto。歌の呼吸が速度を決めます。' },
    ],
  },

  'larghissimo': {
    lead: 'Larghissimo は Largo の最上級で、「極めて幅広く」。速度用語の中で最も遅い部類にあたり、時間の流れそのものが引き延ばされます。',
    sections: [
      {
        heading: '極端な遅さをどう保つか',
        body: 'この速度域では、拍を感じ続けること自体が課題になります。4分音符が非常に遅い場合、頭の中で8分、さらに16分へと細分して数えないと、音と音のあいだで時間の感覚が失われます。細分の単位を決め、それを最後まで維持することが、演奏の骨格を保つ唯一の方法です。',
      },
      {
        heading: '静止ではなく持続',
        body: 'Larghissimo は音楽が止まっているわけではありません。むしろ、極めて遅い中でも進行し続けていることを示すのが演奏の目的になります。長い音の中で音色をわずかに変化させる、次の和音へ向けて緊張を蓄えるといった処理で、静止と持続の違いが生まれます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '減衰が課題になります。ペダルの踏み替えと打鍵の深さで、響きを保ちます。' },
      { name: '弦楽器', tip: '弓が極端に遅くなるため、圧の管理が難しくなります。弓元と弓先で調整し続けます。' },
      { name: '管楽器', tip: 'ロングトーンが連続します。ブレスの計画がそのまま音楽の設計になります。' },
    ],
    confusions: [
      { term: 'Largo', slug: 'largo', note: '「幅広く」。Larghissimo はその最上級です。' },
      { term: 'Grave', slug: 'grave', note: '「重々しく」。同程度の遅さですが、深刻さを伴います。' },
      { term: 'Lento', slug: 'lento', note: '遅さそのもの。性格の色づけがありません。' },
    ],
    works: [
      { title: 'アルビノーニのアダージョ（ジャゾット編）', note: '極端に遅い速度で演奏されることが多く、持続の技術が問われます。' },
    ],
  },

  'adagietto': {
    lead: 'Adagietto は Adagio に縮小辞が付いた形。「小さな Adagio」で、Adagio よりわずかに速く、動きを持った速度です。',
    sections: [
      {
        heading: 'くつろぎに動きを加える',
        body: 'Adagio が緊張の解けた状態を指すのに対し、Adagietto はそこにわずかな歩みを加えます。停滞せずに歌えるだけの速度、というのが実際的な理解です。楽章名として使われる場合は、その楽章が深い情感を持ちながらも前へ進んでいることを示しています。',
      },
      {
        heading: 'テンポの幅が広い語',
        body: 'Adagietto は演奏者によってテンポの解釈が大きく分かれる語です。マーラーの交響曲第5番第4楽章では、7分台から12分台まで演奏時間に大きな差があります。速い演奏は歌としての流れを、遅い演奏は瞑想的な深さを重視しており、どちらも成立します。自分がどちらの立場を取るかを決めてから練習に入るべき楽章です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '歌の呼吸に合わせて速度を決めます。ブレスできない長さになっていないか声に出して確認します。' },
      { name: '弦楽器', tip: 'ビブラートの速さがテンポと釣り合っているか確認します。速すぎると落ち着きません。' },
      { name: 'ハープ', tip: 'マーラーの例のように、和声を支える役割を担うことがあります。テンポの基準になります。' },
    ],
    confusions: [
      { term: 'Adagio', slug: 'adagio', note: '「くつろいで」。Adagietto はその縮小形で、やや速く動きがあります。' },
      { term: 'Andante', slug: 'andante', note: '歩くような速さ。Adagietto より明確に前進します。' },
      { term: 'Larghetto', slug: 'larghetto', note: '同じく縮小辞を持つ語。こちらは Largo の広さを引き継ぎます。' },
    ],
    works: [
      { title: 'マーラー 交響曲第5番 第4楽章', note: 'Adagietto。演奏時間の幅が最も大きい楽章の一つです。' },
      { title: 'ビゼー「アルルの女」第1組曲', note: 'Adagietto。弱音器付きの弦が静けさを作ります。' },
    ],
  },

  'andantino': {
    lead: 'Andantino は Andante に縮小辞が付いた形。「小さな Andante」ですが、Andante より速いのか遅いのか、歴史的に解釈が割れてきた語です。',
    sections: [
      {
        heading: '解釈が割れる理由',
        body: '縮小辞 -ino は「小さな」を意味しますが、Andante に対して「動きが小さい」と読めば遅く、「歩みが小さく軽い」と読めば速くなります。この曖昧さは当時から問題になっており、ベートーヴェンは出版者ジョージ・トムソンへの手紙で、Andantino が Andante より速いのか遅いのか教えてほしいという趣旨のことを書き残しています。',
      },
      {
        heading: '現在の一般的な扱い',
        body: '現代では Andante よりやや速いと解釈するのが一般的です。ただし作曲家によっては逆の意味で使っている可能性もあるため、前後の楽章との関係や曲想から判断する必要があります。同じ作曲家が Andante と Andantino を両方使っている作品があれば、その比較が最も確実な手がかりになります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '同じ作曲家の他作品で Andante がどう扱われているかを調べ、相対的に決めるのが確実です。' },
      { name: 'ピアノ', tip: '軽やかさを出すには、左手の伴奏を短めに扱います。' },
    ],
    confusions: [
      { term: 'Andante', slug: 'andante', note: '歩くような速さ。Andantino との関係が、この語の議論の中心です。' },
      { term: 'Allegretto', slug: 'allegretto', note: '同じく縮小辞を持つ語。こちらは Allegro より遅いと明確です。' },
      { term: 'Moderato', slug: 'moderato', note: '中庸な速度。Andantino と近い領域に位置します。' },
    ],
    works: [
      { title: 'シューベルト ピアノ五重奏曲「ます」第4楽章', note: 'Andantino con moto。軽やかさと前進が同居します。' },
      { title: 'チャイコフスキー ピアノ協奏曲第1番 第2楽章', note: 'Andantino semplice。飾らない軽さが指定されています。' },
    ],
  },

  'vivo': {
    lead: 'Vivo は「生きて、いきいきと」。Vivace と同じ語源を持ち、ほぼ同義に扱われますが、より直接的な運動性を指すとされます。',
    sections: [
      {
        heading: 'Vivace との違い',
        body: '両者は同義として扱われることが多く、明確な速度差はありません。あえて違いを言えば、Vivace が「生き生きとした様子」という状態を指すのに対し、Vivo はより直接的に「生きている」動きそのものを指します。実際の演奏では、Vivo のほうが鋭く即物的な運動性を求められる場面で使われる傾向があります。',
      },
      {
        heading: '他の語に添えて使われる',
        body: 'Vivo は Allegro vivo、Presto vivo のように、他の速度用語に添えて使われることも多い語です。この場合は速度をさらに上げるというより、その速度に生気を加えるという意味になります。Con brio と似た働きだと考えると扱いやすくなります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵を速く、伴奏を短く。速度より発音の鋭さで生気を作ります。' },
      { name: '弦楽器', tip: '弓を短く、弦の近くで。圧を減らすと動きの切れが出ます。' },
      { name: '管楽器', tip: 'タンギングを軽く速く。息を強めると硬くなります。' },
    ],
    confusions: [
      { term: 'Vivace', slug: 'vivace', note: 'ほぼ同義。より広く使われ、鮮明さを指します。' },
      { term: 'Con brio', slug: 'con-brio', note: '「活気をもって」。他の語に添える点で Vivo と使い方が似ています。' },
      { term: 'Presto', slug: 'presto', note: 'きわめて速く。速度が主眼で、生気の含みはありません。' },
    ],
    works: [
      { title: 'ベートーヴェン 弦楽四重奏曲 作品59-3 終楽章', note: 'Allegro molto。生気に満ちた運動が全編を貫きます。' },
    ],
  },

  'stringendo': {
    lead: 'Stringendo は stringere（締めつける）から来た語で、「切迫して」。速度を上げるだけでなく、緊張が締めつけられていく感覚を伴います。',
    sections: [
      {
        heading: '加速に理由がある',
        body: 'accelerando が中立的な加速であるのに対し、stringendo には心理的な理由があります。追い立てられる、息をつく暇がなくなる、そうした状態を音で表す言葉です。したがって、テンポを上げるだけでなく、音の切れ目を詰め、フレーズの間を短くしていくと、切迫感が生まれます。',
      },
      {
        heading: '密度も同時に上げる',
        body: '切迫を作るには、速度に加えて密度を上げるのが効果的です。音量をわずかに増し、発音を鋭くし、休符を短めに扱う。これらを同時に行うと、テンポの変化が小さくても強い切迫感が出ます。逆にテンポだけを上げると、慌てているだけに聞こえます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '左手の刻みをわずかに前へ詰めると、切迫感が生まれます。' },
      { name: '弦楽器', tip: '弓を短くしながら圧を保ちます。速度と圧の両方が上がると締めつけになります。' },
      { name: '管楽器', tip: 'ブレスを限界まで我慢し、短く吸います。息の余裕のなさが切迫を作ります。' },
    ],
    confusions: [
      { term: 'Accelerando', slug: 'accelerando', note: '「だんだん速く」。中立的な加速で、心理的な含みはありません。' },
      { term: 'Più mosso', slug: 'più-mosso', note: '一段速いテンポへの切り替え。段階的な変化ではありません。' },
      { term: 'Agitato', slug: 'agitato', note: '「落ち着かなく」。心理状態の指示で、速度は指定しません。' },
      { term: 'Incalzando', slug: 'incalzando', note: '「せき立てて」。stringendo に近く、心理的な切迫がさらに強い語です。' },
    ],
    works: [
      { title: 'ショパン バラード第1番 コーダ', note: '切迫が加速と密度の両方で作られ、破局へ向かいます。' },
    ],
  },

  'tempo-primo': {
    lead: 'Tempo Primo（Tempo I）は「最初の速さで」。曲または楽章の冒頭で示されたテンポに戻す指示です。',
    sections: [
      {
        heading: 'a tempo との違い',
        body: 'a tempo が「直前に有効だった基本テンポ」へ戻すのに対し、Tempo Primo は「曲の冒頭のテンポ」へ戻します。途中で Meno mosso など別のテンポになっていた場合、a tempo はその Meno mosso へ、Tempo Primo は冒頭へ戻ります。この違いを取り違えると、曲の構造そのものが変わってしまいます。',
      },
      {
        heading: '冒頭のテンポを覚えておく',
        body: '長い曲では、途中でテンポが何度も変わり、冒頭がどのくらいだったか分からなくなります。練習の段階で冒頭のテンポをメトロノームで測り、書き込んでおくのが確実です。Tempo Primo が形式上の回帰と一致していることも多く、その場合は構造の区切りとして扱うと自然になります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '冒頭のテンポを数値で記録し、Tempo Primo の箇所にも書き込んでおきます。' },
      { name: '合奏', tip: '全員が同じ数値を共有していないとずれます。リハーサルで確認しておきます。' },
    ],
    confusions: [
      { term: 'A tempo', slug: 'a-tempo', note: '直前の基本テンポへ戻します。戻り先が違います。' },
      { term: 'Meno mosso', slug: 'meno-mosso', note: '一段遅いテンポへの切り替え。Tempo Primo で解除されます。' },
      { term: 'Tempo giusto', slug: 'tempo-giusto', note: '「正確なテンポで」。揺れを許さない指示です。' },
    ],
    works: [
      { title: 'ショパン 幻想即興曲', note: '中間部のあと Tempo Primo で冒頭の疾走へ戻ります。' },
    ],
  },

  'allargando': {
    lead: 'Allargando は allargare（広げる）から来た語で、「だんだん幅広く」。速度を落としながら、同時に音量と厚みを増していく指示です。',
    sections: [
      {
        heading: '遅くしながら大きくする',
        body: 'ritardando が速度だけを扱うのに対し、allargando は遅くなりながら音楽が広がっていくことを求めます。多くの場合、音量も増し、音色も厚くなります。終結部で用いられると、堂々と幕を閉じる効果が生まれます。calando が遅くしながら弱くするのと、ちょうど正反対の関係にあります。',
      },
      {
        heading: '重くならないように',
        body: '遅くしながら大きくすると、音楽が重く沈みやすくなります。広がりと重さは別物なので、音を伸びやかに保つことが重要です。フレーズの方向を最後まで保ち、終点へ向かって開いていく感覚を持つと、堂々としつつも停滞しません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '和音を厚く、しかし打鍵は速く。深く押し込むと重さだけが出ます。' },
      { name: '弦楽器', tip: '弓を長く大きく使います。テンポが落ちるぶん配分の再設計が必要です。' },
      { name: '管楽器', tip: '息の量を増やしつつ、支えを保ちます。遅くなるためブレスの計画も変わります。' },
    ],
    confusions: [
      { term: 'Ritardando', slug: 'ritardando', note: '速度のみを落とします。allargando は広がりを伴います。' },
      { term: 'Calando', slug: 'calando', note: '遅くしながら弱く。allargando と正反対の組み合わせです。' },
      { term: 'Maestoso', slug: 'maestoso', note: '「堂々と」。allargando の到達点として指定されることがあります。' },
    ],
    works: [
      { title: 'エルガー「威風堂々」第1番', note: '終結へ向かう広がりが、この語の性格をよく表しています。' },
    ],
  },

  'tempo-giusto': {
    lead: 'Tempo giusto は「正確なテンポで」。giusto は「正しい、適切な」を意味し、揺れのない一定の速度を求めます。',
    sections: [
      {
        heading: '2つの解釈',
        body: 'この語には2つの読み方があります。一つは「テンポを揺らさず正確に」という、rubato を禁じる意味。もう一つは「その曲にふさわしい速度で」という、常識的なテンポを求める意味です。自由なテンポの部分の直後に置かれていれば前者、曲の冒頭に単独で置かれていれば後者と読むのが自然です。',
      },
      {
        heading: '正確さは無表情ではない',
        body: 'テンポを揺らさないことと、表情がないことは別です。tempo giusto の箇所でも、音量、音色、アーティキュレーションによる表現は可能です。むしろテンポという最も分かりやすい手段を封じられるぶん、他の要素での表現力が問われます。',
      },
    ],
    instruments: [
      { name: '共通', tip: 'メトロノームと合わせて、無意識の揺れがないかを確認します。とくにフレーズの終わりで緩みがちです。' },
      { name: 'ピアノ', tip: '跳躍や難所で遅くなっていないか確認します。技術的な理由の揺れが最も多い原因です。' },
    ],
    confusions: [
      { term: 'Rubato', slug: 'rubato', note: 'テンポを自由に動かす指示。tempo giusto はこれを禁じます。' },
      { term: 'A piacere', slug: 'a-piacere', note: '「自由に」。tempo giusto と正反対の指示です。' },
      { term: 'A tempo', slug: 'a-tempo', note: '元の速さへ戻す指示。tempo giusto は揺れの禁止が主眼です。' },
    ],
    works: [
      { title: 'バルトーク「ミクロコスモス」', note: '拍の正確さが構造そのものである作品群です。' },
    ],
  },

  'a-piacere': {
    lead: 'A piacere は「好みに応じて」。テンポやリズムの扱いを演奏者の裁量に委ねる指示で、rubato よりも大きな自由を与えます。',
    sections: [
      {
        heading: '自由には設計が要る',
        body: '「自由に」と書かれていても、その場の思いつきで弾けばよいという意味ではありません。むしろ、書かれた枠がないぶん、演奏者が自分で構造を作る必要があります。フレーズの区切りをどこに置くか、どこを頂点にするか、どこで間を取るかを決めてから弾いてください。決めずに弾くと、自由ではなく散漫になります。',
      },
      {
        heading: '合奏では合図が必要',
        body: '独奏なら自由に振る舞えますが、伴奏がある場合は事前の打ち合わせが不可欠です。どこで待つか、どこで合わせるかを決め、合図の方法も決めておきます。カデンツァ的な部分で a piacere が指定されている場合、伴奏は独奏の呼吸を追いかけることになります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '自由に弾く前に、一度は厳格なテンポで弾いてみます。骨格を知ってから崩すのが順序です。' },
      { name: '伴奏者', tip: '独奏者の呼吸と身体の動きを見て合わせます。楽譜ではなく相手を見ることになります。' },
    ],
    confusions: [
      { term: 'Rubato', slug: 'rubato', note: 'テンポを動かす指示。奪った時間を返すという前提がある点で、a piacere より制約があります。' },
      { term: 'Ad libitum', slug: 'ad-libitum', note: '「自由に」。ほぼ同義で、省略可能という意味で使われることもあります。' },
      { term: 'Tempo giusto', slug: 'tempo-giusto', note: '「正確なテンポで」。a piacere と正反対の指示です。' },
      { term: 'Cadenza', slug: 'cadenza', note: '独奏者に委ねられた部分。a piacere の精神が形式になったものです。' },
    ],
    works: [
      { title: 'ショパン ノクターン各曲', note: '装飾的なパッセージが a piacere 的に扱われ、演奏者の解釈が現れます。' },
    ],
  },

  'grave': {
    lead: 'Grave は「重々しく、荘重に」。ラテン語 gravis（重い）に由来し、速度としては最も遅い部類に入りますが、指しているのは重さと深刻さです。',
    sections: [
      {
        heading: '遅さに理由がある',
        body: 'Largo が空間の広さ、Adagio がくつろぎを指すのに対し、Grave の遅さには重さの理由があります。足取りが重い、逃れられない運命に直面している、そうした状況を音で表す言葉です。したがって同じテンポでも、Grave では音に沈み込むような重量が必要になります。軽く弾くと、ただ遅いだけの演奏になります。',
      },
      {
        heading: '序奏に置かれることが多い',
        body: 'Grave は楽曲の冒頭、とくに序奏に置かれる例が目立ちます。重々しい序奏のあとに速い主部が続くという構成は、バロックのフランス風序曲以来の伝統で、古典派のソナタや交響曲にも受け継がれました。この場合、Grave は主部との対比を作るために存在しているので、続く部分との落差を意識して設計します。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '和音は腕の重さを預けて深く。付点リズムの短い音符を短くしすぎると軽くなります。' },
      { name: '弦楽器', tip: '弓を弦に沈めたまま、ゆっくり大きく使います。圧をかけて速く動かすと潰れます。' },
      { name: '管楽器', tip: '音の入りから終わりまで息の支えを保ちます。減衰させると重さが失われます。' },
    ],
    confusions: [
      { term: 'Largo', slug: 'largo', note: '「幅広く」。同程度の遅さですが、空間的な広がりを指します。' },
      { term: 'Lento', slug: 'lento', note: '遅さそのもの。Grave のような重さの含みはありません。' },
      { term: 'Pesante', slug: 'pesante', note: '「重々しく」。性格の指示で、Grave は速度用語です。' },
      { term: 'Maestoso', slug: 'maestoso', note: '「堂々と」。威厳が主で、Grave の深刻さとは性格が異なります。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第8番「悲愴」第1楽章 序奏', note: 'Grave。続く Allegro との落差が、この楽章の劇性を作ります。' },
      { title: 'バッハ「トッカータとフーガ ニ短調」', note: '冒頭の重々しい語りが、続くフーガとの対比を用意します。' },
    ],
  },

  'prestissimo': {
    lead: 'Prestissimo は Presto の最上級で、「可能な限り速く」。速度用語の中で最も速い指示であり、多くの場合は終曲や終結部に置かれます。',
    sections: [
      {
        heading: '「可能な限り」の意味',
        body: 'この指示は絶対的な数値を持ちません。基準になるのは、その曲のいちばん細かい音符が明瞭に聞こえる限界です。それを超えると、速いのではなく崩れているだけになります。まず最難所を取り出し、粒が揃う最速を測ってください。それが、その曲におけるあなたの prestissimo です。合奏では、最も余裕のないパートに全体を合わせる必要があります。',
      },
      {
        heading: '省エネで弾く',
        body: 'この速度域では、余計な動きが致命的になります。指を上げすぎない、弓を大きく使わない、無駄な力を入れない。動きを最小化することが、そのまま速度と持久力につながります。また、速いテンポほどまとまりを大きく取る必要があり、1小節あるいは2小節を1つの単位として感じないと、頭が追いつきません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '鍵盤から指を離さず、浅い打鍵で。腕の余分な動きを削ることが最優先です。' },
      { name: '弦楽器', tip: '弓を極端に短く、弦の近くで。移弦は最小限の角度で行います。' },
      { name: '管楽器', tip: 'ダブルタンギングが前提の速度です。息の配分も事前に設計しておきます。' },
    ],
    confusions: [
      { term: 'Presto', slug: 'presto', note: 'きわめて速く。prestissimo はその最上級です。' },
      { term: 'Vivace', slug: 'vivace', note: '「生き生きと」。速度より鮮明さを指します。' },
      { term: 'Accelerando', slug: 'accelerando', note: 'だんだん速く。prestissimo への到達手段として用いられることがあります。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第4楽章 終結部', note: 'Presto から加速し、圧倒的な速度で幕を閉じます。' },
      { title: 'ショパン 練習曲 作品10-4', note: '極めて速い音型が持続し、省エネの技術が問われます。' },
    ],
  },

  'rallentando': {
    lead: 'Rallentando（rall.）は「だんだん遅く」。rallentare（緩める）から来た語で、ritardando とほぼ同義ですが、ニュアンスに違いがあるとされます。',
    sections: [
      {
        heading: 'ritardando との使い分け',
        body: '両者はほぼ同義として扱われますが、慣習的な区別を語る演奏家もいます。ritardando は意図的にブレーキをかけていく能動的な減速、rallentando は緊張が自然にゆるんで速度が落ちていく受動的な変化、という捉え方です。作曲家が両方を使い分けている楽譜では、この違いを意識すると解釈の手がかりになります。ただし厳密な規則ではありません。',
      },
      {
        heading: '設計は ritardando と同じ',
        body: 'ニュアンスがどうであれ、実際の作り方は共通です。終点でどのくらいのテンポになるかを先に決め、そこまでの距離を配分します。書かれた瞬間に大きく遅くすると、終わりで行き場がなくなります。最初の1〜2拍はほとんど変えないくらいが、聴感上はちょうどよくなります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '両手が同じ割合で遅くなっているか確認します。伴奏だけ先に遅くなると崩れます。' },
      { name: '弦楽器', tip: 'テンポが落ちるぶん弓が足りなくなります。減速を決めたら配分も決め直します。' },
      { name: '管楽器', tip: '遅くなるとブレスが持ちません。rall. の設計と同時に息継ぎ位置を見直します。' },
    ],
    confusions: [
      { term: 'Ritardando', slug: 'ritardando', note: 'ほぼ同義。より能動的な減速とされることがあります。' },
      { term: 'Calando', slug: 'calando', note: '遅くしながら弱くもする指示。音量の変化を含みます。' },
      { term: 'A tempo', slug: 'a-tempo', note: '元の速さへ戻す指示。rall. とセットで設計します。' },
      { term: 'Smorzando', slug: 'smorzando', note: '「消えゆくように」。勢いを静める点で近い働きをします。' },
    ],
    works: [
      { title: 'シューマン「トロイメライ」', note: 'フレーズごとの rall. の深さが、曲の呼吸を決めます。' },
    ],
  },

  'più-mosso': {
    lead: 'Più mosso は「より動いて」。più（より多く）＋ mosso（動いた）で、その地点から一段速いテンポへ切り替える指示です。',
    sections: [
      {
        heading: '加速ではなく切り替え',
        body: 'accelerando が徐々に速くしていく過程であるのに対し、più mosso は指定された地点で新しいテンポに切り替わります。手前から速めはじめる必要はなく、むしろ直前までテンポを保ったほうが対比が明確になります。切り替え後のテンポを事前に決め、その速さで練習しておくことが不可欠です。',
      },
      {
        heading: 'どのくらい速くするか',
        body: '数値の指定がないため演奏者が決めます。聴き手が「テンポが変わった」と明確に感じる程度の差は必要です。小さすぎると単に走ったように聞こえ、大きすぎると別の曲が始まったように断絶します。前後の音楽が対比を意図しているのか連続を意図しているのかを見て判断してください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '切り替えの1拍前で、心の中のテンポを新しいほうへ切り替えておきます。' },
      { name: '弦楽器', tip: 'テンポが上がると弓の配分が変わります。切り替え後の配分を別に決めておきます。' },
      { name: '管楽器', tip: '速くなるとブレスの間隔が変わります。切り替え直前に息を確保しておきます。' },
    ],
    confusions: [
      { term: 'Meno mosso', slug: 'meno-mosso', note: '逆に「より少なく動いて」。一段遅いテンポへ切り替えます。' },
      { term: 'Accelerando', slug: 'accelerando', note: '徐々に速くする過程。più mosso は段階を踏まない切り替えです。' },
      { term: 'Stringendo', slug: 'stringendo', note: '「切迫して」。速度上昇に緊張の増大を伴います。' },
      { term: 'A tempo', slug: 'a-tempo', note: '元の速さへ戻す指示。più mosso のあとに現れることがあります。' },
    ],
    works: [
      { title: 'チャイコフスキー「白鳥の湖」より情景', note: '場面の切り替えがテンポの段差として設計されています。' },
    ],
  },

  'morendo': {
    lead: 'Morendo は morire（死ぬ）から来た語で、「絶え入るように」。音量と勢いが同時に失われ、消滅へ向かっていく過程を表します。',
    sections: [
      {
        heading: '消えるまでが音楽',
        body: 'morendo の要点は、音が完全に消えたあとの静寂までを演奏の一部として扱うことです。最後の音が聞こえなくなった瞬間に演奏姿勢を解いてしまうと、余韻が断ち切られます。合奏では、指揮者が手を下ろすまで全員が動かないことで、この静寂が保たれます。独奏でも、鍵盤から手を離すタイミング、弓を弦から離すタイミングが表現の一部です。',
      },
      {
        heading: '密度を保ったまま減らす',
        body: '音量を下げていく過程で音が痩せると、消えるのではなく途切れたように聞こえます。響きの密度を保ったまま量だけを減らすのが理想です。到達点の音量で単独に鳴らしてみて、それが十分に鳴っているかを先に確認してから、そこへ向かう配分を決めると失敗しません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '減衰する楽器なので、次の音を減衰後の音量に合わせて入れます。ペダルの離し方も設計に含めます。' },
      { name: '弦楽器', tip: '弓速を保ったまま圧だけを減らします。速度まで落とすと音が消えてしまいます。' },
      { name: '管楽器', tip: '息の支えを最後まで保ちます。支えが抜けるとピッチが下がり、消えるのではなく崩れます。' },
    ],
    confusions: [
      { term: 'Smorzando', slug: 'smorzando', note: '「消えゆくように」。勢いを静める点は同じですが、消滅の含意はやや弱くなります。' },
      { term: 'Calando', slug: 'calando', note: '弱めながら遅く。速度の変化も含みます。' },
      { term: 'Perdendosi', slug: 'perdendosi', note: '「見失うように」。どこへ消えたか分からなくなる幻想的な効果を指します。' },
      { term: 'Al niente', slug: 'al-niente', note: '「無になるまで」。morendo の到達点を明示した指示です。' },
    ],
    works: [
      { title: 'チャイコフスキー 交響曲第6番「悲愴」第4楽章', note: '低弦が消えていく終結が、morendo の極致として知られます。' },
      { title: 'マーラー 交響曲第9番 終楽章', note: '音楽が文字通り消滅していく過程が、楽章全体の帰結になっています。' },
    ],
  },

  'subito': {
    lead: 'Subito は「すぐに、突然」。単独では使われず、他の指示に添えて「予告なく、即座に」変化させることを求めます。',
    sections: [
      {
        heading: '準備しないことが指示',
        body: 'subito p（急に弱く）や subito f（急に強く）の形で用いられます。重要なのは、その直前まで何も変化させないことです。多くの奏者は無意識に手前から準備してしまい、結果として subito ではなく緩やかな変化になります。楽譜に subito があったら、その1拍前まで直前の状態を厳密に保つ、と決めてしまうのが確実です。',
      },
      {
        heading: 'とくに subito p が難しい',
        body: 'crescendo の頂点で subito p が指示される書法は、ハイドンやベートーヴェンが好んで用いました。盛り上がりきったところで突然引くため、演奏者の身体感覚に逆らいます。ここで少しでも手前から音量を落とすと、作曲家が仕掛けた驚きが失われます。頂点まで増やし切り、次の音で落とす。この切り替えを別々の動作として練習してください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵の深さと速度を、次の音で完全に切り替えます。腕の位置を先に準備しておくと成功率が上がります。' },
      { name: '弦楽器', tip: '弓速と圧を同時に切り替えます。弓の位置を事前に決めておかないと間に合いません。' },
      { name: '管楽器', tip: '息の量を瞬時に変えます。ピッチが動きやすいので、支えは保ったままにします。' },
    ],
    confusions: [
      { term: 'Sforzando', slug: 'sforzando', note: '一音だけを突出させる指示。subito は状態そのものを切り替えます。' },
      { term: 'Forte Piano', slug: 'forte-piano', note: 'fp。強く出した直後に弱くする指示で、subito p を1音の中で行った形です。' },
      { term: 'Diminuendo', slug: 'diminuendo', note: '徐々に弱く。subito はこの反対で、段階を踏みません。' },
    ],
    works: [
      { title: 'ハイドン 交響曲第94番「驚愕」第2楽章', note: '静けさからの突然の強打。subito の効果を最も有名にした例です。' },
      { title: 'ベートーヴェン 交響曲第3番「英雄」第1楽章', note: 'crescendo の頂点での subito p が、繰り返し用いられます。' },
    ],
  },

  'rinforzando': {
    lead: 'Rinforzando（rf, rinf.）は rinforzare（補強する）から来た語で、「急に強く、目立たせて」。一音ではなく、区間を補強する指示です。',
    sections: [
      {
        heading: 'sforzando との違い',
        body: 'sforzando が一つの音を突出させるのに対し、rinforzando はフレーズや数音のまとまりを一時的に補強します。持続する強調であるため、rf の範囲がどこまでかを見極める必要があります。楽譜に明示されていないことも多く、多くの場合は次の強弱記号までか、フレーズの区切りまでと解釈します。',
      },
      {
        heading: '補強であって別物ではない',
        body: '「補強」という原義が示すとおり、rf は音楽の流れを断ち切るものではありません。そこだけ別の音楽が始まるように弾くと、不自然になります。進行している線の上で、その部分だけ密度が増すという扱いが自然です。音量だけでなく、音色の厚みで作ると、流れを保ったまま補強できます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '内声を厚くすると、旋律を叩かずに補強できます。' },
      { name: '弦楽器', tip: '弓速を上げて厚みを作ります。圧を足すと硬くなり、流れが止まります。' },
      { name: '管楽器', tip: '息の量を増やしつつ、発音は変えません。タンギングを強めると sforzando になってしまいます。' },
    ],
    confusions: [
      { term: 'Sforzando', slug: 'sforzando', note: '一音のみを突出させる指示。rf は区間の補強です。' },
      { term: 'Crescendo', slug: 'crescendo', note: '徐々に強く。rf は段階を踏まず、その場で密度が上がります。' },
      { term: 'Forzato', slug: 'forzato', note: '「強調して」。sforzando に近い、一点的な強めです。' },
      { term: 'Marcato', slug: 'marcato', note: '「際立たせて」。輪郭の指示で、rf は密度の指示です。' },
    ],
    works: [
      { title: 'ベートーヴェン 弦楽四重奏曲 作品59', note: 'rf が頻出し、フレーズ内部の起伏を細かく指定しています。' },
    ],
  },

  'turn': {
    lead: 'Turn（ターン、回音）は、書かれた音の上下を回るように演奏する装飾。記号は横向きの S 字で、音符の上か、音符と音符のあいだに置かれます。',
    sections: [
      {
        heading: '回る順序',
        body: '標準的なターンは、上の音・主音・下の音・主音の順に4音を演奏します。記号が上下反転している場合は、下の音から始めます。記号が音符の真上にあれば主音の発音と同時に回りはじめ、音符と次の音符のあいだにあれば、主音を鳴らしてからその後半で回ります。この位置の違いを見落とすと、リズムが変わってしまいます。',
      },
      {
        heading: '臨時記号が添えられることがある',
        body: '記号の上下に小さなシャープやフラットが書かれている場合、それぞれ上の音・下の音に適用されます。とくに短調では、下の音を半音上げて導音にするかどうかが問題になり、この指定が意味を持ちます。何も書かれていない場合は、その調の音階に従うのが原則です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '4音を一つのまとまりとして処理します。個別に数えると硬くなります。' },
      { name: '弦楽器', tip: '左手だけで作り、弓は一定に保ちます。弓を分けると装飾ではなくなります。' },
      { name: '管楽器', tip: '運指の連続で作り、タンギングは最初のみ。速いターンでは代替運指が有効です。' },
    ],
    confusions: [
      { term: 'Trill', slug: 'trill', note: '2音を連続して往復します。ターンは上下を1周する形です。' },
      { term: 'Mordent', slug: 'mordent', note: '隣接音を1往復する装飾。ターンより短く、方向も一方向です。' },
      { term: 'Appoggiatura', slug: 'appoggiatura', note: '前打音。和声的な緊張を作る点でターンとは働きが異なります。' },
    ],
    works: [
      { title: 'モーツァルト ピアノソナタ第11番 第1楽章', note: '主題の装飾にターンが組み込まれ、変奏のたびに扱いが変わります。' },
    ],
  },

  'tutti': {
    lead: 'Tutti はイタリア語で「全員」。ソロや少人数の部分に対して、全奏者が演奏することを示します。協奏曲では独奏に対するオーケストラ全体を指します。',
    sections: [
      {
        heading: '協奏曲における意味',
        body: 'バロックの合奏協奏曲では、少人数の独奏群と全体との交替が曲の構造そのものでした。この全体の部分を tutti と呼びます。古典派以降の協奏曲でも、独奏者が休んでオーケストラだけが演奏する部分を tutti と呼ぶ習慣が残っています。楽譜の tutti は「ここから全員」という実務的な合図です。',
      },
      {
        heading: '全員で弾くときの音量',
        body: 'tutti では人数が増えるため、各奏者が同じ音量で弾くと全体が過剰になります。とくに旋律以外のパートは、人数分の合計を意識して控える必要があります。逆に、tutti なのに響きが薄い場合は、全員が遠慮している可能性があります。リハーサルで客席側から聴いて判断するのが確実です。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: 'divisi の直後の tutti では、全員が同じ弓使いに戻ります。事前の統一が必要です。' },
      { name: '管楽器', tip: '同じパートを複数人で吹く場合、音程とアタックの統一が音量以上に重要です。' },
      { name: '独奏者', tip: 'tutti の間に次のフレーズの準備をします。休みではなく、音楽を聴いて入る場所です。' },
    ],
    confusions: [
      { term: 'Solo', slug: 'solo', note: '独奏。tutti と交替することで、音楽に立体感が生まれます。' },
      { term: 'Divisi', slug: 'divisi', note: 'パートを分けて演奏する指示。tutti はこれを解除します。' },
      { term: 'Concerto', slug: 'concerto', note: '協奏曲。独奏と tutti の交替が、この形式の原理そのものです。' },
    ],
    works: [
      { title: 'ヴィヴァルディ「四季」', note: '独奏と tutti の交替が、各楽章の構造を作っています。' },
      { title: 'バッハ「ブランデンブルク協奏曲」', note: '独奏群と全体の対比が、合奏協奏曲の原理を示します。' },
    ],
  },

  'divisi': {
    lead: 'Divisi（div.）は「分けて」。同じパートの奏者を複数のグループに分け、それぞれ異なる音を演奏させる指示です。',
    sections: [
      {
        heading: '重音との違い',
        body: '楽譜に和音が書かれていても、divisi の指示があれば一人で重音を弾くのではなく、奏者を分担します。分担することで各音が確実に鳴り、音程も安定し、ビブラートもかけられます。逆に non divisi や doppio と書かれていれば、一人で重音を演奏します。この区別は音色に直結するため、指示の見落としは大きな違いを生みます。',
      },
      {
        heading: '分け方の慣習',
        body: '一般に、プルト（譜面台）の内側と外側で分けるか、前列と後列で分けます。3声以上に分かれる場合はプルトごとに割り当てます。分け方が指定されていない場合はコンサートマスターやパートリーダーが決め、事前に共有します。分けたあと tutti に戻る位置も併せて確認しておく必要があります。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '分かれた各声部が独立した線として聞こえるよう、それぞれのバランスを決めます。' },
      { name: '管楽器', tip: '同じパートを複数人で吹く場合の分担を a2 や 1. 2. で示します。divisi と同じ発想です。' },
    ],
    confusions: [
      { term: 'Tutti', slug: 'tutti', note: '全員で。divisi を解除して全員が同じ音に戻ります。' },
      { term: 'Solo', slug: 'solo', note: '独奏。divisi が分担であるのに対し、こちらは一人だけが演奏します。' },
      { term: 'Unisono', slug: 'unison', note: '同度。全員が同じ音を演奏する状態で、divisi の対極にあります。' },
    ],
    works: [
      { title: 'ワーグナー「ローエングリン」前奏曲', note: '高音弦の細かい divisi が、透明な光の層を作ります。' },
      { title: 'R.シュトラウス「メタモルフォーゼン」', note: '23の独立した弦楽パートによる、divisi の極限的な例です。' },
    ],
  },

  'flautando': {
    lead: 'Flautando は flauto（フルート）から来た語で、「フルートのように」。弦楽器で、笛のような軽く透明な音色を作る奏法です。',
    sections: [
      {
        heading: '倍音を減らして笛に近づける',
        body: '弓を指板寄りに移動させ、圧をごく軽くして速めに動かすと、高次の倍音が減り、基音中心の丸い音になります。これがフルートの音色に近いため、この名で呼ばれます。sul tasto と近い奏法ですが、flautando のほうがより軽く、浮かんだ音色を指す傾向があります。',
      },
      {
        heading: 'ハーモニクスとの併用',
        body: '実際の演奏では、flautando の効果をより明確にするため、ハーモニクスと組み合わせることがあります。楽譜に flautando とだけ書かれている場合でも、その音域と曲想によっては、ハーモニクスで演奏するほうが意図に近いこともあります。指揮者やパート内で解釈を統一しておくのが実務的です。',
      },
    ],
    instruments: [
      { name: '弦楽器', tip: '弓速を保ちながら圧を抜きます。圧を抜くだけで速度も落とすと、音が消えます。' },
      { name: 'ヴィオラ・チェロ', tip: '弦が太いぶん、指板寄りでも芯が残ります。より極端に寄せる必要があります。' },
    ],
    confusions: [
      { term: 'Sul tasto', slug: 'sul-tasto', note: '「指板の上で」。flautando とほぼ同じ位置ですが、より広い意味を持ちます。' },
      { term: 'Harmonics', slug: 'harmonics', note: '倍音奏法。透明な音色という点で近く、併用されることがあります。' },
      { term: 'Sul ponticello', slug: 'sul-ponticello', note: '「駒の上で」。正反対の位置で、金属的な音色を作ります。' },
    ],
    works: [
      { title: 'ドビュッシー「牧神の午後への前奏曲」', note: '弦の透明な音色が、フルートの旋律と溶け合います。' },
    ],
  },

  'calando': {
    lead: 'Calando は calare（下がる、落ちる）から来た語で、「弱めながら遅く」。音量と速度が同時に落ちていく、二重の指示です。',
    sections: [
      {
        heading: '二つの変化を同時に',
        body: 'diminuendo が音量だけ、ritardando が速度だけを扱うのに対し、calando はその両方を同時に求めます。したがって設計も二重になります。終点でどのくらいの音量か、どのくらいのテンポかを両方決め、そこへ向けて配分します。片方だけが先に到達すると、ちぐはぐに聞こえます。',
      },
      {
        heading: '生命力が衰えるイメージ',
        body: '原義の「落ちる」が示すとおり、calando は単に静かになるのではなく、エネルギーそのものが失われていく感覚を表します。終局へ向かう切ない場面や、力尽きるような表現で用いられます。音量と速度に加えて、音色も徐々に温度を下げていくと、この性格が伝わります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '音量とテンポの両方を、同じ割合で落としていきます。片方だけ先行しないよう録音で確認します。' },
      { name: '弦楽器', tip: '弓速と圧の両方を減らします。テンポも落ちるため、弓の配分の再設計が必要です。' },
      { name: '管楽器', tip: '遅くなるぶん息が長く必要になります。弱くなるからと支えを抜くと持ちません。' },
    ],
    confusions: [
      { term: 'Diminuendo', slug: 'diminuendo', note: '音量のみを減らす指示。calando は速度も含みます。' },
      { term: 'Ritardando', slug: 'ritardando', note: '速度のみを落とす指示。calando は音量も含みます。' },
      { term: 'Morendo', slug: 'morendo', note: '「絶え入るように」。消滅へ向かう点で近い性格を持ちます。' },
      { term: 'Smorzando', slug: 'smorzando', note: '「消えゆくように」。勢いを静める点が共通します。' },
    ],
    works: [
      { title: 'ショパン ノクターン 第1番 変ロ短調', note: 'フレーズの終わりで音量と速度が同時に落ち、切なさを作ります。' },
    ],
  },

  'key-signature': {
    lead: 'Key signature（調号）は、音部記号のすぐ右に置かれたシャープやフラットの並び。その曲全体で常に適用される音の変化を、あらかじめまとめて宣言したものです。',
    sections: [
      {
        heading: '毎回書かずに済ませる仕組み',
        body: 'ト長調ではファがすべて半音上がります。これを臨時記号で毎回書くと譜面が煩雑になるため、冒頭にシャープを1つ置いて「この曲のファはすべて嬰ヘ」と宣言します。調号は小節線を越えても有効で、曲の途中で変更されるまで効き続けます。臨時記号がその小節内だけで効力を失うのと対照的です。',
      },
      {
        heading: '並ぶ順序は決まっている',
        body: 'シャープは ファ・ド・ソ・レ・ラ・ミ・シ の順、フラットはその逆で シ・ミ・ラ・レ・ソ・ド・ファ の順に増えていきます。この順序は五度圏の並びと一致しており、偶然ではありません。順序が決まっているため、調号を見た瞬間に何個あるかを数えるだけで調が特定できます。',
      },
      {
        heading: '調号から調を読む手順',
        body: 'シャープ系なら、いちばん右のシャープの半音上が長調の主音です。シャープ3つならソに付くので、その半音上のラ、つまりイ長調。フラット系なら、右から2番目のフラットの音がそのまま長調の主音になります（フラット1つのヘ長調だけは例外として覚えます）。同じ調号を持つ短調は、長調の主音の短3度下です。',
      },
    ],
    instruments: [
      { name: '共通', tip: '練習の前に調号から音階を1オクターブ弾くと、その曲で使う音が手に入ります。' },
      { name: '管楽器', tip: '移調楽器では、記譜上の調号と実際に鳴る調が異なります。合奏では実音の調も把握しておきます。' },
    ],
    confusions: [
      { term: 'Accidental', slug: 'accidental', note: '臨時記号。調号とは別に、その小節内だけ音を変化させます。' },
      { term: 'Circle of fifths', slug: 'circle-of-fifths', note: '五度圏。調号の増減が円環として整理されています。' },
      { term: 'Relative keys', slug: 'relative-keys', note: '平行調。同じ調号を共有する長調と短調です。' },
      { term: 'Modulation', slug: 'modulation', note: '転調。曲の途中で調号が変わることもあれば、臨時記号だけで移ることもあります。' },
    ],
    works: [
      { title: 'バッハ「平均律クラヴィーア曲集」', note: '24の調すべてを用いた曲集で、調号の全パターンが現れます。' },
    ],
  },

  'modulation': {
    lead: 'Modulation（転調）は、曲の途中で調の中心が移ること。単に臨時記号が出てくることではなく、新しい主音が定着して初めて転調と呼びます。',
    sections: [
      {
        heading: '寄り道と引っ越しの違い',
        body: '臨時記号が出ても、すぐ元の調に戻るなら、それは一時的な借用にすぎません。転調と呼べるのは、新しい調の終止形が現れ、その調が落ち着き先として確立した場合です。楽曲を分析するときは、臨時記号の有無ではなく「どこで新しい調の終止が起きたか」を探すと、構造が正しく見えてきます。',
      },
      {
        heading: '近い調と遠い調',
        body: '五度圏で隣り合う調は共通する音が多く、転調しても自然に聞こえます。逆に円の反対側へ移ると、共通音が少なく劇的な効果が出ます。古典派のソナタ形式では属調への転調が定型でしたが、ロマン派以降は遠隔調への転調が積極的に用いられ、和声語法が拡張されていきました。',
      },
      {
        heading: '演奏で転調を伝える',
        body: '聴き手が転調に気づくかどうかは、演奏に左右されます。新しい調に入った瞬間に音色をわずかに変える、その直前で音量を整えるといった処理で、場面が変わったことが伝わります。とくに展開部のように転調が連続する箇所では、どこが最も遠い調かを把握し、そこを頂点として設計すると全体が立体的になります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '楽譜に転調の位置と調名を書き込んでおくと、音量と音色の設計がしやすくなります。' },
      { name: 'ピアノ', tip: '転調のたびにペダルを踏み替えると、前の調の響きが混ざらず切り替えが明確になります。' },
    ],
    confusions: [
      { term: 'Transposition', slug: 'transposition', note: '移調。曲全体を別の調へ移すことで、曲の途中で起きる転調とは別です。' },
      { term: 'Circle of fifths', slug: 'circle-of-fifths', note: '五度圏。転調の距離感を測る地図になります。' },
      { term: 'Enharmonic', slug: 'enharmonic', note: '異名同音。遠隔調へ転調する橋渡しとして利用されます。' },
      { term: 'Development', slug: 'development', note: '展開部。転調の連続が推進力を生む部分です。' },
    ],
    works: [
      { title: 'シューベルト 即興曲 作品90-3', note: '穏やかな響きの中で、遠い調へ滑り込む転調が随所にあります。' },
      { title: 'ワーグナー「トリスタンとイゾルデ」前奏曲', note: '解決を先送りし続ける転調が、調性の限界を押し広げました。' },
    ],
  },

  'interval': {
    lead: 'Interval（音程）は、2つの音の高さの隔たり。度数と種類の2つで表され、和音も音階も、すべてこの積み重ねでできています。',
    sections: [
      {
        heading: '度数の数え方に注意',
        body: '音程は、下の音を1と数えて上の音まで数えます。ドからミなら、ド・レ・ミで3度。ドからドは同じ音ですが1度（同度）です。0から数えないため、2度と2度を足しても4度ではなく3度になります。この数え方の癖が、音程計算で最も間違いやすい点です。',
      },
      {
        heading: '完全と長短',
        body: '1度・4度・5度・8度には「完全」を、2度・3度・6度・7度には「長・短」を使います。この区別は響きの性質に由来し、完全音程は溶け合い、長短音程は色を持ちます。さらに完全音程を半音広げると増、狭めると減。長音程を半音狭めると短、さらに狭めると減になります。この体系を覚えると、どんな音程も名前を付けられます。',
      },
      {
        heading: '転回すると足して9になる',
        body: '音程を転回する（下の音を1オクターブ上げる）と、元の度数と足して9になります。3度の転回は6度、4度の転回は5度。さらに、長は短に、増は減に入れ替わります。この規則を知っていると、複雑な音程も転回して考えることで簡単になります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '音程を耳で覚えるには、知っている曲の冒頭と結びつけるのが有効です（完全5度なら「きらきら星」など）。' },
      { name: '弦楽器', tip: '完全5度は隣り合う開放弦の関係です。共鳴を頼りに音程を確認できます。' },
      { name: '合唱・合奏', tip: '純正な響きを狙う場合、長3度はやや低め、完全5度はやや高めに取ると溶け合います。' },
    ],
    confusions: [
      { term: 'Perfect fifth', slug: 'perfect-fifth', note: '完全5度。最も協和的な音程で、和音の骨格を作ります。' },
      { term: 'Tritone', slug: 'tritone', note: '三全音。最も不安定な音程で、解決への推進力を生みます。' },
      { term: 'Consonance', slug: 'consonante', note: '協和音程。溶け合って安定して聞こえる関係です。' },
      { term: 'Enharmonic', slug: 'enharmonic', note: '異名同音。増4度と減5度は同じ高さですが、音程名は異なります。' },
    ],
    works: [
      { title: 'バッハ「インヴェンション」', note: '2声の距離が常に変化し、音程の響きの違いが直接聞き取れます。' },
    ],
  },

  'chord': {
    lead: 'Chord（和音）は、高さの異なる複数の音が同時に鳴る響き。西洋音楽では、3度を積み重ねて作るのが基本の考え方です。',
    sections: [
      {
        heading: '3度を積む',
        body: '和音の基本は、ある音の上に3度を積み、さらにその上に3度を積んだ三和音です。ハ長調のドの上に積めば ド・ミ・ソ。ここにさらに3度を積むと七の和音になります。積む3度が長か短かの組み合わせで、長三和音・短三和音・減三和音・増三和音という4種類の性格が生まれます。',
      },
      {
        heading: '同じ和音でも配置で変わる',
        body: '構成音が同じでも、どの音を最低音に置くか、各音をどの高さに配置するかで響きは大きく変わります。根音が最低音なら安定した基本形、それ以外なら流動的な転回形。また、音を密集させれば厚く、広く開けば澄んだ響きになります。低音域で3度を狭く重ねると濁りやすいなど、配置には実践的な原則があります。',
      },
      {
        heading: '和音は単独では意味を持たない',
        body: '一つの和音が明るいか暗いかは分かっても、その和音が何をしているかは、前後の和音との関係で決まります。同じ長三和音でも、主和音として着地している場合と、属和音として次を待っている場合ではまったく意味が違います。和音を覚えるときは、単体ではなく進行として捉えるのが実用的です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '全ての音を同時に、かつ音量のバランスを取って鳴らします。最上音をやや強めると旋律が立ちます。' },
      { name: '弦楽器', tip: '3声以上は同時に鳴らせないため、分散します。上2声を残して響かせるのが一般的です。' },
      { name: '合奏', tip: '自分が和音のどの音を担当しているかを把握します。第3音は多めに、根音と5度は控えめが基本です。' },
    ],
    confusions: [
      { term: 'Triad', slug: 'triad', note: '三和音。3つの音からなる最も基本的な和音です。' },
      { term: 'Seventh chord', slug: 'seventh-chord', note: '七の和音。三和音にさらに3度を積んだ4音の和音です。' },
      { term: 'Voicing', slug: 'voicing', note: '和音の音の配置。同じ和音でも配置で響きが変わります。' },
      { term: 'Harmony', slug: 'harmony', note: '和声。和音の連なりと、その進行の理論です。' },
    ],
    works: [
      { title: 'バッハ コラール', note: '4声の和音の配置が、和声法の教科書として使われ続けています。' },
    ],
  },

  'scale': {
    lead: 'Scale（音階）は、音を高さの順に並べたもの。どの音を選び、どんな間隔で並べるかが、その音楽の響きの土台を決めます。',
    sections: [
      {
        heading: '並べ方が性格を決める',
        body: '同じ7音でも、全音と半音をどの位置に置くかで性格が変わります。長音階は第3音と第4音、第7音と第8音のあいだが半音で、明るく開放的。短音階は第2音と第3音のあいだが半音で、憂いを帯びます。半音の位置という一点の違いが、音楽全体の色を決めているわけです。',
      },
      {
        heading: '音階練習が意味を持つ理由',
        body: '音階練習は指の訓練だと思われがちですが、本来の目的は、その調で使う音を体に入れることです。曲を弾く前にその調の音階を弾いておくと、指が調に馴染み、臨時記号が出てきたときに「調の外へ出た」と気づけるようになります。楽譜の読み間違いも減ります。',
      },
      {
        heading: '7音以外の音階',
        body: '西洋音楽の中心は7音音階ですが、それだけではありません。5音の五音音階は世界各地の民謡に、6音の全音音階は印象主義に、12音すべてを使う半音階は転調や装飾に用いられます。それぞれが固有の響きを持ち、音階の選択そのものが作曲上の判断になります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '指くぐりの位置を調ごとに固定して覚えます。同じ運指が使える調をまとめると効率的です。' },
      { name: '弦楽器', tip: 'ポジション移動の位置を決めてから練習します。毎回違う場所で移動すると音程が安定しません。' },
      { name: '管楽器', tip: '運指が難しい調ほど、ゆっくりから始めます。指が揃わない箇所を単独で取り出すのが近道です。' },
    ],
    confusions: [
      { term: 'Major scale', slug: 'major-scale', note: '長音階。西洋音楽の基本となる7音の並びです。' },
      { term: 'Harmonic minor', slug: 'harmonic-minor', note: '和声的短音階。第7音を半音上げて導音を作った形です。' },
      { term: 'Pentatonic scale', slug: 'pentatonic-scale', note: '五音音階。半音を含まず、世界各地で独立に発達しました。' },
      { term: 'Key', slug: 'key', note: '調。音階と、その中心となる主音の関係全体を指します。' },
    ],
    works: [
      { title: 'ドビュッシー「前奏曲集」より「帆」', note: '全音音階が全編を支配し、音階の選択が様式そのものになっています。' },
    ],
  },

  'counterpoint': {
    lead: 'Counterpoint（対位法）は、独立した複数の旋律を同時に響かせる技法。ラテン語 punctus contra punctum（点対点）に由来します。',
    sections: [
      {
        heading: '和声法との違い',
        body: '和声法は、和音の連なりを縦に積み上げて考えます。対位法は、それぞれの声部が独立した横の線として成立することを前提に、その組み合わせを考えます。実際の音楽ではこの二つが同時に働いており、良い対位法は結果として良い和声にもなっています。ただし出発点が縦か横かという違いは、書法にも演奏にも影響します。',
      },
      {
        heading: '声部の独立を聴かせる',
        body: '対位法的な音楽の演奏で最も重要なのは、各声部が別の人格として聞こえることです。すべてを均等に鳴らすと、線が混ざって和音の連続に聞こえてしまいます。声部ごとに音色を変える、フレーズの切れ目をずらす、主題を持つ声部を前に出すといった処理で、独立性が保たれます。まず各声部を単独で歌えるようにするのが基本の練習です。',
      },
      {
        heading: '技法の道具箱',
        body: '対位法には、旋律を上下反転させる転回、後ろから演奏する逆行、音価を倍にする拡大、半分にする縮小といった変形の技法があります。これらは単なる技巧ではなく、限られた素材から長大な音楽を組み立てるための手段です。楽譜でこれらを見つけると、作曲家がどう考えたかが見えてきます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '同じ手で複数の声部を担当します。声部ごとに指の重心を変える練習が必要です。' },
      { name: '合奏', tip: '主題を持つ奏者が前に出て、他は音量だけでなくビブラートやアーティキュレーションも控えます。' },
      { name: 'オルガン', tip: 'ストップの選択で声部を音色的に分離できます。曲の構造に応じた音色設計が可能です。' },
    ],
    confusions: [
      { term: 'Fugue', slug: 'fugue', note: '対位法で書かれた代表的な形式。主題が各声部を巡ります。' },
      { term: 'Canon', slug: 'canon', note: '同じ旋律を時間差で追いかける、最も厳格な対位法の形です。' },
      { term: 'Harmony', slug: 'harmony', note: '和声。縦の響きから考えるのに対し、対位法は横の線から考えます。' },
      { term: 'Cantus firmus', slug: 'cantus-firmus', note: '定旋律。対位法の練習で土台として与えられる旋律です。' },
    ],
    works: [
      { title: 'バッハ「フーガの技法」', note: '一つの主題から対位法の技法を体系的に展開した作品です。' },
      { title: 'モーツァルト 交響曲第41番「ジュピター」第4楽章', note: '5つの主題が同時に組み合わされる終結部が有名です。' },
    ],
  },

  'enharmonic': {
    lead: 'Enharmonic（異名同音）は、名前が違うのに実際の高さが同じ音のこと。嬰ヘと変トは、ピアノでは同じ鍵盤です。',
    sections: [
      {
        heading: '同じ音でも意味が違う',
        body: '平均律の鍵盤楽器では嬰ヘと変トは同じ音ですが、和声的な意味はまったく異なります。嬰ヘは上へ解決したがる音、変トは下へ解決したがる音です。作曲家がどちらで書いたかは、その音がどこへ向かうかを示しています。演奏でも、上行するなら少し高め、下行するなら少し低めに取ると、方向性が伝わります。',
      },
      {
        heading: '転調の抜け道になる',
        body: '異名同音は、遠い調へ移るための橋渡しとして使われます。ある和音を異名同音として読み替えることで、まったく別の調の和音として機能させられるためです。とくに減七の和音は、読み替えによってどの調へも進めるため、劇的な転調の道具として重用されてきました。',
      },
      {
        heading: '平均律だから成立する',
        body: '異名同音が完全に同じ高さになるのは、オクターブを12等分した平均律においてです。純正律や中全音律では嬰ヘと変トは異なる高さを持ち、区別されていました。鍵盤楽器が平均律に統一されたことで、あらゆる調が使えるようになった一方、この微細な差は失われました。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '物理的に同じ鍵盤なので、読み替えは記譜上の問題です。どちらで書かれているかが解釈の手がかりになります。' },
      { name: '弦楽器', tip: '音程を自由に取れるため、方向性に応じて微調整できます。上行の嬰音は高め、下行の変音は低めが目安です。' },
      { name: '合唱', tip: '純正な響きを狙う場合、異名同音を区別して歌うことで和音がより溶け合います。' },
    ],
    confusions: [
      { term: 'Equal temperament', slug: 'equal-temperament', note: '平均律。異名同音が完全に一致する調律法です。' },
      { term: 'Accidental', slug: 'accidental', note: '臨時記号。同じ高さの音を、シャープとフラットのどちらで書くかの判断に関わります。' },
      { term: 'Double sharp', slug: 'double-sharp', note: '重嬰記号。異名同音の関係を考えるうえで避けて通れない記号です。' },
      { term: 'Modulation', slug: 'modulation', note: '転調。異名同音の読み替えが、遠隔調への橋渡しになります。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第21番「ワルトシュタイン」', note: '異名同音を介した転調が、大胆な和声進行を可能にしています。' },
    ],
  },

  'relative-keys': {
    lead: 'Relative keys（平行調）は、同じ調号を共有する長調と短調の組み合わせ。ハ長調とイ短調のように、使う音は同じで中心だけが違います。',
    sections: [
      {
        heading: '主音は短3度下',
        body: '長調の主音から短3度下がった音が、平行短調の主音になります。ハ長調（ド）に対してイ短調（ラ）、ト長調（ソ）に対してホ短調（ミ）という関係です。逆に短調から見れば、主音の短3度上が平行長調になります。調号だけでは長調か短調か判断できないため、曲がどちらに着地しているかを確認する必要があります。',
      },
      {
        heading: '最も近い転調先',
        body: '使う音が完全に同じであるため、平行調への転調は最も滑らかです。長調の曲の中間部が平行短調になる、あるいはその逆という構成は、あらゆる時代の作品に見られます。臨時記号がほとんど増えないまま雰囲気だけが変わるため、聴き手には自然な陰りとして受け取られます。',
      },
    ],
    instruments: [
      { name: '共通', tip: '音階練習では長調と平行短調をセットで行うと、同じ音の並びで中心が変わる感覚がつかめます。' },
      { name: 'ピアノ', tip: '運指が共通する部分が多いため、まとめて覚えると効率的です。' },
    ],
    confusions: [
      { term: 'Parallel keys', slug: 'parallel-keys', note: '同主調。主音が同じ長調と短調で、調号は異なります。平行調と混同しやすい概念です。' },
      { term: 'Key signature', slug: 'key-signature', note: '調号。平行調はこれを共有します。' },
      { term: 'Circle of fifths', slug: 'circle-of-fifths', note: '五度圏。図では長調が外側、平行短調が内側に並びます。' },
      { term: 'Minor key', slug: 'minor-key', note: '短調。長調と対になる性格を持ちます。' },
    ],
    works: [
      { title: 'ショパン ノクターン 第20番 嬰ハ短調', note: '中間部で平行長調へ移り、陰から光への転換が起きます。' },
    ],
  },

  'equal-temperament': {
    lead: 'Equal temperament（平均律）は、オクターブを12の半音に均等に分割した調律法。現代の鍵盤楽器の標準であり、あらゆる調を同じ条件で使えるようにしました。',
    sections: [
      {
        heading: '何を捨てて何を得たか',
        body: '純正な音程は単純な整数比で決まります。完全5度は2対3、長3度は4対5。しかしこれらを積み重ねていくと、オクターブとぴったり合わなくなるという矛盾が生じます。平均律は、すべての5度をわずかに狭め、3度を広めに妥協することで、この矛盾を12の半音に均等に分散させました。純正な響きの美しさを一部失う代わりに、どの調でも同じように演奏できる自由を得たわけです。',
      },
      {
        heading: '調の性格という論点',
        body: '平均律以前は、調によって音程の広さが異なり、調ごとに固有の性格がありました。作曲家が特定の調を選ぶことに、今より具体的な意味があったわけです。平均律では、すべての調が移調しただけの関係になります。それでも演奏家が調ごとの性格を語るのは、楽器の共鳴や運指の違いによる部分が大きいと考えられています。',
      },
      {
        heading: 'バッハの曲集の意味',
        body: 'バッハ「平均律クラヴィーア曲集」の原題は Das wohltemperierte Klavier で、直訳すれば「よく調整された鍵盤楽器」。現在の12等分平均律を指していたかについては議論があり、当時使われていた各種のよく響く調律法を指すという説が有力です。いずれにせよ、24の調すべてを使えることを示した点にこの曲集の意義があります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '調律が固定されているため、奏者が音程を変えることはできません。響きの選択はペダルと打鍵で行います。' },
      { name: '弦楽器・管楽器', tip: '音程を調整できるため、和音の中では純正に寄せることが可能です。ピアノと合わせる場合は平均律に合わせます。' },
      { name: '合唱', tip: '無伴奏では自然に純正へ寄っていきます。ピアノ伴奏が入ると平均律に引き戻されます。' },
    ],
    confusions: [
      { term: 'Enharmonic', slug: 'enharmonic', note: '異名同音。平均律だからこそ完全に一致します。' },
      { term: 'Pitch', slug: 'pitch', note: '音の高さ。基準となる A の周波数は時代や団体で異なります。' },
      { term: 'Interval', slug: 'interval', note: '音程。平均律ではすべての半音が等しい幅を持ちます。' },
    ],
    works: [
      { title: 'バッハ「平均律クラヴィーア曲集」', note: 'あらゆる調で演奏できることを示した記念碑的な曲集です。' },
    ],
  },

  'cadence': {
    lead: 'Cadence（終止形）は、和音の進行によって音楽に句読点を打つ定型。文章における読点や句点にあたるもので、曲の構造はこれによって区切られます。',
    sections: [
      {
        heading: '句読点としての働き',
        body: '音楽は音符が連なっているだけでは、どこが区切りか分かりません。終止形は、特定の和音進行によって「ここで一区切り」を示します。強い決着を示す完全終止は句点、続きを予感させる半終止は読点にあたります。楽曲分析でまず終止形を探すのは、それが文章の句読点を探すのと同じ作業だからです。',
      },
      {
        heading: '主な4種類',
        body: '属和音から主和音へ進む完全終止が最も強い決着。下属和音から主和音へ進む変格終止は柔らかく、余韻を残します。属和音で止まる半終止は続きを期待させ、属和音から主和音以外へ進む偽終止は予想を裏切ります。この4つを聴き分けられるようになると、曲の構造が耳で追えるようになります。',
      },
      {
        heading: '演奏で終止を示す',
        body: '終止形が書かれていても、演奏でそれが伝わらなければ意味がありません。完全終止では最後の和音をわずかに長めに、半終止では余韻を残して次へ渡す、といった処理で区切りの強さを表現します。すべての終止を同じ重さで扱うと、文章がすべて句点で終わっているように単調になります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '楽譜の終止形に印を付け、それぞれの強さを段階的に決めてから通します。' },
      { name: 'ピアノ', tip: '終止の直前でペダルを整理すると、和音の変化がはっきり聞こえます。' },
    ],
    confusions: [
      { term: 'Perfect cadence', slug: 'perfect-cadence', note: '完全終止。最も強い決着感を持ちます。' },
      { term: 'Plagal cadence', slug: 'plagal-cadence', note: '変格終止。「アーメン終止」とも呼ばれます。' },
      { term: 'Half cadence', slug: 'half-cadence', note: '半終止。属和音で止まり、続きを期待させます。' },
      { term: 'Deceptive cadence', slug: 'deceptive-cadence', note: '偽終止。予想を裏切って曲を引き延ばします。' },
    ],
    works: [
      { title: 'バッハ コラール', note: '各フレーズが終止形で区切られ、歌詞の句読点と一致しています。' },
    ],
  },

  'triad': {
    lead: 'Triad（三和音）は、ある音の上に3度を2つ積み重ねた3音の和音。西洋音楽の和声は、この単位を基礎として組み立てられています。',
    sections: [
      {
        heading: '4つの種類',
        body: '積む3度の組み合わせで4種類が生まれます。長3度＋短3度は長三和音で明るく、短3度＋長3度は短三和音で暗く響きます。短3度を2つ積むと減三和音で不安定に、長3度を2つ積むと増三和音で浮遊感が出ます。実際の音楽では長と短が大半を占め、減と増は緊張を作る場面で用いられます。',
      },
      {
        heading: '音階の各音の上に積む',
        body: '長音階の各音の上に三和音を積むと、I・IV・V が長三和音、II・III・VI が短三和音、VII が減三和音になります。この配置は音階の構造から自動的に決まるもので、どの長調でも同じです。ローマ数字で和音を表すのは、この共通性を利用して調を超えた分析を可能にするためです。',
      },
      {
        heading: '3音の役割は等しくない',
        body: '根音は和音の名前を決め、第3音は明暗を決め、第5音は骨格を補強します。したがって省略するなら第5音、強調するなら第3音というのが実践的な原則です。合奏で自分がどの音を担当しているかによって、音量の扱いを変える判断ができるようになります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '第3音をわずかに強めると和音の性格が明確になります。第5音は控えめでも成立します。' },
      { name: '合奏', tip: '第3音を担当する奏者が音量を出しすぎると濁ります。純正に寄せるならやや低めに取ります。' },
      { name: '弦楽器', tip: '3声を同時に鳴らせないため分散します。どの音を残して響かせるかを決めておきます。' },
    ],
    confusions: [
      { term: 'Chord', slug: 'chord', note: '和音全般。三和音はその最も基本的な形です。' },
      { term: 'Seventh chord', slug: 'seventh-chord', note: '七の和音。三和音にさらに3度を積んだ形です。' },
      { term: 'Diminished chord', slug: 'diminished-chord', note: '減三和音。短3度を2つ積んだ不安定な和音です。' },
      { term: 'Root position', slug: 'root-position', note: '基本形。根音が最低音にある、最も安定した配置です。' },
    ],
    works: [
      { title: 'ハイドン 交響曲第94番「驚愕」第2楽章', note: '単純な三和音の連続が主題を作り、その明快さが変奏の土台になります。' },
    ],
  },

  'con-fuoco': {
    lead: 'Con fuoco は「火のように」。fuoco（火）を伴って、という意味で、燃えるような激しさと推進力を求める指示です。',
    sections: [
      {
        heading: '熱と速度は別のもの',
        body: 'con fuoco を見てテンポを上げたくなりますが、この語自体は速度を指定していません。Allegro con fuoco は Allegro のテンポで、そこに炎のような性格を加えるという意味です。速さで火を表現しようとすると、指定されたテンポから外れ、細部が崩れます。火を作るのは、発音の鋭さ、音量の振れ幅、リズムの張りです。',
      },
      {
        heading: '制御された激しさ',
        body: '激しさを求める指示ほど、演奏は崩れやすくなります。con fuoco の箇所でテンポが走り、音が濁ることは非常に多い失敗です。逆説的ですが、拍の骨格を厳しく保ったほうが、聴き手には激しく聞こえます。枠が明確だからこそ、その中で暴れているエネルギーが伝わるためです。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵を速く、しかし腕は脱力して。力を入れると音が硬くなり、火ではなく雑音になります。' },
      { name: '弦楽器', tip: '弓速を最大まで使い、圧は最後に足します。順序を逆にすると音が潰れます。' },
      { name: '管楽器', tip: '息のスピードで作ります。量だけを増やすと太くなるだけで、鋭さが出ません。' },
    ],
    confusions: [
      { term: 'Con brio', slug: 'con-brio', note: '「活気をもって」。輝きと推進力が主で、con fuoco ほど攻撃的ではありません。' },
      { term: 'Appassionato', slug: 'appassionato', note: '「熱情的に」。内面の熱に寄り、con fuoco はより外向的です。' },
      { term: 'Agitato', slug: 'agitato', note: '「落ち着かなく」。不安に寄り、con fuoco の攻撃性とは方向が異なります。' },
      { term: 'Furioso', slug: 'furioso', note: '「荒れ狂って」。con fuoco よりさらに激しい状態を指します。' },
    ],
    works: [
      { title: 'ショパン 練習曲 作品10-12「革命」', note: 'Allegro con fuoco。速度ではなく発音とリズムの張りが火を作ります。' },
      { title: 'リスト「愛の夢 第3番」中間部', note: '静けさから激情への転換が、con fuoco の性格を際立たせます。' },
    ],
  },

  'scherzando': {
    lead: 'Scherzando は scherzare（ふざける、たわむれる）から来た語で、「戯れるように」。遊び心のある、軽妙な演奏を求める指示です。',
    sections: [
      {
        heading: '意外性が遊びを作る',
        body: '戯れの本質は、聴き手の予想を軽く裏切ることにあります。予想どおりに整った演奏は、上手でも scherzando には聞こえません。アクセントを意外な場所に置く、フレーズの終わりをあっさり切り上げる、間を一瞬だけ長く取る——こうした小さな逸脱が遊び心を生みます。ただし逸脱は制御されている必要があり、崩れとは区別されます。',
      },
      {
        heading: '軽さを保つ',
        body: 'scherzando では、音が重くなった瞬間に性格が失われます。とくに低音と拍の裏が重くなりがちです。伴奏を短く切り、余韻を残さないこと。ペダルや弓の使いすぎを避けること。音量を下げるのではなく、音の終わり方を軽くするのが要点です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '左手を短く切り、ペダルは最小限に。跳躍する伴奏は着地を軽くします。' },
      { name: '弦楽器', tip: '弓を短く、弦の近くで。スピッカート気味に扱うと軽妙さが出ます。' },
      { name: '管楽器', tip: 'タンギングを軽く速く。息を強めると途端に重くなります。' },
    ],
    confusions: [
      { term: 'Scherzo', slug: 'scherzo', note: '楽章の名称。scherzando は性格の指示で、どんな楽章にも書かれ得ます。' },
      { term: 'Giocoso', slug: 'giocoso', note: '「おどけて、楽しげに」。scherzando とほぼ同義に用いられます。' },
      { term: 'Grazioso', slug: 'grazioso', note: '「優雅に」。遊び心より品格が前に出ます。' },
      { term: 'Leggero', slug: 'leggero', note: '「軽やかに」。scherzando を実現する要素の一つです。' },
    ],
    works: [
      { title: 'ハイドン 弦楽四重奏曲 作品33「ロシア四重奏曲」', note: '予想を裏切る仕掛けが随所にあり、scherzando の見本になります。' },
      { title: 'プロコフィエフ「ピーターと狼」より 猫', note: 'クラリネットの scherzando が、忍び寄る猫を描きます。' },
    ],
  },

  'misterioso': {
    lead: 'Misterioso は「神秘的に、謎めいて」。mistero（神秘）から来た語で、何かが隠されているような雰囲気を求める指示です。',
    sections: [
      {
        heading: '隠すことで作る',
        body: '神秘的な印象は、情報を出しすぎないことで生まれます。すべてを明確に発音し、旋律を歌い上げてしまうと、謎はなくなります。輪郭をわずかにぼかす、音量を抑えて聴き手を引き寄せる、フレーズの行き先を早々に示さない——こうした「示さない」判断の積み重ねが misterioso を作ります。',
      },
      {
        heading: '静けさとの違い',
        body: 'misterioso は tranquillo のような穏やかさとは異なります。落ち着いてはおらず、むしろ何かが起こりそうな緊張を含んでいます。したがって、音量が小さくてもリズムの張りは保たれている必要があります。緩んだ pp では、神秘ではなくただ弱いだけになります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵を浅く速くし、ペダルをやや長めに使うと輪郭がぼやけます。ただし濁らせないこと。' },
      { name: '弦楽器', tip: 'ビブラートを抑え、弓を指板寄りに。芯を消すことで正体不明な音色になります。' },
      { name: '管楽器', tip: 'タンギングを柔らかく、音の入りを目立たせません。音量より発音の処理が効きます。' },
    ],
    confusions: [
      { term: 'Tranquillo', slug: 'tranquillo', note: '「穏やかに」。落ち着きを指し、misterioso の緊張とは異なります。' },
      { term: 'Sotto voce', slug: 'sotto-voce', note: '「声をひそめて」。misterioso を実現する具体的な手段になります。' },
      { term: 'Oscuro', slug: 'oscuro', note: '「暗く、不透明に」。misterioso より沈んだ、光の少ない性格です。' },
    ],
    works: [
      { title: 'ムソルグスキー「展覧会の絵」より「カタコンブ」', note: '地下墓所の場面。輪郭を示さない書法が神秘性を作ります。' },
      { title: 'ホルスト「惑星」より「海王星」', note: '曲の副題が「神秘をもたらす者」。輪郭の曖昧さが全編を貫きます。' },
    ],
  },

  'risoluto': {
    lead: 'Risoluto は risolvere（決断する）から来た語で、「決然と」。迷いのない、意志の明確な演奏を求める指示です。',
    sections: [
      {
        heading: '迷いのなさは発音に現れる',
        body: '決然とした印象を作るのは、音量よりも音の始まり方です。発音が明確で、遅れがなく、長さが正確であること。この3つが揃うと、聴き手は演奏者の意志を感じます。逆に、音の入りがわずかに曖昧だったり、テンポが微妙に揺れたりすると、どれだけ大きく弾いても決然としては聞こえません。',
      },
      {
        heading: 'ルバートを控える',
        body: 'risoluto の箇所では、テンポの揺れが迷いとして受け取られます。表情をつけたい気持ちを抑え、拍を正確に刻むほうが効果的です。表現は、リズムの正確さの中に音色の変化として置くのが安全です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '和音は全ての音を同時に。わずかなずれが迷いに聞こえます。' },
      { name: '弦楽器', tip: '弓を弦に置いてから引き始めます。空中からの着地は不確かさを生みます。' },
      { name: '管楽器', tip: 'タンギングを明確に、発音の遅れをなくします。息の準備を早めに行います。' },
    ],
    confusions: [
      { term: 'Deciso', slug: 'deciso', note: '「決然と」。ほぼ同義で用いられます。' },
      { term: 'Marcato', slug: 'marcato', note: '「際立たせて」。輪郭の指示で、risoluto の意志とは層が違います。' },
      { term: 'Energico', slug: 'energico', note: '「力強く」。エネルギーが主で、決断の含みは薄くなります。' },
      { term: 'Maestoso', slug: 'maestoso', note: '「堂々と」。威厳が主で、risoluto より速度が遅めに取られます。' },
    ],
    works: [
      { title: 'ショパン ポロネーズ 作品53「英雄」', note: '拍の正確さが、そのまま決然とした性格を作ります。' },
    ],
  },

  'semplice': {
    lead: 'Semplice は「単純に、飾り気なく」。表現を加えるのではなく、余分なものを取り去ることを求める、珍しいタイプの指示です。',
    sections: [
      {
        heading: '何もしないことの難しさ',
        body: 'semplice は「素直に弾け」という指示ですが、これは無表情に弾くことではありません。過剰なルバート、大げさな強弱、必要以上のビブラートといった装飾的な表現を外し、旋律とリズムそのものを聴かせるという意味です。何かを足すより取り去るほうが難しく、演奏者の音楽性が最も裸で現れる指示だと言えます。',
      },
      {
        heading: '基礎が露出する',
        body: '飾りを外すと、音程、リズム、音色の均一さといった基礎的な要素が直接聞こえます。したがって semplice の箇所は、技術的には易しく見えても実際には難所であることが多くなります。ゆっくり丁寧にさらい、一音ずつの質を揃える作業が、そのまま表現になります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: 'ペダルを控えめに。響きで飾らず、指の音だけで旋律を成立させます。' },
      { name: '弦楽器', tip: 'ビブラートを控え、弓を均一に。音程のわずかなずれが目立つため、丁寧な確認が必要です。' },
      { name: '管楽器', tip: 'ビブラートを外し、息を一定に。音の始まりと終わりの処理だけで表情を作ります。' },
    ],
    confusions: [
      { term: 'Dolce', slug: 'dolce', note: '「甘く」。音色を積極的に作る指示で、semplice の引き算とは方向が逆です。' },
      { term: 'Espressivo', slug: 'espressivo', note: '「表情豊かに」。変化を求める指示で、semplice と対になります。' },
      { term: 'Freddo', slug: 'freddo', note: '「冷たく、客観的に」。感情を排する点で semplice と方向が近いですが、より冷ややかです。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第30番 第3楽章 主題', note: 'Gesangvoll, mit innigster Empfindung。飾らない旋律が変奏の土台になります。' },
      { title: 'サティ「ジムノペディ 第1番」', note: '装飾を排した書法。何も足さないことが様式そのものです。' },
    ],
  },

  'pesante': {
    lead: 'Pesante は pesare（重さがある）から来た語で、「重々しく」。音量ではなく、一音ずつに重量を感じさせる指示です。',
    sections: [
      {
        heading: '重さは時間で作る',
        body: '重い印象を作る最大の要素は、音量ではなく時間です。一音ずつを十分な長さで保ち、拍の頭にわずかな抵抗を感じさせると、重量が生まれます。逆に音を短く切ると、どれだけ大きく弾いても軽く聞こえます。pesante の箇所でテンポがわずかに落ちるのは自然な結果ですが、意図的に遅くしすぎると停滞になります。',
      },
      {
        heading: '重さと硬さは違う',
        body: '力を入れて弾くと、重いのではなく硬い音になります。硬い音は響きが減るため、実際には軽く聞こえてしまいます。重さを作るのは、瞬間的な力ではなく持続的な支えです。腕の重さや息の圧を、音の始まりから終わりまで一定に保つことが、重量感につながります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '腕全体の重さを鍵盤に預け、底で支え続けます。叩くと硬くなり、重さは出ません。' },
      { name: '弦楽器', tip: '弓を弦に沈めたまま、ゆっくり大きく使います。圧をかけて速く動かすと潰れます。' },
      { name: '管楽器', tip: '音の入りから終わりまで息の圧を保ちます。減衰させると重さが失われます。' },
    ],
    confusions: [
      { term: 'Maestoso', slug: 'maestoso', note: '「堂々と」。威厳が主で、pesante より輝きがあります。' },
      { term: 'Grave', slug: 'grave', note: '「重々しく」。速度用語であり、pesante は性格の指示です。' },
      { term: 'Marcato', slug: 'marcato', note: '「際立たせて」。輪郭の指示で、重さの含みはありません。' },
      { term: 'Leggero', slug: 'leggero', note: '「軽やかに」。pesante と正反対の指示です。' },
    ],
    works: [
      { title: 'ムソルグスキー「展覧会の絵」より「ビドロ」', note: '牛車を描く楽章。重さの表現がそのまま主題になっています。' },
    ],
  },

  'leggero': {
    lead: 'Leggero は「軽やかに」。leggerezza（軽さ）から来た語で、重量を感じさせない、浮遊するような演奏を求めます。',
    sections: [
      {
        heading: '軽さは音量ではない',
        body: 'leggero を音量を下げることで作ろうとすると、単に弱い演奏になります。軽さを決めるのは、音の終わり方と拍の扱いです。音の終わりを引きずらず、余韻を残さないこと。拍の裏を長く保たないこと。この二つを守れば、f で弾いても軽く聞こえます。実際、速い楽章のフォルテで leggero という指定は珍しくありません。',
      },
      {
        heading: '低音を軽くする',
        body: '演奏が重く聞こえる原因は、多くの場合旋律ではなく低音側にあります。伴奏の和音が長く残っていたり、バスが強すぎたりすると、上でどれだけ軽く弾いても全体が沈みます。leggero の箇所では、まず低音のアーティキュレーションと音量を見直してください。合奏なら、低音パートだけで軽さを作れているかを確認します。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '鍵盤の底まで押し込まず、浅く速く。ペダルは踏み替えを増やし、残響を溜めません。' },
      { name: '弦楽器', tip: '弓を弦から浮かせ気味に、短く使います。圧を減らすことで軽さが出ます。' },
      { name: '管楽器', tip: 'タンギングを舌先だけで軽く。息の量を増やすと、速くても重くなります。' },
    ],
    confusions: [
      { term: 'Volante', slug: 'volante', note: '「飛ぶように」。軽さに加えて浮遊感が強調されます。' },
      { term: 'Pesante', slug: 'pesante', note: '「重々しく」。leggero と正反対の指示です。' },
      { term: 'Scherzando', slug: 'scherzando', note: '「戯れるように」。軽さは共通しますが、遊び心が加わります。' },
    ],
    works: [
      { title: 'メンデルスゾーン「無言歌集」より「紡ぎ歌」', note: '細かい音符を軽く保つことが、そのまま曲の性格になります。' },
      { title: 'ショパン 練習曲 作品25-2', note: '常に動き続ける音型を、重くせずに保つ技術が問われます。' },
    ],
  },

  'brillante': {
    lead: 'Brillante は brillare（輝く）から来た語で、「華やかに、輝かしく」。技巧的な部分に添えられ、明るく際立つ演奏を求めます。',
    sections: [
      {
        heading: '輝きは倍音から生まれる',
        body: '明るく輝く音は、高次の倍音が豊かに含まれた音です。音量を上げるだけでは輝きは増えません。発音を明確にし、音の立ち上がりを速くすることで倍音が増え、同じ音量でも際立って聞こえます。とくに合奏では、全員が音量を上げると濁って輝きが失われるため、音色で作るほうが確実です。',
      },
      {
        heading: '技巧が目的ではない',
        body: 'brillante は速いパッセージに添えられることが多いため、技術の誇示と受け取られがちです。しかし華やかさは、粒が揃い、音楽の方向が明確であるときに生まれます。速く弾けても粒が不揃いなら、輝きではなく慌ただしさになります。まず確実に揃う速さで仕上げ、そこから上げていくのが結果的に近道です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵を速く浅く。深く押し込むと音が太くなり、輝きより重さが出ます。' },
      { name: '弦楽器', tip: '弓を駒寄りで速く使います。圧より速度を優先すると明るい音色になります。' },
      { name: '管楽器', tip: '息のスピードを上げます。口の中を狭めるイメージで、音を前へ飛ばします。' },
    ],
    confusions: [
      { term: 'Con brio', slug: 'con-brio', note: '「活気をもって」。推進力が主で、brillante は音色の輝きが主です。' },
      { term: 'Bravura', slug: 'con-bravura', note: '「技巧の煌めき」。技術的な華やかさをより強く指します。' },
      { term: 'Leggero', slug: 'leggero', note: '「軽やかに」。輝きと軽さは併用されることが多い性質です。' },
    ],
    works: [
      { title: 'ショパン「華麗なる大円舞曲」作品18', note: 'Valse brillante。輝かしさが曲名に組み込まれています。' },
      { title: 'リスト「ラ・カンパネッラ」', note: '高音の粒立ちが、そのまま輝きとして聞こえます。' },
    ],
  },

  'sostenuto': {
    lead: 'Sostenuto は sostenere（支える）の過去分詞で、「支えられた」。音を保ち続けることを求める指示で、しばしばテンポをやや抑える意味も含みます。',
    sections: [
      {
        heading: '保つことと支えること',
        body: 'sostenuto は tenuto に似ていますが、対象が広い点が異なります。tenuto が個々の音の長さを指すのに対し、sostenuto は区間全体の性格を指します。その区間では、音が途切れず、常に支えられている状態が求められます。減衰する楽器では、次の音を減衰後の音量に合わせて入れることで、支えが続いているように聞こえます。',
      },
      {
        heading: 'テンポへの影響',
        body: 'Andante sostenuto や Adagio sostenuto のように速度用語に添えられる場合、多くはやや遅めに解釈されます。音を十分に保つには時間が必要だからです。ただし、sostenuto は「遅くせよ」という指示ではありません。テンポを落とさずに保てるなら、そのほうが音楽は停滞しません。まず保つことを優先し、その結果として必要なら速度を調整します。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '減衰を計算に入れ、次の音の音量を合わせます。中央ペダル（ソステヌート）は特定の音だけを保つ装置です。' },
      { name: '弦楽器', tip: '弓を最後まで使い切り、返しで音量が落ちないようにします。圧は一定に保ちます。' },
      { name: '管楽器', tip: '息の支えを音の終わりまで保ちます。フレーズ末で息を抜くと、支えが切れて聞こえます。' },
    ],
    confusions: [
      { term: 'Tenuto', slug: 'tenuto', note: '個々の音を保つ指示。sostenuto は区間全体の性格を指します。' },
      { term: 'Legato', slug: 'legato', note: 'なめらかにつなぐ指示。sostenuto は保つことが主眼です。' },
      { term: 'Ritenuto', slug: 'ritardando', note: 'テンポを抑える指示。sostenuto に含まれる速度の含意と近い働きをします。' },
      { term: 'Portato', slug: 'portato', note: 'つなげつつ分離する奏法。保ちながら区切る点で近い性質を持ちます。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第14番「月光」第1楽章', note: 'Adagio sostenuto。支え続けることが楽章全体の課題です。' },
      { title: 'ラフマニノフ 前奏曲 嬰ハ短調', note: '重い和音を保ち続ける支えが、曲の厚みを作ります。' },
    ],
  },

  'giocoso': {
    lead: 'Giocoso は gioco（遊び、ゲーム）から来た語で、「おどけて、楽しげに」。子どもの遊びのような、屈託のない明るさを求める指示です。',
    sections: [
      {
        heading: '明るさと軽さの両立',
        body: 'giocoso は、明るいだけでも軽いだけでも成立しません。音色は明るく、しかし音の扱いは軽く。この組み合わせが楽しげな印象を作ります。明るさは発音の鋭さと倍音で、軽さは音の終わり方で作ります。どちらか一方に偏ると、騒がしいか、あるいは弱々しいかのどちらかになります。',
      },
      {
        heading: 'リズムの弾みを作る',
        body: '楽しげな音楽には、リズムの弾みがあります。拍の頭に自然な重心があり、そこから次へ跳ねていく感覚です。均等に刻むと、正確でも楽しくは聞こえません。とくに3拍子系では、2拍目と3拍目の扱いを軽くすることで弾みが生まれます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '伴奏を短く切り、跳躍の着地を軽くします。ペダルは弾みを消すため最小限に。' },
      { name: '弦楽器', tip: 'スピッカート気味に弓を弾ませます。弓を長く使うと弾みが失われます。' },
      { name: '管楽器', tip: 'タンギングを短く明るく。息を強めると重くなるため、スピードで明るさを作ります。' },
    ],
    confusions: [
      { term: 'Scherzando', slug: 'scherzando', note: '「戯れるように」。ほぼ同義ですが、意外性の要素がより強くなります。' },
      { term: 'Allegro', slug: 'allegro', note: '「速く、陽気に」。速度用語であり、giocoso は性格の指示です。' },
      { term: 'Grazioso', slug: 'grazioso', note: '「優雅に」。品格が主で、giocoso の屈託のなさとは異なります。' },
      { term: 'Leggero', slug: 'leggero', note: '「軽やかに」。giocoso を実現する要素の一つです。' },
    ],
    works: [
      { title: 'モーツァルト「フィガロの結婚」序曲', note: '軽さと明るさが同時に成立している、giocoso の代表例です。' },
      { title: 'ビゼー「カルメン」より「闘牛士の歌」', note: '弾むリズムが、屈託のない明るさを作ります。' },
    ],
  },

  'dal-segno': {
    lead: 'Dal Segno（D.S.）は「記号から」。segno（セーニョ）と呼ばれる記号の位置へ戻って演奏し直す指示です。曲の冒頭へ戻る Da Capo とはここが違います。',
    sections: [
      {
        heading: 'セーニョ記号を先に探す',
        body: 'D.S. に出会ったら、楽譜のどこにセーニョ記号があるかを探して戻ります。多くの場合、曲の冒頭ではなく途中に置かれており、序奏を飛ばして本題から繰り返したい場合に使われます。演奏前にセーニョの位置に印を付けておくのが実務的です。本番で探しはじめると、間違いなく音楽が止まります。',
      },
      {
        heading: 'al Fine と al Coda',
        body: 'D.S. al Fine なら、戻ったあと Fine の位置で終わります。D.S. al Coda なら、戻ったあと「to Coda」の指示があるところからコーダへ跳びます。どちらの形かで終わり方がまったく変わるため、必ず確認してください。ポピュラー音楽の譜面では D.S. al Coda が非常に多く使われます。',
      },
    ],
    instruments: [
      { name: '共通', tip: 'セーニョ・to Coda・Coda・Fine の4か所に付箋や色を付けておくと、本番で迷いません。' },
      { name: '合奏', tip: '全パートで解釈が一致しているか、通し練習の前に口頭で確認しておくのが安全です。' },
    ],
    confusions: [
      { term: 'Da Capo', slug: 'da-capo', note: 'D.C.。冒頭へ戻ります。戻る位置が違うだけで、その後の手順は同じ構造です。' },
      { term: 'Segno', slug: 'segno', note: '戻る先を示す記号そのものです。' },
      { term: 'Coda', slug: 'coda', note: '結尾部。al Coda の指示で、ここへ跳びます。' },
      { term: 'Fine', slug: 'fine', note: '「終わり」。al Fine の指示で、ここが終止位置になります。' },
    ],
    works: [
      { title: 'モーツァルト メヌエット楽章', note: 'メヌエット—トリオ—メヌエットの構造で、戻り方の指示が構成そのものを作ります。' },
    ],
  },

  'attacca': {
    lead: 'Attacca は attaccare（つなぐ、始める）から来た語で、「切れ目なく次へ」。楽章や場面のあいだで間を置かずに続けることを指示します。',
    sections: [
      {
        heading: '間を置かないという設計',
        body: '通常、楽章のあいだには演奏を止め、聴衆が呼吸する時間があります。attacca はそれを禁じ、前の楽章の余韻が消える前に次を始めさせます。これによって二つの楽章が一つの流れとして結ばれます。作曲家がこの指示を書くのは、楽章の切れ目に生じる断絶を避けたい、あるいは緊張を持続させたいという明確な意図があるときです。',
      },
      {
        heading: '前の楽章の終わり方が変わる',
        body: 'attacca が付いていると、前の楽章の最後の音の扱いも変わります。余韻を十分に残して終える通常の終止ではなく、次へ渡すための切り方が必要になります。フェルマータが置かれていても、そこで音楽を完結させてはいけません。合奏では、指揮者が手を下ろさないことが合図になります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '次の楽章の冒頭のテンポと音量を、前の楽章を弾いている最中から準備しておきます。' },
      { name: 'ピアノ', tip: 'ペダルの扱いが鍵になります。前の楽章の響きを残すか切るかで、接続の印象が決まります。' },
      { name: '弦楽器', tip: '弓の位置を次の楽章の頭に合わせておきます。持ち替えや調弦の余裕はありません。' },
    ],
    confusions: [
      { term: 'Attaccare', slug: 'attaccare', note: '「休止なき開始」。attacca と同じ語源で、同様の意味を持ちます。' },
      { term: 'Segue', slug: 'segue', note: '「続けて」。次へ進むことを示し、attacca に近い働きをします。' },
      { term: 'Fermata', slug: 'fermata', note: '延ばす指示。attacca が付いている場合、そこで音楽を完結させないことが重要です。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第3楽章から第4楽章', note: '切れ目なく続くことで、暗から明への転換が一つの体験になります。' },
      { title: 'メンデルスゾーン ヴァイオリン協奏曲', note: '全3楽章が切れ目なく演奏され、曲全体が一続きの流れになります。' },
    ],
  },

  'fine': {
    lead: 'Fine は「終わり」。曲の途中に書かれ、Da Capo や Dal Segno で戻ってきたときに、ここで曲を終えることを示します。',
    sections: [
      {
        heading: '1回目は通過する',
        body: 'Fine は楽譜の途中に書かれますが、最初にそこを通るときは無視して先へ進みます。効力を持つのは、D.C. や D.S. で戻ってきた2回目です。この仕組みを理解していないと、1回目で曲を終わらせてしまうか、2回目に通り過ぎてしまいます。楽譜を読むときは、Fine と D.C./D.S. をセットで確認してください。',
      },
      {
        heading: '終わり方は自分で作る',
        body: 'Fine の位置は、もともと曲の途中であるため、終止らしい書かれ方をしていないことがあります。多くの場合、演奏者がここを終わりとして聞かせる必要があります。最後の音をやや長めに取る、テンポをわずかに緩める、音量を整えるといった処理で、聴き手に終わりが伝わります。ただしやりすぎると不自然になるため、控えめに。',
      },
    ],
    instruments: [
      { name: '共通', tip: 'Fine の直前の1〜2小節をどう扱うかを、練習の段階で決めておきます。' },
      { name: '合奏', tip: '最後の音の長さと切り方を全員で統一します。ばらけると終わった感じが出ません。' },
    ],
    confusions: [
      { term: 'Da Capo', slug: 'da-capo', note: 'D.C. al Fine の形で、Fine とセットで使われます。' },
      { term: 'Dal Segno', slug: 'dal-segno', note: 'D.S. al Fine の形でも同様に機能します。' },
      { term: 'Coda', slug: 'coda', note: '結尾部。Fine を使わず、コーダで終える設計もあります。' },
      { term: 'Fermata', slug: 'fermata', note: 'Fine の音の上に置かれることが多く、終止を明確にします。' },
    ],
    works: [
      { title: 'ハイドン 弦楽四重奏曲のメヌエット楽章', note: 'メヌエット—トリオ—メヌエットの D.C. al Fine が標準的な形です。' },
    ],
  },

  'cadenza': {
    lead: 'Cadenza は cadenza（終止）と同じ語で、協奏曲などで独奏者が伴奏なしに演奏する装飾的な部分。もともとは終止の直前に置かれた即興の場でした。',
    sections: [
      {
        heading: '終止を引き延ばす場所',
        body: 'カデンツァは、楽章の終わりに向かう終止形の途中で音楽を一度止め、独奏者が自由に演奏する部分です。和声的には、主和音の第二転回形の上で待機している状態が続き、カデンツァが終わると属和音から主和音へ進んで楽章が閉じます。つまりカデンツァは、一つの終止が長く引き延ばされた中に置かれた別世界です。',
      },
      {
        heading: '即興から作曲へ',
        body: 'モーツァルトの時代まで、カデンツァは独奏者が即興で演奏するものでした。楽譜にはフェルマータの付いた和音だけが書かれ、中身は演奏者に委ねられます。ベートーヴェンは自作のカデンツァを書き残し、以降は作曲家が書いたものを演奏するのが一般的になりました。現在でも、複数の作曲家によるカデンツァから選んだり、自作したりすることがあります。',
      },
      {
        heading: '素材は楽章から取る',
        body: '良いカデンツァは、その楽章に現れた主題や動機を素材として展開します。無関係な技巧の羅列ではなく、楽章を振り返り、別の角度から照らし直す部分だと考えると、選曲や自作の指針になります。長さも重要で、長すぎると楽章の均衡が崩れます。',
      },
    ],
    instruments: [
      { name: '独奏楽器', tip: '伴奏がないためテンポの基準がありません。自分の中に拍を持ち続けないと、形が失われます。' },
      { name: '合奏', tip: 'カデンツァの終わりのトリルが、オーケストラの再開の合図になります。全員がそこを聴いています。' },
    ],
    confusions: [
      { term: 'Cadence', slug: 'cadence', note: '終止形。カデンツァはこの終止の内部に置かれた自由な部分です。' },
      { term: 'Fermata', slug: 'fermata', note: 'カデンツァの開始位置は、多くの場合フェルマータで示されます。' },
      { term: 'Ad libitum', slug: 'ad-libitum', note: '「自由に」。カデンツァの自由さを表す指示として添えられることがあります。' },
      { term: 'Improvisation', slug: 'improvisation', note: '即興。カデンツァの本来の姿です。' },
    ],
    works: [
      { title: 'モーツァルト ピアノ協奏曲第20番 第1楽章', note: 'ベートーヴェンが書いたカデンツァが広く演奏されています。' },
      { title: 'ベートーヴェン ヴァイオリン協奏曲', note: '多数のカデンツァが存在し、どれを選ぶかが演奏解釈の一部になります。' },
    ],
  },

  'fugue': {
    lead: 'Fugue はラテン語 fuga（逃走）に由来し、日本語では遁走曲。一つの主題が各声部に次々と現れ、追いかけ合うように進む対位法の形式です。',
    sections: [
      {
        heading: '提示部の仕組み',
        body: 'フーガは、一つの声部が主題を単独で示すところから始まります。続いて別の声部が、主音ではなく属音の高さで同じ主題を答えます。これを応答と呼びます。主題を終えた声部は対旋律に移り、すべての声部が主題を一度ずつ提示するまでこれが繰り返されます。この部分を提示部と呼び、フーガの設計はここでほぼ決まります。',
      },
      {
        heading: '演奏で最も重要なこと',
        body: 'フーガの演奏では、いま主題がどの声部にあるかを聴き手に伝えることが最優先です。主題を担当する声部をわずかに前に出し、他を控えるだけで、複雑に聞こえていた音楽の構造が見えてきます。鍵盤楽器では同じ手が複数の声部を担当するため、指ごとに音量を変える技術が必要になります。まず各声部を単独で歌えるようにするのが近道です。',
      },
      {
        heading: '展開の技法',
        body: '提示部のあとは、主題を断片化したり、拡大・縮小したり、上下を反転させたりしながら展開します。複数の声部が主題を重ねて追いかけるストレッタは、緊張を高める代表的な技法です。楽譜を読むとき、主題がどこに何回現れるかを鉛筆で印を付けていくと、曲の設計が浮かび上がります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '同じ手の中で声部を弾き分けます。旋律側の指に重心を移し、他は指を寝かせて軽く。' },
      { name: '弦楽器', tip: 'アンサンブルでは、主題を持つ奏者が明確に前に出ます。他は音量だけでなくビブラートも控えます。' },
      { name: 'オルガン', tip: 'ストップの選択で声部を色分けできます。主題を持つ声部が聞こえる音色設計を先に決めます。' },
    ],
    confusions: [
      { term: 'Canon', slug: 'canon', note: '厳格に同じ旋律を追いかける形式。フーガはより自由で、展開部を持ちます。' },
      { term: 'Counterpoint', slug: 'counterpoint', note: '複数の旋律を組み合わせる技法。フーガはこの技法で書かれた形式です。' },
      { term: 'Subject', slug: 'subject', note: 'フーガの主題。すべての構造がここから生まれます。' },
      { term: 'Stretto', slug: 'stretto', note: '主題が重なり合って現れる技法。緊張の頂点で用いられます。' },
    ],
    works: [
      { title: 'バッハ「平均律クラヴィーア曲集」', note: '48曲のフーガが、あらゆる書法の実例になっています。' },
      { title: 'バッハ「トッカータとフーガ ニ短調」', note: 'オルガン曲。声部の分離が音色で示される好例です。' },
    ],
  },

  'scherzo': {
    lead: 'Scherzo はイタリア語で「冗談、たわむれ」。メヌエットに代わって交響曲やソナタの第3楽章に置かれるようになった、速い3拍子の楽章です。',
    sections: [
      {
        heading: 'メヌエットから scherzo へ',
        body: '古典派の交響曲では、第3楽章に宮廷舞曲のメヌエットが置かれるのが標準でした。ベートーヴェンはこれを大幅に速め、性格も一変させます。優雅な舞曲だった楽章が、鋭く、時に暴力的ですらある楽章になりました。「冗談」という語感は残っていますが、ショパンのスケルツォのように深刻な内容を持つ作品も生まれています。',
      },
      {
        heading: '1小節を1拍として感じる',
        body: 'スケルツォは3拍子ですが、テンポが速いため1拍ずつ数えると音楽が細切れになります。1小節を1つの拍として感じ、多くの場合3小節または4小節をひとまとまりとして捉えると、大きな流れが見えてきます。ベートーヴェンが「3小節が1つの単位」と指定した例もあり、この感じ方は作曲の設計に組み込まれています。',
      },
      {
        heading: 'トリオとの対比',
        body: 'スケルツォは、中間にトリオと呼ばれる対照的な部分を持ち、そのあとスケルツォに戻る三部形式が基本です。トリオは編成が薄く、性格も穏やかであることが多いため、この対比を明確にすることが演奏の要点になります。戻ってきたスケルツォを1回目と同じに弾くか変えるかも、解釈の分かれ目です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '速い3拍子では左手が重くなりがちです。1拍目以外を軽く扱うと推進力が出ます。' },
      { name: '弦楽器', tip: '弓を短く、跳ねるように。長い弓を使うと、テンポがあっても重く聞こえます。' },
      { name: '管楽器', tip: '1小節単位でブレスを設計します。1拍ごとに息を使うと3拍目で足りなくなります。' },
    ],
    confusions: [
      { term: 'Minuet', slug: 'minuet', note: 'スケルツォの前身にあたる宮廷舞曲。速度と性格が大きく異なります。' },
      { term: 'Scherzando', slug: 'scherzando', note: '「戯れるように」。楽章名ではなく、演奏の性格を示す指示です。' },
      { term: 'Giocoso', slug: 'giocoso', note: '「おどけて」。scherzo の語感に近い表情の指示です。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第9番 第2楽章', note: 'メヌエットから完全に離れた、激烈なスケルツォの代表例です。' },
      { title: 'ショパン スケルツォ第2番', note: '「冗談」の語からは遠い、劇的で規模の大きな独立作品です。' },
    ],
  },

  'minuet': {
    lead: 'Minuet（メヌエット）は17世紀フランスの宮廷舞曲に由来する、優雅な3拍子の楽曲。古典派では交響曲やソナタの第3楽章に置かれました。',
    sections: [
      {
        heading: '舞曲としての重心',
        body: 'メヌエットは実際に踊られていた舞曲であり、ステップの動きが音楽の重心を決めています。3拍子ですが、1拍ずつ均等に刻むのではなく、1拍目に重みを置き、2拍目と3拍目は軽く扱うのが基本です。また、2小節を1つの単位として感じると、踊りの周期に合います。この感覚があるかないかで、演奏の説得力が大きく変わります。',
      },
      {
        heading: 'メヌエットとトリオ',
        body: 'メヌエット楽章は、メヌエット—トリオ—メヌエットという三部形式を取ります。トリオはもともと3つの楽器で演奏されたことに由来し、編成が薄く、性格も対照的です。楽譜では最後に D.C. al Fine と書かれ、メヌエットに戻って Fine で終わります。戻ったメヌエットでは、原則として内部の反復は行いません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '3拍目から1拍目へ渡す感覚を持つと、踊りの周期が生まれます。3拍目を重くすると足が止まります。' },
      { name: '弦楽器', tip: '弓の配分を2小節単位で設計します。1小節ごとに区切ると舞曲になりません。' },
      { name: '管楽器', tip: 'フレーズの終わりを軽く収めます。息を残して終えるほうが優雅さが出ます。' },
    ],
    confusions: [
      { term: 'Scherzo', slug: 'scherzo', note: 'メヌエットに代わって置かれるようになった楽章。速度と性格が大きく異なります。' },
      { term: 'Grazioso', slug: 'grazioso', note: '「優雅に」。メヌエットの性格を表す指示としてよく併記されます。' },
      { term: 'Gavotte', slug: 'gavotte', note: '同じく宮廷舞曲ですが2拍子系で、開始位置も異なります。' },
      { term: 'Da Capo', slug: 'da-capo', note: 'トリオのあとメヌエットへ戻るために用いられます。' },
    ],
    works: [
      { title: 'ボッケリーニ「メヌエット」', note: '弦楽五重奏曲の楽章で、舞曲としての軽やかさが際立ちます。' },
      { title: 'モーツァルト 交響曲第40番 第3楽章', note: 'Menuetto。優雅さより緊張が前に出る、後期の例です。' },
    ],
  },

  'exposition': {
    lead: 'Exposition（提示部）は、ソナタ形式の第1部。主題が最初に示される場所で、ここで曲の素材と調の対立関係が提示されます。',
    sections: [
      {
        heading: '二つの主題と調の対立',
        body: '提示部では、まず主調で第1主題が示されます。続く推移部で調が移り、属調（短調の曲では平行長調）で第2主題が現れます。この「主調と別の調の対立」が、ソナタ形式全体の推進力になります。展開部で緊張が高まり、再現部で第2主題が主調に引き戻されて解決する——この構造を理解すると、長い楽章の聴き方が変わります。',
      },
      {
        heading: '性格の対比を作る',
        body: '多くの場合、第1主題は力強く、第2主題は歌謡的です。演奏でこの対比を作らないと、提示部が単調な素材の羅列になってしまいます。テンポを変えるのではなく、音色、アーティキュレーション、フレーズの作り方で性格を分けるのが基本です。推移部は次の主題へ向かう通路であり、ここで方向性を保つことも重要になります。',
      },
      {
        heading: '反復記号の扱い',
        body: '古典派のソナタ形式では、提示部に反復記号が付いているのが一般的です。現代の演奏では省略されることもありますが、繰り返すことで主題が聴き手に定着し、展開部の変化がより効果的になります。繰り返す場合、2回目をまったく同じに弾くか、装飾や音量を変えるかは解釈の余地があります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '第1主題と第2主題を、それぞれ単独で性格を決めてから通します。並べただけでは対比になりません。' },
      { name: 'ピアノ', tip: '推移部で音色を変えていくと、調が移っていることが聴き手に伝わります。' },
    ],
    confusions: [
      { term: 'Development', slug: 'development', note: '展開部。提示部の素材を分解し、転調を重ねて緊張を高めます。' },
      { term: 'Recapitulation', slug: 'recapitulation', note: '再現部。主題が主調に戻り、提示部の対立が解消されます。' },
      { term: 'Coda', slug: 'coda', note: '結尾部。再現部のあとに置かれ、曲を着地させます。' },
      { term: 'Subject', slug: 'subject', note: '主題。提示部で示される素材そのものです。' },
    ],
    works: [
      { title: 'モーツァルト ピアノソナタ第16番 ハ長調 K.545 第1楽章', note: '教科書的な提示部で、二つの主題と調の関係が明快です。' },
      { title: 'ベートーヴェン 交響曲第5番 第1楽章', note: '短い動機が第1主題を作り、第2主題との性格差が際立ちます。' },
    ],
  },

  'development': {
    lead: 'Development（展開部）は、ソナタ形式の第2部。提示部で示された素材を分解・変形し、転調を重ねて緊張を高めていく部分です。',
    sections: [
      {
        heading: '素材を壊して組み立て直す',
        body: '展開部の基本的な手法は、主題をそのまま繰り返すのではなく、断片に分解して扱うことです。動機の一部だけを取り出し、別の調で繰り返し、他の素材と組み合わせる。ベートーヴェンの交響曲第5番では、冒頭の4音がこの過程で楽章全体を支配します。演奏では、いまどの素材が扱われているかを意識すると、展開部が意味を持ちはじめます。',
      },
      {
        heading: '調の不安定さが緊張を作る',
        body: '展開部では次々と転調が起こり、どの調にも長く留まりません。この不安定さが、再現部で主調に帰ってきたときの安堵を生みます。演奏では、この不安定さを消してはいけません。各転調の切り替わりを音色や音量の変化として示すと、聴き手が旅の途中にいることを感じられます。最も遠い調へ到達する瞬間が、多くの場合この部分の頂点です。',
      },
    ],
    instruments: [
      { name: '共通', tip: 'どの調へ行き、どこが最も遠いかを楽譜に書き込んでおくと、音量の設計がしやすくなります。' },
      { name: 'ピアノ', tip: '転調のたびにペダルと音色を切り替えると、調の移動が耳に見えるようになります。' },
      { name: '合奏', tip: '素材が声部間を移動します。受け渡しの瞬間に音色をそろえると、線が途切れません。' },
    ],
    confusions: [
      { term: 'Exposition', slug: 'exposition', note: '提示部。展開部が扱う素材はすべてここで示されています。' },
      { term: 'Recapitulation', slug: 'recapitulation', note: '再現部。展開部で高まった緊張がここで解決します。' },
      { term: 'Modulation', slug: 'modulation', note: '転調。展開部の推進力そのものです。' },
      { term: 'Sequence', slug: 'sequence', note: '同じ音型を別の高さで繰り返す技法。展開部で頻繁に用いられます。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第3番「英雄」第1楽章', note: '当時としては異例に長い展開部が、この形式の可能性を押し広げました。' },
      { title: 'モーツァルト 交響曲第41番「ジュピター」第4楽章', note: '対位法的な展開が、素材の組み替えの見本になっています。' },
    ],
  },

  'recapitulation': {
    lead: 'Recapitulation（再現部）は、ソナタ形式の第3部。提示部の主題が戻ってきますが、決定的な違いとして第2主題も主調で現れます。',
    sections: [
      {
        heading: '調の対立が解消される場所',
        body: '提示部では第1主題が主調、第2主題が別の調にあり、対立していました。再現部ではこの第2主題が主調に引き戻されます。これがソナタ形式の核心です。単なる繰り返しではなく、提示部で開かれた問いがここで閉じられる。演奏でこの意味を意識すると、再現部が「もう一度同じところ」ではなくなります。',
      },
      {
        heading: '同じに聞こえてはいけない',
        body: '再現部は提示部とよく似た音符が並びますが、聴き手はすでに展開部を経験しています。同じように弾くと、後退したように聞こえてしまいます。展開部で何が起きたかを踏まえ、音色や重みを変えて弾くことで、帰還としての意味が生まれます。とくに第1主題の再登場は、その楽章で最も期待された瞬間の一つです。',
      },
      {
        heading: '推移部の書き換えに注目',
        body: '提示部の推移部は調を移すためのものでしたが、再現部では調を移す必要がないため、作曲家は書き換えています。ここを見比べると、作曲家が構造をどう考えていたかが分かります。演奏上も、書き換えられた箇所は意図的な変更なので、提示部と同じ扱いにしないよう注意が必要です。',
      },
    ],
    instruments: [
      { name: '共通', tip: '提示部と再現部の楽譜を並べ、違う箇所に印を付けてから練習すると、扱いの差が明確になります。' },
      { name: 'ピアノ', tip: '再現部の第1主題は、展開部を経た重みを持たせます。音量ではなく音色の厚みで作ります。' },
    ],
    confusions: [
      { term: 'Exposition', slug: 'exposition', note: '提示部。再現部と比較することで、構造上の意味が見えてきます。' },
      { term: 'Development', slug: 'development', note: '展開部。ここで高まった緊張が再現部で解決します。' },
      { term: 'Coda', slug: 'coda', note: '結尾部。再現部のあとに置かれ、決着をさらに補強します。' },
      { term: 'Tonic', slug: 'tonic', note: '主音。再現部ですべてが主調に収束することが、この部分の要件です。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第1楽章', note: '再現部でオーボエの短いカデンツァが挿入され、単なる反復でないことを示します。' },
      { title: 'モーツァルト ピアノソナタ第16番 ハ長調 K.545 第1楽章', note: '再現部が下属調で始まる変則例として知られています。' },
    ],
  },

  'pianissimo': {
    lead: 'Pianissimo（pp）は「とても弱く」。piano の最上級ですが、実際に求められているのは音量の小ささではなく、聴き手が身を乗り出すような緊張感です。',
    sections: [
      {
        heading: '小さくするより、遠くする',
        body: 'pp を音量だけで作ろうとすると、音が痩せて客席に届かなくなります。有効なのは「小さい音」ではなく「遠くから聞こえる音」を目指すことです。遠くの音は、音量が小さくても芯が残り、輪郭がぼやけています。楽器を鳴らす量は保ったまま、響きの立ち上がりを柔らかくすると、この質感に近づきます。',
      },
      {
        heading: 'ホールでは思ったより聞こえない',
        body: '練習室で十分に聞こえる pp が、ホールでは消えてしまうことがよくあります。逆に、客席で聴くと想像以上に響いていることもあります。可能なら本番の会場で誰かに客席から聴いてもらい、どこまで落とせるかを確認してください。それができない場合は、録音を少し離れた位置から取ると近い判断ができます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵の速度は落としても、深さは最後まで保ちます。浅く弾くと音が出ないか、出ても雑音が混じります。' },
      { name: '弦楽器', tip: '弓を駒寄りに保ったまま圧を抜くと、小さくても芯が残ります。指板寄りに逃げると音が消えます。' },
      { name: '管楽器', tip: '息の量を減らしても、スピードは落とさないこと。速度が落ちるとピッチが下がり、発音も不安定になります。' },
    ],
    confusions: [
      { term: 'Piano', slug: 'piano', note: '「弱く」。pp はその上位ですが、単に半分の音量という意味ではありません。' },
      { term: 'Pianississimo', slug: 'pianississimo', note: 'ppp。物理的な限界としての弱音で、静寂そのものが表現の一部になります。' },
      { term: 'Sotto voce', slug: 'sotto-voce', note: '「声をひそめて」。音量ではなく話し方の指示で、pp とは求めるものが違います。' },
      { term: 'Morendo', slug: 'morendo', note: '「絶え入るように」。pp が状態なら、morendo はそこへ向かう過程です。' },
    ],
    works: [
      { title: 'チャイコフスキー 交響曲第6番「悲愴」第4楽章', note: '終結の pp が、音量ではなく消えゆく時間の長さで作られています。' },
      { title: 'シューベルト 弦楽五重奏曲 ハ長調 第2楽章', note: '長い pp が続くため、痩せさせずに保ち続ける技術が問われます。' },
    ],
  },

  'fortissimo': {
    lead: 'Fortissimo（ff）は「とても強く」。ただし ff の質は音量ではなく、響きの厚みと広がりで決まります。うるさい ff と、輝かしい ff はまったく別のものです。',
    sections: [
      {
        heading: '限界を先に決めておく',
        body: '曲の中で最も強い箇所がどこかを先に決めないと、途中で音量の上限に達してしまい、クライマックスで打つ手がなくなります。まず楽譜全体を眺めて最大の f がどこかを特定し、そこを100とした配分で各所の ff を決めてください。ff が複数ある曲では、すべてを同じ音量で弾く必要はありません。',
      },
      {
        heading: '厚みは音量ではなく倍音で作る',
        body: '同じ音量でも、倍音が豊かな音は圧倒的に大きく聞こえます。逆に押し付けた音は倍音が減り、音量計の数値が高くても迫力が出ません。ff がうまくいかないときは、まず力を抜いて楽器がよく鳴る状態を作り、そこから量を増やす順序に変えてみてください。多くの場合、力を抜いたほうが大きく聞こえます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '腕全体の重さを鍵盤に伝えます。手首だけで叩くと打鍵音ばかりが目立ち、響きは増えません。' },
      { name: '弦楽器', tip: '弓速を最大にしてから圧を足します。順序が逆だと弦が押さえ込まれ、鳴りが止まります。' },
      { name: '管楽器', tip: '口の中と喉を広く保ちます。息だけ強めると音が割れ、ピッチも上ずります。' },
    ],
    confusions: [
      { term: 'Forte', slug: 'forte', note: '「強く」。ff はその上位ですが、単純な倍ではなく、響きの質そのものが変わります。' },
      { term: 'Fortississimo', slug: 'fortississimo', note: 'fff。極限の音量で、爆発的な感情の頂点に用いられます。' },
      { term: 'Sforzando', slug: 'sforzando', note: '一音だけを突出させる指示。継続する ff とは別物です。' },
      { term: 'Pesante', slug: 'pesante', note: '「重々しく」。音量ではなく重さの指示で、ff と併記されることがあります。' },
    ],
    works: [
      { title: 'マーラー 交響曲第2番「復活」終楽章', note: '巨大な ff が、音量ではなく編成の厚みで作られています。' },
      { title: 'ベートーヴェン 交響曲第9番 第4楽章', note: '複数ある ff の差を弾き分けられるかが、曲の構成感を左右します。' },
    ],
  },

  'diminuendo': {
    lead: 'Diminuendo（dim.）は「だんだん弱く」。diminuire（減らす）から来た語で、crescendo と対になります。音を減らしていく過程を指す言葉です。',
    sections: [
      {
        heading: '減らすのは音量だけではない',
        body: 'dim. を音量の低下だけで作ると、単に聞こえなくなっていくだけで、表現になりません。同時に音色を落ち着かせ、アーティキュレーションを丸くしていくと、音楽が静かに閉じていく印象が生まれます。逆に、緊張を保ったまま音量だけ落としたい場面もあります。何のための dim. かを決めてから配分を考えてください。',
      },
      {
        heading: '最後まで密度を保つ',
        body: 'dim. の終盤で音が痩せてしまうのは、よくある失敗です。音量が下がっても響きの密度は保つ必要があります。とくに終わりが p や pp の場合、そこが「聞こえない音」になってしまうと、そこまでの過程がすべて無駄になります。到達点の音量で単独で鳴らしてみて、それが十分に鳴っているかを先に確認しておくと安全です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '減衰する楽器のため、放っておいても音は小さくなります。dim. は次の音との関係で作るものだと考えてください。' },
      { name: '弦楽器', tip: '圧を抜きながら弓速も落とすと消えてしまいます。弓速は保ち、圧だけを減らすと密度が残ります。' },
      { name: '管楽器', tip: '息を減らすとピッチが下がります。dim. の終わりで音程が下がっていないか確認してください。' },
    ],
    confusions: [
      { term: 'Decrescendo', slug: 'decrescendo', note: 'ほぼ同義。厳密には decresc. が音量、dim. が音の存在感の減少とされることもありますが、実用上は同じに扱われます。' },
      { term: 'Calando', slug: 'calando', note: '弱めながら遅くもする指示。音量だけでなく速度も含みます。' },
      { term: 'Morendo', slug: 'morendo', note: '「絶え入るように」。dim. の行き着く先で、消滅そのものを表します。' },
      { term: 'Smorzando', slug: 'smorzando', note: '「消えゆくように」。勢いを静めていくニュアンスを含みます。' },
    ],
    works: [
      { title: 'ドビュッシー「月の光」', note: '終結部の長い dim. が、密度を保ったまま静寂へ着地します。' },
      { title: 'シベリウス 交響曲第5番 第1楽章', note: '長い区間をかけた dim. の設計が、そのまま構造になっています。' },
    ],
  },

  'largo': {
    lead: 'Largo は「幅広く」。イタリア語の largo は「広い」を意味し、時間の遅さより空間の広がりを指す言葉です。',
    sections: [
      {
        heading: '遅さではなく広さ',
        body: '速度用語の中で最も遅い部類に入りますが、largo が本来求めているのは「広さ」です。一つ一つの音に十分な空間を与え、響きが減衰しきる前に次へ進まない。この扱いが、単に遅い演奏と largo を分けます。テンポの数字を守っても、音が詰まって聞こえるなら largo にはなっていません。',
      },
      {
        heading: '長い音の中に進行を作る',
        body: '遅い曲では、長い音符の途中で時間の感覚が失われがちです。頭の中で拍を細かく分割し、その音がどこへ向かっているかを意識し続ける必要があります。たとえば4拍伸ばす音なら、4拍目に次の音へ渡す準備が始まっている、という設計にすると、音楽が止まりません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '減衰した後の音量に次の音を合わせます。同じ強さで弾くと、旋律の線が段差になります。' },
      { name: '弦楽器', tip: '弓を遅く動かすため、圧の管理が難しくなります。弓元と弓先で圧を変え続ける必要があります。' },
      { name: '管楽器', tip: 'ロングトーンが続くため、ブレスの位置を音楽の切れ目と一致させる設計が不可欠です。' },
    ],
    confusions: [
      { term: 'Larghetto', slug: 'larghetto', note: 'Largo よりやや速く。重厚さを保ちつつ、わずかに動きが加わります。' },
      { term: 'Larghissimo', slug: 'larghissimo', note: '極めて幅広く。全用語の中で最も遅い速度です。' },
      { term: 'Adagio', slug: 'adagio', note: 'ゆるやかに、くつろいで。遅さの質が「広さ」ではなく「緊張の解け」にあります。' },
      { term: 'Lento', slug: 'lento', note: '遅さそのものを指します。largo のような空間の含みはありません。' },
    ],
    works: [
      { title: 'ドヴォルザーク 交響曲第9番「新世界より」第2楽章', note: 'Largo。広大な風景を思わせる空間の作り方が、この用語の本質を示しています。' },
      { title: 'ヘンデル「オンブラ・マイ・フ」', note: '「ヘンデルのラルゴ」として知られる曲。歌の呼吸が広さを作ります。' },
    ],
  },

  'lento': {
    lead: 'Lento は「遅く」。largo が空間の広がりを、adagio がくつろぎを指すのに対し、lento は速度としての遅さそのものを指します。',
    sections: [
      {
        heading: '性格を持たない遅さ',
        body: 'lento は、他の遅い速度用語に比べて性格の色づけが少ない言葉です。largo の荘重さや adagio のくつろぎといった含みを持たないため、その曲がどんな遅さなのかは、他の指示や音楽そのものから読み取る必要があります。lento に形容詞が添えられている場合（lento e mesto など）、性格を決めているのはそちらの語です。',
      },
      {
        heading: '遅い曲ほど拍の芯が要る',
        body: '遅さの性格が指定されていないぶん、演奏者が音楽をどう組み立てるかが直接現れます。多くの場合、問題になるのは拍の芯が失われることです。テンポが遅いと1拍が長くなり、その中で時間感覚が曖昧になります。細分して数えること、そして小節ごとにどこへ向かうかを決めておくことで、遅くても停滞しない演奏になります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: 'ペダルが濁りやすくなります。和声が変わるたびに踏み替えているか、遅いテンポでこそ確認してください。' },
      { name: '弦楽器', tip: 'ビブラートが速いままだと、テンポとの落差で落ち着きません。テンポに合わせて幅と速さを調整します。' },
      { name: '管楽器', tip: '長い音の途中で息の支えが緩むと、音程が下がります。最後まで支えを保つ意識が必要です。' },
    ],
    confusions: [
      { term: 'Largo', slug: 'largo', note: '「幅広く」。同程度の遅さですが、空間的な広がりを含意します。' },
      { term: 'Adagio', slug: 'adagio', note: '「くつろいで」。緊張の解けた状態を指し、lento より性格が具体的です。' },
      { term: 'Grave', slug: 'grave', note: '「重々しく」。深刻さを伴う遅さで、lento に重みが加わった形です。' },
    ],
    works: [
      { title: 'ショパン 幻想即興曲 中間部', note: 'Largo と記されることが多い部分ですが、遅さの中に旋律の進行を保つ課題は共通です。' },
      { title: 'ラフマニノフ 前奏曲 嬰ハ短調 作品3-2', note: 'Lento。重い和音の連続の中で、拍の芯を保つ力が問われます。' },
    ],
  },

  'presto': {
    lead: 'Presto は「きわめて速く」。イタリア語の日常語では「すぐに、早く」を意味し、時間的な切迫を含んだ言葉です。',
    sections: [
      {
        heading: '弾ける速さが上限',
        body: 'presto の目安は ♩＝168 以上とされますが、実際の上限を決めるのは楽譜のいちばん細かい音符です。その音符が粒立って聞こえる速さを超えると、速いのではなく雑に聞こえます。まず最も難しい箇所を取り出し、そこが崩れない速さを測ってください。その速さが、その曲におけるあなたの presto です。曲全体をそのテンポで通せることが前提になります。',
      },
      {
        heading: '拍の単位を大きく取る',
        body: '速い楽章を1拍ずつ数えていると、頭が追いつかず、演奏が細切れになります。2拍または1小節をひとまとまりとして感じると、同じテンポでも余裕が生まれ、フレーズが見えてきます。指揮者が速い楽章を振り分けずに1つで振るのも同じ理由です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '指を速く動かすより、余計な動きを減らすほうが効果的です。鍵盤から指を離しすぎていないか確認してください。' },
      { name: '弦楽器', tip: '弓を短く、弦の近くで。大きく使うと戻す時間が足りなくなります。' },
      { name: '管楽器', tip: 'ダブルタンギングが必要になる速度域です。シングルで無理に押し切ると音が潰れます。' },
    ],
    confusions: [
      { term: 'Prestissimo', slug: 'prestissimo', note: '可能な限り速く。presto のさらに上で、終曲などで用いられます。' },
      { term: 'Vivace', slug: 'vivace', note: '「生き生きと」。presto より遅い場合もありますが、鮮明さが前面に出ます。' },
      { term: 'Allegro', slug: 'allegro', note: '「速く、陽気に」。presto の切迫感に対し、快活さが主です。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第7番 第4楽章', note: 'Allegro con brio ですが、presto に迫る速度で演奏されることが多く、細部の粒立ちが試されます。' },
      { title: 'メンデルスゾーン「真夏の夜の夢」序曲', note: '速い音符の粒をそろえることが、そのまま曲の性格になります。' },
    ],
  },

  'vivace': {
    lead: 'Vivace は「生き生きと」。ラテン語 vivax（生命力に満ちた）に由来し、速度そのものより運動の鮮明さを指す言葉です。',
    sections: [
      {
        heading: '速さではなく鮮明さ',
        body: 'vivace は Allegro より速いとされることが多いものの、実際に区別を作っているのは速度ではありません。音の輪郭がはっきりし、動きに切れがある状態が vivace です。同じテンポでも、発音を鋭くしリズムの角を立てれば vivace に聞こえ、丸めれば allegro に聞こえます。テンポを上げる前に、まず発音を見直すほうが確実です。',
      },
      {
        heading: '軽さと鋭さの両立',
        body: 'vivace で重くなる原因は、たいてい低音側にあります。旋律が軽やかでも、伴奏やバスが重いと全体が沈みます。低音のアーティキュレーションを短めに取り、音量も控えると、上が自然に浮き上がります。合奏では、まず低音パートだけで vivace を成立させてから旋律を乗せると、性格が定まります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '左手の伴奏を短めに切ります。ペダルを踏みすぎると、どれだけ速くても重く聞こえます。' },
      { name: '弦楽器', tip: '弓を弦から離しすぎない範囲で軽く弾ませます。圧を減らすことで鋭さが出ます。' },
      { name: '管楽器', tip: 'タンギングを軽く速く。息を強くすると鋭さではなく硬さになります。' },
    ],
    confusions: [
      { term: 'Vivo', slug: 'vivo', note: 'ほぼ同義ですが、より直感的で鋭い運動性を求める場面で使われます。' },
      { term: 'Allegro', slug: 'allegro', note: '「速く、陽気に」。快活さが主で、vivace ほどの鋭さは含みません。' },
      { term: 'Presto', slug: 'presto', note: 'きわめて速く。速度が主眼で、vivace のような性格の指定は薄くなります。' },
      { term: 'Con brio', slug: 'con-brio', note: '「活気をもって」。vivace と併記され、推進力を加えます。' },
    ],
    works: [
      { title: 'ヴィヴァルディ「四季」より「春」第1楽章', note: 'Allegro ですが、鮮明な発音が vivace 的な性格を作っています。' },
      { title: 'ベートーヴェン 交響曲第7番 第1楽章', note: 'Vivace。リズムの角が立っていることが、この楽章の推進力の源です。' },
    ],
  },

  'moderato': {
    lead: 'Moderato は「中くらいの速さで」。moderare（節度を保つ）から来た語で、速すぎず遅すぎない、節度ある状態を指します。',
    sections: [
      {
        heading: '単独か、組み合わせか',
        body: 'moderato は単独で使われることもありますが、実際には Allegro moderato、Andante moderato のように他の速度用語に添えられる形が多く見られます。この場合の moderato は「行きすぎないように」という抑制の指示です。Allegro moderato は「速く、ただし節度をもって」であり、Allegro より遅めに解釈します。',
      },
      {
        heading: '中立だからこそ性格を作る必要がある',
        body: '最も中立的な速度であるため、moderato と書かれただけでは音楽の性格が決まりません。そのぶん、拍の重心の置き方、アーティキュレーション、フレーズの作り方といった要素が演奏の印象を決定します。テンポを決めて満足せず、この曲がどんな性格なのかを別途決める必要がある、と考えてください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '中庸なテンポでは指の癖が出やすくなります。音の粒がそろっているか、ゆっくり確認してから戻してください。' },
      { name: '弦楽器', tip: '弓の配分に余裕があるぶん、無自覚に使いすぎがちです。フレーズ単位で配分を決めておきます。' },
      { name: '管楽器', tip: 'ブレスの余裕があるため、かえって息継ぎの位置が曖昧になります。音楽的な切れ目で取ることを意識します。' },
    ],
    confusions: [
      { term: 'Andante', slug: 'andante', note: '歩くような速さ。moderato より具体的なイメージを持ちます。' },
      { term: 'Allegretto', slug: 'allegretto', note: 'やや速く、軽やかに。moderato より動きがあります。' },
      { term: 'Tempo giusto', slug: 'tempo-giusto', note: '「正確なテンポで」。中庸さではなく、揺れないことを求めます。' },
    ],
    works: [
      { title: 'シューベルト 即興曲 作品90-3', note: 'Andante の指定ですが、中庸なテンポで性格をどう作るかという課題が共通します。' },
      { title: 'ベートーヴェン ピアノソナタ第14番「月光」第1楽章', note: 'Adagio sostenuto。速度用語に添えられた語が性格を決める例です。' },
    ],
  },

  'allegretto': {
    lead: 'Allegretto は Allegro に「小さい」を意味する縮小辞が付いた形。「やや速く」と訳されますが、実際の違いは速度より性格にあります。',
    sections: [
      {
        heading: '控えめな Allegro',
        body: 'イタリア語の -etto は「小さな、かわいらしい」を意味する縮小辞です。したがって allegretto は「小さな allegro」、つまり allegro の陽気さを少し控えめにした状態を指します。速度としては allegro よりやや遅い程度ですが、より重要なのは、勢いに任せず軽やかさを保つという性格の違いです。',
      },
      {
        heading: '軽さは音量ではなく発音で',
        body: 'allegretto を軽く聞かせようとして音量を下げると、単に弱い演奏になります。軽さを作るのは発音です。音の始まりを短く、終わりを引きずらないようにすると、同じ音量でも軽くなります。とくに拍の裏の音を長く残さないことが、軽快さを保つ鍵になります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '伴奏の和音を短く切ります。踏みっぱなしのペダルは、allegretto の軽さを最も損ないます。' },
      { name: '弦楽器', tip: '弓を短く、圧を軽く。弓の中央付近で細かく動かすと軽快さが出ます。' },
      { name: '管楽器', tip: 'タンギングは軽く。息の量を増やすと途端に allegro のような勢いが出てしまいます。' },
    ],
    confusions: [
      { term: 'Allegro', slug: 'allegro', note: 'より速く、より陽気に。allegretto は勢いを一段抑えた形です。' },
      { term: 'Andantino', slug: 'andantino', note: 'Andante の縮小形。allegretto と同じ造語法ですが、速い/遅いの解釈が割れる語です。' },
      { term: 'Moderato', slug: 'moderato', note: '中庸な速度。allegretto ほどの軽やかさは含みません。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第7番 第2楽章', note: 'Allegretto。速すぎず、しかし歩みを止めない扱いが、この楽章の性格を決めます。' },
      { title: 'ブラームス 交響曲第3番 第3楽章', note: 'Poco allegretto。抑制された軽さの中に憂いが同居します。' },
    ],
  },

  'meno-mosso': {
    lead: 'Meno mosso は「より少なく動いて」。meno（より少なく）＋ mosso（動いた）で、その地点から一段遅いテンポに切り替える指示です。',
    sections: [
      {
        heading: '段階的ではなく、切り替え',
        body: 'ritardando が徐々に遅くしていく過程を指すのに対し、meno mosso は指定された地点から新しいテンポに切り替わります。したがって、その手前で遅くしはじめる必要はありません。むしろ直前までテンポを保ち、切り替えを明確にしたほうが、作曲家の意図した対比が出ます。切り替え後のテンポを事前に決めておくことが不可欠です。',
      },
      {
        heading: 'どのくらい遅くするか',
        body: '数値の指定はないため、演奏者が決めます。目安として、聴き手が「テンポが変わった」と明確に分かる程度の差が必要です。差が小さすぎると、単にもたついたように聞こえます。逆に大きくしすぎると、別の曲が始まったように断絶します。前後の音楽的な関係を見て、対比か連続かを判断してください。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '切り替えの1拍前で心の中のテンポを新しいほうへ切り替えておくと、頭の音から安定します。' },
      { name: '弦楽器', tip: 'テンポが変わると弓の配分も変わります。切り替え後の配分を別途決めておいてください。' },
      { name: '管楽器', tip: '遅くなるとブレスが持たなくなる場合があります。切り替え直前にブレスを取る設計も検討します。' },
    ],
    confusions: [
      { term: 'Più mosso', slug: 'più-mosso', note: '逆に「より動いて」。一段速いテンポへ切り替えます。' },
      { term: 'Ritardando', slug: 'ritardando', note: '徐々に遅くする過程。meno mosso は段階を踏まない切り替えです。' },
      { term: 'A tempo', slug: 'a-tempo', note: '元の速さへ戻す指示。meno mosso のあと a tempo が来る場合、戻る先は meno mosso 以前のテンポです。' },
    ],
    works: [
      { title: 'ショパン 幻想即興曲', note: '中間部への切り替えが、テンポの対比そのものを構造にしています。' },
      { title: 'チャイコフスキー「くるみ割り人形」より「花のワルツ」', note: '場面ごとのテンポの切り替えが、踊りの性格を描き分けます。' },
    ],
  },

  'sforzando': {
    lead: 'Sforzando（sf, sfz）は「力を込めて」。sforzare（強いる、無理をさせる）から来た語で、その音だけを突然際立たせる指示です。',
    sections: [
      {
        heading: '周囲との差でしか成立しない',
        body: 'sf は絶対的な音量ではなく、直前の音量からどれだけ跳ね上がるかで決まります。p の中の sf と、f の中の sf はまったく違う音量です。したがって、sf を効かせたければ、その直前を抑えることが先決になります。すでに大きく弾いている場所で sf だけ強くしようとしても、差が出ないため効果が生まれません。',
      },
      {
        heading: '一音だけか、その後も続くのか',
        body: 'sf は原則としてその音だけの指示で、次の音からは元の音量に戻ります。ここを間違えて、sf 以降ずっと大きいまま弾いてしまう例が非常に多く見られます。楽譜に sf が書かれていたら、その音のあと何に戻るのかを必ず確認してください。戻り先が書かれていない場合は、sf の直前の強弱が続いていると考えます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵を速くすることで作ります。深く押し込むと音量より打鍵音が目立ち、鋭さが出ません。' },
      { name: '弦楽器', tip: '弓を弦に置いた状態から瞬間的に加速します。上から落とすと雑音が混じります。' },
      { name: '管楽器', tip: '舌を強くするのではなく、息の圧を一瞬だけ上げます。タンギングで作ると音が潰れます。' },
    ],
    confusions: [
      { term: 'Rinforzando', slug: 'rinforzando', note: '一音ではなくフレーズ全体を補強する指示。sf より持続的です。' },
      { term: 'Forzato', slug: 'forzato', note: 'ほぼ同義で用いられますが、sf よりやや穏やかな強調とされることがあります。' },
      { term: 'Accento', slug: 'accento', note: 'アクセント。拍の中での位置づけを示す記号で、sf ほどの突出は求めません。' },
      { term: 'Forte Piano', slug: 'forte-piano', note: 'fp。強く出した直後にすぐ弱くする指示で、sf の後に何が来るかが明示された形です。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第3番「英雄」第1楽章', note: '拍子の重心をずらす位置に sf が置かれ、リズムそのものを揺さぶります。' },
      { title: 'ハイドン 交響曲第94番「驚愕」第2楽章', note: '静けさの中に一発だけ置かれた強打。sf が差でしか成立しないことの好例です。' },
    ],
  },

  'accelerando': {
    lead: 'Accelerando（accel.）は「だんだん速く」。ritardando と対になる指示で、設計の考え方も同じです。終点を決めてから、そこへ向けて配分します。',
    sections: [
      {
        heading: '速くするのではなく、密度を上げる',
        body: 'accel. で最も起きやすいのは、途中で走りすぎて収拾がつかなくなることです。テンポの数字だけを追うと、リズムが雑になり、細かい音符が潰れます。実際に聴き手が加速を感じるのは、拍が詰まっていくことよりも、音楽の密度が増していくことです。したがって、テンポを上げつつも一音ずつの輪郭を保てる範囲を上限とし、そこを終点に設定します。',
      },
      {
        heading: '合奏では誰が主導するか決める',
        body: '複数人で accel. をかけるとき、各自が自分の感覚で速めると必ずずれます。誰のテンポに合わせるのかを事前に決めておくことが不可欠です。多くの場合は低音や刻みを担当するパートが基準になります。指揮者がいない編成では、視線や身体の動きで合図を出す担当も決めておくと安全です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '右手が先に走りがちです。左手の刻みを基準にすると、加速しても崩れません。' },
      { name: '弦楽器', tip: '速くなるほど弓を短く使う必要があります。弓の配分を先に決めてから練習してください。' },
      { name: '管楽器', tip: '加速するとタンギングが追いつかなくなります。速い側のテンポでタンギングを確認してから全体を通します。' },
    ],
    confusions: [
      { term: 'Stringendo', slug: 'stringendo', note: '「切迫して」。速度を上げるだけでなく、緊張感が増していく意味を含みます。' },
      { term: 'Ritardando', slug: 'ritardando', note: '逆方向の指示。終点から逆算するという設計の考え方は共通です。' },
      { term: 'Più mosso', slug: 'più-mosso', note: '段階的な加速ではなく、その地点から一段速いテンポに切り替える指示です。' },
    ],
    works: [
      { title: 'リスト「ハンガリー狂詩曲 第2番」', note: '終盤の accel. をどこまで上げるかで、演奏の性格が大きく変わります。' },
      { title: 'グリーグ「ペール・ギュント」より「山の魔王の宮殿にて」', note: '曲全体が長大な accel. として設計されています。' },
    ],
  },

  'marcato': {
    lead: 'Marcato は marcare（印をつける）から来た語で、「際立たせて」。音を強くする指示ではなく、輪郭をはっきりさせる指示です。',
    sections: [
      {
        heading: '強さではなく輪郭',
        body: 'marcato を「強く」と解釈すると、ただ音量が上がるだけで、意図した効果が出ません。求められているのは一音ずつの始まりが明確に聞き取れる状態です。音量が同じでも、発音の立ち上がりを鋭くすれば marcato に聞こえます。逆に、音量を上げても発音がぼやけていれば、marcato にはなりません。',
      },
      {
        heading: '切るのか、つなぐのか',
        body: 'marcato は音の長さについては何も指定していません。したがって、切り離すべきか保つべきかは、周囲の書き方から判断します。スラーの中に marcato があれば、つなぎながら一音ずつ際立たせるという意味になります。この場合、staccato のように切ってしまうと、作曲家の指示から外れます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵の速度を上げ、深さは変えません。深く押し込むと重くなり、輪郭ではなく鈍さが出ます。' },
      { name: '弦楽器', tip: '弓を弦に置いてから引き始めます。空中から弓を落とすのではなく、圧をかけた状態から動かすのが要点です。' },
      { name: '管楽器', tip: 'タンギングを明確にしつつ、息の流れは切らないこと。息まで区切ると marcato ではなく staccato になります。' },
    ],
    confusions: [
      { term: 'Staccato', slug: 'staccato', note: '切り離す指示。marcato は長さについて何も言っていない点が決定的に違います。' },
      { term: 'Tenuto', slug: 'tenuto', note: '音を十分に保つ指示。marcato と併記されると「保ちつつ際立たせて」になります。' },
      { term: 'Sforzando', slug: 'sforzando', note: '一音だけを突出させる指示。marcato は継続的に輪郭を保ちます。' },
      { term: 'Ben marcato', slug: 'ben-marcato', note: '「よりはっきりと」。marcato を強調した形です。' },
    ],
    works: [
      { title: 'ムソルグスキー「展覧会の絵」より「プロムナード」', note: '歩みを感じさせる輪郭が、音量ではなく発音で作られています。' },
      { title: 'ベートーヴェン ピアノソナタ第23番「熱情」第3楽章', note: '切らずに際立たせる marcato の扱いが問われます。' },
    ],
  },

  'rubato': {
    lead: 'Rubato は rubare（盗む）の過去分詞で、「盗まれた」。テンポを自由に動かす指示ですが、原義が示すのは「どこかで奪った時間は、どこかで返す」という考え方です。',
    sections: [
      {
        heading: '盗んだ時間は返す',
        body: 'tempo rubato の本来の意味は、ある音を長く取ったぶん、別の音を短くして帳尻を合わせることでした。ショパンは「左手は厳格に拍を刻み、右手だけが自由に動く」という形の rubato を弟子に教えたと伝えられています。つまり基準となる拍は保たれたままで、その上で旋律が伸び縮みします。全体が遅くなっていくのは rubato ではなく ritardando です。',
      },
      {
        heading: 'やりすぎの見分け方',
        body: '判断の目安として、rubato をかけた区間の前後で、拍の総数が合っているかを確認してください。合っていれば時間を返せています。また、聴き手が「テンポが揺れている」と意識してしまう段階は、多くの場合やりすぎです。自然な rubato は、揺れとしてではなく表情として受け取られます。メトロノームに合わせて弾いてみて、区間の終わりでずれていないかを確かめる練習が有効です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '左手を安定させ、右手だけを動かす練習から始めます。両手が同時に揺れると、単なるテンポの乱れになります。' },
      { name: '弦楽器', tip: '伴奏者やアンサンブルとの合意が前提です。独りよがりの rubato は合奏を壊します。' },
      { name: '管楽器', tip: 'ブレスのために伸ばした時間は rubato ではありません。息継ぎと表現のための伸縮を区別してください。' },
    ],
    confusions: [
      { term: 'Ritardando', slug: 'ritardando', note: '一方向に遅くしていく指示。時間を返さない点が rubato と決定的に違います。' },
      { term: 'A piacere', slug: 'a-piacere', note: '「自由に」。rubato よりも大きな裁量が演奏者に委ねられます。' },
      { term: 'Tempo giusto', slug: 'tempo-giusto', note: '「正確なテンポで」。rubato を禁じる指示です。' },
    ],
    works: [
      { title: 'ショパン マズルカ集', note: '民族舞曲のリズムと rubato の関係が、最も具体的に学べる作品群です。' },
      { title: 'ショパン ノクターン 第2番 変ホ長調', note: '左手の伴奏を保ったまま右手を動かすという、ショパン本来の rubato の教材です。' },
    ],
  },

  'tenuto': {
    lead: 'Tenuto は tenere（保つ）の過去分詞で、「保たれた」。音符の上下に置かれた短い横線で示され、その音を十分な長さで保つことを求めます。',
    sections: [
      {
        heading: '長さと重み、どちらの指示か',
        body: 'tenuto には二つの解釈があります。一つは「書かれた音価をいっぱいに使う」という長さの指示。もう一つは「その音に重みを置く」という強調の指示です。実際にはこの両方が同時に求められることが多く、どちらの比重が大きいかは文脈で判断します。前後が staccato の中の tenuto なら長さが、平坦な流れの中の tenuto なら重みが主目的だと考えると、大きく外しません。',
      },
      {
        heading: 'テンポは変えない',
        body: 'tenuto を「その音を長く延ばす」と受け取ると、テンポが崩れます。あくまで書かれた音価の範囲内でいっぱいに保つのであって、フェルマータのように音価を超えて延ばす指示ではありません。tenuto のたびにテンポが緩んでしまう場合は、長さではなく発音の仕方で重みを表現するほうが、音楽が停滞しません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '鍵盤を底まで保ち、次の音の直前まで離しません。重みは打鍵の深さで、長さは離すタイミングで作ります。' },
      { name: '弦楽器', tip: '弓を最後まで使い切ります。圧をかけるより弓速を保つほうが、重みが自然に出ます。' },
      { name: '管楽器', tip: '音の終わりを息で細らせず、最後まで支えます。次の音の直前まで音量を保つのが要点です。' },
    ],
    confusions: [
      { term: 'Fermata', slug: 'fermata', note: '音価を超えて延ばす指示。tenuto は音価の範囲内にとどまります。' },
      { term: 'Marcato', slug: 'marcato', note: '輪郭を際立たせる指示。tenuto の「重み」と近いですが、長さには触れません。' },
      { term: 'Portato', slug: 'portato', note: 'スラーと点の併記。tenuto を連続させたような、やわらかく分離した表現になります。' },
      { term: 'Sostenuto', slug: 'sostenuto', note: '「支えて」。tenuto より広く、区間全体の性格を指します。' },
    ],
    works: [
      { title: 'ブラームス 間奏曲 作品118-2', note: '旋律の要所に置かれた tenuto が、テンポを崩さずに重みを作っています。' },
    ],
  },

  'tonic': {
    lead: 'Tonic（主音）は、調の中心となる音です。楽譜を読むうえで最初に特定すべき音であり、これが分かると和音の役割も終止の意味も見えてきます。',
    sections: [
      {
        heading: '主音の見つけ方',
        body: '調号だけでは長調か短調かが決まらないため、主音の特定には少し手順が要ります。シャープ系なら、いちばん右のシャープの音の半音上が長調の主音。フラット系なら、右から2番目のフラットの音が長調の主音です（フラット1つのヘ長調は例外として覚えます）。そのうえで、曲の最初と最後の和音、および終止の形を見て、長調か平行短調かを判断します。',
      },
      {
        heading: '主音は「帰る場所」',
        body: '主音が中心として機能するのは、他の音がそこへ向かう力を持っているからです。とくに導音（第7音）は半音下から主音へ強く引き寄せられ、属音（第5音）は和音として主音を指し示します。旋律が主音に着地したとき聴き手が安心するのは、この引力が解消されるためです。楽曲分析では、いつ主音から離れ、いつ戻るのかを追うことが、構造を理解する近道になります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '練習の前に、その曲の主音を声に出して歌ってみてください。旋律のどこが主音から離れているかが体感で分かります。' },
      { name: '弦楽器', tip: '主音と属音は開放弦と一致することが多く、共鳴を利用できます。音程の基準としても使えます。' },
      { name: '管楽器', tip: '移調楽器の場合、記譜上の主音と実音の主音がずれます。合奏では実音で把握しておく必要があります。' },
    ],
    confusions: [
      { term: 'Dominant', slug: 'dominant', note: '属音。主音から完全5度上にあり、主音へ強く向かう性質を持ちます。' },
      { term: 'Leading tone', slug: 'leading-tone', note: '導音。主音の半音下にあり、主音へ吸い寄せられる引力の源です。' },
      { term: 'Key', slug: 'key', note: '調。主音とその周囲の音の秩序全体を指します。' },
      { term: 'Tonality', slug: 'tonality', note: '調性。特定の音を中心とする秩序が働いている状態そのものです。' },
    ],
    works: [
      { title: 'バッハ「平均律クラヴィーア曲集」', note: '24の調すべてを巡る曲集で、主音の違いが響きの違いとして体感できます。' },
    ],
  },

  'dominant-seventh': {
    lead: '属七の和音は、調をはっきり示す最も強力な和音です。ハ長調ならソ・シ・レ・ファ。この4音が鳴った瞬間、聴き手は次にハ長調の主和音が来ることを予感します。',
    sections: [
      {
        heading: '力の源は内部の三全音',
        body: '属七の和音が強い方向性を持つ理由は、その中に三全音（シとファ）を含んでいるからです。この2音はきわめて不安定で、シは半音上のドへ、ファは半音下のミへ動こうとします。両方が同時に解決すると、ちょうど主和音（ド・ミ・ソ）の構成音になります。つまり和音そのものに、次の行き先が書き込まれているわけです。',
      },
      {
        heading: '調を特定できる唯一の和音',
        body: '長三和音や短三和音は複数の調に属しうるため、単独では調を決められません。しかし属七の和音は、その形が現れるのが1つの調に限られます。だからこそ、転調の合図として使われます。新しい調の属七を鳴らせば、聴き手はその瞬間から新しい調で聴きはじめます。ポピュラー音楽でセクションが切り替わる直前によく置かれるのも同じ理由です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '4音すべてを均等に鳴らすと濁ります。三全音の2音をやや控えめにすると、解決したときの効果が際立ちます。' },
      { name: '弦楽器', tip: '合奏では、導音を高め、第7音を低めに取ると、解決の方向がはっきり聞こえます。' },
      { name: '管楽器', tip: '和音の中で自分が三全音のどちらを担当しているかを把握し、解決先へ向かう意識を持って吹きます。' },
    ],
    confusions: [
      { term: 'Seventh chord', slug: 'seventh-chord', note: '七の和音全般。属七はその中でも属音を根音とする特別な形です。' },
      { term: 'Tritone', slug: 'tritone', note: '三全音。属七の推進力そのものを生んでいる音程です。' },
      { term: 'Perfect cadence', slug: 'perfect-cadence', note: '完全終止。属七から主和音へ進む、最も明確な終わり方です。' },
      { term: 'Deceptive cadence', slug: 'deceptive-cadence', note: '偽終止。属七の予告を意図的に裏切る進行です。' },
    ],
    works: [
      { title: 'モーツァルト ピアノソナタ 第16番 ハ長調 K.545', note: '教科書的な属七から主和音への進行が、曲の随所に現れます。' },
    ],
  },

  'circle-of-fifths': {
    lead: '五度圏は、12の調を完全5度ずつ積み上げて円形に並べたもの。調号の数、調どうしの近さ、転調のしやすさが、この1枚の図にまとまっています。',
    sections: [
      {
        heading: '何が分かる図なのか',
        body: 'ハ長調から右回りに完全5度ずつ上がると、ト長調、ニ長調と進み、シャープが1つずつ増えていきます。左回りに進めばフラットが増えます。12回進むと元のハ長調に戻るため、円になります。この図を覚えておくと、調号を見た瞬間に何の調かが分かり、逆に調が分かれば調号を書けるようになります。',
      },
      {
        heading: '転調の設計図としての使い方',
        body: '五度圏で隣どうしの調は、共通する音が6つあり、きわめて近い関係にあります。そのため転調しても違和感がありません。逆に円の反対側にある調へ移ると、共通音が少なく劇的な効果が出ます。作曲や編曲で「もう少し変化がほしい」「唐突すぎる」と感じたときは、この距離を目安に調を選び直すと調整できます。',
      },
      {
        heading: '平行調は内側に並ぶ',
        body: '五度圏の図では、外側に長調、内側に平行短調が書かれるのが一般的です。ハ長調の内側にはイ短調があり、両者は調号を共有します。同じ調号でも長調と短調で性格がまったく異なるため、楽譜を読むときは調号だけでなく、曲がどちらに着地しているかを必ず確認する必要があります。',
      },
    ],
    instruments: [
      { name: '共通', tip: '五度圏の順に音階を練習すると、調号の増減と指づかいの変化が結びついて覚えやすくなります。' },
      { name: '弦楽器', tip: '開放弦がちょうど完全5度ずつ並んでいる楽器が多く、五度圏の感覚が楽器の構造と一致します。' },
    ],
    confusions: [
      { term: 'Key signature', slug: 'key-signature', note: '調号。五度圏は、調号の数と調の対応を図にしたものです。' },
      { term: 'Relative keys', slug: 'relative-keys', note: '平行調。調号を共有する長調と短調で、五度圏では内外に並びます。' },
      { term: 'Parallel keys', slug: 'parallel-keys', note: '同主調。主音が同じ長調と短調で、五度圏上では離れた位置にあります。' },
      { term: 'Modulation', slug: 'modulation', note: '転調。五度圏上の距離が、転調の印象の強さの目安になります。' },
    ],
    works: [
      { title: 'バッハ「平均律クラヴィーア曲集」', note: 'すべての調を用いた曲集で、五度圏の一周を実際に音で確かめられます。' },
    ],
  },

  'piano': {
    lead: 'Piano は「弱く」。ただしイタリア語の原義は「平らな」「なだらかな」で、音量の小ささよりも、角の取れた穏やかさを指す言葉でした。楽器のピアノもこの語に由来します。',
    sections: [
      {
        heading: '「小さい」ではなく「平ら」',
        body: 'イタリア語の piano は日常語では「平らな」「ゆっくりした」「静かな」を意味します。強弱記号としての p が求めているのは、音を小さくすることそのものではなく、尖ったところのない落ち着いた響きです。この違いは実際の音に表れます。単に鍵盤を浅く弾いたり、弓の圧を抜いたりして音量だけ落とすと、芯のない頼りない音になります。求められているのは、密度は保ったまま角を丸めた音です。',
      },
      {
        heading: '楽器名 piano の由来',
        body: 'ピアノという楽器の正式名は pianoforte（ピアノフォルテ）で、これは「弱くも強くも出せる楽器」という意味です。それ以前の主流だったチェンバロは、鍵盤を押す速さを変えても音量がほとんど変わりませんでした。強弱を自在に扱えることが画期的だったため、そのまま楽器の名前になったのです。強弱記号の p と楽器のピアノが同じ語であることには、こうした背景があります。',
      },
      {
        heading: 'p は絶対値ではない',
        body: 'p がどのくらいの音量かは、曲・楽器編成・会場によって変わります。判断の基準は「その曲の中で f がどのくらいか」であり、その相対関係のほうが重要です。オーケストラの中の p と、独奏曲の p はまったく違う音量です。まず曲全体でいちばん強い箇所といちばん弱い箇所を決め、その幅の中に各記号を配置していくと、破綻しません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '鍵盤を浅く弾くと音が痩せます。深さは保ったまま、下ろす速度を落とすと、小さくても芯のある音になります。' },
      { name: '弦楽器', tip: '弓の圧を抜くだけだとかすれます。圧を減らすと同時に駒に近づけると、密度を保ったまま音量が下がります。' },
      { name: '管楽器', tip: '息の量を減らすとピッチが下がりやすくなります。息のスピードは保ち、量だけを減らす意識で。' },
    ],
    confusions: [
      { term: 'Pianissimo', slug: 'pianissimo', note: 'p より弱く。pp では音量よりも「張りつめた静けさ」が前に出ます。' },
      { term: 'Mezzo Piano', slug: 'mezzo-piano', note: '「半分の p」。p ほど引かず、優しさの中に方向性を残します。' },
      { term: 'Sotto voce', slug: 'sotto-voce', note: '「声をひそめて」。音量ではなく話し方の指示で、p とは求めるものが違います。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第3楽章から第4楽章', note: '極限まで抑えた p が長く続くからこそ、第4楽章の開放が効きます。' },
      { title: 'シューベルト「魔王」', note: '同じ p でも、語り手・父・子・魔王で音色を変える必要があります。p が音量の指示でないことがよく分かる曲です。' },
    ],
  },

  'forte': {
    lead: 'Forte は「強く」。ただし原義は「強い」「力のある」で、大きさより力強さを指します。音量を上げることと、力を込めることは同じではありません。',
    sections: [
      {
        heading: '力むと、かえって小さく聞こえる',
        body: 'f を見て体に力を入れると、多くの場合まったく逆の結果になります。力みは楽器の振動を妨げるため、押し付けた音は音量が出ないうえ、響きが濁って遠くまで届きません。求められているのは、楽器全体が無理なく鳴っている状態です。「強く出す」ではなく「よく鳴らす」と言い換えると、体の使い方が変わります。',
      },
      {
        heading: '音色を変えるという選択肢',
        body: 'f がすでに出ているのにもっと強く聞かせたい場面では、音量ではなく音色を明るくするほうが効果的です。倍音の多い明るい音は、同じ音量でもはっきり大きく聞こえます。アンサンブルでは、全員が音量を上げるより、旋律を担当するパートだけが音色を変えるほうが、輪郭が失われずに済みます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '腕の重さを使い、指先は固定して支えます。手首から叩きつけると打鍵音だけが目立ち、響きは増えません。' },
      { name: '弦楽器', tip: '圧より弓速。圧を先に増やすと弦が押さえ込まれて鳴らなくなります。弓を速く長く使うのが基本です。' },
      { name: '管楽器', tip: '息を強く吹き込むと音程が上ずり、音が割れます。息の量を増やしつつ、口の中の空間を広く保ちます。' },
    ],
    confusions: [
      { term: 'Fortissimo', slug: 'fortissimo', note: 'f より強く。オーケストラのクライマックスで多用される、重厚感を伴う強さです。' },
      { term: 'Mezzo Forte', slug: 'mezzo-forte', note: '「半分の f」。アンサンブルで他と調和を取りやすい、中心的な音量です。' },
      { term: 'Sforzando', slug: 'sforzando', note: 'その音だけを突出させる指示。継続する f とは別物です。' },
      { term: 'Marcato', slug: 'marcato', note: '「際立たせて」。音量ではなく輪郭の指示です。' },
    ],
    works: [
      { title: 'ヴェルディ「レクイエム」より「怒りの日」', note: '合唱と大太鼓の f が、力任せではなく響きの厚みで作られている例です。' },
      { title: 'ラフマニノフ ピアノ協奏曲第2番 第1楽章', note: '冒頭の和音が f へ向かう過程は、力ではなく重さで鳴らす典型です。' },
    ],
  },

  'legato': {
    lead: 'Legato は legare（結ぶ、つなぐ）の過去分詞で、「結ばれた」。音を長く伸ばすことではなく、音と音のあいだに隙間を作らないことを指します。',
    sections: [
      {
        heading: '切れ目をなくすのは「音」ではなく「間」',
        body: 'legato がうまくいかないとき、多くの人は音を長くしようとします。しかし実際に聴き手が「つながっていない」と感じるのは、音が短いからではなく、音と音のあいだに無音の隙間があるからです。前の音が終わる瞬間に次の音が始まっていれば、一つ一つの音は短くても legato に聞こえます。まず自分の演奏を録音し、どこに隙間ができているかを特定するのが近道です。',
      },
      {
        heading: '音量のつながりも legato のうち',
        body: '音の長さがつながっていても、音ごとに音量がばらついていると、なめらかには聞こえません。とくに跳躍したときや、指の弱い薬指・小指を使うときに音が凹みがちです。legato の練習では、音の切れ目だけでなく、音量の線が滑らかに続いているかも同時に確認してください。ゆっくり弾いて各音の大きさをそろえる作業が、いちばん効きます。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '次の鍵盤を押してから前の指を離します。ペダルでつなぐのは補助であって、指の legato の代わりにはなりません。' },
      { name: '弦楽器', tip: '弓の返しで音が途切れます。返す直前に少し弓速を落とし、返した直後に戻すと、切れ目が目立ちません。' },
      { name: '管楽器', tip: 'タンギングをせず、息だけで音を移します。運指が変わる瞬間に息が緩まないことが最重要です。' },
    ],
    confusions: [
      { term: 'Legatissimo', slug: 'legatissimo', note: 'できる限りなめらかに。音がわずかに重なるほど密着させます。' },
      { term: 'Portato', slug: 'portato', note: 'スラーと点の併記。つなげつつも、一音ずつ軽く分離させます。' },
      { term: 'Tenuto', slug: 'tenuto', note: '音を保つ指示。長さを十分に取る点は近いですが、つなぐ指示ではありません。' },
      { term: 'Sostenuto', slug: 'sostenuto', note: '音を支え、保って。テンポを抑える意味を含むことがあります。' },
    ],
    works: [
      { title: 'ショパン ノクターン 第2番 変ホ長調', note: '右手の legato と、それを支える左手の分散和音の関係が教材のような曲です。' },
      { title: 'バッハ「G線上のアリア」', note: '弓の返しを感じさせずに旋律を続けることが、この曲の中心的な課題になります。' },
    ],
  },

  'dolce': {
    lead: 'Dolce は「甘く」。音量ではなく音色の指示で、砂糖の甘さというより「角のないやわらかさ」に近い言葉です。',
    sections: [
      {
        heading: '音色を指定する言葉',
        body: 'イタリア語 dolce は「甘い」のほか「穏やかな、優しい」も意味します。強弱記号ではないため、dolce だからといって弱くする必要はありません。求められているのは、アタックが柔らかく、倍音のとがりが少ない音です。実際には p や mp と併記されることが多いのですが、それは音量の指示が別に書かれているということであり、dolce 自体は音量に触れていません。',
      },
      {
        heading: '甘くしすぎない',
        body: 'dolce を意識するあまり、テンポを緩めたり、過剰なルバートをかけたりすると、甘いというより粘ついた演奏になります。dolce は表情を足す指示ではなく、音の質を変える指示だと考えてください。テンポとリズムは保ったまま、音の入り方だけを変える。この切り分けができると、上品な dolce になります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵の速度を落とし、指の腹で鍵盤を押します。指先を立てると硬い音になります。' },
      { name: '弦楽器', tip: '弓を指板寄りに移動させ、圧を減らします。ビブラートはやや広めでゆっくりが合います。' },
      { name: '管楽器', tip: 'タンギングを弱く、あるいは省いて息だけで発音します。音の立ち上がりの角を落とすのが要点です。' },
    ],
    confusions: [
      { term: 'Cantabile', slug: 'cantabile', note: '「歌うように」。フレーズの作り方への指示で、dolce の音色指定とは層が違います。両方が同時に書かれることもあります。' },
      { term: 'Tranquillo', slug: 'tranquillo', note: '「穏やかに」。心理状態の指示で、音色そのものを指す dolce とは別です。' },
      { term: 'Espressivo', slug: 'espressivo', note: '「表情豊かに」。dolce が音の質なら、espressivo は表現の量です。' },
    ],
    works: [
      { title: 'ショパン ノクターン 第20番 嬰ハ短調（遺作）', note: '冒頭の旋律が、甘さと節度のバランスを試されます。' },
      { title: 'シューマン「子供の情景」より「トロイメライ」', note: '過度な甘さに傾かず音色だけで dolce を作る、良い練習になります。' },
    ],
  },

  'cantabile': {
    lead: 'Cantabile は cantare（歌う）から派生した語で、「歌うことのできる」が原義。楽器に、声のように振る舞うことを求める指示です。',
    sections: [
      {
        heading: '「歌う」とは具体的に何か',
        body: '抽象的に聞こえる指示ですが、実際にやるべきことははっきりしています。第一にブレスです。歌手は必ず息を吸う場所があり、そこがフレーズの切れ目になります。楽器でも同じ場所を決めると、旋律に呼吸が生まれます。第二に、一つのフレーズには必ず頂点があります。どの音がいちばん高い場所なのかを決め、そこへ向かって自然に増していく。この二つを決めるだけで、演奏は目に見えて変わります。',
      },
      {
        heading: '伴奏との関係',
        body: 'cantabile と書かれたパートを歌わせるには、それ以外のパートが伴奏に徹する必要があります。ピアノなら、旋律を弾く手と伴奏の手で音量差をはっきりつけること。アンサンブルなら、旋律以外が一段引くこと。旋律側の努力だけでは cantabile にならず、まわりが引いてはじめて浮かび上がります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '旋律の指だけ深く、伴奏の指は浅く。同じ手で両方を弾く場合は、手の重心を旋律側へ寄せます。' },
      { name: '弦楽器', tip: 'ビブラートを音符ごとに切らず、フレーズを通してかけ続けると、声に近い持続感が出ます。' },
      { name: '管楽器', tip: 'すでに息で歌っているので、あとは音量の設計です。フレーズの頂点を決め、そこへ向けて息を配分します。' },
    ],
    confusions: [
      { term: 'Espressivo', slug: 'espressivo', note: '「表情豊かに」。cantabile が歌い方の指示なら、espressivo は感情の幅の指示です。' },
      { term: 'Dolce', slug: 'dolce', note: '音色の指示。cantabile と併記されることも多く、両立します。' },
      { term: 'Legato', slug: 'legato', note: 'なめらかにつなぐ奏法。cantabile を実現する手段の一つですが、同義ではありません。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第8番「悲愴」第2楽章', note: 'Adagio cantabile。歌わせる対象がはっきりしており、cantabile の教材としてよく使われます。' },
      { title: 'チャイコフスキー 弦楽四重奏曲第1番 第2楽章「アンダンテ・カンタービレ」', note: '曲名そのものが cantabile。旋律以外が徹底して引いています。' },
    ],
  },

  'espressivo': {
    lead: 'Espressivo は「表情豊かに」。ただし、これは「気持ちを込めて」という漠然とした指示ではなく、変化をつけよという具体的な要求です。',
    sections: [
      {
        heading: '表情とは「変化」のこと',
        body: '同じ音量、同じ音色、同じテンポで最後まで演奏すれば、どれだけ感情を込めても表情豊かには聞こえません。聴き手が表情を感じるのは、何かが変化したときです。espressivo と書かれていたら、この区間で何を変えるのかを具体的に決めてください。音量なのか、音色なのか、テンポのわずかな揺れなのか。決めずに弾くと、ただ大きくなるだけになりがちです。',
      },
      {
        heading: 'やりすぎの境界',
        body: 'espressivo は過剰になりやすい指示でもあります。目安として、テンポの揺れは聴き手が「揺れている」と意識しない範囲に収めると、自然な表情になります。意識されるほど揺らすと、表情ではなく演奏者の主張として聞こえます。迷ったら、まず音量の変化だけで espressivo を作り、それでも足りないときにテンポへ手をつけるという順序が安全です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: 'テンポではなく音量と音色で作るほうが、様式を外しにくく効果的です。内声を少し出すだけでも表情が変わります。' },
      { name: '弦楽器', tip: 'ビブラートの速さと幅を、フレーズの中で変化させます。一定のビブラートは無表情に聞こえます。' },
      { name: '管楽器', tip: '音の立ち上がりを音符ごとに変えます。すべて同じタンギングだと、音量を変えても平板なままです。' },
    ],
    confusions: [
      { term: 'Cantabile', slug: 'cantabile', note: '「歌うように」。フレーズの作り方の指示で、espressivo より具体的な方法を示しています。' },
      { term: 'Dolce', slug: 'dolce', note: '音色の指示。espressivo のような変化の要求は含みません。' },
      { term: 'Appassionato', slug: 'appassionato', note: '「熱情的に」。espressivo より振れ幅が大きく、方向も限定されます。' },
    ],
    works: [
      { title: 'ベートーヴェン ヴァイオリン・ソナタ第5番「春」第1楽章', note: '同じ旋律が繰り返されるたびに表情を変える必要があり、espressivo の意味がよく分かります。' },
      { title: 'ブラームス 間奏曲 作品118-2', note: '音量の幅は狭いのに表情が豊かに感じられる、変化の作り方の見本です。' },
    ],
  },

  'ritardando': {
    lead: 'Ritardando（rit.）は「だんだん遅く」。ritardare（遅らせる）から来た語で、能動的にブレーキをかけていく動きを指します。',
    sections: [
      {
        heading: 'どこから、どこまで、どのくらい',
        body: 'rit. で最も多い失敗は、書かれた瞬間に大きく遅くしてしまうことです。crescendo と同じで、これも過程を指す言葉なので、終点を先に決める必要があります。rit. の終わりでどのくらいのテンポになっているかを決め、そこまでの距離を等分するイメージで減速すると、自然な曲線になります。最初の1〜2拍はほとんど変えないくらいでちょうど良く聞こえます。',
      },
      {
        heading: 'a tempo とセットで考える',
        body: 'rit. の直後には a tempo（元の速さで）が書かれていることが多く、この二つは常にセットで設計します。よくある問題は、rit. で遅くしすぎた結果、a tempo が唐突な加速に聞こえることです。a tempo の瞬間に不自然さが出るなら、原因は a tempo ではなく、その前の rit. が行きすぎていることにあります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '両手が同じ割合で遅くなっているか確認します。伴奏だけ先に遅くなると、旋律が置き去りにされて聞こえます。' },
      { name: '弦楽器', tip: 'テンポが落ちるぶん、弓の配分を変えないと途中で足りなくなります。減速を決めたら弓の使い方も決め直します。' },
      { name: '管楽器', tip: '遅くなるとブレスが持たなくなります。rit. の設計と同時に、息継ぎの位置を決め直してください。' },
    ],
    confusions: [
      { term: 'Rallentando', slug: 'rallentando', note: 'ほぼ同義ですが、rall. は緊張が自然にゆるんでいく穏やかな変化に使われる傾向があります。' },
      { term: 'A tempo', slug: 'a-tempo', note: '元の速さに戻す指示。rit. とセットで設計します。' },
      { term: 'Accelerando', slug: 'accelerando', note: '逆に、だんだん速く。設計の考え方（終点から逆算する）は同じです。' },
      { term: 'Calando', slug: 'calando', note: '遅くしながら弱くもする指示。速度だけでなく音量も含みます。' },
    ],
    works: [
      { title: 'ショパン ワルツ 第7番 嬰ハ短調', note: '各セクションの終わりの rit. をどこまでかけるかで、曲の印象が大きく変わります。' },
      { title: 'エルガー「愛の挨拶」', note: '終結部の rit. が長く、行きすぎと足りなさの境目を試される曲です。' },
    ],
  },

  'a-tempo': {
    lead: 'A tempo は「元の速さで」。rit. や accel. で変化したテンポを、それ以前の基本テンポに戻す指示です。「速く」でも「遅く」でもありません。',
    sections: [
      {
        heading: '「元」がどこを指すか',
        body: 'a tempo が戻す先は、その直前に有効だった基本テンポです。曲の冒頭のテンポとは限りません。たとえば途中で Meno mosso になり、その中で rit. がかかって a tempo が来た場合、戻る先は冒頭ではなく Meno mosso のテンポです。曲の冒頭に戻したい場合は Tempo Primo（テンポ・プリモ）と書き分けられます。この区別を取り違えると、曲の構造そのものが変わってしまいます。',
      },
      {
        heading: '戻り方が不自然になるとき',
        body: 'a tempo が唐突に聞こえる場合、原因はたいてい a tempo 自体ではなく、その前の rit. にあります。遅くしすぎていれば、戻る落差が大きくなるのは当然です。また、a tempo の一つ前の音を長く取りすぎると、そこで音楽が一度止まってしまい、再出発のように聞こえます。前の小節の最後の音符を書かれた長さで正確に切ると、自然につながります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: 'a tempo の直前でペダルを踏み替えると、響きが切り替わって復帰が明確になります。' },
      { name: '弦楽器', tip: '弓の位置を a tempo の頭でリセットできるよう、前の小節で配分を調整しておきます。' },
      { name: '管楽器', tip: '直前でブレスを取ると復帰が分かりやすくなりますが、取りすぎると音楽が途切れます。' },
    ],
    confusions: [
      { term: 'Tempo Primo', slug: 'tempo-primo', note: '曲（または楽章）の冒頭のテンポに戻す指示。a tempo とは戻る先が違います。' },
      { term: 'Ritardando', slug: 'ritardando', note: 'a tempo とセットで設計します。戻りが不自然なときは、こちらを見直します。' },
      { term: 'Tempo giusto', slug: 'tempo-giusto', note: '「正確なテンポで」。揺れを許さない指示で、a tempo とは意図が異なります。' },
    ],
    works: [
      { title: 'ショパン ノクターン 第2番 変ホ長調', note: 'ルバートと a tempo の往復が頻繁で、基本テンポを保持し続ける力が要ります。' },
    ],
  },

  'adagio': {
    lead: 'Adagio は「ゆるやかに」。語源は ad agio、つまり「くつろいで」。遅さそのものではなく、急かされていない状態を指す言葉です。',
    sections: [
      {
        heading: '「遅く」ではなく「くつろいで」',
        body: 'Adagio はイタリア語の ad agio（気楽に、ゆったりと）が一語になったものです。同じ遅い速度でも、Grave が重々しさを、Lento が遅さそのものを指すのに対し、Adagio は緊張が解けた状態を指します。この違いは音の質に直結します。Adagio を「とにかく遅く」と解釈すると、くつろぎではなく停滞になってしまいます。',
      },
      {
        heading: '遅い曲ほど拍の下位分割が要る',
        body: 'Adagio が間延びして聞こえるとき、原因はテンポではなく拍の感じ方にあります。4分音符が遅い場合、頭の中で8分や16分に分割して数えていないと、音符と音符のあいだで時間の感覚が失われます。分割して感じることで、長い音の中にも進行が生まれ、同じテンポでもくつろぎとして聞こえるようになります。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '長い音は減衰していきます。次の音を、減衰した後の音量に合わせて入れると、旋律の線が途切れません。' },
      { name: '弦楽器', tip: '弓が遅くなるぶん、圧が一定でないと音がかすれます。弓元と弓先で圧を調整し続ける必要があります。' },
      { name: '管楽器', tip: 'ロングトーンが多くなるため、息の配分が課題になります。フレーズ単位でブレス計画を立ててください。' },
    ],
    confusions: [
      { term: 'Lento', slug: 'lento', note: '遅さそのものを指します。Adagio のような「くつろぎ」のニュアンスは含みません。' },
      { term: 'Largo', slug: 'largo', note: '「幅広く」。速度より空間的な広がりを指す言葉です。' },
      { term: 'Grave', slug: 'grave', note: '重々しく。深刻さを伴う遅さで、Adagio とは性格が正反対です。' },
      { term: 'Adagietto', slug: 'adagietto', note: 'Adagio よりわずかに速く、動きを持たせた速度です。' },
    ],
    works: [
      { title: 'ベートーヴェン ピアノソナタ第8番「悲愴」第2楽章', note: 'Adagio cantabile。くつろぎと歌が同時に指定されています。' },
      { title: 'モーツァルト クラリネット協奏曲 第2楽章', note: 'Adagio。急がないことと停滞しないことの両立が、そのまま課題になります。' },
    ],
  },

  'fermata': {
    lead: 'Fermata は fermare（止める）から来た語で、記号としては「ほどよく延ばす」。どのくらい延ばすかは書かれておらず、演奏者に委ねられています。',
    sections: [
      {
        heading: 'どのくらい延ばすのか',
        body: '慣習的な目安として、書かれた音価の1.5倍から2倍程度とよく説明されますが、これは出発点にすぎません。実際には、その音が何のためにあるかで決まります。緊張を高めるためのフェルマータなら長く、単に呼吸を整えるためなら短く。アンサンブルでは指揮者や第一奏者が決め、全員がその判断に合わせます。独奏であっても、なんとなく延ばすのではなく、長さを決めてから弾いてください。',
      },
      {
        heading: '休符の上のフェルマータ',
        body: 'フェルマータは音符だけでなく休符の上にも置かれます。この場合は「沈黙を延ばす」という指示になり、音楽的にはむしろこちらのほうが難しい場面が多くなります。沈黙が続くあいだも音楽は進行しているという意識を保てるかどうかで、印象がまったく変わります。また、小節線の上に置かれた場合は、その区切りでの間を意味します。',
      },
      {
        heading: '終止のフェルマータは「合図」でもある',
        body: '曲の最後や楽章の終わりに置かれたフェルマータは、長さの指示であると同時に、次に何が起こるかを示す合図でもあります。attacca（切れ目なく次へ）が続く場合は、延ばしたあと余韻を残さずに進みます。逆に楽章が終わる場合は、音が消えたあとの静寂までが演奏の一部です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '減衰する楽器なので、延ばしすぎると音が消えます。聞こえなくなる前に次へ進むのが原則です。' },
      { name: '弦楽器', tip: '弓が足りなくなったら返して構いませんが、返す位置を全員でそろえないとアンサンブルが崩れます。' },
      { name: '管楽器', tip: '息が続く範囲で長さを決めます。苦しくなってから切ると音が濁るため、余裕を残した設計を。' },
    ],
    confusions: [
      { term: 'Tenuto', slug: 'tenuto', note: '音を十分に保つ指示。書かれた音価を超えて延ばすフェルマータとは違います。' },
      { term: 'Caesura', slug: 'caesura', note: '大休止。斜線二本の記号で、音楽を一度断ち切ります。延ばすフェルマータとは逆に、間を作る指示です。' },
      { term: 'Generalpause', slug: 'generalpause', note: '全奏者が休止する指示。沈黙という点では、休符の上のフェルマータと近い働きをします。' },
    ],
    works: [
      { title: 'ベートーヴェン 交響曲第5番 第1楽章', note: '冒頭の動機に置かれたフェルマータの長さが、曲全体の性格を決めてしまいます。' },
      { title: 'バッハ コラール', note: '各フレーズの終わりのフェルマータは、歌詞の句読点として機能しています。' },
    ],
  },

  'allegro': {
    lead: 'Allegro は「速く」と訳されますが、イタリア語の原義は「陽気な」「快活な」です。テンポの数字より先に、音楽がどんな気分でいるべきかを指定した言葉でした。',
    sections: [
      {
        heading: '語源 ——「速い」ではなく「陽気な」',
        body: 'Allegro はラテン語の alacer（活発な）を語源とするイタリア語で、日常語としては今も「陽気な、明るい」という意味で使われます。バロック期の楽譜に現れはじめた当初、これは速度ではなく性格の指示でした。速さの意味が前面に出るのは、器楽曲の様式が整い、楽章ごとの速度を区別する必要が生じてからのことです。この成り立ちを知っていると、Allegro を「とにかく速く弾く指示」と受け取るのが、なぜ音楽を痩せさせるのかが見えてきます。',
      },
      {
        heading: '楽譜でこの指示を見たら',
        body: 'おおよその目安は ♩＝120〜168 ですが、この幅の広さ自体が「数字で決まるものではない」ことを示しています。とくに注意したいのが時代差です。メトロノームが普及する1810年代より前の Allegro は、現代の演奏習慣より遅く捉えられていたと考えられており、バッハやヘンデルの Allegro を現代のテンポ感で押し切ると、細部が潰れて騒がしいだけの音楽になります。まず「この曲でいちばん細かい音符が、無理なく粒立って聞こえる速さ」を探し、そこを上限としてテンポを決めるのが安全です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '指を速く動かすことより、拍の頭がそろっているかを優先します。速く聞こえない原因はたいてい右手ではなく、重くなった左手の伴奏形にあります。' },
      { name: '弦楽器', tip: '弓を使いすぎないこと。中弓から先弓の狭い範囲で動かすほうが、音の粒がそろい、結果として速く聞こえます。' },
      { name: '管楽器', tip: 'タンギングを強くするほど遅く聞こえます。息の流れは止めず、舌は軽く触れる程度に。' },
    ],
    confusions: [
      { term: 'Allegretto', slug: 'allegretto', note: 'Allegro より穏やかで軽やか。「やや速く」と訳されますが、速度差より性格の差と考えるほうが実際に近いです。' },
      { term: 'Vivace', slug: 'vivace', note: 'Allegro より速く、動きが鋭い。Allegro の「陽気さ」に対して、Vivace は「生き生きとした運動性」を指します。' },
      { term: 'Ma non troppo', slug: 'ma-non-troppo', note: 'Allegro ma non troppo は「速く、しかし度を越さずに」。速度の上限を作曲家が自ら封じている指示です。' },
    ],
    works: [
      { title: 'モーツァルト「アイネ・クライネ・ナハトムジーク」第1楽章', note: 'Allegro。軽やかさと快活さが、速度そのものより前に立っている好例です。' },
      { title: 'ベートーヴェン 交響曲第5番 第1楽章', note: 'Allegro con brio。「brio（活気）」が加わることで、陽気さより推進力が前面に出ます。' },
    ],
  },

  'andante': {
    lead: 'Andante は「歩くような速さで」。動詞 andare（歩く、行く）から来た言葉で、止まっていない状態そのものを指します。この用語で最も多い失敗は、遅くしすぎることです。',
    sections: [
      {
        heading: '語源 ——「歩いている」という進行形',
        body: 'Andante はイタリア語 andare（歩く、進む）の現在分詞で、直訳すれば「歩いている」。過去形でも命令形でもなく、進行中の状態を表す形であることに意味があります。指定しているのは到達点ではなく、前へ進み続けているという運動の質です。18世紀には「流れるように」に近いニュアンスで用いられており、遅さを表す言葉ではありませんでした。',
      },
      {
        heading: '楽譜でこの指示を見たら',
        body: '目安は ♩＝76〜108 程度。ただしテンポを合わせただけでは Andante になりません。判断の基準は「音楽が前に進んでいるか」で、これは拍の数え方で大きく変わります。4分の4拍子を1拍ずつ律儀に数えると、テンポが正しくても停滞して聞こえます。2拍のまとまりで感じ、フレーズがどこへ向かっているかを決めてから弾くと、同じテンポでも歩いている音楽になります。歌詞のある曲では、まずブレスの位置を決めてしまうのが近道です。',
      },
      {
        heading: 'Andantino という難物',
        body: 'Andantino は「Andante より少し速く」と説明されるのが一般的ですが、実は歴史的に混乱のある用語です。ベートーヴェンは出版者ジョージ・トムソンへの手紙で、Andantino は Andante より速いのか遅いのか教えてほしい、という趣旨のことを書き残しています。当時から解釈が割れていたわけです。実際の演奏では、前後の楽章との関係や曲想から判断するほかありません。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '左手の和音が拍ごとに落ちると足が止まります。小節単位で方向を持たせ、次の小節へ渡す意識を持つと歩き出します。' },
      { name: '弦楽器', tip: '弓の配分を先に決めます。返しの位置が音楽の切れ目と一致していないと、テンポが正しくても不自然に停滞します。' },
      { name: '管楽器', tip: 'ブレスの位置がフレーズの区切りを決めます。息が続くかどうかではなく、音楽としてどこで区切りたいかから決めてください。' },
    ],
    confusions: [
      { term: 'Adagio', slug: 'adagio', note: 'Andante より遅い。Adagio は「くつろいで」が原義で、遅さより緊張の解けた状態を指します。' },
      { term: 'Moderato', slug: 'moderato', note: '「中くらいの速さ」。Andante のような歩行のイメージを持たず、より中立的です。' },
      { term: 'Andantino', slug: 'andantino', note: '上記のとおり、速い／遅いの解釈が歴史的に割れている用語です。' },
    ],
    works: [
      { title: 'モーツァルト ピアノ協奏曲第21番 第2楽章', note: 'Andante。歩みを止めない伴奏の上に旋律が乗る、Andante の典型です。' },
      { title: 'ハイドン 交響曲第94番「驚愕」第2楽章', note: 'Andante。淡々と歩き続けるからこそ、あの一撃が効きます。' },
    ],
  },

  'crescendo': {
    lead: 'Crescendo は crescere（成長する）の現在分詞で、「大きくなりつつある」。到達点ではなく過程を指す言葉です。うまくいかない原因のほとんどは、始めた瞬間に大きくしてしまうことにあります。',
    sections: [
      {
        heading: 'まず「どこまで」を決める',
        body: 'crescendo（cresc.）や松葉の記号は、どこまで大きくするかを明示しないことがほとんどです。そのため、記号を見た瞬間に音量を上げると、頂点に着く前に音量を使い切ってしまい、いちばん盛り上がるべき場所で行き場がなくなります。手順を逆にしてください。まず crescendo の終点を探し、そこで出したい音量を決め、そこから逆算して現在地を決める。最初の数拍はむしろ抑えぎみに入るくらいで、ちょうど良く聞こえます。',
      },
      {
        heading: '音量以外で「大きくなった」と感じさせる',
        body: '人の耳は音量の変化だけで高揚を感じるわけではありません。音色の明るさ、和音の厚み、アーティキュレーションの鋭さも「強くなった」という印象を作ります。とくに音量の幅が限られる楽器や、すでに f に近い場面では、音量を足すより響きの密度を変えるほうが効果的です。ラヴェルの「ボレロ」が、単一の旋律を繰り返しながら15分かけて一つの巨大な crescendo を成立させているのは、音量ではなく楽器の重ね方で厚みを増しているからです。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '旋律だけを強めても厚くなりません。内声や左手の音数の多い声部を先に増やすと、自然に膨らんで聞こえます。' },
      { name: '弦楽器', tip: '弓速と圧を同時に増やすと音が潰れます。まず弓速を上げ、圧は最後に足すと荒れません。' },
      { name: '管楽器', tip: '息の量を増やすとピッチが上ずりがちです。crescendo の頂点で音程が高くなっていないか、録音で確認してください。' },
    ],
    confusions: [
      { term: 'Rinforzando', slug: 'rinforzando', note: 'フレーズを一時的に補強する指示。crescendo のような継続的な変化ではなく、局所的な強めです。' },
      { term: 'Sforzando', slug: 'sforzando', note: 'その音だけを強調する指示。過程ではなく一点です。' },
      { term: 'Accelerando', slug: 'accelerando', note: '別の指示ですが、crescendo するとつられて速くなりがちです。テンポが動いていないか意識的に確認を。' },
    ],
    works: [
      { title: 'ロッシーニ「セビリアの理髪師」序曲', note: '同じ音型を繰り返しながら楽器を足していく手法は「ロッシーニ・クレッシェンド」と呼ばれます。' },
      { title: 'ラヴェル「ボレロ」', note: '曲全体が一つの crescendo。音量ではなく音色の厚みで増大を作る、究極の実例です。' },
    ],
  },

  'staccato': {
    lead: 'Staccato は staccare（切り離す）の過去分詞で、「切り離された」。「短く」ではなく「切り離す」であることが、この記号を読み解く鍵です。',
    sections: [
      {
        heading: '「短く」と「切り離す」の違い',
        body: '音価をおよそ半分にする、という説明が広く使われますが、これは目安にすぎません。staccato が求めているのは、前後の音とのつながりを断つことであって、可能な限り短くすることではありません。ゆったりした楽章の staccato は、速い楽章のそれよりずっと長く保たれます。音を短くしすぎると、軽やかさではなく神経質さが出てしまいます。まず「隣の音と切り離す」を満たし、そのうえでテンポと曲想に見合う長さを選んでください。',
      },
      {
        heading: '様式によって別物になる',
        body: '同じ点の記号でも、時代によって想定される音は大きく異なります。モーツァルトやハイドンの staccato は、音を短く弾き飛ばすというより、一音ずつ独立させて明晰さを出すためのものです。一方、20世紀以降の作品では鋭く打楽器的な発音を求める場合があります。楽譜の点だけを見て一律に処理せず、その作曲家が何を求めているかを、周囲のアーティキュレーションから読み取るのが実践的です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '指先だけで弾くと硬くなります。手首の弾力を使い、鍵盤から抜くように。ペダルは原則外しますが、和声を保つために浅く踏む選択もあります。' },
      { name: '弦楽器', tip: '弓を弦に置いて止めるか（マルテレ系）、弾ませるか（スピッカート）で音色がまったく変わります。楽譜の点だけでは決まらないため、曲想から選びます。' },
      { name: '管楽器', tip: '舌で音を「止める」のではなく、息は流し続けたまま舌で区切ります。息まで止めると、次の音の発音が遅れます。' },
    ],
    confusions: [
      { term: 'Staccatissimo', slug: 'staccatissimo', note: 'くさび形の記号。staccato よりさらに短く、鋭く切ります。' },
      { term: 'Spiccato', slug: 'spiccato', note: '弓を弾ませる弦楽器固有の奏法。staccato という記譜に対する、演奏上の一つの答えです。' },
      { term: 'Portato', slug: 'portato', note: 'スラーと点が併記された記号。切り離しつつも、やわらかくつなげます。' },
      { term: 'Marcato', slug: 'marcato', note: '「際立たせて」。強調の指示であり、切り離しの指示ではありません。' },
    ],
    works: [
      { title: 'ドビュッシー「子供の領分」より「ゴリウォーグのケークウォーク」', note: '切り離すことでリズムの輪郭が立ち、おどけた性格が生まれます。' },
      { title: 'モーツァルト ピアノソナタ K.331 第3楽章「トルコ行進曲」', note: '左手の切り離しが、行進の足取りそのものを作っています。' },
    ],
  },

  'tranquillo': {
    lead: 'Tranquillo は「静かに、穏やかに」。ただしこれは音量の指示ではありません。piano と混同されやすいのですが、tranquillo が指しているのは心理状態のほうです。',
    sections: [
      {
        heading: '弱くすることではない',
        body: 'ラテン語 tranquillus（凪いだ、平穏な）に由来し、イタリア語では今も「静かな、落ち着いた」を意味します。重要なのは、これが強弱記号ではないという点です。f のまま tranquillo ということもあり得ます。広い空間に響く大きな音が、少しも慌てていない——そういう静けさです。tranquillo を見たときに反射的に音量を落とすと、作曲家が求めた「落ち着き」ではなく、単に聞こえにくい音楽になってしまいます。',
      },
      {
        heading: '静けさは「揺れの少なさ」で作る',
        body: '穏やかさを最も強く感じさせるのは、実は音色よりもテンポの安定です。ルバートを控え、拍が規則正しく置かれているだけで、聴き手は落ち着きを受け取ります。逆に、音を小さくしても timing が揺れていると、静かというより不安げに聞こえます。まずテンポの揺れを削り、そのうえで音色を整えるという順序が有効です。',
      },
      {
        heading: '速度用語と組み合わせて使われる',
        body: 'tranquillo は性格の指示なので、単独よりも Andante tranquillo、Allegretto tranquillo のように速度用語と併記される形でよく現れます。曲の途中で単独で置かれている場合は、「ここから気持ちを鎮めて」という場面転換の合図と読むのが自然です。ドイツ語圏の作品では ruhig や ruhevoll が同じ役割を担います。マーラーの交響曲第4番第3楽章の Ruhevoll は、その代表的な例です。',
      },
    ],
    instruments: [
      { name: 'ピアノ', tip: '打鍵の速度を落とし、鍵盤の底まで時間をかけて下ろします。同じ音量でも、当たりの柔らかい音になります。' },
      { name: '弦楽器', tip: 'ビブラートを細く、遅く。弓は多めに使い、圧を減らすと、音量を保ったまま緊張感が抜けます。' },
      { name: '管楽器', tip: '音の立ち上がりを柔らかく。タンギングを弱め、ビブラートは控えめにすると落ち着きが出ます。' },
    ],
    confusions: [
      { term: 'Calma', slug: 'calma', note: 'ほぼ同義ですが、Calma は状態としての「静寂」そのものを指し、tranquillo よりも動きの少ない語感です。' },
      { term: 'Placido', slug: 'placido', note: '穏やかで受動的な静けさ。tranquillo より動きが少ない印象です。' },
      { term: 'Dolce', slug: 'dolce', note: '「甘く」。音色そのものへの指示であり、tranquillo のような心理状態の指示とは別物です。' },
    ],
    works: [
      { title: 'マーラー 交響曲第4番 第3楽章', note: 'Ruhevoll（安らかに）。ドイツ語で tranquillo に相当する指示の代表例です。' },
    ],
  },
};

export const hasArticle = (slug) => Object.prototype.hasOwnProperty.call(termArticles, slug);
