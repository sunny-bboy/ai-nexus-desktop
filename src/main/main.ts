import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
// const isDev = require('electron-is-dev').default;

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Auno',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    show: false,
    backgroundColor: '#ffffff'
  });

  mainWindow.loadURL(
    `file://${path.join(__dirname, '../renderer/index.html')}`
  );

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC handlers for API key management
ipcMain.handle('save-api-key', async (_, apiKey: string) => {
  // TODO: Implement secure storage of API key
  return true;
});

ipcMain.handle('get-api-key', async () => {
  // TODO: Implement retrieval of API key
  return '';
}); 