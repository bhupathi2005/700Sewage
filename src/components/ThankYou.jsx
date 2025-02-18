import React, { Component } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "../css/thankyou.css"; // Ensure you have a CSS file for styling

class ThankYou extends Component {
  render() {
    return (
      <div className="thank-you-container">
        <CheckCircle size={80} color="#CAEE5A" />
        <h1>Thank You!</h1>
        <p>Your message has been sent successfully. We'll get back to you soon.</p>
        <Link to="/" className="home-button">Go Back to Home</Link>
      </div>
    );
  }
}

export default ThankYou;
