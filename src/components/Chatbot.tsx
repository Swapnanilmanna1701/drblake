
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Dr. Blake's AI assistant. I can help you with information about our therapy services, scheduling, insurance, and answer any questions about mental health support. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('appointment') || message.includes('schedule') || message.includes('booking')) {
      return "You can book a free consultation with Dr. Blake by clicking the 'Book a Free Consultation' button on our website or calling (323) 555-0192. We offer both in-person and virtual sessions.";
    }
    
    if (message.includes('insurance') || message.includes('payment') || message.includes('cost')) {
      return "Dr. Blake accepts most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and United Healthcare. We also offer sliding scale fees and accept HSA/FSA payments. Please contact us to verify your specific coverage.";
    }
    
    if (message.includes('anxiety') || message.includes('depression') || message.includes('therapy')) {
      return "Dr. Blake specializes in treating anxiety, depression, relationship issues, and trauma using evidence-based approaches like Cognitive Behavioral Therapy (CBT) and mindfulness techniques. She has 8+ years of experience helping clients achieve mental wellness.";
    }
    
    if (message.includes('location') || message.includes('address') || message.includes('office')) {
      return "Dr. Blake's office is located at 1287 Maplewood Drive, Los Angeles, CA 90026. We also offer virtual sessions via secure video conferencing for your convenience.";
    }
    
    if (message.includes('hours') || message.includes('available') || message.includes('time')) {
      return "Office hours are: In-person sessions on Tuesdays & Thursdays from 10 AM–6 PM, and Virtual sessions on Mondays, Wednesdays & Fridays from 1 PM–5 PM.";
    }
    
    if (message.includes('experience') || message.includes('qualifications') || message.includes('credentials')) {
      return "Dr. Serena Blake holds a PsyD (Doctor of Psychology) and is a licensed clinical psychologist in California. She has 8+ years of experience with over 500 successful client sessions, specializing in anxiety, relationships, and trauma recovery.";
    }
    
    if (message.includes('virtual') || message.includes('online') || message.includes('zoom')) {
      return "Yes, Dr. Blake offers secure virtual therapy sessions via HIPAA-compliant video conferencing. Virtual sessions are available Mondays, Wednesdays & Fridays from 1 PM–5 PM.";
    }
    
    if (message.includes('confidential') || message.includes('privacy') || message.includes('private')) {
      return "All therapy sessions are 100% confidential and comply with HIPAA regulations. Your privacy and trust are Dr. Blake's highest priorities. Information is only shared with your explicit written consent or as required by law.";
    }
    
    if (message.includes('emergency') || message.includes('crisis') || message.includes('urgent')) {
      return "If you're experiencing a mental health emergency, please call 911 or the National Suicide Prevention Lifeline at 988. For urgent but non-emergency situations, you can contact Dr. Blake's office at (323) 555-0192.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Dr. Blake's therapy services. Feel free to ask about appointments, insurance, treatment approaches, or any other questions you might have.";
    }
    
    return "Thank you for your question. For specific information not covered here, please feel free to contact Dr. Blake directly at (323) 555-0192 or serena@blakepsychology.com. She'll be happy to discuss your individual needs and how she can support your mental wellness journey.";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-prussian-blue via-blue-600 to-purple-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-gradient-to-br from-gray-900 via-prussian-blue to-black rounded-2xl shadow-2xl border border-white/20 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-prussian-blue to-blue-600 p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">Dr. Blake's Assistant</h3>
                <p className="text-blue-200 text-sm">Ask me anything about our services</p>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 backdrop-blur-sm text-white border border-white/20 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about appointments, insurance, services..."
                className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all duration-200"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
