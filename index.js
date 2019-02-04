const Logger = require('./patterns/singleton');

let logger1 = new Logger();
let logger2 = new Logger();

logger1.log('Hello Singleton!!!');
logger2.error('Whoops!!!');

(new Logger()).log('instance test: ');
(new Logger()).log(logger1 === logger2);