import React, { useContext } from "react";
import LunarGame from "../components/Games/LunarGame";
import LeaderBoard from "../components/leaderboard/LeaderBoad";
import lbTitle from "../assets/Leaderboard-Title.png";
import { dummyData, slicePlease } from "../js/helpers";
import { ApiContext } from "../services/Api";
function LunarAltar({ tab2 }) {
  const { userInfo, tab2leaderboardData } = useContext(ApiContext);
  const talentPoints = userInfo && userInfo?.talentPoints;
  return (
    <div>
      <LunarGame talentPoints={talentPoints} />
      <LeaderBoard
        title={lbTitle}
        maxheight={"170vw"}
        restWinners={tab2leaderboardData?.list}
        arrayData={tab2leaderboardData}
        tab2={tab2}
      />
    </div>
  );
}

export default LunarAltar;
