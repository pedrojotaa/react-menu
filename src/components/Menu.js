import React from "react";

import styles from "./Menu.module.css";

function Menu({ items }) {
  return (
    <div>
      {items.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;

        return (
          <article key={id} className={styles.container}>
            <img className={styles.img} src={img} alt={title}></img>
            <header className={styles.content} >
              <h4 className={styles.title} >{title}</h4>
              <h4 className={styles.price} >R$ {price}</h4>
            </header>
            <p className={styles.desc}>{desc}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
