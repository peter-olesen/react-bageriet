import { NavLink } from "react-router-dom";
import pcs from "./ProductCategories.module.scss";

export const ProductCategories = () => {
  return (
    <ul className={pcs.ProductCategories}>
      <li>
        <NavLink to="/produkter">Rundstykker</NavLink>
      </li>
      <li>
        <NavLink to="/produkter">Baguettes</NavLink>
      </li>
      <li>
        <NavLink to="/produkter">Franksbrød</NavLink>
      </li>
      <li>
        <NavLink to="/produkter">Kager</NavLink>
      </li>
      <li>
        <NavLink to="/produkter">Rugbrød</NavLink>
      </li>
    </ul>
  );
};
