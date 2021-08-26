import React, { useState } from "react";
import "./App.css";
import { InputDialog } from "./InputDialog";


export const App: React.FC = () => {
    const [pressed, setPressed] = useState<'y' | 'n'>("n");
    const [pressPurpose, setPressPurpose] = useState<'new' | 'edit'>("new");

    return (
        <div className="App">
            {pressed === "y" && <InputDialog purpose={pressPurpose} />}
            <main>
                <header id="header">
                    <p>LEGER</p>
                    <div className="themeChanger" id="themeButton"></div>
                </header>
                <div id="holder">
                    <div id="initialAmount">
                        <p id="opener">press to enter initial balance</p>
                    </div>
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

