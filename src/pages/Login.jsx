// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      localStorage.setItem('username', username);

      // Redirect to default page after login
      navigate('/dashboard'); // You can change this to any route you prefer
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
        }

        .navbar {
          width: 100%;
          padding: 15px 30px;
          background-color: rgba(0, 0, 0, 0.3);
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 80px;
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

        .login-btn {
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

        .register-link {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }

        .register-link a {
          color: #00BFFF;
          text-decoration: none;
          font-weight: 500;
        }
      `}</style>

      <div className="navbar">
        <h1>Factory Visitor System</h1>
        <Link to="/register">Register</Link>
      </div>

      <div className="page">
        <div className="card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

