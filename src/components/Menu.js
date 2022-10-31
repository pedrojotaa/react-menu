import React from "react";

function Menu({ items }) {
  return (
    <div>
      {items.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;

        return (
          <article key={id}>
            <img src={img} alt={title}></img>
            <header>
              <h4>{title}</h4>
              <h4>{price}</h4>
              <p>{desc}</p>
            </header>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
