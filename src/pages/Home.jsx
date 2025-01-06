import { InfoCardSection } from "../components/InfoCardSection/InfoCardSection";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { ProductCardSection } from "../components/ProductCardSection/ProductCardSection";
import hs from "../style/pages/Home.module.scss";

export const Home = () => {
  return (
    <>
      <section className={hs.HomeSection}>
        <h2>Vi skaber lækkert! brød</h2>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
      </section>
      <InfoCardSection />
      <Newsletter />
      <ProductCardSection />
    </>
  );
};
