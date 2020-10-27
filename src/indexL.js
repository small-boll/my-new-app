//手动创建主进程
var electron = require('electron');

//引用app
var app = electron.app;
//引用窗口
var BrowserWindow = electron.BrowserWindow;

//引用路劲
var path = require('path')

//声明要打开的主窗口
var mainWindow = null;

//监听ready事件 创建窗口
app.on('ready',()=>{
  mainWindow = new BrowserWindow(
    {
      height:800,
      width:800,
      //必须添加此行才能在渲染进程中使用nodejs
      webPreferences:{
        nodeIntegration:true,
        enableRemoteModule:true
      }
    }
  );
  //设置自定义菜单 demo2中
  require('./demo2/menuTxt.js')

  // mainWindow.loadFile(path.join(__dirname,'demo1/demo1.html'));
  mainWindow.loadFile(path.join(__dirname,'demo2/demo2.html'));
  mainWindow.on('closed',()=>{
    mainWindow = null;
  })
})