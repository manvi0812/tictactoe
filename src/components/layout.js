import React, { useState, useEffect } from "react";
import "../styles.css";

export const Layout = ({
  turn,
  setTurn,
  layoutPositions,
  winningPossibilities
}) => {
  console.log(turn, "2");

  const [sign, setSign] = useState("");
  const [xPositions, setXPositions] = useState([]);
  const [yPositions, setYPositions] = useState([]);

  const handleClick = (position) => {
    console.log(position, "hey");

    if (turn) {
      const newXPosition = [...xPositions, position];
      setXPositions(newXPosition);
      setSign("X");
    } else {
      const newYPosition = [...yPositions, position];
      setYPositions(newYPosition);
      setSign("O");
    }
    setTurn(!turn);
  };

  const compareXpositions = () => {
    winningPossibilities.map((pos) => {
      return(

        {JSON.stringify(pos.combo) === JSON.stringify(xPositions) ? true : false}
      )
    });
  };

  useEffect(() => {
    compareXpositions();
  }, [winningPossibilities, xPositions]);

  console.log(xPositions, "x");
  console.log(yPositions, "y");

  return (
    <div className="layout">
      {layoutPositions.map((position) => {
        return (
          <div className="box" onClick={() => handleClick(position)}>
            {xPositions.includes(position) ? <p>X</p> : ""}
            {yPositions.includes(position) ? <p>O</p> : ""}
          </div>
        );
      })}
    </div>
  );
};
