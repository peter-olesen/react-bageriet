import ns from "./Newsletter.module.scss";

export const Newsletter = () => {
  return (
    <section className={ns.Newsletter}>
      <div className={ns.NewsletterContent}>
        <h3>Tilmeld dig vores nyhedsbrev</h3>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver
        </p>
        <form>
          <span className={ns.NewsletterIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
          </span>
          <input
            type="email"
            name="newsletter"
            id="newsletter"
            placeholder="indtast din email...."
          />
          <button>TILMELD</button>
        </form>
      </div>
    </section>
  );
};
