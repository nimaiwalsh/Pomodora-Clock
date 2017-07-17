import React from 'react';

const SessionClock = ({ minutes, timer, callbackFromApp }) => {

    return (
        <div>
            <div className="session-clock">SESSION CLOCK: {minutes} {timer.h}:{timer.m}:{timer.s}</div>
            <button className="start-timer" onClick={callbackFromApp}>START TIMER</button>
        </div>
    );
} 

export default SessionClock;