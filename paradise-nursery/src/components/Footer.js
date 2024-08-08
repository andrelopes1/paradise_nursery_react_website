import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>Paradise Nursery</p>
        </div>
        <div className="footer-column">
          <p>123 Green Way, Plantville, Earth</p>
        </div>
        <div className="footer-column">
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-column">
          <p>Email: info@paradisenursery.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

