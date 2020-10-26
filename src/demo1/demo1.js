const btn = document.getElementById("btn");
//在渲染进程里面的窗口只能使用require('electron').remote.BrowserWindow 得到
const BrowserWindow = require('electron').remote.BrowserWindow;