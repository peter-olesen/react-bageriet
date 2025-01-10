import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";
import pcss from "./ProductsSection.module.scss";

export const ProductsSection = ({ id }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://api.mediehuset.net/bakeonline/categories/${id}`
        );
        if (!res.ok) {
          throw new Error("Could not fetch products");
        }

        const data = await res.json();

        setProducts(data.item.products || []);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProducts();
  }, [id]);

  // console.log(products);

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
