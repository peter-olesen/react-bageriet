import { useState } from "react";

import { HeaderContainer } from "../components/HeaderContainer/HeaderContainer";
import { Navigation } from "../components/Navigation/Navigation";
import { MainContainer } from "../components/MainContainer/MainContainer";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";

export const Layout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <HeaderContainer currentIndex={currentIndex}>
        <Navigation />
        <HeroSlider onSlideChange={setCurrentIndex} />
      </HeaderContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};
