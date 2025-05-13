import React, { useState } from "react";
import EidGame from "../components/Games/EidGame";
import LeaderBoard from "../components/leaderboard/LeaderBoad";
import lbTitle from "../assets/Leaderboard-Title.png";
import subBtnBg from "../assets/subBtnBase.png";
import { dummyData, slicePlease } from "../js/helpers";
function EidAroundTheWorld({ tab1 }) {
  const [subButton, setsubButton] = useState({
    btn1: true,
    btn2: false,
  });
  const topWinners = slicePlease(dummyData, 0, 1);
  const restWinners = slicePlease(dummyData, 1, dummyData?.length);

  return (
    <>
      <EidGame tab1={tab1} />
      <LeaderBoard
        tab1={tab1}
        title={lbTitle}
        subButton={subButton}
        setsubButton={setsubButton}
        subBtnBg={subBtnBg}
        maxheight={"152vw"}
        topWinners={topWinners}
        restWinners={restWinners}
        arrayData={dummyData}
      />
    </>
  );
}

export default EidAroundTheWorld;
