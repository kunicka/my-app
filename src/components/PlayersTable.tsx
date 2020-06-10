import React, {useRef, PropsWithChildren } from "react";
import playersArray from "./Players.json";

export interface Color {
  color: string 
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

export const PlayersTable:(props: PropsWithChildren<Color>, children: any) => any = (props, children: any) => {

  let id = 10;

 let newArray: { id: number; username: string | undefined; points: number; }[] =[];

  const addPlayer = () => {
    const points = Math.floor(Math.random() * 200) + 1;
    id++;

    const Player = {
        id:id,
        username: nameRef.current?.value,
        points: points
    }
    
    newArray.push(Player);
    console.log(newArray)
    return newArray
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
              <td>{player.username}</td> <td>{player.points}</td>
              
            </tr>
          ))}
          {newArray.map((player) => (
            <tr
              key={player.id}
              style={
                player.points > 100
                  ? { color: "white", backgroundColor: props.color }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              <td>{player.username}</td> <td>{player.points}</td>
            </tr>
          ))}
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

