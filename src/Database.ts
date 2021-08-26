export interface Info {
    name: string;
    cost: number;
    date: Date;
}
export const setItem = (info: Info) => {
    try {
        const itemListRaw: string | null = localStorage.getItem("items");
        let itemList;
        if (itemListRaw) {
            itemList = JSON.parse(itemListRaw);
            const latestKey: number = Object.keys(itemList).length;
            console.log(latestKey);
            
            itemList[latestKey] = info;
            localStorage.setItem("items", JSON.stringify(itemList))
        } else {
            localStorage.setItem(
                "items",
                JSON.stringify({
                    0: info,
                })
            );
        }

        return [1, null] as const;
    } catch (error) {
        return [0, error] as const;
    }
};

// export const useGetAllItems = () => {
//     try {
//     } catch (error) {}
// };
