import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import QuestionForm from './components/QuestionForm';
import './App.css';

function App() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function fetchDocuments() {
      const response = await axios.get('/documents/');
      setDocuments(response.data);
    }
    fetchDocuments();
  }, []);

  return (
    <div className="App">
      <h1>Document Q&A</h1>
      <FileUpload />
      <div>
        {documents.map((doc) => (
          <div key={doc.id}>
            <h3>{doc.filename}</h3>
            <QuestionForm documentId={doc.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
