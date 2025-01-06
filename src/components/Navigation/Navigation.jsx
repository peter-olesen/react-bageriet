import ns from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../router/paths";

const navItems = [
  { id: 1, path: PATHS.home, label: "Forside" },
  { id: 2, path: PATHS.produkter, label: "Produkter" },
  { id: 3, path: PATHS.kontakt, label: "Kontakt" },
  { id: 4, path: PATHS.login, label: "Login" },
];

export const Navigation = () => (
  // <nav>
  //   {navItems.map((item) => (
  //     <NavLink key={item.id} to={item.path}>
  //       {item.label}
  //     </NavLink>
  //   ))}
  // </nav>

  <nav className={ns.Navigation}>
    <ul>
      {navItems.slice(0, 2).map((item) => (
        <li key={item.id}>
          <NavLink to={item.path}>{item.label}</NavLink>
        </li>
      ))}
      <h1>bageriet</h1>
      {navItems.slice(2).map((item) => (
        <li key={item.id}>
          <NavLink to={item.path}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
