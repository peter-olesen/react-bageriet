import ic from "./InfoCard.module.scss";

export const InfoCard = ({ image, heading, context }) => {
  return (
    <div className={ic.InfoCard}>
      <img src={image} alt={heading} />
      <h3>{heading}</h3>
      <p>{context}</p>
    </div>
  );
};
