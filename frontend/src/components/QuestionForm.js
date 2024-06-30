import React, { useState } from 'react';
import axios from 'axios';

function QuestionForm({ documentId }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskQuestion = async () => {
    try {
      const response = await axios.post('/ask/', {
        document_id: documentId,
        question: question
      });
      setAnswer(response.data.answer);
    } catch (error) {
      alert('Error processing question');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Ask a question"
      />
      <button onClick={handleAskQuestion}>Ask</button>
      {answer && <div>{answer}</div>}
    </div>
  );
}

export default QuestionForm;
