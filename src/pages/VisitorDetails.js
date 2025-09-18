import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
 
function VisitorDetails() {
  const [zone, setZone] = useState('');
  const [purpose, setPurpose] = useState('');
  const [time, setTime] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
 
  const username = localStorage.getItem('username') || 'Visitor';
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
 
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };
 
  const zoneColors = {
    Assembly: '#FF6F61',
    Packaging: '#FFD700',
    'Quality Control': '#4CAF50',
    Warehouse: '#2196F3',
    'Admin Office': '#9C27B0',
  };
 
  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        <h3 style={{ color: '#fff' }}>Welcome, {username}</h3>
        <div>
          <button onClick={() => alert('For help, contact support@factory.com')} style={styles.navBtn}>Help & Support</button>
          <button onClick={handleLogout} style={styles.navBtn}>Logout</button>
        </div>
      </div>
 
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={styles.card}
        >
          <h2 style={styles.heading}>Visitor Details</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Time of Visit</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Zone to Visit</label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                required
                style={{
                  ...styles.input,
                  backgroundColor: zoneColors[zone] || '#f0f0f0',
                  color: zoneColors[zone] ? '#fff' : '#333',
                }}
              >
                <option value="">Select Zone</option>
                {Object.keys(zoneColors).map((z) => (
                  <option key={z} value={z}>{z}</option>
                ))}
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Purpose of Visit</label>
              <input
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Additional Info</label>
              <textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows="4"
                style={{ ...styles.input, resize: 'vertical' }}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={styles.button}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.confirmation}
        >
          <h2 style={{ color: '#fff' }}>Thank You, {username}!</h2>
          <p style={{ color: '#e0f7fa', fontSize: '18px' }}>
            You entered for <strong>{purpose}</strong> in the <strong>{zone}</strong> zone at <strong>{time}</strong>.
          </p>
          <div style={{ ...styles.detailsBox, borderLeft: `6px solid ${zoneColors[zone]}` }}>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Zone:</strong> {zone}</p>
            <p><strong>Purpose:</strong> {purpose}</p>
            <p><strong>Additional Info:</strong> {additionalInfo || 'N/A'}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
 
const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    padding: '40px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    alignItems: 'center',
  },
  navBtn: {
    marginLeft: '10px',
    padding: '8px 16px',
    backgroundColor: '#00c6ff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '600px',
    margin: 'auto',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    color: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: '600',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#e0f7fa',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    outline: 'none',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)',
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#00c6ff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  confirmation: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    padding: '40px',
    borderRadius: '16px',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  detailsBox: {
    marginTop: '20px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '20px',
    borderRadius: '12px',
    color: '#fff',
    textAlign: 'left',
  },
};
 
export default VisitorDetails;