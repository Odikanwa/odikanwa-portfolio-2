import React from "react";
import "../styles/playerStats.css";
import { useTypingEffect } from "../hooks/typing-effect";

const PlayerStats = () => {
  const text = useTypingEffect("Fullstack Developer >> 70%", 50);
  const text2 = useTypingEffect("MICHAEL ODIKANWA", 100);
  return (
    <div id="playerStats">
      <h1>{text2}</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>{text}</h2>
    </div>
  );
};

export default PlayerStats;
