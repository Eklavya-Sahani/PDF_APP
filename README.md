# Fullstack PDF Q&A Application

## Overview
This is a full-stack application that allows users to upload PDF documents and ask questions about the content of these documents. The backend processes the PDFs and uses natural language processing to answer the questions.

## Technologies
- Backend: FastAPI
- NLP Processing: LangChain/LLamaIndex
- Frontend: React.js
- Database: SQLite
- File Storage: Local filesystem

## Setup Instructions

### Backend
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```
3. Install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```
4. Start the FastAPI server:
    ```sh
    uvicorn app.main:app --reload
    ```

### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the React development server:
    ```sh
    npm start
    ```

## Usage
1. Open your web browser and go to `http://localhost:3000`.
2. Upload a PDF document.
3. Ask a question about the content of the uploaded PDF.
4. The answer will be displayed on the screen.

## API Documentation
### Upload PDF
- **Endpoint:** `/upload/`
- **Method:** `POST`
- **Payload:** `multipart/form-data` containing the PDF file.

### Ask Question
- **Endpoint:** `/ask/`
- **Method:** `POST`
- **Payload:**
    ```json
    {
      "document_id": 1,
      "question": "What is the main topic?"
    }
    ```

### Get Documents
- **Endpoint:** `/documents/`
- **Method:** `GET`

## License
This project is licensed under the MIT License.
