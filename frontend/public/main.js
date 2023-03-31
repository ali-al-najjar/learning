const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()
import React from 'react'
import App from '../src/App';

function createWindow() {
  const win = new BrowserWindow({ 
    width: 800,
    height: 600,
    webPreferences:{
      enableRemoteModule: true
    }
  })

  win.loadURL('http://localhost:3000')

  return(
    <App />

  )
}

app.on('ready',createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().lenght === 0) createWindow()
})
