// Trắc nghiệm ngữ pháp A1–C2: mỗi chủ đề có lý thuyết + 15 câu 4 lựa chọn
const MCQ = {
 "A1": [
  {
   "title": "Đại từ nhân xưng & động từ sein/haben (Personalpronomen, sein, haben)",
   "intro": "Đại từ nhân xưng: ich (tôi), du (bạn), er (anh ấy), sie (cô ấy), es (nó), wir (chúng tôi), ihr (các bạn), sie (họ), Sie (ông/bà – lịch sự).\nsein (là, ở): ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.\nhaben (có): ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.\nsein dùng cho tên, nghề nghiệp, nguồn gốc, tính chất và tuổi: Ich bin 20 Jahre alt (không nói 'Ich habe 20 Jahre'). haben dùng cho sở hữu và trong cụm như Hunger haben, Zeit haben.\nKhi thay danh từ bằng đại từ, chọn theo giống của danh từ: der Tisch → er, die Lampe → sie, das Kind → es.",
   "questions": [
    {
     "q": "Ich ___ Student.",
     "options": [
      "bin",
      "bist",
      "ist",
      "sind"
     ],
     "answer": 0,
     "vi": "Tôi là sinh viên.",
     "explain": "Với ich, sein chia là 'bin'. 'bist' chỉ dùng cho du."
    },
    {
     "q": "Du ___ aus Vietnam.",
     "options": [
      "bin",
      "bist",
      "seid",
      "sind"
     ],
     "answer": 1,
     "vi": "Bạn đến từ Việt Nam.",
     "explain": "Với du, sein chia là 'bist'. 'seid' là dạng của ihr (các bạn)."
    },
    {
     "q": "Wir ___ einen Hund.",
     "options": [
      "hat",
      "habt",
      "haben",
      "hast"
     ],
     "answer": 2,
     "vi": "Chúng tôi có một con chó.",
     "explain": "Với wir, haben giữ nguyên dạng 'haben'. 'habt' là dạng của ihr."
    },
    {
     "q": "Er ___ zwei Schwestern.",
     "options": [
      "habe",
      "haben",
      "hast",
      "hat"
     ],
     "answer": 3,
     "vi": "Anh ấy có hai chị em gái.",
     "explain": "Với er/sie/es, haben chia là 'hat' (bất quy tắc). 'hast' là dạng của du."
    },
    {
     "q": "___ seid sehr nett.",
     "options": [
      "Wir",
      "Ihr",
      "Sie",
      "Du"
     ],
     "answer": 1,
     "vi": "Các bạn rất dễ thương.",
     "explain": "'seid' là dạng của sein chỉ đi với ihr. Wir và Sie đi với 'sind', du đi với 'bist'."
    },
    {
     "q": "Frau Nguyen, ___ Sie Lehrerin?",
     "options": [
      "sind",
      "seid",
      "ist",
      "bist"
     ],
     "answer": 0,
     "vi": "Bà Nguyễn, bà có phải là giáo viên không?",
     "explain": "Sie lịch sự chia giống ngôi số nhiều: 'sind'. 'seid' là của ihr, không dùng với Sie."
    },
    {
     "q": "Ich ___ 25 Jahre alt.",
     "options": [
      "habe",
      "hat",
      "bin",
      "ist"
     ],
     "answer": 2,
     "vi": "Tôi 25 tuổi.",
     "explain": "Tiếng Đức nói tuổi bằng sein: 'Ich bin … Jahre alt'. Dùng 'habe' là lỗi thường gặp do ảnh hưởng từ tiếng Pháp/Tây Ban Nha."
    },
    {
     "q": "Ihr ___ Hunger.",
     "options": [
      "hast",
      "haben",
      "hat",
      "habt"
     ],
     "answer": 3,
     "vi": "Các bạn đói.",
     "explain": "Với ihr, haben chia là 'habt'. 'haben' chỉ dùng cho wir, sie và Sie."
    },
    {
     "q": "Das ist Herr Weber. ___ ist Arzt.",
     "options": [
      "Er",
      "Sie",
      "Es",
      "Ihr"
     ],
     "answer": 0,
     "vi": "Đây là ông Weber. Ông ấy là bác sĩ.",
     "explain": "Herr Weber là nam giới nên thay bằng 'er'. 'Sie' dùng cho phụ nữ hoặc ngôi lịch sự."
    },
    {
     "q": "Wo ist die Lampe? – ___ ist dort.",
     "options": [
      "Er",
      "Es",
      "Sie",
      "Ihr"
     ],
     "answer": 2,
     "vi": "Cái đèn ở đâu? – Nó ở đằng kia.",
     "explain": "die Lampe là giống cái nên đại từ là 'sie'. Không chọn 'es' chỉ vì đó là đồ vật."
    },
    {
     "q": "Das Kind ist klein. ___ ist drei Jahre alt.",
     "options": [
      "Er",
      "Sie",
      "Ihr",
      "Es"
     ],
     "answer": 3,
     "vi": "Đứa trẻ còn nhỏ. Nó ba tuổi.",
     "explain": "das Kind là giống trung nên thay bằng 'es'. 'Er' sai vì không theo giống ngữ pháp của danh từ."
    },
    {
     "q": "Anna und Tom ___ heute keine Zeit.",
     "options": [
      "hat",
      "haben",
      "habt",
      "sind"
     ],
     "answer": 1,
     "vi": "Anna và Tom hôm nay không có thời gian.",
     "explain": "Anna und Tom = sie (họ), nên chia 'haben'. 'hat' chỉ dùng cho một người; 'Zeit haben' cần haben chứ không phải sein."
    },
    {
     "q": "Der Tisch ist neu. ___ ist aus Holz.",
     "options": [
      "Es",
      "Sie",
      "Er",
      "Ihr"
     ],
     "answer": 2,
     "vi": "Cái bàn mới. Nó làm bằng gỗ.",
     "explain": "der Tisch là giống đực nên thay bằng 'er'. 'Es' sai vì tiếng Đức không dùng 'es' cho mọi đồ vật."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ihr habt einen Termin beim Amt.",
      "Ihr haben einen Termin beim Amt.",
      "Ihr seid einen Termin beim Amt.",
      "Ihr hat einen Termin beim Amt."
     ],
     "answer": 0,
     "vi": "Các bạn có một cuộc hẹn ở cơ quan hành chính.",
     "explain": "Có hẹn là 'einen Termin haben', với ihr chia 'habt'. 'seid' là dạng của sein, không đi với tân ngữ 'einen Termin'."
    },
    {
     "q": "Mein Bruder und ich ___ in Berlin.",
     "options": [
      "ist",
      "seid",
      "bin",
      "sind"
     ],
     "answer": 3,
     "vi": "Anh trai tôi và tôi ở Berlin.",
     "explain": "'Mein Bruder und ich' = wir, nên chia 'sind'. 'bin' sai vì động từ không chia theo từ 'ich' đứng gần nhất."
    }
   ]
  },
  {
   "title": "Chia động từ có quy tắc ở hiện tại (Präsens regelmäßig)",
   "intro": "Động từ có quy tắc: bỏ đuôi -en để lấy gốc (wohn-en → wohn-) rồi thêm đuôi theo ngôi:\nich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.\nVí dụ: ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie wohnen.\nGốc tận cùng bằng -t/-d (arbeiten, finden, reden, antworten) chèn thêm -e-: du arbeitest, er arbeitet, ihr arbeitet.\nGốc tận cùng bằng -s/-ß/-z (heißen, tanzen) ở ngôi du chỉ thêm -t: du heißt, du tanzt.\nĐộng từ đuôi -eln/-ern chỉ thêm -n ở wir/sie: wir sammeln, sie wandern; ich sammle.",
   "questions": [
    {
     "q": "Ich ___ in Hamburg.",
     "options": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen"
     ],
     "answer": 0,
     "vi": "Tôi sống ở Hamburg.",
     "explain": "Ngôi ich thêm đuôi -e: wohne. 'wohnen' là dạng nguyên mẫu/ngôi wir."
    },
    {
     "q": "Du ___ Deutsch.",
     "options": [
      "lerne",
      "lernst",
      "lernen",
      "lernt"
     ],
     "answer": 1,
     "vi": "Bạn học tiếng Đức.",
     "explain": "Ngôi du thêm -st: lernst. 'lernt' là dạng của er/sie/es hoặc ihr."
    },
    {
     "q": "Er ___ gern Musik.",
     "options": [
      "hörst",
      "höre",
      "hört",
      "hören"
     ],
     "answer": 2,
     "vi": "Anh ấy thích nghe nhạc.",
     "explain": "Ngôi er thêm -t: hört. 'hörst' là dạng của du."
    },
    {
     "q": "Wir ___ heute Fußball.",
     "options": [
      "spielt",
      "spielst",
      "spiele",
      "spielen"
     ],
     "answer": 3,
     "vi": "Hôm nay chúng tôi chơi bóng đá.",
     "explain": "Ngôi wir thêm -en: spielen. 'spielt' là dạng của er hoặc ihr."
    },
    {
     "q": "Ihr ___ sehr gut.",
     "options": [
      "kocht",
      "kochst",
      "kochen",
      "koche"
     ],
     "answer": 0,
     "vi": "Các bạn nấu ăn rất ngon.",
     "explain": "Ngôi ihr thêm -t: kocht. 'kochen' sai vì đó là dạng của wir/sie/Sie."
    },
    {
     "q": "Was ___ Sie von Beruf?",
     "options": [
      "macht",
      "machen",
      "machst",
      "mache"
     ],
     "answer": 1,
     "vi": "Ông/bà làm nghề gì?",
     "explain": "Sie lịch sự chia như số nhiều: machen. 'macht' là dạng của er hoặc ihr."
    },
    {
     "q": "Wie ___ du?",
     "options": [
      "heißst",
      "heißen",
      "heißt",
      "heiße"
     ],
     "answer": 2,
     "vi": "Bạn tên là gì?",
     "explain": "Gốc heiß- tận cùng bằng -ß nên ngôi du chỉ thêm -t: heißt. 'heißst' sai vì không thêm -st sau -ß."
    },
    {
     "q": "Er ___ bei Siemens.",
     "options": [
      "arbeit",
      "arbeitt",
      "arbeiten",
      "arbeitet"
     ],
     "answer": 3,
     "vi": "Anh ấy làm việc ở Siemens.",
     "explain": "Gốc arbeit- tận cùng bằng -t nên chèn -e-: arbeitet. 'arbeitt' sai vì thiếu -e-."
    },
    {
     "q": "Du ___ das Buch nicht.",
     "options": [
      "findest",
      "findst",
      "findet",
      "finden"
     ],
     "answer": 0,
     "vi": "Bạn không tìm thấy quyển sách.",
     "explain": "Gốc find- tận cùng bằng -d nên ngôi du là findest. 'findst' sai vì thiếu -e-."
    },
    {
     "q": "Ihr ___ zu viel.",
     "options": [
      "redt",
      "redet",
      "redest",
      "reden"
     ],
     "answer": 1,
     "vi": "Các bạn nói quá nhiều.",
     "explain": "Gốc red- tận cùng bằng -d, ngôi ihr thêm -et: redet. 'redt' sai vì thiếu -e-, 'redest' là của du."
    },
    {
     "q": "Maria ___ jeden Tag.",
     "options": [
      "tanzst",
      "tanzen",
      "tanzt",
      "tanze"
     ],
     "answer": 2,
     "vi": "Maria nhảy mỗi ngày.",
     "explain": "Maria = sie (cô ấy), thêm -t: tanzt. 'tanzst' là dạng sai do thêm -st sau -z."
    },
    {
     "q": "Ich ___ Briefmarken.",
     "options": [
      "sammel",
      "sammelt",
      "sammeln",
      "sammle"
     ],
     "answer": 3,
     "vi": "Tôi sưu tầm tem.",
     "explain": "Động từ -eln ở ngôi ich thường bỏ e của gốc: sammle. 'sammeln' là dạng của wir/sie."
    },
    {
     "q": "Meine Eltern ___ am Wochenende in den Bergen.",
     "options": [
      "wandern",
      "wandert",
      "wanderen",
      "wanderst"
     ],
     "answer": 0,
     "vi": "Bố mẹ tôi đi bộ đường dài trên núi vào cuối tuần.",
     "explain": "Meine Eltern = sie (họ); động từ -ern chỉ thêm -n: wandern. 'wanderen' sai vì thừa -e-."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Du antwortst nicht.",
      "Du antwortest nicht.",
      "Du antwortet nicht.",
      "Du antworten nicht."
     ],
     "answer": 1,
     "vi": "Bạn không trả lời.",
     "explain": "Gốc antwort- tận cùng bằng -t nên ngôi du là antwortest. 'antwortst' sai vì thiếu -e- chèn vào."
    },
    {
     "q": "Wie lange ___ ihr schon in Deutschland?",
     "options": [
      "lebst",
      "leben",
      "lebt",
      "lebe"
     ],
     "answer": 2,
     "vi": "Các bạn đã sống ở Đức bao lâu rồi?",
     "explain": "Chủ ngữ là ihr (đứng sau động từ) nên chia lebt. 'leben' sai vì đó là dạng của wir/sie/Sie."
    }
   ]
  },
  {
   "title": "Động từ bất quy tắc đổi nguyên âm (Präsens mit Vokalwechsel)",
   "intro": "Một số động từ đổi nguyên âm của gốc, nhưng CHỈ ở ngôi du và er/sie/es:\na → ä: fahren → du fährst, er fährt; schlafen → schläft; tragen → trägt; laufen (au → äu) → läuft\ne → i: essen → du isst, er isst; sprechen → spricht; helfen → hilft; geben → gibt; nehmen → du nimmst, er nimmt\ne → ie: lesen → du liest, er liest; sehen → sieht\nCác ngôi khác giữ nguyên âm gốc: ich fahre, wir fahren, ihr fahrt, sie fahren.\nGốc tận cùng bằng -s/-ß (lesen, essen) ở ngôi du chỉ thêm -t: du liest, du isst.",
   "questions": [
    {
     "q": "Er ___ nach Berlin.",
     "options": [
      "fährt",
      "fahrt",
      "fahrst",
      "fähre"
     ],
     "answer": 0,
     "vi": "Anh ấy đi (xe) đến Berlin.",
     "explain": "fahren đổi a → ä ở ngôi er: fährt. 'fahrt' là dạng của ihr, không có biến âm."
    },
    {
     "q": "Du ___ ein Buch.",
     "options": [
      "lest",
      "liest",
      "liesst",
      "lesst"
     ],
     "answer": 1,
     "vi": "Bạn đọc một quyển sách.",
     "explain": "lesen đổi e → ie ở ngôi du, và gốc tận cùng -s nên chỉ thêm -t: liest. 'liesst' sai vì thừa s."
    },
    {
     "q": "Lisa ___ gern Pizza.",
     "options": [
      "esst",
      "esse",
      "isst",
      "issen"
     ],
     "answer": 2,
     "vi": "Lisa thích ăn pizza.",
     "explain": "essen đổi e → i ở ngôi er/sie: isst. 'esst' là dạng của ihr."
    },
    {
     "q": "Ich ___ den Bus.",
     "options": [
      "nimme",
      "nimmst",
      "nimmt",
      "nehme"
     ],
     "answer": 3,
     "vi": "Tôi đi xe buýt.",
     "explain": "Ngôi ich không đổi nguyên âm: nehme. 'nimme' sai vì biến đổi chỉ xảy ra ở du và er/sie/es."
    },
    {
     "q": "Ihr ___ morgen nach Köln.",
     "options": [
      "fahrt",
      "fährt",
      "fährst",
      "fahren"
     ],
     "answer": 0,
     "vi": "Ngày mai các bạn đi đến Köln.",
     "explain": "Ngôi ihr không có biến âm: fahrt. 'fährt' là dạng của er/sie/es."
    },
    {
     "q": "Das Baby ___ viel.",
     "options": [
      "schlaft",
      "schläft",
      "schläfst",
      "schlafen"
     ],
     "answer": 1,
     "vi": "Em bé ngủ nhiều.",
     "explain": "das Baby = es, schlafen đổi a → ä: schläft. 'schlaft' thiếu biến âm (đó là dạng của ihr)."
    },
    {
     "q": "___ du Deutsch?",
     "options": [
      "Sprechst",
      "Spricht",
      "Sprichst",
      "Sprecht"
     ],
     "answer": 2,
     "vi": "Bạn có nói tiếng Đức không?",
     "explain": "sprechen đổi e → i ở ngôi du: sprichst. 'Spricht' là dạng của er/sie/es."
    },
    {
     "q": "Mein Vater ___ jeden Morgen im Park.",
     "options": [
      "lauft",
      "läufst",
      "laufen",
      "läuft"
     ],
     "answer": 3,
     "vi": "Bố tôi chạy bộ trong công viên mỗi sáng.",
     "explain": "laufen đổi au → äu ở ngôi er: läuft. 'lauft' thiếu biến âm, 'läufst' là của du."
    },
    {
     "q": "Was ___ du im Restaurant?",
     "options": [
      "nimmst",
      "nehmst",
      "nimmt",
      "nimst"
     ],
     "answer": 0,
     "vi": "Bạn gọi món gì ở nhà hàng?",
     "explain": "nehmen ở ngôi du là nimmst (đổi e → i và gấp đôi m). 'nehmst' sai vì thiếu đổi nguyên âm."
    },
    {
     "q": "Wir ___ heute Abend einen Film.",
     "options": [
      "sieht",
      "sehen",
      "seht",
      "siehen"
     ],
     "answer": 1,
     "vi": "Tối nay chúng tôi xem một bộ phim.",
     "explain": "Ngôi wir không đổi nguyên âm: sehen. 'sieht' chỉ dùng cho er/sie/es."
    },
    {
     "q": "Er ___ seiner Mutter in der Küche.",
     "options": [
      "helft",
      "hilfst",
      "hilft",
      "helfen"
     ],
     "answer": 2,
     "vi": "Anh ấy giúp mẹ trong bếp.",
     "explain": "helfen đổi e → i ở ngôi er: hilft. 'helft' là dạng của ihr."
    },
    {
     "q": "Die Lehrerin ___ uns die Hausaufgaben.",
     "options": [
      "gebt",
      "gibst",
      "geben",
      "gibt"
     ],
     "answer": 3,
     "vi": "Cô giáo giao bài tập về nhà cho chúng tôi.",
     "explain": "Die Lehrerin = sie (cô ấy), geben đổi e → i: gibt. 'gibst' là dạng của du."
    },
    {
     "q": "Ihr ___ zu schnell.",
     "options": [
      "sprecht",
      "spricht",
      "sprechst",
      "sprichst"
     ],
     "answer": 0,
     "vi": "Các bạn nói quá nhanh.",
     "explain": "Ngôi ihr giữ nguyên âm gốc: sprecht. 'spricht' là dạng của er/sie/es, dễ nhầm vì cùng đuôi -t."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Du isst gern Reis, und er esst Brot.",
      "Du isst gern Reis, und er isst Brot.",
      "Du esst gern Reis, und er isst Brot.",
      "Du ist gern Reis, und er isst Brot."
     ],
     "answer": 1,
     "vi": "Bạn thích ăn cơm, còn anh ấy ăn bánh mì.",
     "explain": "essen ở cả du và er đều là 'isst'. 'ist' là động từ sein (là), không phải 'ăn'."
    },
    {
     "q": "Herr Schmidt ___ heute einen Anzug.",
     "options": [
      "tragt",
      "trägst",
      "trägt",
      "tragen"
     ],
     "answer": 2,
     "vi": "Hôm nay ông Schmidt mặc một bộ com-lê.",
     "explain": "tragen đổi a → ä ở ngôi er: trägt. 'tragt' thiếu biến âm (dạng của ihr)."
    }
   ]
  },
  {
   "title": "Vị trí động từ: câu kể, câu hỏi W, câu hỏi Có/Không (Satzbau: Verb an Position 2, W-Fragen, Ja/Nein-Fragen)",
   "intro": "Câu kể: động từ chia LUÔN ở vị trí 2. Vị trí 1 có thể là chủ ngữ hoặc thành phần khác (thời gian, nơi chốn); khi đó chủ ngữ đứng ngay sau động từ: Ich lerne heute Deutsch. → Heute lerne ich Deutsch.\nCâu hỏi W: từ để hỏi ở vị trí 1, động từ ở vị trí 2: Wo wohnst du?\nTừ để hỏi: wer (ai), was (cái gì), wo (ở đâu), woher (từ đâu), wohin (đi đâu), wann (khi nào), wie (thế nào; Wie heißen Sie?), wie viel (bao nhiêu), warum (tại sao).\nCâu hỏi Có/Không: động từ đứng đầu câu: Wohnst du in Berlin? – Ja / Nein.\nĐộng từ tách được: phần chia ở vị trí 2, tiền tố ở cuối câu: Der Zug kommt um 8 Uhr an.",
   "questions": [
    {
     "q": "___ wohnst du? – In München.",
     "options": [
      "Wo",
      "Woher",
      "Wer",
      "Was"
     ],
     "answer": 0,
     "vi": "Bạn sống ở đâu? – Ở München.",
     "explain": "Hỏi nơi chốn (ở đâu) dùng 'Wo'. 'Woher' hỏi nguồn gốc (từ đâu)."
    },
    {
     "q": "___ kommst du? – Aus Vietnam.",
     "options": [
      "Wo",
      "Woher",
      "Wohin",
      "Wann"
     ],
     "answer": 1,
     "vi": "Bạn đến từ đâu? – Từ Việt Nam.",
     "explain": "Câu trả lời 'Aus …' nên hỏi bằng 'Woher'. 'Wohin' hỏi hướng đi đến."
    },
    {
     "q": "___ ist das? – Das ist mein Lehrer.",
     "options": [
      "Was",
      "Wo",
      "Wer",
      "Wie"
     ],
     "answer": 2,
     "vi": "Đó là ai? – Đó là thầy giáo của tôi.",
     "explain": "Hỏi về người dùng 'Wer'. 'Was' chỉ hỏi về đồ vật/sự việc."
    },
    {
     "q": "___ fährst du? – Nach Hamburg.",
     "options": [
      "Woher",
      "Wo",
      "Wer",
      "Wohin"
     ],
     "answer": 3,
     "vi": "Bạn đi đâu? – Đến Hamburg.",
     "explain": "Câu trả lời 'Nach …' chỉ hướng đi nên dùng 'Wohin'. 'Wo' hỏi vị trí đứng yên."
    },
    {
     "q": "___ du Kinder? – Ja, zwei.",
     "options": [
      "Hast",
      "Habt",
      "Hat",
      "Haben"
     ],
     "answer": 0,
     "vi": "Bạn có con không? – Có, hai đứa.",
     "explain": "Câu hỏi Có/Không: động từ đứng đầu và chia theo du: 'Hast'. 'Hat' là dạng của er/sie/es."
    },
    {
     "q": "Morgen ___ Deutsch.",
     "options": [
      "ich lerne",
      "lerne ich",
      "ich lernen",
      "lernen ich"
     ],
     "answer": 1,
     "vi": "Ngày mai tôi học tiếng Đức.",
     "explain": "'Morgen' chiếm vị trí 1 nên động từ đứng vị trí 2, chủ ngữ theo sau: 'lerne ich'. 'ich lerne' đẩy động từ xuống vị trí 3."
    },
    {
     "q": "Am Montag ___ um 9 Uhr.",
     "options": [
      "der Kurs beginnt",
      "beginnen der Kurs",
      "beginnt der Kurs",
      "der Kurs beginnen"
     ],
     "answer": 2,
     "vi": "Vào thứ Hai khóa học bắt đầu lúc 9 giờ.",
     "explain": "Trạng từ thời gian ở vị trí 1 nên động từ 'beginnt' đứng thứ 2, rồi đến chủ ngữ. 'der Kurs beginnt' sai vì động từ ở vị trí 3."
    },
    {
     "q": "___ du Kaffee oder Tee?",
     "options": [
      "Trinkt",
      "Trinken",
      "Was trinkst",
      "Trinkst"
     ],
     "answer": 3,
     "vi": "Bạn uống cà phê hay trà?",
     "explain": "Đây là câu hỏi lựa chọn, động từ đứng đầu và chia theo du: 'Trinkst'. 'Was trinkst' sai vì 'Kaffee oder Tee' đã là tân ngữ."
    },
    {
     "q": "___ heißen Sie? – Ich heiße Müller.",
     "options": [
      "Wie",
      "Was",
      "Wer",
      "Wo"
     ],
     "answer": 0,
     "vi": "Ông/bà tên là gì? – Tôi tên là Müller.",
     "explain": "Tiếng Đức hỏi tên bằng 'Wie heißen Sie?'. 'Was' là lỗi dịch sát từ tiếng Việt ('tên là gì')."
    },
    {
     "q": "___ kostet das Buch? – 12 Euro.",
     "options": [
      "Wie viele",
      "Wie viel",
      "Was",
      "Wann"
     ],
     "answer": 1,
     "vi": "Quyển sách giá bao nhiêu? – 12 euro.",
     "explain": "Hỏi giá dùng 'Wie viel kostet …?'. 'Wie viele' dùng cho danh từ đếm được số nhiều (Wie viele Kinder?)."
    },
    {
     "q": "___ lernst du Deutsch? – Weil ich in Deutschland studieren möchte.",
     "options": [
      "Wann",
      "Wie",
      "Warum",
      "Wo"
     ],
     "answer": 2,
     "vi": "Tại sao bạn học tiếng Đức? – Vì tôi muốn học đại học ở Đức.",
     "explain": "Câu trả lời bắt đầu bằng 'Weil' (vì) nên câu hỏi là 'Warum'. 'Wann' hỏi thời gian."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Wo du arbeitest?",
      "Wo arbeiten du?",
      "Arbeitest wo du?",
      "Wo arbeitest du?"
     ],
     "answer": 3,
     "vi": "Bạn làm việc ở đâu?",
     "explain": "Câu hỏi W: từ hỏi – động từ chia – chủ ngữ. 'Wo du arbeitest?' sai vì động từ không ở vị trí 2."
    },
    {
     "q": "In Deutschland ___ viele Studenten.",
     "options": [
      "leben",
      "lebt",
      "leben sie",
      "sie leben"
     ],
     "answer": 0,
     "vi": "Ở Đức có nhiều sinh viên sinh sống.",
     "explain": "Chủ ngữ là 'viele Studenten' (số nhiều) đứng sau động từ 'leben' ở vị trí 2. Thêm 'sie' là thừa chủ ngữ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Nach dem Kurs ich gehe nach Hause.",
      "Nach dem Kurs gehe ich nach Hause.",
      "Nach dem Kurs gehe nach Hause ich.",
      "Gehe nach dem Kurs ich nach Hause."
     ],
     "answer": 1,
     "vi": "Sau khóa học tôi đi về nhà.",
     "explain": "'Nach dem Kurs' là vị trí 1, động từ 'gehe' vị trí 2, chủ ngữ 'ich' ngay sau. 'Nach dem Kurs ich gehe' sai vì động từ ở vị trí 3."
    },
    {
     "q": "Wann ___ der Zug in Berlin an?",
     "options": [
      "kommen",
      "kommst",
      "kommt",
      "ankommt"
     ],
     "answer": 2,
     "vi": "Khi nào tàu đến Berlin?",
     "explain": "ankommen tách được: 'kommt' ở vị trí 2, 'an' ở cuối câu. 'ankommt' sai vì tiền tố không được dính vào động từ chia ở vị trí 2."
    }
   ]
  },
  {
   "title": "Mạo từ xác định / không xác định ở Nominativ (der/die/das, ein/eine)",
   "intro": "Danh từ tiếng Đức có 3 giống: giống đực der (der Mann, der Tisch), giống cái die (die Frau, die Lampe), giống trung das (das Kind, das Buch). Số nhiều luôn là die (die Bücher).\nMạo từ không xác định ở Nominativ: ein (giống đực và giống trung), eine (giống cái); số nhiều không có mạo từ không xác định.\nDùng ein/eine khi nhắc đến lần đầu hoặc không cụ thể; dùng der/die/das khi đã biết: Das ist ein Hund. Der Hund heißt Bello.\nMẹo nhận biết giống: -ung, -heit, -keit, -ion → die; -chen, -lein → das; ngày trong tuần, tháng, mùa → der.\nTrong câu 'Das ist …', mạo từ đi theo giống của danh từ: Das ist ein Tisch / eine Lampe.",
   "questions": [
    {
     "q": "___ Mann ist groß.",
     "options": [
      "Der",
      "Die",
      "Das",
      "Den"
     ],
     "answer": 0,
     "vi": "Người đàn ông cao lớn.",
     "explain": "Mann là giống đực, chủ ngữ ở Nominativ nên dùng 'der'. 'Den' là dạng Akkusativ."
    },
    {
     "q": "___ Frau heißt Anna.",
     "options": [
      "Der",
      "Die",
      "Das",
      "Ein"
     ],
     "answer": 1,
     "vi": "Người phụ nữ tên là Anna.",
     "explain": "Frau là giống cái nên dùng 'die'. 'Ein' sai vì giống cái cần 'eine'."
    },
    {
     "q": "___ Kind spielt im Garten.",
     "options": [
      "Der",
      "Die",
      "Das",
      "Eine"
     ],
     "answer": 2,
     "vi": "Đứa trẻ chơi trong vườn.",
     "explain": "Kind là giống trung: 'das Kind'. 'Der' sai dù đứa trẻ có thể là bé trai."
    },
    {
     "q": "Das ist ___ Lampe.",
     "options": [
      "ein",
      "einer",
      "der",
      "eine"
     ],
     "answer": 3,
     "vi": "Đây là một cái đèn.",
     "explain": "Lampe là giống cái, nhắc lần đầu nên dùng 'eine'. 'ein' chỉ dùng cho giống đực và trung."
    },
    {
     "q": "Das ist ___ Tisch.",
     "options": [
      "ein",
      "eine",
      "einen",
      "die"
     ],
     "answer": 0,
     "vi": "Đây là một cái bàn.",
     "explain": "Tisch là giống đực, sau 'Das ist' là Nominativ nên dùng 'ein'. 'einen' là Akkusativ, sai ở đây."
    },
    {
     "q": "Hier ist ___ Buch. Das Buch ist neu.",
     "options": [
      "eine",
      "ein",
      "der",
      "einen"
     ],
     "answer": 1,
     "vi": "Đây là một quyển sách. Quyển sách còn mới.",
     "explain": "Buch là giống trung, nhắc lần đầu nên dùng 'ein'. 'eine' chỉ dùng cho giống cái."
    },
    {
     "q": "___ Bücher sind teuer.",
     "options": [
      "Der",
      "Das",
      "Die",
      "Eine"
     ],
     "answer": 2,
     "vi": "Những quyển sách đắt.",
     "explain": "Danh từ số nhiều luôn đi với 'die'. 'Das' sai vì 'das Buch' chỉ đúng ở số ít."
    },
    {
     "q": "___ Zeitung liegt auf dem Tisch.",
     "options": [
      "Der",
      "Das",
      "Ein",
      "Die"
     ],
     "answer": 3,
     "vi": "Tờ báo nằm trên bàn.",
     "explain": "Zeitung tận cùng -ung nên là giống cái: 'die'. 'Ein' sai vì giống cái cần 'eine'."
    },
    {
     "q": "Das ist ein Auto. ___ Auto ist rot.",
     "options": [
      "Das",
      "Ein",
      "Der",
      "Die"
     ],
     "answer": 0,
     "vi": "Đây là một chiếc ô tô. Chiếc ô tô màu đỏ.",
     "explain": "Auto đã được nhắc đến nên dùng mạo từ xác định giống trung 'das'. 'Ein' sai vì danh từ không còn mới nữa."
    },
    {
     "q": "___ Wohnung hat drei Zimmer.",
     "options": [
      "Der",
      "Die",
      "Das",
      "Ein"
     ],
     "answer": 1,
     "vi": "Căn hộ có ba phòng.",
     "explain": "Wohnung tận cùng -ung nên là giống cái: 'die'. 'Das' là lỗi đoán giống phổ biến."
    },
    {
     "q": "___ Mädchen heißt Lena.",
     "options": [
      "Die",
      "Der",
      "Das",
      "Eine"
     ],
     "answer": 2,
     "vi": "Cô bé tên là Lena.",
     "explain": "Mädchen tận cùng -chen nên là giống trung: 'das'. 'Die' sai dù chỉ con gái."
    },
    {
     "q": "___ Montag ist mein Lieblingstag.",
     "options": [
      "Die",
      "Das",
      "Ein",
      "Der"
     ],
     "answer": 3,
     "vi": "Thứ Hai là ngày yêu thích của tôi.",
     "explain": "Các ngày trong tuần là giống đực: 'der Montag'. 'Das' sai."
    },
    {
     "q": "Das ist ___ Brötchen.",
     "options": [
      "ein",
      "eine",
      "der",
      "die"
     ],
     "answer": 0,
     "vi": "Đây là một cái bánh mì nhỏ.",
     "explain": "Brötchen tận cùng -chen nên là giống trung, dùng 'ein'. 'eine' sai vì không phải giống cái."
    },
    {
     "q": "___ Information ist wichtig.",
     "options": [
      "Der",
      "Die",
      "Das",
      "Ein"
     ],
     "answer": 1,
     "vi": "Thông tin này quan trọng.",
     "explain": "Danh từ tận cùng -ion là giống cái: 'die Information'. 'Das' sai."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Das ist ein Freundin. Die Freundin heißt Mai.",
      "Das ist eine Freundin. Der Freundin heißt Mai.",
      "Das ist eine Freundin. Die Freundin heißt Mai.",
      "Das ist einen Freundin. Die Freundin heißt Mai."
     ],
     "answer": 2,
     "vi": "Đây là một người bạn gái. Người bạn ấy tên là Mai.",
     "explain": "Freundin là giống cái: lần đầu dùng 'eine', lần sau dùng 'die'. 'Der Freundin' sai vì ở Nominativ giống cái là 'die'."
    }
   ]
  },
  {
   "title": "Cách 4 – Akkusativ (den/einen, kein, Personalpronomen mich/dich/ihn)",
   "intro": "Tân ngữ trực tiếp (trả lời câu hỏi Wen? / Was?) đứng ở cách 4 (Akkusativ).\nChỉ giống đực thay đổi: der → den, ein → einen, kein → keinen. Giống cái (die/eine/keine), giống trung (das/ein/kein) và số nhiều (die/–/keine) giữ nguyên như Nominativ.\nĐộng từ thường đi với Akkusativ: haben, brauchen, kaufen, sehen, suchen, besuchen, kennen, essen, trinken, nehmen, lesen, es gibt.\nĐại từ ở Akkusativ: ich → mich, du → dich, er → ihn, sie → sie, es → es, wir → uns, ihr → euch, sie/Sie → sie/Sie.\nVí dụ: Ich sehe den Mann. → Ich sehe ihn. Es gibt einen Park.",
   "questions": [
    {
     "q": "Ich kaufe ___ Apfel.",
     "options": [
      "einen",
      "ein",
      "eine",
      "einem"
     ],
     "answer": 0,
     "vi": "Tôi mua một quả táo.",
     "explain": "Apfel là giống đực, làm tân ngữ của kaufen nên dùng Akkusativ 'einen'. 'ein' là dạng Nominativ."
    },
    {
     "q": "Wir besuchen ___ Freund.",
     "options": [
      "der",
      "den",
      "dem",
      "des"
     ],
     "answer": 1,
     "vi": "Chúng tôi đến thăm người bạn.",
     "explain": "besuchen cần Akkusativ; der Freund → den Freund. 'der' là Nominativ."
    },
    {
     "q": "Er trinkt ___ Kaffee.",
     "options": [
      "der",
      "die",
      "den",
      "dem"
     ],
     "answer": 2,
     "vi": "Anh ấy uống cà phê.",
     "explain": "der Kaffee làm tân ngữ nên đổi thành 'den'. 'der' sai vì chủ ngữ là 'er', không phải Kaffee."
    },
    {
     "q": "Ich brauche ___ Tasche.",
     "options": [
      "einen",
      "einer",
      "ein",
      "eine"
     ],
     "answer": 3,
     "vi": "Tôi cần một cái túi.",
     "explain": "Tasche là giống cái, ở Akkusativ vẫn là 'eine'. 'einen' chỉ dùng cho giống đực."
    },
    {
     "q": "Sie liest ___ Buch.",
     "options": [
      "das",
      "den",
      "der",
      "einen"
     ],
     "answer": 0,
     "vi": "Cô ấy đọc quyển sách.",
     "explain": "Buch là giống trung, ở Akkusativ không đổi: 'das'. 'den' chỉ dùng cho giống đực."
    },
    {
     "q": "Hast du ___ Bruder?",
     "options": [
      "ein",
      "einen",
      "eine",
      "einer"
     ],
     "answer": 1,
     "vi": "Bạn có anh/em trai không?",
     "explain": "haben cần Akkusativ; der Bruder → einen Bruder. 'ein' là dạng Nominativ."
    },
    {
     "q": "Ich habe ___ Hunger.",
     "options": [
      "kein",
      "keine",
      "keinen",
      "keiner"
     ],
     "answer": 2,
     "vi": "Tôi không đói.",
     "explain": "der Hunger là giống đực, tân ngữ của haben nên dùng 'keinen'. 'kein' là dạng Nominativ."
    },
    {
     "q": "Siehst du den Mann? – Ja, ich sehe ___.",
     "options": [
      "er",
      "ihm",
      "sie",
      "ihn"
     ],
     "answer": 3,
     "vi": "Bạn có thấy người đàn ông không? – Có, tôi thấy anh ấy.",
     "explain": "den Mann được thay bằng đại từ Akkusativ 'ihn'. 'er' là Nominativ, không làm tân ngữ được."
    },
    {
     "q": "Kennst du ___? – Ja, ich kenne dich.",
     "options": [
      "mich",
      "ich",
      "mir",
      "dich"
     ],
     "answer": 0,
     "vi": "Bạn có biết tôi không? – Có, tôi biết bạn.",
     "explain": "Người hỏi nói về chính mình nên dùng Akkusativ 'mich'. 'dich' sai vì câu trả lời 'ich kenne dich' cho thấy người được hỏi đến là người nói."
    },
    {
     "q": "Wo ist die Lehrerin? Ich suche ___.",
     "options": [
      "ihr",
      "sie",
      "ihn",
      "ihm"
     ],
     "answer": 1,
     "vi": "Cô giáo ở đâu? Tôi đang tìm cô ấy.",
     "explain": "die Lehrerin ở Akkusativ thay bằng 'sie'. 'ihn' chỉ dùng cho giống đực."
    },
    {
     "q": "Es gibt hier ___ Supermarkt.",
     "options": [
      "ein",
      "einem",
      "einen",
      "eine"
     ],
     "answer": 2,
     "vi": "Ở đây có một siêu thị.",
     "explain": "'es gibt' luôn đi với Akkusativ; der Supermarkt → einen. 'ein' sai vì Supermarkt là giống đực."
    },
    {
     "q": "Ihr kommt morgen? Schön, wir erwarten ___.",
     "options": [
      "ihr",
      "uns",
      "dich",
      "euch"
     ],
     "answer": 3,
     "vi": "Ngày mai các bạn đến à? Tuyệt, chúng tôi chờ các bạn.",
     "explain": "ihr ở Akkusativ là 'euch'. 'ihr' là dạng Nominativ, 'dich' chỉ dùng cho một người."
    },
    {
     "q": "Der Pullover ist schön. Ich nehme ___.",
     "options": [
      "ihn",
      "es",
      "sie",
      "er"
     ],
     "answer": 0,
     "vi": "Cái áo len đẹp. Tôi lấy nó.",
     "explain": "der Pullover là giống đực nên đại từ Akkusativ là 'ihn'. 'es' sai vì Pullover không phải giống trung."
    },
    {
     "q": "Brauchst du ___ Kugelschreiber?",
     "options": [
      "der",
      "den",
      "dem",
      "ein"
     ],
     "answer": 1,
     "vi": "Bạn có cần cái bút bi không?",
     "explain": "der Kugelschreiber làm tân ngữ của brauchen nên là 'den'. 'ein' sai vì giống đực ở Akkusativ phải là 'einen'."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich habe einen Termin, aber ich habe kein Zeit.",
      "Ich habe ein Termin, aber ich habe keine Zeit.",
      "Ich habe einen Termin, aber ich habe keine Zeit.",
      "Ich habe einen Termin, aber ich habe keinen Zeit."
     ],
     "answer": 2,
     "vi": "Tôi có một cuộc hẹn, nhưng tôi không có thời gian.",
     "explain": "der Termin → einen Termin; die Zeit là giống cái → keine Zeit. 'keinen Zeit' sai vì đuôi -en chỉ dùng cho giống đực."
    }
   ]
  },
  {
   "title": "Phủ định nicht / kein (Negation)",
   "intro": "kein phủ định danh từ đi với ein hoặc không có mạo từ: Ich habe ein Auto. → Ich habe kein Auto. Ich trinke Milch. → Ich trinke keine Milch.\nkein chia giống ein: kein (giống đực/trung), keine (giống cái, số nhiều), keinen (giống đực ở Akkusativ).\nnicht phủ định động từ, tính từ, trạng từ, danh từ có mạo từ xác định hoặc đại từ sở hữu: Ich schlafe nicht. Das ist nicht teuer. Das ist nicht mein Buch.\nVị trí của nicht: phủ định cả câu thì nicht thường đứng cuối (Ich kenne den Mann nicht), nhưng đứng TRƯỚC tính từ, trước nơi chốn (nicht in Berlin) và trước tiền tố tách được (Ich rufe dich nicht an).\nTrả lời khẳng định cho câu hỏi phủ định dùng 'Doch': Hast du keinen Hunger? – Doch!",
   "questions": [
    {
     "q": "Ich habe ___ Auto.",
     "options": [
      "kein",
      "nicht",
      "keine",
      "keinen"
     ],
     "answer": 0,
     "vi": "Tôi không có ô tô.",
     "explain": "das Auto là giống trung, phủ định danh từ dùng 'kein'. 'nicht' không đứng trước danh từ không có mạo từ xác định."
    },
    {
     "q": "Das Essen ist ___ gut.",
     "options": [
      "kein",
      "nicht",
      "keine",
      "keinen"
     ],
     "answer": 1,
     "vi": "Đồ ăn không ngon.",
     "explain": "'gut' là tính từ nên phủ định bằng 'nicht'. 'kein' chỉ dùng trước danh từ."
    },
    {
     "q": "Er trinkt ___ Milch.",
     "options": [
      "kein",
      "nicht",
      "keine",
      "keinen"
     ],
     "answer": 2,
     "vi": "Anh ấy không uống sữa.",
     "explain": "die Milch là giống cái, không có mạo từ nên phủ định bằng 'keine'. 'kein' sai đuôi."
    },
    {
     "q": "Wir haben ___ Hund.",
     "options": [
      "kein",
      "nicht",
      "keine",
      "keinen"
     ],
     "answer": 3,
     "vi": "Chúng tôi không có chó.",
     "explain": "der Hund là giống đực, tân ngữ của haben nên dùng 'keinen'. 'kein' là dạng Nominativ."
    },
    {
     "q": "Ich schlafe ___.",
     "options": [
      "nicht",
      "kein",
      "keine",
      "keinen"
     ],
     "answer": 0,
     "vi": "Tôi không ngủ.",
     "explain": "Phủ định động từ dùng 'nicht'. 'kein' chỉ đi với danh từ."
    },
    {
     "q": "Das ist ___ Lehrer.",
     "options": [
      "nicht",
      "kein",
      "keine",
      "keinen"
     ],
     "answer": 1,
     "vi": "Đây không phải là giáo viên.",
     "explain": "Lehrer là danh từ giống đực không có mạo từ, sau 'Das ist' (Nominativ) nên dùng 'kein'. 'keinen' là Akkusativ."
    },
    {
     "q": "Das ist ___ mein Handy.",
     "options": [
      "kein",
      "keine",
      "nicht",
      "keinen"
     ],
     "answer": 2,
     "vi": "Đây không phải điện thoại của tôi.",
     "explain": "Danh từ đi với đại từ sở hữu (mein) phủ định bằng 'nicht'. 'kein' không đi cùng 'mein'."
    },
    {
     "q": "Ich kenne den Mann ___.",
     "options": [
      "kein",
      "keinen",
      "keine",
      "nicht"
     ],
     "answer": 3,
     "vi": "Tôi không biết người đàn ông đó.",
     "explain": "'den Mann' có mạo từ xác định nên phủ định bằng 'nicht' ở cuối câu. 'keinen' không dùng cùng 'den'."
    },
    {
     "q": "Sie hat heute ___ Zeit.",
     "options": [
      "keine",
      "kein",
      "nicht",
      "keinen"
     ],
     "answer": 0,
     "vi": "Hôm nay cô ấy không có thời gian.",
     "explain": "die Zeit là giống cái nên dùng 'keine'. 'nicht' sai vì Zeit là danh từ không có mạo từ."
    },
    {
     "q": "Hast du keinen Hunger? – ___, ich habe Hunger.",
     "options": [
      "Ja",
      "Doch",
      "Nein",
      "Nicht"
     ],
     "answer": 1,
     "vi": "Bạn không đói à? – Có chứ, tôi đói.",
     "explain": "Trả lời khẳng định cho câu hỏi phủ định dùng 'Doch'. 'Ja' sai trong trường hợp này."
    },
    {
     "q": "Wir kaufen heute ___ Äpfel.",
     "options": [
      "keinen",
      "kein",
      "keine",
      "nicht"
     ],
     "answer": 2,
     "vi": "Hôm nay chúng tôi không mua táo.",
     "explain": "Danh từ số nhiều không có mạo từ phủ định bằng 'keine'. 'keinen' sai dù der Apfel là giống đực, vì ở đây là số nhiều."
    },
    {
     "q": "Er wohnt ___ in Berlin.",
     "options": [
      "kein",
      "keine",
      "keinen",
      "nicht"
     ],
     "answer": 3,
     "vi": "Anh ấy không sống ở Berlin.",
     "explain": "Phủ định nơi chốn dùng 'nicht', đặt trước 'in Berlin'. 'kein' không dùng trước giới từ."
    },
    {
     "q": "Ich rufe dich morgen ___ an.",
     "options": [
      "nicht",
      "kein",
      "keinen",
      "keine"
     ],
     "answer": 0,
     "vi": "Ngày mai tôi không gọi điện cho bạn.",
     "explain": "Phủ định động từ anrufen dùng 'nicht', đứng trước tiền tố tách 'an'. 'kein' không phủ định động từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich verstehe kein Frage.",
      "Ich verstehe die Frage nicht.",
      "Ich verstehe keine die Frage.",
      "Ich nicht verstehe die Frage."
     ],
     "answer": 1,
     "vi": "Tôi không hiểu câu hỏi.",
     "explain": "'die Frage' có mạo từ xác định nên phủ định bằng 'nicht' ở cuối câu. 'Ich nicht verstehe' sai vì động từ phải ở vị trí 2."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Das Formular ist kein kompliziert, aber ich habe keinen Kugelschreiber.",
      "Das Formular ist nicht kompliziert, aber ich habe kein Kugelschreiber.",
      "Das Formular ist nicht kompliziert, aber ich habe keinen Kugelschreiber.",
      "Das Formular ist nicht kompliziert, aber ich habe nicht Kugelschreiber."
     ],
     "answer": 2,
     "vi": "Mẫu đơn không phức tạp, nhưng tôi không có bút bi.",
     "explain": "Tính từ 'kompliziert' phủ định bằng 'nicht'; der Kugelschreiber làm tân ngữ nên dùng 'keinen'. 'kein Kugelschreiber' sai vì thiếu đuôi Akkusativ -en."
    }
   ]
  },
  {
   "title": "Động từ khuyết thiếu (Modalverben: können, müssen, wollen, möchten, dürfen, sollen)",
   "intro": "Động từ khuyết thiếu diễn tả khả năng (können), bắt buộc (müssen), ý muốn (wollen, möchten), sự cho phép (dürfen) và lời khuyên/yêu cầu của người khác (sollen). Ở ngôi ich và er/sie/es, động từ khuyết thiếu KHÔNG có đuôi: ich kann, er muss, sie will, es darf, ich möchte.\nBảng chia: ich kann/muss/will/darf/soll/möchte – du kannst/musst/willst/darfst/sollst/möchtest – er/sie/es kann/muss/will/darf/soll/möchte – wir/sie/Sie können/müssen/wollen/dürfen/sollen/möchten – ihr könnt/müsst/wollt/dürft/sollt/möchtet.\nKhung câu (Satzklammer): động từ khuyết thiếu đứng ở vị trí 2 (hoặc vị trí 1 trong câu hỏi Có/Không), động từ chính ở dạng nguyên mẫu đứng CUỐI câu: Ich kann heute nicht kommen. Kannst du mir helfen?",
   "questions": [
    {
     "q": "Ich ___ gut schwimmen.",
     "options": [
      "kann",
      "kannst",
      "können",
      "könnt"
     ],
     "answer": 0,
     "vi": "Tôi có thể bơi giỏi.",
     "explain": "Với ich, können chia là kann (không có đuôi). 'kannst' là dạng của du."
    },
    {
     "q": "Du ___ heute deine Hausaufgaben machen.",
     "options": [
      "muss",
      "müssen",
      "musst",
      "müsst"
     ],
     "answer": 2,
     "vi": "Hôm nay bạn phải làm bài tập về nhà.",
     "explain": "Với du, müssen chia là musst (không có Umlaut). 'muss' là dạng của ich/er."
    },
    {
     "q": "Wir ___ am Samstag ins Kino gehen.",
     "options": [
      "will",
      "wollen",
      "willst",
      "wollt"
     ],
     "answer": 1,
     "vi": "Thứ Bảy chúng tôi muốn đi xem phim.",
     "explain": "Với wir, wollen giữ nguyên dạng nguyên mẫu: wollen. 'wollt' là dạng của ihr."
    },
    {
     "q": "___ ich hier rauchen?",
     "options": [
      "Darfst",
      "Dürfen",
      "Dürft",
      "Darf"
     ],
     "answer": 3,
     "vi": "Tôi có được phép hút thuốc ở đây không?",
     "explain": "Với ich, dürfen chia là darf; trong câu hỏi Có/Không động từ khuyết thiếu đứng đầu. 'Darfst' là dạng của du."
    },
    {
     "q": "Er ___ einen Kaffee trinken.",
     "options": [
      "möchtest",
      "möchten",
      "möchte",
      "möchtet"
     ],
     "answer": 2,
     "vi": "Anh ấy muốn uống một ly cà phê.",
     "explain": "Với er, möchten chia là möchte (giống ich). 'möchtest' là dạng của du."
    },
    {
     "q": "Ihr ___ im Unterricht leise sein.",
     "options": [
      "sollt",
      "sollen",
      "soll",
      "sollst"
     ],
     "answer": 0,
     "vi": "Các bạn nên giữ trật tự trong giờ học.",
     "explain": "Với ihr, sollen chia là sollt. 'sollen' chỉ dùng cho wir, sie và Sie."
    },
    {
     "q": "Maria ___ sehr gut Deutsch sprechen.",
     "options": [
      "kannst",
      "können",
      "kennt",
      "kann"
     ],
     "answer": 3,
     "vi": "Maria có thể nói tiếng Đức rất giỏi.",
     "explain": "Chủ ngữ Maria là ngôi thứ ba số ít nên dùng kann. 'kennt' là động từ kennen (quen biết), không đi với động từ nguyên mẫu."
    },
    {
     "q": "Ich möchte morgen nach Berlin ___.",
     "options": [
      "fahre",
      "fahren",
      "fährt",
      "gefahren"
     ],
     "answer": 1,
     "vi": "Ngày mai tôi muốn đi Berlin.",
     "explain": "Sau động từ khuyết thiếu, động từ chính đứng cuối câu ở dạng nguyên mẫu: fahren. 'fahre' là dạng đã chia, sai ở vị trí này."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich muss heute arbeite.",
      "Ich muss heute arbeiten.",
      "Ich heute muss arbeiten.",
      "Ich arbeiten muss heute."
     ],
     "answer": 1,
     "vi": "Hôm nay tôi phải làm việc.",
     "explain": "Động từ khuyết thiếu ở vị trí 2, động từ nguyên mẫu arbeiten ở cuối câu. 'arbeite' là dạng đã chia nên sai."
    },
    {
     "q": "Herr und Frau Weber, Sie ___ hier nicht parken.",
     "options": [
      "darf",
      "darfst",
      "dürft",
      "dürfen"
     ],
     "answer": 3,
     "vi": "Ông bà Weber, ông bà không được phép đỗ xe ở đây.",
     "explain": "Với Sie (lịch sự), dürfen giữ dạng nguyên mẫu. 'dürft' là dạng của ihr."
    },
    {
     "q": "___ du mir bitte helfen?",
     "options": [
      "Kannst",
      "Kann",
      "Könnt",
      "Können"
     ],
     "answer": 0,
     "vi": "Bạn có thể giúp tôi được không?",
     "explain": "Với du, können chia là kannst và đứng đầu câu hỏi. 'Kann' là dạng của ich/er."
    },
    {
     "q": "Der Arzt sagt, ich ___ mehr Wasser trinken.",
     "options": [
      "sollst",
      "sollen",
      "soll",
      "sollt"
     ],
     "answer": 2,
     "vi": "Bác sĩ nói tôi nên uống nhiều nước hơn.",
     "explain": "Lời khuyên của người khác dùng sollen; với ich chia là soll (không có đuôi). 'sollst' là dạng của du."
    },
    {
     "q": "Morgen ist Sonntag, da ___ wir nicht arbeiten.",
     "options": [
      "muss",
      "musst",
      "müsst",
      "müssen"
     ],
     "answer": 3,
     "vi": "Ngày mai là Chủ nhật, nên chúng tôi không phải làm việc.",
     "explain": "Với wir, müssen giữ nguyên dạng: müssen. 'müsst' là dạng của ihr."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Kann du morgen zur Party kommen?",
      "Kannst du morgen zur Party kommen?",
      "Kannst du kommen morgen zur Party?",
      "Kannst du morgen zur Party kommst?"
     ],
     "answer": 1,
     "vi": "Ngày mai bạn có thể đến bữa tiệc không?",
     "explain": "Đúng là Kannst (ngôi du) ở đầu câu và kommen nguyên mẫu ở cuối câu. 'Kannst du kommen morgen…' sai vì động từ nguyên mẫu không đứng cuối."
    },
    {
     "q": "Mein Bruder ___ Arzt werden.",
     "options": [
      "will",
      "willst",
      "wollt",
      "willt"
     ],
     "answer": 0,
     "vi": "Anh trai tôi muốn trở thành bác sĩ.",
     "explain": "Với er (mein Bruder), wollen chia là will. 'willst' là dạng của du; 'willt' không tồn tại."
    }
   ]
  },
  {
   "title": "Động từ tách được (trennbare Verben)",
   "intro": "Động từ tách được gồm một tiền tố (an-, auf-, aus-, ein-, mit-, zu-, fern-…) và một động từ gốc, ví dụ anrufen, aufstehen, einkaufen, fernsehen, mitbringen. Ở thì hiện tại, phần động từ gốc được chia và đứng ở vị trí 2, còn tiền tố tách ra và đứng CUỐI câu: Ich stehe um 7 Uhr auf. Er ruft seine Mutter an.\nTrong câu hỏi Có/Không và câu mệnh lệnh, động từ chia đứng đầu, tiền tố vẫn ở cuối: Kaufst du heute ein?\nKhi có động từ khuyết thiếu, động từ tách được đứng cuối câu ở dạng nguyên mẫu viết liền: Ich muss morgen früh aufstehen.\nLưu ý: phần gốc vẫn biến đổi nguyên âm như bình thường: anfangen → er fängt an, fernsehen → du siehst fern.",
   "questions": [
    {
     "q": "Ich ___ jeden Tag um 7 Uhr auf.",
     "options": [
      "aufstehe",
      "stehe",
      "stehst",
      "steht"
     ],
     "answer": 1,
     "vi": "Mỗi ngày tôi thức dậy lúc 7 giờ.",
     "explain": "Ở thì hiện tại chỉ phần gốc 'stehe' đứng ở vị trí 2, tiền tố auf ở cuối câu. 'aufstehe' sai vì tiền tố không được dính vào."
    },
    {
     "q": "Wir kaufen heute im Supermarkt ___.",
     "options": [
      "auf",
      "fern",
      "los",
      "ein"
     ],
     "answer": 3,
     "vi": "Hôm nay chúng tôi đi mua sắm ở siêu thị.",
     "explain": "Động từ là einkaufen (mua sắm), nên tiền tố ein đứng cuối câu. 'auf' không tạo thành động từ có nghĩa với kaufen ở đây."
    },
    {
     "q": "Der Film ___ um 20 Uhr an.",
     "options": [
      "fangt",
      "anfängt",
      "fängt",
      "fange"
     ],
     "answer": 2,
     "vi": "Bộ phim bắt đầu lúc 20 giờ.",
     "explain": "anfangen biến âm a → ä ở ngôi er/sie/es: er fängt … an. 'fangt' thiếu Umlaut (đó là dạng của ihr)."
    },
    {
     "q": "Wann ___ der Zug in Berlin an?",
     "options": [
      "kommt",
      "ankommt",
      "kommen",
      "kommst"
     ],
     "answer": 0,
     "vi": "Khi nào tàu đến Berlin?",
     "explain": "Động từ ankommen: phần gốc kommt đứng sau từ để hỏi, tiền tố an ở cuối. 'ankommt' sai vì tiền tố phải tách ra."
    },
    {
     "q": "Ich rufe dich morgen ___.",
     "options": [
      "ein",
      "fern",
      "los",
      "an"
     ],
     "answer": 3,
     "vi": "Ngày mai tôi sẽ gọi điện cho bạn.",
     "explain": "Gọi điện là anrufen, nên tiền tố an đứng cuối câu. Các tiền tố khác không đi với rufen theo nghĩa này."
    },
    {
     "q": "Kannst du bitte das Fenster ___?",
     "options": [
      "machen auf",
      "aufmachen",
      "aufmachst",
      "auf machst"
     ],
     "answer": 1,
     "vi": "Bạn có thể mở cửa sổ được không?",
     "explain": "Sau động từ khuyết thiếu, động từ tách được đứng cuối ở dạng nguyên mẫu viết liền: aufmachen. 'aufmachst' sai vì không được chia động từ ở cuối."
    },
    {
     "q": "Ich möchte heute Abend ___.",
     "options": [
      "fernsehen",
      "sehe fern",
      "fern sehen",
      "fernsehe"
     ],
     "answer": 0,
     "vi": "Tối nay tôi muốn xem tivi.",
     "explain": "Có möchte nên dùng nguyên mẫu viết liền fernsehen ở cuối câu. 'sehe fern' chỉ dùng khi không có động từ khuyết thiếu."
    },
    {
     "q": "Er ___ seine Freundin zur Party mit.",
     "options": [
      "mitbringt",
      "bringst",
      "bringt",
      "bringen"
     ],
     "answer": 2,
     "vi": "Anh ấy dẫn bạn gái theo đến bữa tiệc.",
     "explain": "mitbringen: phần gốc bringt (ngôi er) ở vị trí 2, mit ở cuối. 'mitbringt' sai vì tiền tố bị dính vào."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich einkaufe heute im Supermarkt.",
      "Ich kaufe ein heute im Supermarkt.",
      "Ich kaufe heute im Supermarkt ein.",
      "Ich heute kaufe im Supermarkt ein."
     ],
     "answer": 2,
     "vi": "Hôm nay tôi mua sắm ở siêu thị.",
     "explain": "Tiền tố ein phải đứng ở cuối câu, sau tất cả các thành phần khác. 'Ich kaufe ein heute…' sai vì tiền tố đứng quá sớm."
    },
    {
     "q": "Wir müssen morgen sehr früh ___.",
     "options": [
      "aufstehen",
      "stehen auf",
      "aufstehe",
      "aufgestanden"
     ],
     "answer": 0,
     "vi": "Ngày mai chúng tôi phải dậy rất sớm.",
     "explain": "Với müssen, động từ chính đứng cuối ở dạng nguyên mẫu: aufstehen. 'stehen auf' sai vì khi có động từ khuyết thiếu thì không tách."
    },
    {
     "q": "Du ___ heute sehr müde aus.",
     "options": [
      "sehst",
      "siehst",
      "aussiehst",
      "sieht"
     ],
     "answer": 1,
     "vi": "Hôm nay trông bạn rất mệt.",
     "explain": "aussehen biến âm e → ie ở ngôi du: du siehst … aus. 'sehst' sai vì thiếu biến âm."
    },
    {
     "q": "Wann ___ du morgen ab?",
     "options": [
      "fahrst",
      "abfährst",
      "fährt",
      "fährst"
     ],
     "answer": 3,
     "vi": "Ngày mai khi nào bạn khởi hành?",
     "explain": "abfahren biến âm a → ä ở ngôi du: du fährst … ab. 'fahrst' sai vì thiếu Umlaut."
    },
    {
     "q": "Ich will meine Mutter am Sonntag ___.",
     "options": [
      "anrufen",
      "rufe an",
      "anrufe",
      "rufen an"
     ],
     "answer": 0,
     "vi": "Tôi muốn gọi điện cho mẹ vào Chủ nhật.",
     "explain": "Có will nên động từ tách được đứng cuối ở dạng nguyên mẫu viết liền: anrufen. 'rufe an' sai vì động từ chính không được chia khi đã có động từ khuyết thiếu."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Sie aufräumt am Samstag ihr Zimmer.",
      "Sie räumt auf am Samstag ihr Zimmer.",
      "Sie räumt am Samstag ihr Zimmer auf.",
      "Sie räumt am Samstag auf ihr Zimmer."
     ],
     "answer": 2,
     "vi": "Thứ Bảy cô ấy dọn phòng của mình.",
     "explain": "aufräumen: räumt ở vị trí 2, auf ở cuối câu sau tân ngữ. 'Sie räumt am Samstag auf ihr Zimmer' sai vì tiền tố đứng trước tân ngữ."
    },
    {
     "q": "Der Unterricht hört heute um 12 Uhr ___.",
     "options": [
      "an",
      "auf",
      "aus",
      "ab"
     ],
     "answer": 1,
     "vi": "Hôm nay buổi học kết thúc lúc 12 giờ.",
     "explain": "Kết thúc là aufhören, nên tiền tố auf đứng cuối câu. 'an' (anhören = lắng nghe) không mang nghĩa kết thúc."
    }
   ]
  },
  {
   "title": "Mạo từ sở hữu (Possessivartikel)",
   "intro": "Mạo từ sở hữu: ich → mein, du → dein, er/es → sein, sie (cô ấy) → ihr, wir → unser, ihr → euer, sie (họ) → ihr, Sie (lịch sự) → Ihr (viết hoa).\nĐuôi giống mạo từ không xác định ein/kein:\nNominativ: der → mein, das → mein, die → meine, số nhiều → meine\nAkkusativ: der → meinen, das → mein, die → meine, số nhiều → meine\nChỉ giống đực ở Akkusativ mới đổi: Das ist mein Bruder. – Ich besuche meinen Bruder.\nLưu ý: euer mất chữ e khi có đuôi: euer Lehrer, nhưng eure Schwester, euren Hund.",
   "questions": [
    {
     "q": "Das ist ___ Bruder. (ich)",
     "options": [
      "meine",
      "meinen",
      "mein",
      "meiner"
     ],
     "answer": 2,
     "vi": "Đây là anh trai tôi.",
     "explain": "Bruder là giống đực, ở Nominativ dùng mein không có đuôi. 'meinen' là dạng Akkusativ."
    },
    {
     "q": "Das ist ___ Mutter. (ich)",
     "options": [
      "meine",
      "mein",
      "meinen",
      "meines"
     ],
     "answer": 0,
     "vi": "Đây là mẹ tôi.",
     "explain": "Mutter là giống cái (die), nên dùng meine. 'mein' chỉ dùng cho giống đực/trung ở Nominativ."
    },
    {
     "q": "Wie heißt ___ Schwester? (du)",
     "options": [
      "dein",
      "deinen",
      "deiner",
      "deine"
     ],
     "answer": 3,
     "vi": "Chị/em gái của bạn tên là gì?",
     "explain": "Schwester là giống cái, Nominativ nên dùng deine. 'dein' sai vì thiếu đuôi -e."
    },
    {
     "q": "Peter sucht ___ Ausweis. (er)",
     "options": [
      "sein",
      "seinen",
      "seine",
      "seiner"
     ],
     "answer": 1,
     "vi": "Peter đang tìm chứng minh thư của anh ấy.",
     "explain": "Ausweis là giống đực và là tân ngữ (Akkusativ), nên dùng seinen. 'sein' là dạng Nominativ."
    },
    {
     "q": "Anna liebt ___ Katze. (sie)",
     "options": [
      "ihre",
      "ihr",
      "ihren",
      "ihrer"
     ],
     "answer": 0,
     "vi": "Anna yêu con mèo của cô ấy.",
     "explain": "Katze là giống cái, Akkusativ giống cái vẫn là ihre. 'ihren' chỉ dùng cho giống đực ở Akkusativ."
    },
    {
     "q": "Wir besuchen am Sonntag ___ Großeltern.",
     "options": [
      "unser",
      "unseren",
      "unsere",
      "unserer"
     ],
     "answer": 2,
     "vi": "Chủ nhật chúng tôi đi thăm ông bà của chúng tôi.",
     "explain": "Großeltern là số nhiều, Akkusativ số nhiều dùng unsere. 'unseren' là đuôi của giống đực Akkusativ."
    },
    {
     "q": "Kinder, wo ist ___ Lehrer?",
     "options": [
      "eure",
      "euer",
      "euren",
      "eurer"
     ],
     "answer": 1,
     "vi": "Các em ơi, thầy giáo của các em đâu rồi?",
     "explain": "Lehrer là giống đực ở Nominativ nên dùng euer không đuôi. 'euren' là dạng Akkusativ."
    },
    {
     "q": "Herr Müller, ist das ___ Auto?",
     "options": [
      "Ihre",
      "Ihren",
      "Ihrer",
      "Ihr"
     ],
     "answer": 3,
     "vi": "Ông Müller, đây có phải là xe hơi của ông không?",
     "explain": "Nói lịch sự với Sie dùng Ihr viết hoa; Auto là giống trung ở Nominativ nên không có đuôi. 'Ihre' dùng cho giống cái hoặc số nhiều."
    },
    {
     "q": "Ich habe ___ Handy zu Hause vergessen.",
     "options": [
      "meinen",
      "meine",
      "meinem",
      "mein"
     ],
     "answer": 3,
     "vi": "Tôi đã để quên điện thoại ở nhà.",
     "explain": "Handy là giống trung (das); Akkusativ giống trung vẫn là mein. 'meinen' chỉ dùng cho giống đực."
    },
    {
     "q": "Kennst du ___ Freund Tom? (ich)",
     "options": [
      "mein",
      "meinen",
      "meine",
      "meiner"
     ],
     "answer": 1,
     "vi": "Bạn có biết Tom, bạn của tôi không?",
     "explain": "Freund là giống đực và là tân ngữ của kennen (Akkusativ), nên dùng meinen. 'mein' là dạng Nominativ."
    },
    {
     "q": "Wo sind ___ Eltern? (du)",
     "options": [
      "dein",
      "deinen",
      "deine",
      "deiner"
     ],
     "answer": 2,
     "vi": "Bố mẹ bạn ở đâu?",
     "explain": "Eltern là số nhiều, Nominativ dùng deine. 'dein' sai vì số nhiều cần đuôi -e."
    },
    {
     "q": "Ihr habt ein Haus. ___ Haus ist sehr schön.",
     "options": [
      "Euer",
      "Eure",
      "Euren",
      "Eures"
     ],
     "answer": 0,
     "vi": "Các bạn có một ngôi nhà. Ngôi nhà của các bạn rất đẹp.",
     "explain": "Haus là giống trung, Nominativ nên dùng Euer không đuôi. 'Eure' dùng cho giống cái hoặc số nhiều."
    },
    {
     "q": "Lisa und Tom besuchen heute ___ Freunde.",
     "options": [
      "ihren",
      "ihre",
      "ihr",
      "ihrer"
     ],
     "answer": 1,
     "vi": "Hôm nay Lisa và Tom đi thăm bạn bè của họ.",
     "explain": "Lisa und Tom = sie (họ) → ihr; Freunde là số nhiều Akkusativ nên dùng ihre. 'ihren' là đuôi giống đực Akkusativ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Wir suchen unser Hund.",
      "Wir suchen unsere Hund.",
      "Wir suchen unseres Hund.",
      "Wir suchen unseren Hund."
     ],
     "answer": 3,
     "vi": "Chúng tôi đang tìm con chó của chúng tôi.",
     "explain": "Hund là giống đực, làm tân ngữ (Akkusativ) nên cần đuôi -en: unseren. 'unser Hund' chỉ đúng ở Nominativ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Habt ihr euer Bücher?",
      "Habt ihr euren Bücher?",
      "Habt ihr eure Bücher?",
      "Habt ihr eures Bücher?"
     ],
     "answer": 2,
     "vi": "Các bạn có mang sách của mình không?",
     "explain": "Bücher là số nhiều Akkusativ nên dùng eure (euer mất e khi có đuôi). 'euren Bücher' sai vì -en là đuôi giống đực Akkusativ."
    }
   ]
  },
  {
   "title": "Câu mệnh lệnh (Imperativ)",
   "intro": "Câu mệnh lệnh có ba dạng:\ndu: lấy dạng chia của du, bỏ đuôi -st và bỏ đại từ: du kommst → Komm! Động từ đổi e → i/ie vẫn giữ: Gib! Lies! Iss! Nimm! Nhưng a → ä thì KHÔNG giữ: du fährst → Fahr! Gốc tận cùng -t/-d thêm -e: Warte! Arbeite!\nihr: giống dạng chia của ihr, bỏ đại từ: Kommt! Lest!\nSie: động từ nguyên mẫu + Sie: Kommen Sie! Nehmen Sie Platz!\nĐộng từ tách được: tiền tố đứng cuối: Mach das Fenster auf! Ruf mich an!\nsein là bất quy tắc: Sei ruhig! – Seid ruhig! – Seien Sie ruhig!",
   "questions": [
    {
     "q": "___ bitte schnell! (du – kommen)",
     "options": [
      "Kommst",
      "Kommen",
      "Kommt",
      "Komm"
     ],
     "answer": 3,
     "vi": "Đến nhanh lên nhé!",
     "explain": "Mệnh lệnh với du: bỏ đuôi -st và đại từ: Komm! 'Kommt' là dạng mệnh lệnh của ihr."
    },
    {
     "q": "___ Sie bitte Platz! (nehmen)",
     "options": [
      "Nimm",
      "Nehmen",
      "Nehmt",
      "Nimmst"
     ],
     "answer": 1,
     "vi": "Xin mời ông/bà ngồi!",
     "explain": "Với Sie dùng nguyên mẫu + Sie: Nehmen Sie! 'Nimm' là mệnh lệnh của du."
    },
    {
     "q": "Kinder, ___ bitte leise!",
     "options": [
      "seid",
      "sei",
      "seien",
      "sind"
     ],
     "answer": 0,
     "vi": "Các con ơi, hãy giữ yên lặng nhé!",
     "explain": "Nói với nhiều trẻ (ihr), mệnh lệnh của sein là seid. 'sei' chỉ dùng cho du."
    },
    {
     "q": "___ das Buch! (du – lesen)",
     "options": [
      "Les",
      "Lest",
      "Lies",
      "Liest"
     ],
     "answer": 2,
     "vi": "Hãy đọc cuốn sách đi!",
     "explain": "lesen đổi e → ie ở ngôi du (du liest), nên mệnh lệnh là Lies! 'Les' sai vì thiếu biến âm."
    },
    {
     "q": "___ doch langsamer! (du – fahren)",
     "options": [
      "Fähr",
      "Fahr",
      "Fährst",
      "Fahrt"
     ],
     "answer": 1,
     "vi": "Lái chậm hơn đi!",
     "explain": "Biến âm a → ä không được giữ trong mệnh lệnh: Fahr! 'Fähr' sai vì giữ Umlaut."
    },
    {
     "q": "Mach bitte das Fenster ___!",
     "options": [
      "an",
      "ein",
      "mit",
      "auf"
     ],
     "answer": 3,
     "vi": "Mở cửa sổ ra giùm nhé!",
     "explain": "aufmachen (mở) là động từ tách được, tiền tố auf đứng cuối câu mệnh lệnh. 'an' (anmachen = bật) không dùng cho cửa sổ."
    },
    {
     "q": "___ Sie bitte hier! (warten)",
     "options": [
      "Wartet",
      "Warte",
      "Warten",
      "Wartest"
     ],
     "answer": 2,
     "vi": "Xin ông/bà vui lòng đợi ở đây!",
     "explain": "Với Sie dùng nguyên mẫu Warten + Sie. 'Warte' là mệnh lệnh của du."
    },
    {
     "q": "___ ruhig, Paul!",
     "options": [
      "Sei",
      "Bist",
      "Seid",
      "Seien"
     ],
     "answer": 0,
     "vi": "Paul, im lặng nào!",
     "explain": "Nói với một người thân (du), mệnh lệnh của sein là Sei. 'Seid' dùng cho ihr."
    },
    {
     "q": "Ihr seid müde. ___ doch ins Bett!",
     "options": [
      "Geht",
      "Gehen",
      "Geh",
      "Gehst"
     ],
     "answer": 0,
     "vi": "Các con mệt rồi. Đi ngủ đi!",
     "explain": "Với ihr, mệnh lệnh giống dạng chia ihr: Geht! 'Geh' chỉ dùng cho du."
    },
    {
     "q": "___ mir bitte das Salz! (du – geben)",
     "options": [
      "Geb",
      "Gibst",
      "Gib",
      "Gebt"
     ],
     "answer": 2,
     "vi": "Đưa giùm mình lọ muối!",
     "explain": "geben đổi e → i ở ngôi du (du gibst), nên mệnh lệnh là Gib! 'Geb' sai vì thiếu biến âm."
    },
    {
     "q": "Ruf mich bitte morgen ___!",
     "options": [
      "auf",
      "ein",
      "zu",
      "an"
     ],
     "answer": 3,
     "vi": "Ngày mai nhớ gọi điện cho mình nhé!",
     "explain": "anrufen là động từ tách được, nên an đứng cuối câu mệnh lệnh. 'auf' (aufrufen = gọi tên) không mang nghĩa gọi điện."
    },
    {
     "q": "___ bitte pünktlich, Frau Schmidt!",
     "options": [
      "Sind Sie",
      "Seien Sie",
      "Sei",
      "Seid Sie"
     ],
     "answer": 1,
     "vi": "Bà Schmidt, xin bà vui lòng đến đúng giờ!",
     "explain": "Mệnh lệnh lịch sự của sein là Seien Sie. 'Sind Sie' là câu hỏi, không phải mệnh lệnh."
    },
    {
     "q": "___ nicht so viel Schokolade! (du – essen)",
     "options": [
      "Ess",
      "Isst",
      "Iss",
      "Esst"
     ],
     "answer": 2,
     "vi": "Đừng ăn nhiều sô-cô-la như thế!",
     "explain": "essen đổi e → i ở ngôi du (du isst), mệnh lệnh là Iss! 'Ess' sai vì thiếu biến âm."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Steh bitte früh auf!",
      "Aufsteh bitte früh!",
      "Stehst bitte früh auf!",
      "Steh auf bitte früh!"
     ],
     "answer": 0,
     "vi": "Nhớ dậy sớm nhé!",
     "explain": "Mệnh lệnh du: Steh đứng đầu, tiền tố auf ở cuối câu. 'Stehst' sai vì mệnh lệnh không có đuôi -st."
    },
    {
     "q": "Câu nào đúng ngữ pháp? (ihr)",
     "options": [
      "Einkauft bitte Brot!",
      "Kaufen bitte Brot ein!",
      "Kauf ihr bitte Brot ein!",
      "Kauft bitte Brot ein!"
     ],
     "answer": 3,
     "vi": "Các bạn mua bánh mì nhé!",
     "explain": "Mệnh lệnh ihr: Kauft đứng đầu, bỏ đại từ, tiền tố ein ở cuối. 'Kaufen bitte Brot ein!' sai vì dạng Kaufen cần có Sie đi kèm."
    }
   ]
  },
  {
   "title": "Giới từ thời gian & nơi chốn cơ bản (am, um, im, von…bis; in, aus, nach, bei, zu)",
   "intro": "Thời gian: um + giờ (um 8 Uhr); am + ngày trong tuần, buổi trong ngày, cuối tuần (am Montag, am Abend, am Wochenende) – nhưng in der Nacht; im + tháng, mùa (im Mai, im Sommer); von … bis … cho khoảng thời gian (von 9 bis 17 Uhr).\nNơi chốn: in = ở trong thành phố/nước (in Berlin); aus = đến từ (aus Vietnam); nach = đi đến thành phố/nước không có mạo từ (nach Berlin) và nach Hause (về nhà); zu = đi đến người hoặc địa điểm (zum Arzt, zur Schule; zum = zu dem, zur = zu der); bei = ở chỗ người/công ty (bei Siemens, beim Arzt, bei meiner Oma).\nCố định: zu Hause = ở nhà, nach Hause = về nhà.",
   "questions": [
    {
     "q": "Der Kurs beginnt ___ 9 Uhr.",
     "options": [
      "um",
      "am",
      "im",
      "in"
     ],
     "answer": 0,
     "vi": "Khóa học bắt đầu lúc 9 giờ.",
     "explain": "Trước giờ đồng hồ dùng um. 'am' dùng cho ngày trong tuần."
    },
    {
     "q": "Ich habe ___ Montag frei.",
     "options": [
      "um",
      "im",
      "am",
      "in"
     ],
     "answer": 2,
     "vi": "Thứ Hai tôi được nghỉ.",
     "explain": "Trước các ngày trong tuần dùng am. 'um' chỉ dùng với giờ."
    },
    {
     "q": "Mein Geburtstag ist ___ Mai.",
     "options": [
      "am",
      "im",
      "um",
      "in"
     ],
     "answer": 1,
     "vi": "Sinh nhật tôi vào tháng Năm.",
     "explain": "Trước tên tháng dùng im (= in dem). 'am' dùng cho ngày, không dùng cho tháng."
    },
    {
     "q": "Ich komme ___ Vietnam.",
     "options": [
      "von",
      "in",
      "nach",
      "aus"
     ],
     "answer": 3,
     "vi": "Tôi đến từ Việt Nam.",
     "explain": "Nói về quê quán dùng aus. 'von' không dùng để chỉ nguồn gốc quốc gia."
    },
    {
     "q": "Wir fliegen morgen ___ Berlin.",
     "options": [
      "zu",
      "bei",
      "nach",
      "um"
     ],
     "answer": 2,
     "vi": "Ngày mai chúng tôi bay đến Berlin.",
     "explain": "Đi đến thành phố không có mạo từ dùng nach. 'zu' dùng cho người hoặc địa điểm như zum Arzt."
    },
    {
     "q": "Ich wohne ___ Hamburg.",
     "options": [
      "in",
      "nach",
      "bei",
      "zu"
     ],
     "answer": 0,
     "vi": "Tôi sống ở Hamburg.",
     "explain": "Ở trong một thành phố dùng in. 'nach' chỉ hướng đi đến, không dùng với wohnen."
    },
    {
     "q": "Ich arbeite von 9 ___ 17 Uhr.",
     "options": [
      "zu",
      "nach",
      "um",
      "bis"
     ],
     "answer": 3,
     "vi": "Tôi làm việc từ 9 giờ đến 17 giờ.",
     "explain": "Khoảng thời gian dùng cặp von … bis. 'zu' không đi với von để chỉ thời gian."
    },
    {
     "q": "Ich gehe heute ___ Arzt.",
     "options": [
      "beim",
      "zum",
      "nach",
      "zur"
     ],
     "answer": 1,
     "vi": "Hôm nay tôi đi khám bác sĩ.",
     "explain": "Đi đến chỗ một người dùng zu; der Arzt là giống đực nên zu dem = zum. 'beim' chỉ vị trí (ở chỗ bác sĩ), không chỉ hướng đi."
    },
    {
     "q": "Mein Vater arbeitet ___ Siemens.",
     "options": [
      "in",
      "bei",
      "zu",
      "nach"
     ],
     "answer": 1,
     "vi": "Bố tôi làm việc ở công ty Siemens.",
     "explain": "Làm việc ở một công ty dùng bei. 'in' không dùng trước tên công ty."
    },
    {
     "q": "Am Abend gehe ich ___ Hause.",
     "options": [
      "zu",
      "bei",
      "in",
      "nach"
     ],
     "answer": 3,
     "vi": "Buổi tối tôi về nhà.",
     "explain": "Về nhà (có chuyển động) là nach Hause. 'zu Hause' nghĩa là ở nhà, không dùng với gehen."
    },
    {
     "q": "Heute bleibe ich ___ Hause.",
     "options": [
      "zu",
      "nach",
      "in",
      "bei"
     ],
     "answer": 0,
     "vi": "Hôm nay tôi ở nhà.",
     "explain": "Ở nhà (không chuyển động) là zu Hause. 'nach Hause' chỉ dùng khi đi về nhà."
    },
    {
     "q": "___ Wochenende besuche ich meine Oma.",
     "options": [
      "Im",
      "Um",
      "Am",
      "In"
     ],
     "answer": 2,
     "vi": "Cuối tuần tôi đi thăm bà.",
     "explain": "Cuối tuần dùng am: am Wochenende. 'Im' dùng cho tháng và mùa."
    },
    {
     "q": "Die Kinder gehen jeden Morgen ___ Schule.",
     "options": [
      "zum",
      "nach",
      "bei",
      "zur"
     ],
     "answer": 3,
     "vi": "Mỗi sáng bọn trẻ đi học.",
     "explain": "die Schule là giống cái nên zu der = zur. 'zum' chỉ dùng cho danh từ giống đực/trung."
    },
    {
     "q": "Ich schlafe ___ der Nacht sehr gut.",
     "options": [
      "am",
      "in",
      "um",
      "im"
     ],
     "answer": 1,
     "vi": "Ban đêm tôi ngủ rất ngon.",
     "explain": "Ngoại lệ: các buổi trong ngày dùng am, nhưng ban đêm là in der Nacht. 'am der Nacht' sai vì am đã chứa mạo từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich fahre am Samstag zu meiner Oma.",
      "Ich fahre am Samstag nach meiner Oma.",
      "Ich fahre im Samstag zu meiner Oma.",
      "Ich fahre um Samstag bei meiner Oma."
     ],
     "answer": 0,
     "vi": "Thứ Bảy tôi đi đến nhà bà.",
     "explain": "Đi đến chỗ một người dùng zu, ngày trong tuần dùng am. 'nach meiner Oma' sai vì nach chỉ dùng cho thành phố/nước."
    }
   ]
  },
  {
   "title": "Số nhiều của danh từ (Pluralformen) và mạo từ die",
   "intro": "Ở số nhiều, mạo từ xác định luôn là die cho cả ba giống: der Tisch → die Tische, das Kind → die Kinder, die Frau → die Frauen.\nCác dạng số nhiều chính:\n-e: der Tag → die Tage; ¨-e: der Stuhl → die Stühle\n-er: das Kind → die Kinder; ¨-er: das Buch → die Bücher, der Mann → die Männer\n-n: die Lampe → die Lampen; -en: die Frau → die Frauen, der Student → die Studenten\n-s: das Auto → die Autos (từ mượn, tận cùng -o, -a)\n- / ¨-: der Lehrer → die Lehrer, der Apfel → die Äpfel, die Tochter → die Töchter\nMẹo: danh từ giống cái tận cùng -e thêm -n; -ung, -heit, -keit thêm -en; giống đực/trung tận cùng -er, -el, -en thường không thêm đuôi.",
   "questions": [
    {
     "q": "Das Kind spielt. – Die ___ spielen.",
     "options": [
      "Kinds",
      "Kinder",
      "Kinden",
      "Kindes"
     ],
     "answer": 1,
     "vi": "Đứa trẻ chơi. – Những đứa trẻ chơi.",
     "explain": "das Kind có số nhiều với đuôi -er: die Kinder. 'Kinds' sai vì Kind không thuộc nhóm -s."
    },
    {
     "q": "Im Zimmer sind drei ___. (die Lampe)",
     "options": [
      "Lampes",
      "Lämpe",
      "Lampe",
      "Lampen"
     ],
     "answer": 3,
     "vi": "Trong phòng có ba cái đèn.",
     "explain": "Danh từ giống cái tận cùng -e thêm -n: die Lampen. 'Lampe' là số ít."
    },
    {
     "q": "Ich habe zwei ___. (das Auto)",
     "options": [
      "Auten",
      "Autoe",
      "Autos",
      "Autoen"
     ],
     "answer": 2,
     "vi": "Tôi có hai chiếc xe hơi.",
     "explain": "Danh từ tận cùng -o thêm -s: die Autos. 'Autoen' sai vì nhóm -en không áp dụng cho từ này."
    },
    {
     "q": "Auf dem Tisch liegen drei ___. (das Buch)",
     "options": [
      "Bücher",
      "Buchs",
      "Buche",
      "Büchen"
     ],
     "answer": 0,
     "vi": "Trên bàn có ba quyển sách.",
     "explain": "das Buch thuộc nhóm ¨-er: die Bücher. 'Buche' sai vì thiếu Umlaut và đuôi -er."
    },
    {
     "q": "Am Tisch stehen vier ___. (der Stuhl)",
     "options": [
      "Stuhle",
      "Stühlen",
      "Stuhls",
      "Stühle"
     ],
     "answer": 3,
     "vi": "Quanh bàn có bốn cái ghế.",
     "explain": "der Stuhl thuộc nhóm ¨-e: die Stühle. 'Stuhle' sai vì thiếu Umlaut."
    },
    {
     "q": "Wie viele ___ arbeiten hier? (die Frau)",
     "options": [
      "Fraue",
      "Frauen",
      "Fräuen",
      "Fraus"
     ],
     "answer": 1,
     "vi": "Có bao nhiêu phụ nữ làm việc ở đây?",
     "explain": "die Frau thêm -en: die Frauen. 'Fräuen' sai vì nhóm -en không có Umlaut."
    },
    {
     "q": "In der Schule arbeiten fünf ___. (der Lehrer)",
     "options": [
      "Lehrer",
      "Lehrern",
      "Lehrers",
      "Lehrere"
     ],
     "answer": 0,
     "vi": "Ở trường có năm giáo viên làm việc.",
     "explain": "Danh từ giống đực tận cùng -er không thêm đuôi ở số nhiều: die Lehrer. 'Lehrern' chỉ dùng ở Dativ số nhiều."
    },
    {
     "q": "___ Hunde bellen laut.",
     "options": [
      "Der",
      "Das",
      "Die",
      "Den"
     ],
     "answer": 2,
     "vi": "Những con chó sủa to.",
     "explain": "Ở số nhiều mạo từ xác định luôn là die. 'Der' là mạo từ của der Hund ở số ít."
    },
    {
     "q": "Ich kaufe drei ___. (der Apfel)",
     "options": [
      "Apfel",
      "Äpfeln",
      "Äpfel",
      "Apfels"
     ],
     "answer": 2,
     "vi": "Tôi mua ba quả táo.",
     "explain": "der Apfel thuộc nhóm ¨-: chỉ thêm Umlaut, không thêm đuôi: die Äpfel. 'Apfel' sai vì thiếu Umlaut."
    },
    {
     "q": "Mein Vater liest jeden Tag zwei ___. (die Zeitung)",
     "options": [
      "Zeitungen",
      "Zeitunge",
      "Zeitungs",
      "Zeitung"
     ],
     "answer": 0,
     "vi": "Bố tôi đọc hai tờ báo mỗi ngày.",
     "explain": "Danh từ tận cùng -ung thêm -en: die Zeitungen. 'Zeitungs' sai vì không thuộc nhóm -s."
    },
    {
     "q": "In der Stadt gibt es viele alte ___. (das Haus)",
     "options": [
      "Hause",
      "Häuser",
      "Häuse",
      "Hausen"
     ],
     "answer": 1,
     "vi": "Trong thành phố có nhiều ngôi nhà cổ.",
     "explain": "das Haus thuộc nhóm ¨-er: die Häuser. 'Häuse' sai vì thiếu đuôi -er."
    },
    {
     "q": "Die ___ sind sehr nett. (der Student)",
     "options": [
      "Studente",
      "Students",
      "Studenter",
      "Studenten"
     ],
     "answer": 3,
     "vi": "Các sinh viên rất dễ thương.",
     "explain": "der Student thêm -en ở số nhiều: die Studenten. 'Students' là dạng tiếng Anh, sai trong tiếng Đức."
    },
    {
     "q": "Meine ___ wohnen in Hanoi. (die Tochter)",
     "options": [
      "Töchter",
      "Tochtern",
      "Tochter",
      "Töchtern"
     ],
     "answer": 0,
     "vi": "Các con gái của tôi sống ở Hà Nội.",
     "explain": "die Tochter thuộc nhóm ¨-: chỉ thêm Umlaut: die Töchter. 'Töchtern' chỉ dùng ở Dativ số nhiều."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die Manns trinken Kaffee.",
      "Die Männe trinken Kaffee.",
      "Die Männer trinken Kaffee.",
      "Der Männer trinken Kaffee."
     ],
     "answer": 2,
     "vi": "Những người đàn ông uống cà phê.",
     "explain": "der Mann thuộc nhóm ¨-er: die Männer, và mạo từ số nhiều là die. 'Der Männer' sai vì số nhiều không dùng der."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die Täge im Sommer sind lang.",
      "Die Tage im Sommer sind lang.",
      "Die Tagen im Sommer sind lang.",
      "Das Tage im Sommer sind lang."
     ],
     "answer": 1,
     "vi": "Những ngày mùa hè thì dài.",
     "explain": "der Tag thuộc nhóm -e không có Umlaut: die Tage. 'Täge' sai vì Tag không biến âm."
    }
   ]
  }
 ],
 "A2": [
  {
   "title": "Thì Perfekt với haben / sein (Perfekt mit haben oder sein)",
   "intro": "Perfekt dùng để kể chuyện đã xảy ra trong quá khứ, nhất là trong văn nói. Cấu trúc: trợ động từ haben hoặc sein (chia, ở vị trí 2) + Partizip II (ở cuối câu).\nDùng sein với: động từ chuyển động có hướng (gehen, fahren, fliegen, kommen, laufen), động từ chỉ sự thay đổi trạng thái (aufstehen, einschlafen, werden, sterben) và sein, bleiben, passieren.\nDùng haben với hầu hết các động từ còn lại, kể cả động từ phản thân và động từ có tân ngữ Akkusativ: Ich habe gespielt. Ich habe mich gefreut.\nVí dụ: Wir sind nach Berlin gefahren. – Er hat einen Brief geschrieben.\nTrong mệnh đề phụ (weil, dass…), trợ động từ đứng cuối cùng: …, weil ich den Bus verpasst habe.",
   "questions": [
    {
     "q": "Ich ___ gestern Fußball gespielt.",
     "options": [
      "habe",
      "bin",
      "hat",
      "hast"
     ],
     "answer": 0,
     "vi": "Hôm qua tôi đã chơi bóng đá.",
     "explain": "spielen không phải động từ chuyển động hay thay đổi trạng thái nên dùng haben, với ich là habe. \"bin\" sai vì sai trợ động từ."
    },
    {
     "q": "Wir ___ nach Berlin gefahren.",
     "options": [
      "haben",
      "seid",
      "sind",
      "hat"
     ],
     "answer": 2,
     "vi": "Chúng tôi đã đi đến Berlin.",
     "explain": "fahren (đi đến một nơi) là chuyển động có hướng nên dùng sein, với wir là sind. \"haben\" sai trợ động từ, \"seid\" là dạng của ihr."
    },
    {
     "q": "___ du schon gegessen?",
     "options": [
      "Bist",
      "Hast",
      "Hat",
      "Habt"
     ],
     "answer": 1,
     "vi": "Bạn đã ăn chưa?",
     "explain": "essen dùng haben, ngôi du chia là hast. \"Bist\" sai vì essen không dùng sein."
    },
    {
     "q": "Mein Bruder ___ um 7 Uhr aufgestanden.",
     "options": [
      "hat",
      "sind",
      "habe",
      "ist"
     ],
     "answer": 3,
     "vi": "Anh trai tôi đã thức dậy lúc 7 giờ.",
     "explain": "aufstehen chỉ sự thay đổi trạng thái (từ nằm sang đứng) nên dùng sein: er ist. \"hat\" là lỗi thường gặp nhưng sai trợ động từ."
    },
    {
     "q": "Was ___ ihr am Wochenende gemacht?",
     "options": [
      "seid",
      "habt",
      "haben",
      "hat"
     ],
     "answer": 1,
     "vi": "Cuối tuần các bạn đã làm gì?",
     "explain": "machen dùng haben, ngôi ihr chia là habt. \"seid\" đúng ngôi nhưng sai trợ động từ."
    },
    {
     "q": "Das Kind ___ sofort eingeschlafen.",
     "options": [
      "ist",
      "hat",
      "sind",
      "wird"
     ],
     "answer": 0,
     "vi": "Đứa trẻ đã ngủ thiếp đi ngay lập tức.",
     "explain": "einschlafen là thay đổi trạng thái (từ thức sang ngủ) nên dùng sein: ist. \"hat\" sai vì đây không phải động từ dùng haben."
    },
    {
     "q": "Gestern ___ ich den ganzen Tag zu Hause geblieben.",
     "options": [
      "habe",
      "hat",
      "ist",
      "bin"
     ],
     "answer": 3,
     "vi": "Hôm qua tôi đã ở nhà cả ngày.",
     "explain": "bleiben là ngoại lệ luôn dùng sein trong Perfekt, ich bin. \"habe\" sai vì bleiben không đi với haben."
    },
    {
     "q": "Meine Eltern ___ letztes Jahr in Wien gewesen.",
     "options": [
      "haben",
      "ist",
      "sind",
      "hat"
     ],
     "answer": 2,
     "vi": "Bố mẹ tôi năm ngoái đã ở Viên.",
     "explain": "Perfekt của sein dùng chính sein làm trợ động từ, chủ ngữ số nhiều nên là sind. \"haben\" là lỗi phổ biến của người học."
    },
    {
     "q": "Was ___ denn passiert?",
     "options": [
      "hat",
      "sind",
      "ist",
      "habe"
     ],
     "answer": 2,
     "vi": "Đã xảy ra chuyện gì vậy?",
     "explain": "passieren luôn dùng sein trong Perfekt, chủ ngữ là was (ngôi 3 số ít) nên là ist. \"hat\" sai trợ động từ."
    },
    {
     "q": "Ich ___ mich sehr über das Geschenk gefreut.",
     "options": [
      "habe",
      "bin",
      "hat",
      "ist"
     ],
     "answer": 0,
     "vi": "Tôi đã rất vui vì món quà.",
     "explain": "Động từ phản thân (sich freuen) dùng haben trong Perfekt: ich habe mich gefreut. \"bin\" sai vì động từ phản thân không dùng sein."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich habe geschrieben gestern einen Brief.",
      "Ich bin gestern einen Brief geschrieben.",
      "Ich gestern habe einen Brief geschrieben.",
      "Ich habe gestern einen Brief geschrieben."
     ],
     "answer": 3,
     "vi": "Hôm qua tôi đã viết một lá thư.",
     "explain": "Trợ động từ habe đứng vị trí 2, Partizip II geschrieben đứng cuối câu. Câu với \"geschrieben\" ở giữa sai vị trí, câu với \"bin\" sai trợ động từ."
    },
    {
     "q": "Er ___ mit dem Flugzeug nach Hanoi geflogen.",
     "options": [
      "hat",
      "ist",
      "sind",
      "habe"
     ],
     "answer": 1,
     "vi": "Anh ấy đã bay đến Hà Nội bằng máy bay.",
     "explain": "fliegen (bay đến đâu) là chuyển động có hướng nên dùng sein: er ist. \"hat\" sai trợ động từ."
    },
    {
     "q": "Frau Weber ___ im Mai 40 Jahre alt geworden.",
     "options": [
      "ist",
      "hat",
      "habe",
      "sind"
     ],
     "answer": 0,
     "vi": "Bà Weber đã tròn 40 tuổi vào tháng Năm.",
     "explain": "werden chỉ sự thay đổi trạng thái nên dùng sein: sie ist geworden. \"hat\" sai vì werden không đi với haben."
    },
    {
     "q": "Ich bin zu spät gekommen, weil ich den Bus verpasst ___.",
     "options": [
      "bin",
      "habe",
      "hat",
      "ist"
     ],
     "answer": 1,
     "vi": "Tôi đã đến muộn vì tôi đã lỡ chuyến xe buýt.",
     "explain": "verpassen có tân ngữ Akkusativ (den Bus) nên dùng haben, trong mệnh đề weil trợ động từ đứng cuối: verpasst habe. \"bin\" sai trợ động từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Der Zug hat pünktlich angekommen.",
      "Der Zug ist pünktlich ankommen.",
      "Der Zug ist pünktlich angekommen.",
      "Der Zug pünktlich ist angekommen."
     ],
     "answer": 2,
     "vi": "Tàu đã đến đúng giờ.",
     "explain": "ankommen là chuyển động đến đích nên dùng sein, Partizip II là angekommen ở cuối câu. Câu với \"hat\" sai trợ động từ."
    }
   ]
  },
  {
   "title": "Phân từ II (Partizip II)",
   "intro": "Partizip II dùng để tạo thì Perfekt. Các nhóm chính:\n• Động từ có quy tắc: ge- + gốc + -t: machen → gemacht, hören → gehört; gốc tận cùng -t/-d thêm -et: arbeiten → gearbeitet.\n• Động từ bất quy tắc: ge- + gốc (thường đổi nguyên âm) + -en: schreiben → geschrieben, trinken → getrunken, verstehen → verstanden.\n• Động từ hỗn hợp: đổi nguyên âm nhưng đuôi -t: denken → gedacht, bringen → gebracht, wissen → gewusst.\n• Động từ tách được: ge- chen giữa tiền tố và gốc: einkaufen → eingekauft, ankommen → angekommen, anrufen → angerufen.\n• Động từ không tách được (be-, ver-, er-, ent-, emp-, ge-, zer-, miss-) và động từ đuôi -ieren: KHÔNG có ge-: besuchen → besucht, studieren → studiert.",
   "questions": [
    {
     "q": "Ich habe gestern Musik ___. (hören)",
     "options": [
      "gehört",
      "gehören",
      "gehöret",
      "hörte"
     ],
     "answer": 0,
     "vi": "Hôm qua tôi đã nghe nhạc.",
     "explain": "hören là động từ có quy tắc: ge- + hör + -t = gehört. \"gehören\" là một động từ khác (thuộc về), không phải Partizip II."
    },
    {
     "q": "Er hat einen Kaffee ___. (trinken)",
     "options": [
      "getrinkt",
      "getrankt",
      "getrunken",
      "trinkt"
     ],
     "answer": 2,
     "vi": "Anh ấy đã uống một cốc cà phê.",
     "explain": "trinken là động từ bất quy tắc: getrunken (đổi i → u, đuôi -en). \"getrinkt\" sai vì chia theo kiểu có quy tắc."
    },
    {
     "q": "Wir haben bis 18 Uhr ___. (arbeiten)",
     "options": [
      "gearbeitt",
      "gearbeitet",
      "arbeitet",
      "gearbeiten"
     ],
     "answer": 1,
     "vi": "Chúng tôi đã làm việc đến 18 giờ.",
     "explain": "Gốc arbeit- tận cùng bằng -t nên thêm -et: gearbeitet. \"gearbeitt\" thiếu nguyên âm e."
    },
    {
     "q": "Hast du die Hausaufgaben schon ___? (machen)",
     "options": [
      "gemachen",
      "macht",
      "machte",
      "gemacht"
     ],
     "answer": 3,
     "vi": "Bạn đã làm bài tập về nhà chưa?",
     "explain": "machen có quy tắc: ge- + mach + -t = gemacht. \"gemachen\" sai vì dùng đuôi -en của động từ bất quy tắc."
    },
    {
     "q": "Sie hat am Sonntag ihre Oma ___. (besuchen)",
     "options": [
      "gebesucht",
      "besucht",
      "besuchen",
      "gebesuchen"
     ],
     "answer": 1,
     "vi": "Chủ nhật cô ấy đã đến thăm bà.",
     "explain": "besuchen có tiền tố không tách được be- nên không thêm ge-: besucht. \"gebesucht\" là lỗi rất thường gặp."
    },
    {
     "q": "Ich bin heute um 6 Uhr ___. (aufstehen)",
     "options": [
      "aufgestanden",
      "geaufstanden",
      "aufgesteht",
      "aufstehen"
     ],
     "answer": 0,
     "vi": "Hôm nay tôi đã thức dậy lúc 6 giờ.",
     "explain": "aufstehen tách được nên ge- chen giữa: auf-ge-standen. \"geaufstanden\" sai vì ge- đặt trước tiền tố."
    },
    {
     "q": "Wir haben im Supermarkt ___. (einkaufen)",
     "options": [
      "geeinkauft",
      "eingekaufen",
      "einkaufte",
      "eingekauft"
     ],
     "answer": 3,
     "vi": "Chúng tôi đã mua sắm ở siêu thị.",
     "explain": "einkaufen tách được và có quy tắc: ein-ge-kauft. \"geeinkauft\" sai vị trí ge-."
    },
    {
     "q": "Er hat Jura in Köln ___. (studieren)",
     "options": [
      "gestudiert",
      "studieret",
      "studiert",
      "gestudieren"
     ],
     "answer": 2,
     "vi": "Anh ấy đã học ngành luật ở Köln.",
     "explain": "Động từ đuôi -ieren không có ge-: studiert. \"gestudiert\" là lỗi phổ biến."
    },
    {
     "q": "Hast du die Frage ___? (verstehen)",
     "options": [
      "geverstanden",
      "versteht",
      "verstanden",
      "verstandet"
     ],
     "answer": 2,
     "vi": "Bạn đã hiểu câu hỏi chưa?",
     "explain": "verstehen có tiền tố không tách được ver- và bất quy tắc: verstanden. \"geverstanden\" sai vì thêm ge-."
    },
    {
     "q": "Sie hat mir eine Karte aus dem Urlaub ___. (schreiben)",
     "options": [
      "geschrieben",
      "geschreibt",
      "geschriebt",
      "schrieb"
     ],
     "answer": 0,
     "vi": "Cô ấy đã viết cho tôi một tấm bưu thiếp từ kỳ nghỉ.",
     "explain": "schreiben bất quy tắc: geschrieben (ei → ie, đuôi -en). \"geschreibt\" sai vì chia như động từ có quy tắc."
    },
    {
     "q": "Ich habe oft an dich ___. (denken)",
     "options": [
      "gedenkt",
      "gedunken",
      "gedachten",
      "gedacht"
     ],
     "answer": 3,
     "vi": "Tôi đã thường nghĩ đến bạn.",
     "explain": "denken là động từ hỗn hợp: gedacht (đổi gốc nhưng đuôi -t). \"gedenkt\" sai vì không đổi gốc."
    },
    {
     "q": "Der Zug ist pünktlich ___. (ankommen)",
     "options": [
      "angekommt",
      "angekommen",
      "geankommen",
      "ankommen"
     ],
     "answer": 1,
     "vi": "Tàu đã đến đúng giờ.",
     "explain": "ankommen tách được và bất quy tắc: an-ge-kommen. \"angekommt\" sai đuôi -t."
    },
    {
     "q": "Wer hat dich gestern Abend ___? (anrufen)",
     "options": [
      "angerufen",
      "angeruft",
      "geanrufen",
      "anrufen"
     ],
     "answer": 0,
     "vi": "Ai đã gọi điện cho bạn tối qua?",
     "explain": "anrufen tách được và bất quy tắc: an-ge-rufen. \"angeruft\" sai vì dùng đuôi có quy tắc."
    },
    {
     "q": "Ich habe gestern mit dem Vermieter ___. (telefonieren)",
     "options": [
      "getelefoniert",
      "telefoniert",
      "telefonieren",
      "telefonierte"
     ],
     "answer": 1,
     "vi": "Hôm qua tôi đã nói chuyện điện thoại với chủ nhà.",
     "explain": "Động từ đuôi -ieren không có ge-: telefoniert. \"getelefoniert\" sai vì thêm ge-."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Das habe ich leider nicht gewisst.",
      "Das habe ich leider nicht gewussen.",
      "Das habe ich leider nicht gewusst.",
      "Das habe ich leider nicht geweißt."
     ],
     "answer": 2,
     "vi": "Rất tiếc tôi đã không biết điều đó.",
     "explain": "wissen là động từ hỗn hợp: gewusst (i → u, đuôi -t). \"geweißt\" sai vì lấy gốc weiß- của thì hiện tại."
    }
   ]
  },
  {
   "title": "Präteritum của sein, haben và động từ khuyết thiếu (Präteritum: sein, haben, Modalverben)",
   "intro": "Với sein, haben và các động từ khuyết thiếu, người Đức thường dùng Präteritum thay vì Perfekt, kể cả khi nói.\nsein: ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren.\nhaben: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie/Sie hatten.\nĐộng từ khuyết thiếu: bỏ Umlaut + -te: können → konnte, müssen → musste, dürfen → durfte, wollen → wollte, sollen → sollte, mögen → mochte.\nĐuôi: ich -te, du -test, er -te, wir -ten, ihr -tet, sie/Sie -ten. Lưu ý: ich và er/sie/es có cùng dạng (ich konnte, er konnte). Động từ chính ở dạng nguyên mẫu cuối câu: Ich musste lange arbeiten.",
   "questions": [
    {
     "q": "Gestern ___ ich krank.",
     "options": [
      "war",
      "warst",
      "waren",
      "wart"
     ],
     "answer": 0,
     "vi": "Hôm qua tôi bị ốm.",
     "explain": "Präteritum của sein với ich là war. \"warst\" là dạng của du."
    },
    {
     "q": "___ du am Wochenende viel Arbeit?",
     "options": [
      "Hattet",
      "Hatte",
      "Hattest",
      "Hatten"
     ],
     "answer": 2,
     "vi": "Cuối tuần bạn có nhiều việc không?",
     "explain": "haben ở Präteritum với du là hattest. \"Hattet\" là dạng của ihr."
    },
    {
     "q": "Wir ___ letzte Woche in Hamburg.",
     "options": [
      "war",
      "waren",
      "wart",
      "warst"
     ],
     "answer": 1,
     "vi": "Tuần trước chúng tôi ở Hamburg.",
     "explain": "sein ở Präteritum với wir là waren. \"wart\" là dạng của ihr."
    },
    {
     "q": "Ihr ___ gestern keine Lust auf Kino.",
     "options": [
      "hatten",
      "hattest",
      "hatte",
      "hattet"
     ],
     "answer": 3,
     "vi": "Hôm qua các bạn không muốn đi xem phim.",
     "explain": "haben ở Präteritum với ihr là hattet. \"hatten\" dùng cho wir/sie/Sie."
    },
    {
     "q": "Als Kind ___ ich nicht schwimmen. (können)",
     "options": [
      "könnte",
      "konnte",
      "konntest",
      "kannte"
     ],
     "answer": 1,
     "vi": "Hồi nhỏ tôi không biết bơi.",
     "explain": "Präteritum của können bỏ Umlaut: konnte. \"könnte\" là thể giả định (Konjunktiv II), không dùng để kể quá khứ."
    },
    {
     "q": "Er ___ gestern lange arbeiten. (müssen)",
     "options": [
      "musste",
      "mussten",
      "musst",
      "müssen"
     ],
     "answer": 0,
     "vi": "Hôm qua anh ấy đã phải làm việc lâu.",
     "explain": "müssen → musste (bỏ Umlaut), với er không có đuôi thêm. \"mussten\" là dạng số nhiều."
    },
    {
     "q": "Die Kinder ___ nicht fernsehen. (dürfen)",
     "options": [
      "durfte",
      "durftet",
      "darften",
      "durften"
     ],
     "answer": 3,
     "vi": "Bọn trẻ đã không được phép xem ti vi.",
     "explain": "dürfen → durft- + -ten cho chủ ngữ số nhiều: durften. \"durfte\" là dạng số ít."
    },
    {
     "q": "Warum ___ du nicht mitkommen? (wollen)",
     "options": [
      "wollte",
      "wolltet",
      "wolltest",
      "wolltst"
     ],
     "answer": 2,
     "vi": "Tại sao bạn đã không muốn đi cùng?",
     "explain": "wollen ở Präteritum với du: wolltest. \"wollte\" là dạng của ich/er."
    },
    {
     "q": "Ich ___ den Arzt anrufen, aber ich habe es vergessen. (sollen)",
     "options": [
      "solltet",
      "sollen",
      "sollte",
      "sollst"
     ],
     "answer": 2,
     "vi": "Lẽ ra tôi phải gọi cho bác sĩ, nhưng tôi đã quên.",
     "explain": "sollen ở Präteritum với ich: sollte. \"sollst\" là thì hiện tại của du."
    },
    {
     "q": "Früher ___ sie keinen Fisch. (mögen)",
     "options": [
      "mochte",
      "mögte",
      "mochtet",
      "mochten"
     ],
     "answer": 0,
     "vi": "Trước đây cô ấy không thích cá.",
     "explain": "mögen có Präteritum đặc biệt: mochte (đổi ö → o, g → ch). \"mögte\" là lỗi do chia theo quy tắc."
    },
    {
     "q": "___ ihr gestern auf der Party?",
     "options": [
      "Waren",
      "Warst",
      "War",
      "Wart"
     ],
     "answer": 3,
     "vi": "Hôm qua các bạn có đến bữa tiệc không?",
     "explain": "sein ở Präteritum với ihr là wart. \"Waren\" dùng cho wir/sie/Sie."
    },
    {
     "q": "Herr Klein, ___ Sie gestern einen Termin beim Amt?",
     "options": [
      "hattet",
      "hatten",
      "hatte",
      "hattest"
     ],
     "answer": 1,
     "vi": "Ông Klein, hôm qua ông có lịch hẹn ở cơ quan hành chính không?",
     "explain": "Sie (lịch sự) chia như số nhiều: hatten. \"hattet\" là dạng của ihr."
    },
    {
     "q": "Letztes Jahr ___ wir nach Italien fahren, aber wir hatten kein Geld. (wollen)",
     "options": [
      "wollten",
      "wolltet",
      "wollte",
      "wolten"
     ],
     "answer": 0,
     "vi": "Năm ngoái chúng tôi đã muốn đi Ý, nhưng chúng tôi không có tiền.",
     "explain": "wollen với wir ở Präteritum: wollten. \"wolltet\" là dạng của ihr."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich konnte gestern nicht kommen, weil ich war krank.",
      "Ich konnte gestern nicht kommen, weil ich krank war.",
      "Ich könnte gestern nicht kommen, weil ich krank war.",
      "Ich konnte gestern nicht kommen, weil ich krank bin gewesen."
     ],
     "answer": 1,
     "vi": "Hôm qua tôi đã không thể đến vì tôi bị ốm.",
     "explain": "konnte là Präteritum của können, và trong mệnh đề weil động từ chia đứng cuối: weil ich krank war. Câu \"weil ich war krank\" sai trật tự từ."
    },
    {
     "q": "Gestern ___ die Mitarbeiter wegen des Streiks zu Hause bleiben. (müssen)",
     "options": [
      "musste",
      "musstet",
      "mussten",
      "musstest"
     ],
     "answer": 2,
     "vi": "Hôm qua các nhân viên đã phải ở nhà vì cuộc đình công.",
     "explain": "Chủ ngữ die Mitarbeiter là số nhiều nên dùng mussten. \"musste\" là dạng số ít."
    }
   ]
  },
  {
   "title": "Cách 3 – Dativ (Dativ: Artikel, Possessivartikel, Personalpronomen)",
   "intro": "Dativ thường là tân ngữ gián tiếp (người nhận: cho ai?) và đứng sau một số giới từ (mit, bei, von…). Câu hỏi: Wem?\nMạo từ: der → dem, die → der, das → dem, số nhiều die → den (danh từ thêm -n: den Kindern).\nein → einem, eine → einer, ein → einem; kein → keinem/keiner/keinem/keinen.\nMạo từ sở hữu giống ein: meinem, meiner, meinem, meinen (tương tự deinem, seinem, ihrer, unserem, unseren…).\nĐại từ nhân xưng: ich → mir, du → dir, er → ihm, sie → ihr, es → ihm, wir → uns, ihr → euch, sie → ihnen, Sie → Ihnen.\nVí dụ: Ich gebe dem Kind einen Apfel. Kannst du mir helfen?",
   "questions": [
    {
     "q": "Ich gebe ___ Kind einen Apfel. (das)",
     "options": [
      "dem",
      "das",
      "den",
      "der"
     ],
     "answer": 0,
     "vi": "Tôi đưa cho đứa trẻ một quả táo.",
     "explain": "das Kind là người nhận (Dativ), giống trung nên là dem. \"das\" là Nominativ/Akkusativ."
    },
    {
     "q": "Das Buch gehört ___ Frau. (die)",
     "options": [
      "die",
      "dem",
      "der",
      "den"
     ],
     "answer": 2,
     "vi": "Cuốn sách thuộc về người phụ nữ.",
     "explain": "gehören đi với Dativ, die Frau ở Dativ thành der Frau. \"die\" là Nominativ/Akkusativ."
    },
    {
     "q": "Ich fahre mit ___ Bus zur Arbeit. (der)",
     "options": [
      "den",
      "dem",
      "der",
      "das"
     ],
     "answer": 1,
     "vi": "Tôi đi làm bằng xe buýt.",
     "explain": "mit luôn đi với Dativ, der Bus → dem Bus. \"den\" là Akkusativ giống đực."
    },
    {
     "q": "Kannst du ___ bitte helfen? (ich)",
     "options": [
      "mich",
      "ich",
      "mein",
      "mir"
     ],
     "answer": 3,
     "vi": "Bạn có thể giúp tôi được không?",
     "explain": "helfen đi với Dativ, ich → mir. \"mich\" là Akkusativ."
    },
    {
     "q": "Wie geht es ___? (du)",
     "options": [
      "dich",
      "dir",
      "du",
      "dein"
     ],
     "answer": 1,
     "vi": "Bạn có khỏe không?",
     "explain": "Cấu trúc es geht + Dativ: du → dir. \"dich\" là Akkusativ."
    },
    {
     "q": "Ich schenke ___ Bruder ein Buch. (mein)",
     "options": [
      "meinem",
      "meinen",
      "meiner",
      "mein"
     ],
     "answer": 0,
     "vi": "Tôi tặng anh trai tôi một cuốn sách.",
     "explain": "der Bruder là người nhận (Dativ, giống đực): meinem. \"meinen\" là Akkusativ giống đực."
    },
    {
     "q": "Er spielt mit ___ Kindern im Park. (die)",
     "options": [
      "die",
      "der",
      "dem",
      "den"
     ],
     "answer": 3,
     "vi": "Anh ấy chơi với bọn trẻ trong công viên.",
     "explain": "Số nhiều ở Dativ là den, danh từ thêm -n: den Kindern. \"die\" là Nominativ/Akkusativ số nhiều."
    },
    {
     "q": "Wir danken ___ Lehrerin für den Kurs. (unser)",
     "options": [
      "unsere",
      "unseren",
      "unserer",
      "unserem"
     ],
     "answer": 2,
     "vi": "Chúng tôi cảm ơn cô giáo của chúng tôi về khóa học.",
     "explain": "danken đi với Dativ, die Lehrerin (giống cái) → unserer. \"unsere\" là Nominativ/Akkusativ."
    },
    {
     "q": "Der Pullover gefällt ___ nicht. (er)",
     "options": [
      "ihn",
      "er",
      "ihm",
      "sein"
     ],
     "answer": 2,
     "vi": "Anh ấy không thích chiếc áo len.",
     "explain": "gefallen đi với Dativ, er → ihm. \"ihn\" là Akkusativ."
    },
    {
     "q": "Ich wohne noch bei ___ Eltern. (mein)",
     "options": [
      "meinen",
      "meine",
      "meiner",
      "meinem"
     ],
     "answer": 0,
     "vi": "Tôi vẫn còn sống cùng bố mẹ.",
     "explain": "bei đi với Dativ, số nhiều: meinen Eltern. \"meine\" là Nominativ/Akkusativ số nhiều."
    },
    {
     "q": "Kinder, ich zeige ___ jetzt die Stadt. (ihr)",
     "options": [
      "ihr",
      "eure",
      "ihnen",
      "euch"
     ],
     "answer": 3,
     "vi": "Các con, bây giờ bố/mẹ sẽ chỉ cho các con thành phố.",
     "explain": "Đại từ ihr ở Dativ là euch. \"ihnen\" là Dativ của sie (họ), không phải ihr."
    },
    {
     "q": "Frau Schmidt, kann ich ___ helfen? (Sie)",
     "options": [
      "Sie",
      "Ihnen",
      "Ihr",
      "ihnen"
     ],
     "answer": 1,
     "vi": "Bà Schmidt, tôi có thể giúp gì cho bà không?",
     "explain": "Sie (lịch sự) ở Dativ là Ihnen, viết hoa. \"ihnen\" viết thường nghĩa là \"họ\", không phải cách xưng hô lịch sự."
    },
    {
     "q": "Ich habe ___ Freund eine E-Mail geschrieben. (ein)",
     "options": [
      "einem",
      "einen",
      "einer",
      "ein"
     ],
     "answer": 0,
     "vi": "Tôi đã viết một email cho một người bạn.",
     "explain": "der Freund là người nhận (Dativ): einem Freund. \"einen\" là Akkusativ giống đực."
    },
    {
     "q": "Wir bringen ___ Gästen Kaffee und Kuchen. (unsere)",
     "options": [
      "unsere",
      "unseren",
      "unserem",
      "unserer"
     ],
     "answer": 1,
     "vi": "Chúng tôi mang cà phê và bánh cho các vị khách của chúng tôi.",
     "explain": "die Gäste (số nhiều) ở Dativ: unseren Gästen. \"unserem\" là Dativ số ít giống đực/trung."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich habe meine Schwester mit den Hausaufgaben geholfen.",
      "Ich habe meiner Schwester mit die Hausaufgaben geholfen.",
      "Ich habe meiner Schwester mit den Hausaufgaben geholfen.",
      "Ich habe meinem Schwester mit den Hausaufgaben geholfen."
     ],
     "answer": 2,
     "vi": "Tôi đã giúp em gái tôi làm bài tập về nhà.",
     "explain": "helfen + Dativ: meiner Schwester; mit + Dativ số nhiều: den Hausaufgaben. Câu \"meine Schwester\" sai vì dùng Akkusativ."
    }
   ]
  },
  {
   "title": "Động từ đi với Dativ và động từ có 2 tân ngữ (Verben mit Dativ und Verben mit Dativ und Akkusativ)",
   "intro": "Một số động từ chỉ đi với tân ngữ Dativ: helfen, danken, gefallen, gehören, gratulieren, antworten, schmecken, passen. Ví dụ: Ich helfe meiner Freundin.\nĐộng từ có 2 tân ngữ (geben, schenken, zeigen, bringen, erklären, schicken): người nhận ở Dativ, vật ở Akkusativ. Thứ tự:\n• Hai danh từ: Dativ trước Akkusativ: Ich gebe dem Mann das Buch.\n• Dativ là đại từ, Akkusativ là danh từ: đại từ trước: Ich gebe ihm das Buch.\n• Akkusativ là đại từ, Dativ là danh từ: đại từ trước: Ich gebe es dem Mann.\n• Hai đại từ: Akkusativ trước Dativ: Ich gebe es ihm.",
   "questions": [
    {
     "q": "Ich helfe ___ Freundin beim Umzug. (meine)",
     "options": [
      "meiner",
      "meine",
      "meinen",
      "meinem"
     ],
     "answer": 0,
     "vi": "Tôi giúp bạn gái tôi chuyển nhà.",
     "explain": "helfen đi với Dativ, die Freundin → meiner Freundin. \"meine\" là Akkusativ, lỗi rất hay gặp."
    },
    {
     "q": "Das Essen schmeckt ___ sehr gut. (wir)",
     "options": [
      "wir",
      "unser",
      "uns",
      "unseren"
     ],
     "answer": 2,
     "vi": "Món ăn rất ngon đối với chúng tôi.",
     "explain": "schmecken + Dativ, wir → uns. \"wir\" là Nominativ, không thể làm tân ngữ."
    },
    {
     "q": "Wem gehört das Fahrrad? – Es gehört ___. (ich)",
     "options": [
      "mich",
      "mir",
      "ich",
      "mein"
     ],
     "answer": 1,
     "vi": "Chiếc xe đạp này của ai? – Nó là của tôi.",
     "explain": "gehören + Dativ, ich → mir. \"mich\" là Akkusativ."
    },
    {
     "q": "Ich danke ___ für deine Hilfe. (du)",
     "options": [
      "dich",
      "du",
      "deine",
      "dir"
     ],
     "answer": 3,
     "vi": "Tôi cảm ơn bạn vì sự giúp đỡ của bạn.",
     "explain": "danken đi với Dativ, du → dir. \"dich\" sai vì là Akkusativ."
    },
    {
     "q": "Wie gefällt ___ die neue Wohnung? (sie, số ít)",
     "options": [
      "sie",
      "ihr",
      "ihm",
      "ihre"
     ],
     "answer": 1,
     "vi": "Cô ấy thấy căn hộ mới thế nào?",
     "explain": "gefallen + Dativ, sie (cô ấy) → ihr. \"ihm\" là Dativ của er/es."
    },
    {
     "q": "Wir gratulieren ___ zum Geburtstag. (er)",
     "options": [
      "ihm",
      "ihn",
      "er",
      "sein"
     ],
     "answer": 0,
     "vi": "Chúng tôi chúc mừng sinh nhật anh ấy.",
     "explain": "gratulieren đi với Dativ, er → ihm. \"ihn\" là Akkusativ."
    },
    {
     "q": "Kannst du ___ bitte das Salz geben? (ich)",
     "options": [
      "mich",
      "ich",
      "meine",
      "mir"
     ],
     "answer": 3,
     "vi": "Bạn có thể đưa giúp tôi lọ muối không?",
     "explain": "Người nhận ở Dativ: mir; das Salz là vật ở Akkusativ. \"mich\" sai cách."
    },
    {
     "q": "Er schenkt ___ Mutter Blumen. (seine)",
     "options": [
      "seine",
      "seinen",
      "seiner",
      "seinem"
     ],
     "answer": 2,
     "vi": "Anh ấy tặng mẹ anh ấy hoa.",
     "explain": "die Mutter là người nhận (Dativ, giống cái): seiner. \"seine\" là Akkusativ."
    },
    {
     "q": "Ich zeige ___ Gast das Zimmer. (der)",
     "options": [
      "den",
      "der",
      "dem",
      "das"
     ],
     "answer": 2,
     "vi": "Tôi chỉ phòng cho vị khách.",
     "explain": "der Gast là người nhận (Dativ): dem Gast. \"den\" là Akkusativ giống đực."
    },
    {
     "q": "Hat ___ der Film gefallen? (ihr)",
     "options": [
      "euch",
      "ihr",
      "euer",
      "ihnen"
     ],
     "answer": 0,
     "vi": "Các bạn có thích bộ phim không?",
     "explain": "gefallen + Dativ, ihr → euch. \"ihr\" ở đây là Nominativ, không làm tân ngữ được."
    },
    {
     "q": "Das Buch? Ich gebe ___ morgen zurück.",
     "options": [
      "dir es",
      "dich es",
      "es dich",
      "es dir"
     ],
     "answer": 3,
     "vi": "Cuốn sách à? Ngày mai tôi sẽ trả nó cho bạn.",
     "explain": "Khi cả hai tân ngữ là đại từ, Akkusativ (es) đứng trước Dativ (dir). \"dir es\" sai thứ tự."
    },
    {
     "q": "Der Kellner bringt ___.",
     "options": [
      "den Gast die Rechnung",
      "dem Gast die Rechnung",
      "die Rechnung den Gast",
      "dem Gast der Rechnung"
     ],
     "answer": 1,
     "vi": "Người phục vụ mang hóa đơn cho vị khách.",
     "explain": "Hai danh từ: Dativ (dem Gast) trước Akkusativ (die Rechnung). \"den Gast\" sai vì người nhận phải ở Dativ."
    },
    {
     "q": "Wo ist mein Schlüssel? – Ich habe ___ schon gegeben.",
     "options": [
      "ihn dir",
      "dir ihn",
      "dich ihn",
      "ihm dich"
     ],
     "answer": 0,
     "vi": "Chìa khóa của tôi đâu? – Tôi đã đưa nó cho bạn rồi.",
     "explain": "der Schlüssel → ihn (Akkusativ), người nhận du → dir; hai đại từ thì Akkusativ trước Dativ: ihn dir. \"dir ihn\" sai thứ tự."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich schenke meinen Vater eine Uhr.",
      "Ich schenke meinem Vater eine Uhr.",
      "Ich schenke eine Uhr meinen Vater.",
      "Ich schenke meinem Vater einer Uhr."
     ],
     "answer": 1,
     "vi": "Tôi tặng bố tôi một chiếc đồng hồ.",
     "explain": "Người nhận ở Dativ (meinem Vater), vật ở Akkusativ (eine Uhr). Câu với \"meinen Vater\" sai vì dùng Akkusativ cho người nhận."
    },
    {
     "q": "Die Präsentation? Ich schicke ___ heute Abend. (Sie – ông/bà)",
     "options": [
      "Ihnen sie",
      "sie Sie",
      "sie Ihnen",
      "Ihnen ihr"
     ],
     "answer": 2,
     "vi": "Bài thuyết trình à? Tối nay tôi sẽ gửi nó cho ông/bà.",
     "explain": "die Präsentation → sie (Akkusativ), Sie → Ihnen (Dativ); hai đại từ: Akkusativ trước Dativ. \"Ihnen sie\" sai thứ tự."
    }
   ]
  },
  {
   "title": "Giới từ đi với Dativ / Akkusativ (Präpositionen mit Dativ und Akkusativ)",
   "intro": "Giới từ luôn đi với Dativ: aus, bei, mit, nach, seit, von, zu, gegenüber.\nGiới từ luôn đi với Akkusativ: durch, für, gegen, ohne, um.\nDạng rút gọn: zu + dem = zum, zu + der = zur, bei + dem = beim, von + dem = vom.\nVí dụ: Ich fahre mit dem Bus. Ich gehe zum Arzt. Seit einem Jahr lerne ich Deutsch. – Das Geschenk ist für dich. Wir gehen durch den Park. Der Film beginnt um 20 Uhr.\nLưu ý: nach + tên thành phố/quốc gia không mạo từ (nach Berlin); với người/địa điểm cụ thể dùng zu (zum Arzt, zur Post). seit + Dativ chỉ khoảng thời gian bắt đầu trong quá khứ và còn kéo dài (seit drei Monaten).",
   "questions": [
    {
     "q": "Ich komme aus ___ Türkei. (die)",
     "options": [
      "der",
      "die",
      "dem",
      "den"
     ],
     "answer": 0,
     "vi": "Tôi đến từ Thổ Nhĩ Kỳ.",
     "explain": "aus đi với Dativ, die Türkei → der Türkei. \"die\" là Nominativ/Akkusativ."
    },
    {
     "q": "Das Geschenk ist für ___. (du)",
     "options": [
      "dir",
      "du",
      "dich",
      "dein"
     ],
     "answer": 2,
     "vi": "Món quà này dành cho bạn.",
     "explain": "für luôn đi với Akkusativ, du → dich. \"dir\" là Dativ."
    },
    {
     "q": "Ich gehe heute ___ Arzt.",
     "options": [
      "zur",
      "zum",
      "nach",
      "beim"
     ],
     "answer": 1,
     "vi": "Hôm nay tôi đi khám bác sĩ.",
     "explain": "Đi đến người/địa điểm dùng zu + Dativ; der Arzt → zu dem = zum. \"zur\" dùng cho danh từ giống cái."
    },
    {
     "q": "Er fährt mit ___ Fahrrad zur Arbeit. (das)",
     "options": [
      "das",
      "den",
      "der",
      "dem"
     ],
     "answer": 3,
     "vi": "Anh ấy đi làm bằng xe đạp.",
     "explain": "mit + Dativ, das Fahrrad → dem Fahrrad. \"das\" là Nominativ/Akkusativ."
    },
    {
     "q": "Wir gehen durch ___ Park. (der)",
     "options": [
      "dem",
      "den",
      "der",
      "des"
     ],
     "answer": 1,
     "vi": "Chúng tôi đi xuyên qua công viên.",
     "explain": "durch luôn đi với Akkusativ, der Park → den Park. \"dem\" là Dativ."
    },
    {
     "q": "Ich fahre ohne ___ Mann in Urlaub. (mein)",
     "options": [
      "meinen",
      "meinem",
      "meiner",
      "mein"
     ],
     "answer": 0,
     "vi": "Tôi đi nghỉ mà không có chồng tôi.",
     "explain": "ohne đi với Akkusativ, der Mann → meinen Mann. \"meinem\" là Dativ."
    },
    {
     "q": "Seit ___ Jahr lerne ich Deutsch. (ein)",
     "options": [
      "ein",
      "einen",
      "einer",
      "einem"
     ],
     "answer": 3,
     "vi": "Tôi học tiếng Đức được một năm rồi.",
     "explain": "seit đi với Dativ, das Jahr → einem Jahr. \"ein\" là Nominativ/Akkusativ."
    },
    {
     "q": "Nach ___ Unterricht gehe ich nach Hause. (der)",
     "options": [
      "den",
      "der",
      "dem",
      "das"
     ],
     "answer": 2,
     "vi": "Sau giờ học tôi về nhà.",
     "explain": "nach đi với Dativ, der Unterricht → dem Unterricht. \"den\" là Akkusativ."
    },
    {
     "q": "Ich wohne zurzeit ___ meiner Tante.",
     "options": [
      "zu",
      "nach",
      "bei",
      "für"
     ],
     "answer": 2,
     "vi": "Hiện tại tôi đang sống ở nhà dì tôi.",
     "explain": "Ở nhà ai đó dùng bei + Dativ. \"zu\" chỉ hướng đi đến (Ich gehe zu meiner Tante), không dùng với wohnen."
    },
    {
     "q": "Die Apotheke ist gegenüber ___ Bahnhof. (der)",
     "options": [
      "dem",
      "den",
      "der",
      "des"
     ],
     "answer": 0,
     "vi": "Hiệu thuốc nằm đối diện nhà ga.",
     "explain": "gegenüber đi với Dativ: dem Bahnhof. \"den\" là Akkusativ."
    },
    {
     "q": "Der Film beginnt ___ 20 Uhr.",
     "options": [
      "am",
      "im",
      "seit",
      "um"
     ],
     "answer": 3,
     "vi": "Bộ phim bắt đầu lúc 20 giờ.",
     "explain": "Giờ đồng hồ dùng um. \"am\" dùng cho ngày (am Montag), không dùng cho giờ."
    },
    {
     "q": "Was hast du gegen ___ Plan? (unser)",
     "options": [
      "unserem",
      "unseren",
      "unserer",
      "unser"
     ],
     "answer": 1,
     "vi": "Bạn phản đối gì về kế hoạch của chúng tôi?",
     "explain": "gegen đi với Akkusativ, der Plan → unseren Plan. \"unserem\" là Dativ."
    },
    {
     "q": "Ich habe einen Brief von ___ Schwester bekommen. (meine)",
     "options": [
      "meiner",
      "meine",
      "meinen",
      "meinem"
     ],
     "answer": 0,
     "vi": "Tôi đã nhận được một lá thư từ chị gái tôi.",
     "explain": "von đi với Dativ, die Schwester → meiner Schwester. \"meine\" là Akkusativ."
    },
    {
     "q": "Fahren Sie mich bitte ___ Bahnhof!",
     "options": [
      "zur",
      "zum",
      "zu den",
      "nach dem"
     ],
     "answer": 1,
     "vi": "Làm ơn chở tôi đến nhà ga!",
     "explain": "Đi đến một địa điểm cụ thể: zu + dem Bahnhof = zum Bahnhof. \"nach\" chỉ dùng với tên thành phố/quốc gia, không dùng với nhà ga."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Seit drei Monate arbeite ich bei einer Firma in München.",
      "Seit drei Monaten arbeite ich bei eine Firma in München.",
      "Seit drei Monaten arbeite ich bei einer Firma in München.",
      "Seit drei Monaten arbeite ich für einer Firma in München."
     ],
     "answer": 2,
     "vi": "Tôi làm việc cho một công ty ở München được ba tháng rồi.",
     "explain": "seit và bei đi với Dativ: seit drei Monaten (số nhiều thêm -n), bei einer Firma. Câu \"seit drei Monate\" thiếu đuôi -n của Dativ số nhiều."
    }
   ]
  },
  {
   "title": "Giới từ hai cách (Wechselpräpositionen)",
   "intro": "Chín giới từ an, auf, hinter, in, neben, über, unter, vor, zwischen có thể đi với Dativ hoặc Akkusativ.\n• Wo? (vị trí, đứng yên) → Dativ: Das Buch liegt auf dem Tisch.\n• Wohin? (hướng, sự di chuyển đến) → Akkusativ: Ich lege das Buch auf den Tisch.\nCặp động từ: stellen (đặt đứng) / stehen; legen (đặt nằm) / liegen; setzen (đặt ngồi) / sitzen; hängen + Akk (treo: hängte, hat gehängt) / hängen + Dat (đang treo: hing, hat gehangen). stellen, legen, setzen, hängen (treo cái gì) → Akkusativ; stehen, liegen, sitzen, hängen (đang treo) → Dativ.\nRút gọn: in + dem = im, in + das = ins, an + dem = am, an + das = ans.",
   "questions": [
    {
     "q": "Das Buch liegt auf ___ Tisch. (der)",
     "options": [
      "dem",
      "den",
      "der",
      "das"
     ],
     "answer": 0,
     "vi": "Cuốn sách nằm trên bàn.",
     "explain": "liegen chỉ vị trí (Wo?) nên dùng Dativ: dem Tisch. \"den\" là Akkusativ, dùng khi có sự di chuyển."
    },
    {
     "q": "Ich lege das Buch auf ___ Tisch. (der)",
     "options": [
      "dem",
      "der",
      "den",
      "des"
     ],
     "answer": 2,
     "vi": "Tôi đặt cuốn sách lên bàn.",
     "explain": "legen chỉ hướng (Wohin?) nên dùng Akkusativ: den Tisch. \"dem\" là Dativ, chỉ dùng cho vị trí."
    },
    {
     "q": "Wir gehen heute Abend ___ Kino.",
     "options": [
      "im",
      "ins",
      "in",
      "am"
     ],
     "answer": 1,
     "vi": "Tối nay chúng tôi đi xem phim.",
     "explain": "gehen chỉ hướng (Wohin?) → in + das Kino = ins Kino. \"im\" là Dativ, dùng cho vị trí (im Kino sein)."
    },
    {
     "q": "Die Kinder spielen ___ Garten.",
     "options": [
      "ins",
      "in",
      "in den",
      "im"
     ],
     "answer": 3,
     "vi": "Bọn trẻ chơi trong vườn.",
     "explain": "spielen chỉ vị trí (Wo?) → in + dem Garten = im Garten. \"in den\" là Akkusativ, chỉ hướng."
    },
    {
     "q": "Die Katze schläft unter ___ Bett. (das)",
     "options": [
      "das",
      "dem",
      "den",
      "der"
     ],
     "answer": 1,
     "vi": "Con mèo ngủ dưới gầm giường.",
     "explain": "schlafen chỉ vị trí (Wo?) → Dativ: dem Bett. \"das\" là Akkusativ, dùng khi có sự di chuyển."
    },
    {
     "q": "Ich stelle die Flasche in ___ Kühlschrank. (der)",
     "options": [
      "den",
      "dem",
      "der",
      "das"
     ],
     "answer": 0,
     "vi": "Tôi đặt cái chai vào tủ lạnh.",
     "explain": "stellen chỉ hướng (Wohin?) → Akkusativ: den Kühlschrank. \"dem\" sai vì đó là Dativ."
    },
    {
     "q": "Die Lampe hängt über ___ Sofa. (das)",
     "options": [
      "das",
      "den",
      "der",
      "dem"
     ],
     "answer": 3,
     "vi": "Chiếc đèn treo phía trên ghế sofa.",
     "explain": "hängen (đang treo) chỉ vị trí → Dativ: dem Sofa. \"das\" là Akkusativ."
    },
    {
     "q": "Wohin hast du meine Brille ___?",
     "options": [
      "gelegen",
      "liegen",
      "gelegt",
      "gelegten"
     ],
     "answer": 2,
     "vi": "Bạn đã để kính của tôi ở đâu?",
     "explain": "Câu hỏi Wohin? và có tân ngữ (meine Brille) nên dùng legen → gelegt. \"gelegen\" là Partizip II của liegen."
    },
    {
     "q": "Das Bild ___ an der Wand.",
     "options": [
      "hängen",
      "stellt",
      "hängt",
      "legt"
     ],
     "answer": 2,
     "vi": "Bức tranh treo trên tường.",
     "explain": "an der Wand (Dativ) chỉ vị trí, bức tranh đang treo: hängt. \"stellt\" và \"legt\" cần tân ngữ và Akkusativ."
    },
    {
     "q": "Ich ___ die Vase auf den Tisch.",
     "options": [
      "stelle",
      "stehe",
      "liege",
      "sitze"
     ],
     "answer": 0,
     "vi": "Tôi đặt bình hoa lên bàn.",
     "explain": "Có tân ngữ (die Vase) và Akkusativ (auf den Tisch) → động từ chỉ hành động stellen. \"stehe\" là động từ chỉ vị trí, không có tân ngữ."
    },
    {
     "q": "Er setzt sich neben ___ Frau. (die)",
     "options": [
      "der",
      "den",
      "dem",
      "die"
     ],
     "answer": 3,
     "vi": "Anh ấy ngồi xuống cạnh người phụ nữ.",
     "explain": "sich setzen chỉ sự di chuyển (Wohin?) → Akkusativ: die Frau. \"der\" là Dativ, dùng với sitzen."
    },
    {
     "q": "Das Auto steht vor ___ Haus. (das)",
     "options": [
      "das",
      "dem",
      "den",
      "der"
     ],
     "answer": 1,
     "vi": "Chiếc ô tô đỗ trước ngôi nhà.",
     "explain": "stehen chỉ vị trí (Wo?) → Dativ: dem Haus. \"das\" là Akkusativ."
    },
    {
     "q": "Die Lampe steht zwischen ___ Sofa und dem Regal. (das)",
     "options": [
      "dem",
      "das",
      "den",
      "der"
     ],
     "answer": 0,
     "vi": "Chiếc đèn đứng giữa ghế sofa và kệ sách.",
     "explain": "stehen chỉ vị trí → Dativ cho cả hai danh từ: dem Sofa und dem Regal. \"das\" là Akkusativ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich habe den Mantel an der Garderobe gehängt.",
      "Ich habe den Mantel an die Garderobe gehängt.",
      "Ich habe den Mantel an die Garderobe gehangen.",
      "Ich bin den Mantel an die Garderobe gehängt."
     ],
     "answer": 1,
     "vi": "Tôi đã treo áo khoác lên giá treo đồ.",
     "explain": "hängen có tân ngữ (treo cái gì) → Akkusativ an die Garderobe, Partizip II gehängt, trợ động từ haben. \"gehangen\" là Partizip II của hängen chỉ vị trí (không có tân ngữ)."
    },
    {
     "q": "Der Mantel hat den ganzen Tag an der Garderobe ___.",
     "options": [
      "gehängt",
      "hängt",
      "gehangen",
      "gehangt"
     ],
     "answer": 2,
     "vi": "Chiếc áo khoác đã treo trên giá treo đồ cả ngày.",
     "explain": "Không có tân ngữ, chỉ vị trí (an der Garderobe – Dativ) → hängen bất quy tắc: gehangen. \"gehängt\" dùng khi ai đó treo cái gì."
    }
   ]
  },
  {
   "title": "So sánh hơn & so sánh nhất (Komparativ und Superlativ)",
   "intro": "So sánh hơn (Komparativ): tính từ + -er, đi với \"als\": klein → kleiner als. Nhiều tính từ một âm tiết thêm Umlaut: alt → älter, jung → jünger, groß → größer, kalt → kälter.\nSo sánh nhất (Superlativ): am + tính từ + -sten: am kleinsten; sau -t, -d, -s, -ß, -z thêm -esten: am ältesten, am kürzesten. Đứng trước danh từ thì chia đuôi như tính từ thường: der schnellste Zug, eine größere Wohnung.\nSo sánh bằng: so + tính từ + wie: Anna ist so groß wie ihre Mutter (phủ định: nicht so … wie).\nBất quy tắc:\ngut – besser – am besten\nviel – mehr – am meisten\ngern – lieber – am liebsten\nhoch – höher – am höchsten\nnah – näher – am nächsten",
   "questions": [
    {
     "q": "Mein Bruder ist drei Jahre ___ als ich.",
     "options": [
      "älter",
      "alter",
      "mehr alt",
      "am ältesten"
     ],
     "answer": 0,
     "vi": "Anh trai tôi lớn hơn tôi ba tuổi.",
     "explain": "Komparativ của \"alt\" là \"älter\" (thêm -er và Umlaut). \"alter\" thiếu Umlaut, còn \"mehr alt\" là cách so sánh của tiếng Anh/tiếng Việt, không dùng trong tiếng Đức."
    },
    {
     "q": "Berlin ist größer ___ München.",
     "options": [
      "wie",
      "so",
      "als",
      "dann"
     ],
     "answer": 2,
     "vi": "Berlin lớn hơn München.",
     "explain": "Sau Komparativ (größer) luôn dùng \"als\". \"wie\" chỉ dùng trong so sánh bằng: so groß wie."
    },
    {
     "q": "Anna ist so groß ___ ihre Mutter.",
     "options": [
      "als",
      "wie",
      "wenn",
      "wann"
     ],
     "answer": 1,
     "vi": "Anna cao bằng mẹ cô ấy.",
     "explain": "So sánh bằng có cấu trúc \"so + tính từ + wie\". \"als\" chỉ đi với Komparativ (größer als)."
    },
    {
     "q": "Ich trinke ___ Tee als Kaffee.",
     "options": [
      "gerner",
      "mehr gern",
      "am liebsten",
      "lieber"
     ],
     "answer": 3,
     "vi": "Tôi thích uống trà hơn cà phê.",
     "explain": "\"gern\" bất quy tắc: gern – lieber – am liebsten. \"gerner\" không tồn tại; \"am liebsten\" là so sánh nhất, không đi với \"als\"."
    },
    {
     "q": "Dieses Restaurant ist gut, aber das Restaurant am Markt ist ___.",
     "options": [
      "guter",
      "besser",
      "mehr gut",
      "güter"
     ],
     "answer": 1,
     "vi": "Nhà hàng này ngon, nhưng nhà hàng ở chợ còn ngon hơn.",
     "explain": "\"gut\" bất quy tắc: gut – besser – am besten. Các dạng \"guter\", \"güter\" là lỗi chia theo quy tắc thông thường."
    },
    {
     "q": "Im Winter ist es in Hamburg ___ als in Rom.",
     "options": [
      "kälter",
      "kalter",
      "mehr kalt",
      "am kältesten"
     ],
     "answer": 0,
     "vi": "Vào mùa đông, ở Hamburg lạnh hơn ở Rome.",
     "explain": "\"kalt\" là tính từ một âm tiết nên Komparativ có Umlaut: kälter. \"kalter\" thiếu Umlaut; \"am kältesten\" là so sánh nhất, không đi với \"als\"."
    },
    {
     "q": "Die Post ist ___ als der Bahnhof. Wir können zu Fuß gehen.",
     "options": [
      "naher",
      "nahrer",
      "mehr nah",
      "näher"
     ],
     "answer": 3,
     "vi": "Bưu điện gần hơn nhà ga. Chúng ta có thể đi bộ.",
     "explain": "\"nah\" có Umlaut: nah – näher – am nächsten. \"naher\" thiếu Umlaut, \"nahrer\" là dạng tự chế."
    },
    {
     "q": "Von allen Bergen in Deutschland ist die Zugspitze ___.",
     "options": [
      "am hochsten",
      "am höchesten",
      "am höchsten",
      "höher"
     ],
     "answer": 2,
     "vi": "Trong tất cả các ngọn núi ở Đức, Zugspitze là cao nhất.",
     "explain": "\"hoch\" bất quy tắc: hoch – höher – am höchsten. \"Von allen …\" đòi hỏi so sánh nhất nên \"höher\" sai; \"am hochsten\" thiếu Umlaut."
    },
    {
     "q": "Wer arbeitet in eurer Firma ___? – Herr Braun, er arbeitet 50 Stunden pro Woche.",
     "options": [
      "am vielsten",
      "am meistens",
      "am meisten",
      "mehr"
     ],
     "answer": 2,
     "vi": "Ai làm việc nhiều nhất trong công ty các bạn? – Ông Braun, ông ấy làm 50 giờ mỗi tuần.",
     "explain": "\"viel\" bất quy tắc: viel – mehr – am meisten. \"am vielsten\" không tồn tại; \"meistens\" là trạng từ \"thường thường\", không phải so sánh nhất."
    },
    {
     "q": "Heute ist es nicht so warm ___ gestern.",
     "options": [
      "als",
      "wie als",
      "dass",
      "wie"
     ],
     "answer": 3,
     "vi": "Hôm nay trời không ấm bằng hôm qua.",
     "explain": "Phủ định của so sánh bằng vẫn là \"nicht so … wie\". Dùng \"als\" ở đây là lỗi thường gặp vì có từ \"nicht\"."
    },
    {
     "q": "Das ist der ___ Film, den ich je gesehen habe.",
     "options": [
      "beste",
      "besten",
      "am besten",
      "gutste"
     ],
     "answer": 0,
     "vi": "Đó là bộ phim hay nhất mà tôi từng xem.",
     "explain": "Đứng trước danh từ, Superlativ chia đuôi như tính từ: der beste Film (Nominativ, sau der → -e). \"am besten\" chỉ dùng sau động từ, không đứng trước danh từ."
    },
    {
     "q": "Meine Wohnung ist zu klein. Ich suche eine ___ Wohnung.",
     "options": [
      "größer",
      "größere",
      "größeren",
      "mehr große"
     ],
     "answer": 1,
     "vi": "Căn hộ của tôi quá nhỏ. Tôi đang tìm một căn hộ lớn hơn.",
     "explain": "Komparativ đứng trước danh từ phải thêm đuôi tính từ: eine größere Wohnung (Akkusativ giống cái → -e). \"größer\" thiếu đuôi, \"größeren\" sai đuôi."
    },
    {
     "q": "Im Sommer fahre ich am ___ ans Meer.",
     "options": [
      "gernsten",
      "liebste",
      "lieber",
      "liebsten"
     ],
     "answer": 3,
     "vi": "Vào mùa hè tôi thích nhất là đi biển.",
     "explain": "\"gern\" – lieber – am liebsten. Sau \"am\" phải là dạng -sten: am liebsten; \"am lieber\" hay \"am gernsten\" đều sai."
    },
    {
     "q": "Der ICE ist der ___ Zug in Deutschland.",
     "options": [
      "schnellster",
      "schnellste",
      "schnellsten",
      "am schnellsten"
     ],
     "answer": 1,
     "vi": "ICE là tàu nhanh nhất ở Đức.",
     "explain": "Sau mạo từ xác định \"der\" (Nominativ giống đực) tính từ có đuôi -e: der schnellste Zug. \"schnellster\" chỉ dùng khi không có mạo từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Peter läuft am schnellsten in der Klasse.",
      "Peter läuft am schnellste in der Klasse.",
      "Peter läuft der schnellsten in der Klasse.",
      "Peter läuft schnellster als alle in der Klasse."
     ],
     "answer": 0,
     "vi": "Peter chạy nhanh nhất lớp.",
     "explain": "Sau động từ, Superlativ có dạng \"am … -sten\": am schnellsten. \"am schnellste\" thiếu -n; \"schnellster als\" trộn lẫn Superlativ với cấu trúc so sánh hơn."
    }
   ]
  },
  {
   "title": "Mệnh đề phụ với weil, dass, wenn, ob (Nebensätze)",
   "intro": "weil = vì (nêu lý do), dass = rằng, wenn = khi/nếu, ob = liệu … có … không (câu hỏi có/không gián tiếp).\nTrong mệnh đề phụ, động từ chia đứng CUỐI câu: Ich bleibe zu Hause, weil ich krank bin.\nĐộng từ tách được viết liền ở cuối: …, dass er um 6 Uhr aufsteht. Với động từ khuyết thiếu hoặc Perfekt, động từ chia đứng sau cùng: …, weil ich arbeiten muss / …, weil ich schon gegessen habe.\nNếu mệnh đề phụ đứng trước, mệnh đề chính bắt đầu bằng động từ: Wenn es regnet, bleiben wir zu Hause.\n\"deshalb\" (vì vậy) KHÔNG phải liên từ phụ thuộc mà là trạng từ ở vị trí 1, nên động từ đứng ngay sau: Ich bin müde, deshalb gehe ich ins Bett.",
   "questions": [
    {
     "q": "Ich bleibe heute zu Hause, ___ ich krank bin.",
     "options": [
      "deshalb",
      "weil",
      "dass",
      "ob"
     ],
     "answer": 1,
     "vi": "Hôm nay tôi ở nhà vì tôi bị ốm.",
     "explain": "\"weil\" nêu lý do và đẩy động từ \"bin\" xuống cuối câu. \"deshalb\" sẽ cần động từ ngay sau (deshalb bin ich …) và nghĩa là \"vì vậy\"."
    },
    {
     "q": "Ich glaube, ___ er heute nicht kommt.",
     "options": [
      "dass",
      "das",
      "ob",
      "wenn"
     ],
     "answer": 0,
     "vi": "Tôi nghĩ rằng hôm nay anh ấy không đến.",
     "explain": "Sau \"glauben\" dùng \"dass\" (rằng). \"das\" (một chữ s) là mạo từ/đại từ, không phải liên từ – lỗi chính tả rất hay gặp."
    },
    {
     "q": "___ ich Zeit habe, besuche ich dich.",
     "options": [
      "Ob",
      "Dass",
      "Deshalb",
      "Wenn"
     ],
     "answer": 3,
     "vi": "Khi nào tôi có thời gian, tôi sẽ đến thăm bạn.",
     "explain": "\"Wenn\" diễn tả điều kiện/thời điểm. \"Deshalb\" không đẩy động từ xuống cuối nên \"Deshalb ich Zeit habe\" sai."
    },
    {
     "q": "Ich frage meinen Chef, ___ ich morgen frei haben kann.",
     "options": [
      "dass",
      "weil",
      "ob",
      "denn"
     ],
     "answer": 2,
     "vi": "Tôi hỏi sếp xem liệu ngày mai tôi có được nghỉ không.",
     "explain": "Câu hỏi có/không gián tiếp dùng \"ob\". \"dass\" không đi với \"fragen\"; \"denn\" không đẩy động từ xuống cuối."
    },
    {
     "q": "Ich lerne Deutsch, weil ich in Deutschland ___.",
     "options": [
      "studieren möchte",
      "möchte studieren",
      "studieren möchten",
      "möchte studiert"
     ],
     "answer": 0,
     "vi": "Tôi học tiếng Đức vì tôi muốn học đại học ở Đức.",
     "explain": "Trong mệnh đề với \"weil\", động từ chia (möchte) đứng sau cùng, sau động từ nguyên mẫu. \"möchte studieren\" là trật tự của mệnh đề chính."
    },
    {
     "q": "Er sagt, dass er morgen um 6 Uhr ___.",
     "options": [
      "steht auf",
      "aufstehen",
      "aufsteht",
      "auf steht"
     ],
     "answer": 2,
     "vi": "Anh ấy nói rằng ngày mai anh ấy dậy lúc 6 giờ.",
     "explain": "Trong mệnh đề phụ, động từ tách được viết liền ở cuối: aufsteht. \"steht auf\" là trật tự của mệnh đề chính."
    },
    {
     "q": "Wenn es morgen regnet, ___ zu Hause.",
     "options": [
      "wir bleiben",
      "bleiben wir",
      "dann wir bleiben",
      "bleiben"
     ],
     "answer": 1,
     "vi": "Nếu ngày mai trời mưa, chúng ta sẽ ở nhà.",
     "explain": "Mệnh đề phụ đứng trước chiếm vị trí 1, nên động từ của mệnh đề chính đứng ngay sau dấu phẩy: bleiben wir. \"wir bleiben\" là lỗi trật tự từ phổ biến."
    },
    {
     "q": "Ich bin müde, ___ gehe ich früh ins Bett.",
     "options": [
      "weil",
      "dass",
      "wenn",
      "deshalb"
     ],
     "answer": 3,
     "vi": "Tôi mệt, vì vậy tôi đi ngủ sớm.",
     "explain": "Động từ \"gehe\" đứng ngay sau chỗ trống nên cần trạng từ \"deshalb\". \"weil\" sẽ đẩy động từ xuống cuối và nghĩa cũng ngược lại."
    },
    {
     "q": "Er hat keinen Hunger, ___ er schon gegessen hat.",
     "options": [
      "deshalb",
      "ob",
      "dass",
      "weil"
     ],
     "answer": 3,
     "vi": "Anh ấy không đói vì anh ấy đã ăn rồi.",
     "explain": "Vế sau là lý do và động từ \"hat\" đứng cuối nên dùng \"weil\". \"deshalb\" cần động từ ngay sau nó (deshalb hat er …)."
    },
    {
     "q": "Sie war gestern nicht im Kurs, weil sie zum Arzt ___.",
     "options": [
      "gehen musste",
      "musste gehen",
      "gegangen musste",
      "gehen gemusst hat"
     ],
     "answer": 0,
     "vi": "Hôm qua cô ấy không đến lớp vì cô ấy phải đi khám bác sĩ.",
     "explain": "Trong mệnh đề phụ: động từ nguyên mẫu + động từ khuyết thiếu chia ở cuối: gehen musste. \"musste gehen\" là trật tự của mệnh đề chính."
    },
    {
     "q": "Es ist schön, dass ihr heute ___.",
     "options": [
      "seid gekommen",
      "gekommen habt",
      "gekommen seid",
      "gekommen sind"
     ],
     "answer": 2,
     "vi": "Thật vui là hôm nay các bạn đã đến.",
     "explain": "\"kommen\" chia Perfekt với \"sein\"; với \"ihr\" là \"seid\", và trợ động từ đứng cuối mệnh đề phụ. \"gekommen habt\" sai trợ động từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich kann nicht kommen, weil ich muss arbeiten.",
      "Ich kann nicht kommen, weil ich arbeiten muss.",
      "Ich kann nicht kommen, weil muss ich arbeiten.",
      "Ich kann nicht kommen, deshalb ich muss arbeiten."
     ],
     "answer": 1,
     "vi": "Tôi không thể đến vì tôi phải làm việc.",
     "explain": "Sau \"weil\" động từ chia \"muss\" phải đứng cuối. \"weil ich muss arbeiten\" là lỗi rất phổ biến do bắt chước trật tự câu chính."
    },
    {
     "q": "Ich weiß nicht, ob ich das Formular richtig ___.",
     "options": [
      "ausgefüllt habe",
      "habe ausgefüllt",
      "ausgefüllt hat",
      "ausfüllen habe"
     ],
     "answer": 0,
     "vi": "Tôi không biết liệu tôi đã điền tờ đơn đúng chưa.",
     "explain": "Trong mệnh đề với \"ob\", trợ động từ \"habe\" đứng sau Partizip ở cuối câu. \"habe ausgefüllt\" sai trật tự, \"hat\" sai ngôi."
    },
    {
     "q": "Mein Kollege ist krank. ___ muss ich heute länger arbeiten.",
     "options": [
      "Weil",
      "Dass",
      "Denn",
      "Deshalb"
     ],
     "answer": 3,
     "vi": "Đồng nghiệp của tôi bị ốm. Vì vậy hôm nay tôi phải làm việc lâu hơn.",
     "explain": "Động từ \"muss\" đứng ngay sau chỗ trống ở vị trí 2, nên chỉ có trạng từ \"Deshalb\" phù hợp. \"Weil\" cần động từ ở cuối câu."
    },
    {
     "q": "___ du nach Deutschland kommst, musst du dich beim Bürgeramt anmelden.",
     "options": [
      "Ob",
      "Dass",
      "Wenn",
      "Wann"
     ],
     "answer": 2,
     "vi": "Khi bạn đến Đức, bạn phải đăng ký cư trú ở Bürgeramt.",
     "explain": "\"Wenn\" là liên từ \"khi/nếu\" mở đầu mệnh đề phụ. \"Wann\" là từ để hỏi, không dùng làm liên từ thời gian trong câu khẳng định."
    }
   ]
  },
  {
   "title": "Câu hỏi gián tiếp (indirekte Fragen)",
   "intro": "Câu hỏi gián tiếp là mệnh đề phụ sau các cụm như: Können Sie mir sagen, …? / Wissen Sie, …? / Ich weiß nicht, … / Ich möchte wissen, …\nCâu hỏi có từ để hỏi (W-Frage): giữ nguyên từ để hỏi làm liên từ, động từ chia xuống CUỐI: Wo ist der Bahnhof? → Können Sie mir sagen, wo der Bahnhof ist?\nCâu hỏi có/không (Ja/Nein-Frage): dùng \"ob\": Kommt er? → Ich weiß nicht, ob er kommt.\nĐộng từ tách viết liền ở cuối (…, wann der Zug abfährt); với Modal/Perfekt, động từ chia đứng sau cùng (…, ob ich hier parken darf).\nKhông dùng \"dass\" cho câu hỏi gián tiếp. Dấu câu cuối phụ thuộc câu mở đầu: Wissen Sie, …? nhưng Ich weiß nicht, … .",
   "questions": [
    {
     "q": "Können Sie mir sagen, ___?",
     "options": [
      "wo ist der Bahnhof",
      "der Bahnhof wo ist",
      "wo der Bahnhof ist",
      "dass der Bahnhof wo ist"
     ],
     "answer": 2,
     "vi": "Ông/bà có thể cho tôi biết nhà ga ở đâu không?",
     "explain": "Trong câu hỏi gián tiếp, từ để hỏi đứng đầu và động từ chia \"ist\" đứng cuối. \"wo ist der Bahnhof\" vẫn giữ trật tự câu hỏi trực tiếp."
    },
    {
     "q": "Ich weiß nicht, ___ er heute kommt.",
     "options": [
      "dass",
      "wenn",
      "denn",
      "ob"
     ],
     "answer": 3,
     "vi": "Tôi không biết liệu hôm nay anh ấy có đến không.",
     "explain": "Câu hỏi gốc là câu có/không (Kommt er heute?), nên dùng \"ob\". \"wenn\" nghĩa là \"khi/nếu\", không dùng cho câu hỏi gián tiếp."
    },
    {
     "q": "Wissen Sie, ___ der Kurs beginnt? – Um 9 Uhr.",
     "options": [
      "wann",
      "wenn",
      "ob",
      "wie viel"
     ],
     "answer": 0,
     "vi": "Ông/bà có biết khóa học bắt đầu lúc nào không? – Lúc 9 giờ.",
     "explain": "Câu trả lời là thời điểm nên cần từ để hỏi \"wann\". \"wenn\" là liên từ điều kiện, không phải từ để hỏi."
    },
    {
     "q": "Ich frage dich, ___ du heute Abend Zeit hast. (Frage: Hast du heute Abend Zeit?)",
     "options": [
      "dass",
      "ob",
      "wenn",
      "was"
     ],
     "answer": 1,
     "vi": "Mình hỏi bạn xem tối nay bạn có rảnh không.",
     "explain": "Câu hỏi gốc không có từ để hỏi (câu có/không) nên dùng \"ob\". \"dass\" không bao giờ dùng để chuyển câu hỏi."
    },
    {
     "q": "Kannst du mir sagen, wie viel ___?",
     "options": [
      "kostet das Ticket",
      "das Ticket kosten",
      "ob das Ticket kostet",
      "das Ticket kostet"
     ],
     "answer": 3,
     "vi": "Bạn có thể cho mình biết vé giá bao nhiêu không?",
     "explain": "Động từ chia \"kostet\" phải đứng cuối câu hỏi gián tiếp. \"kostet das Ticket\" là trật tự câu hỏi trực tiếp."
    },
    {
     "q": "Ich möchte wissen, ___ du so traurig bist.",
     "options": [
      "weil",
      "warum",
      "dass",
      "denn"
     ],
     "answer": 1,
     "vi": "Mình muốn biết tại sao bạn buồn như vậy.",
     "explain": "Hỏi lý do thì dùng từ để hỏi \"warum\". \"weil\" là liên từ trả lời lý do, không dùng để hỏi."
    },
    {
     "q": "Wissen Sie, wann der Zug nach Köln ___?",
     "options": [
      "fährt ab",
      "abfahren",
      "abfährt",
      "ab fährt"
     ],
     "answer": 2,
     "vi": "Ông/bà có biết khi nào tàu đi Köln khởi hành không?",
     "explain": "Động từ tách được viết liền ở cuối câu hỏi gián tiếp: abfährt. \"fährt ab\" là trật tự của câu chính."
    },
    {
     "q": "Darf ich fragen, ___ Sie kommen? – Aus Vietnam.",
     "options": [
      "woher",
      "wohin",
      "wo",
      "ob"
     ],
     "answer": 0,
     "vi": "Cho tôi hỏi ông/bà đến từ đâu? – Từ Việt Nam.",
     "explain": "Câu trả lời \"Aus Vietnam\" chỉ nơi xuất phát nên dùng \"woher\". \"wohin\" hỏi nơi đến, \"wo\" hỏi vị trí."
    },
    {
     "q": "Können Sie mir erklären, wie man dieses Formular ___?",
     "options": [
      "ausfüllt",
      "füllt aus",
      "ausfüllen",
      "ausgefüllt"
     ],
     "answer": 0,
     "vi": "Ông/bà có thể giải thích cho tôi cách điền tờ đơn này không?",
     "explain": "Chủ ngữ \"man\" đi với động từ chia ngôi 3 số ít, và động từ tách viết liền ở cuối: ausfüllt. \"füllt aus\" sai trật tự."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich weiß nicht, wo sind meine Schlüssel.",
      "Ich weiß nicht, dass wo meine Schlüssel sind.",
      "Ich weiß nicht, wo meine Schlüssel sind.",
      "Ich weiß nicht, ob wo meine Schlüssel sind."
     ],
     "answer": 2,
     "vi": "Tôi không biết chìa khóa của tôi ở đâu.",
     "explain": "Từ để hỏi \"wo\" tự làm liên từ và động từ \"sind\" đứng cuối. Không thêm \"dass\" hay \"ob\" trước từ để hỏi."
    },
    {
     "q": "Weißt du, mit wem Maria ins Kino ___?",
     "options": [
      "ist gegangen",
      "gegangen hat",
      "gegangen",
      "gegangen ist"
     ],
     "answer": 3,
     "vi": "Bạn có biết Maria đã đi xem phim với ai không?",
     "explain": "\"gehen\" chia Perfekt với \"sein\", và trợ động từ \"ist\" đứng cuối câu hỏi gián tiếp. \"gegangen hat\" sai trợ động từ."
    },
    {
     "q": "Können Sie mir sagen, ob ich hier ___?",
     "options": [
      "darf parken",
      "parken darf",
      "parken dürfen",
      "darf ich parken"
     ],
     "answer": 1,
     "vi": "Ông/bà có thể cho tôi biết tôi có được đỗ xe ở đây không?",
     "explain": "Sau \"ob\", động từ khuyết thiếu chia \"darf\" đứng sau cùng: parken darf. \"darf parken\" giữ trật tự câu chính."
    },
    {
     "q": "Ich weiß nicht mehr, ___ Bus ich nehmen muss.",
     "options": [
      "welcher",
      "welche",
      "welchen",
      "welchem"
     ],
     "answer": 2,
     "vi": "Tôi không còn nhớ tôi phải đi xe buýt nào.",
     "explain": "\"der Bus\" là tân ngữ Akkusativ của \"nehmen\" nên dùng \"welchen\". \"welcher\" là dạng Nominativ."
    },
    {
     "q": "Ich möchte gern wissen, wie lange ich auf meinen Termin ___.",
     "options": [
      "warten muss",
      "muss warten",
      "warten müssen",
      "warten muss ich"
     ],
     "answer": 0,
     "vi": "Tôi muốn biết tôi phải chờ đến lượt hẹn bao lâu.",
     "explain": "Trong câu hỏi gián tiếp, động từ khuyết thiếu chia \"muss\" đứng cuối cùng. \"muss warten\" là trật tự câu chính."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Können Sie mir sagen, wann öffnet das Bürgeramt?",
      "Können Sie mir sagen, dass das Bürgeramt wann öffnet?",
      "Können Sie mir sagen, ob wann das Bürgeramt öffnet?",
      "Können Sie mir sagen, wann das Bürgeramt öffnet?"
     ],
     "answer": 3,
     "vi": "Ông/bà có thể cho tôi biết khi nào Bürgeramt mở cửa không?",
     "explain": "Câu hỏi gián tiếp: từ để hỏi \"wann\" + chủ ngữ + động từ ở cuối. \"wann öffnet das Bürgeramt\" giữ nguyên trật tự câu hỏi trực tiếp nên sai."
    }
   ]
  },
  {
   "title": "Động từ phản thân (reflexive Verben)",
   "intro": "Động từ phản thân dùng đại từ phản thân chỉ chính chủ ngữ.\nAkkusativ: ich → mich, du → dich, er/sie/es → sich, wir → uns, ihr → euch, sie/Sie → sich.\nDativ: ich → mir, du → dir, er/sie/es → sich, wir → uns, ihr → euch, sie/Sie → sich.\nThường dùng Akkusativ: Ich wasche mich. Nếu trong câu đã có tân ngữ Akkusativ khác thì đại từ phản thân chuyển sang Dativ: Ich wasche mir die Hände. Ich putze mir die Zähne. Ich kaufe mir einen Mantel.\nĐộng từ hay gặp: sich freuen (auf/über), sich interessieren für, sich beeilen, sich erholen, sich anmelden, sich anziehen, sich vorstellen (giới thiệu bản thân) – nhưng sich (Dativ) etwas vorstellen = tưởng tượng; sich (Dativ) etwas wünschen.\nPerfekt dùng \"haben\": Ich habe mich gefreut. Đại từ phản thân đứng ngay sau động từ chia (hoặc sau chủ ngữ khi đảo ngữ): Morgen melde ich mich an.",
   "questions": [
    {
     "q": "Ich wasche ___ jeden Morgen.",
     "options": [
      "mir",
      "sich",
      "mein",
      "mich"
     ],
     "answer": 3,
     "vi": "Mỗi sáng tôi tắm rửa.",
     "explain": "Không có tân ngữ Akkusativ nào khác nên dùng đại từ phản thân Akkusativ \"mich\". \"mir\" chỉ dùng khi đã có tân ngữ khác (mir die Hände)."
    },
    {
     "q": "Wir freuen ___ auf den Urlaub.",
     "options": [
      "euch",
      "uns",
      "sich",
      "unser"
     ],
     "answer": 1,
     "vi": "Chúng tôi mong chờ kỳ nghỉ.",
     "explain": "Chủ ngữ \"wir\" đi với đại từ phản thân \"uns\". \"sich\" chỉ dùng cho er/sie/es, sie (họ) và Sie."
    },
    {
     "q": "Interessierst du ___ für Fußball?",
     "options": [
      "dir",
      "sich",
      "dich",
      "du"
     ],
     "answer": 2,
     "vi": "Bạn có quan tâm đến bóng đá không?",
     "explain": "\"sich interessieren für\" dùng Akkusativ; với \"du\" là \"dich\". \"dir\" là dạng Dativ."
    },
    {
     "q": "Die Kinder ziehen ___ an.",
     "options": [
      "sich",
      "ihnen",
      "ihr",
      "euch"
     ],
     "answer": 0,
     "vi": "Bọn trẻ tự mặc quần áo.",
     "explain": "Chủ ngữ số nhiều \"die Kinder\" (sie) có đại từ phản thân \"sich\". \"ihnen\" là đại từ nhân xưng Dativ, sẽ có nghĩa là mặc cho người khác."
    },
    {
     "q": "Ich putze ___ die Zähne.",
     "options": [
      "mich",
      "sich",
      "mir",
      "mein"
     ],
     "answer": 2,
     "vi": "Tôi đánh răng.",
     "explain": "Câu đã có tân ngữ Akkusativ \"die Zähne\" nên đại từ phản thân chuyển sang Dativ: mir. \"mich\" là lỗi thường gặp nhất."
    },
    {
     "q": "Beeilt ___! Der Zug fährt gleich ab.",
     "options": [
      "sich",
      "uns",
      "ihr",
      "euch"
     ],
     "answer": 3,
     "vi": "Các bạn nhanh lên! Tàu sắp chạy rồi.",
     "explain": "Câu mệnh lệnh với \"ihr\" (Beeilt!) cần đại từ phản thân \"euch\". \"ihr\" là đại từ chủ ngữ, không phải đại từ phản thân."
    },
    {
     "q": "Was wünschst du ___ zum Geburtstag?",
     "options": [
      "dir",
      "dich",
      "sich",
      "du"
     ],
     "answer": 0,
     "vi": "Bạn muốn được tặng gì vào sinh nhật?",
     "explain": "\"sich etwas wünschen\": \"was\" là tân ngữ Akkusativ, nên đại từ phản thân ở Dativ: dir. \"dich\" là Akkusativ nên sai."
    },
    {
     "q": "Ich ___ mich sehr über dein Geschenk gefreut.",
     "options": [
      "bin",
      "habe",
      "hat",
      "wurde"
     ],
     "answer": 1,
     "vi": "Tôi đã rất vui vì món quà của bạn.",
     "explain": "Động từ phản thân chia Perfekt với \"haben\": Ich habe mich gefreut. Dùng \"bin\" là lỗi thường gặp vì nghĩ đến trạng thái cảm xúc."
    },
    {
     "q": "Habt ihr ___ im Urlaub gut erholt?",
     "options": [
      "sich",
      "euch",
      "uns",
      "ihr"
     ],
     "answer": 1,
     "vi": "Các bạn đã nghỉ ngơi tốt trong kỳ nghỉ chứ?",
     "explain": "Chủ ngữ \"ihr\" có đại từ phản thân \"euch\". \"sich\" sai ngôi, \"ihr\" là đại từ chủ ngữ."
    },
    {
     "q": "Herr Müller, könnten Sie ___ bitte kurz vorstellen?",
     "options": [
      "sich",
      "Ihnen",
      "Sie",
      "euch"
     ],
     "answer": 0,
     "vi": "Ông Müller, ông có thể giới thiệu ngắn gọn về bản thân không?",
     "explain": "Với ngôi lịch sự \"Sie\", đại từ phản thân là \"sich\" (viết thường). \"Ihnen\" là đại từ nhân xưng Dativ, không phải phản thân."
    },
    {
     "q": "Ich kaufe ___ einen neuen Mantel.",
     "options": [
      "mich",
      "mein",
      "sich",
      "mir"
     ],
     "answer": 3,
     "vi": "Tôi mua cho mình một chiếc áo khoác mới.",
     "explain": "\"einen neuen Mantel\" đã là tân ngữ Akkusativ nên đại từ phản thân phải ở Dativ: mir. \"mich\" sai cách."
    },
    {
     "q": "Kannst du ___ vorstellen, in Deutschland zu leben?",
     "options": [
      "dich",
      "sich",
      "dir",
      "du"
     ],
     "answer": 2,
     "vi": "Bạn có thể tưởng tượng việc sống ở Đức không?",
     "explain": "\"sich (Dativ) etwas vorstellen\" = tưởng tượng, nên dùng \"dir\". \"dich vorstellen\" có nghĩa là \"giới thiệu bản thân\", không hợp nghĩa ở đây."
    },
    {
     "q": "Morgen ___ in der Sprachschule an.",
     "options": [
      "ich melde mich",
      "melde ich mich",
      "melde mich ich",
      "mich melde ich"
     ],
     "answer": 1,
     "vi": "Ngày mai tôi sẽ đăng ký ở trường ngôn ngữ.",
     "explain": "\"Morgen\" đứng đầu nên động từ chia ở vị trí 2, chủ ngữ ngay sau, rồi đến đại từ phản thân: melde ich mich. \"ich melde mich\" vi phạm quy tắc động từ ở vị trí 2."
    },
    {
     "q": "Ich weiß nicht, ob er ___.",
     "options": [
      "hat sich schon angemeldet",
      "sich schon angemeldet ist",
      "sich schon angemeldet hat",
      "schon angemeldet sich hat"
     ],
     "answer": 2,
     "vi": "Tôi không biết liệu anh ấy đã đăng ký chưa.",
     "explain": "Trong mệnh đề phụ, đại từ phản thân đứng sớm, trợ động từ \"hat\" đứng cuối; động từ phản thân dùng \"haben\". \"angemeldet ist\" sai trợ động từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Er wäscht sich die Haare.",
      "Er wäscht sich den Haaren.",
      "Er wäscht die Haare sich.",
      "Er sich wäscht die Haare."
     ],
     "answer": 0,
     "vi": "Anh ấy gội đầu.",
     "explain": "\"die Haare\" là tân ngữ Akkusativ, \"sich\" (Dativ) đứng ngay sau động từ chia. \"den Haaren\" là Dativ số nhiều nên sai cách."
    }
   ]
  },
  {
   "title": "Đuôi tính từ cơ bản (Adjektivdeklination)",
   "intro": "Sau mạo từ xác định (der, die, das, die):\nNominativ: der neue Tisch, die neue Lampe, das neue Buch\nAkkusativ: den neuen Tisch, die neue Lampe, das neue Buch\nDativ: dem neuen Tisch, der neuen Lampe, dem neuen Buch\nSố nhiều: luôn -en (die neuen Schuhe, mit den neuen Schuhen).\nSau mạo từ không xác định (ein, kein, mein …):\nNominativ: ein neuer Tisch, eine neue Lampe, ein neues Buch\nAkkusativ: einen neuen Tisch, eine neue Lampe, ein neues Buch\nDativ: einem neuen Tisch, einer neuen Lampe, einem neuen Buch\nSố nhiều (keine, meine …): luôn -en.\nMẹo: khi \"ein\" không cho biết giống, tính từ mang dấu hiệu: -er (giống đực), -es (giống trung). Dativ luôn là -en.",
   "questions": [
    {
     "q": "Der ___ Mann dort ist mein Lehrer.",
     "options": [
      "alter",
      "alte",
      "alten",
      "altes"
     ],
     "answer": 1,
     "vi": "Người đàn ông lớn tuổi kia là thầy giáo của tôi.",
     "explain": "Sau \"der\" ở Nominativ, tính từ có đuôi -e: der alte Mann. \"alter\" chỉ dùng sau \"ein\" (ein alter Mann)."
    },
    {
     "q": "Das ist ein ___ Auto.",
     "options": [
      "neue",
      "neuer",
      "neuen",
      "neues"
     ],
     "answer": 3,
     "vi": "Đó là một chiếc ô tô mới.",
     "explain": "\"das Auto\" giống trung; sau \"ein\" (Nominativ) tính từ mang đuôi -es: ein neues Auto. \"neuer\" là đuôi của giống đực."
    },
    {
     "q": "Die ___ Frau dort ist meine Nachbarin.",
     "options": [
      "junge",
      "jungen",
      "junger",
      "junges"
     ],
     "answer": 0,
     "vi": "Người phụ nữ trẻ kia là hàng xóm của tôi.",
     "explain": "Sau \"die\" ở Nominativ số ít, tính từ có đuôi -e: die junge Frau. \"jungen\" là đuôi của Dativ hoặc số nhiều."
    },
    {
     "q": "Ich habe einen ___ Hund.",
     "options": [
      "kleiner",
      "kleine",
      "kleinen",
      "kleines"
     ],
     "answer": 2,
     "vi": "Tôi có một con chó nhỏ.",
     "explain": "Akkusativ giống đực sau \"einen\" có đuôi -en: einen kleinen Hund. \"kleiner\" là dạng Nominativ."
    },
    {
     "q": "Ich kaufe den ___ Pullover.",
     "options": [
      "blauen",
      "blaue",
      "blauer",
      "blaues"
     ],
     "answer": 0,
     "vi": "Tôi mua chiếc áo len màu xanh dương.",
     "explain": "Akkusativ giống đực sau \"den\" có đuôi -en: den blauen Pullover. \"blaue\" chỉ đúng ở Nominativ (der blaue Pullover)."
    },
    {
     "q": "Das ist eine ___ Idee!",
     "options": [
      "guter",
      "gute",
      "guten",
      "gutes"
     ],
     "answer": 1,
     "vi": "Đó là một ý tưởng hay!",
     "explain": "\"die Idee\" giống cái; sau \"eine\" ở Nominativ tính từ có đuôi -e: eine gute Idee. \"guten\" sai vì đây không phải Dativ."
    },
    {
     "q": "Im Zimmer steht ein ___ Schrank.",
     "options": [
      "alte",
      "alten",
      "alter",
      "altes"
     ],
     "answer": 2,
     "vi": "Trong phòng có một cái tủ cũ.",
     "explain": "\"der Schrank\" giống đực, Nominativ sau \"ein\": tính từ mang đuôi -er (ein alter Schrank). \"alte\" chỉ đúng sau \"der\"."
    },
    {
     "q": "Wir wohnen in einem ___ Haus.",
     "options": [
      "großem",
      "großes",
      "große",
      "großen"
     ],
     "answer": 3,
     "vi": "Chúng tôi sống trong một ngôi nhà lớn.",
     "explain": "Sau \"in\" + Dativ (einem), tính từ luôn có đuôi -en: einem großen Haus. \"großem\" là lỗi lặp lại đuôi -em của mạo từ."
    },
    {
     "q": "Ich lese das ___ Buch.",
     "options": [
      "interessanten",
      "interessantes",
      "interessanter",
      "interessante"
     ],
     "answer": 3,
     "vi": "Tôi đọc cuốn sách thú vị đó.",
     "explain": "Akkusativ giống trung sau \"das\" có đuôi -e: das interessante Buch. \"interessantes\" chỉ dùng sau \"ein\"."
    },
    {
     "q": "Mit der ___ Kollegin verstehe ich mich gut.",
     "options": [
      "neue",
      "neuer",
      "neuen",
      "neuem"
     ],
     "answer": 2,
     "vi": "Tôi rất hợp với cô đồng nghiệp mới.",
     "explain": "\"mit\" + Dativ: der Kollegin (giống cái, Dativ) → tính từ đuôi -en: der neuen Kollegin. \"neue\" là lỗi vì nhầm \"der\" với Nominativ."
    },
    {
     "q": "Die ___ Schuhe sind zu teuer.",
     "options": [
      "schwarze",
      "schwarzen",
      "schwarzer",
      "schwarzes"
     ],
     "answer": 1,
     "vi": "Đôi giày đen đó đắt quá.",
     "explain": "Số nhiều sau mạo từ xác định \"die\" luôn có đuôi -en: die schwarzen Schuhe. \"schwarze\" chỉ đúng khi không có mạo từ (schwarze Schuhe)."
    },
    {
     "q": "Er schenkt seiner ___ Schwester ein Buch.",
     "options": [
      "kleinen",
      "kleine",
      "kleiner",
      "kleinem"
     ],
     "answer": 0,
     "vi": "Anh ấy tặng em gái nhỏ của mình một cuốn sách.",
     "explain": "\"seiner Schwester\" là Dativ (người nhận) nên tính từ có đuôi -en. \"kleiner\" là lỗi do bắt chước đuôi -er của \"seiner\"."
    },
    {
     "q": "Ich habe noch keine ___ Wohnung gefunden.",
     "options": [
      "günstigen",
      "günstiger",
      "günstiges",
      "günstige"
     ],
     "answer": 3,
     "vi": "Tôi vẫn chưa tìm được căn hộ nào giá rẻ.",
     "explain": "\"die Wohnung\" giống cái, Akkusativ số ít sau \"keine\": đuôi -e (keine günstige Wohnung). \"günstigen\" chỉ đúng ở số nhiều hoặc Dativ."
    },
    {
     "q": "Sie kümmert sich um ihren ___ Vater.",
     "options": [
      "kranken",
      "kranker",
      "kranke",
      "krankem"
     ],
     "answer": 0,
     "vi": "Cô ấy chăm sóc người cha bị ốm của mình.",
     "explain": "\"um\" + Akkusativ: ihren Vater (giống đực) → tính từ đuôi -en: ihren kranken Vater. \"kranker\" là dạng Nominativ sau \"ein\"."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich wohne mit meinen nette Freunden in einer kleine Wohnung.",
      "Ich wohne mit meinen netten Freunden in einer kleine Wohnung.",
      "Ich wohne mit meinen netten Freunden in einer kleinen Wohnung.",
      "Ich wohne mit meine netten Freunden in einer kleinen Wohnung."
     ],
     "answer": 2,
     "vi": "Tôi sống cùng những người bạn dễ mến trong một căn hộ nhỏ.",
     "explain": "Cả hai cụm đều ở Dativ (mit, in + Dativ) nên tính từ có đuôi -en: meinen netten Freunden, einer kleinen Wohnung. \"einer kleine\" là lỗi hay gặp vì quên Dativ."
    }
   ]
  },
  {
   "title": "Konjunktiv II lịch sự & mong muốn (würde, könnte, hätte, wäre, sollte)",
   "intro": "Konjunktiv II dùng để nói lịch sự, diễn tả mong muốn và đưa lời khuyên.\nwürde + Infinitiv: ich würde, du würdest, er/sie würde, wir würden, ihr würdet, sie/Sie würden → Ich würde gern reisen.\nkönnte (können): ich könnte, du könntest, wir/Sie könnten, ihr könntet → Könnten Sie mir bitte helfen?\nhätte (haben): ich hätte, du hättest, wir/Sie hätten → Ich hätte gern einen Kaffee.\nwäre (sein): ich wäre, du wärst, wir/Sie wären → Ich wäre gern Ärztin. Es wäre schön, wenn …\nsollte (lời khuyên): ich sollte, du solltest, ihr solltet, wir/Sie sollten → Du solltest mehr schlafen.\nVới haben, sein, können thường dùng hätte, wäre, könnte thay vì \"würde haben/sein\". Lời khuyên cũng có thể dùng: An deiner Stelle würde ich …",
   "questions": [
    {
     "q": "Ich ___ gern einen Kaffee, bitte.",
     "options": [
      "hatte",
      "hättest",
      "hätte",
      "wäre"
     ],
     "answer": 2,
     "vi": "Cho tôi một ly cà phê, cảm ơn.",
     "explain": "Gọi món lịch sự: \"Ich hätte gern …\" (Konjunktiv II của haben). \"hatte\" là Präteritum (không có Umlaut), mang nghĩa quá khứ."
    },
    {
     "q": "___ Sie mir bitte helfen?",
     "options": [
      "Könnten",
      "Könntest",
      "Konnten",
      "Könnte"
     ],
     "answer": 0,
     "vi": "Ông/bà có thể giúp tôi được không?",
     "explain": "Với \"Sie\" dùng \"Könnten\" (Konjunktiv II). \"Konnten\" không có Umlaut là Präteritum (đã có thể), không phải lời đề nghị lịch sự."
    },
    {
     "q": "Ich ___ gern Arzt.",
     "options": [
      "würde",
      "hätte",
      "wärst",
      "wäre"
     ],
     "answer": 3,
     "vi": "Tôi ước được làm bác sĩ.",
     "explain": "Mong muốn với \"sein\" dùng \"wäre\": Ich wäre gern Arzt. \"Ich würde gern Arzt\" thiếu động từ nguyên mẫu \"sein\"."
    },
    {
     "q": "Du bist sehr müde. Du ___ früher ins Bett gehen.",
     "options": [
      "sollte",
      "solltest",
      "solltet",
      "sollen"
     ],
     "answer": 1,
     "vi": "Bạn rất mệt. Bạn nên đi ngủ sớm hơn.",
     "explain": "Lời khuyên dùng \"sollte\"; ngôi \"du\" chia là \"solltest\". \"sollte\" là dạng của ich/er/sie/es."
    },
    {
     "q": "___ Sie bitte das Fenster schließen?",
     "options": [
      "Würdest",
      "Wurden",
      "Würde",
      "Würden"
     ],
     "answer": 3,
     "vi": "Ông/bà làm ơn đóng cửa sổ được không?",
     "explain": "Lời yêu cầu lịch sự với \"Sie\": Würden Sie bitte …? \"Wurden\" không có Umlaut là Präteritum của werden, không dùng để đề nghị."
    },
    {
     "q": "Wir ___ gern ein Doppelzimmer für zwei Nächte.",
     "options": [
      "hättet",
      "hatten",
      "hätten",
      "hätte"
     ],
     "answer": 2,
     "vi": "Chúng tôi muốn đặt một phòng đôi cho hai đêm.",
     "explain": "Với \"wir\": wir hätten. \"hättet\" là dạng của \"ihr\", \"hatten\" là Präteritum."
    },
    {
     "q": "___ du mir kurz dein Handy geben? Meins ist leer.",
     "options": [
      "Könnte",
      "Könntest",
      "Konntest",
      "Könntet"
     ],
     "answer": 1,
     "vi": "Bạn có thể đưa mình mượn điện thoại một chút không? Máy mình hết pin rồi.",
     "explain": "Ngôi \"du\" chia \"könntest\". \"Konntest\" không có Umlaut là Präteritum, nghĩa là \"đã có thể\"."
    },
    {
     "q": "Was ___ du an meiner Stelle machen?",
     "options": [
      "würdest",
      "würdet",
      "wurdest",
      "würde"
     ],
     "answer": 0,
     "vi": "Nếu ở vào vị trí của mình, bạn sẽ làm gì?",
     "explain": "würde + Infinitiv; với \"du\" là \"würdest\". \"würdet\" là dạng của \"ihr\"."
    },
    {
     "q": "Ihr ___ mehr Deutsch sprechen, dann lernt ihr schneller.",
     "options": [
      "solltet",
      "solltest",
      "sollten",
      "sollte"
     ],
     "answer": 0,
     "vi": "Các bạn nên nói tiếng Đức nhiều hơn, như vậy các bạn sẽ học nhanh hơn.",
     "explain": "Với \"ihr\", sollen ở Konjunktiv II là \"solltet\". \"solltest\" là dạng của \"du\"."
    },
    {
     "q": "Ich würde gern nach Deutschland ___.",
     "options": [
      "gereist",
      "reisen",
      "reise",
      "zu reisen"
     ],
     "answer": 1,
     "vi": "Tôi rất muốn đi du lịch Đức.",
     "explain": "Sau \"würde\" là động từ nguyên mẫu không có \"zu\" ở cuối câu: reisen. \"zu reisen\" là lỗi thường gặp."
    },
    {
     "q": "Es ___ schön, wenn du am Samstag kommen könntest.",
     "options": [
      "würde",
      "hätte",
      "wäre",
      "wärst"
     ],
     "answer": 2,
     "vi": "Sẽ thật tuyệt nếu bạn có thể đến vào thứ Bảy.",
     "explain": "\"Es wäre schön, wenn …\" dùng Konjunktiv II của sein với chủ ngữ \"es\". \"wärst\" là dạng của \"du\"."
    },
    {
     "q": "An deiner Stelle ___ ich zum Arzt gehen.",
     "options": [
      "wäre",
      "hätte",
      "würdest",
      "würde"
     ],
     "answer": 3,
     "vi": "Nếu tôi là bạn, tôi sẽ đi khám bác sĩ.",
     "explain": "Lời khuyên \"An deiner Stelle würde ich + Infinitiv\"; chủ ngữ là \"ich\" nên chia \"würde\". \"würdest\" sai ngôi."
    },
    {
     "q": "Sie haben Fieber, Frau Weber. Sie ___ heute zu Hause bleiben.",
     "options": [
      "sollten",
      "sollte",
      "solltet",
      "solltest"
     ],
     "answer": 0,
     "vi": "Bà Weber, bà đang sốt. Hôm nay bà nên ở nhà.",
     "explain": "Ngôi lịch sự \"Sie\" chia như số nhiều: Sie sollten. \"sollte\" là dạng của ich/er/sie (số ít)."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Könnten Sie mir bitte sagen, wo ist das Bürgeramt?",
      "Könntest Sie mir bitte sagen, wo das Bürgeramt ist?",
      "Könnten Sie mir bitte sagen, wo das Bürgeramt sein?",
      "Könnten Sie mir bitte sagen, wo das Bürgeramt ist?"
     ],
     "answer": 3,
     "vi": "Ông/bà làm ơn cho tôi biết Bürgeramt ở đâu được không?",
     "explain": "\"Könnten\" đúng với \"Sie\", và trong câu hỏi gián tiếp động từ \"ist\" đứng cuối. \"Könntest Sie\" sai ngôi."
    },
    {
     "q": "___ es möglich, den Termin auf Freitag zu verschieben?",
     "options": [
      "Würde",
      "Wäre",
      "Hätte",
      "Wären"
     ],
     "answer": 1,
     "vi": "Có thể dời cuộc hẹn sang thứ Sáu được không?",
     "explain": "Hỏi lịch sự \"Wäre es möglich, … zu …?\" dùng Konjunktiv II của sein với chủ ngữ \"es\". \"Wären\" là dạng số nhiều."
    }
   ]
  }
 ],
 "B1": [
  {
   "title": "Thì quá khứ đơn (Präteritum)",
   "intro": "Präteritum dùng chủ yếu trong văn viết, kể chuyện; với sein, haben và động từ khuyết thiếu thì dùng cả trong văn nói.\nĐộng từ có quy tắc: gốc + -te + đuôi: ich machte, du machtest, er machte, wir machten, ihr machtet, sie machten. Gốc tận cùng -t/-d thêm -ete: arbeitete, redete.\nĐộng từ bất quy tắc: đổi nguyên âm gốc, ngôi ich/er KHÔNG có đuôi: gehen → ging, kommen → kam, fahren → fuhr, lesen → las, schlafen → schlief, bitten → bat.\nĐộng từ hỗn hợp: đổi gốc + -te: denken → dachte, bringen → brachte, wissen → wusste, kennen → kannte, rennen → rannte.\nCần nhớ: sein → war, haben → hatte, werden → wurde; können → konnte, müssen → musste. Động từ tách: ankommen → ich kam … an.",
   "questions": [
    {
     "q": "Gestern ___ ich bis spät in die Nacht.",
     "options": [
      "arbeitet",
      "arbeitete",
      "arbeitetet",
      "arbeitte"
     ],
     "answer": 1,
     "vi": "Hôm qua tôi làm việc đến tận khuya.",
     "explain": "Gốc arbeit- tận cùng bằng -t nên thêm -ete: ich arbeitete. 'arbeitte' thiếu nguyên âm nối -e-."
    },
    {
     "q": "Als Kind ___ er in Hanoi.",
     "options": [
      "wohnte",
      "wohnt",
      "wohnten",
      "wohntet"
     ],
     "answer": 0,
     "vi": "Hồi nhỏ anh ấy sống ở Hà Nội.",
     "explain": "Ngôi er: gốc wohn- + -te = wohnte. 'wohnten' là ngôi wir/sie (số nhiều)."
    },
    {
     "q": "Wir ___ letzte Woche keine Zeit.",
     "options": [
      "hattet",
      "habten",
      "hatten",
      "hatte"
     ],
     "answer": 2,
     "vi": "Tuần trước chúng tôi không có thời gian.",
     "explain": "haben ở Präteritum là hatte-, ngôi wir: hatten. 'habten' là lỗi chia haben như động từ có quy tắc."
    },
    {
     "q": "Der Zug ___ pünktlich um acht Uhr ab.",
     "options": [
      "fahrte",
      "fährte",
      "fuhrte",
      "fuhr"
     ],
     "answer": 3,
     "vi": "Tàu khởi hành đúng giờ lúc tám giờ.",
     "explain": "fahren là động từ bất quy tắc: fuhr, ngôi er không có đuôi. 'fuhrte' sai vì thêm -te vào động từ mạnh."
    },
    {
     "q": "Ich ___ den Brief sofort.",
     "options": [
      "las",
      "laste",
      "lies",
      "lest"
     ],
     "answer": 0,
     "vi": "Tôi đọc lá thư ngay lập tức.",
     "explain": "lesen → las (bất quy tắc), ngôi ich không có đuôi. 'lies' là thể mệnh lệnh, không phải quá khứ."
    },
    {
     "q": "Du ___ gestern sehr müde.",
     "options": [
      "war",
      "warst",
      "wart",
      "bist"
     ],
     "answer": 1,
     "vi": "Hôm qua bạn rất mệt.",
     "explain": "sein ở Präteritum ngôi du là warst. 'wart' là ngôi ihr; 'bist' là hiện tại, không hợp với gestern."
    },
    {
     "q": "Sie ___ nicht, wo der Bahnhof war.",
     "options": [
      "wisste",
      "weißte",
      "wusst",
      "wusste"
     ],
     "answer": 3,
     "vi": "Cô ấy không biết nhà ga ở đâu.",
     "explain": "wissen là động từ hỗn hợp: đổi gốc thành wuss- và thêm -te → wusste. 'wusst' thiếu đuôi -te."
    },
    {
     "q": "Er ___ oft an seine Familie in Vietnam.",
     "options": [
      "denkte",
      "dachtete",
      "dachte",
      "dacht"
     ],
     "answer": 2,
     "vi": "Anh ấy thường nghĩ đến gia đình ở Việt Nam.",
     "explain": "denken là động từ hỗn hợp: dachte (đổi gốc + -te). 'denkte' là lỗi chia như động từ có quy tắc."
    },
    {
     "q": "Die Kinder ___ schnell nach Hause.",
     "options": [
      "rennten",
      "rannten",
      "rannen",
      "rannte"
     ],
     "answer": 1,
     "vi": "Bọn trẻ chạy nhanh về nhà.",
     "explain": "rennen → rannte (hỗn hợp), số nhiều sie: rannten. 'rannte' chỉ dùng cho ich/er/sie (số ít)."
    },
    {
     "q": "Am Sonntag ___ ich meiner Mutter Blumen.",
     "options": [
      "brachte",
      "bringte",
      "brang",
      "brachtete"
     ],
     "answer": 0,
     "vi": "Chủ nhật tôi mang hoa đến cho mẹ.",
     "explain": "bringen → brachte (hỗn hợp: đổi gốc + -te). 'bringte' giữ gốc cũ, 'brang' chia như động từ mạnh – đều sai."
    },
    {
     "q": "Ihr ___ am Wochenende nicht kommen, weil ihr krank wart.",
     "options": [
      "konntest",
      "kanntet",
      "konntet",
      "konnten"
     ],
     "answer": 2,
     "vi": "Cuối tuần các bạn đã không thể đến vì các bạn bị ốm.",
     "explain": "können → konnte-, ngôi ihr thêm -t: konntet. 'kanntet' là quá khứ của kennen (quen biết), sai nghĩa."
    },
    {
     "q": "Gestern Abend ___ plötzlich das Telefon.",
     "options": [
      "klingelten",
      "klingte",
      "klingelete",
      "klingelte"
     ],
     "answer": 3,
     "vi": "Tối qua điện thoại bỗng nhiên reo.",
     "explain": "klingeln là động từ có quy tắc: klingel- + -te = klingelte. 'klingelten' là số nhiều, nhưng chủ ngữ das Telefon là số ít."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich kennete ihn schon lange.",
      "Ich kannte ihn schon lange.",
      "Ich kannt ihn schon lange.",
      "Ich kanntete ihn schon lange."
     ],
     "answer": 1,
     "vi": "Tôi đã quen anh ấy từ lâu.",
     "explain": "kennen là động từ hỗn hợp: kannte (đổi e → a và thêm -te). 'kennete' giữ nguyên gốc, 'kanntete' thêm -te hai lần."
    },
    {
     "q": "Der Lehrer ___ uns, die Hausaufgaben pünktlich abzugeben.",
     "options": [
      "bittete",
      "betete",
      "bot",
      "bat"
     ],
     "answer": 3,
     "vi": "Thầy giáo yêu cầu chúng tôi nộp bài tập đúng hạn.",
     "explain": "bitten (yêu cầu) → bat. 'bot' là quá khứ của bieten (mời, đưa ra), 'betete' là của beten (cầu nguyện)."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Als ich ankam, schliefen alle schon.",
      "Als ich ankommte, schliefen alle schon.",
      "Als ich ankam, schlafte alle schon.",
      "Als ich kam an, schliefen alle schon."
     ],
     "answer": 0,
     "vi": "Khi tôi đến nơi thì mọi người đã ngủ cả rồi.",
     "explain": "ankommen → kam an; trong mệnh đề phụ, động từ tách được viết liền ở cuối: ankam; schlafen → schliefen. 'kam an' ở cuối mệnh đề phụ là sai trật tự từ."
    }
   ]
  },
  {
   "title": "Thì quá khứ hoàn thành và nachdem (Plusquamperfekt & nachdem)",
   "intro": "Plusquamperfekt diễn tả hành động xảy ra TRƯỚC một hành động khác trong quá khứ.\nCấu trúc: hatte/war (Präteritum) + Partizip II. Động từ chỉ chuyển động hoặc thay đổi trạng thái (gehen, fahren, kommen, werden, fliehen…) dùng war: ich war gefahren; các động từ khác dùng hatte: ich hatte gegessen.\nVí dụ: Als ich ankam, hatte der Film schon begonnen.\nnachdem + Plusquamperfekt → mệnh đề chính ở Präteritum (hoặc Perfekt): Nachdem er gegessen hatte, ging er los.\nnachdem + Perfekt → mệnh đề chính ở Präsens/Futur: Nachdem ich gegessen habe, gehe ich los.\nTrong mệnh đề phụ, trợ động từ đứng cuối; nếu mệnh đề phụ đứng đầu câu, mệnh đề chính bắt đầu bằng động từ.",
   "questions": [
    {
     "q": "Als ich ins Kino kam, ___ der Film schon begonnen.",
     "options": [
      "war",
      "hat",
      "hatte",
      "habe"
     ],
     "answer": 2,
     "vi": "Khi tôi đến rạp thì phim đã bắt đầu rồi.",
     "explain": "beginnen dùng trợ động từ haben → Plusquamperfekt: hatte begonnen. 'war' sai trợ động từ."
    },
    {
     "q": "Er war müde, weil er schlecht geschlafen ___.",
     "options": [
      "hatte",
      "war",
      "wurde",
      "hätte"
     ],
     "answer": 0,
     "vi": "Anh ấy mệt vì đã ngủ không ngon.",
     "explain": "schlafen dùng haben: hatte geschlafen, xảy ra trước 'war müde'. 'hätte' là Konjunktiv II, diễn tả điều không có thật."
    },
    {
     "q": "Nachdem wir gegessen ___, gingen wir spazieren.",
     "options": [
      "haben",
      "hatten",
      "waren",
      "hätten"
     ],
     "answer": 1,
     "vi": "Sau khi chúng tôi ăn xong, chúng tôi đi dạo.",
     "explain": "Mệnh đề chính ở Präteritum (gingen) nên nachdem đi với Plusquamperfekt: gegessen hatten. 'haben' (Perfekt) không hợp thì."
    },
    {
     "q": "Nachdem sie nach Berlin gezogen ___, fand sie schnell eine Arbeit.",
     "options": [
      "hatte",
      "hat",
      "ist",
      "war"
     ],
     "answer": 3,
     "vi": "Sau khi chuyển đến Berlin, cô ấy nhanh chóng tìm được việc làm.",
     "explain": "ziehen (chuyển nhà) chỉ sự di chuyển nên dùng sein → war gezogen. 'hatte' sai trợ động từ."
    },
    {
     "q": "Die Gäste ___ schon gegangen, als wir ankamen.",
     "options": [
      "hatten",
      "waren",
      "sind",
      "haben"
     ],
     "answer": 1,
     "vi": "Khách đã về hết khi chúng tôi đến.",
     "explain": "gehen dùng sein, hành động trước 'ankamen' → waren gegangen. 'sind' là Perfekt, không thể hiện thứ tự trước–sau trong quá khứ."
    },
    {
     "q": "Nachdem er das Formular ausgefüllt hatte, ___ er es ab.",
     "options": [
      "gibt",
      "geben",
      "gab",
      "gegeben"
     ],
     "answer": 2,
     "vi": "Sau khi điền xong mẫu đơn, anh ấy nộp nó.",
     "explain": "nachdem + Plusquamperfekt → mệnh đề chính ở Präteritum: gab … ab. 'gibt' là hiện tại, không hợp thì."
    },
    {
     "q": "Nachdem ich die Prüfung bestanden habe, ___ ich eine Party.",
     "options": [
      "mache",
      "machte",
      "hatte gemacht",
      "gemacht"
     ],
     "answer": 0,
     "vi": "Sau khi thi đỗ, tôi sẽ tổ chức một bữa tiệc.",
     "explain": "nachdem + Perfekt (bestanden habe) → mệnh đề chính ở Präsens: mache. 'machte' (Präteritum) không khớp với Perfekt trong mệnh đề nachdem."
    },
    {
     "q": "Ich konnte nicht ins Haus, weil ich meinen Schlüssel ___ hatte.",
     "options": [
      "verlieren",
      "verlor",
      "verlort",
      "verloren"
     ],
     "answer": 3,
     "vi": "Tôi không vào được nhà vì tôi đã làm mất chìa khóa.",
     "explain": "Plusquamperfekt cần Partizip II: verloren (không có ge- vì tiền tố ver-). 'verlor' là Präteritum."
    },
    {
     "q": "___ der Arzt den Patienten untersucht hatte, schrieb er das Rezept.",
     "options": [
      "Nachdem",
      "Nach",
      "Danach",
      "Vorher"
     ],
     "answer": 0,
     "vi": "Sau khi bác sĩ khám bệnh nhân xong, ông ấy viết đơn thuốc.",
     "explain": "Cần liên từ phụ thuộc (động từ đứng cuối): nachdem. 'Nach' là giới từ, 'Danach' là trạng từ – không mở đầu mệnh đề phụ được."
    },
    {
     "q": "Nachdem sie den Bus verpasst hatte, ___.",
     "options": [
      "sie nahm ein Taxi",
      "sie ein Taxi nahm",
      "nahm sie ein Taxi",
      "nimmt sie ein Taxi"
     ],
     "answer": 2,
     "vi": "Sau khi lỡ chuyến xe buýt, cô ấy đi taxi.",
     "explain": "Mệnh đề phụ đứng đầu chiếm vị trí 1, nên động từ đứng ngay sau: nahm sie. 'sie nahm' sai vì động từ không ở vị trí 2."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Nachdem er hatte gefrühstückt, ging er zur Arbeit.",
      "Nachdem er gefrühstückt hatte, ging er zur Arbeit.",
      "Nachdem er gefrühstückt hatte, er ging zur Arbeit.",
      "Nachdem er gefrühstückt war, ging er zur Arbeit."
     ],
     "answer": 1,
     "vi": "Sau khi ăn sáng xong, anh ấy đi làm.",
     "explain": "Trong mệnh đề phụ, trợ động từ hatte đứng cuối; mệnh đề chính bắt đầu bằng động từ. frühstücken dùng haben, nên 'gefrühstückt war' sai."
    },
    {
     "q": "Als die Polizei kam, ___ der Dieb schon geflohen.",
     "options": [
      "hatte",
      "hat",
      "ist",
      "war"
     ],
     "answer": 3,
     "vi": "Khi cảnh sát đến thì tên trộm đã bỏ trốn rồi.",
     "explain": "fliehen chỉ sự di chuyển nên dùng sein → war geflohen. 'hatte' sai trợ động từ."
    },
    {
     "q": "Nachdem der Vertrag ___ worden war, begann die Arbeit.",
     "options": [
      "unterschreiben",
      "unterschrieb",
      "unterschrieben",
      "geunterschrieben"
     ],
     "answer": 2,
     "vi": "Sau khi hợp đồng đã được ký, công việc bắt đầu.",
     "explain": "Bị động ở Plusquamperfekt: Partizip II + worden war → unterschrieben. Động từ có tiền tố không tách unter- không thêm ge-."
    },
    {
     "q": "Sie erzählte mir, dass sie im Urlaub krank ___ war.",
     "options": [
      "geworden",
      "werden",
      "wurde",
      "worden"
     ],
     "answer": 0,
     "vi": "Cô ấy kể với tôi rằng cô ấy đã bị ốm trong kỳ nghỉ.",
     "explain": "werden (trở nên) có Partizip II là geworden và dùng sein. 'worden' chỉ dùng trong câu bị động."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Nachdem ich mich beworben hatte, bekomme ich eine Einladung.",
      "Nachdem ich mich beworben hatte, bekam ich eine Einladung.",
      "Nachdem ich mich beworben habe, bekam ich eine Einladung.",
      "Nachdem ich mich beworben hatte, ich bekam eine Einladung."
     ],
     "answer": 1,
     "vi": "Sau khi tôi nộp đơn ứng tuyển, tôi nhận được lời mời.",
     "explain": "Plusquamperfekt (beworben hatte) đi với Präteritum (bekam), động từ đứng đầu mệnh đề chính. Kết hợp Perfekt + Präteritum hay Plusquamperfekt + Präsens đều sai thì."
    }
   ]
  },
  {
   "title": "Mệnh đề quan hệ (Relativsätze)",
   "intro": "Đại từ quan hệ lấy giống và số theo danh từ được bổ nghĩa, còn cách (Kasus) theo chức năng của nó TRONG mệnh đề quan hệ. Động từ chia đứng cuối mệnh đề.\nBảng: Nominativ der/die/das/die – Akkusativ den/die/das/die – Dativ dem/der/dem/denen – Genitiv dessen/deren/dessen/deren (theo thứ tự giống đực/cái/trung/số nhiều).\nVí dụ: der Mann, der hier wohnt (Nom.) / den ich kenne (Akk.) / dem ich helfe (Dat.) / dessen Auto kaputt ist (Gen.).\nGiới từ đứng trước đại từ quan hệ: die Wohnung, nach der wir suchen; der Freund, mit dem ich reise.\nwo dùng cho nơi chốn (die Stadt, wo …); was dùng sau alles, nichts, etwas, das, so sánh nhất trung tính (das Beste) và khi thay cho cả mệnh đề trước.",
   "questions": [
    {
     "q": "Das ist der Mann, ___ neben mir wohnt.",
     "options": [
      "der",
      "den",
      "dem",
      "die"
     ],
     "answer": 0,
     "vi": "Đó là người đàn ông sống cạnh nhà tôi.",
     "explain": "der Mann là chủ ngữ của mệnh đề quan hệ (wer wohnt?) → Nominativ: der. 'den' là Akkusativ."
    },
    {
     "q": "Die Frau, ___ ich gestern getroffen habe, ist Ärztin.",
     "options": [
      "der",
      "die",
      "den",
      "deren"
     ],
     "answer": 1,
     "vi": "Người phụ nữ mà tôi gặp hôm qua là bác sĩ.",
     "explain": "treffen cần Akkusativ, giống cái → die. 'den' là Akkusativ giống đực, không hợp với die Frau."
    },
    {
     "q": "Das Kind, ___ wir geholfen haben, ist jetzt gesund.",
     "options": [
      "das",
      "den",
      "der",
      "dem"
     ],
     "answer": 3,
     "vi": "Đứa trẻ mà chúng tôi đã giúp giờ đã khỏe.",
     "explain": "helfen đi với Dativ, das Kind giống trung → dem. 'das' là Nominativ/Akkusativ."
    },
    {
     "q": "Die Leute, ___ ich das Paket gegeben habe, waren sehr nett.",
     "options": [
      "die",
      "den",
      "denen",
      "dem"
     ],
     "answer": 2,
     "vi": "Những người mà tôi đưa gói hàng cho rất tử tế.",
     "explain": "geben jemandem → Dativ, số nhiều → denen (không phải den như mạo từ). 'den' là lỗi điển hình."
    },
    {
     "q": "Der Kollege, ___ Auto kaputt ist, kommt heute mit dem Bus.",
     "options": [
      "dessen",
      "deren",
      "dem",
      "sein"
     ],
     "answer": 0,
     "vi": "Người đồng nghiệp có xe ô tô bị hỏng hôm nay đi làm bằng xe buýt.",
     "explain": "Chỉ sở hữu (xe của đồng nghiệp) → Genitiv, giống đực: dessen. 'deren' dùng cho giống cái/số nhiều."
    },
    {
     "q": "Die Nachbarin, ___ Sohn in München studiert, ist sehr stolz.",
     "options": [
      "dessen",
      "die",
      "deren",
      "ihre"
     ],
     "answer": 2,
     "vi": "Bà hàng xóm có con trai đang học ở München rất tự hào.",
     "explain": "Đại từ sở hữu quan hệ theo người sở hữu (die Nachbarin, giống cái) → deren, không theo Sohn. 'dessen' là lỗi lấy giống theo Sohn."
    },
    {
     "q": "Das Buch, ___ du mir empfohlen hast, ist spannend.",
     "options": [
      "dem",
      "das",
      "was",
      "den"
     ],
     "answer": 1,
     "vi": "Cuốn sách bạn giới thiệu cho tôi rất hấp dẫn.",
     "explain": "empfehlen etwas → Akkusativ, giống trung: das. 'was' chỉ dùng sau alles, nichts, etwas…, không dùng sau danh từ cụ thể."
    },
    {
     "q": "Hanoi ist die Stadt, ___ ich geboren bin.",
     "options": [
      "was",
      "die",
      "wem",
      "in der"
     ],
     "answer": 3,
     "vi": "Hà Nội là thành phố nơi tôi được sinh ra.",
     "explain": "geboren in + Dativ, die Stadt giống cái → in der (cũng có thể nói wo). 'die' thiếu giới từ."
    },
    {
     "q": "Wir haben die Wohnung gefunden, ___ wir lange gesucht haben.",
     "options": [
      "nach die",
      "nach der",
      "nach dem",
      "der"
     ],
     "answer": 1,
     "vi": "Chúng tôi đã tìm được căn hộ mà chúng tôi tìm kiếm bấy lâu.",
     "explain": "suchen nach + Dativ, giống cái → nach der. 'nach die' sai vì nach luôn đi với Dativ."
    },
    {
     "q": "Alles, ___ er gesagt hat, war richtig.",
     "options": [
      "was",
      "das",
      "der",
      "wo"
     ],
     "answer": 0,
     "vi": "Tất cả những gì anh ấy nói đều đúng.",
     "explain": "Sau alles dùng đại từ quan hệ was. 'das' là lỗi phổ biến nhưng sai sau alles."
    },
    {
     "q": "Das ist das Beste, ___ mir passieren konnte.",
     "options": [
      "das",
      "der",
      "wo",
      "was"
     ],
     "answer": 3,
     "vi": "Đó là điều tốt nhất có thể xảy ra với tôi.",
     "explain": "Sau so sánh nhất dạng danh từ trung tính (das Beste) dùng was. 'das' sai dù das Beste là giống trung."
    },
    {
     "q": "Der Freund, mit ___ ich in Urlaub fahre, heißt Tom.",
     "options": [
      "den",
      "der",
      "dem",
      "denen"
     ],
     "answer": 2,
     "vi": "Người bạn mà tôi đi nghỉ cùng tên là Tom.",
     "explain": "mit luôn đi với Dativ, der Freund giống đực → mit dem. 'den' là Akkusativ."
    },
    {
     "q": "Das Land, ___ er seit zehn Jahren lebt, ist Deutschland.",
     "options": [
      "was",
      "das",
      "in das",
      "wo"
     ],
     "answer": 3,
     "vi": "Đất nước nơi anh ấy sống mười năm nay là nước Đức.",
     "explain": "Chỉ nơi chốn (ở đâu?) dùng wo (hoặc in dem). 'in das' là Akkusativ chỉ hướng, sai với leben."
    },
    {
     "q": "Die Studenten, ___ Noten sehr gut waren, bekamen ein Stipendium.",
     "options": [
      "deren",
      "dessen",
      "denen",
      "die"
     ],
     "answer": 0,
     "vi": "Những sinh viên có điểm số rất tốt đã nhận được học bổng.",
     "explain": "Sở hữu (điểm của sinh viên), người sở hữu số nhiều → Genitiv deren. 'denen' là Dativ số nhiều."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Er hat die Prüfung bestanden, das mich sehr freut.",
      "Er hat die Prüfung bestanden, was mich sehr freut.",
      "Er hat die Prüfung bestanden, was freut mich sehr.",
      "Er hat die Prüfung bestanden, die mich sehr freut."
     ],
     "answer": 1,
     "vi": "Anh ấy đã thi đỗ, điều đó làm tôi rất vui.",
     "explain": "Khi thay cho cả mệnh đề trước dùng was, động từ đứng cuối. 'die' sai vì người vui là do cả sự việc, không phải do die Prüfung."
    }
   ]
  },
  {
   "title": "Câu bị động (Passiv)",
   "intro": "Câu bị động nhấn mạnh hành động, không nhấn mạnh người làm.\nPräsens: werden + Partizip II → Das Haus wird gebaut.\nPräteritum: wurde + Partizip II → Das Haus wurde gebaut.\nPerfekt: sein + Partizip II + worden → Das Haus ist gebaut worden (KHÔNG dùng geworden).\nVới động từ khuyết thiếu: Modalverb + Partizip II + werden → Die Rechnung muss bezahlt werden.\nNgười/tác nhân thực hiện: von + Dativ (vom Chef, von der Polizei); phương tiện/nguyên nhân: durch + Akkusativ (durch ein Erdbeben).\nCâu chủ động với man → bị động: Man repariert das Auto. → Das Auto wird repariert. Câu không có chủ ngữ: Hier wird nicht geraucht.",
   "questions": [
    {
     "q": "Das alte Haus ___ zurzeit renoviert.",
     "options": [
      "hat",
      "werdet",
      "werden",
      "wird"
     ],
     "answer": 3,
     "vi": "Ngôi nhà cũ hiện đang được sửa sang.",
     "explain": "Bị động hiện tại: werden + Partizip II, chủ ngữ số ít → wird. 'werden' là số nhiều."
    },
    {
     "q": "Die Briefe ___ jeden Morgen gebracht.",
     "options": [
      "werden",
      "wird",
      "worden",
      "haben"
     ],
     "answer": 0,
     "vi": "Thư được mang đến mỗi sáng.",
     "explain": "Chủ ngữ số nhiều die Briefe → werden gebracht. 'wird' là số ít."
    },
    {
     "q": "In Deutschland ___ viel Brot gegessen.",
     "options": [
      "werden",
      "wird",
      "wurdet",
      "hat"
     ],
     "answer": 1,
     "vi": "Ở Đức người ta ăn nhiều bánh mì.",
     "explain": "Chủ ngữ là viel Brot (số ít) → wird gegessen. 'werden' sai vì chủ ngữ không phải số nhiều."
    },
    {
     "q": "Das Rathaus ___ im Jahr 1890 gebaut.",
     "options": [
      "hat",
      "worden",
      "wurde",
      "würde"
     ],
     "answer": 2,
     "vi": "Tòa thị chính được xây vào năm 1890.",
     "explain": "Bị động quá khứ: wurde + Partizip II. 'würde' là Konjunktiv II, không phải quá khứ."
    },
    {
     "q": "Der Dieb ist gestern von der Polizei verhaftet ___.",
     "options": [
      "worden",
      "geworden",
      "werden",
      "wurde"
     ],
     "answer": 0,
     "vi": "Tên trộm đã bị cảnh sát bắt hôm qua.",
     "explain": "Bị động Perfekt: ist + Partizip II + worden. 'geworden' chỉ dùng khi werden là động từ chính (trở nên)."
    },
    {
     "q": "Der Brief wurde ___ meinem Chef unterschrieben.",
     "options": [
      "durch",
      "aus",
      "vom",
      "von"
     ],
     "answer": 3,
     "vi": "Lá thư đã được sếp tôi ký.",
     "explain": "Người thực hiện hành động → von + Dativ: von meinem Chef. 'vom' = von dem, không thể đứng trước meinem."
    },
    {
     "q": "Die Stadt wurde ___ ein Erdbeben zerstört.",
     "options": [
      "von",
      "durch",
      "mit",
      "aus"
     ],
     "answer": 1,
     "vi": "Thành phố đã bị một trận động đất phá hủy.",
     "explain": "Nguyên nhân/sự kiện → durch + Akkusativ: durch ein Erdbeben. 'von' đòi Dativ (von einem), nên 'von ein' sai."
    },
    {
     "q": "Die Rechnungen müssen bis Freitag bezahlt ___.",
     "options": [
      "worden",
      "wurden",
      "werden",
      "geworden"
     ],
     "answer": 2,
     "vi": "Các hóa đơn phải được thanh toán trước thứ Sáu.",
     "explain": "Bị động với động từ khuyết thiếu: müssen + Partizip II + werden (nguyên mẫu). 'worden' chỉ dùng ở Perfekt."
    },
    {
     "q": "Gestern ___ die Bank erst um zehn Uhr geöffnet.",
     "options": [
      "wird",
      "wurde",
      "würde",
      "worden"
     ],
     "answer": 1,
     "vi": "Hôm qua ngân hàng mãi đến mười giờ mới mở cửa.",
     "explain": "gestern → quá khứ: wurde geöffnet. 'wird' là hiện tại, không hợp với gestern."
    },
    {
     "q": "Man repariert das Auto. → Das Auto ___ repariert.",
     "options": [
      "wird",
      "werden",
      "ist worden",
      "hat"
     ],
     "answer": 0,
     "vi": "Chiếc ô tô đang được sửa.",
     "explain": "Câu chủ động ở Präsens → bị động Präsens: wird repariert. 'ist worden' là cấu trúc Perfekt, lại thiếu Partizip II đi kèm (ist repariert worden)."
    },
    {
     "q": "Man hat den Vertrag gestern unterschrieben. → Der Vertrag ___ gestern unterschrieben worden.",
     "options": [
      "hat",
      "wurde",
      "wird",
      "ist"
     ],
     "answer": 3,
     "vi": "Hợp đồng đã được ký hôm qua.",
     "explain": "Bị động Perfekt luôn dùng sein: ist … worden. 'hat' là lỗi do lấy trợ động từ của câu chủ động."
    },
    {
     "q": "Gestern ___ die Kinder von ihren Großeltern abgeholt.",
     "options": [
      "wurde",
      "wird",
      "wurden",
      "worden"
     ],
     "answer": 2,
     "vi": "Hôm qua bọn trẻ được ông bà đón.",
     "explain": "Quá khứ, chủ ngữ số nhiều die Kinder → wurden. 'wurde' là số ít."
    },
    {
     "q": "Câu bị động nào đúng ngữ pháp?",
     "options": [
      "Der Antrag wurde vom Amt abgelehnt.",
      "Der Antrag wurde von das Amt abgelehnt.",
      "Der Antrag ist vom Amt abgelehnt geworden.",
      "Der Antrag wurde vom Amt ablehnen."
     ],
     "answer": 0,
     "vi": "Đơn đã bị cơ quan từ chối.",
     "explain": "wurde + Partizip II, von + Dativ (vom Amt). Perfekt bị động phải là 'abgelehnt worden', không phải 'geworden'."
    },
    {
     "q": "Hier ___ nicht geraucht!",
     "options": [
      "werden",
      "wird",
      "wurdet",
      "ist"
     ],
     "answer": 1,
     "vi": "Ở đây không được hút thuốc!",
     "explain": "Bị động không chủ ngữ luôn chia ngôi số ít: wird geraucht. 'werden' sai vì không có chủ ngữ số nhiều."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die Software hat von der Firma aktualisiert worden.",
      "Die Software ist durch der Firma aktualisiert worden.",
      "Die Software wurde von der Firma aktualisiert worden.",
      "Die Software ist von der Firma aktualisiert worden."
     ],
     "answer": 3,
     "vi": "Phần mềm đã được công ty cập nhật.",
     "explain": "Bị động Perfekt: ist + Partizip II + worden, người thực hiện với von + Dativ. 'wurde … worden' trộn lẫn Präteritum và Perfekt nên sai."
    }
   ]
  },
  {
   "title": "Thức giả định II hiện tại và quá khứ (Konjunktiv II)",
   "intro": "Konjunktiv II diễn tả điều không có thật, ước muốn, lời khuyên và lời đề nghị lịch sự.\nHiện tại: wäre (sein), hätte (haben), würde + nguyên mẫu (đa số động từ); động từ khuyết thiếu: könnte, müsste, dürfte, sollte; một số động từ mạnh: käme, ginge, wüsste.\nĐiều kiện không thật: Wenn ich Zeit hätte, würde ich kommen. Ước muốn: Wenn ich doch reich wäre! / Ich wünschte, ich hätte mehr Zeit. Lời khuyên: An deiner Stelle würde ich … Lịch sự: Könnten Sie mir helfen?\nQuá khứ: hätte/wäre + Partizip II (theo trợ động từ của Perfekt): Wenn ich gelernt hätte, hätte ich bestanden. Wenn du gekommen wärst, …\nVới động từ khuyết thiếu ở quá khứ: hätte + nguyên mẫu + Modalverb: Du hättest anrufen sollen.",
   "questions": [
    {
     "q": "Wenn ich mehr Geld ___, würde ich ein Auto kaufen.",
     "options": [
      "habe",
      "hätte",
      "hatte",
      "würde"
     ],
     "answer": 1,
     "vi": "Nếu tôi có nhiều tiền hơn, tôi sẽ mua một chiếc ô tô.",
     "explain": "Điều kiện không thật ở hiện tại dùng hätte. 'hatte' là Präteritum (quá khứ thật), không phải Konjunktiv."
    },
    {
     "q": "Wenn ich du ___, würde ich zum Arzt gehen.",
     "options": [
      "war",
      "bin",
      "wäre",
      "würde"
     ],
     "answer": 2,
     "vi": "Nếu tôi là bạn, tôi sẽ đi khám bác sĩ.",
     "explain": "sein ở Konjunktiv II là wäre. 'war' thiếu dấu Umlaut nên là quá khứ thường."
    },
    {
     "q": "___ Sie mir bitte helfen?",
     "options": [
      "Könnten",
      "Konnten",
      "Könntet",
      "Kannst"
     ],
     "answer": 0,
     "vi": "Ông/bà có thể giúp tôi được không ạ?",
     "explain": "Lời đề nghị lịch sự với Sie: Könnten Sie …? 'Konnten' là quá khứ thường, 'Könntet' là ngôi ihr."
    },
    {
     "q": "Ich ___ gern in Deutschland studieren.",
     "options": [
      "würdest",
      "wurde",
      "wäre",
      "würde"
     ],
     "answer": 3,
     "vi": "Tôi rất muốn được học đại học ở Đức.",
     "explain": "Ước muốn: würde + nguyên mẫu, ngôi ich → würde. 'wurde' là quá khứ của werden, sai nghĩa."
    },
    {
     "q": "Wenn er doch nur pünktlich ___!",
     "options": [
      "kommt",
      "käme",
      "kam",
      "kämen"
     ],
     "answer": 1,
     "vi": "Giá mà anh ấy đến đúng giờ!",
     "explain": "Ước muốn không thật: Konjunktiv II của kommen là käme. 'kam' là Präteritum, thiếu Umlaut."
    },
    {
     "q": "Ich wünschte, ich ___ mehr Zeit für meine Familie.",
     "options": [
      "hätte",
      "habe",
      "hatte",
      "hätten"
     ],
     "answer": 0,
     "vi": "Ước gì tôi có nhiều thời gian hơn cho gia đình.",
     "explain": "Sau 'Ich wünschte' dùng Konjunktiv II: ich hätte. 'hätten' là ngôi wir/sie."
    },
    {
     "q": "An deiner Stelle ___ ich den Vertrag nicht unterschreiben.",
     "options": [
      "werde",
      "wurde",
      "würde",
      "wäre"
     ],
     "answer": 2,
     "vi": "Nếu ở vị trí của bạn, tôi sẽ không ký hợp đồng.",
     "explain": "Lời khuyên: An deiner Stelle würde ich + nguyên mẫu. 'wäre' không đi với nguyên mẫu unterschreiben."
    },
    {
     "q": "Wenn ich gestern Zeit gehabt ___, wäre ich gekommen.",
     "options": [
      "habe",
      "hatte",
      "wäre",
      "hätte"
     ],
     "answer": 3,
     "vi": "Nếu hôm qua tôi có thời gian thì tôi đã đến rồi.",
     "explain": "Konjunktiv II quá khứ: hätte + Partizip II (haben dùng haben ở Perfekt) → gehabt hätte. 'hatte' là Plusquamperfekt thường, không diễn tả điều không thật."
    },
    {
     "q": "Wenn du früher aufgestanden ___, hättest du den Bus nicht verpasst.",
     "options": [
      "wärst",
      "hättest",
      "bist",
      "warst"
     ],
     "answer": 0,
     "vi": "Nếu bạn dậy sớm hơn thì bạn đã không lỡ xe buýt.",
     "explain": "aufstehen dùng sein ở Perfekt → Konjunktiv II quá khứ: aufgestanden wärst. 'hättest' sai trợ động từ."
    },
    {
     "q": "Ich ___ fast den Termin vergessen.",
     "options": [
      "wäre",
      "hätte",
      "würde",
      "wurde"
     ],
     "answer": 1,
     "vi": "Suýt nữa thì tôi quên cuộc hẹn.",
     "explain": "Điều suýt xảy ra trong quá khứ: hätte + Partizip II. vergessen dùng haben nên 'wäre' sai."
    },
    {
     "q": "Wenn wir den früheren Zug genommen hätten, ___ wir pünktlich angekommen.",
     "options": [
      "hätten",
      "würden",
      "waren",
      "wären"
     ],
     "answer": 3,
     "vi": "Nếu chúng tôi đi chuyến tàu sớm hơn thì chúng tôi đã đến đúng giờ.",
     "explain": "ankommen dùng sein → wären angekommen. 'hätten' sai trợ động từ."
    },
    {
     "q": "Ohne deine Hilfe ___ ich die Prüfung nie bestanden.",
     "options": [
      "wäre",
      "würde",
      "hätte",
      "hättet"
     ],
     "answer": 2,
     "vi": "Không có sự giúp đỡ của bạn thì tôi đã không bao giờ thi đỗ.",
     "explain": "bestehen dùng haben ở Perfekt → hätte bestanden. 'würde' không đi với Partizip II."
    },
    {
     "q": "Câu nào diễn tả đúng một điều ước không thật trong quá khứ?",
     "options": [
      "Wenn ich doch mehr gelernt habe!",
      "Wenn ich doch mehr gelernt hätte!",
      "Wenn ich doch mehr gelernt wäre!",
      "Wenn ich doch mehr lernen hätte!"
     ],
     "answer": 1,
     "vi": "Giá mà tôi đã học nhiều hơn!",
     "explain": "Ước muốn quá khứ: hätte + Partizip II. lernen dùng haben nên 'gelernt wäre' sai."
    },
    {
     "q": "Du ___ den Arzt früher anrufen sollen.",
     "options": [
      "wärst",
      "würdest",
      "bist",
      "hättest"
     ],
     "answer": 3,
     "vi": "Lẽ ra bạn nên gọi cho bác sĩ sớm hơn.",
     "explain": "Lời trách/khuyên trong quá khứ: hätte + nguyên mẫu + sollen. Động từ khuyết thiếu luôn dùng haben nên 'wärst' sai."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Wenn ich Zeit hätte, würde ich dir helfen.",
      "Wenn ich Zeit hätte, ich würde dir helfen.",
      "Wenn ich hätte Zeit, würde ich dir helfen.",
      "Wenn ich Zeit hätte, würde ich dir helfen haben."
     ],
     "answer": 0,
     "vi": "Nếu tôi có thời gian, tôi sẽ giúp bạn.",
     "explain": "Động từ đứng cuối mệnh đề wenn, mệnh đề chính bắt đầu bằng động từ würde. 'ich würde' sai vị trí động từ."
    }
   ]
  },
  {
   "title": "Nguyên mẫu với zu (Infinitiv mit zu)",
   "intro": "Sau nhiều động từ và cụm từ, nguyên mẫu đứng cuối câu kèm zu: versuchen, vergessen, anfangen, aufhören, hoffen, raten, Lust/Zeit haben, Es ist wichtig/schwer …: Ich habe keine Lust zu kochen.\nĐộng từ tách được: zu chen vào giữa: anrufen → anzurufen, ausfüllen → auszufüllen.\nKHÔNG dùng zu sau động từ khuyết thiếu (können, müssen…), werden, lassen: Ich muss arbeiten.\num … zu: chỉ mục đích, chủ ngữ hai vế giống nhau: Ich lerne Deutsch, um in Deutschland zu studieren.\ndamit: chỉ mục đích, dùng bắt buộc khi hai chủ ngữ khác nhau; động từ chia đứng cuối: Ich spare, damit meine Kinder studieren können.\nohne … zu (mà không …) và statt … zu (thay vì …): Er ging, ohne zu grüßen. Statt zu lernen, spielt er.",
   "questions": [
    {
     "q": "Ich habe heute keine Lust, ___.",
     "options": [
      "kochen",
      "gekocht zu",
      "zu kochen",
      "kochen zu"
     ],
     "answer": 2,
     "vi": "Hôm nay tôi không có hứng nấu ăn.",
     "explain": "Sau 'Lust haben' dùng zu + nguyên mẫu: zu kochen. 'kochen zu' sai vị trí của zu."
    },
    {
     "q": "Vergiss nicht, deine Mutter ___!",
     "options": [
      "zu anrufen",
      "anrufen",
      "anruft",
      "anzurufen"
     ],
     "answer": 3,
     "vi": "Đừng quên gọi điện cho mẹ nhé!",
     "explain": "anrufen là động từ tách được nên zu chen vào giữa: anzurufen. 'zu anrufen' là lỗi điển hình."
    },
    {
     "q": "Wir müssen morgen früh ___.",
     "options": [
      "aufstehen",
      "aufzustehen",
      "zu aufstehen",
      "aufgestanden"
     ],
     "answer": 0,
     "vi": "Ngày mai chúng ta phải dậy sớm.",
     "explain": "Sau động từ khuyết thiếu müssen dùng nguyên mẫu KHÔNG có zu: aufstehen. 'aufzustehen' sai vì thừa zu."
    },
    {
     "q": "Er lernt Deutsch, ___ in Deutschland Jura zu studieren.",
     "options": [
      "damit",
      "um",
      "ohne",
      "für"
     ],
     "answer": 1,
     "vi": "Anh ấy học tiếng Đức để học ngành luật ở Đức.",
     "explain": "Chỉ mục đích, cùng chủ ngữ, có zu + nguyên mẫu → um … zu. 'damit' cần một mệnh đề có chủ ngữ và động từ chia."
    },
    {
     "q": "Sie ging aus dem Haus, ___ sich zu verabschieden.",
     "options": [
      "damit",
      "weil",
      "ohne",
      "dass"
     ],
     "answer": 2,
     "vi": "Cô ấy ra khỏi nhà mà không chào tạm biệt.",
     "explain": "ohne … zu = mà không làm gì. 'damit', 'weil', 'dass' là liên từ cần động từ chia, không đi với zu + nguyên mẫu."
    },
    {
     "q": "Ich spare Geld, ___ meine Kinder später studieren können.",
     "options": [
      "damit",
      "um",
      "um zu",
      "ohne"
     ],
     "answer": 0,
     "vi": "Tôi tiết kiệm tiền để sau này các con tôi có thể học đại học.",
     "explain": "Hai chủ ngữ khác nhau (ich – meine Kinder) nên phải dùng damit. 'um' chỉ dùng khi cùng chủ ngữ và có zu."
    },
    {
     "q": "___ zu lernen, spielt er den ganzen Tag Computerspiele.",
     "options": [
      "Um",
      "Damit",
      "Weil",
      "Statt"
     ],
     "answer": 3,
     "vi": "Thay vì học, cậu ấy chơi game máy tính cả ngày.",
     "explain": "statt … zu = thay vì. 'Um zu lernen' nghĩa là 'để học', mâu thuẫn với việc chơi game."
    },
    {
     "q": "Es ist wichtig, die Formulare vollständig ___.",
     "options": [
      "ausfüllen",
      "auszufüllen",
      "zu ausfüllen",
      "ausgefüllt"
     ],
     "answer": 1,
     "vi": "Điều quan trọng là phải điền đầy đủ các mẫu đơn.",
     "explain": "Sau 'Es ist wichtig' dùng zu + nguyên mẫu; ausfüllen tách được → auszufüllen. 'zu ausfüllen' sai vị trí zu."
    },
    {
     "q": "Der Arzt hat mir geraten, weniger ___.",
     "options": [
      "zu rauchen",
      "rauchen",
      "rauche",
      "geraucht"
     ],
     "answer": 0,
     "vi": "Bác sĩ đã khuyên tôi hút thuốc ít đi.",
     "explain": "Sau raten dùng zu + nguyên mẫu: zu rauchen. 'rauchen' thiếu zu."
    },
    {
     "q": "Sie hat angefangen, ein Buch ___ schreiben.",
     "options": [
      "um",
      "für",
      "zu",
      "ohne"
     ],
     "answer": 2,
     "vi": "Cô ấy đã bắt đầu viết một cuốn sách.",
     "explain": "Sau anfangen dùng zu + nguyên mẫu. 'um' cần đứng đầu cụm và chỉ mục đích, không hợp ở đây."
    },
    {
     "q": "Ich rufe dich jeden Abend an, ___ du nicht allein bist.",
     "options": [
      "um",
      "damit",
      "ohne",
      "statt"
     ],
     "answer": 1,
     "vi": "Tối nào tôi cũng gọi cho bạn để bạn không cảm thấy cô đơn.",
     "explain": "Hai chủ ngữ khác nhau (ich – du), có động từ chia → damit. 'um' không thể đi với mệnh đề có chủ ngữ riêng."
    },
    {
     "q": "Hast du am Samstag Zeit, mir beim Umzug ___?",
     "options": [
      "helfen",
      "geholfen",
      "hilfst",
      "zu helfen"
     ],
     "answer": 3,
     "vi": "Thứ Bảy bạn có thời gian giúp tôi chuyển nhà không?",
     "explain": "Sau 'Zeit haben' dùng zu + nguyên mẫu: zu helfen. 'helfen' thiếu zu."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Er ist nach Deutschland gekommen, um dort zu arbeiten.",
      "Er ist nach Deutschland gekommen, um dort arbeiten.",
      "Er ist nach Deutschland gekommen, um zu dort arbeiten.",
      "Er ist nach Deutschland gekommen, damit dort zu arbeiten."
     ],
     "answer": 0,
     "vi": "Anh ấy đến Đức để làm việc ở đó.",
     "explain": "um … zu: zu đứng ngay trước nguyên mẫu ở cuối. 'damit' không đi với zu + nguyên mẫu."
    },
    {
     "q": "Statt den Bus ___, ging sie zu Fuß.",
     "options": [
      "nehmen",
      "nimmt",
      "genommen",
      "zu nehmen"
     ],
     "answer": 3,
     "vi": "Thay vì đi xe buýt, cô ấy đi bộ.",
     "explain": "statt … zu + nguyên mẫu: statt den Bus zu nehmen. 'nehmen' thiếu zu."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich erkläre es noch einmal, um du es verstehst.",
      "Ich erkläre es noch einmal, damit du es verstehst.",
      "Ich erkläre es noch einmal, um es du zu verstehen.",
      "Ich erkläre es noch einmal, damit du es zu verstehen."
     ],
     "answer": 1,
     "vi": "Tôi giải thích lại một lần nữa để bạn hiểu.",
     "explain": "Hai chủ ngữ khác nhau → damit + mệnh đề, động từ chia cuối (verstehst). um … zu không thể có chủ ngữ riêng (du)."
    }
   ]
  },
  {
   "title": "Mệnh đề thời gian (Temporalsätze)",
   "intro": "Liên từ thời gian mở đầu mệnh đề phụ, động từ chia đứng cuối; nếu mệnh đề phụ đứng trước, mệnh đề chính bắt đầu bằng động từ.\nals: một sự việc/khoảng thời gian duy nhất trong quá khứ (Als ich Kind war, …).\nwenn: hiện tại/tương lai, hoặc lặp lại nhiều lần trong quá khứ (Immer wenn …).\nwährend: hai việc xảy ra đồng thời. bevor: trước khi. nachdem: sau khi (dùng thì trước: Plusquamperfekt/Perfekt).\nseit/seitdem: từ một thời điểm trong quá khứ đến nay, thường dùng Präsens (Seit ich hier wohne, …).\nbis: cho đến khi. sobald: ngay khi.\nChú ý: wann chỉ là từ để hỏi (Wann kommst du?), không dùng làm liên từ thời gian.",
   "questions": [
    {
     "q": "___ ich ein Kind war, wohnte ich auf dem Land.",
     "options": [
      "Als",
      "Wenn",
      "Wann",
      "Nachdem"
     ],
     "answer": 0,
     "vi": "Khi tôi còn nhỏ, tôi sống ở nông thôn.",
     "explain": "Một khoảng thời gian duy nhất trong quá khứ → als. 'Wenn' dùng cho việc lặp lại hoặc hiện tại/tương lai."
    },
    {
     "q": "Immer ___ es regnet, bleibe ich zu Hause.",
     "options": [
      "als",
      "wann",
      "wenn",
      "ob"
     ],
     "answer": 2,
     "vi": "Hễ trời mưa là tôi ở nhà.",
     "explain": "Sự việc lặp lại, ở hiện tại → wenn. 'wann' chỉ là từ để hỏi."
    },
    {
     "q": "___ ich koche, höre ich Musik.",
     "options": [
      "Als",
      "Während",
      "Wann",
      "Nachdem"
     ],
     "answer": 1,
     "vi": "Trong khi nấu ăn, tôi nghe nhạc.",
     "explain": "Hai việc xảy ra cùng lúc → während. 'Als' chỉ dùng cho quá khứ."
    },
    {
     "q": "Wasch dir die Hände, ___ du isst!",
     "options": [
      "nachdem",
      "als",
      "wann",
      "bevor"
     ],
     "answer": 3,
     "vi": "Rửa tay trước khi ăn nhé!",
     "explain": "Việc rửa tay xảy ra trước việc ăn → bevor. 'nachdem' sai nghĩa và cần thì trước (Perfekt)."
    },
    {
     "q": "___ ich in Deutschland wohne, spreche ich jeden Tag Deutsch.",
     "options": [
      "Als",
      "Nachdem",
      "Seit",
      "Wann"
     ],
     "answer": 2,
     "vi": "Từ khi sống ở Đức, ngày nào tôi cũng nói tiếng Đức.",
     "explain": "Từ một thời điểm trong quá khứ kéo dài đến nay, dùng Präsens → seit. 'Als' chỉ dùng với quá khứ."
    },
    {
     "q": "Wir warten hier, ___ der Regen aufhört.",
     "options": [
      "bis",
      "seit",
      "als",
      "wann"
     ],
     "answer": 0,
     "vi": "Chúng tôi đợi ở đây cho đến khi tạnh mưa.",
     "explain": "Cho đến khi → bis. 'seit' chỉ điểm bắt đầu, không phải điểm kết thúc."
    },
    {
     "q": "___ ich zu Hause angekommen bin, rufe ich dich an.",
     "options": [
      "Als",
      "Sobald",
      "Wann",
      "Ob"
     ],
     "answer": 1,
     "vi": "Ngay khi về đến nhà, tôi sẽ gọi cho bạn.",
     "explain": "Ngay khi (tương lai) → sobald. 'Als' chỉ dùng cho quá khứ, không dùng cho việc sắp tới."
    },
    {
     "q": "Als ich nach Hause kam, ___.",
     "options": [
      "meine Mutter kochte",
      "kocht meine Mutter",
      "meine Mutter kocht",
      "kochte meine Mutter"
     ],
     "answer": 3,
     "vi": "Khi tôi về đến nhà thì mẹ tôi đang nấu ăn.",
     "explain": "Mệnh đề phụ đứng đầu → mệnh đề chính bắt đầu bằng động từ, thì quá khứ: kochte meine Mutter. 'meine Mutter kochte' sai vị trí động từ."
    },
    {
     "q": "___ ich das Studium beendet hatte, fand ich eine Stelle beim Finanzamt.",
     "options": [
      "Wenn",
      "Während",
      "Nachdem",
      "Bis"
     ],
     "answer": 2,
     "vi": "Sau khi học xong đại học, tôi tìm được việc làm ở sở thuế.",
     "explain": "Plusquamperfekt (beendet hatte) diễn tả việc xảy ra trước → nachdem. 'Wenn' không dùng cho một sự việc duy nhất trong quá khứ."
    },
    {
     "q": "Immer ___ er nach Hanoi fuhr, besuchte er seine Oma.",
     "options": [
      "wenn",
      "als",
      "wann",
      "ob"
     ],
     "answer": 0,
     "vi": "Mỗi lần anh ấy đến Hà Nội, anh ấy đều thăm bà.",
     "explain": "Việc lặp lại nhiều lần trong quá khứ → wenn. 'als' chỉ dùng cho sự việc xảy ra một lần."
    },
    {
     "q": "Seitdem er eine feste Arbeit hat, ___ er viel glücklicher.",
     "options": [
      "war",
      "wurde",
      "ist gewesen",
      "ist"
     ],
     "answer": 3,
     "vi": "Từ khi có việc làm ổn định, anh ấy hạnh phúc hơn nhiều.",
     "explain": "seitdem + Präsens → mệnh đề chính cũng ở Präsens: ist. 'war' không khớp thì vì tình trạng vẫn kéo dài đến hiện tại."
    },
    {
     "q": "Sie las Zeitung, ___ ihr Mann das Frühstück machte.",
     "options": [
      "wann",
      "während",
      "ob",
      "nachdem"
     ],
     "answer": 1,
     "vi": "Cô ấy đọc báo trong khi chồng cô ấy làm bữa sáng.",
     "explain": "Hai việc đồng thời → während. 'nachdem' cần Plusquamperfekt và chỉ việc xảy ra trước."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Bevor ich ins Bett gehe, putze ich mir die Zähne.",
      "Bevor ich ins Bett gehe, ich putze mir die Zähne.",
      "Bevor ich gehe ins Bett, putze ich mir die Zähne.",
      "Bevor ich ins Bett gehe, putze mir ich die Zähne."
     ],
     "answer": 0,
     "vi": "Trước khi đi ngủ, tôi đánh răng.",
     "explain": "Động từ đứng cuối mệnh đề phụ (gehe), mệnh đề chính bắt đầu bằng động từ (putze ich). 'ich putze' sai vì động từ không ở vị trí 2."
    },
    {
     "q": "Sie müssen warten, ___ Ihr Antrag bearbeitet ist.",
     "options": [
      "seit",
      "als",
      "bis",
      "wann"
     ],
     "answer": 2,
     "vi": "Ông/bà phải đợi cho đến khi đơn của mình được xử lý xong.",
     "explain": "Chờ đến một thời điểm kết thúc → bis. 'seit' chỉ điểm bắt đầu trong quá khứ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Wenn ich gestern nach Hause kam, war niemand da.",
      "Wann ich gestern nach Hause kam, war niemand da.",
      "Als ich gestern nach Hause kam, niemand war da.",
      "Als ich gestern nach Hause kam, war niemand da."
     ],
     "answer": 3,
     "vi": "Hôm qua khi tôi về nhà thì không có ai ở nhà.",
     "explain": "Một lần trong quá khứ (gestern) → als, và mệnh đề chính bắt đầu bằng động từ (war). 'Wenn' sai vì sự việc chỉ xảy ra một lần."
    }
   ]
  },
  {
   "title": "Đuôi tính từ đầy đủ (Adjektivdeklination)",
   "intro": "Tính từ đứng trước danh từ phải thêm đuôi, tùy theo loại mạo từ, giống, cách và số.\n1) Sau mạo từ xác định (der/die/das, dieser…): Nom. số ít và Akk. giống cái/trung → -e (der alte Mann, die/das …); tất cả các trường hợp còn lại (Akk. giống đực, Dat., Gen., số nhiều) → -en (den alten Mann, dem alten Mann, die alten Leute).\n2) Sau mạo từ không xác định (ein, kein, mein…): Nom. đực -er (ein alter Mann), Nom./Akk. trung -es (ein neues Auto), Nom./Akk. cái -e (eine kleine Wohnung); Dat., Gen. và Akk. đực → -en (einen alten Mann, einer kleinen Wohnung).\n3) Không có mạo từ (Nullartikel): tính từ mang đuôi của mạo từ der: heißer Kaffee (Nom.), heißen Kaffee (Akk.), bei schlechtem Wetter (Dat.), kalte Milch; số nhiều: nette Freunde, mit kleinen Kindern. Riêng Gen. đực/trung: -en (trotz starken Regens, frischen Brotes).",
   "questions": [
    {
     "q": "Das ist ein ___ Auto.",
     "options": [
      "neues",
      "neue",
      "neuen",
      "neuer"
     ],
     "answer": 0,
     "vi": "Đây là một chiếc ô tô mới.",
     "explain": "Auto là giống trung, Nom. sau ein → đuôi -es. 'neue' chỉ đúng sau mạo từ xác định (das neue Auto)."
    },
    {
     "q": "Ich kaufe den ___ Tisch.",
     "options": [
      "großer",
      "großen",
      "große",
      "großem"
     ],
     "answer": 1,
     "vi": "Tôi mua cái bàn lớn.",
     "explain": "Akk. giống đực sau den → -en. 'großer' là đuôi Nom. đực sau ein."
    },
    {
     "q": "Die ___ Frau wohnt hier.",
     "options": [
      "junger",
      "jungen",
      "junge",
      "junges"
     ],
     "answer": 2,
     "vi": "Người phụ nữ trẻ sống ở đây.",
     "explain": "Nom. số ít sau mạo từ xác định die → -e. 'jungen' chỉ dùng ở Dat./Gen. hoặc số nhiều."
    },
    {
     "q": "Wir trinken ___ Kaffee.",
     "options": [
      "heißer",
      "heißes",
      "heißem",
      "heißen"
     ],
     "answer": 3,
     "vi": "Chúng tôi uống cà phê nóng.",
     "explain": "Không có mạo từ, Akk. giống đực → đuôi giống 'den': -en. 'heißer' là Nom."
    },
    {
     "q": "Mit dem ___ Zug fahren wir nach Berlin.",
     "options": [
      "schnellen",
      "schneller",
      "schnelle",
      "schnellem"
     ],
     "answer": 0,
     "vi": "Chúng tôi đi Berlin bằng chuyến tàu nhanh.",
     "explain": "Sau dem (Dat.) tính từ luôn có -en. 'schnellem' sai vì mạo từ dem đã thể hiện cách rồi."
    },
    {
     "q": "Er wohnt in einer ___ Wohnung.",
     "options": [
      "kleine",
      "kleinen",
      "kleiner",
      "kleinem"
     ],
     "answer": 1,
     "vi": "Anh ấy sống trong một căn hộ nhỏ.",
     "explain": "in + Dat. (vị trí), sau einer → -en. 'kleiner' sai vì đuôi -er đã nằm ở mạo từ einer."
    },
    {
     "q": "Ich trinke gern ___ Milch.",
     "options": [
      "kalten",
      "kalter",
      "kalte",
      "kaltem"
     ],
     "answer": 2,
     "vi": "Tôi thích uống sữa lạnh.",
     "explain": "Không có mạo từ, Akk. giống cái → -e (như 'die'). 'kalter' là Dat./Gen. giống cái."
    },
    {
     "q": "Die ___ Kinder spielen im Garten.",
     "options": [
      "kleine",
      "kleiner",
      "kleines",
      "kleinen"
     ],
     "answer": 3,
     "vi": "Những đứa trẻ nhỏ chơi trong vườn.",
     "explain": "Số nhiều sau mạo từ xác định die → -en. 'kleine' chỉ đúng khi không có mạo từ (kleine Kinder)."
    },
    {
     "q": "Bei ___ Wetter bleiben wir zu Hause.",
     "options": [
      "schlechtem",
      "schlechten",
      "schlechtes",
      "schlechter"
     ],
     "answer": 0,
     "vi": "Khi thời tiết xấu chúng tôi ở nhà.",
     "explain": "bei + Dat., không mạo từ, giống trung → -em (như 'dem'). 'schlechten' chỉ đúng khi có mạo từ (bei dem schlechten Wetter)."
    },
    {
     "q": "Das ist das Auto meines ___ Bruders.",
     "options": [
      "älterer",
      "älteren",
      "ältere",
      "älteres"
     ],
     "answer": 1,
     "vi": "Đây là ô tô của anh trai tôi.",
     "explain": "Gen. sau meines → tính từ luôn -en. 'älterer' là đuôi Nom. đực."
    },
    {
     "q": "Wir haben ___ Freunde eingeladen.",
     "options": [
      "netten",
      "nettes",
      "nette",
      "netter"
     ],
     "answer": 2,
     "vi": "Chúng tôi đã mời những người bạn dễ mến.",
     "explain": "Số nhiều Akk. không mạo từ → -e (như 'die'). 'netten' cần có mạo từ đứng trước (die netten Freunde)."
    },
    {
     "q": "Trotz des ___ Regens gingen wir spazieren.",
     "options": [
      "starke",
      "starker",
      "starkes",
      "starken"
     ],
     "answer": 3,
     "vi": "Mặc dù mưa to, chúng tôi vẫn đi dạo.",
     "explain": "Gen. sau des → -en. 'starkes' sai vì -es đã có trên mạo từ des."
    },
    {
     "q": "Er gab ___ Kindern Geschenke.",
     "options": [
      "kleinen",
      "kleine",
      "kleiner",
      "kleinem"
     ],
     "answer": 0,
     "vi": "Anh ấy tặng quà cho những đứa trẻ nhỏ.",
     "explain": "Dat. số nhiều không mạo từ → -en (như 'den Kindern'). 'kleinem' là Dat. số ít đực/trung."
    },
    {
     "q": "Das ist der Preis ___ Brotes.",
     "options": [
      "frisches",
      "frischen",
      "frischem",
      "frischer"
     ],
     "answer": 1,
     "vi": "Đây là giá của bánh mì tươi.",
     "explain": "Gen. đực/trung không mạo từ là ngoại lệ: tính từ có -en vì danh từ đã có -es. 'frisches' là lỗi rất hay gặp."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich habe mit einem alten Freund gesprochen, der in einer große Stadt wohnt.",
      "Mit meinem neuem Kollegen gehe ich ins Kino.",
      "Wegen des schlechten Wetters bleibt mein kleiner Bruder zu Hause.",
      "Wir haben keine gute Ideen für das neues Projekt."
     ],
     "answer": 2,
     "vi": "Vì thời tiết xấu nên em trai tôi ở nhà.",
     "explain": "Câu 3 đúng: des schlechten (Gen.), mein kleiner (Nom. đực). Các câu khác sai: 'einer großen', 'meinem neuen', 'keine guten … das neue'."
    }
   ]
  },
  {
   "title": "Cách 2 – Genitiv & giới từ đi với Genitiv (Genitiv und Genitivpräpositionen)",
   "intro": "Genitiv diễn tả sự sở hữu (\"của\"): das Auto des Vaters.\nMạo từ: đực/trung des/eines/meines, cái và số nhiều der/einer/meiner.\nDanh từ đực/trung thêm -s (des Vaters, des Films) hoặc -es với từ một âm tiết hay tận cùng -s, -ß, -z (des Kindes, des Hauses). Danh từ giống cái và số nhiều không thêm đuôi (der Frau, der Ferien).\nGiới từ đi với Genitiv: wegen (vì), trotz (mặc dù), während (trong lúc), statt/anstatt (thay vì), innerhalb (trong vòng/bên trong), außerhalb (bên ngoài). Ví dụ: wegen des Regens, trotz der Verspätung, innerhalb einer Woche.\nLưu ý: wegen/trotz là giới từ, còn obwohl/weil là liên từ mở câu phụ.",
   "questions": [
    {
     "q": "Das ist das Auto ___ Vaters.",
     "options": [
      "des",
      "der",
      "dem",
      "den"
     ],
     "answer": 0,
     "vi": "Đây là ô tô của bố.",
     "explain": "Vater giống đực, Gen. → des Vaters. 'dem' là Dat., không diễn tả sở hữu."
    },
    {
     "q": "Die Tasche ___ Frau ist rot.",
     "options": [
      "des",
      "der",
      "die",
      "dem"
     ],
     "answer": 1,
     "vi": "Cái túi của người phụ nữ màu đỏ.",
     "explain": "Gen. giống cái → der. 'des' chỉ dùng cho đực/trung."
    },
    {
     "q": "Das Ende ___ war spannend.",
     "options": [
      "der Film",
      "dem Film",
      "des Films",
      "den Films"
     ],
     "answer": 2,
     "vi": "Đoạn kết của bộ phim rất hấp dẫn.",
     "explain": "Gen. đực: des + danh từ thêm -s. 'den Films' sai mạo từ."
    },
    {
     "q": "Der Name ___ Kindes ist Lina.",
     "options": [
      "der",
      "dem",
      "das",
      "des"
     ],
     "answer": 3,
     "vi": "Tên của đứa trẻ là Lina.",
     "explain": "Kind giống trung, Gen. → des Kindes. 'das' là Nom./Akk."
    },
    {
     "q": "___ des Regens fahren wir heute nicht mit dem Fahrrad.",
     "options": [
      "Wegen",
      "Obwohl",
      "Weil",
      "Trotzdem"
     ],
     "answer": 0,
     "vi": "Vì trời mưa nên hôm nay chúng tôi không đi xe đạp.",
     "explain": "Trước cụm danh từ Gen. cần giới từ wegen. 'Weil' là liên từ, phải đi với một mệnh đề có động từ."
    },
    {
     "q": "___ des Regens sind wir ohne Schirm spazieren gegangen.",
     "options": [
      "Wegen",
      "Trotz",
      "Statt",
      "Innerhalb"
     ],
     "answer": 1,
     "vi": "Mặc dù trời mưa, chúng tôi vẫn đi dạo không mang ô.",
     "explain": "Trotz = mặc dù, hợp nghĩa 'đi dạo dù mưa'. 'Wegen' (vì) không hợp lý về nghĩa."
    },
    {
     "q": "Während ___ Sommerferien arbeitet sie in einem Café.",
     "options": [
      "die",
      "das",
      "der",
      "des"
     ],
     "answer": 2,
     "vi": "Trong kỳ nghỉ hè cô ấy làm việc ở một quán cà phê.",
     "explain": "während + Gen.; Ferien là số nhiều → der. 'des' chỉ dùng cho số ít đực/trung."
    },
    {
     "q": "Sie trinkt Tee statt ___ Kaffees.",
     "options": [
      "der",
      "dem",
      "den",
      "des"
     ],
     "answer": 3,
     "vi": "Cô ấy uống trà thay vì cà phê.",
     "explain": "statt + Gen., Kaffee giống đực → des Kaffees. 'dem' là Dat., sai trong văn chuẩn."
    },
    {
     "q": "Bitte bezahlen Sie die Rechnung innerhalb ___ Woche.",
     "options": [
      "einer",
      "einem",
      "eine",
      "eines"
     ],
     "answer": 0,
     "vi": "Vui lòng thanh toán hóa đơn trong vòng một tuần.",
     "explain": "innerhalb + Gen., Woche giống cái → einer. 'eines' dành cho đực/trung."
    },
    {
     "q": "Das Haus liegt außerhalb ___ Stadt.",
     "options": [
      "des",
      "der",
      "dem",
      "die"
     ],
     "answer": 1,
     "vi": "Ngôi nhà nằm bên ngoài thành phố.",
     "explain": "außerhalb + Gen., Stadt giống cái → der. 'die' là Nom./Akk."
    },
    {
     "q": "Die Farbe ___ gefällt mir.",
     "options": [
      "der Hauses",
      "des Haus",
      "des Hauses",
      "dem Haus"
     ],
     "answer": 2,
     "vi": "Tôi thích màu của ngôi nhà.",
     "explain": "Haus tận cùng bằng -s → des Hauses. 'des Haus' thiếu đuôi -es."
    },
    {
     "q": "Wegen ___ Krankheit konnte er nicht kommen.",
     "options": [
      "seinen",
      "seinem",
      "seine",
      "seiner"
     ],
     "answer": 3,
     "vi": "Vì bệnh nên anh ấy không thể đến.",
     "explain": "wegen + Gen., Krankheit giống cái → seiner. 'seinem' là Dat."
    },
    {
     "q": "Das Büro ___ ist im dritten Stock.",
     "options": [
      "meines Chefs",
      "meinem Chef",
      "meinen Chef",
      "meiner Chefs"
     ],
     "answer": 0,
     "vi": "Văn phòng của sếp tôi ở tầng ba.",
     "explain": "Gen. đực: meines + Chef-s. 'meinem Chef' là Dat., không diễn tả sở hữu trong văn chuẩn."
    },
    {
     "q": "Trotz ___ Verspätung erreichten wir den Anschlusszug.",
     "options": [
      "die lange",
      "der langen",
      "dem langen",
      "der lange"
     ],
     "answer": 1,
     "vi": "Mặc dù bị trễ lâu, chúng tôi vẫn kịp chuyến tàu nối.",
     "explain": "trotz + Gen., giống cái → der, tính từ sau der ở Gen. → -en. 'der lange' sai đuôi tính từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Trotz des Regen bleiben wir draußen.",
      "Das ist das Fahrrad der Bruder.",
      "Während des Unterrichts darf man nicht telefonieren.",
      "Statt einen Brief schreibt er eine E-Mail."
     ],
     "answer": 2,
     "vi": "Trong giờ học không được gọi điện thoại.",
     "explain": "Câu 3 đúng: während + des Unterrichts. Các câu khác sai: 'des Regens', 'des Bruders', 'statt eines Briefes'."
    }
   ]
  },
  {
   "title": "Liên từ hai vế (zweiteilige Konnektoren)",
   "intro": "Liên từ hai vế nối hai từ, cụm từ hoặc câu:\n- entweder … oder: hoặc … hoặc (chọn một)\n- sowohl … als auch: cả … lẫn (cả hai)\n- weder … noch: không … cũng không (phủ định cả hai, không thêm nicht/kein)\n- nicht nur … sondern auch: không chỉ … mà còn\n- zwar … aber: tuy … nhưng\nTrật tự từ: zwar đứng ở vị trí 1 thì động từ theo sau ngay: Zwar ist das Hotel teuer, aber … ; oder/aber không làm thay đổi trật tự câu sau. Chủ ngữ nối bằng sowohl … als auch đi với động từ số nhiều; với weder … noch động từ thường chia theo chủ ngữ gần nhất.",
   "questions": [
    {
     "q": "Wir fahren ___ mit dem Zug oder mit dem Bus.",
     "options": [
      "weder",
      "entweder",
      "sowohl",
      "nicht nur"
     ],
     "answer": 1,
     "vi": "Chúng tôi đi bằng tàu hỏa hoặc bằng xe buýt.",
     "explain": "Cặp 'entweder … oder' = hoặc … hoặc. 'weder' phải đi với 'noch'."
    },
    {
     "q": "Sie spricht sowohl Deutsch ___ Englisch.",
     "options": [
      "oder",
      "noch",
      "als auch",
      "sondern"
     ],
     "answer": 2,
     "vi": "Cô ấy nói cả tiếng Đức lẫn tiếng Anh.",
     "explain": "sowohl đi với als auch. 'noch' thuộc cặp weder … noch."
    },
    {
     "q": "Ich habe weder Zeit ___ Geld.",
     "options": [
      "oder",
      "aber",
      "als auch",
      "noch"
     ],
     "answer": 3,
     "vi": "Tôi không có thời gian cũng không có tiền.",
     "explain": "weder đi với noch. 'oder' thuộc cặp entweder … oder."
    },
    {
     "q": "Er ist nicht nur intelligent, ___ auch sehr fleißig.",
     "options": [
      "sondern",
      "aber",
      "oder",
      "noch"
     ],
     "answer": 0,
     "vi": "Anh ấy không chỉ thông minh mà còn rất chăm chỉ.",
     "explain": "Cặp cố định: nicht nur … sondern auch. 'aber auch' không dùng trong cặp này ở văn chuẩn."
    },
    {
     "q": "Die Wohnung ist ___ klein, aber sehr gemütlich.",
     "options": [
      "entweder",
      "zwar",
      "weder",
      "sowohl"
     ],
     "answer": 1,
     "vi": "Căn hộ tuy nhỏ nhưng rất ấm cúng.",
     "explain": "zwar … aber = tuy … nhưng. 'sowohl' cần als auch, không đi với aber."
    },
    {
     "q": "___ kommst du heute, oder wir treffen uns morgen.",
     "options": [
      "Weder",
      "Sowohl",
      "Entweder",
      "Zwar"
     ],
     "answer": 2,
     "vi": "Hoặc bạn đến hôm nay, hoặc chúng ta gặp nhau ngày mai.",
     "explain": "Có 'oder' ở vế sau → Entweder. 'Zwar' cần 'aber'."
    },
    {
     "q": "Weder mein Bruder ___ meine Schwester kann schwimmen.",
     "options": [
      "oder",
      "als auch",
      "sondern",
      "noch"
     ],
     "answer": 3,
     "vi": "Cả anh trai lẫn chị gái tôi đều không biết bơi.",
     "explain": "weder … noch phủ định cả hai. 'als auch' thuộc cặp sowohl … als auch."
    },
    {
     "q": "Zwar ___, aber der Service ist ausgezeichnet.",
     "options": [
      "ist das Hotel teuer",
      "das Hotel ist teuer",
      "das Hotel teuer ist",
      "teuer das Hotel ist"
     ],
     "answer": 0,
     "vi": "Khách sạn tuy đắt nhưng dịch vụ tuyệt vời.",
     "explain": "Zwar chiếm vị trí 1 nên động từ đứng ngay sau: Zwar ist … 'Zwar das Hotel ist' sai vì động từ ở vị trí 3."
    },
    {
     "q": "Sowohl Anna als auch Paul ___ zur Party.",
     "options": [
      "kommt",
      "kommen",
      "kommst",
      "komme"
     ],
     "answer": 1,
     "vi": "Cả Anna lẫn Paul đều đến bữa tiệc.",
     "explain": "sowohl … als auch nối hai chủ ngữ → động từ số nhiều. 'kommt' là số ít."
    },
    {
     "q": "Er hat ___ angerufen noch eine E-Mail geschrieben.",
     "options": [
      "entweder",
      "nicht nur",
      "weder",
      "zwar"
     ],
     "answer": 2,
     "vi": "Anh ấy không gọi điện cũng không viết email.",
     "explain": "Có 'noch' ở vế sau → weder. 'entweder' cần 'oder'."
    },
    {
     "q": "Ich möchte nicht nur Deutsch lernen, sondern ___ in Deutschland studieren.",
     "options": [
      "noch",
      "aber",
      "oder",
      "auch"
     ],
     "answer": 3,
     "vi": "Tôi không chỉ muốn học tiếng Đức mà còn muốn học đại học ở Đức.",
     "explain": "Cặp đầy đủ là 'sondern auch'. 'sondern noch' không đúng với nicht nur."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Entweder rufst du ihn an, oder du schreibst ihm.",
      "Ich trinke weder Kaffee noch keinen Tee.",
      "Sie ist sowohl müde oder hungrig.",
      "Er arbeitet zwar viel, sondern verdient wenig."
     ],
     "answer": 0,
     "vi": "Hoặc bạn gọi điện cho anh ấy, hoặc bạn viết thư cho anh ấy.",
     "explain": "Câu 1 đúng. Câu 2 sai vì weder … noch đã phủ định, không thêm 'keinen'; câu 3 cần 'als auch', câu 4 cần 'aber'."
    },
    {
     "q": "Du kannst entweder heute kommen ___ morgen.",
     "options": [
      "noch",
      "oder",
      "als auch",
      "sondern"
     ],
     "answer": 1,
     "vi": "Bạn có thể đến hôm nay hoặc ngày mai.",
     "explain": "entweder đi với oder. 'noch' chỉ đi với weder."
    },
    {
     "q": "Der Film war zwar lang, ___ er war nie langweilig.",
     "options": [
      "sondern",
      "noch",
      "aber",
      "oder"
     ],
     "answer": 2,
     "vi": "Bộ phim tuy dài nhưng không bao giờ nhàm chán.",
     "explain": "zwar … aber. 'sondern' chỉ dùng sau một phủ định (nicht nur … sondern auch)."
    },
    {
     "q": "Weder der Vermieter noch die Mieter ___ mit dem Vertrag zufrieden.",
     "options": [
      "ist",
      "bin",
      "seid",
      "sind"
     ],
     "answer": 3,
     "vi": "Cả chủ nhà lẫn những người thuê đều không hài lòng với hợp đồng.",
     "explain": "Với weder … noch, động từ chia theo chủ ngữ gần nhất 'die Mieter' (số nhiều) → sind. 'ist' chỉ hợp với chủ ngữ số ít."
    }
   ]
  },
  {
   "title": "Động từ đi với giới từ & đại từ trạng từ (Verben mit Präpositionen, Pronominaladverbien)",
   "intro": "Nhiều động từ đi với giới từ cố định, cần học thuộc cùng cách: warten auf + Akk., sich freuen auf + Akk. (điều sắp tới), sich interessieren für + Akk., denken an + Akk., sich erinnern an + Akk., sich beschweren über + Akk., sich ärgern über + Akk., teilnehmen an + Dat., träumen von + Dat., Angst haben vor + Dat., bitten um + Akk., sich kümmern um + Akk., sich bedanken bei jdm. für etw.\nVới sự vật: hỏi bằng wo(r) + giới từ (Worauf wartest du?), trả lời bằng da(r) + giới từ (Ich warte darauf.). Thêm -r- khi giới từ bắt đầu bằng nguyên âm: worüber, daran.\nVới người: hỏi giới từ + wen/wem (An wen denkst du?), trả lời giới từ + đại từ (an ihn, mit ihm).\nDa(r)- còn báo trước một câu phụ: Ich ärgere mich darüber, dass …",
   "questions": [
    {
     "q": "Ich warte ___ den Bus.",
     "options": [
      "für",
      "an",
      "auf",
      "mit"
     ],
     "answer": 2,
     "vi": "Tôi đợi xe buýt.",
     "explain": "warten auf + Akk. 'für' là lỗi dịch từ tiếng Anh 'wait for'."
    },
    {
     "q": "Sie interessiert sich ___ Musik.",
     "options": [
      "an",
      "über",
      "auf",
      "für"
     ],
     "answer": 3,
     "vi": "Cô ấy quan tâm đến âm nhạc.",
     "explain": "sich interessieren für + Akk. 'an' chỉ dùng với danh từ Interesse (Interesse an)."
    },
    {
     "q": "Die Kinder freuen sich schon jetzt ___ die Sommerferien.",
     "options": [
      "auf",
      "an",
      "von",
      "mit"
     ],
     "answer": 0,
     "vi": "Bọn trẻ đã mong chờ kỳ nghỉ hè ngay từ bây giờ.",
     "explain": "sich freuen auf = mong chờ điều sắp đến. 'an' không đi với freuen."
    },
    {
     "q": "Er denkt oft ___ seine Familie.",
     "options": [
      "für",
      "an",
      "mit",
      "auf"
     ],
     "answer": 1,
     "vi": "Anh ấy thường nghĩ đến gia đình mình.",
     "explain": "denken an + Akk. = nghĩ đến. 'für' là lỗi dịch từ 'think for'."
    },
    {
     "q": "Ich habe mich beim Hausmeister ___ die laute Musik beschwert.",
     "options": [
      "auf",
      "an",
      "über",
      "für"
     ],
     "answer": 2,
     "vi": "Tôi đã phàn nàn với người quản lý tòa nhà về tiếng nhạc ồn ào.",
     "explain": "sich beschweren bei jdm. über etw. 'für' sai giới từ."
    },
    {
     "q": "Er nimmt ___ einem Deutschkurs teil.",
     "options": [
      "in",
      "bei",
      "auf",
      "an"
     ],
     "answer": 3,
     "vi": "Anh ấy tham gia một khóa học tiếng Đức.",
     "explain": "teilnehmen an + Dat. 'in' là lỗi do dịch 'tham gia vào'."
    },
    {
     "q": "___ wartest du? – Auf den Bus.",
     "options": [
      "Worauf",
      "Wofür",
      "Woran",
      "Wovon"
     ],
     "answer": 0,
     "vi": "Bạn đang đợi gì? – Đợi xe buýt.",
     "explain": "warten auf, hỏi về sự vật → wo(r) + auf = Worauf. 'Woran' ứng với giới từ an."
    },
    {
     "q": "Interessierst du dich für Politik? – Ja, ich interessiere mich sehr ___.",
     "options": [
      "für es",
      "dafür",
      "für sie",
      "wofür"
     ],
     "answer": 1,
     "vi": "Bạn có quan tâm đến chính trị không? – Có, tôi rất quan tâm đến nó.",
     "explain": "Thay sự vật bằng da + für = dafür. 'für sie' chỉ dùng cho người."
    },
    {
     "q": "___ denkst du? – An meine Mutter.",
     "options": [
      "Woran",
      "An was",
      "An wen",
      "An wem"
     ],
     "answer": 2,
     "vi": "Bạn đang nghĩ đến ai? – Đến mẹ tôi.",
     "explain": "Hỏi về người: giới từ + wen (an + Akk.). 'Woran' chỉ dùng cho sự vật."
    },
    {
     "q": "Hast du mit Herrn Weber gesprochen? – Ja, ich habe gestern ___ gesprochen.",
     "options": [
      "damit",
      "mit ihn",
      "mit sich",
      "mit ihm"
     ],
     "answer": 3,
     "vi": "Bạn đã nói chuyện với ông Weber chưa? – Rồi, hôm qua tôi đã nói chuyện với ông ấy.",
     "explain": "Với người: mit + Dat. → mit ihm. 'damit' chỉ thay cho sự vật."
    },
    {
     "q": "Ich ärgere mich ___, dass der Zug schon wieder Verspätung hat.",
     "options": [
      "darüber",
      "worüber",
      "über es",
      "davon"
     ],
     "answer": 0,
     "vi": "Tôi bực mình vì tàu lại bị trễ.",
     "explain": "sich ärgern über; 'darüber' báo trước câu phụ dass. 'über es' không dùng cho sự vật/sự việc."
    },
    {
     "q": "___ hast du Angst? – Vor der Prüfung.",
     "options": [
      "Worauf",
      "Wovor",
      "Wofür",
      "Wovon"
     ],
     "answer": 1,
     "vi": "Bạn sợ điều gì? – Sợ kỳ thi.",
     "explain": "Angst haben vor → Wovor. 'Wovon' ứng với giới từ von."
    },
    {
     "q": "Ich kann mich nicht ___ seinen Namen erinnern.",
     "options": [
      "über",
      "auf",
      "an",
      "von"
     ],
     "answer": 2,
     "vi": "Tôi không thể nhớ ra tên anh ấy.",
     "explain": "sich erinnern an + Akk. 'von' là lỗi thường gặp do dịch 'nhớ về'."
    },
    {
     "q": "Die Firma bittet die Kunden ___ Geduld.",
     "options": [
      "für",
      "nach",
      "auf",
      "um"
     ],
     "answer": 3,
     "vi": "Công ty xin khách hàng kiên nhẫn.",
     "explain": "bitten um + Akk. = xin, đề nghị. 'für' sai; 'fragen nach' mới đi với nach."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich kümmere mich um meine Großmutter und sorge dafür, dass sie alles hat.",
      "Wir haben lange über das Problem diskutiert und sprechen morgen wieder über es.",
      "Sie hat sich an ihren Lehrer bedankt.",
      "Er träumt über eine Reise nach Japan."
     ],
     "answer": 0,
     "vi": "Tôi chăm sóc bà tôi và lo sao cho bà có đủ mọi thứ.",
     "explain": "Câu 1 đúng (sich kümmern um, sorgen dafür). Sai: 'darüber' thay 'über es', 'bei ihrem Lehrer bedankt', 'träumt von'."
    }
   ]
  },
  {
   "title": "Danh từ biến cách yếu (n-Deklination)",
   "intro": "Một nhóm danh từ giống đực thêm -(e)n ở mọi cách trừ Nom. số ít: der Kunde – den/dem/des Kunden.\nThuộc nhóm này: danh từ đực tận cùng -e chỉ người/động vật (der Junge, Kollege, Kunde, Zeuge, Löwe); danh từ đực gốc ngoại tận cùng -ent, -ant, -ist, -at, -oge, -ad (der Student, Präsident, Patient, Polizist, Kandidat, Jurist); một số từ khác: der Mensch, Herr (den/dem/des Herrn, số nhiều die Herren), Nachbar, Bauer.\nĐặc biệt: der Name – den/dem Namen – des Namens (tương tự Gedanke, Glaube).\nTrong lời chào thư, Herr ở Nom.: Sehr geehrter Herr Müller; nhưng: Ich treffe Herrn Müller.",
   "questions": [
    {
     "q": "Ich sehe den ___.",
     "options": [
      "Junge",
      "Jungem",
      "Junges",
      "Jungen"
     ],
     "answer": 3,
     "vi": "Tôi nhìn thấy cậu bé.",
     "explain": "Junge thuộc n-Deklination → Akk. den Jungen. 'Junge' chỉ đúng ở Nom."
    },
    {
     "q": "Der Arzt spricht mit dem ___.",
     "options": [
      "Patienten",
      "Patient",
      "Patients",
      "Patiente"
     ],
     "answer": 0,
     "vi": "Bác sĩ nói chuyện với bệnh nhân.",
     "explain": "Patient (đuôi -ent) → Dat. dem Patienten. 'Patient' thiếu đuôi -en."
    },
    {
     "q": "Kennst du den neuen ___?",
     "options": [
      "Kollege",
      "Kollegen",
      "Kolleges",
      "Kollegem"
     ],
     "answer": 1,
     "vi": "Bạn có biết người đồng nghiệp mới không?",
     "explain": "Akk. của Kollege → den Kollegen. 'Kollege' là Nom."
    },
    {
     "q": "Ich gebe dem ___ meinen Pass.",
     "options": [
      "Polizist",
      "Polizists",
      "Polizisten",
      "Polizistes"
     ],
     "answer": 2,
     "vi": "Tôi đưa hộ chiếu của tôi cho viên cảnh sát.",
     "explain": "Danh từ đuôi -ist theo n-Deklination → dem Polizisten. 'Polizist' thiếu -en."
    },
    {
     "q": "Das ist das Büro des ___.",
     "options": [
      "Präsidents",
      "Präsident",
      "Präsidentes",
      "Präsidenten"
     ],
     "answer": 3,
     "vi": "Đây là văn phòng của tổng thống.",
     "explain": "n-Deklination: Gen. chỉ thêm -en, không thêm -s → des Präsidenten. 'Präsidents' là lỗi do áp dụng quy tắc Gen. thông thường."
    },
    {
     "q": "Sehr geehrter ___ Müller, vielen Dank für Ihre E-Mail.",
     "options": [
      "Herr",
      "Herrn",
      "Herren",
      "Herrns"
     ],
     "answer": 0,
     "vi": "Kính gửi ông Müller, cảm ơn email của ông.",
     "explain": "Lời chào trong thư ở Nom. → Herr. 'Herrn' là Akk./Dat./Gen."
    },
    {
     "q": "Ich habe gestern ___ Müller getroffen.",
     "options": [
      "Herr",
      "Herrn",
      "Herren",
      "Herrens"
     ],
     "answer": 1,
     "vi": "Hôm qua tôi đã gặp ông Müller.",
     "explain": "treffen + Akk. → Herrn. 'Herren' là số nhiều."
    },
    {
     "q": "Wir haben einen ___ aus Frankreich zu Gast.",
     "options": [
      "Student",
      "Students",
      "Studenten",
      "Studente"
     ],
     "answer": 2,
     "vi": "Chúng tôi có một sinh viên đến từ Pháp làm khách.",
     "explain": "Akk. → einen Studenten. 'Student' chỉ đúng ở Nom. số ít."
    },
    {
     "q": "Die Verkäuferin hilft dem ___.",
     "options": [
      "Kunde",
      "Kundem",
      "Kundes",
      "Kunden"
     ],
     "answer": 3,
     "vi": "Cô bán hàng giúp khách hàng.",
     "explain": "helfen + Dat., Kunde thuộc n-Deklination → dem Kunden. 'Kunde' chỉ đúng ở Nom."
    },
    {
     "q": "Wir brauchen einen ___ für das neue Haus.",
     "options": [
      "Architekten",
      "Architekt",
      "Architekts",
      "Architekte"
     ],
     "answer": 0,
     "vi": "Chúng tôi cần một kiến trúc sư cho ngôi nhà mới.",
     "explain": "Architekt thuộc n-Deklination → Akk. einen Architekten. 'Architekt' thiếu -en."
    },
    {
     "q": "Die Würde des ___ ist unantastbar.",
     "options": [
      "Mensch",
      "Menschen",
      "Menschs",
      "Menschens"
     ],
     "answer": 1,
     "vi": "Nhân phẩm của con người là bất khả xâm phạm.",
     "explain": "Câu đầu tiên của Hiến pháp Đức: Mensch → des Menschen. 'Menschs' là lỗi thêm -s như danh từ thường."
    },
    {
     "q": "Die Bedeutung des ___ ist unklar.",
     "options": [
      "Name",
      "Namen",
      "Namens",
      "Names"
     ],
     "answer": 2,
     "vi": "Ý nghĩa của cái tên không rõ ràng.",
     "explain": "Name là trường hợp đặc biệt: Gen. des Namens (-n + -s). 'Namen' chỉ đúng ở Akk./Dat."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Ich habe den Kunde angerufen.",
      "Der Polizist hat dem Junge geholfen.",
      "Wir fragen den Herr nach dem Weg.",
      "Die Firma sucht einen erfahrenen Juristen."
     ],
     "answer": 3,
     "vi": "Công ty tìm một luật gia giàu kinh nghiệm.",
     "explain": "Câu 4 đúng: einen Juristen (-ist → -en). Các câu khác cần 'den Kunden', 'dem Jungen', 'den Herrn'."
    },
    {
     "q": "Der Richter hört den ___ an.",
     "options": [
      "Zeugen",
      "Zeuge",
      "Zeuges",
      "Zeugem"
     ],
     "answer": 0,
     "vi": "Thẩm phán nghe lời khai của nhân chứng.",
     "explain": "Zeuge (đực, -e) → Akk. den Zeugen. 'Zeuge' chỉ đúng ở Nom."
    },
    {
     "q": "Die Partei unterstützt den ___ bei der Wahl.",
     "options": [
      "Kandidat",
      "Kandidaten",
      "Kandidats",
      "Kandidate"
     ],
     "answer": 1,
     "vi": "Đảng ủng hộ ứng cử viên trong cuộc bầu cử.",
     "explain": "Danh từ đuôi -at theo n-Deklination → den Kandidaten. 'Kandidat' thiếu đuôi -en."
    }
   ]
  },
  {
   "title": "Thì tương lai Futur I & liên từ nối câu (Futur I und Konnektoren)",
   "intro": "Futur I = werden (chia) + động từ nguyên mẫu ở cuối câu: Ich werde nächstes Jahr in Deutschland studieren. Dùng để nói dự định, dự đoán (Morgen wird es regnen) và phỏng đoán ở hiện tại, thường với wohl/bestimmt (Er wird wohl krank sein). Chia: ich werde, du wirst, er wird, wir/sie werden, ihr werdet. Trong câu phụ, werden đứng cuối: …, dass die Preise steigen werden.\nLiên từ nối câu:\n- deshalb (vì vậy), trotzdem (tuy vậy): trạng từ, đứng ở vị trí 1 → động từ theo ngay sau: Deshalb bleibe ich zu Hause.\n- obwohl (mặc dù), falls (nếu, trong trường hợp), sodass (đến nỗi/cho nên): mở câu phụ → động từ đứng cuối: Obwohl es regnet, …\n- Sau câu phụ đứng đầu, câu chính bắt đầu bằng động từ: Falls es regnet, bleiben wir zu Hause.",
   "questions": [
    {
     "q": "Morgen ___ es regnen.",
     "options": [
      "werden",
      "wird",
      "wirst",
      "ist"
     ],
     "answer": 1,
     "vi": "Ngày mai trời sẽ mưa.",
     "explain": "Chủ ngữ es → wird. 'wirst' chỉ dùng với du."
    },
    {
     "q": "Ich ___ nächstes Jahr in Deutschland studieren.",
     "options": [
      "werde",
      "wird",
      "werden",
      "wurde"
     ],
     "answer": 0,
     "vi": "Năm sau tôi sẽ học đại học ở Đức.",
     "explain": "ich → werde. 'wurde' là quá khứ, không hợp với 'nächstes Jahr'."
    },
    {
     "q": "Wir werden euch am Wochenende ___.",
     "options": [
      "besucht",
      "besuchen werden",
      "besuchten",
      "besuchen"
     ],
     "answer": 3,
     "vi": "Chúng tôi sẽ đến thăm các bạn vào cuối tuần.",
     "explain": "Futur I: werden + nguyên mẫu ở cuối câu → besuchen. 'besucht' là phân từ II, dùng cho Perfekt/bị động."
    },
    {
     "q": "Er ist heute nicht im Büro. Er ___ wohl krank sein.",
     "options": [
      "werdet",
      "wirst",
      "wird",
      "werden"
     ],
     "answer": 2,
     "vi": "Hôm nay anh ấy không có ở văn phòng. Chắc là anh ấy bị ốm.",
     "explain": "Futur I + wohl diễn tả phỏng đoán; er → wird. 'werden' là số nhiều."
    },
    {
     "q": "Ich bin krank, ___ bleibe ich heute zu Hause.",
     "options": [
      "obwohl",
      "deshalb",
      "weil",
      "falls"
     ],
     "answer": 1,
     "vi": "Tôi bị ốm, vì vậy hôm nay tôi ở nhà.",
     "explain": "Sau chỗ trống động từ đứng ngay (bleibe ich) → trạng từ deshalb. 'weil' sẽ đẩy động từ xuống cuối câu."
    },
    {
     "q": "Es regnet stark. ___ gehen wir spazieren.",
     "options": [
      "Trotzdem",
      "Obwohl",
      "Deshalb",
      "Sodass"
     ],
     "answer": 0,
     "vi": "Trời mưa to. Tuy vậy chúng tôi vẫn đi dạo.",
     "explain": "Ý tương phản và động từ đứng ngay sau → Trotzdem. 'Obwohl' là liên từ phụ, cần động từ ở cuối."
    },
    {
     "q": "___ es stark regnet, gehen wir spazieren.",
     "options": [
      "Trotzdem",
      "Deshalb",
      "Sodass",
      "Obwohl"
     ],
     "answer": 3,
     "vi": "Mặc dù trời mưa to, chúng tôi vẫn đi dạo.",
     "explain": "Động từ 'regnet' ở cuối mệnh đề → cần liên từ phụ obwohl. 'Trotzdem' sẽ đòi động từ ở vị trí 2 (Trotzdem regnet es)."
    },
    {
     "q": "Er hat laut gesprochen, ___ alle ihn verstehen konnten.",
     "options": [
      "obwohl",
      "trotzdem",
      "sodass",
      "deshalb"
     ],
     "answer": 2,
     "vi": "Anh ấy nói to, nhờ vậy mọi người đều hiểu được anh ấy.",
     "explain": "Hệ quả + động từ ở cuối → sodass. 'deshalb' cần động từ ngay sau (deshalb konnten alle …)."
    },
    {
     "q": "___ du Fragen hast, ruf mich bitte an.",
     "options": [
      "Sodass",
      "Falls",
      "Trotzdem",
      "Deshalb"
     ],
     "answer": 1,
     "vi": "Nếu bạn có câu hỏi, hãy gọi cho tôi.",
     "explain": "Falls = nếu (điều kiện), mở câu phụ có 'hast' ở cuối. 'Sodass' diễn tả hệ quả, không đứng đầu câu như vậy."
    },
    {
     "q": "Ich habe wenig Zeit, deshalb ___.",
     "options": [
      "kann ich nicht kommen",
      "ich kann nicht kommen",
      "ich nicht kommen kann",
      "kommen ich nicht kann"
     ],
     "answer": 0,
     "vi": "Tôi có ít thời gian, vì vậy tôi không thể đến.",
     "explain": "deshalb chiếm vị trí 1 → động từ chia (kann) ở vị trí 2. 'ich kann' sai vì động từ ở vị trí 3."
    },
    {
     "q": "Obwohl er viel gelernt ___, hat er die Prüfung nicht bestanden.",
     "options": [
      "haben",
      "hat er",
      "ist",
      "hat"
     ],
     "answer": 3,
     "vi": "Mặc dù anh ấy đã học nhiều, anh ấy vẫn không đỗ kỳ thi.",
     "explain": "Câu phụ với obwohl: trợ động từ 'hat' đứng cuối; lernen dùng haben. 'ist' sai trợ động từ."
    },
    {
     "q": "Du wirst die Prüfung bestimmt ___.",
     "options": [
      "bestanden",
      "bestehst",
      "bestehen",
      "bestehen werden"
     ],
     "answer": 2,
     "vi": "Chắc chắn bạn sẽ đỗ kỳ thi.",
     "explain": "wirst + nguyên mẫu → bestehen. 'bestanden' là phân từ II, dùng cho Perfekt."
    },
    {
     "q": "Sie hat keinen Hunger. ___ isst sie ein Stück Kuchen.",
     "options": [
      "Obwohl",
      "Trotzdem",
      "Deshalb",
      "Falls"
     ],
     "answer": 1,
     "vi": "Cô ấy không đói. Tuy vậy cô ấy vẫn ăn một miếng bánh.",
     "explain": "Tương phản + động từ ngay sau → Trotzdem. 'Deshalb' (vì vậy) không hợp nghĩa."
    },
    {
     "q": "Ich glaube, dass die Steuern im nächsten Jahr steigen ___.",
     "options": [
      "werden",
      "wird",
      "werdet",
      "worden"
     ],
     "answer": 0,
     "vi": "Tôi tin rằng năm sau thuế sẽ tăng.",
     "explain": "Chủ ngữ 'die Steuern' số nhiều → werden, đứng cuối câu phụ dass. 'wird' là số ít."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Falls es morgen regnet, wir werden zu Hause bleiben.",
      "Er hat verschlafen, trotzdem er ist pünktlich gekommen.",
      "Ich werde morgen das Finanzamt anrufen werden.",
      "Obwohl die Miete hoch ist, wird sie die Wohnung nehmen."
     ],
     "answer": 3,
     "vi": "Mặc dù tiền thuê nhà cao, cô ấy sẽ thuê căn hộ đó.",
     "explain": "Câu 4 đúng: sau câu phụ, câu chính bắt đầu bằng động từ 'wird'. Sai: 'werden wir', 'trotzdem ist er', bỏ 'werden' thừa ở cuối."
    }
   ]
  }
 ],
 "B2": [
  {
   "title": "Bị động với động từ khuyết thiếu & các thì (Passiv mit Modalverben, Passiv Perfekt/Plusquamperfekt/Futur)",
   "intro": "Bị động với động từ khuyết thiếu: Modalverb (chia) + Partizip II + werden (nguyên thể, cuối câu): Der Antrag muss eingereicht werden.\nPerfekt: sein + PII + worden: Das Gesetz ist geändert worden.\nPlusquamperfekt: war + PII + worden: Der Vertrag war unterschrieben worden.\nFutur I: wird + PII + werden: Der Bescheid wird verschickt werden.\nPerfekt với Modalverb: hat + PII + werden + Modalverb (nguyên thể): Der Vertrag hat geprüft werden müssen.\nTrong mệnh đề phụ, động từ chia đứng cuối: ..., dass das Formular unterschrieben werden muss. Ngoại lệ: khi có hai động từ nguyên thể (… werden müssen), „hat“ đứng TRƯỚC cả cụm: ..., dass die Akte hat geprüft werden müssen. Trong bị động luôn dùng „worden“, không dùng „geworden“.",
   "questions": [
    {
     "q": "Der Antrag muss bis Ende des Monats ___ werden.",
     "options": [
      "eingereicht",
      "einreichen",
      "eingereichen",
      "einzureichen"
     ],
     "answer": 0,
     "vi": "Đơn phải được nộp trước cuối tháng.",
     "explain": "Bị động với Modalverb: muss + Partizip II + werden, nên dùng „eingereicht“. „einreichen“ là nguyên thể, không tạo được nghĩa bị động."
    },
    {
     "q": "Die Steuererklärung ___ auch online abgegeben werden.",
     "options": [
      "hat",
      "können",
      "kann",
      "ist"
     ],
     "answer": 2,
     "vi": "Tờ khai thuế cũng có thể được nộp trực tuyến.",
     "explain": "Chủ ngữ số ít „die Steuererklärung“ nên Modalverb chia „kann“. „können“ là dạng số nhiều/nguyên thể, sai với chủ ngữ."
    },
    {
     "q": "Das Gesetz ist im letzten Jahr geändert ___.",
     "options": [
      "geworden",
      "werden",
      "wurde",
      "worden"
     ],
     "answer": 3,
     "vi": "Luật đã được sửa đổi vào năm ngoái.",
     "explain": "Perfekt bị động: ist + PII + worden. „geworden“ chỉ dùng khi werden là động từ chính (trở thành), không dùng trong bị động."
    },
    {
     "q": "Die Rechnung ___ schon gestern bezahlt worden.",
     "options": [
      "hat",
      "ist",
      "wird",
      "wurde"
     ],
     "answer": 1,
     "vi": "Hóa đơn đã được thanh toán từ hôm qua.",
     "explain": "Perfekt bị động luôn dùng trợ động từ „sein“: ist ... bezahlt worden. „hat“ sai vì werden đi với sein."
    },
    {
     "q": "Als der Anwalt ankam, war der Vertrag bereits ___.",
     "options": [
      "unterschrieben worden",
      "unterschreiben worden",
      "unterschrieben geworden",
      "unterschrieben werden"
     ],
     "answer": 0,
     "vi": "Khi luật sư đến, hợp đồng đã được ký rồi.",
     "explain": "Plusquamperfekt bị động: war + PII + worden. „unterschrieben geworden“ sai vì bị động dùng „worden“."
    },
    {
     "q": "Die neuen Regeln ___ ab Januar angewendet werden.",
     "options": [
      "wird",
      "sind",
      "werden",
      "worden"
     ],
     "answer": 2,
     "vi": "Các quy định mới sẽ được áp dụng từ tháng Một.",
     "explain": "Futur I bị động: werden (chia theo chủ ngữ số nhiều) + PII + werden. „wird“ sai vì chủ ngữ „die Regeln“ là số nhiều."
    },
    {
     "q": "Ich weiß, dass das Formular noch ___.",
     "options": [
      "muss unterschrieben werden",
      "unterschrieben muss werden",
      "werden muss unterschrieben",
      "unterschrieben werden muss"
     ],
     "answer": 3,
     "vi": "Tôi biết rằng tờ đơn vẫn còn phải được ký.",
     "explain": "Trong mệnh đề phụ với dass, động từ chia (muss) đứng cuối: unterschrieben werden muss. „muss unterschrieben werden“ là trật tự của mệnh đề chính."
    },
    {
     "q": "Die Unterlagen dürfen nicht an Dritte ___.",
     "options": [
      "weitergeben werden",
      "weitergegeben werden",
      "weitergegeben worden",
      "weitergegeben wird"
     ],
     "answer": 1,
     "vi": "Các tài liệu không được phép chuyển cho bên thứ ba.",
     "explain": "Modalverb + PII + werden (nguyên thể): weitergegeben werden. „weitergegeben worden“ sai vì sau Modalverb cần nguyên thể „werden“."
    },
    {
     "q": "Der Steuerbescheid wird nächste Woche ___.",
     "options": [
      "verschickt worden",
      "verschicken werden",
      "verschickt werden",
      "verschickt geworden"
     ],
     "answer": 2,
     "vi": "Quyết định thuế sẽ được gửi đi vào tuần sau.",
     "explain": "Futur I bị động: wird + PII + werden. „verschicken werden“ thiếu Partizip II nên không phải bị động."
    },
    {
     "q": "Die Firma wurde geschlossen, nachdem die Insolvenz ___ worden war.",
     "options": [
      "beantragen",
      "beantragte",
      "beantragend",
      "beantragt"
     ],
     "answer": 3,
     "vi": "Công ty bị đóng cửa sau khi đơn xin phá sản đã được nộp.",
     "explain": "Plusquamperfekt bị động cần Partizip II: beantragt worden war. „beantragte“ là Präteritum chủ động, không dùng được ở đây."
    },
    {
     "q": "Wir wussten nicht, ob die Frist schon verlängert ___.",
     "options": [
      "worden war",
      "war worden",
      "geworden war",
      "werden war"
     ],
     "answer": 0,
     "vi": "Chúng tôi không biết liệu thời hạn đã được gia hạn hay chưa.",
     "explain": "Trong mệnh đề phụ với ob, động từ chia „war“ đứng cuối: verlängert worden war. „war worden“ sai trật tự."
    },
    {
     "q": "Der Vertrag hat noch einmal geprüft ___.",
     "options": [
      "worden müssen",
      "werden müssen",
      "müssen werden",
      "werden gemusst"
     ],
     "answer": 1,
     "vi": "Hợp đồng đã phải được kiểm tra lại một lần nữa.",
     "explain": "Perfekt của bị động có Modalverb: hat + PII + werden + müssen (Ersatzinfinitiv). „werden gemusst“ sai vì Modalverb dùng dạng nguyên thể thay cho Partizip II."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Es ist bekannt, dass die Daten mussten gelöscht werden.",
      "Es ist bekannt, dass die Daten gelöscht mussten werden.",
      "Es ist bekannt, dass die Daten gelöscht werden mussten.",
      "Es ist bekannt, dass die Daten werden gelöscht mussten."
     ],
     "answer": 2,
     "vi": "Ai cũng biết rằng dữ liệu đã phải bị xóa.",
     "explain": "Ở Präteritum, mệnh đề phụ có trật tự PII + werden + Modalverb chia: gelöscht werden mussten. Đặt „mussten“ ở giữa câu là trật tự sai."
    },
    {
     "q": "Man hat mir gesagt, dass die Akte noch einmal ___.",
     "options": [
      "überprüft werden müssen hat",
      "hat überprüft worden müssen",
      "überprüft hat werden müssen",
      "hat überprüft werden müssen"
     ],
     "answer": 3,
     "vi": "Người ta nói với tôi rằng hồ sơ đã phải được kiểm tra lại một lần nữa.",
     "explain": "Khi có hai nguyên thể (werden müssen), trợ động từ „hat“ đứng trước cả cụm động từ trong mệnh đề phụ. „überprüft werden müssen hat“ là lỗi thường gặp do áp dụng máy móc quy tắc động từ cuối câu."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die Behörde teilt mit, dass der Antrag bald bearbeitet worden wird.",
      "Die Behörde teilt mit, dass der Antrag bald bearbeitet werden wird.",
      "Die Behörde teilt mit, dass der Antrag bald bearbeitet wird werden.",
      "Die Behörde teilt mit, dass der Antrag bald werden bearbeitet wird."
     ],
     "answer": 1,
     "vi": "Cơ quan thông báo rằng đơn sẽ sớm được xử lý.",
     "explain": "Futur I bị động trong mệnh đề phụ: PII + werden + wird (động từ chia ở cuối). „bearbeitet worden wird“ sai vì Futur I dùng nguyên thể „werden“."
    }
   ]
  },
  {
   "title": "Bị động trạng thái (Zustandspassiv: sein + Partizip II vs. Vorgangspassiv)",
   "intro": "Vorgangspassiv (werden + PII) mô tả quá trình/hành động đang được thực hiện: Das Büro wird um 18 Uhr geschlossen (văn phòng được đóng lúc 18 giờ).\nZustandspassiv (sein + PII) mô tả trạng thái là kết quả của hành động: Das Büro ist geschlossen (văn phòng đang đóng cửa).\nCác thì của Zustandspassiv: Präsens ist geöffnet – Präteritum war geöffnet – Perfekt ist geöffnet gewesen – Futur wird geöffnet sein – với Modalverb: muss bezahlt sein.\nPhân biệt: ist geöffnet (trạng thái) ≠ ist geöffnet worden (Perfekt của Vorgangspassiv: đã được mở). Khi có tác nhân (von + Dativ) hoặc thời điểm hành động cụ thể, thường dùng Vorgangspassiv.\nZustandspassiv chỉ dùng với động từ tạo ra kết quả lâu dài (schließen, unterschreiben, genehmigen…), không dùng với động từ như loben, fragen.",
   "questions": [
    {
     "q": "Sie müssen nichts mehr tun: Die Rechnung ___ seit gestern bezahlt.",
     "options": [
      "ist",
      "wird",
      "hat",
      "wurde"
     ],
     "answer": 0,
     "vi": "Anh/chị không cần làm gì nữa: hóa đơn đã được thanh toán từ hôm qua.",
     "explain": "„seit gestern“ chỉ một trạng thái kéo dài đến hiện tại nên dùng Zustandspassiv „ist bezahlt“. „wird“ diễn tả quá trình, không hợp với „seit“."
    },
    {
     "q": "Das Finanzamt ___ heute den ganzen Tag geschlossen.",
     "options": [
      "wird",
      "hat",
      "ist",
      "wurde"
     ],
     "answer": 2,
     "vi": "Hôm nay sở thuế đóng cửa cả ngày.",
     "explain": "„den ganzen Tag“ mô tả trạng thái kéo dài nên dùng sein + PII. „wird geschlossen“ là hành động đóng cửa, không kéo dài cả ngày."
    },
    {
     "q": "Die Türen ___ jeden Abend um 20 Uhr von einem Mitarbeiter abgeschlossen.",
     "options": [
      "sind",
      "werden",
      "haben",
      "sein"
     ],
     "answer": 1,
     "vi": "Các cửa được một nhân viên khóa lại vào 20 giờ mỗi tối.",
     "explain": "Có tác nhân „von einem Mitarbeiter“ và thời điểm hành động „um 20 Uhr“ nên đây là quá trình: Vorgangspassiv với werden. „sind“ chỉ trạng thái, không đi với tác nhân thực hiện hành động."
    },
    {
     "q": "Als ich gestern ins Büro kam, war das Fenster schon ___.",
     "options": [
      "öffnen",
      "geöffnet werden",
      "öffnend",
      "geöffnet"
     ],
     "answer": 3,
     "vi": "Khi tôi đến văn phòng hôm qua, cửa sổ đã mở sẵn rồi.",
     "explain": "Zustandspassiv ở Präteritum: war + PII → war geöffnet. „war ... geöffnet werden“ sai vì sau sein không thể có nguyên thể werden."
    },
    {
     "q": "Das Büro ist letzten Monat zwei Wochen lang geschlossen ___.",
     "options": [
      "worden",
      "geworden",
      "gewesen",
      "sein"
     ],
     "answer": 2,
     "vi": "Tháng trước văn phòng đã đóng cửa trong hai tuần.",
     "explain": "„zwei Wochen lang“ chỉ thời gian kéo dài của trạng thái nên dùng Perfekt của Zustandspassiv: ist geschlossen gewesen. „worden“ diễn tả hành động đóng cửa xảy ra một lần."
    },
    {
     "q": "Bis Freitag muss die Steuererklärung abgegeben ___.",
     "options": [
      "sein",
      "haben",
      "gewesen",
      "worden"
     ],
     "answer": 0,
     "vi": "Đến thứ Sáu tờ khai thuế phải được nộp xong.",
     "explain": "Zustandspassiv với Modalverb: muss + PII + sein (trạng thái đã hoàn tất trước hạn). „worden“ sai vì sau Modalverb phải là nguyên thể."
    },
    {
     "q": "Die Polizei ist vor Ort: Die Straße ___ in diesem Moment von Beamten gesperrt.",
     "options": [
      "ist",
      "wird",
      "hat",
      "war"
     ],
     "answer": 1,
     "vi": "Cảnh sát đang có mặt: con đường đang được các nhân viên chặn lại ngay lúc này.",
     "explain": "„in diesem Moment“ và tác nhân „von Beamten“ cho thấy hành động đang diễn ra nên dùng Vorgangspassiv „wird gesperrt“. „ist gesperrt“ chỉ trạng thái, không đi với tác nhân."
    },
    {
     "q": "Die Baugenehmigung ___ seit drei Wochen erteilt, aber der Bau hat noch nicht begonnen.",
     "options": [
      "wird",
      "wurde",
      "hat",
      "ist"
     ],
     "answer": 3,
     "vi": "Giấy phép xây dựng đã được cấp từ ba tuần nay nhưng việc xây dựng vẫn chưa bắt đầu.",
     "explain": "„seit drei Wochen“ mô tả trạng thái kéo dài đến hiện tại: ist erteilt. „wurde“ là hành động ở quá khứ, không đi với „seit“."
    },
    {
     "q": "Wann ___ die Filiale eröffnet? – Am 1. Mai 2020.",
     "options": [
      "wurde",
      "war",
      "ist",
      "hat"
     ],
     "answer": 0,
     "vi": "Chi nhánh được khai trương khi nào? – Vào ngày 1 tháng 5 năm 2020.",
     "explain": "Hỏi về thời điểm một hành động trong quá khứ nên dùng Vorgangspassiv Präteritum „wurde eröffnet“. „war eröffnet“ chỉ trạng thái, không trả lời được câu hỏi về thời điểm khai trương."
    },
    {
     "q": "Der Antrag ist bereits genehmigt ___, Sie müssen nichts mehr tun.",
     "options": [
      "geworden",
      "worden",
      "werden",
      "wird"
     ],
     "answer": 1,
     "vi": "Đơn đã được phê duyệt rồi, anh/chị không cần làm gì nữa.",
     "explain": "Perfekt của Vorgangspassiv: ist + PII + worden. „geworden“ sai vì trong bị động dùng „worden“."
    },
    {
     "q": "Câu nào diễn tả TRẠNG THÁI (kết quả), không phải quá trình?",
     "options": [
      "Die Akten werden archiviert.",
      "Die Akten wurden archiviert.",
      "Die Akten sind archiviert.",
      "Die Akten sind archiviert worden."
     ],
     "answer": 2,
     "vi": "Hồ sơ đã được lưu trữ (đang ở trạng thái lưu trữ).",
     "explain": "sein + PII (ohne worden) là Zustandspassiv, chỉ trạng thái. „sind archiviert worden“ là Perfekt của Vorgangspassiv, nhấn mạnh hành động đã xảy ra."
    },
    {
     "q": "Die Steuernummer ___ auf jeder Rechnung angegeben sein.",
     "options": [
      "hat",
      "musst",
      "muss",
      "ist"
     ],
     "answer": 2,
     "vi": "Mã số thuế phải được ghi trên mỗi hóa đơn.",
     "explain": "Zustandspassiv với Modalverb: muss + PII + sein; chủ ngữ ngôi thứ ba số ít nên là „muss“. „musst“ là dạng của ngôi du."
    },
    {
     "q": "Morgen um diese Zeit ___ der Kauf schon abgeschlossen sein.",
     "options": [
      "wird",
      "ist",
      "hat",
      "wurde"
     ],
     "answer": 0,
     "vi": "Giờ này ngày mai giao dịch mua bán sẽ hoàn tất rồi.",
     "explain": "Futur I của Zustandspassiv: wird + PII + sein. „ist ... sein“ sai vì không có hai động từ sein cùng lúc."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Der Schüler ist vom Direktor gelobt.",
      "Der Schüler war vom Direktor gelobt.",
      "Der Schüler ist vom Direktor gelobt gewesen.",
      "Der Schüler wurde vom Direktor gelobt."
     ],
     "answer": 3,
     "vi": "Học sinh đã được thầy hiệu trưởng khen.",
     "explain": "„loben“ không tạo ra trạng thái kết quả lâu dài nên chỉ dùng được Vorgangspassiv: wurde gelobt. Các câu với sein + gelobt đều sai."
    },
    {
     "q": "Der Kläger behauptet, dass die Tür zum Tatzeitpunkt nicht verschlossen ___.",
     "options": [
      "gewesen ist",
      "ist gewesen",
      "geworden ist",
      "gewesen hat"
     ],
     "answer": 0,
     "vi": "Nguyên đơn khẳng định rằng vào thời điểm xảy ra vụ việc cửa không được khóa.",
     "explain": "Perfekt của Zustandspassiv trong mệnh đề phụ: verschlossen gewesen ist (động từ chia đứng cuối). „ist gewesen“ sai trật tự trong mệnh đề dass."
    }
   ]
  },
  {
   "title": "Các dạng thay thế bị động (Passiversatz: man, sich lassen, sein + zu, -bar/-lich, gehören)",
   "intro": "Có nhiều cách diễn đạt nghĩa bị động mà không dùng werden:\n• man + câu chủ động: Hier kann man Anträge stellen.\n• sich lassen + Infinitiv (= kann ... werden): Das Problem lässt sich lösen. Perfekt: hat sich lösen lassen.\n• sein + zu + Infinitiv (= kann hoặc muss ... werden): Die Gebühr ist sofort zu bezahlen. Der Fehler ist leicht zu finden.\n• Tính từ đuôi -bar/-lich (= kann ... werden): lösbar, lesbar, absetzbar, erklärlich; phủ định với un-: unlösbar.\n• gehören + PII (khẩu ngữ, = muss ... werden): Das gehört verboten!\nChú ý: haben + zu + Infinitiv là câu CHỦ ĐỘNG (= muss): Sie haben die Gebühr zu zahlen.",
   "questions": [
    {
     "q": "In diesem Büro ___ man Anträge auf Kindergeld stellen.",
     "options": [
      "kann",
      "wird",
      "ist",
      "lässt sich"
     ],
     "answer": 0,
     "vi": "Ở văn phòng này người ta có thể nộp đơn xin trợ cấp con cái.",
     "explain": "„man“ + Modalverb + nguyên thể là cách thay thế bị động đơn giản nhất. „wird“ + Infinitiv với man tạo thành tương lai, không phù hợp nghĩa „có thể“; „lässt sich“ không đi với chủ ngữ man."
    },
    {
     "q": "Das Problem lässt ___ leicht lösen.",
     "options": [
      "es",
      "man",
      "sich",
      "ihn"
     ],
     "answer": 2,
     "vi": "Vấn đề này có thể được giải quyết dễ dàng.",
     "explain": "Cấu trúc thay thế bị động là „sich lassen + Infinitiv“. „es“ hay „man“ không thể thay cho đại từ phản thân sich."
    },
    {
     "q": "Die Gebühr ist innerhalb von 14 Tagen ___.",
     "options": [
      "bezahlen",
      "zu bezahlen",
      "bezahlt zu",
      "zu bezahlt"
     ],
     "answer": 1,
     "vi": "Lệ phí phải được thanh toán trong vòng 14 ngày.",
     "explain": "sein + zu + Infinitiv = muss bezahlt werden. „zu bezahlt“ sai vì sau zu phải là nguyên thể, không phải Partizip II."
    },
    {
     "q": "Diese Aufgabe kann man nicht lösen. → Diese Aufgabe ist ___.",
     "options": [
      "lösbar",
      "ungelöst",
      "unlöslich",
      "unlösbar"
     ],
     "answer": 3,
     "vi": "Nhiệm vụ này không thể giải quyết được.",
     "explain": "„nicht lösen können“ = un- + lös- + -bar → unlösbar. „ungelöst“ chỉ có nghĩa là chưa được giải quyết, không phải không thể giải quyết."
    },
    {
     "q": "Der Vertrag lässt sich jederzeit ___.",
     "options": [
      "kündigen",
      "gekündigt",
      "zu kündigen",
      "kündigt"
     ],
     "answer": 0,
     "vi": "Hợp đồng có thể được chấm dứt bất cứ lúc nào.",
     "explain": "sich lassen đi với nguyên thể không có zu: lässt sich kündigen. „zu kündigen“ là cấu trúc của sein + zu, không dùng với lassen."
    },
    {
     "q": "Die Handschrift auf dem Formular ist kaum ___.",
     "options": [
      "lesen",
      "gelesen",
      "lesbar",
      "lesend"
     ],
     "answer": 2,
     "vi": "Chữ viết tay trên tờ đơn gần như không đọc được.",
     "explain": "Tính từ -bar mang nghĩa „có thể được ...“: lesbar = kann gelesen werden. „lesen“ đứng sau sein mà thiếu zu là sai."
    },
    {
     "q": "„Der Fehler ist leicht zu erkennen.“ – Câu nào cùng nghĩa?",
     "options": [
      "Der Fehler muss leicht erkannt werden.",
      "Der Fehler kann leicht erkannt werden.",
      "Der Fehler hat leicht erkannt.",
      "Der Fehler wird leicht erkennen."
     ],
     "answer": 1,
     "vi": "Lỗi này có thể được nhận ra dễ dàng.",
     "explain": "sein + zu + Infinitiv có thể mang nghĩa „können“ hoặc „müssen“; với „leicht“ thì nghĩa là „können“. „muss leicht erkannt werden“ không hợp nghĩa."
    },
    {
     "q": "So ein Verhalten gehört ___!",
     "options": [
      "bestrafen",
      "zu bestrafen",
      "bestraft werden",
      "bestraft"
     ],
     "answer": 3,
     "vi": "Hành vi như vậy đáng bị trừng phạt!",
     "explain": "Cấu trúc khẩu ngữ gehören + Partizip II (= muss bestraft werden). „bestraft werden“ thừa werden, sai cấu trúc."
    },
    {
     "q": "Die genaue Steuerschuld ___ sich noch nicht berechnen.",
     "options": [
      "lässt",
      "ist",
      "kann",
      "wird"
     ],
     "answer": 0,
     "vi": "Khoản nợ thuế chính xác hiện chưa thể tính được.",
     "explain": "sich lassen + Infinitiv = kann berechnet werden. „kann sich berechnen“ sai vì berechnen không phải động từ phản thân."
    },
    {
     "q": "Die Unterlagen ___ bis zum 31. Juli beim Finanzamt einzureichen.",
     "options": [
      "haben",
      "sind",
      "werden",
      "lassen"
     ],
     "answer": 1,
     "vi": "Các tài liệu phải được nộp cho sở thuế trước ngày 31 tháng 7.",
     "explain": "Chủ ngữ „die Unterlagen“ chịu tác động nên dùng sein + zu (nghĩa bị động). „haben ... zu“ là chủ động, cần chủ ngữ là người thực hiện."
    },
    {
     "q": "Sie ___ die Unterlagen bis zum 31. Juli beim Finanzamt einzureichen.",
     "options": [
      "sind",
      "werden",
      "haben",
      "lassen"
     ],
     "answer": 2,
     "vi": "Ông/bà phải nộp các tài liệu cho sở thuế trước ngày 31 tháng 7.",
     "explain": "Chủ ngữ „Sie“ là người thực hiện và có tân ngữ „die Unterlagen“, nên dùng haben + zu (chủ động, = müssen). „sind ... einzureichen“ sẽ có nghĩa bị động, không hợp với tân ngữ."
    },
    {
     "q": "Diese Kosten können von der Steuer abgesetzt werden. → Diese Kosten sind steuerlich ___.",
     "options": [
      "absetzlich",
      "abgesetzt",
      "absetzend",
      "absetzbar"
     ],
     "answer": 3,
     "vi": "Những chi phí này có thể được khấu trừ thuế.",
     "explain": "Tính từ -bar diễn tả „có thể được ...“: absetzbar. „abgesetzt“ là trạng thái đã được khấu trừ, không mang nghĩa „có thể“; „absetzlich“ không tồn tại."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Das Ergebnis lässt sich nicht zu erklären.",
      "Das Ergebnis lässt sich nicht erklären.",
      "Das Ergebnis ist nicht erklären.",
      "Das Ergebnis lässt nicht sich erklären."
     ],
     "answer": 1,
     "vi": "Kết quả này không thể giải thích được.",
     "explain": "sich lassen + Infinitiv không có zu, và sich đứng ngay sau động từ chia: lässt sich nicht erklären. „lässt sich nicht zu erklären“ trộn lẫn hai cấu trúc."
    },
    {
     "q": "Es ist fraglich, ob sich der Schaden noch ___.",
     "options": [
      "beheben lässt",
      "lässt beheben",
      "behoben lässt",
      "zu beheben lässt"
     ],
     "answer": 0,
     "vi": "Còn chưa rõ liệu thiệt hại có còn khắc phục được hay không.",
     "explain": "Trong mệnh đề phụ với ob, động từ chia „lässt“ đứng cuối sau nguyên thể: beheben lässt. „lässt beheben“ là trật tự của mệnh đề chính."
    },
    {
     "q": "Der Streit zwischen Mieter und Vermieter hat sich leider nicht ___.",
     "options": [
      "geschlichtet lassen",
      "schlichten gelassen",
      "schlichten lassen",
      "geschlichtet gelassen"
     ],
     "answer": 2,
     "vi": "Đáng tiếc là tranh chấp giữa người thuê và chủ nhà đã không thể hòa giải được.",
     "explain": "Perfekt của sich lassen + Infinitiv dùng Ersatzinfinitiv: hat sich ... schlichten lassen. „schlichten gelassen“ sai vì khi có nguyên thể đi kèm, lassen không chuyển thành Partizip II."
    }
   ]
  },
  {
   "title": "Lời nói gián tiếp với Konjunktiv I (indirekte Rede: Konjunktiv I, Ersatzform Konjunktiv II)",
   "intro": "Konjunktiv I dùng để thuật lại lời người khác một cách trung lập (báo chí, tòa án, văn bản hành chính). Cách tạo: gốc động từ + -e, -est, -e, -en, -et, -en: er habe, er komme, er könne, er werde, er müsse.\nsein bất quy tắc: ich sei, du sei(e)st, er sei, wir seien, ihr seiet, sie seien.\nNếu Konjunktiv I trùng với Indikativ (thường ở ich, wir, sie/Sie: sie haben, wir können), dùng Konjunktiv II thay thế: sie hätten, sie könnten.\nQuá khứ: habe/sei + Partizip II: Er sagt, er habe gezahlt / er sei gefahren; bị động: sei ... worden. Tương lai: werde + Infinitiv.\nĐổi đại từ theo người thuật: „Ich bin krank.“ → Er sagt, er sei krank. Mệnh lệnh: solle; câu hỏi: ob hoặc từ để hỏi, động từ đứng cuối.",
   "questions": [
    {
     "q": "Der Minister sagt, er ___ mit dem Ergebnis zufrieden.",
     "options": [
      "sei",
      "seie",
      "seien",
      "sein"
     ],
     "answer": 0,
     "vi": "Bộ trưởng nói rằng ông hài lòng với kết quả.",
     "explain": "Konjunktiv I của sein ở ngôi er là „sei“. „seien“ là dạng số nhiều, „seie“ không tồn tại."
    },
    {
     "q": "Die Sprecherin erklärte, das Unternehmen ___ keine Schulden.",
     "options": [
      "haben",
      "habe",
      "habt",
      "hätten"
     ],
     "answer": 1,
     "vi": "Người phát ngôn tuyên bố rằng doanh nghiệp không có nợ.",
     "explain": "Chủ ngữ „das Unternehmen“ số ít nên Konjunktiv I là „habe“. „hätten“ là số nhiều, không hợp với chủ ngữ."
    },
    {
     "q": "Der Angeklagte behauptet, er ___ zur Tatzeit zu Hause gewesen.",
     "options": [
      "habe",
      "hätte",
      "sei",
      "seien"
     ],
     "answer": 2,
     "vi": "Bị cáo khẳng định rằng vào thời điểm phạm tội anh ta ở nhà.",
     "explain": "Quá khứ của Konjunktiv I: sei + gewesen (sein đi với trợ động từ sein). „habe gewesen“ sai trợ động từ."
    },
    {
     "q": "Die Zeugen sagten, sie ___ den Unfall genau gesehen.",
     "options": [
      "habe",
      "hättet",
      "habet",
      "hätten"
     ],
     "answer": 3,
     "vi": "Các nhân chứng nói rằng họ đã nhìn thấy rõ vụ tai nạn.",
     "explain": "Konjunktiv I „sie haben“ trùng với Indikativ, nên dùng dạng thay thế Konjunktiv II „hätten“. „habe“ là dạng số ít, sai với chủ ngữ „sie“ số nhiều."
    },
    {
     "q": "Der Mieter behauptet, er ___ die Miete immer pünktlich.",
     "options": [
      "zahle",
      "zahlen",
      "zahlest",
      "zahlet"
     ],
     "answer": 0,
     "vi": "Người thuê nhà khẳng định rằng anh ta luôn trả tiền thuê đúng hạn.",
     "explain": "Konjunktiv I ngôi er: gốc + -e → zahle. „zahlest“ là dạng của ngôi du."
    },
    {
     "q": "Er sagte: „Ich werde morgen anrufen.“ → Er sagte, er ___ am nächsten Tag anrufen.",
     "options": [
      "werdet",
      "werden",
      "werde",
      "worden"
     ],
     "answer": 2,
     "vi": "Anh ấy nói rằng anh ấy sẽ gọi điện vào ngày hôm sau.",
     "explain": "Tương lai trong lời gián tiếp: werde + Infinitiv. „werden“ là số nhiều, „worden“ là phân từ dùng cho bị động."
    },
    {
     "q": "Die Unternehmen gaben bekannt, sie ___ keine neuen Mitarbeiter einstellen.",
     "options": [
      "könne",
      "könnten",
      "konnten",
      "könntet"
     ],
     "answer": 1,
     "vi": "Các doanh nghiệp thông báo rằng họ không thể tuyển thêm nhân viên mới.",
     "explain": "„sie können“ ở Konjunktiv I trùng với Indikativ nên dùng Konjunktiv II „könnten“. „konnten“ (không có Umlaut) là Präteritum Indikativ."
    },
    {
     "q": "Der Kläger fragte, ob der Vertrag noch gültig ___.",
     "options": [
      "seien",
      "seist",
      "sein",
      "sei"
     ],
     "answer": 3,
     "vi": "Nguyên đơn hỏi liệu hợp đồng có còn hiệu lực không.",
     "explain": "Câu hỏi gián tiếp với ob, động từ Konjunktiv I đứng cuối: gültig sei. „seien“ là số nhiều, sai với „der Vertrag“."
    },
    {
     "q": "Der Richter sagte zum Zeugen, er ___ die Wahrheit sagen.",
     "options": [
      "solle",
      "sollen",
      "sollt",
      "sollest"
     ],
     "answer": 0,
     "vi": "Thẩm phán bảo nhân chứng rằng anh ta phải nói sự thật.",
     "explain": "Mệnh lệnh trong lời gián tiếp dùng sollen ở Konjunktiv I: er solle. „sollest“ là dạng của ngôi du."
    },
    {
     "q": "Sie sagte, sie ___ gestern beim Notar gewesen.",
     "options": [
      "habe",
      "sei",
      "seien",
      "hätte"
     ],
     "answer": 1,
     "vi": "Cô ấy nói rằng hôm qua cô ấy đã ở chỗ công chứng viên.",
     "explain": "„gewesen“ đi với trợ động từ sein: sie sei gewesen. „habe/hätte gewesen“ sai trợ động từ."
    },
    {
     "q": "Er erzählte, er ___ das Geld schon überwiesen.",
     "options": [
      "sei",
      "seie",
      "habe",
      "haben"
     ],
     "answer": 2,
     "vi": "Anh ấy kể rằng anh ấy đã chuyển tiền rồi.",
     "explain": "„überweisen“ chia Perfekt với haben, nên quá khứ Konjunktiv I là „habe überwiesen“. „sei überwiesen“ sai trợ động từ."
    },
    {
     "q": "Der Beamte wollte wissen, wann ich nach Deutschland ___.",
     "options": [
      "sei eingereist",
      "eingereist sei",
      "eingereist habe",
      "einreisen sei"
     ],
     "answer": 1,
     "vi": "Viên chức muốn biết khi nào tôi đã nhập cảnh vào Đức.",
     "explain": "Câu hỏi gián tiếp với wann: động từ chia đứng cuối → eingereist sei; einreisen đi với sein. „sei eingereist“ sai trật tự mệnh đề phụ."
    },
    {
     "q": "„Wir haben keine Zeit.“ – Câu gián tiếp nào đúng?",
     "options": [
      "Sie sagen, sie hatten keine Zeit.",
      "Sie sagen, sie habet keine Zeit.",
      "Sie sagen, sie hätten keine Zeit.",
      "Sie sagen, sie hättet keine Zeit."
     ],
     "answer": 2,
     "vi": "Họ nói rằng họ không có thời gian.",
     "explain": "„sie haben“ trùng Indikativ nên dùng Konjunktiv II „hätten“. „hatten“ là Präteritum Indikativ, làm thay đổi thời gian của câu."
    },
    {
     "q": "„Ich musste die Strafe zahlen.“ → Er sagt, er ___ die Strafe zahlen müssen.",
     "options": [
      "sei",
      "werde",
      "müsse",
      "habe"
     ],
     "answer": 3,
     "vi": "Anh ấy nói rằng anh ấy đã phải nộp tiền phạt.",
     "explain": "Quá khứ của Modalverb trong Konjunktiv I: habe + Infinitiv + müssen (Ersatzinfinitiv). „sei“ sai vì Modalverb chia Perfekt với haben."
    },
    {
     "q": "„Die Steuer wurde falsch berechnet.“ → Der Anwalt behauptet, die Steuer ___ falsch berechnet worden.",
     "options": [
      "habe",
      "sei",
      "werde",
      "wurde"
     ],
     "answer": 1,
     "vi": "Luật sư khẳng định rằng tiền thuế đã bị tính sai.",
     "explain": "Quá khứ bị động trong Konjunktiv I: sei + PII + worden. „habe ... worden“ sai vì bị động luôn đi với sein."
    }
   ]
  },
  {
   "title": "Phân từ I & II làm tính từ (Partizip I/II als Adjektiv)",
   "intro": "Partizip I = Infinitiv + -d (schlafend, steigend): nghĩa chủ động, đang diễn ra: das schlafende Kind = đứa trẻ đang ngủ.\nPartizip II: với động từ có tân ngữ mang nghĩa bị động/đã hoàn thành: der unterschriebene Vertrag = hợp đồng đã được ký; với động từ đi cùng sein mang nghĩa chủ động đã hoàn thành: der angekommene Zug.\nKhi đứng trước danh từ, phân từ chia đuôi như tính từ: ein steigender Preis, mit dem ausgefüllten Antrag, wegen der steigenden Preise, berechtigte Personen.\nCụm phân từ mở rộng: các thành phần bổ nghĩa đứng TRƯỚC phân từ: der vom Gericht gefällte Beschluss, die seit 2020 geltende Regelung.\nzu + Partizip I (Gerundiv) = cần/phải được làm: die zu zahlende Steuer, die einzureichenden Unterlagen (zu chèn giữa với động từ tách).",
   "questions": [
    {
     "q": "Bitte weck das ___ Kind nicht!",
     "options": [
      "schlafende",
      "schlafend",
      "geschlafene",
      "schlafenden"
     ],
     "answer": 0,
     "vi": "Xin đừng đánh thức đứa trẻ đang ngủ!",
     "explain": "Partizip I chỉ hành động đang diễn ra, sau „das“ (Akkusativ trung tính) có đuôi -e: schlafende. „schlafend“ thiếu đuôi tính từ."
    },
    {
     "q": "Bitte schicken Sie uns den ___ Vertrag zurück.",
     "options": [
      "unterschreibenden",
      "unterschriebene",
      "unterschriebenen",
      "unterschriebener"
     ],
     "answer": 2,
     "vi": "Xin vui lòng gửi lại cho chúng tôi bản hợp đồng đã ký.",
     "explain": "Hợp đồng được ký (bị động, đã xong) → Partizip II; Akkusativ giống đực sau „den“ có đuôi -en. „unterschreibenden“ là Partizip I, nghĩa là hợp đồng tự ký – vô lý."
    },
    {
     "q": "Wegen der ___ Preise sparen viele Familien.",
     "options": [
      "steigende",
      "steigenden",
      "steigender",
      "gestiegene"
     ],
     "answer": 1,
     "vi": "Vì giá cả đang tăng nên nhiều gia đình tiết kiệm.",
     "explain": "„wegen“ + Genitiv số nhiều, sau mạo từ „der“ đuôi tính từ là -en: steigenden. „steigende“ sai đuôi."
    },
    {
     "q": "Die ___ Gesetze müssen beachtet werden.",
     "options": [
      "geltende",
      "gegoltenen",
      "gegoltene",
      "geltenden"
     ],
     "answer": 3,
     "vi": "Các luật hiện hành phải được tuân thủ.",
     "explain": "„gelten“ là nội động từ diễn tả trạng thái đang có hiệu lực → Partizip I; số nhiều sau „die“ đuôi -en: geltenden. „geltende“ sai đuôi số nhiều."
    },
    {
     "q": "Der Beamte prüfte die ___ Unterlagen.",
     "options": [
      "eingereichten",
      "einreichenden",
      "eingereichte",
      "einreichten"
     ],
     "answer": 0,
     "vi": "Viên chức kiểm tra các tài liệu đã được nộp.",
     "explain": "Tài liệu được nộp (bị động) → Partizip II eingereicht; số nhiều sau „die“ đuôi -en. „einreichenden“ mang nghĩa chủ động, sai nghĩa."
    },
    {
     "q": "Das Finanzamt hat den ___ Bescheid korrigiert.",
     "options": [
      "falsch berechnenden",
      "falsch berechnete",
      "falsch berechneten",
      "falsch berechnetem"
     ],
     "answer": 2,
     "vi": "Sở thuế đã sửa lại quyết định bị tính sai.",
     "explain": "Quyết định đã bị tính sai → Partizip II; Akkusativ giống đực sau „den“ đuôi -en. „falsch berechnete“ thiếu -n của Akkusativ."
    },
    {
     "q": "Der gerade ___ Zug kommt aus München.",
     "options": [
      "angekommenen",
      "angekommene",
      "ankommener",
      "angekommener"
     ],
     "answer": 1,
     "vi": "Chuyến tàu vừa mới đến là từ München.",
     "explain": "„ankommen“ đi với sein nên Partizip II mang nghĩa chủ động đã hoàn thành; Nominativ giống đực sau „der“ đuôi -e. „angekommener“ là đuôi mạnh, chỉ dùng khi không có mạo từ hoặc sau „ein“."
    },
    {
     "q": "Die ___ Steuer beträgt 500 Euro.",
     "options": [
      "zu zahlenden",
      "zahlende zu",
      "zu gezahlte",
      "zu zahlende"
     ],
     "answer": 3,
     "vi": "Khoản thuế phải nộp là 500 euro.",
     "explain": "Gerundiv: zu + Partizip I (= muss gezahlt werden); Nominativ giống cái sau „die“ đuôi -e. „zu zahlenden“ sai đuôi số ít."
    },
    {
     "q": "Der ___ Beschluss ist inzwischen rechtskräftig.",
     "options": [
      "vom Gericht gefällte",
      "gefällte vom Gericht",
      "vom Gericht gefällten",
      "gefällt vom Gericht"
     ],
     "answer": 0,
     "vi": "Quyết định do tòa án đưa ra nay đã có hiệu lực pháp luật.",
     "explain": "Trong cụm phân từ mở rộng, phần bổ nghĩa đứng trước phân từ và phân từ có đuôi tính từ: vom Gericht gefällte. „vom Gericht gefällten“ sai đuôi Nominativ sau „der“."
    },
    {
     "q": "Mit dem ___ Antrag gehen Sie bitte zu Zimmer 12.",
     "options": [
      "ausgefüllte",
      "ausgefüllten",
      "ausfüllenden",
      "ausgefülltem"
     ],
     "answer": 1,
     "vi": "Anh/chị vui lòng mang tờ đơn đã điền đến phòng số 12.",
     "explain": "„mit“ + Dativ, sau „dem“ đuôi tính từ là -en: ausgefüllten. „ausgefülltem“ là đuôi mạnh, chỉ dùng khi không có mạo từ."
    },
    {
     "q": "___ Personen haben keinen Zutritt.",
     "options": [
      "Nicht berechtigten",
      "Nicht berechtigende",
      "Nicht berechtigte",
      "Nicht berechtigter"
     ],
     "answer": 2,
     "vi": "Người không có thẩm quyền không được vào.",
     "explain": "Không có mạo từ, Nominativ số nhiều → đuôi mạnh -e: berechtigte. „berechtigten“ là đuôi yếu, cần có mạo từ „die“ đứng trước."
    },
    {
     "q": "Ein ___ Unternehmen sucht neue Mitarbeiter für die Steuerabteilung.",
     "options": [
      "wachsende",
      "wachsender",
      "wachsenden",
      "wachsendes"
     ],
     "answer": 3,
     "vi": "Một doanh nghiệp đang phát triển tìm nhân viên mới cho phòng thuế.",
     "explain": "Sau „ein“ với danh từ trung tính ở Nominativ, tính từ có đuôi -es: wachsendes. „wachsender“ là đuôi giống đực."
    },
    {
     "q": "Die Rechte des ___ Arbeitnehmers sind gesetzlich geregelt.",
     "options": [
      "gekündigten",
      "gekündigte",
      "gekündigtes",
      "gekündigter"
     ],
     "answer": 0,
     "vi": "Quyền lợi của người lao động bị sa thải được pháp luật quy định.",
     "explain": "Genitiv giống đực sau „des“ có đuôi yếu -en: gekündigten. „gekündigter“ là đuôi mạnh, không dùng sau mạo từ xác định."
    },
    {
     "q": "Die ___ Regelung wird zum Jahresende geändert.",
     "options": [
      "seit 2020 gegoltene",
      "seit 2020 geltende",
      "geltende seit 2020",
      "seit 2020 geltenden"
     ],
     "answer": 1,
     "vi": "Quy định có hiệu lực từ năm 2020 sẽ được thay đổi vào cuối năm.",
     "explain": "Quy định vẫn đang có hiệu lực → Partizip I, phần bổ nghĩa đứng trước: seit 2020 geltende. „gegoltene“ sai vì gelten là nội động từ, Partizip II không dùng làm tính từ như vậy."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die bis Ende Mai einreichenden Unterlagen liegen bereit.",
      "Die bis Ende Mai zu eingereichten Unterlagen liegen bereit.",
      "Die bis Ende Mai einzureichenden Unterlagen liegen bereit.",
      "Die einzureichenden bis Ende Mai Unterlagen liegen bereit."
     ],
     "answer": 2,
     "vi": "Các tài liệu cần nộp trước cuối tháng Năm đã sẵn sàng.",
     "explain": "Gerundiv của động từ tách: zu chèn giữa → einzureichenden, phần bổ nghĩa đứng trước. „einreichenden“ là Partizip I chủ động: tài liệu tự nộp – vô lý."
    }
   ]
  },
  {
   "title": "Konjunktiv II quá khứ & với động từ khuyết thiếu, als ob / als wenn (Konjunktiv II Vergangenheit)",
   "intro": "Konjunktiv II quá khứ diễn tả điều không có thật trong quá khứ: hätte/wäre + Partizip II: Wenn ich das gewusst hätte, wäre ich gekommen.\nVới Modalverb: hätte + Infinitiv + Modalverb nguyên thể (Ersatzinfinitiv): Er hätte früher kommen müssen (lẽ ra phải...). Bị động: hätte ... werden müssen.\nTrong mệnh đề phụ, „hätte“ đứng TRƯỚC cụm hai nguyên thể: ..., dass ich den Vertrag hätte lesen sollen.\nals ob / als wenn + Konjunktiv II, động từ đứng cuối: Er tut so, als ob er krank wäre. Dạng rút gọn „als“: động từ đứng ngay sau als: als wäre er krank.\nQuá khứ: als ob er nichts gewusst hätte / als ob nichts passiert wäre.",
   "questions": [
    {
     "q": "Wenn ich die Frist gekannt ___, hätte ich den Antrag rechtzeitig gestellt.",
     "options": [
      "hätte",
      "wäre",
      "würde",
      "habe"
     ],
     "answer": 0,
     "vi": "Nếu tôi biết thời hạn thì tôi đã nộp đơn đúng hạn.",
     "explain": "„kennen“ chia Perfekt với haben nên Konjunktiv II quá khứ là „gekannt hätte“. „wäre“ sai trợ động từ."
    },
    {
     "q": "Wenn der Zug pünktlich gewesen ___, wären wir nicht zu spät gekommen.",
     "options": [
      "hätte",
      "wäre",
      "würde",
      "sei"
     ],
     "answer": 1,
     "vi": "Nếu tàu đến đúng giờ thì chúng tôi đã không bị trễ.",
     "explain": "„sein“ chia Perfekt với sein: gewesen wäre. „hätte gewesen“ là lỗi trợ động từ thường gặp."
    },
    {
     "q": "Er tut so, als ob er krank ___.",
     "options": [
      "würde",
      "hätte",
      "wäre",
      "war"
     ],
     "answer": 2,
     "vi": "Anh ta làm như thể mình bị ốm.",
     "explain": "als ob + Konjunktiv II, động từ đứng cuối: krank wäre. „war“ là Indikativ quá khứ, không diễn tả được sự giả định."
    },
    {
     "q": "Du ___ früher mit der Steuererklärung anfangen müssen.",
     "options": [
      "wärst",
      "hätte",
      "wäret",
      "hättest"
     ],
     "answer": 3,
     "vi": "Lẽ ra bạn phải bắt đầu làm tờ khai thuế sớm hơn.",
     "explain": "Konjunktiv II quá khứ với Modalverb: hätte + Infinitiv + müssen, chia theo du → hättest. „hätte“ sai ngôi."
    },
    {
     "q": "Der Steuerberater hätte uns besser informieren ___.",
     "options": [
      "gemusst",
      "müssen",
      "muss",
      "zu müssen"
     ],
     "answer": 1,
     "vi": "Lẽ ra cố vấn thuế phải thông báo cho chúng tôi tốt hơn.",
     "explain": "Khi Modalverb đi với một nguyên thể khác, dùng Ersatzinfinitiv „müssen“ thay cho Partizip II. „gemusst“ chỉ dùng khi Modalverb đứng một mình."
    },
    {
     "q": "Sie redet, als ___ sie die Chefin.",
     "options": [
      "wäre",
      "würde",
      "hätte",
      "wären"
     ],
     "answer": 0,
     "vi": "Cô ta nói chuyện như thể cô ta là sếp.",
     "explain": "Dạng rút gọn „als“ + động từ Konjunktiv II đứng ngay sau: als wäre sie die Chefin. „wären“ là số nhiều, sai với „sie“ số ít."
    },
    {
     "q": "Ohne deine Hilfe ___ ich die Prüfung nicht bestanden.",
     "options": [
      "wäre",
      "würde",
      "hätte",
      "hatte"
     ],
     "answer": 2,
     "vi": "Không có sự giúp đỡ của bạn thì tôi đã không thi đỗ.",
     "explain": "„bestehen“ chia Perfekt với haben → hätte bestanden. „hatte“ là Indikativ, không diễn tả điều không có thật."
    },
    {
     "q": "Er sah aus, als ob er die ganze Nacht nicht geschlafen ___.",
     "options": [
      "wäre",
      "würde",
      "hätte",
      "hätten"
     ],
     "answer": 2,
     "vi": "Anh ấy trông như thể cả đêm không ngủ.",
     "explain": "als ob + Konjunktiv II quá khứ; „schlafen“ đi với haben → geschlafen hätte. „wäre“ sai trợ động từ."
    },
    {
     "q": "Wenn wir früher losgefahren ___, hätten wir den Termin beim Amt nicht verpasst.",
     "options": [
      "hätten",
      "würden",
      "waren",
      "wären"
     ],
     "answer": 3,
     "vi": "Nếu chúng tôi khởi hành sớm hơn thì đã không lỡ cuộc hẹn ở cơ quan.",
     "explain": "„losfahren“ là động từ chuyển động, chia với sein → losgefahren wären. „hätten“ sai trợ động từ."
    },
    {
     "q": "Ich weiß, dass ich den Vertrag genauer ___.",
     "options": [
      "lesen hätte sollen",
      "hätte lesen sollen",
      "hätte gelesen sollen",
      "lesen sollen hätte"
     ],
     "answer": 1,
     "vi": "Tôi biết rằng lẽ ra tôi nên đọc hợp đồng kỹ hơn.",
     "explain": "Trong mệnh đề phụ có hai nguyên thể, „hätte“ đứng trước cả cụm: hätte lesen sollen. „lesen sollen hätte“ sai vì áp dụng máy móc quy tắc động từ cuối câu."
    },
    {
     "q": "Der Bescheid hätte schon letzte Woche ___.",
     "options": [
      "verschickt werden müssen",
      "verschickt worden müssen",
      "verschicken werden müssen",
      "verschickt werden gemusst"
     ],
     "answer": 0,
     "vi": "Lẽ ra quyết định phải được gửi đi từ tuần trước.",
     "explain": "Bị động + Modalverb ở Konjunktiv II quá khứ: hätte + PII + werden + müssen. „verschickt worden müssen“ sai vì sau PII cần nguyên thể werden."
    },
    {
     "q": "Der Mandant verhielt sich, als wenn nichts ___ wäre.",
     "options": [
      "passieren",
      "passierte",
      "passiert worden",
      "passiert"
     ],
     "answer": 3,
     "vi": "Thân chủ cư xử như thể không có chuyện gì xảy ra.",
     "explain": "als wenn + Konjunktiv II quá khứ: passiert wäre (passieren đi với sein). „passiert worden“ sai vì passieren không có bị động."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Es sieht so aus, als ob hätte er die Steuererklärung vergessen.",
      "Es sieht so aus, als hätte er die Steuererklärung vergessen.",
      "Es sieht so aus, als er hätte die Steuererklärung vergessen.",
      "Es sieht so aus, als ob er die Steuererklärung vergessen wäre."
     ],
     "answer": 1,
     "vi": "Có vẻ như anh ấy đã quên tờ khai thuế.",
     "explain": "Sau „als“ động từ chia đứng ngay sau; sau „als ob“ động từ đứng cuối. Câu với „als ob ... vergessen wäre“ sai trợ động từ vì vergessen đi với haben."
    },
    {
     "q": "Wenn das Gericht anders entschieden hätte, ___ die Firma nicht schließen müssen.",
     "options": [
      "wäre",
      "müssen",
      "hätte",
      "müsste"
     ],
     "answer": 2,
     "vi": "Nếu tòa án quyết định khác thì công ty đã không phải đóng cửa.",
     "explain": "Konjunktiv II quá khứ với Modalverb: hätte + schließen + müssen. „müsste ... müssen“ lặp Modalverb, sai cấu trúc."
    },
    {
     "q": "Der Richter stellte fest, dass die Zeugen früher ___.",
     "options": [
      "vernommen werden müssen hätten",
      "hätten vernommen worden müssen",
      "vernommen hätten werden müssen",
      "hätten vernommen werden müssen"
     ],
     "answer": 3,
     "vi": "Thẩm phán xác nhận rằng lẽ ra các nhân chứng phải được thẩm vấn sớm hơn.",
     "explain": "Trong mệnh đề phụ, „hätten“ đứng trước cụm PII + werden + müssen. „vernommen werden müssen hätten“ đặt hätten ở cuối là sai khi có Ersatzinfinitiv."
    }
   ]
  },
  {
   "title": "Danh từ hóa & động từ hóa (Nominalisierung und Verbalisierung)",
   "intro": "Trong văn phong hành chính – pháp lý, mệnh đề phụ thường được rút gọn thành cụm giới từ + danh từ (danh từ hóa), và ngược lại (động từ hóa).\nweil/da → wegen/aufgrund + Genitiv: weil es regnet → wegen des Regens\nnachdem → nach + Dativ: nachdem er das Studium abgeschlossen hatte → nach dem Abschluss des Studiums\nbevor → vor + Dativ; während (thời gian) → während + Genitiv\nobwohl → trotz + Genitiv; wenn/falls → bei + Dativ / im Fall(e) + Genitiv\num…zu/damit → zu(r/m) + Dativ; indem → durch + Akkusativ\nKhi danh từ hóa: chủ ngữ/tân ngữ thành bổ ngữ Genitiv (die Preise steigen → der Anstieg der Preise), trạng từ thành tính từ có đuôi (schnell ändern → die schnelle Änderung). Khi động từ hóa: động từ chia đứng cuối mệnh đề phụ, thường dùng bị động nếu không có chủ thể.",
   "questions": [
    {
     "q": "___ des Regens fand die Veranstaltung im Saal statt.",
     "options": [
      "Weil",
      "Wegen",
      "Denn",
      "Da"
     ],
     "answer": 1,
     "vi": "Vì trời mưa nên sự kiện được tổ chức trong hội trường.",
     "explain": "„wegen“ là giới từ đi với Genitiv (des Regens). „weil“, „da“ và „denn“ là liên từ, cần cả một mệnh đề chứ không đi với danh từ."
    },
    {
     "q": "Nach ___ des Studiums begann er bei einer Steuerkanzlei.",
     "options": [
      "den Abschluss",
      "des Abschlusses",
      "der Abschluss",
      "dem Abschluss"
     ],
     "answer": 3,
     "vi": "Sau khi tốt nghiệp, anh ấy bắt đầu làm việc tại một văn phòng tư vấn thuế.",
     "explain": "„nach“ luôn đi với Dativ → „dem Abschluss“. „des Abschlusses“ sai vì Genitiv chỉ dùng cho bổ ngữ phía sau (des Studiums)."
    },
    {
     "q": "___ der Unterzeichnung des Vertrags müssen alle Unterlagen geprüft werden.",
     "options": [
      "Vor",
      "Bevor",
      "Vorher",
      "Ehe"
     ],
     "answer": 0,
     "vi": "Trước khi ký hợp đồng, tất cả hồ sơ phải được kiểm tra.",
     "explain": "„bevor“ là liên từ (bevor der Vertrag unterzeichnet wird); dạng danh từ hóa phải dùng giới từ „vor“ + Dativ. „Vorher“ là trạng từ, không đi với danh từ."
    },
    {
     "q": "Während ___ arbeitete sie nebenbei bei einer Bank.",
     "options": [
      "ihr Studium",
      "ihrer Studium",
      "ihres Studiums",
      "ihren Studiums"
     ],
     "answer": 2,
     "vi": "Trong thời gian học đại học, cô ấy làm thêm tại một ngân hàng.",
     "explain": "„während“ đi với Genitiv; „das Studium“ trung tính → „ihres Studiums“. „ihrer“ là đuôi Genitiv giống cái, không hợp với danh từ trung tính."
    },
    {
     "q": "Trotz der hohen Kosten wurde das Projekt genehmigt. → ___ die Kosten hoch waren, wurde das Projekt genehmigt.",
     "options": [
      "Trotzdem",
      "Wegen",
      "Obwohl",
      "Dennoch"
     ],
     "answer": 2,
     "vi": "Mặc dù chi phí cao, dự án vẫn được phê duyệt.",
     "explain": "„trotz“ + danh từ chuyển thành liên từ phụ „obwohl“ (động từ cuối câu). „Trotzdem“ là trạng từ, không mở đầu mệnh đề phụ có động từ đứng cuối."
    },
    {
     "q": "Bei Nichtzahlung der Steuer droht ein Säumniszuschlag. → ___ die Steuer nicht gezahlt wird, droht ein Säumniszuschlag.",
     "options": [
      "Wenn",
      "Als",
      "Bei",
      "Nachdem"
     ],
     "answer": 0,
     "vi": "Nếu thuế không được nộp thì sẽ bị phạt chậm nộp.",
     "explain": "„bei“ + danh từ mang nghĩa điều kiện → „wenn“. „Als“ chỉ dùng cho một sự việc trong quá khứ, „Bei“ là giới từ không mở đầu mệnh đề."
    },
    {
     "q": "Durch ___ der Ausgaben konnte die Firma viel Geld sparen.",
     "options": [
      "der Senkung",
      "dem Senkung",
      "den Senkung",
      "die Senkung"
     ],
     "answer": 3,
     "vi": "Nhờ cắt giảm chi tiêu, công ty đã tiết kiệm được nhiều tiền.",
     "explain": "„durch“ (thay cho „indem“) luôn đi với Akkusativ → „die Senkung“. „der Senkung“ là Dativ/Genitiv nên sai."
    },
    {
     "q": "Weil die Preise steigen, müssen viele Haushalte sparen. → Wegen ___ müssen viele Haushalte sparen.",
     "options": [
      "dem Anstieg die Preise",
      "des Anstiegs der Preise",
      "des Anstiegs die Preise",
      "der Anstieg der Preise"
     ],
     "answer": 1,
     "vi": "Vì giá cả tăng, nhiều hộ gia đình phải tiết kiệm.",
     "explain": "Chủ ngữ „die Preise“ trở thành bổ ngữ Genitiv „der Preise“, và „wegen“ cần Genitiv „des Anstiegs“. Giữ nguyên „die Preise“ (Nominativ) là lỗi thường gặp."
    },
    {
     "q": "Vor der Einreichung der Steuererklärung sollten Sie alle Belege sammeln. → Bevor Sie die Steuererklärung ___, sollten Sie alle Belege sammeln.",
     "options": [
      "einreichen",
      "einreichten",
      "eingereicht",
      "einzureichen"
     ],
     "answer": 0,
     "vi": "Trước khi nộp tờ khai thuế, quý vị nên thu thập tất cả chứng từ.",
     "explain": "Mệnh đề phụ với „bevor“ ở hiện tại, chủ ngữ „Sie“ → động từ chia „einreichen“ ở cuối. „eingereicht“ là phân từ II, thiếu trợ động từ."
    },
    {
     "q": "Nach der Prüfung der Unterlagen erging der Bescheid. → Nachdem die Unterlagen ___ worden waren, erging der Bescheid.",
     "options": [
      "prüfen",
      "prüften",
      "geprüft",
      "geprüften"
     ],
     "answer": 2,
     "vi": "Sau khi hồ sơ đã được kiểm tra, quyết định được ban hành.",
     "explain": "Bị động quá khứ hoàn thành: „geprüft worden waren“ cần phân từ II không đuôi. „geprüften“ có đuôi tính từ nên sai."
    },
    {
     "q": "Weil das Gesetz schnell geändert wurde, mussten die Formulare angepasst werden. → Wegen ___ Änderung des Gesetzes mussten die Formulare angepasst werden.",
     "options": [
      "die schnelle",
      "der schnell",
      "des schnellen",
      "der schnellen"
     ],
     "answer": 3,
     "vi": "Vì luật được sửa đổi nhanh chóng nên các biểu mẫu phải được điều chỉnh.",
     "explain": "Trạng từ „schnell“ thành tính từ có đuôi; „die Änderung“ giống cái, Genitiv → „der schnellen“. „des schnellen“ là Genitiv giống đực/trung."
    },
    {
     "q": "___ Förderung der Wirtschaft senkte die Regierung die Steuern.",
     "options": [
      "Zum",
      "Zur",
      "Zu",
      "Um"
     ],
     "answer": 1,
     "vi": "Để thúc đẩy kinh tế, chính phủ đã giảm thuế.",
     "explain": "„um … zu fördern“ danh từ hóa thành „zu + Dativ“; „die Förderung“ giống cái → „zur“ (zu der). „Zum“ chỉ dùng cho danh từ giống đực/trung."
    },
    {
     "q": "Im Falle ___ Kündigung muss der Arbeitgeber eine Frist einhalten.",
     "options": [
      "einer",
      "eine",
      "einem",
      "einen"
     ],
     "answer": 0,
     "vi": "Trong trường hợp chấm dứt hợp đồng, người sử dụng lao động phải tuân thủ thời hạn báo trước.",
     "explain": "„im Falle“ được theo sau bởi Genitiv; „die Kündigung“ giống cái → „einer“. „einem“ là Dativ nên sai."
    },
    {
     "q": "Câu nào là dạng động từ hóa đúng của: „Bei Vorlage aller Unterlagen wird der Antrag bearbeitet.“?",
     "options": [
      "Wenn alle Unterlagen vorlegen, wird der Antrag bearbeitet.",
      "Als alle Unterlagen vorgelegt werden, wird der Antrag bearbeitet.",
      "Wenn alle Unterlagen vorgelegt werden, der Antrag wird bearbeitet.",
      "Wenn alle Unterlagen vorgelegt werden, wird der Antrag bearbeitet."
     ],
     "answer": 3,
     "vi": "Khi tất cả hồ sơ được nộp đầy đủ thì đơn sẽ được xử lý.",
     "explain": "Hồ sơ không tự nộp nên cần bị động „vorgelegt werden“, và sau mệnh đề phụ thì động từ chính đứng ngay đầu („wird der Antrag“). Câu cuối sai trật tự từ."
    },
    {
     "q": "Câu nào là dạng danh từ hóa đúng của: „Obwohl der Steuerpflichtige mehrfach gemahnt wurde, zahlte er nicht.“?",
     "options": [
      "Trotz mehrfache Mahnung zahlte der Steuerpflichtige nicht.",
      "Trotz mehrfacher Mahnung der Steuerpflichtige zahlte nicht.",
      "Trotz mehrfacher Mahnung zahlte der Steuerpflichtige nicht.",
      "Wegen mehrfacher Mahnung zahlte der Steuerpflichtige nicht."
     ],
     "answer": 2,
     "vi": "Mặc dù bị nhắc nhở nhiều lần, người nộp thuế vẫn không nộp.",
     "explain": "„obwohl“ → „trotz“ + Genitiv; không có mạo từ nên tính từ mang đuôi mạnh „mehrfacher“. „Wegen“ đổi nghĩa thành nguyên nhân, còn câu thứ ba sai vị trí động từ."
    }
   ]
  },
  {
   "title": "Liên từ nâng cao (Konnektoren: obwohl, trotzdem, indem, sodass, falls, je … desto, ohne dass, anstatt dass)",
   "intro": "Liên từ phụ (động từ chia đứng cuối): obwohl (mặc dù), indem (bằng cách), sodass (đến nỗi/vì vậy), falls/sofern (nếu/miễn là), ohne dass (mà không), anstatt dass (thay vì).\nTrạng từ nối (đứng vị trí 1, sau đó là động từ): trotzdem, dennoch (tuy vậy), deshalb.\nso + tính từ … dass: Die Prüfung war so schwer, dass …\nje + so sánh hơn … (động từ cuối), desto/umso + so sánh hơn + động từ + chủ ngữ: Je höher das Einkommen ist, desto höher ist die Steuer.\nohne … zu / anstatt … zu chỉ dùng khi hai vế cùng chủ ngữ; khác chủ ngữ thì dùng ohne dass / anstatt dass.",
   "questions": [
    {
     "q": "___ er krank war, ging er zur Arbeit.",
     "options": [
      "Trotzdem",
      "Dennoch",
      "Obwohl",
      "Trotz"
     ],
     "answer": 2,
     "vi": "Mặc dù bị ốm, anh ấy vẫn đi làm.",
     "explain": "Động từ „war“ đứng cuối → cần liên từ phụ „obwohl“. „Trotzdem“ và „Dennoch“ là trạng từ, sau chúng động từ phải đứng ngay vị trí 2."
    },
    {
     "q": "Die Frist war abgelaufen. ___ reichte er den Antrag noch ein.",
     "options": [
      "Trotzdem",
      "Obwohl",
      "Sodass",
      "Trotz"
     ],
     "answer": 0,
     "vi": "Thời hạn đã hết. Tuy vậy anh ấy vẫn nộp đơn.",
     "explain": "Sau chỗ trống là động từ „reichte“ → cần trạng từ ở vị trí 1 như „Trotzdem“. „Obwohl“ đòi động từ đứng cuối câu."
    },
    {
     "q": "Man kann Steuern sparen, ___ man alle Belege sorgfältig sammelt.",
     "options": [
      "um",
      "dadurch",
      "durch",
      "indem"
     ],
     "answer": 3,
     "vi": "Người ta có thể tiết kiệm thuế bằng cách thu thập cẩn thận mọi chứng từ.",
     "explain": "„indem“ diễn tả cách thức và mở đầu mệnh đề phụ. „dadurch“ chỉ đúng khi đi kèm „dass“ (dadurch, dass …)."
    },
    {
     "q": "Es regnete stark, ___ das Fußballspiel abgesagt wurde.",
     "options": [
      "damit",
      "sodass",
      "deshalb",
      "indem"
     ],
     "answer": 1,
     "vi": "Trời mưa to đến nỗi trận bóng bị hủy.",
     "explain": "„sodass“ chỉ kết quả, động từ đứng cuối. „deshalb“ cũng chỉ kết quả nhưng là trạng từ, phải là „deshalb wurde das Spiel abgesagt“."
    },
    {
     "q": "Die Prüfung war ___ schwer, dass viele Kandidaten durchfielen.",
     "options": [
      "so",
      "sodass",
      "zu",
      "als"
     ],
     "answer": 0,
     "vi": "Kỳ thi khó đến mức nhiều thí sinh bị trượt.",
     "explain": "Cấu trúc „so + tính từ …, dass“. „sodass“ không tách ra đứng trước tính từ."
    },
    {
     "q": "___ Sie Fragen haben, wenden Sie sich bitte an das Finanzamt.",
     "options": [
      "Ob",
      "Als",
      "Sofort",
      "Falls"
     ],
     "answer": 3,
     "vi": "Nếu quý vị có câu hỏi, xin vui lòng liên hệ cơ quan thuế.",
     "explain": "„Falls“ = nếu (điều kiện). „Ob“ nghĩa là „liệu“ và chỉ dùng cho câu hỏi gián tiếp."
    },
    {
     "q": "Der Vertrag ist gültig, ___ beide Parteien ihn unterschrieben haben.",
     "options": [
      "sodass",
      "sofern",
      "ob",
      "damit"
     ],
     "answer": 1,
     "vi": "Hợp đồng có hiệu lực, miễn là cả hai bên đã ký.",
     "explain": "„sofern“ = với điều kiện là. „sodass“ chỉ kết quả, không hợp nghĩa: việc ký là điều kiện, không phải kết quả."
    },
    {
     "q": "Je höher das Einkommen ist, ___ höher ist der Steuersatz.",
     "options": [
      "dann",
      "als",
      "desto",
      "je"
     ],
     "answer": 2,
     "vi": "Thu nhập càng cao thì thuế suất càng cao.",
     "explain": "Cặp „je … desto/umso“. Lặp lại „je“ ở vế sau là lỗi thường gặp."
    },
    {
     "q": "Je länger man mit der Zahlung wartet, ___.",
     "options": [
      "desto es wird teurer",
      "desto teurer wird es",
      "desto teurer es wird",
      "teurer wird es desto"
     ],
     "answer": 1,
     "vi": "Càng chờ lâu mới thanh toán thì càng tốn kém.",
     "explain": "Sau „desto + so sánh hơn“ là động từ rồi đến chủ ngữ: „desto teurer wird es“. Đặt động từ cuối như mệnh đề phụ là sai."
    },
    {
     "q": "___ früher Sie die Unterlagen einreichen, umso schneller erhalten Sie den Bescheid.",
     "options": [
      "Desto",
      "Umso",
      "So",
      "Je"
     ],
     "answer": 3,
     "vi": "Quý vị nộp hồ sơ càng sớm thì càng nhận được quyết định nhanh.",
     "explain": "Vế đầu (động từ cuối) luôn bắt đầu bằng „Je“; „umso/desto“ chỉ đứng ở vế thứ hai."
    },
    {
     "q": "Er hat das Formular unterschrieben, ___ es gelesen zu haben.",
     "options": [
      "ohne",
      "ohne dass",
      "obwohl",
      "damit"
     ],
     "answer": 0,
     "vi": "Anh ấy đã ký vào biểu mẫu mà không đọc nó.",
     "explain": "Cùng chủ ngữ và có „zu + Infinitiv“ → „ohne … zu“. „ohne dass“ cần một mệnh đề có chủ ngữ riêng."
    },
    {
     "q": "Der Chef hat den Vertrag geändert, ___ die Mitarbeiter davon wussten.",
     "options": [
      "ohne",
      "ohne zu",
      "ohne dass",
      "statt"
     ],
     "answer": 2,
     "vi": "Sếp đã thay đổi hợp đồng mà nhân viên không hề biết.",
     "explain": "Hai vế có chủ ngữ khác nhau (der Chef / die Mitarbeiter) → phải dùng „ohne dass“. „ohne“ một mình không mở đầu mệnh đề."
    },
    {
     "q": "___ der Vermieter die Heizung reparierte, erhöhte er die Miete.",
     "options": [
      "Ohne zu",
      "Anstatt",
      "Sodass",
      "Anstatt dass"
     ],
     "answer": 3,
     "vi": "Thay vì sửa lò sưởi, chủ nhà lại tăng tiền thuê.",
     "explain": "Mệnh đề có chủ ngữ và động từ chia ở cuối → „Anstatt dass“. „Anstatt“ một mình chỉ đi với „zu + Infinitiv“ hoặc danh từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die Steuerlast ist gestiegen; dennoch hat die Firma investiert.",
      "Die Steuerlast ist gestiegen; dennoch die Firma hat investiert.",
      "Obwohl die Steuerlast ist gestiegen, hat die Firma investiert.",
      "Die Steuerlast ist gestiegen, obwohl hat die Firma investiert."
     ],
     "answer": 0,
     "vi": "Gánh nặng thuế đã tăng; tuy vậy công ty vẫn đầu tư.",
     "explain": "„dennoch“ chiếm vị trí 1 nên động từ „hat“ đứng ngay sau. Với „obwohl“ thì trợ động từ phải đứng cuối („gestiegen ist“)."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Der Mandant zahlte die Strafe, sodass wurde das Verfahren eingestellt.",
      "Der Mandant zahlte die Strafe, sodass das Verfahren eingestellt wurde.",
      "Je mehr der Mandant zahlte, desto das Verfahren wurde schneller eingestellt.",
      "Der Mandant zahlte die Strafe, indem das Verfahren wurde eingestellt."
     ],
     "answer": 1,
     "vi": "Thân chủ đã nộp tiền phạt, vì vậy vụ việc được đình chỉ.",
     "explain": "„sodass“ là liên từ phụ nên „wurde“ đứng cuối. Câu thứ hai sai vì đặt động từ ngay sau „sodass“ như sau trạng từ."
    }
   ]
  },
  {
   "title": "Tương lai hoàn thành & phỏng đoán (Futur II und Vermutung mit werden + wohl)",
   "intro": "Futur II = werden (chia) + Partizip II + haben/sein (nguyên mẫu). Ví dụ: Bis Freitag werde ich den Bericht geschrieben haben. / Sie wird angekommen sein.\nCách dùng 1: hành động sẽ hoàn thành trước một thời điểm trong tương lai (thường có „bis“).\nCách dùng 2: phỏng đoán về quá khứ, thường kèm „wohl, sicher, bestimmt“: Er wird den Termin wohl vergessen haben (chắc anh ấy đã quên).\nPhỏng đoán về hiện tại dùng Futur I + wohl: Sie wird wohl krank sein (chắc cô ấy đang ốm).\nTrong mệnh đề phụ, „werden“ đứng cuối cùng: …, dass er die Klage eingereicht haben wird. Bị động: Der Antrag wird bearbeitet worden sein.",
   "questions": [
    {
     "q": "Bis Montag ___ ich den Bericht geschrieben haben.",
     "options": [
      "werde",
      "habe",
      "wird",
      "bin"
     ],
     "answer": 0,
     "vi": "Đến thứ Hai tôi sẽ viết xong bản báo cáo.",
     "explain": "Futur II dùng trợ động từ „werden“, chia theo „ich“ → „werde“. „wird“ là dạng ngôi thứ ba."
    },
    {
     "q": "Bis Ende des Jahres werden wir das Projekt ___.",
     "options": [
      "abschließen haben",
      "abgeschlossen sein",
      "abgeschlossen haben",
      "abgeschlossen werden"
     ],
     "answer": 2,
     "vi": "Đến cuối năm chúng tôi sẽ hoàn thành dự án.",
     "explain": "Futur II: Partizip II + „haben“ (abschließen chia Perfekt với haben). „abgeschlossen sein“ sai trợ động từ."
    },
    {
     "q": "Morgen um diese Zeit wird sie schon in Berlin ___ sein.",
     "options": [
      "ankommen",
      "angekommen",
      "angekommt",
      "ankommt"
     ],
     "answer": 1,
     "vi": "Giờ này ngày mai cô ấy sẽ đã đến Berlin rồi.",
     "explain": "Trước „sein“ cần Partizip II „angekommen“. „angekommt“ là phân từ sai của động từ bất quy tắc."
    },
    {
     "q": "Er ist nicht gekommen. Er ___ den Termin wohl vergessen haben.",
     "options": [
      "hat",
      "ist",
      "werde",
      "wird"
     ],
     "answer": 3,
     "vi": "Anh ấy không đến. Chắc là anh ấy đã quên cuộc hẹn.",
     "explain": "Phỏng đoán về quá khứ: „wird … vergessen haben“ (Futur II). „hat … vergessen haben“ là sai cấu trúc."
    },
    {
     "q": "Das Licht im Büro ist aus. Die Kollegen werden wohl schon nach Hause ___ sein.",
     "options": [
      "gehen",
      "gegeht",
      "ging",
      "gegangen"
     ],
     "answer": 3,
     "vi": "Đèn văn phòng đã tắt. Chắc các đồng nghiệp đã về nhà rồi.",
     "explain": "„gehen“ chia Perfekt với „sein“ → „gegangen sein“. „gehen sein“ thiếu phân từ II."
    },
    {
     "q": "Sie geht nicht ans Telefon. Sie ___ wohl gerade in einer Besprechung sein.",
     "options": [
      "ist",
      "wird",
      "hat",
      "wurde"
     ],
     "answer": 1,
     "vi": "Cô ấy không nghe máy. Chắc là cô ấy đang họp.",
     "explain": "Phỏng đoán về hiện tại: Futur I „wird … sein“ + „wohl“. „ist … sein“ sai vì có hai động từ „sein“."
    },
    {
     "q": "Wo ist Herr Braun? – Er wird wohl noch beim Finanzamt ___.",
     "options": [
      "sein",
      "gewesen",
      "ist",
      "haben"
     ],
     "answer": 0,
     "vi": "Ông Braun đâu rồi? – Chắc ông ấy vẫn còn ở cơ quan thuế.",
     "explain": "Phỏng đoán hiện tại: „wird + Infinitiv“ → „sein“. „gewesen“ thiếu „sein“ để thành Futur II."
    },
    {
     "q": "Der Brief ist nicht angekommen. Die Post wird ihn wohl falsch ___ haben.",
     "options": [
      "zustellen",
      "zustellt",
      "zugestellt",
      "gezustellt"
     ],
     "answer": 2,
     "vi": "Lá thư không đến. Chắc bưu điện đã giao nhầm.",
     "explain": "Phân từ II của động từ tách „zustellen“ là „zugestellt“ (ge- chèn giữa). „gezustellt“ là lỗi đặt ge- sai vị trí."
    },
    {
     "q": "Bis zum 31. Juli werden die meisten Bürger ihre Steuererklärung ___ haben.",
     "options": [
      "abgeben",
      "abgegebt",
      "abgegeben",
      "abgibt"
     ],
     "answer": 2,
     "vi": "Đến ngày 31 tháng 7, phần lớn người dân sẽ nộp xong tờ khai thuế.",
     "explain": "Futur II: Partizip II „abgegeben“ + haben. „abgeben haben“ dùng nguyên mẫu nên sai."
    },
    {
     "q": "Bis zur Verhandlung wird der Zeuge aus dem Ausland zurückgekehrt ___.",
     "options": [
      "sein",
      "haben",
      "werden",
      "worden"
     ],
     "answer": 0,
     "vi": "Đến phiên tòa, nhân chứng sẽ đã trở về từ nước ngoài.",
     "explain": "„zurückkehren“ là động từ chuyển động, chia với „sein“ → „zurückgekehrt sein“. „haben“ là lỗi chọn trợ động từ."
    },
    {
     "q": "Ich vermute, dass der Anwalt die Klage schon ___.",
     "options": [
      "eingereicht wird haben",
      "eingereicht haben wird",
      "wird eingereicht haben",
      "haben eingereicht wird"
     ],
     "answer": 1,
     "vi": "Tôi đoán là luật sư đã nộp đơn kiện rồi.",
     "explain": "Trong mệnh đề phụ, động từ chia „wird“ đứng cuối cùng: „eingereicht haben wird“. Đặt „wird“ lên trước là trật tự của mệnh đề chính."
    },
    {
     "q": "Bis Ende März wird der Antrag ___ sein.",
     "options": [
      "bearbeitet geworden",
      "bearbeiten worden",
      "bearbeitet werden",
      "bearbeitet worden"
     ],
     "answer": 3,
     "vi": "Đến cuối tháng Ba đơn sẽ đã được xử lý xong.",
     "explain": "Bị động Futur II: Partizip II + „worden sein“. „geworden“ chỉ dùng khi „werden“ là động từ chính (trở thành)."
    },
    {
     "q": "Câu nào có cùng nghĩa với: „Er wird das Geld wohl schon überwiesen haben.“?",
     "options": [
      "Er überweist das Geld wahrscheinlich bald.",
      "Wahrscheinlich hat er das Geld schon überwiesen.",
      "Er hat das Geld sicher nicht überwiesen.",
      "Er muss das Geld morgen überweisen."
     ],
     "answer": 1,
     "vi": "Có lẽ anh ấy đã chuyển tiền rồi.",
     "explain": "Futur II + „wohl“ diễn tả phỏng đoán về việc đã xảy ra → „Wahrscheinlich hat er … überwiesen“. Câu thứ hai nói về tương lai nên sai nghĩa."
    },
    {
     "q": "Bis die Steuerprüfung beginnt, ___ die Firma alle Belege gesammelt haben.",
     "options": [
      "werden",
      "hat",
      "wird",
      "wurde"
     ],
     "answer": 2,
     "vi": "Trước khi đợt kiểm tra thuế bắt đầu, công ty sẽ đã thu thập xong mọi chứng từ.",
     "explain": "Chủ ngữ „die Firma“ số ít → „wird“. „werden“ là dạng số nhiều, lỗi do nhìn nhầm sang „Belege“."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Bis nächste Woche wird das Gericht das Urteil verkündet haben.",
      "Bis nächste Woche wird das Gericht das Urteil verkündet sein.",
      "Bis nächste Woche wird das Gericht das Urteil haben verkündet.",
      "Bis nächste Woche hat das Gericht das Urteil verkündet werden."
     ],
     "answer": 0,
     "vi": "Đến tuần sau tòa án sẽ đã tuyên án.",
     "explain": "„verkünden“ chia với „haben“ và thứ tự cuối câu là Partizip II + haben. „verkündet sein“ sai trợ động từ."
    }
   ]
  },
  {
   "title": "Mệnh đề quan hệ nâng cao (Relativsätze: wer/was, wo(r)+Präposition, dessen/deren)",
   "intro": "wer … (der) …: chỉ người nói chung: Wer die Frist versäumt, (der) muss zahlen.\nwas: sau alles, etwas, nichts, vieles, das (dạng so sánh nhất trung tính như das Beste), hoặc khi thay cho cả mệnh đề trước: Er bestand, was alle freute.\nwo(r) + giới từ (worüber, wofür, worauf, womit…): thay cho „was“ khi động từ cần giới từ.\nGenitiv: dessen (danh từ gốc giống đực/trung), deren (giống cái/số nhiều); theo giống của danh từ được thay thế, không theo danh từ phía sau; danh từ sau dessen/deren không có mạo từ, tính từ mang đuôi mạnh: dessen langjähriger Chef.\nGiới từ + đại từ quan hệ: giới từ đứng đầu, cách do giới từ quyết định: die Kollegin, mit der ich arbeite; das Gesetz, über das wir sprechen.",
   "questions": [
    {
     "q": "___ die Frist versäumt, muss mit Nachteilen rechnen.",
     "options": [
      "Der",
      "Was",
      "Welcher",
      "Wer"
     ],
     "answer": 3,
     "vi": "Ai bỏ lỡ thời hạn thì phải chịu thiệt.",
     "explain": "Chỉ người chung chung, không có danh từ gốc → „Wer“. „Der“ cần một danh từ đứng trước."
    },
    {
     "q": "Alles, ___ Sie sagen, kann gegen Sie verwendet werden.",
     "options": [
      "das",
      "was",
      "dass",
      "welches"
     ],
     "answer": 1,
     "vi": "Mọi điều anh nói có thể được dùng để chống lại anh.",
     "explain": "Sau „alles“ dùng đại từ quan hệ „was“. „das“ chỉ dùng sau danh từ trung tính cụ thể."
    },
    {
     "q": "Das ist das Beste, ___ ich je gelesen habe.",
     "options": [
      "das",
      "dem",
      "was",
      "wo"
     ],
     "answer": 2,
     "vi": "Đó là thứ hay nhất mà tôi từng đọc.",
     "explain": "Sau tính từ so sánh nhất dùng như danh từ trung tính („das Beste“) dùng „was“. „das“ là lỗi thường gặp."
    },
    {
     "q": "Er hat die Prüfung bestanden, ___ seine Eltern sehr freute.",
     "options": [
      "was",
      "das",
      "dass",
      "welche"
     ],
     "answer": 0,
     "vi": "Anh ấy đã đỗ kỳ thi, điều đó làm bố mẹ rất vui.",
     "explain": "„was“ thay cho cả mệnh đề trước (việc thi đỗ). „das“ không thể quy chiếu về cả câu."
    },
    {
     "q": "Der Mandant, ___ Vertrag gekündigt wurde, klagt nun.",
     "options": [
      "deren",
      "dessen",
      "dem",
      "sein"
     ],
     "answer": 1,
     "vi": "Thân chủ, người có hợp đồng bị chấm dứt, nay khởi kiện.",
     "explain": "Genitiv quan hệ cho danh từ giống đực „der Mandant“ → „dessen“. „deren“ dùng cho giống cái/số nhiều."
    },
    {
     "q": "Die Firma, ___ Gewinn stark gestiegen ist, muss mehr Steuern zahlen.",
     "options": [
      "dessen",
      "die",
      "deren",
      "ihr"
     ],
     "answer": 2,
     "vi": "Công ty có lợi nhuận tăng mạnh phải nộp thuế nhiều hơn.",
     "explain": "„dessen/deren“ theo giống của danh từ gốc „die Firma“ (giống cái) → „deren“, không theo „der Gewinn“."
    },
    {
     "q": "Die Bürger, ___ Anträge abgelehnt wurden, können Widerspruch einlegen.",
     "options": [
      "deren",
      "dessen",
      "denen",
      "die"
     ],
     "answer": 0,
     "vi": "Những công dân bị từ chối đơn có thể khiếu nại.",
     "explain": "Danh từ gốc số nhiều → „deren“. „denen“ là Dativ số nhiều, không diễn tả sở hữu."
    },
    {
     "q": "Das Gesetz, ___ wir gestern diskutiert haben, tritt bald in Kraft.",
     "options": [
      "über dem",
      "worüber das",
      "über den",
      "über das"
     ],
     "answer": 3,
     "vi": "Đạo luật mà chúng ta đã thảo luận hôm qua sắp có hiệu lực.",
     "explain": "„diskutieren über + Akkusativ“, danh từ gốc trung tính → „über das“. „über dem“ là Dativ nên sai."
    },
    {
     "q": "Die Kollegin, ___ ich zusammenarbeite, ist Steuerberaterin.",
     "options": [
      "mit der",
      "mit die",
      "mit den",
      "mit deren"
     ],
     "answer": 0,
     "vi": "Đồng nghiệp nữ mà tôi làm việc cùng là chuyên viên tư vấn thuế.",
     "explain": "„mit“ + Dativ, giống cái → „mit der“. „mit deren“ là dạng Genitiv sở hữu, cần danh từ theo sau."
    },
    {
     "q": "Es gibt nichts, ___ ich mich mehr freue als auf den Urlaub.",
     "options": [
      "auf den",
      "worauf",
      "wofür",
      "darauf"
     ],
     "answer": 1,
     "vi": "Không có gì khiến tôi mong chờ hơn kỳ nghỉ.",
     "explain": "„sich freuen auf“ + quy chiếu về „nichts“ → „worauf“. „wofür“ sai giới từ; „darauf“ không phải đại từ quan hệ."
    },
    {
     "q": "Die Behörde hat schnell entschieden, ___ wir sehr dankbar sind.",
     "options": [
      "für das",
      "wovon",
      "dafür",
      "wofür"
     ],
     "answer": 3,
     "vi": "Cơ quan đã quyết định nhanh chóng, điều mà chúng tôi rất biết ơn.",
     "explain": "Quy chiếu về cả mệnh đề và „dankbar sein für“ → „wofür“. „für das“ không dùng được vì không có danh từ trung tính làm gốc."
    },
    {
     "q": "Der Vertrag, ___ Bedingungen wir nicht akzeptieren konnten, wurde nicht unterschrieben.",
     "options": [
      "deren",
      "dem",
      "dessen",
      "den"
     ],
     "answer": 2,
     "vi": "Bản hợp đồng mà chúng tôi không thể chấp nhận các điều khoản của nó đã không được ký.",
     "explain": "Gốc là „der Vertrag“ (giống đực) → „dessen“. Chọn „deren“ vì nhìn theo „Bedingungen“ (số nhiều) là lỗi điển hình."
    },
    {
     "q": "Die Mandantin, ___ Ehemann wir vertreten, hat angerufen.",
     "options": [
      "dessen",
      "die",
      "deren",
      "der"
     ],
     "answer": 2,
     "vi": "Nữ thân chủ, người mà chúng tôi đại diện cho chồng bà, đã gọi điện.",
     "explain": "Gốc „die Mandantin“ giống cái → „deren“, dù „Ehemann“ là giống đực. „dessen“ là lỗi theo giống của danh từ phía sau."
    },
    {
     "q": "Das Unternehmen, dessen ___ Geschäftsführer zurückgetreten ist, sucht einen Nachfolger.",
     "options": [
      "langjährige",
      "langjährigen",
      "langjähriges",
      "langjähriger"
     ],
     "answer": 3,
     "vi": "Doanh nghiệp có giám đốc lâu năm vừa từ chức đang tìm người kế nhiệm.",
     "explain": "Sau „dessen“ tính từ mang đuôi mạnh; „Geschäftsführer“ giống đực Nominativ → „langjähriger“. „langjährige“ là đuôi yếu sau mạo từ xác định."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die Richterin, auf deren Urteil alle gewartet hatten, betrat den Saal.",
      "Die Richterin, auf dessen Urteil alle gewartet hatten, betrat den Saal.",
      "Die Richterin, auf deren Urteils alle gewartet hatten, betrat den Saal.",
      "Die Richterin, deren auf Urteil alle gewartet hatten, betrat den Saal."
     ],
     "answer": 0,
     "vi": "Nữ thẩm phán, người mà mọi người đã chờ phán quyết của bà, bước vào phòng xử.",
     "explain": "Giới từ đứng trước „deren“ (gốc giống cái), danh từ sau giữ cách do giới từ quy định („auf … Urteil“, Akkusativ). „dessen“ sai giống."
    }
   ]
  },
  {
   "title": "Cụm danh từ + động từ cố định (Nomen-Verb-Verbindungen)",
   "intro": "Trong văn bản pháp lý – hành chính, nhiều ý được diễn đạt bằng một danh từ + động từ „nhạt nghĩa“ cố định; không được thay động từ tùy ý.\nin Kraft treten (có hiệu lực) – zur Verfügung stehen/stellen (sẵn có/cung cấp) – zur Kenntnis nehmen (ghi nhận) – in Frage stellen (nghi ngờ) – Rücksicht nehmen auf + Akk (quan tâm, nể) – einen Antrag stellen (nộp đơn) – eine Entscheidung treffen (ra quyết định) – in Anspruch nehmen (sử dụng dịch vụ) – Maßnahmen ergreifen (áp dụng biện pháp) – Stellung nehmen zu (bày tỏ quan điểm) – in Betracht ziehen (cân nhắc) – zur Sprache bringen (đưa ra bàn) – Kritik üben an + Dat (phê bình) – Anwendung finden (được áp dụng).",
   "questions": [
    {
     "q": "Das neue Gesetz ___ am 1. Januar in Kraft.",
     "options": [
      "steht",
      "geht",
      "tritt",
      "nimmt"
     ],
     "answer": 2,
     "vi": "Đạo luật mới có hiệu lực vào ngày 1 tháng 1.",
     "explain": "Cụm cố định là „in Kraft treten“. „in Kraft stehen“ không tồn tại."
    },
    {
     "q": "Für Fragen ___ ich Ihnen gern zur Verfügung.",
     "options": [
      "stelle",
      "gebe",
      "bin",
      "stehe"
     ],
     "answer": 3,
     "vi": "Tôi sẵn sàng giải đáp mọi thắc mắc của quý vị.",
     "explain": "Người sẵn sàng → „zur Verfügung stehen“. „zur Verfügung stellen“ cần tân ngữ Akkusativ (cung cấp cái gì)."
    },
    {
     "q": "Bitte nehmen Sie ___ auf die anderen Fahrgäste.",
     "options": [
      "Kenntnis",
      "Rücksicht",
      "Abschied",
      "Stellung"
     ],
     "answer": 1,
     "vi": "Xin quý khách hãy quan tâm đến những hành khách khác.",
     "explain": "„Rücksicht nehmen auf + Akk“. „Stellung nehmen“ đi với „zu“, không đi với „auf“."
    },
    {
     "q": "Wir haben Ihr Schreiben zur ___ genommen.",
     "options": [
      "Kenntnis",
      "Verfügung",
      "Sprache",
      "Rücksicht"
     ],
     "answer": 0,
     "vi": "Chúng tôi đã ghi nhận thư của quý vị.",
     "explain": "„zur Kenntnis nehmen“ = ghi nhận. „zur Verfügung“ đi với „stehen/stellen“, không với „nehmen“."
    },
    {
     "q": "Sie möchte beim Finanzamt einen Antrag auf Fristverlängerung ___.",
     "options": [
      "stellen",
      "machen",
      "geben",
      "treffen"
     ],
     "answer": 0,
     "vi": "Cô ấy muốn nộp đơn xin gia hạn thời hạn tại cơ quan thuế.",
     "explain": "Cụm chuẩn là „einen Antrag stellen“. „einen Antrag machen“ là cách nói sai trong văn phong hành chính."
    },
    {
     "q": "Die Regierung muss bald eine Entscheidung ___.",
     "options": [
      "machen",
      "stellen",
      "treffen",
      "nehmen"
     ],
     "answer": 2,
     "vi": "Chính phủ phải sớm đưa ra quyết định.",
     "explain": "„eine Entscheidung treffen“. „eine Entscheidung machen“ là lỗi dịch từ tiếng Anh."
    },
    {
     "q": "Der Anwalt stellt die Glaubwürdigkeit des Zeugen in ___.",
     "options": [
      "Kraft",
      "Betracht",
      "Kenntnis",
      "Frage"
     ],
     "answer": 3,
     "vi": "Luật sư đặt nghi vấn về độ tin cậy của nhân chứng.",
     "explain": "„in Frage stellen“ = nghi ngờ. „in Betracht“ đi với „ziehen“, không với „stellen“."
    },
    {
     "q": "Die Firma stellt den Mitarbeitern Laptops zur ___.",
     "options": [
      "Kenntnis",
      "Verfügung",
      "Sprache",
      "Rücksicht"
     ],
     "answer": 1,
     "vi": "Công ty cung cấp máy tính xách tay cho nhân viên.",
     "explain": "„etwas zur Verfügung stellen“ = cung cấp. „zur Kenntnis“ đi với „nehmen/bringen“."
    },
    {
     "q": "Viele Bürger nehmen die kostenlose Beratung in ___.",
     "options": [
      "Frage",
      "Kraft",
      "Betrieb",
      "Anspruch"
     ],
     "answer": 3,
     "vi": "Nhiều người dân sử dụng dịch vụ tư vấn miễn phí.",
     "explain": "„in Anspruch nehmen“ = sử dụng (dịch vụ, quyền lợi). „in Betrieb nehmen“ dùng cho máy móc, công trình."
    },
    {
     "q": "Die Behörde hat Maßnahmen gegen Steuerbetrug ___.",
     "options": [
      "genommen",
      "ergriffen",
      "gestellt",
      "getreten"
     ],
     "answer": 1,
     "vi": "Cơ quan chức năng đã áp dụng các biện pháp chống gian lận thuế.",
     "explain": "„Maßnahmen ergreifen“ là cụm cố định. „Maßnahmen nehmen“ là lỗi thường gặp."
    },
    {
     "q": "Der Minister nahm ___ den Vorwürfen Stellung.",
     "options": [
      "zu",
      "an",
      "über",
      "für"
     ],
     "answer": 0,
     "vi": "Bộ trưởng đã lên tiếng về các cáo buộc.",
     "explain": "„Stellung nehmen zu + Dativ“. „über“ sai giới từ (và sẽ cần Akkusativ „die Vorwürfe“)."
    },
    {
     "q": "Wir sollten auch eine Klage in Betracht ___.",
     "options": [
      "nehmen",
      "stellen",
      "ziehen",
      "bringen"
     ],
     "answer": 2,
     "vi": "Chúng ta cũng nên cân nhắc việc khởi kiện.",
     "explain": "„in Betracht ziehen“ = cân nhắc. „in Betracht nehmen“ không tồn tại."
    },
    {
     "q": "In der Sitzung brachte sie das Problem der Steuerhinterziehung zur ___.",
     "options": [
      "Kenntnis",
      "Sprache",
      "Verfügung",
      "Frage"
     ],
     "answer": 1,
     "vi": "Trong cuộc họp, bà ấy đã nêu vấn đề trốn thuế.",
     "explain": "„zur Sprache bringen“ = đưa ra bàn. „zur Kenntnis bringen“ nghĩa là thông báo cho ai biết, cần tân ngữ người, không hợp ngữ cảnh."
    },
    {
     "q": "Die Opposition übte scharfe Kritik ___ dem Haushaltsplan.",
     "options": [
      "an",
      "über",
      "gegen",
      "zu"
     ],
     "answer": 0,
     "vi": "Phe đối lập đã phê phán gay gắt dự thảo ngân sách.",
     "explain": "„Kritik üben an + Dativ“. „gegen“ luôn đi với Akkusativ nên „gegen dem“ sai cả giới từ lẫn cách."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die neue Verordnung nimmt ab sofort Anwendung.",
      "Die neue Verordnung tritt ab sofort in Anwendung.",
      "Die neue Verordnung stellt ab sofort Anwendung.",
      "Die neue Verordnung findet ab sofort Anwendung."
     ],
     "answer": 3,
     "vi": "Nghị định mới được áp dụng ngay từ bây giờ.",
     "explain": "Cụm cố định là „Anwendung finden“. „in Anwendung treten“ là lẫn lộn với „in Kraft treten“."
    }
   ]
  },
  {
   "title": "Giới từ trang trọng (Präpositionen mit Genitiv und Dativ in der Amtssprache)",
   "intro": "Giới từ + Genitiv (văn phong trang trọng): aufgrund (do), infolge (do hậu quả của), angesichts (trước tình hình), hinsichtlich / bezüglich (liên quan đến), anlässlich (nhân dịp). Ví dụ: aufgrund des Unfalls, angesichts der hohen Kosten.\nGiới từ + Dativ: gemäß (theo, phù hợp với), entsprechend (tương ứng với), zufolge (theo nguồn tin – đứng SAU danh từ: dem Bericht zufolge). gemäß/entsprechend có thể đứng trước hoặc sau danh từ.\nlaut (theo nguồn): thường dùng không mạo từ: laut Gesetz, laut Vertrag.\nKhi danh từ Genitiv số nhiều không có mạo từ, tính từ mang đuôi mạnh -er: angesichts steigender Kosten.",
   "questions": [
    {
     "q": "___ des schlechten Wetters wurde der Flug gestrichen.",
     "options": [
      "Aufgrund",
      "Gemäß",
      "Laut",
      "Zufolge"
     ],
     "answer": 0,
     "vi": "Do thời tiết xấu, chuyến bay đã bị hủy.",
     "explain": "„aufgrund“ + Genitiv chỉ nguyên nhân. „Laut/Zufolge“ chỉ nguồn thông tin, không chỉ nguyên nhân."
    },
    {
     "q": "Aufgrund ___ Krankheit konnte er nicht vor Gericht erscheinen.",
     "options": [
      "seine",
      "seiner",
      "seinem",
      "seinen"
     ],
     "answer": 1,
     "vi": "Do bị bệnh, anh ấy không thể có mặt tại tòa.",
     "explain": "„aufgrund“ + Genitiv; „die Krankheit“ giống cái → „seiner“. „seinem“ là Dativ giống đực/trung."
    },
    {
     "q": "Infolge ___ Unfalls war die Autobahn stundenlang gesperrt.",
     "options": [
      "dem",
      "den",
      "der",
      "des"
     ],
     "answer": 3,
     "vi": "Do vụ tai nạn, đường cao tốc bị phong tỏa hàng giờ liền.",
     "explain": "„infolge“ + Genitiv; „der Unfall“ giống đực → „des Unfalls“. „dem“ là lỗi dùng Dativ."
    },
    {
     "q": "Angesichts ___ hohen Inflation erhöht die Zentralbank die Zinsen.",
     "options": [
      "die",
      "dem",
      "der",
      "den"
     ],
     "answer": 2,
     "vi": "Trước tình trạng lạm phát cao, ngân hàng trung ương tăng lãi suất.",
     "explain": "„angesichts“ + Genitiv; „die Inflation“ giống cái → „der hohen Inflation“. „die“ là Nominativ/Akkusativ."
    },
    {
     "q": "Hinsichtlich ___ Antrags teilen wir Ihnen Folgendes mit.",
     "options": [
      "Ihrem",
      "Ihren",
      "Ihr",
      "Ihres"
     ],
     "answer": 3,
     "vi": "Liên quan đến đơn của quý vị, chúng tôi xin thông báo như sau.",
     "explain": "„hinsichtlich“ + Genitiv; „der Antrag“ giống đực → „Ihres Antrags“. „Ihrem“ là Dativ."
    },
    {
     "q": "Bezüglich ___ Steuerbescheids haben wir noch einige Fragen.",
     "options": [
      "des",
      "dem",
      "der",
      "den"
     ],
     "answer": 0,
     "vi": "Về quyết định thuế, chúng tôi còn một số câu hỏi.",
     "explain": "„bezüglich“ + Genitiv; „der Steuerbescheid“ → „des Steuerbescheids“ (có -s ở danh từ). „dem“ là Dativ."
    },
    {
     "q": "Dem Bericht ___ ist die Arbeitslosigkeit gesunken.",
     "options": [
      "laut",
      "aufgrund",
      "zufolge",
      "infolge"
     ],
     "answer": 2,
     "vi": "Theo bản báo cáo, tỷ lệ thất nghiệp đã giảm.",
     "explain": "„zufolge“ đứng sau danh từ Dativ („dem Bericht zufolge“). „laut“ luôn đứng trước danh từ."
    },
    {
     "q": "___ ist die Steuerreform gescheitert.",
     "options": [
      "Zufolge einem Zeitungsbericht",
      "Einem Zeitungsbericht zufolge",
      "Einen Zeitungsbericht zufolge",
      "Ein Zeitungsbericht zufolge"
     ],
     "answer": 1,
     "vi": "Theo một bài báo, cuộc cải cách thuế đã thất bại.",
     "explain": "„zufolge“ đứng sau danh từ ở Dativ → „Einem Zeitungsbericht zufolge“. Đặt „zufolge“ lên trước với Dativ là sai."
    },
    {
     "q": "Gemäß ___ Vertrag muss die Miete monatlich gezahlt werden.",
     "options": [
      "des",
      "dem",
      "den",
      "der"
     ],
     "answer": 1,
     "vi": "Theo hợp đồng, tiền thuê phải được trả hằng tháng.",
     "explain": "„gemäß“ đi với Dativ → „dem Vertrag“. „des“ là lỗi do nhầm với các giới từ trang trọng đi với Genitiv."
    },
    {
     "q": "___ Gesetz müssen Unternehmen ihre Bilanz veröffentlichen.",
     "options": [
      "Aufgrund",
      "Infolge",
      "Laut",
      "Angesichts"
     ],
     "answer": 2,
     "vi": "Theo luật, các doanh nghiệp phải công bố bảng cân đối kế toán.",
     "explain": "„laut“ có thể đứng với danh từ không mạo từ, không biến cách („laut Gesetz“). Các giới từ Genitiv còn lại cần mạo từ và đuôi Genitiv."
    },
    {
     "q": "Der Gesetzgeber hat die Regelung den neuen Anforderungen ___ angepasst.",
     "options": [
      "entsprechend",
      "zufolge",
      "laut",
      "infolge"
     ],
     "answer": 0,
     "vi": "Cơ quan lập pháp đã điều chỉnh quy định cho phù hợp với các yêu cầu mới.",
     "explain": "„entsprechend“ (+ Dativ, có thể đứng sau) = phù hợp với. „zufolge“ chỉ nguồn thông tin nên sai nghĩa."
    },
    {
     "q": "___ Ihrem Wunsch haben wir den Termin verschoben.",
     "options": [
      "Aufgrund",
      "Angesichts",
      "Hinsichtlich",
      "Entsprechend"
     ],
     "answer": 3,
     "vi": "Theo mong muốn của quý vị, chúng tôi đã dời lịch hẹn.",
     "explain": "„Ihrem“ là Dativ → cần giới từ đi với Dativ như „entsprechend“. „Aufgrund“ đòi Genitiv („Ihres Wunsches“)."
    },
    {
     "q": "Angesichts ___ Kosten wurde das Bauprojekt gestoppt.",
     "options": [
      "steigender",
      "steigende",
      "steigenden",
      "steigend"
     ],
     "answer": 0,
     "vi": "Trước tình trạng chi phí tăng, dự án xây dựng đã bị dừng.",
     "explain": "Genitiv số nhiều không mạo từ → tính từ đuôi mạnh „-er“: „steigender Kosten“. „steigenden“ chỉ đúng khi có mạo từ („der steigenden Kosten“)."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Den Angaben des Ministeriums zufolge die Steuereinnahmen sinken.",
      "Den Angaben des Ministeriums zufolge sinken die Steuereinnahmen.",
      "Der Angaben des Ministeriums zufolge sinken die Steuereinnahmen.",
      "Zufolge den Angaben des Ministeriums sinken die Steuereinnahmen."
     ],
     "answer": 1,
     "vi": "Theo số liệu của Bộ, nguồn thu thuế đang giảm.",
     "explain": "Cụm „Den Angaben … zufolge“ (Dativ, zufolge đứng sau) chiếm vị trí 1, sau đó là động từ „sinken“. Câu thứ hai sai vị trí động từ."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Hinsichtlich die geplante Reform gibt es noch offene Fragen.",
      "Hinsichtlich der geplanten Reform es gibt noch offene Fragen.",
      "Hinsichtlich der geplanten Reform gibt es noch offene Fragen.",
      "Der geplanten Reform hinsichtlich gibt es noch offene Fragen."
     ],
     "answer": 2,
     "vi": "Liên quan đến cuộc cải cách dự kiến vẫn còn những câu hỏi bỏ ngỏ.",
     "explain": "„hinsichtlich“ đứng trước danh từ Genitiv („der geplanten Reform“), sau cụm này là động từ „gibt“. Câu thứ hai dùng Akkusativ nên sai."
    }
   ]
  }
 ],
 "C1": [
  {
   "title": "Nghĩa chủ quan của động từ khuyết thiếu (subjektive Modalverben)",
   "intro": "Động từ khuyết thiếu có thể diễn tả mức độ chắc chắn của người nói (phỏng đoán) hoặc thuật lại lời khẳng định:\nmuss / müsste = gần như chắc chắn (~90%): Er muss krank sein.\ndürfte = có lẽ, khá chắc (~75%): Das dürfte teuer werden.\nkann / könnte = có thể (~50%): Die Akte kann im Archiv liegen.\nmag = có thể đúng, nhưng... (nhượng bộ): Das mag sein, aber...\nsoll = người khác nói (nghe nói, theo tin đồn): Er soll reich sein.\nwill = chính chủ ngữ tự khẳng định (người nói nghi ngờ): Er will nichts gesehen haben.\nVới sự việc trong quá khứ, động từ khuyết thiếu vẫn ở hiện tại + Infinitiv Perfekt (Partizip II + haben/sein): Er muss den Termin vergessen haben. Bị động: Der Brief muss verschickt worden sein. Trong mệnh đề phụ, động từ khuyết thiếu đứng cuối: ..., dass er das Geld unterschlagen haben muss.",
   "questions": [
    {
     "q": "Ich bin mir fast sicher: Der Steuerberater ___ noch im Büro sein, das Licht brennt ja noch.",
     "options": [
      "muss",
      "will",
      "soll",
      "darf"
     ],
     "answer": 0,
     "vi": "Tôi gần như chắc chắn: người tư vấn thuế chắc hẳn vẫn còn ở văn phòng, đèn vẫn còn sáng mà.",
     "explain": "'muss' diễn tả suy luận gần như chắc chắn của chính người nói. 'soll' là tin nghe từ người khác, mâu thuẫn với 'ich bin mir fast sicher'."
    },
    {
     "q": "Man hört, der Minister ___ Steuergelder veruntreut haben.",
     "options": [
      "will",
      "soll",
      "darf",
      "möchte"
     ],
     "answer": 1,
     "vi": "Người ta đồn rằng ông bộ trưởng đã biển thủ tiền thuế.",
     "explain": "'soll' + Infinitiv Perfekt = người khác nói/đồn. 'will' nghĩa là chính ông bộ trưởng tự khẳng định, không hợp với 'Man hört'."
    },
    {
     "q": "Der Angeklagte behauptet, unschuldig zu sein. Er ___ zur Tatzeit zu Hause gewesen sein.",
     "options": [
      "soll",
      "muss",
      "will",
      "dürfte"
     ],
     "answer": 2,
     "vi": "Bị cáo khẳng định mình vô tội. Anh ta tự nhận là vào thời điểm phạm tội đã ở nhà.",
     "explain": "'will' = chủ ngữ tự khẳng định về mình (người nói nghi ngờ). 'soll' sẽ có nghĩa là người khác nói về anh ta."
    },
    {
     "q": "Es ist gut möglich, aber nicht sicher: Die Akte ___ im Archiv liegen.",
     "options": [
      "muss",
      "will",
      "soll",
      "kann"
     ],
     "answer": 3,
     "vi": "Rất có thể, nhưng không chắc: hồ sơ có thể nằm trong kho lưu trữ.",
     "explain": "'kann' diễn tả khả năng (~50%). 'muss' là gần như chắc chắn, mâu thuẫn với 'nicht sicher'."
    },
    {
     "q": "Ich schätze, die Reparatur ___ etwa 500 Euro kosten – ganz sicher bin ich nicht.",
     "options": [
      "muss",
      "dürfte",
      "will",
      "dürft"
     ],
     "answer": 1,
     "vi": "Tôi ước tính việc sửa chữa có lẽ tốn khoảng 500 euro – tôi không hoàn toàn chắc chắn.",
     "explain": "'dürfte' (Konjunktiv II) = có lẽ, phỏng đoán khá chắc. 'muss' quá chắc chắn so với 'ganz sicher bin ich nicht'; 'dürft' là dạng của ngôi 'ihr'."
    },
    {
     "q": "Herr Weber ist nicht erschienen. Er muss den Termin vergessen ___.",
     "options": [
      "sein",
      "gehabt",
      "hat",
      "haben"
     ],
     "answer": 3,
     "vi": "Ông Weber đã không đến. Chắc hẳn ông ấy đã quên cuộc hẹn.",
     "explain": "Phỏng đoán về quá khứ dùng Infinitiv Perfekt: vergessen + haben (vì 'vergessen' đi với haben). 'sein' sai trợ động từ."
    },
    {
     "q": "Er ist schon um sechs Uhr losgefahren. Er dürfte inzwischen in Berlin angekommen ___.",
     "options": [
      "sein",
      "haben",
      "ist",
      "gewesen"
     ],
     "answer": 0,
     "vi": "Anh ấy đã khởi hành từ sáu giờ. Có lẽ giờ này anh ấy đã đến Berlin rồi.",
     "explain": "'ankommen' chia Perfekt với sein, nên Infinitiv Perfekt là 'angekommen sein'. 'haben' là sai trợ động từ."
    },
    {
     "q": "Das ___ zwar stimmen, aber rechtlich ist es irrelevant.",
     "options": [
      "darf",
      "möchte",
      "mag",
      "will"
     ],
     "answer": 2,
     "vi": "Điều đó có thể đúng, nhưng về mặt pháp lý thì không quan trọng.",
     "explain": "'mag ... zwar ..., aber' là cấu trúc nhượng bộ: thừa nhận có thể đúng nhưng không quan trọng. 'möchte' chỉ mong muốn, không dùng như vậy."
    },
    {
     "q": "Câu nào diễn đạt đúng ý: 'Người ta nói rằng công ty đã trốn thuế'?",
     "options": [
      "Die Firma will Steuern hinterzogen haben.",
      "Die Firma muss Steuern hinterzogen haben.",
      "Die Firma soll Steuern hinterziehen haben.",
      "Die Firma soll Steuern hinterzogen haben."
     ],
     "answer": 3,
     "vi": "Người ta nói rằng công ty đã trốn thuế.",
     "explain": "'soll' + Infinitiv Perfekt = theo lời người khác, sự việc quá khứ. 'muss' là suy luận chắc chắn của người nói, còn 'hinterziehen haben' sai dạng Partizip II."
    },
    {
     "q": "Dem Bericht zufolge ___ die Firma Verluste in Millionenhöhe gemacht haben.",
     "options": [
      "soll",
      "will",
      "mag",
      "darf"
     ],
     "answer": 0,
     "vi": "Theo bản báo cáo, công ty được cho là đã thua lỗ hàng triệu.",
     "explain": "Thông tin đến từ nguồn khác (bản báo cáo) nên dùng 'soll'. 'will' sẽ là chính công ty tự khẳng định."
    },
    {
     "q": "Der Zeuge ___ den Unfall genau beobachtet haben – das behauptet er jedenfalls.",
     "options": [
      "soll",
      "muss",
      "will",
      "kann"
     ],
     "answer": 2,
     "vi": "Nhân chứng tự nhận là đã quan sát kỹ vụ tai nạn – ít nhất là anh ta khẳng định như vậy.",
     "explain": "'das behauptet er' cho thấy chính chủ ngữ tự khẳng định → 'will'. 'soll' dùng khi người khác nói về anh ta."
    },
    {
     "q": "Câu nào đúng trật tự từ?",
     "options": [
      "Ich glaube, dass er das Geld muss unterschlagen haben.",
      "Ich glaube, dass er das Geld unterschlagen haben muss.",
      "Ich glaube, dass er muss das Geld unterschlagen haben.",
      "Ich glaube, dass er das Geld unterschlagen muss haben."
     ],
     "answer": 1,
     "vi": "Tôi tin rằng chắc hẳn anh ta đã biển thủ số tiền đó.",
     "explain": "Trong mệnh đề phụ, động từ khuyết thiếu chia ngôi đứng cuối, sau Infinitiv Perfekt: 'unterschlagen haben muss'. Đặt 'muss' trước 'haben' là sai."
    },
    {
     "q": "Câu nào mang nghĩa phỏng đoán (nghĩa chủ quan)?",
     "options": [
      "Er muss den Bericht schon abgegeben haben.",
      "Er muss den Bericht bis Freitag abgeben.",
      "Er musste den Bericht abgeben.",
      "Er hat den Bericht abgeben müssen."
     ],
     "answer": 0,
     "vi": "Chắc hẳn anh ấy đã nộp bản báo cáo rồi.",
     "explain": "'muss' + Infinitiv Perfekt diễn tả suy luận của người nói. Các câu còn lại chỉ nghĩa vụ khách quan ('phải nộp')."
    },
    {
     "q": "Die Unterlagen müssen schon gestern verschickt ___ sein.",
     "options": [
      "geworden",
      "werden",
      "haben",
      "worden"
     ],
     "answer": 3,
     "vi": "Chắc hẳn tài liệu đã được gửi đi từ hôm qua.",
     "explain": "Infinitiv Perfekt bị động là 'verschickt worden sein'. 'geworden' chỉ dùng khi 'werden' là động từ chính (trở thành)."
    },
    {
     "q": "Damals ___ die Steuerbehörde von dem Betrug nichts gewusst haben, sonst hätte sie eingegriffen.",
     "options": [
      "durfte",
      "dürfe",
      "dürfte",
      "darf"
     ],
     "answer": 2,
     "vi": "Hồi đó có lẽ cơ quan thuế không hề biết về vụ gian lận, nếu không họ đã can thiệp.",
     "explain": "Phỏng đoán về quá khứ: động từ khuyết thiếu ở hiện tại/Konjunktiv II + Infinitiv Perfekt. 'durfte' (Präteritum) mang nghĩa khách quan 'được phép', không phải phỏng đoán."
    }
   ]
  },
  {
   "title": "Cụm tính từ phân từ mở rộng (erweiterte Partizipialattribute)",
   "intro": "Cụm phân từ mở rộng đứng giữa mạo từ và danh từ, thay cho mệnh đề quan hệ; phân từ được chia đuôi như tính từ.\nPartizip I (chủ động, đồng thời): die ständig steigenden Preise = die Preise, die ständig steigen.\nPartizip II (bị động): der vom Gericht erlassene Beschluss = der Beschluss, der vom Gericht erlassen wurde.\nPartizip II của động từ nội động chia với sein (đã xảy ra): der angekommene Zug = der Zug, der angekommen ist. Động từ nội động chia với haben (gelten, arbeiten) không tạo được Partizip II làm định ngữ.\nzu + Partizip I (phải/có thể được làm): die zu zahlende Steuer = die Steuer, die gezahlt werden muss; ein nicht zu unterschätzendes Risiko.\nCác thành phần mở rộng (vom Gericht, seit Jahren...) đứng TRƯỚC phân từ.",
   "questions": [
    {
     "q": "Die ständig ___ Preise belasten die Verbraucher. (= die Preise, die ständig steigen)",
     "options": [
      "steigende",
      "steigenden",
      "steigend",
      "gestiegene"
     ],
     "answer": 1,
     "vi": "Giá cả không ngừng tăng gây gánh nặng cho người tiêu dùng.",
     "explain": "Quan hệ chủ động, đồng thời → Partizip I; sau 'die' (số nhiều) đuôi yếu là -en. 'steigende' sai đuôi."
    },
    {
     "q": "Das vom Mandanten ___ Dokument liegt auf dem Tisch. (= das Dokument, das vom Mandanten unterschrieben wurde)",
     "options": [
      "unterschreibende",
      "unterschriebenen",
      "unterschriebene",
      "unterschrieben"
     ],
     "answer": 2,
     "vi": "Văn bản do thân chủ ký nằm trên bàn.",
     "explain": "Nghĩa bị động → Partizip II; sau 'das' ở Nominativ đuôi là -e. 'unterschreibende' là Partizip I (chủ động), sai nghĩa."
    },
    {
     "q": "Die ___ Steuer muss bis Ende Mai überwiesen werden. (= die Steuer, die gezahlt werden muss)",
     "options": [
      "zahlende",
      "gezahlte",
      "zu gezahlte",
      "zu zahlende"
     ],
     "answer": 3,
     "vi": "Khoản thuế phải nộp cần được chuyển khoản trước cuối tháng Năm.",
     "explain": "'zu + Partizip I' diễn tả điều phải được làm. 'gezahlte' nghĩa là 'đã được trả', không phải 'phải trả'."
    },
    {
     "q": "Der gestern in Berlin ___ Zug hatte drei Stunden Verspätung. (= der Zug, der gestern angekommen ist)",
     "options": [
      "angekommenen",
      "angekommene",
      "angekommen",
      "ankommenden"
     ],
     "answer": 1,
     "vi": "Chuyến tàu đến Berlin hôm qua đã trễ ba tiếng.",
     "explain": "'ankommen' chia với sein nên Partizip II mang nghĩa 'đã đến'; sau 'der' Nominativ đuôi -e. 'angekommenen' sai đuôi."
    },
    {
     "q": "Die seit Jahren Verluste ___ Firma wurde verkauft. (= die Firma, die seit Jahren Verluste macht)",
     "options": [
      "gemachte",
      "machenden",
      "gemachten",
      "machende"
     ],
     "answer": 3,
     "vi": "Công ty thua lỗ nhiều năm liền đã bị bán.",
     "explain": "Công ty tự 'làm' lỗ (chủ động) → Partizip I, Nominativ giống cái sau 'die' → -e. 'gemachte' mang nghĩa bị động, sai."
    },
    {
     "q": "Das Finanzamt prüft alle im letzten Jahr ___ Anträge. (= alle Anträge, die im letzten Jahr eingereicht wurden)",
     "options": [
      "eingereichten",
      "eingereichte",
      "einreichenden",
      "eingereicht"
     ],
     "answer": 0,
     "vi": "Cơ quan thuế kiểm tra tất cả các đơn đã nộp năm ngoái.",
     "explain": "Bị động → Partizip II; sau 'alle' tính từ mang đuôi yếu -en. 'eingereichte' là đuôi mạnh, sai sau 'alle'."
    },
    {
     "q": "Câu nào tương đương với: 'Der Beschluss, der vom Gericht erlassen wurde, ist rechtskräftig.'?",
     "options": [
      "Der erlassene vom Gericht Beschluss ist rechtskräftig.",
      "Der vom Gericht erlassende Beschluss ist rechtskräftig.",
      "Der vom Gericht erlassene Beschluss ist rechtskräftig.",
      "Der vom Gericht erlassenen Beschluss ist rechtskräftig."
     ],
     "answer": 2,
     "vi": "Quyết định do tòa án ban hành đã có hiệu lực pháp luật.",
     "explain": "Thành phần mở rộng 'vom Gericht' đứng trước Partizip II 'erlassene' (Nominativ → -e). 'erlassende' là Partizip I, mang nghĩa chủ động."
    },
    {
     "q": "Mit dem von der Behörde ___ Bescheid war er nicht einverstanden.",
     "options": [
      "erlassene",
      "erlassenem",
      "erlassendem",
      "erlassenen"
     ],
     "answer": 3,
     "vi": "Anh ấy không đồng ý với quyết định hành chính do cơ quan ban hành.",
     "explain": "Sau 'mit dem' (Dativ, có mạo từ xác định) tính từ mang đuôi yếu -en. 'erlassenem' là đuôi mạnh, chỉ dùng khi không có mạo từ."
    },
    {
     "q": "Die noch zu ___ Fragen werden morgen besprochen. (= die Fragen, die noch geklärt werden müssen)",
     "options": [
      "klärenden",
      "geklärten",
      "klärende",
      "klären"
     ],
     "answer": 0,
     "vi": "Những câu hỏi còn cần được làm rõ sẽ được thảo luận vào ngày mai.",
     "explain": "'zu + Partizip I' (zu klärend) và đuôi -en sau 'die' số nhiều. 'geklärten' nghĩa là 'đã được làm rõ', trái với ý câu."
    },
    {
     "q": "Câu nào tương đương với: 'Die in der Kanzlei arbeitenden Juristen sind überlastet.'?",
     "options": [
      "Die Juristen, die in der Kanzlei gearbeitet werden, sind überlastet.",
      "Die Juristen, die in der Kanzlei arbeitend sind, sind überlastet.",
      "Die Juristen, die in der Kanzlei arbeiten, sind überlastet.",
      "Die Juristen, denen in der Kanzlei arbeiten, sind überlastet."
     ],
     "answer": 2,
     "vi": "Các luật gia làm việc tại văn phòng luật bị quá tải.",
     "explain": "Partizip I 'arbeitend' tương ứng với mệnh đề quan hệ chủ động ở thì hiện tại: 'die ... arbeiten'. Dạng bị động 'gearbeitet werden' sai nghĩa và sai ngữ pháp."
    },
    {
     "q": "Die stark ___ Arbeitslosigkeit beunruhigt die Politik. (= die Arbeitslosigkeit, die stark gestiegen ist)",
     "options": [
      "steigende",
      "gestiegene",
      "gestiegenen",
      "gestiegen"
     ],
     "answer": 1,
     "vi": "Tỷ lệ thất nghiệp đã tăng mạnh khiến giới chính trị lo ngại.",
     "explain": "'steigen' chia với sein → Partizip II 'gestiegen' = đã tăng; Nominativ sau 'die' → -e. 'steigende' nghĩa là 'đang tăng', không khớp 'gestiegen ist'."
    },
    {
     "q": "Die Höhe der vom Steuerpflichtigen ___ Vorauszahlungen wird jährlich festgesetzt. (= die Vorauszahlungen, die vom Steuerpflichtigen zu leisten sind)",
     "options": [
      "zu leistenden",
      "geleisteten",
      "zu leistende",
      "leistenden"
     ],
     "answer": 0,
     "vi": "Mức tiền nộp thuế trước mà người nộp thuế phải nộp được ấn định hằng năm.",
     "explain": "'sein + zu' tương ứng với 'zu + Partizip I'; sau 'der' (Genitiv số nhiều) đuôi -en. 'zu leistende' sai đuôi."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Die seit dem 1. Januar gegoltenen Vorschriften sind streng.",
      "Die geltenden seit dem 1. Januar Vorschriften sind streng.",
      "Die seit dem 1. Januar geltende Vorschriften sind streng.",
      "Die seit dem 1. Januar geltenden Vorschriften sind streng."
     ],
     "answer": 3,
     "vi": "Các quy định có hiệu lực từ ngày 1 tháng 1 rất nghiêm ngặt.",
     "explain": "'gelten' chia với haben nên chỉ dùng Partizip I 'geltend' làm định ngữ; đuôi -en sau 'die' số nhiều. 'gegoltenen' sai vì Partizip II của động từ nội động đi với haben không làm định ngữ được."
    },
    {
     "q": "Der dem Kläger ___ Steuerbescheid enthielt einen Fehler. (= der Steuerbescheid, der dem Kläger zugestellt worden war)",
     "options": [
      "zustellende",
      "zugestellten",
      "zugestellte",
      "zugestellt"
     ],
     "answer": 2,
     "vi": "Quyết định thuế đã được tống đạt cho nguyên đơn có một lỗi.",
     "explain": "Bị động, đã hoàn thành → Partizip II; sau 'der' Nominativ → -e. 'zustellende' là Partizip I, nghĩa chủ động."
    },
    {
     "q": "Ein nicht zu ___ Risiko besteht darin, dass die Frist versäumt wird. (= ein Risiko, das man nicht unterschätzen darf)",
     "options": [
      "unterschätzendes",
      "unterschätzende",
      "unterschätztes",
      "unterschätzenden"
     ],
     "answer": 0,
     "vi": "Một rủi ro không thể xem nhẹ là việc bỏ lỡ thời hạn.",
     "explain": "'nicht zu + Partizip I' = không được/không thể; sau 'ein' (trung tính, Nominativ) đuôi mạnh -es. 'unterschätztes' là Partizip II, nghĩa 'đã bị xem nhẹ'."
    }
   ]
  },
  {
   "title": "Văn phong danh từ (Nominalstil)",
   "intro": "Văn bản pháp lý, hành chính thường chuyển mệnh đề (Verbalstil) thành cụm danh từ (Nominalstil):\nĐộng từ → danh từ (prüfen → die Prüfung; in Kraft treten → das Inkrafttreten); trạng từ → tính từ (drastisch erhöhen → die drastische Erhöhung).\nChủ ngữ/tân ngữ → Genitivattribut: Die Regierung entscheidet → die Entscheidung der Regierung; Der Antrag wird geprüft → die Prüfung des Antrags. Tác nhân bị động → durch + Akk: durch die Behörde.\nGiới từ của động từ/tính từ được giữ: verzichten auf → der Verzicht auf; abhängig von → die Abhängigkeit von; beantragen → der Antrag auf.\nLiên từ → giới từ: weil → wegen/aufgrund + Gen; obwohl → trotz + Gen; wenn → bei + Dat / im Falle + Gen; nachdem → nach + Dat; bevor → vor + Dat; während → während + Gen; damit → zu + Dat (zur/zum); indem → durch + Akk.",
   "questions": [
    {
     "q": "Weil die Preise steigen, sparen viele Haushalte. → ___ der steigenden Preise sparen viele Haushalte.",
     "options": [
      "Trotz",
      "Nach",
      "Wegen",
      "Bei"
     ],
     "answer": 2,
     "vi": "Do giá cả tăng, nhiều hộ gia đình tiết kiệm.",
     "explain": "'weil' (nguyên nhân) → 'wegen' + Genitiv. 'Trotz' tương ứng với 'obwohl', nghĩa ngược lại."
    },
    {
     "q": "Obwohl es stark regnete, fand die Veranstaltung statt. → ___ des starken Regens fand die Veranstaltung statt.",
     "options": [
      "Wegen",
      "Bei",
      "Seit",
      "Trotz"
     ],
     "answer": 3,
     "vi": "Mặc dù mưa to, sự kiện vẫn diễn ra.",
     "explain": "'obwohl' (nhượng bộ) → 'trotz' + Genitiv. 'Wegen' chỉ nguyên nhân, sai nghĩa."
    },
    {
     "q": "Die Regierung entscheidet über den Haushalt. → die Entscheidung ___ Regierung über den Haushalt",
     "options": [
      "die",
      "der",
      "dem",
      "des"
     ],
     "answer": 1,
     "vi": "quyết định của chính phủ về ngân sách",
     "explain": "Chủ ngữ trở thành Genitivattribut: 'die Regierung' → 'der Regierung'. 'des' là Genitiv giống đực/trung, sai giống."
    },
    {
     "q": "Nachdem der Vertrag unterzeichnet worden war, begann die Arbeit. → Nach ___ des Vertrags begann die Arbeit.",
     "options": [
      "die Unterzeichnung",
      "der Unterzeichnen",
      "des Unterzeichnung",
      "der Unterzeichnung"
     ],
     "answer": 3,
     "vi": "Sau khi ký kết hợp đồng, công việc bắt đầu.",
     "explain": "'nach' đi với Dativ; 'die Unterzeichnung' (giống cái) → 'der Unterzeichnung'. 'die Unterzeichnung' sai cách."
    },
    {
     "q": "Der Antrag wird von der Behörde geprüft. → die Prüfung des Antrags ___ die Behörde",
     "options": [
      "durch",
      "von",
      "bei",
      "mit"
     ],
     "answer": 0,
     "vi": "việc cơ quan nhà nước xem xét đơn",
     "explain": "Trong Nominalstil, tác nhân của câu bị động được diễn đạt bằng 'durch' + Akkusativ. 'von' cần Dativ ('von der Behörde') và không khớp với 'die'."
    },
    {
     "q": "Die Steuern wurden drastisch erhöht. → die ___ Erhöhung der Steuern",
     "options": [
      "drastisch",
      "drastischen",
      "drastische",
      "drastischer"
     ],
     "answer": 2,
     "vi": "việc tăng thuế mạnh",
     "explain": "Trạng từ chuyển thành tính từ đứng trước danh từ và chia đuôi: 'die drastische Erhöhung'. 'drastisch' không chia đuôi là sai."
    },
    {
     "q": "Sie verzichtet auf das Erbe. → ihr Verzicht ___ das Erbe",
     "options": [
      "an",
      "über",
      "für",
      "auf"
     ],
     "answer": 3,
     "vi": "việc bà ấy từ chối nhận thừa kế",
     "explain": "Danh từ giữ giới từ của động từ: verzichten auf → der Verzicht auf. 'für' là lỗi thường gặp nhưng sai."
    },
    {
     "q": "Der Mieter beantragt eine Mietminderung. → der Antrag des Mieters ___ eine Mietminderung",
     "options": [
      "auf",
      "nach",
      "über",
      "zu"
     ],
     "answer": 0,
     "vi": "đơn đề nghị giảm tiền thuê nhà của người thuê",
     "explain": "Cố định: der Antrag auf + Akkusativ. 'nach' không đi với 'Antrag'."
    },
    {
     "q": "Damit die Verfahren beschleunigt werden, wurden neue Richter eingestellt. → ___ Beschleunigung der Verfahren wurden neue Richter eingestellt.",
     "options": [
      "Zum",
      "Zu",
      "Zur",
      "Um"
     ],
     "answer": 2,
     "vi": "Để đẩy nhanh các thủ tục tố tụng, các thẩm phán mới đã được tuyển dụng.",
     "explain": "'damit' (mục đích) → 'zu' + Dativ; 'die Beschleunigung' giống cái → 'zur'. 'Zum' dùng cho giống đực/trung."
    },
    {
     "q": "Indem man die Steuern senkt, soll die Wirtschaft angekurbelt werden. → ___ Senkung der Steuern soll die Wirtschaft angekurbelt werden.",
     "options": [
      "Durch der",
      "Durch die",
      "Indem die",
      "Bei die"
     ],
     "answer": 1,
     "vi": "Thông qua việc giảm thuế, nền kinh tế sẽ được kích thích.",
     "explain": "'indem' (phương thức) → 'durch' + Akkusativ: 'durch die Senkung'. 'Durch der' sai cách vì 'durch' luôn đi với Akkusativ."
    },
    {
     "q": "Wenn der Vertrag gekündigt wird, ist eine Frist von drei Monaten einzuhalten. → Im Falle ___ ist eine Frist von drei Monaten einzuhalten.",
     "options": [
      "einer Kündigung des Vertrags",
      "einer Kündigung dem Vertrag",
      "eine Kündigung des Vertrags",
      "einer Kündigung den Vertrag"
     ],
     "answer": 0,
     "vi": "Trong trường hợp chấm dứt hợp đồng, phải tuân thủ thời hạn ba tháng.",
     "explain": "'im Falle' + Genitiv ('einer Kündigung'), và tân ngữ 'den Vertrag' thành Genitivattribut 'des Vertrags'. 'dem Vertrag' sai cách."
    },
    {
     "q": "Câu nào là dạng danh từ hoá đúng của: 'Das Gericht hat das Urteil aufgehoben.'?",
     "options": [
      "die Aufhebung des Gerichts durch das Urteil",
      "die Aufhebung das Urteil vom Gericht",
      "das Aufheben dem Urteil durch das Gericht",
      "die Aufhebung des Urteils durch das Gericht"
     ],
     "answer": 3,
     "vi": "việc tòa án hủy bỏ bản án",
     "explain": "Tân ngữ 'das Urteil' → Genitiv 'des Urteils', tác nhân 'das Gericht' → 'durch das Gericht'. Đảo hai vai trò làm thay đổi hoàn toàn nghĩa."
    },
    {
     "q": "Bevor das Gesetz in Kraft tritt, muss der Bundesrat zustimmen. → Vor ___ des Gesetzes muss der Bundesrat zustimmen.",
     "options": [
      "der Inkrafttretung",
      "dem Inkrafttretens",
      "dem Inkrafttreten",
      "das Inkrafttreten"
     ],
     "answer": 2,
     "vi": "Trước khi luật có hiệu lực, Hội đồng Liên bang phải tán thành.",
     "explain": "'in Kraft treten' được danh từ hoá thành 'das Inkrafttreten' (trung tính); 'vor' + Dativ → 'dem Inkrafttreten'. 'Inkrafttretung' không tồn tại."
    },
    {
     "q": "Er ist finanziell von seinen Eltern abhängig. → seine finanzielle Abhängigkeit ___ seinen Eltern",
     "options": [
      "von",
      "an",
      "zu",
      "bei"
     ],
     "answer": 0,
     "vi": "sự phụ thuộc tài chính của anh ấy vào cha mẹ",
     "explain": "Giới từ của tính từ được giữ nguyên: abhängig von → die Abhängigkeit von. 'an' là lỗi thường gặp do ảnh hưởng của các cấu trúc khác."
    },
    {
     "q": "Câu nào chuyển đúng sang Nominalstil: 'Während die Verhandlungen geführt wurden, kam es zu Protesten.'?",
     "options": [
      "Während die Verhandlungen kam es zu Protesten.",
      "Während der Verhandlungen kam es zu Protesten.",
      "Bei der Verhandlungen kam es zu Protesten.",
      "Durch die Verhandlungen kam es zu Protesten."
     ],
     "answer": 1,
     "vi": "Trong lúc diễn ra các cuộc đàm phán, đã xảy ra biểu tình.",
     "explain": "Giới từ 'während' đi với Genitiv: 'während der Verhandlungen'. 'Durch die Verhandlungen' đổi nghĩa thành nguyên nhân."
    }
   ]
  },
  {
   "title": "Cụm động từ chức năng (Funktionsverbgefüge)",
   "intro": "Funktionsverbgefüge gồm một danh từ (thường là danh từ hoá của động từ) + một động từ chức năng gần như mất nghĩa riêng. Chúng rất phổ biến trong văn bản pháp lý, hành chính.\neine Entscheidung treffen (= entscheiden); einen Antrag stellen (= beantragen); Kritik üben (= kritisieren); Maßnahmen ergreifen/treffen\nin Kraft treten (có hiệu lực); zur Anwendung kommen (= angewendet werden); zur Sprache kommen/bringen; zum Abschluss bringen (= abschließen)\nin Betracht ziehen (= erwägen); in Frage stellen (= bezweifeln); zur Verfügung stellen/stehen; unter Druck setzen/geraten\nRücksicht nehmen auf; Bezug nehmen auf; in Anspruch nehmen; Einfluss nehmen auf.\nDanh từ và động từ đi thành cặp cố định – không thay bằng động từ khác (KHÔNG nói: eine Entscheidung machen).",
   "questions": [
    {
     "q": "Wir müssen bis morgen eine Entscheidung ___.",
     "options": [
      "machen",
      "nehmen",
      "geben",
      "treffen"
     ],
     "answer": 3,
     "vi": "Chúng ta phải đưa ra quyết định trước ngày mai.",
     "explain": "Cặp cố định là 'eine Entscheidung treffen'. 'machen' là lỗi dịch từ tiếng Anh 'make a decision'."
    },
    {
     "q": "Er hat beim Finanzamt einen Antrag auf Fristverlängerung ___.",
     "options": [
      "gemacht",
      "gestellt",
      "gegeben",
      "getan"
     ],
     "answer": 1,
     "vi": "Anh ấy đã nộp đơn xin gia hạn thời hạn lên cơ quan thuế.",
     "explain": "'einen Antrag stellen' = beantragen. 'gemacht' không phải là động từ chức năng chuẩn cho 'Antrag'."
    },
    {
     "q": "Das neue Gesetz ___ am 1. Januar in Kraft.",
     "options": [
      "kommt",
      "geht",
      "steht",
      "tritt"
     ],
     "answer": 3,
     "vi": "Luật mới có hiệu lực từ ngày 1 tháng 1.",
     "explain": "Cố định: 'in Kraft treten'. 'kommt in Kraft' là lỗi thường gặp nhưng sai."
    },
    {
     "q": "Die Opposition ___ scharfe Kritik an der Reform.",
     "options": [
      "übt",
      "macht",
      "gibt",
      "stellt"
     ],
     "answer": 0,
     "vi": "Phe đối lập chỉ trích gay gắt cuộc cải cách.",
     "explain": "'Kritik üben an + Dativ' = kritisieren. 'macht Kritik' không phải văn phong chuẩn."
    },
    {
     "q": "Die Firma ___ den Mitarbeitern Laptops zur Verfügung.",
     "options": [
      "setzt",
      "legt",
      "stellt",
      "gibt"
     ],
     "answer": 2,
     "vi": "Công ty cung cấp máy tính xách tay cho nhân viên.",
     "explain": "'zur Verfügung stellen' = cung cấp, đặt dưới quyền sử dụng. 'gibt ... zur Verfügung' sai cụm cố định."
    },
    {
     "q": "Diese Regelung ___ nur in Ausnahmefällen zur Anwendung.",
     "options": [
      "tritt",
      "geht",
      "nimmt",
      "kommt"
     ],
     "answer": 3,
     "vi": "Quy định này chỉ được áp dụng trong những trường hợp ngoại lệ.",
     "explain": "'zur Anwendung kommen' = angewendet werden (nghĩa bị động). 'tritt' chỉ đi với 'in Kraft'."
    },
    {
     "q": "Wir sollten auch eine außergerichtliche Einigung in Betracht ___.",
     "options": [
      "ziehen",
      "nehmen",
      "stellen",
      "bringen"
     ],
     "answer": 0,
     "vi": "Chúng ta cũng nên cân nhắc một thỏa thuận ngoài tòa án.",
     "explain": "'in Betracht ziehen' = erwägen (cân nhắc). 'in Betracht nehmen' không tồn tại."
    },
    {
     "q": "Bitte ___ Sie Rücksicht auf die anderen Mieter.",
     "options": [
      "geben",
      "machen",
      "nehmen",
      "tragen"
     ],
     "answer": 2,
     "vi": "Xin quý vị hãy quan tâm, tôn trọng những người thuê nhà khác.",
     "explain": "Cố định: 'Rücksicht nehmen auf + Akk'. 'machen' là lỗi dịch từng chữ."
    },
    {
     "q": "Der Anwalt ___ in seinem Schreiben Bezug auf das Urteil vom 3. März.",
     "options": [
      "gibt",
      "nimmt",
      "stellt",
      "zieht"
     ],
     "answer": 1,
     "vi": "Luật sư dẫn chiếu đến bản án ngày 3 tháng 3 trong văn bản của mình.",
     "explain": "'Bezug nehmen auf' = sich beziehen auf (dẫn chiếu). 'stellt Bezug' không tồn tại."
    },
    {
     "q": "Die Verhandlungen konnten erfolgreich zum Abschluss ___ werden.",
     "options": [
      "gebracht",
      "gekommen",
      "gestellt",
      "gesetzt"
     ],
     "answer": 0,
     "vi": "Các cuộc đàm phán đã có thể được kết thúc thành công.",
     "explain": "'zum Abschluss bringen' (chủ động) → bị động 'zum Abschluss gebracht werden'. 'gekommen' không dùng được trong bị động với 'werden'."
    },
    {
     "q": "Die Regierung hat gegen die Steuerhinterziehung Maßnahmen ___.",
     "options": [
      "genommen",
      "gefasst",
      "gegriffen",
      "ergriffen"
     ],
     "answer": 3,
     "vi": "Chính phủ đã áp dụng các biện pháp chống trốn thuế.",
     "explain": "Cố định: 'Maßnahmen ergreifen' (hoặc 'treffen'). 'gefasst' chỉ đi với 'einen Beschluss fassen'."
    },
    {
     "q": "Câu nào cùng nghĩa với: 'Das Thema wurde in der Sitzung angesprochen.'?",
     "options": [
      "Das Thema brachte in der Sitzung zur Sprache.",
      "Das Thema kam in der Sitzung in Sprache.",
      "Das Thema kam in der Sitzung zur Sprache.",
      "Das Thema stellte in der Sitzung zur Sprache."
     ],
     "answer": 2,
     "vi": "Chủ đề đó đã được nêu ra trong cuộc họp.",
     "explain": "'zur Sprache kommen' có nghĩa bị động (được nêu ra); 'zur Sprache bringen' là chủ động và cần chủ ngữ là người nêu vấn đề."
    },
    {
     "q": "Der Mandant hat die Beratung des Anwalts in Anspruch ___.",
     "options": [
      "genommen",
      "gestellt",
      "gezogen",
      "gebracht"
     ],
     "answer": 0,
     "vi": "Thân chủ đã sử dụng dịch vụ tư vấn của luật sư.",
     "explain": "'in Anspruch nehmen' = sử dụng (dịch vụ, quyền lợi). 'in Anspruch gestellt' không tồn tại."
    },
    {
     "q": "Die Kanzlei wurde durch die neue Konkurrenz stark unter Druck ___.",
     "options": [
      "gestellt",
      "gesetzt",
      "gezogen",
      "gelegt"
     ],
     "answer": 1,
     "vi": "Văn phòng luật bị đối thủ cạnh tranh mới gây áp lực mạnh.",
     "explain": "'unter Druck setzen' → bị động 'unter Druck gesetzt werden'. 'gestellt' là lỗi lẫn với 'in Frage stellen'."
    },
    {
     "q": "Die Glaubwürdigkeit des Zeugen wurde von der Verteidigung in Frage ___.",
     "options": [
      "gezogen",
      "gekommen",
      "gestellt",
      "genommen"
     ],
     "answer": 2,
     "vi": "Độ tin cậy của nhân chứng đã bị bên bào chữa đặt dấu hỏi.",
     "explain": "'in Frage stellen' = bezweifeln. 'in Frage gezogen' là lỗi lẫn với 'in Zweifel ziehen'; 'in Frage kommen' không dùng ở bị động."
    }
   ]
  },
  {
   "title": "Trạng từ liên kết (Konjunktionaladverbien)",
   "intro": "Trạng từ liên kết nối hai câu chính về mặt nghĩa nhưng là một thành phần câu:\nỞ vị trí 1 → động từ đứng ngay sau: Folglich ist der Bescheid rechtskräftig.\nHoặc trong Mittelfeld: Der Bescheid ist folglich rechtskräftig. 'hingegen', 'indessen' cũng có thể đứng ngay sau chủ ngữ: Er hingegen zahlt nie.\nKhác với liên từ (und, aber, denn – vị trí 0, không đổi trật tự) và liên từ phụ thuộc (weil, obwohl – động từ cuối câu).\nHệ quả: folglich, demzufolge, mithin, somit, demnach\nĐối lập: hingegen, dagegen, indessen (cũng = trong khi đó)\nNhượng bộ: gleichwohl, dennoch, trotzdem\nHạn chế: allerdings (tuy nhiên).",
   "questions": [
    {
     "q": "Der Antrag war unvollständig. ___ wurde er abgelehnt.",
     "options": [
      "Hingegen",
      "Folglich",
      "Gleichwohl",
      "Allerdings"
     ],
     "answer": 1,
     "vi": "Đơn không đầy đủ. Vì vậy nó đã bị từ chối.",
     "explain": "Bị từ chối là hệ quả của việc đơn thiếu → 'Folglich'. 'Gleichwohl' (tuy vậy) mang nghĩa nhượng bộ, không hợp logic."
    },
    {
     "q": "Die Einspruchsfrist ist abgelaufen. Folglich ___.",
     "options": [
      "der Bescheid ist rechtskräftig",
      "der Bescheid rechtskräftig ist",
      "rechtskräftig der Bescheid ist",
      "ist der Bescheid rechtskräftig"
     ],
     "answer": 3,
     "vi": "Thời hạn khiếu nại đã hết. Do đó quyết định đã có hiệu lực pháp luật.",
     "explain": "'Folglich' chiếm vị trí 1 nên động từ chia ngôi phải đứng ngay sau. 'der Bescheid ist' sai vì coi 'folglich' như liên từ vị trí 0."
    },
    {
     "q": "Herr Klein zahlt seine Steuern pünktlich, sein Bruder ___ ist ständig im Rückstand.",
     "options": [
      "hingegen",
      "folglich",
      "mithin",
      "deshalb"
     ],
     "answer": 0,
     "vi": "Ông Klein nộp thuế đúng hạn, còn anh trai ông thì liên tục nợ đọng.",
     "explain": "Hai người được so sánh đối lập → 'hingegen', có thể đứng ngay sau chủ ngữ. 'folglich' chỉ hệ quả, sai nghĩa."
    },
    {
     "q": "Das Angebot ist günstig, es hat ___ einen Haken.",
     "options": [
      "folglich",
      "demzufolge",
      "allerdings",
      "mithin"
     ],
     "answer": 2,
     "vi": "Lời chào hàng rẻ, tuy nhiên nó có một điểm khúc mắc.",
     "explain": "'allerdings' đưa ra hạn chế cho câu trước. Các trạng từ chỉ hệ quả như 'folglich' không hợp logic."
    },
    {
     "q": "Laut Gutachten ist das Gebäude einsturzgefährdet. ___ muss es sofort geräumt werden.",
     "options": [
      "Indessen",
      "Gleichwohl",
      "Allerdings",
      "Demzufolge"
     ],
     "answer": 3,
     "vi": "Theo báo cáo giám định, tòa nhà có nguy cơ sập. Do đó nó phải được sơ tán ngay.",
     "explain": "Việc sơ tán là hệ quả của kết quả giám định → 'Demzufolge'. 'Gleichwohl' (mặc dù vậy) sai logic."
    },
    {
     "q": "Die Beweislage war dünn. ___ wurde der Angeklagte verurteilt.",
     "options": [
      "Gleichwohl",
      "Folglich",
      "Demzufolge",
      "Mithin"
     ],
     "answer": 0,
     "vi": "Chứng cứ rất mỏng. Tuy vậy bị cáo vẫn bị kết án.",
     "explain": "Bị kết án dù chứng cứ mỏng là quan hệ nhượng bộ → 'Gleichwohl' (= dennoch). 'Folglich' sẽ ngụ ý chứng cứ mỏng dẫn đến kết án, vô lý."
    },
    {
     "q": "Câu nào có vị trí trạng từ liên kết đúng?",
     "options": [
      "Die Einnahmen sind gestiegen; indessen die Kosten haben sich verdoppelt.",
      "Die Einnahmen sind gestiegen; die Kosten indessen sich verdoppelt haben.",
      "Die Einnahmen sind gestiegen; die Kosten haben sich indessen verdoppelt.",
      "Die Einnahmen sind gestiegen; indessen haben verdoppelt sich die Kosten."
     ],
     "answer": 2,
     "vi": "Doanh thu đã tăng; trong khi đó chi phí đã tăng gấp đôi.",
     "explain": "'indessen' ở đây đứng trong Mittelfeld, động từ vẫn ở vị trí 2. Nếu đặt 'indessen' ở vị trí 1 thì động từ phải theo ngay sau, không thể là chủ ngữ."
    },
    {
     "q": "Der Vertrag wurde nicht unterschrieben; er ist ___ unwirksam.",
     "options": [
      "hingegen",
      "mithin",
      "gleichwohl",
      "indessen"
     ],
     "answer": 1,
     "vi": "Hợp đồng đã không được ký; do đó nó vô hiệu.",
     "explain": "'mithin' (= folglich) diễn tả kết luận logic, rất thường dùng trong văn phong pháp lý. 'gleichwohl' là nhượng bộ, sai logic."
    },
    {
     "q": "Er hatte alle Unterlagen eingereicht, ___ fehlte noch eine Unterschrift.",
     "options": [
      "allerdings",
      "aber",
      "obwohl",
      "denn"
     ],
     "answer": 0,
     "vi": "Anh ấy đã nộp mọi giấy tờ, tuy nhiên vẫn còn thiếu một chữ ký.",
     "explain": "'allerdings' chiếm vị trí 1 nên động từ 'fehlte' đứng ngay sau. 'aber' là liên từ vị trí 0, cần 'aber es fehlte'."
    },
    {
     "q": "Der Richter verlas das Urteil. Der Angeklagte ___ blickte starr zu Boden.",
     "options": [
      "folglich",
      "mithin",
      "demzufolge",
      "indessen"
     ],
     "answer": 3,
     "vi": "Thẩm phán đọc bản án. Trong khi đó bị cáo nhìn trân trân xuống đất.",
     "explain": "'indessen' ở đây mang nghĩa 'trong khi đó' và có thể đứng ngay sau chủ ngữ. 'folglich' chỉ hệ quả, không hợp nghĩa."
    },
    {
     "q": "Die Steuerschuld ist verjährt. Das Finanzamt kann ___ keine Zahlung mehr verlangen.",
     "options": [
      "gleichwohl",
      "hingegen",
      "demzufolge",
      "indessen"
     ],
     "answer": 2,
     "vi": "Khoản nợ thuế đã hết thời hiệu. Do đó cơ quan thuế không thể đòi thanh toán nữa.",
     "explain": "Không thể đòi tiền là hệ quả của thời hiệu → 'demzufolge'. 'gleichwohl' diễn tả nhượng bộ, mâu thuẫn với logic."
    },
    {
     "q": "Die Zinsen sind niedrig; ___ investieren viele Anleger in Immobilien.",
     "options": [
      "folglich",
      "weil",
      "sodass",
      "obwohl"
     ],
     "answer": 0,
     "vi": "Lãi suất thấp; vì thế nhiều nhà đầu tư đầu tư vào bất động sản.",
     "explain": "Sau gạch nối là câu chính có động từ ở vị trí 2 → cần trạng từ liên kết 'folglich'. 'sodass' là liên từ phụ thuộc, đòi động từ ở cuối câu."
    },
    {
     "q": "Die Gesetzeslage ist eindeutig, und ___ halten sich nicht alle Unternehmen daran.",
     "options": [
      "obwohl",
      "gleichwohl",
      "trotz",
      "dennoch dass"
     ],
     "answer": 1,
     "vi": "Tình trạng pháp lý rất rõ ràng, thế nhưng không phải doanh nghiệp nào cũng tuân thủ.",
     "explain": "Sau 'und' (vị trí 0), 'gleichwohl' chiếm vị trí 1 và động từ 'halten' theo ngay sau. 'obwohl' là liên từ phụ thuộc, đòi động từ cuối câu."
    },
    {
     "q": "Die Steuerreform entlastet Familien; ___.",
     "options": [
      "hingegen Singles werden stärker belastet",
      "hingegen Singles stärker belastet werden",
      "Singles hingegen werden stärker belastet",
      "Singles werden hingegen belastet stärker"
     ],
     "answer": 2,
     "vi": "Cải cách thuế giảm gánh nặng cho các gia đình; trong khi đó người độc thân bị đánh thuế nặng hơn.",
     "explain": "'hingegen' có thể đứng ngay sau chủ ngữ ('Singles hingegen') rồi đến động từ. Nếu 'hingegen' ở vị trí 1 thì động từ phải theo ngay sau, không phải chủ ngữ."
    },
    {
     "q": "Alle Voraussetzungen des § 433 BGB liegen vor; ein wirksamer Kaufvertrag ist ___ zustande gekommen.",
     "options": [
      "indessen",
      "gleichwohl",
      "hingegen",
      "mithin"
     ],
     "answer": 3,
     "vi": "Mọi điều kiện của § 433 BGB đều được đáp ứng; do đó một hợp đồng mua bán có hiệu lực đã được xác lập.",
     "explain": "Kết luận rút ra từ việc các điều kiện được thỏa mãn → 'mithin', đặc trưng trong văn phong giải bài tập luật (Gutachtenstil). 'indessen' diễn tả đối lập."
    }
   ]
  },
  {
   "title": "Thay thế bị động nâng cao (Passiversatzformen)",
   "intro": "Có nhiều cách diễn đạt nghĩa bị động mà không dùng 'werden':\nsich lassen + Infinitiv (= kann ... werden): Das Problem lässt sich lösen. Die Formulare lassen sich online ausfüllen.\nTính từ -bar / -lich / -fähig (= kann ... werden): lösbar, kündbar, absetzbar, verständlich, zustimmungsfähig.\nsein + zu + Infinitiv (= kann/muss ... werden): Die Steuer ist bis 31. Juli zu zahlen. Die Frist ist einzuhalten.\nhaben + zu + Infinitiv (chủ động, = muss): Der Mieter hat die Nebenkosten zu zahlen.\nbekommen/erhalten + Partizip II (bị động Dativ): Ihm wurden die Kosten erstattet → Er bekam die Kosten erstattet.\nLưu ý: động từ tách được đặt 'zu' ở giữa: abzugeben, beizufügen, einzuhalten.",
   "questions": [
    {
     "q": "Das Problem kann gelöst werden. → Das Problem ___ sich lösen.",
     "options": [
      "lassen",
      "ist",
      "wird",
      "lässt"
     ],
     "answer": 3,
     "vi": "Vấn đề có thể giải quyết được.",
     "explain": "'sich lassen + Infinitiv' = kann ... werden; chủ ngữ số ít → 'lässt'. 'lassen' sai chia ngôi."
    },
    {
     "q": "Der Text kann leicht gelesen werden. → Der Text ist leicht ___.",
     "options": [
      "lesbar",
      "lesend",
      "gelesen",
      "lesig"
     ],
     "answer": 0,
     "vi": "Văn bản này dễ đọc.",
     "explain": "Hậu tố '-bar' = có thể được làm: lesbar. 'gelesen' nghĩa là 'đã được đọc', không mang nghĩa khả năng."
    },
    {
     "q": "Die Steuererklärung muss bis zum 31. Juli abgegeben werden. → Die Steuererklärung ist bis zum 31. Juli ___.",
     "options": [
      "zu abgeben",
      "abgegeben",
      "abzugeben",
      "abzugebend"
     ],
     "answer": 2,
     "vi": "Tờ khai thuế phải được nộp trước ngày 31 tháng 7.",
     "explain": "'sein + zu + Infinitiv'; với động từ tách được, 'zu' chen vào giữa: 'abzugeben'. 'zu abgeben' sai vị trí của 'zu'."
    },
    {
     "q": "Der Mieter muss die Nebenkosten zahlen. → Der Mieter ___ die Nebenkosten zu zahlen.",
     "options": [
      "ist",
      "wird",
      "lässt",
      "hat"
     ],
     "answer": 3,
     "vi": "Người thuê nhà phải trả các chi phí phụ.",
     "explain": "Chủ ngữ là người thực hiện hành động (chủ động) → 'haben + zu'. 'ist ... zu zahlen' dùng khi chủ ngữ là đối tượng chịu tác động."
    },
    {
     "q": "Ihm wurden die Kosten erstattet. → Er ___ die Kosten erstattet.",
     "options": [
      "bekam",
      "wurde",
      "hatte",
      "ließ"
     ],
     "answer": 0,
     "vi": "Anh ấy đã được hoàn lại chi phí.",
     "explain": "Bị động Dativ: người nhận (Dativ) trở thành chủ ngữ với 'bekommen + Partizip II'. 'Er wurde ... erstattet' sai vì 'er' không phải là vật được hoàn trả."
    },
    {
     "q": "Diese Behauptung ist nicht ___. (= Sie kann nicht bewiesen werden.)",
     "options": [
      "beweislich",
      "bewiesen",
      "beweisbar",
      "beweisend"
     ],
     "answer": 2,
     "vi": "Khẳng định này không thể chứng minh được.",
     "explain": "'-bar' biểu thị khả năng bị động: beweisbar. 'bewiesen' chỉ trạng thái đã xảy ra, không phải khả năng."
    },
    {
     "q": "Die Formulare ___ sich auch online ausfüllen.",
     "options": [
      "lässt",
      "lassen",
      "sind",
      "werden"
     ],
     "answer": 1,
     "vi": "Các mẫu đơn cũng có thể điền trực tuyến.",
     "explain": "Chủ ngữ số nhiều 'die Formulare' → 'lassen sich'. 'lässt' là dạng số ít."
    },
    {
     "q": "Die Frist ___ unbedingt einzuhalten.",
     "options": [
      "ist",
      "hat",
      "lässt",
      "wird"
     ],
     "answer": 0,
     "vi": "Thời hạn nhất định phải được tuân thủ.",
     "explain": "Chủ ngữ 'die Frist' chịu tác động (bị động) → 'sein + zu'. 'hat ... einzuhalten' chỉ dùng khi chủ ngữ là người phải làm."
    },
    {
     "q": "Der Antragsteller ___ alle erforderlichen Nachweise beizufügen.",
     "options": [
      "ist",
      "sind",
      "lässt",
      "hat"
     ],
     "answer": 3,
     "vi": "Người nộp đơn phải đính kèm tất cả giấy tờ chứng minh cần thiết.",
     "explain": "Người nộp đơn là người thực hiện → 'haben + zu' (= muss beifügen). 'ist ... beizufügen' sẽ biến người nộp đơn thành vật được đính kèm."
    },
    {
     "q": "Der Kompromissvorschlag gilt als ___. (= Ihm kann zugestimmt werden.)",
     "options": [
      "zustimmbar",
      "zustimmlich",
      "zustimmungsfähig",
      "zugestimmt"
     ],
     "answer": 2,
     "vi": "Đề xuất thỏa hiệp được coi là có thể được tán thành.",
     "explain": "Với nhiều danh từ, khả năng được diễn đạt bằng '-fähig': zustimmungsfähig. 'zustimmbar' không tồn tại vì 'zustimmen' đi với Dativ, không có tân ngữ Akkusativ."
    },
    {
     "q": "Die Kündigung bekam er per Einschreiben ___.",
     "options": [
      "zugeschickt",
      "zuschicken",
      "zugeschicken",
      "zugeschickt worden"
     ],
     "answer": 0,
     "vi": "Anh ấy nhận được thư chấm dứt hợp đồng qua thư bảo đảm.",
     "explain": "Bị động với 'bekommen' cần Partizip II: zugeschickt. Thêm 'worden' là trộn với bị động 'werden', sai."
    },
    {
     "q": "Câu nào cùng nghĩa với: 'Der Vertrag kann jederzeit gekündigt werden.'?",
     "options": [
      "Der Vertrag hat jederzeit zu kündigen.",
      "Der Vertrag ist jederzeit kündbar.",
      "Der Vertrag lässt jederzeit kündigen.",
      "Der Vertrag ist jederzeit gekündigt."
     ],
     "answer": 1,
     "vi": "Hợp đồng có thể chấm dứt bất cứ lúc nào.",
     "explain": "'kündbar' = kann gekündigt werden. 'lässt ... kündigen' thiếu 'sich' nên sai."
    },
    {
     "q": "Die Begründung des Urteils ist für Laien kaum ___. (= Sie kann kaum verstanden werden.)",
     "options": [
      "verstanden",
      "verstandbar",
      "verständlich",
      "verständig"
     ],
     "answer": 2,
     "vi": "Phần lập luận của bản án hầu như không thể hiểu được đối với người không chuyên.",
     "explain": "'verständlich' = có thể hiểu được. 'verständig' là một từ khác, nghĩa là 'hiểu biết, khôn ngoan' (nói về người)."
    },
    {
     "q": "Câu nào là cách chuyển đúng của: 'Dem Kläger wurde Schadensersatz zugesprochen.'?",
     "options": [
      "Der Kläger wurde Schadensersatz zugesprochen.",
      "Dem Kläger bekam Schadensersatz zugesprochen.",
      "Der Kläger hatte Schadensersatz zuzusprechen.",
      "Der Kläger bekam Schadensersatz zugesprochen."
     ],
     "answer": 3,
     "vi": "Nguyên đơn được tuyên bồi thường thiệt hại.",
     "explain": "Trong bị động với 'bekommen', đối tượng Dativ trở thành chủ ngữ Nominativ. 'Der Kläger wurde ... zugesprochen' sai vì Dativ không thể thành chủ ngữ trong bị động 'werden'."
    },
    {
     "q": "Die Einwände der Verteidigung ___ sich nicht ohne Weiteres von der Hand weisen.",
     "options": [
      "lässt",
      "lassen",
      "sind",
      "können"
     ],
     "answer": 1,
     "vi": "Những phản đối của bên bào chữa không thể dễ dàng gạt bỏ.",
     "explain": "Chủ ngữ số nhiều 'die Einwände' → 'lassen sich' + Infinitiv. 'können sich ... weisen' sai vì 'weisen' ở đây không phải động từ phản thân."
    }
   ]
  },
  {
   "title": "Lời nói gián tiếp trang trọng (Redewiedergabe)",
   "intro": "Trong văn phong trang trọng (báo chí, luật, hành chính), lời nói gián tiếp dùng Konjunktiv I:\ner habe, er sei, er werde, er könne, er müsse, er solle; quá khứ: er habe ... gemacht / er sei ... gegangen; tương lai: er werde ... tun.\nNếu Konjunktiv I trùng với Indikativ (thường ở số nhiều: sie haben, sie werden) → dùng Konjunktiv II: sie hätten, sie würden.\nCâu mệnh lệnh → solle/möge; câu hỏi có/không → ob; câu hỏi W → từ để hỏi.\nGiới từ dẫn nguồn: laut + Dat/Gen (laut Gutachten); zufolge + Dat, đứng SAU danh từ (dem Bericht zufolge); nach + Dat (nach Angaben der Polizei, seiner Meinung nach).\nĐộng từ dẫn lời: behaupten, erklären, betonen, mitteilen, versichern, einräumen (thừa nhận), bestreiten (phủ nhận), bezweifeln; cấu trúc 'wie ... mitteilte'.",
   "questions": [
    {
     "q": "Die Sprecherin sagte, das Unternehmen ___ zahlungsfähig.",
     "options": [
      "sei",
      "seie",
      "sein",
      "seid"
     ],
     "answer": 0,
     "vi": "Người phát ngôn nói rằng công ty có khả năng thanh toán.",
     "explain": "Konjunktiv I của 'sein' ở ngôi thứ ba số ít là 'sei'. 'seie' là dạng không tồn tại."
    },
    {
     "q": "Der Minister erklärte, er ___ von nichts gewusst.",
     "options": [
      "hat",
      "haben",
      "habe",
      "sei"
     ],
     "answer": 2,
     "vi": "Ông bộ trưởng tuyên bố rằng ông ấy không hề biết gì.",
     "explain": "Quá khứ trong Konjunktiv I: 'habe' + Partizip II ('wissen' đi với haben). 'sei' sai trợ động từ."
    },
    {
     "q": "___ zufolge ist die Klage unbegründet.",
     "options": [
      "Des Gutachtens",
      "Das Gutachten",
      "Dem Gutachtens",
      "Dem Gutachten"
     ],
     "answer": 3,
     "vi": "Theo bản giám định, đơn kiện không có cơ sở.",
     "explain": "'zufolge' đứng sau danh từ và đi với Dativ: 'dem Gutachten zufolge'. 'Des Gutachtens' là Genitiv, dùng cho 'laut' hoặc 'gemäß', không dùng với 'zufolge' đứng sau."
    },
    {
     "q": "Die Anwälte behaupten, ihre Mandanten ___ unschuldig.",
     "options": [
      "seien",
      "seie",
      "sein",
      "sind"
     ],
     "answer": 0,
     "vi": "Các luật sư khẳng định rằng thân chủ của họ vô tội.",
     "explain": "Konjunktiv I số nhiều của 'sein' là 'seien' (khác Indikativ nên dùng được). 'sind' là Indikativ, không phù hợp văn phong trang trọng."
    },
    {
     "q": "Die Zeugen gaben an, sie ___ nichts gesehen.",
     "options": [
      "haben",
      "habe",
      "hätten",
      "hatten"
     ],
     "answer": 2,
     "vi": "Các nhân chứng khai rằng họ không nhìn thấy gì.",
     "explain": "Konjunktiv I 'sie haben' trùng với Indikativ nên phải thay bằng Konjunktiv II 'hätten'. 'habe' là dạng số ít."
    },
    {
     "q": "Der Mandant fragte, ___ er die Kosten selbst tragen müsse.",
     "options": [
      "dass",
      "ob",
      "wenn",
      "falls"
     ],
     "answer": 1,
     "vi": "Thân chủ hỏi liệu anh ta có phải tự chịu chi phí hay không.",
     "explain": "Câu hỏi có/không chuyển sang gián tiếp bằng 'ob'. 'wenn' nghĩa là 'khi/nếu', không dùng để dẫn câu hỏi."
    },
    {
     "q": "Der Richter forderte den Zeugen auf: 'Sprechen Sie lauter!' → Der Richter sagte, der Zeuge ___ lauter sprechen.",
     "options": [
      "solle",
      "soll",
      "sollen",
      "wolle"
     ],
     "answer": 0,
     "vi": "Thẩm phán nói rằng nhân chứng cần nói to hơn.",
     "explain": "Câu mệnh lệnh trong lời nói gián tiếp dùng 'solle' (Konjunktiv I). 'soll' là Indikativ, không phù hợp văn phong trang trọng."
    },
    {
     "q": "Die Regierung kündigte an, sie ___ die Steuern senken.",
     "options": [
      "wird",
      "werden",
      "wurde",
      "werde"
     ],
     "answer": 3,
     "vi": "Chính phủ tuyên bố sẽ giảm thuế.",
     "explain": "Tương lai trong Konjunktiv I: 'werde' + Infinitiv ('sie' = chính phủ, số ít). 'werden' sai chia ngôi."
    },
    {
     "q": "Seiner Meinung ___ ist das Urteil fehlerhaft.",
     "options": [
      "laut",
      "von",
      "nach",
      "über"
     ],
     "answer": 2,
     "vi": "Theo ý kiến của ông ấy, bản án có sai sót.",
     "explain": "Cụm cố định 'meiner/seiner Meinung nach' – 'nach' đứng sau. 'laut' luôn đứng trước danh từ và không đi với 'Meinung' như vậy."
    },
    {
     "q": "Der Angeklagte behauptete, er ___ zur Tatzeit im Ausland gewesen.",
     "options": [
      "sei",
      "habe",
      "ist",
      "war"
     ],
     "answer": 0,
     "vi": "Bị cáo khẳng định rằng vào thời điểm phạm tội anh ta đang ở nước ngoài.",
     "explain": "'gewesen' cần trợ động từ 'sein' → Konjunktiv I 'sei'. 'habe ... gewesen' sai trợ động từ."
    },
    {
     "q": "Der Vorstand ___, Fehler gemacht zu haben, wies aber jede persönliche Schuld zurück.",
     "options": [
      "bestritt",
      "räumte ein",
      "bezweifelte",
      "verweigerte"
     ],
     "answer": 1,
     "vi": "Ban giám đốc thừa nhận đã mắc sai lầm, nhưng bác bỏ mọi trách nhiệm cá nhân.",
     "explain": "'einräumen' = thừa nhận, hợp với 'aber ... zurück' phía sau. 'bestritt' (phủ nhận) không tạo được sự đối lập với 'aber'."
    },
    {
     "q": "Câu nào là lời gián tiếp đúng (văn phong trang trọng) của: Die Ministerin sagte: 'Wir haben keine Zeit verloren.'?",
     "options": [
      "Die Ministerin sagte, sie haben keine Zeit verloren.",
      "Die Ministerin sagte, wir hätten keine Zeit verloren.",
      "Die Ministerin sagte, sie hätten keine Zeit verloren.",
      "Die Ministerin sagte, sie hätten keine Zeit verliert."
     ],
     "answer": 2,
     "vi": "Bà bộ trưởng nói rằng họ đã không để mất thời gian.",
     "explain": "Đổi đại từ 'wir' → 'sie'; 'sie haben' trùng Indikativ nên dùng Konjunktiv II 'hätten' + Partizip II 'verloren'. Giữ 'wir' là sai vì người thuật lại không thuộc nhóm đó."
    },
    {
     "q": "Wie die Polizei ___, wurde der Verdächtige am Montag festgenommen.",
     "options": [
      "mitteilte sei",
      "teilte mit",
      "mitgeteilt",
      "mitteilte"
     ],
     "answer": 3,
     "vi": "Theo thông báo của cảnh sát, nghi phạm đã bị bắt vào thứ Hai.",
     "explain": "'wie' dẫn mệnh đề phụ nên động từ tách được viết liền ở cuối: 'mitteilte'. 'teilte mit' là trật tự của câu chính."
    },
    {
     "q": "___ Angaben des Statistischen Bundesamts sind die Steuereinnahmen gestiegen.",
     "options": [
      "Zufolge",
      "Nach",
      "Von",
      "Über"
     ],
     "answer": 1,
     "vi": "Theo số liệu của Tổng cục Thống kê Liên bang, nguồn thu thuế đã tăng.",
     "explain": "'nach Angaben + Genitiv' là cụm cố định để dẫn nguồn. 'zufolge' phải đứng sau danh từ, không đứng đầu."
    },
    {
     "q": "Die Bürger beklagten, sie ___ zu hohe Steuern zahlen.",
     "options": [
      "werden",
      "wurden",
      "würde",
      "würden"
     ],
     "answer": 3,
     "vi": "Người dân than phiền rằng họ phải đóng thuế quá cao.",
     "explain": "Konjunktiv I 'sie zahlen' và Konjunktiv II 'sie zahlten' đều trùng Indikativ, nên dùng 'würden' + Infinitiv. 'werden' là Indikativ và mang nghĩa tương lai."
    }
   ]
  },
  {
   "title": "Cấu tạo từ (Wortbildung)",
   "intro": "Tiền tố động từ: ver- (thay đổi, làm sai: verrechnen, verbrauchen), ent- (tách ra, loại bỏ: entlasten, entschärfen), zer- (làm vỡ vụn: zerbrechen, zerstören), miss- (sai, xấu: missverstehen, missbrauchen).\nHậu tố danh từ (đều giống cái): -ung (từ động từ: Prüfung), -heit (từ tính từ: Sicherheit, Freiheit), -keit (sau -ig, -lich, -bar, -sam: Zuständigkeit, Wirksamkeit), -schaft (nhóm, trạng thái: Mitgliedschaft, Gesellschaft).\nHậu tố tính từ: -bar (có thể được làm: absetzbar), -los (không có: arbeitslos), -ig, -lich (täglich, monatlich = lặp lại theo thời gian).\nTừ ghép: chữ cái nối -s- (Fugen-s) bắt buộc sau -ung, -heit, -keit, -schaft, -ion, -tät: Verwaltungsgericht, Wirtschaftsprüfer, Sicherheitsdienst; và sau một số từ như Arbeit: Arbeitsvertrag, arbeitslos. Không có -s- sau 'Steuer': Steuererklärung.",
   "questions": [
    {
     "q": "Ich habe mich bei der Abrechnung ___. (= falsch gerechnet)",
     "options": [
      "zerrechnet",
      "entrechnet",
      "verrechnet",
      "missrechnet"
     ],
     "answer": 2,
     "vi": "Tôi đã tính nhầm khi quyết toán.",
     "explain": "'sich verrechnen' = tính sai; tiền tố ver- ở đây mang nghĩa 'làm sai'. 'missrechnet' không tồn tại."
    },
    {
     "q": "Das Glas ist auf den Boden gefallen und ___.",
     "options": [
      "verbrochen",
      "entbrochen",
      "missbrochen",
      "zerbrochen"
     ],
     "answer": 3,
     "vi": "Cái ly rơi xuống sàn và vỡ tan.",
     "explain": "zer- = vỡ thành từng mảnh. 'verbrochen' (từ 'verbrechen') nghĩa là 'phạm tội', hoàn toàn khác nghĩa."
    },
    {
     "q": "Die neue Regelung soll kleine Unternehmen finanziell ___. (= von Lasten befreien)",
     "options": [
      "entlasten",
      "belasten",
      "zerlasten",
      "verlasten"
     ],
     "answer": 0,
     "vi": "Quy định mới nhằm giảm gánh nặng tài chính cho các doanh nghiệp nhỏ.",
     "explain": "ent- = loại bỏ, giải phóng khỏi: entlasten. 'belasten' mang nghĩa ngược lại (tạo gánh nặng)."
    },
    {
     "q": "Er hat meine Frage leider ___ und etwas ganz anderes beantwortet.",
     "options": [
      "entstanden",
      "misverstanden",
      "missverstanden",
      "zerstanden"
     ],
     "answer": 2,
     "vi": "Đáng tiếc là anh ấy đã hiểu sai câu hỏi của tôi và trả lời một điều hoàn toàn khác.",
     "explain": "miss- = sai: missverstehen → missverstanden (viết với 'ss'). 'misverstanden' sai chính tả."
    },
    {
     "q": "Seit der Insolvenz seiner Firma ist er ___.",
     "options": [
      "arbeitlos",
      "arbeitslos",
      "arbeitsbar",
      "arbeitig"
     ],
     "answer": 1,
     "vi": "Từ khi công ty của anh ấy phá sản, anh ấy thất nghiệp.",
     "explain": "-los = không có; với 'Arbeit' cần Fugen-s: arbeitslos. 'arbeitlos' thiếu -s-."
    },
    {
     "q": "Diese Kosten sind steuerlich ___. (= Sie können abgesetzt werden.)",
     "options": [
      "absetzbar",
      "absetzlich",
      "absetzig",
      "abgesetztlos"
     ],
     "answer": 0,
     "vi": "Các chi phí này có thể được khấu trừ thuế.",
     "explain": "-bar từ động từ = có thể được làm: absetzbar. 'absetzlich' không tồn tại."
    },
    {
     "q": "Für diese Frage ist das Finanzamt nicht zuständig. Die ___ liegt beim Bundeszentralamt für Steuern.",
     "options": [
      "Zuständigheit",
      "Zuständigung",
      "Zuständigschaft",
      "Zuständigkeit"
     ],
     "answer": 3,
     "vi": "Cơ quan thuế không có thẩm quyền đối với vấn đề này. Thẩm quyền thuộc về Cục Thuế Trung ương Liên bang.",
     "explain": "Tính từ tận cùng -ig nhận hậu tố -keit: Zuständigkeit. '-heit' không dùng sau -ig."
    },
    {
     "q": "Die ___ der gespeicherten Daten hat oberste Priorität. (sicher)",
     "options": [
      "Sicherkeit",
      "Sicherschaft",
      "Sicherheit",
      "Sichertum"
     ],
     "answer": 2,
     "vi": "Sự an toàn của dữ liệu được lưu trữ có ưu tiên hàng đầu.",
     "explain": "Tính từ đơn giản như 'sicher' nhận -heit: Sicherheit. '-keit' chỉ dùng sau -ig, -lich, -bar, -sam, -er/-el trong một số trường hợp, không dùng ở đây."
    },
    {
     "q": "Seine ___ in der Rechtsanwaltskammer endet im Mai.",
     "options": [
      "Mitgliedschaft",
      "Mitgliedheit",
      "Mitgliedung",
      "Mitgliedkeit"
     ],
     "answer": 0,
     "vi": "Tư cách thành viên của ông ấy tại Đoàn luật sư kết thúc vào tháng Năm.",
     "explain": "-schaft từ danh từ chỉ người tạo nghĩa trạng thái/quan hệ: Mitgliedschaft. '-heit' không ghép với danh từ 'Mitglied'."
    },
    {
     "q": "Die Miete wird ___ im Voraus überwiesen. (= jeden Monat)",
     "options": [
      "monatig",
      "monatlich",
      "monatbar",
      "monatlos"
     ],
     "answer": 1,
     "vi": "Tiền thuê nhà được chuyển khoản trước hằng tháng.",
     "explain": "-lich với danh từ thời gian = lặp lại đều đặn: monatlich. '-monatig' chỉ thời lượng và chỉ dùng trong từ ghép như 'dreimonatig'."
    },
    {
     "q": "Der Beamte hat seine Befugnisse ___. (= unerlaubt und falsch gebraucht)",
     "options": [
      "verbraucht",
      "zerbraucht",
      "missbraucht",
      "entbraucht"
     ],
     "answer": 2,
     "vi": "Viên công chức đã lạm dụng quyền hạn của mình.",
     "explain": "miss- = dùng sai, lạm dụng: missbrauchen. 'verbraucht' nghĩa là 'tiêu hao, dùng hết', sai nghĩa."
    },
    {
     "q": "Die Regierung will das Gesetz ___. (= es weniger streng machen)",
     "options": [
      "verschärfen",
      "zerschärfen",
      "missschärfen",
      "entschärfen"
     ],
     "answer": 3,
     "vi": "Chính phủ muốn nới lỏng đạo luật.",
     "explain": "ent- = làm mất đi (sự gay gắt): entschärfen. 'verschärfen' nghĩa ngược lại là 'thắt chặt'."
    },
    {
     "q": "Der ___ prüft den Jahresabschluss der Gesellschaft.",
     "options": [
      "Wirtschaftprüfer",
      "Wirtschaftsprüfer",
      "Wirtschaftenprüfer",
      "Wirtschaftesprüfer"
     ],
     "answer": 1,
     "vi": "Kiểm toán viên kiểm tra báo cáo tài chính năm của công ty.",
     "explain": "Sau hậu tố -schaft bắt buộc có Fugen-s: Wirtschaftsprüfer. Thiếu -s- là lỗi thường gặp."
    },
    {
     "q": "Từ ghép nào viết đúng?",
     "options": [
      "Steuerserklärung",
      "Arbeitvertrag",
      "Gesellschaftrecht",
      "Verwaltungsgericht"
     ],
     "answer": 3,
     "vi": "tòa án hành chính",
     "explain": "Sau -ung bắt buộc có Fugen-s: Verwaltungsgericht. 'Steuerserklärung' sai vì sau 'Steuer' không có -s-; 'Arbeitvertrag' và 'Gesellschaftrecht' thiếu -s-."
    },
    {
     "q": "Die ___ des Vertrags wird von der Gegenseite bestritten. (wirksam)",
     "options": [
      "Wirksamkeit",
      "Wirksamheit",
      "Wirksamung",
      "Wirksamschaft"
     ],
     "answer": 0,
     "vi": "Hiệu lực của hợp đồng bị phía bên kia phản đối.",
     "explain": "Tính từ tận cùng -sam nhận hậu tố -keit: Wirksamkeit. 'Wirksamheit' sai vì -heit không dùng sau -sam."
    }
   ]
  }
 ],
 "C2": [
  {
   "title": "Konjunktiv I trong bản án & Gutachten (Urteilsstil vs. Gutachtenstil)",
   "intro": "Trong phần Tatbestand của bản án, lời trình bày của các bên được thuật lại bằng câu gián tiếp với Konjunktiv I: „Der Kläger trägt vor, er habe gezahlt / die Ware sei mangelhaft gewesen / er werde zahlen / er müsse nicht zahlen.\" Nếu Konjunktiv I trùng với Indikativ (thường ở số nhiều: sie haben), dùng Konjunktiv II thay thế: „sie hätten\". Yêu cầu gián tiếp dùng „solle/möge\".\nGutachtenstil (bài giải luật) đi theo 4 bước: Obersatz với Konjunktiv II giả định („A könnte gegen B einen Anspruch … haben\"; „B könnte sich strafbar gemacht haben\"), Definition (Indikativ: „Eine Willenserklärung ist …\"), Subsumtion, Ergebnis (Indikativ: „Somit hat A …\").\nUrteilsstil (bản án) đưa kết luận lên trước rồi lý giải bằng „denn\" (V2) hoặc „weil\" (động từ cuối): „Die Klage ist begründet, denn …\".",
   "questions": [
    {
     "q": "Der Kläger trägt vor, er ___ den Kaufpreis bereits vollständig gezahlt.",
     "options": [
      "haben",
      "habe",
      "habest",
      "hätten"
     ],
     "answer": 1,
     "vi": "Nguyên đơn trình bày rằng ông ta đã thanh toán đầy đủ giá mua.",
     "explain": "Ngôi 3 số ít của haben ở Konjunktiv I là „habe\" (khác Indikativ „hat\"), nên dùng trực tiếp. „haben/hätten\" là số nhiều, „habest\" là ngôi 2."
    },
    {
     "q": "Die Beklagte behauptet, die gelieferte Ware ___ von Anfang an mangelhaft gewesen.",
     "options": [
      "habe",
      "seien",
      "seie",
      "sei"
     ],
     "answer": 3,
     "vi": "Bị đơn khẳng định rằng hàng hóa được giao đã có khuyết tật ngay từ đầu.",
     "explain": "„gewesen\" đi với trợ động từ sein, Konjunktiv I ngôi 3 số ít là „sei\". „habe … gewesen\" sai trợ động từ; „seie\" là dạng không tồn tại."
    },
    {
     "q": "Obersatz im Gutachtenstil: A ___ gegen B einen Anspruch auf Zahlung von 500 Euro aus § 433 Abs. 2 BGB haben.",
     "options": [
      "könnte",
      "konnte",
      "könne",
      "würde"
     ],
     "answer": 0,
     "vi": "Obersatz theo Gutachtenstil: A có thể có quyền yêu cầu B thanh toán 500 euro theo § 433 khoản 2 BGB.",
     "explain": "Obersatz nêu giả thuyết cần kiểm tra nên dùng Konjunktiv II „könnte\". „könne\" là Konjunktiv I dùng cho lời thuật lại, không phải giả thuyết; „konnte\" là quá khứ Indikativ."
    },
    {
     "q": "Urteilsstil: Der Kläger hat gegen den Beklagten einen Anspruch auf Zahlung, ___ zwischen den Parteien ist ein wirksamer Kaufvertrag zustande gekommen.",
     "options": [
      "weil",
      "deshalb",
      "denn",
      "also"
     ],
     "answer": 2,
     "vi": "Văn phong bản án: Nguyên đơn có quyền yêu cầu bị đơn thanh toán, vì giữa các bên đã hình thành một hợp đồng mua bán có hiệu lực.",
     "explain": "Urteilsstil nêu kết quả trước rồi lý giải bằng „denn\" + câu V2. „weil\" đòi động từ ở cuối câu; „deshalb/also\" nêu hệ quả và đòi đảo ngữ."
    },
    {
     "q": "Fraglich ist, ob A eine Willenserklärung abgegeben hat. Eine Willenserklärung ___ eine private Willensäußerung, die auf die Herbeiführung eines Rechtserfolgs gerichtet ist.",
     "options": [
      "sei",
      "wäre",
      "ist",
      "könnte"
     ],
     "answer": 2,
     "vi": "Vấn đề là A đã đưa ra một tuyên bố ý chí hay chưa. Tuyên bố ý chí là một sự biểu lộ ý chí cá nhân nhằm tạo ra một hệ quả pháp lý.",
     "explain": "Bước Definition trong Gutachten dùng Indikativ vì định nghĩa là khẳng định chung. „sei\" sai vì đây không phải lời thuật lại của ai."
    },
    {
     "q": "Ergebnis: Somit ___ A gegen B einen Anspruch auf Zahlung aus § 433 Abs. 2 BGB.",
     "options": [
      "hat",
      "habe",
      "hätte",
      "haben"
     ],
     "answer": 0,
     "vi": "Kết luận: Như vậy A có quyền yêu cầu B thanh toán theo § 433 khoản 2 BGB.",
     "explain": "Ergebnis khẳng định kết quả bằng Indikativ „hat\". „hätte\" biến kết luận thành điều kiện trái thực tế; „habe\" chỉ dùng trong lời thuật lại."
    },
    {
     "q": "Die Kläger tragen vor, sie ___ den Mangel unverzüglich angezeigt.",
     "options": [
      "habe",
      "hätte",
      "gehabt",
      "hätten"
     ],
     "answer": 3,
     "vi": "Các nguyên đơn trình bày rằng họ đã thông báo khuyết tật ngay lập tức.",
     "explain": "Konjunktiv I số nhiều „sie haben\" trùng Indikativ nên phải thay bằng Konjunktiv II „hätten\". „habe/hätte\" là số ít, không hợp với chủ ngữ „sie\" (họ)."
    },
    {
     "q": "Der Beklagte kündigt an, er ___ gegen das Urteil Berufung einlegen.",
     "options": [
      "werden",
      "werde",
      "wurde",
      "worden"
     ],
     "answer": 1,
     "vi": "Bị đơn tuyên bố rằng ông ta sẽ kháng cáo bản án.",
     "explain": "Tương lai trong câu gián tiếp: werden ở Konjunktiv I ngôi 3 số ít là „werde\". „wurde\" là quá khứ Indikativ, „worden\" là phân từ bị động."
    },
    {
     "q": "Die Behörde führt aus, der Antragsteller ___ die Unterlagen innerhalb eines Monats nachreichen.",
     "options": [
      "müssen",
      "gemusst",
      "müssest",
      "müsse"
     ],
     "answer": 3,
     "vi": "Cơ quan giải thích rằng người nộp đơn phải bổ sung hồ sơ trong vòng một tháng.",
     "explain": "Konjunktiv I ngôi 3 số ít của müssen là „müsse\". „müssen\" là số nhiều, „müssest\" là ngôi 2 số ít."
    },
    {
     "q": "B ___ sich gemäß § 242 Abs. 1 StGB wegen Diebstahls strafbar gemacht haben, indem er das Fahrrad des C mitnahm.",
     "options": [
      "könne",
      "könnte",
      "konnte",
      "könnten"
     ],
     "answer": 1,
     "vi": "B có thể đã phạm tội trộm cắp theo § 242 khoản 1 StGB khi lấy chiếc xe đạp của C.",
     "explain": "Obersatz trong Gutachten hình sự cũng dùng „könnte … haben\" (Konjunktiv II). „könne\" là Konjunktiv I của lời thuật lại; „könnten\" là số nhiều."
    },
    {
     "q": "Der Kläger trägt vor, ihm ___ die Kündigung erst am 3. Mai zugegangen.",
     "options": [
      "sei",
      "habe",
      "seien",
      "werde"
     ],
     "answer": 0,
     "vi": "Nguyên đơn trình bày rằng thông báo chấm dứt hợp đồng đến tay ông ta chỉ vào ngày 3 tháng 5.",
     "explain": "„zugehen\" (đến tay người nhận) chia Perfekt với sein, chủ ngữ là „die Kündigung\" (số ít) nên dùng „sei\". „habe zugegangen\" sai trợ động từ."
    },
    {
     "q": "Die Klägerin behauptet, der Bescheid ___ ihr nie bekannt gegeben worden.",
     "options": [
      "werde",
      "habe",
      "sei",
      "wurde"
     ],
     "answer": 2,
     "vi": "Nguyên đơn khẳng định rằng quyết định hành chính chưa bao giờ được thông báo cho bà.",
     "explain": "Bị động hoàn thành: „sei … bekannt gegeben worden\" (Konjunktiv I của „ist … worden\"). „werde … worden\" sai vì bị động Perfekt cần sein."
    },
    {
     "q": "Câu nào là câu gián tiếp đúng trong phần Tatbestand?",
     "options": [
      "Der Beklagte behauptet, er hat von dem Mangel nichts gewissen.",
      "Der Beklagte behauptet, er habe von dem Mangel nichts gewusst.",
      "Der Beklagte behauptet, er habe von dem Mangel nichts gewisst.",
      "Der Beklagte behauptet, er sei von dem Mangel nichts gewusst."
     ],
     "answer": 1,
     "vi": "Bị đơn khẳng định rằng ông ta không hề biết về khuyết tật.",
     "explain": "„wissen\" có Partizip II bất quy tắc „gewusst\" và chia với haben, Konjunktiv I là „habe … gewusst\". „sei … gewusst\" sai trợ động từ, „gewisst/gewissen\" sai dạng phân từ."
    },
    {
     "q": "Das Gericht wies den Kläger darauf hin, er ___ seinen Vortrag binnen zwei Wochen ergänzen.",
     "options": [
      "solle",
      "sollen",
      "sollst",
      "gesollt"
     ],
     "answer": 0,
     "vi": "Tòa án lưu ý nguyên đơn rằng ông ta nên bổ sung phần trình bày trong vòng hai tuần.",
     "explain": "Mệnh lệnh/yêu cầu trong câu gián tiếp được diễn đạt bằng „solle\" (Konjunktiv I của sollen). „sollst\" là ngôi 2 Indikativ, „sollen\" là số nhiều."
    },
    {
     "q": "Câu nào được viết theo Urteilsstil?",
     "options": [
      "Der Anspruch könnte entstanden sein. Dazu müssten die Parteien einen wirksamen Kaufvertrag geschlossen haben.",
      "Fraglich ist, ob die Parteien einen wirksamen Kaufvertrag geschlossen haben.",
      "Zu prüfen ist, ob der Anspruch entstanden ist.",
      "Der Anspruch ist entstanden, denn die Parteien haben einen wirksamen Kaufvertrag geschlossen."
     ],
     "answer": 3,
     "vi": "Quyền yêu cầu đã phát sinh, vì các bên đã ký kết một hợp đồng mua bán có hiệu lực.",
     "explain": "Urteilsstil nêu kết quả trước và lý giải bằng „denn\". Các câu còn lại („könnte … müssten\", „Fraglich ist\", „Zu prüfen ist\") là dấu hiệu của Gutachtenstil."
    }
   ]
  },
  {
   "title": "Bị động & thay thế bị động trong văn bản luật (Passiv und Passiversatz)",
   "intro": "Văn bản luật dùng nhiều dạng bị động và thay thế bị động:\n• werden-Passiv: „Wer … wegnimmt, wird … bestraft.\"; Zustandspassiv/Perfekt: „Der Vertrag ist geschlossen worden.\"\n• sein + zu + Infinitiv = phải/có thể được làm (nghĩa bị động): „Der Antrag ist schriftlich zu stellen.\"\n• haben + zu + Infinitiv = nghĩa vụ (nghĩa chủ động, chủ ngữ là người): „Der Arbeitgeber hat die Lohnsteuer einzubehalten.\" Với động từ tách: einzubehalten, beizufügen.\n• bedürfen + Genitiv: „bedarf der Schriftform\"; gelten als: „gilt als bekannt gegeben\"; Anwendung finden auf + Akk: „finden auf den Tausch Anwendung\"; unterliegen + Dativ: „unterliegen der Umsatzsteuer\"; sich lassen + Inf = có thể được: „lässt sich nicht anfechten\".",
   "questions": [
    {
     "q": "Der Antrag ___ schriftlich zu stellen.",
     "options": [
      "hat",
      "wird",
      "ist",
      "muss"
     ],
     "answer": 2,
     "vi": "Đơn phải được nộp bằng văn bản.",
     "explain": "„sein + zu + Infinitiv\" mang nghĩa bị động „phải được làm\"; chủ ngữ „der Antrag\" là đối tượng bị tác động. „hat … zu\" chỉ dùng khi chủ ngữ là người thực hiện nghĩa vụ."
    },
    {
     "q": "Der Arbeitgeber ___ die Lohnsteuer einzubehalten und an das Finanzamt abzuführen.",
     "options": [
      "ist",
      "wird",
      "hat",
      "muss"
     ],
     "answer": 2,
     "vi": "Người sử dụng lao động phải khấu trừ thuế tiền lương và nộp cho cơ quan thuế.",
     "explain": "Chủ ngữ là người thực hiện nghĩa vụ nên dùng „haben + zu\" (nghĩa chủ động). „ist … einzubehalten\" sẽ biến người sử dụng lao động thành đối tượng bị khấu trừ."
    },
    {
     "q": "Die Kündigung des Mietverhältnisses bedarf ___ Schriftform.",
     "options": [
      "der",
      "die",
      "zur",
      "mit der"
     ],
     "answer": 0,
     "vi": "Việc chấm dứt quan hệ thuê nhà cần phải có hình thức văn bản.",
     "explain": "„bedürfen\" đi với Genitiv: „der Schriftform\". Người học hay dùng Akkusativ „die\" như với „brauchen\"."
    },
    {
     "q": "Die verspätete Annahme eines Antrags ___ als neuer Antrag.",
     "options": [
      "ist",
      "wird",
      "steht",
      "gilt"
     ],
     "answer": 3,
     "vi": "Việc chấp nhận đề nghị muộn được coi là một đề nghị mới.",
     "explain": "„gelten als\" = được coi là (hư cấu pháp lý, § 150 BGB). „ist als neuer Antrag\" hay „wird als neuer Antrag\" thiếu phân từ nên sai."
    },
    {
     "q": "Die Vorschriften über den Kauf finden ___ den Tausch entsprechende Anwendung.",
     "options": [
      "für",
      "auf",
      "bei",
      "an"
     ],
     "answer": 1,
     "vi": "Các quy định về mua bán được áp dụng tương ứng cho hợp đồng trao đổi.",
     "explain": "Cụm cố định là „Anwendung finden auf + Akkusativ\". „für\" là lỗi dịch từ „áp dụng cho\"."
    },
    {
     "q": "Umsätze, die ein Unternehmer im Inland gegen Entgelt ausführt, unterliegen ___ Umsatzsteuer.",
     "options": [
      "die",
      "zur",
      "unter die",
      "der"
     ],
     "answer": 3,
     "vi": "Các giao dịch mà doanh nghiệp thực hiện trong nước có thu tiền phải chịu thuế giá trị gia tăng.",
     "explain": "„unterliegen\" đòi Dativ: „der Umsatzsteuer\" (giống cái, Dativ). „die\" là Akkusativ, sai cách."
    },
    {
     "q": "Der Vertrag ___ am 1. März 2024 geschlossen worden.",
     "options": [
      "wird",
      "ist",
      "hat",
      "wurde"
     ],
     "answer": 1,
     "vi": "Hợp đồng đã được ký kết vào ngày 1 tháng 3 năm 2024.",
     "explain": "Bị động Perfekt = sein + Partizip II + worden. „hat … worden\" sai trợ động từ; „wurde … worden\" là cấu trúc không tồn tại."
    },
    {
     "q": "Die Entscheidung ___ sich nicht mehr anfechten.",
     "options": [
      "lässt",
      "ist",
      "wird",
      "kann"
     ],
     "answer": 0,
     "vi": "Quyết định không còn có thể bị khiếu nại được nữa.",
     "explain": "„sich lassen + Infinitiv\" là dạng thay thế bị động với nghĩa „có thể được\". „kann sich anfechten\" sai vì „anfechten\" không phải động từ phản thân."
    },
    {
     "q": "Gegen den Bescheid kann innerhalb eines Monats Einspruch ___ werden.",
     "options": [
      "einlegen",
      "einzulegen",
      "eingelegt",
      "eingelegen"
     ],
     "answer": 2,
     "vi": "Có thể khiếu nại quyết định hành chính trong vòng một tháng.",
     "explain": "Bị động với động từ khuyết thiếu: kann + Partizip II + werden, nên dùng „eingelegt\". „einzulegen\" chỉ dùng với „ist … zu\"."
    },
    {
     "q": "Die Erteilung der Genehmigung ___ der Zustimmung des Gemeinderats.",
     "options": [
      "braucht",
      "bedarf",
      "benötigt",
      "bedürft"
     ],
     "answer": 1,
     "vi": "Việc cấp giấy phép cần có sự đồng ý của hội đồng xã.",
     "explain": "Chỉ „bedürfen\" đi với Genitiv („der Zustimmung\"); „braucht/benötigt\" đòi Akkusativ („die Zustimmung\"). „bedürft\" là dạng chia sai (bedarf)."
    },
    {
     "q": "Die Behörde hat dem Bescheid eine Rechtsmittelbelehrung ___ .",
     "options": [
      "beizufügen",
      "zu beifügen",
      "beifügen",
      "beigefügt"
     ],
     "answer": 0,
     "vi": "Cơ quan phải đính kèm hướng dẫn về quyền khiếu nại vào quyết định.",
     "explain": "Với động từ tách „beifügen\", „zu\" chen vào giữa tiền tố và gốc: „beizufügen\". „zu beifügen\" là lỗi thường gặp."
    },
    {
     "q": "Wer eine fremde bewegliche Sache in Zueignungsabsicht wegnimmt, ___ mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe bestraft.",
     "options": [
      "ist",
      "hat",
      "sei",
      "wird"
     ],
     "answer": 3,
     "vi": "Người nào lấy đi tài sản động sản của người khác với ý định chiếm đoạt thì bị phạt tù đến năm năm hoặc phạt tiền.",
     "explain": "Quy phạm mô tả quá trình xử phạt nên dùng Vorgangspassiv „wird bestraft\". „ist bestraft\" là Zustandspassiv (trạng thái đã bị phạt), không hợp nghĩa."
    },
    {
     "q": "Câu nào có nghĩa tương đương với: „Die Frist muss eingehalten werden.\"?",
     "options": [
      "Die Frist hat einzuhalten.",
      "Die Frist ist einzuhalten.",
      "Die Frist ist eingehalten.",
      "Die Frist lässt sich einhalten."
     ],
     "answer": 1,
     "vi": "Thời hạn phải được tuân thủ.",
     "explain": "„ist + zu + Infinitiv\" thay cho „muss … werden\". „lässt sich einhalten\" chỉ có nghĩa „có thể tuân thủ\"; „ist eingehalten\" mô tả trạng thái."
    },
    {
     "q": "Die Vorschrift ___ auf Altfälle keine Anwendung.",
     "options": [
      "hat",
      "gilt",
      "nimmt",
      "findet"
     ],
     "answer": 3,
     "vi": "Quy định này không được áp dụng cho các trường hợp cũ.",
     "explain": "Cụm động từ chức năng cố định là „Anwendung finden\". „gilt keine Anwendung\" là trộn hai cấu trúc „gelten\" và „Anwendung finden\"."
    },
    {
     "q": "Câu nào đúng ngữ pháp?",
     "options": [
      "Der Bescheid gilt am dritten Tag nach der Aufgabe zur Post als bekannt gegeben.",
      "Der Bescheid gilt am dritten Tag nach der Aufgabe zur Post als bekannt geben.",
      "Der Bescheid gilt am dritten Tag nach der Aufgabe zur Post für bekannt gegeben.",
      "Der Bescheid gilt am dritten Tag nach der Aufgabe zur Post bekannt gegeben zu werden."
     ],
     "answer": 0,
     "vi": "Quyết định hành chính được coi là đã thông báo vào ngày thứ ba sau khi gửi bưu điện.",
     "explain": "„gelten als + Partizip II\": „gilt als bekannt gegeben\". „gilt für\" mang nghĩa „áp dụng cho\", không phải „được coi là\"."
    }
   ]
  },
  {
   "title": "Chuỗi Genitiv & cụm danh từ phức (Genitivketten, Nominalgruppen)",
   "intro": "Văn bản pháp lý ưa dùng danh từ hóa: „Der Käufer ficht den Vertrag an.\" → „die Anfechtung des Vertrags durch den Käufer\". Tân ngữ của động từ thành Genitivattribut; chủ thể hành động đi với „durch + Akk\".\nĐuôi Genitiv: giống đực/trung des + -(e)s (des Vertrags, des Klägers); giống cái và số nhiều: der (der Willenserklärung, der Gläubiger).\nDanh từ yếu (n-Deklination) và danh từ gốc tính từ: des Mandanten, des Ehegatten, des Beklagten.\nTính từ trong Genitiv sau mạo từ: -en (des angefochtenen Bescheids); số nhiều không mạo từ: -er (die Ansprüche gekündigter Arbeitnehmer). Danh từ số nhiều không mạo từ, không tính từ thì dùng „von + Dativ\" (die Besteuerung von Kapitalerträgen).\nTên riêng đứng trước, không mạo từ: Müllers Antrag; danh xưng: die Klage des Herrn Schmidt.",
   "questions": [
    {
     "q": "Das Gericht prüft die Anfechtung der Willenserklärung ___ Käufers.",
     "options": [
      "der",
      "dem",
      "den",
      "des"
     ],
     "answer": 3,
     "vi": "Tòa án xem xét việc hủy bỏ tuyên bố ý chí của người mua.",
     "explain": "„Käufer\" giống đực, Genitiv là „des Käufers\". „der\" chỉ dùng cho giống cái/số nhiều."
    },
    {
     "q": "Die Pflichten des ___ ergeben sich aus § 535 BGB.",
     "options": [
      "Vermieter",
      "Vermieters",
      "Vermietern",
      "Vermieterin"
     ],
     "answer": 1,
     "vi": "Nghĩa vụ của bên cho thuê phát sinh từ § 535 BGB.",
     "explain": "Danh từ giống đực mạnh nhận đuôi -s ở Genitiv: „des Vermieters\". „Vermieterin\" là giống cái, không đi với „des\"."
    },
    {
     "q": "Der Antrag des ___ auf Prozesskostenhilfe wurde abgelehnt.",
     "options": [
      "Beklagter",
      "Beklagtes",
      "Beklagte",
      "Beklagten"
     ],
     "answer": 3,
     "vi": "Đơn xin trợ giúp án phí của bị đơn đã bị bác.",
     "explain": "„Beklagte\" là danh từ gốc tính từ, sau „des\" chia như tính từ yếu: „des Beklagten\". „Beklagter\" chỉ dùng khi không có mạo từ ở Nominativ."
    },
    {
     "q": "Die Befriedigung ___ Gläubiger erfolgt aus der Insolvenzmasse.",
     "options": [
      "des",
      "der",
      "den",
      "die"
     ],
     "answer": 1,
     "vi": "Việc thanh toán cho các chủ nợ được thực hiện từ khối tài sản phá sản.",
     "explain": "Số nhiều Genitiv dùng „der Gläubiger\". „des Gläubiger\" sai vì số ít phải là „des Gläubigers\"."
    },
    {
     "q": "Der Käufer ficht den Vertrag an. → die Anfechtung ___ Vertrags durch den Käufer",
     "options": [
      "des",
      "den",
      "dem",
      "vom"
     ],
     "answer": 0,
     "vi": "việc người mua hủy bỏ hợp đồng",
     "explain": "Khi danh từ hóa, tân ngữ Akkusativ trở thành Genitivattribut: „des Vertrags\". Giữ „den\" là lỗi chuyển nguyên cách từ câu động từ."
    },
    {
     "q": "Die Kündigung des Mietvertrags ___ den Vermieter war unwirksam.",
     "options": [
      "von",
      "des",
      "durch",
      "mit"
     ],
     "answer": 2,
     "vi": "Việc bên cho thuê chấm dứt hợp đồng thuê là không có hiệu lực.",
     "explain": "Chủ thể hành động trong cụm danh từ được nêu bằng „durch + Akkusativ\" („den Vermieter\"). „von\" đòi Dativ („von dem Vermieter\") nên sai với „den\"."
    },
    {
     "q": "Der Rechtsanwalt legte die Vollmacht des ___ vor.",
     "options": [
      "Mandants",
      "Mandanten",
      "Mandant",
      "Mandantes"
     ],
     "answer": 1,
     "vi": "Luật sư xuất trình giấy ủy quyền của thân chủ.",
     "explain": "„Mandant\" thuộc n-Deklination: Genitiv „des Mandanten\". Đuôi -s chỉ dành cho danh từ mạnh."
    },
    {
     "q": "Die Verfügung über das Grundstück bedarf der Zustimmung des ___ .",
     "options": [
      "Ehegatten",
      "Ehegatte",
      "Ehegattes",
      "Ehegattens"
     ],
     "answer": 0,
     "vi": "Việc định đoạt mảnh đất cần có sự đồng ý của người phối ngẫu.",
     "explain": "„Ehegatte\" là danh từ yếu, mọi cách trừ Nominativ số ít đều có -n: „des Ehegatten\". „Ehegattens\" thêm thừa -s."
    },
    {
     "q": "Das Verwaltungsgericht prüft die Rechtmäßigkeit des ___ Verwaltungsakts.",
     "options": [
      "angefochtenes",
      "angefochtene",
      "angefochtenem",
      "angefochtenen"
     ],
     "answer": 3,
     "vi": "Tòa án hành chính xem xét tính hợp pháp của văn bản hành chính bị khởi kiện.",
     "explain": "Sau mạo từ xác định „des\", tính từ chia yếu với đuôi -en. „angefochtenes\" là đuôi mạnh, chỉ dùng khi không có mạo từ mang dấu cách."
    },
    {
     "q": "Die Klage ist auf Feststellung der Unwirksamkeit der Kündigung ___ Arbeitsverhältnisses gerichtet.",
     "options": [
      "der",
      "des",
      "dem",
      "das"
     ],
     "answer": 1,
     "vi": "Đơn kiện nhằm xác định việc chấm dứt quan hệ lao động là không có hiệu lực.",
     "explain": "Mắt xích cuối của chuỗi Genitiv là „Arbeitsverhältnis\" (giống trung) → „des Arbeitsverhältnisses\". Người học dễ lặp lại „der\" theo các mắt xích trước."
    },
    {
     "q": "Das Gesetz regelt die Besteuerung ___ Kapitalerträgen.",
     "options": [
      "der",
      "des",
      "aus",
      "von"
     ],
     "answer": 3,
     "vi": "Luật quy định việc đánh thuế thu nhập từ vốn.",
     "explain": "Danh từ số nhiều không mạo từ, không tính từ không thể hiện được Genitiv nên dùng „von + Dativ\" (Kapitalerträgen). „der Kapitalerträgen\" sai vì đuôi -n là Dativ."
    },
    {
     "q": "___ Antrag auf Erlass einer einstweiligen Verfügung ist zulässig.",
     "options": [
      "Müllers",
      "Des Müllers",
      "Müller",
      "Müllern"
     ],
     "answer": 0,
     "vi": "Đơn xin ban hành lệnh tạm thời của ông Müller là hợp lệ.",
     "explain": "Tên riêng ở Genitiv đứng trước danh từ, thêm -s và không có mạo từ: „Müllers Antrag\". „Des Müllers\" sai vì tên riêng không dùng mạo từ ở đây."
    },
    {
     "q": "Die Klage ___ Schmidt wurde als unzulässig abgewiesen.",
     "options": [
      "des Herr",
      "dem Herrn",
      "des Herrn",
      "des Herrns"
     ],
     "answer": 2,
     "vi": "Đơn kiện của ông Schmidt bị bác vì không hợp lệ.",
     "explain": "„Herr\" là danh từ yếu: Genitiv „des Herrn\" (không có -s). „des Herr\" thiếu đuôi -n."
    },
    {
     "q": "Câu nào là cách danh từ hóa đúng của: „Das Finanzamt setzt die Einkommensteuer fest.\"?",
     "options": [
      "die Festsetzung die Einkommensteuer durch das Finanzamt",
      "die Festsetzung des Finanzamts der Einkommensteuer",
      "die Festsetzung der Einkommensteuer durch das Finanzamt",
      "die Festsetzen der Einkommensteuer durch das Finanzamt"
     ],
     "answer": 2,
     "vi": "việc cơ quan thuế ấn định thuế thu nhập",
     "explain": "Tân ngữ thành Genitiv („der Einkommensteuer\"), chủ thể đi với „durch\". Hai Genitiv liên tiếp („des Finanzamts der Einkommensteuer\") là sai văn phong và gây nhầm lẫn."
    },
    {
     "q": "Das Urteil stärkt die Ansprüche ___ Arbeitnehmer auf Abfindung.",
     "options": [
      "gekündigter",
      "gekündigten",
      "gekündigte",
      "gekündigtem"
     ],
     "answer": 0,
     "vi": "Bản án củng cố quyền yêu cầu trợ cấp thôi việc của những người lao động bị sa thải.",
     "explain": "Số nhiều Genitiv không mạo từ: tính từ phải mang đuôi mạnh -er để thể hiện cách („gekündigter Arbeitnehmer\"). „gekündigten\" chỉ đúng khi có mạo từ „der\" đứng trước."
    }
   ]
  },
  {
   "title": "Giới từ văn phong hành chính (aufgrund, mangels, zwecks, kraft, binnen …)",
   "intro": "Giới từ hành chính và cách đi kèm:\n• + Genitiv: aufgrund (do, dựa trên), mangels (do thiếu), zwecks (nhằm mục đích), ungeachtet (bất chấp), unbeschadet (không ảnh hưởng đến), vorbehaltlich (với điều kiện bảo lưu, trừ khi có), kraft (theo, căn cứ vào – kraft Gesetzes/Amtes), infolge (do hậu quả của), seitens (về phía), nach Maßgabe (theo quy định của).\n• binnen (trong vòng): + Dativ (binnen einem Monat), văn phong cao cũng dùng Genitiv (binnen eines Monats).\n• + Dativ: gemäß (theo), entgegen (trái với).\nSố nhiều không mạo từ sau giới từ Genitiv: tính từ mang đuôi -er (mangels hinreichender Beweise).",
   "questions": [
    {
     "q": "Aufgrund ___ Vertrags ist der Mieter zur Zahlung der Miete verpflichtet.",
     "options": [
      "dem",
      "des",
      "den",
      "der"
     ],
     "answer": 1,
     "vi": "Căn cứ vào hợp đồng, bên thuê có nghĩa vụ trả tiền thuê.",
     "explain": "„aufgrund\" đi với Genitiv: „des Vertrags\". „dem\" là lỗi do nhầm với „wegen/auf Grund von\" trong văn nói."
    },
    {
     "q": "Die Klage wurde mangels ___ Beweise abgewiesen.",
     "options": [
      "hinreichender",
      "hinreichenden",
      "hinreichende",
      "hinreichendem"
     ],
     "answer": 0,
     "vi": "Đơn kiện bị bác do thiếu chứng cứ đầy đủ.",
     "explain": "„mangels\" + Genitiv; số nhiều không mạo từ nên tính từ mang đuôi mạnh -er. „hinreichenden\" chỉ dùng khi có mạo từ đi trước."
    },
    {
     "q": "Der Einspruch ist ___ eines Monats nach Bekanntgabe des Bescheids einzulegen.",
     "options": [
      "mangels",
      "kraft",
      "binnen",
      "zwecks"
     ],
     "answer": 2,
     "vi": "Khiếu nại phải được nộp trong vòng một tháng kể từ khi thông báo quyết định.",
     "explain": "„binnen\" chỉ khoảng thời gian (trong vòng). „kraft/zwecks/mangels\" có cùng cách Genitiv nhưng sai nghĩa."
    },
    {
     "q": "Der Bürgermeister handelt ___ seines Amtes.",
     "options": [
      "mangels",
      "kraft",
      "zwecks",
      "ungeachtet"
     ],
     "answer": 1,
     "vi": "Thị trưởng hành động căn cứ theo chức vụ của mình.",
     "explain": "„kraft + Genitiv\" = căn cứ vào, nhờ quyền (kraft Amtes, kraft Gesetzes). „mangels seines Amtes\" có nghĩa ngược lại (do thiếu chức vụ)."
    },
    {
     "q": "Die Daten werden ___ Prüfung der Steuererklärung erhoben.",
     "options": [
      "zwecks",
      "kraft",
      "binnen",
      "ungeachtet"
     ],
     "answer": 0,
     "vi": "Dữ liệu được thu thập nhằm mục đích kiểm tra tờ khai thuế.",
     "explain": "„zwecks\" = nhằm mục đích, thường đi với danh từ không mạo từ. „kraft Prüfung\" sai nghĩa vì kiểm tra không phải là căn cứ pháp lý."
    },
    {
     "q": "___ dieser Bedenken hat das Gericht die Revision zugelassen.",
     "options": [
      "Mangels",
      "Kraft",
      "Zwecks",
      "Ungeachtet"
     ],
     "answer": 3,
     "vi": "Bất chấp những băn khoăn này, tòa án vẫn cho phép kháng nghị phúc thẩm.",
     "explain": "„ungeachtet\" = bất chấp, diễn tả sự nhượng bộ. „Mangels dieser Bedenken\" nghĩa là „do không có băn khoăn\", không hợp ý."
    },
    {
     "q": "Unbeschadet ___ Regelung in § 5 gilt für Altverträge Folgendes:",
     "options": [
      "die",
      "der",
      "dem",
      "den"
     ],
     "answer": 1,
     "vi": "Không ảnh hưởng đến quy định tại § 5, đối với các hợp đồng cũ áp dụng như sau:",
     "explain": "„unbeschadet\" đi với Genitiv; „Regelung\" giống cái → „der Regelung\". „die\" là Akkusativ."
    },
    {
     "q": "___ des Zahlungsverzugs ist der Gläubiger berechtigt, Verzugszinsen zu verlangen.",
     "options": [
      "Mangels",
      "Binnen",
      "Unbeschadet",
      "Infolge"
     ],
     "answer": 3,
     "vi": "Do việc chậm thanh toán, chủ nợ có quyền yêu cầu lãi chậm trả.",
     "explain": "„infolge\" = do hậu quả của, nêu nguyên nhân. „Unbeschadet\" (không ảnh hưởng đến) không diễn tả quan hệ nhân quả."
    },
    {
     "q": "Die Erstattung erfolgt nach Maßgabe ___ folgenden Bestimmungen.",
     "options": [
      "der",
      "den",
      "die",
      "dem"
     ],
     "answer": 0,
     "vi": "Việc hoàn trả được thực hiện theo các quy định sau đây.",
     "explain": "„nach Maßgabe\" + Genitiv; số nhiều Genitiv là „der folgenden Bestimmungen\". „den\" là do nhầm „nach\" + Dativ."
    },
    {
     "q": "Die Beschwerde ist binnen ___ Monat schriftlich einzulegen.",
     "options": [
      "einen",
      "eines",
      "einem",
      "ein"
     ],
     "answer": 2,
     "vi": "Khiếu nại phải được nộp bằng văn bản trong vòng một tháng.",
     "explain": "„binnen\" đi với Dativ: „einem Monat\". „eines\" chỉ đúng khi danh từ cũng ở Genitiv („eines Monats\")."
    },
    {
     "q": "Die Abrechnung erfolgt gemäß ___ gesetzlichen Vorschriften.",
     "options": [
      "der",
      "die",
      "den",
      "dem"
     ],
     "answer": 2,
     "vi": "Việc quyết toán được thực hiện theo các quy định của pháp luật.",
     "explain": "„gemäß\" đi với Dativ; số nhiều Dativ là „den gesetzlichen Vorschriften\". „gemäß der Vorschriften\" là lỗi phổ biến do tưởng gemäß + Genitiv."
    },
    {
     "q": "Entgegen ___ Antrag des Klägers wurde die Sache an das Landgericht verwiesen.",
     "options": [
      "dem",
      "des",
      "den",
      "der"
     ],
     "answer": 0,
     "vi": "Trái với đề nghị của nguyên đơn, vụ việc đã được chuyển đến Tòa án cấp bang.",
     "explain": "„entgegen\" đi với Dativ: „dem Antrag\". „des Antrags\" (Genitiv) là lỗi do suy luận theo các giới từ hành chính khác."
    },
    {
     "q": "Eine Stellungnahme ___ Behörde liegt bisher nicht vor.",
     "options": [
      "seitens die",
      "seitens dem",
      "seitens den",
      "seitens der"
     ],
     "answer": 3,
     "vi": "Đến nay vẫn chưa có ý kiến từ phía cơ quan.",
     "explain": "„seitens\" (về phía) đi với Genitiv; „Behörde\" giống cái → „seitens der Behörde\". „seitens die\" sai cách."
    },
    {
     "q": "Câu nào dùng giới từ „mangels\" đúng ngữ pháp?",
     "options": [
      "Mangels einer wirksame Vollmacht ist der Vertrag schwebend unwirksam.",
      "Mangels einer wirksamen Vollmacht ist der Vertrag schwebend unwirksam.",
      "Mangels eine wirksame Vollmacht ist der Vertrag schwebend unwirksam.",
      "Mangels einer wirksamen Vollmachts ist der Vertrag schwebend unwirksam."
     ],
     "answer": 1,
     "vi": "Do thiếu giấy ủy quyền hợp lệ, hợp đồng ở trạng thái chưa có hiệu lực (chờ phê chuẩn).",
     "explain": "Genitiv giống cái: „einer wirksamen Vollmacht\" (tính từ -en, danh từ giống cái không thêm -s). „einer wirksame\" sai đuôi tính từ."
    },
    {
     "q": "___ abweichender Vereinbarungen gelten die Allgemeinen Geschäftsbedingungen.",
     "options": [
      "Binnen",
      "Zwecks",
      "Kraft",
      "Vorbehaltlich"
     ],
     "answer": 3,
     "vi": "Trừ khi có thỏa thuận khác, các điều kiện giao dịch chung được áp dụng.",
     "explain": "„vorbehaltlich\" = với điều kiện bảo lưu, trừ khi có. „Kraft abweichender Vereinbarungen\" lại có nghĩa „căn cứ vào thỏa thuận khác\", trái ý câu."
    }
   ]
  },
  {
   "title": "Câu điều kiện trong luật (Konditionalsätze: „Ist …, so …\", sofern, soweit, es sei denn)",
   "intro": "Văn bản luật thường dùng câu điều kiện không liên từ: động từ chia đứng đầu câu phụ, mệnh đề chính thường mở đầu bằng „so\" + động từ: „Ist der Vertrag nichtig, so kann der Käufer …\". Cũng có thể dùng „Wenn …, so …\".\n• sofern = với điều kiện là/nếu (sofern nichts anderes vereinbart ist); soweit = trong chừng mực mà (haftet, soweit er … zu vertreten hat).\n• es sei denn = trừ khi; sau đó là câu V2 („es sei denn, er hat …\") hoặc „dass\" + động từ cuối.\n• vorausgesetzt, dass = với điều kiện là; im Falle + Genitiv = trong trường hợp.\n• Sollte … , … = nếu (khả năng thấp): „Sollte der Schuldner zahlungsunfähig werden, …\". Trái thực tế: „Hätte A die Frist eingehalten, wäre der Anspruch nicht verjährt.\"",
   "questions": [
    {
     "q": "___ der Vertrag nichtig, so kann der Käufer den Kaufpreis zurückverlangen.",
     "options": [
      "Wenn",
      "Ist",
      "Falls",
      "Sofern"
     ],
     "answer": 1,
     "vi": "Nếu hợp đồng vô hiệu thì người mua có thể đòi lại giá mua.",
     "explain": "Câu điều kiện không liên từ đặt động từ chia „Ist\" lên đầu. Với „Wenn/Falls/Sofern\" câu thiếu động từ (phải là „Wenn der Vertrag nichtig ist\")."
    },
    {
     "q": "Ist die Einspruchsfrist abgelaufen, ___ ist der Einspruch unzulässig.",
     "options": [
      "so",
      "als",
      "wenn",
      "denn"
     ],
     "answer": 0,
     "vi": "Nếu thời hạn khiếu nại đã hết thì khiếu nại không được chấp nhận.",
     "explain": "Mệnh đề chính sau câu điều kiện mở đầu bằng „so\" + động từ. „denn\" là liên từ nguyên nhân, không đứng trước động từ chia."
    },
    {
     "q": "Leistet der Schuldner nicht, so ___ .",
     "options": [
      "der Gläubiger kann Schadensersatz verlangen",
      "der Gläubiger Schadensersatz verlangen kann",
      "kann der Gläubiger verlangen Schadensersatz",
      "kann der Gläubiger Schadensersatz verlangen"
     ],
     "answer": 3,
     "vi": "Nếu con nợ không thực hiện nghĩa vụ thì chủ nợ có thể yêu cầu bồi thường thiệt hại.",
     "explain": "„so\" chiếm vị trí 1 nên động từ chia „kann\" đứng ngay sau, Infinitiv ở cuối. Đặt chủ ngữ ngay sau „so\" là lỗi trật tự từ thường gặp."
    },
    {
     "q": "Der Mieter haftet für Schäden an der Mietsache, ___ er sie zu vertreten hat.",
     "options": [
      "es sei denn",
      "soweit",
      "obwohl",
      "damit"
     ],
     "answer": 1,
     "vi": "Bên thuê chịu trách nhiệm đối với thiệt hại ở tài sản thuê trong chừng mực bên thuê phải chịu trách nhiệm về chúng.",
     "explain": "„soweit\" giới hạn phạm vi trách nhiệm và đòi động từ cuối câu. „es sei denn\" đi với câu V2 („es sei denn, er hat …\") và mang nghĩa ngược lại."
    },
    {
     "q": "Die Haftung des Verkäufers ist ausgeschlossen, es sei denn, ___ .",
     "options": [
      "er den Mangel arglistig verschwiegen hat",
      "hat er den Mangel arglistig verschwiegen",
      "dass er hat den Mangel arglistig verschwiegen",
      "er hat den Mangel arglistig verschwiegen"
     ],
     "answer": 3,
     "vi": "Trách nhiệm của người bán bị loại trừ, trừ khi người bán đã cố ý che giấu khuyết tật.",
     "explain": "Sau „es sei denn,\" dùng câu V2 hoặc „dass\" + động từ cuối. Câu động từ cuối mà không có „dass\" là sai."
    },
    {
     "q": "___ nichts anderes vereinbart ist, gilt die gesetzliche Kündigungsfrist.",
     "options": [
      "Sofern",
      "Es sei denn",
      "Ist",
      "Damit"
     ],
     "answer": 0,
     "vi": "Nếu không có thỏa thuận khác thì áp dụng thời hạn báo trước theo luật định.",
     "explain": "„sofern\" là liên từ điều kiện, động từ ở cuối câu phụ. „Ist\" không đi được vì động từ „ist\" đã nằm ở cuối, lặp lại hai lần."
    },
    {
     "q": "Wird der Bescheid nicht innerhalb eines Monats angefochten, so ___ er bestandskräftig.",
     "options": [
      "werde",
      "worden",
      "wird",
      "geworden"
     ],
     "answer": 2,
     "vi": "Nếu quyết định không bị khiếu nại trong vòng một tháng thì nó sẽ có hiệu lực không thể khiếu nại.",
     "explain": "Sau „so\" cần động từ chia ở Indikativ: „wird … bestandskräftig\". „werde\" là Konjunktiv I của câu gián tiếp, không dùng trong quy phạm."
    },
    {
     "q": "___ der Schuldner zahlungsunfähig werden, ist der Gläubiger zum Rücktritt berechtigt.",
     "options": [
      "Sollten",
      "Wenn",
      "Sollte",
      "Soll"
     ],
     "answer": 2,
     "vi": "Nếu con nợ mất khả năng thanh toán thì chủ nợ có quyền hủy hợp đồng.",
     "explain": "„Sollte\" ở đầu câu tạo câu điều kiện với khả năng xảy ra thấp; chủ ngữ số ít nên không dùng „Sollten\". „Wenn\" đòi động từ chia ở cuối („zahlungsunfähig wird\")."
    },
    {
     "q": "Hätte A die Frist eingehalten, ___ der Anspruch nicht verjährt.",
     "options": [
      "wäre",
      "hätte",
      "ist",
      "würde"
     ],
     "answer": 0,
     "vi": "Nếu A đã tuân thủ thời hạn thì quyền yêu cầu đã không bị hết thời hiệu.",
     "explain": "Điều kiện trái thực tế ở quá khứ dùng Konjunktiv II; „verjähren\" chia với sein nên dùng „wäre … verjährt\". „hätte\" sai trợ động từ."
    },
    {
     "q": "Im Falle ___ Zahlungsverzugs ist der Vermieter zur fristlosen Kündigung berechtigt.",
     "options": [
      "dem",
      "den",
      "der",
      "des"
     ],
     "answer": 3,
     "vi": "Trong trường hợp chậm thanh toán, bên cho thuê có quyền chấm dứt hợp đồng không cần báo trước.",
     "explain": "„im Falle\" + Genitiv; „Zahlungsverzug\" giống đực → „des Zahlungsverzugs\". „dem\" do nhầm với giới từ „in\"."
    },
    {
     "q": "Soweit die Klage begründet ist, ___ ihr stattzugeben.",
     "options": [
      "hat",
      "ist",
      "wird",
      "muss"
     ],
     "answer": 1,
     "vi": "Trong chừng mực đơn kiện có cơ sở thì phải chấp nhận nó.",
     "explain": "„sein + zu + Infinitiv\" diễn tả nghĩa vụ ở dạng bị động không chủ ngữ. „muss … stattzugeben\" sai vì động từ khuyết thiếu không đi với „zu\"."
    },
    {
     "q": "Câu điều kiện nào đúng ngữ pháp?",
     "options": [
      "Der Käufer hat den Mangel gekannt, so sind seine Rechte ausgeschlossen.",
      "Hat der Käufer den Mangel gekannt, so seine Rechte sind ausgeschlossen.",
      "Hat gekannt der Käufer den Mangel, so sind seine Rechte ausgeschlossen.",
      "Hat der Käufer den Mangel gekannt, so sind seine Rechte ausgeschlossen."
     ],
     "answer": 3,
     "vi": "Nếu người mua đã biết về khuyết tật thì các quyền của người mua bị loại trừ.",
     "explain": "Câu điều kiện không liên từ: động từ chia đầu câu, phân từ cuối câu; mệnh đề chính „so\" + động từ. Câu V2 thường („Der Käufer hat …\") không mang nghĩa điều kiện."
    },
    {
     "q": "Die Steuerermäßigung wird gewährt, ___ , dass die Voraussetzungen nachgewiesen werden.",
     "options": [
      "sofern",
      "vorausgesetzt",
      "soweit",
      "falls"
     ],
     "answer": 1,
     "vi": "Ưu đãi thuế được cấp với điều kiện là các điều kiện được chứng minh.",
     "explain": "Chỉ „vorausgesetzt\" kết hợp được với „, dass\". „sofern/falls\" tự là liên từ, không đi kèm „dass\"."
    },
    {
     "q": "Der Vertrag verlängert sich jeweils um ein Jahr, ___ er wird spätestens drei Monate vor Ablauf gekündigt.",
     "options": [
      "es sei denn",
      "sofern",
      "soweit",
      "wenn"
     ],
     "answer": 0,
     "vi": "Hợp đồng tự động gia hạn thêm một năm, trừ khi được chấm dứt chậm nhất ba tháng trước khi hết hạn.",
     "explain": "Phần sau có trật tự V2 („er wird … gekündigt\"), chỉ phù hợp với „es sei denn\". „sofern/soweit/wenn\" đòi động từ ở cuối câu."
    },
    {
     "q": "___ der Arbeitnehmer trotz aller zuzumutenden Sorgfalt verhindert, die Klage rechtzeitig zu erheben, so ist die Klage nachträglich zuzulassen.",
     "options": [
      "Wenn",
      "Hatte",
      "War",
      "Wurde"
     ],
     "answer": 2,
     "vi": "Nếu người lao động dù đã hết sức cẩn trọng vẫn bị cản trở không thể khởi kiện đúng hạn thì đơn kiện phải được chấp nhận muộn.",
     "explain": "„verhindert sein\" (bị cản trở) dùng trợ động từ sein: „War der Arbeitnehmer … verhindert\". „Wurde … verhindert\" sẽ cần tác nhân cản trở và sai với nghĩa trạng thái."
    }
   ]
  },
  {
   "title": "Tính hiệu lực trong quy phạm (Normsprache: muss, hat zu, soll, kann, darf, ist berechtigt)",
   "intro": "Mức độ ràng buộc trong ngôn ngữ luật:\n• Nghĩa vụ tuyệt đối: muss / hat … zu / ist verpflichtet, … zu / ist … zu (bị động): „Der Mieter hat Maßnahmen … zu dulden.\"\n• soll = nghĩa vụ trong trường hợp thông thường; chỉ được ngoại lệ trong trường hợp bất thường (atypischer Fall).\n• Quyền/khả năng: kann / darf / ist berechtigt (befugt), … zu / es steht … frei, … zu; „Jeder hat das Recht auf …\".\n• Cấm: darf nicht / ist nicht berechtigt; còn „muss nicht\" = „braucht nicht zu\" chỉ là không bắt buộc.\n• „zu\" đứng trước Infinitiv, với động từ tách chen vào giữa: zurückzutreten. Động từ khuyết thiếu (muss, darf, kann) không đi với „zu\".",
   "questions": [
    {
     "q": "Der Käufer ist verpflichtet, dem Verkäufer den vereinbarten Kaufpreis ___ zahlen.",
     "options": [
      "um zu",
      "zu",
      "für",
      "zum"
     ],
     "answer": 1,
     "vi": "Người mua có nghĩa vụ trả cho người bán giá mua đã thỏa thuận.",
     "explain": "„verpflichtet sein, … zu + Infinitiv\". „um zu\" diễn tả mục đích, không dùng sau „verpflichtet\"."
    },
    {
     "q": "Der Mieter ___ Maßnahmen, die zur Erhaltung der Mietsache erforderlich sind, zu dulden.",
     "options": [
      "ist",
      "muss",
      "soll",
      "hat"
     ],
     "answer": 3,
     "vi": "Bên thuê phải chấp nhận các biện pháp cần thiết để bảo trì tài sản thuê.",
     "explain": "Chủ ngữ là người có nghĩa vụ nên dùng „hat … zu dulden\". „muss/soll\" là động từ khuyết thiếu, không đi với „zu\"."
    },
    {
     "q": "Der Schuldner hat die Zwangsvollstreckung in sein Vermögen zu ___ .",
     "options": [
      "dulden",
      "duldet",
      "geduldet",
      "dulde"
     ],
     "answer": 0,
     "vi": "Con nợ phải chịu việc cưỡng chế thi hành án đối với tài sản của mình.",
     "explain": "Sau „hat … zu\" là Infinitiv nguyên mẫu „dulden\". „geduldet\" là Partizip II, chỉ dùng trong bị động."
    },
    {
     "q": "Der Vermieter ist ___ , die Mietsicherheit getrennt von seinem Vermögen anzulegen.",
     "options": [
      "verpflichtend",
      "Pflicht",
      "verpflichtet",
      "verpflichten"
     ],
     "answer": 2,
     "vi": "Bên cho thuê có nghĩa vụ gửi tiền đặt cọc tách biệt với tài sản của mình.",
     "explain": "Cấu trúc cố định „ist verpflichtet, … zu\" dùng Partizip II. „verpflichtend\" (mang tính bắt buộc) mô tả sự việc, không mô tả người."
    },
    {
     "q": "Personenbezogene Daten ___ ohne Einwilligung der betroffenen Person nicht weitergegeben werden.",
     "options": [
      "müssen",
      "brauchen",
      "dürfen",
      "haben"
     ],
     "answer": 2,
     "vi": "Dữ liệu cá nhân không được phép chuyển giao khi không có sự đồng ý của người liên quan.",
     "explain": "Lệnh cấm diễn đạt bằng „dürfen nicht\". „müssen nicht\" chỉ có nghĩa „không bắt buộc\", không phải cấm; „brauchen\" thiếu „zu\"."
    },
    {
     "q": "Theo ngôn ngữ luật, câu „Der Antrag soll begründet werden.\" có nghĩa là gì?",
     "options": [
      "Der Antrag ist in der Regel zu begründen; nur in atypischen Fällen darf davon abgesehen werden.",
      "Der Antrag darf auf keinen Fall ohne Begründung eingereicht werden.",
      "Es steht dem Antragsteller völlig frei, ob er den Antrag begründet.",
      "Der Antrag darf nicht begründet werden."
     ],
     "answer": 0,
     "vi": "Đơn theo nguyên tắc phải có lý do; chỉ trong trường hợp bất thường mới được bỏ qua.",
     "explain": "„soll\" trong luật là nghĩa vụ áp dụng cho trường hợp thông thường, cho phép ngoại lệ. Hiểu „soll\" là tuyệt đối („auf keinen Fall\") là nhầm với „muss\"."
    },
    {
     "q": "Der Gläubiger ist berechtigt, vom Vertrag ___ .",
     "options": [
      "zurück zu treten",
      "zu zurücktreten",
      "zurücktreten",
      "zurückzutreten"
     ],
     "answer": 3,
     "vi": "Chủ nợ có quyền hủy bỏ hợp đồng.",
     "explain": "Động từ tách „zurücktreten\": „zu\" chen giữa tiền tố và gốc, viết liền „zurückzutreten\". „zu zurücktreten\" đặt sai vị trí của „zu\"."
    },
    {
     "q": "Der Bescheid ___ nicht begründet zu werden, wenn dem Antrag in vollem Umfang entsprochen wird.",
     "options": [
      "darf",
      "braucht",
      "muss",
      "soll"
     ],
     "answer": 1,
     "vi": "Quyết định không cần phải nêu lý do nếu đơn được chấp thuận toàn bộ.",
     "explain": "„nicht brauchen + zu\" = không cần. „darf/muss/soll\" là động từ khuyết thiếu, không đi với „zu\"."
    },
    {
     "q": "Dem Arbeitnehmer ___ bei Beendigung des Arbeitsverhältnisses ein schriftliches Zeugnis zu erteilen.",
     "options": [
      "hat",
      "muss",
      "wird",
      "ist"
     ],
     "answer": 3,
     "vi": "Khi chấm dứt quan hệ lao động, người lao động phải được cấp giấy chứng nhận bằng văn bản.",
     "explain": "Chủ ngữ là „ein schriftliches Zeugnis\" (vật được cấp), nên dùng „ist … zu erteilen\" (bị động). „hat … zu\" cần chủ ngữ là người thực hiện."
    },
    {
     "q": "Jeder ___ das Recht auf die freie Entfaltung seiner Persönlichkeit.",
     "options": [
      "ist",
      "hat",
      "darf",
      "kann"
     ],
     "answer": 1,
     "vi": "Mọi người đều có quyền tự do phát triển nhân cách của mình.",
     "explain": "Cụm cố định „das Recht auf etwas haben\" (Điều 2 GG). „darf/kann das Recht\" thiếu động từ chính."
    },
    {
     "q": "Es steht dem Erben ___ , die Erbschaft auszuschlagen.",
     "options": [
      "frei",
      "zu",
      "bereit",
      "fest"
     ],
     "answer": 0,
     "vi": "Người thừa kế được tự do từ chối di sản.",
     "explain": "„Es steht jemandem frei, … zu\" = ai đó được tự do làm gì. „Es steht fest\" nghĩa là „đã được xác định\", không đi với Infinitiv kiểu này."
    },
    {
     "q": "Der Mieter ist ohne die Erlaubnis des Vermieters nicht ___ , den Gebrauch der Mietsache einem Dritten zu überlassen.",
     "options": [
      "darf",
      "kann",
      "berechtigt",
      "erlaubt"
     ],
     "answer": 2,
     "vi": "Nếu không được bên cho thuê cho phép, bên thuê không có quyền giao việc sử dụng tài sản thuê cho người thứ ba.",
     "explain": "„ist (nicht) berechtigt, … zu\" là cấu trúc chuẩn. „ist nicht erlaubt\" sai vì người không thể „được cho phép\" theo cấu trúc này (phải là „es ist ihm nicht erlaubt\")."
    },
    {
     "q": "Câu nào diễn đạt một quyền (Befugnis), không phải nghĩa vụ?",
     "options": [
      "Der Vermieter hat die Miete zu erhöhen.",
      "Der Vermieter ist berechtigt, die Miete zu erhöhen.",
      "Der Vermieter ist verpflichtet, die Miete zu erhöhen.",
      "Die Miete ist vom Vermieter zu erhöhen."
     ],
     "answer": 1,
     "vi": "Bên cho thuê có quyền tăng tiền thuê.",
     "explain": "„ist berechtigt\" diễn đạt quyền. „hat … zu\", „ist verpflichtet\" và „ist … zu\" đều diễn đạt nghĩa vụ."
    },
    {
     "q": "Wer vorsätzlich oder fahrlässig das Eigentum eines anderen widerrechtlich verletzt, ist dem anderen zum Ersatz des daraus entstehenden Schadens ___ .",
     "options": [
      "verpflichtet",
      "berechtigt",
      "verpflichten",
      "pflichtig"
     ],
     "answer": 0,
     "vi": "Người nào cố ý hoặc vô ý xâm phạm trái pháp luật quyền sở hữu của người khác thì có nghĩa vụ bồi thường cho người đó thiệt hại phát sinh.",
     "explain": "„zu etwas verpflichtet sein\" (§ 823 BGB). „berechtigt\" đúng ngữ pháp nhưng đảo nghĩa: người gây thiệt hại không có quyền mà có nghĩa vụ bồi thường."
    },
    {
     "q": "Ein rechtswidriger Verwaltungsakt, der ein Recht begründet hat, ___ nur unter den Einschränkungen der Absätze 2 bis 4 zurückgenommen werden.",
     "options": [
      "hat",
      "ist",
      "braucht",
      "darf"
     ],
     "answer": 3,
     "vi": "Một văn bản hành chính trái luật đã tạo lập quyền chỉ được thu hồi với những hạn chế của khoản 2 đến 4.",
     "explain": "„darf nur … werden\" giới hạn sự cho phép. „ist/hat/braucht\" sẽ đòi „zu\" trước Infinitiv („zurückgenommen zu werden\")."
    }
   ]
  },
  {
   "title": "Cấu trúc phân từ & cụm động từ chức năng trong luật (Partizipialattribute, Funktionsverbgefüge)",
   "intro": "Erweitertes Partizipialattribut: mạo từ + các bổ ngữ + phân từ (chia đuôi như tính từ) + danh từ: „der vom Gericht bestellte Sachverständige\" (= der Sachverständige, der vom Gericht bestellt wurde).\n• Partizip II: bị động/đã xảy ra (die eingelegte Berufung). Partizip I: chủ động/đồng thời (die beiliegenden Unterlagen).\n• Gerundiv „zu + Partizip I\" = phải/có thể được làm: „die zu zahlende Steuer\", „die abzugebende Steuererklärung\" (động từ tách: ab-zu-gebende).\nFunktionsverbgefüge thường gặp: Klage erheben, Einspruch/Berufung einlegen, einen Antrag stellen, einen Beschluss fassen, in Kraft / außer Kraft treten, Anwendung finden, Rechnung tragen + Dat, zur Last fallen + Dat, in Anspruch nehmen.",
   "questions": [
    {
     "q": "Der Kläger hat beim Landgericht Klage ___ .",
     "options": [
      "gemacht",
      "gestellt",
      "erhoben",
      "gegeben"
     ],
     "answer": 2,
     "vi": "Nguyên đơn đã khởi kiện tại Tòa án cấp bang.",
     "explain": "Cụm cố định là „Klage erheben\". „Klage stellen\" là lỗi do nhầm với „einen Antrag stellen\"."
    },
    {
     "q": "Gegen den Steuerbescheid kann innerhalb eines Monats Einspruch ___ werden.",
     "options": [
      "gestellt",
      "gemacht",
      "eingelegt",
      "getan"
     ],
     "answer": 2,
     "vi": "Có thể khiếu nại quyết định thuế trong vòng một tháng.",
     "explain": "„Einspruch einlegen\" là cụm động từ chức năng chuẩn trong luật thuế. „gestellt\" là nhầm với „einen Antrag stellen\"."
    },
    {
     "q": "Das Gesetz ___ am 1. Januar 2025 in Kraft.",
     "options": [
      "tritt",
      "kommt",
      "geht",
      "setzt"
     ],
     "answer": 0,
     "vi": "Luật có hiệu lực từ ngày 1 tháng 1 năm 2025.",
     "explain": "Cụm cố định „in Kraft treten\". „in Kraft setzen\" cần tân ngữ Akkusativ (ai đó đưa luật vào hiệu lực)."
    },
    {
     "q": "Der vom Gericht ___ Sachverständige hat sein Gutachten vorgelegt.",
     "options": [
      "bestellende",
      "bestellt",
      "bestellten",
      "bestellte"
     ],
     "answer": 3,
     "vi": "Giám định viên do tòa án chỉ định đã nộp bản giám định.",
     "explain": "Partizip II (nghĩa bị động: được tòa chỉ định) chia như tính từ sau „der\" (Nominativ giống đực): „bestellte\". „bestellende\" là Partizip I mang nghĩa chủ động, sai nghĩa."
    },
    {
     "q": "Die ___ Einkommensteuer wird durch Bescheid festgesetzt.",
     "options": [
      "zu zahlenden",
      "zu zahlende",
      "zahlende",
      "zu gezahlte"
     ],
     "answer": 1,
     "vi": "Thuế thu nhập phải nộp được ấn định bằng quyết định.",
     "explain": "Gerundiv „zu + Partizip I\" = phải được nộp; sau „die\" (Nominativ giống cái) đuôi -e. „zahlende\" mang nghĩa chủ động (thuế đang trả tiền) nên sai."
    },
    {
     "q": "Der Gemeinderat hat in seiner Sitzung einen Beschluss ___ .",
     "options": [
      "gemacht",
      "gegeben",
      "gestellt",
      "gefasst"
     ],
     "answer": 3,
     "vi": "Hội đồng xã đã ra một nghị quyết trong phiên họp.",
     "explain": "Cụm cố định „einen Beschluss fassen\". „Beschluss machen\" là lỗi dịch từng chữ."
    },
    {
     "q": "Die bis zum 31. Juli ___ Steuererklärung ist elektronisch zu übermitteln.",
     "options": [
      "abgebende",
      "abzugebende",
      "zu abgebende",
      "abzugeben"
     ],
     "answer": 1,
     "vi": "Tờ khai thuế phải nộp trước ngày 31 tháng 7 phải được truyền điện tử.",
     "explain": "Gerundiv của động từ tách: „zu\" chen vào giữa: „abzugebende\". „zu abgebende\" đặt sai „zu\"; „abzugeben\" thiếu đuôi tính từ."
    },
    {
     "q": "Der Gesetzgeber hat dieser Entwicklung ___ getragen.",
     "options": [
      "Rechnung",
      "Last",
      "Folge",
      "Kenntnis"
     ],
     "answer": 0,
     "vi": "Nhà làm luật đã tính đến sự phát triển này.",
     "explain": "„einer Sache Rechnung tragen\" = tính đến, xem xét điều gì. „Folge\" đi với „leisten\" (Folge leisten), không đi với „tragen\"."
    },
    {
     "q": "Der am 3. März ___ Vertrag ist wegen Formmangels nichtig.",
     "options": [
      "schließende",
      "geschlossenen",
      "geschlossene",
      "geschlossener"
     ],
     "answer": 2,
     "vi": "Hợp đồng được ký kết ngày 3 tháng 3 vô hiệu do thiếu hình thức.",
     "explain": "Rút gọn từ „der Vertrag, der am 3. März geschlossen wurde\": Partizip II, Nominativ giống đực sau „der\" → „geschlossene\". „geschlossener\" là đuôi mạnh khi không có mạo từ."
    },
    {
     "q": "Die dem Antrag ___ Unterlagen sind unvollständig.",
     "options": [
      "beiliegende",
      "beiliegenden",
      "beiliegender",
      "beizuliegenden"
     ],
     "answer": 1,
     "vi": "Các tài liệu kèm theo đơn không đầy đủ.",
     "explain": "Partizip I (đang nằm kèm) sau „die\" ở số nhiều Nominativ chia đuôi -en: „beiliegenden\". „beiliegende\" là đuôi số ít."
    },
    {
     "q": "Dem Schuldner fällt grobe Fahrlässigkeit zur ___ .",
     "options": [
      "Last",
      "Schuld",
      "Lasten",
      "Verantwortung"
     ],
     "answer": 0,
     "vi": "Con nợ bị quy lỗi vô ý nghiêm trọng.",
     "explain": "Cụm cố định „jemandem zur Last fallen\" = bị quy cho ai. „zur Schuld fallen\" không tồn tại; „zu Lasten\" là cụm khác (zu Lasten von)."
    },
    {
     "q": "Mit Inkrafttreten dieses Gesetzes tritt das bisherige Gesetz ___ Kraft.",
     "options": [
      "aus",
      "ohne",
      "von",
      "außer"
     ],
     "answer": 3,
     "vi": "Khi luật này có hiệu lực, luật trước đây hết hiệu lực.",
     "explain": "Đối lập với „in Kraft treten\" là „außer Kraft treten\". „aus Kraft\" là lỗi suy luận từ „aus\" (ra khỏi)."
    },
    {
     "q": "Der Bürge kann erst nach erfolgloser Zwangsvollstreckung gegen den Hauptschuldner in ___ genommen werden.",
     "options": [
      "Rechnung",
      "Anspruch",
      "Kraft",
      "Antrag"
     ],
     "answer": 1,
     "vi": "Người bảo lãnh chỉ có thể bị yêu cầu thực hiện nghĩa vụ sau khi việc cưỡng chế đối với con nợ chính không thành công.",
     "explain": "„jemanden in Anspruch nehmen\" = yêu cầu ai thực hiện nghĩa vụ. „in Rechnung nehmen\" không phải cụm chuẩn (phải là „in Rechnung stellen\")."
    },
    {
     "q": "Câu nào chứa Partizipialattribut đúng?",
     "options": [
      "Die rechtzeitig eingelegte von der Klägerin Berufung ist zulässig.",
      "Die von der Klägerin rechtzeitig eingelegten Berufung ist zulässig.",
      "Die von der Klägerin rechtzeitig einlegende Berufung ist zulässig.",
      "Die von der Klägerin rechtzeitig eingelegte Berufung ist zulässig."
     ],
     "answer": 3,
     "vi": "Đơn kháng cáo do nguyên đơn nộp đúng hạn là hợp lệ.",
     "explain": "Các bổ ngữ đứng giữa mạo từ và phân từ, phân từ đứng ngay trước danh từ với đuôi phù hợp („eingelegte\", Nominativ giống cái). Đuôi „-en\" sai cách; „einlegende\" mang nghĩa chủ động."
    },
    {
     "q": "Die vom Arbeitgeber für den Monat Mai einzubehaltende und an das Finanzamt ___ Lohnsteuer beträgt 450 Euro.",
     "options": [
      "abzuführende",
      "abzuführenden",
      "zu abführende",
      "abführende"
     ],
     "answer": 0,
     "vi": "Khoản thuế tiền lương mà người sử dụng lao động phải khấu trừ cho tháng 5 và nộp cho cơ quan thuế là 450 euro.",
     "explain": "Hai Gerundiv song song phải cùng dạng và đuôi: „einzubehaltende und abzuführende\" (Nominativ giống cái). „abzuführenden\" sai đuôi; „abführende\" mất nghĩa „phải\"."
    }
   ]
  },
  {
   "title": "Dẫn chiếu & trích dẫn luật (Verweisungen: gemäß § … Abs. … BGB, i. V. m., entsprechend)",
   "intro": "Trích dẫn theo thứ tự từ lớn đến nhỏ: § (Paragraph, giống đực) – Abs. (Absatz, giống đực) – S. (Satz, giống đực) – Nr. (Nummer, giống cái) – Buchst. (Buchstabe) – tên luật: „§ 433 Abs. 2 BGB\"; hiến pháp dùng Art. (Artikel): „Art. 3 Abs. 1 GG\". Nhiều điều: §§; „f.\" = và điều tiếp theo, „ff.\" = và các điều tiếp theo.\nKhi có mạo từ, chọn theo giống của danh từ chỉ đơn vị: „die Voraussetzungen des § 823\", „im Sinne der Nummer 3\", „die Frist des Absatzes 1\"; không có mạo từ thì số đứng sau danh từ không biến đổi: „in Satz 1\", „nach Absatz 2\".\nViết tắt: i. V. m. = in Verbindung mit (+ Dat), i. S. d. = im Sinne des/der, gem. = gemäß (+ Dat), a. F./n. F. = phiên bản cũ/mới. „gilt entsprechend\" = áp dụng tương tự; „abweichend von\" = khác với.\nLuật thường gặp: BGB (Dân luật), StGB (Hình luật), ZPO (Tố tụng dân sự), AO (Luật quản lý thuế), EStG (Luật thuế thu nhập), HGB (Luật thương mại), GG (Hiến pháp).",
   "questions": [
    {
     "q": "Der Käufer ist gemäß ___ 433 Abs. 2 BGB verpflichtet, den Kaufpreis zu zahlen.",
     "options": [
      "§§",
      "Art.",
      "Abs.",
      "§"
     ],
     "answer": 3,
     "vi": "Theo § 433 khoản 2 BGB, người mua có nghĩa vụ trả giá mua.",
     "explain": "BGB được chia thành Paragraphen nên dùng „§\" cho một điều. „Art.\" chỉ dùng cho luật chia theo Artikel như GG; „§§\" là số nhiều."
    },
    {
     "q": "Der Anspruch ergibt sich aus § 280 Abs. 1 ___ § 241 Abs. 2 BGB.",
     "options": [
      "u. a.",
      "i. V. m.",
      "z. B.",
      "d. h."
     ],
     "answer": 1,
     "vi": "Quyền yêu cầu phát sinh từ § 280 khoản 1 kết hợp với § 241 khoản 2 BGB.",
     "explain": "„i. V. m.\" (in Verbindung mit) nối hai quy phạm cùng làm căn cứ. „d. h.\" (nghĩa là) giải thích chứ không kết hợp căn cứ."
    },
    {
     "q": "Die Voraussetzungen ___ § 823 Abs. 1 BGB liegen vor.",
     "options": [
      "der",
      "dem",
      "den",
      "des"
     ],
     "answer": 3,
     "vi": "Các điều kiện của § 823 khoản 1 BGB được đáp ứng.",
     "explain": "„Paragraph\" giống đực, Genitiv có mạo từ: „des § 823\" (số không biến đổi). „der\" là lỗi do nhầm theo „Voraussetzungen\" số nhiều."
    },
    {
     "q": "Im Sinne ___ Nummer 3 ist Unternehmer, wer in Ausübung seiner gewerblichen Tätigkeit handelt.",
     "options": [
      "des",
      "der",
      "dem",
      "die"
     ],
     "answer": 1,
     "vi": "Theo nghĩa của điểm 3, doanh nhân là người hành động trong khuôn khổ hoạt động kinh doanh của mình.",
     "explain": "„Nummer\" giống cái → Genitiv „der Nummer 3\". „des\" dễ bị dùng nhầm theo „des Absatzes/des §\"."
    },
    {
     "q": "Die Ausnahme ___ Satz 2 gilt nicht für Verbraucher.",
     "options": [
      "nach",
      "im",
      "des",
      "mit"
     ],
     "answer": 0,
     "vi": "Ngoại lệ theo câu 2 không áp dụng cho người tiêu dùng.",
     "explain": "„nach Satz 2\" = theo câu 2, số đứng sau danh từ không biến đổi. „des Satz 2\" sai vì có mạo từ thì phải là „des Satzes 2\"."
    },
    {
     "q": "Für den Tausch gelten die Vorschriften über den Kauf ___ .",
     "options": [
      "entsprechende",
      "entsprochen",
      "entsprechend",
      "entsprechender"
     ],
     "answer": 2,
     "vi": "Đối với hợp đồng trao đổi, các quy định về mua bán được áp dụng tương tự.",
     "explain": "„entsprechend\" dùng như trạng từ bổ nghĩa cho „gelten\" nên không chia đuôi. „entsprechende\" là tính từ, chỉ đứng trước danh từ."
    },
    {
     "q": "Die Regelungen der ___ 280 ff. BGB betreffen Leistungsstörungen.",
     "options": [
      "§",
      "§§",
      "Art.",
      "Abs."
     ],
     "answer": 1,
     "vi": "Các quy định tại §§ 280 và các điều tiếp theo của BGB liên quan đến vi phạm nghĩa vụ.",
     "explain": "„ff.\" chỉ nhiều điều và mạo từ „der\" ở đây là Genitiv số nhiều, nên dùng „§§\". Với một § thì mạo từ phải là „des\"."
    },
    {
     "q": "Gemäß Art. 3 Abs. 1 ___ sind alle Menschen vor dem Gesetz gleich.",
     "options": [
      "GG",
      "BGB",
      "StGB",
      "AO"
     ],
     "answer": 0,
     "vi": "Theo Điều 3 khoản 1 Hiến pháp, mọi người đều bình đẳng trước pháp luật.",
     "explain": "Nguyên tắc bình đẳng nằm ở Grundgesetz, và chỉ GG trong các lựa chọn được chia theo Artikel; BGB, StGB, AO dùng §."
    },
    {
     "q": "Die Frist ___ Absatzes 1 beträgt zwei Wochen.",
     "options": [
      "der",
      "dem",
      "das",
      "des"
     ],
     "answer": 3,
     "vi": "Thời hạn theo khoản 1 là hai tuần.",
     "explain": "„Absatz\" giống đực, Genitiv „des Absatzes 1\" (danh từ nhận đuôi -es). „der\" sai giống."
    },
    {
     "q": "Die Änderung des Steuerbescheids ist nach § 173 Abs. 1 Nr. 1 ___ zulässig, weil neue Tatsachen bekannt geworden sind.",
     "options": [
      "BGB",
      "AO",
      "ZPO",
      "HGB"
     ],
     "answer": 1,
     "vi": "Việc sửa đổi quyết định thuế được phép theo § 173 khoản 1 số 1 AO vì đã phát hiện các sự kiện mới.",
     "explain": "Sửa đổi quyết định thuế được quy định trong Abgabenordnung (AO). BGB là Bộ luật Dân sự, không điều chỉnh thủ tục thuế."
    },
    {
     "q": "Abweichend ___ Absatz 1 kann die Frist auf Antrag verlängert werden.",
     "options": [
      "zu",
      "mit",
      "nach",
      "von"
     ],
     "answer": 3,
     "vi": "Khác với khoản 1, thời hạn có thể được gia hạn theo đơn đề nghị.",
     "explain": "Cụm cố định „abweichend von + Dativ\". „abweichend nach\" là lỗi trộn với „nach Absatz 1\"."
    },
    {
     "q": "Unternehmer ___ § 14 BGB ist, wer bei Abschluss eines Rechtsgeschäfts in Ausübung seiner gewerblichen Tätigkeit handelt.",
     "options": [
      "i. S. d.",
      "i. V. m.",
      "d. h.",
      "u. U."
     ],
     "answer": 0,
     "vi": "Doanh nhân theo nghĩa của § 14 BGB là người khi giao kết giao dịch pháp lý hành động trong khuôn khổ hoạt động kinh doanh của mình.",
     "explain": "„i. S. d.\" (im Sinne des) dẫn chiếu đến định nghĩa của một điều luật. „i. V. m.\" dùng để nối hai quy phạm, ở đây không có quy phạm thứ nhất."
    },
    {
     "q": "Cách trích dẫn nào đúng?",
     "options": [
      "nach § 433 Satz 1 Abs. 1 BGB",
      "nach BGB § 433 Abs. 1 Satz 1",
      "nach § 433 Abs. 1 Satz 1 BGB",
      "nach § 433 Abs. 1 Satz 1 des BGBs"
     ],
     "answer": 2,
     "vi": "theo § 433 khoản 1 câu 1 BGB",
     "explain": "Thứ tự chuẩn từ lớn đến nhỏ: § – Abs. – Satz, tên luật viết tắt đứng cuối, không mạo từ và không đuôi -s. Đảo Satz trước Abs. là sai cấp bậc."
    },
    {
     "q": "Die in ___ genannten Voraussetzungen müssen kumulativ vorliegen.",
     "options": [
      "Satzes 1",
      "Sätze 1",
      "Satz 1",
      "den Satz 1"
     ],
     "answer": 2,
     "vi": "Các điều kiện nêu tại câu 1 phải đồng thời được đáp ứng.",
     "explain": "Không có mạo từ, danh từ chỉ đơn vị giữ nguyên dạng: „in Satz 1\". „Satzes\" là Genitiv, chỉ dùng sau „des\"."
    },
    {
     "q": "Cách đọc nào đúng cho „§ 15 Abs. 1 S. 1 Nr. 2 EStG\"?",
     "options": [
      "Paragraf fünfzehn Absatz eins Satz eins Nummer zwei des Einkommensteuergesetzes",
      "Paragraf fünfzehn Absatz eins Satz eins Nummer zwei der Einkommensteuergesetz",
      "Paragrafen fünfzehn Abschnitt eins Satz eins Nummer zwei des Einkommensteuergesetzes",
      "Paragraf fünfzehn Absatz eins Seite eins Nummer zwei des Einkommensteuergesetzes"
     ],
     "answer": 0,
     "vi": "Điều 15 khoản 1 câu 1 số 2 của Luật thuế thu nhập",
     "explain": "Abs. = Absatz, S. = Satz (không phải Seite), tên luật ở Genitiv giống trung: „des Einkommensteuergesetzes\". „Abschnitt\" là chương/mục, khác với Absatz."
    }
   ]
  }
 ]
};
