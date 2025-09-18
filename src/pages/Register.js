import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';

function Register() {
  const [fullName, setFullName] = useState('');
  const [visitorId, setVisitorId] = useState('');
  const [idGenerated, setIdGenerated] = useState(false);
  const navigate = useNavigate();

  // Replace with your actual IP or deployed URL
  const qrMessage = "http://10.112.52.30:3000/register?scan=true";

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

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #1E3C72, #2A5298);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px 30px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 420px;
          color: #fff;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group input {
          width: 100%;
          padding: 14px;
          border: none;
          border-bottom: 2px solid #ccc;
          background: transparent;
          color: #fff;
          font-size: 16px;
          outline: none;
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
        }

        .login-link a {
          color: #00BFFF;
          text-decoration: none;
          font-weight: 500;
        }

        .qr-box {
          text-align: center;
          margin-bottom: 30px;
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
      `}</style>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Visitor Registration</h2>

        <div className="qr-box">
          <QRCodeCanvas value={qrMessage} size={200} />
          <p style={{ fontSize: '12px', color: '#ccc' }}>
            Scan this QR code using your mobile. It will open this page and auto-generate your Visitor ID.
          </p>
          <button className="scan-btn" onClick={handleScanTrigger}>
            I've Scanned – Generate Visitor ID
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
      </motion.div>
    </>
  );
}

export default Register;

