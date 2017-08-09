import React, { Component } from 'react';
import SessionClock from './components/SessionClock.js';
import SessionLength from './components/SessionLength.js';
import SessionProgressBar from './components/SessionProgressBar.js';
import BreakLength from './components/BreakLength.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //Set initial state
  constructor(props) {
    super(props);
    //Set the initial state 25 minute start time
    this.state = {
      totalSeconds: 1500,
      timer: {h:0, m:25, s:0},
      setMinutes: 25,
      setBreak: 5,
      intervalId: 0,
      timerBtn: 'Start',
      worktime: true,
    };
  }

  //Add or remove minutes to the timer - function called from SessionLength component
  updateTimer = (minutes) => {
    this.setState({ 
      setMinutes: minutes, 
      totalSeconds: minutes * 60, 
      timer: {m:minutes, s:0} 
    });
  }

  //Reduce timer by 1 second every second and convert timer to hours:minutes:seconds and update timer state
  convertTimer = () => {
    this.setState({totalSeconds: this.state.totalSeconds -1}); 
    const seconds = this.state.totalSeconds;
    let hours = Math.floor(seconds / (60 * 60));
    let divisorMinutes  = seconds % (60 * 60);
    let minutes = Math.floor(divisorMinutes / 60);
    let divisorSeconds = divisorMinutes % 60;
    let convertSeconds = Math.ceil(divisorSeconds);
    this.setState({ timer: {h:hours, m:minutes, s:convertSeconds} });
    //When time is up, start the break countdown.
    if (this.state.totalSeconds === 0) {
      this.swapWorkBreak();
    }
  }

  //Swap between set worktime and the break
  swapWorkBreak = () => {
    if (this.state.worktime === true) {
      this.setState({
        totalSeconds: this.state.setBreak * 60,
        worktime: false
      }); 
    } else {
      this.setState({
        totalSeconds: this.state.setMinutes * 60,
        worktime: true
      }); 
    }
  }

  //Run convertTimer() every second, update the start-pause button 
  beginTimer = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {this.convertTimer()}, 1000);
      this.setState({
        intervalId, 
        timerBtn: 'Pause'
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

  //Reset timer and state
  resetTimer = () => {
    this.setState({
      totalSeconds: 1500,
      timer: {h:0, m:25, s:'00'},
      setMinutes: 25,
      setBreak: 5,
      intervalId: 0,
      timerBtn: 'Start',
      worktime: true
    })
    this.clearTimer();
  }

  render() {
    //1. Convert time left to a percentage and pass as prop to SessionProgressBar
    //2. Update the App-status mesage
    //3. Change textShadow color for AppStatus
    let percentage = 100;
    let appStatusHead = '';
    let appStatusMessage = '';
    let textShadowColor = '#0192d3';
    if (this.state.worktime === true) {
      percentage = (this.state.totalSeconds / (this.state.setMinutes * 60)) * 100;
      appStatusHead = 'Session time';
      appStatusMessage = 'Stay motivated and stick to it';
      textShadowColor = '#0192d3';
    } else {
      percentage = (this.state.totalSeconds / (this.state.setBreak * 60)) * 100;
      appStatusHead = 'Break time';
      appStatusMessage = 'Relax and get yourself a drink';
      textShadowColor = '#FF5B04';
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2><span>Pomodora</span>Clock</h2>
        </div>
        <section className="App-section">
          <div className="App-status">
            <h3 style={{ textShadow: `0px 5px 10px ${textShadowColor}` }}>{appStatusHead}</h3>
            <p>{appStatusMessage}</p>
          </div>
          <SessionClock 
            callbackFromApp={this.beginTimer} 
            callbackFromApp2={this.resetTimer} 
            sessionClock={this.state.timer} 
            timerBtn={this.state.timerBtn} 
          />
          <div className="App-controls">
            <div>
              <h3>Session length</h3>
              <SessionLength 
                callbackFromApp={this.updateTimer} 
                minutes={this.state.setMinutes} 
              />
            </div>
            <div>
              <h3>Break length</h3>
              <BreakLength 
                callbackFromApp={(updateBreak) => {this.setState({setBreak: updateBreak})}}
                breakTime={this.state.setBreak} 
              />
            </div>
          </div>
          <SessionProgressBar 
            percentage={percentage}
            worktime={this.state.worktime} 
          />
        </section>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
