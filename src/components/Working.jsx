import React from "react";
import "../css/working.css";
import work from "../images/work.png"

const HowItWorks = () => {
  const steps = [
    {
      imgSrc: work, 
      title: "Book Your Service Through a Phone Call"
    },
    {
      imgSrc: work,
      title: "Quick & Reliable Response"
    },
    {
      imgSrc: work,
      title: "Thorough Cleaning & Lasting Results"
    },
  ];

  return (
    <div className="how-it-works-container">
      <h2 className="work_head_sec">HOW IT WORKS</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <img src={step.imgSrc} alt={step.title} className="step-image" />
            <h3>{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;