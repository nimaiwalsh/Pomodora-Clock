import React, { Component } from 'react';
import SessionClock from './components/SessionClock.js';
import SessionLength from './components/SessionLength.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //Set initial state
  constructor(props) {
    super(props);
    //Set the initial state 25 minute start time
    this.state = {
      totalSeconds: 1500,
      timer: {h:0, m:25, s:'00'},
      setMinutes: 25,
      intervalId: 0,
      timerBtn: 'Start',
    };
  }

  //Add or remove minutes to the timer - function called from SessionLength component
  updateTimer = (minutes) => {
    this.setState({ 
      setMinutes: minutes, 
      totalSeconds: minutes * 60, 
      timer: {m:minutes, s:'00'} 
    });
  }

  //Reduce timer by 1 second every second and convert timer to hours:minutes:seconds and update timer state -- timer conversions sourced online
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

  //convertTimer every second, update the start-stop button 
  beginTimer = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {this.convertTimer()}, 1000);
      this.setState({
        intervalId, 
        timerBtn: 'Stop'
      });
    } else {
      this.clearTimer();
      this.setState({timerBtn: 'Start'});
    }
  }

  //Stops the timer updating every second
  clearTimer = () => {
      clearInterval(this.state.intervalId)
      this.setState({ intervalId: '' })
  }

  render() {
    //Determine if hours are used and pass to SessionClock
    const timerHours = this.state.timer.h;
    const timerMinutes = this.state.timer.m;
    const timerSeconds = this.state.timer.s;
    let sessionClock = '';
    if (!timerHours) {
      sessionClock = `${timerMinutes}:${timerSeconds}`;
    } else {
      sessionClock = `${timerHours}:${timerMinutes}:${timerSeconds}`;
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Pomodora Clock</h2>
        </div>
        <section className="App-intro">
          <SessionClock callbackFromApp={this.beginTimer} sessionClock={sessionClock} timerBtn={this.state.timerBtn} />
          <SessionLength callbackFromApp={this.updateTimer} minutes={this.state.setMinutes} />
        </section>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
