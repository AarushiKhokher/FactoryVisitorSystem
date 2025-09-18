// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Settings from './pages/Settings';
import Report from './pages/ViewReport';
import Login from './pages/Login';
import Register from './pages/Register';
import PeopleZoneAccess from './pages/PeopleZoneAccess';
import Zone from './pages/Zone'; 
import HelpSupport from './pages/HelpSupport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/zone-access" element={<PeopleZoneAccess />} />
        <Route path="/zone" element={<Zone />} /> 
        <Route path="/help" element={<HelpSupport />} />
      </Routes>
    </Router>
  );
}

export default App;


