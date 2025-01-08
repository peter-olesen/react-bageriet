import ls from "../style/pages/Login.module.scss";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";

export const Login = () => {
  return (
    <>
      <SectionHeader>
        <h2>Login</h2>
        <p>
          Log ind på bageriet. Har du ikke en bruger, så send os en mail på
          mail@bageriet.domain
        </p>
      </SectionHeader>
      <div className={ls.Login}>
        <form>
          <input
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
          />
          <span>
            <button>LOGIN</button>
          </span>
        </form>
      </div>
    </>
  );
};
