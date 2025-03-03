import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info and Social Media */}
        <div className="footer-section">
          <p className="footer-company-name">
            700 Sewage Cleaning Services UAE
          </p>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <Link
                to="/about-us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Our Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Electrical Safety</li>
            <li>Blog</li>
            <li>Energy Efficiency</li>
          </ul>
        </div>

        {/* Contact Now Section */}
        <div className="footer-section">
          <h4>Contact Now</h4>
          <a href="tel:+971555989664" className="footer-contact-button">
            Call Us Now
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          Copyright © 2025 700Sewag | Design by{" "}
          <a
            href="https://www.linkedin.com/in/geddada-renuka-6aa213300/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Renuka
          </a>
          ,
          <a
            href="https://www.linkedin.com/in/arikatla-bhupathi-naidu-02356828a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Bhupathi
          </a>
          ,
          <a
            href="https://www.linkedin.com/in/nagababu-a-a20aa2269/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Nagababu
          </a>
        </p>
        <div className="footer-links">
          <a href="#terms">Term of use</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
