import React, { useContext } from "react";
import { ApiContext } from "../../../services/Api";
import { explorePointsIcon, gemIcon, unknown } from "../../../utils/images";
import userFrame from "../../../assets/1stUserFrame.png";
import {
  captureImageError,
  estBeans,
  estCalculation,
  goTo,
} from "../../../js/helpers";
import beanIcon from "../../../assets/bean.png";
import mascot from "../../../assets/Mascot1.png";
import { baseUrl } from "../../../js/baserUrl";

function TopWinners({
  userName,
  userScore,
  userAvatar,
  userId,
  index,
  userLevel,
  actorLevel,
  tab1,
  lbButtonsTop,
  lbMiddle,
  lbDayButtons,
  beanPotValue,
}) {
  const { isLive, country, subButton } = useContext(ApiContext);

  let icon;
  let levelUrl;
  let level;
  let lvlIconWidth;
  if (tab1) {
    levelUrl = `${baseUrl}streamkar/common/img/ulv/`;
    level = userLevel;
    lvlIconWidth = "12vw";
    icon = explorePointsIcon;
  } else if (lbButtonsTop.btn1) {
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

  return (
    <>
      {tab1 ? (
        <div className="innerData w-100 h-100">
          <img className="mascot" src={mascot} alt="" />
          <div
            className="first-user"
            onClick={() => {
              goTo(isLive, userId, userId);
            }}
          >
            <img
              onError={captureImageError}
              className="rank-user-image p-abs m-auto"
              src={userAvatar ? userAvatar : unknown}
              alt=""
            />
            <img className="rank-border-image p-rel" src={userFrame} alt="" />
          </div>
          <div className="bottom-data d-flex fd-column al-center jc-center gap-1">
            <div className="username">{userName && userName.slice(0, 10)}</div>
            <img
              style={{ width: `${lvlIconWidth}` }}
              src={levelUrl + level + ".png"}
              alt=""
            />
            <div className="userScore d-flex al-center jc-center f-tangoSans">
              <img src={icon} alt="" />
              <span> {userScore}</span>
            </div>
            <div className="est-score p-abs d-flex al-center jc-center">
              <span className="d-flex al-center jc-center gap-1">
                {subButton.btn1 ? "Est Beans" : "Beans Won"}
                <div className="d-flex al-center jc-center">
                  <img src={beanIcon} alt="" />{" "}
                  {estBeans(beanPotValue, country, tab1)}
                </div>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="innerData w-100 h-100">
          <div
            className="first-user"
            onClick={() => {
              goTo(isLive, userId, userId);
            }}
          >
            <img
              onError={captureImageError}
              className="rank-user-image p-abs m-auto"
              src={userAvatar ? userAvatar : unknown}
              alt=""
            />
            <img className="rank-border-image p-rel" src={userFrame} alt="" />
          </div>
          <div className="bottom-data d-flex fd-column al-center jc-center">
            <div className="username">{userName && userName.slice(0, 10)}</div>
            <img
              style={{ width: `${lvlIconWidth}` }}
              src={levelUrl + level + ".png"}
              alt=""
            />
            <div className="userScore d-flex al-center jc-center f-tangoSans">
              <img src={icon} alt="" />
              <span> {userScore}</span>
            </div>
            {lbMiddle.btn2 ? null : (
              <div className="est-score p-abs d-flex fd-column al-center jc-center">
                <div
                  className="d-flex al-center jc-center"
                  style={{ gap: "0.5vw" }}
                >
                  <img
                    style={
                      lbButtonsTop.btn2
                        ? {
                            backgroundColor: "#295b76",
                            padding: "0.5vw",
                            border: "0.5px solid white",
                            borderRadius: "50%",
                          }
                        : null
                    }
                    src={icon}
                    alt=""
                  />
                  {lbButtonsTop.btn1 ? (
                    <>{lbDayButtons.btn1 ? "Est Gems:" : "Gems Won:"}</>
                  ) : (
                    <>{lbDayButtons.btn1 ? "Est Beans:" : "Beans Won:"}</>
                  )}{" "}
                </div>
                {estCalculation(beanPotValue, index + 1, lbButtonsTop)}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default TopWinners;
