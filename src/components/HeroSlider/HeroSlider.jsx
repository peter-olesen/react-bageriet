import { useState } from "react";
import hss from "./HeroSlider.module.scss";

import arrow from "../../assets/img/chevron.png";

import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";

export const HeroSlider = ({ onSlideChange }) => {
  const [index, setIndex] = useState(0);

  const imgArray = [slide1, slide2, slide3];

  const updateIndex = (newIndex) => {
    setIndex(newIndex);
    onSlideChange(newIndex);
  };

  const slideRight = () => {
    updateIndex(index === imgArray.length - 1 ? 0 : index + 1);
  };

  const slideLeft = () => {
    updateIndex(index === 0 ? imgArray.length - 1 : index - 1);
  };

  return (
    <div className={hss.HeroSlider}>
      <div className={hss.HeroContent}>
        <button onClick={slideLeft} className={hss.LeftArrow}>
          <img src={arrow} alt="" />
        </button>
        <h2>Vi elsker at lave brød</h2>
        <button onClick={slideRight} className={hss.RightArrow}>
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className={hss.HeroDots}>
        {imgArray.map((_, idx) => (
          <button
            key={idx}
            onClick={() => updateIndex(idx)}
            className={idx === index ? hss.ActiveDot : hss.Dot}
          ></button>
        ))}
      </div>
    </div>
  );
};
