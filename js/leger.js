var Purpose;
(function (Purpose) {
    Purpose[Purpose["new"] = 0] = "new";
    Purpose[Purpose["edit"] = 1] = "edit";
})(Purpose || (Purpose = {}));
var Leger = /** @class */ (function () {
    function Leger() {
    }
    Leger.updateBalance = function () {
        var spent = 0;
        this.allItems.forEach(function (element) {
            spent += element.price;
        });
        this.currentBalance = this.initialBalance - spent;
        this.remaningBalanceElement.innerHTML = this.currencyFormater.format(this.currentBalance);
    };
    Leger.remaningBalanceElement = document.getElementById("currentBalance");
    Leger.allItems = new Map();
    Leger.inputPurpose = Purpose.new;
    Leger.currencyFormater = new Intl.NumberFormat(navigator.language || window.navigator.language, {
        style: "currency",
        currency: "INR",
    });
    return Leger;
}());
