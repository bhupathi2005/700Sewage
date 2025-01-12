import React, { useReducer } from 'react';
import { Send } from 'lucide-react';
import '../css/contactform.css'; // Import the CSS file

// Reducer function for form state management
const formReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const ContactForm = () => {
  const [formData, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
