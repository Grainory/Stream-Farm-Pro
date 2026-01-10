const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#0a0a0a',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Simplifying for this specific local tool
      backgroundThrottling: false, // CRITICAL: Prevents background tabs from sleeping
      webviewTag: true // Enable webview tag for easy grid management
    },
    minWidth: 400, // Allow scaling down to a small size
    minHeight: 300,
    icon: path.join(__dirname, 'icon.png') // Explicitly set runtime icon
  });

  // Remove menu for a cleaner "app" feel
  mainWindow.setMenuBarVisibility(false);

  // Load index.html from the same directory as main.js (src folder)
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Optimize session for media
  const currentSession = mainWindow.webContents.session;

  // Force clearing cache or persistent data if needed for fresh instances (optional, keeping standard for now)
}

// CRITICAL: Force disable background throttling via flags
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-background-timer-throttling');

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
