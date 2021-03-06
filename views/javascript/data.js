exports.windowSettings={
  webPreferences: {
    nodeIntegration: true
  },
  width: 1200,
  height: 700,
  show: false,
  frame: false
};

exports.menu=[
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'delete' },
      { type: 'separator' },
      { role: 'selectAll' }
      ]
  },
  {
    label: "keyboard config",
    submenu:[
      {
        label: "stay development"
      }
    ]
  },
  {
  label: "about",
  submenu:[
    { label: 'about'},
    {type: "separator"},
    { label: 'development' }
  ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
];

exports.panel = {
  leftPanel:{
    width: 150,
    height: exports.windowSettings.height
  },
  tools:{
    width: exports.windowSettings.width,
    height: 25
  },
  rightPanel:{
    width: 150,
    height: exports.windowSettings.height
  },
  bottomPanel:{
    width: exports.windowSettings.width,
    height: 130
  }
};

exports.objectRender = {
    width: exports.panel.leftPanel.width,
    height: exports.panel.bottomPanel.height
};
