// Truyện cổ tích kể lại đơn giản (A1–B1), song ngữ Đức – Việt
const STORIES = [
 {
  "id": "hase-und-igel",
  "title": "Der Hase und der Igel",
  "title_vi": "Thỏ và Nhím",
  "level": "A1",
  "emoji": "🦔",
  "summary_vi": "Chú thỏ kiêu ngạo chê đôi chân ngắn của nhím. Nhờ một mẹo thông minh cùng vợ, nhím thắng cuộc chạy đua.",
  "sentences": [
   {
    "de": "Es ist ein schöner Sonntagmorgen im Herbst.",
    "vi": "Đó là một buổi sáng Chủ nhật mùa thu đẹp trời."
   },
   {
    "de": "Die Sonne scheint, und der Wind ist leicht.",
    "vi": "Mặt trời chiếu sáng và gió thổi nhẹ."
   },
   {
    "de": "Der Igel steht vor seiner Tür und ist froh.",
    "vi": "Chú nhím đứng trước cửa nhà và thấy vui vẻ."
   },
   {
    "de": "Er will zu seinem Feld gehen und die Rüben ansehen.",
    "vi": "Chú muốn ra ruộng để xem những củ cải."
   },
   {
    "de": "Auf dem Weg trifft er den Hasen.",
    "vi": "Trên đường đi, chú gặp thỏ."
   },
   {
    "de": "Der Igel sagt freundlich: „Guten Morgen!“",
    "vi": "Nhím thân thiện nói: „Chào buổi sáng!“"
   },
   {
    "de": "Der Hase ist stolz und grüßt nicht zurück.",
    "vi": "Thỏ kiêu ngạo và không chào lại."
   },
   {
    "de": "Er fragt: „Was machst du so früh auf dem Feld?“",
    "vi": "Thỏ hỏi: „Sáng sớm thế này cậu làm gì ngoài ruộng?“"
   },
   {
    "de": "„Ich gehe spazieren“, sagt der Igel.",
    "vi": "Nhím đáp: „Tôi đi dạo.“"
   },
   {
    "de": "Der Hase lacht: „Mit deinen kurzen, krummen Beinen?“",
    "vi": "Thỏ cười: „Với đôi chân ngắn cong queo của cậu ấy à?“"
   },
   {
    "de": "Der Igel ärgert sich ein bisschen.",
    "vi": "Nhím hơi bực mình."
   },
   {
    "de": "„Ich bin schneller als du“, sagt der Igel.",
    "vi": "Nhím nói: „Tôi chạy nhanh hơn cậu đấy.“"
   },
   {
    "de": "„Das ist lustig“, lacht der Hase.",
    "vi": "Thỏ cười: „Buồn cười thật.“"
   },
   {
    "de": "„Gut, wir machen ein Wettrennen!“",
    "vi": "„Được, chúng ta chạy thi nhé!“"
   },
   {
    "de": "Der Igel sagt: „Aber zuerst gehe ich nach Hause und frühstücke.“",
    "vi": "Nhím nói: „Nhưng trước hết tôi về nhà ăn sáng đã.“"
   },
   {
    "de": "Zu Hause spricht der Igel mit seiner Frau.",
    "vi": "Về nhà, nhím nói chuyện với vợ."
   },
   {
    "de": "Er denkt: „Meine Frau sieht genau aus wie ich.“",
    "vi": "Chú nghĩ: „Vợ mình trông giống hệt mình.“"
   },
   {
    "de": "Er erklärt ihr seinen klugen Plan.",
    "vi": "Chú giải thích cho vợ kế hoạch thông minh của mình."
   },
   {
    "de": "Die Frau geht an das Ende des Feldes.",
    "vi": "Vợ nhím đi đến cuối cánh đồng."
   },
   {
    "de": "Der Igel geht zum Hasen an den Anfang des Feldes.",
    "vi": "Nhím đến chỗ thỏ ở đầu cánh đồng."
   },
   {
    "de": "Der Hase zählt: „Eins, zwei, drei!“",
    "vi": "Thỏ đếm: „Một, hai, ba!“"
   },
   {
    "de": "Der Hase rennt los, so schnell er kann.",
    "vi": "Thỏ lao đi nhanh hết sức."
   },
   {
    "de": "Der Igel macht nur drei kleine Schritte.",
    "vi": "Nhím chỉ bước ba bước nhỏ."
   },
   {
    "de": "Dann bleibt er ruhig im Feld sitzen.",
    "vi": "Rồi chú ngồi yên lặng trong ruộng."
   },
   {
    "de": "Der Hase kommt am Ende des Feldes an.",
    "vi": "Thỏ chạy đến cuối cánh đồng."
   },
   {
    "de": "Da ruft die Igelfrau: „Ich bin schon da!“",
    "vi": "Lúc đó vợ nhím gọi to: „Tôi đến rồi đây!“"
   },
   {
    "de": "Der Hase ist sehr überrascht.",
    "vi": "Thỏ vô cùng ngạc nhiên."
   },
   {
    "de": "„Noch einmal!“, ruft er und rennt zurück.",
    "vi": "„Chạy lại lần nữa!“, thỏ hét lên rồi chạy ngược về."
   },
   {
    "de": "Am Anfang des Feldes ruft der Igel: „Ich bin schon da!“",
    "vi": "Ở đầu cánh đồng, nhím gọi: „Tôi đến rồi đây!“"
   },
   {
    "de": "Der Hase rennt immer wieder hin und her.",
    "vi": "Thỏ cứ chạy đi chạy lại mãi."
   },
   {
    "de": "Jedes Mal ruft ein Igel: „Ich bin schon da!“",
    "vi": "Lần nào cũng có một chú nhím gọi: „Tôi đến rồi đây!“"
   },
   {
    "de": "Endlich ist der Hase sehr müde.",
    "vi": "Cuối cùng thỏ mệt lả."
   },
   {
    "de": "Er legt sich ins weiche Gras und schläft ein.",
    "vi": "Thỏ nằm xuống bãi cỏ mềm và ngủ thiếp đi."
   },
   {
    "de": "Der Igel und seine Frau gehen fröhlich nach Hause.",
    "vi": "Nhím và vợ vui vẻ trở về nhà."
   },
   {
    "de": "Von diesem Tag an lacht der Hase nicht mehr über andere Tiere.",
    "vi": "Từ hôm đó, thỏ không còn chê cười các con vật khác nữa."
   },
   {
    "de": "Und die Igel leben glücklich und zufrieden.",
    "vi": "Và vợ chồng nhím sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "der Hase",
    "vi": "con thỏ"
   },
   {
    "de": "der Igel",
    "vi": "con nhím"
   },
   {
    "de": "die Igelfrau",
    "vi": "nhím vợ"
   },
   {
    "de": "der Morgen",
    "vi": "buổi sáng"
   },
   {
    "de": "der Herbst",
    "vi": "mùa thu"
   },
   {
    "de": "das Feld",
    "vi": "cánh đồng, thửa ruộng"
   },
   {
    "de": "die Rübe",
    "vi": "củ cải"
   },
   {
    "de": "das Bein",
    "vi": "cái chân"
   },
   {
    "de": "das Wettrennen",
    "vi": "cuộc chạy thi"
   },
   {
    "de": "der Plan",
    "vi": "kế hoạch"
   },
   {
    "de": "der Schritt",
    "vi": "bước chân"
   },
   {
    "de": "das Gras",
    "vi": "cỏ"
   }
  ]
 },
 {
  "id": "suesser-brei",
  "title": "Der süße Brei",
  "title_vi": "Nồi cháo ngọt",
  "level": "A1",
  "emoji": "🍲",
  "summary_vi": "Một cô bé nghèo được bà cụ tặng chiếc nồi thần biết nấu cháo ngọt. Khi người mẹ quên câu thần chú, cháo tràn khắp thành phố cho đến khi cô bé trở về.",
  "sentences": [
   {
    "de": "Es war einmal ein kleines Mädchen.",
    "vi": "Ngày xửa ngày xưa, có một cô bé."
   },
   {
    "de": "Das Mädchen wohnt mit seiner Mutter in einem kleinen Haus.",
    "vi": "Cô bé sống cùng mẹ trong một ngôi nhà nhỏ."
   },
   {
    "de": "Die beiden sind sehr arm.",
    "vi": "Hai mẹ con rất nghèo."
   },
   {
    "de": "Sie haben nichts mehr zu essen.",
    "vi": "Họ không còn gì để ăn nữa."
   },
   {
    "de": "Eines Tages geht das Mädchen in den Wald.",
    "vi": "Một hôm, cô bé đi vào rừng."
   },
   {
    "de": "Dort trifft es eine alte Frau.",
    "vi": "Ở đó, cô bé gặp một bà cụ."
   },
   {
    "de": "Die alte Frau lächelt freundlich.",
    "vi": "Bà cụ mỉm cười hiền hậu."
   },
   {
    "de": "Sie schenkt dem Mädchen einen kleinen Topf.",
    "vi": "Bà tặng cô bé một chiếc nồi nhỏ."
   },
   {
    "de": "„Das ist ein Zaubertopf“, sagt die Frau.",
    "vi": "Bà cụ nói: „Đây là một chiếc nồi thần.“"
   },
   {
    "de": "„Du sagst: Töpfchen, koch!“",
    "vi": "„Con hãy nói: Nồi ơi, nấu đi!“"
   },
   {
    "de": "„Dann kocht der Topf süßen Brei.“",
    "vi": "„Thế là nồi sẽ nấu cháo ngọt.“"
   },
   {
    "de": "„Du sagst: Töpfchen, steh!“",
    "vi": "„Con hãy nói: Nồi ơi, dừng lại!“"
   },
   {
    "de": "„Dann hört der Topf auf.“",
    "vi": "„Thế là nồi sẽ ngừng nấu.“"
   },
   {
    "de": "Das Mädchen bedankt sich und läuft nach Hause.",
    "vi": "Cô bé cảm ơn bà rồi chạy về nhà."
   },
   {
    "de": "Zu Hause zeigt es der Mutter den Topf.",
    "vi": "Về đến nhà, cô bé cho mẹ xem chiếc nồi."
   },
   {
    "de": "Es sagt: „Töpfchen, koch!“",
    "vi": "Cô bé nói: „Nồi ơi, nấu đi!“"
   },
   {
    "de": "Und wirklich, der Topf kocht warmen, süßen Brei.",
    "vi": "Và thật vậy, chiếc nồi nấu ra cháo ngọt ấm nóng."
   },
   {
    "de": "Die Mutter und das Mädchen essen, bis sie satt sind.",
    "vi": "Hai mẹ con ăn cho đến khi no bụng."
   },
   {
    "de": "Dann sagt das Mädchen: „Töpfchen, steh!“",
    "vi": "Rồi cô bé nói: „Nồi ơi, dừng lại!“"
   },
   {
    "de": "Der Topf hört sofort auf.",
    "vi": "Chiếc nồi lập tức ngừng nấu."
   },
   {
    "de": "Jetzt haben sie jeden Tag genug zu essen.",
    "vi": "Giờ đây ngày nào họ cũng có đủ ăn."
   },
   {
    "de": "Eines Tages geht das Mädchen allein spazieren.",
    "vi": "Một hôm, cô bé đi dạo một mình."
   },
   {
    "de": "Die Mutter bleibt zu Hause und hat Hunger.",
    "vi": "Người mẹ ở nhà và thấy đói bụng."
   },
   {
    "de": "Sie sagt: „Töpfchen, koch!“",
    "vi": "Bà nói: „Nồi ơi, nấu đi!“"
   },
   {
    "de": "Der Topf kocht und kocht.",
    "vi": "Chiếc nồi nấu mãi, nấu mãi."
   },
   {
    "de": "Die Mutter ist bald satt.",
    "vi": "Chẳng bao lâu người mẹ đã no."
   },
   {
    "de": "Aber sie hat das Zauberwort vergessen.",
    "vi": "Nhưng bà đã quên mất câu thần chú."
   },
   {
    "de": "Der Topf kocht immer weiter.",
    "vi": "Chiếc nồi cứ tiếp tục nấu."
   },
   {
    "de": "Der Brei fließt aus dem Topf auf den Tisch.",
    "vi": "Cháo trào ra khỏi nồi, chảy xuống bàn."
   },
   {
    "de": "Bald ist die ganze Küche voll Brei.",
    "vi": "Chẳng mấy chốc cả gian bếp đầy cháo."
   },
   {
    "de": "Dann ist das ganze Haus voll Brei.",
    "vi": "Rồi cả ngôi nhà cũng đầy cháo."
   },
   {
    "de": "Der Brei fließt auf die Straße und in die ganze Stadt.",
    "vi": "Cháo chảy ra đường và lan khắp thành phố."
   },
   {
    "de": "Die Leute staunen und wissen nicht, was sie tun sollen.",
    "vi": "Mọi người ngạc nhiên và không biết phải làm gì."
   },
   {
    "de": "Endlich kommt das Mädchen nach Hause.",
    "vi": "Cuối cùng cô bé cũng về đến nhà."
   },
   {
    "de": "Es sieht den Brei und sagt ruhig: „Töpfchen, steh!“",
    "vi": "Cô bé nhìn thấy cháo và bình tĩnh nói: „Nồi ơi, dừng lại!“"
   },
   {
    "de": "Sofort hört der Topf auf zu kochen.",
    "vi": "Ngay lập tức chiếc nồi ngừng nấu."
   },
   {
    "de": "Alle Leute in der Stadt essen fröhlich von dem süßen Brei.",
    "vi": "Mọi người trong thành phố vui vẻ ăn cháo ngọt."
   },
   {
    "de": "Niemand hat an diesem Tag Hunger.",
    "vi": "Hôm ấy không ai phải chịu đói."
   },
   {
    "de": "Und das Mädchen und seine Mutter leben glücklich und zufrieden.",
    "vi": "Và cô bé cùng mẹ sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "das Mädchen",
    "vi": "cô bé"
   },
   {
    "de": "die Mutter",
    "vi": "người mẹ"
   },
   {
    "de": "der Topf",
    "vi": "cái nồi"
   },
   {
    "de": "der Brei",
    "vi": "cháo"
   },
   {
    "de": "der Wald",
    "vi": "khu rừng"
   },
   {
    "de": "die alte Frau",
    "vi": "bà cụ"
   },
   {
    "de": "das Zauberwort",
    "vi": "câu thần chú"
   },
   {
    "de": "die Küche",
    "vi": "nhà bếp"
   },
   {
    "de": "das Haus",
    "vi": "ngôi nhà"
   },
   {
    "de": "die Straße",
    "vi": "con đường, đường phố"
   },
   {
    "de": "die Stadt",
    "vi": "thành phố"
   },
   {
    "de": "der Hunger",
    "vi": "cơn đói"
   }
  ]
 },
 {
  "id": "sterntaler",
  "title": "Die Sterntaler",
  "title_vi": "Những đồng tiền sao",
  "level": "A1",
  "emoji": "⭐",
  "summary_vi": "Một cô bé nghèo nhưng tốt bụng cho đi tất cả những gì mình có. Đêm ấy, các vì sao rơi xuống thành những đồng tiền vàng dành cho em.",
  "sentences": [
   {
    "de": "Es war einmal ein kleines Mädchen.",
    "vi": "Ngày xửa ngày xưa, có một cô bé."
   },
   {
    "de": "Es hat keinen Vater und keine Mutter mehr.",
    "vi": "Cô bé không còn cha và cũng không còn mẹ."
   },
   {
    "de": "Das Mädchen ist sehr arm.",
    "vi": "Cô bé rất nghèo."
   },
   {
    "de": "Es hat kein Haus und kein Bett.",
    "vi": "Cô bé không có nhà, cũng không có giường."
   },
   {
    "de": "Es hat nur seine Kleider und ein Stück Brot.",
    "vi": "Cô bé chỉ có quần áo trên người và một mẩu bánh mì."
   },
   {
    "de": "Aber das Mädchen hat ein gutes Herz.",
    "vi": "Nhưng cô bé có một trái tim nhân hậu."
   },
   {
    "de": "Eines Tages geht es hinaus auf das Feld.",
    "vi": "Một hôm, cô bé đi ra cánh đồng."
   },
   {
    "de": "Dort trifft es einen armen Mann.",
    "vi": "Ở đó, cô bé gặp một người đàn ông nghèo."
   },
   {
    "de": "Der Mann sagt: „Ich habe so großen Hunger.“",
    "vi": "Người đàn ông nói: „Tôi đói quá.“"
   },
   {
    "de": "Das Mädchen gibt ihm sein ganzes Brot.",
    "vi": "Cô bé đưa cho ông cả mẩu bánh mì của mình."
   },
   {
    "de": "„Bitte, iss das Brot“, sagt es freundlich.",
    "vi": "Cô bé dịu dàng nói: „Ông ăn bánh đi ạ.“"
   },
   {
    "de": "Dann geht es weiter.",
    "vi": "Rồi cô bé tiếp tục đi."
   },
   {
    "de": "Ein Kind kommt und weint.",
    "vi": "Một đứa trẻ đi tới và khóc."
   },
   {
    "de": "„Mein Kopf ist so kalt“, sagt das Kind.",
    "vi": "Đứa trẻ nói: „Đầu em lạnh quá.“"
   },
   {
    "de": "Das Mädchen gibt ihm seine Mütze.",
    "vi": "Cô bé đưa cho em chiếc mũ của mình."
   },
   {
    "de": "Bald kommt noch ein Kind.",
    "vi": "Chẳng bao lâu lại có thêm một đứa trẻ nữa."
   },
   {
    "de": "Es hat keine Jacke und friert.",
    "vi": "Em không có áo khoác và đang run vì lạnh."
   },
   {
    "de": "Das Mädchen gibt ihm seine Jacke.",
    "vi": "Cô bé đưa cho em chiếc áo khoác của mình."
   },
   {
    "de": "Ein drittes Kind bittet um ein Kleid.",
    "vi": "Đứa trẻ thứ ba xin một chiếc váy."
   },
   {
    "de": "Das Mädchen gibt ihm auch sein Kleid.",
    "vi": "Cô bé cũng đưa cho em chiếc váy của mình."
   },
   {
    "de": "Am Abend kommt es in einen dunklen Wald.",
    "vi": "Đến tối, cô bé đi vào một khu rừng tối."
   },
   {
    "de": "Dort steht noch ein Kind und friert.",
    "vi": "Ở đó lại có một đứa trẻ đang đứng run vì lạnh."
   },
   {
    "de": "Das Mädchen denkt: „Es ist dunkel, niemand sieht mich.“",
    "vi": "Cô bé nghĩ: „Trời tối rồi, chẳng ai nhìn thấy mình đâu.“"
   },
   {
    "de": "Es gibt dem Kind auch sein Hemd.",
    "vi": "Cô bé đưa cho em cả chiếc áo lót của mình."
   },
   {
    "de": "Jetzt hat das Mädchen gar nichts mehr.",
    "vi": "Giờ đây cô bé không còn gì nữa cả."
   },
   {
    "de": "Es steht still im Wald und schaut zum Himmel.",
    "vi": "Cô bé đứng lặng trong rừng và ngước nhìn bầu trời."
   },
   {
    "de": "Da fallen plötzlich Sterne vom Himmel.",
    "vi": "Bỗng nhiên, những ngôi sao rơi xuống từ trên trời."
   },
   {
    "de": "Auf dem Boden glänzen sie hell.",
    "vi": "Chúng lấp lánh sáng trên mặt đất."
   },
   {
    "de": "Die Sterne sind jetzt Goldmünzen, die Sterntaler.",
    "vi": "Những ngôi sao đã biến thành tiền vàng, gọi là tiền sao."
   },
   {
    "de": "Und das Mädchen hat auf einmal ein neues Hemd an.",
    "vi": "Và bỗng nhiên cô bé đã mặc một chiếc áo mới."
   },
   {
    "de": "Das Hemd ist aus feinem, weichem Stoff.",
    "vi": "Chiếc áo làm bằng vải mịn và mềm mại."
   },
   {
    "de": "Das Mädchen sammelt die Taler ein.",
    "vi": "Cô bé nhặt những đồng tiền vàng lên."
   },
   {
    "de": "Es ist nicht mehr arm.",
    "vi": "Cô bé không còn nghèo nữa."
   },
   {
    "de": "Bald findet es ein warmes Zuhause.",
    "vi": "Chẳng bao lâu, cô bé tìm được một mái nhà ấm áp."
   },
   {
    "de": "Und das Mädchen lebt glücklich und zufrieden.",
    "vi": "Và cô bé sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "das Mädchen",
    "vi": "cô bé"
   },
   {
    "de": "das Brot",
    "vi": "bánh mì"
   },
   {
    "de": "das Herz",
    "vi": "trái tim"
   },
   {
    "de": "das Feld",
    "vi": "cánh đồng"
   },
   {
    "de": "das Kind",
    "vi": "đứa trẻ"
   },
   {
    "de": "die Mütze",
    "vi": "chiếc mũ"
   },
   {
    "de": "die Jacke",
    "vi": "áo khoác"
   },
   {
    "de": "das Kleid",
    "vi": "chiếc váy"
   },
   {
    "de": "das Hemd",
    "vi": "áo sơ mi, áo lót"
   },
   {
    "de": "der Himmel",
    "vi": "bầu trời"
   },
   {
    "de": "der Stern",
    "vi": "ngôi sao"
   },
   {
    "de": "die Goldmünze",
    "vi": "đồng tiền vàng"
   }
  ]
 },
 {
  "id": "haessliches-entlein",
  "title": "Das hässliche Entlein",
  "title_vi": "Vịt con xấu xí",
  "level": "A2",
  "emoji": "🦢",
  "summary_vi": "Một chú vịt con bị mọi người chê xấu nên phải rời nhà và trải qua một mùa đông lạnh giá. Đến mùa xuân, chú phát hiện ra mình là một con thiên nga trắng xinh đẹp.",
  "sentences": [
   {
    "de": "Es war Sommer auf dem Land.",
    "vi": "Đó là mùa hè ở vùng quê."
   },
   {
    "de": "Eine Entenmutter hat lange auf ihren Eiern gesessen.",
    "vi": "Một vịt mẹ đã ấp trứng rất lâu."
   },
   {
    "de": "Eines Tages sind die kleinen Entlein aus den Eiern gekommen.",
    "vi": "Một ngày nọ, những chú vịt con đã chui ra khỏi trứng."
   },
   {
    "de": "Nur ein großes Ei war noch nicht offen.",
    "vi": "Chỉ còn một quả trứng to vẫn chưa nở."
   },
   {
    "de": "Endlich ist auch das letzte Entlein gekommen.",
    "vi": "Cuối cùng, chú vịt con cuối cùng cũng ra đời."
   },
   {
    "de": "Es war groß, grau und nicht so hübsch wie die anderen.",
    "vi": "Chú to, xám và không xinh xắn như những con khác."
   },
   {
    "de": "Die anderen Tiere haben gelacht.",
    "vi": "Những con vật khác đã cười nhạo chú."
   },
   {
    "de": "„Du bist so hässlich!“, haben die Hühner gesagt.",
    "vi": "“Mày xấu xí quá!” lũ gà nói."
   },
   {
    "de": "Auch die Geschwister waren nicht nett zu ihm.",
    "vi": "Cả anh chị em cũng không tử tế với chú."
   },
   {
    "de": "Das Entlein war sehr traurig.",
    "vi": "Chú vịt con rất buồn."
   },
   {
    "de": "Eines Morgens ist es weggelaufen.",
    "vi": "Một buổi sáng nọ, chú đã bỏ đi."
   },
   {
    "de": "Es ist über Wiesen und Felder gelaufen.",
    "vi": "Chú đi qua những đồng cỏ và cánh đồng."
   },
   {
    "de": "Bei wilden Enten hat es eine Nacht geschlafen.",
    "vi": "Chú ngủ một đêm ở chỗ những con vịt trời."
   },
   {
    "de": "Aber auch dort wollte niemand mit ihm spielen.",
    "vi": "Nhưng ở đó cũng không ai muốn chơi với chú."
   },
   {
    "de": "Im Herbst hat das Entlein große, weiße Vögel gesehen.",
    "vi": "Vào mùa thu, chú vịt con nhìn thấy những con chim lớn màu trắng."
   },
   {
    "de": "Sie hatten lange Hälse und schöne Flügel.",
    "vi": "Chúng có cổ dài và đôi cánh đẹp."
   },
   {
    "de": "Sie sind in den warmen Süden geflogen.",
    "vi": "Chúng bay về phương Nam ấm áp."
   },
   {
    "de": "Das Entlein hat ihnen lange nachgeschaut.",
    "vi": "Chú vịt con nhìn theo chúng rất lâu."
   },
   {
    "de": "Dann ist der Winter gekommen.",
    "vi": "Rồi mùa đông đến."
   },
   {
    "de": "Es war sehr kalt, und der See war voll Eis.",
    "vi": "Trời rất lạnh, và mặt hồ phủ đầy băng."
   },
   {
    "de": "Ein freundlicher Bauer hat das Entlein gefunden.",
    "vi": "Một bác nông dân tốt bụng đã tìm thấy chú vịt con."
   },
   {
    "de": "Er hat es nach Hause getragen.",
    "vi": "Bác ôm chú về nhà."
   },
   {
    "de": "Dort war es warm, und das Entlein hatte etwas zu essen.",
    "vi": "Ở đó ấm áp, và chú vịt con có cái để ăn."
   },
   {
    "de": "Endlich ist der Frühling gekommen.",
    "vi": "Cuối cùng mùa xuân cũng đến."
   },
   {
    "de": "Die Sonne war warm, und die Blumen waren bunt.",
    "vi": "Mặt trời ấm áp, và hoa nở rực rỡ sắc màu."
   },
   {
    "de": "Das Entlein hat seine Flügel geöffnet.",
    "vi": "Chú vịt con dang rộng đôi cánh."
   },
   {
    "de": "Sie waren groß und stark, und es ist geflogen.",
    "vi": "Đôi cánh to và khỏe, và chú đã bay lên."
   },
   {
    "de": "Auf einem See hat es drei schöne weiße Vögel gesehen.",
    "vi": "Trên một mặt hồ, chú thấy ba con chim trắng xinh đẹp."
   },
   {
    "de": "Es waren Schwäne.",
    "vi": "Đó là những con thiên nga."
   },
   {
    "de": "Langsam ist das Entlein zu ihnen geschwommen.",
    "vi": "Chú vịt con chậm rãi bơi về phía họ."
   },
   {
    "de": "Dann hat es ins Wasser geschaut.",
    "vi": "Rồi chú nhìn xuống mặt nước."
   },
   {
    "de": "Dort hat es kein graues Entlein mehr gesehen.",
    "vi": "Ở đó chú không còn thấy một chú vịt con xám xịt nữa."
   },
   {
    "de": "Es war selbst ein schöner, weißer Schwan!",
    "vi": "Chính chú là một con thiên nga trắng xinh đẹp!"
   },
   {
    "de": "Die anderen Schwäne haben es freundlich begrüßt.",
    "vi": "Những con thiên nga khác thân thiện chào đón chú."
   },
   {
    "de": "Kinder am Ufer haben gerufen: „Der neue Schwan ist der schönste!“",
    "vi": "Những đứa trẻ trên bờ reo lên: “Con thiên nga mới là con đẹp nhất!”"
   },
   {
    "de": "Der junge Schwan war nicht stolz, sondern nur glücklich.",
    "vi": "Chàng thiên nga trẻ không kiêu ngạo, mà chỉ thấy hạnh phúc."
   },
   {
    "de": "Endlich hatte er eine Familie und viele Freunde.",
    "vi": "Cuối cùng chú đã có một gia đình và nhiều bạn bè."
   }
  ],
  "glossary": [
   {
    "de": "die Ente",
    "vi": "con vịt"
   },
   {
    "de": "das Entlein",
    "vi": "vịt con"
   },
   {
    "de": "das Ei",
    "vi": "quả trứng"
   },
   {
    "de": "das Huhn",
    "vi": "con gà"
   },
   {
    "de": "die Wiese",
    "vi": "đồng cỏ"
   },
   {
    "de": "der Vogel",
    "vi": "con chim"
   },
   {
    "de": "der Flügel",
    "vi": "đôi cánh"
   },
   {
    "de": "der Winter",
    "vi": "mùa đông"
   },
   {
    "de": "der Bauer",
    "vi": "người nông dân"
   },
   {
    "de": "der Frühling",
    "vi": "mùa xuân"
   },
   {
    "de": "der See",
    "vi": "cái hồ"
   },
   {
    "de": "der Schwan",
    "vi": "con thiên nga"
   }
  ]
 },
 {
  "id": "wolf-und-sieben-geisslein",
  "title": "Der Wolf und die sieben Geißlein",
  "title_vi": "Chó sói và bảy chú dê con",
  "level": "A2",
  "emoji": "🐐",
  "summary_vi": "Chó sói dùng mẹo để bảy chú dê con mở cửa, nhưng các chú trốn kỹ nên sói chẳng tìm thấy ai. Dê mẹ trở về, đuổi sói đi thật xa, và cả nhà lại bình yên bên nhau.",
  "sentences": [
   {
    "de": "Es war einmal eine Ziegenmutter mit sieben kleinen Geißlein.",
    "vi": "Ngày xửa ngày xưa, có một dê mẹ với bảy chú dê con."
   },
   {
    "de": "Sie liebte ihre Kinder sehr.",
    "vi": "Dê mẹ rất thương các con."
   },
   {
    "de": "Eines Tages wollte sie in den Wald gehen und Futter holen.",
    "vi": "Một hôm, dê mẹ muốn vào rừng kiếm thức ăn."
   },
   {
    "de": "Sie sagte: „Liebe Kinder, passt gut auf den Wolf auf.“",
    "vi": "Dê mẹ nói: „Các con yêu, hãy coi chừng chó sói nhé.“"
   },
   {
    "de": "„Er hat eine raue Stimme und schwarze Pfoten.“",
    "vi": "„Nó có giọng khàn khàn và bàn chân đen.“"
   },
   {
    "de": "„Macht ihm die Tür nicht auf.“",
    "vi": "„Đừng mở cửa cho nó.“"
   },
   {
    "de": "Die Geißlein sagten: „Liebe Mutter, wir passen gut auf.“",
    "vi": "Các chú dê con đáp: „Mẹ yêu, chúng con sẽ cẩn thận ạ.“"
   },
   {
    "de": "Dann ging die Mutter beruhigt los.",
    "vi": "Rồi dê mẹ yên tâm lên đường."
   },
   {
    "de": "Bald klopfte es an der Tür.",
    "vi": "Chẳng bao lâu có tiếng gõ cửa."
   },
   {
    "de": "„Macht auf, ich bin eure Mutter“, rief eine raue Stimme.",
    "vi": "Một giọng khàn khàn gọi: „Mở cửa ra, mẹ đây.“"
   },
   {
    "de": "„Nein, du bist der Wolf!“, riefen die Geißlein.",
    "vi": "Các chú dê con kêu lên: „Không, ngươi là chó sói!“"
   },
   {
    "de": "„Unsere Mutter hat eine feine Stimme.“",
    "vi": "„Mẹ chúng ta có giọng nói nhỏ nhẹ.“"
   },
   {
    "de": "Der Wolf ging weg und aß ein Stück Kreide.",
    "vi": "Chó sói bỏ đi và ăn một mẩu phấn."
   },
   {
    "de": "Danach war seine Stimme ganz fein.",
    "vi": "Sau đó giọng nó trở nên rất nhỏ nhẹ."
   },
   {
    "de": "Er klopfte wieder und rief: „Macht auf, liebe Kinder!“",
    "vi": "Nó lại gõ cửa và gọi: „Mở cửa ra, các con yêu!“"
   },
   {
    "de": "Aber er legte seine schwarze Pfote auf das Fenster.",
    "vi": "Nhưng nó đặt bàn chân đen lên cửa sổ."
   },
   {
    "de": "„Nein, unsere Mutter hat keine schwarzen Füße“, riefen die Geißlein.",
    "vi": "Các chú dê con kêu lên: „Không, mẹ chúng ta không có chân đen.“"
   },
   {
    "de": "Da ging der Wolf zum Müller.",
    "vi": "Thế là chó sói đến chỗ bác thợ xay bột."
   },
   {
    "de": "Der Müller streute ihm weißes Mehl auf die Pfote.",
    "vi": "Bác thợ xay rắc bột mì trắng lên chân nó."
   },
   {
    "de": "Nun klopfte der Wolf zum dritten Mal.",
    "vi": "Bây giờ chó sói gõ cửa lần thứ ba."
   },
   {
    "de": "Er zeigte seine weiße Pfote und sprach mit feiner Stimme.",
    "vi": "Nó giơ bàn chân trắng ra và nói bằng giọng nhỏ nhẹ."
   },
   {
    "de": "Die Geißlein glaubten ihm und öffneten die Tür.",
    "vi": "Các chú dê con tin nó và mở cửa."
   },
   {
    "de": "Als sie den Wolf sahen, erschraken sie sehr.",
    "vi": "Khi nhìn thấy chó sói, các chú hoảng hốt."
   },
   {
    "de": "Schnell versteckten sie sich überall im Haus.",
    "vi": "Các chú nhanh chóng trốn khắp nơi trong nhà."
   },
   {
    "de": "Eines lief unter den Tisch, eines ins Bett und eines in den Schrank.",
    "vi": "Một chú chạy xuống gầm bàn, một chú chui vào giường, một chú trốn vào tủ."
   },
   {
    "de": "Die anderen versteckten sich hinter dem Vorhang und unter der Bank.",
    "vi": "Mấy chú khác trốn sau rèm cửa và dưới ghế dài."
   },
   {
    "de": "Das jüngste Geißlein versteckte sich im Kasten der großen Uhr.",
    "vi": "Chú dê út trốn trong thân chiếc đồng hồ lớn."
   },
   {
    "de": "Der Wolf suchte und suchte, aber er fand niemanden.",
    "vi": "Chó sói tìm mãi, tìm mãi nhưng chẳng thấy ai."
   },
   {
    "de": "Er wurde müde und ging wieder hinaus.",
    "vi": "Nó mệt và lại đi ra ngoài."
   },
   {
    "de": "Unter einem Baum auf der Wiese schlief er ein und schnarchte laut.",
    "vi": "Nó ngủ thiếp đi dưới một gốc cây trên đồng cỏ và ngáy to."
   },
   {
    "de": "Bald kam die Mutter nach Hause.",
    "vi": "Chẳng bao lâu dê mẹ về đến nhà."
   },
   {
    "de": "Die Tür war offen, und das Haus war ganz still.",
    "vi": "Cửa đang mở và ngôi nhà im phăng phắc."
   },
   {
    "de": "Sie rief leise die Namen ihrer Kinder.",
    "vi": "Dê mẹ khẽ gọi tên từng đứa con."
   },
   {
    "de": "Da kamen alle sieben Geißlein aus ihren Verstecken.",
    "vi": "Thế là cả bảy chú dê con chui ra khỏi chỗ trốn."
   },
   {
    "de": "Die Mutter umarmte jedes Kind ganz fest.",
    "vi": "Dê mẹ ôm chặt từng đứa con."
   },
   {
    "de": "Dann gingen sie zusammen hinaus zu dem schlafenden Wolf.",
    "vi": "Rồi cả nhà cùng đi ra chỗ chó sói đang ngủ."
   },
   {
    "de": "Die Mutter rief laut: „Geh weg, Wolf, und komm nie wieder!“",
    "vi": "Dê mẹ nói to: „Đi đi, chó sói, và đừng bao giờ quay lại!“"
   },
   {
    "de": "Der Wolf wachte auf und erschrak sehr.",
    "vi": "Chó sói tỉnh dậy và giật mình hoảng sợ."
   },
   {
    "de": "Er lief schnell weit weg über die Berge.",
    "vi": "Nó chạy thật nhanh, thật xa qua những ngọn núi."
   },
   {
    "de": "Er kam nie wieder zurück.",
    "vi": "Nó không bao giờ quay lại nữa."
   },
   {
    "de": "Die Geißlein tanzten vor Freude um den Baum.",
    "vi": "Các chú dê con vui mừng nhảy múa quanh gốc cây."
   },
   {
    "de": "Am Abend schliefen alle sicher und warm in ihren Betten.",
    "vi": "Buổi tối, cả nhà ngủ yên bình và ấm áp trên giường."
   },
   {
    "de": "Und sie lebten glücklich und zufrieden.",
    "vi": "Và họ sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "die Ziegenmutter",
    "vi": "dê mẹ"
   },
   {
    "de": "das Geißlein",
    "vi": "chú dê con"
   },
   {
    "de": "der Wolf",
    "vi": "con sói"
   },
   {
    "de": "die Stimme",
    "vi": "giọng nói"
   },
   {
    "de": "die Pfote",
    "vi": "bàn chân (thú)"
   },
   {
    "de": "die Tür",
    "vi": "cánh cửa"
   },
   {
    "de": "die Kreide",
    "vi": "viên phấn"
   },
   {
    "de": "der Müller",
    "vi": "người thợ xay bột"
   },
   {
    "de": "das Mehl",
    "vi": "bột mì"
   },
   {
    "de": "das Versteck",
    "vi": "chỗ trốn"
   },
   {
    "de": "die Uhr",
    "vi": "đồng hồ"
   },
   {
    "de": "die Wiese",
    "vi": "đồng cỏ"
   },
   {
    "de": "der Berg",
    "vi": "ngọn núi"
   }
  ]
 },
 {
  "id": "bremer-stadtmusikanten",
  "title": "Die Bremer Stadtmusikanten",
  "title_vi": "Những nhạc sĩ thành Bremen",
  "level": "A2",
  "emoji": "🐓",
  "summary_vi": "Bốn con vật già là lừa, chó, mèo và gà trống cùng nhau lên đường đến Bremen để làm nhạc sĩ. Trên đường đi, chúng dùng tiếng nhạc dọa bọn cướp chạy mất và tìm được một ngôi nhà ấm cúng.",
  "sentences": [
   {
    "de": "Es war einmal ein Esel.",
    "vi": "Ngày xửa ngày xưa, có một chú lừa."
   },
   {
    "de": "Er hatte viele Jahre fleißig für seinen Herrn gearbeitet.",
    "vi": "Chú đã chăm chỉ làm việc cho chủ suốt nhiều năm."
   },
   {
    "de": "Jetzt war er alt und müde.",
    "vi": "Giờ đây chú đã già và mệt mỏi."
   },
   {
    "de": "Sein Herr wollte ihn nicht mehr haben.",
    "vi": "Người chủ không muốn giữ chú nữa."
   },
   {
    "de": "Da dachte der Esel: „Ich gehe nach Bremen und werde Stadtmusikant.“",
    "vi": "Lừa nghĩ: „Mình sẽ đến Bremen và làm nhạc sĩ của thành phố.“"
   },
   {
    "de": "Unterwegs traf er einen alten Hund.",
    "vi": "Trên đường đi, chú gặp một con chó già."
   },
   {
    "de": "Der Hund lag am Weg und war traurig.",
    "vi": "Con chó nằm bên đường, trông rất buồn."
   },
   {
    "de": "„Ich bin zu alt für die Jagd“, sagte der Hund.",
    "vi": "Chó nói: „Tôi đã quá già để đi săn rồi.“"
   },
   {
    "de": "„Komm mit nach Bremen“, sagte der Esel.",
    "vi": "Lừa nói: „Hãy cùng tôi đến Bremen.“"
   },
   {
    "de": "„Wir machen zusammen Musik.“",
    "vi": "„Chúng ta sẽ cùng nhau chơi nhạc.“"
   },
   {
    "de": "Bald trafen sie eine Katze mit einem traurigen Gesicht.",
    "vi": "Chẳng bao lâu, chúng gặp một cô mèo với gương mặt buồn bã."
   },
   {
    "de": "„Ich kann keine Mäuse mehr fangen“, sagte die Katze.",
    "vi": "Mèo nói: „Tôi không bắt chuột được nữa.“"
   },
   {
    "de": "„Komm mit uns, du singst doch so schön“, sagte der Hund.",
    "vi": "Chó nói: „Đi cùng chúng tôi đi, bạn hát hay lắm mà.“"
   },
   {
    "de": "Dann kamen sie an einem Bauernhof vorbei.",
    "vi": "Rồi chúng đi ngang qua một trang trại."
   },
   {
    "de": "Dort saß ein Hahn auf dem Tor und krähte laut.",
    "vi": "Ở đó có một chú gà trống đậu trên cổng và gáy thật to."
   },
   {
    "de": "Der Hahn war traurig, denn niemand wollte ihn mehr hören.",
    "vi": "Gà trống buồn vì không còn ai muốn nghe chú gáy nữa."
   },
   {
    "de": "„Komm mit nach Bremen“, sagte der Esel.",
    "vi": "Lừa nói: „Hãy cùng đến Bremen nhé.“"
   },
   {
    "de": "„Du hast eine gute Stimme.“",
    "vi": "„Bạn có giọng hay đấy.“"
   },
   {
    "de": "Nun waren sie zu viert und gingen fröhlich weiter.",
    "vi": "Giờ chúng đã có bốn bạn và vui vẻ đi tiếp."
   },
   {
    "de": "Am Abend kamen sie in einen großen Wald.",
    "vi": "Buổi tối, chúng đi vào một khu rừng lớn."
   },
   {
    "de": "Der Hahn flog auf einen Baum und sah ein Licht.",
    "vi": "Gà trống bay lên một cái cây và nhìn thấy một ánh đèn."
   },
   {
    "de": "„Dort steht ein Haus“, rief er.",
    "vi": "Chú gọi: „Đằng kia có một ngôi nhà.“"
   },
   {
    "de": "Die Tiere gingen leise zu dem Haus.",
    "vi": "Các con vật nhẹ nhàng đi đến ngôi nhà."
   },
   {
    "de": "Der Esel schaute durch das Fenster.",
    "vi": "Lừa nhìn qua cửa sổ."
   },
   {
    "de": "Drinnen saßen Räuber an einem Tisch mit gutem Essen.",
    "vi": "Bên trong, bọn cướp đang ngồi quanh một chiếc bàn đầy đồ ăn ngon."
   },
   {
    "de": "Die Tiere hatten großen Hunger.",
    "vi": "Các con vật đói bụng lắm."
   },
   {
    "de": "Da hatten sie eine gute Idee.",
    "vi": "Lúc đó chúng nảy ra một ý hay."
   },
   {
    "de": "Der Esel stellte sich mit den Vorderfüßen an das Fenster.",
    "vi": "Lừa đứng lên, đặt hai chân trước lên bậu cửa sổ."
   },
   {
    "de": "Der Hund sprang auf den Rücken des Esels.",
    "vi": "Chó nhảy lên lưng lừa."
   },
   {
    "de": "Die Katze kletterte auf den Hund.",
    "vi": "Mèo trèo lên lưng chó."
   },
   {
    "de": "Der Hahn flog ganz nach oben auf die Katze.",
    "vi": "Gà trống bay lên trên cùng, đậu trên lưng mèo."
   },
   {
    "de": "Dann machten alle zusammen ihre Musik.",
    "vi": "Rồi tất cả cùng nhau cất tiếng nhạc."
   },
   {
    "de": "Der Esel schrie, der Hund bellte, die Katze miaute, und der Hahn krähte.",
    "vi": "Lừa kêu be be, chó sủa, mèo kêu meo meo, còn gà trống thì gáy vang."
   },
   {
    "de": "Die Räuber erschraken und liefen schnell in den Wald.",
    "vi": "Bọn cướp hoảng sợ và chạy vội vào rừng."
   },
   {
    "de": "Die vier Freunde gingen hinein und aßen sich satt.",
    "vi": "Bốn người bạn đi vào nhà và ăn no nê."
   },
   {
    "de": "Danach löschten sie das Licht und schliefen ein.",
    "vi": "Sau đó, chúng tắt đèn và ngủ thiếp đi."
   },
   {
    "de": "In der Nacht kam ein Räuber leise zurück.",
    "vi": "Trong đêm, một tên cướp lén quay lại."
   },
   {
    "de": "Die Katze fauchte, der Hund bellte, und der Hahn rief laut.",
    "vi": "Mèo phì phì, chó sủa, còn gà trống thì kêu thật to."
   },
   {
    "de": "Der Räuber bekam einen großen Schreck und lief für immer davon.",
    "vi": "Tên cướp sợ hết hồn và bỏ chạy mãi mãi."
   },
   {
    "de": "Die vier Freunde gingen nie nach Bremen.",
    "vi": "Bốn người bạn không bao giờ đến Bremen nữa."
   },
   {
    "de": "Das Haus im Wald gefiel ihnen so gut.",
    "vi": "Chúng quá thích ngôi nhà trong rừng."
   },
   {
    "de": "Dort lebten sie glücklich und zufrieden zusammen.",
    "vi": "Ở đó, chúng sống cùng nhau hạnh phúc và mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "der Esel",
    "vi": "con lừa"
   },
   {
    "de": "der Hund",
    "vi": "con chó"
   },
   {
    "de": "die Katze",
    "vi": "con mèo"
   },
   {
    "de": "der Hahn",
    "vi": "con gà trống"
   },
   {
    "de": "der Herr",
    "vi": "người chủ"
   },
   {
    "de": "die Jagd",
    "vi": "cuộc đi săn"
   },
   {
    "de": "die Maus",
    "vi": "con chuột"
   },
   {
    "de": "der Bauernhof",
    "vi": "trang trại"
   },
   {
    "de": "der Wald",
    "vi": "khu rừng"
   },
   {
    "de": "das Licht",
    "vi": "ánh đèn, ánh sáng"
   },
   {
    "de": "der Räuber",
    "vi": "tên cướp"
   },
   {
    "de": "das Fenster",
    "vi": "cửa sổ"
   },
   {
    "de": "die Musik",
    "vi": "âm nhạc"
   },
   {
    "de": "der Stadtmusikant",
    "vi": "nhạc sĩ đường phố"
   }
  ]
 },
 {
  "id": "stadtmaus-feldmaus",
  "title": "Die Stadtmaus und die Feldmaus",
  "title_vi": "Chuột thành phố và chuột đồng",
  "level": "A2",
  "emoji": "🐭",
  "summary_vi": "Chuột đồng đến thăm bạn chuột thành phố và thấy nhiều món ngon nhưng luôn phải sợ hãi. Chuột đồng trở về nhà và hiểu rằng cuộc sống giản dị, bình yên là hạnh phúc nhất.",
  "sentences": [
   {
    "de": "Es waren einmal zwei Mäuse.",
    "vi": "Ngày xưa có hai con chuột."
   },
   {
    "de": "Die eine hat in der Stadt gewohnt, die andere auf dem Land.",
    "vi": "Một con sống ở thành phố, con kia sống ở nông thôn."
   },
   {
    "de": "Sie waren gute Freundinnen.",
    "vi": "Hai con là đôi bạn thân."
   },
   {
    "de": "Eines Tages hat die Feldmaus die Stadtmaus eingeladen.",
    "vi": "Một ngày nọ, chuột đồng mời chuột thành phố đến chơi."
   },
   {
    "de": "Die Feldmaus hatte ein kleines Haus unter einem Baum.",
    "vi": "Chuột đồng có một ngôi nhà nhỏ dưới gốc cây."
   },
   {
    "de": "Sie hat Körner, Nüsse und ein Stück Apfel auf den Tisch gestellt.",
    "vi": "Chuột đồng bày hạt, quả hạch và một miếng táo lên bàn."
   },
   {
    "de": "„Bitte iss, liebe Freundin!“, hat sie gesagt.",
    "vi": "“Mời bạn ăn đi, bạn thân mến!” chuột đồng nói."
   },
   {
    "de": "Die Stadtmaus hat nur ein bisschen gegessen.",
    "vi": "Chuột thành phố chỉ ăn một chút."
   },
   {
    "de": "„Dein Essen ist so einfach“, hat sie gesagt.",
    "vi": "“Đồ ăn của bạn đơn giản quá,” chuột thành phố nói."
   },
   {
    "de": "„Komm doch mit mir in die Stadt.“",
    "vi": "“Hãy cùng tôi lên thành phố đi.”"
   },
   {
    "de": "„Dort gibt es Käse, Kuchen und Schokolade.“",
    "vi": "“Ở đó có phô mai, bánh ngọt và sô-cô-la.”"
   },
   {
    "de": "Die Feldmaus war neugierig und ist mitgekommen.",
    "vi": "Chuột đồng tò mò nên đã đi theo."
   },
   {
    "de": "Die Stadtmaus hat in einem großen, schönen Haus gewohnt.",
    "vi": "Chuột thành phố sống trong một ngôi nhà lớn và đẹp."
   },
   {
    "de": "Am Abend sind die beiden in die Küche gegangen.",
    "vi": "Buổi tối, hai bạn đi vào nhà bếp."
   },
   {
    "de": "Auf dem Tisch waren viele gute Sachen.",
    "vi": "Trên bàn có rất nhiều món ngon."
   },
   {
    "de": "Es gab Käse, Brot, Wurst und süßen Kuchen.",
    "vi": "Có phô mai, bánh mì, xúc xích và bánh ngọt."
   },
   {
    "de": "Die Feldmaus hat große Augen gemacht.",
    "vi": "Chuột đồng tròn mắt ngạc nhiên."
   },
   {
    "de": "Aber plötzlich ist die Tür aufgegangen.",
    "vi": "Nhưng bỗng nhiên cánh cửa bật mở."
   },
   {
    "de": "Die Köchin ist in die Küche gekommen.",
    "vi": "Bà đầu bếp bước vào nhà bếp."
   },
   {
    "de": "Schnell sind die Mäuse in ein Loch gelaufen.",
    "vi": "Hai con chuột vội chạy vào một cái lỗ."
   },
   {
    "de": "Die Feldmaus hatte große Angst.",
    "vi": "Chuột đồng rất sợ hãi."
   },
   {
    "de": "Nach einer Weile war es wieder still.",
    "vi": "Một lúc sau, mọi thứ lại yên tĩnh."
   },
   {
    "de": "Die Mäuse sind wieder zum Tisch gegangen.",
    "vi": "Hai con chuột lại đi đến bàn ăn."
   },
   {
    "de": "Da hat ein Hund laut gebellt, und eine Katze ist gekommen.",
    "vi": "Lúc đó một con chó sủa to, và một con mèo đi tới."
   },
   {
    "de": "Wieder sind die Mäuse schnell weggelaufen.",
    "vi": "Hai con chuột lại vội vàng chạy trốn."
   },
   {
    "de": "Die Katze hat die Mäuse nicht gefunden und ist bald eingeschlafen.",
    "vi": "Con mèo không tìm thấy hai con chuột và chẳng bao lâu đã ngủ thiếp đi."
   },
   {
    "de": "Die Feldmaus hat leise gesagt: „Danke, liebe Freundin.“",
    "vi": "Chuột đồng khẽ nói: “Cảm ơn bạn thân mến.”"
   },
   {
    "de": "„Dein Essen ist sehr gut, aber ich habe hier keine Ruhe.“",
    "vi": "“Đồ ăn của bạn rất ngon, nhưng ở đây tôi không được yên ổn.”"
   },
   {
    "de": "„Ich gehe lieber nach Hause.“",
    "vi": "“Tôi muốn về nhà hơn.”"
   },
   {
    "de": "„Dort esse ich einfache Körner, aber ich habe keine Angst.“",
    "vi": "“Ở đó tôi chỉ ăn hạt đơn sơ, nhưng tôi không phải sợ hãi.”"
   },
   {
    "de": "Am nächsten Morgen ist die Feldmaus nach Hause gegangen.",
    "vi": "Sáng hôm sau, chuột đồng trở về nhà."
   },
   {
    "de": "Sie hat ihr kleines Haus unter dem Baum gesehen und gelächelt.",
    "vi": "Chuột đồng nhìn thấy ngôi nhà nhỏ dưới gốc cây và mỉm cười."
   },
   {
    "de": "Am Abend hat sie ein paar Körner gegessen.",
    "vi": "Buổi tối, chuột đồng ăn vài hạt ngũ cốc."
   },
   {
    "de": "Dann hat sie sich in ihr weiches Bett gelegt.",
    "vi": "Rồi chuột đồng nằm xuống chiếc giường êm ái của mình."
   },
   {
    "de": "Draußen haben die Grillen leise gesungen.",
    "vi": "Bên ngoài, lũ dế khẽ hát."
   },
   {
    "de": "Die Feldmaus war ruhig und zufrieden.",
    "vi": "Chuột đồng thấy bình yên và mãn nguyện."
   },
   {
    "de": "Ein einfaches Leben in Ruhe ist das größte Glück.",
    "vi": "Một cuộc sống giản dị và bình yên là hạnh phúc lớn nhất."
   }
  ],
  "glossary": [
   {
    "de": "die Maus",
    "vi": "con chuột"
   },
   {
    "de": "die Stadt",
    "vi": "thành phố"
   },
   {
    "de": "das Land",
    "vi": "nông thôn, vùng quê"
   },
   {
    "de": "das Korn",
    "vi": "hạt ngũ cốc"
   },
   {
    "de": "die Nuss",
    "vi": "quả hạch"
   },
   {
    "de": "der Käse",
    "vi": "phô mai"
   },
   {
    "de": "der Kuchen",
    "vi": "bánh ngọt"
   },
   {
    "de": "die Küche",
    "vi": "nhà bếp"
   },
   {
    "de": "die Köchin",
    "vi": "bà đầu bếp"
   },
   {
    "de": "das Loch",
    "vi": "cái lỗ"
   },
   {
    "de": "der Hund",
    "vi": "con chó"
   },
   {
    "de": "die Katze",
    "vi": "con mèo"
   },
   {
    "de": "die Ruhe",
    "vi": "sự yên tĩnh"
   },
   {
    "de": "die Grille",
    "vi": "con dế"
   }
  ]
 },
 {
  "id": "frau-holle",
  "title": "Frau Holle",
  "title_vi": "Bà Holle",
  "level": "A2",
  "emoji": "❄️",
  "summary_vi": "Cô con gái chăm chỉ rơi xuống giếng và đến thế giới của bà Holle, nơi cô làm việc tận tụy và được thưởng vàng. Cô em lười biếng cũng muốn có vàng nhưng chỉ nhận về hắc ín, rồi từ đó học cách chăm chỉ.",
  "sentences": [
   {
    "de": "Es war einmal eine Frau mit zwei Töchtern.",
    "vi": "Ngày xửa ngày xưa, có một người phụ nữ có hai cô con gái."
   },
   {
    "de": "Die eine Tochter war fleißig und freundlich.",
    "vi": "Một cô chăm chỉ và tốt bụng."
   },
   {
    "de": "Die andere Tochter war faul.",
    "vi": "Cô còn lại thì lười biếng."
   },
   {
    "de": "Die Mutter liebte die faule Tochter mehr.",
    "vi": "Người mẹ thương cô con gái lười hơn."
   },
   {
    "de": "Die fleißige Tochter musste die ganze Arbeit im Haus machen.",
    "vi": "Cô con gái chăm chỉ phải làm hết mọi việc trong nhà."
   },
   {
    "de": "Jeden Tag saß sie am Brunnen und arbeitete mit ihrer Spule.",
    "vi": "Ngày nào cô cũng ngồi bên giếng và làm việc với ống chỉ của mình."
   },
   {
    "de": "Einmal fiel ihr die Spule in den Brunnen.",
    "vi": "Một lần, ống chỉ rơi xuống giếng."
   },
   {
    "de": "Sie sprang hinterher, um die Spule zu holen.",
    "vi": "Cô nhảy theo để lấy lại ống chỉ."
   },
   {
    "de": "Plötzlich war sie auf einer schönen, grünen Wiese.",
    "vi": "Bỗng nhiên, cô thấy mình đang ở trên một đồng cỏ xanh tươi tuyệt đẹp."
   },
   {
    "de": "Die Sonne schien, und viele Blumen blühten.",
    "vi": "Mặt trời chiếu sáng và muôn hoa đua nở."
   },
   {
    "de": "Sie kam zu einem Ofen voller Brot.",
    "vi": "Cô đi đến một cái lò đầy bánh mì."
   },
   {
    "de": "Das Brot rief: „Hol mich heraus, ich bin schon fertig!“",
    "vi": "Bánh mì gọi: „Lấy tôi ra đi, tôi chín rồi!“"
   },
   {
    "de": "Das Mädchen holte alle Brote aus dem Ofen.",
    "vi": "Cô gái lấy hết bánh mì ra khỏi lò."
   },
   {
    "de": "Dann kam sie zu einem Baum voller Äpfel.",
    "vi": "Rồi cô đến bên một cây trĩu quả táo."
   },
   {
    "de": "Der Baum rief: „Schüttle mich, meine Äpfel sind reif!“",
    "vi": "Cái cây gọi: „Rung tôi đi, táo của tôi chín rồi!“"
   },
   {
    "de": "Das Mädchen schüttelte den Baum, und die Äpfel fielen herunter.",
    "vi": "Cô gái rung cây, và những quả táo rơi xuống."
   },
   {
    "de": "Endlich kam sie zu einem kleinen Haus.",
    "vi": "Cuối cùng, cô đến một ngôi nhà nhỏ."
   },
   {
    "de": "Dort wohnte eine alte Frau, die Frau Holle.",
    "vi": "Ở đó có một bà cụ sống, đó là bà Holle."
   },
   {
    "de": "„Bleib bei mir und hilf mir im Haus“, sagte Frau Holle.",
    "vi": "Bà Holle nói: „Hãy ở lại với ta và giúp ta việc nhà.“"
   },
   {
    "de": "„Du musst mein Bett jeden Tag gut schütteln.“",
    "vi": "„Mỗi ngày con phải giũ giường của ta thật kỹ.“"
   },
   {
    "de": "„Dann fliegen die Federn, und auf der Erde schneit es.“",
    "vi": "„Khi đó lông vũ bay lên, và dưới trần gian tuyết sẽ rơi.“"
   },
   {
    "de": "Das Mädchen arbeitete fleißig und war sehr zufrieden.",
    "vi": "Cô gái làm việc chăm chỉ và rất vui lòng."
   },
   {
    "de": "Aber nach einer Zeit hatte sie Heimweh.",
    "vi": "Nhưng sau một thời gian, cô thấy nhớ nhà."
   },
   {
    "de": "Frau Holle brachte sie zu einem großen Tor.",
    "vi": "Bà Holle dẫn cô đến một cánh cổng lớn."
   },
   {
    "de": "Unter dem Tor fiel goldener Regen auf das Mädchen.",
    "vi": "Dưới cánh cổng, một cơn mưa vàng rơi xuống người cô gái."
   },
   {
    "de": "„Das ist für deinen Fleiß“, sagte Frau Holle freundlich.",
    "vi": "Bà Holle dịu dàng nói: „Đây là phần thưởng cho sự chăm chỉ của con.“"
   },
   {
    "de": "Voller Gold kam das Mädchen nach Hause.",
    "vi": "Cô gái trở về nhà, người phủ đầy vàng."
   },
   {
    "de": "Nun wollte auch die faule Tochter Gold haben.",
    "vi": "Bây giờ cô con gái lười cũng muốn có vàng."
   },
   {
    "de": "Sie sprang auch in den Brunnen und kam zu der Wiese.",
    "vi": "Cô cũng nhảy xuống giếng và đến đồng cỏ."
   },
   {
    "de": "Aber sie holte das Brot nicht aus dem Ofen.",
    "vi": "Nhưng cô không lấy bánh mì ra khỏi lò."
   },
   {
    "de": "Sie schüttelte auch den Baum nicht.",
    "vi": "Cô cũng không rung cây táo."
   },
   {
    "de": "Bei Frau Holle war sie faul und schüttelte das Bett nicht.",
    "vi": "Ở nhà bà Holle, cô lười biếng và không giũ giường."
   },
   {
    "de": "Bald schickte Frau Holle sie nach Hause.",
    "vi": "Chẳng bao lâu, bà Holle cho cô về nhà."
   },
   {
    "de": "Unter dem Tor fiel kein Gold, sondern schwarzes, klebriges Pech auf sie.",
    "vi": "Dưới cánh cổng, không phải vàng mà là hắc ín đen dính rơi xuống người cô."
   },
   {
    "de": "Zu Hause wusch sie sich lange und dachte nach.",
    "vi": "Về nhà, cô tắm rửa rất lâu và suy nghĩ."
   },
   {
    "de": "Von da an half sie ihrer Schwester bei der Arbeit.",
    "vi": "Từ đó, cô giúp chị mình làm việc."
   },
   {
    "de": "Die beiden Schwestern lebten glücklich und zufrieden.",
    "vi": "Hai chị em sống hạnh phúc, mãn nguyện."
   },
   {
    "de": "Und wenn es im Winter schneit, schüttelt Frau Holle wieder ihre Betten.",
    "vi": "Và mỗi khi tuyết rơi vào mùa đông, ấy là bà Holle lại đang giũ giường."
   }
  ],
  "glossary": [
   {
    "de": "die Tochter",
    "vi": "con gái"
   },
   {
    "de": "die Schwester",
    "vi": "chị, em gái"
   },
   {
    "de": "der Brunnen",
    "vi": "cái giếng"
   },
   {
    "de": "die Spule",
    "vi": "ống chỉ"
   },
   {
    "de": "die Wiese",
    "vi": "đồng cỏ"
   },
   {
    "de": "der Ofen",
    "vi": "cái lò"
   },
   {
    "de": "das Brot",
    "vi": "bánh mì"
   },
   {
    "de": "der Apfel",
    "vi": "quả táo"
   },
   {
    "de": "das Bett",
    "vi": "cái giường"
   },
   {
    "de": "die Feder",
    "vi": "lông vũ"
   },
   {
    "de": "das Tor",
    "vi": "cánh cổng"
   },
   {
    "de": "das Gold",
    "vi": "vàng"
   },
   {
    "de": "das Pech",
    "vi": "hắc ín"
   },
   {
    "de": "der Fleiß",
    "vi": "sự chăm chỉ"
   },
   {
    "de": "das Heimweh",
    "vi": "nỗi nhớ nhà"
   }
  ]
 },
 {
  "id": "rotkaeppchen",
  "title": "Rotkäppchen",
  "title_vi": "Cô bé quàng khăn đỏ",
  "level": "A2",
  "emoji": "🧺",
  "summary_vi": "Cô bé Khăn Đỏ mang bánh đến thăm bà ngoại bị ốm và gặp chó sói trong rừng. Bác thợ săn đến kịp lúc và đuổi chó sói đi thật xa.",
  "sentences": [
   {
    "de": "Es war einmal ein kleines, liebes Mädchen.",
    "vi": "Ngày xửa ngày xưa, có một cô bé đáng yêu."
   },
   {
    "de": "Seine Großmutter schenkte ihm ein rotes Käppchen aus Samt.",
    "vi": "Bà ngoại tặng cô bé một chiếc mũ nhỏ màu đỏ bằng nhung."
   },
   {
    "de": "Das Mädchen trug es jeden Tag, deshalb hieß es Rotkäppchen.",
    "vi": "Ngày nào cô bé cũng đội nó, vì thế mọi người gọi cô là Khăn Đỏ."
   },
   {
    "de": "Eines Tages sagte die Mutter: „Die Großmutter ist krank.“",
    "vi": "Một hôm, mẹ nói: „Bà ngoại bị ốm.“"
   },
   {
    "de": "„Bring ihr bitte diesen Kuchen und eine Flasche Saft.“",
    "vi": "„Con mang cho bà cái bánh này và một chai nước quả nhé.“"
   },
   {
    "de": "„Bleib auf dem Weg und lauf nicht in den Wald.“",
    "vi": "„Con hãy đi đúng đường và đừng chạy vào rừng.“"
   },
   {
    "de": "Rotkäppchen nahm den Korb und ging los.",
    "vi": "Khăn Đỏ cầm giỏ và lên đường."
   },
   {
    "de": "Die Großmutter wohnte draußen im Wald.",
    "vi": "Bà ngoại sống ở ngoài, trong khu rừng."
   },
   {
    "de": "Im Wald traf Rotkäppchen den Wolf.",
    "vi": "Trong rừng, Khăn Đỏ gặp chó sói."
   },
   {
    "de": "Es hatte keine Angst vor dem Wolf.",
    "vi": "Cô bé không sợ chó sói."
   },
   {
    "de": "„Guten Tag, Rotkäppchen“, sagte der Wolf freundlich.",
    "vi": "Chó sói nói giọng thân thiện: „Chào Khăn Đỏ.“"
   },
   {
    "de": "„Wohin gehst du so früh?“",
    "vi": "„Cháu đi đâu sớm thế?“"
   },
   {
    "de": "„Zur Großmutter, sie ist krank“, antwortete Rotkäppchen.",
    "vi": "Khăn Đỏ đáp: „Cháu đến nhà bà, bà đang ốm.“"
   },
   {
    "de": "Der Wolf sagte: „Sieh mal, die schönen Blumen hier!“",
    "vi": "Chó sói nói: „Nhìn kìa, hoa ở đây đẹp quá!“"
   },
   {
    "de": "„Bring der Großmutter doch einen Blumenstrauß mit.“",
    "vi": "„Sao cháu không mang cho bà một bó hoa?“"
   },
   {
    "de": "Rotkäppchen fand die Idee gut und pflückte Blumen.",
    "vi": "Khăn Đỏ thấy ý đó hay và đi hái hoa."
   },
   {
    "de": "Inzwischen lief der Wolf schnell zum Haus der Großmutter.",
    "vi": "Trong lúc đó, chó sói chạy nhanh đến nhà bà ngoại."
   },
   {
    "de": "Die Großmutter sah den Wolf durch das Fenster.",
    "vi": "Bà ngoại nhìn thấy chó sói qua cửa sổ."
   },
   {
    "de": "Sie versteckte sich schnell im großen Schrank.",
    "vi": "Bà nhanh chóng trốn vào chiếc tủ lớn."
   },
   {
    "de": "Der Wolf legte sich in ihr Bett und setzte ihre Haube auf.",
    "vi": "Chó sói nằm lên giường của bà và đội mũ ngủ của bà."
   },
   {
    "de": "Bald kam Rotkäppchen mit den Blumen an.",
    "vi": "Chẳng bao lâu, Khăn Đỏ mang hoa đến."
   },
   {
    "de": "Die Tür war offen, und es ging hinein.",
    "vi": "Cửa đang mở, và cô bé bước vào."
   },
   {
    "de": "„Großmutter, was hast du für große Ohren?“, fragte Rotkäppchen.",
    "vi": "Khăn Đỏ hỏi: „Bà ơi, sao tai bà to thế?“"
   },
   {
    "de": "„Damit ich dich besser hören kann“, sagte der Wolf.",
    "vi": "Chó sói đáp: „Để bà nghe cháu rõ hơn.“"
   },
   {
    "de": "„Großmutter, was hast du für große Augen?“",
    "vi": "„Bà ơi, sao mắt bà to thế?“"
   },
   {
    "de": "„Damit ich dich besser sehen kann.“",
    "vi": "„Để bà nhìn cháu rõ hơn.“"
   },
   {
    "de": "„Großmutter, was hast du für einen großen Mund?“",
    "vi": "„Bà ơi, sao miệng bà to thế?“"
   },
   {
    "de": "Der Wolf wollte gerade aus dem Bett springen.",
    "vi": "Chó sói định nhảy ra khỏi giường."
   },
   {
    "de": "Da kam zum Glück der Jäger am Haus vorbei.",
    "vi": "May thay, đúng lúc đó bác thợ săn đi ngang qua ngôi nhà."
   },
   {
    "de": "Er hörte die Stimmen und öffnete die Tür.",
    "vi": "Bác nghe thấy tiếng nói và mở cửa."
   },
   {
    "de": "„Raus mit dir, alter Wolf!“, rief der Jäger laut.",
    "vi": "Bác thợ săn quát to: „Cút ra ngoài, lão sói kia!“"
   },
   {
    "de": "Der Wolf erschrak und lief schnell weit weg in den Wald.",
    "vi": "Chó sói hoảng sợ và chạy thật nhanh vào sâu trong rừng."
   },
   {
    "de": "Er kam nie wieder zurück.",
    "vi": "Nó không bao giờ quay lại nữa."
   },
   {
    "de": "Die Großmutter kam aus dem Schrank.",
    "vi": "Bà ngoại bước ra khỏi tủ."
   },
   {
    "de": "Sie umarmte Rotkäppchen fest.",
    "vi": "Bà ôm chặt Khăn Đỏ."
   },
   {
    "de": "Dann aßen alle drei zusammen Kuchen und tranken Saft.",
    "vi": "Rồi cả ba cùng ăn bánh và uống nước quả."
   },
   {
    "de": "Die Großmutter fühlte sich schon viel besser.",
    "vi": "Bà ngoại đã thấy khỏe hơn nhiều."
   },
   {
    "de": "Rotkäppchen sagte: „Ich bleibe jetzt immer auf dem Weg.“",
    "vi": "Khăn Đỏ nói: „Từ nay cháu sẽ luôn đi đúng đường.“"
   },
   {
    "de": "Und alle lebten glücklich und zufrieden.",
    "vi": "Và mọi người sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "das Käppchen",
    "vi": "chiếc mũ nhỏ"
   },
   {
    "de": "die Großmutter",
    "vi": "bà"
   },
   {
    "de": "die Mutter",
    "vi": "người mẹ"
   },
   {
    "de": "der Kuchen",
    "vi": "bánh ngọt"
   },
   {
    "de": "der Saft",
    "vi": "nước quả"
   },
   {
    "de": "der Korb",
    "vi": "cái giỏ"
   },
   {
    "de": "der Weg",
    "vi": "con đường"
   },
   {
    "de": "der Wolf",
    "vi": "con sói"
   },
   {
    "de": "die Blume",
    "vi": "bông hoa"
   },
   {
    "de": "der Schrank",
    "vi": "cái tủ"
   },
   {
    "de": "das Bett",
    "vi": "cái giường"
   },
   {
    "de": "der Jäger",
    "vi": "người thợ săn"
   },
   {
    "de": "die Stimme",
    "vi": "giọng nói"
   }
  ]
 },
 {
  "id": "aschenputtel",
  "title": "Aschenputtel",
  "title_vi": "Cô bé Lọ Lem",
  "level": "B1",
  "emoji": "👠",
  "summary_vi": "Lọ Lem hiền lành bị mẹ kế và hai chị kế đối xử tệ bạc. Nhờ chú chim trắng giúp đỡ, cô được đi dự dạ hội, đánh rơi chiếc giày vàng và cuối cùng được hoàng tử tìm thấy.",
  "sentences": [
   {
    "de": "Es war einmal ein reicher Mann mit einer lieben Tochter.",
    "vi": "Ngày xưa có một người đàn ông giàu có với một cô con gái hiền lành."
   },
   {
    "de": "Die Mutter des Mädchens war früh gestorben.",
    "vi": "Mẹ của cô gái đã mất từ sớm."
   },
   {
    "de": "Bald heiratete der Vater eine neue Frau.",
    "vi": "Ít lâu sau, người cha cưới một người vợ mới."
   },
   {
    "de": "Die Frau brachte zwei Töchter mit ins Haus.",
    "vi": "Người phụ nữ ấy mang theo hai cô con gái về nhà."
   },
   {
    "de": "Die Schwestern waren schön, aber sie hatten kalte Herzen.",
    "vi": "Hai chị em xinh đẹp, nhưng có trái tim lạnh lùng."
   },
   {
    "de": "Sie nahmen dem Mädchen die schönen Kleider weg.",
    "vi": "Họ lấy mất những bộ váy đẹp của cô gái."
   },
   {
    "de": "Das Mädchen musste von morgens bis abends arbeiten.",
    "vi": "Cô gái phải làm việc từ sáng đến tối."
   },
   {
    "de": "Am Abend schlief das Mädchen neben dem Herd in der Asche.",
    "vi": "Buổi tối, cô ngủ cạnh bếp lò, giữa đống tro."
   },
   {
    "de": "Darum nannten alle sie Aschenputtel.",
    "vi": "Vì thế mọi người gọi cô là Lọ Lem."
   },
   {
    "de": "Am Grab der Mutter pflanzte Aschenputtel einen kleinen Baum.",
    "vi": "Bên mộ mẹ, Lọ Lem trồng một cái cây nhỏ."
   },
   {
    "de": "Der Baum wuchs, und ein weißes Vögelchen wohnte darin.",
    "vi": "Cái cây lớn lên, và một chú chim nhỏ màu trắng sống trên đó."
   },
   {
    "de": "Eines Tages gab der König ein großes Fest.",
    "vi": "Một ngày nọ, nhà vua mở một buổi dạ hội lớn."
   },
   {
    "de": "Der Prinz wollte dort eine Braut finden.",
    "vi": "Hoàng tử muốn tìm một cô dâu ở đó."
   },
   {
    "de": "Die Schwestern freuten sich und probierten ihre Kleider an.",
    "vi": "Hai chị em mừng rỡ và thử váy áo."
   },
   {
    "de": "Aschenputtel wollte auch zum Fest gehen.",
    "vi": "Lọ Lem cũng muốn đi dự dạ hội."
   },
   {
    "de": "Aber die Stiefmutter sagte: „Du hast kein Kleid und keine Schuhe.“",
    "vi": "Nhưng bà mẹ kế nói: “Con không có váy cũng chẳng có giày.”"
   },
   {
    "de": "Dann fuhr sie mit ihren Töchtern zum Schloss.",
    "vi": "Rồi bà cùng các con gái đi xe đến lâu đài."
   },
   {
    "de": "Traurig ging Aschenputtel zu dem kleinen Baum.",
    "vi": "Buồn bã, Lọ Lem đi đến bên cái cây nhỏ."
   },
   {
    "de": "„Liebes Bäumchen, bitte hilf mir“, sagte sie leise.",
    "vi": "“Cây nhỏ thân yêu ơi, xin hãy giúp tôi,” cô khẽ nói."
   },
   {
    "de": "Da warf der Vogel ein Kleid aus Gold und Silber herunter.",
    "vi": "Lúc đó chú chim thả xuống một chiếc váy bằng vàng và bạc."
   },
   {
    "de": "Dazu bekam sie zwei feine Schuhe aus Gold.",
    "vi": "Cô còn nhận được một đôi giày xinh xắn bằng vàng."
   },
   {
    "de": "Im Schloss erkannte niemand das schöne Mädchen.",
    "vi": "Ở lâu đài, không ai nhận ra cô gái xinh đẹp."
   },
   {
    "de": "Der Prinz tanzte den ganzen Abend nur mit ihr.",
    "vi": "Suốt cả buổi tối, hoàng tử chỉ khiêu vũ với cô."
   },
   {
    "de": "Doch vor Mitternacht lief Aschenputtel schnell nach Hause.",
    "vi": "Nhưng trước nửa đêm, Lọ Lem vội vàng chạy về nhà."
   },
   {
    "de": "Auf der Treppe verlor sie einen goldenen Schuh.",
    "vi": "Trên cầu thang, cô đánh rơi một chiếc giày vàng."
   },
   {
    "de": "Der Prinz hob den Schuh auf und sagte: „Ich suche dieses Mädchen.“",
    "vi": "Hoàng tử nhặt chiếc giày lên và nói: “Ta sẽ đi tìm cô gái này.”"
   },
   {
    "de": "Am nächsten Tag kam er zum Haus des Vaters.",
    "vi": "Ngày hôm sau, chàng đến nhà người cha."
   },
   {
    "de": "Die erste Schwester probierte den Schuh, aber er war zu klein.",
    "vi": "Người chị thứ nhất thử giày, nhưng giày quá nhỏ."
   },
   {
    "de": "Auch der zweiten Schwester passte der Schuh nicht.",
    "vi": "Người chị thứ hai cũng không vừa chiếc giày."
   },
   {
    "de": "„Habt ihr keine andere Tochter?“, fragte der Prinz.",
    "vi": "“Nhà các người không còn cô con gái nào khác sao?” hoàng tử hỏi."
   },
   {
    "de": "„Nur das kleine Aschenputtel“, antwortete der Vater.",
    "vi": "“Chỉ còn cô bé Lọ Lem thôi ạ,” người cha đáp."
   },
   {
    "de": "Aschenputtel wusch sich Hände und Gesicht und kam herein.",
    "vi": "Lọ Lem rửa tay, rửa mặt rồi bước vào."
   },
   {
    "de": "Sie zog den goldenen Schuh an, und er passte genau.",
    "vi": "Cô xỏ chân vào chiếc giày vàng, và nó vừa khít."
   },
   {
    "de": "Da sah der Prinz ihr Gesicht und erkannte sie.",
    "vi": "Lúc đó hoàng tử nhìn khuôn mặt cô và nhận ra cô."
   },
   {
    "de": "„Das ist meine Tänzerin vom Fest!“, rief er glücklich.",
    "vi": "“Đây chính là người đã khiêu vũ cùng ta ở dạ hội!” chàng vui mừng reo lên."
   },
   {
    "de": "Die Stiefschwestern wurden ganz still und schämten sich.",
    "vi": "Hai người chị kế lặng im và cảm thấy xấu hổ."
   },
   {
    "de": "Der Prinz nahm Aschenputtel mit auf sein Pferd.",
    "vi": "Hoàng tử đưa Lọ Lem lên ngựa cùng mình."
   },
   {
    "de": "Der weiße Vogel flog über ihnen und sang ein fröhliches Lied.",
    "vi": "Chú chim trắng bay trên đầu họ và hót một bài ca vui tươi."
   },
   {
    "de": "Bald feierten sie eine wunderschöne Hochzeit.",
    "vi": "Chẳng bao lâu họ tổ chức một đám cưới tuyệt đẹp."
   },
   {
    "de": "Aschenputtel war freundlich zu allen, auch zu ihren Schwestern.",
    "vi": "Lọ Lem đối xử tốt với mọi người, kể cả với các chị."
   },
   {
    "de": "Und alle lebten glücklich und zufrieden.",
    "vi": "Và mọi người sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "die Stiefmutter",
    "vi": "mẹ kế"
   },
   {
    "de": "die Schwester",
    "vi": "chị, em gái"
   },
   {
    "de": "der Herd",
    "vi": "bếp lò"
   },
   {
    "de": "die Asche",
    "vi": "tro"
   },
   {
    "de": "der Baum",
    "vi": "cái cây"
   },
   {
    "de": "der Vogel",
    "vi": "con chim"
   },
   {
    "de": "das Fest",
    "vi": "buổi dạ hội, lễ hội"
   },
   {
    "de": "der Prinz",
    "vi": "hoàng tử"
   },
   {
    "de": "das Kleid",
    "vi": "chiếc váy"
   },
   {
    "de": "der Schuh",
    "vi": "chiếc giày"
   },
   {
    "de": "das Schloss",
    "vi": "lâu đài"
   },
   {
    "de": "die Mitternacht",
    "vi": "nửa đêm"
   },
   {
    "de": "die Hochzeit",
    "vi": "đám cưới"
   }
  ]
 },
 {
  "id": "froschkoenig",
  "title": "Der Froschkönig",
  "title_vi": "Hoàng tử ếch",
  "level": "B1",
  "emoji": "🐸",
  "summary_vi": "Một con ếch giúp công chúa lấy lại quả bóng vàng rơi xuống giếng và nàng phải giữ lời hứa làm bạn với nó. Nhờ tình bạn của nàng, con ếch biến trở lại thành hoàng tử.",
  "sentences": [
   {
    "de": "Es war einmal eine junge Prinzessin.",
    "vi": "Ngày xưa có một nàng công chúa trẻ."
   },
   {
    "de": "Sie war die jüngste Tochter des Königs und sehr schön.",
    "vi": "Nàng là con gái út của nhà vua và rất xinh đẹp."
   },
   {
    "de": "Neben dem Schloss lag ein großer, dunkler Wald.",
    "vi": "Cạnh lâu đài có một khu rừng lớn, rậm rạp."
   },
   {
    "de": "Dort stand ein alter Brunnen unter einem Baum.",
    "vi": "Ở đó có một cái giếng cổ dưới gốc cây."
   },
   {
    "de": "An warmen Tagen spielte die Prinzessin am Brunnen mit ihrer goldenen Kugel.",
    "vi": "Vào những ngày ấm áp, công chúa chơi quả bóng vàng bên giếng."
   },
   {
    "de": "Sie warf die Kugel hoch und fing sie wieder auf.",
    "vi": "Nàng tung quả bóng lên cao rồi bắt lại."
   },
   {
    "de": "Eines Tages fiel die Kugel ins Wasser.",
    "vi": "Một ngày nọ, quả bóng rơi xuống nước."
   },
   {
    "de": "Der Brunnen war so tief, dass man keinen Grund sah.",
    "vi": "Cái giếng sâu đến nỗi không nhìn thấy đáy."
   },
   {
    "de": "Die Prinzessin begann zu weinen.",
    "vi": "Công chúa bắt đầu khóc."
   },
   {
    "de": "Da hörte sie eine Stimme: „Warum weinst du, Königstochter?“",
    "vi": "Lúc đó nàng nghe thấy một giọng nói: “Sao nàng lại khóc, hỡi công chúa?”"
   },
   {
    "de": "Sie sah einen dicken Frosch, der seinen Kopf aus dem Wasser streckte.",
    "vi": "Nàng thấy một con ếch mập đang ngóc đầu lên khỏi mặt nước."
   },
   {
    "de": "„Meine goldene Kugel ist in den Brunnen gefallen“, sagte sie.",
    "vi": "“Quả bóng vàng của ta rơi xuống giếng rồi,” nàng nói."
   },
   {
    "de": "„Ich hole sie dir“, sagte der Frosch.",
    "vi": "“Tôi sẽ lấy nó lên cho nàng,” con ếch nói."
   },
   {
    "de": "„Aber dann musst du meine Freundin sein.“",
    "vi": "“Nhưng rồi nàng phải làm bạn với tôi.”"
   },
   {
    "de": "„Ich möchte an deinem Tisch essen und in deinem Schloss wohnen.“",
    "vi": "“Tôi muốn ăn cùng bàn với nàng và sống trong lâu đài của nàng.”"
   },
   {
    "de": "Die Prinzessin versprach alles, denn sie wollte nur ihre Kugel.",
    "vi": "Công chúa hứa hết mọi điều, vì nàng chỉ muốn lấy lại quả bóng."
   },
   {
    "de": "Der Frosch tauchte hinunter und brachte die Kugel herauf.",
    "vi": "Con ếch lặn xuống và mang quả bóng lên."
   },
   {
    "de": "Die Prinzessin nahm sie und lief schnell nach Hause.",
    "vi": "Công chúa cầm lấy và chạy vội về nhà."
   },
   {
    "de": "Den Frosch hatte sie schon vergessen.",
    "vi": "Nàng đã quên bẵng con ếch."
   },
   {
    "de": "Am nächsten Abend saß die Familie beim Essen.",
    "vi": "Tối hôm sau, cả gia đình đang ngồi ăn tối."
   },
   {
    "de": "Da klopfte es an der Tür.",
    "vi": "Bỗng có tiếng gõ cửa."
   },
   {
    "de": "„Königstochter, mach mir auf!“, rief eine leise Stimme.",
    "vi": "“Công chúa ơi, mở cửa cho tôi với!” một giọng nói khẽ gọi."
   },
   {
    "de": "Die Prinzessin öffnete und sah den Frosch.",
    "vi": "Công chúa mở cửa và thấy con ếch."
   },
   {
    "de": "Erschrocken schlug sie die Tür wieder zu.",
    "vi": "Hoảng hốt, nàng đóng sập cửa lại."
   },
   {
    "de": "Der König fragte: „Wer ist denn da draußen?“",
    "vi": "Nhà vua hỏi: “Ai ở ngoài đó vậy?”"
   },
   {
    "de": "Die Prinzessin erzählte ihm von ihrem Versprechen.",
    "vi": "Công chúa kể cho vua cha nghe về lời hứa của mình."
   },
   {
    "de": "„Was du versprochen hast, musst du auch halten“, sagte der König ernst.",
    "vi": "“Điều gì con đã hứa thì con phải giữ lời,” nhà vua nghiêm nghị nói."
   },
   {
    "de": "So durfte der Frosch hereinkommen und vom goldenen Teller essen.",
    "vi": "Thế là con ếch được vào nhà và ăn từ chiếc đĩa vàng."
   },
   {
    "de": "Die Prinzessin war zuerst nicht froh darüber.",
    "vi": "Lúc đầu công chúa không vui về chuyện đó."
   },
   {
    "de": "Aber der Frosch war höflich und erzählte schöne Geschichten.",
    "vi": "Nhưng con ếch rất lịch sự và kể những câu chuyện hay."
   },
   {
    "de": "Langsam begann die Prinzessin, ihn zu mögen.",
    "vi": "Dần dần công chúa bắt đầu quý mến chú ếch."
   },
   {
    "de": "Am dritten Abend sagte sie freundlich: „Gute Nacht, lieber Frosch.“",
    "vi": "Đến tối thứ ba, nàng dịu dàng nói: “Chúc ngủ ngon, ếch thân mến.”"
   },
   {
    "de": "Da geschah ein Wunder.",
    "vi": "Lúc đó một điều kỳ diệu đã xảy ra."
   },
   {
    "de": "Aus dem Frosch wurde ein junger Prinz mit freundlichen Augen.",
    "vi": "Con ếch biến thành một chàng hoàng tử trẻ với đôi mắt hiền hậu."
   },
   {
    "de": "Eine böse Hexe hatte ihn einst in einen Frosch verwandelt.",
    "vi": "Ngày trước, một mụ phù thủy độc ác đã biến chàng thành ếch."
   },
   {
    "de": "Nur die Freundschaft einer Prinzessin konnte ihn befreien.",
    "vi": "Chỉ có tình bạn của một nàng công chúa mới giải thoát được chàng."
   },
   {
    "de": "Am nächsten Morgen kam eine Kutsche mit acht weißen Pferden.",
    "vi": "Sáng hôm sau, một cỗ xe với tám con ngựa trắng đến."
   },
   {
    "de": "Hinten stand der treue Diener Heinrich.",
    "vi": "Phía sau xe là người hầu trung thành Heinrich."
   },
   {
    "de": "Er war so glücklich, dass sein Herz vor Freude sang.",
    "vi": "Ông vui đến mức trái tim như cất tiếng hát vì hạnh phúc."
   },
   {
    "de": "Der Prinz und die Prinzessin fuhren zusammen in sein Königreich.",
    "vi": "Hoàng tử và công chúa cùng nhau lên đường về vương quốc của chàng."
   },
   {
    "de": "Dort feierten sie Hochzeit und lebten glücklich und zufrieden.",
    "vi": "Ở đó họ tổ chức đám cưới và sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "die Prinzessin",
    "vi": "công chúa"
   },
   {
    "de": "der Brunnen",
    "vi": "cái giếng"
   },
   {
    "de": "die Kugel",
    "vi": "quả bóng, quả cầu"
   },
   {
    "de": "der Frosch",
    "vi": "con ếch"
   },
   {
    "de": "die Stimme",
    "vi": "giọng nói"
   },
   {
    "de": "das Versprechen",
    "vi": "lời hứa"
   },
   {
    "de": "der Teller",
    "vi": "cái đĩa"
   },
   {
    "de": "der Prinz",
    "vi": "hoàng tử"
   },
   {
    "de": "die Hexe",
    "vi": "mụ phù thủy"
   },
   {
    "de": "das Wunder",
    "vi": "điều kỳ diệu"
   },
   {
    "de": "die Kutsche",
    "vi": "cỗ xe ngựa"
   },
   {
    "de": "der Diener",
    "vi": "người hầu"
   },
   {
    "de": "das Königreich",
    "vi": "vương quốc"
   }
  ]
 },
 {
  "id": "schneekoenigin",
  "title": "Die Schneekönigin",
  "title_vi": "Bà Chúa Tuyết",
  "level": "B1",
  "emoji": "❄️",
  "summary_vi": "Một mảnh gương phép làm trái tim Kai lạnh như băng, và Bà Chúa Tuyết mang cậu đi về phương Bắc. Cô bạn Gerda vượt đường xa tìm Kai, và nước mắt ấm áp của cô làm tan băng trong tim cậu.",
  "sentences": [
   {
    "de": "In einer großen Stadt wohnten zwei Kinder, Kai und Gerda.",
    "vi": "Ở một thành phố lớn có hai đứa trẻ tên là Kai và Gerda."
   },
   {
    "de": "Sie waren keine Geschwister, aber sie liebten sich wie Bruder und Schwester.",
    "vi": "Hai bạn không phải anh em ruột, nhưng thương nhau như anh em."
   },
   {
    "de": "Im Sommer saßen sie zwischen den Rosen auf dem Dach.",
    "vi": "Mùa hè, hai bạn ngồi giữa những khóm hoa hồng trên mái nhà."
   },
   {
    "de": "Im Winter erzählte die Großmutter von der Schneekönigin.",
    "vi": "Mùa đông, bà kể chuyện về Bà Chúa Tuyết."
   },
   {
    "de": "Eines Tages flog ein winziges Stück Glas in Kais Auge.",
    "vi": "Một ngày nọ, một mảnh kính nhỏ xíu bay vào mắt Kai."
   },
   {
    "de": "Es war ein Splitter von einem bösen Zauberspiegel.",
    "vi": "Đó là một mảnh vỡ của chiếc gương phép độc ác."
   },
   {
    "de": "Von da an war Kais Herz kalt wie Eis.",
    "vi": "Từ đó, trái tim Kai lạnh như băng."
   },
   {
    "de": "Er lachte nicht mehr und war unfreundlich zu Gerda.",
    "vi": "Cậu không còn cười nữa và đối xử không tử tế với Gerda."
   },
   {
    "de": "Im Winter spielte Kai mit seinem Schlitten auf dem Platz.",
    "vi": "Mùa đông, Kai chơi xe trượt tuyết ở quảng trường."
   },
   {
    "de": "Da kam ein großer weißer Schlitten vorbei.",
    "vi": "Lúc đó, một chiếc xe trượt tuyết lớn màu trắng chạy ngang qua."
   },
   {
    "de": "Darin saß eine schöne Frau aus Schnee und Eis.",
    "vi": "Ngồi trên xe là một người phụ nữ xinh đẹp làm từ tuyết và băng."
   },
   {
    "de": "Es war die Schneekönigin.",
    "vi": "Đó chính là Bà Chúa Tuyết."
   },
   {
    "de": "Sie nahm Kai mit in ihr Schloss im hohen Norden.",
    "vi": "Bà mang Kai về lâu đài của mình ở tận phương Bắc xa xôi."
   },
   {
    "de": "Gerda war sehr traurig und vermisste ihren Freund.",
    "vi": "Gerda rất buồn và nhớ bạn mình."
   },
   {
    "de": "Im Frühling machte sie sich allein auf den Weg.",
    "vi": "Mùa xuân đến, cô bé một mình lên đường."
   },
   {
    "de": "Sie fragte die Blumen, die Vögel und den Fluss nach Kai.",
    "vi": "Cô hỏi những bông hoa, những chú chim và dòng sông về Kai."
   },
   {
    "de": "Eine kluge Krähe zeigte ihr den Weg zu einem Schloss.",
    "vi": "Một con quạ thông minh chỉ cho cô đường đến một lâu đài."
   },
   {
    "de": "Dort schenkten ihr ein Prinz und eine Prinzessin warme Kleider und eine Kutsche.",
    "vi": "Ở đó, một hoàng tử và một công chúa tặng cô quần áo ấm và một cỗ xe."
   },
   {
    "de": "Später traf sie ein wildes, aber gutes Räubermädchen.",
    "vi": "Sau đó, cô gặp một cô bé con nhà cướp, tính tình hoang dã nhưng tốt bụng."
   },
   {
    "de": "Das Mädchen gab ihr ein Rentier als Begleiter.",
    "vi": "Cô bé ấy cho Gerda một con tuần lộc làm bạn đồng hành."
   },
   {
    "de": "Das Rentier trug Gerda durch Schnee und Wind nach Norden.",
    "vi": "Con tuần lộc chở Gerda băng qua tuyết và gió về phương Bắc."
   },
   {
    "de": "Endlich kamen sie zum Schloss der Schneekönigin.",
    "vi": "Cuối cùng họ đến lâu đài của Bà Chúa Tuyết."
   },
   {
    "de": "Die Königin war gerade auf Reisen.",
    "vi": "Lúc đó Bà Chúa Tuyết đang đi xa."
   },
   {
    "de": "In einem großen, kalten Saal saß Kai ganz allein.",
    "vi": "Trong một đại sảnh rộng lớn và lạnh lẽo, Kai ngồi một mình."
   },
   {
    "de": "Er war blass und spielte mit Stücken aus Eis.",
    "vi": "Cậu xanh xao và đang chơi với những mảnh băng."
   },
   {
    "de": "Gerda lief zu ihm und umarmte ihn fest.",
    "vi": "Gerda chạy đến và ôm chặt lấy cậu."
   },
   {
    "de": "Sie weinte warme Tränen auf seine Brust.",
    "vi": "Những giọt nước mắt ấm áp của cô rơi lên ngực cậu."
   },
   {
    "de": "Die Tränen schmolzen das Eis in seinem Herzen.",
    "vi": "Những giọt nước mắt làm tan băng trong tim cậu."
   },
   {
    "de": "Da weinte auch Kai, und der Splitter fiel aus seinem Auge.",
    "vi": "Rồi Kai cũng khóc, và mảnh kính rơi ra khỏi mắt cậu."
   },
   {
    "de": "„Gerda, liebe Gerda, wo warst du so lange?“, fragte er.",
    "vi": "“Gerda, Gerda thân yêu, bạn đã ở đâu lâu thế?” cậu hỏi."
   },
   {
    "de": "Hand in Hand gingen die beiden aus dem Schloss.",
    "vi": "Tay trong tay, hai bạn rời khỏi lâu đài."
   },
   {
    "de": "Das Rentier brachte sie sicher zurück in den Süden.",
    "vi": "Con tuần lộc đưa hai bạn trở về phương Nam an toàn."
   },
   {
    "de": "Überall blühten die Blumen, denn es war wieder Sommer.",
    "vi": "Khắp nơi hoa nở rộ, vì mùa hè đã trở lại."
   },
   {
    "de": "Zu Hause wartete die Großmutter mit einem Lächeln.",
    "vi": "Ở nhà, bà đang mỉm cười chờ đợi."
   },
   {
    "de": "Kai und Gerda saßen wieder zwischen den Rosen.",
    "vi": "Kai và Gerda lại ngồi giữa những khóm hoa hồng."
   },
   {
    "de": "Ihre Herzen waren warm, und sie waren glücklich.",
    "vi": "Trái tim hai bạn ấm áp, và hai bạn thật hạnh phúc."
   }
  ],
  "glossary": [
   {
    "de": "die Schneekönigin",
    "vi": "Bà Chúa Tuyết"
   },
   {
    "de": "der Spiegel",
    "vi": "tấm gương"
   },
   {
    "de": "der Splitter",
    "vi": "mảnh vỡ"
   },
   {
    "de": "das Herz",
    "vi": "trái tim"
   },
   {
    "de": "das Eis",
    "vi": "băng"
   },
   {
    "de": "der Schlitten",
    "vi": "xe trượt tuyết"
   },
   {
    "de": "die Krähe",
    "vi": "con quạ"
   },
   {
    "de": "das Rentier",
    "vi": "con tuần lộc"
   },
   {
    "de": "die Träne",
    "vi": "giọt nước mắt"
   },
   {
    "de": "die Rose",
    "vi": "hoa hồng"
   },
   {
    "de": "die Großmutter",
    "vi": "bà"
   },
   {
    "de": "der Norden",
    "vi": "phương Bắc"
   }
  ]
 },
 {
  "id": "dornroeschen",
  "title": "Dornröschen",
  "title_vi": "Người đẹp ngủ trong rừng",
  "level": "B1",
  "emoji": "🌹",
  "summary_vi": "Một bà tiên phật ý khiến công chúa và cả lâu đài chìm vào giấc ngủ dài một trăm năm. Sau trăm năm, một hoàng tử đến, đánh thức nàng bằng một nụ hôn và mọi người cùng tỉnh lại.",
  "sentences": [
   {
    "de": "Vor langer Zeit lebten ein König und eine Königin.",
    "vi": "Ngày xửa ngày xưa có một ông vua và một bà hoàng hậu."
   },
   {
    "de": "Sie wünschten sich jeden Tag ein Kind.",
    "vi": "Ngày nào họ cũng mong có một đứa con."
   },
   {
    "de": "Endlich bekam die Königin eine kleine Tochter.",
    "vi": "Cuối cùng hoàng hậu sinh được một cô con gái nhỏ."
   },
   {
    "de": "Der König war so glücklich, dass er ein großes Fest gab.",
    "vi": "Nhà vua vui mừng đến mức mở một bữa tiệc lớn."
   },
   {
    "de": "Im Land wohnten dreizehn weise Frauen.",
    "vi": "Trong vương quốc có mười ba bà tiên."
   },
   {
    "de": "Der König hatte aber nur zwölf goldene Teller.",
    "vi": "Nhưng nhà vua chỉ có mười hai chiếc đĩa vàng."
   },
   {
    "de": "Darum lud er nur zwölf weise Frauen ein.",
    "vi": "Vì vậy ông chỉ mời mười hai bà tiên."
   },
   {
    "de": "Jede weise Frau schenkte dem Kind etwas Wunderbares.",
    "vi": "Mỗi bà tiên tặng cho em bé một món quà tuyệt vời."
   },
   {
    "de": "Die eine schenkte Schönheit, die andere Güte und Fröhlichkeit.",
    "vi": "Người thì tặng sắc đẹp, người thì tặng lòng tốt và niềm vui."
   },
   {
    "de": "Plötzlich kam die dreizehnte Frau herein.",
    "vi": "Bỗng nhiên bà tiên thứ mười ba bước vào."
   },
   {
    "de": "Sie war beleidigt, weil niemand sie eingeladen hatte.",
    "vi": "Bà phật ý vì không ai mời bà."
   },
   {
    "de": "Laut rief sie: „Mit fünfzehn Jahren sticht sich die Prinzessin an einer Spindel.“",
    "vi": "Bà lớn tiếng nói: “Năm mười lăm tuổi, công chúa sẽ bị con suốt đâm vào tay.”"
   },
   {
    "de": "„Dann schläft sie ein und wacht nie mehr auf.“",
    "vi": "“Rồi cô sẽ ngủ thiếp đi và không bao giờ tỉnh lại.”"
   },
   {
    "de": "Die zwölfte Frau hatte ihr Geschenk noch nicht gegeben.",
    "vi": "Bà tiên thứ mười hai vẫn chưa trao món quà của mình."
   },
   {
    "de": "Sie sagte sanft: „Die Prinzessin schläft nur hundert Jahre lang.“",
    "vi": "Bà dịu dàng nói: “Công chúa sẽ chỉ ngủ một trăm năm thôi.”"
   },
   {
    "de": "„Dann weckt sie ein Prinz, und alles wird gut.“",
    "vi": "“Rồi một hoàng tử sẽ đánh thức nàng, và mọi chuyện sẽ tốt đẹp.”"
   },
   {
    "de": "Der König ließ alle Spindeln im Land verbrennen.",
    "vi": "Nhà vua ra lệnh đốt hết mọi con suốt trong nước."
   },
   {
    "de": "Die Prinzessin wuchs heran und wurde schön, klug und freundlich.",
    "vi": "Công chúa lớn lên, xinh đẹp, thông minh và hiền hậu."
   },
   {
    "de": "An ihrem fünfzehnten Geburtstag ging sie allein durch das Schloss.",
    "vi": "Vào sinh nhật thứ mười lăm, nàng đi dạo một mình trong lâu đài."
   },
   {
    "de": "Ganz oben in einem alten Turm fand sie eine kleine Tür.",
    "vi": "Trên đỉnh một tòa tháp cũ, nàng tìm thấy một cánh cửa nhỏ."
   },
   {
    "de": "Dort saß eine alte Frau und spann Flachs.",
    "vi": "Ở đó có một bà lão đang ngồi kéo sợi lanh."
   },
   {
    "de": "„Was ist das für ein lustiges Ding?“, fragte die Prinzessin.",
    "vi": "“Đây là vật gì mà thú vị thế ạ?” công chúa hỏi."
   },
   {
    "de": "Sie griff nach der Spindel und stach sich in den Finger.",
    "vi": "Nàng cầm lấy con suốt và bị đâm vào ngón tay."
   },
   {
    "de": "Sofort legte sie sich auf ein Bett und schlief ein.",
    "vi": "Ngay lập tức nàng nằm xuống một chiếc giường và ngủ thiếp đi."
   },
   {
    "de": "Mit ihr schlief das ganze Schloss ein.",
    "vi": "Cùng với nàng, cả lâu đài cũng chìm vào giấc ngủ."
   },
   {
    "de": "Der König, die Königin, die Köche und sogar die Pferde schliefen.",
    "vi": "Nhà vua, hoàng hậu, các đầu bếp và cả những con ngựa đều ngủ."
   },
   {
    "de": "Auch das Feuer im Herd wurde still.",
    "vi": "Ngay cả ngọn lửa trong bếp cũng lặng im."
   },
   {
    "de": "Um das Schloss wuchs eine hohe Hecke aus Rosen.",
    "vi": "Quanh lâu đài mọc lên một hàng rào hoa hồng cao."
   },
   {
    "de": "Bald konnte man das Schloss nicht mehr sehen.",
    "vi": "Chẳng bao lâu người ta không còn nhìn thấy lâu đài nữa."
   },
   {
    "de": "Die Leute erzählten von der schlafenden Prinzessin Dornröschen.",
    "vi": "Mọi người kể cho nhau nghe về nàng công chúa đang ngủ tên là Dornröschen."
   },
   {
    "de": "Nach hundert Jahren kam ein junger Prinz in das Land.",
    "vi": "Một trăm năm sau, có một chàng hoàng tử trẻ đến vương quốc."
   },
   {
    "de": "Als er zur Hecke kam, öffneten sich die Rosen ganz von selbst.",
    "vi": "Khi chàng đến hàng rào, những bông hồng tự mở lối cho chàng."
   },
   {
    "de": "Der Prinz ging leise durch das stille Schloss.",
    "vi": "Hoàng tử nhẹ nhàng đi qua tòa lâu đài yên tĩnh."
   },
   {
    "de": "Im Turm fand er die schöne Prinzessin.",
    "vi": "Trong tháp, chàng tìm thấy nàng công chúa xinh đẹp."
   },
   {
    "de": "Sie war so schön, dass er ihr einen Kuss gab.",
    "vi": "Nàng đẹp đến nỗi chàng trao cho nàng một nụ hôn."
   },
   {
    "de": "Da öffnete Dornröschen die Augen und lächelte ihn an.",
    "vi": "Lúc đó Dornröschen mở mắt và mỉm cười với chàng."
   },
   {
    "de": "Auch der König und die Königin wachten auf.",
    "vi": "Nhà vua và hoàng hậu cũng thức dậy."
   },
   {
    "de": "Die Pferde schüttelten sich, und das Feuer brannte wieder.",
    "vi": "Những con ngựa rũ mình, và ngọn lửa lại cháy bập bùng."
   },
   {
    "de": "Bald feierten der Prinz und Dornröschen Hochzeit.",
    "vi": "Chẳng bao lâu hoàng tử và Dornröschen tổ chức đám cưới."
   },
   {
    "de": "Und sie lebten glücklich und zufrieden.",
    "vi": "Và họ sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "der König",
    "vi": "nhà vua"
   },
   {
    "de": "die Königin",
    "vi": "hoàng hậu"
   },
   {
    "de": "die Tochter",
    "vi": "con gái"
   },
   {
    "de": "die weise Frau",
    "vi": "bà tiên, người phụ nữ thông thái"
   },
   {
    "de": "der Teller",
    "vi": "cái đĩa"
   },
   {
    "de": "das Geschenk",
    "vi": "món quà"
   },
   {
    "de": "die Spindel",
    "vi": "con suốt"
   },
   {
    "de": "der Turm",
    "vi": "tòa tháp"
   },
   {
    "de": "der Finger",
    "vi": "ngón tay"
   },
   {
    "de": "der Schlaf",
    "vi": "giấc ngủ"
   },
   {
    "de": "die Hecke",
    "vi": "hàng rào cây"
   },
   {
    "de": "die Rose",
    "vi": "hoa hồng"
   },
   {
    "de": "der Kuss",
    "vi": "nụ hôn"
   }
  ]
 },
 {
  "id": "haensel-und-gretel",
  "title": "Hänsel und Gretel",
  "title_vi": "Hänsel và Gretel",
  "level": "B1",
  "emoji": "🍭",
  "summary_vi": "Hai anh em Hänsel và Gretel bị lạc trong rừng và tìm thấy một ngôi nhà bằng bánh gừng của mụ phù thủy. Nhờ sự thông minh của Gretel, mụ phù thủy bỏ chạy và hai anh em trở về nhà với cha.",
  "sentences": [
   {
    "de": "Am Rand eines großen Waldes lebte ein armer Holzfäller mit seinen zwei Kindern.",
    "vi": "Ở bìa một khu rừng lớn có một bác tiều phu nghèo sống cùng hai đứa con."
   },
   {
    "de": "Der Junge hieß Hänsel, und das Mädchen hieß Gretel.",
    "vi": "Cậu bé tên là Hänsel, còn cô bé tên là Gretel."
   },
   {
    "de": "Die Familie hatte nur sehr wenig Brot.",
    "vi": "Gia đình chỉ có rất ít bánh mì."
   },
   {
    "de": "Eines Abends sagte die Stiefmutter: „Wir haben nicht genug zu essen.“",
    "vi": "Một buổi tối, bà mẹ kế nói: “Chúng ta không có đủ đồ ăn.”"
   },
   {
    "de": "„Morgen bringen wir die Kinder tief in den Wald.“",
    "vi": "“Ngày mai chúng ta sẽ đưa bọn trẻ vào sâu trong rừng.”"
   },
   {
    "de": "Hänsel konnte nicht schlafen und hörte alles.",
    "vi": "Hänsel không ngủ được và nghe thấy hết."
   },
   {
    "de": "In der Nacht ging er leise hinaus und sammelte weiße Kieselsteine.",
    "vi": "Trong đêm, cậu lặng lẽ ra ngoài và nhặt những viên sỏi trắng."
   },
   {
    "de": "Am nächsten Morgen gingen alle zusammen in den Wald.",
    "vi": "Sáng hôm sau, cả nhà cùng đi vào rừng."
   },
   {
    "de": "Auf dem Weg ließ Hänsel heimlich die Steine fallen.",
    "vi": "Trên đường đi, Hänsel lén thả những viên sỏi xuống."
   },
   {
    "de": "Die Eltern ließen die Kinder an einem Feuer allein.",
    "vi": "Cha mẹ để hai đứa trẻ lại một mình bên đống lửa."
   },
   {
    "de": "Als der Mond aufging, glänzten die Steine wie kleine Sterne.",
    "vi": "Khi trăng lên, những viên sỏi lấp lánh như những ngôi sao nhỏ."
   },
   {
    "de": "So fanden die Kinder den Weg nach Hause.",
    "vi": "Nhờ vậy, hai đứa trẻ tìm được đường về nhà."
   },
   {
    "de": "Bald war das Brot wieder knapp, und die Kinder mussten zurück in den Wald.",
    "vi": "Chẳng bao lâu bánh mì lại thiếu, và hai đứa trẻ lại phải vào rừng."
   },
   {
    "de": "Diesmal hatte Hänsel nur ein Stück Brot in der Tasche.",
    "vi": "Lần này Hänsel chỉ có một mẩu bánh mì trong túi."
   },
   {
    "de": "Er streute kleine Krümel auf den Weg.",
    "vi": "Cậu rắc những mẩu vụn nhỏ lên đường."
   },
   {
    "de": "Aber die Vögel kamen und pickten alle Krümel auf.",
    "vi": "Nhưng lũ chim bay đến và mổ hết những mẩu vụn."
   },
   {
    "de": "Nun fanden Hänsel und Gretel den Weg nicht mehr.",
    "vi": "Giờ thì Hänsel và Gretel không còn tìm thấy đường nữa."
   },
   {
    "de": "Sie liefen lange durch den Wald und wurden sehr müde.",
    "vi": "Hai anh em đi rất lâu trong rừng và trở nên rất mệt."
   },
   {
    "de": "Plötzlich sahen sie ein kleines Haus auf einer Lichtung.",
    "vi": "Bỗng nhiên hai anh em thấy một ngôi nhà nhỏ giữa một khoảng rừng thưa."
   },
   {
    "de": "Das Haus war aus Lebkuchen, und das Dach war aus Kuchen.",
    "vi": "Ngôi nhà làm bằng bánh gừng, còn mái nhà làm bằng bánh ngọt."
   },
   {
    "de": "Die Fenster waren aus klarem Zucker.",
    "vi": "Những ô cửa sổ làm bằng đường trong suốt."
   },
   {
    "de": "Die hungrigen Kinder brachen ein Stück ab und aßen.",
    "vi": "Hai đứa trẻ đói bụng bẻ một miếng và ăn."
   },
   {
    "de": "Da öffnete sich die Tür, und eine alte Frau kam heraus.",
    "vi": "Lúc đó cánh cửa mở ra, và một bà lão bước ra."
   },
   {
    "de": "Sie war eine Hexe, aber zuerst war sie sehr freundlich.",
    "vi": "Bà ta là một mụ phù thủy, nhưng lúc đầu bà rất tử tế."
   },
   {
    "de": "Am nächsten Tag sperrte sie Hänsel in einen kleinen Stall.",
    "vi": "Ngày hôm sau, mụ nhốt Hänsel vào một cái chuồng nhỏ."
   },
   {
    "de": "Gretel musste den ganzen Tag kochen und putzen.",
    "vi": "Gretel phải nấu nướng và dọn dẹp cả ngày."
   },
   {
    "de": "Die Hexe sah sehr schlecht und konnte kaum etwas erkennen.",
    "vi": "Mụ phù thủy mắt rất kém và hầu như không nhìn rõ gì."
   },
   {
    "de": "Eines Tages hatte Gretel eine kluge Idee.",
    "vi": "Một ngày nọ, Gretel nảy ra một ý hay."
   },
   {
    "de": "Sie rief laut: „Hilfe, ein großer Bär kommt aus dem Wald!“",
    "vi": "Cô bé hét to: “Cứu với, có một con gấu lớn từ trong rừng đi ra!”"
   },
   {
    "de": "Die Hexe erschrak so sehr, dass sie in den Wald davonlief.",
    "vi": "Mụ phù thủy sợ đến mức chạy biến vào rừng."
   },
   {
    "de": "Sie kam nie wieder zurück.",
    "vi": "Mụ không bao giờ quay lại nữa."
   },
   {
    "de": "Gretel öffnete schnell den Stall, und Hänsel war frei.",
    "vi": "Gretel nhanh chóng mở chuồng, và Hänsel được tự do."
   },
   {
    "de": "Im Haus fanden die Kinder Kisten voller Perlen und Edelsteine.",
    "vi": "Trong nhà, hai đứa trẻ tìm thấy những chiếc hòm đầy ngọc trai và đá quý."
   },
   {
    "de": "Sie füllten ihre Taschen und machten sich auf den Weg.",
    "vi": "Hai anh em nhét đầy túi rồi lên đường."
   },
   {
    "de": "Eine freundliche weiße Ente trug sie über einen breiten Fluss.",
    "vi": "Một chú vịt trắng hiền lành chở hai anh em qua một con sông rộng."
   },
   {
    "de": "Bald erkannten sie den Wald und sahen ihr Haus.",
    "vi": "Chẳng bao lâu hai anh em nhận ra khu rừng và thấy ngôi nhà của mình."
   },
   {
    "de": "Der Vater hatte die ganze Zeit an seine Kinder gedacht.",
    "vi": "Suốt thời gian qua, người cha lúc nào cũng nghĩ đến các con."
   },
   {
    "de": "Die Stiefmutter war inzwischen fortgegangen.",
    "vi": "Bà mẹ kế khi ấy đã bỏ đi."
   },
   {
    "de": "Der Vater umarmte Hänsel und Gretel und weinte vor Freude.",
    "vi": "Người cha ôm Hänsel và Gretel và khóc vì vui mừng."
   },
   {
    "de": "Mit den Edelsteinen hatten sie nun nie mehr Hunger.",
    "vi": "Nhờ những viên đá quý, từ đó cả nhà không bao giờ phải chịu đói nữa."
   },
   {
    "de": "Und alle lebten glücklich und zufrieden.",
    "vi": "Và cả nhà sống hạnh phúc, mãn nguyện."
   }
  ],
  "glossary": [
   {
    "de": "der Holzfäller",
    "vi": "bác tiều phu"
   },
   {
    "de": "der Wald",
    "vi": "khu rừng"
   },
   {
    "de": "die Stiefmutter",
    "vi": "mẹ kế"
   },
   {
    "de": "der Kieselstein",
    "vi": "viên sỏi"
   },
   {
    "de": "das Brot",
    "vi": "bánh mì"
   },
   {
    "de": "der Krümel",
    "vi": "mẩu vụn"
   },
   {
    "de": "der Vogel",
    "vi": "con chim"
   },
   {
    "de": "der Lebkuchen",
    "vi": "bánh gừng"
   },
   {
    "de": "die Hexe",
    "vi": "mụ phù thủy"
   },
   {
    "de": "der Stall",
    "vi": "cái chuồng"
   },
   {
    "de": "der Bär",
    "vi": "con gấu"
   },
   {
    "de": "der Edelstein",
    "vi": "viên đá quý"
   },
   {
    "de": "die Ente",
    "vi": "con vịt"
   }
  ]
 }
];
