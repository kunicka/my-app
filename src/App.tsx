import React from "react";
import "./App.css";
import playersArray from "./components/Players";


export const App: React.FC = () => {

  const playersArrayList = playersArray.map((player:any, idx:any) => (
    <tr key={player.id}>
     <td >{player.username}</td> <td>{player.points}</td>
     </tr>
     
  ));

  return (
    <div className="App">
      <table>
        <tr>
          <th>Username</th> <th>Points</th>
        </tr>
        {playersArrayList}
      </table>
    </div>
  );
};

