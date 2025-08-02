import React from "react";

const T20players = ["Kohli", "Rohit", "Surya"];
const RanjiPlayers = ["Pujara", "Rahane", "Jadeja"];
const allPlayers = [...T20players, ...RanjiPlayers]; // Merged array

const IndianPlayers = () => {
  const oddTeam = allPlayers.filter((_, i) => i % 2 !== 0);
  const evenTeam = allPlayers.filter((_, i) => i % 2 === 0);

  return (
    <div>
      <h2>Merged Player List</h2>
      <ul>
        {allPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
