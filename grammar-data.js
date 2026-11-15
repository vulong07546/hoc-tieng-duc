// Bài tập ngữ pháp A1–C2: mỗi chủ đề có lý thuyết + câu điền từ.
const GRAMMAR = {
 "A1": [
  {
   "title": "Chia động từ ở thì hiện tại (Präsens)",
   "intro": "Động từ tiếng Đức thay đổi đuôi theo chủ ngữ. Bỏ đuôi -en của động từ nguyên mẫu rồi thêm đuôi tương ứng. Một số động từ đổi nguyên âm ở du/er/sie/es (fahren → fährt, lesen → liest). 'sein' và 'haben' là bất quy tắc.\nich -e | du -st | er/sie/es -t\nwir -en | ihr -t | sie/Sie -en\nsein: bin, bist, ist, sind, seid, sind\nhaben: habe, hast, hat, haben, habt, haben",
   "questions": [
    {
     "q": "Ich ___ aus Vietnam.",
     "hint": "(kommen)",
     "answers": [
      "komme"
     ],
     "vi": "Tôi đến từ Việt Nam.",
     "explain": "Với 'ich', động từ có đuôi -e: komm + e."
    },
    {
     "q": "Du ___ sehr gut Deutsch.",
     "hint": "(sprechen)",
     "answers": [
      "sprichst"
     ],
     "vi": "Bạn nói tiếng Đức rất giỏi.",
     "explain": "'sprechen' đổi e → i ở ngôi du và thêm đuôi -st."
    },
    {
     "q": "Er ___ in Berlin.",
     "hint": "(wohnen)",
     "answers": [
      "wohnt"
     ],
     "vi": "Anh ấy sống ở Berlin.",
     "explain": "Với 'er', động từ có đuôi -t: wohn + t."
    },
    {
     "q": "Wir ___ Studenten.",
     "hint": "(sein)",
     "answers": [
      "sind"
     ],
     "vi": "Chúng tôi là sinh viên.",
     "explain": "'sein' bất quy tắc: wir sind."
    },
    {
     "q": "Ihr ___ heute keine Zeit.",
     "hint": "(haben)",
     "answers": [
      "habt"
     ],
     "vi": "Các bạn hôm nay không có thời gian.",
     "explain": "Với 'ihr', động từ có đuôi -t: hab + t."
    },
    {
     "q": "Sie ___ Lehrerin.",
     "hint": "(sein; sie = cô ấy)",
     "answers": [
      "ist"
     ],
     "vi": "Cô ấy là giáo viên.",
     "explain": "'sie' (cô ấy) đi với 'ist', giống như 'er'."
    },
    {
     "q": "Wie ___ du?",
     "hint": "(heißen)",
     "answers": [
      "heißt"
     ],
     "vi": "Bạn tên là gì?",
     "explain": "Gốc 'heiß' tận cùng bằng ß nên với du chỉ thêm -t: heißt."
    },
    {
     "q": "Anna ___ gern Bücher.",
     "hint": "(lesen)",
     "answers": [
      "liest"
     ],
     "vi": "Anna thích đọc sách.",
     "explain": "'lesen' đổi e → ie ở ngôi er/sie/es: liest."
    },
    {
     "q": "Was ___ du am Wochenende?",
     "hint": "(machen)",
     "answers": [
      "machst"
     ],
     "vi": "Bạn làm gì vào cuối tuần?",
     "explain": "Với 'du', động từ có đuôi -st: mach + st."
    },
    {
     "q": "Er ___ jeden Tag Fahrrad.",
     "hint": "(fahren)",
     "answers": [
      "fährt"
     ],
     "vi": "Anh ấy đạp xe đạp mỗi ngày.",
     "explain": "'fahren' đổi a → ä ở ngôi er/sie/es: fährt."
    },
    {
     "q": "Ich ___ einen Bruder.",
     "hint": "(haben)",
     "answers": [
      "habe"
     ],
     "vi": "Tôi có một người anh/em trai.",
     "explain": "Với 'ich', 'haben' chia là 'habe'."
    },
    {
     "q": "Du ___ in Hamburg.",
     "hint": "(arbeiten)",
     "answers": [
      "arbeitest"
     ],
     "vi": "Bạn làm việc ở Hamburg.",
     "explain": "Gốc 'arbeit' tận cùng bằng -t nên thêm -e- trước đuôi: arbeitest."
    }
   ]
  },
  {
   "title": "Mạo từ ở cách 1 và cách 4 (Nominativ und Akkusativ)",
   "intro": "Chủ ngữ ở cách 1 (Nominativ), tân ngữ trực tiếp ở cách 4 (Akkusativ). Ở cách 4 chỉ có giống đực thay đổi: der → den, ein → einen. Giống cái, giống trung và số nhiều giữ nguyên.\n          Nominativ | Akkusativ\nđực:      der / ein | den / einen\ncái:      die / eine | die / eine\ntrung:    das / ein | das / ein\nsố nhiều: die | die",
   "questions": [
    {
     "q": "Ich habe ___ Hund.",
     "hint": "(ein; der Hund)",
     "answers": [
      "einen"
     ],
     "vi": "Tôi có một con chó.",
     "explain": "'Hund' là giống đực, làm tân ngữ (cách 4) nên ein → einen."
    },
    {
     "q": "Wir kaufen ___ Tasche.",
     "hint": "(ein; die Tasche)",
     "answers": [
      "eine"
     ],
     "vi": "Chúng tôi mua một cái túi.",
     "explain": "Giống cái ở cách 4 không đổi: eine."
    },
    {
     "q": "Er trinkt ___ Kaffee.",
     "hint": "(der; der Kaffee)",
     "answers": [
      "den"
     ],
     "vi": "Anh ấy uống cà phê (đó).",
     "explain": "Giống đực ở cách 4: der → den."
    },
    {
     "q": "Siehst du ___ Auto?",
     "hint": "(das; das Auto)",
     "answers": [
      "das"
     ],
     "vi": "Bạn có thấy chiếc ô tô đó không?",
     "explain": "Giống trung ở cách 4 không đổi: das."
    },
    {
     "q": "Ich brauche ___ Stift.",
     "hint": "(ein; der Stift)",
     "answers": [
      "einen"
     ],
     "vi": "Tôi cần một cây bút.",
     "explain": "'Stift' giống đực, là tân ngữ của 'brauchen' nên dùng einen."
    },
    {
     "q": "Sie isst ___ Apfel.",
     "hint": "(ein; der Apfel)",
     "answers": [
      "einen"
     ],
     "vi": "Cô ấy ăn một quả táo.",
     "explain": "'Apfel' giống đực ở cách 4: einen."
    },
    {
     "q": "Kennst du ___ Mann dort?",
     "hint": "(der; der Mann)",
     "answers": [
      "den"
     ],
     "vi": "Bạn có biết người đàn ông ở đằng kia không?",
     "explain": "'Mann' giống đực, là tân ngữ của 'kennen' nên der → den."
    },
    {
     "q": "Ich lese ___ Buch.",
     "hint": "(ein; das Buch)",
     "answers": [
      "ein"
     ],
     "vi": "Tôi đọc một cuốn sách.",
     "explain": "Giống trung ở cách 4 không đổi: ein."
    },
    {
     "q": "Wir besuchen ___ Großeltern.",
     "hint": "(die; die Großeltern, Plural)",
     "answers": [
      "die"
     ],
     "vi": "Chúng tôi đi thăm ông bà.",
     "explain": "Số nhiều ở cách 4 không đổi: die."
    },
    {
     "q": "Er hat ___ Schwester.",
     "hint": "(ein; die Schwester)",
     "answers": [
      "eine"
     ],
     "vi": "Anh ấy có một người chị/em gái.",
     "explain": "Giống cái ở cách 4 không đổi: eine."
    },
    {
     "q": "___ Lehrer ist nett.",
     "hint": "(der; der Lehrer)",
     "answers": [
      "Der",
      "der"
     ],
     "vi": "Thầy giáo thân thiện.",
     "explain": "'Lehrer' là chủ ngữ (cách 1) nên giữ nguyên 'der'."
    },
    {
     "q": "Ich nehme ___ Salat.",
     "hint": "(der; der Salat)",
     "answers": [
      "den"
     ],
     "vi": "Tôi lấy món salad.",
     "explain": "'Salat' giống đực, là tân ngữ của 'nehmen' nên der → den."
    }
   ]
  },
  {
   "title": "Phủ định với nicht và kein (Negation)",
   "intro": "'kein' phủ định danh từ đi với 'ein' hoặc không có mạo từ; nó chia đuôi như 'ein' (kein, keine, keinen). 'nicht' phủ định động từ, tính từ, trạng từ, cụm giới từ hoặc danh từ có mạo từ xác định/sở hữu.\nIch habe ein Auto. → Ich habe kein Auto.\nIch komme. → Ich komme nicht.\nDas ist gut. → Das ist nicht gut.",
   "questions": [
    {
     "q": "Ich habe ___ Auto.",
     "hint": "(nicht / kein; das Auto)",
     "answers": [
      "kein"
     ],
     "vi": "Tôi không có ô tô.",
     "explain": "Danh từ không có mạo từ xác định nên dùng 'kein'; giống trung cách 4: kein."
    },
    {
     "q": "Das ist ___ mein Buch.",
     "hint": "(nicht / kein)",
     "answers": [
      "nicht"
     ],
     "vi": "Đó không phải là sách của tôi.",
     "explain": "Danh từ có mạo từ sở hữu 'mein' nên phủ định bằng 'nicht'."
    },
    {
     "q": "Er trinkt ___ Kaffee.",
     "hint": "(nicht / kein; der Kaffee)",
     "answers": [
      "keinen"
     ],
     "vi": "Anh ấy không uống cà phê.",
     "explain": "Danh từ không mạo từ dùng 'kein'; giống đực cách 4: keinen."
    },
    {
     "q": "Wir haben ___ Zeit.",
     "hint": "(nicht / kein; die Zeit)",
     "answers": [
      "keine"
     ],
     "vi": "Chúng tôi không có thời gian.",
     "explain": "Danh từ không mạo từ dùng 'kein'; giống cái: keine."
    },
    {
     "q": "Sie kommt heute ___.",
     "hint": "(nicht / kein)",
     "answers": [
      "nicht"
     ],
     "vi": "Hôm nay cô ấy không đến.",
     "explain": "Phủ định động từ nên dùng 'nicht' ở cuối câu."
    },
    {
     "q": "Ich habe ___ Kinder.",
     "hint": "(nicht / kein; die Kinder, Plural)",
     "answers": [
      "keine"
     ],
     "vi": "Tôi không có con.",
     "explain": "Danh từ số nhiều không mạo từ dùng 'keine'."
    },
    {
     "q": "Das ist ___ Problem.",
     "hint": "(nicht / kein; das Problem)",
     "answers": [
      "kein"
     ],
     "vi": "Đó không phải là vấn đề.",
     "explain": "Phủ định 'ein Problem' thành 'kein Problem'."
    },
    {
     "q": "Ich wohne ___ in Berlin.",
     "hint": "(nicht / kein)",
     "answers": [
      "nicht"
     ],
     "vi": "Tôi không sống ở Berlin.",
     "explain": "Phủ định cụm giới từ 'in Berlin' nên dùng 'nicht'."
    },
    {
     "q": "Er hat ___ Bruder.",
     "hint": "(nicht / kein; der Bruder)",
     "answers": [
      "keinen"
     ],
     "vi": "Anh ấy không có anh/em trai.",
     "explain": "Phủ định 'einen Bruder' thành 'keinen Bruder' (giống đực, cách 4)."
    },
    {
     "q": "Das Essen ist ___ gut.",
     "hint": "(nicht / kein)",
     "answers": [
      "nicht"
     ],
     "vi": "Đồ ăn không ngon.",
     "explain": "Phủ định tính từ 'gut' nên dùng 'nicht'."
    },
    {
     "q": "Wir brauchen ___ Tasche.",
     "hint": "(nicht / kein; die Tasche)",
     "answers": [
      "keine"
     ],
     "vi": "Chúng tôi không cần túi.",
     "explain": "Phủ định 'eine Tasche' thành 'keine Tasche'."
    },
    {
     "q": "Ich schwimme ___ gern.",
     "hint": "(nicht / kein)",
     "answers": [
      "nicht"
     ],
     "vi": "Tôi không thích bơi.",
     "explain": "Phủ định trạng từ 'gern' nên dùng 'nicht'."
    }
   ]
  },
  {
   "title": "Động từ khuyết thiếu (Modalverben)",
   "intro": "Động từ khuyết thiếu (können, müssen, wollen, dürfen, möchten) đứng ở vị trí thứ 2 và được chia; động từ chính ở dạng nguyên mẫu đứng cuối câu. Ngôi ich và er/sie/es giống nhau và không có đuôi.\nkönnen: kann, kannst, kann, können, könnt, können\nmüssen: muss, musst, muss, müssen, müsst, müssen\nwollen: will, willst, will, wollen, wollt, wollen\ndürfen: darf, darfst, darf, dürfen, dürft, dürfen\nmöchten: möchte, möchtest, möchte, möchten, möchtet, möchten",
   "questions": [
    {
     "q": "Ich ___ gut schwimmen.",
     "hint": "(können)",
     "answers": [
      "kann"
     ],
     "vi": "Tôi có thể bơi giỏi.",
     "explain": "'können' với ich là 'kann' (không có đuôi)."
    },
    {
     "q": "Du ___ heute arbeiten.",
     "hint": "(müssen)",
     "answers": [
      "musst"
     ],
     "vi": "Hôm nay bạn phải làm việc.",
     "explain": "'müssen' với du: bỏ ü thành u và thêm -st: musst."
    },
    {
     "q": "Er ___ einen Kaffee trinken.",
     "hint": "(wollen)",
     "answers": [
      "will"
     ],
     "vi": "Anh ấy muốn uống một ly cà phê.",
     "explain": "'wollen' với er là 'will'."
    },
    {
     "q": "Wir ___ Deutsch lernen.",
     "hint": "(möchten)",
     "answers": [
      "möchten"
     ],
     "vi": "Chúng tôi muốn học tiếng Đức.",
     "explain": "Với wir, 'möchten' giữ nguyên dạng."
    },
    {
     "q": "___ Sie mir helfen?",
     "hint": "(können)",
     "answers": [
      "Können",
      "können"
     ],
     "vi": "Ông/bà có thể giúp tôi không?",
     "explain": "Với 'Sie' (lịch sự), dùng 'können'; trong câu hỏi có/không động từ đứng đầu."
    },
    {
     "q": "Hier ___ man nicht rauchen.",
     "hint": "(dürfen)",
     "answers": [
      "darf"
     ],
     "vi": "Ở đây không được hút thuốc.",
     "explain": "'man' chia như er: dürfen → darf."
    },
    {
     "q": "Ihr ___ morgen früh aufstehen.",
     "hint": "(müssen)",
     "answers": [
      "müsst"
     ],
     "vi": "Ngày mai các bạn phải dậy sớm.",
     "explain": "Với ihr, 'müssen' chia là 'müsst'."
    },
    {
     "q": "Ich ___ ein Glas Wasser, bitte.",
     "hint": "(möchten)",
     "answers": [
      "möchte"
     ],
     "vi": "Tôi muốn một ly nước, làm ơn.",
     "explain": "Với ich, 'möchten' chia là 'möchte'."
    },
    {
     "q": "Sie ___ Ärztin werden.",
     "hint": "(wollen; sie = cô ấy)",
     "answers": [
      "will"
     ],
     "vi": "Cô ấy muốn trở thành bác sĩ.",
     "explain": "'sie' (cô ấy) chia như er: wollen → will."
    },
    {
     "q": "___ du Gitarre spielen?",
     "hint": "(können)",
     "answers": [
      "Kannst",
      "kannst"
     ],
     "vi": "Bạn có biết chơi đàn ghi-ta không?",
     "explain": "Với du, 'können' chia là 'kannst'."
    },
    {
     "q": "Du ___ hier nicht parken.",
     "hint": "(dürfen)",
     "answers": [
      "darfst"
     ],
     "vi": "Bạn không được đỗ xe ở đây.",
     "explain": "Với du, 'dürfen' chia là 'darfst'."
    },
    {
     "q": "Mein Bruder ___ viel lernen.",
     "hint": "(müssen)",
     "answers": [
      "muss"
     ],
     "vi": "Anh/em trai tôi phải học nhiều.",
     "explain": "'Mein Bruder' = er, nên 'müssen' chia là 'muss'."
    }
   ]
  },
  {
   "title": "Động từ tách được (trennbare Verben)",
   "intro": "Nhiều động từ có tiền tố tách được (an-, auf-, ein-, mit-, fern-, zu-, ab-...). Trong câu, phần động từ được chia ở vị trí thứ 2, còn tiền tố đứng ở cuối câu.\naufstehen → Ich stehe um 7 Uhr auf.\nanrufen → Er ruft seine Mutter an.\nmitkommen → Kommst du mit?",
   "questions": [
    {
     "q": "Ich ___ um sieben Uhr auf.",
     "hint": "(aufstehen)",
     "answers": [
      "stehe"
     ],
     "vi": "Tôi thức dậy lúc bảy giờ.",
     "explain": "Phần 'stehen' được chia (stehe) ở vị trí 2, 'auf' ở cuối câu."
    },
    {
     "q": "Der Zug ___ um zehn Uhr an.",
     "hint": "(ankommen)",
     "answers": [
      "kommt"
     ],
     "vi": "Tàu đến lúc mười giờ.",
     "explain": "'ankommen' tách: kommt ... an."
    },
    {
     "q": "Wir ___ heute Abend fern.",
     "hint": "(fernsehen)",
     "answers": [
      "sehen"
     ],
     "vi": "Tối nay chúng tôi xem ti vi.",
     "explain": "'fernsehen' tách: wir sehen ... fern."
    },
    {
     "q": "Er ___ seine Freundin an.",
     "hint": "(anrufen)",
     "answers": [
      "ruft"
     ],
     "vi": "Anh ấy gọi điện cho bạn gái.",
     "explain": "'anrufen' tách: er ruft ... an."
    },
    {
     "q": "Du ___ im Supermarkt ein.",
     "hint": "(einkaufen)",
     "answers": [
      "kaufst"
     ],
     "vi": "Bạn đi mua sắm ở siêu thị.",
     "explain": "'einkaufen' tách: du kaufst ... ein."
    },
    {
     "q": "Ich mache die Tür ___.",
     "hint": "(aufmachen)",
     "answers": [
      "auf"
     ],
     "vi": "Tôi mở cửa.",
     "explain": "Tiền tố 'auf' của 'aufmachen' đứng ở cuối câu."
    },
    {
     "q": "Wann ___ der Film an?",
     "hint": "(anfangen)",
     "answers": [
      "fängt"
     ],
     "vi": "Khi nào bộ phim bắt đầu?",
     "explain": "'anfangen' tách và đổi a → ä ở ngôi er: fängt ... an."
    },
    {
     "q": "___ du mit?",
     "hint": "(mitkommen)",
     "answers": [
      "Kommst",
      "kommst"
     ],
     "vi": "Bạn có đi cùng không?",
     "explain": "'mitkommen' tách: Kommst du mit?"
    },
    {
     "q": "Ich ___ meine Freunde ein.",
     "hint": "(einladen)",
     "answers": [
      "lade"
     ],
     "vi": "Tôi mời bạn bè của tôi.",
     "explain": "'einladen' tách: ich lade ... ein."
    },
    {
     "q": "Er sieht heute Abend ___.",
     "hint": "(fernsehen)",
     "answers": [
      "fern"
     ],
     "vi": "Tối nay anh ấy xem ti vi.",
     "explain": "Tiền tố 'fern' đứng ở cuối câu."
    },
    {
     "q": "Der Bus fährt um acht Uhr ___.",
     "hint": "(abfahren)",
     "answers": [
      "ab"
     ],
     "vi": "Xe buýt khởi hành lúc tám giờ.",
     "explain": "Tiền tố 'ab' của 'abfahren' đứng ở cuối câu."
    },
    {
     "q": "Mein Vater ___ das Fenster zu.",
     "hint": "(zumachen)",
     "answers": [
      "macht"
     ],
     "vi": "Bố tôi đóng cửa sổ.",
     "explain": "'zumachen' tách: er macht ... zu."
    }
   ]
  },
  {
   "title": "Mạo từ sở hữu (Possessivartikel)",
   "intro": "Mạo từ sở hữu cho biết vật thuộc về ai và chia đuôi giống 'ein' (Nominativ: mein, meine; Akkusativ giống đực: meinen).\nich → mein | du → dein | er/es → sein | sie → ihr\nwir → unser | ihr → euer | sie/Sie → ihr/Ihr\nVí dụ: mein Vater, meine Mutter, mein Kind, meine Eltern; Ich sehe meinen Vater.",
   "questions": [
    {
     "q": "Das ist ___ Bruder.",
     "hint": "(ich; der Bruder)",
     "answers": [
      "mein"
     ],
     "vi": "Đây là anh/em trai của tôi.",
     "explain": "Của 'ich' là 'mein'; giống đực cách 1 không có đuôi."
    },
    {
     "q": "Wo ist ___ Tasche?",
     "hint": "(du; die Tasche)",
     "answers": [
      "deine"
     ],
     "vi": "Cái túi của bạn ở đâu?",
     "explain": "Của 'du' là 'dein'; giống cái thêm -e: deine."
    },
    {
     "q": "Das ist ___ Auto.",
     "hint": "(er; das Auto)",
     "answers": [
      "sein"
     ],
     "vi": "Đây là ô tô của anh ấy.",
     "explain": "Của 'er' là 'sein'; giống trung không có đuôi."
    },
    {
     "q": "___ Mutter heißt Lan.",
     "hint": "(sie = cô ấy; die Mutter)",
     "answers": [
      "Ihre",
      "ihre"
     ],
     "vi": "Mẹ của cô ấy tên là Lan.",
     "explain": "Của 'sie' (cô ấy) là 'ihr'; giống cái thêm -e: ihre."
    },
    {
     "q": "Wie ist ___ Name?",
     "hint": "(Sie; der Name)",
     "answers": [
      "Ihr"
     ],
     "vi": "Tên của ông/bà là gì?",
     "explain": "Của 'Sie' (lịch sự) là 'Ihr', luôn viết hoa."
    },
    {
     "q": "Das sind ___ Kinder.",
     "hint": "(wir; die Kinder, Plural)",
     "answers": [
      "unsere"
     ],
     "vi": "Đây là các con của chúng tôi.",
     "explain": "Của 'wir' là 'unser'; số nhiều thêm -e: unsere."
    },
    {
     "q": "Ich besuche ___ Oma.",
     "hint": "(ich; die Oma)",
     "answers": [
      "meine"
     ],
     "vi": "Tôi đi thăm bà của tôi.",
     "explain": "Giống cái ở cách 4 không đổi: meine."
    },
    {
     "q": "Ich suche ___ Schlüssel.",
     "hint": "(ich; der Schlüssel, Singular)",
     "answers": [
      "meinen"
     ],
     "vi": "Tôi đang tìm chìa khóa của tôi.",
     "explain": "Giống đực ở cách 4 thêm -en: meinen."
    },
    {
     "q": "Ist das ___ Hund?",
     "hint": "(ihr = các bạn; der Hund)",
     "answers": [
      "euer"
     ],
     "vi": "Đây có phải là con chó của các bạn không?",
     "explain": "Của 'ihr' (các bạn) là 'euer'; giống đực cách 1 không có đuôi."
    },
    {
     "q": "Er liebt ___ Frau.",
     "hint": "(er; die Frau)",
     "answers": [
      "seine"
     ],
     "vi": "Anh ấy yêu vợ của mình.",
     "explain": "Của 'er' là 'sein'; giống cái thêm -e: seine."
    },
    {
     "q": "Hast du ___ Handy?",
     "hint": "(du; das Handy)",
     "answers": [
      "dein"
     ],
     "vi": "Bạn có mang điện thoại của bạn không?",
     "explain": "Giống trung ở cách 4 không đổi: dein."
    },
    {
     "q": "Wir besuchen ___ Lehrer.",
     "hint": "(wir; der Lehrer, Singular)",
     "answers": [
      "unseren"
     ],
     "vi": "Chúng tôi đến thăm thầy giáo của chúng tôi.",
     "explain": "Giống đực ở cách 4 thêm -en: unseren."
    }
   ]
  }
 ],
 "A2": [
  {
   "title": "Thì quá khứ hoàn thành (Perfekt)",
   "intro": "Perfekt dùng để kể về việc đã xảy ra, nhất là khi nói chuyện. Cấu trúc: haben/sein (chia ở vị trí 2) + phân từ II (Partizip II) ở cuối câu. Động từ chỉ sự di chuyển hoặc thay đổi trạng thái (gehen, fahren, aufstehen, einschlafen) và bleiben, sein dùng sein; phần lớn các động từ khác dùng haben.\nlernen → gelernt | sehen → gesehen\naufstehen → aufgestanden | verstehen → verstanden",
   "questions": [
    {
     "q": "Ich habe gestern einen Film ___.",
     "hint": "(sehen, Perfekt)",
     "answers": [
      "gesehen"
     ],
     "vi": "Hôm qua tôi đã xem một bộ phim.",
     "explain": "sehen là động từ bất quy tắc, phân từ II là gesehen."
    },
    {
     "q": "Wir sind am Wochenende nach Berlin ___.",
     "hint": "(fahren, Perfekt)",
     "answers": [
      "gefahren"
     ],
     "vi": "Cuối tuần chúng tôi đã đi Berlin.",
     "explain": "fahren là động từ bất quy tắc, phân từ II là gefahren và đi với sein."
    },
    {
     "q": "Hast du schon ___?",
     "hint": "(essen, Perfekt)",
     "answers": [
      "gegessen"
     ],
     "vi": "Bạn đã ăn chưa?",
     "explain": "Phân từ II của essen là gegessen (có thêm g ở giữa)."
    },
    {
     "q": "Er ist heute um 7 Uhr ___.",
     "hint": "(aufstehen, Perfekt)",
     "answers": [
      "aufgestanden"
     ],
     "vi": "Hôm nay anh ấy đã thức dậy lúc 7 giờ.",
     "explain": "Động từ tách được: ge nằm giữa tiền tố auf và gốc động từ: auf-ge-standen."
    },
    {
     "q": "Sie hat ihre Mutter ___.",
     "hint": "(anrufen, Perfekt)",
     "answers": [
      "angerufen"
     ],
     "vi": "Cô ấy đã gọi điện cho mẹ.",
     "explain": "anrufen là động từ tách được, nên ge đứng sau an: an-ge-rufen."
    },
    {
     "q": "Ich habe drei Jahre Deutsch ___.",
     "hint": "(lernen, Perfekt)",
     "answers": [
      "gelernt"
     ],
     "vi": "Tôi đã học tiếng Đức ba năm.",
     "explain": "lernen là động từ có quy tắc: ge + lern + t."
    },
    {
     "q": "Was hast du im Supermarkt ___?",
     "hint": "(kaufen, Perfekt)",
     "answers": [
      "gekauft"
     ],
     "vi": "Bạn đã mua gì ở siêu thị?",
     "explain": "kaufen là động từ có quy tắc: ge + kauf + t."
    },
    {
     "q": "Das Kind ist schnell ___.",
     "hint": "(einschlafen, Perfekt)",
     "answers": [
      "eingeschlafen"
     ],
     "vi": "Đứa trẻ đã ngủ thiếp đi nhanh chóng.",
     "explain": "einschlafen tách được và bất quy tắc: ein-ge-schlafen."
    },
    {
     "q": "Ich habe das Wort nicht ___.",
     "hint": "(verstehen, Perfekt)",
     "answers": [
      "verstanden"
     ],
     "vi": "Tôi đã không hiểu từ đó.",
     "explain": "Động từ có tiền tố không tách ver- thì không thêm ge-: verstanden."
    },
    {
     "q": "Wir haben im Restaurant mit Karte ___.",
     "hint": "(bezahlen, Perfekt)",
     "answers": [
      "bezahlt"
     ],
     "vi": "Chúng tôi đã thanh toán bằng thẻ ở nhà hàng.",
     "explain": "Tiền tố be- không tách nên không thêm ge-: bezahlt."
    },
    {
     "q": "Ich ___ gestern zu Hause geblieben.",
     "hint": "(haben oder sein? ich-Form)",
     "answers": [
      "bin"
     ],
     "vi": "Hôm qua tôi đã ở nhà.",
     "explain": "bleiben luôn đi với sein trong Perfekt, ngôi ich là bin."
    },
    {
     "q": "Meine Eltern ___ mir ein Fahrrad geschenkt.",
     "hint": "(haben oder sein? Plural)",
     "answers": [
      "haben"
     ],
     "vi": "Bố mẹ tôi đã tặng tôi một chiếc xe đạp.",
     "explain": "schenken có tân ngữ và không chỉ di chuyển nên dùng haben; chủ ngữ số nhiều là haben."
    }
   ]
  },
  {
   "title": "Cách 3 – tặng cách (Dativ)",
   "intro": "Dativ dùng cho tân ngữ gián tiếp (người nhận: gebe wem?), sau các giới từ mit, nach, bei, seit, von, zu, aus và sau các động từ như helfen, gefallen, gehören, danken.\nder → dem | das → dem | die → der | Plural → den (+n)\nich → mir | du → dir | er/es → ihm | sie → ihr | wir → uns | ihr → euch | Sie → Ihnen",
   "questions": [
    {
     "q": "Ich gebe ___ Mann das Buch.",
     "hint": "(der Mann, Dativ)",
     "answers": [
      "dem"
     ],
     "vi": "Tôi đưa quyển sách cho người đàn ông.",
     "explain": "Người nhận ở Dativ, der đổi thành dem."
    },
    {
     "q": "Sie hilft ___ Frau.",
     "hint": "(die Frau, Dativ)",
     "answers": [
      "der"
     ],
     "vi": "Cô ấy giúp người phụ nữ.",
     "explain": "helfen luôn đi với Dativ, die đổi thành der."
    },
    {
     "q": "Wir fahren mit ___ Bus.",
     "hint": "(der Bus, Dativ)",
     "answers": [
      "dem"
     ],
     "vi": "Chúng tôi đi bằng xe buýt.",
     "explain": "Sau mit luôn dùng Dativ, der đổi thành dem."
    },
    {
     "q": "Er wohnt noch bei ___ Eltern.",
     "hint": "(seine Eltern, Dativ Plural)",
     "answers": [
      "seinen"
     ],
     "vi": "Anh ấy vẫn sống với bố mẹ.",
     "explain": "Sau bei dùng Dativ, số nhiều thêm -en: seinen."
    },
    {
     "q": "Kannst du ___ bitte helfen?",
     "hint": "(ich, Dativ)",
     "answers": [
      "mir"
     ],
     "vi": "Bạn có thể giúp tôi được không?",
     "explain": "helfen cần Dativ, ich ở Dativ là mir."
    },
    {
     "q": "Das Kleid gefällt ___ sehr.",
     "hint": "(sie – Singular, Dativ)",
     "answers": [
      "ihr"
     ],
     "vi": "Cô ấy rất thích chiếc váy đó.",
     "explain": "gefallen đi với Dativ, sie (số ít) ở Dativ là ihr."
    },
    {
     "q": "Ich schreibe ___ Freund eine E-Mail.",
     "hint": "(mein Freund, Dativ)",
     "answers": [
      "meinem"
     ],
     "vi": "Tôi viết một email cho bạn tôi.",
     "explain": "Người nhận ở Dativ, mein + giống đực thành meinem."
    },
    {
     "q": "Nach ___ Unterricht gehe ich nach Hause.",
     "hint": "(der Unterricht, Dativ)",
     "answers": [
      "dem"
     ],
     "vi": "Sau giờ học tôi đi về nhà.",
     "explain": "Sau nach luôn dùng Dativ, der đổi thành dem."
    },
    {
     "q": "Wie geht es ___?",
     "hint": "(du, Dativ)",
     "answers": [
      "dir"
     ],
     "vi": "Bạn có khỏe không?",
     "explain": "Cấu trúc es geht + Dativ, du ở Dativ là dir."
    },
    {
     "q": "Ich komme aus ___ Schweiz.",
     "hint": "(die Schweiz, Dativ)",
     "answers": [
      "der"
     ],
     "vi": "Tôi đến từ Thụy Sĩ.",
     "explain": "Sau aus luôn dùng Dativ, die đổi thành der."
    },
    {
     "q": "Er schenkt ___ Kindern Schokolade.",
     "hint": "(die Kinder, Dativ Plural)",
     "answers": [
      "den"
     ],
     "vi": "Anh ấy tặng sô-cô-la cho bọn trẻ.",
     "explain": "Người nhận số nhiều ở Dativ dùng den, danh từ thêm -n: Kindern."
    },
    {
     "q": "Das Auto gehört ___.",
     "hint": "(wir, Dativ)",
     "answers": [
      "uns"
     ],
     "vi": "Chiếc xe hơi là của chúng tôi.",
     "explain": "gehören đi với Dativ, wir ở Dativ là uns."
    }
   ]
  },
  {
   "title": "Giới từ hai cách (Wechselpräpositionen)",
   "intro": "Các giới từ in, an, auf, über, unter, vor, hinter, neben, zwischen có thể đi với Akkusativ hoặc Dativ. Hỏi wohin? (đi đâu, có chuyển động/thay đổi vị trí) → Akkusativ. Hỏi wo? (ở đâu, vị trí cố định) → Dativ.\nwohin: den / das / die\nwo: dem / dem / der\nin + das = ins | in + dem = im | an + das = ans | an + dem = am",
   "questions": [
    {
     "q": "Das Buch liegt auf ___ Tisch.",
     "hint": "(der Tisch, wo?)",
     "answers": [
      "dem"
     ],
     "vi": "Quyển sách nằm trên bàn.",
     "explain": "Hỏi wo? (vị trí) nên dùng Dativ: dem."
    },
    {
     "q": "Ich lege das Buch auf ___ Tisch.",
     "hint": "(der Tisch, wohin?)",
     "answers": [
      "den"
     ],
     "vi": "Tôi đặt quyển sách lên bàn.",
     "explain": "Hỏi wohin? (chuyển động) nên dùng Akkusativ: den."
    },
    {
     "q": "Wir gehen heute Abend ___ Kino.",
     "hint": "(in + das Kino, wohin?)",
     "answers": [
      "ins",
      "in das"
     ],
     "vi": "Tối nay chúng tôi đi xem phim.",
     "explain": "Hướng đến nên dùng Akkusativ: in das, thường viết gọn là ins."
    },
    {
     "q": "Die Katze schläft unter ___ Bett.",
     "hint": "(das Bett, wo?)",
     "answers": [
      "dem"
     ],
     "vi": "Con mèo ngủ dưới gầm giường.",
     "explain": "Hỏi wo? nên dùng Dativ, das đổi thành dem."
    },
    {
     "q": "Ich hänge das Bild an ___ Wand.",
     "hint": "(die Wand, wohin?)",
     "answers": [
      "die"
     ],
     "vi": "Tôi treo bức tranh lên tường.",
     "explain": "Hỏi wohin? nên dùng Akkusativ, die giữ nguyên."
    },
    {
     "q": "Das Bild hängt an ___ Wand.",
     "hint": "(die Wand, wo?)",
     "answers": [
      "der"
     ],
     "vi": "Bức tranh treo trên tường.",
     "explain": "Hỏi wo? nên dùng Dativ, die đổi thành der."
    },
    {
     "q": "Er stellt die Flasche in ___ Kühlschrank.",
     "hint": "(der Kühlschrank, wohin?)",
     "answers": [
      "den"
     ],
     "vi": "Anh ấy đặt chai vào tủ lạnh.",
     "explain": "stellen chỉ chuyển động (wohin?) nên dùng Akkusativ: den."
    },
    {
     "q": "Die Milch steht ___ Kühlschrank.",
     "hint": "(in + der Kühlschrank, wo?)",
     "answers": [
      "im",
      "in dem"
     ],
     "vi": "Sữa ở trong tủ lạnh.",
     "explain": "Vị trí (wo?) dùng Dativ: in dem, thường viết gọn là im."
    },
    {
     "q": "Das Auto steht vor ___ Haus.",
     "hint": "(das Haus, wo?)",
     "answers": [
      "dem"
     ],
     "vi": "Chiếc xe hơi đỗ trước ngôi nhà.",
     "explain": "Hỏi wo? nên dùng Dativ, das đổi thành dem."
    },
    {
     "q": "Ich setze mich neben ___ Fenster.",
     "hint": "(das Fenster, wohin?)",
     "answers": [
      "das"
     ],
     "vi": "Tôi ngồi xuống cạnh cửa sổ.",
     "explain": "sich setzen chỉ chuyển động (wohin?) nên dùng Akkusativ: das."
    },
    {
     "q": "Die Lampe hängt über ___ Sofa.",
     "hint": "(das Sofa, wo?)",
     "answers": [
      "dem"
     ],
     "vi": "Cái đèn treo phía trên ghế sofa.",
     "explain": "Hỏi wo? nên dùng Dativ, das đổi thành dem."
    },
    {
     "q": "Im Sommer fahren wir ___ Meer.",
     "hint": "(an + das Meer, wohin?)",
     "answers": [
      "ans",
      "an das"
     ],
     "vi": "Mùa hè chúng tôi đi biển.",
     "explain": "Hướng đến (wohin?) dùng Akkusativ: an das, viết gọn là ans."
    }
   ]
  },
  {
   "title": "So sánh hơn và so sánh nhất (Komparativ und Superlativ)",
   "intro": "So sánh hơn: tính từ + -er, đi với als (hơn). So sánh bằng: so + tính từ + wie. So sánh nhất: am + tính từ + -sten, hoặc der/die/das + tính từ + -ste trước danh từ. Nhiều tính từ ngắn thêm Umlaut: alt → älter, groß → größer.\ngut → besser → am besten\nviel → mehr → am meisten\ngern → lieber → am liebsten",
   "questions": [
    {
     "q": "Mein Bruder ist ___ als ich.",
     "hint": "(groß, Komparativ)",
     "answers": [
      "größer"
     ],
     "vi": "Anh trai tôi cao hơn tôi.",
     "explain": "groß ở so sánh hơn thêm Umlaut và -er: größer."
    },
    {
     "q": "Er arbeitet ___ als ich.",
     "hint": "(viel, Komparativ)",
     "answers": [
      "mehr"
     ],
     "vi": "Anh ấy làm việc nhiều hơn tôi.",
     "explain": "viel là bất quy tắc, so sánh hơn là mehr."
    },
    {
     "q": "Im Sommer ist es ___ als im Winter.",
     "hint": "(warm, Komparativ)",
     "answers": [
      "wärmer"
     ],
     "vi": "Mùa hè trời ấm hơn mùa đông.",
     "explain": "warm ở so sánh hơn thêm Umlaut: wärmer."
    },
    {
     "q": "Ich trinke ___ Tee als Kaffee.",
     "hint": "(gern, Komparativ)",
     "answers": [
      "lieber"
     ],
     "vi": "Tôi thích uống trà hơn cà phê.",
     "explain": "gern là bất quy tắc, so sánh hơn là lieber."
    },
    {
     "q": "Berlin ist die ___ Stadt in Deutschland.",
     "hint": "(groß, Superlativ)",
     "answers": [
      "größte"
     ],
     "vi": "Berlin là thành phố lớn nhất nước Đức.",
     "explain": "So sánh nhất trước danh từ: die + größte."
    },
    {
     "q": "Dieses Restaurant ist am ___.",
     "hint": "(gut, Superlativ)",
     "answers": [
      "besten"
     ],
     "vi": "Nhà hàng này là ngon nhất.",
     "explain": "gut là bất quy tắc: am besten."
    },
    {
     "q": "Anna ist so alt ___ Maria.",
     "hint": "(Vergleichswort: gleich alt)",
     "answers": [
      "wie"
     ],
     "vi": "Anna bằng tuổi Maria.",
     "explain": "So sánh bằng dùng so ... wie."
    },
    {
     "q": "Mein Handy ist teurer ___ dein Handy.",
     "hint": "(Vergleichswort: nicht gleich)",
     "answers": [
      "als"
     ],
     "vi": "Điện thoại của tôi đắt hơn điện thoại của bạn.",
     "explain": "Sau so sánh hơn dùng als."
    },
    {
     "q": "Im Dezember sind die Tage am ___.",
     "hint": "(kurz, Superlativ)",
     "answers": [
      "kürzesten"
     ],
     "vi": "Vào tháng Mười Hai ngày ngắn nhất.",
     "explain": "kurz có Umlaut và thêm -esten vì kết thúc bằng -z: am kürzesten."
    },
    {
     "q": "Wer läuft am ___?",
     "hint": "(schnell, Superlativ)",
     "answers": [
      "schnellsten"
     ],
     "vi": "Ai chạy nhanh nhất?",
     "explain": "So sánh nhất với am: am schnellsten."
    },
    {
     "q": "Heute ist es ___ als gestern.",
     "hint": "(kalt, Komparativ)",
     "answers": [
      "kälter"
     ],
     "vi": "Hôm nay trời lạnh hơn hôm qua.",
     "explain": "kalt ở so sánh hơn thêm Umlaut: kälter."
    },
    {
     "q": "Das ist der ___ Film des Jahres.",
     "hint": "(gut, Superlativ)",
     "answers": [
      "beste"
     ],
     "vi": "Đây là bộ phim hay nhất của năm.",
     "explain": "So sánh nhất của gut trước danh từ: der beste."
    }
   ]
  },
  {
   "title": "Mệnh đề phụ với weil, dass, wenn (Nebensätze)",
   "intro": "weil = vì (nêu lý do), dass = rằng (nêu nội dung), wenn = nếu/khi (nêu điều kiện). Trong mệnh đề phụ, động từ đã chia đứng ở cuối câu. Nếu mệnh đề phụ đứng đầu, động từ của mệnh đề chính đứng ngay sau dấu phẩy.\nIch bleibe zu Hause, weil ich krank bin.\nWenn ich Zeit habe, gehe ich ins Kino.",
   "questions": [
    {
     "q": "Ich bleibe heute zu Hause, ___ ich krank bin.",
     "hint": "(Konjunktion: Grund)",
     "answers": [
      "weil"
     ],
     "vi": "Hôm nay tôi ở nhà vì tôi bị ốm.",
     "explain": "Nêu lý do nên dùng weil."
    },
    {
     "q": "Ich glaube, ___ er heute kommt.",
     "hint": "(Konjunktion: Inhalt)",
     "answers": [
      "dass"
     ],
     "vi": "Tôi nghĩ rằng hôm nay anh ấy đến.",
     "explain": "Sau glauben nêu nội dung suy nghĩ nên dùng dass."
    },
    {
     "q": "___ es morgen regnet, nehme ich einen Regenschirm mit.",
     "hint": "(Konjunktion: Bedingung)",
     "answers": [
      "Wenn",
      "wenn"
     ],
     "vi": "Nếu ngày mai trời mưa, tôi sẽ mang theo ô.",
     "explain": "Nêu điều kiện nên dùng wenn."
    },
    {
     "q": "Ich lerne Deutsch, weil ich in Deutschland arbeiten ___.",
     "hint": "(möchten, ich-Form)",
     "answers": [
      "möchte"
     ],
     "vi": "Tôi học tiếng Đức vì tôi muốn làm việc ở Đức.",
     "explain": "Trong mệnh đề weil, động từ chia (möchte) đứng cuối câu."
    },
    {
     "q": "Er sagt, dass er keine Zeit ___.",
     "hint": "(haben, er-Form)",
     "answers": [
      "hat"
     ],
     "vi": "Anh ấy nói rằng anh ấy không có thời gian.",
     "explain": "Trong mệnh đề dass, động từ chia đứng cuối: hat."
    },
    {
     "q": "Wenn ich Zeit habe, ___ ich ins Kino.",
     "hint": "(gehen, ich-Form)",
     "answers": [
      "gehe"
     ],
     "vi": "Khi có thời gian, tôi đi xem phim.",
     "explain": "Mệnh đề phụ đứng đầu nên động từ chính gehe đứng ngay sau dấu phẩy."
    },
    {
     "q": "Sie ist müde, weil sie schlecht geschlafen ___.",
     "hint": "(haben, sie-Form)",
     "answers": [
      "hat"
     ],
     "vi": "Cô ấy mệt vì cô ấy ngủ không ngon.",
     "explain": "Trong mệnh đề phụ, trợ động từ hat đứng sau phân từ ở cuối câu."
    },
    {
     "q": "Ich hoffe, ___ du bald wieder gesund bist.",
     "hint": "(Konjunktion: Inhalt)",
     "answers": [
      "dass"
     ],
     "vi": "Tôi hy vọng rằng bạn sớm khỏe lại.",
     "explain": "Sau hoffen nêu nội dung hy vọng nên dùng dass."
    },
    {
     "q": "Wir gehen morgen spazieren, ___ das Wetter schön ist.",
     "hint": "(Konjunktion: Bedingung)",
     "answers": [
      "wenn"
     ],
     "vi": "Ngày mai chúng tôi đi dạo nếu thời tiết đẹp.",
     "explain": "Nêu điều kiện nên dùng wenn."
    },
    {
     "q": "Weißt du, dass Tom morgen Geburtstag ___?",
     "hint": "(haben, er-Form)",
     "answers": [
      "hat"
     ],
     "vi": "Bạn có biết rằng ngày mai là sinh nhật Tom không?",
     "explain": "Trong mệnh đề dass, động từ chia hat đứng cuối câu."
    },
    {
     "q": "Ich komme nicht zur Party, weil ich arbeiten ___.",
     "hint": "(müssen, ich-Form)",
     "answers": [
      "muss"
     ],
     "vi": "Tôi không đến bữa tiệc vì tôi phải làm việc.",
     "explain": "Động từ khuyết thiếu muss đứng cuối mệnh đề weil."
    },
    {
     "q": "Er kommt zu spät, ___ der Bus Verspätung hat.",
     "hint": "(Konjunktion: Grund)",
     "answers": [
      "weil"
     ],
     "vi": "Anh ấy đến muộn vì xe buýt bị trễ.",
     "explain": "Nêu lý do nên dùng weil."
    }
   ]
  },
  {
   "title": "Động từ phản thân (reflexive Verben)",
   "intro": "Động từ phản thân đi với đại từ phản thân chỉ chính chủ ngữ, ví dụ sich waschen, sich freuen, sich treffen. Khi câu đã có một tân ngữ khác (sich die Zähne putzen), đại từ ở dạng Dativ.\nAkkusativ: mich, dich, sich, uns, euch, sich\nDativ: mir, dir, sich, uns, euch, sich",
   "questions": [
    {
     "q": "Ich wasche ___ jeden Morgen.",
     "hint": "(sich waschen, ich)",
     "answers": [
      "mich"
     ],
     "vi": "Tôi tắm rửa mỗi sáng.",
     "explain": "Chủ ngữ ich, không có tân ngữ khác nên dùng Akkusativ: mich."
    },
    {
     "q": "Freust du ___ auf den Urlaub?",
     "hint": "(sich freuen, du)",
     "answers": [
      "dich"
     ],
     "vi": "Bạn có mong chờ kỳ nghỉ không?",
     "explain": "Chủ ngữ du nên đại từ phản thân là dich."
    },
    {
     "q": "Mein Vater rasiert ___ jeden Tag.",
     "hint": "(sich rasieren, er)",
     "answers": [
      "sich"
     ],
     "vi": "Bố tôi cạo râu mỗi ngày.",
     "explain": "Ngôi thứ ba luôn dùng sich."
    },
    {
     "q": "Wir treffen ___ um 8 Uhr am Bahnhof.",
     "hint": "(sich treffen, wir)",
     "answers": [
      "uns"
     ],
     "vi": "Chúng ta gặp nhau lúc 8 giờ ở nhà ga.",
     "explain": "Chủ ngữ wir nên đại từ phản thân là uns."
    },
    {
     "q": "Interessiert ihr ___ für Musik?",
     "hint": "(sich interessieren, ihr)",
     "answers": [
      "euch"
     ],
     "vi": "Các bạn có quan tâm đến âm nhạc không?",
     "explain": "Chủ ngữ ihr nên đại từ phản thân là euch."
    },
    {
     "q": "Die Kinder ziehen ___ schnell an.",
     "hint": "(sich anziehen, sie – Plural)",
     "answers": [
      "sich"
     ],
     "vi": "Bọn trẻ mặc quần áo nhanh chóng.",
     "explain": "Ngôi thứ ba số nhiều cũng dùng sich."
    },
    {
     "q": "Ich putze ___ die Zähne.",
     "hint": "(sich die Zähne putzen, ich – Dativ)",
     "answers": [
      "mir"
     ],
     "vi": "Tôi đánh răng.",
     "explain": "Đã có tân ngữ die Zähne nên đại từ ở Dativ: mir."
    },
    {
     "q": "Kannst du ___ das vorstellen?",
     "hint": "(sich etwas vorstellen, du – Dativ)",
     "answers": [
      "dir"
     ],
     "vi": "Bạn có thể tưởng tượng điều đó không?",
     "explain": "Đã có tân ngữ das nên đại từ ở Dativ: dir."
    },
    {
     "q": "Ich habe ___ erkältet.",
     "hint": "(sich erkälten, ich)",
     "answers": [
      "mich"
     ],
     "vi": "Tôi bị cảm lạnh rồi.",
     "explain": "Chủ ngữ ich, không có tân ngữ khác nên dùng mich."
    },
    {
     "q": "Ich freue mich ___ das Wochenende.",
     "hint": "(Präposition: etwas kommt noch)",
     "answers": [
      "auf"
     ],
     "vi": "Tôi mong chờ đến cuối tuần.",
     "explain": "sich freuen auf dùng cho điều sắp đến trong tương lai."
    },
    {
     "q": "Sie kämmt ___ die Haare.",
     "hint": "(sich die Haare kämmen, sie – Singular)",
     "answers": [
      "sich"
     ],
     "vi": "Cô ấy chải tóc.",
     "explain": "Ngôi thứ ba dùng sich cả ở Dativ lẫn Akkusativ."
    },
    {
     "q": "Wir müssen ___ beeilen.",
     "hint": "(sich beeilen, wir)",
     "answers": [
      "uns"
     ],
     "vi": "Chúng ta phải nhanh lên.",
     "explain": "Chủ ngữ wir nên đại từ phản thân là uns."
    }
   ]
  }
 ],
 "B1": [
  {
   "title": "Thì quá khứ đơn (Präteritum)",
   "intro": "Präteritum chủ yếu dùng trong văn viết và kể chuyện; với sein, haben và động từ khuyết thiếu thì dùng cả trong văn nói.\nĐộng từ có quy tắc: gốc + -te (ich spielte, wir spielten).\nĐộng từ bất quy tắc đổi nguyên âm: fahren → fuhr, schreiben → schrieb.\nNgôi ich và er/sie/es giống nhau và không có đuôi: ich war, er war.",
   "questions": [
    {
     "q": "Gestern ___ ich mit dem Zug nach Berlin.",
     "hint": "(fahren, Präteritum, ich)",
     "answers": [
      "fuhr"
     ],
     "vi": "Hôm qua tôi đi tàu đến Berlin.",
     "explain": "fahren là động từ bất quy tắc: fahren → fuhr."
    },
    {
     "q": "Als Kind ___ sie in München.",
     "hint": "(wohnen, Präteritum, sie Sg.)",
     "answers": [
      "wohnte"
     ],
     "vi": "Hồi nhỏ cô ấy sống ở München.",
     "explain": "Động từ có quy tắc: gốc wohn- + -te."
    },
    {
     "q": "Wir ___ keine Zeit.",
     "hint": "(haben, Präteritum, wir)",
     "answers": [
      "hatten"
     ],
     "vi": "Chúng tôi đã không có thời gian.",
     "explain": "haben → hatte, ngôi wir thêm -n: hatten."
    },
    {
     "q": "Er ___ sehr müde.",
     "hint": "(sein, Präteritum, er)",
     "answers": [
      "war"
     ],
     "vi": "Anh ấy đã rất mệt.",
     "explain": "sein ở Präteritum ngôi er là war."
    },
    {
     "q": "Ich ___ meinen Schlüssel nicht finden.",
     "hint": "(können, Präteritum, ich)",
     "answers": [
      "konnte"
     ],
     "vi": "Tôi đã không thể tìm thấy chìa khóa của mình.",
     "explain": "Động từ khuyết thiếu bỏ Umlaut: können → konnte."
    },
    {
     "q": "Die Gäste ___ den ganzen Abend.",
     "hint": "(tanzen, Präteritum, sie Pl.)",
     "answers": [
      "tanzten"
     ],
     "vi": "Các vị khách đã nhảy suốt cả buổi tối.",
     "explain": "Ngôi số nhiều: gốc tanz- + -ten."
    },
    {
     "q": "Der Lehrer ___ uns eine Geschichte.",
     "hint": "(erzählen, Präteritum, er)",
     "answers": [
      "erzählte"
     ],
     "vi": "Thầy giáo đã kể cho chúng tôi một câu chuyện.",
     "explain": "Động từ có quy tắc: erzähl- + -te."
    },
    {
     "q": "Plötzlich ___ das Telefon.",
     "hint": "(klingeln, Präteritum, es)",
     "answers": [
      "klingelte"
     ],
     "vi": "Đột nhiên điện thoại reo.",
     "explain": "Động từ có quy tắc: klingel- + -te."
    },
    {
     "q": "Du ___ früh nach Hause gehen.",
     "hint": "(müssen, Präteritum, du)",
     "answers": [
      "musstest"
     ],
     "vi": "Bạn đã phải về nhà sớm.",
     "explain": "müssen → musste, ngôi du thêm -st: musstest."
    },
    {
     "q": "Wir ___ uns im Park.",
     "hint": "(treffen, Präteritum, wir)",
     "answers": [
      "trafen"
     ],
     "vi": "Chúng tôi đã gặp nhau ở công viên.",
     "explain": "treffen là động từ bất quy tắc: treffen → traf, wir trafen."
    },
    {
     "q": "Sie ___ einen langen Brief.",
     "hint": "(schreiben, Präteritum, sie Sg.)",
     "answers": [
      "schrieb"
     ],
     "vi": "Cô ấy đã viết một lá thư dài.",
     "explain": "schreiben là động từ bất quy tắc: schreiben → schrieb."
    },
    {
     "q": "Ich ___ nicht, dass du krank warst.",
     "hint": "(wissen, Präteritum, ich)",
     "answers": [
      "wusste"
     ],
     "vi": "Tôi đã không biết là bạn bị ốm.",
     "explain": "wissen là động từ hỗn hợp: wissen → wusste."
    }
   ]
  },
  {
   "title": "Mệnh đề quan hệ (Relativsätze)",
   "intro": "Đại từ quan hệ lấy giống và số theo danh từ đứng trước, nhưng lấy cách theo vai trò trong mệnh đề quan hệ. Động từ đứng cuối mệnh đề.\nNom: der – die – das – die (Pl.)\nAkk: den – die – das – die\nDat: dem – der – dem – denen\nGen: dessen – deren – dessen – deren",
   "questions": [
    {
     "q": "Das ist der Mann, ___ neben mir wohnt.",
     "hint": "(der Mann, Nominativ)",
     "answers": [
      "der"
     ],
     "vi": "Đó là người đàn ông sống cạnh nhà tôi.",
     "explain": "Người đàn ông là chủ ngữ trong mệnh đề quan hệ → Nominativ giống đực: der."
    },
    {
     "q": "Die Frau, ___ ich gestern getroffen habe, ist Ärztin.",
     "hint": "(die Frau, Akkusativ)",
     "answers": [
      "die"
     ],
     "vi": "Người phụ nữ mà hôm qua tôi gặp là bác sĩ.",
     "explain": "treffen cần Akkusativ, giống cái → die."
    },
    {
     "q": "Das Kind, ___ ich geholfen habe, ist sehr nett.",
     "hint": "(das Kind, Dativ)",
     "answers": [
      "dem"
     ],
     "vi": "Đứa trẻ mà tôi đã giúp rất dễ thương.",
     "explain": "helfen đi với Dativ, giống trung → dem."
    },
    {
     "q": "Der Freund, ___ ich ein Buch geschenkt habe, hat heute Geburtstag.",
     "hint": "(der Freund, Dativ)",
     "answers": [
      "dem"
     ],
     "vi": "Người bạn mà tôi đã tặng một cuốn sách hôm nay có sinh nhật.",
     "explain": "Người nhận quà ở Dativ, giống đực → dem."
    },
    {
     "q": "Die Leute, ___ hier arbeiten, sind freundlich.",
     "hint": "(die Leute, Nominativ Plural)",
     "answers": [
      "die"
     ],
     "vi": "Những người làm việc ở đây rất thân thiện.",
     "explain": "Chủ ngữ số nhiều → Nominativ Plural: die."
    },
    {
     "q": "Das ist das Auto, ___ ich kaufen möchte.",
     "hint": "(das Auto, Akkusativ)",
     "answers": [
      "das"
     ],
     "vi": "Đó là chiếc ô tô mà tôi muốn mua.",
     "explain": "kaufen cần Akkusativ, giống trung → das."
    },
    {
     "q": "Der Film, ___ wir gesehen haben, war spannend.",
     "hint": "(der Film, Akkusativ)",
     "answers": [
      "den"
     ],
     "vi": "Bộ phim mà chúng tôi đã xem rất hấp dẫn.",
     "explain": "sehen cần Akkusativ, giống đực → den."
    },
    {
     "q": "Die Kollegin, mit ___ ich arbeite, kommt aus Wien.",
     "hint": "(die Kollegin, mit + Dativ)",
     "answers": [
      "der"
     ],
     "vi": "Cô đồng nghiệp mà tôi làm việc cùng đến từ Viên.",
     "explain": "mit đi với Dativ, giống cái → der."
    },
    {
     "q": "Die Kinder, ___ wir die Geschenke gegeben haben, waren glücklich.",
     "hint": "(die Kinder, Dativ Plural)",
     "answers": [
      "denen"
     ],
     "vi": "Những đứa trẻ mà chúng tôi đã tặng quà rất vui.",
     "explain": "Dativ số nhiều của đại từ quan hệ là denen."
    },
    {
     "q": "Das ist die Stadt, in ___ ich geboren bin.",
     "hint": "(die Stadt, in + Dativ)",
     "answers": [
      "der"
     ],
     "vi": "Đó là thành phố nơi tôi được sinh ra.",
     "explain": "in chỉ vị trí đi với Dativ, giống cái → der."
    },
    {
     "q": "Der Mann, ___ Auto kaputt ist, wartet auf den Bus.",
     "hint": "(der Mann, Genitiv)",
     "answers": [
      "dessen"
     ],
     "vi": "Người đàn ông có chiếc ô tô bị hỏng đang chờ xe buýt.",
     "explain": "Chỉ sự sở hữu của danh từ giống đực → Genitiv: dessen."
    },
    {
     "q": "Die Firma, für ___ ich arbeite, ist sehr groß.",
     "hint": "(die Firma, für + Akkusativ)",
     "answers": [
      "die"
     ],
     "vi": "Công ty mà tôi làm việc cho rất lớn.",
     "explain": "für đi với Akkusativ, giống cái → die."
    }
   ]
  },
  {
   "title": "Câu bị động (Passiv Präsens und Präteritum)",
   "intro": "Câu bị động nhấn mạnh hành động, không nhấn mạnh người làm.\nCấu trúc: werden (chia) + Partizip II ở cuối câu.\nPräsens: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden\nPräteritum: ich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden\nNgười thực hiện hành động được nêu bằng von + Dativ.",
   "questions": [
    {
     "q": "Das Haus ___ renoviert.",
     "hint": "(werden, Passiv Präsens)",
     "answers": [
      "wird"
     ],
     "vi": "Ngôi nhà đang được sửa sang.",
     "explain": "Chủ ngữ số ít ngôi thứ ba → werden chia thành wird."
    },
    {
     "q": "Die Briefe ___ gestern geschickt.",
     "hint": "(werden, Passiv Präteritum)",
     "answers": [
      "wurden"
     ],
     "vi": "Những lá thư đã được gửi đi hôm qua.",
     "explain": "Chủ ngữ số nhiều, quá khứ → wurden."
    },
    {
     "q": "Hier ___ Deutsch gesprochen.",
     "hint": "(werden, Passiv Präsens)",
     "answers": [
      "wird"
     ],
     "vi": "Ở đây người ta nói tiếng Đức.",
     "explain": "Câu bị động không có chủ ngữ cụ thể dùng ngôi thứ ba số ít: wird."
    },
    {
     "q": "Das Auto wird jeden Samstag ___.",
     "hint": "(waschen, Partizip II)",
     "answers": [
      "gewaschen"
     ],
     "vi": "Chiếc ô tô được rửa vào mỗi thứ Bảy.",
     "explain": "Partizip II bất quy tắc của waschen là gewaschen."
    },
    {
     "q": "Die Stadt wurde im Jahr 1200 ___.",
     "hint": "(gründen, Partizip II)",
     "answers": [
      "gegründet"
     ],
     "vi": "Thành phố được thành lập vào năm 1200.",
     "explain": "gründen có quy tắc: ge- + gründ + -et."
    },
    {
     "q": "Der Patient ___ sofort operiert.",
     "hint": "(werden, Passiv Präteritum)",
     "answers": [
      "wurde"
     ],
     "vi": "Bệnh nhân đã được phẫu thuật ngay lập tức.",
     "explain": "Chủ ngữ số ít, quá khứ → wurde."
    },
    {
     "q": "Die Fenster werden jeden Monat ___.",
     "hint": "(putzen, Partizip II)",
     "answers": [
      "geputzt"
     ],
     "vi": "Các cửa sổ được lau chùi mỗi tháng.",
     "explain": "putzen có quy tắc: ge- + putz + -t."
    },
    {
     "q": "In Österreich ___ viel Kaffee getrunken.",
     "hint": "(werden, Passiv Präsens)",
     "answers": [
      "wird"
     ],
     "vi": "Ở Áo người ta uống nhiều cà phê.",
     "explain": "Kaffee là chủ ngữ số ít → wird."
    },
    {
     "q": "Das Essen wurde von meiner Mutter ___.",
     "hint": "(kochen, Partizip II)",
     "answers": [
      "gekocht"
     ],
     "vi": "Món ăn đã được mẹ tôi nấu.",
     "explain": "kochen có quy tắc: ge- + koch + -t."
    },
    {
     "q": "Die Kinder ___ von ihren Eltern abgeholt.",
     "hint": "(werden, Passiv Präsens)",
     "answers": [
      "werden"
     ],
     "vi": "Bọn trẻ được bố mẹ đến đón.",
     "explain": "Chủ ngữ số nhiều ở hiện tại → werden."
    },
    {
     "q": "Das Paket wurde gestern ___.",
     "hint": "(liefern, Partizip II)",
     "answers": [
      "geliefert"
     ],
     "vi": "Bưu kiện đã được giao hôm qua.",
     "explain": "liefern có quy tắc: ge- + liefer + -t."
    },
    {
     "q": "Ich ___ zum Vorstellungsgespräch eingeladen.",
     "hint": "(werden, Passiv Präteritum, ich)",
     "answers": [
      "wurde"
     ],
     "vi": "Tôi đã được mời đến buổi phỏng vấn xin việc.",
     "explain": "Ngôi ich ở Präteritum của werden là wurde."
    }
   ]
  },
  {
   "title": "Thức giả định II (Konjunktiv II)",
   "intro": "Konjunktiv II dùng cho điều ước, giả định không có thật, lời khuyên và lời đề nghị lịch sự.\nsein → wäre, haben → hätte, werden → würde\nkönnen → könnte, sollen → sollte, müssen → müsste\nVới hầu hết động từ khác dùng würde + Infinitiv: Ich würde gern reisen.",
   "questions": [
    {
     "q": "Wenn ich Zeit ___, würde ich dich besuchen.",
     "hint": "(haben, Konjunktiv II)",
     "answers": [
      "hätte"
     ],
     "vi": "Nếu tôi có thời gian, tôi sẽ đến thăm bạn.",
     "explain": "Konjunktiv II của haben ngôi ich là hätte."
    },
    {
     "q": "Wenn ich reich ___, würde ich um die Welt reisen.",
     "hint": "(sein, Konjunktiv II)",
     "answers": [
      "wäre"
     ],
     "vi": "Nếu tôi giàu, tôi sẽ đi du lịch vòng quanh thế giới.",
     "explain": "Konjunktiv II của sein ngôi ich là wäre."
    },
    {
     "q": "___ Sie mir bitte helfen?",
     "hint": "(können, Konjunktiv II, höfliche Bitte)",
     "answers": [
      "Könnten"
     ],
     "vi": "Ông/bà có thể giúp tôi được không ạ?",
     "explain": "Lời nhờ lịch sự với Sie dùng könnten."
    },
    {
     "q": "Ich ___ gern einen Kaffee.",
     "hint": "(haben, Konjunktiv II, höflicher Wunsch)",
     "answers": [
      "hätte"
     ],
     "vi": "Tôi muốn một ly cà phê.",
     "explain": "„Ich hätte gern …“ là cách gọi món lịch sự."
    },
    {
     "q": "An deiner Stelle ___ ich mehr lernen.",
     "hint": "(werden, Konjunktiv II)",
     "answers": [
      "würde"
     ],
     "vi": "Nếu tôi là bạn, tôi sẽ học nhiều hơn.",
     "explain": "würde + Infinitiv diễn tả giả định hoặc lời khuyên."
    },
    {
     "q": "Du ___ mehr Sport machen.",
     "hint": "(sollen, Konjunktiv II, Ratschlag, du)",
     "answers": [
      "solltest"
     ],
     "vi": "Bạn nên tập thể thao nhiều hơn.",
     "explain": "Lời khuyên dùng sollte, ngôi du thêm -st: solltest."
    },
    {
     "q": "Wenn wir ein Auto ___, könnten wir aufs Land fahren.",
     "hint": "(haben, Konjunktiv II, wir)",
     "answers": [
      "hätten"
     ],
     "vi": "Nếu chúng tôi có ô tô, chúng tôi có thể về vùng quê.",
     "explain": "Konjunktiv II của haben ngôi wir là hätten."
    },
    {
     "q": "___ du mir bitte das Salz geben?",
     "hint": "(können, Konjunktiv II, du)",
     "answers": [
      "Könntest"
     ],
     "vi": "Bạn có thể đưa giúp tôi lọ muối được không?",
     "explain": "können → könnte, ngôi du thêm -st: könntest."
    },
    {
     "q": "Es ___ schön, wenn du kommen könntest.",
     "hint": "(sein, Konjunktiv II)",
     "answers": [
      "wäre"
     ],
     "vi": "Sẽ thật tuyệt nếu bạn có thể đến.",
     "explain": "Konjunktiv II của sein ngôi es là wäre."
    },
    {
     "q": "Ich ___ jetzt gern am Strand.",
     "hint": "(sein, Konjunktiv II, Wunsch)",
     "answers": [
      "wäre"
     ],
     "vi": "Giá mà bây giờ tôi đang ở bãi biển.",
     "explain": "Điều ước không có thật dùng wäre."
    },
    {
     "q": "Wenn er mehr ___, würde er die Prüfung bestehen.",
     "hint": "(lernen, Konjunktiv II)",
     "answers": [
      "lernen würde",
      "lernte"
     ],
     "vi": "Nếu anh ấy học nhiều hơn, anh ấy sẽ thi đỗ.",
     "explain": "Konjunktiv II của lernen là lernen würde (hoặc lernte, giống Präteritum)."
    },
    {
     "q": "Ihr ___ besser früher losfahren.",
     "hint": "(sollen, Konjunktiv II, ihr)",
     "answers": [
      "solltet"
     ],
     "vi": "Các bạn nên khởi hành sớm hơn.",
     "explain": "Lời khuyên với ihr: solltet."
    }
   ]
  },
  {
   "title": "Động từ nguyên mẫu với zu (Infinitiv mit zu)",
   "intro": "Sau nhiều động từ (versuchen, vergessen, anfangen, vorhaben…), cụm (keine) Lust/Zeit haben và es ist wichtig/schön… ta dùng zu + Infinitiv ở cuối câu.\nĐộng từ tách được: zu đứng giữa: aufstehen → aufzustehen.\num … zu = để; ohne … zu = mà không.\nSau động từ khuyết thiếu (können, müssen, wollen…) KHÔNG dùng zu.",
   "questions": [
    {
     "q": "Ich habe keine Lust, heute ___.",
     "hint": "(kochen)",
     "answers": [
      "zu kochen"
     ],
     "vi": "Hôm nay tôi không muốn nấu ăn.",
     "explain": "Sau „keine Lust haben“ dùng zu + Infinitiv."
    },
    {
     "q": "Es ist wichtig, jeden Tag Deutsch ___.",
     "hint": "(lernen)",
     "answers": [
      "zu lernen"
     ],
     "vi": "Việc học tiếng Đức mỗi ngày là quan trọng.",
     "explain": "Sau „es ist wichtig“ dùng zu + Infinitiv."
    },
    {
     "q": "Vergiss nicht, die Tür ___!",
     "hint": "(abschließen)",
     "answers": [
      "abzuschließen"
     ],
     "vi": "Đừng quên khóa cửa nhé!",
     "explain": "Động từ tách được: zu đứng giữa tiền tố và gốc."
    },
    {
     "q": "Er hat versprochen, pünktlich ___.",
     "hint": "(kommen)",
     "answers": [
      "zu kommen"
     ],
     "vi": "Anh ấy đã hứa sẽ đến đúng giờ.",
     "explain": "Sau versprechen dùng zu + Infinitiv."
    },
    {
     "q": "Ich versuche, früher ___.",
     "hint": "(aufstehen)",
     "answers": [
      "aufzustehen"
     ],
     "vi": "Tôi cố gắng dậy sớm hơn.",
     "explain": "aufstehen là động từ tách được → aufzustehen."
    },
    {
     "q": "Sie hat angefangen, Gitarre ___.",
     "hint": "(spielen)",
     "answers": [
      "zu spielen"
     ],
     "vi": "Cô ấy đã bắt đầu chơi đàn ghi-ta.",
     "explain": "Sau anfangen dùng zu + Infinitiv."
    },
    {
     "q": "Wir haben vor, nach Italien ___.",
     "hint": "(fahren)",
     "answers": [
      "zu fahren"
     ],
     "vi": "Chúng tôi dự định đi Ý.",
     "explain": "Sau vorhaben dùng zu + Infinitiv."
    },
    {
     "q": "Es macht Spaß, neue Leute ___.",
     "hint": "(kennenlernen)",
     "answers": [
      "kennenzulernen"
     ],
     "vi": "Làm quen với người mới thật vui.",
     "explain": "kennenlernen là động từ tách được → kennenzulernen."
    },
    {
     "q": "Ich spare Geld, um ein Auto ___.",
     "hint": "(kaufen)",
     "answers": [
      "zu kaufen"
     ],
     "vi": "Tôi tiết kiệm tiền để mua một chiếc ô tô.",
     "explain": "um … zu + Infinitiv diễn tả mục đích."
    },
    {
     "q": "Er ist gegangen, ohne sich ___.",
     "hint": "(verabschieden)",
     "answers": [
      "zu verabschieden"
     ],
     "vi": "Anh ấy đã đi mà không chào tạm biệt.",
     "explain": "ohne … zu + Infinitiv nghĩa là „mà không“; ver- không tách được nên zu đứng trước."
    },
    {
     "q": "Hast du Zeit, mich morgen ___?",
     "hint": "(anrufen)",
     "answers": [
      "anzurufen"
     ],
     "vi": "Ngày mai bạn có thời gian gọi điện cho tôi không?",
     "explain": "anrufen là động từ tách được → anzurufen."
    },
    {
     "q": "Ich muss morgen früh ___.",
     "hint": "(aufstehen – nach Modalverb!)",
     "answers": [
      "aufstehen"
     ],
     "vi": "Ngày mai tôi phải dậy sớm.",
     "explain": "Sau động từ khuyết thiếu müssen không dùng zu."
    }
   ]
  },
  {
   "title": "Đuôi tính từ (Adjektivdeklination)",
   "intro": "Tính từ đứng trước danh từ phải thêm đuôi theo mạo từ, giống, cách và số.\nSau der/die/das: chủ yếu -e (Nom. Sg., Akk. fem./neutr.), còn lại -en.\nSau ein/kein/mein: Nom. der-Wort → -er, das-Wort → -es; Akk. maskulin → -en; Dativ → -en.\nKhông có mạo từ: tính từ nhận đuôi của mạo từ xác định (schwarzen Kaffee, schönes Wetter, gute Ideen).",
   "questions": [
    {
     "q": "Ich habe einen ___ Hund.",
     "hint": "(klein)",
     "answers": [
      "kleinen"
     ],
     "vi": "Tôi có một con chó nhỏ.",
     "explain": "Akkusativ giống đực sau einen → -en."
    },
    {
     "q": "Das ist ein ___ Auto.",
     "hint": "(neu)",
     "answers": [
      "neues"
     ],
     "vi": "Đó là một chiếc ô tô mới.",
     "explain": "Nominativ giống trung sau ein → -es."
    },
    {
     "q": "Die ___ Frau ist meine Lehrerin.",
     "hint": "(jung)",
     "answers": [
      "junge"
     ],
     "vi": "Người phụ nữ trẻ là cô giáo của tôi.",
     "explain": "Nominativ số ít sau die → -e."
    },
    {
     "q": "Wir wohnen in einem ___ Haus.",
     "hint": "(alt)",
     "answers": [
      "alten"
     ],
     "vi": "Chúng tôi sống trong một ngôi nhà cũ.",
     "explain": "Dativ luôn có đuôi -en sau einem."
    },
    {
     "q": "Er trinkt gern ___ Kaffee.",
     "hint": "(schwarz, ohne Artikel)",
     "answers": [
      "schwarzen"
     ],
     "vi": "Anh ấy thích uống cà phê đen.",
     "explain": "Không có mạo từ, Akkusativ giống đực → -en (như den)."
    },
    {
     "q": "Ich suche eine ___ Wohnung.",
     "hint": "(günstig)",
     "answers": [
      "günstige"
     ],
     "vi": "Tôi đang tìm một căn hộ giá rẻ.",
     "explain": "Akkusativ giống cái sau eine → -e."
    },
    {
     "q": "Mit dem ___ Zug fahre ich nach Hamburg.",
     "hint": "(schnell)",
     "answers": [
      "schnellen"
     ],
     "vi": "Tôi đi Hamburg bằng chuyến tàu nhanh.",
     "explain": "Dativ sau dem → -en."
    },
    {
     "q": "Das sind ___ Ideen.",
     "hint": "(gut, ohne Artikel)",
     "answers": [
      "gute"
     ],
     "vi": "Đó là những ý tưởng hay.",
     "explain": "Số nhiều không có mạo từ, Nominativ → -e."
    },
    {
     "q": "Der ___ Mann wartet auf den Bus.",
     "hint": "(alt)",
     "answers": [
      "alte"
     ],
     "vi": "Người đàn ông lớn tuổi đang chờ xe buýt.",
     "explain": "Nominativ số ít sau der → -e."
    },
    {
     "q": "Ich gebe der ___ Kollegin ein Geschenk.",
     "hint": "(neu)",
     "answers": [
      "neuen"
     ],
     "vi": "Tôi tặng quà cho cô đồng nghiệp mới.",
     "explain": "Dativ sau der → -en."
    },
    {
     "q": "Sie trägt ein ___ Kleid.",
     "hint": "(rot)",
     "answers": [
      "rotes"
     ],
     "vi": "Cô ấy mặc một chiếc váy đỏ.",
     "explain": "Akkusativ giống trung sau ein → -es."
    },
    {
     "q": "Heute haben wir ___ Wetter.",
     "hint": "(schön, ohne Artikel)",
     "answers": [
      "schönes"
     ],
     "vi": "Hôm nay trời đẹp.",
     "explain": "Không có mạo từ, Akkusativ giống trung → -es (như das)."
    }
   ]
  }
 ],
 "B2": [
  {
   "title": "Bị động với động từ khuyết thiếu & bị động trạng thái (Passiv mit Modalverben & Zustandspassiv)",
   "intro": "Bị động với động từ khuyết thiếu: động từ khuyết thiếu được chia, cuối câu là Partizip II + werden.\nDie Rechnung muss bezahlt werden.\nBị động trạng thái (Zustandspassiv) diễn tả kết quả của một hành động: sein + Partizip II.\nDie Tür ist geschlossen. (Cửa đang đóng – trạng thái)",
   "questions": [
    {
     "q": "Die Rechnung muss bis Freitag ___ werden.",
     "hint": "(bezahlen)",
     "answers": [
      "bezahlt"
     ],
     "vi": "Hóa đơn phải được thanh toán trước thứ Sáu.",
     "explain": "Sau động từ khuyết thiếu, cấu trúc bị động là Partizip II + werden."
    },
    {
     "q": "Das Formular kann online ___ werden.",
     "hint": "(ausfüllen)",
     "answers": [
      "ausgefüllt"
     ],
     "vi": "Mẫu đơn có thể được điền trực tuyến.",
     "explain": "Partizip II của động từ tách ausfüllen là ausgefüllt."
    },
    {
     "q": "Die Fenster ___ jeden Tag geputzt werden.",
     "hint": "(müssen, Präsens)",
     "answers": [
      "müssen"
     ],
     "vi": "Các cửa sổ phải được lau mỗi ngày.",
     "explain": "Chủ ngữ số nhiều die Fenster nên động từ khuyết thiếu chia là müssen."
    },
    {
     "q": "Das Problem konnte schnell gelöst ___.",
     "hint": "(Passiv-Hilfsverb)",
     "answers": [
      "werden"
     ],
     "vi": "Vấn đề đã có thể được giải quyết nhanh chóng.",
     "explain": "Bị động với động từ khuyết thiếu luôn kết thúc bằng werden ở dạng nguyên thể."
    },
    {
     "q": "Hier darf nicht ___ werden.",
     "hint": "(rauchen)",
     "answers": [
      "geraucht"
     ],
     "vi": "Ở đây không được phép hút thuốc.",
     "explain": "Bị động không chủ ngữ vẫn dùng Partizip II + werden."
    },
    {
     "q": "Der Termin hätte früher abgesagt werden ___.",
     "hint": "(müssen)",
     "answers": [
      "müssen"
     ],
     "vi": "Lẽ ra cuộc hẹn phải được hủy sớm hơn.",
     "explain": "Ở thì quá khứ giả định, động từ khuyết thiếu đứng cuối ở dạng nguyên thể: hätte … werden müssen."
    },
    {
     "q": "Die Tür ___ seit gestern geschlossen.",
     "hint": "(sein, Präsens)",
     "answers": [
      "ist"
     ],
     "vi": "Cánh cửa đã đóng từ hôm qua.",
     "explain": "Bị động trạng thái dùng sein + Partizip II để diễn tả trạng thái."
    },
    {
     "q": "Das Geschäft ist sonntags ___.",
     "hint": "(schließen)",
     "answers": [
      "geschlossen"
     ],
     "vi": "Cửa hàng đóng cửa vào Chủ nhật.",
     "explain": "Partizip II của schließen là geschlossen, dùng với sein để chỉ trạng thái."
    },
    {
     "q": "Die Hausaufgaben ___ schon gemacht.",
     "hint": "(sein, Präteritum)",
     "answers": [
      "waren"
     ],
     "vi": "Bài tập về nhà đã được làm xong rồi.",
     "explain": "Bị động trạng thái ở Präteritum dùng waren cho chủ ngữ số nhiều."
    },
    {
     "q": "Der Tisch ist für 20 Uhr ___.",
     "hint": "(reservieren)",
     "answers": [
      "reserviert"
     ],
     "vi": "Bàn đã được đặt trước cho lúc 20 giờ.",
     "explain": "Động từ tận cùng -ieren có Partizip II không có ge-: reserviert."
    },
    {
     "q": "Das Projekt soll bis Ende des Jahres ___ werden.",
     "hint": "(abschließen)",
     "answers": [
      "abgeschlossen"
     ],
     "vi": "Dự án cần được hoàn thành trước cuối năm.",
     "explain": "Partizip II của abschließen là abgeschlossen, đứng trước werden."
    },
    {
     "q": "Alle Plätze ___ bereits besetzt.",
     "hint": "(sein, Präsens)",
     "answers": [
      "sind"
     ],
     "vi": "Tất cả các chỗ đều đã có người ngồi.",
     "explain": "Chủ ngữ số nhiều alle Plätze nên dùng sind trong bị động trạng thái."
    }
   ]
  },
  {
   "title": "Lời nói gián tiếp với giả định I (Konjunktiv I – indirekte Rede)",
   "intro": "Konjunktiv I dùng để thuật lại lời người khác, nhất là trong báo chí. Cách tạo: gốc động từ + đuôi -e (ngôi er/sie/es).\nhaben → er habe | sein → er sei | können → er könne | werden → er werde\nNếu Konjunktiv I trùng với thức trần thuật (ví dụ: sie haben), ta dùng Konjunktiv II thay thế (sie hätten). Quá khứ: habe/sei + Partizip II.",
   "questions": [
    {
     "q": "Er sagt, er ___ keine Zeit.",
     "hint": "(haben)",
     "answers": [
      "habe"
     ],
     "vi": "Anh ấy nói rằng anh ấy không có thời gian.",
     "explain": "Konjunktiv I của haben ở ngôi er là habe."
    },
    {
     "q": "Sie behauptet, sie ___ krank.",
     "hint": "(sein)",
     "answers": [
      "sei"
     ],
     "vi": "Cô ấy khẳng định rằng cô ấy bị ốm.",
     "explain": "Konjunktiv I của sein ở ngôi sie (số ít) là sei."
    },
    {
     "q": "Der Minister erklärte, die Regierung ___ die Steuern senken.",
     "hint": "(wollen)",
     "answers": [
      "wolle"
     ],
     "vi": "Bộ trưởng tuyên bố rằng chính phủ muốn giảm thuế.",
     "explain": "Konjunktiv I của wollen ở ngôi thứ ba số ít là wolle."
    },
    {
     "q": "Sie sagt, sie ___ morgen nach Berlin.",
     "hint": "(fahren)",
     "answers": [
      "fahre"
     ],
     "vi": "Cô ấy nói rằng ngày mai cô ấy đi Berlin.",
     "explain": "Konjunktiv I dùng gốc động từ không biến âm + -e: fahre."
    },
    {
     "q": "Der Sprecher teilte mit, das Unternehmen ___ 200 neue Mitarbeiter eingestellt.",
     "hint": "(haben)",
     "answers": [
      "habe"
     ],
     "vi": "Người phát ngôn thông báo rằng công ty đã tuyển 200 nhân viên mới.",
     "explain": "Quá khứ trong lời gián tiếp: habe + Partizip II."
    },
    {
     "q": "Die Zeugin gab an, sie ___ den Täter gesehen.",
     "hint": "(haben)",
     "answers": [
      "habe"
     ],
     "vi": "Nữ nhân chứng khai rằng cô ấy đã nhìn thấy thủ phạm.",
     "explain": "sehen tạo quá khứ với haben, nên Konjunktiv I là habe … gesehen."
    },
    {
     "q": "Er meinte, er ___ gestern zu Hause gewesen.",
     "hint": "(sein)",
     "answers": [
      "sei"
     ],
     "vi": "Anh ấy cho rằng hôm qua anh ấy đã ở nhà.",
     "explain": "sein tạo quá khứ với sein, nên dùng sei … gewesen."
    },
    {
     "q": "Die Kinder sagen, sie ___ keinen Hunger.",
     "hint": "(haben, Ersatzform)",
     "answers": [
      "hätten"
     ],
     "vi": "Bọn trẻ nói rằng chúng không đói.",
     "explain": "Konjunktiv I sie haben trùng với thức trần thuật nên phải dùng Konjunktiv II hätten."
    },
    {
     "q": "Laut Polizei ___ der Unfall um 8 Uhr passiert.",
     "hint": "(sein)",
     "answers": [
      "sei"
     ],
     "vi": "Theo cảnh sát, vụ tai nạn đã xảy ra lúc 8 giờ.",
     "explain": "passieren tạo quá khứ với sein, nên dùng sei … passiert."
    },
    {
     "q": "Er fragte, ob seine Frau mitkommen ___.",
     "hint": "(können)",
     "answers": [
      "könne"
     ],
     "vi": "Anh ấy hỏi liệu vợ anh ấy có thể đi cùng không.",
     "explain": "Konjunktiv I của können ở ngôi thứ ba số ít là könne."
    },
    {
     "q": "Der Arzt sagt, der Patient ___ sich ausruhen.",
     "hint": "(müssen)",
     "answers": [
      "müsse"
     ],
     "vi": "Bác sĩ nói rằng bệnh nhân phải nghỉ ngơi.",
     "explain": "Konjunktiv I của müssen ở ngôi thứ ba số ít là müsse."
    },
    {
     "q": "Die Firma erklärte, man ___ das Problem bald lösen.",
     "hint": "(werden)",
     "answers": [
      "werde"
     ],
     "vi": "Công ty tuyên bố rằng họ sẽ sớm giải quyết vấn đề.",
     "explain": "Tương lai trong lời gián tiếp: werde + động từ nguyên thể."
    }
   ]
  },
  {
   "title": "Phân từ dùng như tính từ (Partizip I & II als Adjektive)",
   "intro": "Partizip I (động từ nguyên thể + d) mang nghĩa chủ động, đang diễn ra: das weinende Kind (đứa trẻ đang khóc).\nPartizip II mang nghĩa bị động hoặc đã hoàn thành: das gestohlene Auto (chiếc xe bị đánh cắp).\nKhi đứng trước danh từ, phân từ được chia đuôi như tính từ bình thường.",
   "questions": [
    {
     "q": "Die Mutter tröstet das ___ Kind.",
     "hint": "(weinen, Partizip I)",
     "answers": [
      "weinende"
     ],
     "vi": "Người mẹ dỗ dành đứa trẻ đang khóc.",
     "explain": "Partizip I weinend + đuôi -e sau mạo từ xác định das (Akkusativ)."
    },
    {
     "q": "Wir brauchen ___ Wasser.",
     "hint": "(kochen, Partizip I)",
     "answers": [
      "kochendes"
     ],
     "vi": "Chúng ta cần nước đang sôi.",
     "explain": "Không có mạo từ, danh từ giống trung Akkusativ nên đuôi là -es."
    },
    {
     "q": "Das ___ Auto wurde gefunden.",
     "hint": "(stehlen, Partizip II)",
     "answers": [
      "gestohlene"
     ],
     "vi": "Chiếc xe bị đánh cắp đã được tìm thấy.",
     "explain": "Partizip II gestohlen mang nghĩa bị động, thêm đuôi -e sau das."
    },
    {
     "q": "Er hat die ___ Zeitung weggeworfen.",
     "hint": "(lesen, Partizip II)",
     "answers": [
      "gelesene"
     ],
     "vi": "Anh ấy đã vứt tờ báo đã đọc đi.",
     "explain": "Tờ báo đã được đọc xong nên dùng Partizip II gelesen + đuôi -e."
    },
    {
     "q": "Mit ___ Augen hörte sie zu.",
     "hint": "(schließen, Partizip II)",
     "answers": [
      "geschlossenen"
     ],
     "vi": "Cô ấy lắng nghe với đôi mắt nhắm lại.",
     "explain": "Sau mit là Dativ số nhiều không mạo từ, nên đuôi là -en."
    },
    {
     "q": "Die ___ Preise ärgern viele Menschen.",
     "hint": "(steigen, Partizip I)",
     "answers": [
      "steigenden"
     ],
     "vi": "Giá cả đang tăng làm nhiều người bực mình.",
     "explain": "Partizip I steigend, số nhiều sau die nên đuôi là -en."
    },
    {
     "q": "Der vor zwei Jahren ___ Vertrag läuft bald aus.",
     "hint": "(unterschreiben, Partizip II)",
     "answers": [
      "unterschriebene"
     ],
     "vi": "Hợp đồng được ký hai năm trước sắp hết hạn.",
     "explain": "unterschreiben là động từ không tách, Partizip II không có ge-: unterschrieben + -e."
    },
    {
     "q": "Ich suche einen gut ___ Job.",
     "hint": "(bezahlen, Partizip II)",
     "answers": [
      "bezahlten"
     ],
     "vi": "Tôi đang tìm một công việc được trả lương cao.",
     "explain": "Sau einen (giống đực, Akkusativ) tính từ có đuôi -en."
    },
    {
     "q": "In der ___ Woche haben wir Urlaub.",
     "hint": "(kommen, Partizip I)",
     "answers": [
      "kommenden"
     ],
     "vi": "Tuần tới chúng tôi được nghỉ phép.",
     "explain": "Sau in der (Dativ giống cái) tính từ có đuôi -en."
    },
    {
     "q": "Das ist ein ___ Buch.",
     "hint": "(spannen, Partizip I)",
     "answers": [
      "spannendes"
     ],
     "vi": "Đó là một cuốn sách hấp dẫn.",
     "explain": "Sau ein với danh từ giống trung (Nominativ) đuôi là -es."
    },
    {
     "q": "Die ___ Gäste wurden herzlich begrüßt.",
     "hint": "(ankommen, Partizip I)",
     "answers": [
      "ankommenden"
     ],
     "vi": "Những vị khách đang đến được chào đón nồng nhiệt.",
     "explain": "Partizip I ankommend, số nhiều sau die nên đuôi là -en."
    },
    {
     "q": "Er trägt ein frisch ___ Hemd.",
     "hint": "(bügeln, Partizip II)",
     "answers": [
      "gebügeltes"
     ],
     "vi": "Anh ấy mặc một chiếc áo sơ mi vừa được là phẳng.",
     "explain": "Partizip II gebügelt, sau ein giống trung Akkusativ nên đuôi là -es."
    }
   ]
  },
  {
   "title": "Liên từ hai thành phần (zweiteilige Konnektoren)",
   "intro": "Một số liên từ gồm hai phần đi theo cặp:\nsowohl … als auch (cả … lẫn) | weder … noch (không … cũng không)\nentweder … oder (hoặc … hoặc) | nicht nur … sondern auch (không chỉ … mà còn)\nzwar … aber (tuy … nhưng) | je … desto/umso (càng … càng)\nVới je … desto: mệnh đề je có động từ đứng cuối, phần desto + so sánh hơn đứng trước động từ chia.",
   "questions": [
    {
     "q": "Je mehr ich lerne, ___ besser verstehe ich.",
     "hint": "(je …)",
     "answers": [
      "desto",
      "umso"
     ],
     "vi": "Tôi càng học nhiều thì càng hiểu rõ hơn.",
     "explain": "Phần thứ hai của je là desto hoặc umso."
    },
    {
     "q": "Sie spricht ___ Englisch als auch Spanisch.",
     "hint": "(… als auch)",
     "answers": [
      "sowohl"
     ],
     "vi": "Cô ấy nói được cả tiếng Anh lẫn tiếng Tây Ban Nha.",
     "explain": "Cặp liên từ đầy đủ là sowohl … als auch."
    },
    {
     "q": "Er hat weder Zeit ___ Geld.",
     "hint": "(weder …)",
     "answers": [
      "noch"
     ],
     "vi": "Anh ấy không có thời gian cũng không có tiền.",
     "explain": "weder luôn đi cùng noch."
    },
    {
     "q": "Entweder du kommst mit, ___ du bleibst zu Hause.",
     "hint": "(entweder …)",
     "answers": [
      "oder"
     ],
     "vi": "Hoặc là bạn đi cùng, hoặc là bạn ở nhà.",
     "explain": "entweder luôn đi cùng oder."
    },
    {
     "q": "Das Hotel war zwar teuer, ___ sehr schön.",
     "hint": "(zwar …)",
     "answers": [
      "aber",
      "doch"
     ],
     "vi": "Khách sạn tuy đắt nhưng rất đẹp.",
     "explain": "zwar đi cùng aber (hoặc doch) để diễn tả sự nhượng bộ."
    },
    {
     "q": "Nicht nur die Kinder, ___ auch die Eltern hatten Spaß.",
     "hint": "(nicht nur … auch)",
     "answers": [
      "sondern"
     ],
     "vi": "Không chỉ bọn trẻ mà cả bố mẹ cũng vui vẻ.",
     "explain": "Cặp liên từ đầy đủ là nicht nur … sondern auch."
    },
    {
     "q": "___ früher wir losfahren, desto weniger Stau gibt es.",
     "hint": "(… desto)",
     "answers": [
      "Je"
     ],
     "vi": "Chúng ta càng khởi hành sớm thì càng ít tắc đường.",
     "explain": "desto ở mệnh đề sau đòi hỏi je ở mệnh đề đầu."
    },
    {
     "q": "Sie kann ___ schwimmen noch Rad fahren.",
     "hint": "(… noch)",
     "answers": [
      "weder"
     ],
     "vi": "Cô ấy không biết bơi cũng không biết đi xe đạp.",
     "explain": "noch là phần thứ hai của weder … noch."
    },
    {
     "q": "Wir können ___ heute oder morgen kommen.",
     "hint": "(… oder)",
     "answers": [
      "entweder"
     ],
     "vi": "Chúng tôi có thể đến hoặc hôm nay hoặc ngày mai.",
     "explain": "Cặp liên từ hoặc … hoặc là entweder … oder."
    },
    {
     "q": "Ich mag sowohl Kaffee ___ auch Tee.",
     "hint": "(sowohl … auch)",
     "answers": [
      "als"
     ],
     "vi": "Tôi thích cả cà phê lẫn trà.",
     "explain": "sowohl đi cùng als auch."
    },
    {
     "q": "Einerseits will er sparen, ___ möchte er reisen.",
     "hint": "(einerseits …)",
     "answers": [
      "andererseits"
     ],
     "vi": "Một mặt anh ấy muốn tiết kiệm, mặt khác anh ấy muốn đi du lịch.",
     "explain": "einerseits luôn đi cùng andererseits."
    },
    {
     "q": "Das Wetter war ___ sonnig, teils regnerisch.",
     "hint": "(… teils)",
     "answers": [
      "teils"
     ],
     "vi": "Thời tiết lúc thì nắng, lúc thì mưa.",
     "explain": "Cặp liên từ teils … teils nghĩa là lúc thì … lúc thì."
    }
   ]
  },
  {
   "title": "Động từ đi với giới từ & trạng từ giới từ (Verben mit Präpositionen & Präpositionaladverbien)",
   "intro": "Nhiều động từ đi với giới từ cố định: warten auf, denken an, sich interessieren für.\nKhi thay cho một sự vật hoặc cả mệnh đề, ta dùng da(r) + giới từ: daran, darauf, dafür.\nKhi hỏi về sự vật dùng wo(r) + giới từ: Woran? Worauf? Khi hỏi về người dùng giới từ + wen/wem: Auf wen?\nNếu giới từ bắt đầu bằng nguyên âm thì thêm r: dar-auf, wor-an.",
   "questions": [
    {
     "q": "Ich warte schon seit einer Stunde ___ den Bus.",
     "hint": "(Präposition)",
     "answers": [
      "auf"
     ],
     "vi": "Tôi đã chờ xe buýt được một tiếng rồi.",
     "explain": "Động từ warten đi với giới từ auf + Akkusativ."
    },
    {
     "q": "Sie interessiert sich sehr ___ Kunst.",
     "hint": "(Präposition)",
     "answers": [
      "für"
     ],
     "vi": "Cô ấy rất quan tâm đến nghệ thuật.",
     "explain": "sich interessieren đi với giới từ für + Akkusativ."
    },
    {
     "q": "Wir freuen uns schon ___ die Ferien.",
     "hint": "(Präposition, Zukunft)",
     "answers": [
      "auf"
     ],
     "vi": "Chúng tôi đã mong chờ kỳ nghỉ rồi.",
     "explain": "sich freuen auf dùng cho điều sắp đến trong tương lai."
    },
    {
     "q": "Er denkt oft ___ seine Kindheit.",
     "hint": "(Präposition)",
     "answers": [
      "an"
     ],
     "vi": "Anh ấy thường nghĩ về tuổi thơ của mình.",
     "explain": "denken đi với giới từ an + Akkusativ."
    },
    {
     "q": "___ hast du Angst?",
     "hint": "(vor + Sache, Fragewort)",
     "answers": [
      "Wovor"
     ],
     "vi": "Bạn sợ điều gì?",
     "explain": "Angst haben vor; hỏi về sự vật dùng wo + vor = Wovor."
    },
    {
     "q": "Ich habe keine Lust ___, heute zu kochen.",
     "hint": "(zu, Präpositionaladverb)",
     "answers": [
      "dazu"
     ],
     "vi": "Tôi không có hứng nấu ăn hôm nay.",
     "explain": "Lust haben zu; da + zu = dazu báo trước mệnh đề nguyên thể."
    },
    {
     "q": "Sie hat sich ___ beschwert, dass es so laut war.",
     "hint": "(über, Präpositionaladverb)",
     "answers": [
      "darüber"
     ],
     "vi": "Cô ấy đã phàn nàn về việc trời ồn ào như vậy.",
     "explain": "sich beschweren über; da + r + über = darüber báo trước mệnh đề dass."
    },
    {
     "q": "___ denkst du gerade?",
     "hint": "(an + Sache, Fragewort)",
     "answers": [
      "Woran"
     ],
     "vi": "Bạn đang nghĩ về điều gì vậy?",
     "explain": "Hỏi về sự vật với an: wo + r + an = Woran."
    },
    {
     "q": "Hast du an den Termin gedacht? – Ja, ich habe ___ gedacht.",
     "hint": "(an, Präpositionaladverb)",
     "answers": [
      "daran"
     ],
     "vi": "Bạn đã nhớ đến cuộc hẹn chưa? – Rồi, tôi đã nhớ đến nó.",
     "explain": "Thay cho sự vật den Termin dùng da + r + an = daran."
    },
    {
     "q": "Er besteht ___, dass wir pünktlich sind.",
     "hint": "(auf, Präpositionaladverb)",
     "answers": [
      "darauf"
     ],
     "vi": "Anh ấy nhất quyết đòi chúng tôi phải đúng giờ.",
     "explain": "bestehen auf; da + r + auf = darauf báo trước mệnh đề dass."
    },
    {
     "q": "Die Lösung hängt ___ ab, wie viel Geld wir haben.",
     "hint": "(von, Präpositionaladverb)",
     "answers": [
      "davon"
     ],
     "vi": "Giải pháp phụ thuộc vào việc chúng ta có bao nhiêu tiền.",
     "explain": "abhängen von; da + von = davon báo trước mệnh đề phụ."
    },
    {
     "q": "___ wartest du? – Auf meinen Bruder.",
     "hint": "(auf + Person, Fragewort)",
     "answers": [
      "Auf wen"
     ],
     "vi": "Bạn đang đợi ai? – Đợi anh trai tôi.",
     "explain": "Khi hỏi về người, dùng giới từ + wen chứ không dùng worauf."
    }
   ]
  },
  {
   "title": "Giả định II thì quá khứ (Konjunktiv II Vergangenheit)",
   "intro": "Konjunktiv II quá khứ diễn tả điều không có thật trong quá khứ (giả thiết, hối tiếc, lời trách).\nCấu trúc: hätte/wäre + Partizip II.\nWenn ich Zeit gehabt hätte, wäre ich gekommen.\nVới động từ khuyết thiếu: hätte + động từ nguyên thể + động từ khuyết thiếu nguyên thể: Du hättest anrufen sollen.",
   "questions": [
    {
     "q": "Wenn ich mehr Zeit gehabt ___, wäre ich mitgekommen.",
     "hint": "(haben)",
     "answers": [
      "hätte"
     ],
     "vi": "Nếu tôi có nhiều thời gian hơn thì tôi đã đi cùng rồi.",
     "explain": "haben tạo quá khứ với haben, nên dùng gehabt hätte."
    },
    {
     "q": "Wenn er früher aufgestanden ___, hätte er den Zug erreicht.",
     "hint": "(sein)",
     "answers": [
      "wäre"
     ],
     "vi": "Nếu anh ấy dậy sớm hơn thì anh ấy đã kịp chuyến tàu.",
     "explain": "aufstehen tạo quá khứ với sein, nên dùng wäre."
    },
    {
     "q": "Ich ___ dir gern geholfen.",
     "hint": "(haben)",
     "answers": [
      "hätte"
     ],
     "vi": "Lẽ ra tôi đã rất sẵn lòng giúp bạn.",
     "explain": "helfen tạo quá khứ với haben, nên dùng hätte + geholfen."
    },
    {
     "q": "Sie wäre beinahe ___.",
     "hint": "(hinfallen)",
     "answers": [
      "hingefallen"
     ],
     "vi": "Cô ấy suýt nữa thì bị ngã.",
     "explain": "Partizip II của động từ tách hinfallen là hingefallen."
    },
    {
     "q": "Wenn du mich gefragt hättest, ___ ich es dir gesagt.",
     "hint": "(haben)",
     "answers": [
      "hätte"
     ],
     "vi": "Nếu bạn hỏi tôi thì tôi đã nói cho bạn biết rồi.",
     "explain": "sagen tạo quá khứ với haben, nên mệnh đề chính dùng hätte."
    },
    {
     "q": "Hätten wir das gewusst, ___ wir nicht gekommen.",
     "hint": "(sein)",
     "answers": [
      "wären"
     ],
     "vi": "Nếu chúng tôi biết điều đó thì chúng tôi đã không đến.",
     "explain": "kommen tạo quá khứ với sein, chủ ngữ wir nên dùng wären."
    },
    {
     "q": "Du hättest mich anrufen ___.",
     "hint": "(sollen)",
     "answers": [
      "sollen"
     ],
     "vi": "Lẽ ra bạn nên gọi điện cho tôi.",
     "explain": "Với động từ khuyết thiếu, cuối câu là hai động từ nguyên thể: anrufen sollen."
    },
    {
     "q": "Ich hätte das nicht ___ sollen.",
     "hint": "(sagen)",
     "answers": [
      "sagen"
     ],
     "vi": "Lẽ ra tôi không nên nói điều đó.",
     "explain": "Động từ chính đứng ở dạng nguyên thể trước động từ khuyết thiếu sollen."
    },
    {
     "q": "An deiner Stelle ___ ich früher losgefahren.",
     "hint": "(sein)",
     "answers": [
      "wäre"
     ],
     "vi": "Nếu là bạn thì tôi đã khởi hành sớm hơn.",
     "explain": "losfahren tạo quá khứ với sein, nên dùng wäre."
    },
    {
     "q": "Wenn sie mehr gelernt hätte, ___ sie die Prüfung bestanden.",
     "hint": "(haben)",
     "answers": [
      "hätte"
     ],
     "vi": "Nếu cô ấy học nhiều hơn thì cô ấy đã thi đỗ.",
     "explain": "bestehen tạo quá khứ với haben, nên dùng hätte."
    },
    {
     "q": "Er tut so, als ___ er nichts gehört.",
     "hint": "(haben)",
     "answers": [
      "hätte"
     ],
     "vi": "Anh ấy làm như thể anh ấy không nghe thấy gì.",
     "explain": "Sau als (als ob) động từ chia đứng ngay sau als và dùng Konjunktiv II: hätte."
    },
    {
     "q": "Wenn es nicht geregnet hätte, ___ wir gewandert.",
     "hint": "(sein)",
     "answers": [
      "wären"
     ],
     "vi": "Nếu trời không mưa thì chúng tôi đã đi bộ đường dài.",
     "explain": "wandern tạo quá khứ với sein, chủ ngữ wir nên dùng wären."
    }
   ]
  }
 ],
 "C1": [
  {
   "title": "Văn phong danh từ và văn phong động từ (Nominalstil vs. Verbalstil)",
   "intro": "Trong văn bản học thuật và hành chính, người Đức hay biến động từ thành danh từ (Nominalstil), thường bằng đuôi -ung, -e, -tion hoặc dạng gốc. Mệnh đề phụ được thay bằng giới từ + danh từ.\nweil die Preise steigen → wegen des Anstiegs der Preise\nnachdem er zurückgekehrt war → nach seiner Rückkehr\nobwohl sie erkältet war → trotz ihrer Erkältung\nDanh từ đuôi -ung luôn là giống cái (die).",
   "questions": [
    {
     "q": "Nach der ___ des Vertrags begann die Zusammenarbeit.",
     "hint": "(unterzeichnen → Nomen)",
     "answers": [
      "Unterzeichnung"
     ],
     "vi": "Sau khi ký kết hợp đồng, sự hợp tác bắt đầu.",
     "explain": "Động từ 'unterzeichnen' + đuôi -ung thành danh từ giống cái 'die Unterzeichnung'."
    },
    {
     "q": "Wegen der ___ der Mieten ziehen viele Familien aufs Land.",
     "hint": "(erhöhen → Nomen)",
     "answers": [
      "Erhöhung"
     ],
     "vi": "Do giá thuê nhà tăng, nhiều gia đình chuyển về nông thôn.",
     "explain": "'erhöhen' danh từ hóa thành 'die Erhöhung', đứng sau 'der' (sinh cách sau 'wegen')."
    },
    {
     "q": "Bei der ___ des Projekts traten Schwierigkeiten auf.",
     "hint": "(durchführen → Nomen)",
     "answers": [
      "Durchführung"
     ],
     "vi": "Trong quá trình thực hiện dự án đã xuất hiện khó khăn.",
     "explain": "'durchführen' thành 'die Durchführung'; 'bei der' thay cho mệnh đề 'als man das Projekt durchführte'."
    },
    {
     "q": "Die ___ des neuen Gesetzes ist für 2027 geplant.",
     "hint": "(einführen → Nomen)",
     "answers": [
      "Einführung"
     ],
     "vi": "Việc ban hành luật mới được dự kiến vào năm 2027.",
     "explain": "'einführen' danh từ hóa thành 'die Einführung'."
    },
    {
     "q": "Trotz ___ Erkältung ging sie zur Arbeit.",
     "hint": "(obwohl sie erkältet war; Possessivartikel)",
     "answers": [
      "ihrer"
     ],
     "vi": "Mặc dù bị cảm, cô ấy vẫn đi làm.",
     "explain": "'trotz' đi với sinh cách; 'die Erkältung' giống cái nên quán từ sở hữu là 'ihrer'."
    },
    {
     "q": "Vor der ___ des Flugzeugs müssen alle Passagiere sitzen.",
     "hint": "(landen → Nomen)",
     "answers": [
      "Landung"
     ],
     "vi": "Trước khi máy bay hạ cánh, tất cả hành khách phải ngồi vào chỗ.",
     "explain": "'landen' thành 'die Landung', thay cho mệnh đề 'bevor das Flugzeug landet'."
    },
    {
     "q": "Die ___ der Ergebnisse erfolgt nächste Woche.",
     "hint": "(veröffentlichen → Nomen)",
     "answers": [
      "Veröffentlichung"
     ],
     "vi": "Việc công bố kết quả sẽ diễn ra vào tuần tới.",
     "explain": "'veröffentlichen' danh từ hóa thành 'die Veröffentlichung'; 'erfolgen' là động từ điển hình của Nominalstil."
    },
    {
     "q": "Nach seiner ___ aus dem Urlaub rief er sofort an.",
     "hint": "(zurückkehren → Nomen)",
     "answers": [
      "Rückkehr"
     ],
     "vi": "Sau khi trở về từ kỳ nghỉ, anh ấy gọi điện ngay.",
     "explain": "Danh từ của 'zurückkehren' là 'die Rückkehr' (không có đuôi -ung)."
    },
    {
     "q": "Die ___ der Arbeitslosigkeit ist ein zentrales Ziel.",
     "hint": "(bekämpfen → Nomen)",
     "answers": [
      "Bekämpfung"
     ],
     "vi": "Việc chống thất nghiệp là một mục tiêu trọng tâm.",
     "explain": "'bekämpfen' thành 'die Bekämpfung'."
    },
    {
     "q": "Während der ___ des Dokuments darf niemand stören.",
     "hint": "(übersetzen → Nomen)",
     "answers": [
      "Übersetzung"
     ],
     "vi": "Trong khi dịch tài liệu, không ai được làm phiền.",
     "explain": "'übersetzen' thành 'die Übersetzung'; 'während' đi với sinh cách."
    },
    {
     "q": "Nachdem der Vertrag ___ worden war, begann die Arbeit.",
     "hint": "(Verbalstil von: nach der Unterzeichnung des Vertrags)",
     "answers": [
      "unterzeichnet"
     ],
     "vi": "Sau khi hợp đồng được ký kết, công việc bắt đầu.",
     "explain": "Chuyển sang Verbalstil cần bị động quá khứ hoàn thành: Partizip II 'unterzeichnet' + 'worden war'."
    },
    {
     "q": "Die ___ der Steuern stieß auf heftige Kritik.",
     "hint": "(senken → Nomen)",
     "answers": [
      "Senkung"
     ],
     "vi": "Việc giảm thuế đã vấp phải sự chỉ trích gay gắt.",
     "explain": "'senken' danh từ hóa thành 'die Senkung'."
    }
   ]
  },
  {
   "title": "Định ngữ phân từ mở rộng (Erweiterte Partizipialattribute)",
   "intro": "Thay cho mệnh đề quan hệ, tiếng Đức viết có thể đặt cả cụm từ giữa quán từ và danh từ, với phân từ chia đuôi như tính từ.\nPartizip I (chủ động, đang diễn ra): die steigenden Preise = die Preise, die steigen\nPartizip II (bị động/đã xong): das entwickelte Produkt = das Produkt, das entwickelt wurde\nzu + Partizip I (cần phải): das zu lösende Problem = das Problem, das gelöst werden muss",
   "questions": [
    {
     "q": "Das von der Firma ___ Produkt ist sehr beliebt.",
     "hint": "(entwickeln, Partizip II)",
     "answers": [
      "entwickelte"
     ],
     "vi": "Sản phẩm do công ty phát triển rất được ưa chuộng.",
     "explain": "Partizip II 'entwickelt' mang nghĩa bị động, sau 'das' (danh cách) thêm đuôi -e."
    },
    {
     "q": "Die seit Jahren ___ Preise belasten die Bürger.",
     "hint": "(steigen, Partizip I)",
     "answers": [
      "steigenden"
     ],
     "vi": "Giá cả tăng liên tục nhiều năm nay đè nặng lên người dân.",
     "explain": "Partizip I 'steigend' diễn tả hành động đang diễn ra; số nhiều sau 'die' có đuôi -en."
    },
    {
     "q": "Der vor dem Haus ___ Wagen gehört meinem Nachbarn.",
     "hint": "(parken, Partizip II)",
     "answers": [
      "geparkte"
     ],
     "vi": "Chiếc xe đỗ trước nhà là của hàng xóm tôi.",
     "explain": "Partizip II 'geparkt' (xe đã được đỗ), sau 'der' danh cách đuôi -e."
    },
    {
     "q": "Die im letzten Jahr ___ Studie zeigt neue Ergebnisse.",
     "hint": "(veröffentlichen, Partizip II)",
     "answers": [
      "veröffentlichte"
     ],
     "vi": "Nghiên cứu được công bố năm ngoái cho thấy những kết quả mới.",
     "explain": "'veröffentlichen' không có ge- ở Partizip II; sau 'die' số ít danh cách đuôi -e."
    },
    {
     "q": "Wir suchen einen gut Englisch ___ Mitarbeiter.",
     "hint": "(sprechen, Partizip I)",
     "answers": [
      "sprechenden"
     ],
     "vi": "Chúng tôi tìm một nhân viên nói tiếng Anh giỏi.",
     "explain": "Partizip I 'sprechend' với nghĩa chủ động; sau 'einen' (đối cách giống đực) đuôi -en."
    },
    {
     "q": "Das noch zu ___ Problem ist komplex.",
     "hint": "(lösen, zu + Partizip I)",
     "answers": [
      "lösende"
     ],
     "vi": "Vấn đề còn cần phải giải quyết rất phức tạp.",
     "explain": "'zu + Partizip I' nghĩa là 'cần phải được...'; sau 'das' danh cách đuôi -e."
    },
    {
     "q": "Die bis morgen zu ___ Aufgaben liegen auf dem Tisch.",
     "hint": "(erledigen, zu + Partizip I)",
     "answers": [
      "erledigenden"
     ],
     "vi": "Những nhiệm vụ phải hoàn thành trước ngày mai đang nằm trên bàn.",
     "explain": "'zu erledigend' = cần được hoàn thành; số nhiều sau 'die' đuôi -en."
    },
    {
     "q": "Mit dem gestern ___ Brief war ich nicht zufrieden.",
     "hint": "(schreiben, Partizip II)",
     "answers": [
      "geschriebenen"
     ],
     "vi": "Tôi không hài lòng với lá thư được viết hôm qua.",
     "explain": "Partizip II 'geschrieben'; 'mit dem' là tặng cách nên đuôi -en."
    },
    {
     "q": "Die in der Stadt ___ Menschen sind oft gestresst.",
     "hint": "(leben, Partizip I)",
     "answers": [
      "lebenden"
     ],
     "vi": "Những người sống ở thành phố thường bị căng thẳng.",
     "explain": "Partizip I 'lebend' (đang sống); số nhiều sau 'die' đuôi -en."
    },
    {
     "q": "Der auf der Konferenz ___ Vorschlag wurde abgelehnt.",
     "hint": "(vorstellen, Partizip II)",
     "answers": [
      "vorgestellte"
     ],
     "vi": "Đề xuất được trình bày tại hội nghị đã bị bác bỏ.",
     "explain": "Động từ tách 'vorstellen' có Partizip II 'vorgestellt'; sau 'der' danh cách đuôi -e."
    },
    {
     "q": "Das seit Stunden ___ Kind schlief endlich ein.",
     "hint": "(weinen, Partizip I)",
     "answers": [
      "weinende"
     ],
     "vi": "Đứa trẻ khóc suốt mấy tiếng đồng hồ cuối cùng cũng ngủ thiếp đi.",
     "explain": "Partizip I 'weinend' diễn tả hành động kéo dài; sau 'das' danh cách đuôi -e."
    },
    {
     "q": "Der aus Berlin ___ Zug hatte zwei Stunden Verspätung.",
     "hint": "(kommen, Partizip II)",
     "answers": [
      "gekommene"
     ],
     "vi": "Chuyến tàu đến từ Berlin bị trễ hai tiếng.",
     "explain": "Partizip II của động từ chuyển động 'kommen' mang nghĩa đã hoàn thành (der Zug, der gekommen ist); đuôi -e."
    }
   ]
  },
  {
   "title": "Các dạng thay thế bị động (Passiversatzformen)",
   "intro": "Ngoài 'werden + Partizip II', tiếng Đức có nhiều cách diễn đạt bị động kèm nghĩa 'có thể' hoặc 'phải'.\nsich lassen + Infinitiv: Das lässt sich lösen. (= kann gelöst werden)\nsein + zu + Infinitiv: Das ist zu lösen. (= kann/muss gelöst werden)\nAdjektiv auf -bar: Das ist lösbar. (= kann gelöst werden)",
   "questions": [
    {
     "q": "Das Problem lässt sich leicht ___.",
     "hint": "(lösen)",
     "answers": [
      "lösen"
     ],
     "vi": "Vấn đề này có thể được giải quyết dễ dàng.",
     "explain": "Sau 'sich lassen' dùng động từ nguyên mẫu không có 'zu'."
    },
    {
     "q": "Diese Aufgabe ist bis Freitag zu ___.",
     "hint": "(erledigen)",
     "answers": [
      "erledigen"
     ],
     "vi": "Nhiệm vụ này phải được hoàn thành trước thứ Sáu.",
     "explain": "'sein + zu + Infinitiv' mang nghĩa bị động 'phải được làm'."
    },
    {
     "q": "Der Text ist kaum ___.",
     "hint": "(lesen, Adjektiv auf -bar)",
     "answers": [
      "lesbar"
     ],
     "vi": "Văn bản này hầu như không đọc được.",
     "explain": "Gốc động từ 'les-' + '-bar' = 'lesbar' (có thể đọc được)."
    },
    {
     "q": "Das Fenster ___ sich nicht öffnen.",
     "hint": "(lassen, Präsens)",
     "answers": [
      "lässt"
     ],
     "vi": "Cửa sổ không mở ra được.",
     "explain": "'lassen' ở ngôi thứ ba số ít hiện tại biến âm thành 'lässt'."
    },
    {
     "q": "Dieses Wasser ist nicht ___.",
     "hint": "(trinken, Adjektiv auf -bar)",
     "answers": [
      "trinkbar"
     ],
     "vi": "Nước này không uống được.",
     "explain": "'trink-' + '-bar' = 'trinkbar' (có thể uống được)."
    },
    {
     "q": "Die Schäden ___ sich nicht mehr reparieren.",
     "hint": "(lassen, Präsens)",
     "answers": [
      "lassen"
     ],
     "vi": "Những hư hại này không thể sửa chữa được nữa.",
     "explain": "Chủ ngữ số nhiều 'die Schäden' nên chia 'lassen'."
    },
    {
     "q": "Der Fehler ist leicht ___.",
     "hint": "(erkennen, Adjektiv auf -bar)",
     "answers": [
      "erkennbar"
     ],
     "vi": "Lỗi này dễ nhận ra.",
     "explain": "'erkenn-' + '-bar' = 'erkennbar' (có thể nhận ra được)."
    },
    {
     "q": "Die Regeln sind unbedingt zu ___.",
     "hint": "(beachten)",
     "answers": [
      "beachten"
     ],
     "vi": "Các quy định nhất thiết phải được tuân thủ.",
     "explain": "'sein + zu + Infinitiv' kèm 'unbedingt' diễn tả sự bắt buộc."
    },
    {
     "q": "Der Koffer ___ sich kaum tragen.",
     "hint": "(lassen, Präteritum)",
     "answers": [
      "ließ"
     ],
     "vi": "Chiếc vali hầu như không xách nổi.",
     "explain": "Quá khứ Präteritum của 'lassen' là 'ließ' (viết với ß)."
    },
    {
     "q": "Diese Frage ist nicht eindeutig zu ___.",
     "hint": "(beantworten)",
     "answers": [
      "beantworten"
     ],
     "vi": "Câu hỏi này không thể trả lời một cách rõ ràng.",
     "explain": "'sein + zu + Infinitiv' ở đây mang nghĩa 'có thể được làm'."
    },
    {
     "q": "Das Material ist mehrfach ___.",
     "hint": "(verwenden, Adjektiv auf -bar)",
     "answers": [
      "verwendbar"
     ],
     "vi": "Vật liệu này có thể sử dụng nhiều lần.",
     "explain": "'verwend-' + '-bar' = 'verwendbar' (có thể sử dụng)."
    },
    {
     "q": "Die Wohnungen in München sind kaum noch ___.",
     "hint": "(bezahlen, Adjektiv auf -bar)",
     "answers": [
      "bezahlbar"
     ],
     "vi": "Căn hộ ở München hầu như không còn trả nổi nữa.",
     "explain": "'bezahl-' + '-bar' = 'bezahlbar' (có thể chi trả được)."
    }
   ]
  },
  {
   "title": "Nghĩa chủ quan của động từ khuyết thiếu (subjektive Modalverben)",
   "intro": "Động từ khuyết thiếu còn dùng để thể hiện mức độ chắc chắn hoặc nguồn thông tin.\nmuss = chắc chắn (kết luận) | müsste = hẳn là (suy luận logic)\ndürfte = có lẽ, khá chắc | kann/könnte = có thể | mag = chắc khoảng\nsoll = nghe nói (người khác nói) | will = tự nhận (chủ ngữ tự khẳng định)\nVới quá khứ: Modalverb + Partizip II + haben/sein.",
   "questions": [
    {
     "q": "Er ___ sehr reich sein, aber ich glaube es nicht.",
     "hint": "(man sagt, dass er reich ist)",
     "answers": [
      "soll"
     ],
     "vi": "Nghe nói anh ta rất giàu, nhưng tôi không tin.",
     "explain": "'sollen' dùng khi truyền đạt thông tin nghe từ người khác."
    },
    {
     "q": "Sie ___ die Prüfung allein geschafft haben, aber das bezweifle ich.",
     "hint": "(sie selbst behauptet das)",
     "answers": [
      "will"
     ],
     "vi": "Cô ấy tự nhận là đã một mình vượt qua kỳ thi, nhưng tôi nghi ngờ điều đó.",
     "explain": "'wollen' diễn tả lời khẳng định của chính chủ ngữ mà người nói nghi ngờ."
    },
    {
     "q": "Das Licht brennt, er ___ zu Hause sein.",
     "hint": "(Schlussfolgerung, fast sicher, Indikativ)",
     "answers": [
      "muss"
     ],
     "vi": "Đèn đang sáng, chắc chắn anh ấy đang ở nhà.",
     "explain": "'müssen' ở thức chỉ định diễn tả kết luận gần như chắc chắn."
    },
    {
     "q": "Es ___ etwa 20 Uhr gewesen sein, als ich ihn sah.",
     "hint": "(wahrscheinlich, Konjunktiv II von dürfen)",
     "answers": [
      "dürfte"
     ],
     "vi": "Lúc tôi nhìn thấy anh ấy có lẽ là khoảng 20 giờ.",
     "explain": "'dürfte' diễn tả phỏng đoán có xác suất khá cao."
    },
    {
     "q": "Der Zug ___ eigentlich schon angekommen sein.",
     "hint": "(logische Erwartung, Konjunktiv II von müssen)",
     "answers": [
      "müsste"
     ],
     "vi": "Đáng lẽ tàu hẳn đã đến rồi.",
     "explain": "'müsste' diễn tả điều người nói kỳ vọng theo logic nhưng chưa chắc chắn."
    },
    {
     "q": "Das ___ stimmen, aber ich bin mir nicht sicher.",
     "hint": "(vielleicht, Konjunktiv II von können)",
     "answers": [
      "könnte"
     ],
     "vi": "Điều đó có thể đúng, nhưng tôi không chắc.",
     "explain": "'könnte' diễn tả một khả năng mang tính phỏng đoán thận trọng."
    },
    {
     "q": "Er ___ nicht der Täter sein, er war zur Tatzeit im Ausland.",
     "hint": "(Unmöglichkeit, Indikativ von können)",
     "answers": [
      "kann"
     ],
     "vi": "Anh ta không thể là thủ phạm, vào thời điểm gây án anh ta ở nước ngoài.",
     "explain": "'kann nicht' diễn tả sự không thể dựa trên bằng chứng."
    },
    {
     "q": "Der Minister ___ von dem Skandal gewusst haben.",
     "hint": "(Zeitungen berichten es)",
     "answers": [
      "soll"
     ],
     "vi": "Theo báo chí, ông bộ trưởng đã biết về vụ bê bối.",
     "explain": "'soll + Partizip II + haben' truyền đạt thông tin của người khác về quá khứ."
    },
    {
     "q": "Er ___ den Unfall nicht bemerkt haben.",
     "hint": "(er selbst behauptet das)",
     "answers": [
      "will"
     ],
     "vi": "Anh ta khẳng định là mình đã không nhận ra vụ tai nạn.",
     "explain": "'will' cho thấy đây là lời tự nhận của chủ ngữ."
    },
    {
     "q": "Sie ___ inzwischen in Berlin wohnen.",
     "hint": "(ziemlich wahrscheinlich, Konjunktiv II von dürfen)",
     "answers": [
      "dürfte"
     ],
     "vi": "Giờ chắc cô ấy đang sống ở Berlin.",
     "explain": "'dürfte' là phỏng đoán khá chắc chắn."
    },
    {
     "q": "Sie ___ etwa vierzig sein.",
     "hint": "(Schätzung, Indikativ von mögen)",
     "answers": [
      "mag"
     ],
     "vi": "Bà ấy chắc khoảng bốn mươi tuổi.",
     "explain": "'mag' ở nghĩa chủ quan dùng để ước đoán, thường đi với 'etwa'."
    },
    {
     "q": "Nach meiner Rechnung ___ das Paket morgen ankommen.",
     "hint": "(logische Erwartung, Konjunktiv II von müssen)",
     "answers": [
      "müsste"
     ],
     "vi": "Theo tính toán của tôi thì gói hàng hẳn sẽ đến vào ngày mai.",
     "explain": "'müsste' diễn tả kỳ vọng hợp lý dựa trên tính toán."
    }
   ]
  },
  {
   "title": "Cụm động từ chức năng (Funktionsverbgefüge)",
   "intro": "Funktionsverbgefüge là cụm gồm danh từ (thường kèm giới từ) và một động từ gần như mất nghĩa riêng. Cả cụm tương đương một động từ đơn và rất phổ biến trong văn trang trọng.\neine Entscheidung treffen = entscheiden\nin Betracht ziehen = berücksichtigen\nin Kraft treten = gültig werden\nzur Sprache bringen = ansprechen",
   "questions": [
    {
     "q": "Die Regierung hat eine wichtige Entscheidung ___.",
     "hint": "(entscheiden, Partizip II)",
     "answers": [
      "getroffen"
     ],
     "vi": "Chính phủ đã đưa ra một quyết định quan trọng.",
     "explain": "Cụm cố định là 'eine Entscheidung treffen', Partizip II là 'getroffen'."
    },
    {
     "q": "Das neue Verfahren wird im nächsten Jahr zur Anwendung ___.",
     "hint": "(angewendet werden, Infinitiv)",
     "answers": [
      "kommen"
     ],
     "vi": "Quy trình mới sẽ được áp dụng vào năm tới.",
     "explain": "'zur Anwendung kommen' mang nghĩa bị động 'được áp dụng'."
    },
    {
     "q": "Wir müssen die Kosten in Betracht ___.",
     "hint": "(berücksichtigen, Infinitiv)",
     "answers": [
      "ziehen"
     ],
     "vi": "Chúng ta phải tính đến chi phí.",
     "explain": "Cụm cố định là 'in Betracht ziehen'."
    },
    {
     "q": "Der Vorschlag ___ bei allen auf Kritik.",
     "hint": "(wurde kritisiert, Präteritum)",
     "answers": [
      "stieß"
     ],
     "vi": "Đề xuất này vấp phải sự chỉ trích của tất cả mọi người.",
     "explain": "'auf Kritik stoßen' ở Präteritum là 'stieß'."
    },
    {
     "q": "Die Opposition ___ scharfe Kritik an der Reform.",
     "hint": "(kritisieren, Präsens)",
     "answers": [
      "übt"
     ],
     "vi": "Phe đối lập chỉ trích gay gắt cuộc cải cách.",
     "explain": "Cụm cố định là 'Kritik an etwas üben'."
    },
    {
     "q": "Das Thema wurde in der Sitzung zur Sprache ___.",
     "hint": "(angesprochen, Partizip II)",
     "answers": [
      "gebracht"
     ],
     "vi": "Chủ đề này đã được nêu ra trong cuộc họp.",
     "explain": "'zur Sprache bringen' ở bị động: 'wurde zur Sprache gebracht'."
    },
    {
     "q": "Der Lehrer ___ großen Wert auf Pünktlichkeit.",
     "hint": "(wichtig finden, Präsens)",
     "answers": [
      "legt"
     ],
     "vi": "Thầy giáo rất coi trọng sự đúng giờ.",
     "explain": "Cụm cố định là 'Wert auf etwas legen'."
    },
    {
     "q": "Der Vertrag ___ morgen in Kraft.",
     "hint": "(gültig werden, Präsens)",
     "answers": [
      "tritt"
     ],
     "vi": "Hợp đồng có hiệu lực từ ngày mai.",
     "explain": "'in Kraft treten', ngôi thứ ba số ít là 'tritt'."
    },
    {
     "q": "Die Firma muss den Mitarbeitern Laptops zur Verfügung ___.",
     "hint": "(bereitstellen, Infinitiv)",
     "answers": [
      "stellen"
     ],
     "vi": "Công ty phải cung cấp máy tính xách tay cho nhân viên.",
     "explain": "Cụm cố định là 'zur Verfügung stellen'."
    },
    {
     "q": "Er ___ einen Antrag auf Elterngeld.",
     "hint": "(beantragen, Präteritum)",
     "answers": [
      "stellte"
     ],
     "vi": "Anh ấy đã nộp đơn xin trợ cấp nuôi con.",
     "explain": "'einen Antrag stellen' = 'beantragen'; Präteritum là 'stellte'."
    },
    {
     "q": "Die Polizei hat die Ermittlungen in Gang ___.",
     "hint": "(beginnen lassen, Partizip II)",
     "answers": [
      "gesetzt",
      "gebracht"
     ],
     "vi": "Cảnh sát đã khởi động cuộc điều tra.",
     "explain": "Cả 'in Gang setzen' và 'in Gang bringen' đều đúng, Partizip II là 'gesetzt'/'gebracht'."
    },
    {
     "q": "Der Dichter ___ nach seinem Tod schnell in Vergessenheit.",
     "hint": "(vergessen werden, Präteritum)",
     "answers": [
      "geriet"
     ],
     "vi": "Nhà thơ nhanh chóng bị lãng quên sau khi qua đời.",
     "explain": "'in Vergessenheit geraten' ở Präteritum là 'geriet'."
    }
   ]
  },
  {
   "title": "Liên từ và trạng từ liên kết (Konnektoren & Konjunktionaladverbien)",
   "intro": "Liên từ phụ thuộc (sofern, wohingegen, obgleich) đẩy động từ chia về cuối câu. Trạng từ liên kết (demzufolge, infolgedessen, indessen, dennoch) đứng ở vị trí 1 và động từ đứng ngay sau.\nsofern = nếu, với điều kiện | wohingegen = trong khi đó (đối lập)\ndemzufolge/infolgedessen = do đó | indessen = trong khi đó, tuy nhiên\nobgleich = mặc dù | es sei denn = trừ khi",
   "questions": [
    {
     "q": "Er ist sehr fleißig, ___ sein Bruder eher faul ist.",
     "hint": "(Gegensatz, Nebensatz: wohin...)",
     "answers": [
      "wohingegen"
     ],
     "vi": "Anh ấy rất chăm chỉ, trong khi em trai anh ấy lại khá lười.",
     "explain": "'wohingegen' nối hai vế đối lập, động từ 'ist' đứng cuối mệnh đề phụ."
    },
    {
     "q": "Die Nachfrage ist gestiegen, ___ steigen auch die Preise.",
     "hint": "(Folge, Konjunktionaladverb: demzu...)",
     "answers": [
      "demzufolge"
     ],
     "vi": "Nhu cầu đã tăng, do đó giá cả cũng tăng.",
     "explain": "'demzufolge' là trạng từ chỉ hệ quả, động từ đứng ngay sau nó."
    },
    {
     "q": "___ das Wetter es zulässt, findet das Fest im Freien statt.",
     "hint": "(Bedingung: vorausgesetzt, dass; so...)",
     "answers": [
      "Sofern"
     ],
     "vi": "Nếu thời tiết cho phép, lễ hội sẽ được tổ chức ngoài trời.",
     "explain": "'sofern' nêu điều kiện, động từ 'zulässt' đứng cuối mệnh đề."
    },
    {
     "q": "Er schlief, ___ arbeitete sie die ganze Nacht.",
     "hint": "(in der Zwischenzeit, gehoben: inde...)",
     "answers": [
      "indessen",
      "indes"
     ],
     "vi": "Anh ấy ngủ, trong khi đó cô ấy làm việc suốt đêm.",
     "explain": "'indessen' là trạng từ liên kết chỉ sự đồng thời, động từ đứng ngay sau."
    },
    {
     "q": "___ aller Bemühungen scheiterte das Projekt.",
     "hint": "(Präposition mit Genitiv: obwohl man sich bemühte)",
     "answers": [
      "Trotz"
     ],
     "vi": "Bất chấp mọi nỗ lực, dự án vẫn thất bại.",
     "explain": "'trotz' là giới từ nhượng bộ đi với sinh cách 'aller Bemühungen'."
    },
    {
     "q": "Er hat zwar viel gelernt, ___ hat er die Prüfung nicht bestanden.",
     "hint": "(Gegensatz zu 'zwar', Konjunktionaladverb)",
     "answers": [
      "dennoch",
      "trotzdem",
      "jedoch"
     ],
     "vi": "Tuy anh ấy đã học rất nhiều, nhưng vẫn không đỗ kỳ thi.",
     "explain": "Ở vị trí 1 với động từ đứng ngay sau cần trạng từ như 'dennoch'; 'aber' không đảo ngữ."
    },
    {
     "q": "___ ich weiß, ist die Sitzung abgesagt.",
     "hint": "(Einschränkung: nach meinem Wissen)",
     "answers": [
      "Soweit",
      "Soviel"
     ],
     "vi": "Theo như tôi biết, cuộc họp đã bị hủy.",
     "explain": "'Soweit/Soviel ich weiß' giới hạn phát ngôn vào hiểu biết của người nói."
    },
    {
     "q": "Je länger die Diskussion dauerte, ___ unklarer wurde die Lage.",
     "hint": "(zweiteiliger Konnektor: je ... ?)",
     "answers": [
      "desto",
      "umso"
     ],
     "vi": "Cuộc thảo luận càng kéo dài thì tình hình càng không rõ ràng.",
     "explain": "Cấu trúc 'je + so sánh hơn ..., desto/umso + so sánh hơn'."
    },
    {
     "q": "Er bestand die Prüfung, ___ er kaum gelernt hatte.",
     "hint": "(Konzession, gehoben: obgl...)",
     "answers": [
      "obgleich"
     ],
     "vi": "Anh ấy đỗ kỳ thi mặc dù hầu như không học.",
     "explain": "'obgleich' là liên từ nhượng bộ trang trọng, đồng nghĩa 'obwohl'."
    },
    {
     "q": "Der Termin wurde verschoben; ___ müssen wir neu planen.",
     "hint": "(Folge: infolge...)",
     "answers": [
      "infolgedessen"
     ],
     "vi": "Cuộc hẹn đã bị dời lại; vì thế chúng ta phải lên kế hoạch lại.",
     "explain": "'infolgedessen' là trạng từ chỉ hệ quả, động từ 'müssen' đứng ngay sau."
    },
    {
     "q": "Weder der Chef ___ die Mitarbeiter waren informiert.",
     "hint": "(zweiteiliger Konnektor: weder ... ?)",
     "answers": [
      "noch"
     ],
     "vi": "Cả sếp lẫn nhân viên đều không được thông báo.",
     "explain": "Cấu trúc phủ định kép cố định là 'weder ... noch'."
    },
    {
     "q": "Wir fahren morgen los, ___ es regnet.",
     "hint": "(außer wenn; drei Wörter)",
     "answers": [
      "es sei denn"
     ],
     "vi": "Chúng ta sẽ khởi hành vào ngày mai, trừ khi trời mưa.",
     "explain": "'es sei denn' nghĩa là 'trừ khi', mệnh đề sau giữ trật tự câu chính hoặc dùng 'dass'."
    }
   ]
  }
 ],
 "C2": [
  {
   "title": "Thể giả định I trong bản án và văn bản luật (Konjunktiv I)",
   "intro": "Trong bản án (phần Tatbestand), lời khai và lập luận của các bên luôn được thuật lại bằng Konjunktiv I để giữ khoảng cách trung lập.\nCách tạo: gốc động từ + đuôi -e: er habe, sie sei, er könne, er kenne.\nNếu Konjunktiv I trùng với Indikativ (thường ở ngôi số nhiều: sie haben), phải dùng Konjunktiv II thay thế: sie hätten.\nTrong văn bản luật, Konjunktiv I còn diễn đạt yêu cầu/quy định: Es sei darauf hingewiesen, dass ...\nBảng: haben → habe | sein → sei (Pl. seien) | können → könne | stehen → stehe",
   "questions": [
    {
     "q": "Der Kläger trägt vor, er ___ den Vertrag nie unterschrieben.",
     "hint": "(haben, Konj. I)",
     "answers": [
      "habe"
     ],
     "vi": "Nguyên đơn trình bày rằng ông ấy chưa bao giờ ký hợp đồng.",
     "explain": "Lời trình bày của đương sự được thuật lại bằng Konjunktiv I: er habe."
    },
    {
     "q": "Die Beklagte behauptet, die Ware ___ mangelfrei gewesen.",
     "hint": "(sein, Konj. I)",
     "answers": [
      "sei"
     ],
     "vi": "Bị đơn khẳng định rằng hàng hóa không có khuyết tật.",
     "explain": "Konjunktiv I của sein ở ngôi thứ ba số ít là sei."
    },
    {
     "q": "Der Zeuge sagte aus, er ___ den Unfall nicht gesehen.",
     "hint": "(haben, Konj. I)",
     "answers": [
      "habe"
     ],
     "vi": "Nhân chứng khai rằng anh ta không nhìn thấy vụ tai nạn.",
     "explain": "Lời khai được tường thuật gián tiếp nên dùng habe."
    },
    {
     "q": "Das Finanzamt ist der Ansicht, die Aufwendungen ___ nicht als Werbungskosten abziehbar.",
     "hint": "(sein, Konj. I, Plural)",
     "answers": [
      "seien"
     ],
     "vi": "Cơ quan thuế cho rằng các khoản chi phí này không được khấu trừ như chi phí tạo thu nhập.",
     "explain": "Chủ ngữ số nhiều die Aufwendungen nên Konjunktiv I là seien."
    },
    {
     "q": "Der Steuerpflichtige macht geltend, er ___ im Streitjahr keine Einkünfte erzielt.",
     "hint": "(haben, Konj. I)",
     "answers": [
      "habe"
     ],
     "vi": "Người nộp thuế viện dẫn rằng anh ta không có thu nhập trong năm tính thuế đang tranh chấp.",
     "explain": "Lập luận của bên đương sự được thuật lại bằng Konjunktiv I."
    },
    {
     "q": "Es ___ darauf hingewiesen, dass die Frist am 30. Juni abläuft.",
     "hint": "(sein, Konj. I als Aufforderung)",
     "answers": [
      "sei"
     ],
     "vi": "Xin lưu ý rằng thời hạn kết thúc vào ngày 30 tháng 6.",
     "explain": "Es sei + Partizip II là công thức yêu cầu trang trọng trong văn bản pháp lý."
    },
    {
     "q": "Der Angeklagte erklärte, er ___ sich an nichts erinnern.",
     "hint": "(können, Konj. I)",
     "answers": [
      "könne"
     ],
     "vi": "Bị cáo khai rằng anh ta không thể nhớ được gì.",
     "explain": "Konjunktiv I của können ở ngôi thứ ba số ít là könne."
    },
    {
     "q": "Die Klägerin führt aus, sie ___ von der Kündigung erst im Mai erfahren.",
     "hint": "(haben, Konj. I)",
     "answers": [
      "habe"
     ],
     "vi": "Nguyên đơn trình bày rằng bà ấy chỉ biết về việc chấm dứt hợp đồng vào tháng Năm.",
     "explain": "Ausführen dẫn lời gián tiếp nên dùng sie habe."
    },
    {
     "q": "Die Behörde teilte mit, der Antrag ___ unvollständig.",
     "hint": "(sein, Konj. I)",
     "answers": [
      "sei"
     ],
     "vi": "Cơ quan hành chính thông báo rằng đơn đề nghị chưa đầy đủ.",
     "explain": "Thông báo của cơ quan được thuật lại bằng sei."
    },
    {
     "q": "Die Kläger tragen vor, sie ___ seit zehn Jahren in dem Haus gewohnt.",
     "hint": "(haben, Ersatzform Konj. II)",
     "answers": [
      "hätten"
     ],
     "vi": "Các nguyên đơn trình bày rằng họ đã sống trong ngôi nhà đó mười năm.",
     "explain": "Sie haben trùng với Indikativ nên phải thay bằng Konjunktiv II hätten."
    },
    {
     "q": "Der Zeuge gab an, er ___ den Beklagten seit Jahren.",
     "hint": "(kennen, Konj. I)",
     "answers": [
      "kenne"
     ],
     "vi": "Nhân chứng khai rằng anh ta quen biết bị đơn đã nhiều năm.",
     "explain": "Konjunktiv I của kennen ở ngôi thứ ba số ít là kenne."
    },
    {
     "q": "Die Klägerin meint, ihr ___ ein Anspruch auf Schadensersatz zu.",
     "hint": "(zustehen, Konj. I)",
     "answers": [
      "stehe"
     ],
     "vi": "Nguyên đơn cho rằng bà ấy có quyền yêu cầu bồi thường thiệt hại.",
     "explain": "Zustehen là động từ tách, phần chia ở Konjunktiv I là stehe."
    }
   ]
  },
  {
   "title": "Bị động và các dạng thay thế bị động trong văn bản luật (Passiv & Passiversatz)",
   "intro": "Văn bản pháp luật ưu tiên cấu trúc khách quan, không nêu chủ thể hành động.\nNgoài werden + Partizip II còn có các dạng thay thế:\nsein + zu + Infinitiv (phải/có thể được làm): Der Bescheid ist anzufechten.\nbedürfen + Genitiv (cần có): bedarf der Schriftform.\ngelten als (được coi là – hư cấu pháp lý): gilt als zugegangen.\nsich lassen + Infinitiv, tính từ -bar: lässt sich klären, beweisbar.",
   "questions": [
    {
     "q": "Der Bescheid ___ innerhalb eines Monats anzufechten.",
     "hint": "(sein + zu, Präsens)",
     "answers": [
      "ist"
     ],
     "vi": "Quyết định hành chính phải được khiếu nại trong vòng một tháng.",
     "explain": "Cấu trúc sein + zu + Infinitiv thay cho bị động với muss."
    },
    {
     "q": "Der Grundstückskaufvertrag bedarf der notariellen ___.",
     "hint": "(Nomen: beurkunden)",
     "answers": [
      "Beurkundung"
     ],
     "vi": "Hợp đồng mua bán bất động sản cần được công chứng.",
     "explain": "Bedürfen đi với Genitiv; danh từ của beurkunden là Beurkundung."
    },
    {
     "q": "Die Willenserklärung ___ als zugegangen, sobald sie in den Briefkasten gelangt.",
     "hint": "(gelten, Präsens)",
     "answers": [
      "gilt"
     ],
     "vi": "Tuyên bố ý chí được coi là đã đến khi nó được bỏ vào hộp thư.",
     "explain": "Gelten als diễn đạt hư cấu pháp lý; ngôi thứ ba số ít là gilt."
    },
    {
     "q": "Die Klage ___ als unzulässig abgewiesen.",
     "hint": "(werden, Präteritum)",
     "answers": [
      "wurde"
     ],
     "vi": "Đơn kiện đã bị bác vì không hợp lệ.",
     "explain": "Bị động quá khứ: wurde + Partizip II."
    },
    {
     "q": "Der Einspruch ___ fristgerecht eingelegt worden.",
     "hint": "(sein, Perfekt Passiv)",
     "answers": [
      "ist"
     ],
     "vi": "Khiếu nại đã được nộp đúng thời hạn.",
     "explain": "Perfekt Passiv: sein + Partizip II + worden."
    },
    {
     "q": "Diese Rechtsfrage lässt ___ nicht abschließend klären.",
     "hint": "(Reflexivpronomen)",
     "answers": [
      "sich"
     ],
     "vi": "Vấn đề pháp lý này không thể được làm rõ một cách dứt khoát.",
     "explain": "Sich lassen + Infinitiv là dạng thay thế bị động với nghĩa có thể."
    },
    {
     "q": "Die Einkünfte sind dem Ehemann ___.",
     "hint": "(zurechnen, zu-Infinitiv)",
     "answers": [
      "zuzurechnen"
     ],
     "vi": "Các khoản thu nhập phải được tính cho người chồng.",
     "explain": "Động từ tách zurechnen: zu chen giữa thành zuzurechnen."
    },
    {
     "q": "Die Behauptung des Klägers ist nicht ___.",
     "hint": "(beweisen, Adjektiv auf -bar)",
     "answers": [
      "beweisbar"
     ],
     "vi": "Khẳng định của nguyên đơn không thể chứng minh được.",
     "explain": "Hậu tố -bar mang nghĩa bị động có thể được."
    },
    {
     "q": "Die Kündigung ___ der Zustimmung des Betriebsrats.",
     "hint": "(bedürfen, Präsens)",
     "answers": [
      "bedarf"
     ],
     "vi": "Việc chấm dứt hợp đồng lao động cần có sự đồng ý của hội đồng người lao động.",
     "explain": "Bedürfen chia ngôi thứ ba số ít là bedarf, đi với Genitiv."
    },
    {
     "q": "Gegen den Bescheid kann Einspruch eingelegt ___.",
     "hint": "(Passiv mit Modalverb)",
     "answers": [
      "werden"
     ],
     "vi": "Có thể nộp khiếu nại đối với quyết định này.",
     "explain": "Modalverb + Partizip II + werden tạo bị động."
    },
    {
     "q": "Bei Schweigen des Käufers gilt der Vertrag als nicht ___.",
     "hint": "(schließen, Partizip II)",
     "answers": [
      "geschlossen"
     ],
     "vi": "Nếu người mua im lặng, hợp đồng được coi là chưa được giao kết.",
     "explain": "Gelten als + Partizip II; Partizip II của schließen là geschlossen."
    },
    {
     "q": "Es ___ festgestellt, dass der Bescheid rechtswidrig war.",
     "hint": "(werden, Präsens Passiv)",
     "answers": [
      "wird"
     ],
     "vi": "Xác nhận rằng quyết định hành chính là trái pháp luật.",
     "explain": "Bị động không chủ ngữ với es: es wird + Partizip II."
    }
   ]
  },
  {
   "title": "Cụm danh từ phức và chuỗi sở hữu cách (Nominalstil & Genitivketten)",
   "intro": "Văn phong pháp lý chuyển động từ thành danh từ (kündigen → die Kündigung, ablaufen → der Ablauf).\nCác danh từ được nối với nhau bằng chuỗi Genitiv: die Prüfung der Zulässigkeit der Klage.\nDanh từ giống đực/trung ở Genitiv thêm -s/-es: des Gesetzes, des Mieters.\nTính từ và phân từ đứng trước danh từ làm định ngữ mở rộng: des mündlich geschlossenen Vertrags.",
   "questions": [
    {
     "q": "Das Gericht prüft die Rechtmäßigkeit ___ Bescheids.",
     "hint": "(bestimmter Artikel, Genitiv)",
     "answers": [
      "des"
     ],
     "vi": "Tòa án xem xét tính hợp pháp của quyết định hành chính.",
     "explain": "Der Bescheid là giống đực, Genitiv là des Bescheids."
    },
    {
     "q": "Zunächst ist die Zulässigkeit ___ Klage zu prüfen.",
     "hint": "(bestimmter Artikel, Genitiv)",
     "answers": [
      "der"
     ],
     "vi": "Trước tiên phải xem xét tính hợp lệ của đơn kiện.",
     "explain": "Die Klage là giống cái, Genitiv là der Klage."
    },
    {
     "q": "Ein Gutachten dient der Feststellung des ___.",
     "hint": "(Sachverhalt, Genitiv)",
     "answers": [
      "Sachverhalts",
      "Sachverhaltes"
     ],
     "vi": "Một bản giám định phục vụ việc xác định tình tiết vụ việc.",
     "explain": "Danh từ giống đực ở Genitiv thêm -s hoặc -es."
    },
    {
     "q": "Maßgeblich ist die Höhe des zu versteuernden ___.",
     "hint": "(Einkommen, Genitiv)",
     "answers": [
      "Einkommens"
     ],
     "vi": "Điều quyết định là mức thu nhập chịu thuế.",
     "explain": "Das Einkommen là giống trung, Genitiv thêm -s."
    },
    {
     "q": "Streitig ist die Auslegung des ___.",
     "hint": "(Gesetz, Genitiv)",
     "answers": [
      "Gesetzes"
     ],
     "vi": "Vấn đề tranh chấp là việc giải thích đạo luật.",
     "explain": "Danh từ tận cùng bằng -z thêm -es ở Genitiv."
    },
    {
     "q": "Nach ___ der Frist ist der Einspruch unzulässig.",
     "hint": "(ablaufen → Nomen)",
     "answers": [
      "Ablauf"
     ],
     "vi": "Sau khi hết thời hạn, khiếu nại không còn hợp lệ.",
     "explain": "Danh từ hóa của ablaufen là der Ablauf."
    },
    {
     "q": "Die ___ des Mietvertrags erfolgte am 1. März.",
     "hint": "(kündigen → Nomen)",
     "answers": [
      "Kündigung"
     ],
     "vi": "Việc chấm dứt hợp đồng thuê nhà được thực hiện vào ngày 1 tháng 3.",
     "explain": "Danh từ hóa của kündigen là die Kündigung."
    },
    {
     "q": "Fraglich ist die Haftung des ___ für die Schäden.",
     "hint": "(Mieter, Genitiv)",
     "answers": [
      "Mieters"
     ],
     "vi": "Vấn đề đặt ra là trách nhiệm của người thuê đối với các thiệt hại.",
     "explain": "Der Mieter ở Genitiv thêm -s."
    },
    {
     "q": "Das Gesetz schützt die Rechte eines ___ Dritten.",
     "hint": "(gutgläubig, Adjektiv)",
     "answers": [
      "gutgläubigen"
     ],
     "vi": "Luật bảo vệ quyền của bên thứ ba ngay tình.",
     "explain": "Tính từ sau eines ở Genitiv có đuôi -en."
    },
    {
     "q": "Der Kläger verlangt die Erstattung der zu viel ___ Steuern.",
     "hint": "(zahlen, Partizip II als Adjektiv)",
     "answers": [
      "gezahlten"
     ],
     "vi": "Nguyên đơn yêu cầu hoàn lại số thuế đã nộp thừa.",
     "explain": "Partizip II làm tính từ sau der (Genitiv số nhiều) có đuôi -en."
    },
    {
     "q": "Bei ___ des Antrags ist das amtliche Formular zu verwenden.",
     "hint": "(einen Antrag stellen → Nomen)",
     "answers": [
      "Stellung"
     ],
     "vi": "Khi nộp đơn đề nghị phải sử dụng mẫu đơn chính thức.",
     "explain": "Danh từ hóa của stellen trong einen Antrag stellen là die Stellung."
    },
    {
     "q": "Zweifelhaft ist die Wirksamkeit des nur mündlich ___ Vertrags.",
     "hint": "(schließen, Partizip II als Adjektiv)",
     "answers": [
      "geschlossenen"
     ],
     "vi": "Hiệu lực của hợp đồng chỉ được giao kết bằng miệng là đáng ngờ.",
     "explain": "Phân từ làm định ngữ sau des có đuôi -en."
    }
   ]
  },
  {
   "title": "Giới từ văn phong hành chính đi với Genitiv (Präpositionen der Amtssprache)",
   "intro": "Văn bản pháp lý dùng nhiều giới từ trang trọng đi với Genitiv.\naufgrund (do) | infolge (do hậu quả của) | mangels (do thiếu) | zwecks (nhằm mục đích) | ungeachtet (bất chấp) | unbeschadet (không ảnh hưởng đến) | hinsichtlich (về việc) | seitens (từ phía) | innerhalb (trong vòng)\nLưu ý: gemäß và nach Maßgabe dùng để dẫn chiếu quy định; gemäß đi với Dativ.\nMangels và zwecks thường đứng trước danh từ không có mạo từ.",
   "questions": [
    {
     "q": "___ ausreichender Beweise wurde der Angeklagte freigesprochen.",
     "hint": "(wegen des Fehlens, beginnt mit m)",
     "answers": [
      "Mangels"
     ],
     "vi": "Do thiếu chứng cứ đầy đủ, bị cáo được tuyên vô tội.",
     "explain": "Mangels + Genitiv nghĩa là do thiếu."
    },
    {
     "q": "___ § 38 AO entsteht der Steueranspruch mit Verwirklichung des Tatbestands.",
     "hint": "(entsprechend, beginnt mit g)",
     "answers": [
      "Gemäß"
     ],
     "vi": "Theo § 38 Luật Quản lý thuế, nghĩa vụ thuế phát sinh khi cấu thành được thực hiện.",
     "explain": "Gemäß dùng để dẫn chiếu điều luật."
    },
    {
     "q": "___ Klärung des Sachverhalts wurde ein Gutachten eingeholt.",
     "hint": "(zum Zweck, beginnt mit z)",
     "answers": [
      "Zwecks"
     ],
     "vi": "Nhằm làm rõ tình tiết vụ việc, một bản giám định đã được trưng cầu.",
     "explain": "Zwecks + Genitiv nghĩa là nhằm mục đích."
    },
    {
     "q": "___ der Einwände des Klägers hielt das Gericht an seiner Auffassung fest.",
     "hint": "(trotz, gehoben, beginnt mit u)",
     "answers": [
      "Ungeachtet"
     ],
     "vi": "Bất chấp các phản đối của nguyên đơn, tòa án vẫn giữ quan điểm của mình.",
     "explain": "Ungeachtet là dạng trang trọng của trotz."
    },
    {
     "q": "Die Kündigung erfolgt ___ weiterer Ansprüche auf Schadensersatz.",
     "hint": "(ohne Beeinträchtigung von, beginnt mit u)",
     "answers": [
      "unbeschadet"
     ],
     "vi": "Việc chấm dứt hợp đồng không ảnh hưởng đến các yêu cầu bồi thường thiệt hại khác.",
     "explain": "Unbeschadet + Genitiv nghĩa là không làm ảnh hưởng đến."
    },
    {
     "q": "___ der neuen Rechtslage ist der Bescheid aufzuheben.",
     "hint": "(wegen, beginnt mit a)",
     "answers": [
      "Aufgrund",
      "Auf Grund"
     ],
     "vi": "Do tình trạng pháp lý mới, quyết định hành chính phải bị hủy bỏ.",
     "explain": "Aufgrund + Genitiv nêu căn cứ hoặc nguyên nhân."
    },
    {
     "q": "Der Einspruch ist ___ eines Monats nach Bekanntgabe einzulegen.",
     "hint": "(zeitlich: im Zeitraum von, beginnt mit i)",
     "answers": [
      "innerhalb"
     ],
     "vi": "Khiếu nại phải được nộp trong vòng một tháng kể từ ngày thông báo.",
     "explain": "Innerhalb + Genitiv chỉ khoảng thời gian."
    },
    {
     "q": "___ des Finanzamts bestehen keine Bedenken.",
     "hint": "(von Seiten, beginnt mit s)",
     "answers": [
      "Seitens"
     ],
     "vi": "Về phía cơ quan thuế không có trở ngại nào.",
     "explain": "Seitens + Genitiv nghĩa là từ phía."
    },
    {
     "q": "Die Erstattung erfolgt nach ___ der gesetzlichen Vorschriften.",
     "hint": "(Nomen: entsprechend dem Maß)",
     "answers": [
      "Maßgabe"
     ],
     "vi": "Việc hoàn trả được thực hiện theo các quy định của pháp luật.",
     "explain": "Nach Maßgabe + Genitiv nghĩa là theo quy định của."
    },
    {
     "q": "Im ___ der Betriebsprüfung wurden Mängel in der Buchführung festgestellt.",
     "hint": "(Nomen: im Zuge)",
     "answers": [
      "Rahmen"
     ],
     "vi": "Trong quá trình thanh tra thuế doanh nghiệp, các sai sót trong sổ sách kế toán đã được phát hiện.",
     "explain": "Im Rahmen + Genitiv nghĩa là trong khuôn khổ."
    },
    {
     "q": "___ der Höhe des Schadens bestehen erhebliche Zweifel.",
     "hint": "(in Bezug auf, beginnt mit h)",
     "answers": [
      "Hinsichtlich"
     ],
     "vi": "Về mức độ thiệt hại có những nghi ngờ đáng kể.",
     "explain": "Hinsichtlich + Genitiv nghĩa là liên quan đến."
    },
    {
     "q": "___ der Insolvenz des Schuldners fiel die Forderung aus.",
     "hint": "(als Folge von, beginnt mit i)",
     "answers": [
      "Infolge"
     ],
     "vi": "Do con nợ mất khả năng thanh toán, khoản nợ không được thu hồi.",
     "explain": "Infolge + Genitiv nêu hậu quả của một sự việc."
    }
   ]
  },
  {
   "title": "Câu điều kiện không liên từ và với sofern/soweit (Konditionalsätze)",
   "intro": "Văn bản luật thường bỏ wenn và đưa động từ lên đầu câu: Leistet der Schuldner nicht, so gerät er in Verzug.\nMệnh đề chính thường bắt đầu bằng so hoặc dann.\nsofern = với điều kiện là | soweit = trong phạm vi mà (thường giới hạn mức độ).\nĐiều kiện không thực: Hätte/Wäre + Partizip II ...; khả năng: Sollte sich herausstellen, ...\nDanh từ hóa: im Fall(e) der Kündigung = falls gekündigt wird.",
   "questions": [
    {
     "q": "___ der Schuldner nicht rechtzeitig, so gerät er in Verzug.",
     "hint": "(leisten, Verb an erster Stelle)",
     "answers": [
      "Leistet"
     ],
     "vi": "Nếu con nợ không thực hiện nghĩa vụ đúng hạn thì sẽ bị coi là chậm thực hiện.",
     "explain": "Bỏ wenn và đưa động từ chia lên đầu câu."
    },
    {
     "q": "___ die Frist ohne Verschulden versäumt worden, ist Wiedereinsetzung zu gewähren.",
     "hint": "(sein, Verb an erster Stelle)",
     "answers": [
      "Ist"
     ],
     "vi": "Nếu thời hạn bị lỡ mà không có lỗi thì phải cho phép khôi phục thời hạn.",
     "explain": "Perfekt Passiv dùng sein; trợ động từ đứng đầu câu."
    },
    {
     "q": "Der Vertrag ist wirksam, ___ keine Formvorschrift entgegensteht.",
     "hint": "(unter der Bedingung, dass; beginnt mit s)",
     "answers": [
      "sofern"
     ],
     "vi": "Hợp đồng có hiệu lực với điều kiện là không có quy định về hình thức nào cản trở.",
     "explain": "Sofern nêu điều kiện."
    },
    {
     "q": "Die Aufwendungen sind abziehbar, ___ sie beruflich veranlasst sind.",
     "hint": "(in dem Umfang, wie; beginnt mit s)",
     "answers": [
      "soweit"
     ],
     "vi": "Các chi phí được khấu trừ trong phạm vi chúng phát sinh do nghề nghiệp.",
     "explain": "Soweit giới hạn phạm vi áp dụng."
    },
    {
     "q": "___ der Kläger früher Einspruch eingelegt, wäre die Frist gewahrt gewesen.",
     "hint": "(haben, Konj. II)",
     "answers": [
      "Hätte"
     ],
     "vi": "Nếu nguyên đơn nộp khiếu nại sớm hơn thì thời hạn đã được đảm bảo.",
     "explain": "Điều kiện không thực ở quá khứ: Hätte đứng đầu câu."
    },
    {
     "q": "___ sich herausstellen, dass die Angaben falsch sind, wird der Bescheid geändert.",
     "hint": "(sollen, Konj. II)",
     "answers": [
      "Sollte"
     ],
     "vi": "Nếu hóa ra các thông tin khai báo là sai, quyết định sẽ được sửa đổi.",
     "explain": "Sollte đầu câu diễn đạt khả năng có thể xảy ra."
    },
    {
     "q": "___ nichts anderes vereinbart ist, gilt deutsches Recht.",
     "hint": "(Konjunktion, beginnt mit s)",
     "answers": [
      "Soweit",
      "Sofern"
     ],
     "vi": "Trừ khi có thỏa thuận khác, áp dụng pháp luật Đức.",
     "explain": "Soweit hoặc sofern đều dùng được trong điều khoản hợp đồng này."
    },
    {
     "q": "Wird der Antrag abgelehnt, ___ kann Widerspruch erhoben werden.",
     "hint": "(Korrelat im Hauptsatz, zwei Buchstaben)",
     "answers": [
      "so"
     ],
     "vi": "Nếu đơn đề nghị bị từ chối thì có thể khiếu nại.",
     "explain": "So mở đầu mệnh đề chính sau câu điều kiện không liên từ."
    },
    {
     "q": "___ der Steuerpflichtige den Termin nicht wahr, werden die Besteuerungsgrundlagen geschätzt.",
     "hint": "(wahrnehmen, Verb an erster Stelle)",
     "answers": [
      "Nimmt"
     ],
     "vi": "Nếu người nộp thuế không đến buổi hẹn, cơ sở tính thuế sẽ được ấn định ước tính.",
     "explain": "Động từ tách wahrnehmen: phần chia nimmt lên đầu câu."
    },
    {
     "q": "Die Klage ist abzuweisen, ___ sie unbegründet ist.",
     "hint": "(in dem Umfang, wie; beginnt mit s)",
     "answers": [
      "soweit"
     ],
     "vi": "Đơn kiện phải bị bác trong phạm vi không có căn cứ.",
     "explain": "Soweit chỉ phạm vi một phần của đơn kiện."
    },
    {
     "q": "Im ___ der Kündigung ist die Kaution zurückzuzahlen.",
     "hint": "(Nomen: falls)",
     "answers": [
      "Fall",
      "Falle"
     ],
     "vi": "Trong trường hợp chấm dứt hợp đồng, tiền đặt cọc phải được hoàn trả.",
     "explain": "Im Fall(e) + Genitiv thay cho câu điều kiện."
    },
    {
     "q": "___ der Bescheid rechtzeitig zugegangen, hätte die Frist früher begonnen.",
     "hint": "(sein, Konj. II)",
     "answers": [
      "Wäre"
     ],
     "vi": "Nếu quyết định được gửi đến kịp thời thì thời hạn đã bắt đầu sớm hơn.",
     "explain": "Zugehen chia Perfekt với sein nên dùng Wäre."
    }
   ]
  },
  {
   "title": "Cấu trúc phân từ và cụm động từ chức năng (Partizipialkonstruktionen & Funktionsverbgefüge)",
   "intro": "Phân từ làm định ngữ thay cho mệnh đề quan hệ: der vom Finanzamt erlassene Bescheid.\nZu-Partizip (zu + Partizip I) mang nghĩa bị động cần phải: die einzureichende Erklärung.\nFunktionsverbgefüge = danh từ + động từ chức năng, rất phổ biến trong luật:\nin Kraft treten | Anwendung finden | in Betracht kommen | Stellung nehmen | Gebrauch machen | in Erwägung ziehen | außer Acht lassen",
   "questions": [
    {
     "q": "Der vom Finanzamt ___ Bescheid ist rechtswidrig.",
     "hint": "(erlassen, Partizip II als Adjektiv)",
     "answers": [
      "erlassene"
     ],
     "vi": "Quyết định do cơ quan thuế ban hành là trái pháp luật.",
     "explain": "Phân từ sau der (Nominativ) có đuôi -e."
    },
    {
     "q": "Die bis zum 31. Juli ___ Steuererklärung liegt noch nicht vor.",
     "hint": "(einreichen, zu-Partizip)",
     "answers": [
      "einzureichende"
     ],
     "vi": "Tờ khai thuế phải nộp trước ngày 31 tháng 7 vẫn chưa được nộp.",
     "explain": "Zu-Partizip: einzureichend + đuôi -e, nghĩa là phải được nộp."
    },
    {
     "q": "Das Gericht hat einen Vergleich in ___ gezogen.",
     "hint": "(Nomen: erwägen)",
     "answers": [
      "Erwägung"
     ],
     "vi": "Tòa án đã cân nhắc khả năng hòa giải.",
     "explain": "In Erwägung ziehen nghĩa là cân nhắc."
    },
    {
     "q": "Der Kläger hat gegen das Urteil Berufung ___.",
     "hint": "(einlegen, Partizip II)",
     "answers": [
      "eingelegt"
     ],
     "vi": "Nguyên đơn đã kháng cáo bản án.",
     "explain": "Berufung einlegen là cụm cố định; Partizip II là eingelegt."
    },
    {
     "q": "Das Gesetz tritt am 1. Januar in ___.",
     "hint": "(Nomen: Geltung)",
     "answers": [
      "Kraft"
     ],
     "vi": "Đạo luật có hiệu lực từ ngày 1 tháng 1.",
     "explain": "In Kraft treten nghĩa là có hiệu lực."
    },
    {
     "q": "Die Vorschrift findet auf diesen Fall keine ___.",
     "hint": "(Nomen: anwenden)",
     "answers": [
      "Anwendung"
     ],
     "vi": "Quy định này không được áp dụng cho trường hợp này.",
     "explain": "Anwendung finden nghĩa là được áp dụng."
    },
    {
     "q": "Der Beklagte hat zu den Vorwürfen ___ genommen.",
     "hint": "(Nomen: sich äußern)",
     "answers": [
      "Stellung"
     ],
     "vi": "Bị đơn đã trình bày ý kiến về các cáo buộc.",
     "explain": "Stellung nehmen nghĩa là bày tỏ quan điểm."
    },
    {
     "q": "Der Verbraucher hat von seinem Widerrufsrecht Gebrauch ___.",
     "hint": "(machen, Partizip II)",
     "answers": [
      "gemacht"
     ],
     "vi": "Người tiêu dùng đã thực hiện quyền hủy hợp đồng của mình.",
     "explain": "Gebrauch machen von nghĩa là sử dụng quyền."
    },
    {
     "q": "Eine Änderung des Bescheids kommt nicht in ___.",
     "hint": "(Nomen: in Frage)",
     "answers": [
      "Betracht"
     ],
     "vi": "Việc sửa đổi quyết định không được xem xét đến.",
     "explain": "In Betracht kommen nghĩa là có thể được xem xét."
    },
    {
     "q": "Die dem Kläger ___ Kosten sind zu erstatten.",
     "hint": "(entstehen, Partizip II als Adjektiv)",
     "answers": [
      "entstandenen"
     ],
     "vi": "Các chi phí phát sinh cho nguyên đơn phải được hoàn trả.",
     "explain": "Phân từ sau die (số nhiều) có đuôi -en."
    },
    {
     "q": "Der Steuerpflichtige hat die Frist außer ___ gelassen.",
     "hint": "(Nomen: Aufmerksamkeit)",
     "answers": [
      "Acht"
     ],
     "vi": "Người nộp thuế đã không chú ý đến thời hạn.",
     "explain": "Außer Acht lassen nghĩa là bỏ qua, không lưu ý."
    },
    {
     "q": "Der Gläubiger kann die noch nicht ___ Forderung geltend machen.",
     "hint": "(verjähren, Partizip II als Adjektiv)",
     "answers": [
      "verjährte"
     ],
     "vi": "Chủ nợ có thể yêu cầu khoản nợ chưa hết thời hiệu.",
     "explain": "Phân từ sau die (Akkusativ số ít giống cái) có đuôi -e."
    }
   ]
  }
 ]
};
