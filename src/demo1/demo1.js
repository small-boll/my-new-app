const btn = document.getElementById("btn")
//在渲染进程里面的窗口只能使用require('electron').remote.BrowserWindow 得到
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
btn.onclick=()=>{
  newWin = new BrowserWindow({
    width:300,
    height:350,
  })
  newWin.loadFile(path.join(__dirname,'new.html'))
  newWin.on('closed',()=>{
    newWin = null
  })
}

