import React from 'react';
import './App.css';
import Start from '../Start/StartScreen';
import MainBoard from '../MainBoard/MainBoard'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Start />
        <MainBoard />
      </header>
    </div>
  );
}

export default App;
