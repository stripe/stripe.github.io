(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/internal/v2/analytics.min.js';
    script.async = true;

    script.onload = (e) => {
        Analytics.viewed('stripe_github_landing_page');
    }

    document.head.appendChild(script);
})()
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-12675062-6');