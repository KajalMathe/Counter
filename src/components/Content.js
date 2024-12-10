import React from 'react';
import './Content.css';  // Import CSS to style the content

const Content = () => {
  return (
    <div className="content-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>We provide the best solutions for your needs. Discover our services, products, and more!</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We are a team of passionate professionals dedicated to providing top-notch services. Our goal is to
          ensure customer satisfaction with each project we undertake.
        </p>
        <button className="cta-button">Our Story</button>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Detail about service 1. Providing a great experience for your needs.</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Detail about service 2. Quality service and guaranteed satisfaction.</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Detail about service 3. We help you succeed with tailored solutions.</p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us!</p>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default Content;
