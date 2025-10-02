import { COMMANDS_DATA } from "../data/commands.js";

export function renderCommands() {
    const container = document.getElementById('commands-container');
    if (!container) return;

    container.innerHTML = `
        <section id="commands" class="commands">
            <div class="container">
                ${renderCommandsHeader()}
                ${renderCommandsGrid()}
                ${renderCommandsStats()}
            </div>
        </section>
    `;

    initCommandsSearch();
    console.log('✅ Commands section rendered');
}

function renderCommandsHeader() {
    return `
        <div class="commands-header">
            <h2 class="section-title">${COMMANDS_DATA.stats.total} Powerful AI Commands</h2>
            <p class="section-subtitle">Transform your typing with these powerful slash commands</p>
            <div class="command-search-container">
                <input type="text" class="command-search" placeholder="Search commands...">
            </div>
        </div>
    `;
}

function renderCommandsGrid() {
    return `
        <div class="commands-grid">
            ${COMMANDS_DATA.categories.map(renderCategory).join('')}
        </div>
    `;
}

// ✅ Category → Icon + Color mapping
const CATEGORY_ICONS = {
    'text-ops': { icon: 'fa-i-cursor', color: 'cat-text-ops' },
    'content-gen': { icon: 'fa-magic', color: 'cat-content' },
    'formatting': { icon: 'fa-align-left', color: 'cat-formatting' },
    'tone-spec': { icon: 'fa-user-edit', color: 'cat-tone' },
    'professional': { icon: 'fa-tools', color: 'cat-pro' }
};


function renderCategory(category) {
    const { icon, color } = CATEGORY_ICONS[category.id] || { icon: "fa-lightbulb", color: "cat-default" };
    return `
        <div class="command-category" data-category="${category.id}">
            <div class="category-header">
                <div class="category-icon"><i class="fas ${icon} ${color}"></i></div>
                <h3>${category.name}</h3>
                <span class="command-count">${category.count} Commands</span>
            </div>
            <div class="commands-list">
                ${category.commands.map(renderCommand).join('')}
            </div>
        </div>
    `;
}

function renderCommand(command) {
    return `
        <div class="command-item" data-command="${command.code}">
            <code>${command.code}</code>
            <div class="command-details">
                <strong>${command.name}</strong>
                <span>${command.desc}</span>
            </div>
        </div>
    `;
}

// ✅ Stats → Icon + Color mapping (all meaningful)
const STAT_ICONS = {
    total: { icon: "fa-brain", color: "stat-total" },            // Total AI commands
    categories: { icon: "fa-th-large", color: "stat-categories" }, // Total categories
    textOps: { icon: "fa-i-cursor", color: "stat-text-ops" },    // Text operations
    toneOptions: { icon: "fa-smile", color: "stat-tone" }        // Tone customization
};

function renderCommandsStats() {
    return `
        <div class="command-stats">
            ${Object.entries(COMMANDS_DATA.stats).map(([key, value]) => {
                const { icon, color } = STAT_ICONS[key] || { icon: "fa-lightbulb", color: "stat-default" };
                return `
                    <div class="stat-card" data-stat="${key}">
                        <i class="fas ${icon} ${color}"></i>
                        <div class="stat-number">${value}</div>
                        <div class="stat-label">${formatStatLabel(key)}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function formatStatLabel(key) {
    const labels = {
        total: 'Total Commands',
        categories: 'Categories',
        textOps: 'Text Operations',
        toneOptions: 'Tone Options'
    };
    return labels[key] || key;
}

function initCommandsSearch() {
    const searchInput = document.querySelector('.command-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterCommands(searchTerm);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            filterCommands('');
            searchInput.blur();
        }
    });
}

function filterCommands(searchTerm) {
    const commandItems = document.querySelectorAll('.command-item');
    const categories = document.querySelectorAll('.command-category');

    let visibleCount = 0;

    commandItems.forEach(item => {
        const commandText = item.textContent.toLowerCase();
        const isVisible = !searchTerm || commandText.includes(searchTerm);

        item.style.display = isVisible ? 'flex' : 'none';
        if (isVisible) visibleCount++;
    });

    categories.forEach(category => {
        const hasVisibleItems = Array.from(category.querySelectorAll('.command-item'))
            .some(item => item.style.display === 'flex');
        category.style.display = hasVisibleItems ? 'block' : 'none';
    });

    const searchContainer = document.querySelector('.command-search-container');
    let countElement = searchContainer.querySelector('.search-count');

    if (searchTerm) {
        if (!countElement) {
            countElement = document.createElement('div');
            countElement.className = 'search-count';
            searchContainer.appendChild(countElement);
        }
        countElement.textContent = `${visibleCount} commands found`;
    } else if (countElement) {
        countElement.remove();
    }
}
