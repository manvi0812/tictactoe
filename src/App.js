import React, { useState } from "react";
import "./App.css";
import { Layout } from "./components/layout";

const App = () => {
  const [turn, setTurn] = useState(true);
  const winningPossibilities = [
    { combo: ["0", "1", "2"] },
    { combo: ["3", "4", "5"] },
    { combo: ["6", "7", "8"] },
    { combo: ["0", "3", "6"] },
    { combo: ["1", "4", "7"] },
    { combo: ["2", "5", "8"] },
    { combo: ["0", "4", "8"] },
    { combo: ["2", "4", "6"] }
  ];

  const layoutPositions = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  console.log(turn);

  return (
    <div className="App">
      <h2>{`Player${turn ? 1 : 2}`}</h2>
      <Layout
        turn={turn}
        setTurn={setTurn}
        layoutPositions={layoutPositions}
        winningPossibilities={winningPossibilities}
      />
    </div>
  );
};

export default App;
