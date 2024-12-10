import React from 'react';
import './Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and description */}
        <div className="footer-left">
          <h3>Website Name</h3>
          <p>Your trusted partner for all your online needs. We deliver quality service and customer satisfaction.</p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
