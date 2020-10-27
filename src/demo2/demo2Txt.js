const {Menu,BrowserWindow} = require('electron')
const path = require('path')

const templateTxt = [
  {
    label:"橘猫",
    submenu:[
      {
        label:'大橘',
      },
      {
        label:'橘子',
        accelerator:'alt+.',
        click:()=>{
          demo2Win = new BrowserWindow({
            width:400,
            height:600
          })
          demo2Win.loadFile(path.join(__dirname,'demo2Txt.html'))
          demo2Win.on('closed',()=>{
            demo2Win = null
          })
        }
      },
      {
        label:'虎子',
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
        label:'滚犊子'
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(templateTxt)

Menu.setApplicationMenu(menu)