/**
 * SignalPilot Documentation Chatbot
 * An AI-powered assistant that knows everything about SignalPilot docs
 */

class SignalPilotChatbot {
    constructor(options = {}) {
        this.config = {
            apiProvider: options.apiProvider || 'openai', // 'openai' or 'anthropic'
            apiKey: options.apiKey || '', // User can set via UI or config
            apiEndpoint: options.apiEndpoint || null, // Custom backend endpoint
            maxTokens: options.maxTokens || 1000,
            temperature: options.temperature || 0.7,
            model: options.model || 'gpt-4',
            debug: options.debug || false
        };

        this.isOpen = false;
        this.messageHistory = [];
        this.searchIndex = null;

        this.init();
    }

    async init() {
        // Load search index for context retrieval
        await this.loadSearchIndex();

        // Create chat widget UI
        this.createChatWidget();

        // Bind events
        this.bindEvents();

        // Load previous conversation from localStorage
        this.loadConversationHistory();

        if (this.config.debug) {
            console.log('SignalPilot Chatbot initialized', this.config);
        }
    }

    async loadSearchIndex() {
        try {
            const response = await fetch('/search/search_index.json');
            this.searchIndex = await response.json();
            if (this.config.debug) {
                console.log('Search index loaded:', this.searchIndex);
            }
        } catch (error) {
            console.error('Failed to load search index:', error);
        }
    }

    createChatWidget() {
        // Create chatbot container
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
                    <span class="sp-chatbot-badge" id="sp-chatbot-badge" style="display: none;">1</span>
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
                                <p class="sp-chatbot-status">Online</p>
                            </div>
                        </div>
                        <div class="sp-chatbot-actions">
                            <button class="sp-chatbot-action-btn" id="sp-chatbot-clear" title="Clear conversation">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                                </svg>
                            </button>
                            <button class="sp-chatbot-action-btn" id="sp-chatbot-settings" title="Settings">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="3"/>
                                    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m7.08 7.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m7.08-7.08l4.24-4.24"/>
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
                                <p>Hi! I'm your SignalPilot Documentation Assistant. I know everything about the SignalPilot suite, indicators, and how to use them.</p>
                                <p>Ask me anything like:</p>
                                <ul>
                                    <li>"How do I set up alerts?"</li>
                                    <li>"What is the Pentarch indicator?"</li>
                                    <li>"How do non-repainting indicators work?"</li>
                                    <li>"What are the best practices?"</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="sp-chatbot-quick-actions" id="sp-chatbot-quick-actions">
                        <button class="sp-chatbot-quick-btn" data-query="How do I get started with SignalPilot?">
                            🚀 Getting Started
                        </button>
                        <button class="sp-chatbot-quick-btn" data-query="What indicators are available?">
                            📊 Available Indicators
                        </button>
                        <button class="sp-chatbot-quick-btn" data-query="How do I set up alerts?">
                            🔔 Setting Up Alerts
                        </button>
                        <button class="sp-chatbot-quick-btn" data-query="What are best practices?">
                            ✨ Best Practices
                        </button>
                    </div>

                    <!-- Input Area -->
                    <div class="sp-chatbot-input-container">
                        <div class="sp-chatbot-input-wrapper">
                            <textarea
                                id="sp-chatbot-input"
                                class="sp-chatbot-input"
                                placeholder="Ask about SignalPilot documentation..."
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
                            Powered by AI • <span id="sp-chatbot-provider">OpenAI</span>
                        </div>
                    </div>

                    <!-- Settings Panel -->
                    <div id="sp-chatbot-settings-panel" class="sp-chatbot-settings-panel" style="display: none;">
                        <div class="sp-chatbot-settings-header">
                            <h4>Chatbot Settings</h4>
                            <button class="sp-chatbot-close-settings">×</button>
                        </div>
                        <div class="sp-chatbot-settings-content">
                            <div class="sp-chatbot-setting-group">
                                <label for="sp-chatbot-api-provider">AI Provider</label>
                                <select id="sp-chatbot-api-provider">
                                    <option value="openai">OpenAI (GPT-4)</option>
                                    <option value="anthropic">Anthropic (Claude)</option>
                                    <option value="custom">Custom Backend</option>
                                </select>
                            </div>
                            <div class="sp-chatbot-setting-group">
                                <label for="sp-chatbot-api-key">API Key</label>
                                <input type="password" id="sp-chatbot-api-key" placeholder="sk-..." />
                                <small>Your API key is stored locally and never sent to our servers</small>
                            </div>
                            <div class="sp-chatbot-setting-group">
                                <label for="sp-chatbot-custom-endpoint">Custom Endpoint (optional)</label>
                                <input type="url" id="sp-chatbot-custom-endpoint" placeholder="https://api.example.com/chat" />
                            </div>
                            <button class="sp-chatbot-save-settings">Save Settings</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Inject into page
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);

