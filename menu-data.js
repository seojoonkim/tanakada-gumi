// TANAKADA-GUMI Menu Data (Korean / English / Japanese)
const menuData = {
  "restaurant": {
    "ko": {
      "name": "TANAKADA-GUMI",
      "subtitle": "タナカダグミ",
      "tagline": "일본 후쿠오카 전통 요리 전문점",
      "budget": "평균 예산: ¥25,000~30,000 | 세금 10% + 봉사료 10% 별도",
      "otoshi": "오또시(전채) ¥1,000 | 음료 최소 1잔 (미주문 시 물값 ¥500)"
    },
    "en": {
      "name": "TANAKADA-GUMI",
      "subtitle": "タナカダグミ",
      "tagline": "Traditional Japanese Cuisine from Fukuoka",
      "budget": "Average Budget: ¥25,000~30,000 | 10% Tax + 10% Service Charge",
      "otoshi": "Otoshi (appetizer) ¥1,000 | Min 1 drink order (¥500 water fee otherwise)"
    },
    "ja": {
      "name": "TANAKADA-GUMI",
      "subtitle": "タナカダグミ",
      "tagline": "福岡の伝統日本料理店",
      "budget": "平均予算:¥25,000~30,000 | 税10% + サービス料10%別途",
      "otoshi": "お通し ¥1,000 | お飲み物1杯以上(未注文の場合お水代¥500)"
    }
  },
  "course": {
    "ko": {
      "title": "Dinner Course",
      "price": "¥22,800",
      "desc": "계절 모둠 사시미, 특선 요리 2종, 계절 튀김, 사가 와규 안심 구이, 계절 생선 요리, 밥 & 미소 soup, 디저트"
    },
    "en": {
      "title": "Dinner Course",
      "price": "¥22,800",
      "desc": "Seasonal Assorted Sashimi, Today's Special Dish ×2, Seasonal Fried Food, Grilled Tenderloin of Saga Beef, Seasonal Fish Dish, Rice & Miso Soup, Dessert"
    },
    "ja": {
      "title": "ディナーコース",
      "price": "¥22,800",
      "desc": "季節のお造り盛り合わせ、本日の特選料理×2、季節の揚げ物、佐賀牛ヒレ肉の炭火焼き、季節の魚料理、ご飯&味噌汁、デザート"
    }
  },
  "nav": {
    "ko": {
      "course": "코스",
      "beef": "사가 와규",
      "recommended": "셰프 추천",
      "donburi": "돈부리",
      "hotpot": "전골",
      "sashimi": "사시미",
      "chatbot": "메뉴 문의"
    },
    "en": {
      "course": "Course",
      "beef": "Saga Wagyu",
      "recommended": "Chef's Pick",
      "donburi": "Donburi",
      "hotpot": "Hot Pot",
      "sashimi": "Sashimi",
      "chatbot": "Ask Menu"
    },
    "ja": {
      "course": "コース",
      "beef": "佐賀牛",
      "recommended": "シェフのおすすめ",
      "donburi": "丼",
      "hotpot": "鍋",
      "sashimi": "刺身",
      "chatbot": "メニューお問い合わせ"
    }
  },
  "labels": {
    "ko": {
      "langSwitch": "언어",
      "viewLargeImage": "🔍 메뉴판 사진 크게 보기",
      "specialTag": "추천"
    },
    "en": {
      "langSwitch": "Language",
      "viewLargeImage": "🔍 View Menu Photo",
      "specialTag": "Special"
    },
    "ja": {
      "langSwitch": "言語",
      "viewLargeImage": "🔍 メニュー写真を拡大",
      "specialTag": "おすすめ"
    }
  },
  "categories": {
    "beef": {
      "title": {
        "ko": "Beef (사가 와규)",
        "en": "Beef (Saga Wagyu)",
        "ja": "牛肉(佐賀牛)"
      },
      "image": "menu-4.jpg",
      "items": [
        {
          "dish": "wagyu-tenderloin",
          "ko": "사가 와규 안심 구이",
          "en": "Grilled beef tenderloin",
          "ja": "佐賀牛ヒレ炭火焼き",
          "image": "dishes/wagyu-tenderloin.jpg"
        },
        {
          "dish": "wagyu-tongue",
          "ko": "사가 와규 혀 구이",
          "en": "Grilled beef tongue",
          "ja": "牛タン炭火焼き",
          "image": "dishes/wagyu-tongue.jpg"
        },
        {
          "dish": "wagyu-cutlet",
          "ko": "와규 카츠",
          "en": "Beef cutlet",
          "ja": "牛カツ",
          "image": "dishes/wagyu-cutlet.jpg"
        }
      ]
    },
    "chickenPork": {
      "title": {
        "ko": "Chicken & Pork",
        "en": "Chicken & Pork",
        "ja": "鶏肉&豚肉"
      },
      "image": "menu-4.jpg",
      "items": [
        {
          "dish": "chicken-thigh",
          "ko": "닭다리살 구이",
          "en": "Grilled chicken thigh",
          "ja": "鶏もも肉の炭火焼き",
          "image": "dishes/chicken-thigh.jpg"
        },
        {
          "dish": "fried-chicken-tartar",
          "ko": "타르트소스 닭튀김",
          "en": "Deep fried chicken with tartar sauce",
          "ja": "鶏唐揚げタルタルソース",
          "image": "dishes/fried-chicken-tartar.jpg"
        },
        {
          "dish": "chicken-gizzard",
          "ko": "닭 모래집 구이",
          "en": "Grilled chicken gizzard",
          "ja": "砂ずり炭火焼き",
          "image": "dishes/chicken-gizzard.jpg"
        },
        {
          "dish": "grilled-pork",
          "ko": "고기 구이",
          "en": "Grilled pork",
          "ja": "豚肉炭火焼き",
          "image": "dishes/grilled-pork.jpg"
        },
        {
          "dish": "grilled-pork",
          "ko": "된장 구이",
          "en": "Grilled pork with miso",
          "ja": "豚肉味噌焼き",
          "image": "dishes/pork-miso.jpg"
        }
      ]
    },
    "recommended": {
      "title": {
        "ko": "Chef's Recommended",
        "en": "Chef's Recommended",
        "ja": "シェフのおすすめ"
      },
      "image": "menu-5.jpg",
      "items": [
        {
          "dish": "fried-fatty-tuna",
          "ko": "참치 뱃살 튀김",
          "en": "Deep fried fatty tuna",
          "ja": "本マグロ大トロのカツ",
          "image": "dishes/fried-fatty-tuna.jpg"
        },
        {
          "dish": "abalone-butter",
          "ko": "버터 전복구이",
          "en": "Butter sautéed abalone",
          "ja": "アワビのバターソテー",
          "image": "dishes/abalone-butter.jpg"
        },
        {
          "dish": "caviar",
          "ko": "캐비어",
          "en": "Caviar",
          "ja": "キャビア",
          "image": "dishes/caviar.jpg"
        },
        {
          "dish": "ham-cutlet",
          "ko": "햄 커틀렛",
          "en": "Ham cutlet",
          "ja": "ハムカツ",
          "special": true,
          "image": "dishes/ham-cutlet.jpg"
        },
        {
          "dish": "fried-tiger-prawn",
          "ko": "왕새우 튀김",
          "en": "Deep fried tiger prawn",
          "ja": "車海老の天ぷら",
          "image": "dishes/fried-tiger-prawn.jpg"
        },
        {
          "dish": "salt-grilled-prawn",
          "ko": "왕새우 소금구이",
          "en": "Salt-grilled tiger prawn",
          "ja": "車海老の塩焼き",
          "image": "dishes/salt-grilled-prawn.jpg"
        },
        {
          "dish": "grilled-eel",
          "ko": "장어구이",
          "en": "Grilled eel",
          "ja": "鰻の蒲焼き",
          "image": "dishes/grilled-eel.jpg"
        },
        {
          "dish": "grilled-eel",
          "ko": "무조림 장어구이",
          "en": "Unseasoned grilled eel",
          "ja": "鰻の白焼き",
          "image": "dishes/shirayaki-eel.jpg"
        },
        {
          "dish": "grilled-shiitake",
          "ko": "표고버섯 구이",
          "en": "Grilled shiitake mushrooms",
          "ja": "椎茸の炭火焼き",
          "image": "dishes/grilled-shiitake.jpg"
        },
        {
          "dish": "agedashi-tofu",
          "ko": "두부 튀김",
          "en": "Deep-fried tofu",
          "ja": "揚げ出し豆腐",
          "image": "dishes/agedashi-tofu.jpg"
        },
        {
          "dish": "house-salad",
          "ko": "계절 채소 샐러드",
          "en": "House salad",
          "ja": "季節野菜のサラダ",
          "image": "dishes/house-salad.jpg"
        },
        {
          "dish": "potato-salad",
          "ko": "감자 샐러드",
          "en": "Potato salad",
          "ja": "ポテトサラダ",
          "image": "dishes/potato-salad.jpg"
        }
      ]
    },
    "fish": {
      "title": {
        "ko": "Fish",
        "en": "Fish",
        "ja": "魚料理"
      },
      "image": "menu-5.jpg",
      "items": [
        {
          "dish": "grilled-nodoguro",
          "ko": "노도구로 구이",
          "en": "Grilled nodoguro/red seabass",
          "ja": "のどぐろ塩焼き",
          "image": "dishes/grilled-nodoguro.jpg"
        },
        {
          "dish": "salt-grilled-tuna",
          "ko": "소금구이 참치 뱃살",
          "en": "Salt-grilled fatty tuna",
          "ja": "本マグロ大トロの塩焼き",
          "image": "dishes/salt-grilled-tuna.jpg"
        },
        {
          "dish": "grilled-kichiji",
          "ko": "킨키 벵에돔 구이",
          "en": "Grilled kichiji rockfish",
          "ja": "きんき塩焼き",
          "image": "dishes/grilled-kichiji.jpg"
        },
        {
          "dish": "braised-nodoguro",
          "ko": "노도구로 조림",
          "en": "Braised nodoguro",
          "ja": "のどぐろ煮付け",
          "image": "dishes/braised-nodoguro.jpg"
        },
        {
          "dish": "braised-kichiji",
          "ko": "킨키 벵에돔 조림",
          "en": "Braised kichiji rockfish",
          "ja": "きんき煮付け",
          "image": "dishes/braised-kichiji.jpg"
        }
      ]
    },
    "donburi": {
      "title": {
        "ko": "Donburi (S/M/L)",
        "en": "Donburi (S/M/L)",
        "ja": "丼物 (S/M/L)"
      },
      "image": "menu-6.jpg",
      "items": [
        {
          "dish": "bubble-don",
          "ko": "버블 돈",
          "en": "Bubble-Don",
          "ja": "バブル丼",
          "desc": {
            "ko": "게, 캐비어",
            "en": "Crab, caviar",
            "ja": "蟹、キャビア"
          },
          "image": "dishes/bubble-don.jpg"
        },
        {
          "dish": "zetsu-don",
          "ko": "젯소 돈",
          "en": "Zetsu-Don",
          "ja": "贅沢丼",
          "special": true,
          "desc": {
            "ko": "대뱃살, 연어알, 성게알",
            "en": "Fatty tuna, salmon roe, sea urchin",
            "ja": "大トロ、いくら、うに"
          },
          "image": "dishes/zetsu-don.jpg"
        },
        {
          "dish": "uni-don",
          "ko": "우니 돈",
          "en": "Uni-Don",
          "ja": "うに丼",
          "desc": {
            "ko": "성게알",
            "en": "Sea urchin",
            "ja": "うに"
          },
          "image": "dishes/uni-don.jpg"
        },
        {
          "dish": "tanakada-don",
          "ko": "타나카다 돈",
          "en": "Tanakada-Don",
          "ja": "タナカダ丼",
          "desc": {
            "ko": "모둠 사시미",
            "en": "Assorted sashimi",
            "ja": "お造り盛り合わせ"
          },
          "image": "dishes/tanakada-don.jpg"
        },
        {
          "dish": "ikura-don",
          "ko": "이쿠라 돈",
          "en": "Ikura-Don",
          "ja": "いくら丼",
          "desc": {
            "ko": "연어알",
            "en": "Salmon roe",
            "ja": "いくら"
          },
          "image": "dishes/ikura-don.jpg"
        },
        {
          "dish": "ikura-don",
          "ko": "우니 이쿠라 돈",
          "en": "Uni Ikura-Don",
          "ja": "うにいくら丼",
          "desc": {
            "ko": "성게알 & 연어알",
            "en": "Sea urchin & salmon roe",
            "ja": "うに&いくら"
          },
          "image": "dishes/uni-ikura-don.jpg"
        },
        {
          "dish": "torotekka-don",
          "ko": "토로테카 돈",
          "en": "Torotekka-Don",
          "ja": "トロ鉄火丼",
          "desc": {
            "ko": "대뱃살",
            "en": "Fatty tuna",
            "ja": "大トロ"
          },
          "image": "dishes/torotekka-don.jpg"
        }
      ]
    },
    "rice": {
      "title": {
        "ko": "Rice",
        "en": "Rice & Soup",
        "ja": "ご飯&汁物"
      },
      "image": "menu-6.jpg",
      "items": [
        {
          "dish": "tkg-rice",
          "ko": "생달걀 올린 밥",
          "en": "Raw egg on rice",
          "ja": "卵かけご飯"
        },
        {
          "dish": "beef-curry",
          "ko": "소고기 카레 & 라이스",
          "en": "Beef curry & rice",
          "ja": "ビーフカレーライス",
          "special": true
        },
        {
          "dish": "mentaiko-rice",
          "ko": "코다추 추천 밥",
          "en": "Spicy cod roe rice",
          "ja": "明太子&高菜ご飯"
        },
        {
          "ko": "흰밥, 미소 soup",
          "en": "White rice, miso soup",
          "ja": "白ご飯、味噌汁"
        }
      ]
    },
    "hotPot": {
      "title": {
        "ko": "Hot Pot",
        "en": "Hot Pot",
        "ja": "鍋物"
      },
      "image": "menu-3.jpg",
      "items": [
        {
          "dish": "mizutaki",
          "ko": "미즈타키 (MIZUTAKI)",
          "en": "Mizutaki",
          "ja": "水炊き",
          "desc": {
            "ko": "하카타식 백탕 (닭고기와 채소, 폰즈소스)",
            "en": "Hakata-style white broth hot pot with chicken and vegetables, ponzu sauce",
            "ja": "博多風白湯鍋(鶏肉と野菜、ポン酢)"
          },
          "image": "dishes/mizutaki.jpg"
        },
        {
          "dish": "negima",
          "ko": "네기마 (NEGIMA)",
          "en": "Negima",
          "ja": "ねぎま",
          "desc": {
            "ko": "대뱃살과 흰파 전골",
            "en": "Fatty tuna and white onion hot pot",
            "ja": "大トロと白ねぎの鍋"
          },
          "image": "dishes/negima.jpg"
        }
      ]
    },
    "sashimi": {
      "title": {
        "ko": "Sashimi",
        "en": "Sashimi",
        "ja": "刺身"
      },
      "image": "menu-8.jpg",
      "items": [
        {
          "dish": "sashimi-assorted",
          "ko": "모둠 사시미",
          "en": "Assorted sashimi",
          "ja": "お造り盛り合わせ",
          "image": "dishes/sashimi-assorted.jpg"
        },
        {
          "dish": "fatty-tuna",
          "ko": "참치 대뱃살",
          "en": "Fatty tuna",
          "ja": "本マグロ大トロ",
          "image": "dishes/fatty-tuna.jpg"
        },
        {
          "dish": "red-meat-tuna",
          "ko": "참치 붉은살",
          "en": "Lean tuna",
          "ja": "本マグロ赤身",
          "image": "dishes/red-meat-tuna.jpg"
        },
        {
          "dish": "squid",
          "ko": "광어/오징어",
          "en": "Flounder/Squid",
          "ja": "ヒラメ/イカ",
          "image": "dishes/squid.jpg"
        },
        {
          "dish": "fatty-tuna",
          "ko": "참치 대뱃살 구이",
          "en": "Grilled fatty tuna",
          "ja": "大トロの炙り",
          "image": "dishes/grilled-fatty-tuna.jpg"
        },
        {
          "dish": "red-meat-tuna",
          "ko": "참치 붉은살 구이",
          "en": "Grilled lean tuna",
          "ja": "赤身の炙り",
          "image": "dishes/red-meat-tuna.jpg"
        },
        {
          "dish": "mackerel-sesame",
          "ko": "깐 고등어 초회",
          "en": "Marinated mackerel",
          "ja": "〆鯖",
          "image": "dishes/mackerel-sesame.jpg"
        }
      ]
    },
    "special": {
      "title": {
        "ko": "추천 (Special)",
        "en": "Special Recommendations",
        "ja": "おすすめ"
      },
      "image": "menu-8.jpg",
      "items": [
        {
          "dish": "sea-urchin",
          "ko": "성게알",
          "en": "Sea urchin",
          "ja": "うに",
          "image": "dishes/sea-urchin.jpg"
        },
        {
          "dish": "steamed-crab",
          "ko": "쪄낸 게",
          "en": "Steamed crab",
          "ja": "蒸し蟹",
          "image": "dishes/steamed-crab.jpg"
        }
      ]
    },
    "miniDishes": {
      "title": {
        "ko": "Mini Dishes",
        "en": "Mini Dishes",
        "ja": "小皿料理"
      },
      "image": "menu-7.jpg",
      "items": [
        {
          "dish": "stewed-eggplant",
          "ko": "가지 조림",
          "en": "Braised eggplant",
          "ja": "茄子の煮物",
          "image": "dishes/stewed-eggplant.jpg"
        },
        {
          "dish": "hakata-stew",
          "ko": "하카타식 닭고기/채소 조림",
          "en": "Hakata-style braised chicken/vegetables",
          "ja": "博多風がめ煮",
          "image": "dishes/hakata-stew.jpg"
        },
        {
          "dish": "squid-ginger-cake",
          "ko": "오징어 생강 어묵",
          "en": "Squid ginger fish cake",
          "ja": "イカの生姜揚げ",
          "image": "dishes/squid-ginger-cake.jpg"
        },
        {
          "dish": "stewed-wing",
          "ko": "닭날개 조림",
          "en": "Braised chicken wings",
          "ja": "鶏手羽の煮物",
          "image": "dishes/stewed-wing.jpg"
        },
        {
          "dish": "fried-wing",
          "ko": "닭날개 튀김",
          "en": "Fried chicken wings",
          "ja": "鶏手羽の唐揚げ",
          "image": "dishes/fried-wing.jpg"
        },
        {
          "dish": "karasumi",
          "ko": "명란젓(다시마 말이)",
          "en": "Spicy cod roe (kelp roll)",
          "ja": "明太子の昆布巻き",
          "image": "dishes/karasumi.jpg"
        },
        {
          "dish": "tatami-iwashi",
          "ko": "멸치 조림",
          "en": "Braised anchovy",
          "ja": "煮干しの佃煮",
          "image": "dishes/tatami-iwashi.jpg"
        },
        {
          "dish": "itawasa",
          "ko": "오다리 어묵",
          "en": "Flounder fish cake",
          "ja": "ヒラメのかまぼこ",
          "image": "dishes/itawasa.jpg"
        },
        {
          "dish": "salmon-roe",
          "ko": "연어알",
          "en": "Salmon roe",
          "ja": "いくら",
          "image": "dishes/salmon-roe.jpg"
        },
        {
          "dish": "fresh-mentaiko",
          "ko": "명란젓(날것/구이)",
          "en": "Spicy cod roe (raw/grilled)",
          "ja": "明太子(生/焼き)",
          "image": "dishes/fresh-mentaiko.jpg"
        },
        {
          "dish": "canned-mackerel",
          "ko": "캔 갈치",
          "en": "Canned hairtail fish",
          "ja": "太刀魚の缶詰",
          "image": "dishes/grilled-mentaiko.jpg"
        },
        {
          "dish": "korean-seaweed",
          "ko": "김밥(한국식)",
          "en": "Korean-style kimbap",
          "ja": "韓国風のり巻き",
          "image": "dishes/canned-mackerel.jpg"
        },
        {
          "dish": "garlic-toast",
          "ko": "마늘토스트",
          "en": "Garlic toast",
          "ja": "ガーリックトースト",
          "image": "dishes/korean-seaweed.jpg"
        },
        {
          "dish": "okonomiyaki",
          "ko": "오코노미야키",
          "en": "Okonomiyaki",
          "ja": "お好み焼き",
          "image": "dishes/garlic-toast.jpg"
        },
        {
          "dish": "tamagoyaki",
          "ko": "달걀말이",
          "en": "Rolled omelet",
          "ja": "だし巻き玉子",
          "image": "dishes/okonomiyaki.jpg"
        },
        {
          "dish": "steamed-veggies",
          "ko": "쪄낸 채소",
          "en": "Steamed vegetables",
          "ja": "蒸し野菜",
          "image": "dishes/tamagoyaki.jpg"
        },
        {
          "dish": "pickled-cabbage",
          "ko": "양배추 피클",
          "en": "Cabbage pickles",
          "ja": "キャベツの漬物",
          "image": "dishes/steamed-veggies.jpg"
        }
      ]
    },
    "sauces": {
      "title": {
        "ko": "소스 (Sauces)",
        "en": "Condiments",
        "ja": "調味料"
      },
      "image": "menu-8.jpg",
      "items": [
        {
          "ko": "하카타식 단장",
          "en": "Hakata-style sweet sauce",
          "ja": "博多風甘口醤油"
        },
        {
          "ko": "도쿄식 짠장",
          "en": "Tokyo-style salty sauce",
          "ja": "東京風辛口醤油"
        },
        {
          "ko": "고춧가루",
          "en": "Red pepper powder",
          "ja": "唐辛子"
        },
        {
          "ko": "소금",
          "en": "Salt",
          "ja": "塩"
        },
        {
          "ko": "말고기용 단장",
          "en": "Sweet sauce for horse meat",
          "ja": "馬肉用甘口醤油"
        }
      ]
    }
  }
};
