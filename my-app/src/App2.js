import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import reportWebVitals from "./reportWebVitals";

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Pipka
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('test'));
root.render(
    <React.StrictMode>
      <App2 />
    </React.StrictMode>
);

reportWebVitals();
