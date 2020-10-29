var {shell} = require('electron')
var open = document.querySelector('#open')

open.onclick = function(e){
  e.preventDefault()
  const hr = this.href
  shell.openExternal(hr)
}