import React, {useState, useEffect} from "react";
import "./App.css";
import playersArray from "./components/Players";

export interface Player {
  id:number,
  username:string,
  points:number,
}


export const App: React.FC = () => {

  const [highlightcolor, setHightlightcolor] = useState("red")
  const playersArrayList = playersArray.map((player:any, index:number) => (
    <tr 
    key={player.id} 
    style ={{
    backgroundColor:player.points>100?highlightcolor:'white',
    color:player.points>100?'white':'black'}}  >
     <td>{player.username}</td> <td>{player.points}</td>
     </tr>
    ));

    const setStylePoints=(color:string):void => {
      setHightlightcolor(color);
    }

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

