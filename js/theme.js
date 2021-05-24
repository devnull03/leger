var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ThemeManager = /** @class */ (function () {
    function ThemeManager() {
    }
    ThemeManager.switchTheme = function () {
        switch (ThemeManager.currentTheme) {
            case "dark":
                ThemeManager.changeTheme(ThemeManager.lightModeConfig);
                ThemeManager.currentTheme = "light";
                break;
            case "light":
                ThemeManager.changeTheme(ThemeManager.darkModeConfig);
                ThemeManager.currentTheme = "dark";
                break;
            default:
                break;
        }
    };
    ThemeManager.changeTheme = function (config) {
        var e_1, _a;
        ThemeManager.frame.forEach(function (element) {
            element.style.backgroundColor = config.frameColor;
        });
        ThemeManager.body.style.backgroundColor = config.bodyColor;
        ThemeManager.body.style.color = config.fontColor;
        var items = Array.from(document.getElementsByClassName("thing"));
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var element = items_1_1.value;
                element.style.backgroundColor = config.itemBackground;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1["return"])) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ThemeManager.addButton.style.backgroundColor = config.addButtonColor;
        ThemeManager.themeButton.style.backgroundColor = config.themeButtonColor;
        ThemeManager.addButton.style.color = config.addButtonFontColor;
        document.getElementById("initialAmount").style.backgroundColor =
            config.initialAmountBackground;
    };
    ThemeManager.currentTheme = "dark";
    ThemeManager.lightModeConfig = {
        addButtonColor: "#7719AB",
        frameColor: "#FFFFFF",
        bodyColor: "#FBFBFB",
        initialAmountBackground: "#E5F9E0",
        itemBackground: "#E1F1FF",
        fontColor: "black",
        addButtonFontColor: "white",
        themeButtonColor: "#212121"
    };
    ThemeManager.darkModeConfig = {
        addButtonColor: "#bfaae3",
        frameColor: "#212121",
        bodyColor: "black",
        initialAmountBackground: "#4f4f4f",
        itemBackground: "#4f4f4f",
        fontColor: "white",
        addButtonFontColor: "black",
        themeButtonColor: "white"
    };
    ThemeManager.frame = [
        document.getElementById("header"),
        document.getElementById("footer"),
    ];
    ThemeManager.body = document.getElementsByTagName("body").item(0);
    ThemeManager.addButton = document.getElementById("addButton");
    ThemeManager.holder = document.getElementById("holder");
    ThemeManager.themeButton = document.getElementById("themeButton");
    ThemeManager.valueInputdiv = document.getElementById("valueInput");
    return ThemeManager;
}());
