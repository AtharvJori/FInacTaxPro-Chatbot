import os
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter

RAW_DIR = "data/raw_data"
PROCESSED_DIR = "data/processed"

def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file."""
   
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text + "\n"

def chunk_text(text, chunk_size=1000, chunk_overlap=200):
    """Split text into chunks."""
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap
    )
    return text_splitter.split_text(text)

def save_chunks_to_file(chunks, file_path):
    """Save text chunks to a file."""
    with open(file_path, "w", encoding="utf-8") as file:
        for chunk in chunks:
            file.write(chunk + "\n")

if __name__ =="__main__":
    pdf_path = os.path.join(RAW_DIR, "laws.pdf")
    # Extract text from the PDF
    print(f"📄 Extracting text from: {pdf_path}")
    pdf_text = extract_text_from_pdf(pdf_path)
    
    # Chunk the text
    text_chunks = chunk_text(pdf_text)
    
    # Save the chunks to a file
    os.makedirs(PROCESSED_DIR, exist_ok=True)
    output_file = os.path.join(PROCESSED_DIR, "bye_laws_chunks.txt")
    save_chunks_to_file(text_chunks, output_file)
    
    print(f"Processed {len(text_chunks)} chunks and saved to {PROCESSED_DIR}.")