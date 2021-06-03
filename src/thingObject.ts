enum TrimColors {
    AQUA = "#CDE9FF",
    GREEN = "#AFEDA4",
    YELLOW = "#FEF2AD",
    PINK = "#FECCE5",
    LAVENDER = "#E0B4FF",
    GRAY = "#CCCCCC",
    BLACK = "#3D3D3D",
}

const lightModeBackground = new Map<string, string>();
lightModeBackground.set(TrimColors.AQUA, "#E1F1FF");
lightModeBackground.set(TrimColors.GREEN, "#E5F9E0");
lightModeBackground.set(TrimColors.YELLOW, "#FFF7E2");
lightModeBackground.set(TrimColors.PINK, "#FFE5F2");
lightModeBackground.set(TrimColors.LAVENDER, "#F2E6FE");
lightModeBackground.set(TrimColors.GRAY, "#F9F9F9");
lightModeBackground.set(TrimColors.BLACK, "#4F4F4F");

class Thing {
    date: Date;
    name: string;
    price: number;
    color: string;
    id: string
    private element: HTMLElement;

    constructor(
        name: string,
        price: number,
        color: TrimColors = TrimColors.AQUA,
        date: Date = new Date()
    ) {
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
        this.element.onclick = this.test;

        let p = document.createElement("p");
        p.innerHTML = `${name} <br><br>${new Intl.NumberFormat(
            navigator.language || window.navigator.language,
            {
                style: "currency",
                currency: "INR",
            }
        ).format(this.price)}`;
        this.element.appendChild(p);
        p = document.createElement("p");
        p.style.fontSize = "10px";
        p.innerHTML = this.date.toDateString();
        this.element.appendChild(p);
    }

    get HtmlElement(): HTMLElement {
        return this.element;
    }

    test(): void {
        document.getElementById(this.id).style.background = 'white';
    }
}


class InitialAmountInput {
    static initialAmountElementShown: boolean = false;
    static saveButtonClicked: boolean = false;

    private static amountInputTemplate = `
                    <div class="initialAmountBox">
                    <p>₹</p>
                    <input type="number" id="amountElement" placeholder="Initial amount"/>
                    </div>
                    <div id="saveButton1" onclick="InitialAmountInput.amountPopIn()">Save</div>
`;

    static amountPopOut() {
        if (!this.initialAmountElementShown) {
            document.getElementById("initialAmount").innerHTML =
                this.amountInputTemplate;
            this.initialAmountElementShown = true;
            (<HTMLInputElement>(
                document.getElementById("amountElement")
            )).value = `${Leger.initialBalance}`;
        }
    }

    static amountPopIn() {
        const stuff: HTMLInputElement = <HTMLInputElement>(
            document.getElementById("amountElement")
        );
        
        if (stuff.value.length) {
            Leger.initialBalance = Number.parseFloat(stuff.value);
        }
        const initialAmountElement = document.getElementById("initialAmount");
        if (Leger.initialBalance === undefined) {
            initialAmountElement.innerHTML = `
            <p id="opener" onclick="InitialAmountInput.amountPopOut()" style="width:100%">
            press to enter initial balance
            </p>
            `;
        } else {
            initialAmountElement.innerHTML = `
            <div id="opener" onclick="InitialAmountInput.amountPopOut()" style="width:100%">
            <p>Initial Amount</p> <p style="margin:0%;font-size:27px">&nbsp;₹${Leger.initialBalance}</p>
            </div>
            `;
        }
        this.initialAmountElementShown = false;
    }
}



