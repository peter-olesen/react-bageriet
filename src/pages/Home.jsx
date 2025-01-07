import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { InfoCardSection } from "../components/InfoCardSection/InfoCardSection";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { ProductCardSection } from "../components/ProductCardSection/ProductCardSection";

export const Home = () => {
  return (
    <>
      <SectionHeader>
        <h2>Vi skaber lækkert! brød</h2>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
      </SectionHeader>
      <InfoCardSection />
      <Newsletter />
      <ProductCardSection />
    </>
  );
};
