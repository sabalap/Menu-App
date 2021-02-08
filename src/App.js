import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ["all", ...new Set(items.map((item) => item.category))]
function App() {
  const [elements, setElements] = useState(items);
  const [category, setCategory] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === "all") {
      return setElements(items)
    }
    const newElements = items.filter((item) => item.category === category)
    setElements(newElements)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filteredItems={filteredItems} category={category} />
        <Menu elements={elements} />
      </section>
    </main>
  )
}

export default App;
