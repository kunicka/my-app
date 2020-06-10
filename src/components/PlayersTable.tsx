import React, {useRef, useState, PropsWithChildren} from "react";
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

export const PlayersTable:(
    props: PropsWithChildren<Color>, 
    children: any) 
    => any = (props, children: any) => {

const [playersList, setPlayersList] = useState<Array<Player>>(playersArray);

  let id = 0;

  const addPlayer = () => {
    const points = Math.floor(Math.random() * 200) + 1;
    id++;

    const Player = {
        id:id,
        username: nameRef.current?.value,
        points: points
    }

    const newArray = [
        ...playersList,
        Player
      ];

      type newArray = Player[];

    //   setPlayersList(newArray);
    // druga opcja, ale też wyskakuje błąd:     setPlayersList([...playersList, Player]);
    //trzecia opcja concat:                     setPlayersList(playersList.concat(Player));
    // setPlayersList(playersList=>[...playersList, Player]);

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
          id="name-id"
        />
        <button onClick={addPlayer}>add a new Player and see the score</button>
      </>
      <table>
          <thead>
        <tr>
          <th>Username</th> <th>Points</th>
        </tr>
        </thead>
        <tbody>
          {playersList.map((player) => (
            <tr
              key={player.id}
              style={
                player.points > 100
                  ? { color: "white", backgroundColor: props.color }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              <td>{player.username}</td> <td>{player.points}</td>
              <td><button onClick={(e)=>{playersList.splice(player.id-1, 1)}}>Delete</button></td>
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

