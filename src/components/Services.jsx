import React, { Component } from "react";
import "../css/services.css"; // Link the external CSS file
import car from "../images/car.png";

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
  };

  // Function to handle closing the popup
  handleClosePopup = () => {
    this.setState({ showPopup: false, selectedService: null });
  };

  render() {
    const services = [
      { title: "Sewage Tank Cleaning", details: "Comprehensive cleaning solutions in Mumbai." },
      { title: "Sewage Drainage Line Blockage Removal", details: "Specialized blockage removal services." },
      { title: "Oil Tank Cleaning", details: "Expert oil tank cleaning solutions." },
      { title: "Grease Trap Cleaning", details: "Efficient grease trap maintenance." },
      { title: "Water Tank Cleaning", details: "Thorough water tank sanitization." },
      { title: "Pipeline & Drain Line Cleaning", details: "Advanced pipeline cleaning services." },
    ];

    const cleaningProcess = [
      { title: "Mechanized De-Watering", description: "Cleaning the surroundings and pumping out water below the foot-valve." },
      { title: "Sludge Removal", description: "Using sludge pumping machinery to remove settled waste." },
      { title: "High-Pressure Cleaning", description: "Cleaning walls and ceilings with portable high-pressure jetting machines." },
      { title: "Vacuum Cleaning", description: "Removing contaminants using industrial vacuum cleaners." },
      { title: "Anti-Bacterial Spray", description: "Sterilizing walls and ceilings to prevent bacterial attacks." },
      { title: "UV Radiation", description: "Disinfecting the tank area with UV radiation to kill bacteria." },
    ];

    const { showPopup, selectedService } = this.state;

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
            <div className="header-container">
              <div className="header-content">
                <h1 className="header-title">Sewage Tank Cleaning Services</h1>
                <span className="header-subtitle">Comprehensive Sewage Tank Cleaning Solutions in Mumbai</span>
              </div>
              <button className="header-close-btn" onClick={this.handleClosePopup}>×</button>
            </div>
              <div className="bottom-sec">
              <h1>Our Cleaning Process</h1>
              <div className="cleaning-process-container">
                {cleaningProcess.map((process, index) => (
                  <div key={index} className="cleaning-process-card">
                    <p className="para-clean">{process.title}</p>
                    <p>{process.description}</p>
                  </div>
                ))}
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
