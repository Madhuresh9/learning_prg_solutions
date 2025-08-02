import React from "react";

const players = [
  { name: "Virat", score: 92 },
  { name: "Rohit", score: 88 },
  { name: "Rahul", score: 67 },
  { name: "Shubman", score: 45 },
  { name: "Iyer", score: 71 },
  { name: "Pant", score: 50 },
  { name: "Hardik", score: 75 },
  { name: "Jadeja", score: 80 },
  { name: "Shami", score: 30 },
  { name: "Bumrah", score: 60 },
  { name: "Ashwin", score: 40 },
];

const ListOfPlayers = () => {
  const lowScorers = players.filter(p => p.score < 70);
  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
      <h2>Players with score &lt; 70</h2>
      <ul>
        {lowScorers.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
