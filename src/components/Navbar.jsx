import React, { useState, useEffect, useRef } from "react";
import "../css/navbar.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home_section");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      setMenuOpen(false); // Close the menu after scrolling is initiated
    }, 300); // Add a slight delay to allow scrolling to complete
    setActiveSection(sectionId);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the menu state
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="700seweagecleaning" />
        </a>
        <div className={`menu ${menuOpen ? "active" : ""}`} ref={menuRef}>
          <a
            href="#home_section"
            className={`menu-item ${
              activeSection === "home_section" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "home_section")}
          >
            Home
          </a>
          <a
            href="#about_section"
            className={`menu-item ${
              activeSection === "about_section" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "about_section")}
          >
            About Us
          </a>
          <a
            href="#services_section"
            className={`menu-item ${
              activeSection === "services_section" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "services_section")}
          >
            Services
          </a>
          <a
            href="#contact"
            className={`menu-item ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
          <a
            href="tel:+9710555989664"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "tel:+9710555989664";
              setMenuOpen(false);
            }}
            className="contact"
          >
            Contact Us
          </a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
