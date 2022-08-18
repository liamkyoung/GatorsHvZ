import React from "react";
import LeaderboardTable from "../components/leaderboard/LeaderboardTable.js";

function Leaderboard() {
  return (
    <div className="leaderboard">
      <div class="container">
        <div class="row align-items-center">
          <h1 class="font-weight-light">Leaderboard</h1>
        </div>
        <h3>All Time Best Players</h3>
        <div className="row align-items-center my-5">
          <LeaderboardTable />
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
