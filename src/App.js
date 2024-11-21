import React from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import logo from "./assets/images/logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuList key={"burgers"} />
    </div>
  );
}

export default App;
