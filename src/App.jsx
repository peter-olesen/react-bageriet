import "./App.scss";
import { UserContextProvider } from "./context/userContext";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router /> {/* Router should always be at the bottom */}
      </UserContextProvider>
    </>
  );
}

export default App;
