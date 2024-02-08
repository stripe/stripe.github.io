import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <script
          defer
          data-domain="stripe.dev"
          src="https://plausible.io/js/script.js"
        ></script>
        {process.env.NODE_ENV === "production" ? (
          <meta
            httpEquiv="Content-Security-Policy"
            content={`default-src 'self';
            connect-src 'self' q.stripe.com plausible.io;
            img-src 'self' q.stripe.com;
            font-src 'self';
            style-src 'self';
            script-src 'self' js.stripe.com plausible.io;`}
          />
        ) : null}
      </Head>
      <body id="root">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
