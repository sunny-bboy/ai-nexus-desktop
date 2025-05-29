import React, { useState } from 'react';
import { Box, Drawer, AppBar, Toolbar, Typography, IconButton, useTheme, Avatar, Grid, Card, CardActions, CardContent, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import Settings from './components/Settings';
import aunoLogo from './assets/auno-logo.png';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DescriptionIcon from '@mui/icons-material/Description';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArticleIcon from '@mui/icons-material/Article';
import CampaignIcon from '@mui/icons-material/Campaign';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  minHeight: '100vh',
  background: theme.palette.background.default,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const GlassDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: theme.palette.background.paper,
    boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)',
    borderRight: '1px solid #23242B',
    borderRadius: '0 12px 12px 0',
    paddingTop: theme.spacing(2),
    width: drawerWidth,
  },
}));

const ACTION_TEMPLATES = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Build my Business',
    description: 'Step-by-step plan to launch or grow your business.',
    prompt: 'I want to build my business. Give me a step-by-step plan tailored to my goals.'
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Program a Website',
    description: 'Generate a modern, responsive website with code.',
    prompt: 'Help me program a modern, responsive website. Provide code and deployment instructions.'
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Program an App',
    description: 'Create a mobile app for Android or iOS.',
    prompt: 'I want to program a mobile app. Give me code and publishing steps for Android and iOS.'
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Create Documentation',
    description: 'Generate professional documentation for your project.',
    prompt: 'Create professional documentation for my project.'
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Brainstorm Ideas',
    description: 'Creative ideas for products, features, or content.',
    prompt: 'Brainstorm creative ideas for my project.'
  },
  {
    icon: <SummarizeIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Summarize Research',
    description: 'Summarize research papers or reports.',
    prompt: 'Summarize this research paper in plain language.'
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Write a Blog Post',
    description: 'Generate a compelling blog post on any topic.',
    prompt: 'Write a compelling blog post about this topic.'
  },
  {
    icon: <CampaignIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Generate Marketing Copy',
    description: 'Create marketing copy for your product or service.',
    prompt: 'Generate catchy marketing copy for my product.'
  },
];

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [currentChat, setCurrentChat] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: theme.palette.background.default }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
          ml: { sm: `${drawerOpen ? drawerWidth : 0}px` },
          borderRadius: '0 0 12px 12px',
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.08)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar src={aunoLogo} alt="Auno Logo" sx={{ width: 32, height: 32, mr: 2, bgcolor: 'transparent', border: '1px solid #3B82F6' }} />
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, letterSpacing: 1, flexGrow: 1 }}>
            Auno
          </Typography>
          <IconButton color="inherit" onClick={() => setSettingsOpen(true)}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <GlassDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Avatar src={aunoLogo} alt="Auno Logo" sx={{ width: 48, height: 48, mt: 2, mb: 1, bgcolor: 'transparent', border: '1px solid #3B82F6' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, mb: 2, color: 'text.primary' }}>
            Auno
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <ChatList
          onSelectChat={setCurrentChat}
          currentChat={currentChat}
        />
        <Divider sx={{ mt: 1, mb: 1 }} />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ textAlign: 'center', pb: 2, color: 'text.secondary', fontSize: 12 }}>
          &copy; {new Date().getFullYear()} Auno
        </Box>
      </GlassDrawer>

      <Main open={drawerOpen}>
        <Toolbar />
        {currentChat ? (
          <ChatWindow
            chatId={currentChat}
            onOpenSettings={() => setSettingsOpen(true)}
          />
        ) : (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            textAlign: 'center',
            color: theme.palette.text.secondary,
            gap: 3,
          }}>
            <Avatar src={aunoLogo} alt="Auno Logo" sx={{ width: 72, height: 72, mb: 2, bgcolor: 'transparent', border: '1.5px solid #3B82F6', boxShadow: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: 2, mb: 1, color: theme.palette.text.primary }}>
              Welcome to Auno
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 480, mb: 3, color: 'text.secondary' }}>
              Your AI-powered assistant for business, development, and productivity. Select a chat or start a new conversation.
            </Typography>
            <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, maxWidth: 900 }}>
              {ACTION_TEMPLATES.map((action, idx) => (
                <Grid item xs={12} sm={6} md={4} key={action.title}>
                  <Card elevation={2} sx={{ borderRadius: 2, border: '1.5px solid #23242B', background: theme.palette.background.paper, transition: 'box-shadow 0.2s, border 0.2s', '&:hover': { boxShadow: 6, border: '1.5px solid #3B82F6' } }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
                      {action.icon}
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 1, mb: 0.5, color: 'text.primary' }}>
                        {action.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {action.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                      <Button variant="contained" size="small" sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                        onClick={() => {
                          setCurrentChat('new-' + Date.now());
                          // TODO: Actually create a new chat session and pre-fill the prompt in ChatWindow
                        }}>
                        Start
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Main>
      {/* Footer for main area */}
      <Box sx={{ position: 'fixed', bottom: 0, left: drawerOpen ? drawerWidth : 0, width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` }, bgcolor: 'transparent', color: 'text.secondary', fontSize: 13, textAlign: 'right', pr: 4, pb: 1 }}>
        Auno &mdash; v1.0
      </Box>
      <Settings
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </Box>
  );
};

export default App; 