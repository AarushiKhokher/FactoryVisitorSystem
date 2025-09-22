// import React, { useState } from 'react';
// import {
//   FaHome,
//   FaInfoCircle,
//   FaCog,
//   FaChartBar,
//   FaShieldAlt,
//   FaQuestionCircle,
//   FaSignOutAlt,
//   FaMoon,
//   FaSun,
//   FaUser,
//   FaCheckCircle,
//   FaClock,
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const [theme, setTheme] = useState('light');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
//   const navigate = useNavigate();

//   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

//   const visitors = [
//     { name: 'John Doe', status: 'Active', checkin: '10:15 AM', checkout: '12:30 PM' },
//     { name: 'Jane Smith', status: 'Active', checkin: '10:45 AM', checkout: '01:00 PM' },
//     { name: 'Ravi Kumar', status: 'Active', checkin: '11:00 AM', checkout: '01:45 PM' },
//     { name: 'Priya Sharma', status: 'Inactive', checkin: '09:30 AM', checkout: '10:15 AM' },
//     { name: 'Amit Verma', status: 'Inactive', checkin: '08:50 AM', checkout: '09:20 AM' },
//   ];

//   const getTimeStatus = (checkin, checkout) => {
//     const [inHour, inMin, inPeriod] = checkin.match(/(\d+):(\d+)\s(AM|PM)/).slice(1);
//     const [outHour, outMin, outPeriod] = checkout.match(/(\d+):(\d+)\s(AM|PM)/).slice(1);

//     const toMinutes = (hour, min, period) => {
//       let h = parseInt(hour);
//       if (period === 'PM' && h !== 12) h += 12;
//       if (period === 'AM' && h === 12) h = 0;
//       return h * 60 + parseInt(min);
//     };

//     const inTime = toMinutes(inHour, inMin, inPeriod);
//     const outTime = toMinutes(outHour, outMin, outPeriod);
//     const duration = outTime - inTime;

//     return duration > 120 ? { inTime: '', overTime: '⏰ Yes' } : { inTime: '✔ Yes', overTime: '' };
//   };

//   const exportCSV = () => {
//     const headers = ['Name', 'Status', 'Check-in', 'Check-out', 'In Time', 'Over Time'];
//     const rows = filteredVisitors.map(visitor => {
//       const { inTime, overTime } = getTimeStatus(visitor.checkin, visitor.checkout);
//       return [visitor.name, visitor.status, visitor.checkin, visitor.checkout, inTime, overTime];
//     });

//     const csvContent = [headers, ...rows]
//       .map(row => row.map(cell => `"${cell}"`).join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'visitor_report.csv';
//     link.click();
//   };

