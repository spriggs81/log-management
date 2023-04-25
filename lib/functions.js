/*
*   This file is to store all functions used in the app
*
*/

const _data = require('./data');

// container to hold the app
const app = {}

// adds a zero so that numbers are always two digits
app.checkZero = (x) => {
    let xx = x.toString();
    if(xx.length == 1){
         xx = "0" + x;
         return xx;
    }
    return xx;
}

module.exports.checkZero = app.checkZero;