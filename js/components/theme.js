export function initTheme() {
    const savedTheme = localStorage.getItem('rb-theme') || 'dark';
    setTheme(savedTheme);
    initThemeToggle();
}

export function setTheme(theme) {
    document.body.className = `${theme}-mode`;
    localStorage.setItem('rb-theme', theme);
    updateThemeMeta(theme);
}

export function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function initThemeToggle() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
}

function updateThemeMeta(theme) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#0F1419' : '#ffffff');
    }
}

export function getCurrentTheme() {
    return document.body.classList.contains('dark-mode') ? 'dark' : 'light';
}