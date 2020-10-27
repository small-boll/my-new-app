
var electron = require('electron')
var app = electron.app
var path = require('path')
var BrowserWindow = null
app.on('ready',()=>{
  BrowserWindow = new electron.BrowserWindow({
    width:400,
    height:600,
    webPreferences:{
      nodeIntegration:true,
      enableRemoteModule:true
    }
  })
  //导入自定义的菜单
  require('./demo2/demo2Txt.js')
  // BrowserWindow.loadFile(path.join(__dirname,"demo1/demo1.html"))
  BrowserWindow.loadFile(path.join(__dirname,"demo2/demo2.html"))
  BrowserWindow.webContents.toggleDevTools();
  BrowserWindow.on('closed',()=>{
    BrowserWindow = null
  })
})


