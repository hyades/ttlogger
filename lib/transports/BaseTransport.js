/**
 *Created by aayush on 28/2/18
 **/


const SimpleFormatter = require('../formatter/SimpleFormatter');
const levels = require('../levels');

class BaseTransport {

    constructor(level=levels.INFO) {
        this.level = level;
        this.highWaterMark = 100;
        this.buffer = {};
        this.startIndex = 0;
        this.endIndex = 0;
        this.formatter = new SimpleFormatter();
    }

    handleBufferOverflow() {}

    writeToBuffer(level, msg, meta) {
        if(level >= this.level) {
            const formattedMsg = this.formatter.format(level, msg, meta);
            if(this.endIndex - this.startIndex + 1 >= this.highWaterMark) {
                handleBufferOverflow(formattedMsg);
            }
            else {
                this.buffer[this.endIndex] = formattedMsg;
                this.endIndex++;
            }
        }
    }

    consumeFromBuffer(n) {
        const ret = [];
        let counter = 0;
        while(counter < n && this.startIndex <= this.endIndex) {
            ret.push(this.buffer[this.startIndex]);
            this.startIndex++;
            counter++;
        }
        return ret;
    }

    log() {}
}

module.exports = BaseTransport;
