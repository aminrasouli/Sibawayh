'use strict';

// Import parts of electron to use
const {app, Menu, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let splashscreen;
let mainWindow;
let takeScreen;

// Keep a reference for dev mode
let dev = false;
if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
    dev = true;
}

function createHelpMeWindows() {
    takeScreen = new BrowserWindow({
        backgroundColor: '#84fab0',
        width: 300,
        height: 280,
        frame: false,
        resizable: false,
        icon: path.join(__dirname, 'src/assets/img/arabic2.ico'),
        parent: mainWindow
    });
    takeScreen.loadURL(`file://${__dirname}/src/public/help.html`);
}

function createAboutMeWindows() {
    takeScreen = new BrowserWindow({
        backgroundColor: '#84fab0',
        width: 300,
        height: 420,
        frame: false,
        resizable: false,
        icon: path.join(__dirname, 'src/assets/img/arabic2.ico'),
        parent: mainWindow
    });
    takeScreen.loadURL(`file://${__dirname}/src/public/about.html`);
}

const CustomMenuTemplate = [
    {
        label: 'نمایش',
        submenu: [
            {role: 'toggledevtools'},
            {role: 'reload'},
            {role: 'resetzoom'},
            {role: 'zoomin'},
            {role: 'zoomout'},
            {role: 'togglefullscreen'}
        ]
    },
    {
        label: 'پنجره',
        submenu: [
            {role: 'minimize'},
            {role: 'close'}
        ]
    },
    {
        label: 'راهنمایی',
        submenu: [
            {
                label: 'راهنما',
                click() {
                    createHelpMeWindows();
                }
            },
            {
                label: 'درباره ما',
                click() {
                    createAboutMeWindows();
                }
            },
            {
                label: 'ایمیل به ما',
                click() {
                    require('electron').shell.openExternal('mailto:amin@rasouli.me')
                }
            },
            {
                label: 'تماس با ما',
                click() {
                    require('electron').shell.openExternal('https://rasouli.me/contact')
                }
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(CustomMenuTemplate);
Menu.setApplicationMenu(menu);

function createWindow() {
    // Create the browser window.
    splashscreen = new BrowserWindow({
        backgroundColor: '#84fab0',
        width: 250,
        height: 235,
        frame: false,
        resizable: false,
        icon: path.join(__dirname, 'src/assets/img/arabic2.ico')
    });
    console.log(path.join(__dirname, 'src/assets/img/arabic2.ico'));
    splashscreen.loadURL(`file://${__dirname}/src/public/splash.html`);
    splashscreen.webContents.on('did-finish-load', () => {
        splashscreen.show();
    });
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        show: false,
        frame: true,
        webPreferences : {
            webSecurity: false
        },
        icon: path.join(__dirname, 'src/assets/img/arabic2.ico')
    });

    // and load the index.html of the app.
    let indexPath;
    if (dev && process.argv.indexOf('--noDevServer') === -1) {
        indexPath = url.format({
            protocol: 'http:',
            host: 'localhost:8080',
            pathname: 'index.html',
            slashes: true
        });
    } else {
        indexPath = url.format({
            protocol: 'file:',
            pathname: path.join(__dirname, 'dist', 'index.html'),
            slashes: true
        });
    }
    mainWindow.loadURL(indexPath);

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        splashscreen.close();
        // Open the DevTools automatically if developing
        if (dev) {
            mainWindow.webContents.openDevTools();
        }
    });

    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
