/**
 *Created by aayush on 28/2/18
 **/

const Logger = require('../lib/Logger');
const ConsoleTransport = require('../lib/transports/ConsoleTransport');


const test = () => {

    const logger = new Logger({
        transports: [
            new ConsoleTransport()
        ]
    });

    setTimeout(() => {
        logger.info({done: 100, pending: 200});
    }, 1000)

    setTimeout(() => {
        logger.info({done: 200, pending: 100});
    }, 2000)

}


test();

