import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';

function Register() {
  const [fullName, setFullName] = useState('');
  const [visitorId, setVisitorId] = useState('');
  const [idGenerated, setIdGenerated] = useState(false);
  const [showManualForm, setShowManualForm] = useState(false);
  const [manualName, setManualName] = useState('');
  const [manualContact, setManualContact] = useState('');
  const [manualEmail, setManualEmail] = useState('');
  const [manualPassword, setManualPassword] = useState('');
  const navigate = useNavigate();

  // ✅ Replace with your actual Vercel URL
  const qrMessage = "https://factory-visitor-system.vercel.app/register?scan=true";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('scan') === 'true') {
      handleScanTrigger();
    }
  }, []);

  const handleScanTrigger = () => {
    const generatedId = Math.floor(100000 + Math.random() * 900000).toString();
    setVisitorId(generatedId);
    setIdGenerated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && visitorId) {
      localStorage.setItem('visitorId', visitorId);
      localStorage.setItem('fullName', fullName);
      alert(`Registered: ${fullName} with Visitor ID: ${visitorId}`);
      navigate('/login');
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (manualName && manualContact && manualEmail && manualPassword) {
      alert(`Manual Registration Successful for ${manualName}`);
      navigate('/login');
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

        .form-group input {
          width: 100%;
          padding: 14px;
          border: none;
          border-bottom: 2px solid #666;
          background: transparent;
          color: #000;
          font-size: 16px;
          outline: none;
        }

        .form-group input::placeholder {
          color: #555;
        }

        .form-group input:focus {
          border-color: #00BFFF;
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

        .login-link {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #000;
        }

        .login-link a {
          color: #00BFFF;
          text-decoration: none;
          font-weight: 500;
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

        .manual-popup h3 {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Visitor Registration</h2>

        {!showManualForm && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <QRCodeCanvas value={qrMessage} size={200} />
              <p style={{ fontSize: '12px', color: '#333' }}>
                Scan this QR code using your mobile. It will open this page and auto-generate your Visitor ID.
              </p>
              <button className="scan-btn" onClick={handleScanTrigger}>
                I've Scanned – Generate Visitor ID
              </button>
              <button className="scan-btn" onClick={() => setShowManualForm(true)}>
                Manual Registration
              </button>
            </div>

            {idGenerated && (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={visitorId}
                    readOnly
                  />
                </div>
                <button type="submit" className="register-btn">Register</button>
              </form>
            )}

            <p className="login-link">
              Already registered? <Link to="/login">Login</Link>
            </p>
          </>
        )}

        {showManualForm && (
          <>
            <div className="manual-popup">
              <h3>Manual Registration</h3>
              <form onSubmit={handleManualSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={manualName}
                    onChange={(e) => setManualName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Contact Number"
                    value={manualContact}
                    onChange={(e) => setManualContact(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={manualEmail}
                    onChange={(e) => setManualEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={manualPassword}
                    onChange={(e) => setManualPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="register-btn">Submit</button>
              </form>
              <button className="scan-btn" onClick={() => setShowManualForm(false)}>
                Close Manual Registration
              </button>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
}

export default Register;





