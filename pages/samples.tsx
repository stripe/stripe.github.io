import Head from "next/head";

export default function SamplesPage() {
  return (
    <>
      <Head>
        <meta
          httpEquiv="refresh"
          content="0; URL=https://github.com/stripe-samples"
        />
        <link rel="canonical" href="https://github.com/stripe-samples"></link>
      </Head>
      <p>
        Redirect to{" "}
        <a href="https://github.com/stripe-samples">
          https://github.com/stripe-samples
        </a>
      </p>
    </>
  );
}
