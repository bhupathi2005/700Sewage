import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Import phone icon
import Homesec from "../components/Homesec";
import About from "../components/About";
import Working from "../components/Working";
import Services from "../components/Services";
import Promise from "../components/Promise";
import WorkExp from "../components/WorkExp";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section id="home_section">
          <Homesec />
        </section>
        <section id="about_section">
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
          href="tel:+9710555989664"
          style={styles.phoneIconContainer}
          title="Call us now"
        >
          <FontAwesomeIcon icon={faPhone} style={styles.phoneIcon} />
        </a>
      </div>
    );
  }
}

const styles = {
  phoneIconContainer: {
    position: "fixed", // Keeps the icon in a fixed position
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
