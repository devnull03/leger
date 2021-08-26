import React, { useRef, useState } from "react";
import "./App.css";
import { Info, setItem } from "./Database";

interface Props {
    purpose: "new" | "edit";
}

export const InputDialog: React.FC<Props> = (props) => {
    const valueInputdiv = useRef<HTMLDivElement>(null);

    const [itemName, setItemName] = useState<string>("");
    const [itemCost, setItemCost] = useState<string>("");

    return (
        <div className="valueInput" ref={valueInputdiv}>
            <div className="itemInfo">
                <input
                    type="text"
                    id="itemName"
                    onChange={(event) => {
                        setItemName(event.target.value);
                    }}
                    placeholder="item"
                />
                <div className="itemCostDiv">
                    <div id="currency">₹</div>
                    <input
                        type="number"
                        id="itemCost"
                        onChange={(event) => {
                            setItemCost(event.target.value);
                        }}
                        placeholder="cost"
                    />
                </div>
            </div>
            <div className="valueInputButtons">
                <div id="saveButton" onClick={() => {
                    const info: Info = {
                        name: itemName,
                        cost: Number.parseFloat(itemCost),
                        date: new Date()
                    };
                    setItem(info);
                    console.log(info);
                }}>Save</div>
                {props.purpose === "edit" && (
                    <div id="deleteButton">Delete</div>
                )}
            </div>
        </div>
    );
};
