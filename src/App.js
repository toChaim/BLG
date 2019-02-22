import React, { Component } from 'react';
import './App.css';

import TimerDisplay from './components/TimerDisplay';
import TimerControlBtn from './components/TimerControlBtn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerControl: 'Start',
      time: 5*60,
      intervalHandler: setInterval(this.handleChange.bind(this), 1000),
    };
    this.handleClickTimerControlBtn = this.handleClickTimerControlBtn.bind(this);
  }

  handleClickTimerControlBtn(){
    if(this.state.timerControl === 'Reset'){
      this.setState({ timerControl: 'Start', time: 5*60 });
    }
    else if(this.state.timerControl === 'Start'){
      this.setState({ timerControl: 'Stop' });
    }
    else {
      this.setState({ timerControl: 'Start' });
    }
  }

  handleChange() {
    if(this.state.timerControl !== 'Stop'){ return; }
    if(this.state.time === 0){
      this.setState({ timerControl: 'Reset' });
    }
    else {
      this.setState({ time: this.state.time - 1 });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Better Living Games
          </p>
          <TimerDisplay time={this.state.time} />
          <TimerControlBtn 
            lable={this.state.timerControl} 
            handleChange={this.handleClickTimerControlBtn}/>
        </header>
      </div>
    );
  }
}

export default App;
