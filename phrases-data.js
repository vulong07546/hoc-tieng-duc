// Cụm từ & mẫu câu A1–C2 theo chủ đề.
const PHRASES = {
 "A1": [
  {
   "title": "Chào hỏi và tạm biệt",
   "emoji": "👋",
   "items": [
    {
     "e": "🌅",
     "vi": "Chào buổi sáng!",
     "de": "Guten Morgen!",
     "alt": []
    },
    {
     "e": "☀️",
     "vi": "Xin chào! (ban ngày, lịch sự)",
     "de": "Guten Tag!",
     "alt": []
    },
    {
     "e": "🌆",
     "vi": "Chào buổi tối!",
     "de": "Guten Abend!",
     "alt": []
    },
    {
     "e": "🌙",
     "vi": "Chúc ngủ ngon!",
     "de": "Gute Nacht!",
     "alt": []
    },
    {
     "e": "👋",
     "vi": "Chào! (thân mật)",
     "de": "Hallo!",
     "alt": []
    },
    {
     "e": "🙂",
     "vi": "Ông/bà có khỏe không? (Sie)",
     "de": "Wie geht es Ihnen?",
     "alt": []
    },
    {
     "e": "😊",
     "vi": "Bạn có khỏe không? (du)",
     "de": "Wie geht es dir?",
     "alt": [
      "Wie geht's dir?",
      "Wie geht's?"
     ]
    },
    {
     "e": "👍",
     "vi": "Tôi khỏe, cảm ơn.",
     "de": "Mir geht es gut, danke.",
     "alt": [
      "Mir geht's gut, danke.",
      "Gut, danke."
     ]
    },
    {
     "e": "❓",
     "vi": "Còn bạn thì sao? (du)",
     "de": "Und dir?",
     "alt": []
    },
    {
     "e": "🤝",
     "vi": "Tạm biệt! (lịch sự)",
     "de": "Auf Wiedersehen!",
     "alt": []
    },
    {
     "e": "✋",
     "vi": "Tạm biệt! (thân mật)",
     "de": "Tschüss!",
     "alt": [
      "Tschüs!"
     ]
    },
    {
     "e": "🔜",
     "vi": "Hẹn sớm gặp lại!",
     "de": "Bis bald!",
     "alt": []
    },
    {
     "e": "📅",
     "vi": "Hẹn ngày mai gặp lại!",
     "de": "Bis morgen!",
     "alt": []
    },
    {
     "e": "🙏",
     "vi": "Cảm ơn nhiều!",
     "de": "Vielen Dank!",
     "alt": [
      "Danke schön!",
      "Danke sehr!"
     ]
    },
    {
     "e": "😌",
     "vi": "Không có gì. (đáp lại lời cảm ơn)",
     "de": "Bitte schön!",
     "alt": [
      "Bitte!",
      "Bitte sehr!",
      "Gern geschehen!"
     ]
    }
   ]
  },
  {
   "title": "Giới thiệu bản thân",
   "emoji": "🙋",
   "items": [
    {
     "e": "📛",
     "vi": "Tôi tên là Minh.",
     "de": "Ich heiße Minh.",
     "alt": [
      "Mein Name ist Minh."
     ]
    },
    {
     "e": "❓",
     "vi": "Bạn tên là gì? (du)",
     "de": "Wie heißt du?",
     "alt": []
    },
    {
     "e": "🎩",
     "vi": "Ông/bà tên là gì? (Sie)",
     "de": "Wie heißen Sie?",
     "alt": [
      "Wie ist Ihr Name?"
     ]
    },
    {
     "e": "🇻🇳",
     "vi": "Tôi đến từ Việt Nam.",
     "de": "Ich komme aus Vietnam.",
     "alt": []
    },
    {
     "e": "🌍",
     "vi": "Bạn đến từ đâu? (du)",
     "de": "Woher kommst du?",
     "alt": []
    },
    {
     "e": "🏠",
     "vi": "Tôi sống ở Hà Nội.",
     "de": "Ich wohne in Hanoi.",
     "alt": [
      "Ich lebe in Hanoi."
     ]
    },
    {
     "e": "🎂",
     "vi": "Tôi 25 tuổi.",
     "de": "Ich bin 25 Jahre alt.",
     "alt": [
      "Ich bin fünfundzwanzig Jahre alt.",
      "Ich bin 25."
     ]
    },
    {
     "e": "🔢",
     "vi": "Bạn bao nhiêu tuổi? (du)",
     "de": "Wie alt bist du?",
     "alt": []
    },
    {
     "e": "🎓",
     "vi": "Tôi là sinh viên. (người nói là nam)",
     "de": "Ich bin Student.",
     "alt": []
    },
    {
     "e": "🗣️",
     "vi": "Tôi nói tiếng Việt và tiếng Anh.",
     "de": "Ich spreche Vietnamesisch und Englisch.",
     "alt": []
    },
    {
     "e": "📚",
     "vi": "Tôi học tiếng Đức.",
     "de": "Ich lerne Deutsch.",
     "alt": []
    },
    {
     "e": "😊",
     "vi": "Rất vui được làm quen!",
     "de": "Freut mich!",
     "alt": [
      "Sehr erfreut!"
     ]
    },
    {
     "e": "💼",
     "vi": "Bạn làm nghề gì? (du)",
     "de": "Was machst du beruflich?",
     "alt": [
      "Was bist du von Beruf?"
     ]
    },
    {
     "e": "💍",
     "vi": "Tôi đã kết hôn.",
     "de": "Ich bin verheiratet.",
     "alt": []
    },
    {
     "e": "📖",
     "vi": "Tôi thích đọc sách.",
     "de": "Ich lese gern.",
     "alt": [
      "Ich lese gerne."
     ]
    }
   ]
  },
  {
   "title": "Mua sắm",
   "emoji": "🛒",
   "items": [
    {
     "e": "💶",
     "vi": "Cái này giá bao nhiêu?",
     "de": "Was kostet das?",
     "alt": [
      "Wie viel kostet das?"
     ]
    },
    {
     "e": "🧥",
     "vi": "Tôi đang tìm một cái áo khoác.",
     "de": "Ich suche eine Jacke.",
     "alt": []
    },
    {
     "e": "👀",
     "vi": "Tôi chỉ xem thôi.",
     "de": "Ich schaue mich nur um.",
     "alt": [
      "Ich schaue nur."
     ]
    },
    {
     "e": "📏",
     "vi": "Tôi cần cỡ M.",
     "de": "Ich brauche Größe M.",
     "alt": []
    },
    {
     "e": "👕",
     "vi": "Tôi có thể mặc thử cái này không?",
     "de": "Kann ich das anprobieren?",
     "alt": []
    },
    {
     "e": "💸",
     "vi": "Cái này đắt quá.",
     "de": "Das ist zu teuer.",
     "alt": []
    },
    {
     "e": "🏷️",
     "vi": "Cái này rẻ.",
     "de": "Das ist billig.",
     "alt": [
      "Das ist günstig."
     ]
    },
    {
     "e": "✅",
     "vi": "Tôi lấy cái này.",
     "de": "Ich nehme das.",
     "alt": [
      "Ich nehme es."
     ]
    },
    {
     "e": "💳",
     "vi": "Tôi có thể trả bằng thẻ không?",
     "de": "Kann ich mit Karte zahlen?",
     "alt": [
      "Kann ich mit Karte bezahlen?"
     ]
    },
    {
     "e": "💵",
     "vi": "Tôi trả tiền mặt.",
     "de": "Ich zahle bar.",
     "alt": [
      "Ich bezahle bar."
     ]
    },
    {
     "e": "🍞",
     "vi": "Ông/bà có bánh mì không? (Sie)",
     "de": "Haben Sie Brot?",
     "alt": []
    },
    {
     "e": "🍎",
     "vi": "Cho tôi một ki-lô táo.",
     "de": "Ein Kilo Äpfel, bitte.",
     "alt": []
    },
    {
     "e": "🧾",
     "vi": "Tổng cộng bao nhiêu tiền?",
     "de": "Was macht das zusammen?",
     "alt": [
      "Wie viel macht das zusammen?"
     ]
    },
    {
     "e": "🛍️",
     "vi": "Tôi cần một cái túi nilon.",
     "de": "Ich brauche eine Tüte.",
     "alt": []
    },
    {
     "e": "🕘",
     "vi": "Siêu thị mở cửa khi nào?",
     "de": "Wann öffnet der Supermarkt?",
     "alt": [
      "Wann macht der Supermarkt auf?"
     ]
    }
   ]
  },
  {
   "title": "Ở nhà hàng",
   "emoji": "🍽️",
   "items": [
    {
     "e": "📋",
     "vi": "Cho tôi xem thực đơn.",
     "de": "Die Speisekarte, bitte.",
     "alt": []
    },
    {
     "e": "🙋",
     "vi": "Tôi muốn gọi món.",
     "de": "Ich möchte bestellen.",
     "alt": []
    },
    {
     "e": "💧",
     "vi": "Tôi muốn một ly nước.",
     "de": "Ich möchte ein Glas Wasser.",
     "alt": [
      "Ein Glas Wasser, bitte."
     ]
    },
    {
     "e": "☕",
     "vi": "Cho tôi một cà phê.",
     "de": "Einen Kaffee, bitte.",
     "alt": []
    },
    {
     "e": "🪑",
     "vi": "Chỗ này còn trống không?",
     "de": "Ist der Platz frei?",
     "alt": [
      "Ist hier noch frei?",
      "Ist hier frei?"
     ]
    },
    {
     "e": "👫",
     "vi": "Cho tôi một bàn cho hai người.",
     "de": "Einen Tisch für zwei Personen, bitte.",
     "alt": []
    },
    {
     "e": "🥩",
     "vi": "Tôi không ăn thịt.",
     "de": "Ich esse kein Fleisch.",
     "alt": []
    },
    {
     "e": "😋",
     "vi": "Món này rất ngon.",
     "de": "Das schmeckt sehr gut.",
     "alt": [
      "Es schmeckt sehr gut."
     ]
    },
    {
     "e": "🍴",
     "vi": "Chúc ngon miệng!",
     "de": "Guten Appetit!",
     "alt": []
    },
    {
     "e": "🧾",
     "vi": "Làm ơn tính tiền!",
     "de": "Die Rechnung, bitte!",
     "alt": [
      "Zahlen, bitte!"
     ]
    },
    {
     "e": "➗",
     "vi": "Chúng tôi trả riêng.",
     "de": "Wir zahlen getrennt.",
     "alt": [
      "Getrennt, bitte."
     ]
    },
    {
     "e": "🤝",
     "vi": "Trả chung, làm ơn.",
     "de": "Zusammen, bitte.",
     "alt": [
      "Wir zahlen zusammen."
     ]
    },
    {
     "e": "🪙",
     "vi": "Không cần thối lại tiền.",
     "de": "Stimmt so.",
     "alt": []
    },
    {
     "e": "🚻",
     "vi": "Nhà vệ sinh ở đâu?",
     "de": "Wo ist die Toilette?",
     "alt": [
      "Wo sind die Toiletten?"
     ]
    },
    {
     "e": "🥤",
     "vi": "Bạn muốn uống gì? (du)",
     "de": "Was möchtest du trinken?",
     "alt": []
    }
   ]
  },
  {
   "title": "Hỏi đường",
   "emoji": "🧭",
   "items": [
    {
     "e": "🙇",
     "vi": "Xin lỗi! (để bắt chuyện, hỏi ai đó)",
     "de": "Entschuldigung!",
     "alt": [
      "Entschuldigen Sie!"
     ]
    },
    {
     "e": "🚉",
     "vi": "Nhà ga ở đâu?",
     "de": "Wo ist der Bahnhof?",
     "alt": []
    },
    {
     "e": "⬆️",
     "vi": "Ông/bà đi thẳng. (Sie)",
     "de": "Gehen Sie geradeaus.",
     "alt": []
    },
    {
     "e": "⬅️",
     "vi": "Ông/bà rẽ trái. (Sie)",
     "de": "Gehen Sie nach links.",
     "alt": [
      "Biegen Sie links ab."
     ]
    },
    {
     "e": "➡️",
     "vi": "Ông/bà rẽ phải. (Sie)",
     "de": "Gehen Sie nach rechts.",
     "alt": [
      "Biegen Sie rechts ab."
     ]
    },
    {
     "e": "📏",
     "vi": "Có xa không?",
     "de": "Ist das weit?",
     "alt": [
      "Ist es weit?"
     ]
    },
    {
     "e": "📍",
     "vi": "Gần lắm.",
     "de": "Das ist ganz nah.",
     "alt": [
      "Es ist ganz nah.",
      "Das ist sehr nah."
     ]
    },
    {
     "e": "😟",
     "vi": "Tôi không tìm thấy đường.",
     "de": "Ich finde den Weg nicht.",
     "alt": []
    },
    {
     "e": "🚏",
     "vi": "Trạm xe buýt ở đâu?",
     "de": "Wo ist die Bushaltestelle?",
     "alt": []
    },
    {
     "e": "🏛️",
     "vi": "Làm sao để tôi đến bảo tàng?",
     "de": "Wie komme ich zum Museum?",
     "alt": []
    },
    {
     "e": "🏦",
     "vi": "Nó ở cạnh ngân hàng.",
     "de": "Das ist neben der Bank.",
     "alt": [
      "Es ist neben der Bank."
     ]
    },
    {
     "e": "↪️",
     "vi": "Ở góc đường.",
     "de": "An der Ecke.",
     "alt": []
    },
    {
     "e": "🛒",
     "vi": "Ở đây có siêu thị không?",
     "de": "Gibt es hier einen Supermarkt?",
     "alt": [
      "Gibt es hier in der Nähe einen Supermarkt?"
     ]
    },
    {
     "e": "🔁",
     "vi": "Ông/bà có thể nhắc lại không? (Sie)",
     "de": "Können Sie das wiederholen?",
     "alt": [
      "Können Sie das bitte wiederholen?"
     ]
    },
    {
     "e": "🚶",
     "vi": "Đi bộ khoảng năm phút.",
     "de": "Etwa fünf Minuten zu Fuß.",
     "alt": [
      "Ungefähr fünf Minuten zu Fuß."
     ]
    }
   ]
  },
  {
   "title": "Hẹn gặp và thời gian",
   "emoji": "📅",
   "items": [
    {
     "e": "⌚",
     "vi": "Bây giờ là mấy giờ?",
     "de": "Wie spät ist es?",
     "alt": [
      "Wie viel Uhr ist es?"
     ]
    },
    {
     "e": "🕒",
     "vi": "Bây giờ là ba giờ.",
     "de": "Es ist drei Uhr.",
     "alt": []
    },
    {
     "e": "🏖️",
     "vi": "Cuối tuần bạn có rảnh không? (du)",
     "de": "Hast du am Wochenende Zeit?",
     "alt": []
    },
    {
     "e": "⏳",
     "vi": "Hôm nay tôi không có thời gian.",
     "de": "Ich habe heute keine Zeit.",
     "alt": [
      "Heute habe ich keine Zeit."
     ]
    },
    {
     "e": "🤔",
     "vi": "Khi nào chúng ta gặp nhau?",
     "de": "Wann treffen wir uns?",
     "alt": [
      "Um wie viel Uhr treffen wir uns?"
     ]
    },
    {
     "e": "🔟",
     "vi": "Ngày mai lúc mười giờ có được không?",
     "de": "Geht es morgen um zehn Uhr?",
     "alt": [
      "Passt es morgen um zehn Uhr?"
     ]
    },
    {
     "e": "👌",
     "vi": "Vâng, được.",
     "de": "Ja, das geht.",
     "alt": [
      "Ja, das passt."
     ]
    },
    {
     "e": "😔",
     "vi": "Rất tiếc, tôi không đến được.",
     "de": "Leider kann ich nicht kommen.",
     "alt": [
      "Ich kann leider nicht kommen."
     ]
    },
    {
     "e": "🗓️",
     "vi": "Tôi muốn đặt một cuộc hẹn.",
     "de": "Ich möchte einen Termin machen.",
     "alt": [
      "Ich möchte einen Termin vereinbaren."
     ]
    },
    {
     "e": "❓",
     "vi": "Hôm nay là thứ mấy?",
     "de": "Welcher Tag ist heute?",
     "alt": [
      "Was ist heute für ein Tag?"
     ]
    },
    {
     "e": "5️⃣",
     "vi": "Hôm nay là thứ Sáu.",
     "de": "Heute ist Freitag.",
     "alt": []
    },
    {
     "e": "👋",
     "vi": "Hẹn gặp lại vào thứ Bảy!",
     "de": "Bis Samstag!",
     "alt": []
    },
    {
     "e": "🏃",
     "vi": "Xin lỗi, tôi đến muộn.",
     "de": "Entschuldigung, ich bin zu spät.",
     "alt": [
      "Entschuldigung, ich komme zu spät."
     ]
    },
    {
     "e": "🚉",
     "vi": "Chúng ta gặp nhau ở nhà ga nhé?",
     "de": "Treffen wir uns am Bahnhof?",
     "alt": []
    },
    {
     "e": "🕢",
     "vi": "Lúc bảy giờ rưỡi.",
     "de": "Um halb acht.",
     "alt": [
      "Um sieben Uhr dreißig."
     ]
    }
   ]
  }
 ],
 "A2": [
  {
   "title": "Du lịch và hỏi đường",
   "emoji": "✈️",
   "items": [
    {
     "e": "🎫",
     "vi": "Cho tôi một vé đi Berlin.",
     "de": "Eine Fahrkarte nach Berlin, bitte.",
     "alt": [
      "Ich möchte eine Fahrkarte nach Berlin.",
      "Ein Ticket nach Berlin, bitte."
     ]
    },
    {
     "e": "🚉",
     "vi": "Khi nào tàu đi München chạy?",
     "de": "Wann fährt der Zug nach München?",
     "alt": [
      "Um wie viel Uhr fährt der Zug nach München?"
     ]
    },
    {
     "e": "🛤️",
     "vi": "Tàu chạy từ đường ray số mấy?",
     "de": "Von welchem Gleis fährt der Zug?",
     "alt": [
      "Von welchem Gleis fährt der Zug ab?"
     ]
    },
    {
     "e": "🔁",
     "vi": "Tôi phải đổi tàu ở đâu?",
     "de": "Wo muss ich umsteigen?",
     "alt": []
    },
    {
     "e": "⏰",
     "vi": "Tàu bị trễ.",
     "de": "Der Zug hat Verspätung.",
     "alt": []
    },
    {
     "e": "🗺️",
     "vi": "Xin lỗi, nhà ga ở đâu ạ?",
     "de": "Entschuldigung, wo ist der Bahnhof?",
     "alt": []
    },
    {
     "e": "➡️",
     "vi": "Ông/bà (Sie) đi thẳng rồi rẽ phải.",
     "de": "Gehen Sie geradeaus und dann rechts.",
     "alt": [
      "Gehen Sie geradeaus und dann nach rechts."
     ]
    },
    {
     "e": "🏨",
     "vi": "Tôi đã đặt một phòng.",
     "de": "Ich habe ein Zimmer reserviert.",
     "alt": [
      "Ich habe ein Zimmer gebucht."
     ]
    },
    {
     "e": "🛏️",
     "vi": "Anh/chị (Sie) còn phòng trống không?",
     "de": "Haben Sie noch ein Zimmer frei?",
     "alt": [
      "Haben Sie noch ein freies Zimmer?"
     ]
    },
    {
     "e": "🍳",
     "vi": "Bữa sáng có bao gồm trong giá không?",
     "de": "Ist das Frühstück inklusive?",
     "alt": [
      "Ist das Frühstück im Preis inbegriffen?"
     ]
    },
    {
     "e": "🧳",
     "vi": "Tôi muốn trả phòng.",
     "de": "Ich möchte auschecken.",
     "alt": [
      "Ich möchte bitte auschecken."
     ]
    },
    {
     "e": "🚌",
     "vi": "Xe buýt này có đi vào trung tâm không?",
     "de": "Fährt dieser Bus ins Zentrum?",
     "alt": [
      "Fährt der Bus ins Zentrum?",
      "Fährt dieser Bus in die Stadtmitte?"
     ]
    },
    {
     "e": "🚶",
     "vi": "Đi bộ thì mất bao lâu?",
     "de": "Wie lange dauert es zu Fuß?",
     "alt": []
    },
    {
     "e": "🏖️",
     "vi": "Tôi đến đây để đi nghỉ.",
     "de": "Ich bin im Urlaub hier.",
     "alt": [
      "Ich mache hier Urlaub."
     ]
    },
    {
     "e": "🎒",
     "vi": "Tôi bị mất hành lý.",
     "de": "Ich habe mein Gepäck verloren.",
     "alt": []
    }
   ]
  },
  {
   "title": "Đi khám bác sĩ",
   "emoji": "🩺",
   "items": [
    {
     "e": "📅",
     "vi": "Tôi muốn đặt lịch hẹn.",
     "de": "Ich möchte einen Termin machen.",
     "alt": [
      "Ich hätte gern einen Termin.",
      "Ich möchte einen Termin vereinbaren."
     ]
    },
    {
     "e": "🤒",
     "vi": "Tôi bị sốt.",
     "de": "Ich habe Fieber.",
     "alt": []
    },
    {
     "e": "🤕",
     "vi": "Tôi bị đau đầu.",
     "de": "Ich habe Kopfschmerzen.",
     "alt": []
    },
    {
     "e": "😷",
     "vi": "Tôi bị cảm lạnh.",
     "de": "Ich bin erkältet.",
     "alt": [
      "Ich habe eine Erkältung."
     ]
    },
    {
     "e": "🫃",
     "vi": "Tôi bị đau bụng.",
     "de": "Ich habe Bauchschmerzen.",
     "alt": []
    },
    {
     "e": "🗣️",
     "vi": "Cổ họng tôi bị đau.",
     "de": "Mein Hals tut weh.",
     "alt": [
      "Ich habe Halsschmerzen."
     ]
    },
    {
     "e": "❓",
     "vi": "Anh/chị (Sie) bị đau ở đâu?",
     "de": "Wo haben Sie Schmerzen?",
     "alt": [
      "Wo tut es weh?"
     ]
    },
    {
     "e": "⏳",
     "vi": "Anh/chị (Sie) bị đau từ khi nào?",
     "de": "Seit wann haben Sie Schmerzen?",
     "alt": []
    },
    {
     "e": "💊",
     "vi": "Anh/chị (Sie) hãy uống thuốc viên này ba lần mỗi ngày.",
     "de": "Nehmen Sie die Tabletten dreimal täglich.",
     "alt": [
      "Nehmen Sie die Tabletten dreimal am Tag."
     ]
    },
    {
     "e": "📝",
     "vi": "Tôi cần giấy nghỉ ốm.",
     "de": "Ich brauche eine Krankmeldung.",
     "alt": [
      "Ich brauche eine Krankschreibung."
     ]
    },
    {
     "e": "🛌",
     "vi": "Anh/chị (Sie) nên nằm nghỉ trên giường.",
     "de": "Sie sollten im Bett bleiben.",
     "alt": []
    },
    {
     "e": "🚑",
     "vi": "Bạn (du) gọi xe cấp cứu đi!",
     "de": "Ruf einen Krankenwagen!",
     "alt": [
      "Ruf bitte einen Krankenwagen!"
     ]
    },
    {
     "e": "💉",
     "vi": "Tôi bị dị ứng với penicillin.",
     "de": "Ich bin allergisch gegen Penicillin.",
     "alt": [
      "Ich habe eine Penicillinallergie."
     ]
    },
    {
     "e": "💳",
     "vi": "Đây là thẻ bảo hiểm y tế của tôi.",
     "de": "Hier ist meine Versichertenkarte.",
     "alt": [
      "Hier ist meine Krankenversicherungskarte.",
      "Hier ist meine Gesundheitskarte."
     ]
    },
    {
     "e": "🌙",
     "vi": "Tôi ngủ không ngon.",
     "de": "Ich schlafe schlecht.",
     "alt": [
      "Ich schlafe nicht gut."
     ]
    }
   ]
  },
  {
   "title": "Nhà ở",
   "emoji": "🏠",
   "items": [
    {
     "e": "🔍",
     "vi": "Tôi đang tìm một căn hộ.",
     "de": "Ich suche eine Wohnung.",
     "alt": []
    },
    {
     "e": "📏",
     "vi": "Căn hộ rộng bao nhiêu?",
     "de": "Wie groß ist die Wohnung?",
     "alt": [
      "Wie viele Quadratmeter hat die Wohnung?"
     ]
    },
    {
     "e": "💶",
     "vi": "Tiền thuê nhà là bao nhiêu?",
     "de": "Wie hoch ist die Miete?",
     "alt": [
      "Wie viel kostet die Miete?"
     ]
    },
    {
     "e": "🔥",
     "vi": "Phí phụ (điện, nước, sưởi) đã bao gồm chưa?",
     "de": "Sind die Nebenkosten inklusive?",
     "alt": [
      "Ist die Miete inklusive Nebenkosten?"
     ]
    },
    {
     "e": "🛋️",
     "vi": "Căn hộ có sẵn đồ đạc.",
     "de": "Die Wohnung ist möbliert.",
     "alt": []
    },
    {
     "e": "👀",
     "vi": "Tôi có thể xem căn hộ được không?",
     "de": "Kann ich die Wohnung besichtigen?",
     "alt": [
      "Kann ich mir die Wohnung ansehen?",
      "Kann ich die Wohnung ansehen?"
     ]
    },
    {
     "e": "🛏️",
     "vi": "Căn hộ có hai phòng và một ban công.",
     "de": "Die Wohnung hat zwei Zimmer und einen Balkon.",
     "alt": []
    },
    {
     "e": "🚿",
     "vi": "Vòi sen bị hỏng.",
     "de": "Die Dusche ist kaputt.",
     "alt": []
    },
    {
     "e": "🔑",
     "vi": "Tôi đã làm mất chìa khóa.",
     "de": "Ich habe meinen Schlüssel verloren.",
     "alt": [
      "Ich habe den Schlüssel verloren."
     ]
    },
    {
     "e": "📦",
     "vi": "Tháng sau tôi chuyển nhà.",
     "de": "Nächsten Monat ziehe ich um.",
     "alt": [
      "Ich ziehe nächsten Monat um."
     ]
    },
    {
     "e": "🏢",
     "vi": "Tôi sống ở tầng ba.",
     "de": "Ich wohne im dritten Stock.",
     "alt": []
    },
    {
     "e": "🔊",
     "vi": "Hàng xóm của tôi rất ồn.",
     "de": "Meine Nachbarn sind sehr laut.",
     "alt": [
      "Mein Nachbar ist sehr laut.",
      "Meine Nachbarin ist sehr laut."
     ]
    },
    {
     "e": "🗑️",
     "vi": "Thùng rác ở đâu?",
     "de": "Wo ist die Mülltonne?",
     "alt": [
      "Wo sind die Mülltonnen?"
     ]
    },
    {
     "e": "🏡",
     "vi": "Bạn (du) sống ở đâu?",
     "de": "Wo wohnst du?",
     "alt": []
    },
    {
     "e": "📃",
     "vi": "Tôi muốn ký hợp đồng thuê nhà.",
     "de": "Ich möchte den Mietvertrag unterschreiben.",
     "alt": []
    }
   ]
  },
  {
   "title": "Công việc",
   "emoji": "💼",
   "items": [
    {
     "e": "❔",
     "vi": "Bạn (du) làm nghề gì?",
     "de": "Was bist du von Beruf?",
     "alt": [
      "Was machst du beruflich?"
     ]
    },
    {
     "e": "👩‍⚕️",
     "vi": "Tôi là nữ y tá.",
     "de": "Ich bin Krankenschwester.",
     "alt": [
      "Ich bin Krankenpflegerin."
     ]
    },
    {
     "e": "🏭",
     "vi": "Tôi làm việc ở một công ty lớn.",
     "de": "Ich arbeite bei einer großen Firma.",
     "alt": [
      "Ich arbeite in einer großen Firma."
     ]
    },
    {
     "e": "⏰",
     "vi": "Tôi làm việc từ 8 giờ đến 17 giờ.",
     "de": "Ich arbeite von 8 bis 17 Uhr.",
     "alt": []
    },
    {
     "e": "🔎",
     "vi": "Tôi đang tìm việc làm.",
     "de": "Ich suche Arbeit.",
     "alt": [
      "Ich suche eine Arbeit.",
      "Ich suche eine Stelle.",
      "Ich suche einen Job."
     ]
    },
    {
     "e": "✉️",
     "vi": "Tôi muốn ứng tuyển vào vị trí này.",
     "de": "Ich möchte mich auf die Stelle bewerben.",
     "alt": [
      "Ich möchte mich um die Stelle bewerben."
     ]
    },
    {
     "e": "📈",
     "vi": "Tôi có ba năm kinh nghiệm làm việc.",
     "de": "Ich habe drei Jahre Berufserfahrung.",
     "alt": []
    },
    {
     "e": "🤝",
     "vi": "Ngày mai tôi có buổi phỏng vấn xin việc.",
     "de": "Morgen habe ich ein Vorstellungsgespräch.",
     "alt": [
      "Ich habe morgen ein Vorstellungsgespräch."
     ]
    },
    {
     "e": "🏝️",
     "vi": "Tuần sau tôi nghỉ phép.",
     "de": "Nächste Woche habe ich Urlaub.",
     "alt": [
      "Ich habe nächste Woche Urlaub."
     ]
    },
    {
     "e": "🕐",
     "vi": "Tôi làm việc bán thời gian.",
     "de": "Ich arbeite Teilzeit.",
     "alt": [
      "Ich arbeite in Teilzeit."
     ]
    },
    {
     "e": "🙋",
     "vi": "Anh/chị (Sie) có thể giúp tôi được không?",
     "de": "Können Sie mir helfen?",
     "alt": [
      "Könnten Sie mir helfen?",
      "Können Sie mir bitte helfen?"
     ]
    },
    {
     "e": "🧑‍💼",
     "vi": "Sếp của tôi (nam) rất dễ chịu.",
     "de": "Mein Chef ist sehr nett.",
     "alt": [
      "Mein Chef ist sehr freundlich."
     ]
    },
    {
     "e": "💰",
     "vi": "Mức lương là bao nhiêu?",
     "de": "Wie hoch ist das Gehalt?",
     "alt": []
    },
    {
     "e": "🤧",
     "vi": "Hôm nay tôi bị ốm và không thể đi làm.",
     "de": "Ich bin heute krank und kann nicht arbeiten.",
     "alt": [
      "Ich bin heute krank und kann nicht zur Arbeit kommen."
     ]
    },
    {
     "e": "🖥️",
     "vi": "Cuộc họp bắt đầu lúc 10 giờ.",
     "de": "Die Besprechung beginnt um 10 Uhr.",
     "alt": [
      "Das Meeting beginnt um 10 Uhr.",
      "Die Sitzung beginnt um 10 Uhr."
     ]
    }
   ]
  },
  {
   "title": "Gọi điện thoại",
   "emoji": "📞",
   "items": [
    {
     "e": "☎️",
     "vi": "Xin chào, tôi là Anna Müller đây. (khi gọi điện)",
     "de": "Guten Tag, hier spricht Anna Müller.",
     "alt": [
      "Guten Tag, hier ist Anna Müller."
     ]
    },
    {
     "e": "🙋",
     "vi": "Tôi muốn nói chuyện với ông Schmidt.",
     "de": "Ich möchte bitte Herrn Schmidt sprechen.",
     "alt": [
      "Ich möchte Herrn Schmidt sprechen."
     ]
    },
    {
     "e": "⏳",
     "vi": "Xin chờ một chút.",
     "de": "Einen Moment, bitte.",
     "alt": [
      "Moment, bitte.",
      "Einen Moment bitte."
     ]
    },
    {
     "e": "🔄",
     "vi": "Tôi sẽ nối máy cho anh/chị (Sie).",
     "de": "Ich verbinde Sie.",
     "alt": [
      "Ich stelle Sie durch."
     ]
    },
    {
     "e": "🚫",
     "vi": "Ông ấy hiện không có ở đây.",
     "de": "Er ist gerade nicht da.",
     "alt": [
      "Er ist im Moment nicht da."
     ]
    },
    {
     "e": "📝",
     "vi": "Anh/chị (Sie) có muốn để lại lời nhắn không?",
     "de": "Möchten Sie eine Nachricht hinterlassen?",
     "alt": []
    },
    {
     "e": "🔁",
     "vi": "Anh/chị (Sie) có thể gọi lại sau được không?",
     "de": "Können Sie später zurückrufen?",
     "alt": [
      "Könnten Sie später zurückrufen?",
      "Können Sie später noch einmal anrufen?"
     ]
    },
    {
     "e": "🔈",
     "vi": "Tôi nghe anh/chị (Sie) không rõ.",
     "de": "Ich kann Sie schlecht verstehen.",
     "alt": [
      "Ich verstehe Sie schlecht.",
      "Ich kann Sie nicht gut verstehen."
     ]
    },
    {
     "e": "🐢",
     "vi": "Anh/chị (Sie) có thể nói chậm hơn được không?",
     "de": "Können Sie bitte langsamer sprechen?",
     "alt": [
      "Können Sie langsamer sprechen?",
      "Könnten Sie bitte langsamer sprechen?"
     ]
    },
    {
     "e": "🔤",
     "vi": "Anh/chị (Sie) có thể đánh vần được không?",
     "de": "Können Sie das bitte buchstabieren?",
     "alt": [
      "Können Sie das buchstabieren?"
     ]
    },
    {
     "e": "🔢",
     "vi": "Số điện thoại của anh/chị (Sie) là gì?",
     "de": "Wie ist Ihre Telefonnummer?",
     "alt": [
      "Was ist Ihre Telefonnummer?"
     ]
    },
    {
     "e": "❌",
     "vi": "Xin lỗi, tôi gọi nhầm số.",
     "de": "Entschuldigung, ich habe mich verwählt.",
     "alt": []
    },
    {
     "e": "📱",
     "vi": "Tôi sẽ gọi lại cho bạn (du) sau.",
     "de": "Ich rufe dich später zurück.",
     "alt": [
      "Ich rufe dich später an."
     ]
    },
    {
     "e": "🔋",
     "vi": "Điện thoại của tôi sắp hết pin.",
     "de": "Mein Akku ist fast leer.",
     "alt": []
    },
    {
     "e": "👋",
     "vi": "Cảm ơn, tạm biệt! (kết thúc cuộc gọi)",
     "de": "Danke, auf Wiederhören!",
     "alt": []
    }
   ]
  },
  {
   "title": "Cảm xúc và ý kiến",
   "emoji": "💬",
   "items": [
    {
     "e": "😊",
     "vi": "Tôi rất vui.",
     "de": "Ich freue mich sehr.",
     "alt": [
      "Ich bin sehr froh."
     ]
    },
    {
     "e": "😢",
     "vi": "Tôi buồn.",
     "de": "Ich bin traurig.",
     "alt": []
    },
    {
     "e": "😴",
     "vi": "Tôi rất mệt.",
     "de": "Ich bin sehr müde.",
     "alt": []
    },
    {
     "e": "😠",
     "vi": "Tôi đang bực mình.",
     "de": "Ich ärgere mich.",
     "alt": [
      "Ich bin sauer.",
      "Ich bin verärgert."
     ]
    },
    {
     "e": "😟",
     "vi": "Tôi đang lo lắng.",
     "de": "Ich mache mir Sorgen.",
     "alt": []
    },
    {
     "e": "🤔",
     "vi": "Theo ý kiến của tôi, điều đó đúng.",
     "de": "Meiner Meinung nach ist das richtig.",
     "alt": [
      "Ich finde, das ist richtig.",
      "Ich denke, das ist richtig."
     ]
    },
    {
     "e": "👍",
     "vi": "Tôi thấy ý tưởng đó hay.",
     "de": "Ich finde die Idee gut.",
     "alt": []
    },
    {
     "e": "👎",
     "vi": "Tôi không đồng ý.",
     "de": "Ich bin nicht einverstanden.",
     "alt": [
      "Ich bin anderer Meinung.",
      "Das sehe ich anders."
     ]
    },
    {
     "e": "✅",
     "vi": "Bạn (du) nói đúng.",
     "de": "Du hast recht.",
     "alt": [
      "Du hast Recht."
     ]
    },
    {
     "e": "🎻",
     "vi": "Tôi thích nhạc cổ điển.",
     "de": "Ich mag klassische Musik.",
     "alt": [
      "Ich höre gern klassische Musik."
     ]
    },
    {
     "e": "🙁",
     "vi": "Thật đáng tiếc!",
     "de": "Das ist schade!",
     "alt": [
      "Schade!",
      "Wie schade!"
     ]
    },
    {
     "e": "😲",
     "vi": "Thật là bất ngờ!",
     "de": "Was für eine Überraschung!",
     "alt": [
      "Das ist eine Überraschung!"
     ]
    },
    {
     "e": "🤷",
     "vi": "Tôi không chắc.",
     "de": "Ich bin mir nicht sicher.",
     "alt": [
      "Ich bin nicht sicher."
     ]
    },
    {
     "e": "🙏",
     "vi": "Tôi hy vọng bạn (du) sớm khỏe lại.",
     "de": "Ich hoffe, du wirst bald gesund.",
     "alt": [
      "Ich hoffe, dass du bald gesund wirst.",
      "Ich hoffe, du bist bald wieder gesund."
     ]
    },
    {
     "e": "💭",
     "vi": "Bạn (du) nghĩ sao?",
     "de": "Was meinst du?",
     "alt": [
      "Was denkst du?",
      "Was denkst du darüber?"
     ]
    }
   ]
  }
 ],
 "B1": [
  {
   "title": "Bày tỏ ý kiến",
   "emoji": "💬",
   "items": [
    {
     "e": "🗣️",
     "vi": "Theo ý kiến của tôi, điều đó đúng.",
     "de": "Meiner Meinung nach ist das richtig.",
     "alt": [
      "Meiner Meinung nach stimmt das."
     ]
    },
    {
     "e": "🤩",
     "vi": "Tôi thấy điều đó rất thú vị.",
     "de": "Ich finde das sehr interessant.",
     "alt": []
    },
    {
     "e": "💸",
     "vi": "Tôi cho rằng cái đó quá đắt.",
     "de": "Ich bin der Meinung, dass das zu teuer ist.",
     "alt": [
      "Ich bin der Ansicht, dass das zu teuer ist."
     ]
    },
    {
     "e": "🤔",
     "vi": "Bạn (du) nghĩ gì về điều đó?",
     "de": "Was denkst du darüber?",
     "alt": [
      "Was hältst du davon?",
      "Was meinst du dazu?"
     ]
    },
    {
     "e": "🎩",
     "vi": "Ông/bà (Sie) nghĩ sao về điều đó?",
     "de": "Was meinen Sie dazu?",
     "alt": [
      "Was halten Sie davon?",
      "Was denken Sie darüber?"
     ]
    },
    {
     "e": "💡",
     "vi": "Tôi nghĩ đó là một ý tưởng hay.",
     "de": "Ich glaube, das ist eine gute Idee.",
     "alt": [
      "Ich glaube, dass das eine gute Idee ist.",
      "Ich denke, das ist eine gute Idee."
     ]
    },
    {
     "e": "🤷",
     "vi": "Tôi không chắc lắm.",
     "de": "Ich bin mir nicht sicher.",
     "alt": [
      "Ich bin mir nicht ganz sicher."
     ]
    },
    {
     "e": "⚖️",
     "vi": "Còn tùy.",
     "de": "Das kommt darauf an.",
     "alt": [
      "Es kommt darauf an.",
      "Das kommt drauf an."
     ]
    },
    {
     "e": "😶",
     "vi": "Tôi không có ý kiến gì về việc này.",
     "de": "Ich habe keine Meinung dazu.",
     "alt": []
    },
    {
     "e": "👨‍👩‍👧",
     "vi": "Đối với tôi, gia đình là quan trọng nhất.",
     "de": "Für mich ist die Familie am wichtigsten.",
     "alt": [
      "Für mich ist Familie am wichtigsten."
     ]
    },
    {
     "e": "🔄",
     "vi": "Một mặt nó tiện lợi, mặt khác nó đắt.",
     "de": "Einerseits ist es praktisch, andererseits ist es teuer.",
     "alt": []
    },
    {
     "e": "👎",
     "vi": "Tôi cho rằng đó không phải là ý hay.",
     "de": "Ich halte das für keine gute Idee.",
     "alt": [
      "Ich halte das nicht für eine gute Idee."
     ]
    },
    {
     "e": "⏳",
     "vi": "Theo quan điểm của tôi, chúng ta nên chờ.",
     "de": "Meiner Ansicht nach sollten wir warten.",
     "alt": [
      "Meiner Meinung nach sollten wir warten."
     ]
    },
    {
     "e": "😕",
     "vi": "Thành thật mà nói, tôi không thích điều đó.",
     "de": "Ehrlich gesagt gefällt mir das nicht.",
     "alt": [
      "Ehrlich gesagt, gefällt mir das nicht.",
      "Ehrlich gesagt mag ich das nicht."
     ]
    },
    {
     "e": "❗",
     "vi": "Điều quan trọng là chúng ta nói về chuyện này.",
     "de": "Es ist wichtig, dass wir darüber sprechen.",
     "alt": [
      "Es ist wichtig, dass wir darüber reden."
     ]
    }
   ]
  },
  {
   "title": "Đồng ý và phản đối",
   "emoji": "🤝",
   "items": [
    {
     "e": "👍",
     "vi": "Bạn (du) nói đúng.",
     "de": "Da hast du recht.",
     "alt": [
      "Du hast recht.",
      "Da hast du Recht.",
      "Du hast Recht."
     ]
    },
    {
     "e": "🎩",
     "vi": "Ông/bà (Sie) nói đúng.",
     "de": "Da haben Sie recht.",
     "alt": [
      "Sie haben recht.",
      "Da haben Sie Recht.",
      "Sie haben Recht."
     ]
    },
    {
     "e": "👀",
     "vi": "Tôi cũng thấy y như vậy.",
     "de": "Das sehe ich genauso.",
     "alt": [
      "Das sehe ich auch so."
     ]
    },
    {
     "e": "🤝",
     "vi": "Tôi hoàn toàn đồng ý với bạn (du).",
     "de": "Ich bin ganz deiner Meinung.",
     "alt": [
      "Ich stimme dir völlig zu.",
      "Ich stimme dir voll zu."
     ]
    },
    {
     "e": "✅",
     "vi": "Tôi đồng ý với ông/bà (Sie).",
     "de": "Ich stimme Ihnen zu.",
     "alt": [
      "Ich bin Ihrer Meinung."
     ]
    },
    {
     "e": "🎯",
     "vi": "Chính xác!",
     "de": "Genau!",
     "alt": [
      "Stimmt!",
      "Richtig!"
     ]
    },
    {
     "e": "❌",
     "vi": "Điều đó không đúng.",
     "de": "Das stimmt nicht.",
     "alt": [
      "Das ist nicht richtig."
     ]
    },
    {
     "e": "🙅",
     "vi": "Về điểm này tôi có ý kiến khác.",
     "de": "Da bin ich anderer Meinung.",
     "alt": [
      "Ich bin anderer Meinung."
     ]
    },
    {
     "e": "🔀",
     "vi": "Tôi thấy khác.",
     "de": "Das sehe ich anders.",
     "alt": [
      "Ich sehe das anders."
     ]
    },
    {
     "e": "👎",
     "vi": "Tôi không đồng ý với bạn (du).",
     "de": "Ich bin nicht deiner Meinung.",
     "alt": [
      "Ich stimme dir nicht zu."
     ]
    },
    {
     "e": "✋",
     "vi": "Ở điểm này tôi phải phản đối.",
     "de": "Da muss ich widersprechen.",
     "alt": [
      "Da muss ich dir widersprechen.",
      "Da muss ich Ihnen widersprechen."
     ]
    },
    {
     "e": "🌗",
     "vi": "Điều đó đúng một phần.",
     "de": "Das stimmt zum Teil.",
     "alt": [
      "Das ist zum Teil richtig.",
      "Das ist teilweise richtig.",
      "Das stimmt teilweise."
     ]
    },
    {
     "e": "🧩",
     "vi": "Đúng, nhưng chuyện đó không đơn giản như vậy.",
     "de": "Ja, aber das ist nicht so einfach.",
     "alt": []
    },
    {
     "e": "🚫",
     "vi": "Không đời nào!",
     "de": "Auf keinen Fall!",
     "alt": []
    },
    {
     "e": "😊",
     "vi": "Tôi cũng thấy vậy.",
     "de": "Das finde ich auch.",
     "alt": [
      "Finde ich auch.",
      "Ich finde das auch."
     ]
    }
   ]
  },
  {
   "title": "Phỏng vấn xin việc",
   "emoji": "💼",
   "items": [
    {
     "e": "🙏",
     "vi": "Cảm ơn ông/bà (Sie) rất nhiều vì lời mời.",
     "de": "Vielen Dank für die Einladung.",
     "alt": [
      "Danke für die Einladung."
     ]
    },
    {
     "e": "📰",
     "vi": "Tôi đã đọc tin tuyển dụng của quý công ty trên mạng.",
     "de": "Ich habe Ihre Anzeige im Internet gelesen.",
     "alt": [
      "Ich habe Ihre Stellenanzeige im Internet gelesen."
     ]
    },
    {
     "e": "⭐",
     "vi": "Tôi rất quan tâm đến vị trí này.",
     "de": "Ich interessiere mich sehr für diese Stelle.",
     "alt": []
    },
    {
     "e": "👨‍🍳",
     "vi": "Tôi đã làm đầu bếp ba năm.",
     "de": "Ich habe drei Jahre als Koch gearbeitet.",
     "alt": [
      "Ich habe drei Jahre lang als Koch gearbeitet."
     ]
    },
    {
     "e": "🏥",
     "vi": "Tôi đã học nghề điều dưỡng (nam).",
     "de": "Ich habe eine Ausbildung zum Krankenpfleger gemacht.",
     "alt": [
      "Ich habe eine Ausbildung als Krankenpfleger gemacht."
     ]
    },
    {
     "e": "💪",
     "vi": "Điểm mạnh của tôi là khả năng làm việc nhóm và sự kiên nhẫn.",
     "de": "Meine Stärken sind Teamfähigkeit und Geduld.",
     "alt": []
    },
    {
     "e": "👥",
     "vi": "Tôi thích làm việc nhóm.",
     "de": "Ich arbeite gern im Team.",
     "alt": [
      "Ich arbeite gerne im Team."
     ]
    },
    {
     "e": "🌐",
     "vi": "Tôi nói lưu loát tiếng Việt và tiếng Anh.",
     "de": "Ich spreche fließend Vietnamesisch und Englisch.",
     "alt": []
    },
    {
     "e": "🚀",
     "vi": "Tôi học nhanh và đáng tin cậy.",
     "de": "Ich lerne schnell und bin zuverlässig.",
     "alt": []
    },
    {
     "e": "📅",
     "vi": "Khi nào tôi có thể bắt đầu?",
     "de": "Wann könnte ich anfangen?",
     "alt": [
      "Wann kann ich anfangen?"
     ]
    },
    {
     "e": "🕘",
     "vi": "Giờ làm việc như thế nào?",
     "de": "Wie sind die Arbeitszeiten?",
     "alt": []
    },
    {
     "e": "🗓️",
     "vi": "Tôi có thể bắt đầu từ tháng sau.",
     "de": "Ich kann ab nächstem Monat anfangen.",
     "alt": [
      "Ich kann ab nächsten Monat anfangen."
     ]
    },
    {
     "e": "🎓",
     "vi": "Có cơ hội đào tạo nâng cao không?",
     "de": "Gibt es Möglichkeiten zur Weiterbildung?",
     "alt": [
      "Gibt es Weiterbildungsmöglichkeiten?"
     ]
    },
    {
     "e": "📋",
     "vi": "Tôi sẽ có những nhiệm vụ gì?",
     "de": "Welche Aufgaben hätte ich?",
     "alt": [
      "Welche Aufgaben würde ich haben?"
     ]
    },
    {
     "e": "✉️",
     "vi": "Tôi mong nhận được hồi âm của ông/bà (Sie).",
     "de": "Ich freue mich auf Ihre Antwort.",
     "alt": [
      "Ich freue mich auf Ihre Rückmeldung."
     ]
    }
   ]
  },
  {
   "title": "Phàn nàn, khiếu nại",
   "emoji": "😤",
   "items": [
    {
     "e": "📢",
     "vi": "Tôi muốn khiếu nại.",
     "de": "Ich möchte mich beschweren.",
     "alt": []
    },
    {
     "e": "🥶",
     "vi": "Lò sưởi không hoạt động.",
     "de": "Die Heizung funktioniert nicht.",
     "alt": [
      "Die Heizung geht nicht."
     ]
    },
    {
     "e": "🍲",
     "vi": "Món ăn bị nguội.",
     "de": "Das Essen ist kalt.",
     "alt": []
    },
    {
     "e": "🧾",
     "vi": "Tôi đã gọi món khác.",
     "de": "Ich habe etwas anderes bestellt.",
     "alt": []
    },
    {
     "e": "💶",
     "vi": "Tôi muốn lấy lại tiền.",
     "de": "Ich möchte mein Geld zurück.",
     "alt": [
      "Ich möchte mein Geld zurückhaben."
     ]
    },
    {
     "e": "🔧",
     "vi": "Ông/bà (Sie) có thể sửa cái này được không?",
     "de": "Können Sie das bitte reparieren?",
     "alt": [
      "Könnten Sie das bitte reparieren?",
      "Können Sie das reparieren?"
     ]
    },
    {
     "e": "⌛",
     "vi": "Tôi đã chờ suốt một tiếng rồi.",
     "de": "Ich warte schon seit einer Stunde.",
     "alt": [
      "Ich warte schon eine Stunde."
     ]
    },
    {
     "e": "🙁",
     "vi": "Thế này là không ổn.",
     "de": "Das ist nicht in Ordnung.",
     "alt": []
    },
    {
     "e": "🔊",
     "vi": "Hàng xóm ban đêm rất ồn.",
     "de": "Die Nachbarn sind nachts sehr laut.",
     "alt": []
    },
    {
     "e": "👔",
     "vi": "Tôi muốn nói chuyện với sếp/quản lý.",
     "de": "Ich möchte mit dem Chef sprechen.",
     "alt": [
      "Ich möchte den Chef sprechen."
     ]
    },
    {
     "e": "🧮",
     "vi": "Hóa đơn bị sai.",
     "de": "Die Rechnung ist falsch.",
     "alt": [
      "Die Rechnung stimmt nicht."
     ]
    },
    {
     "e": "😠",
     "vi": "Tôi không hài lòng với dịch vụ.",
     "de": "Ich bin mit dem Service nicht zufrieden.",
     "alt": []
    },
    {
     "e": "🛏️",
     "vi": "Căn phòng không sạch.",
     "de": "Das Zimmer ist nicht sauber.",
     "alt": []
    },
    {
     "e": "⚡",
     "vi": "Tôi mong có một giải pháp nhanh chóng.",
     "de": "Ich erwarte eine schnelle Lösung.",
     "alt": []
    },
    {
     "e": "🔁",
     "vi": "Tôi muốn đổi sản phẩm này.",
     "de": "Ich möchte das Produkt umtauschen.",
     "alt": [
      "Ich möchte dieses Produkt umtauschen."
     ]
    }
   ]
  },
  {
   "title": "Đưa ra đề xuất",
   "emoji": "💡",
   "items": [
    {
     "e": "🎬",
     "vi": "Chúng ta đi xem phim nhé?",
     "de": "Wollen wir ins Kino gehen?",
     "alt": [
      "Sollen wir ins Kino gehen?",
      "Gehen wir ins Kino?"
     ]
    },
    {
     "e": "🧺",
     "vi": "Một buổi picnic thì sao?",
     "de": "Wie wäre es mit einem Picknick?",
     "alt": [
      "Wie wär's mit einem Picknick?"
     ]
    },
    {
     "e": "🏊",
     "vi": "Ngày mai chúng mình đi bơi đi! (nói với một người, du)",
     "de": "Lass uns morgen schwimmen gehen!",
     "alt": [
      "Lass uns morgen schwimmen gehen."
     ]
    },
    {
     "e": "🍳",
     "vi": "Chúng ta cùng nấu ăn đi! (nói với nhiều người, ihr)",
     "de": "Lasst uns zusammen kochen!",
     "alt": [
      "Lasst uns zusammen kochen."
     ]
    },
    {
     "e": "🚌",
     "vi": "Tôi đề nghị chúng ta đi xe buýt.",
     "de": "Ich schlage vor, dass wir den Bus nehmen.",
     "alt": [
      "Ich schlage vor, wir nehmen den Bus."
     ]
    },
    {
     "e": "☕",
     "vi": "Bạn (du) có muốn đi uống cà phê không?",
     "de": "Hast du Lust, Kaffee trinken zu gehen?",
     "alt": [
      "Hast du Lust auf einen Kaffee?",
      "Hast du Lust, einen Kaffee zu trinken?"
     ]
    },
    {
     "e": "⏰",
     "vi": "Bạn (du) nghĩ sao nếu chúng ta bắt đầu sớm hơn?",
     "de": "Was hältst du davon, wenn wir früher anfangen?",
     "alt": []
    },
    {
     "e": "🥾",
     "vi": "Cuối tuần chúng ta có thể đi bộ đường dài.",
     "de": "Wir könnten am Wochenende wandern.",
     "alt": [
      "Wir könnten am Wochenende wandern gehen."
     ]
    },
    {
     "e": "👏",
     "vi": "Đó là một ý hay!",
     "de": "Das ist eine gute Idee!",
     "alt": [
      "Das ist eine gute Idee.",
      "Gute Idee!"
     ]
    },
    {
     "e": "😔",
     "vi": "Tiếc là tôi không có thời gian.",
     "de": "Ich habe leider keine Zeit.",
     "alt": [
      "Leider habe ich keine Zeit."
     ]
    },
    {
     "e": "🔜",
     "vi": "Có lẽ để lần khác.",
     "de": "Vielleicht ein anderes Mal.",
     "alt": [
      "Vielleicht ein andermal.",
      "Vielleicht nächstes Mal."
     ]
    },
    {
     "e": "🌊",
     "vi": "Sao chúng ta không đi biển nhỉ?",
     "de": "Warum fahren wir nicht ans Meer?",
     "alt": []
    },
    {
     "e": "👌",
     "vi": "Đồng ý!",
     "de": "Einverstanden!",
     "alt": [
      "Abgemacht!",
      "Okay!"
     ]
    },
    {
     "e": "📆",
     "vi": "Thứ Sáu lúc tám giờ có hợp với bạn (du) không?",
     "de": "Passt dir Freitag um acht?",
     "alt": [
      "Passt dir Freitag um 8?",
      "Passt es dir am Freitag um acht?",
      "Passt dir Freitag um acht Uhr?"
     ]
    },
    {
     "e": "🙋",
     "vi": "Tôi có thể đưa ra một đề xuất không?",
     "de": "Darf ich einen Vorschlag machen?",
     "alt": [
      "Kann ich einen Vorschlag machen?"
     ]
    }
   ]
  },
  {
   "title": "Kể về trải nghiệm",
   "emoji": "🧳",
   "items": [
    {
     "e": "🇪🇸",
     "vi": "Năm ngoái tôi đã ở Tây Ban Nha.",
     "de": "Letztes Jahr war ich in Spanien.",
     "alt": [
      "Letztes Jahr bin ich in Spanien gewesen.",
      "Ich war letztes Jahr in Spanien."
     ]
    },
    {
     "e": "🚆",
     "vi": "Chúng tôi đã đi bằng tàu hỏa.",
     "de": "Wir sind mit dem Zug gefahren.",
     "alt": []
    },
    {
     "e": "🌟",
     "vi": "Đó là một trải nghiệm tuyệt vời.",
     "de": "Das war ein tolles Erlebnis.",
     "alt": [
      "Das war ein super Erlebnis.",
      "Es war ein tolles Erlebnis."
     ]
    },
    {
     "e": "🆕",
     "vi": "Lúc đầu mọi thứ đều mới mẻ với tôi.",
     "de": "Am Anfang war alles neu für mich.",
     "alt": [
      "Anfangs war alles neu für mich."
     ]
    },
    {
     "e": "🏛️",
     "vi": "Sau đó chúng tôi đã tham quan một bảo tàng.",
     "de": "Danach haben wir ein Museum besucht.",
     "alt": [
      "Dann haben wir ein Museum besucht."
     ]
    },
    {
     "e": "🏠",
     "vi": "Cuối cùng chúng tôi đã về nhà (bằng xe).",
     "de": "Zum Schluss sind wir nach Hause gefahren.",
     "alt": [
      "Am Ende sind wir nach Hause gefahren.",
      "Schließlich sind wir nach Hause gefahren."
     ]
    },
    {
     "e": "🍣",
     "vi": "Bạn (du) đã từng ăn sushi chưa?",
     "de": "Hast du schon einmal Sushi gegessen?",
     "alt": [
      "Hast du schon mal Sushi gegessen?"
     ]
    },
    {
     "e": "⛷️",
     "vi": "Tôi chưa bao giờ trượt tuyết.",
     "de": "Ich bin noch nie Ski gefahren.",
     "alt": []
    },
    {
     "e": "💭",
     "vi": "Tôi sẽ không bao giờ quên điều đó.",
     "de": "Das werde ich nie vergessen.",
     "alt": [
      "Das werde ich niemals vergessen.",
      "Ich werde das nie vergessen."
     ]
    },
    {
     "e": "🌧️",
     "vi": "Tiếc là trời mưa suốt.",
     "de": "Leider hat es die ganze Zeit geregnet.",
     "alt": [
      "Es hat leider die ganze Zeit geregnet."
     ]
    },
    {
     "e": "👋",
     "vi": "Tôi đã làm quen được nhiều người dễ mến.",
     "de": "Ich habe viele nette Leute kennengelernt.",
     "alt": []
    },
    {
     "e": "🇩🇪",
     "vi": "Khi tôi mới đến Đức, mọi thứ đều khó khăn.",
     "de": "Als ich nach Deutschland kam, war alles schwierig.",
     "alt": [
      "Als ich nach Deutschland kam, war alles schwer."
     ]
    },
    {
     "e": "😅",
     "vi": "Nó vất vả nhưng rất vui.",
     "de": "Es war anstrengend, aber schön.",
     "alt": []
    },
    {
     "e": "🏖️",
     "vi": "Kỳ nghỉ của bạn (du) thế nào?",
     "de": "Wie war dein Urlaub?",
     "alt": []
    },
    {
     "e": "🏙️",
     "vi": "Hồi đó tôi sống ở Hà Nội.",
     "de": "Damals habe ich in Hanoi gewohnt.",
     "alt": [
      "Damals wohnte ich in Hanoi."
     ]
    }
   ]
  }
 ],
 "B2": [
  {
   "title": "Thảo luận & lập luận",
   "emoji": "💬",
   "items": [
    {
     "e": "💭",
     "vi": "Theo ý kiến của tôi, điều đó không đúng.",
     "de": "Meiner Meinung nach stimmt das nicht.",
     "alt": [
      "Meiner Ansicht nach stimmt das nicht.",
      "Meines Erachtens stimmt das nicht."
     ]
    },
    {
     "e": "👍",
     "vi": "Tôi hoàn toàn đồng ý với bạn.",
     "de": "Ich stimme dir völlig zu.",
     "alt": [
      "Ich stimme dir voll und ganz zu.",
      "Da stimme ich dir völlig zu."
     ]
    },
    {
     "e": "👎",
     "vi": "Tôi nhìn nhận điều đó khác.",
     "de": "Das sehe ich anders.",
     "alt": [
      "Ich sehe das anders."
     ]
    },
    {
     "e": "⚖️",
     "vi": "Một mặt điều đó tiện lợi, mặt khác thì đắt.",
     "de": "Einerseits ist das praktisch, andererseits teuer.",
     "alt": [
      "Einerseits ist das praktisch, andererseits ist es teuer."
     ]
    },
    {
     "e": "🤔",
     "vi": "Về điều đó thì tôi không chắc lắm.",
     "de": "Da bin ich mir nicht so sicher.",
     "alt": [
      "Ich bin mir da nicht so sicher."
     ]
    },
    {
     "e": "✋",
     "vi": "Xin lỗi, tôi có thể ngắt lời một chút không?",
     "de": "Entschuldigung, darf ich kurz unterbrechen?",
     "alt": [
      "Entschuldigung, kann ich kurz unterbrechen?"
     ]
    },
    {
     "e": "📌",
     "vi": "Một lập luận quan trọng là chi phí.",
     "de": "Ein wichtiges Argument sind die Kosten.",
     "alt": []
    },
    {
     "e": "🔄",
     "vi": "Điều phản bác lại là nó quá đắt.",
     "de": "Dagegen spricht, dass es zu teuer ist.",
     "alt": []
    },
    {
     "e": "✅",
     "vi": "Điều ủng hộ cho việc đó là nó tiết kiệm thời gian.",
     "de": "Dafür spricht, dass es Zeit spart.",
     "alt": []
    },
    {
     "e": "🙋",
     "vi": "Bạn có thể giải thích điều đó cụ thể hơn không?",
     "de": "Kannst du das genauer erklären?",
     "alt": [
      "Könntest du das genauer erklären?"
     ]
    },
    {
     "e": "🎯",
     "vi": "Chính đó là vấn đề.",
     "de": "Genau das ist das Problem.",
     "alt": [
      "Das ist genau das Problem."
     ]
    },
    {
     "e": "🤝",
     "vi": "Về điểm này bạn đúng một phần.",
     "de": "Da hast du teilweise recht.",
     "alt": [
      "Da hast du teilweise Recht.",
      "Du hast teilweise recht.",
      "Du hast teilweise Recht."
     ]
    },
    {
     "e": "🔍",
     "vi": "Chúng ta hãy lấy ví dụ nước Đức.",
     "de": "Nehmen wir zum Beispiel Deutschland.",
     "alt": [
      "Nehmen wir Deutschland als Beispiel."
     ]
    },
    {
     "e": "🧩",
     "vi": "Tóm lại, có thể nói rằng cả hai bên đều có lý.",
     "de": "Zusammenfassend kann man sagen, dass beide recht haben.",
     "alt": [
      "Zusammenfassend kann man sagen, dass beide Recht haben."
     ]
    },
    {
     "e": "❗",
     "vi": "Tôi muốn nhấn mạnh rằng điều này rất quan trọng.",
     "de": "Ich möchte betonen, dass das sehr wichtig ist.",
     "alt": [
      "Ich möchte betonen, dass dies sehr wichtig ist."
     ]
    }
   ]
  },
  {
   "title": "Thuyết trình",
   "emoji": "🎤",
   "items": [
    {
     "e": "👋",
     "vi": "Hôm nay tôi muốn giới thiệu với quý vị chủ đề biến đổi khí hậu.",
     "de": "Heute möchte ich Ihnen das Thema Klimawandel vorstellen.",
     "alt": []
    },
    {
     "e": "🗂️",
     "vi": "Bài thuyết trình của tôi gồm ba phần.",
     "de": "Mein Vortrag besteht aus drei Teilen.",
     "alt": [
      "Meine Präsentation besteht aus drei Teilen."
     ]
    },
    {
     "e": "1️⃣",
     "vi": "Đầu tiên tôi nói về lịch sử.",
     "de": "Zuerst spreche ich über die Geschichte.",
     "alt": [
      "Zunächst spreche ich über die Geschichte."
     ]
    },
    {
     "e": "➡️",
     "vi": "Như vậy tôi chuyển sang điểm thứ hai.",
     "de": "Damit komme ich zum zweiten Punkt.",
     "alt": [
      "Nun komme ich zum zweiten Punkt.",
      "Jetzt komme ich zum zweiten Punkt."
     ]
    },
    {
     "e": "👀",
     "vi": "Như quý vị thấy ở đây, chi phí đang tăng.",
     "de": "Wie Sie hier sehen, steigen die Kosten.",
     "alt": []
    },
    {
     "e": "⭐",
     "vi": "Điều này đặc biệt quan trọng.",
     "de": "Das ist besonders wichtig.",
     "alt": [
      "Dies ist besonders wichtig."
     ]
    },
    {
     "e": "🔙",
     "vi": "Tôi sẽ quay lại điểm này sau.",
     "de": "Darauf komme ich später zurück.",
     "alt": [
      "Auf diesen Punkt komme ich später zurück."
     ]
    },
    {
     "e": "💡",
     "vi": "Tôi muốn đưa ra một ví dụ.",
     "de": "Ich möchte ein Beispiel nennen.",
     "alt": [
      "Ich möchte ein Beispiel geben."
     ]
    },
    {
     "e": "🏁",
     "vi": "Cuối cùng tôi muốn tóm tắt những điểm quan trọng nhất.",
     "de": "Zum Schluss möchte ich die wichtigsten Punkte zusammenfassen.",
     "alt": [
      "Abschließend möchte ich die wichtigsten Punkte zusammenfassen."
     ]
    },
    {
     "e": "🙏",
     "vi": "Cảm ơn quý vị đã chú ý lắng nghe.",
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "alt": [
      "Danke für Ihre Aufmerksamkeit."
     ]
    },
    {
     "e": "❓",
     "vi": "Quý vị còn câu hỏi nào không?",
     "de": "Haben Sie noch Fragen?",
     "alt": [
      "Gibt es noch Fragen?"
     ]
    },
    {
     "e": "👌",
     "vi": "Đó là một câu hỏi hay.",
     "de": "Das ist eine gute Frage.",
     "alt": []
    },
    {
     "e": "📚",
     "vi": "Theo một nghiên cứu, trẻ em đọc ít hơn.",
     "de": "Laut einer Studie lesen Kinder weniger.",
     "alt": [
      "Einer Studie zufolge lesen Kinder weniger."
     ]
    },
    {
     "e": "🔎",
     "vi": "Chúng ta hãy xem xét kỹ hơn điểm này.",
     "de": "Schauen wir uns diesen Punkt genauer an.",
     "alt": [
      "Sehen wir uns diesen Punkt genauer an."
     ]
    },
    {
     "e": "🔚",
     "vi": "Như vậy là tôi đã đến phần cuối bài thuyết trình.",
     "de": "Damit bin ich am Ende meines Vortrags.",
     "alt": [
      "Damit bin ich am Ende meiner Präsentation."
     ]
    }
   ]
  },
  {
   "title": "Thư & email trang trọng",
   "emoji": "✉️",
   "items": [
    {
     "e": "👔",
     "vi": "Kính gửi quý ông bà,",
     "de": "Sehr geehrte Damen und Herren,",
     "alt": []
    },
    {
     "e": "👨",
     "vi": "Kính gửi ông Müller,",
     "de": "Sehr geehrter Herr Müller,",
     "alt": []
    },
    {
     "e": "👩",
     "vi": "Kính gửi bà Schmidt,",
     "de": "Sehr geehrte Frau Schmidt,",
     "alt": []
    },
    {
     "e": "📩",
     "vi": "Cảm ơn ông/bà rất nhiều vì email.",
     "de": "Vielen Dank für Ihre E-Mail.",
     "alt": [
      "Herzlichen Dank für Ihre E-Mail."
     ]
    },
    {
     "e": "📝",
     "vi": "Tôi viết thư cho ông/bà vì lý do sau.",
     "de": "Ich schreibe Ihnen aus folgendem Grund.",
     "alt": []
    },
    {
     "e": "📰",
     "vi": "Tôi đã đọc quảng cáo của quý vị với sự quan tâm lớn.",
     "de": "Mit großem Interesse habe ich Ihre Anzeige gelesen.",
     "alt": [
      "Ich habe Ihre Anzeige mit großem Interesse gelesen."
     ]
    },
    {
     "e": "ℹ️",
     "vi": "Tôi muốn hỏi thông tin về khóa học.",
     "de": "Ich möchte mich nach dem Kurs erkundigen.",
     "alt": [
      "Ich möchte mich über den Kurs informieren."
     ]
    },
    {
     "e": "😠",
     "vi": "Tôi muốn khiếu nại về dịch vụ của quý vị.",
     "de": "Ich möchte mich über Ihren Service beschweren.",
     "alt": []
    },
    {
     "e": "🙏",
     "vi": "Tôi sẽ rất biết ơn nếu ông/bà sớm trả lời.",
     "de": "Ich wäre Ihnen sehr dankbar, wenn Sie bald antworten würden.",
     "alt": []
    },
    {
     "e": "📎",
     "vi": "Kèm theo đây tôi gửi ông/bà hồ sơ xin việc của tôi.",
     "de": "Anbei sende ich Ihnen meine Bewerbungsunterlagen.",
     "alt": [
      "Im Anhang sende ich Ihnen meine Bewerbungsunterlagen."
     ]
    },
    {
     "e": "⏳",
     "vi": "Tôi mong nhận được câu trả lời của ông/bà.",
     "de": "Ich freue mich auf Ihre Antwort.",
     "alt": []
    },
    {
     "e": "📞",
     "vi": "Nếu có câu hỏi, tôi luôn sẵn sàng hỗ trợ ông/bà.",
     "de": "Bei Fragen stehe ich Ihnen gern zur Verfügung.",
     "alt": [
      "Bei Fragen stehe ich Ihnen gerne zur Verfügung.",
      "Für Fragen stehe ich Ihnen gern zur Verfügung."
     ]
    },
    {
     "e": "😔",
     "vi": "Rất tiếc tôi phải hủy cuộc hẹn.",
     "de": "Leider muss ich den Termin absagen.",
     "alt": []
    },
    {
     "e": "✔️",
     "vi": "Bằng thư này tôi xác nhận cuộc hẹn vào thứ Hai.",
     "de": "Hiermit bestätige ich den Termin am Montag.",
     "alt": []
    },
    {
     "e": "🤝",
     "vi": "Trân trọng (câu kết thư)",
     "de": "Mit freundlichen Grüßen",
     "alt": []
    }
   ]
  },
  {
   "title": "Đàm phán",
   "emoji": "💼",
   "items": [
    {
     "e": "💰",
     "vi": "Giá này hơi quá cao đối với chúng tôi.",
     "de": "Der Preis ist uns etwas zu hoch.",
     "alt": [
      "Der Preis ist für uns etwas zu hoch."
     ]
    },
    {
     "e": "🏷️",
     "vi": "Ông/bà có thể giảm giá cho chúng tôi không?",
     "de": "Können Sie uns einen Rabatt geben?",
     "alt": [
      "Könnten Sie uns einen Rabatt geben?",
      "Können Sie uns einen Rabatt gewähren?"
     ]
    },
    {
     "e": "💡",
     "vi": "Tôi có một đề xuất.",
     "de": "Ich habe einen Vorschlag.",
     "alt": [
      "Ich hätte einen Vorschlag."
     ]
    },
    {
     "e": "⚖️",
     "vi": "Chúng ta hãy tìm một sự thỏa hiệp.",
     "de": "Lassen Sie uns einen Kompromiss finden.",
     "alt": [
      "Lassen Sie uns einen Kompromiss suchen."
     ]
    },
    {
     "e": "✅",
     "vi": "Chúng tôi có thể chấp nhận điều đó.",
     "de": "Das können wir akzeptieren.",
     "alt": [
      "Wir können das akzeptieren."
     ]
    },
    {
     "e": "❌",
     "vi": "Rất tiếc chúng tôi không thể nhận lời đề nghị này.",
     "de": "Leider können wir dieses Angebot nicht annehmen.",
     "alt": [
      "Wir können dieses Angebot leider nicht annehmen.",
      "Dieses Angebot können wir leider nicht annehmen."
     ]
    },
    {
     "e": "🤔",
     "vi": "Chúng tôi còn phải suy nghĩ về điều đó.",
     "de": "Darüber müssen wir noch nachdenken.",
     "alt": [
      "Wir müssen noch darüber nachdenken."
     ]
    },
    {
     "e": "📦",
     "vi": "Có giảm giá không nếu chúng tôi đặt nhiều hơn?",
     "de": "Gibt es einen Rabatt, wenn wir mehr bestellen?",
     "alt": []
    },
    {
     "e": "🔁",
     "vi": "Chúng tôi sẵn sàng nhượng bộ ông/bà.",
     "de": "Wir sind bereit, Ihnen entgegenzukommen.",
     "alt": []
    },
    {
     "e": "🗓️",
     "vi": "Ngày giao hàng có linh hoạt không?",
     "de": "Ist der Liefertermin flexibel?",
     "alt": []
    },
    {
     "e": "🎯",
     "vi": "Mục tiêu của chúng tôi là hợp tác lâu dài.",
     "de": "Unser Ziel ist eine langfristige Zusammenarbeit.",
     "alt": []
    },
    {
     "e": "🤝",
     "vi": "Vậy là chúng ta đã thống nhất.",
     "de": "Dann sind wir uns einig.",
     "alt": [
      "Dann sind wir uns also einig."
     ]
    },
    {
     "e": "🧾",
     "vi": "Điều kiện thanh toán như thế nào?",
     "de": "Wie sind die Zahlungsbedingungen?",
     "alt": []
    },
    {
     "e": "📝",
     "vi": "Chúng ta hãy ghi lại điều này bằng văn bản.",
     "de": "Lassen Sie uns das schriftlich festhalten.",
     "alt": [
      "Halten wir das schriftlich fest."
     ]
    },
    {
     "e": "🙅",
     "vi": "Đó là lời đề nghị cuối cùng của chúng tôi.",
     "de": "Das ist unser letztes Angebot.",
     "alt": []
    }
   ]
  },
  {
   "title": "Mô tả biểu đồ & số liệu",
   "emoji": "📊",
   "items": [
    {
     "e": "📊",
     "vi": "Biểu đồ cho thấy số lượng người dùng internet.",
     "de": "Das Diagramm zeigt die Zahl der Internetnutzer.",
     "alt": [
      "Die Grafik zeigt die Zahl der Internetnutzer.",
      "Das Diagramm zeigt die Anzahl der Internetnutzer."
     ]
    },
    {
     "e": "🗃️",
     "vi": "Dữ liệu có nguồn từ năm 2023.",
     "de": "Die Daten stammen aus dem Jahr 2023.",
     "alt": []
    },
    {
     "e": "📈",
     "vi": "Con số đã tăng mạnh.",
     "de": "Die Zahl ist stark gestiegen.",
     "alt": [
      "Die Anzahl ist stark gestiegen."
     ]
    },
    {
     "e": "📉",
     "vi": "Giá cả đã giảm nhẹ.",
     "de": "Die Preise sind leicht gesunken.",
     "alt": [
      "Die Preise sind leicht gefallen."
     ]
    },
    {
     "e": "➖",
     "vi": "Giá trị vẫn giữ nguyên.",
     "de": "Der Wert ist gleich geblieben.",
     "alt": [
      "Der Wert blieb gleich.",
      "Der Wert ist konstant geblieben."
     ]
    },
    {
     "e": "🥇",
     "vi": "Đức đứng ở vị trí thứ nhất.",
     "de": "Deutschland steht an erster Stelle.",
     "alt": [
      "Deutschland liegt an erster Stelle.",
      "An erster Stelle steht Deutschland."
     ]
    },
    {
     "e": "🥈",
     "vi": "Ở vị trí thứ hai là Pháp.",
     "de": "An zweiter Stelle steht Frankreich.",
     "alt": [
      "An zweiter Stelle liegt Frankreich.",
      "Frankreich steht an zweiter Stelle."
     ]
    },
    {
     "e": "🌓",
     "vi": "Khoảng một nửa số người được hỏi dùng điện thoại thông minh.",
     "de": "Etwa die Hälfte der Befragten nutzt ein Smartphone.",
     "alt": [
      "Ungefähr die Hälfte der Befragten nutzt ein Smartphone.",
      "Rund die Hälfte der Befragten nutzt ein Smartphone."
     ]
    },
    {
     "e": "🔢",
     "vi": "Tỷ lệ là 30 phần trăm.",
     "de": "Der Anteil liegt bei 30 Prozent.",
     "alt": [
      "Der Anteil beträgt 30 Prozent."
     ]
    },
    {
     "e": "⚖️",
     "vi": "So với năm 2010, con số đã tăng gấp đôi.",
     "de": "Im Vergleich zu 2010 hat sich die Zahl verdoppelt.",
     "alt": [
      "Verglichen mit 2010 hat sich die Zahl verdoppelt."
     ]
    },
    {
     "e": "😮",
     "vi": "Điều đáng chú ý là người trẻ đọc ít.",
     "de": "Auffällig ist, dass junge Menschen wenig lesen.",
     "alt": [
      "Es fällt auf, dass junge Menschen wenig lesen."
     ]
    },
    {
     "e": "📅",
     "vi": "Từ năm 2015 đến 2020, giá tăng liên tục.",
     "de": "Von 2015 bis 2020 stiegen die Preise kontinuierlich.",
     "alt": [
      "Von 2015 bis 2020 sind die Preise kontinuierlich gestiegen.",
      "Zwischen 2015 und 2020 stiegen die Preise kontinuierlich."
     ]
    },
    {
     "e": "👥",
     "vi": "Hơn 60 phần trăm người được hỏi đồng ý.",
     "de": "Mehr als 60 Prozent der Befragten stimmen zu.",
     "alt": [
      "Über 60 Prozent der Befragten stimmen zu."
     ]
    },
    {
     "e": "🔝",
     "vi": "Năm 2019, con số đạt mức cao nhất.",
     "de": "Die Zahl erreichte 2019 ihren Höchststand.",
     "alt": [
      "Im Jahr 2019 erreichte die Zahl ihren Höchststand.",
      "Die Zahl hat 2019 ihren Höchststand erreicht."
     ]
    },
    {
     "e": "🧭",
     "vi": "Xu hướng này có lẽ sẽ tiếp tục.",
     "de": "Dieser Trend wird sich wahrscheinlich fortsetzen.",
     "alt": [
      "Dieser Trend wird wahrscheinlich anhalten."
     ]
    }
   ]
  },
  {
   "title": "Đưa ra giả thuyết & suy đoán",
   "emoji": "🔮",
   "items": [
    {
     "e": "🚗",
     "vi": "Có lẽ anh ấy đang bị kẹt xe.",
     "de": "Vielleicht steht er im Stau.",
     "alt": [
      "Er steht vielleicht im Stau.",
      "Er steht wohl im Stau."
     ]
    },
    {
     "e": "🏠",
     "vi": "Chắc là cô ấy đã về nhà rồi.",
     "de": "Sie wird wohl schon nach Hause gegangen sein.",
     "alt": [
      "Sie ist wohl schon nach Hause gegangen."
     ]
    },
    {
     "e": "💤",
     "vi": "Có thể là anh ấy đang ngủ.",
     "de": "Es kann sein, dass er schläft.",
     "alt": [
      "Es könnte sein, dass er schläft."
     ]
    },
    {
     "e": "✔️",
     "vi": "Tôi cho rằng điều đó đúng.",
     "de": "Ich gehe davon aus, dass das stimmt.",
     "alt": [
      "Ich nehme an, dass das stimmt."
     ]
    },
    {
     "e": "🌍",
     "vi": "Nếu tôi là tổng thống, tôi sẽ bảo vệ môi trường.",
     "de": "Wenn ich Präsident wäre, würde ich die Umwelt schützen.",
     "alt": []
    },
    {
     "e": "💸",
     "vi": "Giả sử chúng ta có nhiều tiền hơn, chúng ta sẽ làm gì?",
     "de": "Angenommen, wir hätten mehr Geld, was würden wir tun?",
     "alt": [
      "Angenommen, wir hätten mehr Geld, was würden wir machen?"
     ]
    },
    {
     "e": "🌧️",
     "vi": "Rất có khả năng là trời sẽ mưa.",
     "de": "Es ist sehr wahrscheinlich, dass es regnet.",
     "alt": [
      "Es ist sehr wahrscheinlich, dass es regnen wird."
     ]
    },
    {
     "e": "❓",
     "vi": "Tôi nghi ngờ việc anh ấy sẽ đến.",
     "de": "Ich bezweifle, dass er kommt.",
     "alt": [
      "Ich bezweifle, dass er kommen wird."
     ]
    },
    {
     "e": "🧐",
     "vi": "Tôi đoán là anh ấy đã quên điều đó.",
     "de": "Ich vermute, dass er es vergessen hat.",
     "alt": [
      "Ich vermute, er hat es vergessen."
     ]
    },
    {
     "e": "🚫",
     "vi": "Điều đó khó có khả năng xảy ra.",
     "de": "Das ist unwahrscheinlich.",
     "alt": [
      "Das ist eher unwahrscheinlich."
     ]
    },
    {
     "e": "🔋",
     "vi": "Trong tương lai có lẽ sẽ có nhiều ô tô điện hơn.",
     "de": "In Zukunft wird es wohl mehr Elektroautos geben.",
     "alt": [
      "In Zukunft wird es wahrscheinlich mehr Elektroautos geben."
     ]
    },
    {
     "e": "😲",
     "vi": "Không thể nào như vậy được!",
     "de": "Das kann doch nicht sein!",
     "alt": [
      "Das kann nicht sein!"
     ]
    },
    {
     "e": "⏰",
     "vi": "Lẽ ra chúng ta nên khởi hành sớm hơn.",
     "de": "Wir hätten früher losfahren sollen.",
     "alt": []
    },
    {
     "e": "🌦️",
     "vi": "Điều đó tùy thuộc vào thời tiết.",
     "de": "Das hängt vom Wetter ab.",
     "alt": [
      "Es hängt vom Wetter ab."
     ]
    },
    {
     "e": "💭",
     "vi": "Tôi có thể hình dung rằng điều đó sẽ hiệu quả.",
     "de": "Ich kann mir vorstellen, dass das funktioniert.",
     "alt": [
      "Ich könnte mir vorstellen, dass das funktioniert."
     ]
    }
   ]
  }
 ],
 "C1": [
  {
   "title": "Viết học thuật",
   "emoji": "📝",
   "items": [
    {
     "e": "📄",
     "vi": "Bài viết này đề cập đến chủ đề di cư.",
     "de": "Die vorliegende Arbeit befasst sich mit dem Thema Migration.",
     "alt": [
      "Diese Arbeit befasst sich mit dem Thema Migration."
     ]
    },
    {
     "e": "📖",
     "vi": "Trước hết cần định nghĩa khái niệm này.",
     "de": "Zunächst ist der Begriff zu definieren.",
     "alt": [
      "Zunächst muss der Begriff definiert werden."
     ]
    },
    {
     "e": "📊",
     "vi": "Các nghiên cứu cho thấy rằng xu hướng này đang tăng.",
     "de": "Studien zeigen, dass dieser Trend zunimmt.",
     "alt": []
    },
    {
     "e": "👨‍🏫",
     "vi": "Theo Müller, vấn đề này vẫn chưa được giải quyết.",
     "de": "Laut Müller ist dieses Problem noch ungelöst.",
     "alt": [
      "Müller zufolge ist dieses Problem noch ungelöst."
     ]
    },
    {
     "e": "➡️",
     "vi": "Từ đó có thể kết luận rằng cần có cải cách.",
     "de": "Daraus lässt sich schließen, dass Reformen nötig sind.",
     "alt": [
      "Daraus folgt, dass Reformen nötig sind."
     ]
    },
    {
     "e": "⚠️",
     "vi": "Cần lưu ý rằng dữ liệu chưa đầy đủ.",
     "de": "Es ist zu beachten, dass die Daten unvollständig sind.",
     "alt": [
      "Zu beachten ist, dass die Daten unvollständig sind."
     ]
    },
    {
     "e": "🧾",
     "vi": "Tóm lại, có thể khẳng định rằng luận điểm này đúng.",
     "de": "Zusammenfassend lässt sich feststellen, dass die These stimmt.",
     "alt": [
      "Zusammenfassend kann man feststellen, dass die These stimmt."
     ]
    },
    {
     "e": "💡",
     "vi": "Điều này có thể được minh họa bằng một ví dụ.",
     "de": "Dies lässt sich an einem Beispiel veranschaulichen.",
     "alt": [
      "Das lässt sich an einem Beispiel veranschaulichen."
     ]
    },
    {
     "e": "❓",
     "vi": "Trong bối cảnh này, nảy ra câu hỏi về chi phí.",
     "de": "In diesem Zusammenhang stellt sich die Frage nach den Kosten.",
     "alt": []
    },
    {
     "e": "🎯",
     "vi": "Trọng tâm là câu hỏi về sự công bằng.",
     "de": "Im Mittelpunkt steht die Frage der Gerechtigkeit.",
     "alt": [
      "Im Mittelpunkt steht die Frage nach der Gerechtigkeit."
     ]
    },
    {
     "e": "✅",
     "vi": "Kết quả này khẳng định giả thuyết.",
     "de": "Dieses Ergebnis bestätigt die Hypothese.",
     "alt": [
      "Das Ergebnis bestätigt die Hypothese."
     ]
    },
    {
     "e": "🔬",
     "vi": "Về vấn đề này vẫn cần nghiên cứu thêm.",
     "de": "Hierzu besteht weiterer Forschungsbedarf.",
     "alt": [
      "Dazu besteht weiterer Forschungsbedarf."
     ]
    },
    {
     "e": "📈",
     "vi": "Bảng 2 làm rõ sự khác biệt.",
     "de": "Tabelle 2 verdeutlicht den Unterschied.",
     "alt": []
    },
    {
     "e": "🔄",
     "vi": "Trái với quan điểm phổ biến, rủi ro này thấp.",
     "de": "Entgegen der verbreiteten Meinung ist das Risiko gering.",
     "alt": [
      "Entgegen der weitverbreiteten Meinung ist das Risiko gering."
     ]
    },
    {
     "e": "📋",
     "vi": "Sau đây, các kết quả sẽ được trình bày.",
     "de": "Im Folgenden werden die Ergebnisse dargestellt.",
     "alt": [
      "Im Folgenden werden die Ergebnisse vorgestellt."
     ]
    }
   ]
  },
  {
   "title": "Bày tỏ quan điểm tinh tế",
   "emoji": "💭",
   "items": [
    {
     "e": "🧠",
     "vi": "Theo tôi thấy, đề xuất này hợp lý.",
     "de": "Meines Erachtens ist dieser Vorschlag sinnvoll.",
     "alt": [
      "Meiner Ansicht nach ist dieser Vorschlag sinnvoll.",
      "Meiner Meinung nach ist dieser Vorschlag sinnvoll."
     ]
    },
    {
     "e": "🎓",
     "vi": "Tôi có quan điểm rằng giáo dục phải miễn phí.",
     "de": "Ich bin der Auffassung, dass Bildung kostenlos sein muss.",
     "alt": [
      "Ich bin der Ansicht, dass Bildung kostenlos sein muss.",
      "Ich bin der Meinung, dass Bildung kostenlos sein muss."
     ]
    },
    {
     "e": "👍",
     "vi": "Tôi chỉ có thể đồng ý với điều đó.",
     "de": "Dem kann ich nur zustimmen.",
     "alt": [
      "Da kann ich nur zustimmen."
     ]
    },
    {
     "e": "👀",
     "vi": "Tôi nhìn nhận điều đó khác.",
     "de": "Ich sehe das anders.",
     "alt": [
      "Das sehe ich anders."
     ]
    },
    {
     "e": "🤝",
     "vi": "Đối với tôi, điều quan trọng là mọi người đều được tham gia.",
     "de": "Mir ist wichtig, dass alle beteiligt werden.",
     "alt": [
      "Es ist mir wichtig, dass alle beteiligt werden."
     ]
    },
    {
     "e": "💪",
     "vi": "Tôi tin chắc rằng điều đó sẽ hiệu quả.",
     "de": "Ich bin fest davon überzeugt, dass das funktioniert.",
     "alt": []
    },
    {
     "e": "⚖️",
     "vi": "Theo góc nhìn của tôi, ưu điểm chiếm ưu thế.",
     "de": "Aus meiner Sicht überwiegen die Vorteile.",
     "alt": [
      "Meiner Ansicht nach überwiegen die Vorteile."
     ]
    },
    {
     "e": "🤷",
     "vi": "Tôi không chắc điều đó có đúng không.",
     "de": "Ich bin mir nicht sicher, ob das stimmt.",
     "alt": []
    },
    {
     "e": "✋",
     "vi": "Tôi lên tiếng ủng hộ một lệnh cấm.",
     "de": "Ich spreche mich für ein Verbot aus.",
     "alt": []
    },
    {
     "e": "🚫",
     "vi": "Tôi lên tiếng phản đối đề xuất này.",
     "de": "Ich spreche mich gegen diesen Vorschlag aus.",
     "alt": []
    },
    {
     "e": "😟",
     "vi": "Tôi cho rằng điều đó có vấn đề.",
     "de": "Ich halte das für problematisch.",
     "alt": [
      "Ich halte es für problematisch."
     ]
    },
    {
     "e": "🔀",
     "vi": "Một mặt nó đắt, mặt khác lại tiện lợi.",
     "de": "Einerseits ist es teuer, andererseits praktisch.",
     "alt": [
      "Einerseits ist es teuer, andererseits ist es praktisch."
     ]
    },
    {
     "e": "🔍",
     "vi": "Điều đó phụ thuộc vào cách người ta nhìn nhận.",
     "de": "Das hängt davon ab, wie man es betrachtet.",
     "alt": [
      "Das hängt davon ab, wie man das betrachtet."
     ]
    },
    {
     "e": "🌓",
     "vi": "Về điểm này tôi đồng ý một phần.",
     "de": "Da stimme ich teilweise zu.",
     "alt": [
      "Dem stimme ich teilweise zu.",
      "Ich stimme teilweise zu."
     ]
    },
    {
     "e": "💯",
     "vi": "Theo tôi, điều đó hoàn toàn chính xác.",
     "de": "Das trifft meiner Meinung nach voll und ganz zu.",
     "alt": [
      "Das trifft meines Erachtens voll und ganz zu."
     ]
    }
   ]
  },
  {
   "title": "Rào đón và giảm nhẹ phát ngôn",
   "emoji": "🤔",
   "items": [
    {
     "e": "🎲",
     "vi": "Điều đó có lẽ đúng.",
     "de": "Das dürfte zutreffen.",
     "alt": [
      "Das dürfte stimmen."
     ]
    },
    {
     "e": "📏",
     "vi": "Điều đó đúng ở một mức độ nhất định.",
     "de": "Bis zu einem gewissen Grad ist das richtig.",
     "alt": []
    },
    {
     "e": "🌍",
     "vi": "Nhìn chung, tôi hài lòng.",
     "de": "Im Großen und Ganzen bin ich zufrieden.",
     "alt": [
      "Alles in allem bin ich zufrieden."
     ]
    },
    {
     "e": "🗣️",
     "vi": "Theo như tôi biết, anh ấy bị ốm.",
     "de": "Soweit ich weiß, ist er krank.",
     "alt": [
      "Soviel ich weiß, ist er krank."
     ]
    },
    {
     "e": "🪞",
     "vi": "Có vẻ như vấn đề đã được giải quyết.",
     "de": "Es scheint, als wäre das Problem gelöst.",
     "alt": [
      "Es scheint, als ob das Problem gelöst wäre."
     ]
    },
    {
     "e": "🙃",
     "vi": "Điều đó không hoàn toàn sai.",
     "de": "Das ist nicht ganz falsch.",
     "alt": [
      "Das ist nicht völlig falsch."
     ]
    },
    {
     "e": "🕗",
     "vi": "Nếu tôi không nhầm thì nó bắt đầu lúc tám giờ.",
     "de": "Wenn ich mich nicht irre, beginnt es um acht.",
     "alt": [
      "Wenn ich mich nicht irre, beginnt es um acht Uhr."
     ]
    },
    {
     "e": "🧩",
     "vi": "Ít nhất trong một số trường hợp thì là vậy.",
     "de": "Zumindest in einigen Fällen ist das so.",
     "alt": [
      "Zumindest in manchen Fällen ist das so."
     ]
    },
    {
     "e": "😕",
     "vi": "Tôi có ấn tượng rằng anh ấy không hài lòng.",
     "de": "Ich habe den Eindruck, dass er unzufrieden ist.",
     "alt": []
    },
    {
     "e": "📜",
     "vi": "Về nguyên tắc thì đúng, nhưng có ngoại lệ.",
     "de": "Im Prinzip ja, aber es gibt Ausnahmen.",
     "alt": [
      "Grundsätzlich ja, aber es gibt Ausnahmen."
     ]
    },
    {
     "e": "📉",
     "vi": "Người ta có thể cho rằng các con số sẽ tăng.",
     "de": "Man könnte annehmen, dass die Zahlen steigen.",
     "alt": []
    },
    {
     "e": "🗂️",
     "vi": "Điều đó có lẽ tùy vào từng trường hợp cụ thể.",
     "de": "Das hängt wohl vom Einzelfall ab.",
     "alt": []
    },
    {
     "e": "🔎",
     "vi": "Trong chừng mực có thể đánh giá được, mọi thứ đều ổn.",
     "de": "Soweit man das beurteilen kann, ist alles in Ordnung.",
     "alt": []
    },
    {
     "e": "📐",
     "vi": "Kết quả tương đối khả quan.",
     "de": "Das Ergebnis ist relativ positiv.",
     "alt": [
      "Das Ergebnis ist verhältnismäßig positiv."
     ]
    },
    {
     "e": "🚪",
     "vi": "Không loại trừ khả năng anh ấy đúng.",
     "de": "Es ist nicht auszuschließen, dass er recht hat.",
     "alt": [
      "Es ist nicht auszuschließen, dass er Recht hat.",
      "Es ist nicht ausgeschlossen, dass er recht hat."
     ]
    }
   ]
  },
  {
   "title": "Cấu trúc bài thuyết trình",
   "emoji": "🎤",
   "items": [
    {
     "e": "⚡",
     "vi": "Hôm nay tôi muốn nói về chủ đề năng lượng.",
     "de": "Heute möchte ich über das Thema Energie sprechen.",
     "alt": [
      "Ich möchte heute über das Thema Energie sprechen."
     ]
    },
    {
     "e": "3️⃣",
     "vi": "Bài thuyết trình của tôi gồm ba phần.",
     "de": "Mein Vortrag besteht aus drei Teilen.",
     "alt": [
      "Mein Vortrag gliedert sich in drei Teile."
     ]
    },
    {
     "e": "🏁",
     "vi": "Đầu tiên tôi sẽ giới thiệu bối cảnh.",
     "de": "Zuerst stelle ich den Hintergrund vor.",
     "alt": [
      "Zunächst stelle ich den Hintergrund vor."
     ]
    },
    {
     "e": "📊",
     "vi": "Sau đó tôi sẽ chuyển sang các kết quả.",
     "de": "Danach komme ich zu den Ergebnissen.",
     "alt": [
      "Anschließend komme ich zu den Ergebnissen."
     ]
    },
    {
     "e": "➡️",
     "vi": "Điều này đưa tôi đến điểm tiếp theo.",
     "de": "Das bringt mich zum nächsten Punkt.",
     "alt": [
      "Damit komme ich zum nächsten Punkt."
     ]
    },
    {
     "e": "🔁",
     "vi": "Như đã đề cập, chi phí rất cao.",
     "de": "Wie bereits erwähnt, sind die Kosten hoch.",
     "alt": [
      "Wie schon erwähnt, sind die Kosten hoch."
     ]
    },
    {
     "e": "↩️",
     "vi": "Tôi sẽ quay lại điểm này sau.",
     "de": "Darauf komme ich später zurück.",
     "alt": [
      "Darauf komme ich später noch zurück."
     ]
    },
    {
     "e": "💡",
     "vi": "Xin cho phép tôi đưa ra một ví dụ.",
     "de": "Lassen Sie mich ein Beispiel nennen.",
     "alt": [
      "Lassen Sie mich ein Beispiel geben."
     ]
    },
    {
     "e": "📉",
     "vi": "Chúng ta hãy cùng nhìn vào biểu đồ này.",
     "de": "Werfen wir einen Blick auf diese Grafik.",
     "alt": []
    },
    {
     "e": "📝",
     "vi": "Tôi xin tóm tắt các điểm quan trọng nhất.",
     "de": "Ich fasse die wichtigsten Punkte zusammen.",
     "alt": []
    },
    {
     "e": "❗",
     "vi": "Cuối cùng, tôi muốn nhấn mạnh rằng giáo dục mang tính quyết định.",
     "de": "Abschließend möchte ich betonen, dass Bildung entscheidend ist.",
     "alt": []
    },
    {
     "e": "🙏",
     "vi": "Cảm ơn quý vị đã chú ý lắng nghe.",
     "de": "Vielen Dank für Ihre Aufmerksamkeit.",
     "alt": [
      "Danke für Ihre Aufmerksamkeit."
     ]
    },
    {
     "e": "🙋",
     "vi": "Bây giờ tôi sẵn lòng trả lời các câu hỏi.",
     "de": "Nun stehe ich gern für Fragen zur Verfügung.",
     "alt": [
      "Nun stehe ich gerne für Fragen zur Verfügung.",
      "Jetzt stehe ich gern für Fragen zur Verfügung."
     ]
    },
    {
     "e": "⏱️",
     "vi": "Tôi xin nói ngắn gọn.",
     "de": "Ich fasse mich kurz.",
     "alt": []
    },
    {
     "e": "🔚",
     "vi": "Như vậy tôi đi đến phần kết.",
     "de": "Damit komme ich zum Schluss.",
     "alt": [
      "Damit komme ich zum Ende."
     ]
    }
   ]
  },
  {
   "title": "Phê bình và nhượng bộ",
   "emoji": "⚖️",
   "items": [
    {
     "e": "🙌",
     "vi": "Phải thừa nhận rằng ý tưởng này độc đáo.",
     "de": "Zugegeben, die Idee ist originell.",
     "alt": [
      "Zugegebenermaßen ist die Idee originell."
     ]
    },
    {
     "e": "💸",
     "vi": "Điều đó đúng thật, nhưng nó quá đắt.",
     "de": "Das stimmt zwar, aber es ist zu teuer.",
     "alt": []
    },
    {
     "e": "✋",
     "vi": "Về điểm này tôi phải phản bác.",
     "de": "Dem muss ich widersprechen.",
     "alt": [
      "Da muss ich widersprechen."
     ]
    },
    {
     "e": "🕳️",
     "vi": "Lập luận này có một điểm yếu.",
     "de": "Dieses Argument hat eine Schwachstelle.",
     "alt": [
      "Dieses Argument hat einen Schwachpunkt."
     ]
    },
    {
     "e": "❓",
     "vi": "Thật đáng ngờ liệu điều đó có thực sự giúp ích không.",
     "de": "Es ist fraglich, ob das wirklich hilft.",
     "alt": []
    },
    {
     "e": "👂",
     "vi": "Tôi hiểu quan điểm của ông/bà, nhưng tôi nhìn nhận khác.",
     "de": "Ich verstehe Ihren Standpunkt, sehe das aber anders.",
     "alt": [
      "Ich verstehe Ihren Standpunkt, sehe es aber anders."
     ]
    },
    {
     "e": "🙈",
     "vi": "Điều đó đã không được tính đến.",
     "de": "Das wurde nicht berücksichtigt.",
     "alt": []
    },
    {
     "e": "🧱",
     "vi": "Mặc dù vậy, tôi vẫn có ý kiến khác.",
     "de": "Dennoch bin ich anderer Meinung.",
     "alt": [
      "Trotzdem bin ich anderer Meinung.",
      "Dennoch bin ich anderer Ansicht."
     ]
    },
    {
     "e": "🗯️",
     "vi": "Phe đối lập chỉ trích gay gắt kế hoạch này.",
     "de": "Die Opposition übt scharfe Kritik an dem Plan.",
     "alt": [
      "Die Opposition übt scharfe Kritik am Plan."
     ]
    },
    {
     "e": "📈",
     "vi": "Không thể phủ nhận rằng có những tiến bộ.",
     "de": "Es lässt sich nicht leugnen, dass es Fortschritte gibt.",
     "alt": [
      "Es ist nicht zu leugnen, dass es Fortschritte gibt.",
      "Man kann nicht leugnen, dass es Fortschritte gibt."
     ]
    },
    {
     "e": "🌗",
     "vi": "Đó chỉ là một nửa sự thật.",
     "de": "Das ist nur die halbe Wahrheit.",
     "alt": []
    },
    {
     "e": "😬",
     "vi": "Tôi có một số băn khoăn.",
     "de": "Ich habe einige Bedenken.",
     "alt": [
      "Ich habe gewisse Bedenken."
     ]
    },
    {
     "e": "🎯",
     "vi": "Ông/bà nói cũng không hẳn là sai.",
     "de": "Da haben Sie nicht ganz unrecht.",
     "alt": [
      "Da haben Sie nicht ganz Unrecht."
     ]
    },
    {
     "e": "🔍",
     "vi": "Điều này cần được nhìn nhận một cách phê phán.",
     "de": "Das ist kritisch zu sehen.",
     "alt": [
      "Das muss kritisch gesehen werden."
     ]
    },
    {
     "e": "🙇",
     "vi": "Tôi thừa nhận rằng tôi đã nhầm.",
     "de": "Ich gebe zu, dass ich mich geirrt habe.",
     "alt": [
      "Ich gebe zu, dass ich mich getäuscht habe."
     ]
    }
   ]
  },
  {
   "title": "Thành ngữ tiếng Đức",
   "emoji": "🦉",
   "items": [
    {
     "e": "🍃",
     "vi": "Anh ấy nói thẳng, không kiêng nể ai (không lấy lá che miệng).",
     "de": "Er nimmt kein Blatt vor den Mund.",
     "alt": []
    },
    {
     "e": "🍅",
     "vi": "Bạn bị mù à? Không thấy điều hiển nhiên sao (có cà chua trên mắt)?",
     "de": "Hast du Tomaten auf den Augen?",
     "alt": []
    },
    {
     "e": "🤞",
     "vi": "Mình cầu chúc may mắn cho bạn (bấm ngón cái)!",
     "de": "Ich drücke dir die Daumen!",
     "alt": [
      "Ich drück dir die Daumen!"
     ]
    },
    {
     "e": "🪵",
     "vi": "Bạn đang nghĩ sai hướng rồi (đi trên đường gỗ).",
     "de": "Da bist du auf dem Holzweg.",
     "alt": [
      "Du bist auf dem Holzweg."
     ]
    },
    {
     "e": "🥣",
     "vi": "Đừng nói vòng vo nữa (quanh nồi cháo nóng)!",
     "de": "Red nicht um den heißen Brei herum!",
     "alt": [
      "Rede nicht um den heißen Brei herum!"
     ]
    },
    {
     "e": "🐱",
     "vi": "Tôi không mua mèo trong bao (mua mà không xem trước).",
     "de": "Ich kaufe nicht die Katze im Sack.",
     "alt": []
    },
    {
     "e": "🍺",
     "vi": "Đó không phải việc của tôi (không phải bia của tôi).",
     "de": "Das ist nicht mein Bier.",
     "alt": [
      "Das ist nicht mein Bier!"
     ]
    },
    {
     "e": "🚉",
     "vi": "Tôi chẳng hiểu gì cả (chỉ hiểu mỗi 'nhà ga').",
     "de": "Ich verstehe nur Bahnhof.",
     "alt": []
    },
    {
     "e": "🐻",
     "vi": "Bạn định bịa chuyện để lừa tôi (buộc con gấu lên người tôi)!",
     "de": "Du willst mir einen Bären aufbinden!",
     "alt": []
    },
    {
     "e": "🔨",
     "vi": "Bạn đã nói trúng phóc vấn đề (đập trúng đầu đinh).",
     "de": "Du hast den Nagel auf den Kopf getroffen.",
     "alt": [
      "Damit hast du den Nagel auf den Kopf getroffen."
     ]
    },
    {
     "e": "🫕",
     "vi": "Anh ấy đã lỡ lời, làm người khác phật ý (giẫm vào bát mỡ).",
     "de": "Er ist ins Fettnäpfchen getreten.",
     "alt": []
    },
    {
     "e": "🐷",
     "vi": "Bạn gặp may đấy (có lợn)!",
     "de": "Da hast du Schwein gehabt!",
     "alt": [
      "Da hast du aber Schwein gehabt!"
     ]
    },
    {
     "e": "🪑",
     "vi": "Đừng trì hoãn việc đó mãi (đẩy lên băng ghế dài)!",
     "de": "Schieb das nicht auf die lange Bank!",
     "alt": [
      "Schiebe das nicht auf die lange Bank!"
     ]
    },
    {
     "e": "👁️",
     "vi": "Chúng ta có thể nói chuyện riêng được không (dưới bốn mắt)?",
     "de": "Können wir unter vier Augen sprechen?",
     "alt": [
      "Können wir unter vier Augen reden?"
     ]
    },
    {
     "e": "🧑‍🎓",
     "vi": "Không ai sinh ra đã giỏi (chưa có bậc thầy nào từ trời rơi xuống).",
     "de": "Es ist noch kein Meister vom Himmel gefallen.",
     "alt": []
    }
   ]
  }
 ],
 "C2": [
  {
   "title": "Văn phong giám định (Gutachtenstil)",
   "emoji": "📝",
   "items": [
    {
     "e": "🎯",
     "vi": "A có thể có quyền yêu cầu B thanh toán theo § 433 khoản 2 BGB.",
     "de": "A könnte gegen B einen Anspruch auf Zahlung aus § 433 Abs. 2 BGB haben.",
     "alt": []
    },
    {
     "e": "📋",
     "vi": "Để vậy, phải có một hợp đồng mua bán có hiệu lực được giao kết.",
     "de": "Dazu müsste ein wirksamer Kaufvertrag geschlossen worden sein.",
     "alt": [
      "Hierfür müsste ein wirksamer Kaufvertrag geschlossen worden sein."
     ]
    },
    {
     "e": "❓",
     "vi": "Vấn đề đặt ra là liệu có một lời đề nghị giao kết hay không.",
     "de": "Fraglich ist, ob ein Angebot vorliegt.",
     "alt": [
      "Es ist fraglich, ob ein Angebot vorliegt."
     ]
    },
    {
     "e": "📖",
     "vi": "Lời đề nghị là một tuyên bố ý chí cần được tiếp nhận.",
     "de": "Ein Angebot ist eine empfangsbedürftige Willenserklärung.",
     "alt": []
    },
    {
     "e": "🔍",
     "vi": "Trong trường hợp này, A đã đề nghị bán hàng cho B.",
     "de": "Hier hat A dem B die Ware zum Kauf angeboten.",
     "alt": []
    },
    {
     "e": "✅",
     "vi": "Như vậy, có một lời đề nghị giao kết.",
     "de": "Somit liegt ein Angebot vor.",
     "alt": [
      "Folglich liegt ein Angebot vor."
     ]
    },
    {
     "e": "👍",
     "vi": "Điều này đúng trong trường hợp này.",
     "de": "Dies ist vorliegend der Fall.",
     "alt": [
      "Das ist hier der Fall."
     ]
    },
    {
     "e": "☑️",
     "vi": "Các điều kiện đã được đáp ứng.",
     "de": "Die Voraussetzungen sind erfüllt.",
     "alt": [
      "Die Voraussetzungen liegen vor."
     ]
    },
    {
     "e": "🤝",
     "vi": "Do đó, một hợp đồng mua bán đã được giao kết.",
     "de": "Mithin ist ein Kaufvertrag zustande gekommen.",
     "alt": [
      "Folglich ist ein Kaufvertrag zustande gekommen."
     ]
    },
    {
     "e": "🏁",
     "vi": "Kết luận: A có quyền yêu cầu B thanh toán.",
     "de": "Ergebnis: A hat gegen B einen Anspruch auf Zahlung.",
     "alt": []
    },
    {
     "e": "⚠️",
     "vi": "Vấn đề là liệu tuyên bố đã đến được người nhận hay chưa.",
     "de": "Problematisch ist, ob die Erklärung zugegangen ist.",
     "alt": []
    },
    {
     "e": "💥",
     "vi": "Trước hết phải có thiệt hại phát sinh.",
     "de": "Zunächst müsste ein Schaden entstanden sein.",
     "alt": []
    },
    {
     "e": "🔒",
     "vi": "Quyền yêu cầu chưa bị chấm dứt.",
     "de": "Der Anspruch ist nicht erloschen.",
     "alt": []
    },
    {
     "e": "⚙️",
     "vi": "Quyền yêu cầu cũng có thể được thực thi.",
     "de": "Der Anspruch ist auch durchsetzbar.",
     "alt": []
    },
    {
     "e": "🔎",
     "vi": "Điều này sẽ được xem xét dưới đây.",
     "de": "Dies ist im Folgenden zu prüfen.",
     "alt": [
      "Dies wird im Folgenden geprüft."
     ]
    }
   ]
  },
  {
   "title": "Phiên tòa xét xử (mündliche Verhandlung)",
   "emoji": "⚖️",
   "items": [
    {
     "e": "🔔",
     "vi": "Phiên tòa được khai mạc.",
     "de": "Die Sitzung ist eröffnet.",
     "alt": []
    },
    {
     "e": "📣",
     "vi": "Tôi xin gọi vụ Müller kiện Schmidt.",
     "de": "Ich rufe die Sache Müller gegen Schmidt auf.",
     "alt": []
    },
    {
     "e": "👥",
     "vi": "Các đương sự đã có mặt.",
     "de": "Die Parteien sind erschienen.",
     "alt": []
    },
    {
     "e": "🙅",
     "vi": "Tôi đề nghị bác đơn kiện.",
     "de": "Ich beantrage, die Klage abzuweisen.",
     "alt": []
    },
    {
     "e": "📄",
     "vi": "Tôi giữ nguyên các yêu cầu trong bản trình bày ngày 3 tháng 5.",
     "de": "Ich stelle die Anträge aus dem Schriftsatz vom 3. Mai.",
     "alt": []
    },
    {
     "e": "📎",
     "vi": "Tôi xin viện dẫn bản trình bày của mình.",
     "de": "Ich nehme Bezug auf meinen Schriftsatz.",
     "alt": [
      "Ich verweise auf meinen Schriftsatz."
     ]
    },
    {
     "e": "ℹ️",
     "vi": "Tòa án lưu ý các bên về điểm sau.",
     "de": "Das Gericht weist auf Folgendes hin.",
     "alt": []
    },
    {
     "e": "🧑‍⚖️",
     "vi": "Nhân chứng được giải thích về quyền và nghĩa vụ.",
     "de": "Der Zeuge wird belehrt.",
     "alt": []
    },
    {
     "e": "❔",
     "vi": "Quý vị còn câu hỏi nào cho nhân chứng không?",
     "de": "Haben Sie noch Fragen an den Zeugen?",
     "alt": []
    },
    {
     "e": "✋",
     "vi": "Tôi phản đối câu hỏi này.",
     "de": "Ich beanstande diese Frage.",
     "alt": []
    },
    {
     "e": "⏸️",
     "vi": "Tôi xin tạm nghỉ một lát.",
     "de": "Ich bitte um eine kurze Unterbrechung.",
     "alt": []
    },
    {
     "e": "🤝",
     "vi": "Tòa án đề xuất hòa giải.",
     "de": "Das Gericht schlägt einen Vergleich vor.",
     "alt": []
    },
    {
     "e": "🕊️",
     "vi": "Chúng tôi sẵn sàng hòa giải.",
     "de": "Wir sind zu einem Vergleich bereit.",
     "alt": []
    },
    {
     "e": "🔚",
     "vi": "Việc thu thập chứng cứ kết thúc.",
     "de": "Die Beweisaufnahme ist geschlossen.",
     "alt": []
    },
    {
     "e": "📢",
     "vi": "Phán quyết sẽ được tuyên vào cuối phiên tòa.",
     "de": "Die Entscheidung wird am Ende der Sitzung verkündet.",
     "alt": []
    }
   ]
  },
  {
   "title": "Điều khoản hợp đồng (Vertragsklauseln)",
   "emoji": "📜",
   "items": [
    {
     "e": "✍️",
     "vi": "Hợp đồng này có hiệu lực kể từ khi ký.",
     "de": "Dieser Vertrag tritt mit Unterzeichnung in Kraft.",
     "alt": []
    },
    {
     "e": "📝",
     "vi": "Mọi sửa đổi phải được lập thành văn bản.",
     "de": "Änderungen bedürfen der Schriftform.",
     "alt": [
      "Änderungen bedürfen zu ihrer Wirksamkeit der Schriftform."
     ]
    },
    {
     "e": "🗣️",
     "vi": "Không có thỏa thuận phụ bằng miệng.",
     "de": "Mündliche Nebenabreden bestehen nicht.",
     "alt": []
    },
    {
     "e": "♾️",
     "vi": "Hợp đồng được giao kết không xác định thời hạn.",
     "de": "Der Vertrag wird auf unbestimmte Zeit geschlossen.",
     "alt": []
    },
    {
     "e": "📅",
     "vi": "Thời hạn báo trước chấm dứt hợp đồng là ba tháng tính đến cuối tháng.",
     "de": "Die Kündigungsfrist beträgt drei Monate zum Monatsende.",
     "alt": []
    },
    {
     "e": "⚡",
     "vi": "Quyền đơn phương chấm dứt hợp đồng đặc biệt không bị ảnh hưởng.",
     "de": "Das Recht zur außerordentlichen Kündigung bleibt unberührt.",
     "alt": []
    },
    {
     "e": "📍",
     "vi": "Nơi thực hiện nghĩa vụ là Berlin.",
     "de": "Erfüllungsort ist Berlin.",
     "alt": []
    },
    {
     "e": "🏛️",
     "vi": "Tòa án có thẩm quyền là tòa án tại München.",
     "de": "Gerichtsstand ist München.",
     "alt": []
    },
    {
     "e": "🇩🇪",
     "vi": "Áp dụng pháp luật của Cộng hòa Liên bang Đức.",
     "de": "Es gilt das Recht der Bundesrepublik Deutschland.",
     "alt": []
    },
    {
     "e": "🧩",
     "vi": "Nếu một điều khoản vô hiệu, phần còn lại của hợp đồng vẫn có hiệu lực.",
     "de": "Sollte eine Bestimmung unwirksam sein, bleibt der Vertrag im Übrigen wirksam.",
     "alt": []
    },
    {
     "e": "🛡️",
     "vi": "Trách nhiệm được giới hạn ở lỗi cố ý và lỗi vô ý nghiêm trọng.",
     "de": "Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.",
     "alt": []
    },
    {
     "e": "💶",
     "vi": "Giá mua đến hạn thanh toán trong vòng 14 ngày kể từ khi xuất hóa đơn.",
     "de": "Der Kaufpreis ist binnen 14 Tagen nach Rechnungsstellung fällig.",
     "alt": [
      "Der Kaufpreis ist innerhalb von 14 Tagen nach Rechnungsstellung fällig."
     ]
    },
    {
     "e": "🔐",
     "vi": "Hàng hóa vẫn thuộc quyền sở hữu của người bán cho đến khi được thanh toán đầy đủ.",
     "de": "Die Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers.",
     "alt": []
    },
    {
     "e": "🤫",
     "vi": "Các bên cam kết giữ bí mật.",
     "de": "Die Parteien verpflichten sich zur Verschwiegenheit.",
     "alt": []
    },
    {
     "e": "🧾",
     "vi": "Tất cả giá chưa bao gồm thuế giá trị gia tăng theo luật định.",
     "de": "Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.",
     "alt": []
    }
   ]
  },
  {
   "title": "Viết thư gửi cơ quan thuế (Schreiben an das Finanzamt)",
   "emoji": "🏢",
   "items": [
    {
     "e": "✉️",
     "vi": "Kính gửi Quý cơ quan,",
     "de": "Sehr geehrte Damen und Herren,",
     "alt": []
    },
    {
     "e": "📮",
     "vi": "Tôi xin khiếu nại quyết định thuế thu nhập năm 2025 ngày 10 tháng 3.",
     "de": "Hiermit lege ich gegen den Einkommensteuerbescheid 2025 vom 10. März Einspruch ein.",
     "alt": []
    },
    {
     "e": "📬",
     "vi": "Quyết định này được gửi đến tôi vào ngày 12 tháng 3.",
     "de": "Der Bescheid ist mir am 12. März zugegangen.",
     "alt": []
    },
    {
     "e": "⏳",
     "vi": "Tôi sẽ bổ sung lý do sau.",
     "de": "Die Begründung reiche ich nach.",
     "alt": [
      "Ich werde die Begründung nachreichen."
     ]
    },
    {
     "e": "🛑",
     "vi": "Tôi đề nghị tạm hoãn thi hành quyết định.",
     "de": "Ich beantrage die Aussetzung der Vollziehung.",
     "alt": []
    },
    {
     "e": "📆",
     "vi": "Tôi xin gia hạn thời hạn đến ngày 30 tháng 9.",
     "de": "Ich bitte um Verlängerung der Frist bis zum 30. September.",
     "alt": [
      "Ich beantrage eine Fristverlängerung bis zum 30. September."
     ]
    },
    {
     "e": "📂",
     "vi": "Tôi vẫn chưa có đầy đủ hồ sơ.",
     "de": "Die Unterlagen liegen mir noch nicht vollständig vor.",
     "alt": []
    },
    {
     "e": "💼",
     "vi": "Chi phí tạo thu nhập chưa được tính đầy đủ.",
     "de": "Die Werbungskosten wurden nicht vollständig berücksichtigt.",
     "alt": []
    },
    {
     "e": "📎",
     "vi": "Tôi xin gửi kèm các chứng từ làm bằng chứng.",
     "de": "Als Nachweis füge ich die Belege bei.",
     "alt": [
      "Die Belege füge ich als Nachweis bei."
     ]
    },
    {
     "e": "✏️",
     "vi": "Tôi đề nghị sửa đổi quyết định.",
     "de": "Ich bitte um Änderung des Bescheids.",
     "alt": [
      "Ich beantrage die Änderung des Bescheids."
     ]
    },
    {
     "e": "🗂️",
     "vi": "Tôi đề nghị được xem hồ sơ.",
     "de": "Ich beantrage Akteneinsicht.",
     "alt": []
    },
    {
     "e": "💰",
     "vi": "Tôi đề nghị hoàn lại số tiền đã nộp thừa.",
     "de": "Ich bitte um Erstattung des zu viel gezahlten Betrags.",
     "alt": []
    },
    {
     "e": "🕰️",
     "vi": "Tôi đề nghị hoãn nộp khoản nợ thuế.",
     "de": "Ich bitte um Stundung der Steuerschuld.",
     "alt": [
      "Ich beantrage die Stundung der Steuerschuld."
     ]
    },
    {
     "e": "📞",
     "vi": "Nếu có thắc mắc, tôi sẵn sàng trao đổi thêm.",
     "de": "Für Rückfragen stehe ich Ihnen gern zur Verfügung.",
     "alt": [
      "Für Rückfragen stehe ich Ihnen gerne zur Verfügung."
     ]
    },
    {
     "e": "🖊️",
     "vi": "Trân trọng,",
     "de": "Mit freundlichen Grüßen",
     "alt": []
    }
   ]
  },
  {
   "title": "Tư vấn với chuyên gia thuế (Beratung beim Steuerberater)",
   "emoji": "💼",
   "items": [
    {
     "e": "🧾",
     "vi": "Tôi muốn nhờ làm tờ khai thuế thu nhập cá nhân.",
     "de": "Ich möchte meine Einkommensteuererklärung machen lassen.",
     "alt": []
    },
    {
     "e": "📂",
     "vi": "Anh/chị cần những giấy tờ gì từ tôi?",
     "de": "Welche Unterlagen brauchen Sie von mir?",
     "alt": [
      "Welche Unterlagen benötigen Sie von mir?"
     ]
    },
    {
     "e": "🏠",
     "vi": "Tôi có thể khấu trừ chi phí phòng làm việc tại nhà không?",
     "de": "Kann ich das Arbeitszimmer absetzen?",
     "alt": [
      "Kann ich das Arbeitszimmer steuerlich absetzen?"
     ]
    },
    {
     "e": "✅",
     "vi": "Anh/chị có thể kê khai khoản này là chi phí tạo thu nhập.",
     "de": "Das können Sie als Werbungskosten geltend machen.",
     "alt": []
    },
    {
     "e": "💑",
     "vi": "Kê khai chung có lợi cho chúng tôi không?",
     "de": "Lohnt sich die Zusammenveranlagung für uns?",
     "alt": []
    },
    {
     "e": "🔢",
     "vi": "Bậc thuế nào có lợi hơn cho chúng tôi?",
     "de": "Welche Steuerklasse ist für uns günstiger?",
     "alt": []
    },
    {
     "e": "🌏",
     "vi": "Tôi có phải khai báo thu nhập ở nước ngoài không?",
     "de": "Muss ich meine ausländischen Einkünfte angeben?",
     "alt": []
    },
    {
     "e": "🇻🇳",
     "vi": "Có hiệp định tránh đánh thuế hai lần với Việt Nam.",
     "de": "Es besteht ein Doppelbesteuerungsabkommen mit Vietnam.",
     "alt": []
    },
    {
     "e": "💸",
     "vi": "Có thể dự kiến được hoàn thuế.",
     "de": "Mit einer Erstattung ist zu rechnen.",
     "alt": []
    },
    {
     "e": "📉",
     "vi": "Anh/chị phải tính đến việc nộp bổ sung thuế.",
     "de": "Sie müssen mit einer Nachzahlung rechnen.",
     "alt": []
    },
    {
     "e": "💶",
     "vi": "Phí dịch vụ của anh/chị là bao nhiêu?",
     "de": "Wie hoch ist Ihr Honorar?",
     "alt": []
    },
    {
     "e": "📏",
     "vi": "Phí dịch vụ được tính theo Quy định về thù lao của chuyên gia tư vấn thuế.",
     "de": "Das Honorar richtet sich nach der Steuerberatervergütungsverordnung.",
     "alt": []
    },
    {
     "e": "🧑‍💻",
     "vi": "Tôi hành nghề tự do từ tháng Một.",
     "de": "Ich bin seit Januar freiberuflich tätig.",
     "alt": [
      "Ich bin seit Januar als Freiberufler tätig."
     ]
    },
    {
     "e": "❓",
     "vi": "Tôi có phải tính thuế giá trị gia tăng không?",
     "de": "Muss ich Umsatzsteuer berechnen?",
     "alt": [
      "Muss ich Umsatzsteuer ausweisen?"
     ]
    },
    {
     "e": "🪙",
     "vi": "Anh/chị có thể áp dụng quy chế doanh nghiệp nhỏ.",
     "de": "Sie können die Kleinunternehmerregelung in Anspruch nehmen.",
     "alt": []
    }
   ]
  },
  {
   "title": "Lập luận pháp lý (h.M., Mindermeinung, Streitentscheid)",
   "emoji": "🧠",
   "items": [
    {
     "e": "👍",
     "vi": "Theo quan điểm chủ đạo, câu hỏi này được trả lời khẳng định.",
     "de": "Nach herrschender Meinung ist dies zu bejahen.",
     "alt": [
      "Nach h.M. ist dies zu bejahen."
     ]
    },
    {
     "e": "👎",
     "vi": "Theo quan điểm thiểu số, câu hỏi này được trả lời phủ định.",
     "de": "Nach einer Mindermeinung ist dies zu verneinen.",
     "alt": []
    },
    {
     "e": "🏛️",
     "vi": "Án lệ theo một quan điểm khác.",
     "de": "Die Rechtsprechung vertritt eine andere Auffassung.",
     "alt": []
    },
    {
     "e": "📖",
     "vi": "Câu chữ của quy phạm ủng hộ điều này.",
     "de": "Dafür spricht der Wortlaut der Norm.",
     "alt": []
    },
    {
     "e": "🎯",
     "vi": "Ý nghĩa và mục đích của quy định phản bác điều này.",
     "de": "Dagegen spricht der Sinn und Zweck der Vorschrift.",
     "alt": []
    },
    {
     "e": "↔️",
     "vi": "Các quan điểm dẫn đến những kết quả khác nhau.",
     "de": "Die Ansichten kommen zu unterschiedlichen Ergebnissen.",
     "alt": []
    },
    {
     "e": "⚖️",
     "vi": "Vì vậy cần phải phân xử tranh luận.",
     "de": "Daher ist ein Streitentscheid erforderlich.",
     "alt": []
    },
    {
     "e": "🟰",
     "vi": "Không cần phân xử vì cả hai quan điểm đều dẫn đến cùng kết quả.",
     "de": "Ein Streitentscheid ist entbehrlich, da beide Ansichten zum selben Ergebnis kommen.",
     "alt": []
    },
    {
     "e": "🏆",
     "vi": "Các lập luận thuyết phục hơn ủng hộ quan điểm chủ đạo.",
     "de": "Die besseren Argumente sprechen für die herrschende Meinung.",
     "alt": []
    },
    {
     "e": "➡️",
     "vi": "Nên theo quan điểm này.",
     "de": "Dieser Ansicht ist zu folgen.",
     "alt": [
      "Dieser Auffassung ist zu folgen."
     ]
    },
    {
     "e": "🧱",
     "vi": "Nguyên tắc an toàn pháp lý phản bác quan điểm này.",
     "de": "Gegen diese Auffassung spricht die Rechtssicherheit.",
     "alt": []
    },
    {
     "e": "🔁",
     "vi": "Có thể xem xét áp dụng tương tự.",
     "de": "Eine analoge Anwendung kommt in Betracht.",
     "alt": []
    },
    {
     "e": "🕳️",
     "vi": "Không có lỗ hổng pháp luật ngoài dự kiến của nhà làm luật.",
     "de": "Es fehlt an einer planwidrigen Regelungslücke.",
     "alt": []
    },
    {
     "e": "🔬",
     "vi": "Quy phạm này phải được giải thích theo nghĩa hẹp.",
     "de": "Die Norm ist eng auszulegen.",
     "alt": []
    },
    {
     "e": "🧭",
     "vi": "Nhà làm luật đã cố ý quy định như vậy.",
     "de": "Der Gesetzgeber hat dies bewusst so geregelt.",
     "alt": []
    }
   ]
  },
  {
   "title": "Công thức bản án và phần quyết định (Urteilsformel & Tenor)",
   "emoji": "🔨",
   "items": [
    {
     "e": "🇩🇪",
     "vi": "Nhân danh nhân dân",
     "de": "Im Namen des Volkes",
     "alt": []
    },
    {
     "e": "❌",
     "vi": "Đơn kiện bị bác.",
     "de": "Die Klage wird abgewiesen.",
     "alt": []
    },
    {
     "e": "💶",
     "vi": "Bị đơn bị buộc phải trả cho nguyên đơn 5.000 euro.",
     "de": "Der Beklagte wird verurteilt, an den Kläger 5.000 Euro zu zahlen.",
     "alt": []
    },
    {
     "e": "🧾",
     "vi": "Bị đơn chịu án phí.",
     "de": "Die Kosten des Rechtsstreits trägt der Beklagte.",
     "alt": [
      "Der Beklagte trägt die Kosten des Rechtsstreits."
     ]
    },
    {
     "e": "⚡",
     "vi": "Bản án được tạm thời thi hành.",
     "de": "Das Urteil ist vorläufig vollstreckbar.",
     "alt": []
    },
    {
     "e": "🚫",
     "vi": "Không cho phép kháng nghị giám đốc thẩm.",
     "de": "Die Revision wird nicht zugelassen.",
     "alt": []
    },
    {
     "e": "↩️",
     "vi": "Kháng cáo bị bác.",
     "de": "Die Berufung wird zurückgewiesen.",
     "alt": []
    },
    {
     "e": "🗑️",
     "vi": "Quyết định bị khiếu kiện bị hủy bỏ.",
     "de": "Der angefochtene Bescheid wird aufgehoben.",
     "alt": []
    },
    {
     "e": "➗",
     "vi": "Phần còn lại của đơn kiện bị bác.",
     "de": "Im Übrigen wird die Klage abgewiesen.",
     "alt": []
    },
    {
     "e": "⚖️",
     "vi": "Mỗi bên tự chịu chi phí của mình.",
     "de": "Die Kosten werden gegeneinander aufgehoben.",
     "alt": []
    },
    {
     "e": "🕊️",
     "vi": "Bị cáo được tuyên vô tội.",
     "de": "Der Angeklagte wird freigesprochen.",
     "alt": []
    },
    {
     "e": "🔒",
     "vi": "Bị cáo bị tuyên phạt hai năm tù.",
     "de": "Der Angeklagte wird zu einer Freiheitsstrafe von zwei Jahren verurteilt.",
     "alt": []
    },
    {
     "e": "⏳",
     "vi": "Hình phạt được cho hưởng án treo.",
     "de": "Die Vollstreckung der Strafe wird zur Bewährung ausgesetzt.",
     "alt": []
    },
    {
     "e": "📑",
     "vi": "Đơn kiện hợp lệ nhưng không có căn cứ.",
     "de": "Die Klage ist zulässig, aber unbegründet.",
     "alt": []
    },
    {
     "e": "🔢",
     "vi": "Giá trị tranh chấp được ấn định là 10.000 euro.",
     "de": "Der Streitwert wird auf 10.000 Euro festgesetzt.",
     "alt": []
    }
   ]
  },
  {
   "title": "Thi vấn đáp luật (mündliche Prüfung Jura)",
   "emoji": "🎓",
   "items": [
    {
     "e": "📋",
     "vi": "Tôi có thể tóm tắt ngắn gọn tình tiết vụ việc không?",
     "de": "Darf ich kurz den Sachverhalt zusammenfassen?",
     "alt": []
    },
    {
     "e": "🚪",
     "vi": "Tôi xin bắt đầu với tính hợp lệ của đơn kiện.",
     "de": "Ich würde mit der Zulässigkeit beginnen.",
     "alt": [
      "Ich beginne mit der Zulässigkeit."
     ]
    },
    {
     "e": "🎯",
     "vi": "Cơ sở của quyền yêu cầu có thể là § 823 khoản 1 BGB.",
     "de": "Als Anspruchsgrundlage kommt § 823 Abs. 1 BGB in Betracht.",
     "alt": []
    },
    {
     "e": "🔁",
     "vi": "Thầy/cô có thể nhắc lại câu hỏi được không ạ?",
     "de": "Könnten Sie die Frage bitte wiederholen?",
     "alt": []
    },
    {
     "e": "🤔",
     "vi": "Tôi không chắc lắm, nhưng nghiêng về hướng vô hiệu.",
     "de": "Ich bin mir nicht sicher, tendiere aber zur Unwirksamkeit.",
     "alt": []
    },
    {
     "e": "📕",
     "vi": "Tôi có thể xem qua văn bản luật một chút không?",
     "de": "Darf ich kurz ins Gesetz schauen?",
     "alt": [
      "Darf ich kurz in das Gesetz schauen?"
     ]
    },
    {
     "e": "📌",
     "vi": "Điều này được quy định tại § 280 BGB.",
     "de": "Das ist in § 280 BGB geregelt.",
     "alt": [
      "Dies ist in § 280 BGB geregelt."
     ]
    },
    {
     "e": "📚",
     "vi": "Đây là một vấn đề kinh điển của Phần chung.",
     "de": "Es handelt sich um ein klassisches Problem des Allgemeinen Teils.",
     "alt": []
    },
    {
     "e": "🔀",
     "vi": "Ở đây cần phân biệt hai tình huống.",
     "de": "Hier ist zwischen zwei Konstellationen zu unterscheiden.",
     "alt": []
    },
    {
     "e": "✏️",
     "vi": "Tôi xin sửa lại câu trả lời của mình.",
     "de": "Ich möchte meine Antwort korrigieren.",
     "alt": []
    },
    {
     "e": "😕",
     "vi": "Kết quả đó sẽ không công bằng.",
     "de": "Das Ergebnis wäre unbillig.",
     "alt": []
    },
    {
     "e": "💡",
     "vi": "Cũng có thể nghĩ đến việc hủy bỏ giao dịch do nhầm lẫn hoặc lừa dối.",
     "de": "Man könnte auch an eine Anfechtung denken.",
     "alt": []
    },
    {
     "e": "🏛️",
     "vi": "Tòa án Tối cao Liên bang đã phán quyết về vấn đề này.",
     "de": "Der Bundesgerichtshof hat diese Frage bereits entschieden.",
     "alt": []
    },
    {
     "e": "🧾",
     "vi": "Tôi xin tóm tắt ngắn gọn kết luận của mình.",
     "de": "Ich fasse mein Ergebnis kurz zusammen.",
     "alt": []
    },
    {
     "e": "🙏",
     "vi": "Cảm ơn thầy/cô về buổi thi.",
     "de": "Vielen Dank für die Prüfung.",
     "alt": []
    }
   ]
  }
 ]
};
