import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import '../css/contacts.css'; // Import the CSS file

const Contacts = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
