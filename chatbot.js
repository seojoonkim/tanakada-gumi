// TANAKADA-GUMI Chatbot — Korean / English / Japanese

// 언어 감지 (URL ?lang=ko|en|ja, 기본 ko)
function detectLang() {
    const params = new URLSearchParams(window.location.search);
    const l = params.get("lang");
    if (l === "en" || l === "ja" || l === "ko") return l;
    return "ko";
}
const LANG = detectLang();

// 다국어 응답 사전
const I18N = {
    ko: {
        header: "🍣 TANAKADA-GUMI 메뉴 안내",
        sub: "메뉴에 대해 궁금한 점을 물어보세요!",
        placeholder: "메뉴에 대해 물어보세요...",
        send: "전송",
        suggestionsTitle: "자주 묻는 질문:",
        welcome: "안녕하세요! TANAKADA-GUMI 메뉴 안내 봇입니다. 🍣<br><br>메뉴, 가격, 추천 요리 등 궁금한 점을 자유롭게 물어보세요!",
        greeting: ["안녕하세요! TANAKADA-GUMI에 오신 것을 환영합니다. 🍣", "어서오세요! 타나카다구미입니다. 무엇을 도와드릴까요?", "반갑습니다! 오늘 어떤 메뉴가 궁금하신가요?"],
        course: "디너 코스(¥22,800)는 계절 모둠 사시미, 특선 요리 2종, 계절 튀김, 사가 와규 안심 구이, 계절 생선 요리, 밥 & 미소 soup, 디저트로 구성되어 있습니다. 🍽️",
        wagyu: "사가 와규 메뉴는 안심 구이, 혀 구이, 와규 카츠가 있습니다. 최고급 일본산 와규로 준비해드립니다. 🥩",
        donburi: "인기 돈부리는 젯소 돈(대뱃살, 연어알, 성게알), 우니 돈(성게알), 타나카다 돈(모둠 사시미)입니다. S/M/L 사이즈로 선택 가능해요! 🍚",
        price: "평균 예산은 ¥25,000~30,000입니다. 세금 10% + 봉사료 10% 별도이며, 오또시(전채) ¥1,000는 필수입니다. 음료는 최소 1잔 주문해주세요 (미주문 시 물값 ¥500). 💰",
        hotpot: "미즈타키(하카타식 백탕 - 닭고기와 채소, 폰즈소스)와 네기마(대뱃살과 흰파 전골)가 있습니다. 둘 다 일본 전통 요리예요! 🍲",
        sashimi: "모둠 사시미, 참치 대뱃살, 참치 붉은살, 광어/오징어가 있고, 구이로도 드실 수 있어요. 성게알과 쪄낸 게도 특별 추천 메뉴입니다! 🐟",
        special: "참치 뱃살 튀김, 버터 전복구이, 캐비어, 햄 커틀렛 등이 셰프 특선 메뉴입니다. ⭐",
        recommend: ["신선한 해산물을 좋아하신다면 젯소 돈(대뱃살, 연어알, 성게알)을 추천드려요!", "고기가 드시고 싶다면 사가 와규 안심 구이는 어떠세요?", "특별한 경험을 원하신다면 디너 코스(¥22,800)를 추천드립니다!", "전통 하카타 요리인 미즈타키도 인기 메뉴입니다!"],
        defaults: ["죄송해요, 잘 이해하지 못했습니다. 다시 한 번 물어보시거나 구체적으로 말씀해주세요.", "메뉴, 가격, 추천 요리에 대해 물어보시면 도와드릴 수 있어요!", "코스 메뉴, 사가 와규, 돈부리, 전골 등에 대해 궁금한 점이 있으시면 언제든 말씀해주세요."],
        suggestions: ["디너 코스는 어떤 구성인가요?", "사가 와규 메뉴 추천해주세요", "돈부리 중에 인기 메뉴는?", "오늘 뭐 먹을까요?", "전골 메뉴는 뭐가 있나요?", "가격이 어떻게 되나요?"]
    },
    en: {
        header: "🍣 TANAKADA-GUMI Menu Guide",
        sub: "Ask anything about our menu!",
        placeholder: "Ask about the menu...",
        send: "Send",
        suggestionsTitle: "Frequently Asked:",
        welcome: "Hello! Welcome to TANAKADA-GUMI menu bot. 🍣<br><br>Feel free to ask about menu, prices, or recommendations!",
        greeting: ["Welcome to TANAKADA-GUMI! 🍣", "Hello! How can I help you today?", "Welcome! What menu are you curious about?"],
        course: "Our Dinner Course (¥22,800) includes: Seasonal Assorted Sashimi, Today's Special Dish ×2, Seasonal Fried Food, Grilled Saga Beef Tenderloin, Seasonal Fish Dish, Rice & Miso Soup, Dessert. 🍽️",
        wagyu: "Saga Wagyu menu: Grilled Tenderloin, Grilled Tongue, Wagyu Cutlet. Top-grade Japanese wagyu. 🥩",
        donburi: "Popular donburi: Zetsu-Don (fatty tuna, salmon roe, sea urchin), Uni-Don (sea urchin), Tanakada-Don (assorted sashimi). Available in S/M/L! 🍚",
        price: "Average budget: ¥25,000~30,000. 10% tax + 10% service charge added. Otoshi (appetizer) ¥1,000 is required. Min 1 drink order (¥500 water fee otherwise). 💰",
        hotpot: "Mizutaki (Hakata-style white broth with chicken & vegetables, ponzu sauce) and Negima (fatty tuna & white onion hot pot). Both traditional Japanese dishes! 🍲",
        sashimi: "Assorted sashimi, fatty tuna, lean tuna, flounder/squid — also available grilled. Sea urchin and steamed crab are special recommendations! 🐟",
        special: "Chef's specials: Deep fried fatty tuna, butter sautéed abalone, caviar, ham cutlet, and more. ⭐",
        recommend: ["For seafood lovers, try Zetsu-Don (fatty tuna, salmon roe, sea urchin)!", "Craving meat? Grilled Saga Wagyu Tenderloin is excellent.", "For a special experience, try our Dinner Course (¥22,800)!", "Mizutaki, traditional Hakata cuisine, is also popular!"],
        defaults: ["Sorry, I didn't quite understand. Could you rephrase or be more specific?", "I can help with menu, prices, or recommendations!", "Feel free to ask about Course, Saga Wagyu, Donburi, Hot Pot, etc."],
        suggestions: ["What's in the Dinner Course?", "Recommend Saga Wagyu menu", "Popular Donburi?", "What should I eat today?", "What hot pots do you have?", "How much does it cost?"]
    },
    ja: {
        header: "🍣 TANAKADA-GUMI メニューご案内",
        sub: "メニューについてお気軽にお尋ねください!",
        placeholder: "メニューについて質問してください...",
        send: "送信",
        suggestionsTitle: "よくあるご質問:",
        welcome: "こんにちは!TANAKADA-GUMIメニュー案内ボットです。🍣<br><br>メニュー、価格、おすすめ料理など、お気軽にお尋ねください!",
        greeting: ["TANAKADA-GUMIへようこそ! 🍣", "いらっしゃいませ!何かお手伝いできることはありますか?", "ようこそ!本日はどのメニューが気になりますか?"],
        course: "ディナーコース(¥22,800)は、季節のお造り盛り合わせ、本日の特選料理×2、季節の揚げ物、佐賀牛ヒレ炭火焼き、季節の魚料理、ご飯&味噌汁、デザートです。🍽️",
        wagyu: "佐賀牛メニュー:ヒレ炭火焼き、牛タン炭火焼き、牛カツ。最高級和牛をご用意しています。🥩",
        donburi: "人気の丼:贅沢丼(大トロ・いくら・うに)、うに丼、タナカダ丼(お造り盛り合わせ)。S/M/Lサイズからお選びいただけます!🍚",
        price: "平均予算は¥25,000~30,000です。税10% + サービス料10%別途、お通し¥1,000必須、お飲み物1杯以上(未注文の場合お水代¥500)です。💰",
        hotpot: "水炊き(博多風白湯鍋・鶏肉と野菜、ポン酢)とねぎま(大トロと白ねぎの鍋)。どちらも伝統日本料理です!🍲",
        sashimi: "お造り盛り合わせ、大トロ、赤身、ヒラメ/イカがあり、炙りでもお召し上がりいただけます。うにと蒸し蟹も特別おすすめです!🐟",
        special: "シェフのおすすめ:本マグロ大トロのカツ、アワビのバターソテー、キャビア、ハムカツなど。⭐",
        recommend: ["新鮮な海鮮がお好きでしたら、贅沢丼(大トロ・いくら・うに)がおすすめです!", "お肉なら佐賀牛ヒレ炭火焼きはいかがでしょう?", "特別なご体験にはディナーコース(¥22,800)を!", "博多伝統料理の水炊きも人気です!"],
        defaults: ["申し訳ありません、よく理解できませんでした。もう一度お尋ねいただけますか?", "メニュー、価格、おすすめ料理についてお手伝いできます!", "コース、佐賀牛、丼、鍋など、いつでもお尋ねください。"],
        suggestions: ["ディナーコースの内容は?", "佐賀牛のおすすめは?", "人気の丼は?", "今日は何を食べる?", "鍋メニューは?", "予算はどのくらい?"]
    }
};

