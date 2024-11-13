import React from "react";
import { menuItems } from "../data/menuData";
import MenuItem from "./MenuItem";

const MenuList = () => {
  return (
    <>
      {" "}
      <h2 className="menu-title">BURGERS</h2>
      <div className="menu-list">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default MenuList;
