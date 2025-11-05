/**
 * SignalPilot Documentation Chatbot
 * Simple pattern-matching chatbot (no API required)
 *
 * This version uses the existing beautiful chatbot.css styling
 */

class SignalPilotChatbot {
    constructor() {
        this.isOpen = false;
        this.messageHistory = [];
        this.knowledgeBase = this.initKnowledgeBase();
        this.patterns = this.initPatterns();

        this.init();
    }

    initKnowledgeBase() {
        return {
            // Product documentation
            pentarch: `**Pentarch v1.0** is a reversal event detector that displays 5 cycle events (TD, IGN, WRN, CAP, BDN) on your chart.

📄 [Read Full Documentation](../pentarch-v10/)

**Key Features:**
• 5 distinct cycle events
• 4-layer detection system
• Non-repainting (signals final at bar close)
• Works on any timeframe
• Customizable alerts

**Signals:**
- **TD** (Touchdown) - Early reversal
- **IGN** (Ignition) - Momentum confirmation
- **WRN** (Warning) - Distribution phase
- **CAP** (Climax) - Peak conditions
- **BDN** (Breakdown) - Completion phase`,

            omnideck: `**Omnideck v1.0** is the "everything indicator" that combines 10+ detection systems in one.

📄 [Read Full Documentation](../omnideck-v10/)

**Includes:**
• Pentarch reversal signals
• NanoFlow momentum
• Regime classification bars
• Pilot line trend reference
• Fibonacci levels
• Pattern detection
• And more...

Choose which systems to display based on your needs.`,

            janus: `**Janus Atlas v1.0** displays 39 different level types across your chart.

📄 [Read Full Documentation](../janus-atlas-v10/)

**Level Categories:**
• **VWAP** - Daily, weekly, monthly, custom
• **Volume Profile** - POC, VAH, VAL
• **Session Levels** - Asia, London, NY
• **Market Structure** - BOS, CHoCH, swings
• **Classic Levels** - Pivots, highs/lows

**Best for:** Level traders, mean reversion, support/resistance`,

            augury: `**Augury Grid v1.0** is a multi-symbol screener that monitors up to 40 symbols simultaneously.

📄 [Read Full Documentation](../augury-grid-v10/)

**Features:**
• Monitor 40 symbols at once
• See which assets show signals
• Customizable watchlists
• Grid or list view
• Alert on any symbol signal

**Best for:** Multi-asset traders, finding setups across watchlists`,

            oracle: `**Volume Oracle v1.0** (formerly Minimal Flow) provides 3 volume analysis systems.

📄 [Read Full Documentation](../minimal-flow-v10/)

**Systems:**
• **Volume Flow** - Buying/selling pressure bars
• **Volume Zones** - High-volume areas
• **Position Manager** - Track entries/exits

**Best for:** Volume traders, institutional flow analysis`,

            harmonic: `**Harmonic Oscillator v1.0** is a composite momentum indicator.

📄 [Read Full Documentation](../harmonic-oscillator-v10/)

**Components:**
• NanoFlow momentum
• KFlow composite
• Enhanced RSI
• Divergence detection
• Overbought/oversold zones

**Best for:** Momentum traders, divergence trading`,

            plutus: `**Plutus Flow v1.0** is an advanced On-Balance Volume (OBV) indicator.

📄 [Read Full Documentation](../plutus-flow-v10/)

**Layers:**
• OBV calculation
• Trend ribbons (3-EMA system)
• Divergence detection
• Volume accumulation tracking

**Best for:** Volume analysts, flow confirmation`,

            quickStart: `**Quick Start (5 minutes):**

1️⃣ **Get TradingView access** (Pro+ or Premium required for alerts)
2️⃣ **Access indicators** from your purchase email link
3️⃣ **Add to chart** via Indicators menu (search "SignalPilot")
4️⃣ **See first signal** when conditions align
5️⃣ **Set alerts** for automated notifications

📄 [Full Quick Start Guide](../start-quick/)

**Need help?** Check [Prerequisites](../start-prerequisites/) first!`,

            alerts: `**Setting Up Alerts:**

**Steps:**
1. Click the **alarm clock icon** (⏰) on TradingView
2. Select your SignalPilot indicator from dropdown
3. Choose condition (e.g., "Pentarch: Reversal Detected")
4. Set **"Once Per Bar Close"** to avoid repaints
5. Configure notifications (app, email, SMS, webhook)

📄 [Detailed Alert Guide](../how-to-alerts/)

**Pro tip:** Use "Once Per Bar Close" to ensure signals don't disappear!

**Webhook support:** All indicators support webhook automation for Discord, Telegram, custom bots.`,

            webhooks: `**Webhook Setup:**

Webhooks let you send alerts to external services automatically.

**Steps:**
1. Get webhook URL from your service (Discord, Telegram, etc)
2. Create alert on TradingView
3. Paste webhook URL in "Webhook URL" field
4. Customize message payload (JSON supported)

📄 [Full Webhook Guide](../how-to-webhooks/)

**Supported Platforms:**
• Discord
• Telegram
• Make.com / Zapier
• Custom servers
• 3Commas and other trading bots

**Message formats:** Simple text, JSON, Discord embeds`,

            nonRepaint: `**Non-Repainting Explained:**

All SignalPilot indicators are **non-repainting** - signals finalize at bar close and never disappear.

**What this means:**
✅ Signals appear when bar closes (not during)
✅ Once shown, signals stay permanently
✅ Backtesting = live performance
✅ No "magic disappearing signals"

📄 [Full Non-Repaint Policy](../ref-non-repaint/)

**Technical:** Indicators use \`request.security()\` with \`lookahead=barmerge.lookahead_off\`

**Why it matters:** Many indicators repaint, making backtests worthless. Ours don't.`,

            pricing: `**SignalPilot Pricing:**

Visit **https://signalpilot.io/#pricing** for current pricing.

**Options:**
• Individual indicators
• Full suite (all 7 indicators)
• Lifetime access available

**What's included:**
✅ All indicator updates
✅ Alert functionality
✅ Discord community access
✅ Email support
✅ Non-repainting guarantee

💳 Secure checkout via LemonSqueezy`,

            support: `**Get Support:**

📧 **Email:** support@signalpilot.io
💬 **Discord:** Available to customers (link in purchase email)
📚 **Docs:** https://docs.signalpilot.io
📝 **FAQ:** [Read FAQ](../about-faq/)

**Response time:** Usually within 24 hours

📄 [Full Support Info](../about-support/)

**Before contacting:**
1. Check [Troubleshooting Guide](../ref-troubleshooting/)
2. Review [FAQ](../about-faq/)
3. Search these docs (search bar at top)`,

            troubleshooting: `**Common Issues & Solutions:**

**"Indicator not loading"**
• Check TradingView plan (need Pro+ for private indicators)
• Verify indicator access in TradingView settings
• Try removing and re-adding indicator

**"No signals appearing"**
• Signals only appear when conditions align
• Try different timeframe (1H, 4H, 1D)
• Check indicator is enabled (eye icon visible)
• Give it time - not every bar has a signal

**"Alert not firing"**
• Ensure "Once Per Bar Close" is selected
• Check alert is active (not expired)
• Verify notification settings
• Test with "Test" button in alert dialog

📄 [Full Troubleshooting Guide](../ref-troubleshooting/)`,

            bestPractices: `**Best Practices:**

**Timeframes:**
✅ Start with daily (1D), then add 4H and 1H
✅ Multiple timeframe confirmation improves accuracy

**Alert Settings:**
✅ Use "Once Per Bar Close" to avoid repaints
✅ Set reasonable expiration dates
✅ Test alerts before relying on them

**Indicator Loading:**
✅ Max 3-4 indicators per chart for performance
✅ More indicators ≠ better results

**Risk Management:**
✅ Always use stop losses
✅ Position size appropriately
✅ Not every signal needs to be traded

**Backtesting:**
✅ Review historical signals before live trading
✅ Understand signal frequency on your timeframe

📄 [Full Best Practices](../ref-best-practices/)`,

            comparison: `**Which Indicator Should I Use?**

**For reversal signals:** → **Pentarch** (5 cycle events)
**For everything:** → **Omnideck** (10+ systems in one)
**For levels:** → **Janus Atlas** (39 level types)
**For multi-symbol:** → **Augury Grid** (screener)
**For volume:** → **Volume Oracle** (flow + zones)
**For momentum:** → **Harmonic Oscillator** (composite)
**For OBV:** → **Plutus Flow** (divergences)

📄 [Full Comparison Guide](../ref-comparison/)
📄 [Suite Overview](../suite-index/)

**Most popular combo:** Pentarch + Janus Atlas

**Can I use multiple?** Yes, but max 3-4 per chart for performance.`,

            glossary: `**Common Terms:**

**Pentarch Signals:**
• **TD** (Touchdown) - Early cycle reversal
• **IGN** (Ignition) - Momentum confirmation
• **WRN** (Warning) - Distribution phase
• **CAP** (Climax) - Peak conditions
• **BDN** (Breakdown) - Completion phase

**Components:**
• **Pilot Line** - Trend reference line
• **NanoFlow** - Momentum component
• **Regime Bars** - Market phase classification

**Volume Profile:**
• **POC** - Point of Control
• **VAH** - Value Area High
• **VAL** - Value Area Low

**Market Structure:**
• **BOS** - Break of Structure
• **CHoCH** - Change of Character

📄 [Full Glossary](../ref-glossary/)`,

            workflow: `**Trading Workflow:**

**Phase 1: Bias** (What direction?)
• Check higher timeframe trend
• Identify key levels
• Assess market regime

**Phase 2: Timing** (When to enter?)
• Wait for signal (Pentarch, etc)
• Confirm with additional indicators
• Check risk/reward ratio

**Phase 3: Execution** (Take the trade)
• Enter position at signal
• Set stop loss
• Define profit targets

**Phase 4: Management** (Monitor & adjust)
• Track position
• Adjust stops as needed
• Take profits systematically

📄 [Full Workflow Guide](../ref-workflow/)`,

            help: `**I can help you with:**

📊 **Indicators:** "Tell me about Pentarch" | "How does Janus work?"
🚀 **Getting Started:** "Quick start" | "How do I set up alerts?"
🔧 **Setup:** "Webhook guide" | "Alert setup"
🎓 **Learning:** "Best practices" | "Trading workflow"
🔍 **Reference:** "Glossary" | "Compare indicators"
❓ **Support:** "Troubleshooting" | "Get support"

**Try asking:**
• "What is the Pentarch indicator?"
• "How do I set up alerts?"
• "Explain non-repainting"
• "Show me best practices"
• "Compare all indicators"
• "How do webhooks work?"

Just type your question naturally! 💬`,

            default: `I'm not sure about that specific question.

Try asking about:
📊 **Indicators:** Pentarch, Omnideck, Janus Atlas, Augury Grid, etc.
🚀 **Getting Started:** Quick start, setup, alerts
🔧 **How-To:** Alerts, webhooks, screener
📚 **Reference:** Glossary, best practices, troubleshooting

Type **"help"** to see all available topics!

💡 **Tip:** You can also use the search bar at the top of the page to search all documentation.`
        };
    }

