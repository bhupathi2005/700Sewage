import React from "react";
import "../css/about.css"; 
import about from "../images/about.png"; 
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-left">
        <div className="image-wrapper">
          <img src={about} alt="Default" className="about-us-image" />
        </div>
      </div>
      <div className="about-us-right">
        <h2>ABOUT OUR SERVICES</h2>
        <p>
          At our Cleaning Services, we have a team of experienced professionals
          who are experts in septic tank cleaning and maintenance. We use
          advanced equipment to inspect and clean out your tank in the most
          efficient way possible. Our services include emptying the tank
          completely to get rid of any blockages or debris that might be causing
          problems.
          <br></br>
          We also provide drain cleaning services to ensure water flows freely
          through your pipes, as well as garbage chute cleaning to keep your
          property free from odor-causing bacteria. Additionally, our pipeline
          disinfection and grease trap cleaning processes help prevent diseases
          caused by harmful microorganisms present in sewage systems.
          <br></br>
          Our company is dedicated to providing quality services at the best
          prices. We guarantee customer satisfaction with our quick response
          times and exceptional expertise. Choose Quick Ever Cleaning Services
          for excellent cleaning services in UAE.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
