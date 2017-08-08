import React from 'react';

const BreakLength = ({ callbackFromApp, breakTime }) => {

  return (
    <div className="break-length">
      <div>{breakTime} min</div>
      <input 
        type="range" 
        min="0" 
        max="20" 
        step="5"
        value={breakTime}
        onChange={(event) => callbackFromApp(event.target.value)}
      />
    </div>
  );
};

export default BreakLength;
