import hs from "./CollapsedHeader.module.scss";

export const CollapsedHeader = ({ children }) => {
  return <header className={hs.Header}>{children}</header>;
};
