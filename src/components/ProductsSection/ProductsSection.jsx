import { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import pcss from "./ProductsSection.module.scss";

export const ProductsSection = () => {
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

  console.log(products);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <section className={pcss.ProductCardSection}>
      <div className={pcss.ProductGrid}>
        {products?.map((item) => {
          return (
            <ProductCard
              key={item.title}
              product={item.title}
              comments={item.num_comments}
              image={item.image.fullpath}
              text={truncateText(item.teaser, 120)}
            />
          );
        })}
      </div>
    </section>
  );
};
