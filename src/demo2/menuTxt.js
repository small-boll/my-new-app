//自定义菜单栏
const {Menu,BrowserWindow} = require('electron')
const path = require('path')
var templateTxt = [
  {
    label:'橘猫',
    //子菜单
    submenu:[
      {
        label:'大橘',
        //添加快捷键
        accelerator:'ctrl+/',
        //给子菜单添加点击事件
        click:()=>{
          newMenuWin = new BrowserWindow({
            width:300,
            height:600
          })
          newMenuWin.loadFile(path.join(__dirname,'demo2New.html'))
          newMenuWin.on('closed',()=>{
            newMenuWin = null
          })
        }
      },
      {
        label:'橘子'
      },
      {
        label:'桃桃'
      }
    ]
  },
  {
    label:'布偶猫',
    submenu:[
      {
        label:'小仙女'
      },
      {
        label:'尾巴'
      }
    ]
  }
]

const m = Menu.buildFromTemplate(templateTxt)

Menu.setApplicationMenu(m)

