import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>
          Best Cleaning Services in UAE | 700 Sewage Cleaning Services
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="Best Cleaning Services in UAE | 700 Sewage Cleaning Services"
        />
        <meta
          name="description"
          content="700 Sewage Cleaning Services offers professional sewage, drainage, septic tank, and water tank cleaning in UAE. Contact us for top-quality cleaning solutions."
        />
        <meta
          name="keywords"
          content="cleaning services UAE, sewage cleaning UAE, drainage cleaning, septic tank cleaning, water tank cleaning, pipeline cleaning, professional cleaning, 700 Cleaning Services"
        />
        <meta name="author" content="700 Cleaning Services" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Best Cleaning Services in UAE | 700 Cleaning Services"
        />
        <meta
          property="og:description"
          content="Professional sewage and drainage cleaning services in UAE. We ensure clean and efficient solutions for homes and businesses."
        />
        <meta
          property="og:image"
          content="https://700sewagecleaningservices.com/images/home-banner.png"
        />
        <meta
          property="og:url"
          content="https://700sewagecleaningservices.com"
        />
        <meta property="og:type" content="website" />
      </Helmet>

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
    bottom: "20px",
    right: "20px",
    backgroundColor: "#CAEE5A",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    textDecoration: "none",
  },
  phoneIcon: {
    fontSize: "24px",
    color: "#000",
  },
};

export default Home;
