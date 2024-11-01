import React from 'react';
import './Notifications.css'
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  const buttonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  };
  return (
    <div className="Notifications" style={{position: 'relative', padding: '10px'}}>
      <button
      style={buttonStyle}
      aria-label='Close'
      onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="Close icon" width="10px"/>
      </button>
      <p> Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}