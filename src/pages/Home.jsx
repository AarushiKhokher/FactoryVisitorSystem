import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Home() {
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundImage: 'url("/image.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      fontFamily: 'Segoe UI, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#000', // changed to black
    },
    subtitle: {
      fontSize: '18px',
      marginBottom: '40px',
      maxWidth: '700px',
      color: '#000', // changed to black
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    linkButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '14px 28px',
      backgroundColor: '#00BFFF',
      color: '#fff',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      transition: 'transform 0.2s ease',
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Welcome to Factory Visitor System</h1>
      <p style={styles.subtitle}>
        Secure, smart, and simple visitor management for modern factories.
      </p>

      <div style={styles.navLinks}>
        <Link to="/login" style={styles.linkButton}>
          <FaSignInAlt /> Login
        </Link>
        <Link to="/register" style={styles.linkButton}>
          <FaUserPlus /> Register
        </Link>
      </div>
    </div>
  );
}

export default Home;

