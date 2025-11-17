import { COMMANDS_DATA } from "../data/commands.js"

export function renderHero() {
    const container = document.getElementById('hero-container');
    if (!container) return;

    container.innerHTML = `
        <section class="hero">
            <div class="container">
                <div class="hero-grid">
                    <!-- Left Column - Text Content -->
                    <div class="hero-content">
                        <h1 class="hero-title">
                            <span class="gold-gradient">Type Less,</span>
                            <span class="gold-gradient">Communicate Better</span>
                        </h1>
                        <p class="hero-subtitle">AI-powered smart keyboard App, faster, and more powerful than ever before.</p>
                        
                        <div class="hero-stats">
                            <div class="stat">
                                <span class="stat-number">${COMMANDS_DATA.stats.total}+</span>
                                <span class="stat-label">AI Commands</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">3MB</span>
                                <span class="stat-label">Lightweight</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">0</span>
                                <span class="stat-label">Ads</span>
                            </div>
                        </div>

                        <div class="hero-buttons">
                            <button class="btn btn-primary" onclick="downloadApp()">
                                <span>Download Now</span>
                            </button>
                             <button class="btn btn-primary" onclick="downloadApp()">
                                <span>Update Now</span>
                            </button>
                        </div>
                    </div>

                    <!-- Right Column - Phone Mockup -->
                    <div class="hero-mockup">
                        <div class="phone-mockup-container">
                            <!-- Back Mockup (Blurred, subtle) -->
                            <div class="back-mockup">
                                <div class="back-mockup-inner"></div>
                            </div>

                            <!-- Main Mockup (Focused, pronounced shadow) -->
                            <div class="main-mockup">
                                <video autoplay loop muted playsinline
                                    class="mockup-video"
                                    poster="./assets/images/fallback.png">
                                <source src="./assets/videos/refine-video-mock.mp4" type="video/mp4">
                                <source src="./assets/videos/refine-video-mock.webm" type="video/webm">
                                <!-- Fallback for browsers that don’t support <video> -->
                                Your browser does not support the video tag.
                                </video>

                                <!-- Optional: true image fallback if video fails to load -->
                                <noscript>
                                <img src="./assets/images/fallback.png" 
                                    alt="Refine Board App Demo" 
                                    class="mockup-fallback" />
                                </noscript>


                                <!-- Camera Notch -->
                                <div class="camera-notch"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    console.log('🎯 Hero section rendered');
}