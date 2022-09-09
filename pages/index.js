import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ClientLibraries from "../components/ClientLibraries";

export default function Home() {
  const [latestPosts, setLatestPosts] = useState();

  const fetchDevToPosts = async () => {
    const data = await fetch(
      "https://dev.to/api/articles?username=stripe&state=all"
    );
    const posts = await data.json();

    const latest = posts.slice(0, 3);

    setLatestPosts(latest);
  };

  useEffect(() => {
    fetchDevToPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Stripe Developer Resources</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta charSet="utf-8" />
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

      <div className={styles.stripesContainer}>
        <div className={styles.stripe}></div>
        <div className={styles.stripe}></div>
        <div className={styles.stripe}></div>
        <div className={styles.stripe}></div>
        <div className={styles.stripe}></div>
      </div>

      <Header />

      <main>
        <h2>Blog posts</h2>
        <p>Latest</p>
        <section className="posts">
          {latestPosts &&
            latestPosts.map((p, i) => {
              return (
                <a href={p.url} key={i} className="post-container">
                  <div className="post">
                    <img
                      alt={`${p.title}`}
                      src={p.cover_image}
                      className={styles.img}
                    />

                    <p className="post-title">{p.title}</p>
                    <p className="date">
                      {new Date(p.published_at).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <img
                      alt={`${p.user.name} profile picture`}
                      className="avatar"
                      src={p.user.profile_image}
                    />
                    <span className="username">{p.user.name}</span>
                  </div>
                </a>
              );
            })}
        </section>
        <a href="https://dev.to/stripe" className="more">
          Discover more
        </a>

        <h2>Developer essentials</h2>
        <section className="demos">
          <div className="preview">
            <a
              href="https://stripe.com/docs/stripe-cli"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/stripe-cli.png" alt="Homepage of Payments" />
            </a>
            <h3 className="title">
              <a
                href="https://stripe.com/docs/stripe-cli"
                className="uppercase"
                target="_blank"
                rel="noreferrer"
              >
                Stripe Command Line (CLI)
              </a>
            </h3>
            <div>
              <p>
                Build, test, and manage your integration with Stripe directly
                from your terminal. With the CLI you can:
              </p>
              <ul>
                <li>
                  Create, retrieve, update, and delete{" "}
                  <a href="https://stripe.com/docs/cli/resources">
                    API objects
                  </a>
                </li>
                <li>
                  <a href="https://stripe.com/docs/cli/logs/tail">
                    Tail API request logs
                  </a>{" "}
                  in real time
                </li>
                <li>
                  <a href="https://stripe.com/docs/cli/listen">
                    Securely test webhooks
                  </a>{" "}
                  without third-party tunneling software
                </li>
              </ul>
            </div>
            <a
              href="https://stripe.com/docs/stripe-cli"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Install the CLI
            </a>
          </div>

          <div className="preview  typographic">
            <a href="https://stripe.com/docs/">
              <img
                src="/images/docs.png"
                alt="Stripe documentation"
                target="_blank"
                rel="noreferrer"
              />
            </a>
            <h3 className="title">
              <a
                href="https://stripe.com/docs/"
                className="uppercase"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
            </h3>
            <p>
              Explore our guides and examples to integrate Stripe. Our
              documentation covers the essentials:
            </p>
            <ul>
              <li>
                <a href="https://stripe.com/docs/payments?payments=popular">
                  Payments
                </a>{" "}
                - Build an integration to accept payments online or in person
              </li>
              <li>
                <a href="https://stripe.com/docs/business">
                  Business operations
                </a>{" "}
                - Monitor, protect, and report on your money
              </li>
              <li>
                <a href="https://stripe.com/docs/financial-services">
                  Financial services
                </a>{" "}
                - Move, control, and borrow money with Stripe
              </li>
            </ul>

            <a
              href="https://stripe.com/docs/"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Read the docs
            </a>
          </div>

          <div className="preview">
            <a
              href="https://github.com/stripe-samples"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/samples.png" alt="Stripe samples" />
            </a>
            <h3 className="title">
              <a
                href="https://github.com/stripe-samples"
                className="uppercase"
                target="_blank"
                rel="noreferrer"
              >
                Stripe samples
              </a>
            </h3>
            <div>
              <p>
                Build with sample code designed to help you get started with
                your Stripe integration. Learn how to:
              </p>
              <ul>
                <li>
                  Quickly{" "}
                  <a href="https://github.com/stripe-samples/checkout-one-time-payments">
                    accept one-time payments
                  </a>{" "}
                  with Stripe Checkout
                </li>
                <li>
                  Combine Checkout and Billing for{" "}
                  <a href="https://github.com/stripe-samples/checkout-single-subscription">
                    fast subscription pages
                  </a>
                </li>
                <li>
                  Accept a one-time payment on{" "}
                  <a href="https://github.com/stripe-samples/accept-a-payment">
                    web, iOS, or Android
                  </a>
                  .
                </li>
              </ul>
            </div>
            <a
              href="https://github.com/stripe-samples"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Explore samples
            </a>
          </div>
        </section>

        <h2>Developer resources</h2>
        <section className="tools">
          <a
            href="https://stripe.com/docs/development/quickstart"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="uppercase">Development quickstart</h3>
            <p>
              Obtain API keys, install a client library, and make a test API
              request.
            </p>
          </a>
          <a
            href="https://stripe.com/docs/payments/integration-builder"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="uppercase">Integration builder</h3>
            <p>
              Learn how to embed a custom Stripe payment form in your website or
              application.
            </p>
          </a>
          <a
            href="https://stripe.com/docs/api"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="uppercase">API reference</h3>
            <p>
              View all backend API objects, methods, attributes, and responses.
            </p>
          </a>
          <a
            href="https://checkout.stripe.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="uppercase">Checkout demo</h3>
            <p>
              Choose your use case for a secure, Stripe-hosted payment page.
            </p>
          </a>
          <a
            href="https://www.youtube.com/stripedevelopers"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="uppercase">YouTube tutorials</h3>
            <p>
              Watch engineers walk through code examples and developer product
              updates.
            </p>
          </a>
        </section>

        <ClientLibraries />

        <a name="#developer-digest" id="developer-digest">
          &nbsp;
        </a>
        <h2 id="subscribe">Developer digest</h2>
        <section className="newsletter">
          <div className="sign-up">
            <p>
              Stay up to date with the latest from Stripe’s API and developer
              products:
              <a
                href="https://go.stripe.global/dev-digest"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe to the Stripe Developer Digest
              </a>
              , and read recent issues on{" "}
              <a
                href="https://dev.to/t/stripedevdigest"
                target="_blank"
                rel="noreferrer"
              >
                dev.to
              </a>
            </p>
          </div>
          <p>
            <a href="http://twitter.com/stripedev">
              <img
                src="/images/twitter.svg"
                alt="Twitter"
                className="social-icon"
              />
            </a>{" "}
            <a href="https://stackoverflow.com/questions/tagged/stripe-payments">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src="/images/stackoverflow.svg"
                alt="Stackoverflow"
                className="social-icon"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://dev.to/stripe">
              <img
                src="/images/devto.svg"
                alt="dev.to"
                className="social-icon"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://youtube.com/stripedevelopers">
              <img
                src="/images/youtube.svg"
                alt="YouTube"
                className="social-icon"
              />
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
