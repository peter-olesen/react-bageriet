import hs from "./HomeSection.module.scss";

export const HomeSection = () => {
  return (
    <section className={hs.HomeSection}>
      <h2>Vi skaber lækkert! brød</h2>
      <p>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver
        har gennemgået forandringer, når nogen har tilføjet humor eller
        tilfældige ord, som på ingen måde ser ægte ud
      </p>
    </section>
  );
};
