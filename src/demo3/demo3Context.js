const {remote} = require('electron')
const rightTemplate = [
  {
    label:"粘贴",
    accelerator:'ctrl+/',

  },
  {
    label:"复制"
  }
]
//规定写法
const rightMenu = remote.Menu.buildFromTemplate(rightTemplate)

window.addEventListener('contextmenu',(e)=>{
  //阻止默认事件
  e.preventDefault()
  //规定写法
  rightMenu.popup({window:remote.getCurrentWindow()})
})
