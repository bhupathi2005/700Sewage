import React from "react";
import "../css/working.css";
import Workicon1 from "../images/Worksicon1.png"
import Workicon2 from "../images/Worksicon2.png"
import Workicon3 from "../images/Worksicon3.png"

const HowItWorks = () => {
  const steps = [
    {
      imgSrc: Workicon1, 
      title: "Book Your Service Through a Phone Call"
    },
    {
      imgSrc: Workicon2,
      title: "Quick & Reliable Response"
    },
    {
      imgSrc: Workicon3,
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