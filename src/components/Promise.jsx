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
            <h3>High Professionalism and Expertise</h3>
            <p>
              Pretium phasellus erat condimentum arcu suspendisse nulla lorem.
              Velit id lobortis non faucibus neque.
            </p>
          </div>
          <div className="promise-card">
            <img src={work} alt="Problem Solving Icon" className="promise-icon" />
            <h3>Quick and Efficient Problem Solving</h3>
            <p>
              Pretium phasellus erat condimentum arcu suspendisse nulla lorem.
              Velit id lobortis non faucibus neque.
            </p>
          </div>
          <div className="promise-card">
            <img src={work} alt="Innovation Icon" className="promise-icon" />
            <h3>Innovation and Up-to-Date Technology</h3>
            <p>
              Pretium phasellus erat condimentum arcu suspendisse nulla lorem.
              Velit id lobortis non faucibus neque.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Promise;
