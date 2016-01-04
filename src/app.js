import * as user from './user.js';
import {AdminUser} from './user.js';
import {PageLogger} from './page-logger.js'

var logger = new PageLogger('#logs');

logger.interceptCall(console, 'log');

class Main {
    static run({ x = 3, y = 7, initialLog = 'Running...' } = {}, ...params) {
        console.log(initialLog);
        var someUser = new user.User('Til');
        someUser.sayHello();

        someUser = new AdminUser('Bob');
        someUser.sayHello();

        someUser = new user.DevUser('Alice');
        someUser.sayHello();

        someUser = new user.UberDevUser('Charlie');
        someUser.sayHello();

        someUser = new user.DevUser('Chuck Norris');
        someUser.helloText = function() { //
            return 'Want some roundhousekicks? (' + this.name + ')'; // super.helloText()
        };
        someUser.sayHello();

        // arrow functions
        console.log([1,2,3,4,5, 6].map(x => x * x));

        var square = x => x * x;
        console.log(params.map(square));
    }
}

//Main.run({initialLog: 'Fuck yeah!'});
Main.run();