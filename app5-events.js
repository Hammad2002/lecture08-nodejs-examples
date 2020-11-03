//load the path module
const path = require('path');

//load the events module
//loads the class EventEmitter
const EventEmitter = require('events'); //this is a class
//instantiate the class
const emitter = new EventEmitter();

//register an event handler
emitter.on('myEvent', myHandler);
//raise a myEvent event every 10 ms
var eventTimer = null;
var eventCounter = 0;
emitEvent();

function myHandler(name) {
    console.log(name);
}

function emitEvent() {
    var eDate = new Date();
    var file = path.parse(__filename).base;
    emitter.emit('myEvent'); //, { name: 'MyEvent', date: eDate, module: file }
    eventCounter++;
    if (eventCounter >= 10)
        clearTimeout(eventTimer);
    else
        eventTimer = setTimeout(emitEvent, 10);
}