// Developer: Srilakshmi Nallamothu - 8947288
import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Added content in Footer to make it descriptive. */}
        <h3 className="logo">PS5 Game World</h3>
        <p>Explore and discover the most exciting PlayStation 5 titles all in one place.</p>
      </div>

      <div className="footer-links">
        <div className="link-section">
          {/* Also attached Nav Links so user can also access different pages from the Footer. */}
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/games">Games</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="link-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: contact@ps5gameworld.com</li>
            <li>Location: Brantford Ontario, Canada</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PS5 Game World. Built by Group 2: Trends in Web Technology — Conestoga College.</p>
      </div>
    </footer>
  );
}

export default Footer;
