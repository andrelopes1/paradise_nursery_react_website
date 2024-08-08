import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome To Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <Link to="/products" className="get-started">Get Started</Link>
      </div>
    </div>
  );
}

export default LandingPage;




