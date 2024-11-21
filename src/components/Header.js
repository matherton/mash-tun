import React from "react";
import logo from "../assets/images/logo.jpg";
import Insta from "../assets/images/black_instagram-logo.png";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="spacer"></div>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <a
          href="https://www.instagram.com/mashtunedinburgh/"
          alt="links to the Mash Tun Instagram account in new window"
        >
          <img
            src={Insta}
            alt="instagram icon"
            title="Links to Mash Tun Instagram"
            className="instagram"
          />
        </a>
      </div>
    </div>
  );
}
