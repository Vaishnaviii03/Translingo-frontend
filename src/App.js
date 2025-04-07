import React, { useState, useEffect } from 'react';
import Translator from './components/Translator';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div id="home">
        <Translator />
      </div>
      <div id="about" style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem' }}>
        <h2>About TransLingo</h2>
        <p>
          This app translates English to French using a deep learning model with a clean UI,
          dark mode support, and more features coming soon!
        </p>
      </div>
    </>
  );
}

export default App;
