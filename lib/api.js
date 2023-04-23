/*
*   This file handles the API functions
*
*/

const log = require('./log');
const std = require('./stdout');
const config = require('./config');
const _data = require('./data');
const work = require('./worker')

const app = {}

// functions create log files in ./log folder
app.errorFile = data => {
    obj = {
        time: new Date(),
        type: 'error',
        data: data
    }
    log.createLog(obj)
    .then(done => {
        if(config.stdMode)
        std.error(obj)
    })
}

app.warningFile = data => {
    obj = {
        time: new Date(),
        type: 'warning',
        data: data
    }
    log.createLog(obj)
    .then(done => {
        if(config.stdMode)
        std.warning(obj)
    })
}

app.infoFile = data => {
    obj = {
        time: new Date(),
        type: 'info',
        data: data
    }
    log.createLog(obj)
    .then(done => {
        if(config.stdMode)
        std.info(obj)
    })
}
// ********** End of Functions Creating Log Files

//  Files for printing out messages to the console/screen
app.error = data => {
    obj = {
        time: new Date(),
        data: data
    }
    std.error(obj)
}

app.warning = data => {
    obj = {
        time: new Date(),
        data: data
    }
    std.warning(obj)
}

app.info = data => {
    obj = {
        time: new Date(),
        data: data
    }
    std.info(obj)
}
//  *********** End of Functions to print to the console/screen

app.setConfig = obj => {
    const stdMode = obj && obj.stdMode && typeof(obj.stdMode) === 'boolean' ? obj.stdMode : false;
    const working = obj && obj.working && typeof(obj.working) === 'boolean' ? obj.working : false;
    const logDays = !working ? 0 : obj.logDays && obj.logDays > 0 && typeof(obj.logDays) === 'number' ? obj.logDays : 90
    _data.updateConfig({
        stdMode: stdMode,
        logDays: logDays,
        working: working
    })
}

module.exports = app;