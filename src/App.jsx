import "./App.css";
import "./index.css";
import { useState } from "react";
import Logo from "./components/Logo/Logo";
import Form from "./components/Logo/Form/Form";
import PackingList from "./components/Logo/PackingList/PackingList";
import Stats from "./components/Logo/Stats/Stats";

function App() {
  const [items, setItems] = useState([]);
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="font-mono">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
      />
      <Stats />
    </div>
  );
}

export default App;
