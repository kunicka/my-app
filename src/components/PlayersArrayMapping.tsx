import React from 'react'
import {Player} from "./PlayersTable"


export interface IplayerListAndColor {
    highlightcolor?:string;
    playersList: Player[];
    setPlayersList: React.Dispatch<React.SetStateAction<Player[]>>
}

export const PlayersArrayMapping:React.FC<IplayerListAndColor> = ({highlightcolor, playersList, setPlayersList}) => {
    
    return (
        <>
        <thead><tr><th>Username</th><th>Points</th></tr>
        </thead>
        <tbody>
          {playersList.map((player) => (
            <tr
              key={player.id}
              style={
                player.points > 100
                  ? { color: "white", backgroundColor: highlightcolor }
                  : { color: "black", backgroundColor: "white" }
              }
            ><td>{player.username}</td><td>{player.points}</td>
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
        </>
    )
}
