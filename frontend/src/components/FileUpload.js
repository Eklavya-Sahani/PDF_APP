import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('File uploaded successfully');
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  );
}

export default FileUpload;
