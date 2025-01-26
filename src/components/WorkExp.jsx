import React, { Component } from "react";
import "../css/workexp.css";
import ImageComparisonSlider from "./ImageComparisonSlider";
class WorkExp extends Component {
  render() {
    return (
      <section className="work-exp-section">
        <h2 className="work-exp-title">HOW WE DO OUR WORK SAFELY</h2>
        <div className="work-exp-cards-container">
          <div className="work-exp-card">
            <ImageComparisonSlider />
          </div>
          <div className="work-exp-card">
            <ImageComparisonSlider />
          </div>
        </div>
      </section>
    );
  }
}

export default WorkExp;
