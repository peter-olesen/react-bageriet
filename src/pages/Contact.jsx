import cs from "../style/pages/Contact.module.scss";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";

import map from "../assets/img/map.png";

export const Contact = () => {
  return (
    <>
      <SectionHeader>
        <h2>Kontakt os</h2>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
      </SectionHeader>
      <div className={cs.Contact}>
        <form>
          <input type="name" name="name" id="name" placeholder="Dit navn...." />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Din e-mail...."
          />
          <textarea
            name="textfield"
            id="textfield"
            placeholder="Din besked...."
          ></textarea>
          <span>
            <button>SEND</button>
          </span>
        </form>
        <div>
          <p>
            <strong>addresse:</strong> Øster uttrupvej 1 9200 aalborg
          </p>
          <p>
            <strong>telefon:</strong> +45 25 26 95 40
          </p>
          <img src={map} alt="" />
        </div>
      </div>
    </>
  );
};
