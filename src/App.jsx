import "./App.scss";
import { Router } from "./router/Router";
import { Layout } from "./layouts/layout";

function App() {
  return (
    <>
      <Layout />
      <Router /> {/* Router should always be at the bottom */}
    </>
  );
}

export default App;
