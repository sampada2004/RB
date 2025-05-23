from flask import Flask, request, jsonify
from flask_cors import CORS
import rag 

app = Flask(__name__)
CORS(app)

@app.route('/ask', methods=['POST'])
def ask():
    
    data = request.json
    question = data.get('question', '')
    print(f"Received question: {question}")
    
    if not question:
        return jsonify({'error': 'No question provided'}), 400
    
    try:
        
        answer = rag.ask_question(question)
        return jsonify({'answer': answer})
    
    except Exception as e:
        
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
