const {ipcRenderer} = require('electron')
const fs = require('fs');

document.addEventListener('DOMContentLoaded', function () {
  var data = {
    'title': document.title,
    'url': window.location.href,
    'array': {
        'array': ['1','2','3']
    }
  };
  console.log(fs)
  ipcRenderer.sendToHost('data', data);
});
