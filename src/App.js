import React, { Component } from 'react';
import './App.css';

import TimerDisplay from './components/TimerDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Better Living Games
          </p>
          <TimerDisplay time={new Date()}/>
        </header>
      </div>
    );
  }
}

export default App;
