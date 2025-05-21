import React, { useContext, useState } from "react";
import EidGame from "../components/Games/EidGame";
import LeaderBoard from "../components/leaderboard/LeaderBoad";
import lbTitle from "../assets/Leaderboard-Title.png";
import subBtnBg from "../assets/subBtnBase.png";
import { slicePlease } from "../js/helpers";
import { ApiContext } from "../services/Api";

function EidAroundTheWorld({ tab1 }) {
  const {
    userInfo,
    subButton,
    setsubButton,
    tab1leaderboardData,
    CurrentDate,
    PreviousDate,
  } = useContext(ApiContext);
  const gamePoints = userInfo && userInfo?.gamePoints;
  const keyInfo = userInfo && userInfo?.keyInfo;
  const explorePoints = userInfo && userInfo?.explorePointsMap;
  const visitTimes = userInfo && userInfo?.visitTimes;
  const topWinners = slicePlease(tab1leaderboardData?.list, 0, 1);
  const restWinners = slicePlease(
    tab1leaderboardData?.list,
    1,
    tab1leaderboardData?.list?.length
  );
  let todayBeansPot = userInfo?.beansPotInfo?.[`DAILY_GAME_${CurrentDate}`];
  let prevBeansPot = userInfo?.beansPotInfo?.[`DAILY_GAME_${PreviousDate}`];
  return (
    <>
      <EidGame
        tab1={tab1}
        gamePoints={gamePoints}
        keyInfo={keyInfo}
        explorePoints={explorePoints}
        visitTimes={visitTimes}
      />
      <LeaderBoard
        tab1={tab1}
        title={lbTitle}
        subButton={subButton}
        setsubButton={setsubButton}
        subBtnBg={subBtnBg}
        maxheight={"152vw"}
        topWinners={topWinners}
        restWinners={restWinners}
        arrayData={tab1leaderboardData}
        beanPotValue={subButton.btn1 ? todayBeansPot : prevBeansPot}
      />
    </>
  );
}

export default EidAroundTheWorld;
