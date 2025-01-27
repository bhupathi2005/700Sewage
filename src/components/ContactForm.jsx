import React, { useReducer } from "react";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
import "../css/contactform.css"; // Import the CSS file

// Reducer function for form state management
const formReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const ContactForm = () => {
  const [formData, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call EmailJS to send the form data
    emailjs
      .sendForm(
        "service_wqdztoo", // Your EmailJS service ID
        "template_qxvvv8g", // Your EmailJS template ID
        e.target, // The form DOM element
        "6XgXRw7s-EsLwhL1Y" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  const handleChange = (e) => {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">
        <Send size={20} />
        <span>Send Message</span>
      </button>
    </form>
  );
};
export default ContactForm;
