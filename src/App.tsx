import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { InputDialog } from "./InputDialog";

export const App: React.FC = () => {
    const [pressed, setPressed] = useState<"y" | "n">("n");
    const [pressPurpose, setPressPurpose] = useState<"new" | "edit">("new");
    const [initialAmount, setInitialAmount] = useState<number>();
    const [amountInputOpen, setAmountInputOpen] = useState<"y" | "n">("n");
    const [tempAmount, setTempAmount] = useState<number>();


    return (
        <div className="App">
            {pressed === "y" && <InputDialog purpose={pressPurpose} />}
            <main>
                <header id="header">
                    <p>LEGER</p>
                    <div className="themeChanger" id="themeButton"></div>
                </header>
                <div id="holder">
                    {!initialAmount && (amountInputOpen === "n") && (
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
                                    value={tempAmount?.toString()}
                                    onChange={(e) =>
                                        setTempAmount(
                                            Number.parseFloat(e.target.value)
                                        )
                                    }
                                    autoFocus
                                    onBlur={() => {
                                        setAmountInputOpen('n');
                                        
                                    }}
                                />
                            </div>
                            <div
                                id="saveButton1"
                                onClick={() => {
                                    setInitialAmount(tempAmount);
                                    setAmountInputOpen("n");
                                }}
                            >
                                Save
                            </div>
                        </div>
                    )}
                    {initialAmount && (amountInputOpen === "n") && (
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
                                <p>&nbsp;₹{initialAmount}</p>
                            </div>
                        </div>
                    )}
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
                    remaining balance &nbsp;<p id="currentBalance"></p>
                </footer>
            </main>
        </div>
    );
};
