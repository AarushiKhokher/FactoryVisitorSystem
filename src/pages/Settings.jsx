import React, { useState } from 'react';
import AccessControl from './AccessControl';
import NotificationSettings from './NotificationSettings';
import { FaLock, FaBell, FaUserEdit } from 'react-icons/fa';

function Settings() {
  const [activeSection, setActiveSection] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert(`Profile Updated:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #cce5ff, #99ccff);
          animation: shimmer 10s infinite linear;
        }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .settings-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
        }

        .settings-card {
          background: rgba(255, 255, 255, 0.2);
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 800px;
          color: #333;
          border: 2px solid rgba(255, 255, 255, 0.4);
        }

        .settings-card h2 {
          font-size: 32px;
          margin-bottom: 10px;
          text-align: center;
          color: #003366;
        }

        .settings-card p {
          font-size: 16px;
          text-align: center;
          margin-bottom: 30px;
        }

        .section-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #007BFF;
          color: #fff;
          padding: 12px 20px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 10px;
          transition: all 0.3s ease;
          width: 100%;
        }

        .section-button:hover {
          background-color: #0056b3;
          transform: scale(1.02);
        }

        .section-content {
          margin-bottom: 30px;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .update-btn {
          background-color: #00BFFF;
          color: #fff;
          padding: 12px 20px;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .update-btn:hover {
          background-color: #0099cc;
        }

        @media (max-width: 600px) {
          .settings-card {
            padding: 20px;
          }

          .section-button {
            font-size: 14px;
            padding: 10px 16px;
          }
        }
      `}</style>

      <div className="settings-container">
        <div className="settings-card">
          <h2>⚙️ Settings Panel</h2>
          <p>Customize your experience and manage system preferences</p>

          <div>
            <button className="section-button" onClick={() => toggleSection('access')}>
              <FaLock /> Access Control
            </button>
            {activeSection === 'access' && (
              <div className="section-content">
                <AccessControl />
              </div>
            )}

            <button className="section-button" onClick={() => toggleSection('notifications')}>
              <FaBell /> Notification Settings
            </button>
            {activeSection === 'notifications' && (
              <div className="section-content">
                <NotificationSettings />
              </div>
            )}

            <button className="section-button" onClick={() => toggleSection('profile')}>
              <FaUserEdit /> Update Profile
            </button>
            {activeSection === 'profile' && (
              <div className="section-content">
                <form onSubmit={handleProfileUpdate}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="update-btn">Update Profile</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
