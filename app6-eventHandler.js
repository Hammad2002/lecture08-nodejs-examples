//load MyEmitter
const MyEmitter = require('./app6-eventEmitter');
var emitter = new MyEmitter();

//register handler
//register an event handler
emitter.on('myEvent', myHandler);
//raise a myEvent event every 10 ms
emitter.emitEvent();

function myHandler(e) {
    console.log(e);
}