//   const filteredVisitors = visitors.filter(visitor => {
//     const matchesStatus = filter === 'All' || visitor.status === filter;
//     const matchesSearch = visitor.name.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   const styles = {
//     page: {
//       minHeight: '100vh',
//       backgroundColor: theme === 'light' ? '#e6f7ff' : '#1e1e1e',
//       color: theme === 'light' ? '#000' : '#fff',
//       fontFamily: 'Segoe UI, sans-serif',
//       padding: '20px',
//       paddingLeft: '280px',
//     },
//     sidebar: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       height: '100vh',
//       width: '240px',
//       backgroundColor: theme === 'light' ? '#b3e5fc' : '#2A5298',
//       color: theme === 'light' ? '#000' : '#fff',
//       padding: '30px 20px',
//       boxShadow: '4px 0 12px rgba(0,0,0,0.2)',
//       zIndex: 1000,
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'flex-start',
//     },
//     dropdownItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '10px',
//       padding: '10px 0',
//       cursor: 'pointer',
//       fontSize: '14px',
//     },
//     welcomeTitle: {
//       fontSize: '36px',
//       fontWeight: 'bold',
//       marginBottom: '10px',
//       textAlign: 'center',
//       color: theme === 'light' ? '#007acc' : '#fff',
//     },
//     welcomeSubtitle: {
//       fontSize: '18px',
//       marginBottom: '60px',
//       textAlign: 'center',
//       maxWidth: '700px',
//       margin: '0 auto',
//     },
//     search: {
//       padding: '10px',
//       borderRadius: '6px',
//       border: '1px solid #ccc',
//       width: '250px',
//     },
//     button: {
//       padding: '10px 20px',
//       borderRadius: '6px',
//       border: 'none',
//       cursor: 'pointer',
//       backgroundImage: 'linear-gradient(to right, #81d4fa, #4fc3f7)',
//       color: '#000',
//       fontWeight: 'bold',
//       boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
//     },
//     table: {
//       width: '100%',
//       maxWidth: '900px',
//       margin: '0 auto',
//       backgroundColor: theme === 'light' ? '#ffffff' : '#2e2e2e',
//       borderCollapse: 'collapse',
//       boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
//       borderRadius: '12px',
//       overflow: 'hidden',
//     },
//     th: {
//       backgroundColor: '#81d4fa',
//       color: '#000',
//       padding: '12px',
//       textAlign: 'left',
//     },
//     td: {
//       padding: '12px',
//       borderBottom: '1px solid #eee',
//     },
//     overlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100vw',
//       height: '100vh',
//       backgroundColor: 'rgba(0,0,0,0.5)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       zIndex: 2000,
//     },
//     promptBox: {
//       backgroundColor: '#fff',
//       padding: '30px',
//       borderRadius: '10px',
//       textAlign: 'center',
//       boxShadow: '0 0 12px rgba(0,0,0,0.3)',
//     },
//     promptButton: {
//       padding: '10px 20px',
//       margin: '0 10px',
//       border: 'none',
//       borderRadius: '6px',
//       fontWeight: 'bold',
//       cursor: 'pointer',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.sidebar}>
//         <h2 style={{ marginBottom: '30px', fontSize: '22px', color: '#fff' }}>Dashboard Menu</h2>
//         <div style={styles.dropdownItem} onClick={() => navigate('/')}>
//           <FaHome /> Home
//         </div>
//         <div style={styles.dropdownItem} onClick={() => navigate('/about')}>
//           <FaInfoCircle /> About
//         </div>
//         <div style={styles.dropdownItem} onClick={() => navigate('/settings')}>
//           <FaCog /> Settings
//         </div>
//         <div style={styles.dropdownItem} onClick={() => navigate('/report')}>
//           <FaChartBar /> View Report
//         </div>
//         <div style={styles.dropdownItem} onClick={() => navigate('/zone')}>
//           <FaShieldAlt /> Zone
//         </div>
//         <div style={styles.dropdownItem} onClick={() => navigate('/help')}>
//           <FaQuestionCircle /> Help & Support
//         </div>
//         <div style={styles.dropdownItem} onClick={toggleTheme}>
//           {theme === 'light' ? <FaMoon /> : <FaSun />} Toggle Theme
//         </div>
//         <div style={styles.dropdownItem} onClick={() => setShowLogoutConfirm(true)}>
//           <FaSignOutAlt /> Logout
//         </div>
//       </div>

//       {/* Logout Confirmation Popup */}
//       {showLogoutConfirm && (
//         <div style={styles.overlay}>
//           <div style={styles.promptBox}>
//             <p style={{ fontSize: '18px', marginBottom: '20px' }}>
//               Are you sure you want to log out?
//             </p>
//             <button
//               style={{ ...styles.promptButton, backgroundColor: '#f44336', color: '#fff' }}
//               onClick={() => {
//                 localStorage.clear();
//                 navigate('/login');
//               }}
//             >
//               Yes
//             </button>
//             <button
//               style={{ ...styles.promptButton, backgroundColor: '#4CAF50', color: '#fff' }}
//               onClick={() => setShowLogoutConfirm(false)}
//             >
//               No
//             </button>
//           </div>
//         </div>
//       )}

