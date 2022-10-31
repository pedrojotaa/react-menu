import "./App.css";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "./data";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <main>
      <section>
        <h1>our menu</h1>
        <div>_________</div>
        <div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
