import StripesContainer from "components/StripesContainer";
import type { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stripe Developer Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Stripe Developer Resources" />
        <meta property="og:url" content="https://stripe.dev" />
        <meta
          property="og:description"
          content="Demos and tools for developers to try out the Stripe platform. Stripe is a suite of APIs that powers commerce for businesses of all sizes."
        />
        <meta
          property="og:image"
          content="https://stripe.dev/images/social.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://stripe.dev/images/social.png"
        />
        <meta name="twitter:site" content="@stripedev" />
        <meta name="twitter:title" content="Stripe Developer Resources" />
        <meta
          name="twitter:description"
          content="Demos and tools for developers to try out the Stripe platform. Stripe is a suite of APIs that powers commerce for businesses of all sizes."
        />
      </Head>
      <Script
        src="https://js.stripe.com/internal/v2/analytics.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window.Analytics !== "undefined") {
            window.Analytics.viewed("stripe_github_landing_page");
          }
        }}
      />
      <StripesContainer />
      <Component {...pageProps} />
    </>
  );
}
