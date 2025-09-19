import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const [fadeIn, setFadeIn] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const styles = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f0f8ff',
      color: '#333',
      padding: '40px',
      minHeight: '100vh',
      opacity: fadeIn ? 1 : 0,
      transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 1s ease, transform 1s ease',
      position: 'relative',
    },
    header: {
      fontSize: '36px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#1E3C72',
    },
    backButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: '#00BFFF',
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    },
    section: {
      marginBottom: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      borderBottom: '1px solid #ccc',
      paddingBottom: '10px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#00BFFF',
      cursor: 'pointer',
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
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '200px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    contact: {
      backgroundColor: '#e6f7ff',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
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
      <button style={styles.backButton} onClick={() => navigate('/dashboard')}>
        ⬅ Back to Dashboard
      </button>

      <div style={styles.header}>About Cognitrack</div>

      {/* Our Mission */}
      <div style={styles.section}>
        <div style={styles.title} onClick={() => toggleSection('mission')}>
          Our Mission
        </div>
        <div style={{ ...styles.text, ...(openSection === 'mission' ? styles.textOpen : {}) }}>
          <p>
            Cognitrack is designed to revolutionize factory visitor management by combining security,
            efficiency, and smart technology. Our goal is to streamline entry processes, enhance safety,
            and provide real-time insights into visitor activity.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div style={styles.section}>
        <div style={styles.title} onClick={() => toggleSection('features')}>
          Key Features
        </div>
        <div style={{ ...styles.text, ...(openSection === 'features' ? styles.textOpen : {}) }}>
          <ul>
            <li>🔐 Secure digital check-in and check-out</li>
            <li>📊 Real-time visitor analytics</li>
            <li>📍 Location-aware access control</li>
            <li>⚙️ Seamless integration with factory systems</li>
            <li>🌐 Cloud-based data storage and reporting</li>
          </ul>
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
                <strong>{member.name}</strong>
                <p>{member.role}</p>
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
            <p>Email: support@cognitrack.com</p>
            <p>Location: Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
