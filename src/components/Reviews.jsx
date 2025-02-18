import React, { Component } from "react";
import "../css/reviews.css";

class Reviews extends Component {
  render() {
    const testimonials = [
      {
        name: "Walter Anderson",
        rating: "4.3/5",
        service: "Oil Tank Cleaning",
        feedback:
          "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
        date: "March 15, 2023",
      },
      {
        name: "John Davis",
        rating: "4.0/5",
        service: "Water Tank Cleaning",
        feedback:
          "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
        date: "May 2, 2023",
      },
      {
        name: "Susan Torres",
        rating: "4.7/5",
        service: "Oil Tank Cleaning",
        feedback:
          "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
        date: "April 5, 2023",
      },
      {
        name: "Melissa Ross",
        rating: "4.1/5",
        service: "Pipeline Cleaning",
        feedback:
          "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
        date: "June 10, 2023",
      },
      
      {
        name: "Gloria Williams",
        rating: "4.5/5",
        service: "Water Tank Cleaning",
        feedback:
          "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
        date: "August 20, 2023",
      },
    ];

    return (
      <div className="reviews-section">
        <div className="head_rev">
          <div className="head_side">
            <p>TESTIMONIAL</p>
            <h2 className="section-title">
              What They Say About <br></br>Our Service
            </h2>
          </div>
          <button className="see-all-button">See All Testimonial</button>
        </div>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card_head">
                <div className="avatar-placeholder"></div>
                <div className="card_head_rating">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-rating">⭐ {testimonial.rating}</p>
                </div>
              </div>
              <p className="testimonial-service">{testimonial.service}</p>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
              <p className="testimonial-date">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Reviews;
