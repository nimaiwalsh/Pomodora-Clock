import React from 'react';

const SessionClock = ({ sessionClock, callbackFromApp, callbackFromApp2, timerBtn }) => {

  return (
      <div>
        <div className="session-clock">SESSION CLOCK: {sessionClock}</div>
        <button className="start-timer" onClick={callbackFromApp}>{ timerBtn }</button>
        <button className="reset-timer" onClick={callbackFromApp2}>Reset</button>
      </div>
  );
} 

export default SessionClock;