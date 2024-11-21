import React from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <h1>MENU</h1>
      <MenuList key={"burgers"} />
    </div>
  );
}

export default App;
