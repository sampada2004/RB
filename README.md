# RITBuddy

# 🎓 RITBuddy — AI-Powered College Virtual Assistant

RITBuddy is an AI-powered virtual assistant designed to help college students find academic and administrative information quickly and easily. From retrieving syllabus content and recent circulars to answering queries about exam results and FAQs, RITBuddy is a smart, searchable assistant that brings the college experience into the modern AI age.

Built using Retrieval-Augmented Generation (RAG), the assistant leverages natural language processing and local document embeddings to provide relevant, accurate, and fast responses—without needing any cloud services.

---

## ✨ Features

- 🧠 **AI-Driven Q&A:** Ask natural language questions and get precise answers from college data sources like syllabus PDFs, exam results, FAQs, and notices.
- 🗃️ **PDF Parsing & Embedding:** Automatically parses and indexes PDFs (e.g., syllabus or circulars) using HuggingFace embeddings and FAISS.
- 💬 **Conversational Chat UI:** Clean, dark-themed chat interface using React.js for an intuitive student experience.
- ⚡ **Offline Functionality:** Entirely local setup using Ollama with Mistral LLM — no need for internet/cloud APIs.
- 📚 **Multi-source Knowledge Retrieval:** Supports multiple document types including PDFs, JSON, and scraped web data.
- 🛠️ **Modular Architecture:** Cleanly separated frontend, backend, and AI logic for scalability and maintenance.

---

## 🔧 Tech Stack

### 🔹 Frontend
- React.js
- TailwindCSS
- Axios

### 🔹 Backend
- Node.js
- Express.js
- MongoDB (for chat history)

### 🔹 AI & NLP
- Python
- LangChain
- HuggingFace Sentence Transformers
- FAISS (for vector search)
- Ollama (local LLM runner)
- Mistral LLM (loaded via Ollama)

---


