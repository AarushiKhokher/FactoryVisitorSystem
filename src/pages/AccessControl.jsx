// // AccessControl.js
// import React, { useState } from 'react';

// function AccessControl() {
//   const [role, setRole] = useState(localStorage.getItem('userRole') || 'visitor');

//   const handleRoleChange = (e) => {
//     const newRole = e.target.value;
//     setRole(newRole);
//     localStorage.setItem('userRole', newRole);
//     alert(`Access updated to ${newRole}`);
//   };

//   return (
//     <div>
//       <h3>Access Control</h3>
//       <label>Select Role:</label>
//       <select value={role} onChange={handleRoleChange} style={{ padding: '10px', marginLeft: '10px' }}>
//         <option value="visitor">Visitor</option>
//         <option value="operator">Operator</option>
//         <option value="admin">Admin</option>
//       </select>
//     </div>
//   );
// }

// export default AccessControl;
import React from 'react';
import { FaUserShield } from 'react-icons/fa';

function AccessControl() {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
    },
    icon: {
      fontSize: '48px',
      color: '#64B5F6',
      marginBottom: '10px',
    },
    title: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '8px',
    },
    description: {
      fontSize: '15px',
      color: '#555',
      maxWidth: '500px',
      margin: '0 auto',
    },
    badge: {
      display: 'inline-block',
      marginTop: '12px',
      padding: '6px 14px',
      backgroundColor: '#42A5F5',
      color: '#fff',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <FaUserShield style={styles.icon} />
      <div style={styles.title}>Admin Access</div>
      <p style={styles.description}>
        Admins have full control over system settings, user management, and data access. This role is
        reserved for trusted personnel responsible for overseeing operations and maintaining security.
      </p>
      <div style={styles.badge}>Role: Admin</div>
    </div>
  );
}

export default AccessControl;

