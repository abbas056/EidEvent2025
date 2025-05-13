import React from "react";
import bar from "../assets/Bar.png";

function GftingRewButtons({ rewButtons, setRewButtons, mtop }) {
  const tabSwitch = (id) => {
    let newCat = {
      daily: false,
      overall: false,
    };
    setRewButtons({ ...newCat, [id]: true });
  };
  return (
    <div
      className="gifting-rew-buttons d-flex fd-column al-center jc-center m-auto"
      style={{ marginTop: `${mtop}` }}
    >
      <div className="buttons d-flex al-center jc-s-around f-tangoSansItalic gap-2">
        <button
          onClick={() => tabSwitch("daily")}
          className={rewButtons.daily ? "active" : "not-active"}
        >
          Daily
        </button>
        <button
          onClick={() => tabSwitch("overall")}
          className={rewButtons.overall ? "active" : "not-active"}
        >
          Overall
        </button>
      </div>
      <img className="bar" src={bar} alt="" />
    </div>
  );
}

export default GftingRewButtons;
