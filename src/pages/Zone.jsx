import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zoneList } from './ZoneData';
import * as XLSX from 'xlsx';

function Zone() {
  const [people, setPeople] = useState([
    { name: 'John Doe', zones: [1, 4, 9] },
    { name: 'Jane Smith', zones: [2, 5] },
    { name: 'Ravi Kumar', zones: [3, 6] },
    { name: 'Priya Sharma', zones: [1, 7, 10] },
  ]);

  const [expandedPerson, setExpandedPerson] = useState(null);
  const [isNightMode, setIsNightMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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

  const exportToCSV = () => {
    const data = people.map(person => ({
      Name: person.name,
      Zones: person.zones.join(', '),
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Zone Access');
    XLSX.writeFile(workbook, 'Zone_Access_Report.csv');
  };

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    page: {
      padding: '40px',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: isNightMode ? '#0f172a' : '#dbeafe',
      minHeight: '100vh',
      color: isNightMode ? '#f8fafc' : '#1e293b',
      position: 'relative',
      transition: 'all 0.3s ease',
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
    button: {
      backgroundColor: '#0ea5e9',
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
    },
    toggleWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
    },
    toggleTrack: {
      width: '40px',
      height: '20px',
      backgroundColor: '#ccc',
      borderRadius: '20px',
      position: 'relative',
    },
    toggleThumb: {
      position: 'absolute',
      top: '2px',
      left: isNightMode ? '22px' : '2px',
      width: '16px',
      height: '16px',
      backgroundColor: isNightMode ? '#38bdf8' : '#fff',
      borderRadius: '50%',
      transition: 'left 0.3s ease',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#0ea5e9',
    },
    subtitle: {
      fontSize: '18px',
      color: isNightMode ? '#cbd5e1' : '#475569',
      marginTop: '10px',
    },
    searchBar: {
      marginBottom: '30px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      flexWrap: 'wrap',
    },
    searchInput: {
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      width: '300px',
      backgroundColor: isNightMode ? '#334155' : '#fff',
      color: isNightMode ? '#f8fafc' : '#1e293b',
    },
    zoneStatus: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    zoneBox: {
      flex: '1 1 300px',
      backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      color: isNightMode ? '#f8fafc' : '#1e293b',
      transition: 'all 0.3s ease',
    },
    sectionTitle: {
      fontSize: '22px',
      fontWeight: '600',
      marginBottom: '15px',
      textAlign: 'center',
      color: isNightMode ? '#38bdf8' : '#0ea5e9',
    },
    item: {
      fontSize: '16px',
      marginBottom: '10px',
      textAlign: 'center',
    },
    card: {
      backgroundColor: isNightMode ? '#1e293b' : '#ffffff',
      borderRadius: '12px',
      padding: '15px',
      marginBottom: '15px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      color: isNightMode ? '#f8fafc' : '#1e293b',
      transition: 'all 0.3s ease',
    },
    personName: {
      fontSize: '18px',
      fontWeight: '600',
      color: isNightMode ? '#38bdf8' : '#0ea5e9',
      textAlign: 'center',
    },
    zoneList: {
      marginTop: '10px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '10px',
    },
    zoneItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isNightMode ? '#334155' : '#f1f5f9',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      color: isNightMode ? '#f8fafc' : '#1e293b',
    },
    toggle: {
      width: '40px',
      height: '20px',
      borderRadius: '20px',
      position: 'relative',
    },
    knob: (active) => ({
      position: 'absolute',
      top: '2px',
      left: active ? '22px' : '2px',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: active ? '#0ea5e9' : '#fff',
      transition: 'left 0.3s ease',
    }),
  };

  return (
    <div style={styles.page}>
      <div style={styles.topRightControls}>
        <button style={styles.button} onClick={() => navigate('/dashboard')}>
          ⬅ Back to Dashboard
        </button>
        <div style={styles.toggleWrapper} onClick={() => setIsNightMode(!isNightMode)}>
          {isNightMode ? '☀️' : '🌙'}
          <div style={styles.toggleTrack}>
            <div style={styles.toggleThumb}></div>
          </div>
        </div>
      </div>

      <div style={styles.header}>
        <h2 style={styles.title}>🏭 Zone Access Management</h2>
        <p style={styles.subtitle}>Tap on a person to manage their zone access.</p>
      </div>

      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search visitor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button style={styles.button} onClick={exportToCSV}>
          📥 Export CSV
        </button>
      </div>

      <div style={styles.zoneStatus}>
        <div style={styles.zoneBox}>
          <h3 style={styles.sectionTitle}>🟢 Active Zones</h3>
          {activeZones.map(zone => (
            <div key={zone.id} style={styles.item}>{zone.name}</div>
          ))}
        </div>
                <div style={styles.zoneBox}>
          <h3 style={styles.sectionTitle}>🔴 Inactive Zones</h3>
          {inactiveZones.map(zone => (
            <div key={zone.id} style={styles.item}>{zone.name}</div>
          ))}
        </div>
      </div>

      {/* People Cards */}
      {filteredPeople.map((person, index) => (
        <div
          key={index}
          style={styles.card}
          onClick={() => setExpandedPerson(expandedPerson === index ? null : index)}
        >
          <div style={styles.personName}>{person.name}</div>
          {expandedPerson === index && (
            <div style={styles.zoneList}>
              {[...activeZones, ...inactiveZones].map(zone => {
                const hasAccess = person.zones.includes(zone.id);
                return (
                  <div key={zone.id} style={styles.zoneItem}>
                    <span>
                      {zone.name} ({zone.active ? 'Active' : 'Inactive'})
                    </span>
                    <div
                      style={{
                        ...styles.toggle,
                        backgroundColor: zone.active
                          ? hasAccess ? '#0ea5e9' : '#ccc'
                          : '#dc2626',
                        opacity: zone.active ? 1 : 0.6,
                        cursor: zone.active ? 'pointer' : 'not-allowed'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (zone.active) toggleZoneAccess(index, zone.id);
                      }}
                    >
                      <div style={styles.knob(hasAccess)}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Zone;
