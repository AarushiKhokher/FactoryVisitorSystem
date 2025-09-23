// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { zoneList } from './ZoneData';

// function Zone() {
//   const [people, setPeople] = useState([
//     { name: 'John Doe', zones: [1, 4, 9] },
//     { name: 'Jane Smith', zones: [2, 5] },
//     { name: 'Ravi Kumar', zones: [3, 6] },
//     { name: 'Priya Sharma', zones: [1, 7, 10] },
//   ]);

//   const navigate = useNavigate();

//   const activeZones = (zoneList || []).filter(z => z.active);
//   const inactiveZones = (zoneList || []).filter(z => !z.active);

//   const toggleZoneAccess = (personIndex, zoneId) => {
//     const updated = [...people];
//     const currentZones = updated[personIndex].zones;
//     if (currentZones.includes(zoneId)) {
//       updated[personIndex].zones = currentZones.filter(id => id !== zoneId);
//     } else {
//       updated[personIndex].zones.push(zoneId);
//     }
//     setPeople(updated);
//   };

//   const styles = {
//     page: {
//       position: 'relative',
//       padding: '30px',
//       fontFamily: 'Segoe UI, sans-serif',
//       backgroundColor: '#f4f8fb',
//       minHeight: '100vh',
//       color: '#333',
//     },
//     backButton: {
//       position: 'absolute',
//       top: '20px',
//       right: '20px',
//       backgroundColor: '#00BFFF',
//       color: '#fff',
//       border: 'none',
//       padding: '10px 16px',
//       borderRadius: '8px',
//       cursor: 'pointer',
//       fontWeight: 'bold',
//       boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
//     },
//     title: {
//       fontSize: '32px',
//       fontWeight: 'bold',
//       marginBottom: '10px',
//       color: '#1E3C72',
//     },
//     subtitle: {
//       fontSize: '16px',
//       marginBottom: '30px',
//       color: '#555',
//     },
//     sectionTitle: {
//       fontSize: '22px',
//       fontWeight: '600',
//       marginBottom: '15px',
//       color: '#333',
//     },
//     zoneOverview: {
//       marginBottom: '40px',
//       display: 'flex',
//       gap: '40px',
//       justifyContent: 'center',
//     },
//     zoneColumn: {
//       flex: 1,
//       minWidth: '200px',
//     },
//     list: {
//       listStyle: 'none',
//       padding: 0,
//     },
//     item: {
//       fontSize: '18px',
//       marginBottom: '12px',
//       color: '#333',
//     },
//     accessSection: {
//       marginTop: '20px',
//     },
//     card: {
//       backgroundColor: '#fff',
//       borderRadius: '12px',
//       padding: '20px',
//       marginBottom: '20px',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//       color: '#333',
//     },
//     personName: {
//       fontSize: '20px',
//       fontWeight: '600',
//       marginBottom: '15px',
//       color: '#333',
//     },
//     zoneGrid: {
//       display: 'flex',
//       gap: '40px',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//     },
//     zoneSubGrid: {
//       flex: 1,
//       minWidth: '200px',
//     },
//     zoneItem: {
//       fontSize: '14px',
//       color: '#444',
//       marginBottom: '8px',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       {/* ✅ Back to Dashboard Button */}
//       <button style={styles.backButton} onClick={() => navigate('/dashboard')}>
//         ⬅ Back to Dashboard
//       </button>

//       <h2 style={styles.title}>Factory Zones &amp; Access Control</h2>
//       <p style={styles.subtitle}>View zones and assign access to personnel.</p>

//       <div style={styles.zoneOverview}>
//         <div style={styles.zoneColumn}>
//           <h3 style={styles.sectionTitle}>Active Zones</h3>
//           <ul style={styles.list}>
//             {activeZones.map(zone => (
//               <li key={zone.id} style={styles.item}>
//                 <strong>{zone.name}</strong> — 🟢 Active
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div style={styles.zoneColumn}>
//           <h3 style={styles.sectionTitle}>Inactive Zones</h3>
//           <ul style={styles.list}>
//             {inactiveZones.map(zone => (
//               <li key={zone.id} style={styles.item}>
//                 <strong>{zone.name}</strong> — 🔴 Inactive
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div style={styles.accessSection}>
//         <h3 style={styles.sectionTitle}>Assign Zone Access</h3>
//         {people.map((person, index) => (
//           <div key={index} style={styles.card}>
//             <h4 style={styles.personName}>{person.name}</h4>
//             <div style={styles.zoneGrid}>
//               <div style={styles.zoneSubGrid}>
//                 <strong>Active Zones</strong>
//                 {activeZones.map(zone => (
//                   <div key={zone.id} style={styles.zoneItem}>
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={person.zones.includes(zone.id)}
//                         onChange={() => toggleZoneAccess(index, zone.id)}
//                         disabled={!zone.active}
//                       />
//                       {zone.name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//               <div style={styles.zoneSubGrid}>
//                 <strong>Inactive Zones</strong>
//                 {inactiveZones.map(zone => (
//                   <div key={zone.id} style={styles.zoneItem}>
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={person.zones.includes(zone.id)}
//                         onChange={() => toggleZoneAccess(index, zone.id)}
//                         disabled={!zone.active}
//                       />
//                       {zone.name}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Zone;




import React, { useState } from 'react';
import { zoneList } from './ZoneData';
import { useTheme } from '../ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
 
