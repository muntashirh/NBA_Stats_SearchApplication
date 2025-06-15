/* import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my NBA project!
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from 'react';
import PlayerComparison from './PlayerComparison';

function App() {
  return (
    <div className="App">
      <PlayerComparison />
    </div>
  );
}

export default App;

