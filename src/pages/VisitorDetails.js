
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import JsBarcode from 'jsbarcode';

const styles = {
  page: {
    minHeight: '100vh',
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '10px 20px',
    borderRadius: '10px',
  },
  navBtn: {
    marginLeft: '8px',
    padding: '6px 12px',
    backgroundColor: '#64B5F6',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: '14px',
    padding: '25px',
    maxWidth: '500px',
    margin: 'auto',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.25)',
    color: '#000',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '600',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '500',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '14px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#000',
    outline: 'none',
    boxShadow: 'inset 0 0 4px rgba(0,0,0,0.2)',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#64B5F6',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  confirmation: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    padding: '25px',
    borderRadius: '14px',
    maxWidth: '500px',
    margin: 'auto',
    textAlign: 'center',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.25)',
    color: '#000',
  },
  idCard: {
    marginTop: '20px',
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: '20px',
    borderRadius: '10px',
    color: '#000',
    textAlign: 'left',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    fontSize: '15px',
    lineHeight: '1.4',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '20px',
    alignItems: 'start',
    position: 'relative',
  },
  idTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
};

function VisitorDetails() {
  const [zone, setZone] = useState('');
  const [purpose, setPurpose] = useState('');
  const [time, setTime] = useState('');
  const [authorizedBy, setAuthorizedBy] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showSessionAlert, setShowSessionAlert] = useState(false); // ✅ NEW
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Visitor';
  const barcodeRef = useRef(null);
  const visitorId = `V-${Math.floor(Math.random() * 100000)}`;
  const issuedTime = new Date().toLocaleString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem('latestVisitor', JSON.stringify({ name: username, issuedTime }));
  };

  useEffect(() => {
    if (submitted && barcodeRef.current) {
      JsBarcode(barcodeRef.current, visitorId, {
        format: 'CODE128',
        lineColor: '#000',
        width: 2,
        height: 40,
        displayValue: true,
      });

      // ✅ NEW: Trigger session expiry alert after 2 minutes
      const timer = setTimeout(() => {
        setShowSessionAlert(true);
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleHelpClick = () => {
    navigate('/help');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const zoneColors = {
    Assembly: '#FF6F61',
    Packaging: '#FFD700',
    'Quality Control': '#4CAF50',
    Warehouse: '#2196F3',
    'Admin Office': '#9C27B0',
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: url('/image.png') no-repeat center center fixed;
          background-size: cover;
        }
      `}</style>
      <div style={styles.page}>
        <div style={styles.navbar}>
          <h3 style={{ color: '#fff', fontSize: '16px' }}>Welcome, {username}</h3>
          <div>
            <button onClick={handleHelpClick} style={styles.navBtn}>Help</button>
            <button onClick={handleAboutClick} style={styles.navBtn}>About</button>
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
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Zone to Visit</label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  required
                  style={{
                    ...styles.input,
                    backgroundColor: zoneColors[zone] || 'rgba(255,255,255,0.2)',
                    color: zoneColors[zone] ? '#fff' : '#000',
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
                <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} required style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Authorized By</label>
                <select value={authorizedBy} onChange={(e) => setAuthorizedBy(e.target.value)} required style={styles.input}>
                  <option value="">Select Authorizer</option>
                  <option value="Aarushi">Aarushi</option>
                  <option value="Dolly">Dolly</option>
                  <option value="Pranali">Pranali</option>
                                    <option value="Abhinav">Abhinav</option>
                </select>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" style={styles.button}>
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
            <h2 style={{ color: '#000', fontSize: '20px', marginBottom: '10px' }}>
              Thank You, {username}!
            </h2>
            <p style={{ color: '#000', fontSize: '16px', marginBottom: '20px' }}>
              You entered for <strong>{purpose}</strong> in the <strong>{zone}</strong> zone at <strong>{time}</strong>.
            </p>

            <div style={{
              ...styles.idCard,
              borderLeft: `6px solid ${zoneColors[zone]}`,
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '20px',
              alignItems: 'start',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '20px',
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#333',
              }}>
                Cognitrack Pvt. Ltd.
              </div>

              <div style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                fontSize: '13px',
                color: '#666',
              }}>
                Issued: {issuedTime}
              </div>

              <div style={{ paddingTop: '40px' }}>
                <h3 style={{ ...styles.idTitle, marginBottom: '10px' }}>Visitor ID Card</h3>
                <p><strong>Name:</strong> {username}</p>
                <p><strong>Zone:</strong> {zone}</p>
                <p><strong>Purpose:</strong> {purpose}</p>
                <p><strong>Authorized By:</strong> {authorizedBy}</p>
                <p><strong>ID:</strong> {visitorId}</p>
              </div>

              <canvas ref={barcodeRef} style={{ height: '70px', marginTop: '40px' }}></canvas>
            </div>

            <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />
            <div style={{ fontSize: '13px', color: '#666', textAlign: 'center' }}>
              For Help & Support, contact <strong>support@cognitrack.com</strong><br />
              Visit us at <strong>www.cognitrack.com</strong>
            </div>
          </motion.div>
        )}

        {/* Logout Confirmation Modal */}
        {showLogoutConfirm && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999
          }}>
            <div style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              maxWidth: '300px'
            }}>
              <h3 style={{ marginBottom: '20px', color: '#333' }}>Are you sure you want to logout?</h3>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button
                  onClick={confirmLogout}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  YES
                </button>
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ✅ Session Expiry Alert Modal */}
        {showSessionAlert && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999
          }}>
            <div style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              maxWidth: '300px'
            }}>
              <h3 style={{ marginBottom: '20px', color: '#333' }}>
                Session expiring. Do you want to continue?
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button
                  onClick={() => {
                    localStorage.clear();
                    navigate('/');
                  }}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Accept
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem('sessionDenied', JSON.stringify({
                      name: username,
                      time: new Date().toLocaleString()
                    }));
                    setShowSessionAlert(false);
                    alert('Session denied. Admin will be notified.');
                  }}
                  style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Deny
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default VisitorDetails;


