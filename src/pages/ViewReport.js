import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Chart from 'react-apexcharts';
import * as XLSX from 'xlsx';
 
function ViewReport() {
  const navigate = useNavigate();
  const [isNightMode, setIsNightMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
 
  const toggleNightMode = () => setIsNightMode(!isNightMode);
 
  const holidays = [
    new Date('2025-01-01'),
    new Date('2025-10-02'),
    new Date('2025-12-25'),
  ];
 
  const isHoliday = (date) =>
    holidays.some(
      (holiday) =>
        holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear()
    );
 
  const monthlyVisitorData = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    series: [
      {
        name: 'Visitors',
        data: [120, 95, 130, 110, 140, 125, 160, 150, 170],
      },
    ],
  };
 
  const topVisitors = [
    { name: 'Amit Sharma', visits: 22 },
    { name: 'Priya Verma', visits: 18 },
    { name: 'Ravi Kumar', visits: 15 },
  ];
 
  const todayVisitors = ['Amit Sharma', 'Ravi Kumar'];
  const totalVisitors = monthlyVisitorData.series[0].data.reduce((a, b) => a + b, 0);
  const avgVisitors = Math.round(totalVisitors / monthlyVisitorData.series[0].data.length);
 
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      monthlyVisitorData.categories.map((month, i) => ({
        Month: month,
        Visitors: monthlyVisitorData.series[0].data[i],
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Monthly Visitors');
    XLSX.writeFile(workbook, 'Visitor_Report.xlsx');
  };
 
  const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Segoe UI, sans-serif',
      minHeight: '100vh',
      backgroundColor: isNightMode ? '#1a1a2e' : '#f0f4f8',
      color: isNightMode ? '#f8f8f8' : '#1a1a2e',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    actionBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
    },
    button: {
      backgroundColor: isNightMode ? '#3f3f5f' : '#0077b6',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginRight: '10px',
    },
    backButton: {
      backgroundColor: '#ff6f61',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
    },
    card: {
      backgroundColor: isNightMode ? '#2e2e3e' : '#ffffff',
      padding: '20px',
      borderRadius: '16px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
    },
    chartTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center',
      color: '#ff6f61',
    },
    calendarSection: {
      marginTop: '50px',
      padding: '20px',
      borderRadius: '16px',
      backgroundColor: isNightMode ? '#2e2e3e' : '#ffffff',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    calendarTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#0077b6',
    },
    todayDot: {
      backgroundColor: '#0077b6',
      borderRadius: '50%',
      width: '6px',
      height: '6px',
      margin: 'auto',
    },
    sidebar: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginTop: '30px',
      width: '100%',
    },
    statBox: {
      backgroundColor: isNightMode ? '#3f3f5f' : '#e0f7fa',
      padding: '15px',
      borderRadius: '12px',
    },
    statTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    statValue: {
      fontSize: '14px',
    },
    quoteBox: {
      backgroundColor: isNightMode ? '#3f3f5f' : '#fff3cd',
      padding: '15px',
      borderRadius: '12px',
      fontStyle: 'italic',
      fontSize: '14px',
    },
  };
 
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>🏭 Factory Visitor Insights</div>
      </div>
 
      <div style={styles.actionBar}>
        <div>
          <button style={styles.button} onClick={toggleNightMode}>
            {isNightMode ? '☀️ Light Mode' : '🌙 Night Mode'}
          </button>
          <button style={styles.button} onClick={downloadExcel}>
            📥 Export Excel
          </button>
        </div>
        <button style={styles.backButton} onClick={() => navigate('/dashboard')}>
          ⬅ Back to Dashboard
        </button>
      </div>
 
      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.chartTitle}>Monthly Visitors</div>
          <Chart
            options={{
              chart: { type: 'bar', background: 'transparent' },
              xaxis: { categories: monthlyVisitorData.categories },
              theme: { mode: isNightMode ? 'dark' : 'light' },
              colors: ['#0077b6'],
              dataLabels: { enabled: false },
            }}
            series={monthlyVisitorData.series}
            type="bar"
            height={300}
          />
        </div>
 
        <div style={styles.card}>
          <div style={styles.chartTitle}>Gender Distribution</div>
          <Chart
            options={{
              labels: ['Male', 'Female'],
              theme: { mode: isNightMode ? 'dark' : 'light' },
              colors: ['#ff6f61', '#48cae4'],
            }}
            series={[4, 1]}
            type="donut"
            height={300}
          />
        </div>
 
        <div style={styles.card}>
          <div style={styles.chartTitle}>Daily Check-ins</div>
          <Chart
            options={{
              chart: { type: 'line', zoom: { enabled: false } },
              xaxis: {
                categories: [
                  'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14',
                  'Sep 15', 'Sep 16', 'Sep 17',
                ],
              },
              theme: { mode: isNightMode ? 'dark' : 'light' },
              stroke: { curve: 'smooth' },
              colors: ['#00b4d8'],
            }}
            series={[{ name: 'Check-ins', data: [2, 4, 1, 3, 5, 2, 4] }]}
            type="line"
            height={300}
          />
        </div>
      </div>
 
      <div style={styles.calendarSection}>
        <div style={styles.calendarTitle}>📅 Holiday Calendar</div>
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          tileClassName={({ date }) => isHoliday(date) ? 'holiday-tile' : null}
          tileContent={({ date, view }) =>
            view === 'month' && date.toDateString() === new Date().toDateString() ? (
              <div style={styles.todayDot} />
            ) : null
          }
        />
        <style>{`
          .holiday-tile {
            background: #ffdd57 !important;
            border-radius: 50%;
          }
        `}</style>
 
        <div style={styles.sidebar}>
          <div style={styles.statBox}>
            <div style={styles.statTitle}>Today's Visitors</div>
            <div style={styles.statValue}>{todayVisitors.join(', ')}</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statTitle}>Total This Month</div>
            <div style={styles.statValue}>{totalVisitors} visitors</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statTitle}>Average Per Day</div>
            <div style={styles.statValue}>{avgVisitors} visitors</div>
          </div>
          <div style={styles.quoteBox}>
            "Success is the sum of small efforts repeated day in and day out."
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ViewReport;
 


