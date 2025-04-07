import React, { useState } from 'react';
import './Translator.css';
import axios from 'axios';

function Translator() {
  const [english, setEnglish] = useState('');
  const [french, setFrench] = useState('');

  const sampleSentences = [
    "Hello, how are you?",
    "What is your name?",
    "I love programming.",
    "Can you help me?",
    "The weather is nice today."
  ];

  const handleSampleSelect = (e) => {
    setEnglish(e.target.value);
  };

  const handleTranslate = async () => {
    try {
      const response = await axios.post('https://translingo-backend.onrender.com/translate', {
        sentence: english,
      });
      setFrench(response.data.translation);
    } catch (error) {
      console.error("Translation error:", error);
      setFrench("Translation failed.");
    }
  };

  return (
    <div className="translator-container">
      <h1>English to French Translator</h1>

      <select onChange={handleSampleSelect} className="sample-select" defaultValue="">
        <option value="" disabled>Select a sample sentence</option>
        {sampleSentences.map((sentence, index) => (
          <option key={index} value={sentence}>{sentence}</option>
        ))}
      </select>

      <textarea
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        placeholder="Enter English sentence..."
      ></textarea>

      <button className="translate-btn" onClick={handleTranslate}>
        Translate
      </button>

      {french && <div className="output">{french}</div>}
    </div>
  );
}

export default Translator;