    initPatterns() {
        return [
            // Help/Meta
            { regex: /^(help|what can you do|commands|menu)$/i, key: 'help' },

            // Products (specific patterns first)
            { regex: /(pentarch|touchdown|ignition|td|ign|wrn|cap|bdn|reversal event)/i, key: 'pentarch' },
            { regex: /(omnideck|everything indicator|all.in.one)/i, key: 'omnideck' },
            { regex: /(janus|atlas|levels|vwap|poc|pivot|session)/i, key: 'janus' },
            { regex: /(augury|grid|screener|multi.symbol|watchlist|40 symbols)/i, key: 'augury' },
            { regex: /(volume oracle|minimal flow|volume flow|volume zone)/i, key: 'oracle' },
            { regex: /(harmonic|oscillator|nanoflow|kflow|enhanced rsi)/i, key: 'harmonic' },
            { regex: /(plutus|obv|on.balance.volume)/i, key: 'plutus' },

            // Getting started
            { regex: /(quick start|get started|beginner|new|how do i start|first time)/i, key: 'quickStart' },
            { regex: /(alert|notification|how to set|alarm|how do i get notified)/i, key: 'alerts' },
            { regex: /(webhook|discord|telegram|automation|bot|3commas)/i, key: 'webhooks' },

            // Concepts
            { regex: /(non.repaint|repainting|repaint|historical|does it repaint)/i, key: 'nonRepaint' },
            { regex: /(price|pricing|cost|buy|purchase|payment|how much)/i, key: 'pricing' },
            { regex: /(support|help|contact|email)/i, key: 'support' },
            { regex: /(troubleshoot|problem|issue|not working|error|broken)/i, key: 'troubleshooting' },
            { regex: /(best practice|tip|recommend|advice|how to use)/i, key: 'bestPractices' },
            { regex: /(compare|comparison|which|difference|vs|versus|better)/i, key: 'comparison' },
            { regex: /(glossary|term|definition|what does.*mean|what is)/i, key: 'glossary' },
            { regex: /(workflow|process|how to trade|strategy|step by step)/i, key: 'workflow' },

            // Fallback
            { regex: /.*/, key: 'default' }
        ];
    }

