/*
*   This file handles the worker's job(s) and function(s)
*
*/

// dependenies needed 
// const {checkSetting} = require('./functions');

// Container for the app
const _data = require('./data');
const log = require('./log');
const _func = require('./functions');

const app = {}

// remove old files
app.theJob = async () => {
    await _data.openConfig()
    .then(data=>{
        if(data.working && data.logDays > 0){
            const date = new Date()
            date.setDate(date.getDate() - data.logDays)
            const filesInDir = log.openDir()
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
            }, 24 * 60 * 60 * 1000)
        }

    })
}

module.exports = app;
