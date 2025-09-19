import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HelpSupport() {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openIndex, setOpenIndex] = useState(null);
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

  return (
    <div style={styles.page}>
      {/* ✅ Back to Dashboard Button */}
      <button style={styles.backButton} onClick={() => navigate('/dashboard')}>
        ⬅ Back to Dashboard
      </button>

      <h2 style={styles.title}>Help & Support</h2>
      <p style={styles.subtitle}>Find answers or reach out for assistance.</p>

      {/* 📧 Support Email */}
      <div style={styles.emailBox}>
        <strong>Contact Support:</strong>{' '}
        <a href="mailto:support@factoryvisitorsystem.com">support@factoryvisitorsystem.com</a>
      </div>

      {/* 🔍 FAQ Search */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.search}
      />

      {/* 📚 FAQ List */}
      <div style={styles.faqSection}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              style={{
                ...styles.faqItem,
                backgroundColor: openIndex === index ? '#e6f7ff' : '#f9f9f9',
              }}
              onClick={() => toggleAnswer(index)}
            >
              <strong style={styles.question}>{faq.question}</strong>
              {openIndex === index && <p style={styles.answer}>{faq.answer}</p>}
            </div>
          ))
        ) : (
          <p style={styles.noResult}>No matching FAQs found.</p>
        )}
      </div>

      {/* 📝 Contact Form */}
      <div style={styles.formSection}>
        <h3 style={styles.formTitle}>Need more help?</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: 'relative',
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#00BFFF',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1E3C72',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  },
  emailBox: {
    backgroundColor: '#e6f7ff',
    padding: '12px 20px',
    borderRadius: '8px',
    marginBottom: '30px',
    fontSize: '16px',
    color: '#1E3C72',
  },
  search: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  faqSection: {
    marginBottom: '40px',
  },
  faqItem: {
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  question: {
    fontSize: '16px',
    color: '#333',
  },
  answer: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#555',
  },
  noResult: {
    fontStyle: 'italic',
    color: '#999',
  },
  formSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  formTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  textarea: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    minHeight: '100px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#00BFFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default HelpSupport;

