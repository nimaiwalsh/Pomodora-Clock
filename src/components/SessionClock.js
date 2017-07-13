import React from 'react';

const SessionClock = ({ minutes, totalSeconds, callbackFromApp }) => {

    return (
        <div>
            <div className="session-clock">SESSION CLOCK: {minutes} {totalSeconds}</div>
            <button className="start-timer" onClick={callbackFromApp}>START TIMER</button>
        </div>
    );
} 

export default SessionClock;