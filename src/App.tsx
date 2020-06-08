import React, {useState} from "react";
import "./App.css";
import playersArray from "./components/Players";


export const App: React.FC = () => {

  const playersArrayList = playersArray.map((player:any, idx:number) => (
    <tr 
    key={player.id} 
    style={{
      backgroundColor:player.points>100?'red':'white',
      color:player.points>100?'white':'black'}}
      >
     <td>{player.username}</td> <td>{player.points}</td>
     </tr>
    ));

  


  const sumOfPoints:number = playersArray.reduce((previousScore, currentScore, index)=>previousScore+currentScore.points, 0);

  const pointsAverage:number = playersArray.reduce((previousScore, currentScore, index)=>((previousScore+currentScore.points)/playersArray.length), 0);
  
  const shorterAverage = pointsAverage.toFixed(2);
  return (
    <div className="App">
      <table>
        <tr>
          <th>Username</th> <th>Points</th>
        </tr>
        {playersArrayList}
        <tr>
        <th>Total</th> <th>{sumOfPoints}</th>
        </tr>
        <tr>
        <th>Average</th> <th>{shorterAverage}</th>
        </tr>
      </table>
    </div>
  );
};

