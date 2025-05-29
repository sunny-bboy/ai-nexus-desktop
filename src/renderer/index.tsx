import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const corporateFont = `'Inter', 'Segoe UI', 'system-ui', 'Roboto', Arial, sans-serif`;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B82F6', // blue-500
    },
    secondary: {
      main: '#6366F1', // indigo-500
    },
    background: {
      default: '#181A20',
      paper: '#23242B',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  typography: {
    fontFamily: corporateFont,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#23242B',
          borderRadius: 8,
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#20212A',
          borderRight: '1px solid #23242B',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#23242B',
          color: '#fff',
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563EB', // blue-600
    },
    secondary: {
      main: '#6366F1',
    },
    background: {
      default: '#F3F4F6',
      paper: '#fff',
    },
    divider: 'rgba(0,0,0,0.08)',
  },
  typography: {
    fontFamily: corporateFont,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#fff',
          borderRadius: 8,
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#F3F4F6',
          borderRight: '1px solid #E5E7EB',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff',
          color: '#181A20',
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)',
        },
      },
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
); 