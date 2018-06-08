/**
 *Created by aayush on 28/2/18
 **/

const BaseTransport = require('./BaseTransport');


class ConsoleTransport extends BaseTransport {

    constructor(options) {
        super(options);
        this._writing = false;
    }

    log() {
        if(this._writing)
            return;
        this._writing = true;
        //console.log(this)
        const messages = this.consumeFromBuffer(2);
        messages.forEach(msg => {
            console.log(msg);
        });
        this._writing = false;
    }

}

module.exports = ConsoleTransport;

