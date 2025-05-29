import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

interface ChatListProps {
  onSelectChat: (chatId: string | null) => void;
  currentChat: string | null;
}

const ChatList: React.FC<ChatListProps> = ({ onSelectChat, currentChat }) => {
  // TODO: Replace with actual chat data from store
  const chats = [
    { id: '1', title: 'General Discussion' },
    { id: '2', title: 'Code Review' },
    { id: '3', title: 'Project Planning' },
  ];

  const handleNewChat = () => {
    // TODO: Implement new chat creation
    console.log('Create new chat');
  };

  const handleDeleteChat = (chatId: string) => {
    // TODO: Implement chat deletion
    console.log('Delete chat:', chatId);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">Chats</Typography>
        <IconButton onClick={handleNewChat} color="primary">
          <AddIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ flexGrow: 1, overflow: 'auto' }}>
        {chats.map((chat) => (
          <ListItem
            key={chat.id}
            disablePadding
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteChat(chat.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemButton
              selected={currentChat === chat.id}
              onClick={() => onSelectChat(chat.id)}
            >
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText
                primary={chat.title}
                primaryTypographyProps={{
                  noWrap: true,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatList; 