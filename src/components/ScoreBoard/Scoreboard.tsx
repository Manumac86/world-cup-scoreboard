import React from "react";

export interface ScoreboardProps {
  label: string;
}

const Scoreboard = (props: ScoreboardProps) => {
  return <input placeholder={props.label}></input>;
};

export default Scoreboard;