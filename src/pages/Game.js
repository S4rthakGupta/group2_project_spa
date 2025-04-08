import React from 'react';
import GameCard from '../components/GameCard';

const games = [
  {
    title: 'Spider-Man: Miles Morales',
    image: '/images/spiderman.jpg',
    description: 'Swing through NYC as the young Miles Morales in a stunning adventure.'
  },
  {
    title: 'God of War: Ragnarok',
    image: '/images/gow.jpg',
    description: 'Join Kratos and Atreus on their mythological journey.'
  },
  {
    title: 'Horizon Forbidden West',
    image: '/images/horizon.jpg',
    description: 'Explore a wild, post-apocalyptic America full of robotic creatures.'
  }
];

function Game() {
  return (
    <div className="games-container">
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Popular PS5 Games</h2>
      <div className="game-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', padding: '2rem' }}>
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            image={game.image}
            description={game.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
