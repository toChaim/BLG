import React, { Component } from 'react';
import './App.css';

import TimerDisplay from './components/TimerDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()/1000,
    };
    this.intervalHandler = setInterval(this.handleChange.bind(this), 1000);
  }

  handleChange() {
    this.setState({
      time: new Date()/1000,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Better Living Games
          </p>
          <TimerDisplay time={this.state.time} />
        </header>
      </div>
    );
  }
}

export default App;
