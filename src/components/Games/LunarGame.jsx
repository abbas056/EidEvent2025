import React, { useState } from "react";
import GamePoints from "../common/GamePoints";
import pointsBg from "../../assets/MyTalentPointsBase.png";
import talentPointsIcon from "../../assets/MyTalentPointsIcon.png";
import LunarGameButtons from "../LunarGameButtons";

function LunarGame() {
  const [speed, setspeed] = useState(1);
  return (
    <div className="lunar-game d-flex fd-column al-center jc-center p-rel gap-4">
      <GamePoints
        text="My Talent Points:"
        icon={talentPointsIcon}
        points={111111}
        pointsBg={pointsBg}
      />
      <div className="moon-animation">animation here</div>
      <LunarGameButtons speed={speed} setspeed={setspeed} />
    </div>
  );
}

export default LunarGame;
