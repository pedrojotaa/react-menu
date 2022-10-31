import React from "react";

function Categories({ categories, filterItems }) {
  return (
    <div>
      {categories.map((category, id) => {
        return (
          <button key={id} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
