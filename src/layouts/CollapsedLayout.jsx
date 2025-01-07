import { CollapsedHeader } from "../components/CollapsedHeader/CollapsedHeader";
import { Navigation } from "../components/Navigation/Navigation";
import { MainContainer } from "../components/MainContainer/MainContainer";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export const CollapsedLayout = () => {
  return (
    <>
      <CollapsedHeader>
        <Navigation />
      </CollapsedHeader>
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};
