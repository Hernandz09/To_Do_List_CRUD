import React from 'react';

export default function Notification({ message, type }) {
  return (
    <div className="notification-center-container">
      <div className={`notification-popup ${type}`}>
        {message}
      </div>
    </div>
  );
}