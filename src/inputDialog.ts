class InputDialog {
    static valueInputdiv = document.getElementById("valueInput");
    static itemNameBox = <HTMLInputElement>document.getElementById("itemName");
    static itemCostBox = <HTMLInputElement>document.getElementById("itemCost");
    static valueInputdivShown = false;
    static valueInputdivAdded = false;
    static container = document.getElementById("container");
    static initialAmountElementShown = false;

    static buttonPressed: boolean = false;

    static popOut() {
        this.valueInputdiv.style.transform = "scale(1)";
        this.valueInputdivShown = true;
        this.container.style.zIndex = "1";
        if (this.initialAmountElementShown) {
            InitialAmountInput.amountPopIn();
        }
    }
    static popIn() {
        this.valueInputdiv.style.transform = "scale(0)";
        this.valueInputdivShown = false;
        this.valueInputdivAdded = false;
        this.itemNameBox.value = null;
        this.itemCostBox.value = null;
        this.container.style.zIndex = "-1";
    }

    public static getInput(): InputValues {
        const data: InputValues = {
            name: this.itemNameBox.value,
            price: this.itemCostBox.valueAsNumber,
        };
        console.log(data);
        return data;
    }
}

interface InputValues {
    name: string;
    price: number;
}

document.getElementById("saveButton").addEventListener("click", (event) => {
    switch (Leger.inputPurpose) {
        case Purpose.new: {
            if (Leger.initialBalance !== undefined) {
                ThingHolder.creatNewItem(InputDialog.getInput());
                InputDialog.popIn();
            } else {
                alert("Initial Balance not specified");
            }
            break;
        }
        case Purpose.edit: {
            Leger.currentEditing.edit(InputDialog.getInput());
            Leger.inputPurpose = Purpose.new;
            break;
        }
        default:
            console.error("Invalid value in inputPuropse");
            break;
    }
});
document.getElementById("deleteButton").addEventListener("click", (event) => {
    InputDialog.popIn();
});

document.getElementById("addButton").addEventListener("click", (event) => {
    InputDialog.popOut();
});
