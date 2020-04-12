const electron = require('electron');

const { app } = electron;
const { BrowserWindow } = electron;
const path = require('path');
const url = require('url');

let mainWindow;

const urlForStart = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  return url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });
};

function createWindow () {
  mainWindow = new BrowserWindow({
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(urlForStart());
  mainWindow.maximize();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

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
