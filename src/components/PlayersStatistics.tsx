import React from 'react'
import {Player} from "./PlayersTable";

//  1) przekazywanie tablicy jako propsa : type playersArray = Array<Player> | 'IntrinsicAttributes & Player[] & { children?: ReactNode; }'; typowanie propsow, kiedy typowac children?

// 2) komponent PlayersTable (handleClick) - czy musi byc taki typ?

// 3) wydzielanie komponentów - html - na przykladzie PlayersStatistics

// 4) ostatni punkt zadania

// 5) OK : jak zrobic aby sie value resetowało w inpucie (PlayersStaistics) -> na koncu funckji, po dodaniu obiektu, zaktualizowac stan name na pustego stringa + value inputu = {name}

// 6) {name && <p>To jest Twoje imię: {name}</p>} - czy przeszło by to z name jako stanem

//<form><input/> + LABEL!!!! checkbox, radio, focus (napis ktory jest label zaznacza mi sie checkbox) <div>{name && <p>nie mail: {name}</p>}</div></form>

//7) dlaczego color jest elementem JSX? i jak zrobic zeby byl stringiem? i jesli zmienimy go jako stringa, dalej bedzie to komponent kontrolowany? - dla number - parseint(wartosc), dla float - parsefloat(wartosc), dla stringa?


export interface IplayersList {
  playersList: Player[]
}

export const PlayersStatistics:React.FC<IplayersList> = ({playersList}) => {
    const sumOfPoints: number = playersList.reduce(
        (previousScore, currentScore, index) => previousScore + currentScore.points,
        0
      );
    
      const pointsAverage: number = playersList.reduce(
        (previousScore, currentScore, index) =>
          (previousScore + currentScore.points) / playersList.length,
        0
      );
      const shorterAverage = pointsAverage.toFixed(2);
    return (
        <>
           <tfoot>
          <tr>
            <th>Total</th><th>{sumOfPoints}</th>
          </tr>
          <tr>
            <th>Average</th><th>{shorterAverage}</th>
          </tr>
        </tfoot> 
        </>
    )
}
