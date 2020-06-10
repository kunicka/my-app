import React, { useState, PropsWithChildren } from "react";
import playersArray from "./Players.json";

export interface Color {
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

export const PlayersTable: (
  props: PropsWithChildren<Color>,
  children: any
) => any = (props, children: any) => {
  const [playersList, setPlayersList] = useState<Array<Player>>(playersArray);
  const [name, setName] = useState("");

  let id = 1;

  const addPlayer = () => {
    const points = Math.floor(Math.random() * 200) + 1;
    
    const Player = {
      id: id,
      username: name,
      points: points,
    };
    setPlayersList([...playersList, Player]);
    id++;
};

    // const newArray = [
    //     ...playersList,
    //     Player
    //   ];

    //   type newArray = Player[];

    //   function Example() {
    //     const [theArray, setTheArray] = useState([]);
    //     const addEntryClick = () => {
    //         setTheArray([...theArray, `Entry ${theArray.length}`]);
    //     };
    //     return [
    //         <input type="button" onClick={addEntryClick} value="Add" />,
    //         <div>{theArray.map(entry =>
    //           <div>{entry}</div>
    //         )}
    //         </div>
    //     ];
    // }

    //   setPlayersList(newArray);
    // druga opcja, ale też wyskakuje błąd:     setPlayersList([...playersList, Player]);
    //trzecia opcja concat:                     setPlayersList(playersList.concat(Player));
    // setPlayersList(playersList=>[...playersList, Player]);
  

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

  return (
    <div>
      <>
        <input
          placeholder="Enter the name if the player"
          type="text"
          onChange={(e) => setName(e.target.value)}
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
              <td>
                <button
                  onClick={(e) => {
                    setPlayersList((prevState) => ([...prevState.slice(0,player.id-1), ...prevState.slice(player.id)]
                      ))
                  }}
                >
                  Delete
                </button>
              </td>
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