        // Get references to elements
        this.elements = {
            container: document.getElementById('sp-chatbot-container'),
            toggle: document.getElementById('sp-chatbot-toggle'),
            window: document.getElementById('sp-chatbot-window'),
            messages: document.getElementById('sp-chatbot-messages'),
            input: document.getElementById('sp-chatbot-input'),
            sendBtn: document.getElementById('sp-chatbot-send'),
            clearBtn: document.getElementById('sp-chatbot-clear'),
            settingsBtn: document.getElementById('sp-chatbot-settings'),
            settingsPanel: document.getElementById('sp-chatbot-settings-panel'),
            quickActions: document.getElementById('sp-chatbot-quick-actions'),
            badge: document.getElementById('sp-chatbot-badge')
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

        // Settings
        this.elements.settingsBtn.addEventListener('click', () => this.openSettings());

        document.querySelector('.sp-chatbot-close-settings').addEventListener('click', () => {
            this.elements.settingsPanel.style.display = 'none';
        });

        document.querySelector('.sp-chatbot-save-settings').addEventListener('click', () => {
            this.saveSettings();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.elements.container.classList.remove('sp-chatbot-closed');
            this.elements.container.classList.add('sp-chatbot-open');
            this.elements.input.focus();
            this.elements.badge.style.display = 'none';
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

        try {
            // Get relevant documentation context
            const context = await this.getRelevantContext(userMessage);

            // Call AI API
            const response = await this.callAI(userMessage, context);

            // Remove typing indicator
            this.removeTypingIndicator(typingId);

            // Add bot response
            this.addMessage(response, 'bot');

            // Add to history
            this.messageHistory.push({ role: 'assistant', content: response });

            // Save to localStorage
            this.saveConversationHistory();

        } catch (error) {
            this.removeTypingIndicator(typingId);
            this.addMessage('Sorry, I encountered an error. Please check your API settings or try again.', 'bot', true);
            console.error('Chatbot error:', error);
        }
    }

    addMessage(content, sender, isError = false) {
        const messageHTML = `
            <div class="sp-chatbot-message sp-chatbot-${sender}-message ${isError ? 'sp-chatbot-error' : ''}">
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

        // Convert URLs to links
        formatted = formatted.replace(
            /(https?:\/\/[^\s]+)/g,
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

    async getRelevantContext(query) {
        if (!this.searchIndex) return '';

        try {
            // Search through documentation
            const queryLower = query.toLowerCase();
            const relevantDocs = [];

            // Search through all docs
            if (this.searchIndex.docs) {
                this.searchIndex.docs.forEach(doc => {
                    const text = (doc.text || '').toLowerCase();
                    const title = (doc.title || '').toLowerCase();

                    // Simple relevance scoring
                    const queryWords = queryLower.split(' ').filter(w => w.length > 3);
                    let score = 0;

                    queryWords.forEach(word => {
                        if (title.includes(word)) score += 10;
                        if (text.includes(word)) score += 1;
                    });

                    if (score > 0) {
                        relevantDocs.push({ ...doc, score });
                    }
                });
            }

            // Sort by relevance and take top 3
            relevantDocs.sort((a, b) => b.score - a.score);
            const topDocs = relevantDocs.slice(0, 3);

            // Format context
            let context = 'Relevant documentation:\n\n';
            topDocs.forEach(doc => {
                context += `**${doc.title}** (${doc.location})\n`;
                context += `${doc.text.substring(0, 500)}...\n\n`;
            });

            return context;
        } catch (error) {
            console.error('Error getting context:', error);
            return '';
        }
    }

    async callAI(userMessage, context) {
        const apiKey = this.config.apiKey || this.getStoredApiKey();

        if (!apiKey && !this.config.apiEndpoint) {
            throw new Error('No API key or custom endpoint configured. Please set up in settings.');
        }

        // Build system prompt
        const systemPrompt = `You are the SignalPilot Documentation Assistant. You help users understand and use the SignalPilot trading indicator suite.

Key information about SignalPilot:
- SignalPilot is a suite of TradingView indicators for technical analysis
- Main indicators: Pentarch, OmniDeck, Janus Atlas, Augury Grid, Harmonic Oscillator, Plutus Flow, Minimal Flow
- All indicators are non-repainting and real-time
- Available on TradingView platform
- Supports alerts, screeners, and webhooks

Answer questions clearly and concisely. If you reference specific indicators or features, mention the relevant documentation page when helpful. Be friendly and professional.

${context}`;

        if (this.config.apiProvider === 'openai') {
            return await this.callOpenAI(systemPrompt, userMessage, apiKey);
        } else if (this.config.apiProvider === 'anthropic') {
            return await this.callAnthropic(systemPrompt, userMessage, apiKey);
        } else if (this.config.apiEndpoint) {
            return await this.callCustomEndpoint(systemPrompt, userMessage);
        }

        throw new Error('No valid API configuration');
    }

    async callOpenAI(systemPrompt, userMessage, apiKey) {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: this.config.model || 'gpt-4',
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...this.messageHistory.slice(-10), // Last 10 messages for context
                    { role: 'user', content: userMessage }
                ],
                max_tokens: this.config.maxTokens,
                temperature: this.config.temperature
            })
        });

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    async callAnthropic(systemPrompt, userMessage, apiKey) {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: this.config.model || 'claude-3-sonnet-20240229',
                max_tokens: this.config.maxTokens,
                system: systemPrompt,
                messages: [
                    ...this.messageHistory.slice(-10),
                    { role: 'user', content: userMessage }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Anthropic API error: ${response.status}`);
        }

        const data = await response.json();
        return data.content[0].text;
    }

