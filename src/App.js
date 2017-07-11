import React, { Component } from 'react';
import SessionClock from './components/SessionClock.js';
import SessionLength from './components/SessionLength.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //Set initial state
  constructor(props) {
    super(props);

    this.state = {timer: 25};
  }
  //Update the timer - function called from SessionLength component
  updateTimer = (increment) => {
    if (increment) {
      this.setState({ timer: this.state.timer +1});
    } else {
      this.setState({ timer: this.state.timer -1});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pomodora Clock</h2>
        </div>
        <section className="App-intro">
          <SessionClock timer={this.state.timer}/>
          <SessionLength callbackFromApp={this.updateTimer} timer={this.state.timer}/>
        </section>
        <footer>
          Built with <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </div>
    );
  }
}

export default App;