    init() {
        this.createChatWidget();
        this.bindEvents();
        this.loadConversationHistory();
    }

    createChatWidget() {
        const chatbotHTML = `
            <div id="sp-chatbot-container" class="sp-chatbot-container sp-chatbot-closed">
                <!-- Chat Toggle Button -->
                <button id="sp-chatbot-toggle" class="sp-chatbot-toggle" aria-label="Open SignalPilot Assistant">
                    <svg class="sp-chatbot-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                    <svg class="sp-chatbot-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <!-- Chat Window -->
                <div id="sp-chatbot-window" class="sp-chatbot-window">
                    <!-- Header -->
                    <div class="sp-chatbot-header">
                        <div class="sp-chatbot-header-content">
                            <div class="sp-chatbot-avatar">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                            </div>
                            <div class="sp-chatbot-title">
                                <h3>SignalPilot Assistant</h3>
                                <p class="sp-chatbot-status">Online • Ready to help</p>
                            </div>
                        </div>
                        <div class="sp-chatbot-actions">
                            <button class="sp-chatbot-action-btn" id="sp-chatbot-clear" title="Clear conversation">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Messages Container -->
                    <div id="sp-chatbot-messages" class="sp-chatbot-messages">
                        <div class="sp-chatbot-message sp-chatbot-bot-message">
                            <div class="sp-chatbot-message-avatar">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                                </svg>
                            </div>
                            <div class="sp-chatbot-message-content">
                                <p><strong>Hi! 👋</strong> I'm your SignalPilot Documentation Assistant.</p>
                                <p>I can help you with indicators, setup, alerts, and anything in the docs!</p>
                                <p><em>Try: "What is Pentarch?" or "How do I set up alerts?"</em></p>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="sp-chatbot-quick-actions" id="sp-chatbot-quick-actions">
                        <button class="sp-chatbot-quick-btn" data-query="What is Pentarch?">
                            📊 Pentarch
                        </button>
                        <button class="sp-chatbot-quick-btn" data-query="How do I set up alerts?">
                            🔔 Alerts
                        </button>
                        <button class="sp-chatbot-quick-btn" data-query="Quick start guide">
                            🚀 Quick Start
                        </button>
                        <button class="sp-chatbot-quick-btn" data-query="Compare indicators">
                            📈 Compare
                        </button>
                    </div>

                    <!-- Input Area -->
                    <div class="sp-chatbot-input-container">
                        <div class="sp-chatbot-input-wrapper">
                            <textarea
                                id="sp-chatbot-input"
                                class="sp-chatbot-input"
                                placeholder="Ask about SignalPilot..."
                                rows="1"
                                aria-label="Message input"
                            ></textarea>
                            <button id="sp-chatbot-send" class="sp-chatbot-send-btn" aria-label="Send message">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="sp-chatbot-footer-text">
                            Powered by pattern matching • No AI API required
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);

        this.elements = {
            container: document.getElementById('sp-chatbot-container'),
            toggle: document.getElementById('sp-chatbot-toggle'),
            window: document.getElementById('sp-chatbot-window'),
            messages: document.getElementById('sp-chatbot-messages'),
            input: document.getElementById('sp-chatbot-input'),
            sendBtn: document.getElementById('sp-chatbot-send'),
            clearBtn: document.getElementById('sp-chatbot-clear'),
            quickActions: document.getElementById('sp-chatbot-quick-actions')
        };
    }

    bindEvents() {
        // Toggle chat window
        this.elements.toggle.addEventListener('click', () => this.toggleChat());

        // Send message
        this.elements.sendBtn.addEventListener('click', () => this.sendMessage());

        // Enter to send (Shift+Enter for new line)
        this.elements.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Auto-resize textarea
        this.elements.input.addEventListener('input', (e) => {
            e.target.style.height = 'auto';
            e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
        });

        // Quick action buttons
        document.querySelectorAll('.sp-chatbot-quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const query = e.currentTarget.dataset.query;
                this.elements.input.value = query;
                this.sendMessage();
            });
        });

        // Clear conversation
        this.elements.clearBtn.addEventListener('click', () => this.clearConversation());
    }

    toggleChat() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.elements.container.classList.remove('sp-chatbot-closed');
            this.elements.container.classList.add('sp-chatbot-open');
            this.elements.input.focus();
        } else {
            this.elements.container.classList.remove('sp-chatbot-open');
            this.elements.container.classList.add('sp-chatbot-closed');
        }
    }

    async sendMessage() {
        const userMessage = this.elements.input.value.trim();

        if (!userMessage) return;

        // Clear input
        this.elements.input.value = '';
        this.elements.input.style.height = 'auto';

        // Hide quick actions after first message
        if (this.elements.quickActions) {
            this.elements.quickActions.style.display = 'none';
        }

        // Add user message to chat
        this.addMessage(userMessage, 'user');

        // Add to history
        this.messageHistory.push({ role: 'user', content: userMessage });

        // Show typing indicator
        const typingId = this.showTypingIndicator();

        // Simulate typing delay (800ms)
        setTimeout(() => {
            this.removeTypingIndicator(typingId);

            // Get bot response
            const response = this.getBotResponse(userMessage);

            // Add bot response
            this.addMessage(response, 'bot');

            // Add to history
            this.messageHistory.push({ role: 'assistant', content: response });

            // Save to localStorage
            this.saveConversationHistory();
        }, 800);
    }

    getBotResponse(userMessage) {
        const msg = userMessage.toLowerCase().trim();

        // Find matching pattern
        for (const pattern of this.patterns) {
            if (pattern.regex.test(msg)) {
                return this.knowledgeBase[pattern.key];
            }
        }

        return this.knowledgeBase.default;
    }

    addMessage(content, sender) {
        const messageHTML = `
            <div class="sp-chatbot-message sp-chatbot-${sender}-message">
                ${sender === 'bot' ? `
                    <div class="sp-chatbot-message-avatar">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                        </svg>
                    </div>
                ` : ''}
                <div class="sp-chatbot-message-content">
                    ${this.formatMessage(content)}
                </div>
            </div>
        `;

        this.elements.messages.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    formatMessage(content) {
        // Convert markdown-like formatting to HTML
        let formatted = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');

        // Convert [text](url) to links
        formatted = formatted.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a href="$2" target="_blank" rel="noopener">$1</a>'
        );

        // Convert bare URLs to links
        formatted = formatted.replace(
            /(https?:\/\/[^\s<]+)/g,
            '<a href="$1" target="_blank" rel="noopener">$1</a>'
        );

        return `<p>${formatted}</p>`;
    }

    showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const typingHTML = `
            <div id="${id}" class="sp-chatbot-message sp-chatbot-bot-message sp-chatbot-typing">
                <div class="sp-chatbot-message-avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                </div>
                <div class="sp-chatbot-message-content">
                    <div class="sp-chatbot-typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        this.elements.messages.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
        return id;
    }

