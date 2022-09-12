import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/internal/v2/analytics.min.js";
    script.async = true;

    script.onload = (e) => {
      Analytics.viewed("stripe_github_landing_page");
    };

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-12675062-6";
    script.async = true;

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-12675062-6");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
