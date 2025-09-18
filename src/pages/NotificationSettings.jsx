// NotificationSettings.js
import React, { useState } from 'react';

function NotificationSettings() {
  const [enabled, setEnabled] = useState(localStorage.getItem('notifications') === 'true');

  const toggleNotifications = () => {
    const newStatus = !enabled;
    setEnabled(newStatus);
    localStorage.setItem('notifications', newStatus);
  };

  return (
    <div>
      <h3>Notifications</h3>
      <label>
        <input type="checkbox" checked={enabled} onChange={toggleNotifications} />
        Enable visitor alerts
      </label>
    </div>
  );
}

export default NotificationSettings;
