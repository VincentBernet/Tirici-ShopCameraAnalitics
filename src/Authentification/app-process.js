const { app, BrowserWindow } = require('electron');
const { maxHeaderSize } = require('http');


function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
    }
  })
  console.log("On a cree une fenetre de app process");


  var python = require('child_process').spawn('python', ['./code_python/graph.py']);
  python.stdout.on('data',function(data){
      console.log("data: ",data.toString('utf8'));
  });
  

  win.loadFile('html/index.html');

  win.on("closed", () => {
      //win = null;
  });

}


module.exports = createWindow;