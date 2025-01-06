import pc from "./ProductCard.module.scss";

export const ProductCard = ({ image, product, text }) => {
  return (
    <div className={pc.ProductCard}>
      <img src={image} alt={product} />
      <span>Comments</span>
      <h3>{product}</h3>
      <p>{text}</p>
      <button>SE MERE</button>
    </div>
  );
};
