var TrimColors;
(function (TrimColors) {
    TrimColors["AQUA"] = "#CDE9FF";
    TrimColors["GREEN"] = "#AFEDA4";
    TrimColors["YELLOW"] = "#FEF2AD";
    TrimColors["PINK"] = "#FECCE5";
    TrimColors["LAVENDER"] = "#E0B4FF";
    TrimColors["GRAY"] = "#CCCCCC";
    TrimColors["BLACK"] = "#3D3D3D";
})(TrimColors || (TrimColors = {}));
var lightModeBackground = new Map();
lightModeBackground.set(TrimColors.AQUA, "#E1F1FF");
lightModeBackground.set(TrimColors.GREEN, "#E5F9E0");
lightModeBackground.set(TrimColors.YELLOW, "#FFF7E2");
lightModeBackground.set(TrimColors.PINK, "#FFE5F2");
lightModeBackground.set(TrimColors.LAVENDER, "#F2E6FE");
lightModeBackground.set(TrimColors.GRAY, "#F9F9F9");
lightModeBackground.set(TrimColors.BLACK, "#4F4F4F");
var Thing = /** @class */ (function () {
    function Thing(name, price, color, date) {
        if (color === void 0) { color = TrimColors.AQUA; }
        if (date === void 0) { date = new Date(); }
        this.name = name;
        this.price = price;
        this.color = color;
        this.date = date;
        this.id = this.date.getTime().toString();
        console.log(name, price, color, date);
        this.element = document.createElement("div");
        this.element.className = "thing";
        if (ThemeManager.currentTheme === Theme.light) {
            this.element.style.backgroundColor = lightModeBackground.get(this.color);
        }
        this.element.style.borderColor = this.color;
        this.element.id = this.id;
        this.element.onclick = this.openToEdit;
        var p = document.createElement("p");
        p.className = "nameAndPrice";
        p.innerHTML = name + " <br><br>" + Leger.currencyFormater.format(this.price);
        this.element.appendChild(p);
        p = document.createElement("p");
        p.className = "date";
        p.style.fontSize = "10px";
        p.innerHTML = this.date.toDateString();
        this.element.appendChild(p);
    }
    Object.defineProperty(Thing.prototype, "HtmlElement", {
        get: function () {
            return this.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Name", {
        set: function (name) {
            this.name = name;
            document.getElementById(this.id).getElementsByClassName("nameAndPrice").item(0).innerHTML = name + " <br><br>" + Leger.currencyFormater.format(this.price);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Price", {
        set: function (price) {
            this.price = price;
            document.getElementById(this.id).getElementsByClassName("nameAndPrice").item(0).innerHTML = this.name + " <br><br>" + Leger.currencyFormater.format(price);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Date", {
        set: function (date) {
            this.date = date;
            document.getElementById(this.id).getElementsByClassName("date").item(0).innerHTML = date.toDateString();
        },
        enumerable: false,
        configurable: true
    });
    Thing.prototype.openToEdit = function () {
        Leger.inputPurpose = Purpose.edit;
        Leger.currentEditing = this;
        InputDialog.popOut();
    };
    Thing.prototype.edit = function (data) {
        this.Name = data.name;
        this.Price = data.price;
        this.Date = new Date();
    };
    return Thing;
}());
var InitialAmountInput = /** @class */ (function () {
    function InitialAmountInput() {
    }
    InitialAmountInput.amountPopOut = function () {
        if (!this.initialAmountElementShown) {
            document.getElementById("initialAmount").innerHTML =
                this.amountInputTemplate;
            this.initialAmountElementShown = true;
            (document.getElementById("amountElement")).value = "" + Leger.initialBalance;
        }
    };
    InitialAmountInput.amountPopIn = function () {
        var stuff = (document.getElementById("amountElement"));
        if (stuff.value.length) {
            Leger.initialBalance = Number.parseFloat(stuff.value);
        }
        var initialAmountElement = document.getElementById("initialAmount");
        if (Leger.initialBalance === undefined) {
            initialAmountElement.innerHTML = "\n            <p id=\"opener\" onclick=\"InitialAmountInput.amountPopOut()\" style=\"width:100%\">\n            press to enter initial balance\n            </p>\n            ";
        }
        else {
            initialAmountElement.innerHTML = "\n            <div id=\"opener\" onclick=\"InitialAmountInput.amountPopOut()\" style=\"width:100%\">\n            <p>Initial Amount</p> <p style=\"margin:0%;font-size:27px\">&nbsp;\u20B9" + Leger.initialBalance + "</p>\n            </div>\n            ";
        }
        this.initialAmountElementShown = false;
    };
    InitialAmountInput.initialAmountElementShown = false;
    InitialAmountInput.saveButtonClicked = false;
    InitialAmountInput.amountInputTemplate = "\n                    <div class=\"initialAmountBox\">\n                    <p>\u20B9</p>\n                    <input type=\"number\" id=\"amountElement\" placeholder=\"Initial amount\"/>\n                    </div>\n                    <div id=\"saveButton1\" onclick=\"InitialAmountInput.amountPopIn()\">Save</div>\n";
    return InitialAmountInput;
}());
