class InputDialog {
    static valueInputdiv = document.getElementById("valueInput");
    static itemNameBox = <HTMLInputElement>document.getElementById("itemName");
    static valueInputdivShown = false;
    static valueInputdivAdded = false;
    static itemCostBox = <HTMLInputElement>document.getElementById("itemCost");
    static container = document.getElementById("container");
    static initialAmountElementShown = false;

    static popOut() {
        this.valueInputdiv.style.transform = "scale(1)";
        this.valueInputdivShown = true;
        this.container.style.zIndex = "1";
        // if (this.initialAmountElementShown) {
        //     this.amountPopIn();
        // }
    }
    static popIn() {
        this.valueInputdiv.style.transform = "scale(0)";
        this.valueInputdivShown = false;
        this.valueInputdivAdded = false;
        this.itemNameBox.value = null;
        this.itemCostBox.value = null;
        this.container.style.zIndex = "-1";
    }
}
