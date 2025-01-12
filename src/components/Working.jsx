import React from "react";
import "../css/working.css";
import work from "../images/work.png"

const HowItWorks = () => {
  const steps = [
    {
      imgSrc: work, 
      title: "High Professionalism and Expertise"
    },
    {
      imgSrc: work,
      title: "Quick and Efficient Problem Solving"
    },
    {
      imgSrc: work,
      title: "Innovation and Up-to-Date Technology"
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
