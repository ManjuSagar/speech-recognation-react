import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpeechRecognition from './speech';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <SpeechRecognition />
      </header>
    </div>
  );
}

export default App;
