const Header = () => {
  return (
    <header>
      <a href="https://stripe.com">
        <img src="/images/stripe-logo.svg" alt="Stripe logo" />
      </a>
      <nav>
        <a href="https://stripe.com/docs" target="_blank" rel="noreferrer">
          Docs
        </a>
        <a
          href="https://www.youtube.com/c/StripeDevelopers/videos"
          target="_blank"
          rel="noreferrer"
        >
          Videos
        </a>
        <a
          href="https://stripe.com/open-source"
          target="_blank"
          rel="noreferrer"
        >
          Open source
        </a>
        <a
          href="https://dashboard.stripe.com/register"
          className="arrow"
          target="_blank"
          rel="noreferrer"
        >
          Create account
        </a>
      </nav>
    </header>
  );
};

export default Header;