function Zone() {
  const { theme, toggleTheme } = useTheme();
  const [people, setPeople] = useState([
    { name: 'John Doe', zones: [1, 4, 9] },
    { name: 'Jane Smith', zones: [2, 5] },
    { name: 'Ravi Kumar', zones: [3, 6] },
    { name: 'Priya Sharma', zones: [1, 7, 10] },
  ]);
 
  const activeZones = (zoneList || []).filter(z => z.active);
  const inactiveZones = (zoneList || []).filter(z => !z.active);
 
  const toggleZoneAccess = (personIndex, zoneId) => {
    const updated = [...people];
    const currentZones = updated[personIndex].zones;
    if (currentZones.includes(zoneId)) {
      updated[personIndex].zones = currentZones.filter(id => id !== zoneId);
    } else {
      updated[personIndex].zones.push(zoneId);
    }
    setPeople(updated);
  };
 
  const styles = {
    page: {
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: theme === 'light' ? '#f4f8fb' : '#232526',
      minHeight: '100vh',
      color: theme === 'light' ? '#333' : '#fff',
      transition: 'background 0.5s, color 0.5s',
      position: 'relative',
    },
    topRightControls: {
      position: 'absolute',
      top: '20px',
      right: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '10px',
    },
    dashboardButton: {
      padding: '8px 16px',
      backgroundColor: theme === 'light' ? '#1E3C72' : '#00BFFF',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background 0.3s',
    },
    toggleSwitch: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: theme === 'light' ? '#003366' : '#fff',
    },
    switchTrack: {
      width: '40px',
      height: '20px',
      backgroundColor: '#ccc',
      borderRadius: '20px',
      position: 'relative',
    },
    switchThumb: {
      position: 'absolute',
      top: '2px',
      left: theme === 'light' ? '2px' : '22px',
      width: '16px',
      height: '16px',
      backgroundColor: '#fff',
      borderRadius: '50%',
      transition: 'left 0.3s',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: theme === 'light' ? '#1E3C72' : '#00BFFF',
    },
    subtitle: {
      fontSize: '16px',
      marginBottom: '30px',
      color: theme === 'light' ? '#555' : '#ccc',
    },
    sectionTitle: {
      fontSize: '22px',
      fontWeight: '600',
      marginBottom: '15px',
      color: theme === 'light' ? '#333' : '#fff',
    },
    zoneOverview: {
      marginBottom: '40px',
      display: 'flex',
      gap: '40px',
      justifyContent: 'center',
    },
    zoneColumn: {
      flex: 1,
      minWidth: '200px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    item: {
      fontSize: '18px',
      marginBottom: '12px',
      color: theme === 'light' ? '#333' : '#fff',
    },
    accessSection: {
      marginTop: '20px',
    },
    card: {
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      color: theme === 'light' ? '#333' : '#fff',
      transition: 'background 0.5s, color 0.5s',
    },
    personName: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: theme === 'light' ? '#333' : '#fff',
    },
    zoneGrid: {
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    zoneSubGrid: {
      flex: 1,
      minWidth: '200px',
    },
    zoneItem: {
      fontSize: '14px',
      color: theme === 'light' ? '#444' : '#ccc',
      marginBottom: '8px',
    },
  };
 
  return (
    <div style={styles.page}>
      {/* Top Right Controls */}
      <div style={styles.topRightControls}>
        <button
          style={styles.dashboardButton}
          onClick={() => window.location.href = '/dashboard'} // Adjust route as needed
        >
          Back to Dashboard
        </button>
        <div style={styles.toggleSwitch} onClick={toggleTheme}>
          <span>{theme === 'light' ? <FaMoon /> : <FaSun />}</span>
          <div style={styles.switchTrack}>
            <div style={styles.switchThumb}></div>
          </div>
        </div>
      </div>
 
      <h2 style={styles.title}>Factory Zones & Access Control</h2>
      <p style={styles.subtitle}>View zones and assign access to personnel.</p>
 
      {/* Zone Overview */}
      <div style={styles.zoneOverview}>
        <div style={styles.zoneColumn}>
          <h3 style={styles.sectionTitle}>Active Zones</h3>
          <ul style={styles.list}>
            {activeZones.map(zone => (
              <li key={zone.id} style={styles.item}>
                <strong>{zone.name}</strong> — 🟢 Active
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.zoneColumn}>
          <h3 style={styles.sectionTitle}>Inactive Zones</h3>
          <ul style={styles.list}>
            {inactiveZones.map(zone => (
              <li key={zone.id} style={styles.item}>
                <strong>{zone.name}</strong> — 🔴 Inactive
              </li>
            ))}
          </ul>
        </div>
      </div>
 
      {/* Access Assignment */}
      <div style={styles.accessSection}>
        <h3 style={styles.sectionTitle}>Assign Zone Access</h3>
        {people.map((person, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.personName}>{person.name}</h4>
            <div style={styles.zoneGrid}>
              {/* Active zones */}
              <div style={styles.zoneSubGrid}>
                <strong>Active Zones</strong>
                {activeZones.map(zone => (
                  <div key={zone.id} style={styles.zoneItem}>
                    <label>
                      <input
                        type="checkbox"
                        checked={person.zones.includes(zone.id)}
                        onChange={() => toggleZoneAccess(index, zone.id)}
                        disabled={!zone.active}
                      />
                      {zone.name}
                    </label>
                  </div>
                ))}
              </div>
              {/* Inactive zones */}
              <div style={styles.zoneSubGrid}>
                <strong>Inactive Zones</strong>
                {inactiveZones.map(zone => (
                  <div key={zone.id} style={styles.zoneItem}>
                    <label>
                      <input
                        type="checkbox"
                        checked={person.zones.includes(zone.id)}
                        onChange={() => toggleZoneAccess(index, zone.id)}
                        disabled={!zone.active}
                      />
                      {zone.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Zone;
 