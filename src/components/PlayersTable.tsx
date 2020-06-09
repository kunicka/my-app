import React from 'react'
import playersArray from "./Players";
import Player from "./Players"

export interface ColorProps{
    color:string;
}

export const PlayersTable:React.FC<ColorProps> = (props) => {

      const sumOfPoints:number = playersArray.reduce((previousScore, currentScore, index)=>previousScore+currentScore.points, 0);
    
      const pointsAverage:number = playersArray.reduce((previousScore, currentScore, index)=>((previousScore+currentScore.points)/playersArray.length), 0);
      
      const shorterAverage = pointsAverage.toFixed(2);
    return (
        <div>
             <table>
        <tr>
          <th>Username</th> <th>Points</th>
        </tr>
        {playersArray.map((player:any, index:number) => ( <tr key={player.id} 
        style ={player.points>100? 
            {color:'white', backgroundColor:props.color}:
            {color:'black', backgroundColor:"white"}}>
         <td>{player.username}</td> <td>{player.points}</td>
         </tr>))}
        <tr>
        <th>Total</th> <th>{sumOfPoints}</th>
        </tr>
        <tr>
        <th>Average</th> <th>{shorterAverage}</th>
        </tr>
      </table>
        </div>
    )
}
