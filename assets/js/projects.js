// Project data with detailed information
const projects = [
    {
        title: "Oracle Aconex Document Module",
        challenge: "Modernize a legacy construction document management system for global scalability.",
        solution: "Designed bulk document upload with background processing, real-time progress tracking, and automated error notifications.",
        impact: "40% reduction in system errors; 50% faster upload times; revenue increase; 25% boost in user engagement among 5M+ users.",
        tags: ["Construction Tech", "Document Management", "Enterprise Software"],
        technologies: ["Node.js", "React", "MongoDB", "AWS S3"]
    },
    {
        title: "TheMathCompany Co.dx AI Low-Code Platform",
        challenge: "Achieve product-market fit for a B2B AI analytics platform serving Supply Chain, Retail, Pharma, and Manufacturing clients.",
        solution: "Led feature prioritization via competitive analysis and client RFPs; launched POCs with dynamic analytical dashboards and drag-and-drop data workflows.",
        impact: "Significant improvement in lead conversion; increased market share growth; 30% reduction in time-to-market through agile sprints.",
        tags: ["AI/ML", "Analytics", "Low-Code Platform"],
        technologies: ["Python", "TensorFlow", "React", "PostgreSQL"]
    },
    {
        title: "Scientific Games – Servizio & SGHOST",
        challenge: "Enhance casino floor operations and player engagement through digital services.",
        solution: "Upgraded Servizio suite for player registration, jackpot management, and voucher redemption; spearheaded SGHOST cashless transaction system (Unified Wallet) for slot machines.",
        impact: "20% uplift in transaction efficiency; $2M incremental annual revenue via cross-selling; 15% market share gain highlighted at G2E.",
        tags: ["Gaming", "Digital Services", "Payment Systems"],
        technologies: ["Java", "Spring Boot", "Oracle", "Redis"]
    },
    {
        title: "Unified Wallet (Scientific Games)",
        challenge: "Develop a secure, mobile-first cashless payment solution for casino patrons.",
        solution: "Crafted intuitive user flows, partnered with UX/UI designers, integrated payment APIs, and implemented end-to-end encryption.",
        impact: "30% faster transactions; streamlined host operations increased on-floor spend per user by 12%.",
        tags: ["FinTech", "Mobile Payments", "UX Design"],
        technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"]
    },
    {
        title: "Mahindra Comviva – Ngage & PCRF",
        challenge: "Automate telecom policy control and deliver actionable performance insights for operators in Asia & Africa.",
        solution: "Built an automated testing framework (200+ test cases) for PCRF components; developed COS360 KPI monitoring dashboard; tailored RFP response BOMs for large telco clients.",
        impact: "Test cycle reduction from 80+ hours to 2 hours; 15% decrease in maintenance costs; 10% higher RFP win rates; recognized with ComConnect Best Team Award.",
        tags: ["Telecom", "Automation", "Performance Analytics"],
        technologies: ["Python", "Selenium", "Grafana", "PostgreSQL"]
    }
];

// Function to render project cards with animations
function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projectGrid.innerHTML = ''; // Clear existing content

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
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
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        projectGrid.appendChild(card);
    });
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', renderProjects);
