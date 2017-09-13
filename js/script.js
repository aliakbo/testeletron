console.log('hello script!')

const {remote} = require('electron');

document.getElementById('close').addEventListener('click', closeWindow);
document.getElementById('minimize').addEventListener('click', minimizeWindow);

function closeWindow() {
    console.log('close!')
    var window = remote.getCurrentWindow();
    window.close();
}

function minimizeWindow() {
    console.log('minimze')
    var window = remote.getCurrentWindow();
    window.minimize();
}