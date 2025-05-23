import React from 'react';
import styles from '../styles/MessageItem.module.css';

const MessageItem = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`${styles.messageItem} ${isUser ? styles.userMessage : styles.aiMessage}`}>
      <div className={styles.avatar}>
        {isUser ? '👤' : '🤖'}
      </div>
      <div className={styles.messageContent}>
        <p>{message.content}</p>
        {!isUser && message.sources && (
          <div className={styles.sources}>
            <p className={styles.sourcesTitle}>Sources:</p>
            <ul>
              {message.sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
