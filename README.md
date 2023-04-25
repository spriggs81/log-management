# Log Management

The Application was created to manage the logging process.  This application handles the logging to the console in different colors to easily tell the difference between informational messages, warning messages, and errors.

The application has the ability to create log files in a `/.log` folder.  These files will have the type 'information, warning, and error` with the date it was created in the following format:
```
`error_log_MM-DD-YYYY`
`warning-DD-YYYY`
`error_log_MM-DD-YYYY`
```
The application has the ability to remove old log files.  Meaning you don't have to review the log folder to remove old files.  You can set the days you want to keep files in the folder and the application removes any older files daily.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you how to get a development env running

Install the app from NPM:

```
npm install log-management --save
```

### examples
### Setting the Configuration 
To change the application's default settings use the following:

```
const log = require('log-management')

log.setConfig({options})

```
The options available for the above settings are as follows:

The option `stdMode` controls if the message that was passed along to create the log file is also printed in the console/screen.  

If `true` then the messages are printed to the console/screen as well as the log file.  

If `false`{default} then no message is printed out to the console/screen, but still added to the log file.
<hr />

The option `working` controls if the auto remove log files is turned on or off.  

If `true` then the auto remove log files is turned `on` and the 'logDays` option should be set if not the default wil be set.  

If `false`{default} then the auto remove log files is turned `off`.
<hr />

The option `logDays` controls how long the files are to remain in the `./log` folder.  If no number is entered the `default is 90 days` if the `working` option is `true` and default is `0` if the `working` option is `false`.
<hr />

```
const options = {
    stdMode: boolean, // default false
    working: boolean, // default false
    logDays: number   // default 0        
}
```
<br>

### How to create logs
Creating logs are easy just follow the explains provided below:

For Error Use:
```
log.errorFile(data)
```

For Warning Use:
```
log.warningFile(data)
```

For Info Use:
```
log.infoFile(data)
```

Please be aware that data can be a string, number, object, or array.
Since sometimes we need that data to be able to research an issue.

### How to print to the console/screen
Creating logs are easy just follow the explains provided below:

For Error Use:
```
log.error(data)
```

For Warning Use:
```
log.warning(data)
```

For Info Use:
```
log.info(data)
```

Please be aware that data can be a string, number, object, or array. The function will JSON Stringify anything not a string

## Videos

* [YouTube] Testing Video Coming Soon

## Authors

* **John S.** - *Initial work* - [spriggs81](https://github.com/spriggs81)
