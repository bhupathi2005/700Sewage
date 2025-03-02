import React from "react";
import "../css/about.css";
import about from "../images/about.png";
const AboutUs = () => {
  return (
    <div className="about-us-container fadeInUp">
      <div className="about-us-left">
        <div className="image-wrapper">
          <img src={about} alt="Default" className="about-us-image" />
        </div>
      </div>
      <div className="about-us-right">
        <h2>ABOUT OUR SERVICES</h2>
        <p>
    <b>Sewage Cleaning Services in UAE – <a href="700sewagecleaningservices.com">700 Cleaning Services</a></b>  
</p>
<p>
    <b>700cleaningservices</b> provides <b>efficient, hygienic, and cost-effective sewage cleaning solutions</b> for both <i>residential</i> and <i>commercial properties</i> across the UAE. Our expert team specializes in <b>sewage cleaning, drainage cleaning, pipe inspection, and stormwater drain cleaning</b> to prevent blockages and ensure smooth water flow.  
</p>
<p>
    We also offer <b>water tank cleaning, septic tank cleaning, and commercial cleaning services</b> for businesses. With a commitment to <b>quality, affordability, and customer satisfaction</b>, we guarantee a <b>quick response time and exceptional service</b>.  
</p>
<p>
    Choose <i>700cleaningservices</i> for <b>professional sewage and drainage cleaning services in UAE</b>—where cleanliness meets excellence!  
</p>

      </div>
    </div>
  );
};

export default AboutUs;
