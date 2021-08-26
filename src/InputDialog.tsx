import React, { useRef, useState } from "react";
import "./App.css";

export const InputDialog: React.FC = () => {
  const valueInputdiv = useRef<HTMLDivElement>(null);

  const [itemName, setItemName] = useState<string>("");
  const [itemCost, setItemCost] = useState<string>("");

  return (
    // <div className="container" ref={container}>
      <div className="valueInput" ref={valueInputdiv}>
        <div className="itemInfo">
          <input
            type="text"
            id="itemName"
            onChange={(event) => {
              setItemName(event.target.value);
              console.log(event.target.value, itemName);
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
                console.log(event.target.value, itemCost);
              }}
              placeholder="cost"
            />
          </div>
        </div>
        <div className="valueInputButtons">
          <div id="saveButton">Save</div>
          <div id="deleteButton">Delete</div>
        </div>
      </div>
    // </div>
  );
};
