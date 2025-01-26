import React, { useState } from "react";
import "../css/navbar.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home_section"); // Track the active section
  const [menuOpen, setMenuOpen] = useState(false); // Track the menu open state

  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth", // Enables smooth scrolling
    });
    setActiveSection(sectionId); // Update the active section
  };

  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "tel:+0555989664"; // Manually initiate the phone call
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="700seweagecleaning" />
        </a>
        <div className={`menu ${menuOpen ? "active" : ""}`}>
          <a
            href="#home_section"
            className={`menu-item ${activeSection === "home_section" ? "active" : ""}`}
            onClick={(e) => scrollToSection(e, "home_section")}
          >
            Home
          </a>
          <a
            href="#about_section"
            className={`menu-item ${activeSection === "about_section" ? "active" : ""}`}
            onClick={(e) => scrollToSection(e, "about_section")}
          >
            About Us
          </a>
          <a
            href="#services_section"
            className={`menu-item ${activeSection === "services_section" ? "active" : ""}`}
            onClick={(e) => scrollToSection(e, "services_section")}
          >
            Services
          </a>
          <a
            href="#contact"
            className={`menu-item ${activeSection === "contact" ? "active" : ""}`}
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
          <a href="/#" onClick={handleContactClick} className="contact">Contact Us</a>
        </div>
        <button className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
