import ccs from "./CommentCard.module.scss";

export const CommentCard = ({ image, name, date, comment }) => {
  return (
    <section className={ccs.CommentCard}>
      <img src={image} alt="" />
      <div>
        <p className={ccs.Name}>{name}</p>
        <p className={ccs.Date}>{date}</p>
        <p className={ccs.Comment}>{comment}</p>
      </div>
    </section>
  );
};
