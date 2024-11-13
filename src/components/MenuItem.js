import React from "react";
import "../MenuItem.css";
import burger from "../assets/images/burger-resized.jpg";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={burger} alt={item.name} className="menu-img" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span className="price">{item.price}</span>
    </div>
  );
};

export default MenuItem;
