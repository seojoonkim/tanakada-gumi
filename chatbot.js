class TanakaBot {
    constructor() {
        this.responses = {
            greeting: [
                "안녕하세요! TANAKADA-GUMI에 오신 것을 환영합니다. 🍣",
                "어서오세요! 타나카다구미입니다. 무엇을 도와드릴까요?",
                "반갑습니다! 오늘 어떤 메뉴가 궁금하신가요?"
            ],
            
            course: {
                question: "코스 메뉴에 대해 알려주세요",
                answer: "디너 코스(¥22,800)는 계절 모둠 사시미, 특선 요리 2종, 계절 튀김, 사가 와규 안심 구이, 계절 생선 요리, 밥 & 미소 soup, 디저트로 구성되어 있습니다. 🍽️"
            },
            
            wagyu: {
                question: "사가 와규 메뉴는 뭐가 있나요?",
                answer: "사가 와규 메뉴는 안심 구이, 혀 구이, 와규 카츠가 있습니다. 최고급 일본산 와규로 준비해드립니다. 🥩"
            },
            
            donburi: {
                question: "돈부리 추천해주세요",
                answer: "인기 돈부리는 젯소 돈(대뱃살, 연어알, 성게알), 우니 돈(성게알), 타나카다 돈(모둠 사시미)입니다. S/M/L 사이즈로 선택 가능해요! 🍚"
            },
            
            price: {
                question: "가격이 어떻게 되나요?",
                answer: "평균 예산은 ¥25,000~30,000입니다. 세금 10% + 봉사료 10% 별도이며, 오또시(전채) ¥1,000는 필수입니다. 음료는 최소 1잔 주문해주세요 (미주문 시 물값 ¥500). 💰"
            },
            
            recommend: {
                question: "오늘 뭐 먹을까요?",
                answers: [
                    "신선한 해산물을 좋아하신다면 젯소 돈(대뱃살, 연어알, 성게알)을 추천드려요!",
                    "고기가 드시고 싶다면 사가 와규 안심 구이는 어떠세요?",
                    "특별한 경험을 원하신다면 디너 코스(¥22,800)를 추천드립니다!",
                    "전통 하카타 요리인 미즈타키(백탕)도 인기 메뉴입니다!"
                ]
            },
            
            hotpot: {
                question: "전골 메뉴는 뭐가 있나요?",
                answer: "미즈타키(하카타식 백탕 - 닭고기와 채소, 폰즈소스)와 네기마(대뱃살과 흰파 전골)가 있습니다. 둘 다 일본 전통 요리예요! 🍲"
            },
            
            sashimi: {
                question: "사시미는 어떤 게 있어요?",
                answer: "모둠 사시미, 참치 대뱃살, 참치 붉은살, 광어/오징어가 있고, 구이로도 드실 수 있어요. 성게알과 쪄낸 게도 특별 추천 메뉴입니다! 🐟"
            },
            
            special: {
                question: "셰프 특선은 뭐가 있나요?",
                answer: "참치 뱃살 튀김, 버터 전복구이, 캐비어, 햄 커틀렛 등이 셰프 특선 메뉴입니다. 모두 저희만의 특별한 조리법으로 준비해드려요! ⭐"
            }
        };
        
        this.keywords = {
            greeting: ['안녕', '안녕하세요', 'hi', 'hello', '처음', '반가워'],
            course: ['코스', 'course', '디너', 'dinner', '세트'],
            wagyu: ['와규', 'wagyu', '사가', '소고기', 'beef', '고기'],
            donburi: ['돈', 'don', '돈부리', '밥', 'rice'],
            price: ['가격', '얼마', 'price', '비용', '돈', '예산'],
            recommend: ['추천', '뭐', '무엇', 'recommend', '먹을까', '좋을까'],
            hotpot: ['전골', '미즈타키', '네기마', 'hotpot', 'hot pot', '백탕'],
            sashimi: ['사시미', 'sashimi', '회', '생선회'],
            special: ['특선', '셰프', 'chef', 'special', '추천', '인기']
        };
    }
    
    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // 인사말 체크
        if (this.matchKeywords(lowerMessage, 'greeting')) {
            return this.getRandomResponse(this.responses.greeting);
        }
        
        // 각 카테고리별 키워드 매칭
        for (const [category, keywords] of Object.entries(this.keywords)) {
            if (category === 'greeting') continue;
            
            if (this.matchKeywords(lowerMessage, category)) {
                if (category === 'recommend') {
                    return this.getRandomResponse(this.responses.recommend.answers);
                }
                return this.responses[category].answer;
            }
        }
        
        // 기본 응답
        return this.getDefaultResponse();
    }
    
    matchKeywords(message, category) {
        const keywords = this.keywords[category];
        return keywords.some(keyword => message.includes(keyword));
    }
    
    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    getDefaultResponse() {
        const defaults = [
            "죄송해요, 잘 이해하지 못했습니다. 다시 한 번 물어보시거나 구체적으로 말씀해주세요.",
            "메뉴, 가격, 추천 요리에 대해 물어보시면 도와드릴 수 있어요!",
            "코스 메뉴, 사가 와규, 돈부리, 전골 등에 대해 궁금한 점이 있으시면 언제든 말씀해주세요.",
            "더 구체적으로 무엇이 궁금하신지 말씀해주시면 자세히 안내해드리겠습니다."
        ];
        return this.getRandomResponse(defaults);
    }
    
    getSuggestions() {
        return [
            "디너 코스는 어떤 구성인가요?",
            "사가 와규 메뉴 추천해주세요",
            "돈부리 중에 인기 메뉴는?",
            "오늘 뭐 먹을까요?",
            "전골 메뉴는 뭐가 있나요?",
            "가격이 어떻게 되나요?"
        ];
    }
}

