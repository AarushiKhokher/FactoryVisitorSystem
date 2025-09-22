import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zoneList } from './ZoneData';

function Zone() {
  const [people, setPeople] = useState([
    { name: 'John Doe', zones: [1, 4, 9] },
    { name: 'Jane Smith', zones: [2, 5] },
    { name: 'Ravi Kumar', zones: [3, 6] },
    { name: 'Priya Sharma', zones: [1, 7, 10] },
  ]);

  const navigate = useNavigate();

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
      position: 'relative',
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f4f8fb',
      minHeight: '100vh',
      color: '#333',
    },
    backButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: '#00BFFF',
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#1E3C72',
    },
    subtitle: {
      fontSize: '16px',
      marginBottom: '30px',
      color: '#555',
    },
    sectionTitle: {
      fontSize: '22px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#333',
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
      color: '#333',
    },
    accessSection: {
      marginTop: '20px',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      color: '#333',
    },
    personName: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#333',
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
      color: '#444',
      marginBottom: '8px',
    },
  };

  return (
    <div style={styles.page}>
      {/* ✅ Back to Dashboard Button */}
      <button style={styles.backButton} onClick={() => navigate('/dashboard')}>
        ⬅ Back to Dashboard
      </button>

      <h2 style={styles.title}>Factory Zones &amp; Access Control</h2>
      <p style={styles.subtitle}>View zones and assign access to personnel.</p>

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

      <div style={styles.accessSection}>
        <h3 style={styles.sectionTitle}>Assign Zone Access</h3>
        {people.map((person, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.personName}>{person.name}</h4>
            <div style={styles.zoneGrid}>
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
