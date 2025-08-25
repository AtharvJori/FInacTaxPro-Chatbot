import os
from dotenv import load_dotenv

load_dotenv()

# Paths
RAW_DATA_PATH = "data/raw_data/laws.pdf"
PROCESSED_DATA_PATH = "data/processed/bye_laws_chunks.txt"
FAISS_INDEX_PATH = "data/faiss_index"

# Gemini model for embeddings
GEMINI_MODEL_EMBEDDING = os.getenv("GEMINI_MODEL", "models/embedding-001")

# API Key (from .env)
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

GEMINI_MODEL = "gemini-2.0-flash"