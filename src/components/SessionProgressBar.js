import React from 'react';

const SessionProgressBar = ({ percentage, worktime }) => {
  let barColor = '#0192d3';
  if (worktime) {
    barColor = '#0192d3';
  } else {
    barColor = '#FF5B04';
  }

  let style = {
    width: `${percentage}%`,
    backgroundColor: barColor
  }

  return ( 
    <div className="progress-bar">
      <span style={style}></span>
    </div>
  );
  
}

export default SessionProgressBar;