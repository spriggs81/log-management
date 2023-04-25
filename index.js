const api = require('./lib/api');

module.exports = api;

api.setConfig({
    stdMode: false,
    working: false,
    logDays: 5
})