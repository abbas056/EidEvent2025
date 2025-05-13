import React from "react";
import LunarGame from "../components/Games/LunarGame";
import LeaderBoard from "../components/leaderboard/LeaderBoad";
import lbTitle from "../assets/Leaderboard-Title.png";
import { dummyData, slicePlease } from "../js/helpers";
function LunarAltar() {
  const topWinners = slicePlease(dummyData, 0, 1);
  const restWinners = slicePlease(dummyData, 1, dummyData?.length);
  return (
    <div>
      <LunarGame />
      <LeaderBoard
        title={lbTitle}
        maxheight={"170vw"}
        topWinners={topWinners}
        restWinners={restWinners}
        arrayData={dummyData}
      />
    </div>
  );
}

export default LunarAltar;
