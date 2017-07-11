import React from 'react';

const SessionClock = (props) => {

    return (
        <div>
            <div className="session-clock">SESSION CLOCK: {props.timer}</div>
        </div>
    );
} 

export default SessionClock;