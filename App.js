const {app,BrowserWindow,Menu} = require("electron");
const ejs = require("ejs-electron");
const url = require('url');
const path = require('path');
const data = require('./views/javascript/data');
let window;

const main=()=>{
  window = new BrowserWindow(data.windowSettings);

  window.loadURL(url.format({
    pathname: path.join(__dirname+"/views/index.ejs"),
    protocol: "file",
    slashes: true
  }));

  app.on("closed",()=>{
    window = null;
  });

  window.once('ready-to-show', () => {
      window.show()
  })

  const menu = Menu.buildFromTemplate(data.menu);
  Menu.setApplicationMenu(menu);
}

app.on("ready",main);

app.on("window-all-close",()=>{
  if(process.platform !== "darwin"){
    app.quit();
  }
});
