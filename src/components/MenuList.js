import React from "react";
import { menuData } from "../data/menuData";
import MenuItem from "./MenuItem";

const MenuList = () => {
  return (
    <>
      <h2>{menuData.burgers.title}</h2>
      <div className="menu-list">
        {menuData.burgers.menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default MenuList;
