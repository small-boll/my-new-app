const {remote} = require('electron')

const rightTemplate = [
  {
    label:'属性'
  },
  {
    label:"复制"
  },
  {
    label:"粘贴"
  },
  {
    label:"打印"
  }
]

const rightMenu = remote.Menu.buildFromTemplate(rightTemplate)

window.addEventListener('contextmenu',(e)=>{
  e.preventDefault()
  rightMenu.popup({window:remote.getCurrentWindow()})
})

