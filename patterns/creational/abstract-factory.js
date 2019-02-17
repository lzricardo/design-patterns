class Vendor {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`I'm vendor ${this.name}`);
    }
}

class VendorFactory {

    static create(name) {
        return new Vendor(name)
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`I'm employee ${this.name}`);
    }
}

class EmployeeFactory {

    static create(name) {
        return new Employee(name)
    }
}

module.exports = {
    VendorFactory,
    EmployeeFactory
};