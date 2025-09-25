import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';

function HelpSupport() {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openIndex, setOpenIndex] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

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
    <div
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        padding: '40px',
        backgroundColor: isDark ? '#1a1a1a' : '#f9f9f9',
        color: isDark ? '#fff' : '#000',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
        position: 'relative',
      }}
    >
      {/* Top Right Controls */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px'
      }}>
        {role === 'admin' && (
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              backgroundColor: '#00BFFF',
              color: '#fff',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <FaArrowLeft size={14} /> Back to Dashboard
          </button>
        )}

        {/* 🌗 Icon + Toggle Switch */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isDark ? <FaSun size={14} color="#FFD700" /> : <FaMoon size={14} color="#0077b6" />}
          <div
            onClick={toggleTheme}
            style={{
              width: '40px',
              height: '20px',
              backgroundColor: isDark ? '#f0f0f0' : '#333',
              borderRadius: '20px',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isDark ? 'flex-end' : 'flex-start',
              padding: '3px',
              transition: 'background 0.3s ease'
            }}
          >
            <div style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: isDark ? '#333' : '#f0f0f0',
              transition: 'all 0.3s ease'
            }} />
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: '80px' }}>Help & Support</h2>
      <p>Find answers or reach out for assistance.</p>
      <p>
        Contact Support:{' '}
        <a href="mailto:support@factoryvisitorsystem.com" style={{ color: '#00BFFF' }}>
          support@factoryvisitorsystem.com
        </a>
      </p>

      {/* 🔍 Search FAQs */}
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

      {/* 📋 FAQ List */}
      {filteredFaqs.length > 0 ? (
        filteredFaqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <div
              onClick={() => toggleAnswer(index)}
              style={{
                cursor: 'pointer',
                backgroundColor: isDark ? '#333' : '#e6f7ff',
                padding: '10px',
                borderRadius: '6px',
                fontWeight: 'bold'
              }}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <div
                style={{
                  backgroundColor: isDark ? '#222' : '#f0f0f0',
                  padding: '10px',
                  borderRadius: '6px',
                  marginTop: '5px'
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No matching FAQs found.</p>
      )}

      {/* 📩 Contact Form */}
      <h3 style={{ marginTop: '40px' }}>Need more help?</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: isDark ? '#111' : '#fff',
            color: isDark ? '#fff' : '#000',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: isDark ? '#111' : '#fff',
            color: isDark ? '#fff' : '#000',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: isDark ? '#111' : '#fff',
            color: isDark ? '#fff' : '#000',
            minHeight: '100px'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#00BFFF',
            color: '#fff',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HelpSupport;

