import downloadApp from "../data/download.js";

export function renderHeader() {
    const container = document.getElementById('header-container');
    if (!container) return;

    container.innerHTML = `
            <a href="/" class="logo">
                <img class="logo-img" alt="Refine Board Logo" src="assets/images/refine-board-logo.webp" />
                <span class="logo-text">Refine Board</span>
            </a>
            
            <nav id="menu" class="nav-menu">
                <a class="nav-link" href="#features">Features</a>
                <a class="nav-link" href="#commands">Commands</a>
                <a class="nav-link" href="#demo">Demo</a>
                <a class="nav-link" href="#feedback">Feedback</a>
                <a class="nav-link" href="#pricing">Pricing</a>
                <a class="nav-link" href="#api">API</a>
                <button id="closeMenu" class="close-menu">
                    <svg class="close-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </nav>
            
            <div class="header-actions">
                <button class="theme-toggle">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <a class="download-btn" href="${downloadApp}">Download</a>
                <button id="openMenu" class="open-menu">
                    <svg class="menu-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div class="floating-arrows"></div>
    `;

    initMobileMenu();
    console.log('🔗 Header rendered');
}

function initMobileMenu() {
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menu = document.getElementById('menu');

    if (openMenu && closeMenu && menu) {
        openMenu.addEventListener('click', () => {
            menu.classList.remove('menu-closed');
            menu.classList.add('menu-open');
            document.body.classList.add('no-scroll');
        });

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('menu-open');
            menu.classList.add('menu-closed');
            document.body.classList.remove('no-scroll');
        });

        // Close menu when clicking on links
        menu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('menu-open');
                menu.classList.add('menu-closed');
                document.body.classList.remove('no-scroll');
            });
        });
    }
}