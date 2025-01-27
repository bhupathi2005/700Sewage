import React from "react";
import "../css/homesec.css"; // Ensure you have the CSS for styling

function App() {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video className="background-video" autoPlay muted loop>
        <source src="../videos/MainVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <p className="tagline fadeInUp">BEST CLEANING SERVICES IN UAE</p>
        <p className="head fadeInUp">700 Sewage Cleaning Services UAE</p>
        <a href="tel:+0555989664">
          <button className="book-now fadeInUp">Call Now</button>
        </a>
      </div>
    </div>
  );
}

export default App;
