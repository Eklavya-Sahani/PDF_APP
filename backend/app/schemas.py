from pydantic import BaseModel

class DocumentBase(BaseModel):
    filename: str

class DocumentCreate(DocumentBase):
    content: str

class Document(DocumentBase):
    id: int

    class Config:
        orm_mode = True
