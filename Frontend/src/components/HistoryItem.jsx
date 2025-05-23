import React from 'react';
import styles from '../styles/HistoryItem.module.css';

const HistoryItem = ({ prompt, onClick }) => {
  // Truncate long prompts
  const truncatedPrompt = prompt.length > 30 
    ? `${prompt.substring(0, 30)}...` 
    : prompt;
    
  return (
    <div className={styles.historyItem} onClick={onClick}>
      <p>{truncatedPrompt}</p>
    </div>
  );
};

export default HistoryItem;
