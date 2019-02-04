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

module.exports = Logger;