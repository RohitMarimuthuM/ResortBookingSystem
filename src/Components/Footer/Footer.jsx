
import React from "react";

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Resort Logo" />
            <h3>Resort Booking</h3>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: info@resortbooking.com</p>
            <p>Phone: +91 8778585950</p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Resort Booking. All Rights Reserved.</p>
          <p>Privacy Policy | Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
