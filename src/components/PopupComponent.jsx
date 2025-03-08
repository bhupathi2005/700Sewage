import React, { useState } from "react";
import "../css/services.css";
import Work from "../images/work.png";
import contact1 from "../images/contact1.jpg";
import contact2 from "../images/contact2.jpg";
import { Link } from "react-router-dom";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        marginBottom: "0",
        marginTop: "0",
      }}
    >
      <button
        style={{
          width: "100%",
          padding: "16px 8px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        <span
          style={{
            fontWeight: "500",
            fontSize: "16.5px",
            textAlign: "left",
          }}
        >
          {question}
        </span>
        <span style={{ fontSize: "1.45rem" }}>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: "16px",
            paddingTop: "0px",
            backgroundColor: "#f9fafb",
            whiteSpace: "pre-line",
            color: "grey",
            textAlign: "left",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const PopupComponent = ({
  show,
  title,
  details,
  cleaningProcess,
  whyChooseUs,
  faqs,
  onClose,
}) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Header Section */}
        <div className="header-container">
          <div className="header-content">
            <h1 className="header-title">
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {title}
              </Link>
              <br /> Services
            </h1>
            <p className="header-subtitle">
              {details
                .split(/(<b>.*?<\/b>|<link .*?<\/link>)/g)
                .map((part, i) => {
                  if (part.startsWith("<b>")) {
                    return (
                      <strong key={i}>{part.replace(/<\/?b>/g, "")}</strong>
                    );
                  } else if (part.startsWith("<link ")) {
                    const linkText = part.match(/>(.*?)<\/link>/)[1]; // Extract link text
                    const to = part.match(/to="(.*?)"/)[1]; // Extract Link URL
                    return (
                      <Link
                        key={i}
                        to={to}
                        style={{ color: "blue", textDecoration: "none" }}
                      >
                        {linkText}
                      </Link>
                    );
                  }
                  return part;
                })}
            </p>
          </div>
          <button className="header-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Cleaning Process Section */}
        <div className="bottom-sec">
          <h1 className="work_head_sec">Our Cleaning Process</h1>
          <div className="cleaning-process-container">
            {cleaningProcess.map((process, index) => (
              <div key={index} className="cleaning-process-card">
                <p className="para-clean">{process.title}</p>
                <p className="para-cont">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="how-it-works-container">
          <h2 className="work_head_sec">How It Works</h2>
          <div className="steps-container">
            {whyChooseUs.map((step, index) => (
              <div className="step-card" key={index}>
                <img src={Work} alt={step.title} className="step-image" />
                <h3>{step.title}</h3>
                <p className="step-para">{step.para}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="horizontal_line" />

        {/* FAQ Section */}
        <div className="faq-section">
          <h1 className="work_head_sec">Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="contact-contain">
          <h1 className="contact-heading">Contact Us</h1>
          <div className="contact-body">
            <p className="contact-descrition">
              For professional sewage tank cleaning services, contact our expert
              team. We provide reliable and cost-effective solutions for your
              needs.
            </p>
            <div className="contact-item">
              <div className="contact-icon phone-icon"></div>
              <span>971555989664</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon email-icon"></div>
              <span>700cleaningservices@gmail.com</span>
            </div>
          </div>

          <div className="card_images">
            <img src={contact1} alt="vCard" />
            <img src={contact2} alt="vCard" />
          </div>

          <div className="contact_button_card">
            <a href="tel:+971555989664" title="Call us now">
              <button className="contact_card_button">Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
