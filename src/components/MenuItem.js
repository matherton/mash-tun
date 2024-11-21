import React from "react";
import "../MenuItem.css";
import spanishBurger from "../assets/images/food-images/spanish-burger.jpg";
import nachos from "../assets/images/food-images/nachos.jpg";
import croquettes from "../assets/images/food-images/croquettes.jpg";
import frito from "../assets/images/food-images/pescadito-frito.jpg";
import soupODay from "../assets/images/food-images/soup-of-day.jpg";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      {item.name === "Beef Spanish burger" && (
        <img src={`${spanishBurger}`} alt={item.name} className="menu-img" />
      )}
      {/* {item.name === "Mash Tun burger" && (
        <div className="menu-img middle">image not yet available</div>
      )}
      {item.name === "Vegetarian burger" && (
        <div className="menu-img middle">image not yet available</div>
      )} */}
      {item.name === "Soup of the day" && (
        <img src={`${soupODay}`} alt={item.name} className="menu-img" />
      )}
      {/* {item.name === "French Fries" && (
        <div className="menu-img middle">image not yet available</div>
      )} */}
      {item.name === "Nachos" && (
        <img src={`${nachos}`} alt={item.name} className="menu-img" />
      )}

      {item.name === "Pescadito frito" && (
        <img src={`${frito}`} alt={item.name} className="menu-img" />
      )}

      {item.name === "Croquettes" && (
        <img src={`${croquettes}`} alt={item.name} className="menu-img" />
      )}

      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {/* <span className="price">{item.price}</span> */}
    </div>
  );
};

export default MenuItem;
