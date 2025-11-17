export function renderFeatures() {
    const container = document.getElementById('features-container');
    if (!container) return;

    container.innerHTML = `
        <section id="features" class="features">
            <div class="container">
                <div class="features-header">
                    <h2 class="section-title">Keyboard Superpowers</h2>
                    <p class="section-subtitle">Features</p>
                </div>
                
                <div class="features-grid">
                    ${renderFeatureCards()}
                </div>
            </div>
        </section>
    `;

    initFeatureInteractions();
    console.log('🚀 Features section rendered');
}

function renderFeatureCards() {
    const features = [
        {
            icon: "fa-edit",
            color: "feat-refine",
            title: "Instant Text Refinement",
            description: "Refine, misspelled, or unclear text while preserving original intent in a second",
            commands: ['<i class="fas fa-edit"></i> Refine Icon']
        },
        {
            icon: "fa-weight",
            color: "feat-lite",
            title: "Super Lite Weight",
            description: "In just 3MB an 'AI Beast' Keyboard app under your fingertips!",
            commands: ['3 MB Size']
        },
        {
            icon: "fa-lock",
            color: "feat-privacy",
            title: "Super Secure Privacy",
            description: "It doesn't read your information and is super privacy-focused",
            commands: ['Privacy']
        },
        {
            icon: "fa-globe",
            color: "feat-lang",
            title: "Multi-language Support",
            description: "Translation between any language in a click, Specialized Hinglish processing",
            commands: ['/tr']
        },
        {
            icon: "fa-palette",
            color: "feat-gen",
            title: "Creative Generation",
            description: "Generate images, videos, and memes with AI-powered prompts",
            commands: ['/img', '/vid']
        },
        {
            icon: "fa-list-ol",
            color: "feat-format",
            title: "Smart Formatting",
            description: "Convert to lists, professional emails, or extract key statements",
            commands: ['/li', '/em', '/es']
        }
    ];

    return features.map(feature => `
        <div class="feature-card" data-feature="${feature.title.toLowerCase()}">
            <div class="feature-icon">
                <i class="fas ${feature.icon} ${feature.color}"></i>
            </div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
            <div class="feature-commands">
                ${feature.commands.map(cmd => `
                    <code class="command-tag">${cmd}</code>
                `).join('')}
            </div>
        </div>
    `).join('');
}



function initFeatureInteractions() {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('feature-hover');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('feature-hover');
        });

        // Click to highlight related commands
        card.addEventListener('click', () => {
            featureCards.forEach(c => c.classList.remove('feature-active'));
            card.classList.add('feature-active');
        });
    });

    // Add animation to examples
    const examples = document.querySelectorAll('.example');
    let exampleIndex = 0;

    function animateExamples() {
        examples.forEach(example => example.classList.remove('example-animate'));

        if (examples[exampleIndex]) {
            examples[exampleIndex].classList.add('example-animate');
            exampleIndex = (exampleIndex + 1) % examples.length;
        }

        setTimeout(animateExamples, 3000);
    }

    // Start animation when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateExamples();
            }
        });
    }, { threshold: 0.3 });

    const showcase = document.querySelector('.features-showcase');
    if (showcase) {
        observer.observe(showcase);
    }
}