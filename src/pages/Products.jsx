import ps from "../style/pages/Products.module.scss";
import { ProductCategories } from "../components/ProductCategories/ProductCategories";
import { ProductsSection } from "../components/ProductsSection/ProductsSection";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";

export const Products = () => {
  return (
    <>
      <SectionHeader>
        <h2>Vores elskede bagværk</h2>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
      </SectionHeader>
      <div className={ps.Products}>
        <ProductCategories />
        <ProductsSection />
      </div>
    </>
  );
};
