import "./App.css";
import "./index.css";

import Logo from "./components/Logo/Logo";
import Form from "./components/Logo/Form/Form";
import PackingList from "./components/Logo/PackingList/PackingList";
import Stats from "./components/Logo/Stats/Stats";

function App() {
  return (
    <div className="font-mono">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
