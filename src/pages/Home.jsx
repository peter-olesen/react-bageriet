import { HomeSection } from "../components/HomeSection/HomeSection";
import { InfoCardSection } from "../components/InfoCardSection/InfoCardSection";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { ProductCardSection } from "../components/ProductCardSection/ProductCardSection";

export const Home = () => {
  return (
    <>
      <HomeSection />
      <InfoCardSection />
      <Newsletter />
      <ProductCardSection />
    </>
  );
};
