import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Paradise Nursery</h1>
      <div className="about-content">
        <div className="about-image">
          <img src="/images/nursery.jpg" alt="Paradise Nursery" />
        </div>
        <div className="about-text">
          <h2>Bringing Nature to Your Home Since 2010</h2>
          <p>
            Paradise Nursery is a family-owned business dedicated to providing 
            high-quality houseplants to plant enthusiasts across the country. 
            We believe that every home deserves a touch of greenery.
          </p>
          <h3>Our Mission</h3>
          <p>
            To make plant parenting accessible and enjoyable for everyone while 
            promoting sustainable and eco-friendly practices.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✓ Hand-picked, healthy plants</li>
            <li>✓ Expert plant care guidance</li>
            <li>✓ Eco-friendly packaging</li>
            <li>✓ Free shipping on orders over $50</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;