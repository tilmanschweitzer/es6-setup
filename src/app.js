import {PageLogger} from './page-logger.js'

var logger = new PageLogger('#logs');

logger.interceptCall(console, 'log');

class Main {
    static run({ x = 3, y = 7, initialLog = 'Running...' } = {}, ...params) {
        console.log(initialLog);

        // arrow functions
        console.log([1,2,3,4,5, 6].map(x => x * x));

        var square = x => x * x;
        console.log(params.map(square));
    }
}

//Main.run({initialLog: 'Fuck yeah!'});
Main.run();