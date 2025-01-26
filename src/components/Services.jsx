import React, { Component } from "react";
import "../css/services.css"; // Link the external CSS file
import car from "../images/car.png";
import { useState } from "react";
import "../css/working.css";
import Contactcard1 from "../images/Contactcard1.jpg";
import Work from "../images/work.png";
import vcard from "../images/vcard.jpg";
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
              <img src={car} alt={service.title} className="service-image" />
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
          <PopupComponent
            show={showPopup}
            title={selectedService.title}
            details={selectedService.details}
            cleaningProcess={selectedService.cleaningProcess}
            whyChooseUs={selectedService.whyChooseUs}
            faqs={selectedService.faqs}
            onClose={this.handleClosePopup}
          />
        )}
      </div>
    );
  }
}

export default Services;
