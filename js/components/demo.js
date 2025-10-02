export function renderDemo() {
    const container = document.getElementById('demo-container');
    if (!container) return;

    // Demo Section 
    container.innerHTML = `
        <section id="demo" class="demo">
            <div class="container">
                <h2 class="section-title">See It In Action</h2>
                
                <div class="demo-container">
                    <div class="gif-placeholder">
                        <div class="gif-content">
                            <div class="gif-icon">🎬</div>
                            <h3>App Demo Coming Soon</h3>
                            <p>Watch Refine Board transform your typing experience</p>
                            <div class="pulse-animation"></div>
                        </div>
                    </div>
                    
                    <div class="demo-examples">
                        <div class="example">
                            <div class="example-before">
                                <strong>Input:</strong> "kya haal h bhai? aaj kya plan h?"
                            </div>
                            <div class="example-after">
                                <strong>Output:</strong> "Kya haal hai bhai? Aaj kya plan hai?"
                            </div>
                        </div>
                        
                        <div class="example">
                            <div class="example-before">
                                <strong>Input:</strong> "/ct [casual] I would like to inquire about your availability tomorrow."
                            </div>
                            <div class="example-after">
                                <strong>Output:</strong> "Hey, are you free tomorrow?"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

    console.log('🔻 Footer sections rendered');
}