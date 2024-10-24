import React, { useState } from 'react';
import axios from 'axios';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatInputProps = {
  className?: string;
};

export function ChatInput({ className = "" }: Readonly<ChatInputProps>) {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<Message[]>([]); // set type as Message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to conversation
    setConversation((prev) => [...prev, { role: 'user', content: message }]);

    try {
      const response = await axios.post('/api/chat', {
        message,
      });

      const aiMessage = response.data.message;
      // Add AI response to conversation
      setConversation((prev) => [...prev, { role: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
    }

    setMessage(''); // Clear the input field after sending
  };

  return (
    <div className="chat-input-container">
      <div className="chat-box">
        {conversation.map((chat, idx) => (
          <div key={idx} className={`chat-message ${chat.role}`}>
            <p>{chat.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex p-4 border-t border-gray-700">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-gray-900 text-white p-2 rounded-md"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}