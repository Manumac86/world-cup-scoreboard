import React from "react";

export interface ScoreboardProps {
  label: string;
}

const Scoreboard = (props: ScoreboardProps) => {
  return <button>{props.label}</button>;
};

export default Scoreboard;