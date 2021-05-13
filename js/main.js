class Theme {
    constructor() {
        this.currentTheme = "dark";

        this.lightModeConfig = new Map();
        this.lightModeConfig.set("addButtonColor", "#7719AB");
        this.lightModeConfig.set("frameColor", "#FFFFFF");
        this.lightModeConfig.set("bodyColor", "#FBFBFB");
        this.lightModeConfig.set("initialAmountBackground", "#E5F9E0");
        this.lightModeConfig.set("itemBackground", "#E1F1FF");
        this.lightModeConfig.set("fontColor", "black");
        this.lightModeConfig.set("addButtonFontColor", "white");
        this.lightModeConfig.set("themeButtonColor", "#212121");

        this.darkModeConfig = new Map();
        this.darkModeConfig.set("addButtonColor", "#bfaae3");
        this.darkModeConfig.set("frameColor", "#212121");
        this.darkModeConfig.set("bodyColor", "black");
        this.darkModeConfig.set("initialAmountBackground", "#4f4f4f");
        this.darkModeConfig.set("itemBackground", "#4f4f4f");
        this.darkModeConfig.set("fontColor", "white");
        this.darkModeConfig.set("addButtonFontColor", "black");
        this.darkModeConfig.set("themeButtonColor", "white");

        this.frame = [
            document.getElementById("header"),
            document.getElementById("footer"),
        ];
        this.body = document.getElementsByTagName("body").item(0);
        this.addButton = document.getElementById("addButton");
        this.holder = document.getElementById("holder");
        this.themeButton = document.getElementById("themeButton");
        this.valueInputdiv = document.getElementById("valueInput");
    }
    switchTheme() {
        switch (this.currentTheme) {
            case "dark":
                this.changeTheme(this.lightModeConfig);
                this.currentTheme = "light";
                break;

            case "light":
                this.changeTheme(this.darkModeConfig);
                this.currentTheme = "dark";
                break;

            default:
                break;
        }
    }
    changeTheme(config) {
        this.frame.forEach((element) => {
            element.style.backgroundColor = config.get("frameColor");
        });
        this.body.style.backgroundColor = config.get("bodyColor");
        this.body.style.color = config.get("fontColor");

        let items = document.getElementsByClassName("thing");
        for (const element of items) {
            element.style.backgroundColor = config.get("itemBackground");
        }

        this.addButton.style.backgroundColor = config.get("addButtonColor");
        this.themeButton.style.backgroundColor = config.get("themeButtonColor");
        this.addButton.style.color = config.get("addButtonFontColor");
        document.getElementById("initialAmount").style.backgroundColor =
            config.get("initialAmountBackground");
    }
}

const themeManager = new Theme();

class Items {
    items = [];
    initialBalance = null;
    currentBalance = 0;
    amountInput = `
                    <div class="initialAmountBox">
                    <p>₹</p>
                    <input type="number" id="amountElement" placeholder="Initial amount"/>
                    </div>
                    <div id="saveButton1" onclick="itemManager.amountPopIn()">Save</div>
 
`;

    constructor(themeManager) {
        this.holder = document.getElementById("holder");
        this.defaultText = "hmmmmmmmmmmmmm\nhmmmmmmmmmmmmmmm";
        this.themeManager = themeManager;
        this.valueInputdiv = document.getElementById("valueInput");
        this.itemNameBox = document.getElementById("itemName");
        this.itemCostBox = document.getElementById("itemCost");
        this.saveButton = document.getElementById("saveButton");
        this.deleteButton = document.getElementById("deleteButton");
        this.currency = "₹";
        this.container = document.getElementById("container");

        this.valueInputdivShown = false;
        this.valueInputdivAdded = false;
        this.initialAmountElementShown = false;
        this.saveButtonClicked = false;
    }

    insertItem(name, cost) {
        if (this.initialBalance === null) {
            alert("Initial Balance not specified");
            return;
        }
        const text = `${name} <br><br>${this.currency} ${cost}`;

        if (!this.valueInputdivShown) {
            return;
        } else if (this.valueInputdivAdded) {
            return;
        }
        if (name === "" || cost === "") {
            return;
        }

        switch (this.themeManager.currentTheme) {
            case "light":
                this.holder.innerHTML += `<div class="thing" style="background-color:${this.themeManager.lightModeConfig.get(
                    "itemBackground"
                )}">${text}</div>`;
                this.valueInputdivAdded = true;
                break;
            case "dark":
                this.holder.innerHTML += `<div class="thing">${text}</div>`;
                this.valueInputdivAdded = true;
                break;
            default:
                break;
        }

        this.items.push({ name: name, cost: parseInt(cost) });
        this.popIn();
    }

    clearAll() {
        const initialAmountElement = this.holder.children[0].outerHTML;
        console.log(initialAmountElement);
        this.holder.innerHTML = "";
        this.holder.innerHTML = initialAmountElement;
        this.items = [];
    }

    amountPopOut() {
        if (!this.initialAmountElementShown) {
            console.log("ello");
            document.getElementById("initialAmount").innerHTML =
                this.amountInput;
            this.initialAmountElementShown = true;
            document.getElementById("amountElement").value =
                this.initialBalance;
        }
    }
    amountPopIn() {
        const stuff = document.getElementById("amountElement");
        if (stuff.value.length) {
            this.initialBalance = stuff.value;
        }
        // console.log(this.initialBalance);
        const initialAmountElement = document.getElementById("initialAmount");
        if (this.initialBalance === null) {
            initialAmountElement.innerHTML = `
            <p id="opener" onclick="itemManager.amountPopOut()" style="width:100%">
            press to enter initial balance
            </p>
            `;
        } else {
            initialAmountElement.innerHTML = `
            <p id="opener" onclick="itemManager.amountPopOut()" style="width:100%">
            Initial Amount ${this.currency}${this.initialBalance}
            </p>
            `;
        }
        this.initialAmountElementShown = false;
        console.log(this.initialAmountElementShown);
    }

    popOut() {
        this.valueInputdiv.style.transform = "scale(1)";
        this.valueInputdivShown = true;
        this.container.style.zIndex = 1;
    }
    popIn() {
        this.valueInputdiv.style.transform = "scale(0)";
        this.valueInputdivShown = false;
        this.valueInputdivAdded = false;
        this.itemNameBox.value = null;
        this.itemCostBox.value = null;
        this.container.style.zIndex = -1;
    }
}

const itemManager = new Items(themeManager);

document.getElementById("saveButton").addEventListener("click", (event) => {
    itemManager.insertItem(
        document.getElementById("itemName").value,
        document.getElementById("itemCost").value
    );
});
document.getElementById("deleteButton").addEventListener("click", (event) => {
    itemManager.popIn();
});

function testValues(amount = 6, long = false) {
    for (let i = 0; i < amount; i++) {
        itemManager.popOut();
        itemManager.insertItem(`item ${i}`, i * 100);
    }
    if (!long) {
        return;
    }
    itemManager.popOut();
    itemManager.insertItem(
        "tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
        1
    );
}
