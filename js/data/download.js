export default function downloadApp() {
    const appUrl = "https://github.com/kevinWebDev1/refine-board-landing-page/releases/latest/download/refiner-keyboard.apk";
    window.location.href = appUrl;
}

// Exposing downloadApp globally for inline HTML use
window.downloadApp = downloadApp;
