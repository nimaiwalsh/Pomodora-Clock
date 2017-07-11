import React from 'react';

const SessionLength = ({ callbackFromApp, timer }) => {
//{ callbackFromApp, timer } is the same as setting variable callbackFromApp = props.callbackFromApp
    return (
        <div className="session-length">
            <button className="timer-add-btn" onClick={() => callbackFromApp(1)}>+</button>
            <p>{ timer }</p>
            <button id="timer-minus-btn" onClick={() => callbackFromApp()}>-</button>
        </div>
    );
};

export default SessionLength;