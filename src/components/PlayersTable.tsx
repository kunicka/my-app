import React, { useState, useRef } from "react";
import playersArray from "./Players.json";

export interface ColorProps {
  color: string;
}

export interface Player {
  id: number;
  username: string;
  points: number;
}

export interface newPlayerProps {
  id: number;
  username: string;
  points: number;
}

export const PlayersTable:React.FC<ColorProps>  = (props, children: any) => {
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [newPlayerId, setNewPlayerId] = useState<number>(11);
  const [newPlayer, setNewPlayer] = useState<Player>({
    id: newPlayerId,
    username: newPlayerName,
    points: 0,
  });
  const [newArray, setNewArray]=useState([]);

  const addPlayer: () => void = () => {
    const points = Math.floor(Math.random() * 200) + 1;
    setNewPlayer({
      id: newPlayer.id,
      username: newPlayer.username,
      points: points,
    });
    setNewPlayerId((prevNewPlayerId) => prevNewPlayerId + 1);
    const functionArray = [...newArray, newPlayer];
    
    }
  };

  const sumOfPoints: number = playersArray.reduce(
    (previousScore, currentScore, index) => previousScore + currentScore.points,
    0
  );

  const pointsAverage: number = playersArray.reduce(
    (previousScore, currentScore, index) =>
      (previousScore + currentScore.points) / playersArray.length,
    0
  );
  const shorterAverage = pointsAverage.toFixed(2);

  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <>
        <input
          ref={nameRef}
          placeholder="Enter the name if the player"
          onChange={(e) => setNewPlayerName(e.target.value)}
          type="text"
        />
        <button onClick={addPlayer}>add a new Player and see the score</button>
      </>
      <table>
        <tr>
          <th>Username</th> <th>Points</th>
        </tr>
        <tbody>
          {playersArray.map((player: Player, index: number) => (
            <tr
              key={player.id}
              style={
                player.points > 100
                  ? { color: "white", backgroundColor: props.color }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              {/* <td>{player.username}</td> <td>{player.points}</td> 
              mapping newArray method!*/}
            </tr>
          ))}

          <tr>
            <td>{newPlayer.username}</td>
            <td>{newPlayer.points}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th> <th>{sumOfPoints}</th>
          </tr>
          <tr>
            <th>Average</th> <th>{shorterAverage}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
