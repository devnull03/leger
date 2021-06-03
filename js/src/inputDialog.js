var InputDialog = /** @class */ (function () {
    function InputDialog() {
    }
    InputDialog.popOut = function () {
        this.valueInputdiv.style.transform = "scale(1)";
        this.valueInputdivShown = true;
        this.container.style.zIndex = "1";
        if (this.initialAmountElementShown) {
            InitialAmountInput.amountPopIn();
        }
    };
    InputDialog.popIn = function () {
        this.valueInputdiv.style.transform = "scale(0)";
        this.valueInputdivShown = false;
        this.valueInputdivAdded = false;
        this.itemNameBox.value = null;
        this.itemCostBox.value = null;
        this.container.style.zIndex = "-1";
    };
    InputDialog.getInput = function () {
        var data = {
            name: this.itemNameBox.value,
            price: this.itemCostBox.valueAsNumber
        };
        console.log(data);
        return data;
    };
    InputDialog.valueInputdiv = document.getElementById("valueInput");
    InputDialog.itemNameBox = document.getElementById("itemName");
    InputDialog.itemCostBox = document.getElementById("itemCost");
    InputDialog.valueInputdivShown = false;
    InputDialog.valueInputdivAdded = false;
    InputDialog.container = document.getElementById("container");
    InputDialog.initialAmountElementShown = false;
    InputDialog.buttonPressed = false;
    return InputDialog;
}());
document.getElementById("saveButton").addEventListener("click", function (event) {
    ThingHolder.creatNewItem(InputDialog.getInput());
});
document.getElementById("deleteButton").addEventListener("click", function (event) {
    InputDialog.popIn();
});
