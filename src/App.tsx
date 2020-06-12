import React, { useState } from "react";
import "./App.css";
import { PlayersTable } from "./components/PlayersTable";
import { Component } from "./components/FetchingFromPlayers2";
import { ChangeColorButtons } from "./ChangeColorButtons";

export const App: React.FC = () => {
  const [highlightcolor, setHightlightcolor] = useState("red");
  return (
    <>
      <ChangeColorButtons setHightlightcolor={setHightlightcolor} />
      <PlayersTable highlightcolor={highlightcolor} />
      <Component highlightcolor={highlightcolor} />
    </>
  );
};
