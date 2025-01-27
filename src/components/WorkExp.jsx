import React, { Component } from "react";
import "../css/workexp.css";
import ImageComparisonSlider from "./ImageComparisonSlider";
import before from "../images/Before.jpg";
import after from "../images/After.jpg";
import before1 from "../images/Before1.jpg";
import after1 from "../images/After1.jpg";
class WorkExp extends Component {
  render() {
    return (
      <section className="work-exp-section">
        <h2 className="work-exp-title">HOW WE DO OUR WORK SAFELY</h2>
        <div className="work-exp-cards-container">
          <div className="work-exp-card">
            <ImageComparisonSlider before={before} after={after} />
          </div>
          <div className="work-exp-card">
            <ImageComparisonSlider before={before1} after={after1} />
          </div>
        </div>
      </section>
    );
  }
}

export default WorkExp;
