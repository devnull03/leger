var ThingHolder = /** @class */ (function () {
    function ThingHolder() {
    }
    ThingHolder.creatNewItem = function (data) {
        var newThing = new Thing(data.name, data.price, TrimColors.BLACK);
        Leger.allItems.set(newThing.date.getTime().toString(), newThing);
        this.holder.appendChild(newThing.HtmlElement);
        Leger.updateBalance();
    };
    Object.defineProperty(ThingHolder, "allItems", {
        get: function () {
            return Leger.allItems;
        },
        enumerable: false,
        configurable: true
    });
    ThingHolder.holder = document.getElementById("holder");
    return ThingHolder;
}());
