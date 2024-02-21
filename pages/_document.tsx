import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        {process.env.NODE_ENV === "production" ? (
          <meta
            httpEquiv="Content-Security-Policy"
            content={`default-src 'self';
            connect-src 'self' q.stripe.com;
            img-src 'self' q.stripe.com;
            font-src 'self';
            style-src 'self';
            script-src 'self' js.stripe.com;`}
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
