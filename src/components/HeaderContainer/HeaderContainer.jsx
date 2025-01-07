import hs from "./HeaderContainer.module.scss";

export const HeaderContainer = ({ children }) => {
  return (
    <header className={hs.Header}>
      {children}
      <h2>Vi elsker at lave brød</h2>
    </header>
  );
};
