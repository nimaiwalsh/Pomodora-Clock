import React from 'react';

const SessionClock = ({ sessionClock, callbackFromApp, timerBtn }) => {

  return (
      <div>
        <div className="session-clock">SESSION CLOCK: {sessionClock}</div>
        <button className="start-timer" onClick={callbackFromApp}>{ timerBtn }</button>
      </div>
  );
} 

export default SessionClock;