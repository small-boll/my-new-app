//手动创建主进程
var electron = require('electron');

//引用app
var app = electron.app;
//引用窗口
var BrowserWindow = electron.BrowserWindow;

//声明要打开的主窗口
var mainWindow = null;

//监听ready事件 创建窗口
app.on('ready',()=>{
  mainWindow- new BrowserWindow({height:200,width:400});
  mainWindow.loadFile('index.html');
  mainWindow.on('closed',()=>{
    mainWindow = null;
  })
})