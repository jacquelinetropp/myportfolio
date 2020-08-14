import React from "react";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="navigation">
      <ul className="menu">
        <li className="menu-item">
          <a href="/">Home</a>
        </li>
        <li className="menu-item">
          <a href="/">Education</a>
        </li>
        <li className="menu-item">
          <a href="/">Services</a>
        </li>
        <li className="menu-item">
          <a href="/">Projects</a>
        </li>
        <li className="menu-item">
          <a href="/">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
