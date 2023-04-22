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

app.error = data => {
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

app.warning = data => {
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

app.info = data => {
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

app.startWithAutoRemove = obj => {
    const stdMode = obj && obj.stdMode && obj.stdMode.trim().length > 0 && typeof(obj.stdMode) === 'boolean' ? obj.stdMode : false;
    const logDays = obj && obj.logDays && obj.logDays > 0 && typeof(obj.logDays) === 'number' ? obj.logDays : 90;
    const working = true
    _data.updateConfig({
        stdMode: stdMode,
        logDays: logDays,
        working: working
    })
    .then(done => work.init())
}

app.startWithoutAutoRemove = obj => {
    const stdMode = obj && obj.stdMode && obj.stdMode.trim().length > 0 && typeof(obj.stdMode) === 'boolean' ? obj.stdMode : false;
    const logDays = 0
    const working = false
    _data.updateConfig({
        stdMode: stdMode,
        logDays: logDays,
        working: working
    })
    .then(done => work.init())
}

module.exports = app;