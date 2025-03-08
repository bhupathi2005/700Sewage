import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/about.css";
import about from "../images/about.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-container fadeInUp">
      <Helmet>
        <title>Sewage Cleaning Services in UAE | 700 Cleaning Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="Sewage Cleaning Services in UAE | 700 Cleaning Services"
        />
        <meta
          name="description"
          content="700 Cleaning Services offers professional sewage cleaning, drainage cleaning, septic tank cleaning, and water tank cleaning in the UAE. Trusted for efficiency, hygiene, and affordability."
        />
        <meta
          name="keywords"
          content="sewage cleaning services UAE, drainage cleaning, septic tank cleaning, water tank cleaning, pipe inspection, stormwater drain cleaning, commercial cleaning services, 700 Cleaning Services"
        />
        <meta name="author" content="700 Cleaning Services" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Sewage Cleaning Services in UAE | 700 Cleaning Services"
        />
        <meta
          property="og:description"
          content="Get expert sewage and drainage cleaning services across UAE. Our professional team ensures hygienic, efficient, and cost-effective solutions for residential and commercial properties."
        />
        <meta
          property="og:image"
          content="https://700sewagecleaningservices.com/images/about.png"
        />
        <meta
          property="og:url"
          content="https://700sewagecleaningservices.com"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="about-us-left">
        <div className="image-wrapper">
          <img src={about} alt="About Us" className="about-us-image" />
        </div>
      </div>
      <div className="about-us-right">
        <h2>ABOUT OUR SERVICES</h2>
        <p>
          <b>
            Sewage Cleaning Services in UAE –
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              700 Cleaning Services
            </Link>
          </b>
        </p>
        <p>
          <b>700cleaningservices</b> provides
          <b>
            {" "}
            efficient, hygienic, and cost-effective sewage cleaning solutions
          </b>
          for both <i>residential</i> and <i>commercial properties</i> across
          the UAE. Our expert team specializes in
          <b>
            <Link
              to="/services/sewage-tank-cleaning"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              sewage cleaning
            </Link>
            ,
            <Link
              to="/services/sewage-drainage-line-blockage-removal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              drainage cleaning
            </Link>
            ,
            <Link
              to="/services/pipeline-&-drain-line-cleaning"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              pipe inspection
            </Link>
            , and
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              stormwater drain cleaning
            </Link>
          </b>
          to prevent blockages and ensure smooth water flow.
        </p>
        <p>
          We also offer
          <b>
            <Link
              to="/services/water-tank-cleaning"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              water tank cleaning
            </Link>
            ,
            <Link
              to="/services/pipeline-&-drain-line-cleaning"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              septic tank cleaning
            </Link>
            , and
            <Link
              to="/services/pipeline-&-drain-line-cleaning"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              commercial cleaning services
            </Link>
          </b>
          for businesses. With a commitment to
          <b> quality, affordability, and customer satisfaction</b>, we
          guarantee a <b>quick response time and exceptional service</b>.
        </p>
        <p>
          Choose <i>700cleaningservices</i> for
          <b>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              professional sewage and drainage cleaning services in UAE
            </Link>
          </b>
          —where cleanliness meets excellence!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
