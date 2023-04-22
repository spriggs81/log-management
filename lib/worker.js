/*
*   This file handles the worker's job(s) and function(s)
*
*/

// dependenies needed 
const config = require('./config');
const log = require('./log');
const api = require('./api');

// Container for the app
const app = {}

// remove old files
app.theJob = async () => {
    const date = new Date()
    date.setDate(date.getDate() - config.logDays)
    const filesInDir = await log.openDir()
    if(filesInDir.length > 0){
        filesInDir.map(file =>{
            const fileDate = file.slice(file.length-10,file.length);
            const fileD = new Date(fileDate)
            if(fileD < date){
                log.removeFile(file);
            }
        })
    }
}

const startWorking = setInterval(function(){
        app.theJob()
    },24 * 60 * 60 * 1000)

const stopWorking = clearInterval(app.startWorking)

app.init = () => {
    if(config.working){
        startWorking
    }
    if(!config.working){
        stopWorking
    }
}

app.init()

module.exports = app;