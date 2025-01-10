import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ps from "../style/pages/Product.module.scss";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://api.mediehuset.net/bakeonline/products/${id}`
        );
        if (!res.ok) {
          throw new Error("Could not fetch products");
        }

        const data = await res.json();

        setProduct(data.item || []);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    document.title = `${product?.title} - Bageriet`;
  }, [product]);

  console.log(product);

  return (
    <section className={ps.ProductSection}>
      <h2>{product?.title}</h2>
      <img src={product?.image.fullpath} alt={product?.title} />
      <p>{product?.description}</p>
    </section>
  );
};
