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
      <button className="minutes-add-btn" onClick={addOne}>+</button>
      <p>{minutes}</p>
      <button id="minutes-minus-btn" onClick={removeOne}>-</button>
    </div>
  );
};

export default SessionLength;
