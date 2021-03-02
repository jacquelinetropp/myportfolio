import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import logo from "../../images/blacklogo.png";

import "./header.styles.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    toggle: false,
  };

  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button onClick={this.Toggle} className="toggle">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <ul className={this.state.toggle ? "main-nav active" : "main-nav"}>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <NavLink to="/#education">Education</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/#services">Services</NavLink>
          </li>
          <li className="nav-link">
            <a href="/#projects">Projects</a>
          </li>
          <li className="nav-link">
            <a href="/#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
