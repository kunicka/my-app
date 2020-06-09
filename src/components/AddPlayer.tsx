import React, { useState } from "react";
import playersArray from "./Players.json";

export const AddPlayer: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [newPlayerId, setNewPlayerId] = useState<number>(11);

  const addPlayer: () => void = () => {
    const points = Math.floor(Math.random() * 200) + 1;

    const next = {
      id: newPlayerId,
      username: name,
      points: points,
    };

    const newPlayer = JSON.stringify(next, null, 2);
    console.log(newPlayer);

    playersArray.push(next);
    setNewPlayerId((prevNewPlayerId) => prevNewPlayerId + 1);
  };

  return (
    <>
      <input
        placeholder="Enter the name if the player"
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={addPlayer}>add a new Player and see the score</button>
      <table>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
};
