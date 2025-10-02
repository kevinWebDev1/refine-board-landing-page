export function renderFooter() {
    const container = document.getElementById('footer-container');
    if (!container) return;

    container.innerHTML = `
        <!-- How It Works -->
        <section class="how-it-works">
            <div class="container">
                <h2 class="section-title">How It Works</h2>
                
                <div class="steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3>Download & Install</h3>
                        <p>Get the lightweight APK and set as default keyboard</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <h3>Type & Command</h3>
                        <p>Start typing and use slash commands like /ct, /img, /rp</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <h3>Transform Instantly</h3>
                        <p>Watch AI refine, expand, or transform your text in real-time</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Download Section -->
        <section id="download" class="download">
            <div class="container">
                <h2 class="section-title">Ready to Transform Your Typing?</h2>
                <p class="section-subtitle">Join thousands who type smarter with Refine Board</p>
                
                <div class="download-buttons">
                    <button class="btn btn-primary btn-large" onclick="downloadApp()">
                        <span>Download Refine Board</span>
                    </button>
                    <button class="btn btn-primary btn-large" onclick="downloadApp()">
                        <span>Update Refine Board</span>
                    </button>
                </div>
                
                <div class="tech-specs">
                    <div class="spec">
                        <strong>Size:</strong> &lt; 1MB
                    </div>
                    <div class="spec">
                        <strong>Permissions:</strong> Only Vibrate and Internet
                    </div>
                    <div class="spec">
                        <strong>Ads:</strong> None
                    </div>
                    <div class="spec">
                        <strong>Requirements:</strong> Android 8.0+
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-logo">
                        <div class="logo-icon">
                            <img class="logo-img" alt="Refine Board Logo" src="assets/images/refine-board-logo.webp" />
                        </div>
                        <span class="logo-text">Refine Board</span>
                    </div>
                    
                    <div class="footer-links">
                        <a href="mailto:kevinbusiness62@gmail.com">Support</a>
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                    </div>
                    
                    <div class="footer-copyright">
                        &copy; 2025 Refine Board. All rights reserved.
                        <div>Credits: 
                        <a href="https://github.com/rkkr/simple-keyboard">Simple Keyboard</a> ,
                        <a href="https://github.com/openboard-team/openboard">Open Board</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    console.log('🔻 Footer sections rendered');
}
// module.exports = { renderFooter };