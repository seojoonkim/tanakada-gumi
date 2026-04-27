const menuData = {
  restaurant: {
    name: "TANAKADA-GUMI",
    nameJapanese: "タナカダグミ",
    location: "일본 (후쿠오카)",
    budget: "¥25,000~30,000",
    tax: "세금 10% + 봉사료 10% 별도",
    otoshi: "오또시(전채) ¥1,000 강제",
    drink: "음료 최소 1잔 (미주문 시 물값 ¥500)"
  },
  
  course: {
    name: "Dinner Course",
    price: "¥22,800",
    description: "계절 모둠 사시미, 특선 요리 2종, 계절 튀김, 사가 와규 안심 구이, 계절 생선 요리, 밥 & 미소 soup, 디저트"
  },
  
  categories: {
    beef: {
      name: "Beef (사가 와규)",
      nameEn: "Beef (Saga Wagyu)",
      items: [
        { name: "사가 와규 안심 구이", nameEn: "Grilled beef tenderloin" },
        { name: "사가 와규 혀 구이", nameEn: "Grilled beef tongue" },
        { name: "와규 카츠", nameEn: "Beef cutlet" }
      ]
    },
    
    chickenPork: {
      name: "Chicken & Pork",
      nameEn: "Chicken & Pork",
      items: [
        { name: "닭다리살 구이", nameEn: "Grilled chicken thigh" },
        { name: "타르트소스 닭튀김", nameEn: "Deep fried chicken with tartar sauce" },
        { name: "닭 모래집 구이", nameEn: "Grilled chicken gizzard" },
        { name: "고기 구이", nameEn: "Grilled pork" },
        { name: "된장 구이", nameEn: "Grilled pork with miso" }
      ]
    },
    
    recommended: {
      name: "Chef's Recommended",
      nameEn: "Chef's Recommended",
      items: [
        { name: "참치 뱃살 튀김", nameEn: "Deep fried fatty tuna" },
        { name: "버터 전복구이", nameEn: "Butter sautéed abalone" },
        { name: "캐비어", nameEn: "Caviar" },
        { name: "햄 커틀렛", nameEn: "Ham cutlet", special: "our specials" },
        { name: "왕새우 튀김", nameEn: "Deep fried tiger prawn" },
        { name: "왕새우 소금구이", nameEn: "Salt-grilled tiger prawn" },
        { name: "장어구이", nameEn: "Grilled eel" },
        { name: "무조림 장어구이", nameEn: "Unseasoned grilled eel" },
        { name: "표고버섯 구이", nameEn: "Grilled shiitake mushrooms" },
        { name: "두부 튀김", nameEn: "Deep-fried tofu" },
        { name: "계절 채소 샐러드", nameEn: "House salad" },
        { name: "감자 샐러드", nameEn: "Potato salad" }
      ]
    },
    
    fish: {
      name: "Fish",
      nameEn: "Fish",
      items: [
        { name: "노도구로 구이", nameEn: "Grilled nodoguro/red seabass" },
        { name: "소금구이 참치 뱃살", nameEn: "Salt-grilled fatty tuna" },
        { name: "킨키 벵에돔 구이", nameEn: "Grilled kichiji rockfish" },
        { name: "노도구로 조림", nameEn: "Braised nodoguro" },
        { name: "킨키 벵에돔 조림", nameEn: "Braised kichiji rockfish" }
      ]
    },
    
    donburi: {
      name: "Donburi (S/M/L)",
      nameEn: "Donburi (S/M/L)",
      items: [
        { name: "버블 돈", nameEn: "Bubble-Don", description: "게, 캐비어" },
        { name: "젯소 돈", nameEn: "Zetsu-Don", description: "대뱃살, 연어알, 성게알", special: "our specials" },
        { name: "우니 돈", nameEn: "Uni-Don", description: "성게알" },
        { name: "타나카다 돈", nameEn: "Tanakada-Don", description: "모둠 사시미" },
        { name: "이쿠라 돈", nameEn: "Ikura-Don", description: "연어알" },
        { name: "우니 이쿠라 돈", nameEn: "Uni Ikura-Don", description: "성게알 & 연어알" },
        { name: "토로테카 돈", nameEn: "Torotekka-Don", description: "대뱃살" }
      ]
    },
    
    rice: {
      name: "Rice",
      nameEn: "Rice",
      items: [
        { name: "생달걀 올린 밥", nameEn: "Raw egg on rice" },
        { name: "소고기 카레 & 라이스", nameEn: "Beef curry & rice", special: "our specials" },
        { name: "코다추 추천 밥", nameEn: "Spicy cod roe rice" },
        { name: "흰밥, 미소 soup", nameEn: "White rice, miso soup" }
      ]
    },
    
    hotPot: {
      name: "Hot Pot",
      nameEn: "Hot Pot",
      items: [
        { name: "미즈타키 (MIZUTAKI)", nameEn: "Mizutaki", description: "하카타식 백탕 (닭고기와 채소, 폰즈소스)" },
        { name: "네기마 (NEGIMA)", nameEn: "Negima", description: "대뱃살과 흰파 전골" }
      ]
    },
    
    sashimi: {
      name: "Sashimi",
      nameEn: "Sashimi",
      items: [
        { name: "모둠 사시미", nameEn: "Assorted sashimi" },
        { name: "참치 대뱃살", nameEn: "Fatty tuna" },
        { name: "참치 붉은살", nameEn: "Lean tuna" },
        { name: "광어/오징어", nameEn: "Flounder/Squid" },
        { name: "참치 대뱃살 구이", nameEn: "Grilled fatty tuna" },
        { name: "참치 붉은살 구이", nameEn: "Grilled lean tuna" },
        { name: "깐 고등어 초회", nameEn: "Marinated mackerel" }
      ]
    },
    
    special: {
      name: "추천",
      nameEn: "Special Recommendations",
      items: [
        { name: "성게알", nameEn: "Sea urchin" },
        { name: "쪄낸 게", nameEn: "Steamed crab" }
      ]
    },
    
    miniDishes: {
      name: "Mini Dishes",
      nameEn: "Mini Dishes",
      items: [
        { name: "가지 조림", nameEn: "Braised eggplant" },
        { name: "하카타식 닭고기/채소 조림", nameEn: "Hakata-style braised chicken/vegetables" },
        { name: "오징어 생강 어묵", nameEn: "Squid ginger fish cake" },
        { name: "닭날개 조림", nameEn: "Braised chicken wings" },
        { name: "닭날개 튀김", nameEn: "Fried chicken wings" },
        { name: "명란젓(다시마 말이)", nameEn: "Spicy cod roe (kelp roll)" },
        { name: "멸치 조림", nameEn: "Braised anchovy" },
        { name: "오다리 어묵", nameEn: "Flounder fish cake" },
        { name: "연어알", nameEn: "Salmon roe" },
        { name: "명란젓(날것/구이)", nameEn: "Spicy cod roe (raw/grilled)" },
        { name: "캔 갈치", nameEn: "Canned hairtail fish" },
        { name: "김밥(한국식)", nameEn: "Korean-style kimbap" },
        { name: "마늘토스트", nameEn: "Garlic toast" },
        { name: "오코노미야키", nameEn: "Okonomiyaki" },
        { name: "달걀말이", nameEn: "Rolled omelet" },
        { name: "쪄낸 채소", nameEn: "Steamed vegetables" },
        { name: "양배추 피클", nameEn: "Cabbage pickles" }
      ]
    },
    
    sauces: {
      name: "소스",
      nameEn: "Sauces",
      items: [
        { name: "하카타식 단장", nameEn: "Hakata-style sweet sauce" },
        { name: "도쿄식 짠장", nameEn: "Tokyo-style salty sauce" },
        { name: "고춧가루", nameEn: "Red pepper powder" },
        { name: "소금", nameEn: "Salt" },
        { name: "말고기용 단장", nameEn: "Sweet sauce for horse meat" }
      ]
    }
  }
};
