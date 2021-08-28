import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { getAllItems, getMoney, Info, setItem, setMoney } from "./Database";

const Colors = [
    { borderColor: "#CDE9FF", backgroundColor: "#E1F1FF", name: "AQUA" },
    { borderColor: "#AFEDA4", backgroundColor: "#E5F9E0", name: "GREEN" },
    { borderColor: "#FEF2AD", backgroundColor: "#FFF7E2", name: "YELLOW" },
    { borderColor: "#FECCE5", backgroundColor: "#FFE5F2", name: "PINK" },
    { borderColor: "#E0B4FF", backgroundColor: "#F2E6FE", name: "LAVENDER" },
    { borderColor: "#CCCCCC", backgroundColor: "#F9F9F9", name: "GRAY" },
    // { trim: "#3D3D3D", background: "#4F4F4F", name: "BLACK" },
];

const App: React.FC = () => {
    const [pressed, setPressed] = useState<"y" | "n">("n");
    const [pressPurpose, setPressPurpose] = useState<"new" | "edit">("new");
    const [initialAmount, setInitialAmount] = useState<number | null>(
        getMoney()
    );
    const [amountInputOpen, setAmountInputOpen] = useState<"y" | "n">("n");
    const [tempAmount, setTempAmount] = useState<number>();
    const [allItems, setAllItems] = useState<Array<Info>>(getAllItems());

    const [remainingMoney, setRemainingMoney] = useState<number | null>(null);
    const updateList = () => {
        setAllItems(getAllItems());
    };

    useEffect(() => {
        initialAmount && setMoney(initialAmount);
        let temp: number = 0;
        allItems.forEach((element) => {
            temp += element.cost;
        });
        initialAmount && setRemainingMoney(initialAmount - temp);
    }, [initialAmount, allItems]);

    const [itemName, setItemName] = useState<string>("");
    const [itemCost, setItemCost] = useState<string>("");

    return (
        <div className="App">
            {pressed === "y" && (
                <div className="valueInput">
                    <div className="itemInfo">
                        <input
                            type="text"
                            id="itemName"
                            onChange={(event) => {
                                setItemName(event.target.value);
                            }}
                            placeholder="item"
                            value={itemName}
                            autoComplete="off"
                        />
                        <div className="itemCostDiv">
                            <div id="currency">₹</div>
                            <input
                                type="number"
                                id="itemCost"
                                onChange={(event) => {
                                    setItemCost(event.target.value);
                                }}
                                value={itemCost}
                                placeholder="cost"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="valueInputButtons">
                        <div
                            id="saveButton"
                            onClick={() => {
                                const info: Info = {
                                    name: itemName,
                                    cost: Number.parseFloat(itemCost),
                                    date: new Date(),
                                    color: Math.floor(Math.random() * 7),
                                };
                                itemName && itemCost && setItem(info);
                                setPressed("n");
                                updateList();
                            }}
                        >
                            Save
                        </div>
                        {pressPurpose === "edit" && (
                            <div
                                id="deleteButton"
                                onClick={() => {
                                    setPressed("n");
                                }}
                            >
                                Delete
                            </div>
                        )}
                    </div>
                </div>
            )}
            <main>
                <header id="header">
                    <p>LEGER</p>
                    {/* <div className="themeChanger" id="themeButton"></div> */}
                </header>
                <div id="holder">
                    {/* Initial amount element start */}
                    {!initialAmount && amountInputOpen === "n" && (
                        <div id="initialAmount">
                            <p
                                id="opener"
                                onClick={() =>
                                    setAmountInputOpen(
                                        amountInputOpen === "n" ? "y" : "n"
                                    )
                                }
                            >
                                press to enter initial balance
                            </p>
                        </div>
                    )}
                    {amountInputOpen === "y" && (
                        <div id="initialAmount">
                            <div className="initialAmountBox">
                                <p>₹</p>
                                <input
                                    type="number"
                                    id="amountElement"
                                    placeholder="Initial amount"
                                    defaultValue={initialAmount?.toString()}
                                    value={tempAmount}
                                    onChange={(e) =>
                                        setTempAmount(
                                            Number.parseFloat(
                                                e.target.value.toString()
                                            )
                                        )
                                    }
                                    autoFocus
                                    autoComplete="off"
                                />
                            </div>
                            <div
                                id="saveButton1"
                                onClick={() => {
                                    tempAmount && setInitialAmount(tempAmount);
                                    setAmountInputOpen("n");
                                    updateList();
                                }}
                            >
                                Save
                            </div>
                        </div>
                    )}
                    {initialAmount && amountInputOpen === "n" && (
                        <div id="initialAmount">
                            <div
                                id="opener"
                                onClick={() =>
                                    setAmountInputOpen(
                                        amountInputOpen === "n" ? "y" : "n"
                                    )
                                }
                            >
                                <p>Initial Amount</p>
                                <p
                                    style={{
                                        margin: "0%",
                                        fontSize: "27px",
                                    }}
                                >
                                    &nbsp;₹{initialAmount}
                                </p>
                            </div>
                        </div>
                    )}
                    {/* Initial amount element end */}
                    {/* <Thing name="test" cost={90} date={new Date()} color={3} /> */}
                    {allItems.map((info) => (
                        <div
                            className="thing"
                            style={Colors[info.color]}
                            key={info.id}
                        >
                            {/* {console.log(info)} */}
                            <p className="nameAndPrice">
                                {info.name} <br />
                                <br />₹{info.cost}
                            </p>
                            <p className="date" style={{ fontSize: "10px" }}>
                                {new Date(info.date).toDateString()}
                            </p>
                        </div>
                    ))}
                </div>
                <div
                    className="addButton"
                    id="addButton"
                    onClick={() => {
                        setPressed(pressed === "n" ? "y" : "n");
                        setPressPurpose("new");
                    }}
                >
                    +
                </div>
                <footer id="footer">
                    remaining balance &nbsp;
                    <p id="currentBalance">₹{remainingMoney}</p>
                </footer>
            </main>
        </div>
    );
};

export default App;
