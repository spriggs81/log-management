/*
*   This file makes changes to the config file in ./lib
*
*/

// Container for the app
const fs = require('node:fs/promises');
const path = require('path');
const worker = require('./worker');

const app = {}

app.updateConfig = info => {
    fs.writeFile(path.join(__dirname,'./config.json'),JSON.stringify(info))
    .then(()=>{    
        worker.theJob()
    })
}

app.openConfig =async () => {
    const data = await fs.readFile(path.join(__dirname,'./config.json'),'utf8')
    return JSON.parse(data)
}

module.exports.openConfig = app.openConfig;
module.exports.updateConfig = app.updateConfig; 