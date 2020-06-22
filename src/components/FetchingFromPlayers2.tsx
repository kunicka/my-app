import React, {useState} from 'react'
// import {Player} from "./PlayersTable"
import {Color} from "./PlayersTable"

export const Component:React.FC<Color> = ({highlightcolor}) => {

const [message, setMessage]=useState("message");


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const value = e.target.value;
console.log(value);
fetch(`http://numbersapi.com/${value}/year?json`)
.then(res => {
  if (res.ok) {
    return res
  } throw Error ("błąd");
})
.then(res => res.json())
.then(data => setMessage(data.text))
.catch(err => console.log(err))
}



//     const [jsonPlayers, setJsonPlayers] = useState<Player[]>([])
//     const [loaded, setLoaded] = useState(false); //flagowanie, bo fetchowanie trwa

//   const fetchPlayers = async () => {
//     const data = await fetch ("./Players2.json");
//     const players = await data.json();
//     console.log(players);
//     setJsonPlayers(players);
//     console.log(jsonPlayers);
//     setLoaded(true)
// }

//   useEffect (()=>{
//       fetchPlayers();
//   })

    return (
        <div>

        <label id="message">Label</label>
        <input type="text" name="message" onChange={handleChange}/>
        <p>Odpowiedź: {message}</p>
      


        {/* {loaded ? ( jsonPlayers.map((player) => (
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
          ))): "Trwa ładowanie nowej listy graczy..."} */}
        </div>
        )
}
