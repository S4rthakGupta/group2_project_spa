// Developer: Srilakshmi Nallamothu - 8947288
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ CORRECT
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Games from './pages/Game';
import About from './pages/About';
import './CSS/App.css';

// Adding all the routing paths and making them according to pages.
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
