

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';

function Register() {
  const navigate = useNavigate();
  const isScanned = new URLSearchParams(window.location.search).get('scan') === 'true';

  const [visitorId] = useState(() => Math.floor(100000 + Math.random() * 900000).toString());
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [identityType, setIdentityType] = useState('');
  const [identityFile, setIdentityFile] = useState(null);
  const [identityPreview, setIdentityPreview] = useState(null);
  const [showForm, setShowForm] = useState(isScanned);

  const qrMessage = "https://factory-visitor-system.vercel.app/register?scan=true";

  const handleManualTrigger = () => setShowForm(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setIdentityFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setIdentityPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setIdentityPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && contact && email && password && identityType && identityFile) {
      localStorage.setItem('username', fullName); // ✅ Store full name
      localStorage.setItem('email', email);
      localStorage.setItem('visitorId', visitorId);
      alert(`Registered: ${fullName} with Visitor ID: ${visitorId}`);
      navigate('/login'); // ✅ Redirect to login page
    } else {
      alert('Please fill all fields and attach your identity proof.');
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: url('/image.png') no-repeat center center fixed;
          background-size: cover;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card {
          background: rgba(255, 255, 255, 0.7);
          padding: 40px 30px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 420px;
          color: #000;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group input, .form-group select {
          width: 100%;
          padding: 14px;
          border: none;
          border-bottom: 2px solid #666;
          background: transparent;
          color: #000;
          font-size: 16px;
          outline: none;
        }
        .register-btn {
          width: 100%;
          padding: 14px;
          background-color: #00BFFF;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
        }
        .scan-btn {
          background-color: transparent;
          border: 2px solid #00BFFF;
          color: #00BFFF;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 10px;
        }
        .identity-preview {
          margin-top: 10px;
          max-width: 100%;
          max-height: 120px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
      `}</style>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Visitor Registration</h2>

        {!showForm ? (
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <QRCodeCanvas value={qrMessage} size={200} />
            <p style={{ fontSize: '12px', color: '#333' }}>
              Scan this QR code using your mobile to open the full registration form.
            </p>
            <button className="scan-btn" onClick={handleManualTrigger}>Manual Registration</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Contact Number" value={contact} onChange={e => setContact(e.target.value)} required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="form-group">
              <input type="text" value={visitorId} readOnly />
            </div>
            <div className="form-group">
              <select value={identityType} onChange={e => setIdentityType(e.target.value)} required>
                <option value="">Select Identity Type</option>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="PAN Card">PAN Card</option>
                <option value="Voter ID">Voter ID</option>
              </select>
            </div>
            <div className="form-group">
              <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} required />
              {identityPreview && <img src={identityPreview} alt="Identity Preview" className="identity-preview" />}
            </div>
            <button type="submit" className="register-btn">Register</button>
          </form>
        )}

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </motion.div>
    </>
  );
}

export default Register;
