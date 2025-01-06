import ics from "./InfoCardSection.module.scss";
import { InfoCard } from "../InfoCard/InfoCard";
import CardImgOne from "../../assets/img/article.jpg";
import CardImgTwo from "../../assets/img/article2.jpg";
import CardImgThree from "../../assets/img/article3.jpg";

export const InfoCardSection = () => {
  return (
    <section className={ics.InfoCardSection}>
      <InfoCard
        heading="Kreativitet dyrkes"
        image={CardImgOne}
        context="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har "
      />
      <InfoCard
        heading="Vi elsker brød"
        image={CardImgTwo}
        context="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har "
      />
      <InfoCard
        heading="Sans for detaljer"
        image={CardImgThree}
        context="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har "
      />
    </section>
  );
};
