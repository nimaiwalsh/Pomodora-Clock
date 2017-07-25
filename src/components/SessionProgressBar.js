import React from 'react';

const SessionProgressBar = ({ percentage }) => {

  return ( 
    <div className="progress-bar">
      <span style={{width:`${ percentage }%`}}></span>
    </div>
  );
  
}

export default SessionProgressBar;