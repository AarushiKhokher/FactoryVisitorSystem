import React, { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

function AboutUs() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const role = localStorage.getItem('role'); // ✅ Get role from localStorage

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const styles = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: theme === 'light' ? '#f0f8ff' : '#232526',
      backgroundImage: theme === 'light' ? 'url("/girl.png")' : 'url("/girl-dark.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '100px 40px 40px 40px',
      minHeight: '100vh',
      opacity: fadeIn ? 1 : 0,
      transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 1s ease, transform 1s ease, background 0.5s, color 0.5s',
      position: 'relative',
    },
    topRightControls: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '10px',
    },
    dashboardButton: {
      backgroundColor: '#00BFFF',
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
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
    header: {
      fontSize: '36px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '30px',
      color: theme === 'light' ? '#1E3C72' : '#00BFFF',
    },
    section: {
      marginBottom: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      paddingBottom: '10px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#005A9C',
      cursor: 'pointer',
      textAlign: 'left',
      paddingLeft: '10px',
      borderLeft: '4px solid #005A9C',
    },
    text: {
      fontSize: '16px',
      lineHeight: '1.6',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.5s ease',
    },
    textOpen: {
      maxHeight: '1000px',
      transition: 'max-height 0.5s ease',
    },
    teamGrid: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '20px',
    },
    teamCard: {
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '200px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, background 0.5s, color 0.5s',
      color: theme === 'light' ? '#333' : '#fff',
    },
    contact: {
      backgroundColor: theme === 'light' ? '#e6f7ff' : '#444',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      color: theme === 'light' ? '#333' : '#fff',
    },
  };

  const teamMembers = [
    { name: 'Aarushi', role: 'Frontend Developer' },
    { name: 'Dolly', role: 'UI/UX Designer' },
    { name: 'Pranali', role: 'Backend Developer' },
    { name: 'Abhinav', role: 'Project Lead' },
  ];

  return (
    <div style={styles.page}>
      {/* Top Right Controls */}
      <div style={styles.topRightControls}>
        {role === 'admin' && (
          <button style={styles.dashboardButton} onClick={() => navigate('/dashboard')}>
            ⬅ Back to Dashboard
          </button>
        )}
        <div style={styles.toggleSwitch} onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
          {theme === 'light' ? 'Night Mode' : 'Light Mode'}
        </div>
      </div>

      <div style={styles.header}>About Cognitrack</div>

      {/* Our Mission */}
      <div style={styles.section}>
        <div style={styles.title} onClick={() => toggleSection('mission')}>
          Our Mission
        </div>
        <div style={{ ...styles.text, ...(openSection === 'mission' ? styles.textOpen : {}) }}>
          Cognitrack is designed to revolutionize factory visitor management by combining security,
          efficiency, and smart technology. Our goal is to streamline entry processes, enhance safety,
          and provide real-time insights into visitor activity.
        </div>
      </div>

      {/* Key Features */}
      <div style={styles.section}>
        <div style={styles.title} onClick={() => toggleSection('features')}>
          Key Features
        </div>
        <div style={{ ...styles.text, ...(openSection === 'features' ? styles.textOpen : {}) }}>
          🔐 Secure digital check-in and check-out<br />
          📊 Real-time visitor analytics<br />
          📍 Location-aware access control<br />
          ⚙️ Seamless integration with factory systems<br />
          🌐 Cloud-based data storage and reporting
        </div>
      </div>

      {/* Meet the Team */}
      <div style={styles.section}>
        <div style={styles.title} onClick={() => toggleSection('team')}>
          Meet the Team
        </div>
        <div style={{ ...styles.text, ...(openSection === 'team' ? styles.textOpen : {}) }}>
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={styles.teamCard}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div>{member.name}</div>
                <div>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div style={styles.section}>
        <div style={styles.title} onClick={() => toggleSection('contact')}>
          Contact Us
        </div>
        <div style={{ ...styles.text, ...(openSection === 'contact' ? styles.textOpen : {}) }}>
          <div style={styles.contact}>
            Email: support@cognitrack.com<br />
            Location: Coimbatore, Tamil Nadu
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