// 챗봇 UI 관리
class ChatbotUI {
    constructor() {
        this.bot = new TanakaBot();
        this.chatContainer = null;
        this.messageInput = null;
        this.init();
    }
    
    init() {
        this.createChatInterface();
        this.addWelcomeMessage();
        this.showSuggestions();
    }
    
    createChatInterface() {
        const container = document.getElementById('chat-container');
        if (!container) return;
        
        container.innerHTML = `
            <div id="chat-header">
                <h3>🍣 TANAKADA-GUMI 메뉴 안내</h3>
                <p>메뉴에 대해 궁금한 점을 물어보세요!</p>
            </div>
            <div id="chat-messages"></div>
            <div id="chat-suggestions"></div>
            <div id="chat-input-container">
                <input type="text" id="chat-input" placeholder="메뉴에 대해 물어보세요..." />
                <button id="send-button">전송</button>
            </div>
        `;
        
        this.chatContainer = document.getElementById('chat-messages');
        this.messageInput = document.getElementById('chat-input');
        this.suggestionsContainer = document.getElementById('chat-suggestions');
        
        this.bindEvents();
    }
    
    bindEvents() {
        const sendButton = document.getElementById('send-button');
        sendButton.addEventListener('click', () => this.sendMessage());
        
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }
    
    addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        messageDiv.innerHTML = `
            <div class="message-content">${message}</div>
            <div class="message-time">${new Date().toLocaleTimeString('ko-KR', {hour: '2-digit', minute: '2-digit'})}</div>
        `;
        this.chatContainer.appendChild(messageDiv);
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
    
    addWelcomeMessage() {
        this.addMessage("안녕하세요! TANAKADA-GUMI 메뉴 안내 봇입니다. 🍣<br><br>메뉴, 가격, 추천 요리 등 궁금한 점을 자유롭게 물어보세요!");
    }
    
    showSuggestions() {
        const suggestions = this.bot.getSuggestions();
        this.suggestionsContainer.innerHTML = '<div class="suggestions-title">자주 묻는 질문:</div>';
        
        suggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.className = 'suggestion-button';
            button.textContent = suggestion;
            button.addEventListener('click', () => {
                this.messageInput.value = suggestion;
                this.sendMessage();
            });
            this.suggestionsContainer.appendChild(button);
        });
    }
    
    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        this.addMessage(message, true);
        this.messageInput.value = '';
        
        // 봇 응답 (약간의 지연 효과)
        setTimeout(() => {
            const response = this.bot.processMessage(message);
            this.addMessage(response);
        }, 500);
        
        // 제안 숨기기
        if (this.suggestionsContainer.style.display !== 'none') {
            this.suggestionsContainer.style.display = 'none';
        }
    }
}

// 페이지 로드 시 챗봇 초기화
document.addEventListener('DOMContentLoaded', function() {
    new ChatbotUI();
});
