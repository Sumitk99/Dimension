'use client';

import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

const Form = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey Ari! I wanted to check in with you on the next release and bug list. Do you think we'll be on track to share the latest with the team on Friday?",
      sender: 'system',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      text: 'There are a few items on the tasklist that needs to be addressed on iOS.',
      sender: 'user',
      timestamp: new Date(Date.now() - 1800000)
    },
    {
      id: 3,
      text: 'Awesome! Make sure it looks as close to the Figma as possible :)',
      sender: 'system',
      timestamp: new Date(Date.now() - 900000)
    }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newUserMessage]);
    setInputMessage('');
    setIsSubmitting(true);

    // Simulate response delay
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add system response
      const newSystemMessage: Message = {
        id: messages.length + 2,
        text: "Thanks for your message! I'll get back to you soon.",
        sender: 'system',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newSystemMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format time as HH:MM AM/PM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-8 w-full px-4 bg-transparent overflow-hidden min-h-[80vh]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="bg-slate-900/90 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Chat header */}
          <div className="border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-medium">T</div>
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-medium">A</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">L</div>
              </div>
              <div>
                <h3 className="text-white font-medium">Core Team</h3>
                <p className="text-gray-400 text-xs">Members - 3</p>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="p-4 h-[50vh] overflow-y-auto flex flex-col space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'system' && (
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-medium mr-2">T</div>
                )}
                <div className="max-w-[70%]">
                  <div className={`p-3 rounded-xl ${msg.sender === 'user' ? 'bg-pink-500/20 text-white' : 'bg-white/10 text-white'}`}>
                    {msg.text}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {formatTime(msg.timestamp)}
                  </div>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-medium ml-2">A</div>
                )}
              </div>
            ))}
          </div>

          {/* Message input */}
          <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting || !inputMessage.trim()}
                className="px-4 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-pink-500 to-orange-400 shadow-md hover:from-pink-600 hover:to-orange-500 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;