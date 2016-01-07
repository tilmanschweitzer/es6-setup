# es6-setup

> Minimal example setup for ES6 with the Babel transpiler and a simple grunt "dev" task for watch, connect and livereload.

## Setup

All you need is `node` with `npm` and `grunt-cli`.

    # install the setup depedencies
    npm install
    
    # install grunt-cli globally (if you don't have it installed)
    npm install -g grunt-cli
    
    # check the grunt default task...
    grunt
    
    # ... and the dev task
    grunt dev

### Setup Evolution

* [Just Grunt+Babel](https://github.com/tilmanpotthof/es6-setup/tree/basic-babel-grunt)
    * Manual transpilation for `src/app.js` with the `grunt` default task
    * Add some ES6 code to `src/app.js` and transpile it
* [Dev-Task with watch and connect](https://github.com/tilmanpotthof/es6-setup/tree/dev-task-with-watch-and-connect) - [Diff - Just the changes](https://github.com/tilmanpotthof/es6-setup/commit/3a45ec6a641c26dbe6fa2440b3ace9e190601d16)
    * Run `grunt dev` (http://localhost:9001 should open automatically)
    * Change some code in `src/app.js` or `index.html`
* [Module loader setup with SystemJS]() - [Diff - Just the changes](https://github.com/tilmanpotthof/es6-setup/commit/4aab5bbcb615936928ff095cf0490e4a757dfc46)
    * Re-run `grunt dev`
    * Add some modules like `src/my-module.js`
    * Add a class and export it `export {MyClass}; class MyClass {};`
    * Import it in `src/app.js` with `import {MyClass} from './my-module.js'; var o = new MyClass();`
    * And now with wildcard imports `import * as myModule from './my-module.js'; var o = new myModule.MyClass();` 


## Ressourcen

* [Babel Transpiler](https://babeljs.io/)
	* [Babel - Kurzer Feature Überblick und Babel Kompatibilität](https://babeljs.io/docs/learn-es2015/)
	* [Babel - Try it out](https://babeljs.io/repl/)
* [ES6 Overview in 350 Bullet Points](https://ponyfoo.com/articles/es6)
* [Getting started with ECMAScript 6](http://www.2ality.com/2015/08/getting-started-es6.html)
* [Six Steps for Approaching the Next JavaScript](http://developer.telerik.com/featured/six-steps-for-approaching-the-next-javascript)