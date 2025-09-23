import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';

function HelpSupport() {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openIndex, setOpenIndex] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  const faqs = [
    { question: 'How do I register a visitor?', answer: 'Go to the Register page and fill out the visitor details.' },
    { question: 'Can I assign zones to visitors?', answer: 'Yes, use the Zone Access page to assign zones to registered people.' },
    { question: 'What does zone status mean?', answer: 'Active zones are operational and assignable. Inactive zones are restricted or under maintenance.' },
    { question: 'How do I view visitor reports?', answer: 'Navigate to the Report page to see check-in history and activity logs.' },
    { question: 'How do I change my dashboard theme?', answer: 'Click the moon/sun icon in the dashboard menu to toggle light/dark mode.' },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted. We will get back to you shortly!');
    setFormData({ name: '', email: '', message: '' });
  };

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          background: ${isDark ? '#000' : '#f0f8ff'};
          color: ${isDark ? '#fff' : '#000'};
          transition: background 0.5s ease, color 0.5s ease;
        }

        .help-container {
          min-height: 100vh;
          padding: 60px 20px;
        }

        .help-card {
          position: relative;
          background: ${isDark ? '#111' : 'rgba(255, 255, 255, 0.7)'};
          padding: 40px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          max-width: 800px;
          margin: auto;
          animation: fadeIn 0.6s ease;
          color: inherit;
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
          color: ${isDark ? '#fff' : '#333'};
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

        .faq-item {
          background-color: ${isDark ? '#222' : '#f9f9f9'};
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          cursor: pointer;
          color: inherit;
        }

        .faq-item.open {
          background-color: ${isDark ? '#333' : '#e6f7ff'};
        }

        .form-section {
          background-color: ${isDark ? '#222' : '#fff'};
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          margin-top: 40px;
          color: inherit;
        }

        .form-section input,
        .form-section textarea {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
          margin-bottom: 15px;
          background-color: ${isDark ? '#111' : '#fff'};
          color: ${isDark ? '#fff' : '#000'};
        }

        .form-section button {
          padding: 12px;
          background-color: #00BFFF;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
        }

        .form-section button:hover {
          background-color: #009ACD;
        }

        a {
          color: ${isDark ? '#4FC3F7' : '#1E3C72'};
        }
      `}</style>

      <div className="help-container">
        <div className="help-card">
          {/* Back Button */}
          <button className="back-btn" onClick={() => navigate('/dashboard')}>
            <FaArrowLeft /> Back to Dashboard
          </button>

          {/* Theme Toggle Switch */}
          <div className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
            <div className="switch-track">
              <div className="switch-thumb"></div>
            </div>
          </div>

          <h2>Help & Support</h2>
          <p>Find answers or reach out for assistance.</p>

          <div>
            <strong>Contact Support:</strong>{' '}
            <a href="mailto:support@factoryvisitorsystem.com">support@factoryvisitorsystem.com</a>
          </div>

          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              margin: '20px 0',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              width: '100%',
              backgroundColor: isDark ? '#111' : '#fff',
              color: isDark ? '#fff' : '#000',
            }}
          />

          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleAnswer(index)}
              >
                <strong>{faq.question}</strong>
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            ))
          ) : (
            <p>No matching FAQs found.</p>
          )}

          <div className="form-section">
            <h3>Need more help?</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpSupport;

