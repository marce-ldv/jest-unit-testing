import React from 'react';
import logo from './logo.svg';
import './App.css';

const cities = ['Mar del plata', 'Balcarce', 'Necochea', 'Buenos Aires', 'Lima', 'Tandil' ];

export const randomStrings = () => {
  return cities[Math.floor(Math.random() * cities.length)]
}

function App () {
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
