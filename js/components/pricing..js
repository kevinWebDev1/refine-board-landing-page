import { COMMANDS_DATA } from "../data/commands.js";
import downloadApp from "../data/download.js";

// Define plans dynamically
const plans = [
    { name: "Weekly Plan", period: "/week", description: "Perfect for Trial, free for a week", featured: true },
    { name: "Monthly Plan", period: "/month", description: "Free access for a full month", featured: false },
    { name: "Yearly Plan", period: "/year", description: "Enjoy free access for the entire year", featured: false }
];

// Define common features with icons + colors
const features = [
    { text: `All ${COMMANDS_DATA.stats.total} AI Commands`, icon: "fa-brain", color: "feat-ai" },
    { text: "Unlimited Text Refinement", icon: "fa-pen-fancy", color: "feat-refine" },
    { text: "Multi-language Support", icon: "fa-language", color: "feat-lang" },
    { text: "Hinglish Processing", icon: "fa-globe", color: "feat-hinglish" },
    { text: "Content Generation", icon: "fa-magic", color: "feat-gen" },
    { text: "Professional Formatting", icon: "fa-file-alt", color: "feat-format" },
    { text: "Privacy First - No Data Collection", icon: "fa-user-shield", color: "feat-privacy" },
    { text: "Lightweight (<1MB)", icon: "fa-feather-alt", color: "feat-light" },
    { text: "No Ads Ever", icon: "fa-ban", color: "feat-noads" },
    { text: "Regular Updates", icon: "fa-sync-alt", color: "feat-update" }
];



export function renderPricing() {
    const container = document.getElementById('pricing-container');
    if (!container) return;

    container.innerHTML = `
            <section id="pricing" class="pricing">
                <div class="container">
                    <div class="pricing-header">
                        <h2 class="section-title">All Plans Are Free</h2>
                        <p class="section-subtitle">Choose the plan that works best for you. All plans include our core AI features.</p>
                    </div>
                    
                    <div class="pricing-grid">
                        ${plans.map(plan => `
                        <div class="pricing-card ${plan.featured ? 'featured' : ''}">
                            ${plan.featured ? `<div class="plan-badge">Most Popular</div>` : ''}
                            <div class="plan-header">
                                <h3 class="plan-name">${plan.name}</h3>
                                <p class="plan-description">${plan.description}</p>
                            </div>
                            
                            <div class="price-section">
                                <div class="price">
                                    <span class="price-amount">₹0</span>
                                    <span class="price-period">${plan.period}</span>
                                </div>
                                <button class="btn btn-primary" onclick="${downloadApp}">
                                    <span>Free Now</span>
                                </button>
                            </div>
                            
                            <ul class="features-list">
                                ${features.map(feature => `
                                    <li class="feature-item">
                                        <i class="fas ${feature.icon} pricing-feature-icon ${feature.color}"></i>
                                        <span>${feature.text}</span>
                                    </li>
                                `).join('')}
                            </ul>


                        </div>
                        `).join('')}
                    </div>

                    <div class="pricing-faq">
                        <h3>Frequently Asked Questions</h3>
                        <div class="faq-grid">
                            ${renderFAQ()}
                        </div>
                    </div>

                    <div class="pricing-footer">
                        <p>All plans include our core AI keyboard features. No credit card required for any plan.</p>
                    </div>
                </div>
            </section>
`;

    initFAQAccordion();
    console.log('💰 Pricing section rendered');
}

// Global functions for buttons
window.upgradeToPro = function () {
    alert('Pro features coming soon! Currently, all features are available in the free version.');
};

window.contactEnterprise = function () {
    window.location.href = 'mailto:kevinbusiness62@gmail.com?subject=Enterprise Plan Inquiry - Refine Board';
};


initFAQAccordion();
console.log('💰 Pricing section rendered');
function renderFAQ() {
    const faqs = [
        {
            question: "Is Refine Board really completely free?",
            answer: "Yes! Refine Board is 100% free with no hidden costs, no subscriptions, and no limitations. All AI commands are available to everyone."
        },
        {
            question: "How do you make money if it's free?",
            answer: "We believe in making AI accessible to everyone. This is a passion project focused on helping people communicate better, not a business venture."
        },
        {
            question: "Will there be a paid version in the future?",
            answer: "Currently Refine Board completely free for Everyone. Our goal is to help people, not monetize their communication."
        },
        {
            question: "Is my data safe?",
            answer: "Absolutely! We don't collect any personal data. Your conversations stay on your device and are never sent to our servers."
        },
        {
            question: "What platforms do you support?",
            answer: "Currently we support Android devices. The app is lightweight (<1MB) and works on Android 8.0 and above."
        },
        {
            question: "How often do you update the app?",
            answer: "We regularly release updates with new features, improvements, and bug fixes. All updates are free and automatic."
        }
    ];

    return faqs.map((faq, index) => `
        <div class="faq-item">
            <button class="faq-question" data-faq="${index}">
                <span>${faq.question}</span>
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.maxHeight;

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = null;
            });
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });

            // Open current answer if it was closed
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                question.classList.add('active');
            }
        });
    });
}
