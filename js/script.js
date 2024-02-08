(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/internal/v2/analytics.min.js';
    script.async = true;

    script.onload = (e) => {
        Analytics.viewed('stripe_github_landing_page');
    }

    document.head.appendChild(script);
})();