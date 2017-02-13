const webview = document.querySelector('webview')

webview.addEventListener('dom-ready', () => {
  console.log('dom-ready')
  webview.openDevTools()
})

webview.addEventListener('ipc-message', (e) => {
  if ( e.channel === 'data' ) {
    console.log(e.args[0])
  }
})
