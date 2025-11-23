export function renderAPI() {
    const container = document.getElementById('api-container');
    if (!container) return;

    container.innerHTML = `
        <section id="api" class="api">
            <div class="container api-container-inner">

                <div class="api-header">
                    <p class="api-subheading">Paste This API Key</p>
                </div>

                <div class="api-content">

                    <div class="api-info">

                        <!-- Custom slideshow -->
                        <div class="slide-wrapper">

                            <!-- Desktop Slides -->
                            <div class="slides desktop-slides" id="api-slideshow">
                                ${Array.from({ length: 11 }).map((_, i) => `
                                    <img src="./assets/images/api_key_slides/${i}.png" class="slide" />
                                `).join("")}
                            </div>

                            <!-- Mobile Slides -->
                            <div class="slides mobile-slides" id="api-slideshow-mobile">
                                ${Array.from({ length: 11 }).map((_, i) => `
                                    <img src="./assets/images/api_key_slides/mobile/${i}.png" class="slide" />
                                `).join("")}
                            </div>

                            <!-- Navigation Arrows -->
                            <button class="slide-btn prev-slide" id="prevSlide">❮</button>
                            <button class="slide-btn next-slide" id="nextSlide">❯</button>
                        </div>

                    </div>

                    <!-- API Button -->
                    <a href="https://aistudio.google.com/api-keys" 
                       class="btn btn-primary btn-large get-api-btn">
                       Get API Key
                    </a>

                </div>

            </div>
        </section>
    `;

    console.log('🔌 API section rendered');

    // Initialize both slideshows independently
    initSlideShow("api-slideshow");
    initSlideShow("api-slideshow-mobile");
}


/* ============================================================
   CUSTOM SLIDESHOW SYSTEM 
============================================================ */
function initSlideShow(id) {
    const slideshow = document.getElementById(id);
    if (!slideshow) return;

    const slides = slideshow.querySelectorAll(".slide");
    if (!slides.length) return;

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

    const startAutoPlay = () => interval = setInterval(next, 2500);
    const stopAutoPlay = () => clearInterval(interval);

    nextBtn.onclick = () => { stopAutoPlay(); next(); startAutoPlay(); };
    prevBtn.onclick = () => { stopAutoPlay(); prev(); startAutoPlay(); };

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            index = 0;
            showSlide(index);
            startAutoPlay();
        } else {
            stopAutoPlay();
        }
    }, { threshold: 0.4 });

    observer.observe(slideshow);

    showSlide(0);
}


/* ============================================================
   EXISTING FUNCTIONS (unchanged)
============================================================ */
function renderEndpoints() {
    const endpoints = [ /* unchanged */ ];
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

window.openAPIDocs = () => alert('API documentation will be available soon!');
window.contactAPI = () =>
    window.location.href = 'mailto:kevinbusiness62@gmail.com?subject=Refine Board API Access';
