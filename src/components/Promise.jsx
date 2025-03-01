import React, { Component } from "react";
import "../css/promise.css";
import work from "../images/work.png"

class Promise extends Component {
  render() {
    return (
      <section className="promise-section">
        <h2 className="promise-title">OUR PROMISE</h2>
        <div className="promise-cards-container">
          <div className="promise-card">
            <img src={work} alt="Professionalism Icon" className="promise-icon" />
            <h3>High-Quality Cleaning Solutions</h3>
            <p>
    We deliver <b>efficient, hygienic, and professional cleaning services</b> for both <b>residential cleaning</b> and <b>commercial cleaning services in UAE</b>.
</p>

          </div>
          <div className="promise-card">
            <img src={work} alt="Problem Solving Icon" className="promise-icon" />
            <h3>Affordable & Transparent Pricing</h3>
            <p>
    Get <b>cost-effective cleaning solutions in UAE</b> with <b>no hidden charges</b>, ensuring the <b>best value for your money</b>.
</p>

          </div>
          <div className="promise-card">
            <img src={work} alt="Innovation Icon" className="promise-icon" />
            <h3>Fast & Reliable Service</h3>
            <p>
    Our team guarantees a <b>quick response time</b> and <b>on-time cleaning service in UAE</b>, prioritizing <b>customer satisfaction</b>.
</p>

          </div>
        </div>
      </section>
    );
  }
}

export default Promise;
