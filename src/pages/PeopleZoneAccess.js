// src/pages/PeopleZoneAccess.js
import React, { useState } from 'react';
import { zoneList } from './ZoneData';

function PeopleZoneAccess() {
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
      <h2 style={styles.title}>Zone Access Control</h2>
      <p style={styles.subtitle}>Assign and manage zone access for each person.</p>
      {people.map((person, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.personName}>{person.name}</h3>
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
  );
}

const styles = {
  page: {
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1E3C72',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '30px',
    color: '#555',
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

export default PeopleZoneAccess;

