import React, { useState, useRef } from "react";
import RewardsBox from "../RewardsBox";
import CountryTabs from "../CountryTabs";
import SubButtons from "../common/SubButtons";
import TopWinners from "./rankings/TopWinners";
import RestWinners from "./rankings/RestWinners";
import SeeMore from "../common/SeeMore";
import tab1LbBg from "../../assets/Leaderboard-bg.png";
import tab2LbBg from "../../assets/LeaderboardBase.png";
import beansPotImg from "../../assets/Beans-Pot.png";
import beanIcon from "../../assets/bean.png";
import { tab1Rewards } from "./../../js/data";

function LeaderBoard({
  title,
  subButton,
  setsubButton,
  subBtnBg,
  topWinners,
  restWinners,
  arrayData,
  maxheight,
  tab1,
}) {
  const [active, setActive] = useState(true);
  const [country, setCountry] = useState({
    Turkey: true,
    Tunisia: false,
    Bahrain: false,
    Egypt: false,
  });
  const restBoard = useRef(null);
  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
    if (!active) {
      restBoard.current.scrollTop = 0;
    }
  };

  return (
    <>
      {tab1 ? (
        <div
          className="leaderboard w-100 p-rel m-auto f-tangoSansItalic"
          style={{
            backgroundImage: `url(${tab1LbBg})`,
            padding: "5vw 0 20vw 0",
          }}
        >
          <img className="title p-abs m-auto" src={title} alt="" />
          <RewardsBox
            tab1={tab1}
            potName="Beans Pot"
            potImg={beansPotImg}
            icon={beanIcon}
            value={999999}
            rewards={tab1Rewards}
          />
          <CountryTabs country={country} setCountry={setCountry} mtop="3vw" />
          <SubButtons
            subButton={subButton}
            setsubButton={setsubButton}
            btn1Name="Today"
            btn2Name="Previous"
            btnBg={subBtnBg}
            containerWidth="70%"
            btnWidth="35%"
            btnHeight="9vw"
            color="white"
          />
          <div className="rank-section">
            {arrayData?.length === 0 ? (
              <p className="no-data">No Records Found</p>
            ) : (
              <div className="rank-section-inner">
                <div className="top-winners d-flex jc-center al-start m-auto">
                  {topWinners?.map(
                    (
                      {
                        nickName,
                        userScore,
                        userLevel,
                        actorLevel,
                        portrait,
                        userId,
                      },
                      index
                    ) => {
                      return (
                        <div className="user-container p-rel" key={index}>
                          <TopWinners
                            userName={nickName}
                            userScore={userScore}
                            userAvatar={portrait}
                            userId={userId}
                            index={index}
                            userLevel={userLevel}
                            actorLevel={actorLevel}
                            tab1={tab1}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
                <div
                  ref={restBoard}
                  className={
                    active ? "rest-ranking" : "rest-ranking rest-ranking-max"
                  }
                  style={{ maxHeight: `${maxheight}` }}
                >
                  {restWinners &&
                    restWinners?.map(
                      (
                        {
                          nickName,
                          userScore,
                          userLevel,
                          actorLevel,
                          portrait,
                          userId,
                        },
                        index
                      ) => (
                        <div key={index}>
                          <RestWinners
                            userName={nickName}
                            userScore={userScore}
                            userAvatar={portrait}
                            index={index}
                            userId={userId}
                            listNumber={index + 2}
                            userLevel={userLevel}
                            actorLevel={actorLevel}
                            tab1={tab1}
                          />
                        </div>
                      )
                    )}
                </div>
              </div>
            )}
            {arrayData?.length > 10 ? (
              <SeeMore
                active={active}
                handleChangeActive={handleChangeActive}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <div
          className="leaderboard w-100 p-rel m-auto d-flex al-center jc-center f-tangoSansItalic"
          style={{
            backgroundImage: `url(${tab2LbBg})`,
            padding: "5vw 0 18vw 0",
          }}
        >
          <img className="title p-abs m-auto" src={title} alt="" />
          <div className="rank-section">
            {arrayData?.length === 0 ? (
              <p className="no-data">No Records Found</p>
            ) : (
              <div className="rank-section-inner">
                <div
                  ref={restBoard}
                  className={
                    active ? "rest-ranking" : "rest-ranking rest-ranking-max"
                  }
                  style={{ maxHeight: `${maxheight}`, marginTop: "28vw" }}
                >
                  {arrayData &&
                    arrayData?.map(
                      (
                        {
                          nickName,
                          userScore,
                          userLevel,
                          actorLevel,
                          portrait,
                          userId,
                        },
                        index
                      ) => (
                        <div key={index}>
                          <RestWinners
                            userName={nickName}
                            userScore={userScore}
                            userAvatar={portrait}
                            index={index}
                            userId={userId}
                            listNumber={index + 1}
                            userLevel={userLevel}
                            actorLevel={actorLevel}
                          />
                        </div>
                      )
                    )}
                </div>
              </div>
            )}
            {arrayData?.length > 10 ? (
              <SeeMore
                active={active}
                handleChangeActive={handleChangeActive}
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default LeaderBoard;
