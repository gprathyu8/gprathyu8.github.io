// Architecture Diagram Implementation
document.addEventListener('DOMContentLoaded', () => {
    initializeArchitectureDiagram();
});

function initializeArchitectureDiagram() {
    const architectureDiagram = document.querySelector('.architecture-diagram');
    if (!architectureDiagram) return;

    // Create SVG diagram
    const svg = `
    <svg width="100%" height="500" viewBox="0 0 800 500">
        <!-- System Components -->
        <g class="components">
            <!-- Frontend -->
            <g transform="translate(100,50)">
                <rect x="0" y="0" width="150" height="80" rx="10" class="component frontend" />
                <text x="75" y="45" text-anchor="middle">Frontend Layer</text>
            </g>

            <!-- API Gateway -->
            <g transform="translate(350,50)">
                <rect x="0" y="0" width="150" height="80" rx="10" class="component api-gateway" />
                <text x="75" y="45" text-anchor="middle">API Gateway</text>
            </g>

            <!-- Microservices -->
            <g transform="translate(100,200)">
                <rect x="0" y="0" width="150" height="80" rx="10" class="component microservices" />
                <text x="75" y="45" text-anchor="middle">Microservices</text>
            </g>

            <!-- Database -->
            <g transform="translate(350,200)">
                <rect x="0" y="0" width="150" height="80" rx="10" class="component database" />
                <text x="75" y="45" text-anchor="middle">Database</text>
            </g>

            <!-- AI/ML Layer -->
            <g transform="translate(600,200)">
                <rect x="0" y="0" width="150" height="80" rx="10" class="component ai-ml" />
                <text x="75" y="45" text-anchor="middle">AI/ML Layer</text>
            </g>

            <!-- Security Layer -->
            <g transform="translate(350,350)">
                <rect x="0" y="0" width="150" height="80" rx="10" class="component security" />
                <text x="75" y="45" text-anchor="middle">Security Layer</text>
            </g>

            <!-- Connection Lines -->
            <g class="connections">
                <!-- Add connection lines between components -->
            </g>
        </g>
    </svg>
    `;

    architectureDiagram.innerHTML = svg;
    addArchitectureInteractivity();
}

function addArchitectureInteractivity() {
    const components = document.querySelectorAll('.component');
    
    components.forEach(component => {
        component.addEventListener('mouseover', () => {
            component.classList.add('highlight');
        });
        
        component.addEventListener('mouseout', () => {
            component.classList.remove('highlight');
        });
        
        component.addEventListener('click', () => {
            showComponentDetails(component);
        });
    });
}

function showComponentDetails(component) {
    // Component details popup implementation
    const details = {
        'frontend': {
            title: 'Frontend Layer',
            description: 'Modern, responsive UI built with React and TypeScript. Features include real-time updates, progressive enhancement, and offline capabilities.',
            technologies: ['React', 'TypeScript', 'PWA', 'Service Workers']
        },
        'api-gateway': {
            title: 'API Gateway',
            description: 'Centralized API gateway handling authentication, rate limiting, and request routing.',
            technologies: ['Kong', 'OAuth 2.0', 'JWT', 'Rate Limiting']
        },
        'microservices': {
            title: 'Microservices',
            description: 'Scalable microservices architecture handling business logic, data processing, and third-party integrations.',
            technologies: ['Node.js', 'Python', 'Docker', 'Kubernetes']
        },
        'database': {
            title: 'Database Layer',
            description: 'Multi-model database architecture supporting both structured and unstructured data.',
            technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
        },
        'ai-ml': {
            title: 'AI/ML Layer',
            description: 'Advanced machine learning pipeline for predictive analytics and automated decision making.',
            technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'MLflow']
        },
        'security': {
            title: 'Security Layer',
            description: 'Comprehensive security implementation including encryption, authentication, and audit logging.',
            technologies: ['OAuth 2.0', 'SSL/TLS', 'WAF', 'SIEM']
        }
    };

    // Implementation of popup display logic here
    console.log(details[component.classList[1]]);
}
