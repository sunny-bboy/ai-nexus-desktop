import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  Box,
  Typography,
  Alert,
} from '@mui/material';

interface SettingsProps {
  open: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ open, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [showApiKey, setShowApiKey] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    try {
      // TODO: Implement API key validation and storage
      if (!apiKey.trim()) {
        setError('API key is required');
        return;
      }

      // Mock API key storage
      console.log('Saving API key:', apiKey);
      setError(null);
      onClose();
    } catch (err) {
      setError('Failed to save settings');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            API Configuration
          </Typography>
          <TextField
            fullWidth
            label="API Key"
            type={showApiKey ? 'text' : 'password'}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            margin="normal"
            error={!!error}
            helperText={error}
            InputProps={{
              endAdornment: (
                <Button
                  size="small"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? 'Hide' : 'Show'}
                </Button>
              ),
            }}
          />
          <Alert severity="info" sx={{ mt: 2 }}>
            Your API key is stored locally and is never sent to our servers.
          </Alert>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Appearance
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
            }
            label="Dark Mode"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Settings; 