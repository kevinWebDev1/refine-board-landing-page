export function initNavigation() {
    initSmoothScroll();
    initFloatingArrows();
    initScrollEffects();
    initActiveNavLink();  // 👈 add this
    console.log('🧭 Navigation system initialized');
}

function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}

function initFloatingArrows() {
    const floatingArrows = document.querySelector('.floating-arrows');
    if (floatingArrows) {
        floatingArrows.innerHTML = `
            <button class="arrow-btn up-arrow" aria-label="Scroll to top">↑</button>
            <button class="arrow-btn down-arrow" aria-label="Scroll to bottom">↓</button>
        `;
        
        const upArrow = floatingArrows.querySelector('.up-arrow');
        const downArrow = floatingArrows.querySelector('.down-arrow');
        
        upArrow.addEventListener('click', scrollToTop);
        downArrow.addEventListener('click', scrollToBottom);
        
        // Show/hide arrows based on scroll position
        window.addEventListener('scroll', toggleFloatingArrows);
        toggleFloatingArrows(); // Initial check
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function toggleFloatingArrows() {
    const floatingArrows = document.querySelector('.floating-arrows');
    if (!floatingArrows) return;
    
    const scrollTop = window.pageYOffset;
    if (scrollTop > 500) {
        floatingArrows.style.opacity = '1';
        floatingArrows.style.visibility = 'visible';
    } else {
        floatingArrows.style.opacity = '0';
        floatingArrows.style.visibility = 'hidden';
    }
}

function initScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// 🟦 New function: highlight nav links while scrolling
function initActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPos = window.scrollY + (document.querySelector('.header')?.offsetHeight || 0) + 50; // offset for header

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}
