import React, {useEffect, useState} from 'react'
import {Player} from "./PlayersTable"
import {Color} from "./PlayersTable"

export const Component:React.FC<Color> = ({highlightcolor}) => {
    const [jsonPlayers, setJsonPlayers] = useState<Player[]>([])
    const [loaded, setLoaded] = useState(false); //flagowanie, bo fetchowanie trwa

  const fetchPlayers = async () => {
    const data = await fetch ("./Players2.json");
    const players = await data.json();
    console.log(players);
    setJsonPlayers(players);
    console.log(jsonPlayers);
    setLoaded(true);
}

  useEffect (()=>{
      fetchPlayers();
  })

    return (
        <div>
           
        {loaded ? ( jsonPlayers.map((player) => (
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
                    setJsonPlayers((prevState) => ([...prevState.slice(0,player.id-1), ...prevState.slice(player.id)]
                      ))
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))): "Trwa ładowanie nowej listy graczy..."}
        
        
        </div>
        )
}
