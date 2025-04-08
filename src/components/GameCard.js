import React from 'react';
import './GameCard.css';

function GameCard({ title, image, description }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default GameCard;
