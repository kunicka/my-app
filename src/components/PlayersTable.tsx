import React, { useState } from "react";
import playersArray from "./Players.json";
import { PlayersStatistics } from "./PlayersStatistics";
import { PlayersArrayMapping } from "./PlayersArrayMapping";
import { AddPlayer } from "./AddPlayer";

export interface Color {
  highlightcolor: string;
}

export interface Player {
  id: number;
  username: string;
  points: number;
}

export const PlayersTable: React.FC<Color> = ({ highlightcolor }) => {

  const [playersList, setPlayersList] = useState<Player[]>(playersArray);
  return (
    <div>
      <table>
        <PlayersArrayMapping
          playersList={playersList}
          setPlayersList={setPlayersList}
          highlightcolor={highlightcolor}
        />
        <PlayersStatistics playersList={playersList} />
      </table>
      <AddPlayer playersList={playersList}
          setPlayersList={setPlayersList}/>
    </div>
  );
};
