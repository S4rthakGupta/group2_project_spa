// Developer: Swapnilkumar Parmar: 8942871
import React from 'react';
import '../CSS/GameCard.css';

function GameCard({ title, image, description }) {
  return (
    <div className="game-card">
      {/* This below codes takes all the images, title, description from the JSON format and displays. */}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default GameCard;
