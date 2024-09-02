// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/stripe-ios/docs",
        destination: "/stripe-ios/documentation/stripe",
        permanent: true,
      },
      {
        source: "/stripe-ios/docs/index.html",
        destination: "/stripe-ios/documentation/stripe",
        permanent: true,
      },
      {
        source: "/stripe-ios/docs/Classes/:slug([a-zA-Z0-9]+).html",
        destination: "/stripe-ios/stripe/documentation/stripe/:slug",
        permanent: true,
      },
      {
        source: "/stripe-ios/docs/(.*)",
        destination: "/stripe-ios/documentation/$1",
        permanent: true,
      },{
        source: "/stripe-java",
        destination: "/stripe-java/index.html",
        permanent: true,
      },
      {
        source: "/veneur",
        destination: "https://github.com/stripe/veneur/",
        permanent: true,
      },
      {
        source: "/veneur/(.*)",
        destination: "https://github.com/stripe/veneur/",
        permanent: true,
      },
      {
        source: "/scalding",
        destination: "https://github.com/stripe-archive/scalding/",
        permanent: true,
      },
      {
        source: "/scalding/(.*)",
        destination: "https://github.com/stripe-archive/scalding/",
        permanent: true,
      },
      {
        source: "/sequins",
        destination: "https://github.com/stripe-archive/sequins/",
        permanent: true,
      },
      {
        source: "/sequins/(.*)",
        destination: "https://github.com/stripe-archive/sequins/",
        permanent: true,
      },
      {
        source: "/elements-examples",
        destination: "https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=elements",
        permanent: false,
      },
      {
        source: "/elements-examples/(.*)",
        destination: "https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=elements",
        permanent: false,
      },
      {
        source: "/stripe-android",
        destination: "/stripe-android/index.html",
        permanent: true,
      },
      {
        source: "/stripe-react-native",
        destination: "/stripe-react-native/api-reference/index.html",
        permanent: true,
      },
      {
        source: "/stripe-identity-react-native",
        destination: "/stripe-identity-react-native/api-reference/index.html",
        permanent: true,
      },
      {
        source: "/stripe-terminal-react-native",
        destination: "/stripe-terminal-react-native/api-reference/index.html",
        permanent: true,
      },
      {
        source: "/stripe-terminal-ios",
        destination: "/stripe-terminal-ios/docs/index.html",
        permanent: true,
      },
      {
        source: "/stripe-terminal-android",
        destination: "/stripe-terminal-android/index.html",
        permanent: true,
      },
      {
        source: "/stripe.github.io",
        destination: "/",
        permanent: true,
      },
      {
        source: "/stripe.github.io/(.*)",
        destination: "/",
        permanent: true,
      }        
    ]
  },
  async rewrites() {
    return [
      {
        source: "/stripe-java/(.*)",
        destination: "https://stripe-java-six.vercel.app/$1"
      },
      {
        source: "/stripe-android/(.*)",
        destination: "https://stripe-android-pink.vercel.app/$1"
      },
      {
        source: "/stripe-terminal-ios/(.*)",
        destination: "https://stripe-terminal-ios-five.vercel.app/$1"
      },
      {
        source: "/stripe-terminal-android/(.*)",
        destination: "https://stripe-terminal-android-nine.vercel.app/$1"
      },
      {
        source: "/stripe-react-native/(.*)",
        destination: "https://stripe-react-native-kappa.vercel.app/$1"
      },
      {
        source: "/stripe-terminal-react-native/(.*)",
        destination: "https://stripe-terminal-react-native-one.vercel.app/$1"
      },
      {
        source: "/stripe-identity-react-native/(.*)",
        destination: "https://docs-stripe-identity-react-native.vercel.app/$1"
      }]
  }
};

module.exports = nextConfig;
