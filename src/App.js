import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Timer from './Components/Scoreboard/Timer.js'
import PointTracker from './Components/Scoreboard/PointTracker';
function App() {
  const [winPoints, SetWinPoints] = useState(0);
  const changeWinsHandler = (pointDelta) => {
    SetWinPoints(prevPoints => {
      return prevPoints += pointDelta;
    });
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <div className='scoreboard__banner'>
        <PointTracker value={winPoints} changePoint={changeWinsHandler} color='#0dc41cef'/>
        <Timer/>
      </div>
    </div>
  );
}

export default App;
