import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const messagesMock = [
  { sender: 'bot', message: 'Hi! I am RITBuddy. How can I help you today?' },
];

export default function App() {
  const [messages, setMessages] = useState(messagesMock);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', message: input };
    const botMsg = { sender: 'bot', message: "That's a great question! Let me fetch the info for you." };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setHistory((prev) => [input, ...prev]);
    setInput('');
  };

  return (
    <div className="flex h-screen w-screen bg-zinc-900 text-white">
      {/* Chat History Sidebar */}
      <div className="w-72 border-r border-zinc-700 bg-zinc-800 p-4">
        <h2 className="text-lg font-semibold mb-4">Chat History</h2>
        <ScrollArea className="h-full space-y-2 pr-2">
          {history.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-700 text-sm p-2 rounded hover:bg-zinc-600 transition-all cursor-pointer truncate"
            >
              {item}
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-zinc-700 bg-zinc-800 flex items-center gap-2">
          <MessageSquare size={20} />
          <h1 className="text-xl font-bold">RITBuddy</h1>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              className={`max-w-xl p-3 rounded-lg text-sm ${
                msg.sender === 'user' ? 'bg-blue-600 self-end ml-auto' : 'bg-zinc-700 self-start mr-auto'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.message}
            </motion.div>
          ))}
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t border-zinc-700 bg-zinc-800 flex gap-2">
          <Input
            placeholder="Ask me anything..."
            className="flex-1 bg-zinc-700 text-white border-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700 text-white">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
