import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate & useLocation
import "../css/navbar.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home_section");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Get current location

  // Scroll to section when route changes
  useEffect(() => {
    const sectionId = location.hash.replace("#", ""); // Extract section ID from URL
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]); // Run whenever location changes

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    navigate(`#${sectionId}`); // Update the URL
    setActiveSection(sectionId);

    setTimeout(() => {
      setMenuOpen(false); // Close the menu after scrolling
    }, 300);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
            className={`menu-item ${activeSection === "home_section" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "home_section")}
          >
            Home
          </a>
          <a
            href="#about_section"
            className={`menu-item ${activeSection === "about_section" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "about_section")}
          >
            About Us
          </a>
          <a
            href="#services_section"
            className={`menu-item ${activeSection === "services_section" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "services_section")}
          >
            Services
          </a>
          <a
            href="#contact"
            className={`menu-item ${activeSection === "contact" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
          <a href="tel:++971555989664" className="contact">
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
