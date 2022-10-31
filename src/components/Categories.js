import React from "react";
import styles from './Categories.module.css'

function Categories({ categories, filterItems }) {
  return (
    <div className={styles.container_btn} >
      {categories.map((category, id) => {
        return (
          <button className={styles.btn} key={id} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
