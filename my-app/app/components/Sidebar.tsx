import React from 'react';

const chats = [
  { id: 1, name: "Chat with AI 1", lastMessage: "How's it going?" },
  { id: 2, name: "Chat with AI 2", lastMessage: "Tell me a joke" },
  { id: 3, name: "Chat with AI 3", lastMessage: "Let's discuss..." },
  { id: 4, name: "Chat with AI 4", lastMessage: "What is AI?" },
  { id: 5, name: "Chat with AI 5", lastMessage: "Explain deep learning" },
];

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className = "" }: Readonly<SidebarProps>){
  return (
    <aside className={`bg-gray-900 p-4 ${className}`}>
      <h2 className="text-white text-lg mb-4">Chats</h2>
      <ul className="space-y-4">
        {chats.map(chat => (
          <li
            key={chat.id}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition"
          >
            <h3 className="text-white font-semibold">{chat.name}</h3>
            <p className="text-gray-400 text-sm">{chat.lastMessage}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
