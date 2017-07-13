import React from 'react';

const SessionLength = ({ callbackFromApp }) => {
//{ callbackFromApp, minutes } is the same as setting variable callbackFromApp = props.callbackFromApp

//Update the timer and convert to seconds - pass the results back to App callback function
    let minutes = 1;
    let totalSeconds = 60; 

    const addOne = () => {
        minutes += 1;
        totalSeconds = minutes*60;
        console.log(minutes, totalSeconds);
        callbackFromApp(minutes, totalSeconds);
    }
    const removeOne = () => {
        if(minutes > 0) {
            minutes -= 1;
            totalSeconds = minutes*60;
        }
        console.log(minutes, totalSeconds);
        callbackFromApp(minutes, totalSeconds);
    }
    return (
        <div className="session-length">
            <button className="minutes-add-btn" onClick={() => addOne()}>+</button>
            <p>{ minutes }</p>
            <button id="minutes-minus-btn" onClick={() => removeOne()}>-</button>
        </div>
    );
};

export default SessionLength;