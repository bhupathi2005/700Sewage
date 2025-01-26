import React, { Component } from "react";
import "../css/services.css"; // Link the external CSS file
import car from "../images/car.png";
import { useState } from "react";
import "../css/working.css";
import Contactcard1 from "../images/Contactcard1.jpg";
import Work from "../images/work.png"
import vcard from "../images/vcard.jpg"

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      selectedService: null,
    };
  }

  // Function to handle opening the popup
  handleOpenPopup = (service) => {
    this.setState({ showPopup: true, selectedService: service });
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    document.documentElement.style.overflow = "hidden"; // Prevent entire page scrolling
  };

  handleClosePopup = () => {
    this.setState({ showPopup: false, selectedService: null });
    document.body.style.overflow = "auto"; // Re-enable scrolling
    document.documentElement.style.overflow = "auto";
  };

  render() {
    const services = [
      {
        title: "Sewage Tank Cleaning",
        details: "Comprehensive cleaning solutions in Mumbai.",
      },
      {
        title: "Sewage Drainage Line Blockage Removal",
        details: "Specialized blockage removal services.",
      },
      {
        title: "Oil Tank Cleaning",
        details: "Expert oil tank cleaning solutions.",
      },
      {
        title: "Grease Trap Cleaning",
        details: "Efficient grease trap maintenance.",
      },
      {
        title: "Water Tank Cleaning",
        details: "Thorough water tank sanitization.",
      },
      {
        title: "Pipeline & Drain Line Cleaning",
        details: "Advanced pipeline cleaning services.",
      },
    ];

    const cleaningProcess = [
      {
        title: "Mechanized De-Watering",
        description:
          "Cleaning the surroundings and pumping out water below the foot-valve.",
      },
      {
        title: "Sludge Removal",
        description: "Using sludge pumping machinery to remove settled waste.",
      },
      {
        title: "High-Pressure Cleaning",
        description:
          "Cleaning walls and ceilings with portable high-pressure jetting machines.",
      },
      {
        title: "Vacuum Cleaning",
        description: "Removing contaminants using industrial vacuum cleaners.",
      },
      {
        title: "Anti-Bacterial Spray",
        description:
          "Sterilizing walls and ceilings to prevent bacterial attacks.",
      },
      {
        title: "UV Radiation",
        description:
          "Disinfecting the tank area with UV radiation to kill bacteria.",
      },
    ];

    const { showPopup, selectedService } = this.state;
    const faqs = [
      {
        question: "How do you clean an oil tank?",
        answer: `Professional cleaning involves: 
  1. Draining all oil using specialized equipment
  2. Removing residue through scraping and vacuuming
  3. Pressure washing or steam cleaning
  4. Thorough drying with fans
  5. Proper waste disposal
  
  It is recommended that oil tanks be cleaned every 3-5 years to prevent buildup of sludge and debris.`,
      },
      {
        question: "What material cleans oil tanks?",
        answer:
          "We use specialized solvents, detergents, and tank cleaning chemicals. The specific materials depend on tank type, size, and content history. All cleaning follows strict safety protocols with proper protective equipment. Our team ensures safe handling and disposal of all cleaning materials.",
      },
      {
        question: "What is the procedure of tank cleaning?",
        answer: `Our comprehensive procedure includes:
  1. Preparation and sealing of valves/pipes
  2. Proper ventilation setup
  3. Specialized cleaning with high-pressure equipment
  4. Thorough inspection
  5. Certified disposal of waste
  6. Final certification if required
  
  Each step is performed by trained professionals following industry standards.`,
      },
      {
        question: "When should I clean my oil tank?",
        answer:
          "Recommended annually, immediately if filter clogs or efficiency drops. Also necessary when switching fuels or after system modifications. Regular maintenance helps prevent costly repairs and system failures.",
      },
      {
        question: "What causes sludge in oil tank?",
        answer:
          "Sludge forms from water entering through condensation/leaks, sediment accumulation, and microbial growth. Tank age and condition also contribute to sludge buildup. Modern biofuels can react with water, leading to increased microbe growth and sludge formation.",
      },
      {
        question: "Can you clean the inside of an oil tank?",
        answer:
          "Yes, our professional team can safely clean the inside of oil tanks using specialized equipment and expertise. The process includes emptying, cleaning, inspection, and necessary repairs before returning to service.",
      }
    ];
    const FAQItem = ({ question, answer }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div
          style={{
            borderBottom: "1px solid #e5e7eb",
            marginBottom: "0",
            marginTop:"0"
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
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
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
                paddingTop:"0px",
                backgroundColor: "#f9fafb",
                whiteSpace: "pre-line",
                color: "grey",
                textAlign:"left"
              }}
            >
              {answer}
            </div>
          )}
        </div>
      );
    };
    const whyChooseUs = [
      {
        title: "Expert Team",
        description:
          "Our trained professionals ensure high-quality cleaning services.",
        para:"Access to result-oriented professionals."
      },
      {
        title: "Eco-Friendly Solutions",
        description: "We use non-toxic and biodegradable cleaning agents.",
        para:"Affordable yet high-quality cleaning solutions."
      },
      {
        title: "Affordable Pricing",
        description: "Get the best cleaning services at competitive rates.",
        para:"Regular inspections to prevent future issues."
      },
      {
        title: "Fast & Efficient",
        description: "Quick turnaround time with minimal disruption.",
        para:"Environmentally compliant processes."
      },
      {
        title: "24/7 Customer Support",
        description: "We are always available for any inquiries or support.",
        para:"Focused on meeting and exceeding client needs."
      },
    ];

    return (
      <div className="services-section">
        <h2 className="services-heading">SERVICES PROVIDED</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={car} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <button
                onClick={() => this.handleOpenPopup(service)}
                className="service-linku"
              >
                Read more →
              </button>
            </div>
          ))}
        </div>

        {/* Popup Component */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              {/* Header Section */}
              <div className="header-container">
                <div className="header-content">
                  <h1 className="header-title">
                    Sewage Tank Cleaning<br></br> Services
                  </h1>
                  <p className="header-subtitle">
                    Comprehensive Sewage Tank Cleaning Solutions in Mumbai
                  </p>
                </div>
                <button
                  className="header-close-btn"
                  onClick={this.handleClosePopup}
                >
                  ×
                </button>
              </div>

              {/* Divider Line */}

              {/* Cleaning Process */}
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
                <h2 className="work_head_sec">HOW IT WORKS</h2>
                <div className="steps-container">
                  {whyChooseUs.map((step, index) => (
                    <div className="step-card" key={index}>
                      <img
                        src={Work}
                        alt={step.title}
                        className="step-image"
                      />
                      <h3>{step.title}</h3>
                      <p className="step-para">{step.para}</p>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="horizontal_line"></hr>

              {/* FAQ Section */}
              <div className="faq-section">
                <h1 className="work_head_sec">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>

              {/* Divider Line */}
             

              {/* Contact Us Section */}
              <div className="contact-contain">
                <h1 className="contact-heading">Contact Us</h1>
                <div className="contact-body">
                  <p className="contact-descrition">
                    For professional sewage tank cleaning services, contact our
                    expert team. We provide reliable and cost-effective
                    solutions for your needs.
                  </p>
                  <div className="contact-item">
                    <div className="contact-icon phone-icon"></div>
                    <span>0555989664</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon email-icon"></div>
                    <span>700sewagecleaningservices@gmail.com</span>
                  </div>
                </div>
                <div className="card_images">
                  <img src={vcard} />
                  <img src={vcard} />
                </div>
                <div className="contact_button_card">
                <a href="tel:+0555989664">
      <button className="contact_card_button">Contact Us</button>
    </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Services;