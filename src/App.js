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
      timer: { },
      intervalId: 0
    };
  }

  //Add or remove minutes the timer - function called from SessionLength component
  updateTimer = (minutes) => {
    this.setState({ minutes: minutes, totalSeconds: minutes * 60});
  }

  //Convert timer to hours, minutes, seconds and udate timer state
  convertTimer = () => {
    this.setState({totalSeconds: this.state.totalSeconds -1}); 
    const seconds = this.state.totalSeconds;
    let hours = Math.floor(seconds / (60 * 60));
    let divisorMinutes  = seconds % (60 * 60);
    let minutes = Math.floor(divisorMinutes / 60);
    let divisorSeconds = divisorMinutes % 60;
    let convertSeconds = Math.ceil(divisorSeconds);
    this.setState({ timer: {h:hours, m:minutes, s:convertSeconds} });
    if (this.state.totalSeconds <= 0) {
      this.clearTimer();
    }
  }

  //convertTimer every second
  beginTimer = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {this.convertTimer()}, 1000);
      this.setState({intervalId});
    } else {
      this.clearTimer();
    }
  }

  //Stops the timer updating every second
  clearTimer = () => {
      clearInterval(this.state.intervalId)
      this.setState({ intervalId: '' })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pomodora Clock</h2>
        </div>
        <section className="App-intro">
          <SessionClock minutes={this.state.minutes} timer={this.state.timer} callbackFromApp={this.beginTimer}/>
          <SessionLength callbackFromApp={this.updateTimer} minutes={this.state.minutes}/>
        </section>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