//       <div style={{ maxWidth: '900px', margin: '0 auto' }}>
//         <h1 style={styles.welcomeTitle}>Welcome to the Dashboard</h1>
//         <p style={styles.welcomeSubtitle}>
//           Monitor and manage visitor activity in real-time. Use the filters and search to find specific records.
//         </p>

//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: '15px',
//           flexWrap: 'wrap',
//           marginBottom: '30px',
//         }}>
//           <input
//             type="text"
//             placeholder="Search visitor..."
//             style={styles.search}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button style={styles.button} onClick={() => setFilter('All')}>All</button>
//           <button style={styles.button} onClick={() => setFilter('Active')}>Active</button>
//           <button style={styles.button} onClick={() => setFilter('Inactive')}>Inactive</button>
//           <button style={styles.button} onClick={exportCSV}>📤 Export CSV</button>
//         </div>

//         {/* Visitor Table */}
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}><FaUser /> Name</th>
//               <th style={styles.th}><FaCheckCircle /> Status</th>
//               <th style={styles.th}><FaClock /> Check-in</th>
//               <th style={styles.th}><FaClock /> Check-out</th>
//               <th style={styles.th}>In Time</th>
//               <th style={styles.th}>Over Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredVisitors.map((visitor, index) => {
//               const { inTime, overTime } = getTimeStatus(visitor.checkin, visitor.checkout);
//               const rowStyle = {
//                 backgroundColor: overTime
//                   ? '#ffe6e6'
//                   : inTime
//                   ? '#e6ffe6'
//                   : 'transparent',
//               };

