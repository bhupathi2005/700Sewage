import React, { Component } from "react";
import "../css/services.css"; // Link the external CSS file
import "../css/working.css";
import services from "../ServicesInformation";
import PopupComponent from "./PopupComponent";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      selectedService: null,
    };
  }

  handleOpenPopup = (service) => {
    this.setState({ showPopup: true, selectedService: service });
    document.body.style.overflow = "hidden";
  };

  handleClosePopup = () => {
    this.setState({ showPopup: false, selectedService: null });
    document.body.style.overflow = "auto";
  };

  render() {
    const { showPopup, selectedService } = this.state;

    return (
      <div className="services-section">
        <h2 className="services-heading">SERVICES PROVIDED</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt={service.imgAlt} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p>{service.details}</p>
              <button
                onClick={() => this.handleOpenPopup(service)}
                className="service-linku"
              >
                Read more →
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <div
            className="popup-overlay"
            onClick={(e) => {
              // Close the popup only if the user clicks outside the popup
              if (e.target.classList.contains("popup-overlay")) {
                this.handleClosePopup();
              }
            }}
          >
            <div className="popup-content">
              <PopupComponent
                show={showPopup}
                title={selectedService.title}
                details={selectedService.details}
                cleaningProcess={selectedService.cleaningProcess}
                whyChooseUs={selectedService.whyChooseUs}
                faqs={selectedService.faqs}
                onClose={this.handleClosePopup}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Services;
