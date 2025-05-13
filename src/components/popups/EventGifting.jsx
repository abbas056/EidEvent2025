import React, { useRef, useState } from "react";
import { cross, dummyData, slicePlease } from "../../js/helpers";
import eventGiftingTitle from "../../assets/popups/Event-Gifting/title.png";
import EventGifts from "../common/EventGifts";
import SubButtons from "../common/SubButtons";
import subBtnBg from "../../assets/subBtnBase.png";
import gemPotImg from "../../assets/popups/Event-Gifting/gems-pot.png";
import gemicon from "../../assets/gems.png";
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
function EventGifting({ close }) {
  const [rewButtonsTop, setrewButtonsTop] = useState({
    btn1: true,
    btn2: false,
  });
  const [rewButtonsBottom, setRewButtonsBottom] = useState({
    daily: true,
    overall: false,
  });
  const [lbButtonsTop, setlbButtonsTop] = useState({
    btn1: true,
    btn2: false,
  });
  const [lbMiddle, setlbMiddle] = useState({
    btn1: true,
    btn2: false,
  });
  const [lbDayButtons, setlbDayButtons] = useState({
    btn1: true,
    btn2: false,
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
  const topWinners = slicePlease(dummyData, 0, 3);
  const restWinners = slicePlease(dummyData, 3, dummyData?.length);

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
          value={999999}
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
          value={999999}
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
            ? { backgroundImage: `url(${bg1})` }
            : { backgroundImage: `url(${bg2})` }
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

        <div className="rank-section p-rel">
          {dummyData?.length === 0 ? (
            <p className="no-data">No Records Found</p>
          ) : (
            <div className="rank-section-inner">
              <div className="top-winners d-flex jc-sEven al-end m-auto ">
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
                          lbButtonsTop={lbButtonsTop}
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
                          listNumber={index + 4}
                          userLevel={userLevel}
                          actorLevel={actorLevel}
                          lbButtonsTop={lbButtonsTop}
                        />
                      </div>
                    )
                  )}
              </div>
            </div>
          )}
          {dummyData?.length > 10 ? (
            <SeeMore
              position="unset"
              active={active}
              handleChangeActive={handleChangeActive}
            />
          ) : null}
        </div>

        <div className="close p-abs" onClick={close}>
          <img style={{ width: "10vw" }} src={cross()} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EventGifting;
