import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Homesec from "../components/Homesec";
import About from "../components/About";
import Working from "../components/Working";
import Services from "../components/Services";
import Promise from "../components/Promise";
import WorkExp from "../components/WorkExp";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Home = ({ section }) => {
  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <div>
      <Navbar />
      <section id="home_section">
        <Homesec />
      </section>
      <section id="about-us">
        <About />
      </section>

      <Working />
      <section id="services_section">
        <Services />
      </section>
      <Promise />
      <WorkExp />
      <Reviews />
      <section id="contact">
        <Contacts />
      </section>
      <Footer />

      {/* Phone Icon */}
      <a
        href="tel:+971555989664"
        style={styles.phoneIconContainer}
        title="Call us now"
      >
        <FontAwesomeIcon icon={faPhone} style={styles.phoneIcon} />
      </a>
    </div>
  );
};

const styles = {
  phoneIconContainer: {
    position: "fixed",
    bottom: "20px", // Adjust the position from the bottom
    right: "20px", // Adjust the position from the right
    backgroundColor: "#CAEE5A", // Background color
    borderRadius: "50%", // Makes it circular
    width: "70px", // Set width
    height: "70px", // Set height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for better aesthetics
    zIndex: 1000, // Ensure it appears above other elements
    textDecoration: "none", // Remove underline
  },
  phoneIcon: {
    fontSize: "24px",
    color: "#000",
  },
};

export default Home;
