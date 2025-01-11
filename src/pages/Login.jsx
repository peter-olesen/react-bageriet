import ls from "../style/pages/Login.module.scss";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { InputField } from "../components/InputField/InputField";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginMessage, setLoginMessage] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);

  const submitData = () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", email);
    urlencoded.append("password", password);

    const options = {
      method: "POST",
      body: urlencoded,
    };

    fetch("https://api.mediehuset.net/token", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setUserData(data);
          setLoginMessage("Korrekt login");
        } else {
          setLoginMessage("Forkert login");
        }
      })
      .catch((err) => setError(err));
    // console.log(data);
  };

  return (
    <>
      <SectionHeader>
        <h2>Login</h2>
        <p>
          Log ind på bageriet. Har du ikke en bruger, så send os en mail på
          mail@bageriet.domain
        </p>
        {loginMessage}
      </SectionHeader>
      <div className={ls.Login}>
        <form>
          <InputField
            type="email"
            placeholder="Din e-mail...."
            name="email"
            id="email"
            action={setEmail}
            labelText=""
          />
          <InputField
            type="password"
            placeholder="Dit password...."
            name="password"
            id="password"
            action={setPassword}
            labelText=""
          />

          {/* <input
            type="email"
            name="email"
            id="email"
            placeholder="Din e-mail...."
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Dit password...."
          /> */}
        </form>
        <span>
          <button onClick={() => submitData()}>LOGIN</button>
          <button>OPRET</button>
        </span>
      </div>
    </>
  );
};
