import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-container">
        <div className="about-hero">
          <h1>About Paradise Nursery</h1>
          <p>Bringing nature to your home since 2010</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/nursery.jpg" alt="Paradise Nursery greenhouse" />
          </div>

          <div className="about-text">
            <section>
              <h2>Our Story</h2>
              <p>
                Paradise Nursery is a family-owned business dedicated to providing
                high-quality houseplants to plant enthusiasts across the country.
                We believe that every home deserves a touch of greenery.
              </p>
            </section>

            <section>
              <h2>Our Mission</h2>
              <p>
                To make plant parenting accessible and enjoyable for everyone, while
                promoting sustainable and eco-friendly practices at every step.
              </p>
            </section>

            <section>
              <h2>Why Choose Us?</h2>
              <ul className="about-list">
                <li>✓ Hand-picked, healthy plants</li>
                <li>✓ Expert plant care guidance</li>
                <li>✓ Eco-friendly packaging</li>
                <li>✓ Free shipping on orders over $50</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
