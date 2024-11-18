import React from "react";
import { menuData } from "../data/menuData";
import MenuItem from "./MenuItem";

const MenuList = () => {
  console.log(menuData);
  return (
    <>
      <h2>{menuData.small.title}</h2>
      <div className="menu-list">
        {menuData.small.menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <h2>{menuData.nachos.title}</h2>
      <div className="menu-list">
        {menuData.nachos.menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <h2>{menuData.chickenwings.title}</h2>
      <div className="menu-list">
        {menuData.chickenwings.menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <h2>{menuData.frito.title}</h2>
      <div className="menu-list">
        {menuData.frito.menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
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
