import React, { useState } from 'react';
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaCog,
  FaChartBar,
  FaShieldAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 
function Dashboard() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
 
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleMenu = () => setMenuOpen(!menuOpen);
 
  const visitors = [
    { name: 'John Doe', status: 'Active', checkin: '10:15 AM' },
    { name: 'Jane Smith', status: 'Active', checkin: '10:45 AM' },
    { name: 'Ravi Kumar', status: 'Active', checkin: '11:00 AM' },
    { name: 'Priya Sharma', status: 'Inactive', checkin: '09:30 AM' },
    { name: 'Amit Verma', status: 'Inactive', checkin: '08:50 AM' },
  ];
 
  const filteredVisitors = visitors.filter(visitor => {
    const matchesStatus = filter === 'All' || visitor.status === filter;
    const matchesSearch = visitor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });
 
  const showLogoutPrompt = () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(173, 216, 230, 0.95)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';
 
    const box = document.createElement('div');
    box.style.backgroundColor = '#fff';
    box.style.padding = '30px';
    box.style.borderRadius = '10px';
    box.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';
    box.style.textAlign = 'center';
 
    const message = document.createElement('p');
    message.textContent = 'Are you sure you want to log out?';
    message.style.fontSize = '18px';
    message.style.marginBottom = '20px';
 
    const yesBtn = document.createElement('button');
    yesBtn.textContent = 'Yes';
    yesBtn.style.marginRight = '10px';
    yesBtn.style.padding = '10px 20px';
    yesBtn.style.backgroundColor = '#00BFFF';
    yesBtn.style.color = '#fff';
    yesBtn.style.border = 'none';
    yesBtn.style.borderRadius = '6px';
    yesBtn.style.cursor = 'pointer';
    yesBtn.onclick = () => {
      document.body.removeChild(overlay);
      navigate('/login');
    };
 
    const noBtn = document.createElement('button');
    noBtn.textContent = 'No';
    noBtn.style.padding = '10px 20px';
    noBtn.style.backgroundColor = '#ccc';
    noBtn.style.color = '#000';
    noBtn.style.border = 'none';
    noBtn.style.borderRadius = '6px';
    noBtn.style.cursor = 'pointer';
    noBtn.onclick = () => {
      document.body.removeChild(overlay);
    };
 
    box.appendChild(message);
    box.appendChild(yesBtn);
    box.appendChild(noBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  };
 
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: theme === 'light' ? '#f0f8ff' : '#1e1e1e',
      color: theme === 'light' ? '#000' : '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: theme === 'light' ? '#1E3C72' : '#2A5298',
      color: '#fff',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    navTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    menuIcon: {
      fontSize: '22px',
      cursor: 'pointer',
    },
    dropdown: {
      backgroundColor: theme === 'light' ? '#1E3C72' : '#2A5298',
      color: '#fff',
      borderRadius: '8px',
      padding: '10px 20px',
      marginTop: '10px',
      display: menuOpen ? 'block' : 'none',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    },
    dropdownItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 0',
      cursor: 'pointer',
      fontSize: '14px',
    },
    welcomeTitle: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center',
    },
    welcomeSubtitle: {
      fontSize: '18px',
      marginBottom: '30px',
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto',
    },
    search: {
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      width: '250px',
      marginBottom: '20px',
    },
    filterButtons: {
      marginBottom: '20px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#00BFFF',
      color: '#fff',
      fontWeight: 'bold',
    },
    table: {
      width: '100%',
      maxWidth: '700px',
      margin: '0 auto',
      backgroundColor: theme === 'light' ? '#fff' : '#2e2e2e',
      borderCollapse: 'collapse',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    th: {
      backgroundColor: '#00BFFF',
      color: '#fff',
      padding: '12px',
      textAlign: 'left',
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #eee',
    },
  };
 
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navTitle}>Factory Visitor Dashboard</div>
        <FaBars style={styles.menuIcon} onClick={toggleMenu} />
      </div>
 
      {/* Dropdown Menu */}
      <div style={styles.dropdown}>
        <div style={styles.dropdownItem} onClick={() => navigate('/')}>
          <FaHome /> Home
        </div>
        <div style={styles.dropdownItem} onClick={() => navigate('/about')}>
          <FaInfoCircle /> About
        </div>
        <div style={styles.dropdownItem} onClick={() => navigate('/settings')}>
          <FaCog /> Settings
        </div>
        <div style={styles.dropdownItem} onClick={() => navigate('/report')}>
          <FaChartBar /> View Report
        </div>
        <div style={styles.dropdownItem} onClick={() => navigate('/zone')}>
          <FaShieldAlt /> Zone
        </div>
        <div style={styles.dropdownItem} onClick={() => navigate('/help')}>
          <FaQuestionCircle /> Help & Support
        </div>
        <div style={styles.dropdownItem} onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />} Toggle Theme
        </div>
        <div style={styles.dropdownItem} onClick={showLogoutPrompt}>
          <FaSignOutAlt /> Logout
        </div>
      </div>
 
      {/* Welcome */}
      <h1 style={styles.welcomeTitle}>Welcome to the Dashboard</h1>
      <p style={styles.welcomeSubtitle}>
        Monitor and manage visitor activity in real-time. Use the filters and search to find specific records.
      </p>
 
      {/* Search & Filter */}
      <input
        type="text"
        placeholder="Search visitor..."
        style={styles.search}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
 
      <div style={styles.filterButtons}>
        <button style={styles.button} onClick={() => setFilter('All')}>All</button>
        <button style={styles.button} onClick={() => setFilter('Active')}>Active</button>
        <button style={styles.button} onClick={() => setFilter('Inactive')}>Inactive</button>
      </div>
 
      {/* Visitor Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Check-in Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredVisitors.map((visitor, index) => (
            <tr key={index}>
              <td style={styles.td}>{visitor.name}</td>
              <td style={styles.td}>{visitor.status}</td>
              <td style={styles.td}>{visitor.checkin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default Dashboard;
 
