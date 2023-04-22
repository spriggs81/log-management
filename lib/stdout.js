/*
*   This file controls the (stdout) console logging to the screen
*   
*/

// container holding the app
const app = {};

// logs red background
app.error = (obj) => {
    console.log(obj.time,'\x1b[41mError:',obj.data,'\x1b[0m')
}

// logs blue background
app.warning = (obj) => {
    console.log(obj.time,'\x1b[103mWarning:',obj.data,'\x1b[0m')
}

// logs green background
app.info = (obj) => {
    console.log(obj.time,'\x1b[102mInformaton:',obj.data,'\x1b[0m')
}

// exporting the app
module.exports = app;