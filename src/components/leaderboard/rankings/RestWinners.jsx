import React, { useContext } from "react";
import icon from "../../../assets/ExplorePointsIcon.png";
import { ApiContext } from "../../../services/Api";
import { baserUrl } from "../../../js/baserUrl";
import { captureImageError, goTo } from "../../../js/helpers";
import restFrame from "../../../assets/4thUserFrame.png";
import {
  beanIcon,
  explorePointsIcon,
  gemIcon,
  unknown,
} from "../../../utils/images";

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
  tab1,
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
    levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
    level = actorLevel;
    lvlIconWidth = "7vw";
    icon = beanIcon;
  }
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
      <div className="userScore d-flex al-center jc-start">
        <img src={icon} alt="" />
        <span>{userScore}</span>
      </div>
    </div>
  );
}

export default RestWinners;
