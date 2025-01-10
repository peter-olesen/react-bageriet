import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import pcs from "./ProductCardSection.module.scss";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductCardSection = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://api.mediehuset.net/bakeonline/products"
        );
        if (!res.ok) {
          throw new Error("Could not fetch products");
        }

        const data = await res.json();

        const mixedProducts = data.items
          ? data.items.sort(() => Math.random() - 0.5).slice(0, 8)
          : [];
        setProducts(mixedProducts);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProducts();
  }, []);

  // console.log(products);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <section className={pcs.ProductCardSection}>
      <h2>Nyeste bagværk</h2>
      <p>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver
        har gennemgået forandringer, når nogen har tilføjet humor eller
        tilfældige ord, som på ingen måde ser ægte ud
      </p>
      <div className={pcs.ProductGrid}>
        {products?.map((item) => {
          return (
            <NavLink key={item.title} to={`/produkt/${item.id}`}>
              <ProductCard
                product={item.title}
                comments={item.num_comments}
                image={item.image.fullpath}
                text={truncateText(item.teaser, 120)}
              />
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
