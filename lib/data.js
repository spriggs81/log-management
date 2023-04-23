/*
*   This file makes changes to the config file in ./lib
*
*/

// Container for the app
const fs = require('node:fs/promises')
const path = require('path')
const worker = require('./worker')

const app = {}

const configData = {}

configData.bottom = 'module.exports = config'

app.updateConfig = info => {
    const config = ` config = {
        stdMode: ${info.stdMode},
        logDays: ${info.logDays},
        working: ${info.working}
    }
`
    fs.writeFile(path.join(__dirname,'./config.js'),config + '\n\n' + configData.bottom)
    .then(worker.theJob)
}

module.exports = app;
