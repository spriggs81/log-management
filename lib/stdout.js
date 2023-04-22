/*
*   This file controls the (stdout) console logging to the screen
*   
*/

// container holding the app
const app = {};

// logs red background
app.error = (obj) => {
    const data = typeof(obj.data) === 'string' ? obj.data : JSON.stringify(obj.data);
    console.log(obj.time,'\x1b[41mError:',data,'\x1b[0m')
}

// logs blue background
app.warning = (obj) => {
    const data = typeof(obj.data) === 'string' ? obj.data : JSON.stringify(obj.data);
    console.log(obj.time,'\x1b[103mWarning:',data,'\x1b[0m')
}

// logs green background
app.info = (obj) => {
    const data = typeof(obj.data) === 'string' ? obj.data : JSON.stringify(obj.data);
    console.log(obj.time,'\x1b[102mInformaton:',data,'\x1b[0m')
}

// exporting the app
module.exports = app;