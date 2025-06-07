// AI Chat Implementation
class AIChat {
    constructor() {
        this.chatHistory = [];
        this.isProcessing = false;
        this.container = document.querySelector('.chat-interface');
        this.presetResponses = {
            "Oracle Aconex": {
                title: "Oracle Aconex Document Module",
                description: "Led the modernization of a legacy construction document management system:",
                points: [
                    "Implemented bulk document upload with background processing",
                    "Added real-time progress tracking",
                    "Reduced system errors by 40%",
                    "Improved upload times by 50%",
                    "Increased user engagement by 25% among 5M+ users"
                ]
            },
            "Co.dx Platform": {
                title: "TheMathCompany Co.dx AI Platform",
                description: "Drove product-market fit for B2B AI analytics platform:",
                points: [
                    "Led feature prioritization through competitive analysis",
                    "Launched POCs with dynamic analytical dashboards",
                    "Implemented drag-and-drop data workflows",
                    "Reduced time-to-market by 30%",
                    "Significant improvement in lead conversion rates"
                ]
            },
            "Unified Wallet": {
                title: "Scientific Games Unified Wallet",
                description: "Developed secure mobile-first payment solution:",
                points: [
                    "Designed intuitive user flows",
                    "Integrated secure payment APIs",
                    "Implemented end-to-end encryption",
                    "Achieved 30% faster transactions",
                    "Increased on-floor spend by 12%"
                ]
            }
        };
        this.initializeChat();
    }

    initializeChat() {
        if (!this.container) return;
        
        // Add welcome message
        this.addMessage({
            type: 'ai',
            content: "Hello! I'm your AI assistant. Feel free to ask me about any of Prathyusha's projects or experience.",
            isWelcome: true
        });

        // Initialize chat input
        this.createChatInput();
        
        // Initialize suggestion buttons
        this.initializeSuggestions();
    }

    createChatInput() {
        const inputContainer = document.createElement('div');
        inputContainer.className = 'chat-input-container';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Ask me anything...';
        input.className = 'chat-input';
        
        const button = document.createElement('button');
        button.textContent = 'Send';
        button.className = 'chat-send-btn';
        
        inputContainer.appendChild(input);
        inputContainer.appendChild(button);
        
        this.container.appendChild(inputContainer);
        
        // Event listeners
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !this.isProcessing) {
                this.handleUserInput(input.value);
                input.value = '';
            }
        });
        
        button.addEventListener('click', () => {
            if (!this.isProcessing) {
                this.handleUserInput(input.value);
                input.value = '';
            }
        });
    }

    initializeSuggestions() {
        const suggestions = [
            "Tell me about Oracle Aconex",
            "Explain the Co.dx Platform",
            "How does the Unified Wallet work?"
        ];
        
        const container = document.createElement('div');
        container.className = 'chat-suggestions';
        
        suggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.className = 'suggestion-btn';
            button.textContent = suggestion;
            button.addEventListener('click', () => {
                if (!this.isProcessing) {
                    this.handleUserInput(suggestion);
                }
            });
            container.appendChild(button);
        });
        
        this.container.appendChild(container);
    }

    handleUserInput(message) {
        if (!message.trim()) return;
        
        this.isProcessing = true;
        this.addMessage({ type: 'user', content: message });
        
        // Process the message and generate response
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage({ type: 'ai', content: response });
            this.isProcessing = false;
        }, 1000);
    }

    generateResponse(message) {
        // Check for project-specific queries
        for (const [key, data] of Object.entries(this.presetResponses)) {
            if (message.toLowerCase().includes(key.toLowerCase())) {
                return this.formatProjectResponse(data);
            }
        }
        
        // Default response
        return "I'd be happy to tell you about any specific project or experience. You can ask about Oracle Aconex, Co.dx Platform, or the Unified Wallet implementation.";
    }

    formatProjectResponse(data) {
        return `
            ${data.title}
            
            ${data.description}
            
            Key Achievements:
            ${data.points.map(point => `• ${point}`).join('\n')}
        `;
    }

    addMessage({ type, content, isWelcome = false }) {
        const messageEl = document.createElement('div');
        messageEl.className = `chat-message ${type}-message`;
        messageEl.textContent = content;
        
        if (isWelcome) {
            messageEl.classList.add('welcome-message');
        }
        
        this.container.appendChild(messageEl);
        messageEl.scrollIntoView({ behavior: 'smooth' });
        
        this.chatHistory.push({ type, content });
    }
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.aiChat = new AIChat();
});
