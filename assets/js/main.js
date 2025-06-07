// Project Data
const projects = [
    {
        title: "Oracle Aconex Document Module",
        challenge: "Modernize a legacy construction document management system for global scalability.",
        solution: "Designed bulk document upload with background processing, real-time progress tracking, and automated error notifications.",
        impact: "40% reduction in system errors; 50% faster upload times; revenue increase; 25% boost in user engagement among 5M+ users.",
        tags: ["Construction Tech", "Document Management", "Enterprise Software"]
    },
    {
        title: "TheMathCompany Co.dx AI Low-Code Platform",
        challenge: "Achieve product-market fit for a B2B AI analytics platform serving Supply Chain, Retail, Pharma, and Manufacturing clients.",
        solution: "Led feature prioritization via competitive analysis and client RFPs; launched POCs with dynamic analytical dashboards and drag-and-drop data workflows.",
        impact: "Significant improvement in lead conversion; increased market share growth; 30% reduction in time-to-market through agile sprints.",
        tags: ["AI/ML", "Analytics", "Low-Code Platform"]
    },
    {
        title: "Scientific Games – Servizio & SGHOST",
        challenge: "Enhance casino floor operations and player engagement through digital services.",
        solution: "Upgraded Servizio suite for player registration, jackpot management, and voucher redemption; spearheaded SGHOST cashless transaction system (Unified Wallet) for slot machines.",
        impact: "20% uplift in transaction efficiency; $2M incremental annual revenue via cross-selling; 15% market share gain highlighted at G2E.",
        tags: ["Gaming", "Digital Services", "Payment Systems"]
    },
    {
        title: "Unified Wallet (Scientific Games)",
        challenge: "Develop a secure, mobile-first cashless payment solution for casino patrons.",
        solution: "Crafted intuitive user flows, partnered with UX/UI designers, integrated payment APIs, and implemented end-to-end encryption.",
        impact: "30% faster transactions; streamlined host operations increased on-floor spend per user by 12%.",
        tags: ["FinTech", "Mobile Payments", "UX Design"]
    },
    {
        title: "Mahindra Comviva – Ngage & PCRF",
        challenge: "Automate telecom policy control and deliver actionable performance insights for operators in Asia & Africa.",
        solution: "Built an automated testing framework (200+ test cases) for PCRF components; developed COS360 KPI monitoring dashboard; tailored RFP response BOMs for large telco clients.",
        impact: "Test cycle reduction from 80+ hours to 2 hours; 15% decrease in maintenance costs; 10% higher RFP win rates; recognized with ComConnect Best Team Award.",
        tags: ["Telecom", "Automation", "Performance Analytics"]
    }
];

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    populateProjects();
    initializeAnimations();
    initializeAIChat();
    initializeScrollAnimations();
    initializeSkillBars();
    initializeProjectCards();
});

// Navigation
function initializeNavigation() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Projects
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="project-content">
                <div class="section">
                    <h4>Challenge</h4>
                    <p>${project.challenge}</p>
                </div>
                <div class="section">
                    <h4>Solution</h4>
                    <p>${project.solution}</p>
                </div>
                <div class="section">
                    <h4>Impact</h4>
                    <p>${project.impact}</p>
                </div>
            </div>
        `;
        
        projectGrid.appendChild(card);
    });
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all animated elements
    document.querySelectorAll('.project-card, .skill-item, .contact-item').forEach(el => {
        observer.observe(el);
    });

    // Animate skill bars on scroll
    document.querySelectorAll('.progress-bar > div').forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize intersection observer for scroll animations
function initializeScrollAnimations() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Handle skill bars
                if (entry.target.classList.contains('skill-item')) {
                    const progressBar = entry.target.querySelector('.progress-bar > div');
                    if (progressBar) {
                        const width = progressBar.getAttribute('data-width');
                        progressBar.style.setProperty('--skill-level', width);
                    }
                }
            }
        });
    }, options);

    // Observe elements
    document.querySelectorAll('.reveal, .skill-item, .project-card').forEach(el => {
        observer.observe(el);
        el.classList.add('reveal');
    });
}

// Update skill bars with data attributes
function initializeSkillBars() {
    const skills = {
        'AI/ML Product Strategy': '95%',
        'GitHub Copilot Integration': '90%',
        'API Design & Integration': '85%',
        'Product Strategy': '95%',
        'Growth Analytics': '90%',
        'Digital Transformation': '85%'
    };

    document.querySelectorAll('.skill-item').forEach(item => {
        const skillName = item.querySelector('span').textContent;
        const progressBar = item.querySelector('.progress-bar > div');
        if (progressBar && skills[skillName]) {
            progressBar.setAttribute('data-width', skills[skillName]);
        }
    });
}

// Add hover effects to project cards
function initializeProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('glow');
    });
}

// AI Chat Implementation
function initializeAIChat() {
    const chatContainer = document.querySelector('.chat-interface');
    const suggestions = document.querySelectorAll('.suggestion-btn');

    if (!chatContainer) return;

    suggestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.textContent;
            addUserMessage(question);
            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a response
            simulateAIResponse(question);
        });
    });
}

function addUserMessage(message) {
    const chatInterface = document.querySelector('.chat-interface');
    const messageEl = document.createElement('div');
    messageEl.className = 'chat-message user-message';
    messageEl.textContent = message;
    chatInterface.appendChild(messageEl);
}

function simulateAIResponse(question) {
    const responses = {
        "Tell me about Oracle Aconex": "At Oracle Aconex, I led the modernization of their document management system, implementing bulk upload capabilities and real-time tracking that reduced system errors by 40% and improved upload times by 50%.",
        "Co.dx Platform Experience": "I drove product-market fit for TheMathCompany's Co.dx AI platform, creating dynamic dashboards and data workflows that reduced time-to-market by 30%.",
        "Unified Wallet Implementation": "The Unified Wallet project at Scientific Games revolutionized casino payments through a secure, mobile-first solution that increased on-floor spend by 12% and delivered 30% faster transactions."
    };

    setTimeout(() => {
        const chatInterface = document.querySelector('.chat-interface');
        const messageEl = document.createElement('div');
        messageEl.className = 'chat-message ai-message';
        messageEl.textContent = responses[question] || "I'd be happy to discuss my experience in detail. Please feel free to ask specific questions about any of my projects.";
        chatInterface.appendChild(messageEl);
    }, 1000);
}
