import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2 className="logo">AuthApp</h2>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="home-content">
        <h1>Welcome to AuthApp</h1>
        <p>Your trusted partner for secure Authentication.</p>
        <div className="buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
