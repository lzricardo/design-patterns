let Logger;

(function() {
    let instance;

    Logger = function Logger() {

        if (instance) return instance;

        instance = this;

        this.log = function (data) {
            console.log(data);
        };

        this.error = function (data) {
            console.error(data);
        };
    }
})();

let logger1 = new Logger();
let logger2 = new Logger();

logger1.log('Hello Singleton!!!');
logger2.error('Whoops!!!');

(new Logger()).log('instance test: ');
(new Logger()).log(logger1 === logger2);