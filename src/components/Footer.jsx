import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info and Social Media */}
        <div className="footer-section">
          <p className="footer-company-name">700 Sewage Cleaning Services UAE</p>
          <div className="footer-social-icons">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#projects">Our Projects</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#safety">Electrical Safety</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#efficiency">Energy Efficiency</a></li>
            <li><a href="#youtube">YouTube Channel</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-section">
          <h4>Subscribe</h4>
          <form className="footer-subscribe-form">
            <input
              type="email"
              placeholder="Your email"
              className="footer-input"
            />
            <button type="submit" className="footer-subscribe-button">
              Subscribe
            </button>
          </form>
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
