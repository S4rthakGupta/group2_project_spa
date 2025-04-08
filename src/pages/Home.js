// Developed By: Shakila Samardiwakara - 8886070
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';



function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to PS5 Game World</h1>
        <p>Discover, explore, and experience the ultimate collection of PS5 games — all in one place.</p>
        <Link to="/about" className="cta-button">Learn More</Link>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>50+</h2>
          <p>Top-rated PS5 Games</p>
        </div>
        <div className="stat-card">
          <h2>$200B+</h2>
          <p>Gaming Industry Value</p>
        </div>
        <div className="stat-card">
          <h2>4K</h2>
          <p>Ultra HD Visuals</p>
        </div>
        <div className="stat-card">
          <h2>1 Platform</h2>
          <p>Built with React SPA</p>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose Us?</h2>
          <p>
            PS5 Game World is your ultimate hub for exploring top-rated PlayStation 5 titles across genres. 
            Dive into detailed previews, discover trending games, and enjoy a visually immersive experience designed for true gamers. 
            Whether you're browsing or building your wishlist — it's all in one place.
          </p>
      </section>
    </div>
  );
}

export default Home;
