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

class ThemeManager {
     static currentTheme: string = "dark";
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
      static changeTheme(config: Config): void {
         this.frame.forEach((element) => {
             element.style.backgroundColor = config.frameColor;
         });
         this.body.style.backgroundColor = config.bodyColor;
         this.body.style.color = config.fontColor;
 
         const items: Element[] = Array.from(document.getElementsByClassName("thing"));
 
         for (let element of items) {
              (<HTMLElement>element).style.backgroundColor = config.itemBackground;
          }
  
          this.addButton.style.backgroundColor = config.addButtonColor;
          this.themeButton.style.backgroundColor = config.themeButtonColor;
          this.addButton.style.color = config.addButtonFontColor;
          document.getElementById("initialAmount").style.backgroundColor =
              config.initialAmountBackground;
      }
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                