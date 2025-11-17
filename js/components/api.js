export function renderAPI() {
    const container = document.getElementById('api-container');
    if (!container) return;

    container.innerHTML = `
        <section id="api" class="api">
            <div class="container">
                <div class="api-header">
                    <p class="api-subheading">Paste This API Key in Refine Board's to use AI</p>
                </div>
                
                <div class="api-content">
                    <div class="api-info">
                    <video controls autoplay loop muted playsinline
                                    class="mockup-video"
                                    poster="./assets/images/fallback.png">
                                <source src="./assets/videos/get-api-demo.webm" type="video/webm">
                                <!-- Fallback for browsers that don’t support <video> -->
                                Your browser does not support the video tag.
                                </video>
                            </div>
                            </div>
                            <a href="https://aistudio.google.com/api-keys" class="btn btn-primary btn-large" style="margin-top: 10px;">Get API Key</a>
                        
                    </div>
                    
                    </div>
                </div>
            </div>
        </section>
    `;

    console.log('🔌 API section rendered');
}

function renderEndpoints() {
    const endpoints = [
        {
            method: "POST",
            path: "/v1/refine",
            description: "Refine and clean up text",
            example: { text: "Haililo Hiwe aree yuio ?", command: "refine" }
        },
        {
            method: "POST", 
            path: "/v1/tone",
            description: "Change text tone",
            example: { text: "Hello there", tone: "formal", command: "ctf" }
        },
        {
            method: "POST",
            path: "/v1/translate", 
            description: "Translate text between languages",
            example: { text: "How are you?", target_language: "hindi", command: "tr" }
        },
        {
            method: "POST",
            path: "/v1/expand",
            description: "Expand text with more detail", 
            example: { text: "Meeting went well", command: "el" }
        },
        {
            method: "POST",
            path: "/v1/generate/image",
            description: "Generate image prompts",
            example: { concept: "serene mountain landscape", command: "img" }
        }
    ];

    return endpoints.map(endpoint => `
        <div class="endpoint-item">
            <div class="endpoint-method ${endpoint.method.toLowerCase()}">
                ${endpoint.method}
            </div>
            <div class="endpoint-info">
                <div class="endpoint-path">${endpoint.path}</div>
                <div class="endpoint-description">${endpoint.description}</div>
            </div>
        </div>
    `).join('');
}

// Global functions for buttons
window.openAPIDocs = function() {
    alert('API documentation will be available soon!');
};

window.contactAPI = function() {
    window.location.href = 'mailto:kevinbusiness62@gmail.com?subject=Refine Board API Access';
};