// 키워드 (3개 언어 통합)
const KEYWORDS = {
    greeting: ["안녕", "hi", "hello", "처음", "반가", "ようこそ", "こんにちは", "はじめ"],
    course: ["코스", "course", "디너", "dinner", "세트", "コース", "ディナー"],
    wagyu: ["와규", "wagyu", "사가", "소고기", "beef", "고기", "佐賀", "牛", "牛肉"],
    donburi: ["돈부리", "donburi", "丼", "どんぶり"],
    price: ["가격", "얼마", "price", "비용", "예산", "cost", "budget", "値段", "価格", "予算"],
    recommend: ["추천", "뭐 먹", "무엇", "recommend", "best", "popular", "おすすめ", "人気"],
    hotpot: ["전골", "미즈타키", "네기마", "hotpot", "hot pot", "백탕", "鍋", "水炊き", "ねぎま"],
    sashimi: ["사시미", "sashimi", "회", "생선회", "刺身", "お造り"],
    special: ["특선", "셰프", "chef", "special", "シェフ", "特選"]
};

class TanakaBot {
    constructor() { this.t = I18N[LANG]; }
    processMessage(msg) {
        const m = msg.toLowerCase();
        if (this._match(m, "greeting")) return this._rand(this.t.greeting);
        for (const cat of Object.keys(KEYWORDS)) {
            if (cat === "greeting") continue;
            if (this._match(m, cat)) {
                if (cat === "recommend") return this._rand(this.t.recommend);
                return this.t[cat];
            }
        }
        return this._rand(this.t.defaults);
    }
    _match(m, cat) { return KEYWORDS[cat].some(k => m.includes(k.toLowerCase())); }
    _rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    getSuggestions() { return this.t.suggestions; }
    getTexts() { return this.t; }
}

