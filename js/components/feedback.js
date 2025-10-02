import { COMMANDS_DATA } from "../data/commands.js"

export function renderFeedback() {
    const container = document.getElementById('feedback-container');
    if (!container) return;

    container.innerHTML = `
        <section id="feedback" class="feedback">
            <div class="container">
                <div class="feedback-header">
                    <h2 class="section-title">Loved by Thousands</h2>
                    <p class="section-subtitle">See what our users are saying about Refine Board</p>
                </div>
                
                <div class="testimonials-grid">
                    ${renderTestimonials()}
                </div>
                
                <div class="feedback-stats">
                    ${renderFeedbackStats()}
                </div>
            </div>
        </section>
    `;

    initTestimonialCarousel();
    console.log('💬 Feedback section rendered');
}

function renderTestimonials() {
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Content Writer",
            avatar: "👩‍💼",
            rating: 5,
            text: "Refine Board has revolutionized how I write emails. The tone adjustment feature is a game-changer for professional communication!",
            feature: "Tone Adjustment"
        },
        {
            name: "Rahul Kumar",
            role: "Student",
            avatar: "👨‍🎓",
            rating: 5,
            text: "As someone who types in Hinglish, this keyboard understands me perfectly. It's like having a personal editor for every message!",
            feature: "Hinglish Support"
        },
        {
            name: "Anita Patel",
            role: "Social Media Manager",
            avatar: "👩‍💻",
            rating: 5,
            text: "The content generation commands save me hours every week. Creating engaging posts has never been easier!",
            feature: "Content Generation"
        },
        {
            name: "Vikram Singh",
            role: "Business Owner",
            avatar: "👨‍💼",
            rating: 5,
            text: "Professional email formatting with one command? This is exactly what my small business needed. Highly recommended!",
            feature: "Email Formatting"
        },
        {
            name: "Neha Gupta",
            role: "Freelancer",
            avatar: "👩‍🎨",
            rating: 5,
            text: "Lightweight, fast, and incredibly powerful. I've tried other AI keyboards, but Refine Board is in a league of its own.",
            feature: "Performance"
        },
        {
            name: "Arjun Mehta",
            role: "Developer",
            avatar: "👨‍💻",
            rating: 5,
            text: "The privacy-focused approach is what sold me. No data collection, just pure AI assistance. Exactly what the market needed!",
            feature: "Privacy First"
        }
    ];

    return testimonials.map((testimonial, index) => `
        <div class="testimonial-card" data-testimonial="${index}">
            <div class="testimonial-header">
                <div class="user-avatar">${testimonial.avatar}</div>
                <div class="user-info">
                    <h4 class="user-name">${testimonial.name}</h4>
                    <p class="user-role">${testimonial.role}</p>
                </div>
                <div class="rating">
                    ${'⭐'.repeat(testimonial.rating)}
                </div>
            </div>
            <div class="testimonial-content">
                <p>"${testimonial.text}"</p>
            </div>
            <div class="testimonial-feature">
                <span class="feature-badge">Loves: ${testimonial.feature}</span>
            </div>
        </div>
    `).join('');
}

function renderFeedbackStats() {
    const stats = [
        { number: "10,000+", label: "Active Users" },
        { number: "4.8/5", label: "Average Rating" },
        { number: COMMANDS_DATA.stats.total, label: "AI Commands" },
        { number: "99%", label: "Satisfaction Rate" }
    ];

    return `
        <div class="stats-grid">
            ${stats.map(stat => `
                <div class="stat-item">
                    <div class="stat-number">${stat.number}</div>
                    <div class="stat-label">${stat.label}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }

    // Auto-rotate testimonials
    setInterval(showNextTestimonial, 4000);

    // Initial active testimonial
    if (testimonials.length > 0) {
        testimonials[0].classList.add('active');
    }
}