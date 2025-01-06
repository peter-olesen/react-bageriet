import pcs from "./ProductCardSection.module.scss";
import ProductImg from "../../assets/img/produkter/1.png";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductCardSection = () => {
  return (
    <section className={pcs.ProductCardSection}>
      <h2>Nyeste bagværk</h2>
      <p>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver
        har gennemgået forandringer, når nogen har tilføjet humor eller
        tilfældige ord, som på ingen måde ser ægte ud
      </p>
      <div className={pcs.ProductGrid}>
        <ProductCard
          product="Håndværker"
          image={ProductImg}
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået..."
        />
        <ProductCard
          product="Håndværker"
          image={ProductImg}
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået..."
        />
        <ProductCard
          product="Håndværker"
          image={ProductImg}
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået..."
        />
        <ProductCard
          product="Håndværker"
          image={ProductImg}
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået..."
        />
        <ProductCard
          product="Håndværker"
          image={ProductImg}
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået..."
        />
        <ProductCard
          product="Håndværker"
          image={ProductImg}
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået..."
        />
        <ProductCard
          product="Håndværker"
          image={ProductImg}
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået..."
        />
        <ProductCard
          product="Håndværker"
          image={ProductImg}
          text="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået..."
        />
      </div>
    </section>
  );
};
