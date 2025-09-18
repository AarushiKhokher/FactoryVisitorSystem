// DataManagement.js
import React from 'react';

function DataManagement() {
  const handleExport = () => {
    alert('Visitor data exported successfully!');
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all visitor data?')) {
      alert('Visitor data cleared.');
    }
  };

  return (
    <div>
      <h3>Data Management</h3>
      <button onClick={handleExport} style={{ marginRight: '10px', padding: '10px' }}>
        Export Data
      </button>
      <button onClick={handleClear} style={{ padding: '10px' }}>
        Clear Data
      </button>
    </div>
  );
}

export default DataManagement;
