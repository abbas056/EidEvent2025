import React, { useContext } from "react";
import { ApiContext } from "../../../services/Api";
import { explorePointsIcon, gemIcon, unknown } from "../../../utils/images";
import userFrame from "../../../assets/1stUserFrame.png";
import { baserUrl } from "../../../js/baserUrl";
import { captureImageError, goTo } from "../../../js/helpers";
import beanIcon from "../../../assets/bean.png";
import mascot from "../../../assets/Mascot1.png";

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
}) {
  const { isLive } = useContext(ApiContext);

  let icon;
  let levelUrl;
  let level;
  let lvlIconWidth;
  if (tab1) {
    levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
    level = userLevel;
    lvlIconWidth = "12vw";
    icon = explorePointsIcon;
  } else if (lbButtonsTop.btn1) {
    levelUrl = `${baserUrl}streamkar/common/img/tlv/`;
    level = actorLevel;
    lvlIconWidth = "7vw";
    icon = gemIcon;
  } else {
    levelUrl = `${baserUrl}streamkar/common/img/tlv/`;
    level = actorLevel;
    lvlIconWidth = "7vw";
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
          </div>
          {/* <img className="mascot" src={mascot} alt="" /> */}
        </div>
      )}
    </>
  );
}

export default TopWinners;
