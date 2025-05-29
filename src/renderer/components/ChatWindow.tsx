import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import StopIcon from '@mui/icons-material/Stop';
import SettingsIcon from '@mui/icons-material/Settings';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatWindowProps {
  chatId: string | null;
  onOpenSettings: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chatId, onOpenSettings }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    // TODO: Implement actual API call
    // Mock response for now
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a mock response. API integration will be implemented later.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsGenerating(false);
    }, 1000);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        {messages.map((message) => (
          <Paper
            key={message.id}
            elevation={1}
            sx={{
              p: 2,
              mb: 2,
              maxWidth: '80%',
              ml: message.role === 'user' ? 'auto' : 0,
              backgroundColor: message.role === 'user' ? 'primary.main' : 'background.paper',
              color: message.role === 'user' ? 'primary.contrastText' : 'text.primary',
            }}
          >
            <ReactMarkdown
              components={{
                code({ node, className, children, ...props }) {
                  const { inline, ref, ...rest } = props as any;
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus as any}
                      language={match[1]}
                      PreTag="div"
                      {...rest}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
              {message.timestamp.toLocaleTimeString()}
            </Typography>
          </Paper>
        ))}
        <div ref={messagesEndRef} />
      </Box>

      <Box sx={{ p: 2, backgroundColor: 'background.paper' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isGenerating}
            sx={{ backgroundColor: 'background.default' }}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={!input.trim() || isGenerating}
          >
            {isGenerating ? <StopIcon /> : <SendIcon />}
          </IconButton>
          <IconButton color="primary" onClick={onOpenSettings}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatWindow; 