    async callCustomEndpoint(systemPrompt, userMessage) {
        const response = await fetch(this.config.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                system: systemPrompt,
                message: userMessage,
                history: this.messageHistory.slice(-10)
            })
        });

        if (!response.ok) {
            throw new Error(`Custom API error: ${response.status}`);
        }

        const data = await response.json();
        return data.response || data.message || data.content;
    }

    clearConversation() {
        if (confirm('Clear conversation history?')) {
            this.messageHistory = [];
            this.elements.messages.innerHTML = '';
            this.elements.quickActions.style.display = 'flex';
            localStorage.removeItem('sp-chatbot-history');

            // Re-add welcome message
            this.addMessage(
                `Hi! I'm your SignalPilot Documentation Assistant. Ask me anything about the SignalPilot suite!`,
                'bot'
            );
        }
    }

    openSettings() {
        this.elements.settingsPanel.style.display = 'block';

        // Load current settings
        document.getElementById('sp-chatbot-api-provider').value = this.config.apiProvider;
        document.getElementById('sp-chatbot-api-key').value = this.getStoredApiKey() || '';
        document.getElementById('sp-chatbot-custom-endpoint').value = this.config.apiEndpoint || '';
    }

    saveSettings() {
        const provider = document.getElementById('sp-chatbot-api-provider').value;
        const apiKey = document.getElementById('sp-chatbot-api-key').value;
        const customEndpoint = document.getElementById('sp-chatbot-custom-endpoint').value;

        this.config.apiProvider = provider;
        this.config.apiKey = apiKey;
        this.config.apiEndpoint = customEndpoint;

        // Save to localStorage
        localStorage.setItem('sp-chatbot-config', JSON.stringify({
            apiProvider: provider,
            apiKey: apiKey,
            apiEndpoint: customEndpoint
        }));

        // Update provider display
        const providerName = provider === 'openai' ? 'OpenAI' :
                           provider === 'anthropic' ? 'Anthropic Claude' :
                           'Custom';
        document.getElementById('sp-chatbot-provider').textContent = providerName;

        this.elements.settingsPanel.style.display = 'none';

        alert('Settings saved!');
    }

    getStoredApiKey() {
        const config = localStorage.getItem('sp-chatbot-config');
        if (config) {
            return JSON.parse(config).apiKey || '';
        }
        return '';
    }

    saveConversationHistory() {
        localStorage.setItem('sp-chatbot-history', JSON.stringify(this.messageHistory));
    }

    loadConversationHistory() {
        const saved = localStorage.getItem('sp-chatbot-history');
        if (saved) {
            try {
                this.messageHistory = JSON.parse(saved);
                // Optionally restore messages in UI
            } catch (e) {
                console.error('Failed to load conversation history:', e);
            }
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
