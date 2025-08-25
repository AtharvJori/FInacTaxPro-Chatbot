import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.docstore.document import Document
from config import PROCESSED_DATA_PATH, FAISS_INDEX_PATH, GEMINI_MODEL_EMBEDDING
from dotenv import load_dotenv

load_dotenv()  # Load .env variables (GEMINI_API_KEY)

def load_chunks(file_path):
    """Load text chunks from processed .txt file"""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    # Chunks separated by --- from ingest.py
    chunks = [chunk.strip() for chunk in content.split("---") if chunk.strip()]
    return [Document(page_content=chunk) for chunk in chunks]

def build_faiss_index():
    """Create FAISS Flat index using Gemini embeddings"""
    print("🔹 Loading text chunks...")
    docs = load_chunks(PROCESSED_DATA_PATH)

    print("🔹 Creating embeddings with Gemini...")
    embeddings = GoogleGenerativeAIEmbeddings(
        model=GEMINI_MODEL_EMBEDDING,
        google_api_key=os.getenv("GEMINI_API_KEY")
    )

    print("🔹 Building FAISS Flat index...")
    # Let FAISS internally create an IndexFlatL2
    vectorstore = FAISS.from_documents(docs, embeddings)

    os.makedirs(FAISS_INDEX_PATH, exist_ok=True)
    vectorstore.save_local(FAISS_INDEX_PATH)
    print(f"✅ FAISS Flat index saved to {FAISS_INDEX_PATH}")

if __name__ == "__main__":
    build_faiss_index()

