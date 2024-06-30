from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from . import crud, models, schemas, utils
from .database import SessionLocal, engine

import os

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...), db: Session = SessionLocal()):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Only PDF files are allowed")
    file_location = f"data/files/{file.filename}"
    with open(file_location, "wb") as f:
        f.write(file.file.read())
    text_content = utils.extract_text(file_location)
    document = schemas.DocumentCreate(
        filename=file.filename, content=text_content)
    crud.create_document(db=db, document=document)
    return {"filename": file.filename}

@app.post("/ask/")
async def ask_question(document_id: int, question: str, db: Session = SessionLocal()):
    document = crud.get_document(db, document_id)
    if not document:
        raise HTTPException(status_code=404, detail="Document not found")
    answer = utils.process_question(document.content, question)
    return JSONResponse(content={"answer": answer})

@app.get("/documents/")
def get_documents(skip: int = 0, limit: int = 10, db: Session = SessionLocal()):
    documents = crud.get_documents(db, skip=skip, limit=limit)
    return documents
