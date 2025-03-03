import React from "react";
import { Helmet } from "react-helmet-async";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "../css/contacts.css"; // Import the CSS file

const Contacts = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | 700 Cleaning Services UAE</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Contact Us | 700 Cleaning Services UAE" />
        <meta
          name="description"
          content="Get in touch with 700 Cleaning Services for professional sewage, drainage, and water tank cleaning in UAE. Contact us today for a free consultation."
        />
        <meta
          name="keywords"
          content="contact 700 Cleaning Services, cleaning services UAE, sewage cleaning inquiry, drainage cleaning support, water tank cleaning, professional cleaning consultation"
        />
        <meta name="author" content="700 Cleaning Services" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Contact Us | 700 Cleaning Services UAE"
        />
        <meta
          property="og:description"
          content="Need expert cleaning services? Contact 700 Cleaning Services for sewage, drainage, and septic tank cleaning in UAE. We're here to help!"
        />
        <meta
          property="og:image"
          content="https://700sewagecleaningservices.com/images/contact-us-banner.png"
        />
        <meta
          property="og:url"
          content="https://700sewagecleaningservices.com/contact"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
