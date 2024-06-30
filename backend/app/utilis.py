import fitz  # PyMuPDF
from langchain.llama_index import GPTIndex

def extract_text(pdf_path: str) -> str:
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def process_question(document_content: str, question: str) -> str:
    index = GPTIndex([document_content])
    response = index.query(question)
    return response['answer']
