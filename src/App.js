import React from "react";
import MenuList from "./components/MenuList";
import logo from "./assets/images/logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <hr />
      <h1>MENU</h1>
      <MenuList key={"burgers"} />
    </div>
  );
}

export default App;
