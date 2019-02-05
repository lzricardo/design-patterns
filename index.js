const Logger = require('./patterns/singleton');
const CarMaker = require('./patterns/factory');

let logger1 = new Logger();
let logger2 = new Logger();

logger1.log('Hello Singleton!!!');
logger2.error('Whoops!!!');

(new Logger()).log('instance test: ');
(new Logger()).log(logger1 === logger2);

let corolla = CarMaker.factory('Compact');
let solstice = CarMaker.factory('Convertible');
let cherokee = CarMaker.factory('SUV');

logger1.log(corolla.drive());
logger2.log(solstice.drive());
logger1.log(cherokee.drive());
