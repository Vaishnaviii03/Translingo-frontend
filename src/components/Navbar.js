import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">🌍 TransLingo</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <button onClick={toggleTheme} className="theme-btn">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;
