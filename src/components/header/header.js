import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="navigation">
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <NavLink to="/#education">Education</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/#services">Services</NavLink>
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
