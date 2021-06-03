
class ThingHolder {
    static holder: HTMLElement = document.getElementById("holder");


    static creatNewItem(data: InputValues): void {
        let newThing: Thing = new Thing(data.name, data.price, TrimColors.BLACK);
        Leger.allItems.set(
            newThing.date.getTime().toString(),
            newThing
        );
        this.holder.appendChild(
            newThing.HtmlElement
        );
    }
    static get allItems(): Map<string, Thing> {
        return Leger.allItems;
    }
    
}

