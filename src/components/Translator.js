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
    "The weather is nice today.",
    "New Jersey is sometimes quiet during autumn, and it is snowy in April.",
    "The United States is usually chilly during July, and it is usually freezing in November.",
    "California is usually quiet during March, and it is usually hot in June.",
    "The United States is sometimes mild during June, and it is cold in September.",
    "Your least liked fruit is the grape, but my least liked is the apple.",
    "His favorite fruit is the orange, but my favorite is the grape.",
    "Paris is relaxing during December, but it is usually chilly in July.",
    "New Jersey is busy during spring, and it is never hot in March.",
    "Our least liked fruit is the lemon, but my least liked is the grape.",
    "The United States is sometimes busy during January, and it is sometimes warm in November.",
    "The lime is her least liked fruit, but the banana is my least liked."
  ];

  const handleSampleSelect = (e) => {
    setEnglish(e.target.value);
  };

  const handleTranslate = async () => {
    try {
      console.log("Translating:", english); // Debugging step
      const response = await axios.post('https://translingo-backend.onrender.com/translate', { // Correct deployed backend URL
        sentence: english,
      });

      console.log('API Response:', response); // Log the full response

      if (response.data && response.data.translation) {
        setFrench(response.data.translation);
      } else {
        setFrench('Translation not available.');
      }
    } catch (error) {
      console.error("Translation error:", error);
      setFrench("Translation failed.");
    }
  };

  return (
    <div className="translator-container">
      <h1>English to French Translator</h1>

      <select onChange={handleSampleSelect} className="sample-select" value={english}>
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
