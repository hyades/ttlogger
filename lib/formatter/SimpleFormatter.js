/**
 *Created by aayush on 28/2/18
 **/

const BaseFormatter = require('./BaseFormatter');


class SimpleFormatter extends BaseFormatter {

    constructor() {
        super();
    }

    format(level, msg, meta) {
        return `${(new Date).toString()}:${level}:${JSON.stringify(msg)}`;
    }
}

module.exports = SimpleFormatter;
