/**
 *Created by aayush on 28/2/18
 **/

const EventEmitter = require('events');
const levels = require('./levels');

class Logger extends EventEmitter {

    constructor(options) {
        super(options);
        this.transports = options.transports;
        this.transports.forEach(transport => {
            this.on('log', transport.log.bind(transport));
        })
    }

    log(level, msg, meta) {
        this.transports.forEach(transport => {
            if(transport.level <= level)
                transport.writeToBuffer(level, msg, meta);
        });
        this.emit('log');
    }

    info(msg, meta) {
        this.log(levels.INFO, msg, meta)
    }

    debug(msg, meta) {
        this.log(levels.DEBUG, msg, meta)
    }

    error(msg, meta) {
        this.log(levels.ERROR, msg, meta)
    }
}


module.exports = Logger;


