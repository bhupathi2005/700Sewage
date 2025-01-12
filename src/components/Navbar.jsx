import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/logo.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="700seweagecleaning"/>
        </NavLink>
        <div className="menu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            Contact
          </NavLink>
          <NavLink className="contact">Contact Us</NavLink>
        </div>
        <button className="menu-toggle" id="menu-toggle">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
