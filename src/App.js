import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpeechRecognition from './speech';
import FormComp from './FormComp';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Router>
            <div>
              <Route exact path="/" component={SpeechRecognition} />
              <Route path="/form" component={FormComp} />
            </div>
          </Router>
      </header>
    </div>
  );
}

export default App;