//               return (
//                 <tr key={index} style={rowStyle}>
//                   <td style={styles.td}>{visitor.name}</td>
//                   <td style={styles.td}>{visitor.status}</td>
//                   <td style={styles.td}>{visitor.checkin}</td>
//                   <td style={styles.td}>{visitor.checkout}</td>
//                   <td style={styles.td}>{inTime}</td>
//                   <td style={styles.td}>{overTime}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState } from 'react';
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaChartBar,
  FaShieldAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaUser,
  FaCheckCircle,
  FaClock,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const visitors = [
    { name: 'John Doe', status: 'Active', checkin: '10:15 AM', checkout: '12:30 PM' },
    { name: 'Jane Smith', status: 'Active', checkin: '10:45 AM', checkout: '01:00 PM' },
    { name: 'Ravi Kumar', status: 'Active', checkin: '11:00 AM', checkout: '01:45 PM' },
    { name: 'Priya Sharma', status: 'Inactive', checkin: '09:30 AM', checkout: '10:15 AM' },
    { name: 'Amit Verma', status: 'Inactive', checkin: '08:50 AM', checkout: '09:20 AM' },
  ];

  const getTimeStatus = (checkin, checkout) => {
    const [inHour, inMin, inPeriod] = checkin.match(/(\d+):(\d+)\s(AM|PM)/).slice(1);
    const [outHour, outMin, outPeriod] = checkout.match(/(\d+):(\d+)\s(AM|PM)/).slice(1);

    const toMinutes = (hour, min, period) => {
      let h = parseInt(hour);
      if (period === 'PM' && h !== 12) h += 12;
      if (period === 'AM' && h === 12) h = 0;
      return h * 60 + parseInt(min);
    };

    const inTime = toMinutes(inHour, inMin, inPeriod);
    const outTime = toMinutes(outHour, outMin, outPeriod);
    const duration = outTime - inTime;

    return duration > 120 ? { inTime: '', overTime: '⏰ Yes' } : { inTime: '✔ Yes', overTime: '' };
  };

  const exportCSV = () => {
    const headers = ['Name', 'Status', 'Check-in', 'Check-out', 'In Time', 'Over Time'];
    const rows = filteredVisitors.map(visitor => {
      const { inTime, overTime } = getTimeStatus(visitor.checkin, visitor.checkout);
      return [visitor.name, visitor.status, visitor.checkin, visitor.checkout, inTime, overTime];
    });

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'visitor_report.csv';
    link.click();
  };

  const filteredVisitors = visitors.filter(visitor => {
    const matchesStatus = filter === 'All' || visitor.status === filter;
    const matchesSearch = visitor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: theme === 'light' ? '#e6f7ff' : '#1e1e1e',
      color: theme === 'light' ? '#000' : '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px',
      paddingLeft: '280px',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '240px',
      backgroundColor: theme === 'light' ? '#b3e5fc' : '#2A5298',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '30px 20px',
      boxShadow: '4px 0 12px rgba(0,0,0,0.2)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    dropdownItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 0',
      cursor: 'pointer',
      fontSize: '14px',
    },
    welcomeTitle: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
      color: theme === 'light' ? '#007acc' : '#fff',
    },
    welcomeSubtitle: {
      fontSize: '18px',
      marginBottom: '40px',
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto',
    },
    search: {
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      width: '250px',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      backgroundImage: 'linear-gradient(to right, #81d4fa, #4fc3f7)',
      color: '#000',
      fontWeight: 'bold',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    },
    table: {
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: theme === 'light' ? '#ffffff' : '#2e2e2e',
      borderCollapse: 'collapse',
      boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    th: {
      backgroundColor: '#81d4fa',
      color: '#000',
      padding: '12px',
      textAlign: 'left',
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #eee',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
    },
    promptBox: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 0 12px rgba(0,0,0,0.3)',
    },
    promptButton: {
      padding: '10px 20px',
      margin: '0 10px',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.sidebar}>
        <h2 style={{ marginBottom: '30px', fontSize: '22px', color: '#fff' }}>Dashboard Menu</h2>
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
        <div style={styles.dropdownItem} onClick={() => setShowLogoutConfirm(true)}>
          <FaSignOutAlt /> Logout
        </div>
      </div>

            {showLogoutConfirm && (
        <div style={styles.overlay}>
          <div style={styles.promptBox}>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              Are you sure you want to log out?
            </p>
            <button
              style={{ ...styles.promptButton, backgroundColor: '#f44336', color: '#fff' }}
              onClick={() => {
                localStorage.clear();
                navigate('/login');
              }}
            >
              Yes
            </button>
            <button
              style={{ ...styles.promptButton, backgroundColor: '#4CAF50', color: '#fff' }}
              onClick={() => setShowLogoutConfirm(false)}
            >
              No
            </button>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={styles.welcomeTitle}>Welcome to the Dashboard</h1>
        <p style={styles.welcomeSubtitle}>
          Monitor and manage visitor activity in real-time. Use the filters and search to find specific records.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          <input
            type="text"
            placeholder="Search visitor..."
            style={styles.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button style={styles.button} onClick={() => setFilter('All')}>All</button>
          <button style={styles.button} onClick={() => setFilter('Active')}>Active</button>
          <button style={styles.button} onClick={() => setFilter('Inactive')}>Inactive</button>
          <button style={styles.button} onClick={exportCSV}>📤 Export CSV</button>
        </div>

        {/* Visitor Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}><FaUser /> Name</th>
              <th style={styles.th}><FaCheckCircle /> Status</th>
              <th style={styles.th}><FaClock /> Check-in</th>
              <th style={styles.th}><FaClock /> Check-out</th>
              <th style={styles.th}>In Time</th>
              <th style={styles.th}>Over Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredVisitors.map((visitor, index) => {
              const { inTime, overTime } = getTimeStatus(visitor.checkin, visitor.checkout);
              return (
                <tr key={index}>
                  <td style={styles.td}>{visitor.name}</td>
                  <td style={styles.td}>{visitor.status}</td>
                  <td style={styles.td}>{visitor.checkin}</td>
                  <td style={styles.td}>{visitor.checkout}</td>
                  <td style={styles.td}>{inTime}</td>
                  <td style={styles.td}>{overTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
