import React from 'react';
import styles from '../styles/InputSection.module.css';

const InputSection = ({ input, setInput, handleSendMessage, isLoading }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.inputSection}>
      <textarea
        className={styles.inputField}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask me anything..."
        rows={1}
        disabled={isLoading}
      />
      <button 
        className={styles.sendButton} 
        onClick={handleSendMessage}
        disabled={isLoading || input.trim() === ''}
      >
        {isLoading ? '...' : 'Send'}
      </button>
    </div>
  );
};

export default InputSection;
