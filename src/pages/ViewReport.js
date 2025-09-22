import React from 'react';
import { useNavigate } from 'react-router-dom';
import Plot from 'react-plotly.js';

function ViewReport() {
  const navigate = useNavigate();

  const monthlyVisitorData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    counts: [120, 95, 130, 110, 140, 125, 160, 150, 170],
  };

  const styles = {
    container: {
      position: 'relative',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#e6f2ff', // Original soft blue
      color: '#000',
      minHeight: '100vh',
      overflow: 'hidden',
    },
    backButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: '#ff6f61',
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    },
    title: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#333',
      textShadow: '1px 1px 2px #fff',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: '30px',
      marginTop: '40px',
      justifyItems: 'center',
      alignItems: 'center',
    },
    chartBox: {
      backgroundColor: '#ffffff',
      padding: '15px',
      borderRadius: '14px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
      width: '100%',
      maxWidth: '400px',
    },
    chartTitle: {
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#ff6f61',
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate('/dashboard')}>
        ⬅ Back to Dashboard
      </button>

      <h2 style={styles.title}>🌟 Visitor Report Overview</h2>

      <div style={styles.grid}>
        {/* Chart 1: Visitor Status */}
        <div style={styles.chartBox}>
          <div style={styles.chartTitle}>Visitor Status Distribution</div>
          <Plot
            data={[{
              type: 'pie',
              labels: ['Active Visitors', 'Inactive Visitors'],
              values: [3, 2],
              hole: 0.3,
              marker: { colors: ['#ff6f61', '#ffb347'] },
            }]}
            layout={{
              width: 300,
              height: 250,
              margin: { t: 20, b: 20, l: 20, r: 20 },
              paper_bgcolor: '#ffffff',
              font: { color: '#333' },
              transition: { duration: 500, easing: 'cubic-in-out' },
            }}
            config={{ displayModeBar: false }}
          />
        </div>

        {/* Chart 2: Gender Distribution */}
        <div style={styles.chartBox}>
          <div style={styles.chartTitle}>Gender Distribution</div>
          <Plot
            data={[{
              type: 'bar',
              x: ['Male Visitors', 'Female Visitors'],
              y: [4, 1],
              marker: { color: ['#ff6f61', '#ffb347'] },
            }]}
            layout={{
              width: 300,
              height: 250,
              margin: { t: 20, b: 40, l: 40, r: 20 },
              paper_bgcolor: '#ffffff',
              font: { color: '#333' },
              xaxis: { title: 'Gender' },
              yaxis: { title: 'Count' },
              transition: { duration: 500, easing: 'cubic-in-out' },
            }}
            config={{ displayModeBar: false }}
          />
        </div>

        {/* Chart 3: Monthly Visitors */}
        <div style={styles.chartBox}>
          <div style={styles.chartTitle}>Monthly Visitor Count</div>
          <Plot
            data={[{
              type: 'bar',
              x: monthlyVisitorData.months,
              y: monthlyVisitorData.counts,
              marker: { color: '#ff6f61' },
            }]}
            layout={{
              width: 300,
              height: 250,
              margin: { t: 20, b: 40, l: 40, r: 20 },
              paper_bgcolor: '#ffffff',
              font: { color: '#333' },
              xaxis: { title: 'Month' },
              yaxis: { title: 'Visitors' },
              transition: { duration: 500, easing: 'cubic-in-out' },
            }}
            config={{ displayModeBar: false }}
          />
        </div>

        {/* Chart 4: Daily Check-ins */}
        <div style={styles.chartBox}>
          <div style={styles.chartTitle}>Daily Check-ins (Last 7 Days)</div>
          <Plot
            data={[{
              type: 'scatter',
              mode: 'lines+markers',
              x: ['2025-09-11', '2025-09-12', '2025-09-13', '2025-09-14', '2025-09-15', '2025-09-16', '2025-09-17'],
              y: [2, 4, 1, 3, 5, 2, 4],
              line: { color: '#ff6f61' },
              marker: { color: '#ffb347' },
            }]}
            layout={{
              width: 300,
              height: 250,
              margin: { t: 20, b: 40, l: 40, r: 20 },
              paper_bgcolor: '#ffffff',
              font: { color: '#333' },
              xaxis: { title: 'Date' },
              yaxis: { title: 'Check-ins' },
              transition: { duration: 500, easing: 'cubic-in-out' },
            }}
            config={{ displayModeBar: false }}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewReport;



