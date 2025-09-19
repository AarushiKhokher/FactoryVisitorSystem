import React from 'react';
import { useNavigate } from 'react-router-dom';
import Plot from 'react-plotly.js';

function ViewReport() {
  const navigate = useNavigate();

  const styles = {
    container: {
      position: 'relative',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#e6f2ff',
      color: '#000',
      minHeight: '100vh',
    },
    backButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: '#00BFFF',
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    },
  };

  return (
    <div style={styles.container}>
      {/* ✅ Back to Dashboard Button */}
      <button style={styles.backButton} onClick={() => navigate('/dashboard')}>
        ⬅ Back to Dashboard
      </button>

      <h2>📊 Visitor Report Overview</h2>

      <div style={{ marginBottom: '40px' }}>
        <h3>Visitor Status Distribution (Active vs Inactive)</h3>
        <Plot
          data={[{
            type: 'pie',
            labels: ['Active Visitors', 'Inactive Visitors'],
            values: [3, 2],
            hole: 0.3,
            marker: { colors: ['#00BFFF', '#87CEFA'] },
          }]}
          layout={{
            paper_bgcolor: '#e6f2ff',
            font: { color: 'black' },
          }}
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3>Gender Distribution of Visitors (Male vs Female)</h3>
        <Plot
          data={[{
            type: 'bar',
            x: ['Male Visitors', 'Female Visitors'],
            y: [4, 1],
            marker: { color: ['#00BFFF', '#4682B4'] },
          }]}
          layout={{
            paper_bgcolor: '#e6f2ff',
            font: { color: 'black' },
            xaxis: { title: 'Gender' },
            yaxis: { title: 'Count' },
          }}
        />
      </div>

      <div>
        <h3>Daily Visitor Check-ins (Last 7 Days)</h3>
        <Plot
          data={[{
            type: 'scatter',
            mode: 'lines+markers',
            x: ['2025-09-11', '2025-09-12', '2025-09-13', '2025-09-14', '2025-09-15', '2025-09-16', '2025-09-17'],
            y: [2, 4, 1, 3, 5, 2, 4],
            line: { color: '#00BFFF' },
          }]}
          layout={{
            paper_bgcolor: '#e6f2ff',
            font: { color: 'black' },
            xaxis: { title: 'Date' },
            yaxis: { title: 'Number of Check-ins' },
          }}
        />
      </div>
    </div>
  );
}

export default ViewReport;

