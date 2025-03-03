import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/services.css";
import "../css/working.css";
import services from "../ServicesInformation";
import PopupComponent from "./PopupComponent";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle "Read More" click
  const handleOpenPopup = (service) => {
    setSelectedService(service);
    const formattedTitle = service.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${formattedTitle}`);
    document.body.style.overflow = "hidden";
  };

  // Handle closing popup
  const handleClosePopup = () => {
    setSelectedService(null);
    navigate("/services"); // Reset URL when closing
    document.body.style.overflow = "auto";
  };

  // Check if the URL contains a service and open the popup
  useEffect(() => {
    const serviceFromURL = services.find((s) =>
      location.pathname.includes(s.title.toLowerCase().replace(/\s+/g, "-"))
    );

    if (serviceFromURL) {
      setSelectedService(serviceFromURL);
    } else {
      setSelectedService(null);
    }
  }, [location.pathname]); // Runs when URL changes

  return (
    <div className="services-section">
      <h2 className="services-heading">SERVICES PROVIDED</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.img}
              alt={service.imgAlt}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p>{service.details}</p>
            <button
              onClick={() => handleOpenPopup(service)}
              className="service-linku"
              style={{
                display:
                  service.cleaningProcess && service.cleaningProcess.length > 0
                    ? "inline-block"
                    : "none",
              }}
            >
              Read more →
            </button>
          </div>
        ))}
      </div>

      {/* Popup Component */}
      {selectedService && (
        <div
          className="popup-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("popup-overlay")) {
              handleClosePopup();
            }
          }}
        >
          <div className="popup-content">
            <PopupComponent
              show={!!selectedService}
              title={selectedService.title}
              details={selectedService.details}
              cleaningProcess={selectedService.cleaningProcess}
              whyChooseUs={selectedService.whyChooseUs}
              faqs={selectedService.faqs}
              onClose={handleClosePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
