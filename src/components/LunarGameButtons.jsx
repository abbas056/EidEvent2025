import React from "react";
import playButton from "../assets/SummonMoonlightButton.png";

function LunarGameButtons({ speed, setspeed }) {
  const selectSpeed = (id) => {
    setspeed(id);
  };
  return (
    <div className="game-buttons d-flex fd-column al-center jc-center w-80 gap-3">
      <div className="speed d-flex al-center jc-center gap-4">
        <button
          className={speed === 1 ? "gray-0" : "gray-1"}
          onClick={() => selectSpeed(1)}
        >
          x 1
        </button>
        <button
          className={speed === 10 ? "gray-0" : "gray-1"}
          onClick={() => selectSpeed(10)}
        >
          x 10
        </button>
        <button
          className={speed === 100 ? "gray-0" : "gray-1"}
          onClick={() => selectSpeed(100)}
        >
          x 100
        </button>
      </div>
      <button>
        <img style={{ width: "35vw" }} src={playButton} alt="" />
      </button>
      <span>30k Talent Pts req</span>
    </div>
  );
}

export default LunarGameButtons;
