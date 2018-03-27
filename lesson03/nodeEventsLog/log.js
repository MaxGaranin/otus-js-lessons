const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('myRequest', (req) => {
    console.log('Request at ' + new Date().toString() + 
               ' from url ' + req.url);
});

module.exports.myEmitter = myEmitter;