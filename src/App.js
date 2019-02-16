import React, { Component } from 'react';
import './App.css';

import TimerDisplay from './components/TimerDisplay';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
    this.intervalHandler = setInterval(this.handleChange.bind(this), 1000);
  }

  handleChange(event) {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Better Living Games
          </p>
          <TimerDisplay time={this.state.time}/>
        </header>
      </div>
    );
  }
}

export default App;
