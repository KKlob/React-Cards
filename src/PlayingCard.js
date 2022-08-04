import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from './hooks';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };

  const [isFacingUp, toggleIsFacingUp] = useFlip(true);

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
