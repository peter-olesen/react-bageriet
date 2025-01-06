import hs from "./HeaderContainer.module.scss";

export const HeaderContainer = ({ children }) => {
  return <header className={hs.Header}>{children}</header>;
};
