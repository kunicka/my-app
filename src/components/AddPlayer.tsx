import React, { useState, ChangeEvent } from "react";
import {IplayerListAndColor} from "./PlayersArrayMapping"

export const AddPlayer: React.FC<IplayerListAndColor> = ({playersList, setPlayersList}) => {
  
  const [name, setName] = useState("");

  const addPlayer = () => {
    const id = playersList[playersList.length - 1].id + 1;
    const points = Math.floor(Math.random() * 200) + 1;
    const Player = {
      id: id,
      username: name,
      points: points,
    };
    setPlayersList([...playersList, Player]);
    setName(" ");
  };

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

  };
  return (
    <>
        <input
          id="name-input"
          placeholder="Enter the name if the player"
          type="text"
          onChange={handleClick}
          value={name}
        />
        <button style={{display:"block"}} onClick={addPlayer}>add a new Player</button>
      </>
  );
};
