import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
 
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <Navbar />
      <div className="hero-section">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home with our hand-picked collection of houseplants</p>
        <button 
          className="btn-get-started"
          onClick={() => navigate('/products')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;