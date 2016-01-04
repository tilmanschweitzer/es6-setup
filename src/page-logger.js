export {PageLogger}

// function stealing
//var toArray = Array.prototype.slice;
var map = Array.prototype.map;

class PageLogger {
    constructor (selector) {
        this.selector = selector;

        var _elementCache;

        // es5 properties - https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
        Object.defineProperty(this, 'element', {
            get: function () {
                if (_elementCache === undefined || _elementCache.selector !== this.selector) {
                    _elementCache = {
                        element: document.querySelector(this.selector),
                        selector: this.selector
                    };
                }
                return _elementCache.element;
            }
        });

    }
    interceptCall (object, functionName) {
        var self = this;
        var fn = object[functionName];
        object[functionName] = function () {
            //var argumentsArray = toArray.apply(arguments);
            var argumentsArray = [...arguments]

            // log to page
            self.log(PageLogger.prepareArguments([...arguments]));

            // transparent fn class
            return fn.apply(this, arguments);
        }
    }
    log(message) {
        this.element.innerHTML = this.element.innerHTML + '\n\n' + message;
    }
    static prepareArguments (args) {
        return map.call(args, function (argument) {
            if (typeof argument === 'object') {
                return JSON.stringify(argument);
            }

            return argument;
        }).join('\n');
    }
}