import React, { useState } from "react";

export default function Navigation() {
  const [menuState, setState] = useState(false);
  function handelEvent() {
    if (!menuState) {
      document.getElementById("idx").style.zIndex = -1;
      document.getElementById("idx2").style.zIndex = -1;
    } else {
      document.getElementById("idx").style.zIndex = 0;
      document.getElementById("idx2").style.zIndex = 0;
    }
    setState(!menuState);
  }
  return (
    <div className="nav-container">
      <div className="menu" onClick={handelEvent}>
        <img src={require("./icon/menu.png")} alt="menu" />
      </div>

      <div className="nav-heading">
        <h1>
          Lorem <span>Ipsum</span>
        </h1>
      </div>
      <ul className={menuState ? "list-item toggle-list" : "list-item"}>
        <li style={{ textDecoration: "line-through 2px rgb(252, 84, 84)" }}>
          About
        </li>
        <li>Services</li>
        <li>Cusine</li>
        <li>Gallery</li>
        <li>Contact</li>
        <li>Book</li>
      </ul>
      <div className="cart">
        <img src={require("./icon/cart.png")} alt="cart" />
        <button>Cart</button>
      </div>
    </div>
  );
}
