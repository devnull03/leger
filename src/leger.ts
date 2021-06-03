enum Purpose {
    new,
    edit,
}

class Leger {
    static initialBalance: number;
    static currentBalance: number;
    static remaningBalanceElement: HTMLElement = document.getElementById("currentBalance");

    static allItems: Map<string, Thing> = new Map();

    static inputPurpose: Purpose.edit | Purpose.new = Purpose.new;
    static currentEditing: HTMLElement;
    static currencyFormater: Intl.NumberFormat = new Intl.NumberFormat(
        navigator.language || window.navigator.language,
        {
            style: "currency",
            currency: "INR",
        }
    );

    static updateBalance(): void {
        let spent: number = 0;
        this.allItems.forEach(element => {
            spent += element.price;
        });
        this.currentBalance = this.initialBalance - spent
        this.remaningBalanceElement.innerHTML = this.currencyFormater.format(this.currentBalance);
    }
}
