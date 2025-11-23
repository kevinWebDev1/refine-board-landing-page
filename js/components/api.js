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

                        <!-- Custom slideshow -->
                        <div class="slide-wrapper">
                            
                            <!-- Slides -->
                            <div class="slides" id="api-slideshow">
                                ${Array.from({ length: 11 }).map((_, i) => `
                                    <img src="./assets/images/api_key_slides/${i}.png" class="slide" />
                                `).join("")}
                            </div>

                            <!-- Navigation Arrows -->
                            <button class="slide-btn prev-slide" id="prevSlide">❮</button>
                            <button class="slide-btn next-slide" id="nextSlide">❯</button>

                        </div>

                    </div>
                </div>

                <a href="https://aistudio.google.com/api-keys" 
                   class="btn btn-primary btn-large" 
                   style="margin-top: 10px;">
                   Get API Key
                </a>
            </div>
        </section>
    `;

    console.log('🔌 API section rendered');

    initSlideShow();
}

/* ============================================================
   CUSTOM SLIDESHOW SYSTEM (Autoplay + Arrows + Visibility)
============================================================ */
function initSlideShow() {
    const slideshow = document.getElementById("api-slideshow");
    const slides = slideshow.querySelectorAll(".slide");
    const nextBtn = document.getElementById("nextSlide");
    const prevBtn = document.getElementById("prevSlide");

    let index = 0;
    let interval;

    const showSlide = (i) => {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    };

    const next = () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    };

    const prev = () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    };

    // Autoplay every 2.5 sec
    const startAutoPlay = () => {
        interval = setInterval(next, 2500);
    };

    const stopAutoPlay = () => clearInterval(interval);

    // Arrows
    nextBtn.onclick = () => {
        stopAutoPlay();
        next();
        startAutoPlay();
    };

    prevBtn.onclick = () => {
        stopAutoPlay();
        prev();
        startAutoPlay();
    };

    // Visibility-based autoplay
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                index = 0;               // Reset to first slide
                showSlide(index);
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
        });
    }, { threshold: 0.4 });

    observer.observe(slideshow);

    // Initial state
    showSlide(0);
}


/* ============================================================
   EXISTING FUNCTIONS (unchanged)
============================================================ */
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


// Buttons
window.openAPIDocs = function () {
    alert('API documentation will be available soon!');
};

window.contactAPI = function () {
    window.location.href = 'mailto:kevinbusiness62@gmail.com?subject=Refine Board API Access';
};
