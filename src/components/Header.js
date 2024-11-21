import React from "react";
import logo from "../assets/images/logo.jpg";

export default function Header() {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <hr />
      <h1>MENU</h1>
    </>
  );
}
