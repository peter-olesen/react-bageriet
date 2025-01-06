import btt from "./BackToTop.module.scss";
import arrow from "../../assets/img/chevron.png";

export const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <span onClick={scrollToTop} className={btt.Circle}>
      <img src={arrow} alt="" />
    </span>
  );
};
