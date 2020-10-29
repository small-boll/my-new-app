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
  

  // mainWindow.loadFile(path.join(__dirname,'demo1/demo1.html'));

  //设置自定义主菜单 demo2中
  // require('./demo2/menuTxt.js')
  // mainWindow.loadFile(path.join(__dirname,'demo2/demo2.html'));

  //右键菜单的制作 （注意：在渲染进程中）
  // mainWindow.loadFile(path.join(__dirname,"demo3/demo3.html"))

  //点击 打开浏览器
  // mainWindow.loadFile(path.join(__dirname,'demo4/demo4.html'))

  
  //在窗口中嵌入网页
  var BrowserView = electron.BrowserView
  var view = new BrowserView()
  mainWindow.setBrowserView(view)
  view.setBounds({x:0,y:150,width:600,height:400})
  view.webContents.loadURL("https://baidu.com")
  //打开子窗口
  mainWindow.loadFile(path.join(__dirname,'demo5/demo5.html'))

  //打开开发者工具
  // mainWindow.webContents.toggleDevTools()

  mainWindow.on('closed',()=>{
    mainWindow = null;
  })
})