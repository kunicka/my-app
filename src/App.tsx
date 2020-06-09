import React, { useState } from "react";
import "./App.css";
import { AddPlayer } from "./components/AddPlayer";
import { PlayersTable } from "./components/PlayersTable";
import Player from "./components/PlayersTable";

export const App: React.FC = () => {
  const [highlightcolor, setHightlightcolor] = useState("red");

  const [newPlayerName, setNewPlayerName] = useState<string>("")
  const [newPlayerId, setNewPlayerId] = useState<number>(11);
  const [newPlayer, setNewPlayer] = useState<Player>({
    id: newPlayerId,
    username: newPlayerName,
    points: 0,
  });

  const addPlayer: () => void = () => {
    const points = Math.floor(Math.random() * 200) + 1;

    setNewPlayer({
      id: newPlayer.id,
      username: newPlayer.username,
      points: points,
    });

    setNewPlayerId((prevNewPlayerId) => prevNewPlayerId + 1);
  };

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
      <>
        <input
          placeholder="Enter the name if the player"
          onChange={(e) => setNewPlayerName(e.target.value)}
          type="text"
        />
        <button onClick={addPlayer}>add a new Player and see the score</button>
      </>

      <PlayersTable color={highlightcolor} newPlayer={newPlayer} />
      <AddPlayer />
    </div>
  );
};
