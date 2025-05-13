import React from "react";
import pointsIcon from "../assets/ExplorePointsIcon.png";
import openBtn from "../assets/OpenButton.png";
import Keys from "./Keys";
import { keys } from "../js/helpers";

function BeansTreasureBox() {
  const keyData = keys?.data?.keys?.[0] || {};
  const red = keyData[0] || 0;
  const blue = keyData[1] || 0;
  const green = keyData[2] || 0;
  const purple = keyData[3] || 0;
  const isActive = red >= 1 && blue >= 1 && green >= 1 && purple >= 1;

  return (
    <div className="BeansTreasureBox p-abs">
      <div className="heading f-tangoSans">BEANS TREASURE BOX</div>
      <div className="treasure-box d-flex fd-column al-center jc-center">
        <Keys red={red} blue={blue} green={green} purple={purple} />
        <button disabled={!isActive} className={isActive ? "gray-0" : "gray-1"}>
          <img src={openBtn} alt="" />
        </button>
      </div>
      <div className="explore-points d-flex al-center jc-center gap-2 f-tangoSansItalic">
        <img src={pointsIcon} alt="Points" />
        <div className="d-flex fd-column al-center jc-center">
          <span>My Daily Explore Points:</span>
          <span>9999999</span>
        </div>
      </div>
    </div>
  );
}

export default BeansTreasureBox;
