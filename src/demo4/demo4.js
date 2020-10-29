
var {shell} = require('electron')
var btn = document.getElementById('showChrome')
debugger
btn.onclick = function(e){
  //默认在窗口中打开网址，阻止此行为
  e.preventDefault()

  //this 代表btn
  const hrf = this.href

  //打开浏览器的关键句
  shell.openExternal(hrf)
}

