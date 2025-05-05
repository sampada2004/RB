import os
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import ollama


load_dotenv()

loader = PyPDFLoader("data/1st.pdf")  
pages = loader.load()
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
docs = text_splitter.split_documents(pages)


model = SentenceTransformer("all-MiniLM-L6-v2")
texts = [doc.page_content for doc in docs]
embeddings = model.encode(texts)


dimension = embeddings[0].shape[0]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(embeddings))


def ask_question(query):
    query_embedding = model.encode([query])
    D, I = index.search(np.array(query_embedding), k=3)

    # Retrieve top matching chunks
    top_chunks = "\n".join([texts[i] for i in I[0]])

    prompt = f"""Answer the question based on the following content:
{top_chunks}

Question: {query}
Answer:"""

    response = ollama.chat(model="mistral", messages=[
        {"role": "user", "content": prompt}
    ])
    return response["message"]["content"]


if __name__ == "__main__":
    print("RAG system ready! Type a question (or 'exit' to quit):")
    while True:
        user_input = input(">>> ")
        if user_input.lower() in ['exit', 'quit']:
            break
        answer = ask_question(user_input)
        print("\n💬 Answer:", answer, "\n")

