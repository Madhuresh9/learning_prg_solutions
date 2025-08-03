import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import SyntheticEvent from './components/SyntheticEvent';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>React Event Handling Examples</h1>
      <Counter />
      <Welcome />
      <SyntheticEvent />
      <CurrencyConverter />
    </div>
  );
}

export default App;
