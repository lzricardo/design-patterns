const Logger = require('./patterns/singleton');
const CarMaker = require('./patterns/factory');
const Shipping = require('./patterns/adapter').Shipping;
const ShippingAdapter = require('./patterns/adapter').ShippingAdapter;
const Mortgage =  require('./patterns/facade');
const Iterator = require('./patterns/iterator');
const VendorFactory = require('./patterns/abstract-factory').VendorFactory;
const EmployeeFactory = require('./patterns/abstract-factory').EmployeeFactory;

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

logger1.log("Old cost: " + cost);

cost = adapter.request("78701", "10010", "2 lbs");

logger1.log("New cost: " + cost);

//Façade
let mortgage = new Mortgage("Joan Templeton");
let result = mortgage.applyFor("$100,000");

logger2.log(result);

//Iterator
let items = ["one", 2, "circle", true, "Applepie"];
let it = new Iterator(items);

for (var item = it.first(); it.hasNext(); item = it.next()) {
    logger1.log(item);
}

it.each((item) => {
    logger2.log(item + '2');
});

//Abstract Factory
let persons = [];

persons.push(EmployeeFactory.create("Joan DiSilva"));
persons.push(EmployeeFactory.create("Tim O'Neill"));
persons.push(VendorFactory.create("Gerald Watson"));
persons.push(VendorFactory.create("Nicole McNight"));

let itPerson = new Iterator(persons);

itPerson.each(person => person.say());
