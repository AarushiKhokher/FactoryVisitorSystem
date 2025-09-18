// src/pages/Zone.jsx
import React, { useState } from 'react';
import { zoneList } from './ZoneData';

function Zone() {
  const [people, setPeople] = useState([
    { name: 'John Doe', zones: [1, 4, 9] },
    { name: 'Jane Smith', zones: [2, 5] },
    { name: 'Ravi Kumar', zones: [3, 6] },
    { name: 'Priya Sharma', zones: [1, 7, 10] },
  ]);

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

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Factory Zones & Access Control</h2>
      <p style={styles.subtitle}>View zones and assign access to personnel.</p>

      {/* Zone Overview */}
      <div style={styles.zoneOverview}>
        <h3 style={styles.sectionTitle}>Zone Status</h3>
        <ul style={styles.list}>
          {(zoneList || []).map(zone => (
            <li key={zone.id} style={styles.item}>
              <strong>{zone.name}</strong> — {zone.active ? '🟢 Active' : '🔴 Inactive'}
            </li>
          ))}
        </ul>
      </div>

      {/* Access Assignment */}
      <div style={styles.accessSection}>
        <h3 style={styles.sectionTitle}>Assign Zone Access</h3>
        {people.map((person, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.personName}>{person.name}</h4>
            <div style={styles.zoneGrid}>
              {zoneList.map(zone => (
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
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f8fb',
    minHeight: '100vh',
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
  },
  personName: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#333',
  },
  zoneGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
  },
  zoneItem: {
    fontSize: '14px',
    color: '#444',
  },
};

export default Zone;
