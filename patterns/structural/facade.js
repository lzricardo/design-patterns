let Mortgage = function(name) {
    this.name = name;
};

Mortgage.prototype = {

    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    }
};

let Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
};

let Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
};

let Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
};

module.exports = Mortgage;