import React, { useRef, useEffect } from 'react';
import MessageItem from './MessageItem';
import InputSection from './InputSection';
import styles from '../styles/ChatContainer.module.css';

const ChatContainer = ({ messages, input, setInput, handleSendMessage, isLoading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>How can I help you today?</h3>
            <p>Ask me anything...</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <MessageItem key={index} message={message} />
          ))
        )}
        {isLoading && (
          <div className={styles.loadingIndicator}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <InputSection 
        input={input} 
        setInput={setInput} 
        handleSendMessage={handleSendMessage} 
        isLoading={isLoading}
      />
    </div>
  );
};

export default ChatContainer;
