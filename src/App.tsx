import React, { useState } from "react";
import "./App.css";
import { AddPlayer } from "./components/AddPlayer";
import { PlayersTable } from "./components/PlayersTable";


export const App: React.FC = () => {
  const [highlightcolor, setHightlightcolor] = useState("red");
  return (
    <div className="App">
      <button
        onClick={(e) => {
          setHightlightcolor("Blue");
        }}
      >
        Blue
      </button>
      <button
        onClick={(e) => {
          setHightlightcolor("Red");
        }}
      >
        Red
      </button>
      

      <PlayersTable color={highlightcolor}/>
      <AddPlayer />
    </div>
  );
};
