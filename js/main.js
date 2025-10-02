import { initTheme } from './components/theme.js';
import { initNavigation } from './components/navigation.js';
import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderFeatures } from './components/features.js';
import { renderCommands } from './components/commands.js';
import { renderDemo } from './components/demo.js';
import { renderFeedback } from './components/feedback.js';
import { renderPricing } from './components/pricing..js';
import { renderAPI } from './components/api.js';
import { renderFooter } from './components/footer.js';
import { initAnimations } from './components/animations.js';

class App {
    constructor() {
        this.init();
    }

    async init() {
        try {
            // Render components in sequence
            await this.renderComponents();
            
            // Initialize functionality
            this.initFunctionality();
            
            // Start animations
            this.initAnimations();
            
            console.log('🚀 Refine Board App initialized successfully');
        } catch (error) {
            console.error('❌ App initialization failed:', error);
        }
    }

    async renderComponents() {
        renderHeader();
        renderHero();
        renderFeatures();
        renderCommands();
        renderDemo();
        renderFeedback();
        renderPricing();
        renderAPI();
        renderFooter();
    }

    initFunctionality() {
        initTheme();
        initNavigation();
    }

    initAnimations() {
        initAnimations();
    }
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});