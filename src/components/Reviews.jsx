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
          "The oil tank cleaning service provided by 700 Sewage Cleaning Services was professional, efficient, and left the tank in great condition. Highly recommend for hassle-free maintenance!",
        date: "March 15, 2023",
      },
      {
        name: "John Davis",
        rating: "4.0/5",
        service: "Water Tank Cleaning",
        feedback:
          "I recently used the water tank cleaning service from 700sewagecleaningservices.com and was extremely satisfied",
        date: "May 2, 2023",
      },
      {
        name: "Susan Torres",
        rating: "4.7/5",
        service: "Oil Tank Cleaning",
        feedback:
          "I used 700 Sewage Cleaning Services for oil tank cleaning, and their service was exceptional. The team was prompt, professional, and did a thorough job, leaving my tank in top condition! Highly recommend.",
        date: "April 5, 2023",
      },
      {
        name: "Melissa Ross",
        rating: "4.1/5",
        service: "Pipeline Cleaning",
        feedback:
          "I recently experienced with 700sewagecleaningservices.com for pipeline cleaning, and I’m highly impressed. The team was efficient, thorough, and ensured the pipelines were completely cleaned and free from any blockages. Great service!",
        date: "June 10, 2023",
      },

      {
        name: "Gloria Williams",
        rating: "4.5/5",
        service: "Sewage Tank Cleaning",
        feedback:
          "I recently hired 700sewagecleaningservices.com for sewage tank cleaning, and I must say, they did an outstanding job. The team was professional, punctual, and ensured the tank was thoroughly cleaned and sanitized. Highly recommended!",
        date: "August 20, 2023",
      },

      {
        name: "Ali Shah",
        rating: "4.4/5",
        service: "Pipeline Cleaning",
        feedback:
          "I recently hired 700sewagecleaningservices.com for pipeline cleaning, and I must say, they did an excellent job. The team was highly skilled, efficient, and ensured the pipelines were completely unclogged and well-maintained. Highly recommended! ",
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
                <div className="avatar-placeholder">
                  {testimonial.name.charAt(0)}
                </div>
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
