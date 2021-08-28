export interface Info {
    id?: number;
    name: string;
    cost: number;
    date: Date;
    color: number;
}
export const setItem = (info: Info): void => {
    try {
        const itemListRaw: string | null = localStorage.getItem("items");
        let itemList: Array<Info>;
        if (itemListRaw) {
            itemList = JSON.parse(itemListRaw);
            const latestKey: number = itemList.length;
            info.id = latestKey;
            itemList[latestKey] = info;

            // console.log(info);

            localStorage.setItem("items", JSON.stringify(itemList));
        } else {
            info.id = 0;
            localStorage.setItem("items", JSON.stringify([info]));
        }
    } catch (error) {
        console.log(error);
    }
};

export const getAllItems = (): Array<Info> => {
    try {
        const itemListRaw = localStorage.getItem("items");
        if (itemListRaw) {
            return JSON.parse(itemListRaw);
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
};

export const setMoney = (money: number): void => {
    try {
        localStorage.setItem("initialMoney", money.toString());
    } catch (error) {
        console.log(error);
    }
};

export const getMoney = (): number | null => {
    try {
        const raw = localStorage.getItem("initialMoney");
        if (raw) {
            return Number.parseFloat(raw);
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
