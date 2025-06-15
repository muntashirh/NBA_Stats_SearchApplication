/* import React, { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PlayerComparison = () => {
  const [playerOneStats, setPlayerOneStats] = useState(null);
  const [playerTwoStats, setPlayerTwoStats] = useState(null);
  const [nameOne, setNameOne] = useState("");
  const [seasonOne, setSeasonOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  const [seasonTwo, setSeasonTwo] = useState("");

  const fetchStats = async () => {
    const res1 = await axios.get(`http://localhost:8080/api/player/response`, {
      params: { name: nameOne, seasonId: seasonOne },
    });
    const res2 = await axios.get(`http://localhost:8080/api/player/response`, {
      params: { name: nameTwo, seasonId: seasonTwo },
    });
    setPlayerOneStats(res1.data[0]); // assuming it's a list
    setPlayerTwoStats(res2.data[0]);
  };

  const data = playerOneStats && playerTwoStats ? [
    {
      name: "Points",
      [nameOne]: playerOneStats.pts,
      [nameTwo]: playerTwoStats.pts,
    },
    {
      name: "Rebounds",
      [nameOne]: playerOneStats.reb,
      [nameTwo]: playerTwoStats.reb,
    },
    {
      name: "Assists",
      [nameOne]: playerOneStats.ast,
      [nameTwo]: playerTwoStats.ast,
    },
    // Add more stat categories here
  ] : [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Compare Two NBA Players</h2>

      <div className="mb-4">
        <input placeholder="Player 1 Name" value={nameOne} onChange={e => setNameOne(e.target.value)} />
        <input placeholder="Season (e.g. 2023-24)" value={seasonOne} onChange={e => setSeasonOne(e.target.value)} />
        <input placeholder="Player 2 Name" value={nameTwo} onChange={e => setNameTwo(e.target.value)} />
        <input placeholder="Season (e.g. 2023-24)" value={seasonTwo} onChange={e => setSeasonTwo(e.target.value)} />
        <button onClick={fetchStats}>Compare</button>
      </div>

      {playerOneStats && playerTwoStats && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={nameOne} fill="#8884d8" />
            <Bar dataKey={nameTwo} fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};



export default PlayerComparison;
*/
import React, { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PlayerComparison = () => {
  const [playerOneStats, setPlayerOneStats] = useState(null);
  const [playerTwoStats, setPlayerTwoStats] = useState(null);
  const [nameOne, setNameOne] = useState("");
  const [seasonOne, setSeasonOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  const [seasonTwo, setSeasonTwo] = useState("");

  const fetchStats = async () => {
    const res1 = await axios.get(`http://localhost:8080/api/player`, {
      params: { name: nameOne, seasonId: seasonOne },
    });
    const res2 = await axios.get(`http://localhost:8080/api/player`, {
      params: { name: nameTwo, seasonId: seasonTwo },
    });
    setPlayerOneStats(res1.data[0]); // assuming it's a list
    setPlayerTwoStats(res2.data[0]);
  };

  const data =
    playerOneStats && playerTwoStats
      ? [
          {
            name: "Points",
            [nameOne]: playerOneStats.pts,
            [nameTwo]: playerTwoStats.pts,
          },
          {
            name: "Rebounds",
            [nameOne]: playerOneStats.reb,
            [nameTwo]: playerTwoStats.reb,
          },
          {
            name: "Assists",
            [nameOne]: playerOneStats.ast,
            [nameTwo]: playerTwoStats.ast,
          },
        ]
      : [];

  const tableData = [
    ["Points", playerOneStats?.pts, playerTwoStats?.pts],
    ["Assists", playerOneStats?.ast, playerTwoStats?.ast],
    ["Rebounds", playerOneStats?.reb, playerTwoStats?.reb],
    ["Steals", playerOneStats?.stl, playerTwoStats?.stl],
    ["Blocks", playerOneStats?.blk, playerTwoStats?.blk],
    ["FG%", playerOneStats?.fg_pct, playerTwoStats?.fg_pct],
    ["3P%", playerOneStats?.fg3_pct, playerTwoStats?.fg3_pct],
    ["FT%", playerOneStats?.ft_pct, playerTwoStats?.ft_pct],
    ["Games Played", playerOneStats?.gp, playerTwoStats?.gp],
    ["Minutes", playerOneStats?.min, playerTwoStats?.min],
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Compare Two NBA Players</h2>

      <div className="mb-4 flex flex-col gap-2">
        <input
          placeholder="Player 1 Name"
          value={nameOne}
          onChange={(e) => setNameOne(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          placeholder="Season (e.g. 2023-24)"
          value={seasonOne}
          onChange={(e) => setSeasonOne(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          placeholder="Player 2 Name"
          value={nameTwo}
          onChange={(e) => setNameTwo(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          placeholder="Season (e.g. 2023-24)"
          value={seasonTwo}
          onChange={(e) => setSeasonTwo(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={fetchStats} className="bg-blue-600 text-white px-4 py-2 rounded">
          Compare
        </button>
      </div>

      {playerOneStats && playerTwoStats && (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={nameOne} fill="#8884d8" />
              <Bar dataKey={nameTwo} fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full text-sm text-left text-gray-500 border border-gray-300">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="px-4 py-2 border">Stat</th>
                  <th className="px-4 py-2 border">{playerOneStats.player_name}</th>
                  <th className="px-4 py-2 border">{playerTwoStats.player_name}</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(([label, stat1, stat2]) => (
                  <tr key={label} className="border-t">
                    <td className="px-4 py-2 border font-medium">{label}</td>
                    <td className="px-4 py-2 border">{stat1 ?? "—"}</td>
                    <td className="px-4 py-2 border">{stat2 ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerComparison;
