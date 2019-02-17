function Shipping() {
    this.request = function(zipStart, zipEnd, weight) {
        return 'R$49,75';
    };
}

function AdvancedShipping() {
    this.login = function (credentials) {

    };

    this.setStart = function (start) {
        
    };

    this.setDestination = function (destination) {

    };

    this.calculate = function (weight) {
        return 'R$39,50';
    };
}

function ShippingAdapter(credentials) {
    let shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function(zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    }
}

module.exports = {
    Shipping,
    ShippingAdapter
};