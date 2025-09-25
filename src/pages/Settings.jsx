import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccessControl from './AccessControl';
import NotificationSettings from './NotificationSettings';
import { FaLock, FaBell, FaUserEdit, FaArrowLeft, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
 
function Settings() {
  const [activeSection, setActiveSection] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
 
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };
 
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert(`Profile Updated:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };
 
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    setIsDark(!isDark);
  };
 
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(to bottom right, #e0f7fa, #f0f8ff);
          transition: background 0.5s ease;
        }
 
        .dark-theme {
          background: linear-gradient(to bottom right, #2c3e50, #34495e);
          color: #fff;
        }
 
        .settings-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
        }
 
        .settings-card {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          padding: 40px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 800px;
          color: #000;
          animation: fadeIn 0.6s ease;
        }
 
        .dark-theme .settings-card {
          background: rgba(30, 30, 30, 0.8);
          color: #fff;
        }
 
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
 
        .back-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: #64B5F6;
          color: #fff;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
 
        .back-btn:hover {
          background-color: #42A5F5;
        }
 
        .theme-toggle {
          position: absolute;
          top: 70px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: bold;
          color: #333;
        }
 
        .switch-track {
          width: 40px;
          height: 20px;
          background-color: #ccc;
          border-radius: 20px;
          position: relative;
        }
 
        .switch-thumb {
          position: absolute;
          top: 2px;
          left: ${isDark ? '22px' : '2px'};
          width: 16px;
          height: 16px;
          background-color: #fff;
          border-radius: 50%;
          transition: left 0.3s;
        }
 
        .avatar {
          display: flex;
          justify-content: center;
          font-size: 60px;
          color: #64B5F6;
          margin-bottom: 20px;
        }
 
        .section-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #64B5F6;
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
          background-color: #42A5F5;
          transform: scale(1.02);
        }
 
        .dark-theme .section-button,
        .dark-theme .update-btn {
          background-color: #1e88e5;
        }
 
        .dark-theme .section-button:hover,
        .dark-theme .update-btn:hover {
          background-color: #1565c0;
        }
 
        .section-content {
          margin-bottom: 30px;
          padding: 20px;
          background-color: rgba(255,255,255,0.6);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          animation: fadeIn 0.4s ease;
        }
 
        .form-group {
          margin-bottom: 15px;
        }
 
        .form-group input {
          width: 100%;
          padding: 12px;
          border: none;
          border-bottom: 2px solid #666;
          background: transparent;
          color: inherit;
          font-size: 16px;
          outline: none;
        }
 
        .form-group input::placeholder {
          color: #555;
        }
 
        .form-group input:focus {
          border-color: #64B5F6;
        }
 
        .update-btn {
          background-color: #64B5F6;
          color: #fff;
          padding: 12px 20px;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
 
        .update-btn:hover {
          background-color: #42A5F5;
        }
 
        .divider {
          height: 1px;
          background-color: #ccc;
          margin: 20px 0;
        }
 
        .empty-state {
          text-align: center;
          font-size: 14px;
          color: #666;
          margin-top: 20px;
        }
 
        @media (max-width: 600px) {
          .settings-card {
            padding: 20px;
          }
 
          .section-button {
            font-size: 14px;
            padding: 10px 16px;
          }
 
          .back-btn {
            top: 10px;
            right: 10px;
            padding: 8px 12px;
            font-size: 14px;
          }
 
          .theme-toggle {
            top: 60px;
            right: 10px;
          }
        }
      `}</style>
 
      <div className="settings-container">
        <div className="settings-card">
          {/* Back Button */}
          <button className="back-btn" onClick={() => navigate('/dashboard')}>
            <FaArrowLeft /> Back to Dashboard
          </button>
 
          {/* Toggle Switch Below Back Button */}
          <div className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
            <div className="switch-track">
              <div className="switch-thumb"></div>
            </div>
          </div>
 
          <div className="avatar">
            <FaUserCircle />
          </div>
 
          <h2>⚙️ Settings Panel</h2>
          <p>Customize your experience and manage system preferences</p>
 
          <div>
            <button className="section-button" onClick={() => toggleSection('access')}>
              <FaLock /> Access Control
            </button>
            {activeSection === 'access' && (
              <div className="section-content">
                <h3>🔐 Manage Access</h3>
                <AccessControl />
              </div>
            )}
 
            <div className="divider"></div>
 
            <button className="section-button" onClick={() => toggleSection('notifications')}>
              <FaBell /> Notification Settings
            </button>
            {activeSection === 'notifications' && (
              <div className="section-content">
                <h3>🔔 Notification Preferences</h3>
                <NotificationSettings />
              </div>
            )}
 
            <div className="divider"></div>
 
            <button className="section-button" onClick={() => toggleSection('profile')}>
              <FaUserEdit /> Update Profile
            </button>
            {activeSection === 'profile' && (
              <div className="section-content">
                <h3>👤 Edit Your Info</h3>
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
 
            {!activeSection && (
              <div className="empty-state">
                Select a section above to begin customizing your settings.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Settings;


