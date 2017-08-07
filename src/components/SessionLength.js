import React from 'react';

const SessionLength = ({ callbackFromApp, minutes }) => {
  // Inrement/Decrement timer and pass the results back to App callback function
  const addOne = () => {
    callbackFromApp(minutes + 1);
  };
  const removeOne = () => {
    if (minutes > 0) {
      callbackFromApp(minutes - 1);
    }
  };
  return (
    <div className="session-length">
      <button id="minutes-minus-btn" onClick={removeOne}>-</button>
      <p>{minutes} minutes</p>
      <button className="minutes-add-btn" onClick={addOne}>+</button>
    </div>
  );
};

export default SessionLength;
