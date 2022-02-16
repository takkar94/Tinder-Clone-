import React from 'react'
import Header  from './Header';
import './App.css';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <h1>Tinder Clone</h1>
      <Header/>
      <TinderCards/>
    </div>
  );
}

export default App;
