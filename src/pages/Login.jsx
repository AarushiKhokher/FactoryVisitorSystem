import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);

      if (role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/guest-policy');
      }
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
        }
        .navbar {
          width: 100%;
          padding: 15px 30px;
          background-color: rgba(0, 0, 0, 0.4);
          color: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }
        .navbar h1 { margin: 0; }
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 100px;
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
          animation: fadeInUp 1s ease forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .form-group { margin-bottom: 20px; }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 14px;
          border: none;
          border-bottom: 2px solid #666;
          background: transparent;
          color: #000;
          font-size: 16px;
          outline: none;
        }
        .form-group input::placeholder { color: #555; }
        .form-group input:focus,
        .form-group select:focus { border-color: #64B5F6; }
        .login-btn {
          width: 100%;
          padding: 14px;
          background-color: #64B5F6;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .login-btn:hover { background-color: #42A5F5; }
        .register-link {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #000;
        }
        .register-link a {
          color: #64B5F6;
          text-decoration: none;
          font-weight: 500;
        }
        .register-link a:hover { color: #42A5F5; }
      `}</style>

      <div className="navbar">
        <h1>Factory Visitor System</h1>
      </div>

      <div className="page">
        <div className="card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="admin">Admin</option>
                <option value="visitor">Visitor</option>
              </select>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;




