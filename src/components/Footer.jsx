import React from "react";
import "../css/footer.css";

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
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#projects">Our Projects</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#safety">Electrical Safety</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#efficiency">Energy Efficiency</a>
            </li>
            <li>
              <a href="#youtube">YouTube Channel</a>
            </li>
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
        <p>Copyright © 2023 Electema | Design by Tokotema</p>
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
