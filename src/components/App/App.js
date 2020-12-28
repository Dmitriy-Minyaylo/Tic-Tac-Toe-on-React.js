import React, { useState } from 'react';
import './App.css';
import Start from '../Start/StartScreen';
import MainBoard from '../MainBoard/MainBoard'


function App() {

  const [flag, setFlag] = useState(false)

  const handleClick = () => {
    setFlag(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        {flag ?
          <MainBoard /> :
          <div onClick={handleClick}>
            <Start />
          </div>
        }
      </header>
    </div>
  );
}

export default App;