    removeTypingIndicator(id) {
        const indicator = document.getElementById(id);
        if (indicator) {
            indicator.remove();
        }
    }

    scrollToBottom() {
        this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
    }

    clearConversation() {
        if (confirm('Clear conversation history?')) {
            this.messageHistory = [];
            this.elements.messages.innerHTML = '';
            this.elements.quickActions.style.display = 'flex';
            localStorage.removeItem('sp-chatbot-history');

            // Re-add welcome message
            this.addMessage(
                `<strong>Hi! 👋</strong> I'm your SignalPilot Documentation Assistant.<br><br>I can help you with indicators, setup, alerts, and anything in the docs!<br><br><em>Try: "What is Pentarch?" or "How do I set up alerts?"</em>`,
                'bot'
            );
        }
    }

    saveConversationHistory() {
        try {
            localStorage.setItem('sp-chatbot-history', JSON.stringify(this.messageHistory.slice(-20)));
        } catch (e) {
            console.error('Failed to save conversation history:', e);
        }
    }

    loadConversationHistory() {
        try {
            const saved = localStorage.getItem('sp-chatbot-history');
            if (saved) {
                this.messageHistory = JSON.parse(saved);
            }
        } catch (e) {
            console.error('Failed to load conversation history:', e);
        }
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.signalpilotChatbot = new SignalPilotChatbot();
    });
} else {
    window.signalpilotChatbot = new SignalPilotChatbot();
}
