import React from 'react';

const SessionClock = ({ sessionClock, callbackFromApp, callbackFromApp2, timerBtn }) => {
  //If hours present display the hours span
  let display = 'flex';
  if (!sessionClock.h) {
    display = 'none';
  }
  
  return (
      <div>
        <div className="session-clock">
          <div className="hour-record" style={{display: `${display}`}}>
          <div style={{display: `${display}`}}>
            <span>{sessionClock.h}<span>hours</span></span>
          </div>  
          </div>
          <div>
            <div>
              <span>{sessionClock.m}<span>minutes</span></span>
            </div>
          </div>
          <div>
            <div>
              <span>{sessionClock.s}<span>seconds</span></span>
            </div>
          </div>
        </div>
        <div className="start-reset-btns">
          <button className="start-timer" onClick={callbackFromApp}>{ timerBtn }</button>
          <button className="reset-timer" onClick={callbackFromApp2}>Reset</button>
        </div>
      </div>
  );
} 

export default SessionClock;