function initAnimations() {
    initScrollAnimations();
    initHoverAnimations();
    initLoadingAnimations();
    console.log('🎬 Animations initialized');
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(
        '.feature-card, .solution-card, .command-category, .step, .stat-card'
    );

    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

function initHoverAnimations() {
    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll(
        '.btn, .command-item, .nav-links a'
    );

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('hover-active');
        });
        
        el.addEventListener('mouseleave', () => {
            el.classList.remove('hover-active');
        });
    });
}

function initLoadingAnimations() {
    // Page load animation
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Pulse animation for GIF placeholder
    const pulseElements = document.querySelectorAll('.pulse-animation');
    pulseElements.forEach(el => {
        el.style.animation = 'pulse 2s infinite';
    });
}

// Utility function for manual animations
export function animateElement(element, animationClass) {
    element.classList.add(animationClass);
    
    return new Promise((resolve) => {
        const handleAnimationEnd = () => {
            element.classList.remove(animationClass);
            element.removeEventListener('animationend', handleAnimationEnd);
            resolve();
        };
        
        element.addEventListener('animationend', handleAnimationEnd);
    });
}

// Export for other components to use
export { initAnimations, initScrollAnimations, initHoverAnimations, initLoadingAnimations };