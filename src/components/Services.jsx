import React, { Component } from "react";
import "../css/services.css"; // Link the external CSS file
import car from "../images/car.png"

class Services extends Component {
  render() {
    const services = [
      { title: "Sewage Tank Cleaning" },
      { title: "Sewage Drainage Line Blockage Removal" },
      { title: "Oil Tank Cleaning" },
      { title: "Grease Trap Cleaning" },
      { title: "Water Tank Cleaning" },
      { title: "Pipeline & Drain Line Cleaning" },
    ];

    return (
      <div className="services-section">
        <h2 className="services-heading">SERVICES PROVIDED</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={car}
                alt={service.title}
                className="service-image"
              />
              <h3 className="service-title">{service.title}</h3>
              <a href="/" className="service-link">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
