import { HeaderContainer } from "../components/HeaderContainer/HeaderContainer";
import { Navigation } from "../components/Navigation/Navigation";
import { MainContainer } from "../components/MainContainer/MainContainer";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};
