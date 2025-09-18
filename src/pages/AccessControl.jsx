// AccessControl.js
import React, { useState } from 'react';

function AccessControl() {
  const [role, setRole] = useState(localStorage.getItem('userRole') || 'visitor');

  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setRole(newRole);
    localStorage.setItem('userRole', newRole);
    alert(`Access updated to ${newRole}`);
  };

  return (
    <div>
      <h3>Access Control</h3>
      <label>Select Role:</label>
      <select value={role} onChange={handleRoleChange} style={{ padding: '10px', marginLeft: '10px' }}>
        <option value="visitor">Visitor</option>
        <option value="operator">Operator</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}

export default AccessControl;
