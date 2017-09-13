const {app, BrowserWindow, globalShortcut} = require('electron');
const url = require('url');

let win;

function boot() {
    console.log(process.type);
    win = new BrowserWindow({
        width : 1000,
        height : 500,
        frame: false
    });
    win.loadURL(url.format({
       pathname: 'index.html',
        slashes: true
    }))

    win.on('closed', () => {
        win = null;
    })

    globalShortcut.register('CommandOrControl+1', () => {
        win.isMaximized() ? win.unmaximize() : win.maximize();
    })
}

app.on('ready', boot);