/*
*   This file handles creating the log files
*
*/

// dependencies (part of NodeJS)
const fs = require('node:fs/promises')
const path = require('path')
const func = require('./functions')

// container holding the app
const app = {};

// the directory where the files are stored
app.dirPath = '.logs';

// the path used to create the directiory and store files
app.path = path.join(__dirname,'../../../'+app.dirPath)

// creates directories 
app.makeDir = async (obj) => {
    console.log('Attemping to Create Directories!')
    const breakUp = app.dirPath.split('/')
    let dir = '../../..';
    await breakUp.forEach(async d => {
        if(d.trim().length > 1){
            dir = dir + '/' + d
            try {
                await fs.mkdir(path.join(__dirname,dir))
            } catch (e) {
                console.log('\x1b[31mAn Error Occurred While Creating the Directories: \x1b[0m\x1b[41m',e,'\x1b[0m');
                return
            }
        }
    })
    console.log('Was able to create directories, will create log now!')
    app.createLog(obj)
}

// creates logs
app.createLog = async (obj)=> {
    const theDate = new Date(obj.time);
    const fileName = obj.type+'_log_'+func.checkZero(theDate.getMonth() + 1)+'-'+func.checkZero(theDate.getDate())+'-'+theDate.getFullYear()
    try {
        await fs.appendFile(path.join(app.path,fileName),JSON.stringify(
            {
                time: theDate.toTimeString().slice(0,17),
                type: obj.type,
                data: obj.data,
            }
        )+'\n')
    } catch (e){
        if(e.message.includes('no such file or directory')){
            console.log('An Error Occurred Due to Missing Dicrectories: ',app.path);
            app.makeDir(obj)
        } else {
            console.error('An Error Occurred While Creating The Log: ',e.message)
        }
    }
}

app.openDir = async () => {
    try {
        return await fs.readdir(app.path)
    } catch (e) {
        return e
    }
}

app.removeFile = async (fileName) => {
    try {
        await fs.unlink(path.join(app.path,fileName))
    } catch (e) {
         console.log(e)
    }
}

app.openDir()
// console.log(data)

// exporting the app
module.exports.createLog = app.createLog
module.exports.openDir = app.openDir
module.exports.removeFile =app.removeFile