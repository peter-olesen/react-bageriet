import sh from "./SectionHeader.module.scss";

export const SectionHeader = ({ children }) => {
  return <section className={sh.SectionHeader}>{children}</section>;
};
