// Developer: Sarthak Gupta - 8971797
import React from 'react';
import GameCard from '../components/GameCard';
import '../CSS/App.css';

// Adding a JSON format for all the images of games which are coming from the public/images folder, title and description.
const games = [
  { title: 'Astro Bot', image: '/images/astro-bot.jpg', description: 'Next-gen platforming adventure.' },
  { title: 'Call of Duty', image: '/images/call-of-duty.jpg', description: 'Cinematic FPS combat.' },
  { title: 'Disciples', image: '/images/Disciples.jpg', description: 'Tactical RPG set in a dark fantasy world.' },
  { title: 'Dragon Ball Z', image: '/images/dragonball-z.jpg', description: 'Legendary anime fighter returns.' },
  { title: 'F1 23', image: '/images/f123.jpg', description: 'High-speed Formula racing excitement.' },
  { title: 'FIFA 23', image: '/images/fifa23.jpg', description: 'Ultimate football simulation experience.' },
  { title: 'FIFA 24', image: '/images/fifa24.jpg', description: 'Next-level football with EA FC.' },
  { title: 'God of War', image: '/images/godofwar.jpg', description: 'Norse mythology meets brutal combat.' },
  { title: 'Gran Turismo', image: '/images/gran-turismo.jpg', description: 'Realistic car racing simulator.' },
  { title: 'GTA 5', image: '/images/Gta-5.jpg', description: 'Open world action and chaos.' },
  { title: 'Hogwarts Legacy', image: '/images/hogwarts.jpg', description: 'Live your magical story at Hogwarts.' },
  { title: 'Horizon', image: '/images/horizon.jpg', description: 'Explore a post-apocalyptic machine world.' },
  { title: 'Just Dance', image: '/images/just-dance.jpg', description: 'Dance to your favorite hits!' },
  { title: 'The Last of Us Part I', image: '/images/lastofus-1.jpg', description: 'Survive a haunting, emotional journey.' },
  { title: 'Minecraft', image: '/images/minecraft.jpg', description: 'Create, explore, survive—your way.' },
  { title: 'NBA 2K24', image: '/images/nba24.jpg', description: 'Dominate the court with the latest rosters.' },
  { title: 'On The Road', image: '/images/on-the-road.jpg', description: 'Truck driving simulator for the pros.' },
  { title: 'Sonic', image: '/images/sonic.jpg', description: 'Fast-paced platforming with Sonic the Hedgehog.' },
  { title: 'Spider-Man 2', image: '/images/spider-man2.jpg', description: 'Be Peter AND Miles in epic superhero action.' },
  { title: 'Uncharted', image: '/images/uncharted.jpg', description: 'Treasure-hunting adventures of Nathan Drake.' },
];

// Creating a Game function () so display all the data.
function Game() {
  return (
    <div className="games-container">
      <h2 className="section-title">PS5 Game Library</h2>
      <div className="game-list">
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
