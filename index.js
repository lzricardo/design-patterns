const Logger = require('./patterns/singleton');
const CarMaker = require('./patterns/factory');
const Shipping = require('./patterns/adapter').Shipping;
const ShippingAdapter = require('./patterns/adapter').ShippingAdapter;

//Singleton
let logger1 = new Logger();
let logger2 = new Logger();

logger1.log('Hello Singleton!!!');
logger2.error('Whoops!!!');

(new Logger()).log('instance test: ');
(new Logger()).log(logger1 === logger2);

//Factory
let corolla = CarMaker.factory('Compact');
let solstice = CarMaker.factory('Convertible');
let cherokee = CarMaker.factory('SUV');

logger1.log(corolla.drive());
logger2.log(solstice.drive());
logger1.log(cherokee.drive());


//Adapter
let shipping = new Shipping();
let credentials = {token: "30a8-6ee1"};
let adapter = new ShippingAdapter(credentials);

let cost = shipping.request("78701", "10010", "2 lbs");

console.log("Old cost: " + cost);

cost = adapter.request("78701", "10010", "2 lbs");

console.log("New cost: " + cost);