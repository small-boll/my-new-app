const btn = document.getElementById("btn");
//在渲染进程里面的窗口只能使用require('electron').remote.BrowserWindow 得到
const path = require('path');
const BrowserWindow = require('electron').remote.BrowserWindow;
btn.onclick = ()=>{
  newWin = new BrowserWindow({height:200,height:200});
  newWin.loadFile(path.join(__dirname,'new.html'));
  // newWin.loadFile('src/demo1/new.html');
  newWin.on('closed',()=>{
    newWin = null;
  })
}