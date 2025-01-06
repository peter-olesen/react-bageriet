import "./App.scss";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <Router /> {/* Router should always be at the bottom */}
    </>
  );
}

export default App;
