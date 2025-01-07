import hs from "./HeaderContainer.module.scss";

import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";

const imgArray = [slide1, slide2, slide3];

export const HeaderContainer = ({ children, currentIndex }) => {
  return (
    <header
      className={hs.Header}
      style={{ backgroundImage: `url(${imgArray[currentIndex]})` }}
    >
      {children}
    </header>
  );
};