class ChatbotUI {
    constructor() {
        this.bot = new TanakaBot();
        this.t = this.bot.getTexts();
        this.init();
    }
    init() {
        this._build();
        this._welcome();
        this._showSuggestions();
    }
    _build() {
        const c = document.getElementById("chat-container");
        if (!c) return;
        c.innerHTML = `
            <div id="chat-header">
                <h3>${this.t.header}</h3>
                <p>${this.t.sub}</p>
            </div>
            <div id="chat-messages"></div>
            <div id="chat-suggestions"></div>
            <div id="chat-input-container">
                <input type="text" id="chat-input" placeholder="${this.t.placeholder}" />
                <button id="send-button">${this.t.send}</button>
            </div>`;
        this.messagesEl = document.getElementById("chat-messages");
        this.inputEl = document.getElementById("chat-input");
        this.sugEl = document.getElementById("chat-suggestions");
        document.getElementById("send-button").addEventListener("click", () => this._send());
        this.inputEl.addEventListener("keypress", e => { if (e.key === "Enter") this._send(); });
    }
    _add(msg, isUser=false) {
        const d = document.createElement("div");
        d.className = `chat-message ${isUser ? "user" : "bot"}`;
        const locale = LANG === "ko" ? "ko-KR" : (LANG === "ja" ? "ja-JP" : "en-US");
        d.innerHTML = `<div class="message-content">${msg}</div><div class="message-time">${new Date().toLocaleTimeString(locale, {hour: "2-digit", minute: "2-digit"})}</div>`;
        this.messagesEl.appendChild(d);
        this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
    }
    _welcome() { this._add(this.t.welcome); }
    _showSuggestions() {
        this.sugEl.innerHTML = `<div class="suggestions-title">${this.t.suggestionsTitle}</div>`;
        this.bot.getSuggestions().forEach(s => {
            const b = document.createElement("button");
            b.className = "suggestion-button";
            b.textContent = s;
            b.addEventListener("click", () => { this.inputEl.value = s; this._send(); });
            this.sugEl.appendChild(b);
        });
    }
    _send() {
        const m = this.inputEl.value.trim();
        if (!m) return;
        this._add(m, true);
        this.inputEl.value = "";
        setTimeout(() => this._add(this.bot.processMessage(m)), 500);
        if (this.sugEl.style.display !== "none") this.sugEl.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => new ChatbotUI());
