const { app, BrowserWindow } = require("electron")

function createWindw(){
    const win = new BrowserWindow({ width: 1024, height: 720 })
    win.loadURL("http://localhost:3000")
}

app.on("ready", createWindw)