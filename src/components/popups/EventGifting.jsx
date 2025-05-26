import React, { useContext, useRef, useState } from "react";
import { cross, slicePlease } from "../../js/helpers";
import eventGiftingTitle from "../../assets/popups/Event-Gifting/title.png";
import EventGifts from "../common/EventGifts";
import SubButtons from "../common/SubButtons";
import subBtnBg from "../../assets/subBtnBase.png";
import bg1 from "../../assets/popups/Event-Gifting/bg.png";
import bg2 from "../../assets/popups/Event-Gifting/bg2.png";
import GftingRewButtons from "../GftingRewButtons";
import RewardsBox from "../RewardsBox";
import bar from "../../assets/Bar.png";
import lbTitle from "../../assets/Leaderboard-Title.png";
import TopWinners from "../leaderboard/rankings/TopWinners";
import RestWinners from "../leaderboard/rankings/RestWinners";
import SeeMore from "../common/SeeMore";
import barbottom from "../../assets/popups/Event-Gifting/sepraterbarlb.png";
import { beanIcon, beanpot, gemIcon, gemspot } from "../../utils/images";
import {
  talentsDailyRewards,
  talentsOverallRewards,
  usersDailyRewards,
  usersOverallRewards,
} from "../../js/data";
import { ApiContext } from "../../services/Api";
import Loader from "../common/Loader";
function EventGifting({ close, eventGifting }) {
  const {
    userInfo,
    isLoading,
    CurrentDate,
    PreviousDate,
    gifterOverall,
    talentOverall,
    gifterToday,
    gifterPrevious,
    talentToday,
    talentPrevious,
  } = useContext(ApiContext);
  const [lbButtonsTop, setlbButtonsTop] = useState({ btn1: true, btn2: false });
  const [lbMiddle, setlbMiddle] = useState({ btn1: true, btn2: false });
  const [lbDayButtons, setlbDayButtons] = useState({ btn1: true, btn2: false });
  const [rewButtonsTop, setrewButtonsTop] = useState({
    btn1: true,
    btn2: false,
  });
  const [rewButtonsBottom, setRewButtonsBottom] = useState({
    daily: true,
    overall: false,
  });
  const [active, setActive] = useState(true);
  const restBoard = useRef(null);
  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
    if (!active) {
      restBoard.current.scrollTop = 0;
    }
  };

  let leaderboardData;
  if (lbButtonsTop.btn1) {
    if (lbMiddle.btn1) {
      if (lbDayButtons.btn1) {
        leaderboardData = talentToday;
      } else {
        leaderboardData = talentPrevious;
      }
    } else {
      leaderboardData = talentOverall;
    }
  } else if (lbButtonsTop.btn2) {
    if (lbMiddle.btn1) {
      if (lbDayButtons.btn1) {
        leaderboardData = gifterToday;
      } else {
        leaderboardData = gifterPrevious;
      }
    } else {
      leaderboardData = gifterOverall;
    }
  }
  const topWinners = slicePlease(leaderboardData?.list, 0, 3);
  const restWinners = slicePlease(
    leaderboardData?.list,
    3,
    leaderboardData?.list?.length
  );
  let userDailyPot = userInfo?.beansPotInfo?.[`DAILY_USER_${CurrentDate}`];
  let talentDailyPot = userInfo?.beansPotInfo?.[`DAILY_GEMS_${CurrentDate}`];
  let talentPreviousPot =
    userInfo?.beansPotInfo?.[`DAILY_GEMS_${PreviousDate}`];

  const renderGifterRewards = () => {
    if (rewButtonsTop.btn1 == true)
      return (
        <div key={1}>
          <GftingRewButtons
            rewButtons={rewButtonsBottom}
            setRewButtons={setRewButtonsBottom}
            mtop="11vw"
          />
          {renderRewards(
            "Gems Pot",
            gemIcon,
            gemspot,
            talentsDailyRewards,
            talentsOverallRewards
          )}
        </div>
      );
    if (rewButtonsTop.btn2 == true)
      return (
        <div key={2}>
          <GftingRewButtons
            rewButtons={rewButtonsBottom}
            setRewButtons={setRewButtonsBottom}
            mtop="11vw"
          />
          {renderRewards(
            "Beans Pot",
            beanIcon,
            beanpot,
            usersDailyRewards,
            usersOverallRewards
          )}
        </div>
      );
  };
  const renderRewards = (potName, icon, pot, rewards1, rewards2) => {
    if (rewButtonsBottom.daily == true)
      return (
        <RewardsBox
          key={3}
          potName={potName}
          potImg={pot}
          value={rewButtonsTop.btn1 ? talentDailyPot : userDailyPot}
          rewButtonsTop={rewButtonsTop}
          rewButtonsBottom={rewButtonsBottom}
          rewards={rewards1}
          icon={icon}
        />
      );
    if (rewButtonsBottom.overall == true)
      return (
        <RewardsBox
          key={4}
          potName={potName}
          potImg={pot}
          rewButtonsTop={rewButtonsTop}
          rewButtonsBottom={rewButtonsBottom}
          rewards={rewards2}
          icon={icon}
        />
      );
  };

  return (
    <div className="p-rel w-100 d-flex al-start jc-center f-tangoSansItalic h-100">
      <div
        className="event-gifting"
        style={
          rewButtonsTop.btn1 && rewButtonsBottom.daily
            ? { backgroundImage: `url(${bg1})`, height: "460vw" }
            : rewButtonsTop.btn2 && rewButtonsBottom.daily
            ? { backgroundImage: `url(${bg2})`, height: "430vw" }
            : { backgroundImage: `url(${bg2})`, height: "420vw" }
        }
      >
        <img className="title m-auto p-abs" src={eventGiftingTitle} alt="" />
        <div className="container fd-column d-flex al-center jc-center gap-2">
          <EventGifts />
          <div className="rewards-heading">Gifting Rewards</div>
          <div className="heading-text">Rewards for Talents and Gifters</div>
        </div>
        <SubButtons
          subButton={rewButtonsTop}
          setsubButton={setrewButtonsTop}
          btn1Name="Talents"
          btn2Name="Gifters"
          btnBg={subBtnBg}
          containerWidth="65%"
          btnWidth="45%"
          btnHeight="9vw"
          color="white"
        />
        {renderGifterRewards()}
        <img
          style={
            rewButtonsBottom.daily
              ? { width: "81%", marginTop: "0vw" }
              : { width: "81%", marginTop: "10vw" }
          }
          src={bar}
          alt=""
        />
        <img style={{ width: "50%", marginTop: "4vw" }} src={lbTitle} alt="" />
        <SubButtons
          subButton={lbButtonsTop}
          setsubButton={setlbButtonsTop}
          btn1Name="Talents"
          btn2Name="Gifters"
          btnBg={subBtnBg}
          containerWidth="65%"
          btnWidth="45%"
          btnHeight="9vw"
          color="white"
        />
        <SubButtons
          subButton={lbMiddle}
          setsubButton={setlbMiddle}
          btn1Name="Daily"
          btn2Name="Overall"
          btnBg={subBtnBg}
          containerWidth="50%"
          btnWidth="48%"
          btnHeight="8vw"
          color="white"
        />
        {lbMiddle.btn2 ? null : (
          <SubButtons
            subButton={lbDayButtons}
            setsubButton={setlbDayButtons}
            btn1Name="Today"
            btn2Name="Previous Day"
            btnBg={subBtnBg}
            containerWidth="50%"
            btnWidth="48%"
            btnHeight="8vw"
            color="white"
          />
        )}

        {isLoading ? (
          <Loader />
        ) : (
          <div className="rank-section p-rel">
            {leaderboardData?.count === 0 ? (
              <p className="no-data">No Records Found</p>
            ) : (
              <div className="rank-section-inner">
                <div className="top-winners d-flex jc-sEven al-end m-auto ">
                  {topWinners?.map(
                    (
                      {
                        nickname,
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
                            userName={nickname}
                            userScore={userScore}
                            userAvatar={portrait}
                            userId={userId}
                            index={index}
                            userLevel={userLevel}
                            actorLevel={actorLevel}
                            rewButtonsTop={rewButtonsTop}
                            lbButtonsTop={lbButtonsTop}
                            lbMiddle={lbMiddle}
                            lbDayButtons={lbDayButtons}
                            beanPotValue={
                              lbButtonsTop.btn1 && lbDayButtons.btn1
                                ? talentDailyPot
                                : lbButtonsTop.btn1 && lbDayButtons.btn2
                                ? talentPreviousPot
                                : lbButtonsTop.btn2 && lbDayButtons.btn1
                                ? userDailyPot
                                : talentPreviousPot
                            }
                          />
                        </div>
                      );
                    }
                  )}
                </div>
                <img className="bar-bottom" src={barbottom} alt="" />

                <div
                  ref={restBoard}
                  className={
                    active ? "rest-ranking" : "rest-ranking rest-ranking-max"
                  }
                  style={{ maxHeight: `119vw` }}
                >
                  {restWinners &&
                    restWinners?.map(
                      (
                        {
                          nickname,
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
                            userName={nickname}
                            userScore={userScore}
                            userAvatar={portrait}
                            index={index}
                            userId={userId}
                            listNumber={index + 4}
                            userLevel={userLevel}
                            actorLevel={actorLevel}
                            rewButtonsTop={rewButtonsTop}
                            lbButtonsTop={lbButtonsTop}
                            eventGifting={eventGifting}
                            lbMiddle={lbMiddle}
                            lbDayButtons={lbDayButtons}
                            beanPotValue={
                              lbButtonsTop.btn1 && lbDayButtons.btn1
                                ? talentDailyPot
                                : lbButtonsTop.btn1 && lbDayButtons.btn2
                                ? talentPreviousPot
                                : lbButtonsTop.btn1 && lbDayButtons.btn1
                                ? talentDailyPot
                                : talentPreviousPot
                            }
                          />
                        </div>
                      )
                    )}
                </div>
              </div>
            )}
            {leaderboardData?.count > 10 ? (
              <SeeMore
                position="unset"
                active={active}
                handleChangeActive={handleChangeActive}
              />
            ) : null}
          </div>
        )}

        <div className="close p-abs" onClick={close}>
          <img style={{ width: "10vw" }} src={cross()} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EventGifting;
