//load the path module
const path = require('path');
//load the events module
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.emitEvent = function() {
            var eDate = new Date();
            var file = path.parse(__filename).base;
            var obj = { name: 'MyEvent', date: eDate, module: file };
            console.log("The emitter has done it job");
            this.emit('myEvent', obj);
        };
    }

}
module.exports = MyEmitter;