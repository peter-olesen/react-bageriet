import { NavLink } from "react-router-dom";
import { PATHS } from "../../router/paths";

const navItems = [
  { id: 1, path: PATHS.home, label: "Forside" },
  { id: 2, path: PATHS.produkter, label: "Produkter" },
  { id: 3, path: PATHS.kontakt, label: "Kontakt" },
  { id: 4, path: PATHS.login, label: "Login" },
];

export const Navigation = () => (
  <nav>
    {navItems.map((item) => (
      <NavLink key={item.id} to={item.path}>
        {item.label}
      </NavLink>
    ))}
  </nav>
);
