import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>Accelerate Success with WhiteBoard Technologies</h1>
          <p>We deliver precision-driven detailing, estimation, and engineering solutions for construction excellence.</p>
          <p>Our expertise includes structural steel detailing, BIM services, and rebar estimation, ensuring seamless project execution.</p>
          <p>Partner with us for innovative, accurate, and efficient solutions to elevate your construction projects.</p>
        </div>
        <div className="about-image">
        <div className="green-box">
          <img src="../images/about1.jpeg" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
