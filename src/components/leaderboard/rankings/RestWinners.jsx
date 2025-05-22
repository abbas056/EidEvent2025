import React, { useContext } from "react";
import icon from "../../../assets/ExplorePointsIcon.png";
import { ApiContext } from "../../../services/Api";
import {
  captureImageError,
  estCalculation,
  formatData,
  goTo,
} from "../../../js/helpers";
import restFrame from "../../../assets/4thUserFrame.png";
import {
  beanIcon,
  explorePointsIcon,
  gemIcon,
  unknown,
} from "../../../utils/images";
import LeaderBoardSlider from "./../../leaderboard-slider/LeaderBoardSlider";
import { baseUrl } from "../../../js/baserUrl";

function RestWinners({
  userName,
  userScore,
  userAvatar,
  userId,
  index,
  userLevel,
  actorLevel,
  listNumber,
  lbButtonsTop,
  lbMiddle,
  lbDayButtons,
  beanPotValue,
  eventGifting,
  tab1,
  tab2,
  desc,
}) {
  const { isLive } = useContext(ApiContext);
  let icon;
  let levelUrl;
  let level;
  let lvlIconWidth;
  if (tab1) {
    levelUrl = `${baseUrl}streamkar/common/img/ulv/`;
    level = userLevel;
    lvlIconWidth = "12vw";
    icon = explorePointsIcon;
  } else if (eventGifting && lbButtonsTop.btn1) {
    levelUrl = `${baseUrl}streamkar/common/img/tlv/`;
    level = actorLevel;
    lvlIconWidth = "7vw";
    icon = gemIcon;
  } else {
    levelUrl = `${baseUrl}streamkar/common/img/ulv/`;
    level = actorLevel;
    lvlIconWidth = "12vw";
    icon = beanIcon;
  }

  let arrayDesc = desc && JSON.parse(desc);

  return (
    <div className="users-details-onward f-tangoItalic" key={index}>
      <div className="d-flex al-center p-rel jc-center gap-1">
        <div className="rank-id d-flex al-center jc-center">{listNumber}.</div>
        <div
          className="d-flex al-center jc-center gap-2"
          onClick={() => {
            goTo(isLive, userId, userId);
          }}
        >
          <img
            onError={captureImageError}
            className="rank-user-image"
            src={userAvatar ? userAvatar : unknown}
            alt=""
          />
          <img className="rank-border-image p-rel" src={restFrame} alt="" />
        </div>
        <div className="user-details d-flex fd-column gap-1">
          <span className="username">{userName && userName.slice(0, 12)}</span>
          <img
            style={{ width: `${lvlIconWidth}` }}
            src={levelUrl + level + ".png"}
            alt=""
          />
        </div>
      </div>
      {tab2 ? (
        <div className="rewards-slide d-flex al-center jc-end gap-1">
          <LeaderBoardSlider description={formatData(arrayDesc)} />
        </div>
      ) : (
        <>
          {(eventGifting &&
            lbButtonsTop.btn1 &&
            lbMiddle.btn1 &&
            listNumber <= 5) ||
          (eventGifting &&
            lbButtonsTop.btn2 &&
            lbMiddle.btn2 &&
            listNumber <= 3) ? (
            <div className="est-score d-flex al-center jc-center">
              <div className="d-flex al-center jc-center">
                <img clas src={icon} alt="" />
                <div>
                  {lbButtonsTop.btn1 ? (
                    <>{lbDayButtons.btn1 ? "Est Gems:" : "Gems Won:"}</>
                  ) : (
                    <>{lbDayButtons.btn1 ? "Est Beans:" : "Beans Won:"}</>
                  )}{" "}
                  {estCalculation(beanPotValue, listNumber, lbButtonsTop)}
                </div>
              </div>
            </div>
          ) : null}
          <div
            className="userScore d-flex al-center jc-start"
            style={tab1 ? { width: "15vw" } : { width: "20vw" }}
          >
            <img src={icon} alt="" />
            <span>{userScore}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default RestWinners;
