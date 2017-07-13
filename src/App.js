import React, { Component } from 'react';
import SessionClock from './components/SessionClock.js';
import SessionLength from './components/SessionLength.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //Set initial state
  constructor(props) {
    super(props);

    this.state = {
      minutes: 0,
      totalSeconds: 0,
      timer: { }
    };
  }

  //Add or remove minutes the timer - function called from SessionLength component
  updateTimer = (minutes, totalSeconds) => {
    this.setState({ minutes: minutes, totalSeconds: totalSeconds});
  }

  //Convert timer to hours, minutes, seconds and store in state timer
  convertTimer = () => { 
    const seconds = this.state.totalSeconds;
    let hours = Math.floor(seconds / (60 * 60));
    let divisorMinutes  = seconds % (60 * 60);
    let minutes = Math.floor(divisorMinutes / 60);
    let divisorSeconds = divisorMinutes % 60;
    let convertSeconds = Math.ceil(divisorSeconds);
    this.setState({ timer: {h:hours, m:minutes, s:convertSeconds} });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pomodora Clock</h2>
        </div>
        <section className="App-intro">
          <SessionClock minutes={this.state.minutes} totalSeconds={this.state.totalSeconds} callbackFromApp={this.convertTimer}/>
          <SessionLength callbackFromApp={this.updateTimer} />
        </section>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
