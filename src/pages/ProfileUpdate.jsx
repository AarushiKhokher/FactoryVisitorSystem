// ProfileUpdate.js
import React, { useState } from 'react';

function ProfileUpdate() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const handleSave = () => {
    localStorage.setItem('username', username);
    alert('Profile updated!');
  };

  return (
    <div>
      <h3>Update Profile</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleSave} style={{ padding: '10px' }}>
        Save Changes
      </button>
    </div>
  );
}

export default ProfileUpdate;
