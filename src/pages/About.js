// Developer: Swapnilkumar Parmar - 8942871
import React from 'react';
import '../CSS/About.css';

function About() {
  return (
    <div className="about-page">
      <h2 className="about-heading">About PS5 Game World</h2>

      {/* Adding content in About Section for user to know more about our brand. */}
      <div className="about-card">
        <p>
          PS5 Game World is your digital destination to explore the most iconic and groundbreaking titles available on the PlayStation 5.
          Whether you're into action, racing, adventure, or story-driven games, our app highlights a wide variety of handpicked favorites to dive into.
        </p>
      </div>

      <div className="about-card">
        <p>
          This application was built using <strong>ReactJS</strong> as a modern Single Page Application (SPA). It offers fast navigation, a responsive layout,
          and dynamic rendering through React Router — all designed to give users a seamless browsing experience.
        </p>
      </div>

      <div className="about-card">
        <p>
          From gaming newcomers to seasoned players, PS5 Game World is a place for every kind of gamer to find their next favorite title.
          We aim to keep things stylish, informative, and intuitive — because discovering games should be just as fun as playing them.
        </p>
      </div>

      {/* Adding Details of Group which created the website */}
      <p className="about-footer">
        Built by Group 2: Trends in Web Technology - Conestoga College, 2025.
      </p>
    </div>
  );
}

export default About;
