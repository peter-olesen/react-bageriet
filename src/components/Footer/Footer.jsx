import fs from "./Footer.module.scss";
import { BackToTop } from "../BackToTop/BackToTop";

export const Footer = () => {
  return (
    <>
      <footer className={fs.FooterContainer}>
        <BackToTop />
        <div className={fs.Footer}>
          <p className={fs.FooterTitle}>bageriet</p>
          <p className={fs.FooterText}>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
            udgaver har gennemgået forandringer.
          </p>
        </div>
        <div className={fs.Copyright}>
          <p>Copyright © 2017 bageriet aps</p>
        </div>
      </footer>
    </>
  );
};
