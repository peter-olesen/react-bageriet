import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { PATHS } from "./paths";
import { Layout } from "../layouts/layout";
import { CollapsedLayout } from "../layouts/CollapsedLayout";

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      [PATHS.home]: "Bageriet",
      [PATHS.produkter]: "Produkter - Bageriet",
      [PATHS.kontakt]: "Kontakt  - Bageriet",
      [PATHS.login]: "Login  - Bageriet",
    };

    const currentTitle = pageTitles[location.pathname];

    if (currentTitle) {
      document.title = currentTitle;
    } else {
      document.title = "404 Page Not Found";
    }
  }, [location]);

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route element={<CollapsedLayout />}>
        <Route path={PATHS.produkter} element={<Products />} />
        <Route path={PATHS.kontakt} element={<Contact />} />
        <Route path={PATHS.login} element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
