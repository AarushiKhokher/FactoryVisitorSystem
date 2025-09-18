// VisitorScreening.js
import React, { useState } from 'react';

function VisitorScreening() {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    if (question.trim()) {
      setQuestions([...questions, question]);
      setQuestion('');
    }
  };

  return (
    <div>
      <h3>Visitor Screening</h3>
      <input
        type="text"
        placeholder="Add screening question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={addQuestion} style={{ padding: '10px' }}>
        Add Question
      </button>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>
    </div>
  );
}

export default VisitorScreening;
