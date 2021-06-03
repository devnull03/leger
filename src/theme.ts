interface Config {
    addButtonColor: string;
    frameColor: string;
    bodyColor: string;
    initialAmountBackground: string;
    itemBackground: string;
    fontColor: string;
    addButtonFontColor: string;
    themeButtonColor: string;
}
enum Theme {
    dark,
    light
}


class ThemeManager {
    static currentTheme: Theme = Theme.dark;
    static lightModeConfig: Config = {
        addButtonColor: "#7719AB",
        frameColor: "#FFFFFF",
        bodyColor: "#FBFBFB",
        initialAmountBackground: "#E5F9E0",
        itemBackground: "#E1F1FF",
        fontColor: "black",
        addButtonFontColor: "white",
        themeButtonColor: "#212121",
    };
    static darkModeConfig: Config = {
        addButtonColor: "#bfaae3",
        frameColor: "#212121",
        bodyColor: "black",
        initialAmountBackground: "#4f4f4f",
        itemBackground: "#4f4f4f",
        fontColor: "white",
        addButtonFontColor: "black",
        themeButtonColor: "white",
    };

    static frame: Array<HTMLElement> = [
        document.getElementById("header"),
        document.getElementById("footer"),
    ];

    static body: HTMLElement = document.getElementsByTagName("body").item(0);
    static addButton: HTMLElement = document.getElementById("addButton");
    static holder: HTMLElement = document.getElementById("holder");
    static themeButton: HTMLElement = document.getElementById("themeButton");
    static valueInputdiv: HTMLElement = document.getElementById("valueInput");

    static switchTheme(): void {
        switch (this.currentTheme) {
            case Theme.dark:
                this.currentTheme = Theme.light;
                this.changeTheme(this.lightModeConfig);
                break;

            case Theme.light:
                this.currentTheme = Theme.dark;
                this.changeTheme(this.darkModeConfig);
                break;
            default:
                break;
        }
    }
    private static changeTheme(config: Config): void {
        this.frame.forEach((element) => {
            element.style.backgroundColor = config.frameColor;
        });
        this.body.style.backgroundColor = config.bodyColor;
        this.body.style.color = config.fontColor;

        const items: Element[] = Array.from(
            document.getElementsByClassName("thing")
        );

        for (let element of items) {
            console.log(element);
            
            const id = element.id;
            if ((this.currentTheme === Theme.light) && !(id === "initialAmount")) {
                // console.log(ThingHolder.allItems.get(element.id), ThingHolder.allItems, element.id);

                (<HTMLElement>element).style.backgroundColor =
                    lightModeBackground.get(ThingHolder.allItems.get(element.id).color);
                    

            } else {
                (<HTMLElement>element).style.backgroundColor =
                    config.itemBackground;
            }
        }

        this.addButton.style.backgroundColor = config.addButtonColor;
        this.themeButton.style.backgroundColor = config.themeButtonColor;
        this.addButton.style.color = config.addButtonFontColor;
        document.getElementById("initialAmount").style.backgroundColor =
            config.initialAmountBackground;
    }
}

ThemeManager.switchTheme();

ThemeManager.themeButton.addEventListener('click', event => {
    ThemeManager.switchTheme();
})