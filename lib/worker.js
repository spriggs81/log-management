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
    if(config.working){
        const date = new Date()
        date.setDate(date.getDate() - config.logDays)
        const filesInDir = await log.openDir()
        if(filesInDir.length > 0){
            filesInDir.map(async file =>{
                const fileDate = file.slice(file.length-10,file.length);
                const fileD = new Date(fileDate)
                if(fileD < date){
                    await log.removeFile(file);
                }
            })
        }
        setInterval(function(){
            app.theJob()
        },24 * 60 * 60 * 1000)
    }
}

module.exports = app;