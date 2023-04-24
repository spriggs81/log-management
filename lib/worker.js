/*
*   This file handles the worker's job(s) and function(s)
*
*/

// dependenies needed 
const func = require('./functions')
const log = require('./log');

// Container for the app
const app = {}

// remove old files
app.theJob = async () => {
    console.log('the job was called!');
    // _func.
    const working = await func.checkSetting('working')
    if(working){
        console.log('I should be working now');
        const date = new Date()
        date.setDate(date.getDate() - _func.checkSetting('logDays'))
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

app.theJob()