// Đề luyện viết: thư, bài nêu ý kiến, giải tình huống theo Gutachtenstil (luật & thuế)
const WRITING = {
 "tasks": [
  {
   "level": "B1",
   "area": "Brief",
   "title": "E-Mail an die Ausländerbehörde: Termin zur Verlängerung der Aufenthaltserlaubnis",
   "title_vi": "Email gửi Sở Ngoại kiều: Xin lịch hẹn gia hạn giấy phép cư trú",
   "prompt": "Situation: Sie studieren seit einem Jahr Rechtswissenschaft in Leipzig. Ihre Aufenthaltserlaubnis zum Zweck des Studiums läuft in sechs Wochen ab. Im Online-Terminsystem der Ausländerbehörde finden Sie keinen freien Termin.\nSchreiben Sie eine formelle E-Mail an die Ausländerbehörde. Gehen Sie auf folgende Punkte ein:\n– Stellen Sie sich kurz vor (Name, Studium, Ablaufdatum der Aufenthaltserlaubnis).\n– Bitten Sie um einen Termin zur Verlängerung.\n– Fragen Sie, welche Unterlagen Sie mitbringen müssen.\n– Fragen Sie, was passiert, wenn der Termin erst nach dem Ablaufdatum stattfindet.\nAchten Sie auf Betreff, Anrede, Grußformel und eine sinnvolle Reihenfolge.",
   "prompt_vi": "Tình huống: Bạn đã học ngành Luật ở Leipzig được một năm. Giấy phép cư trú với mục đích du học của bạn sẽ hết hạn sau sáu tuần. Trên hệ thống đặt lịch trực tuyến của Sở Ngoại kiều, bạn không tìm được lịch hẹn trống nào.\nHãy viết một email trang trọng gửi Sở Ngoại kiều, đề cập các ý sau:\n– Giới thiệu ngắn về bản thân (họ tên, ngành học, ngày hết hạn giấy phép cư trú).\n– Xin một lịch hẹn để gia hạn.\n– Hỏi cần mang theo những giấy tờ gì.\n– Hỏi điều gì sẽ xảy ra nếu lịch hẹn rơi vào sau ngày hết hạn.\nChú ý tiêu đề (Betreff), lời chào mở đầu, lời chào kết thúc và trình tự hợp lý.",
   "words": "120–150 Wörter",
   "model": "Betreff: Bitte um einen Termin zur Verlängerung meiner Aufenthaltserlaubnis (Studium)\n\nSehr geehrte Damen und Herren,\n\nmein Name ist Lan Nguyen, ich bin vietnamesische Staatsangehörige und studiere seit Oktober 2025 Rechtswissenschaft an der Universität Leipzig. Meine Aufenthaltserlaubnis zum Zweck des Studiums läuft am 31. Januar 2027 ab.\n\nIch möchte meine Aufenthaltserlaubnis rechtzeitig verlängern lassen. Leider konnte ich im Online-System keinen freien Termin finden. Deshalb bitte ich Sie, mir einen Termin vor dem Ablaufdatum zu geben.\n\nAußerdem habe ich zwei Fragen:\n1. Welche Unterlagen muss ich mitbringen? Ich habe eine Immatrikulationsbescheinigung, einen Nachweis über mein Sperrkonto und eine Bescheinigung meiner Krankenversicherung.\n2. Was passiert, wenn der Termin erst nach dem 31. Januar 2027 stattfindet? Bekomme ich in diesem Fall eine Fiktionsbescheinigung?\n\nVielen Dank im Voraus für Ihre Hilfe.\n\nMit freundlichen Grüßen\nLan Nguyen\nGeburtsdatum: 14.05.2004\nE-Mail: lan.nguyen@example.de",
   "model_vi": "Bài mẫu mở đầu bằng một tiêu đề cụ thể, nêu rõ mục đích: xin lịch hẹn gia hạn giấy phép cư trú. Sau lời chào trang trọng „Sehr geehrte Damen und Herren,“, người viết giới thiệu tên, quốc tịch, ngành học và ngày hết hạn giấy phép. Đoạn thứ hai trình bày vấn đề (không tìm được lịch hẹn trực tuyến) và đưa ra lời đề nghị lịch sự. Hai câu hỏi được đánh số rõ ràng: giấy tờ cần mang theo và điều gì xảy ra nếu lịch hẹn sau ngày hết hạn (giấy chứng nhận cư trú tạm thời – Fiktionsbescheinigung). Bài kết thúc bằng lời cảm ơn, „Mit freundlichen Grüßen“ không có dấu phẩy, họ tên và thông tin liên hệ. Toàn bài dùng ngôi „Sie“ và câu ngắn, rõ ràng, phù hợp trình độ B1.",
   "checklist": [
    {
     "de": "Betreff ist klar und konkret formuliert",
     "vi": "Tiêu đề rõ ràng, cụ thể"
    },
    {
     "de": "Formelle Anrede, danach klein weitergeschrieben",
     "vi": "Lời chào trang trọng, sau dấu phẩy viết thường chữ đầu câu"
    },
    {
     "de": "Alle vier Inhaltspunkte sind behandelt",
     "vi": "Đã đề cập đủ bốn ý của đề bài"
    },
    {
     "de": "Durchgehend Sie-Form verwendet",
     "vi": "Dùng ngôi „Sie“ nhất quán"
    },
    {
     "de": "Bitte höflich formuliert (z. B. „Ich bitte Sie …“, „Könnten Sie …?“)",
     "vi": "Lời đề nghị được diễn đạt lịch sự"
    },
    {
     "de": "Fragen sind übersichtlich gegliedert",
     "vi": "Các câu hỏi được trình bày rõ ràng, có đánh số"
    },
    {
     "de": "Grußformel „Mit freundlichen Grüßen“ ohne Komma, darunter der Name",
     "vi": "Lời chào kết „Mit freundlichen Grüßen“ không có dấu phẩy, bên dưới là họ tên"
    },
    {
     "de": "Wichtige Angaben (Ablaufdatum, Kontakt) sind enthalten",
     "vi": "Có đủ thông tin quan trọng (ngày hết hạn, liên hệ)"
    }
   ],
   "redemittel": [
    "Hiermit bitte ich Sie um einen Termin zur Verlängerung meiner Aufenthaltserlaubnis.",
    "Meine Aufenthaltserlaubnis läuft am … ab.",
    "Leider konnte ich online keinen freien Termin finden.",
    "Könnten Sie mir bitte mitteilen, welche Unterlagen ich mitbringen muss?",
    "Ich wäre Ihnen sehr dankbar, wenn …",
    "Für Rückfragen stehe ich Ihnen gern zur Verfügung.",
    "Vielen Dank im Voraus für Ihre Hilfe.",
    "Mit freundlichen Grüßen"
   ]
  },
  {
   "level": "B1",
   "area": "Brief",
   "title": "Beschwerde an den Vermieter: Heizung defekt und undichtes Fenster",
   "title_vi": "Thư khiếu nại gửi chủ nhà: Lò sưởi hỏng và cửa sổ bị dột",
   "prompt": "Situation: Es ist Anfang Dezember. Seit zehn Tagen funktioniert die Heizung in Ihrer Mietwohnung nicht. Sie haben die Hausverwaltung schon zweimal angerufen, aber niemand ist gekommen. Außerdem ist das Fenster im Badezimmer undicht, und an der Wand entsteht Schimmel.\nSchreiben Sie einen Brief an Ihren Vermieter, Herrn Becker. Gehen Sie auf folgende Punkte ein:\n– Beschreiben Sie die Mängel und seit wann sie bestehen.\n– Erklären Sie, was Sie bereits unternommen haben.\n– Setzen Sie eine Frist für die Reparatur.\n– Weisen Sie auf die Möglichkeit einer Mietminderung hin.",
   "prompt_vi": "Tình huống: Bây giờ là đầu tháng Mười Hai. Đã mười ngày nay lò sưởi trong căn hộ bạn thuê không hoạt động. Bạn đã gọi điện cho công ty quản lý nhà hai lần nhưng không ai đến. Ngoài ra, cửa sổ phòng tắm bị dột và trên tường bắt đầu có nấm mốc.\nHãy viết thư cho chủ nhà, ông Becker, đề cập các ý sau:\n– Mô tả các hư hỏng và chúng xảy ra từ khi nào.\n– Giải thích những gì bạn đã làm.\n– Đặt ra thời hạn sửa chữa.\n– Lưu ý về khả năng giảm tiền thuê nhà.",
   "words": "150–180 Wörter",
   "model": "Hoa Tran\nBeispielstraße 12\n04109 Leipzig\n\nHerrn\nKlaus Becker\nMusterweg 5\n04103 Leipzig\n\nLeipzig, 4. Dezember 2026\n\nMängelanzeige: Ausfall der Heizung und undichtes Badfenster (Beispielstraße 12, 2. OG links)\n\nSehr geehrter Herr Becker,\n\nseit dem 24. November 2026 funktioniert die Heizung in meiner Wohnung nicht mehr. Die Heizkörper in allen Zimmern bleiben kalt, und in der Wohnung sind es nur noch etwa 14 Grad. Ich habe Ihre Hausverwaltung bereits am 25. und am 28. November telefonisch informiert, aber bisher ist kein Handwerker gekommen.\n\nAußerdem ist das Fenster im Badezimmer undicht. Bei Regen läuft Wasser auf die Fensterbank, und an der Wand bildet sich schon Schimmel.\n\nIch fordere Sie daher auf, beide Mängel bis spätestens 11. Dezember 2026 beseitigen zu lassen. Bitte teilen Sie mir rechtzeitig mit, wann der Handwerker kommt.\n\nBitte beachten Sie: Solange die Mängel bestehen, ist die Miete nach § 536 BGB kraft Gesetzes gemindert. Ich zahle die Miete deshalb ab sofort nur noch unter Vorbehalt.\n\nMit freundlichen Grüßen\nHoa Tran",
   "model_vi": "Bài mẫu có đầy đủ hình thức thư chính thức: địa chỉ người gửi, địa chỉ người nhận, nơi và ngày viết, dòng tiêu đề („Mängelanzeige“ – thông báo hư hỏng). Đoạn đầu mô tả cụ thể hư hỏng (lò sưởi không chạy từ ngày 24/11, nhiệt độ chỉ khoảng 14 độ) và những gì người thuê đã làm (hai lần gọi điện). Đoạn thứ hai mô tả vấn đề thứ hai: cửa sổ phòng tắm bị dột và nấm mốc. Tiếp theo là yêu cầu rõ ràng kèm thời hạn cụ thể (đến ngày 11/12). Cuối thư, người viết lưu ý rằng theo § 536 BGB tiền thuê tự động được giảm khi căn hộ có khuyết tật, và từ nay chỉ trả tiền thuê „có bảo lưu“ (unter Vorbehalt) để sau này có thể đòi lại phần trả thừa. Giọng văn kiên quyết nhưng lịch sự.",
   "checklist": [
    {
     "de": "Briefkopf mit Absender, Empfänger, Ort und Datum",
     "vi": "Có phần đầu thư: người gửi, người nhận, nơi và ngày viết"
    },
    {
     "de": "Betreffzeile nennt das Problem",
     "vi": "Dòng tiêu đề nêu đúng vấn đề"
    },
    {
     "de": "Mängel konkret beschrieben (seit wann, wie stark)",
     "vi": "Mô tả hư hỏng cụ thể (từ khi nào, mức độ)"
    },
    {
     "de": "Bisherige Schritte genannt (Anrufe mit Datum)",
     "vi": "Nêu các bước đã làm (cuộc gọi có ngày tháng)"
    },
    {
     "de": "Klare Frist mit Datum gesetzt",
     "vi": "Đặt thời hạn rõ ràng, có ngày cụ thể"
    },
    {
     "de": "Mietminderung nach § 536 BGB erwähnt",
     "vi": "Có nhắc đến việc giảm tiền thuê theo § 536 BGB"
    },
    {
     "de": "Ton bestimmt, aber höflich",
     "vi": "Giọng văn kiên quyết nhưng lịch sự"
    }
   ],
   "redemittel": [
    "Hiermit möchte ich Ihnen folgende Mängel melden: …",
    "Seit dem … funktioniert … nicht mehr.",
    "Ich habe Ihre Hausverwaltung bereits am … informiert.",
    "Leider ist bis heute nichts passiert.",
    "Ich fordere Sie auf, den Mangel bis spätestens … zu beseitigen.",
    "Bitte teilen Sie mir mit, wann der Handwerker kommt.",
    "Die Miete ist nach § 536 BGB gemindert.",
    "Ich zahle die Miete ab sofort nur unter Vorbehalt."
   ]
  },
  {
   "level": "B2",
   "area": "Stellungnahme",
   "title": "Leserbrief: Soll Fahren ohne Fahrschein keine Straftat mehr sein?",
   "title_vi": "Thư bạn đọc: Có nên bỏ hình sự hóa việc đi tàu xe không vé?",
   "prompt": "Situation: In einer Tageszeitung ist ein Artikel mit dem Titel „Schwarzfahren – bald keine Straftat mehr?“ erschienen. Darin wird berichtet, dass in der Politik diskutiert wird, das Fahren ohne Fahrschein, das bisher als „Erschleichen von Leistungen“ nach § 265a StGB strafbar ist, künftig nur noch als Ordnungswidrigkeit zu behandeln.\nSchreiben Sie einen Leserbrief an die Zeitung. Gehen Sie auf folgende Punkte ein:\n– Nehmen Sie Bezug auf den Artikel.\n– Formulieren Sie Ihre eigene Position.\n– Begründen Sie Ihre Position mit mindestens zwei Argumenten.\n– Gehen Sie auf ein Gegenargument ein und entkräften Sie es.\n– Formulieren Sie einen Schluss.",
   "prompt_vi": "Tình huống: Một tờ nhật báo đăng bài viết với tiêu đề „Đi tàu xe không vé – sắp không còn là tội phạm?“. Bài báo cho biết giới chính trị đang thảo luận việc đi phương tiện công cộng không vé, hiện bị xử lý hình sự là „gian lận để hưởng dịch vụ“ theo § 265a StGB, trong tương lai chỉ còn bị coi là vi phạm hành chính.\nHãy viết một thư bạn đọc gửi tòa soạn, đề cập các ý sau:\n– Dẫn chiếu đến bài báo.\n– Nêu quan điểm của bạn.\n– Lập luận cho quan điểm bằng ít nhất hai lý lẽ.\n– Đề cập một lý lẽ phản bác và bác bỏ nó.\n– Viết phần kết luận.",
   "words": "200–250 Wörter",
   "model": "Betreff: Ihr Artikel „Schwarzfahren – bald keine Straftat mehr?“ vom 10. November 2026\n\nSehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihren Artikel über die geplante Reform gelesen. Bisher ist das Fahren ohne Fahrschein nach § 265a StGB als „Erschleichen von Leistungen“ strafbar. Ich bin der Meinung, dass es künftig nur noch als Ordnungswidrigkeit geahndet werden sollte.\n\nZunächst einmal gilt das Strafrecht als „letztes Mittel“ des Staates (Ultima Ratio). Wer ohne Fahrschein fährt, verursacht zwar einen Schaden, dieser ist aber meist gering. Außerdem können die Verkehrsunternehmen bereits ein erhöhtes Beförderungsentgelt von in der Regel 60 Euro verlangen.\n\nHinzu kommt, dass vor allem Menschen mit wenig Geld betroffen sind. Wer eine Geldstrafe nicht bezahlen kann, muss eine Ersatzfreiheitsstrafe im Gefängnis verbüßen. Das kostet den Staat viel Geld und hilft weder den Betroffenen noch der Gesellschaft.\n\nKritiker wenden ein, dass ohne Strafandrohung noch mehr Menschen ohne Fahrschein fahren würden. Dieses Argument überzeugt mich jedoch nicht, denn auch ein Bußgeld kann abschreckend wirken, wenn regelmäßig kontrolliert wird.\n\nAlles in allem halte ich die Reform für sinnvoll. Staatsanwaltschaften, Gerichte und Gefängnisse würden entlastet und könnten sich auf schwerere Delikte konzentrieren. Ich hoffe daher, dass der Gesetzgeber diesen Schritt bald wagt.\n\nMit freundlichen Grüßen\nMinh Pham, Jurastudent aus Halle",
   "model_vi": "Bài mẫu mở đầu bằng việc dẫn chiếu rõ ràng đến bài báo (tiêu đề và ngày đăng) và giải thích ngắn tình trạng pháp lý hiện nay theo § 265a StGB. Ngay trong đoạn đầu, người viết nêu quan điểm: hành vi này chỉ nên bị xử phạt như vi phạm hành chính. Lý lẽ thứ nhất: luật hình sự là „biện pháp cuối cùng“ (Ultima Ratio), thiệt hại nhỏ và doanh nghiệp vận tải đã có thể thu phí phạt 60 euro. Lý lẽ thứ hai: người nghèo bị ảnh hưởng nhiều nhất và phải chịu hình phạt tù thay thế khi không trả được tiền phạt, gây tốn kém cho nhà nước. Sau đó người viết nêu một ý kiến phản bác (sẽ có nhiều người đi lậu hơn) và bác bỏ nó (tiền phạt hành chính cũng có tác dụng răn đe nếu kiểm tra thường xuyên). Phần kết tóm tắt quan điểm và nêu lợi ích: giảm tải cho cơ quan công tố, tòa án và nhà tù. Các từ nối như „Zunächst einmal“, „Hinzu kommt“, „Alles in allem“ giúp bài mạch lạc.",
   "checklist": [
    {
     "de": "Bezug auf den Artikel (Titel, Datum) hergestellt",
     "vi": "Có dẫn chiếu đến bài báo (tiêu đề, ngày đăng)"
    },
    {
     "de": "Eigene Position klar am Anfang formuliert",
     "vi": "Nêu rõ quan điểm cá nhân ngay từ đầu"
    },
    {
     "de": "Mindestens zwei Argumente mit Begründung/Beispiel",
     "vi": "Có ít nhất hai lý lẽ kèm giải thích/ví dụ"
    },
    {
     "de": "Gegenargument genannt und entkräftet",
     "vi": "Nêu và bác bỏ một lý lẽ phản bác"
    },
    {
     "de": "Konnektoren zur Gliederung verwendet",
     "vi": "Dùng từ nối để sắp xếp ý"
    },
    {
     "de": "Fachbegriffe korrekt verwendet (Straftat, Ordnungswidrigkeit, Geldstrafe)",
     "vi": "Dùng đúng thuật ngữ (tội phạm, vi phạm hành chính, phạt tiền)"
    },
    {
     "de": "Schluss mit Zusammenfassung der Position",
     "vi": "Phần kết tóm tắt lại quan điểm"
    }
   ],
   "redemittel": [
    "Mit großem Interesse habe ich Ihren Artikel über … gelesen.",
    "Ich bin der Meinung / Ansicht, dass …",
    "Zunächst einmal …",
    "Hinzu kommt, dass …",
    "Kritiker wenden ein, dass …",
    "Dieses Argument überzeugt mich jedoch nicht, denn …",
    "Einerseits …, andererseits …",
    "Alles in allem halte ich … für sinnvoll.",
    "Abschließend möchte ich betonen, dass …"
   ]
  },
  {
   "level": "B2",
   "area": "Brief",
   "title": "Einspruch gegen einen Bußgeldbescheid",
   "title_vi": "Thư phản đối (Einspruch) quyết định phạt tiền vi phạm giao thông",
   "prompt": "Situation: Sie haben einen Bußgeldbescheid der Bußgeldbehörde der Stadt Leipzig vom 2. November 2026 erhalten (Aktenzeichen OWi 4711/26). Er wurde Ihnen am 5. November 2026 zugestellt. Ihnen wird vorgeworfen, am 12. Oktober 2026 um 8:15 Uhr mit Ihrem Auto (Kennzeichen L-XY 123) innerorts 24 km/h zu schnell gefahren zu sein. Sie sollen 115 € Bußgeld zuzüglich Gebühren und Auslagen zahlen und erhalten einen Punkt in Flensburg. Sie sind zwar die Halterin des Autos, sind aber zu diesem Zeitpunkt nicht selbst gefahren: Von 8:00 bis 10:00 Uhr haben Sie an einer Klausur an der Universität teilgenommen.\nSchreiben Sie am 10. November 2026 einen Einspruch an die Bußgeldbehörde. Gehen Sie auf folgende Punkte ein:\n– Bezug auf den Bescheid und ausdrückliche Erklärung des Einspruchs\n– Begründung mit Beweis\n– Antrag auf Akteneinsicht (Messfoto, Messprotokoll)\n– Bitte um Einstellung des Verfahrens und Eingangsbestätigung",
   "prompt_vi": "Tình huống: Bạn nhận được quyết định phạt tiền của cơ quan xử phạt thành phố Leipzig đề ngày 2/11/2026 (số hồ sơ OWi 4711/26), được tống đạt cho bạn ngày 5/11/2026. Bạn bị cho là vào ngày 12/10/2026 lúc 8:15 đã lái xe của mình (biển số L-XY 123) trong khu dân cư vượt quá tốc độ cho phép 24 km/h. Bạn phải nộp 115 € tiền phạt cộng phí và chi phí, đồng thời bị ghi một điểm ở Flensburg. Bạn là chủ sở hữu đăng ký của xe, nhưng vào thời điểm đó không tự lái: từ 8:00 đến 10:00 bạn đang làm bài thi ở trường đại học.\nHãy viết thư phản đối (Einspruch) gửi cơ quan xử phạt vào ngày 10/11/2026, đề cập các ý sau:\n– Dẫn chiếu quyết định và tuyên bố rõ ràng việc phản đối\n– Lý do kèm bằng chứng\n– Yêu cầu được xem hồ sơ (ảnh đo tốc độ, biên bản đo)\n– Đề nghị đình chỉ thủ tục và xác nhận đã nhận thư",
   "words": "180–220 Wörter",
   "model": "Mai Le\nBeispielweg 3\n04277 Leipzig\n\nStadt Leipzig\nBußgeldbehörde\n04092 Leipzig\n\nLeipzig, 10. November 2026\n\nEinspruch gegen den Bußgeldbescheid vom 2. November 2026\nAktenzeichen: OWi 4711/26\n\nSehr geehrte Damen und Herren,\n\nhiermit lege ich gegen den oben genannten Bußgeldbescheid, der mir am 5. November 2026 zugestellt wurde, form- und fristgerecht Einspruch ein.\n\nMir wird vorgeworfen, am 12. Oktober 2026 um 8:15 Uhr mit dem Fahrzeug mit dem Kennzeichen L-XY 123 innerorts die zulässige Höchstgeschwindigkeit um 24 km/h überschritten zu haben. Ich bin zwar Halterin dieses Fahrzeugs, habe es zum Tatzeitpunkt jedoch nicht selbst gefahren. Von 8:00 bis 10:00 Uhr habe ich nachweislich an einer Klausur im Fach Staatsorganisationsrecht an der Universität Leipzig teilgenommen. Eine Bestätigung des Prüfungsamts füge ich diesem Schreiben in Kopie bei.\n\nZudem beantrage ich Einsicht in die Ermittlungsakte, insbesondere in das Messfoto und das Messprotokoll. Ich gehe davon aus, dass das Foto belegt, dass eine andere Person am Steuer saß.\n\nIch bitte Sie daher, das Verfahren gegen mich einzustellen. Bitte bestätigen Sie mir den Eingang dieses Einspruchs schriftlich.\n\nMit freundlichen Grüßen\nMai Le\n\nAnlage: Bestätigung des Prüfungsamts (Kopie)",
   "model_vi": "Bài mẫu có hình thức thư chính thức với người gửi, cơ quan nhận, ngày tháng, tiêu đề và số hồ sơ – rất quan trọng để cơ quan xử lý tìm đúng hồ sơ. Câu đầu tiên tuyên bố rõ ràng việc phản đối („hiermit lege ich … Einspruch ein“) và nêu ngày tống đạt; theo § 67 OWiG, thời hạn phản đối là hai tuần kể từ ngày tống đạt và phải gửi bằng văn bản tới chính cơ quan đã ra quyết định. Đoạn tiếp theo tóm tắt cáo buộc bằng lời gián tiếp rồi trình bày lý do: người viết là chủ xe nhưng không lái xe lúc đó, có bằng chứng là đang dự thi. Sau đó người viết yêu cầu được xem hồ sơ điều tra, đặc biệt là ảnh và biên bản đo tốc độ. Cuối thư là đề nghị đình chỉ thủ tục, xin xác nhận đã nhận thư và ghi chú tài liệu đính kèm. Người viết không bắt buộc phải nêu tên người lái xe.",
   "checklist": [
    {
     "de": "Aktenzeichen und Datum des Bescheids genannt",
     "vi": "Nêu số hồ sơ và ngày của quyết định"
    },
    {
     "de": "Einspruch ausdrücklich erklärt („Hiermit lege ich … Einspruch ein“)",
     "vi": "Tuyên bố phản đối rõ ràng"
    },
    {
     "de": "Zwei-Wochen-Frist (§ 67 Abs. 1 OWiG) beachtet",
     "vi": "Tuân thủ thời hạn hai tuần (§ 67 I OWiG)"
    },
    {
     "de": "Vorwurf sachlich wiedergegeben",
     "vi": "Tóm tắt cáo buộc một cách khách quan"
    },
    {
     "de": "Begründung mit Beweismittel und Anlage",
     "vi": "Có lý do kèm chứng cứ và phụ lục"
    },
    {
     "de": "Akteneinsicht beantragt",
     "vi": "Có yêu cầu xem hồ sơ"
    },
    {
     "de": "Formeller, sachlicher Ton ohne Vorwürfe gegen die Behörde",
     "vi": "Giọng văn trang trọng, khách quan, không chỉ trích cơ quan"
    },
    {
     "de": "Bitte um Einstellung und Eingangsbestätigung",
     "vi": "Đề nghị đình chỉ thủ tục và xác nhận đã nhận thư"
    }
   ],
   "redemittel": [
    "Hiermit lege ich gegen den Bußgeldbescheid vom … (Az. …) Einspruch ein.",
    "Mir wird vorgeworfen, … zu haben.",
    "Zum Tatzeitpunkt habe ich das Fahrzeug nicht selbst geführt.",
    "Zum Beweis füge ich … in Kopie bei.",
    "Ich beantrage Einsicht in die Ermittlungsakte.",
    "Ich bitte Sie, das Verfahren einzustellen.",
    "Bitte bestätigen Sie mir den Eingang dieses Schreibens.",
    "Anlage: …"
   ]
  },
  {
   "level": "C1",
   "area": "Zivilrecht",
   "title": "Kaufpreisanspruch aus § 433 Abs. 2 BGB – Das E-Bike aus der Kleinanzeige",
   "title_vi": "Yêu cầu thanh toán giá mua theo § 433 II BGB – Chiếc xe đạp điện trên trang rao vặt",
   "prompt": "Sachverhalt: Valentin (V) bietet auf einer Online-Kleinanzeigenplattform sein gebrauchtes E-Bike an: „E-Bike, 2 Jahre alt, 900 € VB“. Die Studentin Kim (K) schreibt ihm am Montag über die Chatfunktion: „Ich kaufe das E-Bike für 850 €.“ V antwortet noch am selben Abend: „Einverstanden! Abholung am Samstag, Bezahlung bar.“ Am Donnerstag findet K ein günstigeres Angebot. Sie schreibt V, sie wolle das E-Bike nicht mehr; außerdem sei „ohne schriftlichen Vertrag ohnehin nichts passiert“. V, der das E-Bike für K bereithält, verlangt von ihr die Zahlung von 850 €.\n\nFallfrage: Hat V gegen K einen Anspruch auf Zahlung von 850 €? Gesetzliche Ansprüche sind nicht zu prüfen.",
   "prompt_vi": "Tình tiết: Valentin (V) đăng bán chiếc xe đạp điện đã qua sử dụng của mình trên một nền tảng rao vặt trực tuyến: „Xe đạp điện, 2 năm tuổi, 900 € có thương lượng (VB)“. Thứ Hai, sinh viên Kim (K) nhắn cho anh qua chức năng chat: „Tôi mua chiếc xe đạp điện với giá 850 €.“ Ngay tối hôm đó V trả lời: „Đồng ý! Nhận xe vào thứ Bảy, trả tiền mặt.“ Thứ Năm, K tìm được một chỗ bán rẻ hơn. Cô nhắn cho V rằng cô không muốn mua nữa; hơn nữa „không có hợp đồng bằng văn bản thì chẳng có gì ràng buộc cả“. V, người vẫn giữ xe cho K, yêu cầu cô thanh toán 850 €.\n\nCâu hỏi: V có quyền yêu cầu K thanh toán 850 € không? Không cần xem xét các yêu cầu phát sinh từ luật định.",
   "words": "300–420 Wörter",
   "model": "A. Anspruch des V gegen K auf Zahlung von 850 € aus § 433 Abs. 2 BGB\n\nV könnte gegen K einen Anspruch auf Zahlung des Kaufpreises in Höhe von 850 € aus § 433 Abs. 2 BGB haben. Dazu müsste zwischen V und K ein wirksamer Kaufvertrag zustande gekommen sein.\n\nI. Anspruch entstanden\nEin Kaufvertrag kommt durch zwei übereinstimmende Willenserklärungen, Angebot und Annahme (§§ 145 ff. BGB), zustande.\n\n1. Angebot durch die Anzeige des V\nEin Angebot könnte bereits in der Anzeige des V liegen. Ein Angebot ist eine empfangsbedürftige Willenserklärung, die so bestimmt ist, dass der Vertrag durch ein bloßes „Ja“ zustande kommen kann, und die mit Rechtsbindungswillen abgegeben wird. Bei Anzeigen fehlt es regelmäßig am Rechtsbindungswillen, weil der Anbietende sich nicht gegenüber einer unbestimmten Vielzahl von Interessenten binden will. Der Zusatz „VB“ (Verhandlungsbasis) bestätigt dies. Die Anzeige ist daher nur eine Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum).\n\n2. Angebot der K\nDie Nachricht der K enthält alle wesentlichen Vertragsbestandteile (essentialia negotii): die Parteien, den Kaufgegenstand und den Preis. K handelte mit Rechtsbindungswillen. Das Angebot ist V mit Eingang der Nachricht zugegangen (§ 130 Abs. 1 S. 1 BGB).\n\n3. Annahme durch V\nV hat mit „Einverstanden!“ vorbehaltlos zugestimmt, und zwar noch am selben Tag und damit rechtzeitig (§ 147 Abs. 2 BGB). Die Angaben zu Abholung und Barzahlung betreffen nur die Modalitäten der Erfüllung und stellen keine Änderung im Sinne des § 150 Abs. 2 BGB dar.\n\n4. Form\nFraglich ist, ob der Vertrag schriftlich hätte geschlossen werden müssen. Im Zivilrecht gilt der Grundsatz der Formfreiheit. Für den Kauf einer beweglichen Sache sieht das Gesetz keine Form vor. Ein Formmangel nach § 125 S. 1 BGB liegt daher nicht vor.\n\n5. Zwischenergebnis\nEin wirksamer Kaufvertrag ist zustande gekommen; der Anspruch ist entstanden.\n\nII. Anspruch nicht erloschen\nDer Anspruch könnte durch einen Widerruf erloschen sein (§ 355 Abs. 1 BGB). Ein Widerrufsrecht bei Fernabsatzverträgen (§ 312g Abs. 1 BGB) setzt jedoch einen Verbrauchervertrag zwischen einem Unternehmer (§ 14 BGB) und einem Verbraucher (§ 13 BGB) voraus (§§ 312 Abs. 1, 310 Abs. 3 BGB). V verkauft privat und ist kein Unternehmer. Die bloße Mitteilung der K, sie wolle das E-Bike nicht mehr, lässt den Anspruch daher nicht entfallen.\n\nIII. Anspruch durchsetzbar\nK steht jedoch die Einrede des nichterfüllten Vertrags nach § 320 Abs. 1 BGB zu. Sie muss daher nur Zug um Zug gegen Übergabe und Übereignung des E-Bikes zahlen (§ 322 Abs. 1 BGB).\n\nB. Ergebnis\nV hat gegen K einen Anspruch auf Zahlung von 850 € aus § 433 Abs. 2 BGB, Zug um Zug gegen Übergabe und Übereignung des E-Bikes.",
   "model_vi": "Bài giải kiểm tra yêu cầu của V đối với K theo § 433 II BGB và bắt đầu bằng câu mở đầu (Obersatz) ở thể Konjunktiv. Trước hết cần xác định có hợp đồng mua bán hay không: tin rao vặt chỉ là lời mời đưa ra đề nghị (invitatio ad offerendum) vì thiếu ý chí ràng buộc pháp lý, nhất là với chữ „VB“ (có thương lượng). Tin nhắn của K là đề nghị giao kết vì có đủ các yếu tố chính (bên, vật, giá). Câu „Einverstanden!“ của V là sự chấp nhận kịp thời theo § 147 II BGB; thông tin về cách nhận xe không làm thay đổi đề nghị. Luật Đức theo nguyên tắc tự do hình thức, nên hợp đồng qua tin nhắn vẫn có hiệu lực. Yêu cầu không bị chấm dứt vì K không có quyền hủy ngang (Widerruf): V là người bán tư nhân, không phải doanh nghiệp. Tuy nhiên, K có quyền phản đối theo § 320 BGB, nên chỉ phải trả tiền đồng thời với việc nhận xe và quyền sở hữu. Kết luận: V có quyền yêu cầu 850 €, thực hiện đồng thời (Zug um Zug).",
   "checklist": [
    {
     "de": "Obersatz im Konjunktiv formuliert („V könnte … haben“)",
     "vi": "Câu mở đầu (Obersatz) dùng thể Konjunktiv („V könnte … haben“)"
    },
    {
     "de": "Prüfungsschema entstanden – nicht erloschen – durchsetzbar eingehalten",
     "vi": "Theo đúng sơ đồ: phát sinh – chưa chấm dứt – có thể thực thi"
    },
    {
     "de": "Anzeige als invitatio ad offerendum eingeordnet und begründet",
     "vi": "Xác định tin rao vặt là lời mời đưa ra đề nghị và giải thích lý do"
    },
    {
     "de": "Definition des Angebots genannt und subsumiert",
     "vi": "Nêu định nghĩa đề nghị giao kết và áp dụng vào tình tiết"
    },
    {
     "de": "Formfreiheit angesprochen",
     "vi": "Đề cập nguyên tắc tự do hình thức"
    },
    {
     "de": "Fehlendes Widerrufsrecht mit §§ 13, 14, 312 BGB begründet",
     "vi": "Giải thích việc không có quyền hủy ngang bằng §§ 13, 14, 312 BGB"
    },
    {
     "de": "Einrede aus § 320 BGB (Zug um Zug) erwähnt",
     "vi": "Có nhắc đến quyền phản đối theo § 320 BGB (thực hiện đồng thời)"
    },
    {
     "de": "Ergebnis beantwortet die Fallfrage",
     "vi": "Kết luận trả lời đúng câu hỏi của đề"
    }
   ],
   "redemittel": [
    "… könnte gegen … einen Anspruch auf … aus § … haben.",
    "Dazu müsste …",
    "Fraglich ist, ob …",
    "… ist/sind … (Definition).",
    "Vorliegend …",
    "Somit / Folglich ist … gegeben.",
    "Zwischenergebnis: …",
    "Im Ergebnis …",
    "Die Anzeige stellt lediglich eine invitatio ad offerendum dar.",
    "Es gilt der Grundsatz der Formfreiheit."
   ]
  },
  {
   "level": "C1",
   "area": "Zivilrecht",
   "title": "Nacherfüllung nach §§ 437 Nr. 1, 439 BGB – Der defekte Laptop",
   "title_vi": "Quyền yêu cầu khắc phục theo §§ 437 Nr. 1, 439 BGB – Chiếc laptop bị lỗi",
   "prompt": "Sachverhalt: Die Studentin K kauft am 1. September 2026 im Elektronikfachgeschäft der V-GmbH einen neuen Laptop für 1.200 €, den sie ausschließlich privat für ihr Studium nutzt. Sie nimmt ihn sofort mit. Drei Wochen später beginnt das Display zu flackern; seit Anfang Oktober bleibt es vollständig schwarz. K hat den Laptop stets sorgfältig behandelt. Sie bringt ihn zur V-GmbH und verlangt einen neuen, mangelfreien Laptop. Der Filialleiter lehnt ab: Für Defekte sei allein der Hersteller zuständig, K solle sich an dessen Garantie-Hotline wenden. Im Übrigen müsse K beweisen, dass der Fehler schon beim Kauf vorhanden gewesen sei.\n\nFallfrage: Kann K von der V-GmbH die Lieferung eines neuen Laptops verlangen?",
   "prompt_vi": "Tình tiết: Ngày 1/9/2026, sinh viên K mua một chiếc laptop mới giá 1.200 € tại cửa hàng điện tử của công ty V-GmbH, dùng hoàn toàn cho mục đích cá nhân là việc học. Cô mang máy về ngay. Ba tuần sau màn hình bắt đầu nhấp nháy; từ đầu tháng Mười thì màn hình đen hoàn toàn. K luôn sử dụng máy cẩn thận. Cô mang máy đến V-GmbH và yêu cầu đổi một chiếc laptop mới không có lỗi. Quản lý cửa hàng từ chối: chỉ nhà sản xuất chịu trách nhiệm về lỗi, K nên gọi đường dây bảo hành của nhà sản xuất. Ngoài ra, K phải chứng minh rằng lỗi đã có từ lúc mua.\n\nCâu hỏi: K có quyền yêu cầu V-GmbH giao một chiếc laptop mới không?",
   "words": "320–440 Wörter",
   "model": "A. Anspruch der K gegen die V-GmbH auf Lieferung eines mangelfreien Laptops aus §§ 437 Nr. 1, 439 Abs. 1 Alt. 2 BGB\n\nK könnte gegen die V-GmbH einen Anspruch auf Lieferung eines mangelfreien Laptops aus §§ 437 Nr. 1, 439 Abs. 1 Alt. 2 BGB haben.\n\nI. Wirksamer Kaufvertrag\nZwischen K und der V-GmbH ist ein wirksamer Kaufvertrag über den Laptop zustande gekommen (§ 433 BGB). Da K als Verbraucherin (§ 13 BGB) von einem Unternehmer (§ 14 BGB) eine Ware kauft, liegt ein Verbrauchsgüterkauf im Sinne des § 474 Abs. 1 BGB vor.\n\nII. Sachmangel bei Gefahrübergang\n1. Sachmangel\nNach § 434 Abs. 1 BGB ist eine Sache frei von Sachmängeln, wenn sie bei Gefahrübergang den subjektiven Anforderungen, den objektiven Anforderungen und den Montageanforderungen entspricht. Nach § 434 Abs. 3 S. 1 Nr. 1 BGB muss sie sich für die gewöhnliche Verwendung eignen. Ein neuer Laptop, dessen Display nach wenigen Wochen ausfällt, ist hierzu nicht geeignet. Ein Sachmangel liegt vor.\n\n2. Bei Gefahrübergang\nDie Gefahr ging mit der Übergabe am 1. September 2026 auf K über (§ 446 S. 1 BGB). Fraglich ist, ob der Mangel bereits zu diesem Zeitpunkt vorlag. Grundsätzlich trägt der Käufer hierfür die Beweislast. Beim Verbrauchsgüterkauf wird jedoch nach § 477 Abs. 1 S. 1 BGB vermutet, dass die Ware bereits bei Gefahrübergang mangelhaft war, wenn sich der mangelhafte Zustand innerhalb eines Jahres seit Gefahrübergang zeigt. Der Mangel zeigte sich nach drei Wochen. Die Vermutung ist weder mit der Art der Ware noch mit der Art des Mangels unvereinbar. Die V-GmbH müsste daher das Gegenteil beweisen; die bloße Behauptung des Filialleiters genügt nicht.\n\nIII. Kein Ausschluss der Mängelrechte\nEine Kenntnis der K vom Mangel (§ 442 Abs. 1 BGB) ist nicht ersichtlich. Eine Herstellergarantie (§ 443 BGB) tritt neben die gesetzlichen Mängelrechte gegen den Verkäufer und verdrängt diese nicht. Der Verweis auf den Hersteller ist daher unbeachtlich.\n\nIV. Wahlrecht und Grenzen der Nacherfüllung\nNach § 439 Abs. 1 BGB kann der Käufer nach seiner Wahl die Beseitigung des Mangels oder die Lieferung einer mangelfreien Sache verlangen. K hat die Nachlieferung gewählt. Dass diese nur mit unverhältnismäßigen Kosten möglich wäre (§ 439 Abs. 4 BGB), hat die V-GmbH nicht geltend gemacht; bei einem Serienprodukt ist dies auch nicht ersichtlich.\n\nV. Durchsetzbarkeit\nDer Anspruch ist nicht verjährt, da die Verjährungsfrist nach § 438 Abs. 1 Nr. 3, Abs. 2 BGB zwei Jahre ab Ablieferung beträgt.\n\nB. Ergebnis\nK kann von der V-GmbH die Lieferung eines neuen, mangelfreien Laptops verlangen. Im Gegenzug muss sie den mangelhaften Laptop nach § 439 Abs. 5 i. V. m. §§ 346 bis 348 BGB zurückgeben. Wertersatz für die Nutzung schuldet sie als Verbraucherin nicht (§ 475 Abs. 3 S. 1 BGB).",
   "model_vi": "Cơ sở yêu cầu là §§ 437 Nr. 1, 439 I BGB (yêu cầu giao vật thay thế không có khuyết tật). Trước hết xác định có hợp đồng mua bán hợp lệ, đồng thời đây là mua bán hàng tiêu dùng (Verbrauchsgüterkauf, § 474 BGB) vì K là người tiêu dùng và V-GmbH là doanh nghiệp. Laptop có khuyết tật vật chất theo § 434 III Nr. 1 BGB vì không phù hợp với việc sử dụng thông thường. Về thời điểm chuyển rủi ro (§ 446 BGB): theo § 477 I BGB, nếu khuyết tật xuất hiện trong vòng một năm thì được suy đoán là đã có từ lúc giao hàng, nên người bán – chứ không phải K – phải chứng minh điều ngược lại. Bảo hành của nhà sản xuất (§ 443 BGB) chỉ tồn tại song song, không loại trừ quyền của K đối với người bán. K có quyền lựa chọn giữa sửa chữa và đổi hàng (§ 439 I BGB); người bán không viện dẫn chi phí bất hợp lý (§ 439 IV BGB). Quyền yêu cầu chưa hết thời hiệu (hai năm, § 438 I Nr. 3 BGB). Kết luận: K được đổi laptop mới, phải trả lại máy cũ nhưng không phải bồi hoàn giá trị sử dụng (§ 475 III 1 BGB).",
   "checklist": [
    {
     "de": "Richtige Anspruchsgrundlage mit Normkette §§ 437 Nr. 1, 439 Abs. 1 BGB",
     "vi": "Cơ sở yêu cầu đúng với chuỗi điều luật §§ 437 Nr. 1, 439 I BGB"
    },
    {
     "de": "Verbrauchsgüterkauf (§ 474 BGB) erkannt",
     "vi": "Nhận ra đây là mua bán hàng tiêu dùng (§ 474 BGB)"
    },
    {
     "de": "Sachmangelbegriff nach neuem § 434 BGB korrekt angewandt",
     "vi": "Áp dụng đúng khái niệm khuyết tật theo § 434 BGB mới"
    },
    {
     "de": "Beweislastumkehr nach § 477 Abs. 1 BGB (ein Jahr) geprüft",
     "vi": "Kiểm tra suy đoán đảo ngược nghĩa vụ chứng minh theo § 477 I BGB (một năm)"
    },
    {
     "de": "Garantie (§ 443 BGB) von Gewährleistung abgegrenzt",
     "vi": "Phân biệt bảo hành của nhà sản xuất (§ 443 BGB) với trách nhiệm của người bán"
    },
    {
     "de": "Wahlrecht des Käufers und § 439 Abs. 4 BGB angesprochen",
     "vi": "Đề cập quyền lựa chọn của người mua và § 439 IV BGB"
    },
    {
     "de": "Verjährung kurz geprüft",
     "vi": "Kiểm tra ngắn gọn thời hiệu"
    },
    {
     "de": "Rückgabepflicht und § 475 Abs. 3 S. 1 BGB im Ergebnis erwähnt",
     "vi": "Kết luận nêu nghĩa vụ trả lại máy cũ và § 475 III 1 BGB"
    }
   ],
   "redemittel": [
    "… könnte gegen … einen Anspruch auf … aus § … haben.",
    "Dazu müsste …",
    "Fraglich ist, ob …",
    "… ist/sind … (Definition).",
    "Vorliegend …",
    "Somit / Folglich ist … gegeben.",
    "Zwischenergebnis: …",
    "Im Ergebnis …",
    "Es wird vermutet, dass die Sache bereits bei Gefahrübergang mangelhaft war.",
    "Die Herstellergarantie tritt neben die gesetzlichen Mängelrechte."
   ]
  },
  {
   "level": "C2",
   "area": "Zivilrecht",
   "title": "Anfechtung wegen arglistiger Täuschung (§ 123 BGB) – Der „unfallfreie“ Gebrauchtwagen",
   "title_vi": "Hủy bỏ hợp đồng do bị lừa dối (§ 123 BGB) – Chiếc xe cũ „chưa từng tai nạn“",
   "prompt": "Sachverhalt: Der Privatmann V verkauft im März 2026 seinen gebrauchten Pkw an den Jurastudenten K für 8.000 €. Auf die ausdrückliche Frage des K, ob der Wagen jemals einen Unfall gehabt habe, antwortet V: „Nein, der Wagen ist unfallfrei.“ Tatsächlich weiß V genau, dass das Fahrzeug ein Jahr zuvor einen erheblichen Frontschaden erlitten hatte, der nur oberflächlich repariert worden war. K zahlt den Kaufpreis in bar; V übergibt und übereignet ihm den Wagen. Im Mai 2026 erfährt K bei einer Inspektion von dem Unfallschaden. Er erklärt V gegenüber sofort schriftlich, er „fechte den Vertrag wegen Betrugs an“, und verlangt sein Geld zurück.\n\nFallfrage: Hat K gegen V einen Anspruch auf Rückzahlung der 8.000 €? Zu prüfen ist nur § 812 Abs. 1 S. 1 Alt. 1 BGB.",
   "prompt_vi": "Tình tiết: Tháng 3/2026, V – một người bán tư nhân – bán chiếc ô tô đã qua sử dụng của mình cho sinh viên luật K với giá 8.000 €. Khi K hỏi rõ ràng xe đã từng bị tai nạn chưa, V trả lời: „Không, xe chưa từng bị tai nạn.“ Thực ra V biết rất rõ rằng một năm trước chiếc xe đã bị hư hỏng nặng phần đầu và chỉ được sửa chữa sơ sài. K trả tiền mặt; V giao xe và chuyển quyền sở hữu cho K. Tháng 5/2026, khi bảo dưỡng xe, K phát hiện ra vụ tai nạn. Anh lập tức tuyên bố bằng văn bản với V rằng anh „hủy bỏ hợp đồng vì bị lừa đảo“ và đòi lại tiền.\n\nCâu hỏi: K có quyền yêu cầu V hoàn trả 8.000 € không? Chỉ xem xét § 812 I 1 Alt. 1 BGB.",
   "words": "350–450 Wörter",
   "model": "A. Anspruch des K gegen V auf Zahlung von 8.000 € aus § 812 Abs. 1 S. 1 Alt. 1 BGB\n\nK könnte gegen V einen Anspruch auf Rückzahlung von 8.000 € aus § 812 Abs. 1 S. 1 Alt. 1 BGB (Leistungskondiktion) haben.\n\nI. Etwas erlangt\n„Etwas“ ist jeder vermögenswerte Vorteil. V hat Eigentum und Besitz an den Geldscheinen erlangt.\n\nII. Durch Leistung des K\nLeistung ist jede bewusste und zweckgerichtete Mehrung fremden Vermögens. K hat das Geld bewusst zur Erfüllung seiner Kaufpreisschuld aus § 433 Abs. 2 BGB an V gezahlt.\n\nIII. Ohne rechtlichen Grund\nAls Rechtsgrund kommt der Kaufvertrag in Betracht. Dieser könnte jedoch infolge einer Anfechtung nach § 142 Abs. 1 BGB als von Anfang an nichtig anzusehen sein.\n\n1. Anfechtungserklärung\nK hat die Anfechtung gegenüber V als seinem Vertragspartner erklärt (§ 143 Abs. 1, 2 BGB). Dass er von „Betrug“ spricht, ist unschädlich. Durch Auslegung (§ 133 BGB) ergibt sich, dass er den Vertrag wegen der Täuschung nicht gelten lassen will.\n\n2. Anfechtungsgrund: arglistige Täuschung, § 123 Abs. 1 Alt. 1 BGB\na) Täuschung\nTäuschung ist jedes Verhalten, das darauf abzielt, beim Gegenüber eine Fehlvorstellung über Tatsachen hervorzurufen oder aufrechtzuerhalten. V hat auf die ausdrückliche Frage des K wahrheitswidrig erklärt, der Wagen sei unfallfrei. Die Unfallfreiheit ist eine dem Beweis zugängliche Tatsache. Eine Täuschung durch aktives Tun liegt vor.\n\nb) Irrtum und Kausalität\nK hielt den Wagen infolgedessen für unfallfrei. Hätte er von dem Unfall gewusst, hätte er den Vertrag jedenfalls nicht zu diesen Bedingungen geschlossen. Die Täuschung war ursächlich für seine Willenserklärung.\n\nc) Arglist\nArglistig handelt, wer die Unrichtigkeit seiner Angaben kennt oder zumindest für möglich hält und dabei in Kauf nimmt, dass der andere dadurch zur Abgabe der Willenserklärung bestimmt wird. V wusste von dem Frontschaden und handelte damit arglistig.\n\n3. Anfechtungsfrist\nNach § 124 Abs. 1, 2 BGB muss die Anfechtung binnen eines Jahres ab Entdeckung der Täuschung erfolgen. K hat sofort nach der Entdeckung im Mai 2026 angefochten. Die Frist ist gewahrt.\n\n4. Zwischenergebnis\nDer Kaufvertrag ist gemäß § 142 Abs. 1 BGB als von Anfang an nichtig anzusehen. Die Zahlung erfolgte ohne rechtlichen Grund.\n\nIV. Umfang des Anspruchs\nV muss das Erlangte herausgeben. Sind die konkreten Geldscheine nicht mehr vorhanden oder mit anderem Geld vermischt, schuldet er nach § 818 Abs. 2 BGB Wertersatz in Höhe von 8.000 €. Auf einen Wegfall der Bereicherung (§ 818 Abs. 3 BGB) kann sich V nicht berufen, da er die Anfechtbarkeit kannte (§§ 142 Abs. 2, 819 Abs. 1, 818 Abs. 4 BGB). Umgekehrt kann V von K die Rückgabe und Rückübereignung des Pkw verlangen.\n\nB. Ergebnis\nK hat gegen V einen Anspruch auf Zahlung von 8.000 € aus § 812 Abs. 1 S. 1 Alt. 1 BGB.",
   "model_vi": "Bài giải kiểm tra yêu cầu hoàn trả do được lợi không có căn cứ (Leistungskondiktion) theo § 812 I 1 Alt. 1 BGB. V đã nhận được „một lợi ích“ (quyền sở hữu và chiếm hữu tiền) thông qua sự thực hiện nghĩa vụ có chủ đích của K. Điểm trọng tâm là yếu tố „không có căn cứ pháp lý“: hợp đồng mua bán bị coi là vô hiệu từ đầu (§ 142 I BGB) nếu được hủy bỏ hợp lệ. K đã tuyên bố hủy bỏ với V (§ 143 BGB); việc dùng từ „lừa đảo“ thay vì „hủy bỏ do bị lừa dối“ không quan trọng vì được giải thích theo § 133 BGB. Căn cứ hủy bỏ là lừa dối có chủ ý (§ 123 I Alt. 1 BGB): V đã nói sai sự thật về một tình tiết, gây ra nhầm lẫn có quan hệ nhân quả và hành động cố ý. Thời hạn một năm kể từ khi phát hiện (§ 124 BGB) được tuân thủ. Về phạm vi, V phải hoàn trả giá trị 8.000 € (§ 818 II BGB) và không được viện dẫn việc không còn được lợi vì đã biết hợp đồng có thể bị hủy (§§ 142 II, 819 I, 818 IV BGB). Kết luận: K có quyền đòi lại 8.000 €, đồng thời phải trả lại xe.",
   "checklist": [
    {
     "de": "Obersatz mit vollständiger Normangabe (§ 812 Abs. 1 S. 1 Alt. 1 BGB)",
     "vi": "Câu mở đầu nêu đầy đủ điều luật (§ 812 I 1 Alt. 1 BGB)"
    },
    {
     "de": "Merkmale „etwas erlangt“, „durch Leistung“, „ohne Rechtsgrund“ getrennt geprüft",
     "vi": "Kiểm tra riêng từng yếu tố: „nhận được lợi ích“, „do sự thực hiện“, „không có căn cứ“"
    },
    {
     "de": "Anfechtung inzident beim fehlenden Rechtsgrund geprüft",
     "vi": "Kiểm tra việc hủy bỏ hợp đồng lồng trong yếu tố „không có căn cứ“"
    },
    {
     "de": "Anfechtungserklärung ausgelegt (§ 133 BGB)",
     "vi": "Giải thích tuyên bố hủy bỏ theo § 133 BGB"
    },
    {
     "de": "Täuschung, Irrtum, Kausalität und Arglist definiert und subsumiert",
     "vi": "Định nghĩa và áp dụng: lừa dối, nhầm lẫn, quan hệ nhân quả, cố ý"
    },
    {
     "de": "Anfechtungsfrist § 124 BGB geprüft",
     "vi": "Kiểm tra thời hạn hủy bỏ theo § 124 BGB"
    },
    {
     "de": "Rechtsfolge § 142 Abs. 1 BGB (ex tunc) genannt",
     "vi": "Nêu hậu quả pháp lý theo § 142 I BGB (vô hiệu từ đầu)"
    },
    {
     "de": "Umfang des Anspruchs (§ 818 BGB) und Ergebnis klar",
     "vi": "Phạm vi yêu cầu (§ 818 BGB) và kết luận rõ ràng"
    }
   ],
   "redemittel": [
    "… könnte gegen … einen Anspruch auf … aus § … haben.",
    "Dazu müsste …",
    "Fraglich ist, ob …",
    "… ist/sind … (Definition).",
    "Vorliegend …",
    "Somit / Folglich ist … gegeben.",
    "Zwischenergebnis: …",
    "Im Ergebnis …",
    "Der Vertrag ist gemäß § 142 Abs. 1 BGB als von Anfang an nichtig anzusehen.",
    "Die Erklärung ist nach §§ 133, 157 BGB als Anfechtung auszulegen."
   ]
  },
  {
   "level": "C1",
   "area": "Zivilrecht",
   "title": "Der minderjährige Käufer (§§ 106 ff. BGB) – Die Spielkonsole auf Raten",
   "title_vi": "Người mua chưa thành niên (§§ 106 ff. BGB) – Máy chơi game mua trả góp",
   "prompt": "Sachverhalt: Die 16-jährige M kauft am 5. Oktober 2026 beim Elektronikhändler V eine Spielkonsole für 360 €. Da sie das Geld nicht sofort hat, vereinbaren beide, dass M den Kaufpreis in sechs monatlichen Raten zu je 60 € aus ihrem Taschengeld bezahlt. V übergibt M die Konsole sofort; beide sind sich einig, dass M Eigentümerin werden soll. Die erste Rate ist am 1. November 2026 fällig. Die Eltern der M, die gemeinsam sorgeberechtigt sind, wussten von dem Kauf nichts. Als sie davon erfahren, erklären sie V gegenüber, mit dem Geschäft „auf keinen Fall einverstanden“ zu sein. V verlangt von M dennoch die erste Rate.\n\nFallfragen:\n1. Hat V gegen M einen Anspruch auf Zahlung der ersten Rate aus § 433 Abs. 2 BGB?\n2. Ist M Eigentümerin der Konsole geworden?",
   "prompt_vi": "Tình tiết: Ngày 5/10/2026, M (16 tuổi) mua một máy chơi game giá 360 € tại cửa hàng điện tử của V. Vì chưa có đủ tiền ngay, hai bên thỏa thuận M sẽ trả góp sáu tháng, mỗi tháng 60 € từ tiền tiêu vặt. V giao máy cho M ngay; hai bên thống nhất rằng M sẽ trở thành chủ sở hữu. Kỳ trả góp đầu tiên đến hạn ngày 1/11/2026. Cha mẹ của M – cùng có quyền nuôi dưỡng – không biết gì về việc mua bán này. Khi biết chuyện, họ tuyên bố với V rằng họ „tuyệt đối không đồng ý“ với giao dịch. Dù vậy, V vẫn yêu cầu M trả kỳ góp đầu tiên.\n\nCâu hỏi:\n1. V có quyền yêu cầu M trả kỳ góp đầu tiên theo § 433 II BGB không?\n2. M có trở thành chủ sở hữu máy chơi game không?",
   "words": "330–450 Wörter",
   "model": "A. Anspruch des V gegen M auf Zahlung von 60 € aus § 433 Abs. 2 BGB\n\nV könnte gegen M einen Anspruch auf Zahlung der ersten Rate in Höhe von 60 € aus § 433 Abs. 2 BGB haben. Dazu müsste ein wirksamer Kaufvertrag vorliegen.\n\nI. Einigung\nM und V haben sich über den Kauf der Konsole zu einem Preis von 360 € in Raten geeinigt.\n\nII. Wirksamkeit der Willenserklärung der M\n1. Beschränkte Geschäftsfähigkeit\nM ist 16 Jahre alt und damit nach §§ 2, 106 BGB beschränkt geschäftsfähig.\n\n2. Lediglich rechtlicher Vorteil, § 107 BGB\nNach § 107 BGB bedarf der Minderjährige zu einer Willenserklärung, durch die er nicht lediglich einen rechtlichen Vorteil erlangt, der Einwilligung seines gesetzlichen Vertreters. Maßgeblich ist allein die rechtliche, nicht die wirtschaftliche Betrachtung. Durch den Kaufvertrag wird M zur Zahlung des Kaufpreises verpflichtet. Der Vertrag ist daher nicht lediglich rechtlich vorteilhaft.\n\n3. Einwilligung\nGesetzliche Vertreter der M sind ihre Eltern (§§ 1626 Abs. 1, 1629 Abs. 1 BGB). Eine Einwilligung, also eine vorherige Zustimmung (§ 183 S. 1 BGB), haben sie nicht erteilt.\n\n4. Taschengeldparagraph, § 110 BGB\nDer Vertrag könnte nach § 110 BGB von Anfang an wirksam sein. Dies setzt voraus, dass M die vertragsmäßige Leistung mit Mitteln bewirkt, die ihr zu diesem Zweck oder zu freier Verfügung überlassen worden sind. „Bewirkt“ ist die Leistung erst, wenn sie vollständig erbracht ist; bei einem Ratenkauf also erst mit Zahlung der letzten Rate. M hat noch keine Rate gezahlt. § 110 BGB greift nicht.\n\n5. Genehmigung, § 108 Abs. 1 BGB\nDer Vertrag war somit zunächst schwebend unwirksam. Die Eltern haben die Genehmigung gegenüber V verweigert (§ 182 Abs. 1 BGB). Damit ist der Vertrag endgültig unwirksam.\n\nIII. Zwischenergebnis\nV hat gegen M keinen Anspruch auf Zahlung aus § 433 Abs. 2 BGB.\n\nB. Eigentumserwerb der M nach § 929 S. 1 BGB\n\nM könnte das Eigentum an der Konsole nach § 929 S. 1 BGB erworben haben. Erforderlich sind Einigung und Übergabe durch den Berechtigten.\n\nI. Einigung\nV und M waren sich über den Eigentumsübergang einig. Fraglich ist, ob die Erklärung der M nach § 107 BGB zustimmungsbedürftig war. Durch die Übereignung erlangt M lediglich das Eigentum; eine Verpflichtung entsteht dadurch nicht. Die dingliche Einigung ist daher lediglich rechtlich vorteilhaft und ohne Zustimmung der Eltern wirksam. Die Unwirksamkeit des Kaufvertrags berührt sie nach dem Trennungs- und Abstraktionsprinzip nicht.\n\nII. Übergabe und Berechtigung\nV hat M die Konsole übergeben und war als Eigentümer zur Verfügung berechtigt.\n\nC. Ergebnis\nV hat gegen M keinen Anspruch auf Zahlung. M ist jedoch Eigentümerin der Konsole geworden. V kann die Konsole aber nach § 812 Abs. 1 S. 1 Alt. 1 BGB zurückverlangen, da M Eigentum und Besitz ohne rechtlichen Grund erlangt hat.",
   "model_vi": "Phần A kiểm tra yêu cầu thanh toán theo § 433 II BGB. M 16 tuổi nên có năng lực hành vi hạn chế (§§ 2, 106 BGB). Theo § 107 BGB, hợp đồng mua bán không chỉ mang lại lợi ích pháp lý vì M phải gánh nghĩa vụ trả tiền – chỉ xét về mặt pháp lý, không xét lợi ích kinh tế. Cha mẹ không đồng ý trước (§ 183 BGB). „Điều khoản tiền tiêu vặt“ (§ 110 BGB) không áp dụng vì khi mua trả góp, nghĩa vụ chỉ được „thực hiện xong“ khi trả hết kỳ cuối. Hợp đồng do đó ở trạng thái hiệu lực treo (§ 108 I BGB) và trở nên vô hiệu hoàn toàn khi cha mẹ từ chối phê chuẩn. Phần B kiểm tra việc chuyển quyền sở hữu theo § 929 S. 1 BGB: thỏa thuận chuyển quyền sở hữu chỉ mang lại lợi ích pháp lý cho M nên có hiệu lực mà không cần cha mẹ đồng ý. Theo nguyên tắc tách biệt và trừu tượng (Trennungs- und Abstraktionsprinzip), việc hợp đồng mua bán vô hiệu không ảnh hưởng đến giao dịch chuyển quyền sở hữu. Kết luận: V không đòi được tiền, M là chủ sở hữu, nhưng V có thể đòi lại máy theo § 812 BGB.",
   "checklist": [
    {
     "de": "Beide Fallfragen getrennt beantwortet (Verpflichtung und Verfügung)",
     "vi": "Trả lời riêng hai câu hỏi (giao dịch tạo nghĩa vụ và giao dịch định đoạt)"
    },
    {
     "de": "§ 107 BGB mit rechtlicher statt wirtschaftlicher Betrachtung erklärt",
     "vi": "Giải thích § 107 BGB theo góc độ pháp lý, không phải kinh tế"
    },
    {
     "de": "Einwilligung (§ 183) und Genehmigung (§ 184) unterschieden",
     "vi": "Phân biệt đồng ý trước (§ 183) và phê chuẩn sau (§ 184)"
    },
    {
     "de": "§ 110 BGB bei Ratenzahlung korrekt verneint",
     "vi": "Phủ định đúng § 110 BGB trong trường hợp trả góp"
    },
    {
     "de": "Schwebende und endgültige Unwirksamkeit (§ 108 BGB) dargestellt",
     "vi": "Trình bày hiệu lực treo và vô hiệu hoàn toàn (§ 108 BGB)"
    },
    {
     "de": "Abstraktionsprinzip bei der Übereignung angewandt",
     "vi": "Áp dụng nguyên tắc trừu tượng khi xét chuyển quyền sở hữu"
    },
    {
     "de": "Zwischenergebnisse nach jedem Prüfungspunkt",
     "vi": "Có kết luận tạm thời sau mỗi phần"
    },
    {
     "de": "Ergebnis nennt auch die Rückabwicklung (§ 812 BGB)",
     "vi": "Kết luận có nhắc đến việc hoàn trả (§ 812 BGB)"
    }
   ],
   "redemittel": [
    "… könnte gegen … einen Anspruch auf … aus § … haben.",
    "Dazu müsste …",
    "Fraglich ist, ob …",
    "… ist/sind … (Definition).",
    "Vorliegend …",
    "Somit / Folglich ist … gegeben.",
    "Zwischenergebnis: …",
    "Im Ergebnis …",
    "Maßgeblich ist allein die rechtliche, nicht die wirtschaftliche Betrachtung.",
    "Nach dem Trennungs- und Abstraktionsprinzip ist … gesondert zu beurteilen."
   ]
  },
  {
   "level": "C1",
   "area": "Zivilrecht",
   "title": "Schadensersatz aus § 823 Abs. 1 BGB – Der Fahrradunfall auf dem Gehweg",
   "title_vi": "Bồi thường thiệt hại theo § 823 I BGB – Vụ va chạm xe đạp trên vỉa hè",
   "prompt": "Sachverhalt: Der Student S fährt an einem Samstagvormittag mit seinem Fahrrad verbotswidrig auf dem Gehweg einer belebten Einkaufsstraße. Dabei liest er eine Nachricht auf seinem Smartphone und achtet nicht auf den Weg. Er stößt mit der Fußgängerin F zusammen, die gerade aus einer Bäckerei kommt. F stürzt und bricht sich das rechte Handgelenk; ihre Brille (Wert 250 €) wird zerstört. Für eine ärztlich verordnete Zusatztherapie, die ihre Krankenkasse nicht übernimmt, zahlt F 300 €. Wegen der Schmerzen kann sie mehrere Wochen lang nicht schreiben. F verlangt von S Ersatz der 550 € sowie ein angemessenes Schmerzensgeld.\n\nFallfrage: Hat F gegen S einen Anspruch auf Schadensersatz und Schmerzensgeld aus § 823 Abs. 1 BGB?",
   "prompt_vi": "Tình tiết: Một buổi sáng thứ Bảy, sinh viên S đạp xe trái quy định trên vỉa hè của một con phố mua sắm đông người. Trong lúc đó anh đọc tin nhắn trên điện thoại và không chú ý đường đi. Anh đâm vào người đi bộ F đang bước ra từ một tiệm bánh. F ngã và bị gãy cổ tay phải; kính của cô (trị giá 250 €) bị vỡ hoàn toàn. F phải trả 300 € cho một liệu pháp bổ sung do bác sĩ chỉ định mà bảo hiểm y tế không chi trả. Vì đau, cô không thể viết trong nhiều tuần. F yêu cầu S bồi thường 550 € và một khoản tiền bồi thường tổn thất tinh thần thích đáng.\n\nCâu hỏi: F có quyền yêu cầu S bồi thường thiệt hại và tiền bồi thường tổn thất tinh thần theo § 823 I BGB không?",
   "words": "320–440 Wörter",
   "model": "A. Anspruch der F gegen S aus § 823 Abs. 1 BGB\n\nF könnte gegen S einen Anspruch auf Ersatz von 550 € sowie auf ein angemessenes Schmerzensgeld aus § 823 Abs. 1 BGB haben.\n\nI. Haftungsbegründender Tatbestand\n1. Rechtsgutsverletzung\nEs müsste ein von § 823 Abs. 1 BGB geschütztes Rechtsgut verletzt worden sein. Eine Körperverletzung ist jeder Eingriff in die körperliche Unversehrtheit, eine Gesundheitsverletzung jede Störung der inneren Lebensvorgänge. Durch den Bruch des Handgelenks sind Körper und Gesundheit der F verletzt. Durch die Zerstörung der Brille wurde zudem ihr Eigentum verletzt.\n\n2. Verletzungshandlung\nS hat durch das Fahren mit dem Fahrrad, also durch aktives Tun, gehandelt.\n\n3. Haftungsbegründende Kausalität\nDer Zusammenstoß kann nicht hinweggedacht werden, ohne dass die Verletzungen entfielen (Äquivalenztheorie). Es liegt auch nicht außerhalb jeder Lebenserfahrung, dass ein Fußgänger bei einem solchen Zusammenstoß stürzt und sich verletzt (Adäquanztheorie).\n\n4. Rechtswidrigkeit\nDie Rechtswidrigkeit wird durch die Verletzung eines absolut geschützten Rechtsguts indiziert. Rechtfertigungsgründe sind nicht ersichtlich.\n\n5. Verschulden\nS müsste schuldhaft gehandelt haben (§ 276 Abs. 1 BGB). Fahrlässig handelt nach § 276 Abs. 2 BGB, wer die im Verkehr erforderliche Sorgfalt außer Acht lässt. S fuhr verbotswidrig auf dem Gehweg und las dabei Nachrichten auf seinem Smartphone. Ein sorgfältiger Radfahrer hätte nicht den Gehweg benutzt und auf den Weg geachtet. S handelte daher fahrlässig.\n\nII. Haftungsausfüllender Tatbestand\n1. Schaden\nSchaden ist jede unfreiwillige Einbuße an rechtlich geschützten Gütern. F sind Therapiekosten von 300 € und ein Vermögensschaden von 250 € durch die zerstörte Brille entstanden. Darüber hinaus erleidet sie einen immateriellen Schaden in Form von Schmerzen.\n\n2. Haftungsausfüllende Kausalität\nDiese Schäden beruhen auf den Rechtsgutsverletzungen.\n\n3. Art und Umfang des Ersatzes\nNach § 249 Abs. 1 BGB ist der Zustand herzustellen, der ohne das schädigende Ereignis bestehen würde. Wegen der Verletzung einer Person und der Beschädigung einer Sache kann F nach § 249 Abs. 2 S. 1 BGB statt der Herstellung den dafür erforderlichen Geldbetrag verlangen, hier 550 €. Wegen der Verletzung des Körpers und der Gesundheit kann sie nach § 253 Abs. 2 BGB außerdem eine billige Entschädigung in Geld (Schmerzensgeld) verlangen.\n\n4. Mitverschulden\nEin Mitverschulden der F (§ 254 Abs. 1 BGB) ist nicht ersichtlich; sie durfte darauf vertrauen, dass auf dem Gehweg keine Radfahrer fahren.\n\nB. Ergebnis\nF hat gegen S einen Anspruch auf Zahlung von 550 € sowie auf ein angemessenes Schmerzensgeld aus §§ 823 Abs. 1, 249 Abs. 2 S. 1, 253 Abs. 2 BGB.",
   "model_vi": "Bài giải chia yêu cầu theo § 823 I BGB thành hai phần lớn: cấu thành làm phát sinh trách nhiệm (haftungsbegründender Tatbestand) và cấu thành xác định phạm vi bồi thường (haftungsausfüllender Tatbestand). Ở phần đầu, các quyền được bảo vệ bị xâm phạm là thân thể, sức khỏe (gãy cổ tay) và quyền sở hữu (kính bị vỡ). Hành vi là hành động chủ động (đạp xe); quan hệ nhân quả được xác định theo thuyết điều kiện (Äquivalenz) và thuyết tương xứng (Adäquanz). Tính trái pháp luật được suy ra từ việc xâm phạm quyền tuyệt đối; lỗi là vô ý (§ 276 II BGB) vì S đạp xe trên vỉa hè và đọc điện thoại. Ở phần hai, thiệt hại gồm 300 € chi phí trị liệu, 250 € tiền kính và thiệt hại phi vật chất (đau đớn). F được yêu cầu bồi thường bằng tiền theo § 249 II 1 BGB và tiền bồi thường tổn thất tinh thần theo § 253 II BGB. Không có lỗi hỗn hợp của F (§ 254 BGB). Kết luận: F được bồi thường 550 € cộng một khoản tiền bồi thường tổn thất tinh thần thích đáng.",
   "checklist": [
    {
     "de": "Trennung von haftungsbegründendem und haftungsausfüllendem Tatbestand",
     "vi": "Tách cấu thành làm phát sinh trách nhiệm và cấu thành xác định phạm vi bồi thường"
    },
    {
     "de": "Alle verletzten Rechtsgüter (Körper, Gesundheit, Eigentum) genannt",
     "vi": "Nêu đủ các quyền bị xâm phạm (thân thể, sức khỏe, sở hữu)"
    },
    {
     "de": "Kausalität mit Äquivalenz- und Adäquanztheorie geprüft",
     "vi": "Kiểm tra quan hệ nhân quả theo thuyết điều kiện và thuyết tương xứng"
    },
    {
     "de": "Fahrlässigkeit nach § 276 Abs. 2 BGB definiert und subsumiert",
     "vi": "Định nghĩa và áp dụng khái niệm vô ý theo § 276 II BGB"
    },
    {
     "de": "Schadensposten einzeln aufgeführt",
     "vi": "Liệt kê từng khoản thiệt hại"
    },
    {
     "de": "§ 249 Abs. 2 S. 1 und § 253 Abs. 2 BGB korrekt angewandt",
     "vi": "Áp dụng đúng § 249 II 1 và § 253 II BGB"
    },
    {
     "de": "Mitverschulden (§ 254 BGB) kurz angesprochen",
     "vi": "Đề cập ngắn gọn lỗi hỗn hợp (§ 254 BGB)"
    },
    {
     "de": "Gutachtenstil statt Urteilsstil verwendet",
     "vi": "Dùng văn phong giám định (Gutachtenstil), không dùng văn phong phán quyết"
    }
   ],
   "redemittel": [
    "… könnte gegen … einen Anspruch auf … aus § … haben.",
    "Dazu müsste …",
    "Fraglich ist, ob …",
    "… ist/sind … (Definition).",
    "Vorliegend …",
    "Somit / Folglich ist … gegeben.",
    "Zwischenergebnis: …",
    "Im Ergebnis …",
    "Die Rechtswidrigkeit wird durch die Rechtsgutsverletzung indiziert.",
    "Fahrlässig handelt, wer die im Verkehr erforderliche Sorgfalt außer Acht lässt (§ 276 Abs. 2 BGB)."
   ]
  },
  {
   "level": "C1",
   "area": "Strafrecht",
   "title": "Diebstahl (§ 242 StGB) – Die Gewahrsamsenklave im Drogeriemarkt",
   "title_vi": "Trộm cắp (§ 242 StGB) – Giấu hàng trong áo khoác ở siêu thị",
   "prompt": "Sachverhalt: T betritt einen Drogeriemarkt der D-GmbH. Er nimmt eine Packung Rasierklingen und eine elektrische Zahnbürste im Gesamtwert von 65 € aus dem Regal und steckt beides in die Innentasche seiner Jacke. Er will die Waren behalten, ohne sie zu bezahlen. Dabei wird er vom Ladendetektiv L beobachtet, was T nicht bemerkt. An der Kasse bezahlt T lediglich eine Flasche Shampoo. Unmittelbar hinter dem Kassenbereich hält L ihn an und bringt ihn ins Büro der Filialleiterin. Die Waren werden sichergestellt.\n\nFallfrage: Hat sich T wegen Diebstahls gemäß § 242 Abs. 1 StGB strafbar gemacht?",
   "prompt_vi": "Tình tiết: T bước vào một cửa hàng mỹ phẩm – hóa phẩm của công ty D-GmbH. Anh lấy từ kệ một hộp lưỡi dao cạo và một bàn chải điện, tổng giá trị 65 €, rồi nhét cả hai vào túi trong áo khoác. Anh muốn giữ số hàng này mà không trả tiền. Nhân viên bảo vệ cửa hàng L đã quan sát toàn bộ, nhưng T không hề hay biết. Tại quầy thu ngân, T chỉ trả tiền một chai dầu gội. Ngay sau khu vực thu ngân, L chặn T lại và đưa anh vào văn phòng của quản lý cửa hàng. Số hàng bị thu giữ.\n\nCâu hỏi: T có phạm tội trộm cắp theo § 242 I StGB không?",
   "words": "300–420 Wörter",
   "model": "A. Strafbarkeit des T gemäß § 242 Abs. 1 StGB\n\nT könnte sich wegen Diebstahls gemäß § 242 Abs. 1 StGB strafbar gemacht haben, indem er die Rasierklingen und die Zahnbürste in seine Jackentasche steckte.\n\nI. Tatbestand\n1. Objektiver Tatbestand\na) Fremde bewegliche Sache\nDie Waren sind körperliche Gegenstände (§ 90 BGB), die fortbewegt werden können, also bewegliche Sachen. Sie stehen im Eigentum der D-GmbH und sind für T fremd.\n\nb) Wegnahme\nWegnahme ist der Bruch fremden und die Begründung neuen, nicht notwendigerweise tätereigenen Gewahrsams. Gewahrsam ist die von einem natürlichen Herrschaftswillen getragene tatsächliche Sachherrschaft nach der Verkehrsauffassung.\n\naa) Fremder Gewahrsam\nUrsprünglich hatte die Filialleiterin als Inhaberin der Sachherrschaft über die Waren im Geschäft Gewahrsam.\n\nbb) Begründung neuen Gewahrsams\nT könnte neuen Gewahrsam begründet haben, als er die Waren in seine Jacke steckte. Bei kleinen, leicht beweglichen Sachen begründet der Täter bereits dann eigenen Gewahrsam, wenn er sie in seine Kleidung steckt. Nach der Verkehrsauffassung bildet der Körperbereich des Täters eine Gewahrsamsenklave, in die Dritte nicht ohne Weiteres eingreifen dürfen – auch innerhalb des fremden Gewahrsamsbereichs des Geschäfts.\n\nFraglich ist, ob die Beobachtung durch L dem entgegensteht. Der Diebstahl ist jedoch kein heimliches Delikt. Die Beobachtung gibt dem Berechtigten nur die Möglichkeit, dem Täter die Sache wieder abzunehmen. Dies betrifft die Sicherung der Beute, nicht die Begründung des neuen Gewahrsams.\n\ncc) Bruch\nDer Gewahrsamswechsel erfolgte ohne Einverständnis der Filialleiterin und damit durch Bruch.\n\nc) Zwischenergebnis\nDer objektive Tatbestand ist erfüllt; die Tat ist bereits mit dem Einstecken vollendet.\n\n2. Subjektiver Tatbestand\na) Vorsatz\nT handelte mit Wissen und Wollen hinsichtlich aller objektiven Tatbestandsmerkmale.\n\nb) Absicht rechtswidriger Zueignung\nErforderlich sind die Absicht, sich die Sache zumindest vorübergehend anzueignen, und der Vorsatz, den Berechtigten dauerhaft zu enteignen. T wollte die Waren behalten und nicht bezahlen. Einen fälligen und einredefreien Anspruch auf Übereignung hatte er nicht; die erstrebte Zueignung war daher rechtswidrig, was T auch wusste.\n\nII. Rechtswidrigkeit\nRechtfertigungsgründe sind nicht ersichtlich.\n\nIII. Schuld\nSchuldausschließungs- oder Entschuldigungsgründe liegen nicht vor.\n\nIV. Strafantrag\nEin Strafantrag nach § 248a StGB ist nicht erforderlich, da die Waren mit 65 € nicht geringwertig sind; die Grenze wird überwiegend bei etwa 50 € gezogen.\n\nB. Ergebnis\nT hat sich wegen vollendeten Diebstahls gemäß § 242 Abs. 1 StGB strafbar gemacht.",
   "model_vi": "Bài giải theo sơ đồ ba tầng của luật hình sự Đức: cấu thành tội phạm (Tatbestand), tính trái pháp luật (Rechtswidrigkeit) và lỗi (Schuld). Ở cấu thành khách quan, hàng hóa là „động sản thuộc sở hữu người khác“. Điểm trọng tâm là hành vi chiếm đoạt (Wegnahme): phá vỡ sự chiếm giữ (Gewahrsam) của người khác và thiết lập sự chiếm giữ mới. Với đồ vật nhỏ, việc nhét vào quần áo đã tạo ra một „vùng chiếm giữ riêng“ (Gewahrsamsenklave) của người phạm tội, ngay cả khi vẫn ở trong cửa hàng. Việc bị bảo vệ quan sát không cản trở việc thiết lập chiếm giữ mới, vì trộm cắp không phải là tội phạm „lén lút“; do đó tội phạm đã hoàn thành chứ không chỉ là phạm tội chưa đạt. Ở cấu thành chủ quan, T có lỗi cố ý và có mục đích chiếm hữu trái pháp luật (ý định chiếm làm của mình và tước đoạt lâu dài của chủ sở hữu). Không có căn cứ loại trừ tính trái pháp luật hay lỗi. Vì giá trị 65 € vượt ngưỡng khoảng 50 € nên không cần đơn yêu cầu khởi tố theo § 248a StGB. Kết luận: T phạm tội trộm cắp đã hoàn thành theo § 242 I StGB.",
   "checklist": [
    {
     "de": "Dreistufiger Deliktsaufbau (Tatbestand – Rechtswidrigkeit – Schuld)",
     "vi": "Sơ đồ ba tầng (cấu thành – tính trái pháp luật – lỗi)"
    },
    {
     "de": "Obersatz nennt Täter, Handlung und Norm",
     "vi": "Câu mở đầu nêu người phạm tội, hành vi và điều luật"
    },
    {
     "de": "Definition der Wegnahme und des Gewahrsams genannt",
     "vi": "Nêu định nghĩa „chiếm đoạt“ và „chiếm giữ“"
    },
    {
     "de": "Gewahrsamsenklave erkannt und erklärt",
     "vi": "Nhận ra và giải thích „vùng chiếm giữ riêng“ (Gewahrsamsenklave)"
    },
    {
     "de": "Problem der Beobachtung diskutiert (kein heimliches Delikt)",
     "vi": "Thảo luận vấn đề bị quan sát (trộm cắp không phải tội „lén lút“)"
    },
    {
     "de": "Vollendung statt Versuch begründet",
     "vi": "Lập luận tội phạm đã hoàn thành chứ không phải chưa đạt"
    },
    {
     "de": "Zueignungsabsicht in Aneignung und Enteignung aufgeteilt",
     "vi": "Chia mục đích chiếm hữu thành ý định chiếm làm của mình và tước đoạt"
    },
    {
     "de": "§ 248a StGB (Geringwertigkeit) kurz angesprochen",
     "vi": "Đề cập ngắn gọn § 248a StGB (giá trị nhỏ)"
    }
   ],
   "redemittel": [
    "T könnte sich wegen … gemäß § … StGB strafbar gemacht haben, indem er …",
    "Wegnahme ist der Bruch fremden und die Begründung neuen Gewahrsams.",
    "Fraglich ist, ob …",
    "Dem steht nicht entgegen, dass …",
    "Der objektive Tatbestand ist somit erfüllt.",
    "T handelte vorsätzlich und mit Zueignungsabsicht.",
    "Rechtfertigungsgründe sind nicht ersichtlich.",
    "T handelte schuldhaft.",
    "T hat sich wegen … gemäß § … StGB strafbar gemacht."
   ]
  },
  {
   "level": "C2",
   "area": "Strafrecht",
   "title": "Betrug (§ 263 StGB) – Die Zechprellerei",
   "title_vi": "Lừa đảo (§ 263 StGB) – Ăn quỵt ở nhà hàng",
   "prompt": "Sachverhalt: A ist völlig mittellos und hat auch keine Aussicht auf Geld. Trotzdem geht er an einem Freitagabend in das Restaurant „Zur Linde“, das der Wirt W allein betreibt. Von Anfang an plant A, nach dem Essen unbemerkt zu verschwinden. Er bestellt bei W eine Vorspeise, ein Steak und eine Flasche Wein für insgesamt 78 €. W serviert alles in der Annahme, A werde wie jeder Gast am Ende bezahlen. Als W in der Küche beschäftigt ist, verlässt A das Lokal, ohne zu zahlen. W kennt A nicht. Erst Wochen später wird A durch Zufall identifiziert.\n\nFallfrage: Hat sich A wegen Betrugs gemäß § 263 Abs. 1 StGB strafbar gemacht?",
   "prompt_vi": "Tình tiết: A hoàn toàn không có tiền và cũng không có triển vọng có tiền. Dù vậy, vào một tối thứ Sáu, anh vào nhà hàng „Zur Linde“ do chủ quán W một mình kinh doanh. Ngay từ đầu, A đã lên kế hoạch lặng lẽ bỏ đi sau khi ăn. Anh gọi của W một món khai vị, một miếng bít tết và một chai rượu vang, tổng cộng 78 €. W phục vụ tất cả với suy nghĩ rằng A, như mọi vị khách khác, sẽ thanh toán khi ra về. Khi W đang bận trong bếp, A rời khỏi quán mà không trả tiền. W không biết A là ai. Nhiều tuần sau, A mới tình cờ bị nhận diện.\n\nCâu hỏi: A có phạm tội lừa đảo theo § 263 I StGB không?",
   "words": "350–450 Wörter",
   "model": "A. Strafbarkeit des A gemäß § 263 Abs. 1 StGB\n\nA könnte sich wegen Betrugs gemäß § 263 Abs. 1 StGB strafbar gemacht haben, indem er bei W Speisen und Getränke bestellte, ohne zahlen zu wollen und zu können.\n\nI. Tatbestand\n1. Objektiver Tatbestand\na) Täuschung über Tatsachen\nTäuschung ist jede intellektuelle Einwirkung auf das Vorstellungsbild eines anderen, die geeignet ist, eine Fehlvorstellung über Tatsachen hervorzurufen. Tatsachen sind alle Umstände der Vergangenheit oder Gegenwart, die dem Beweis zugänglich sind; dazu gehören auch innere Tatsachen wie die eigene Zahlungsbereitschaft. A hat nicht ausdrücklich erklärt, zahlen zu wollen. Wer jedoch in einem Restaurant bestellt, erklärt nach der Verkehrsauffassung schlüssig, zahlungswillig und zahlungsfähig zu sein. Beides traf auf A nicht zu. Eine konkludente Täuschung liegt vor.\n\nb) Irrtum\nIrrtum ist jede Fehlvorstellung über Tatsachen. W ging davon aus, A werde bezahlen. Er unterlag damit einem Irrtum.\n\nc) Vermögensverfügung\nVermögensverfügung ist jedes Handeln, Dulden oder Unterlassen, das sich unmittelbar vermögensmindernd auswirkt. W hat A die Speisen und Getränke serviert und ihm deren Verzehr ermöglicht. Dies minderte sein Vermögen unmittelbar. Da W selbst verfügte, sind Getäuschter, Verfügender und Geschädigter personengleich; ein Dreiecksbetrug scheidet aus.\n\nd) Vermögensschaden\nEin Vermögensschaden liegt vor, wenn der Wert des Gesamtvermögens durch die Verfügung gemindert wird (Prinzip der Gesamtsaldierung). Dem Abfluss der Speisen und Getränke im Wert von 78 € steht zwar der Zahlungsanspruch des W aus dem Bewirtungsvertrag gegenüber. Dieser Anspruch ist jedoch wirtschaftlich wertlos, weil A zahlungsunfähig und zahlungsunwillig ist und W ihn nicht kennt. Ein Vermögensschaden liegt daher vor.\n\ne) Kausalität\nTäuschung, Irrtum, Verfügung und Schaden stehen in einem ununterbrochenen Ursachenzusammenhang.\n\n2. Subjektiver Tatbestand\na) Vorsatz\nA handelte vorsätzlich hinsichtlich aller objektiven Tatbestandsmerkmale.\n\nb) Bereicherungsabsicht\nA kam es darauf an, die Bewirtung ohne Gegenleistung zu erhalten und sich so einen Vermögensvorteil zu verschaffen. Dieser Vorteil ist die Kehrseite des Schadens des W; die Stoffgleichheit ist gegeben.\n\nc) Rechtswidrigkeit der erstrebten Bereicherung\nA hatte keinen Anspruch auf eine unentgeltliche Bewirtung. Die erstrebte Bereicherung war rechtswidrig, was A auch wusste.\n\nII. Rechtswidrigkeit\nRechtfertigungsgründe sind nicht ersichtlich.\n\nIII. Schuld\nA handelte schuldhaft.\n\nIV. Strafantrag\nEin Strafantrag nach §§ 263 Abs. 4, 248a StGB ist nicht erforderlich, da der Schaden von 78 € nicht geringwertig ist.\n\nB. Ergebnis\nA hat sich wegen Betrugs gemäß § 263 Abs. 1 StGB strafbar gemacht.",
   "model_vi": "Bài giải kiểm tra lần lượt bốn yếu tố khách quan của tội lừa đảo, liên kết với nhau bằng quan hệ nhân quả: lừa dối – nhầm lẫn – định đoạt tài sản – thiệt hại tài sản. Hành vi lừa dối ở đây là lừa dối ngầm (konkludent): ai gọi món ở nhà hàng thì theo quan niệm thông thường đã ngầm khẳng định mình muốn và có khả năng thanh toán; ý định thanh toán cũng là một „tình tiết“ (tình tiết nội tâm). W bị nhầm lẫn và định đoạt tài sản bằng việc phục vụ đồ ăn; vì W vừa là người bị lừa, vừa là người định đoạt và người bị thiệt hại nên không phải trường hợp lừa đảo ba bên. Thiệt hại được xác định theo nguyên tắc so sánh tổng thể tài sản: quyền đòi tiền của W không có giá trị kinh tế vì A không có khả năng và không muốn trả, lại không rõ danh tính. Ở cấu thành chủ quan, A có lỗi cố ý, mục đích làm giàu, tính „đồng chất“ giữa lợi ích và thiệt hại (Stoffgleichheit) và lợi ích là trái pháp luật. Không có căn cứ loại trừ tính trái pháp luật hay lỗi; không cần đơn yêu cầu khởi tố vì thiệt hại không nhỏ. Kết luận: A phạm tội lừa đảo theo § 263 I StGB.",
   "checklist": [
    {
     "de": "Alle vier objektiven Merkmale in richtiger Reihenfolge geprüft",
     "vi": "Kiểm tra đủ bốn yếu tố khách quan theo đúng thứ tự"
    },
    {
     "de": "Konkludente Täuschung über innere Tatsachen begründet",
     "vi": "Lập luận về lừa dối ngầm liên quan đến tình tiết nội tâm"
    },
    {
     "de": "Vermögensverfügung definiert (Unmittelbarkeit)",
     "vi": "Định nghĩa định đoạt tài sản (tính trực tiếp)"
    },
    {
     "de": "Schaden nach Gesamtsaldierung berechnet, Wertlosigkeit des Anspruchs erklärt",
     "vi": "Xác định thiệt hại theo so sánh tổng thể, giải thích vì sao quyền đòi tiền không có giá trị"
    },
    {
     "de": "Bereicherungsabsicht und Stoffgleichheit geprüft",
     "vi": "Kiểm tra mục đích làm giàu và tính đồng chất"
    },
    {
     "de": "Rechtswidrigkeit der Bereicherung als Tatbestandsmerkmal behandelt",
     "vi": "Xử lý tính trái pháp luật của lợi ích như một yếu tố cấu thành"
    },
    {
     "de": "Fachsprache präzise (konkludent, Gesamtsaldierung, Stoffgleichheit)",
     "vi": "Thuật ngữ chuyên môn chính xác"
    },
    {
     "de": "Ergebnis klar und vollständig",
     "vi": "Kết luận rõ ràng và đầy đủ"
    }
   ],
   "redemittel": [
    "A könnte sich wegen Betrugs gemäß § 263 Abs. 1 StGB strafbar gemacht haben, indem er …",
    "Wer …, erklärt nach der Verkehrsauffassung schlüssig, dass …",
    "Eine konkludente Täuschung liegt somit vor.",
    "Nach dem Prinzip der Gesamtsaldierung …",
    "Dieser Anspruch ist wirtschaftlich wertlos, weil …",
    "Der erstrebte Vorteil ist die Kehrseite des Schadens (Stoffgleichheit).",
    "Rechtfertigungs- und Entschuldigungsgründe sind nicht ersichtlich.",
    "Im Ergebnis hat sich A wegen … strafbar gemacht."
   ]
  },
  {
   "level": "C1",
   "area": "Strafrecht",
   "title": "Notwehr (§ 32 StGB) – Der Angriff im Park",
   "title_vi": "Phòng vệ chính đáng (§ 32 StGB) – Bị tấn công trong công viên",
   "prompt": "Sachverhalt: Die Jurastudentin A geht nachts allein durch einen Park nach Hause. Der deutlich größere und kräftigere B, der sich grundlos von ihr beleidigt fühlt, stellt sich ihr in den Weg, hält sie am Jackenärmel fest, beschimpft sie und schlägt ihr mit der Faust ins Gesicht. Als B erneut ausholt, stößt A ihn mit aller Kraft von sich. B verliert das Gleichgewicht, stürzt auf den Asphaltweg und bricht sich den Arm. A läuft nach Hause. Weglaufen war ihr vor dem Stoß nicht möglich, da B sie festhielt. A hatte B zuvor in keiner Weise provoziert.\n\nFallfrage: Hat sich A wegen Körperverletzung gemäß § 223 Abs. 1 StGB strafbar gemacht?",
   "prompt_vi": "Tình tiết: Nữ sinh viên luật A đi bộ một mình qua công viên về nhà vào ban đêm. B, cao lớn và khỏe hơn hẳn, vô cớ cảm thấy bị cô xúc phạm, chặn đường cô, nắm lấy tay áo khoác của cô, chửi bới và đấm vào mặt cô. Khi B lại vung tay định đánh tiếp, A dùng hết sức đẩy B ra. B mất thăng bằng, ngã xuống lối đi nhựa đường và bị gãy tay. A chạy về nhà. Trước khi đẩy, A không thể bỏ chạy vì B đang giữ chặt cô. Trước đó A hoàn toàn không khiêu khích B.\n\nCâu hỏi: A có phạm tội gây thương tích theo § 223 I StGB không?",
   "words": "300–420 Wörter",
   "model": "A. Strafbarkeit der A gemäß § 223 Abs. 1 StGB\n\nA könnte sich wegen Körperverletzung gemäß § 223 Abs. 1 StGB strafbar gemacht haben, indem sie B von sich stieß, sodass dieser stürzte und sich den Arm brach.\n\nI. Tatbestand\n1. Objektiver Tatbestand\na) Körperliche Misshandlung\nEine körperliche Misshandlung ist jede üble, unangemessene Behandlung, die das körperliche Wohlbefinden oder die körperliche Unversehrtheit mehr als nur unerheblich beeinträchtigt. Der Armbruch erfüllt diese Voraussetzungen.\n\nb) Gesundheitsschädigung\nEine Gesundheitsschädigung ist das Hervorrufen oder Steigern eines pathologischen Zustands. Der behandlungsbedürftige Bruch stellt einen solchen Zustand dar.\n\nc) Kausalität und objektive Zurechnung\nOhne den Stoß wäre B nicht gestürzt. Der Sturz auf den Asphalt ist die typische Folge eines kräftigen Stoßes; in ihm hat sich die von A geschaffene Gefahr realisiert.\n\n2. Subjektiver Tatbestand\nA wollte B wegstoßen und nahm zumindest billigend in Kauf, dass er dabei stürzen und sich verletzen könnte. Sie handelte mit bedingtem Vorsatz.\n\nII. Rechtswidrigkeit\nDie Tat könnte durch Notwehr gemäß § 32 StGB gerechtfertigt sein.\n\n1. Notwehrlage\nErforderlich ist ein gegenwärtiger rechtswidriger Angriff (§ 32 Abs. 2 StGB). Angriff ist jede durch menschliches Verhalten drohende Verletzung rechtlich geschützter Güter oder Interessen. B hatte A geschlagen, hielt sie fest und holte erneut aus; damit griff er ihre körperliche Unversehrtheit und Fortbewegungsfreiheit an. Gegenwärtig ist ein Angriff, der unmittelbar bevorsteht, gerade stattfindet oder noch fortdauert. Dies ist bei erneutem Ausholen der Fall. Der Angriff war rechtswidrig, da B kein Rechtfertigungsgrund zur Seite stand.\n\n2. Notwehrhandlung\na) Erforderlichkeit\nDie Verteidigung ist erforderlich, wenn sie geeignet ist, den Angriff sofort und endgültig zu beenden, und das relativ mildeste Mittel unter mehreren gleich geeigneten darstellt. Eine Abwägung der betroffenen Rechtsgüter findet nicht statt, denn das Recht braucht dem Unrecht nicht zu weichen. Ausweichen musste A nicht; es war ihr zudem nicht möglich. Ein milderes, gleich wirksames Mittel stand der körperlich unterlegenen A nicht zur Verfügung. Der Stoß war erforderlich.\n\nb) Gebotenheit\nSozialethische Einschränkungen des Notwehrrechts, etwa bei einer Provokation durch den Verteidiger oder bei Angriffen von erkennbar schuldlos Handelnden, liegen nicht vor.\n\n3. Verteidigungswille\nA handelte in Kenntnis der Notwehrlage und mit dem Willen, sich zu verteidigen.\n\n4. Zwischenergebnis\nDie Tat ist durch Notwehr gerechtfertigt.\n\nB. Ergebnis\nA hat sich nicht wegen Körperverletzung gemäß § 223 Abs. 1 StGB strafbar gemacht.",
   "model_vi": "Bài giải trước hết xác nhận A đã thực hiện cấu thành tội gây thương tích (§ 223 I StGB): việc gãy tay vừa là „ngược đãi thân thể“ vừa là „gây tổn hại sức khỏe“, có quan hệ nhân quả và có thể quy trách nhiệm khách quan; A có lỗi cố ý gián tiếp. Trọng tâm nằm ở tầng tính trái pháp luật: hành vi có được biện minh bởi phòng vệ chính đáng (§ 32 StGB) không. Tình thế phòng vệ tồn tại vì có một cuộc tấn công hiện hữu và trái pháp luật (B đang giữ A và vung tay định đánh tiếp). Hành vi phòng vệ là „cần thiết“ vì phù hợp và là biện pháp nhẹ nhất trong số các biện pháp hiệu quả như nhau; luật Đức không đòi hỏi cân nhắc tương xứng giữa các lợi ích và không bắt buộc phải tránh né („pháp luật không cần nhường bước cho cái sai“). Không có hạn chế về mặt đạo đức xã hội (ví dụ: tự khiêu khích). A có ý chí phòng vệ. Kết luận: hành vi được biện minh, A không phạm tội.",
   "checklist": [
    {
     "de": "Tatbestand vollständig geprüft, bevor die Rechtfertigung beginnt",
     "vi": "Kiểm tra đầy đủ cấu thành trước khi xét căn cứ biện minh"
    },
    {
     "de": "Beide Varianten des § 223 Abs. 1 StGB definiert",
     "vi": "Định nghĩa cả hai dạng hành vi của § 223 I StGB"
    },
    {
     "de": "Notwehrlage: Angriff, Gegenwärtigkeit, Rechtswidrigkeit getrennt geprüft",
     "vi": "Tình thế phòng vệ: kiểm tra riêng tấn công, tính hiện hữu, tính trái pháp luật"
    },
    {
     "de": "Erforderlichkeit korrekt definiert (keine Güterabwägung)",
     "vi": "Định nghĩa đúng tính cần thiết (không cân nhắc tương xứng lợi ích)"
    },
    {
     "de": "Keine Ausweichpflicht erwähnt",
     "vi": "Nêu rằng không có nghĩa vụ phải tránh né"
    },
    {
     "de": "Gebotenheit kurz angesprochen",
     "vi": "Đề cập ngắn gọn tính „được phép“ (Gebotenheit)"
    },
    {
     "de": "Subjektives Rechtfertigungselement (Verteidigungswille) geprüft",
     "vi": "Kiểm tra yếu tố chủ quan (ý chí phòng vệ)"
    },
    {
     "de": "Ergebnis: keine Strafbarkeit",
     "vi": "Kết luận: không phạm tội"
    }
   ],
   "redemittel": [
    "Die Tat könnte durch Notwehr gemäß § 32 StGB gerechtfertigt sein.",
    "Angriff ist jede durch menschliches Verhalten drohende Verletzung rechtlich geschützter Güter.",
    "Gegenwärtig ist ein Angriff, der unmittelbar bevorsteht, gerade stattfindet oder noch fortdauert.",
    "Die Verteidigung ist erforderlich, wenn …",
    "Das Recht braucht dem Unrecht nicht zu weichen.",
    "Sozialethische Einschränkungen sind nicht ersichtlich.",
    "A handelte mit Verteidigungswillen.",
    "Die Tat ist somit gerechtfertigt."
   ]
  },
  {
   "level": "C2",
   "area": "Öffentliches Recht",
   "title": "Verhältnismäßigkeit einer Versammlungsauflage (Art. 8 GG)",
   "title_vi": "Tính tương xứng của một điều kiện hạn chế đối với cuộc tụ họp (Điều 8 GG)",
   "prompt": "Sachverhalt: Die Initiative „Bezahlbar wohnen“ meldet bei der zuständigen Versammlungsbehörde der Stadt S ordnungsgemäß einen Aufzug an: An einem Samstag im Dezember wollen etwa 800 Personen von 11 bis 13 Uhr über die zentrale Einkaufsstraße zum Rathaus ziehen, um gegen steigende Mieten zu protestieren. Die Behörde erlässt daraufhin eine Auflage: Die Versammlung dürfe nur als ortsfeste Kundgebung auf einem Parkplatz am Stadtrand stattfinden. Zur Begründung verweist sie allein darauf, dass der Aufzug den Einkaufs- und Lieferverkehr in der Innenstadt erheblich behindere. Eine kurzfristige Sperrung der Straße mit Umleitung des Verkehrs wäre polizeilich ohne Weiteres möglich. Hinweise auf Gewalt gibt es nicht.\n\nFallfrage: Ist die Auflage verhältnismäßig? Unterstellen Sie, dass § 15 Abs. 1 VersammlG als Ermächtigungsgrundlage anwendbar ist, die Behörde zuständig war und die übrigen Rechtmäßigkeitsvoraussetzungen vorliegen.",
   "prompt_vi": "Tình tiết: Nhóm sáng kiến „Nhà ở vừa túi tiền“ đăng ký hợp lệ với cơ quan quản lý tụ họp của thành phố S một cuộc tuần hành: vào một ngày thứ Bảy tháng Mười Hai, khoảng 800 người muốn diễu hành từ 11 đến 13 giờ qua phố mua sắm trung tâm đến tòa thị chính để phản đối giá thuê nhà tăng. Cơ quan chức năng sau đó ban hành một điều kiện hạn chế (Auflage): cuộc tụ họp chỉ được tổ chức dưới dạng mít-tinh cố định tại một bãi đỗ xe ở ngoại ô. Lý do duy nhất được nêu là cuộc tuần hành sẽ cản trở nghiêm trọng giao thông mua sắm và giao hàng trong trung tâm. Việc cảnh sát tạm thời phong tỏa con phố và phân luồng giao thông là hoàn toàn khả thi. Không có dấu hiệu bạo lực.\n\nCâu hỏi: Điều kiện hạn chế này có tương xứng không? Giả định rằng § 15 I VersammlG có thể áp dụng làm căn cứ thẩm quyền, cơ quan có thẩm quyền và các điều kiện hợp pháp khác đều được đáp ứng.",
   "words": "320–440 Wörter",
   "model": "A. Verhältnismäßigkeit der Auflage\n\nDie Auflage könnte unverhältnismäßig sein und die Initiative in ihrem Grundrecht aus Art. 8 Abs. 1 GG (i. V. m. Art. 19 Abs. 3 GG) verletzen. § 15 Abs. 1 VersammlG räumt der Behörde Ermessen ein, das sie nur in den Grenzen des Verhältnismäßigkeitsgrundsatzes ausüben darf (§ 40 VwVfG). Eine Maßnahme ist verhältnismäßig, wenn sie einen legitimen Zweck verfolgt und zu dessen Erreichung geeignet, erforderlich und angemessen ist.\n\nI. Legitimer Zweck\nDie Behörde will die Sicherheit und Leichtigkeit des Straßenverkehrs gewährleisten und die Interessen der Gewerbetreibenden schützen. Dies sind Schutzgüter der öffentlichen Sicherheit und damit legitime Zwecke.\n\nII. Geeignetheit\nGeeignet ist eine Maßnahme, wenn sie den verfolgten Zweck zumindest fördert. Die Verlegung an den Stadtrand verhindert Verkehrsbehinderungen in der Innenstadt. Sie ist daher geeignet.\n\nIII. Erforderlichkeit\nErforderlich ist eine Maßnahme, wenn kein milderes Mittel zur Verfügung steht, das den Zweck gleich wirksam erreicht. Als mildere Mittel kommen eine kurzfristige Sperrung der Einkaufsstraße mit Umleitung des Verkehrs, eine Änderung der Route oder eine zeitliche Beschränkung des Aufzugs in Betracht. Nach dem Sachverhalt wären Sperrung und Umleitung ohne Weiteres möglich gewesen. Diese Maßnahmen schützen die Verkehrsbelange gleichermaßen, beeinträchtigen die Versammlungsfreiheit aber deutlich weniger. Die vollständige Verlegung an den Stadtrand ist daher nicht erforderlich.\n\nIV. Angemessenheit\nSelbst bei Bejahung der Erforderlichkeit wäre die Auflage unangemessen. Angemessen ist eine Maßnahme, wenn der mit ihr verbundene Eingriff nicht außer Verhältnis zu dem angestrebten Zweck steht. Die Versammlungsfreiheit ist für die freiheitliche demokratische Grundordnung schlechthin konstituierend (BVerfGE 69, 315 – Brokdorf). Sie umfasst das Selbstbestimmungsrecht der Veranstalter über Ort, Zeitpunkt, Art und Inhalt der Versammlung. Gerade ein Aufzug zum Rathaus soll Aufmerksamkeit bei Öffentlichkeit und Politik erzeugen. Eine Kundgebung auf einem Parkplatz am Stadtrand nimmt der Versammlung weitgehend ihre Wirkung. Demgegenüber sind Verkehrsbehinderungen, die mit einer größeren Versammlung typischerweise verbunden sind, von Dritten grundsätzlich hinzunehmen, zumal der Aufzug nur zwei Stunden dauern soll und Gewalt nicht zu erwarten ist. Das Interesse am ungestörten Einkaufsverkehr wiegt daher deutlich weniger schwer als die Versammlungsfreiheit.\n\nB. Ergebnis\nDie Auflage ist weder erforderlich noch angemessen. Sie ist unverhältnismäßig und damit ermessensfehlerhaft und rechtswidrig. Sie verletzt die Initiative in ihrem Grundrecht aus Art. 8 Abs. 1 GG.",
   "model_vi": "Bài giải xem xét tính tương xứng như giới hạn của quyền tự quyết định (Ermessen) mà § 15 I VersammlG trao cho cơ quan chức năng, liên quan đến quyền tự do hội họp theo Điều 8 I GG. Phép thử gồm bốn bước: mục đích chính đáng, tính phù hợp, tính cần thiết và tính tương xứng theo nghĩa hẹp. Mục đích bảo đảm an toàn giao thông và lợi ích của các cơ sở kinh doanh là chính đáng; việc dời ra ngoại ô cũng phù hợp để đạt mục đích. Tuy nhiên, biện pháp không cần thiết vì có các biện pháp nhẹ hơn mà hiệu quả như nhau, như phong tỏa tạm thời và phân luồng, đổi lộ trình hoặc rút ngắn thời gian. Bài giải còn xét thêm (lập luận bổ trợ) rằng biện pháp cũng không tương xứng: tự do hội họp có ý nghĩa nền tảng cho dân chủ (phán quyết Brokdorf của Tòa án Hiến pháp Liên bang), người tổ chức có quyền tự quyết định địa điểm, và cuộc tụ họp ở ngoại ô gần như mất hết hiệu quả. Cản trở giao thông thông thường là điều người thứ ba phải chấp nhận. Kết luận: điều kiện hạn chế không tương xứng, trái pháp luật và xâm phạm Điều 8 I GG.",
   "checklist": [
    {
     "de": "Vierstufige Prüfung: Zweck, Geeignetheit, Erforderlichkeit, Angemessenheit",
     "vi": "Kiểm tra bốn bước: mục đích, tính phù hợp, tính cần thiết, tính tương xứng"
    },
    {
     "de": "Jede Stufe mit Definition eingeleitet",
     "vi": "Mỗi bước được mở đầu bằng định nghĩa"
    },
    {
     "de": "Konkrete mildere Mittel aus dem Sachverhalt benannt",
     "vi": "Nêu các biện pháp nhẹ hơn cụ thể từ tình tiết"
    },
    {
     "de": "Bedeutung von Art. 8 GG (Brokdorf) in die Abwägung eingebracht",
     "vi": "Đưa ý nghĩa của Điều 8 GG (phán quyết Brokdorf) vào việc cân nhắc"
    },
    {
     "de": "Selbstbestimmungsrecht über Ort und Art der Versammlung erwähnt",
     "vi": "Nhắc đến quyền tự quyết định địa điểm và hình thức tụ họp"
    },
    {
     "de": "Gegenläufige Interessen (Verkehr, Gewerbe) fair gewichtet",
     "vi": "Cân nhắc công bằng các lợi ích đối lập (giao thông, kinh doanh)"
    },
    {
     "de": "Hilfsweise Prüfung („Selbst wenn …“) sauber gekennzeichnet",
     "vi": "Lập luận bổ trợ („Selbst wenn …“) được đánh dấu rõ ràng"
    },
    {
     "de": "Ergebnis nennt Rechtsfolge (rechtswidrig, Grundrechtsverletzung)",
     "vi": "Kết luận nêu hậu quả pháp lý (trái pháp luật, xâm phạm quyền cơ bản)"
    }
   ],
   "redemittel": [
    "Die Maßnahme könnte unverhältnismäßig sein.",
    "Eine Maßnahme ist verhältnismäßig, wenn sie einen legitimen Zweck verfolgt und geeignet, erforderlich und angemessen ist.",
    "Als milderes, gleich geeignetes Mittel kommt … in Betracht.",
    "Selbst wenn man die Erforderlichkeit bejahte, wäre …",
    "Die Versammlungsfreiheit ist für die freiheitliche demokratische Grundordnung schlechthin konstituierend.",
    "Demgegenüber wiegt … weniger schwer.",
    "Verkehrsbehinderungen sind grundsätzlich hinzunehmen.",
    "Die Auflage ist daher unverhältnismäßig und rechtswidrig."
   ]
  },
  {
   "level": "C2",
   "area": "Öffentliches Recht",
   "title": "Zulässigkeit einer Anfechtungsklage – Die Gewerbeuntersagung",
   "title_vi": "Tính chấp nhận được của vụ kiện hủy quyết định hành chính – Lệnh cấm kinh doanh",
   "prompt": "Sachverhalt: G betreibt in der kreisfreien Stadt X einen Imbiss. Mit Bescheid vom 2. März 2026 untersagt ihm der Oberbürgermeister der Stadt X als zuständige Gewerbebehörde die weitere Ausübung seines Gewerbes nach § 35 Abs. 1 GewO, weil G seit Jahren keine Steuern und Sozialversicherungsbeiträge abgeführt habe und daher unzuverlässig sei. Der Bescheid enthält eine ordnungsgemäße Rechtsbehelfsbelehrung und wird G am Mittwoch, dem 4. März 2026, mit Postzustellungsurkunde zugestellt. Ein Widerspruchsverfahren ist nach dem einschlägigen Landesrecht nicht vorgesehen. G hält die Vorwürfe für unzutreffend. Seine Klage gegen die Stadt X auf Aufhebung des Bescheids geht am Dienstag, dem 7. April 2026, beim örtlich zuständigen Verwaltungsgericht ein. (Hinweis: Der 5. und 6. April 2026 sind Ostersonntag und Ostermontag.)\n\nFallfrage: Ist die Klage des G zulässig?",
   "prompt_vi": "Tình tiết: G kinh doanh một quán ăn nhanh tại thành phố X (thành phố trực thuộc bang, không thuộc huyện). Bằng quyết định ngày 2/3/2026, thị trưởng thành phố X với tư cách cơ quan quản lý kinh doanh có thẩm quyền cấm G tiếp tục hành nghề theo § 35 I GewO, với lý do nhiều năm nay G không nộp thuế và các khoản đóng bảo hiểm xã hội nên bị coi là không đáng tin cậy. Quyết định có hướng dẫn hợp lệ về quyền khiếu nại, khởi kiện và được tống đạt cho G vào thứ Tư, 4/3/2026, bằng biên bản tống đạt bưu chính. Theo luật của bang, không có thủ tục khiếu nại hành chính (Widerspruchsverfahren). G cho rằng các cáo buộc là sai. Đơn kiện của G chống lại thành phố X, yêu cầu hủy quyết định, được tòa án hành chính có thẩm quyền theo lãnh thổ nhận vào thứ Ba, 7/4/2026. (Lưu ý: ngày 5 và 6/4/2026 là Chủ nhật Phục sinh và Thứ Hai Phục sinh.)\n\nCâu hỏi: Đơn kiện của G có được chấp nhận về mặt thủ tục (zulässig) không?",
   "words": "350–450 Wörter",
   "model": "A. Zulässigkeit der Klage\n\nDie Klage des G ist zulässig, wenn die Sachentscheidungsvoraussetzungen vorliegen.\n\nI. Eröffnung des Verwaltungsrechtswegs\nMangels aufdrängender Sonderzuweisung richtet sich der Rechtsweg nach § 40 Abs. 1 S. 1 VwGO. Die streitentscheidende Norm, § 35 Abs. 1 GewO, berechtigt ausschließlich einen Träger hoheitlicher Gewalt und ist daher öffentlich-rechtlich (modifizierte Subjektstheorie). Die Streitigkeit ist nichtverfassungsrechtlicher Art; eine abdrängende Sonderzuweisung besteht nicht. Der Verwaltungsrechtsweg ist eröffnet.\n\nII. Statthafte Klageart\nDie statthafte Klageart richtet sich nach dem Klagebegehren (§ 88 VwGO). G begehrt die Aufhebung der Gewerbeuntersagung. Statthaft ist daher die Anfechtungsklage (§ 42 Abs. 1 Alt. 1 VwGO), sofern die Untersagung ein Verwaltungsakt ist. Sie ist eine hoheitliche Maßnahme einer Behörde zur Regelung eines Einzelfalls auf dem Gebiet des öffentlichen Rechts mit unmittelbarer Rechtswirkung nach außen (§ 35 S. 1 VwVfG). Die Anfechtungsklage ist statthaft.\n\nIII. Klagebefugnis\nNach § 42 Abs. 2 VwGO muss G geltend machen, durch den Verwaltungsakt in seinen Rechten verletzt zu sein. Als Adressat eines belastenden Verwaltungsakts ist er zumindest möglicherweise in seiner Berufsfreiheit aus Art. 12 Abs. 1 GG verletzt (Adressatentheorie). G ist klagebefugt.\n\nIV. Vorverfahren\nEin Vorverfahren nach § 68 Abs. 1 S. 1 VwGO ist entbehrlich, da das Landesrecht es ausschließt (§ 68 Abs. 1 S. 2 Hs. 1 VwGO).\n\nV. Klagefrist\nDie Klage muss nach § 74 Abs. 1 S. 2 VwGO innerhalb eines Monats nach Bekanntgabe des Verwaltungsakts erhoben werden. Der Bescheid wurde am 4. März 2026 zugestellt. Nach § 57 Abs. 2 VwGO i. V. m. § 222 Abs. 1 ZPO, §§ 187 Abs. 1, 188 Abs. 2 Alt. 1 BGB endete die Frist grundsätzlich mit Ablauf des 4. April 2026. Dieser Tag ist jedoch ein Samstag. Nach § 222 Abs. 2 ZPO endet die Frist daher erst mit Ablauf des nächsten Werktags. Da der 5. April 2026 ein Sonntag (Ostersonntag) und der 6. April 2026 ein gesetzlicher Feiertag (Ostermontag) ist, endete die Frist mit Ablauf des 7. April 2026. Die an diesem Tag eingegangene Klage ist fristgerecht.\n\nVI. Richtiger Klagegegner\nNach § 78 Abs. 1 Nr. 1 VwGO ist die Klage gegen die Körperschaft zu richten, deren Behörde den Verwaltungsakt erlassen hat (Rechtsträgerprinzip), hier also gegen die Stadt X – sofern das Landesrecht nicht nach § 78 Abs. 1 Nr. 2 VwGO die Behörde selbst als Beklagte bestimmt.\n\nVII. Beteiligten- und Prozessfähigkeit\nG ist nach §§ 61 Nr. 1, 62 Abs. 1 Nr. 1 VwGO beteiligten- und prozessfähig. Die Stadt X ist als juristische Person des öffentlichen Rechts beteiligtenfähig (§ 61 Nr. 1 VwGO) und wird durch ihren Oberbürgermeister vertreten (§ 62 Abs. 3 VwGO).\n\nB. Ergebnis\nDie Klage des G ist zulässig.",
   "model_vi": "Bài giải kiểm tra lần lượt các điều kiện thụ lý (Sachentscheidungsvoraussetzungen) của một vụ kiện hủy quyết định hành chính. Con đường tố tụng hành chính được mở theo § 40 I 1 VwGO vì quy phạm quyết định tranh chấp (§ 35 GewO) chỉ trao quyền cho cơ quan công quyền (thuyết chủ thể sửa đổi). Loại kiện phù hợp là kiện hủy (Anfechtungsklage, § 42 I Alt. 1 VwGO) vì lệnh cấm kinh doanh là một quyết định hành chính theo § 35 S. 1 VwVfG. G có tư cách khởi kiện (§ 42 II VwGO) vì là người nhận một quyết định bất lợi và có thể bị xâm phạm quyền tự do nghề nghiệp (Điều 12 I GG). Không cần thủ tục khiếu nại hành chính vì luật bang loại trừ. Điểm trọng tâm là thời hạn khởi kiện một tháng (§ 74 I 2 VwGO): theo cách tính thông thường, thời hạn kết thúc ngày 4/4/2026, nhưng đó là thứ Bảy; theo § 222 II ZPO, thời hạn được lùi đến ngày làm việc tiếp theo, mà 5/4 là Chủ nhật Phục sinh và 6/4 là ngày lễ, nên thời hạn kết thúc ngày 7/4 – đơn kiện vẫn đúng hạn. Bị đơn đúng là thành phố X (nguyên tắc chủ thể pháp lý, § 78 I Nr. 1 VwGO); các bên có năng lực tham gia và năng lực tố tụng. Kết luận: đơn kiện được chấp nhận về thủ tục.",
   "checklist": [
    {
     "de": "Prüfungsreihenfolge der Sachentscheidungsvoraussetzungen eingehalten",
     "vi": "Tuân thủ trình tự kiểm tra các điều kiện thụ lý"
    },
    {
     "de": "Verwaltungsrechtsweg mit modifizierter Subjektstheorie begründet",
     "vi": "Lập luận con đường tố tụng hành chính bằng thuyết chủ thể sửa đổi"
    },
    {
     "de": "VA-Merkmale nach § 35 S. 1 VwVfG genannt",
     "vi": "Nêu các đặc điểm của quyết định hành chính theo § 35 S. 1 VwVfG"
    },
    {
     "de": "Klagebefugnis mit Adressatentheorie und Art. 12 GG",
     "vi": "Tư cách khởi kiện theo thuyết người nhận và Điều 12 GG"
    },
    {
     "de": "Entbehrlichkeit des Vorverfahrens (§ 68 Abs. 1 S. 2 VwGO) erkannt",
     "vi": "Nhận ra không cần thủ tục khiếu nại (§ 68 I 2 VwGO)"
    },
    {
     "de": "Fristberechnung mit § 57 VwGO, § 222 ZPO, §§ 187, 188 BGB korrekt",
     "vi": "Tính thời hạn đúng với § 57 VwGO, § 222 ZPO, §§ 187, 188 BGB"
    },
    {
     "de": "Fristverlängerung wegen Wochenende und Feiertag (§ 222 Abs. 2 ZPO) erkannt",
     "vi": "Nhận ra việc lùi hạn do cuối tuần và ngày lễ (§ 222 II ZPO)"
    },
    {
     "de": "Richtiger Klagegegner nach § 78 VwGO",
     "vi": "Xác định đúng bị đơn theo § 78 VwGO"
    }
   ],
   "redemittel": [
    "Die Klage ist zulässig, wenn die Sachentscheidungsvoraussetzungen vorliegen.",
    "Mangels aufdrängender Sonderzuweisung richtet sich der Rechtsweg nach § 40 Abs. 1 S. 1 VwGO.",
    "Die statthafte Klageart richtet sich nach dem Klagebegehren (§ 88 VwGO).",
    "Als Adressat eines belastenden Verwaltungsakts ist G klagebefugt.",
    "Die Frist endet mit Ablauf des …",
    "Fällt das Fristende auf einen Sonnabend, Sonntag oder allgemeinen Feiertag, so endet die Frist mit Ablauf des nächsten Werktags.",
    "Die Klage ist somit fristgerecht erhoben.",
    "Im Ergebnis ist die Klage zulässig."
   ]
  },
  {
   "level": "C1",
   "area": "Steuerrecht",
   "title": "Werbungskosten und Entfernungspauschale (§ 9 EStG)",
   "title_vi": "Chi phí liên quan đến thu nhập và khoản khấu trừ theo quãng đường (§ 9 EStG)",
   "prompt": "Sachverhalt: Die Steuerfachangestellte A wohnt in Halle (Saale) und arbeitet seit Jahren in einer Steuerberatungskanzlei in Leipzig. Die kürzeste Straßenverbindung zwischen ihrer Wohnung und der Kanzlei, ihrer ersten Tätigkeitsstätte, beträgt 32 km. Im Jahr 2025 fuhr sie an 220 Arbeitstagen mit ihrem eigenen Pkw zur Arbeit. Außerdem kaufte sie für 170 € einen aktuellen Kommentar zum Einkommensteuergesetz, den sie ausschließlich beruflich nutzt; ihr Arbeitgeber erstattete ihr hierfür nichts. In ihrer Einkommensteuererklärung für 2025 setzt A für die Fahrten 4.224 € an (32 km × 2 Fahrten × 0,30 € × 220 Tage).\n\nFallfrage: In welcher Höhe kann A für 2025 Werbungskosten bei ihren Einkünften aus nichtselbständiger Arbeit (§ 19 EStG) abziehen?",
   "prompt_vi": "Tình tiết: A là nhân viên nghiệp vụ thuế, sống ở Halle (Saale) và nhiều năm nay làm việc tại một văn phòng tư vấn thuế ở Leipzig. Quãng đường bộ ngắn nhất giữa nhà và văn phòng – nơi làm việc chính (erste Tätigkeitsstätte) của cô – là 32 km. Năm 2025, cô lái ô tô riêng đi làm trong 220 ngày làm việc. Ngoài ra, cô mua một cuốn bình luận luật thuế thu nhập mới nhất giá 170 €, chỉ dùng cho công việc; chủ lao động không hoàn trả khoản này. Trong tờ khai thuế thu nhập năm 2025, A kê khai chi phí đi lại là 4.224 € (32 km × 2 chiều × 0,30 € × 220 ngày).\n\nCâu hỏi: Năm 2025, A được khấu trừ bao nhiêu chi phí liên quan đến thu nhập (Werbungskosten) đối với thu nhập từ lao động làm công (§ 19 EStG)?",
   "words": "300–420 Wörter",
   "model": "A. Werbungskosten der A im Veranlagungszeitraum 2025\n\nA könnte für 2025 Werbungskosten nach § 9 EStG von ihren Einnahmen aus nichtselbständiger Arbeit (§ 19 Abs. 1 S. 1 Nr. 1 EStG) abziehen. Werbungskosten sind nach § 9 Abs. 1 S. 1 EStG Aufwendungen zur Erwerbung, Sicherung und Erhaltung der Einnahmen. Sie müssen beruflich veranlasst sein.\n\nI. Wege zwischen Wohnung und erster Tätigkeitsstätte\n1. Entfernungspauschale\nAufwendungen für die Wege zwischen Wohnung und erster Tätigkeitsstätte sind nach § 9 Abs. 1 S. 3 Nr. 4 EStG Werbungskosten. Sie werden jedoch nicht in tatsächlicher Höhe berücksichtigt. Vielmehr ist für jeden Arbeitstag, an dem die erste Tätigkeitsstätte aufgesucht wird, eine Entfernungspauschale für jeden vollen Kilometer der Entfernung anzusetzen. Maßgeblich ist die kürzeste Straßenverbindung, und zwar nur die einfache Entfernung, nicht Hin- und Rückweg.\n\n2. Höhe\nDie Pauschale beträgt im Veranlagungszeitraum 2025 für die ersten 20 Kilometer 0,30 € und ab dem 21. Kilometer 0,38 €. Für A ergibt sich:\n– 20 km × 0,30 € × 220 Tage = 1.320,00 €\n– 12 km × 0,38 € × 220 Tage = 1.003,20 €\nSumme: 2.323,20 €.\nDer Höchstbetrag von 4.500 € gilt nicht, weil A ihren eigenen Pkw nutzt; er wäre hier ohnehin nicht erreicht.\n\n3. Abgeltungswirkung\nNach § 9 Abs. 2 S. 1 EStG sind durch die Entfernungspauschale sämtliche Aufwendungen abgegolten, die durch die Wege zwischen Wohnung und erster Tätigkeitsstätte veranlasst sind. Der Ansatz von Hin- und Rückfahrt mit 0,30 € je Kilometer (4.224 €) ist daher unzutreffend.\n\n4. Zwischenergebnis\nFür die Fahrten sind 2.323,20 € anzusetzen.\n\nII. Fachliteratur\nAufwendungen für Arbeitsmittel sind nach § 9 Abs. 1 S. 3 Nr. 6 EStG Werbungskosten. Der Kommentar wird ausschließlich beruflich genutzt. Da die Anschaffungskosten die Grenze von 800 € für geringwertige Wirtschaftsgüter nicht übersteigen (§ 9 Abs. 1 S. 3 Nr. 7 S. 2 i. V. m. § 6 Abs. 2 EStG), sind sie im Jahr der Anschaffung in voller Höhe abziehbar. Anzusetzen sind 170 €.\n\nIII. Arbeitnehmer-Pauschbetrag\nNach § 9a S. 1 Nr. 1 Buchst. a EStG wird ein Arbeitnehmer-Pauschbetrag von 1.230 € abgezogen, wenn nicht höhere Werbungskosten nachgewiesen werden. Die nachgewiesenen Werbungskosten der A betragen 2.323,20 € + 170 € = 2.493,20 € und übersteigen den Pauschbetrag. Sie sind daher in tatsächlicher Höhe abzuziehen.\n\nB. Ergebnis\nA kann für 2025 Werbungskosten in Höhe von 2.493,20 € abziehen. Der von ihr angesetzte Betrag von 4.224 € allein für die Fahrten ist überhöht, weil die Entfernungspauschale nur die einfache Entfernung erfasst.",
   "model_vi": "Bài giải bắt đầu bằng định nghĩa chi phí liên quan đến thu nhập (Werbungskosten) theo § 9 I 1 EStG: các khoản chi để tạo ra, bảo đảm và duy trì thu nhập, phải có nguyên nhân nghề nghiệp. Chi phí đi lại giữa nhà và nơi làm việc chính chỉ được khấu trừ theo mức khoán (Entfernungspauschale, § 9 I 3 Nr. 4 EStG), tính theo quãng đường một chiều ngắn nhất cho mỗi ngày làm việc. Năm 2025 mức khoán là 0,30 € cho 20 km đầu và 0,38 € từ km thứ 21: 20 × 0,30 × 220 = 1.320 € và 12 × 0,38 × 220 = 1.003,20 €, tổng cộng 2.323,20 €. Theo § 9 II 1 EStG, mức khoán này bao gồm toàn bộ chi phí đi lại, nên cách tính hai chiều của A (4.224 €) là sai. Sách chuyên ngành là công cụ lao động (§ 9 I 3 Nr. 6 EStG) và vì dưới ngưỡng 800 € nên được khấu trừ toàn bộ ngay trong năm mua. Tổng chi phí thực tế 2.493,20 € cao hơn mức khấu trừ khoán cho người lao động là 1.230 € (§ 9a S. 1 Nr. 1 a EStG), nên áp dụng số thực tế. Kết luận: A được khấu trừ 2.493,20 €.",
   "checklist": [
    {
     "de": "Definition der Werbungskosten (§ 9 Abs. 1 S. 1 EStG) genannt",
     "vi": "Nêu định nghĩa Werbungskosten (§ 9 I 1 EStG)"
    },
    {
     "de": "Nur einfache Entfernung angesetzt",
     "vi": "Chỉ tính quãng đường một chiều"
    },
    {
     "de": "Gestaffelte Pauschale (0,30 € / 0,38 €) korrekt berechnet",
     "vi": "Tính đúng mức khoán theo bậc (0,30 € / 0,38 €)"
    },
    {
     "de": "Abgeltungswirkung (§ 9 Abs. 2 S. 1 EStG) erklärt",
     "vi": "Giải thích hiệu lực bao trùm của mức khoán (§ 9 II 1 EStG)"
    },
    {
     "de": "Höchstbetrag von 4.500 € richtig eingeordnet",
     "vi": "Xử lý đúng mức trần 4.500 €"
    },
    {
     "de": "Arbeitsmittel (§ 9 Abs. 1 S. 3 Nr. 6 EStG) geprüft",
     "vi": "Kiểm tra công cụ lao động (§ 9 I 3 Nr. 6 EStG)"
    },
    {
     "de": "Vergleich mit dem Arbeitnehmer-Pauschbetrag (1.230 €)",
     "vi": "So sánh với mức khấu trừ khoán cho người lao động (1.230 €)"
    },
    {
     "de": "Rechenweg nachvollziehbar dargestellt, Ergebnis mit Betrag",
     "vi": "Trình bày cách tính dễ theo dõi, kết luận có con số cụ thể"
    }
   ],
   "redemittel": [
    "A könnte Werbungskosten in Höhe von … abziehen.",
    "Werbungskosten sind Aufwendungen zur Erwerbung, Sicherung und Erhaltung der Einnahmen.",
    "Die Aufwendungen sind beruflich veranlasst.",
    "Anzusetzen ist die Entfernungspauschale für jeden vollen Kilometer der Entfernung.",
    "Durch die Entfernungspauschale sind sämtliche Aufwendungen abgegolten.",
    "Für A ergibt sich folgende Berechnung: …",
    "Die nachgewiesenen Werbungskosten übersteigen den Arbeitnehmer-Pauschbetrag.",
    "Im Ergebnis kann A Werbungskosten in Höhe von … geltend machen."
   ]
  },
  {
   "level": "C2",
   "area": "Steuerrecht",
   "title": "Zulässigkeit eines Einspruchs gegen einen Steuerbescheid (§§ 347 ff. AO)",
   "title_vi": "Tính hợp lệ của khiếu nại đối với quyết định thuế (§§ 347 ff. AO)",
   "prompt": "Sachverhalt: Das zuständige Finanzamt F erlässt gegenüber dem Doktoranden D den Einkommensteuerbescheid für 2025 und gibt ihn am Mittwoch, dem 1. Juli 2026, mit einfachem Brief zur Post. Darin werden Fortbildungskosten von 1.800 €, die D geltend gemacht hatte, nicht als Werbungskosten anerkannt; die Steuer wird entsprechend höher festgesetzt. D findet den Brief bereits am Freitag, dem 3. Juli 2026, in seinem Briefkasten. Am Donnerstag, dem 6. August 2026, um 22:30 Uhr übermittelt D über ELSTER ein Schreiben an das Finanzamt F mit dem Betreff „Widerspruch gegen den Einkommensteuerbescheid 2025“, in dem er die Anerkennung der Fortbildungskosten verlangt. Das Finanzamt hält den Rechtsbehelf für verspätet und außerdem für falsch bezeichnet.\n\nFallfrage: Ist der Rechtsbehelf des D zulässig?",
   "prompt_vi": "Tình tiết: Cơ quan thuế có thẩm quyền F ban hành quyết định thuế thu nhập năm 2025 cho nghiên cứu sinh D và gửi qua bưu điện bằng thư thường vào thứ Tư, ngày 1/7/2026. Trong quyết định, chi phí đào tạo nâng cao 1.800 € mà D kê khai không được công nhận là chi phí liên quan đến thu nhập; số thuế vì thế được ấn định cao hơn. D đã thấy lá thư trong hộp thư ngay từ thứ Sáu, ngày 3/7/2026. Vào thứ Năm, ngày 6/8/2026, lúc 22:30, D gửi qua ELSTER cho cơ quan thuế F một văn bản với tiêu đề „Widerspruch gegen den Einkommensteuerbescheid 2025“ (phản đối quyết định thuế thu nhập 2025), yêu cầu công nhận chi phí đào tạo. Cơ quan thuế cho rằng khiếu nại đã quá hạn và còn bị gọi sai tên.\n\nCâu hỏi: Khiếu nại của D có hợp lệ (zulässig) không?",
   "words": "350–450 Wörter",
   "model": "A. Zulässigkeit des Rechtsbehelfs des D\n\nDer Rechtsbehelf des D ist zulässig, wenn die Zulässigkeitsvoraussetzungen der §§ 347 ff. AO vorliegen.\n\nI. Statthaftigkeit\n1. Auslegung als Einspruch\nD hat sein Schreiben als „Widerspruch“ bezeichnet. Nach § 357 Abs. 1 AO schadet die unrichtige Bezeichnung des Einspruchs jedoch nicht. Erkennbar will D eine Überprüfung des Bescheids erreichen. Das Schreiben ist daher als Einspruch auszulegen.\n\n2. Statthafter Einspruch\nNach § 347 Abs. 1 S. 1 Nr. 1 AO ist der Einspruch gegen Verwaltungsakte in Abgabenangelegenheiten statthaft, auf die die Abgabenordnung Anwendung findet. Der Einkommensteuerbescheid ist ein Steuerbescheid (§ 155 Abs. 1 AO) und damit ein Verwaltungsakt (§ 118 S. 1 AO). Die Einkommensteuer wird durch Landesfinanzbehörden verwaltet; die AO ist anwendbar (§ 1 Abs. 1 AO). Ein Ausschluss nach § 348 AO liegt nicht vor.\n\nII. Beschwer\nNach § 350 AO ist nur befugt, Einspruch einzulegen, wer geltend macht, durch den Verwaltungsakt beschwert zu sein. D macht geltend, die Steuer sei wegen der Nichtberücksichtigung der Fortbildungskosten zu hoch festgesetzt. Er ist beschwert.\n\nIII. Form\nNach § 357 Abs. 1 AO ist der Einspruch schriftlich oder elektronisch einzureichen oder zur Niederschrift zu erklären. Die Übermittlung über ELSTER genügt. Aus dem Schreiben geht hervor, wer den Einspruch eingelegt hat, und der angefochtene Bescheid ist bezeichnet (§ 357 Abs. 3 S. 1 AO).\n\nIV. Frist\nNach § 355 Abs. 1 S. 1 AO ist der Einspruch innerhalb eines Monats nach Bekanntgabe des Verwaltungsakts einzulegen.\n\n1. Bekanntgabe\nEin schriftlicher Verwaltungsakt, der im Inland durch die Post übermittelt wird, gilt nach § 122 Abs. 2 Nr. 1 AO am vierten Tag nach der Aufgabe zur Post als bekannt gegeben. Auf den früheren tatsächlichen Zugang am 3. Juli 2026 kommt es nicht an. Der vierte Tag nach dem 1. Juli 2026 ist Sonntag, der 5. Juli 2026. Fällt dieser Tag auf einen Samstag, Sonntag oder gesetzlichen Feiertag, verschiebt sich die Bekanntgabe nach § 108 Abs. 3 AO auf den nächsten Werktag (st. Rspr. des BFH). Der Bescheid gilt daher am Montag, dem 6. Juli 2026, als bekannt gegeben.\n\n2. Fristberechnung\nDie Frist berechnet sich nach § 108 Abs. 1 AO i. V. m. §§ 187 Abs. 1, 188 Abs. 2 Alt. 1 BGB. Sie endet mit Ablauf des 6. August 2026, eines Donnerstags.\n\n3. Rechtzeitigkeit\nDer Einspruch ging am 6. August 2026 um 22:30 Uhr und damit vor Ablauf des Tages beim Finanzamt ein. Die Frist ist gewahrt.\n\nV. Zuständige Behörde\nDer Einspruch ist nach § 357 Abs. 2 S. 1 AO bei der Behörde anzubringen, deren Verwaltungsakt angefochten wird. D hat ihn beim Finanzamt F eingereicht.\n\nVI. Kein Verzicht und keine Rücknahme\nAnhaltspunkte für einen Einspruchsverzicht (§ 354 AO) oder eine Rücknahme (§ 362 AO) bestehen nicht.\n\nB. Ergebnis\nDer als Einspruch auszulegende Rechtsbehelf des D ist zulässig. Das Finanzamt muss in der Sache über die Anerkennung der Fortbildungskosten entscheiden (§ 367 Abs. 1 S. 1 AO).",
   "model_vi": "Bài giải kiểm tra các điều kiện hợp lệ của khiếu nại thuế (Einspruch) theo §§ 347 ff. AO. Trước hết, việc D gọi văn bản là „Widerspruch“ không quan trọng vì theo § 357 I AO gọi sai tên không gây bất lợi; văn bản được giải thích là Einspruch. Khiếu nại là hình thức phù hợp (statthaft) theo § 347 I 1 Nr. 1 AO vì quyết định thuế là một quyết định hành chính (§§ 155 I, 118 AO). D bị bất lợi (Beschwer, § 350 AO) vì số thuế bị ấn định cao hơn. Hình thức điện tử qua ELSTER là hợp lệ (§ 357 I AO). Trọng tâm là thời hạn một tháng (§ 355 I AO): theo § 122 II Nr. 1 AO (áp dụng từ năm 2025), quyết định gửi qua bưu điện được coi là đã thông báo vào ngày thứ tư sau khi gửi, bất kể đã nhận thực tế sớm hơn. Ngày thứ tư là Chủ nhật 5/7/2026, nên theo § 108 III AO và án lệ của Tòa án Tài chính Liên bang (BFH), ngày thông báo lùi sang thứ Hai 6/7/2026. Thời hạn kết thúc vào cuối ngày 6/8/2026, nên khiếu nại gửi lúc 22:30 ngày đó là đúng hạn. Khiếu nại được gửi đúng cơ quan, không có từ bỏ hay rút lại. Kết luận: khiếu nại hợp lệ, cơ quan thuế phải xem xét nội dung.",
   "checklist": [
    {
     "de": "Falschbezeichnung („Widerspruch“) mit § 357 Abs. 1 AO gelöst",
     "vi": "Xử lý việc gọi sai tên („Widerspruch“) bằng § 357 I AO"
    },
    {
     "de": "Statthaftigkeit mit § 347 AO und VA-Eigenschaft (§§ 118, 155 AO) begründet",
     "vi": "Lập luận tính phù hợp bằng § 347 AO và bản chất quyết định hành chính (§§ 118, 155 AO)"
    },
    {
     "de": "Beschwer (§ 350 AO) geprüft",
     "vi": "Kiểm tra yếu tố bị bất lợi (§ 350 AO)"
    },
    {
     "de": "Form (§ 357 Abs. 1 AO) geprüft",
     "vi": "Kiểm tra hình thức (§ 357 I AO)"
    },
    {
     "de": "Bekanntgabefiktion nach § 122 Abs. 2 Nr. 1 AO (vierter Tag) richtig angewandt",
     "vi": "Áp dụng đúng suy định thông báo theo § 122 II Nr. 1 AO (ngày thứ tư)"
    },
    {
     "de": "Verschiebung nach § 108 Abs. 3 AO erkannt",
     "vi": "Nhận ra việc lùi ngày theo § 108 III AO"
    },
    {
     "de": "Fristende korrekt berechnet (§ 108 Abs. 1 AO, §§ 187, 188 BGB)",
     "vi": "Tính đúng ngày hết hạn (§ 108 I AO, §§ 187, 188 BGB)"
    },
    {
     "de": "Ergebnis mit Folge für das weitere Verfahren",
     "vi": "Kết luận nêu hệ quả cho thủ tục tiếp theo"
    }
   ],
   "redemittel": [
    "Der Einspruch ist zulässig, wenn …",
    "Die unrichtige Bezeichnung des Einspruchs schadet nicht.",
    "Das Schreiben ist als Einspruch auszulegen.",
    "Der Verwaltungsakt gilt am vierten Tag nach der Aufgabe zur Post als bekannt gegeben.",
    "Fällt das Ende einer Frist auf einen Sonntag, so endet sie mit dem Ablauf des nächstfolgenden Werktags.",
    "Die Einspruchsfrist endet mit Ablauf des …",
    "Der Einspruch ist somit fristgerecht eingelegt.",
    "Im Ergebnis ist der Einspruch zulässig."
   ]
  }
 ]
};
