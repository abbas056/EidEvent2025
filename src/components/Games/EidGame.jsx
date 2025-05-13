import React, { useState } from "react";
import SelectCountry from "../SelectCountry";
import GamePoints from "../common/GamePoints";
import eidiIcon from "../../assets/EidiPointsIcon.png";
import EidGameButtons from "../EidGameButtons";
import BeansTreasureBox from "../BeansTreasureBox";
import pointsBg from "../../assets/EidiPointsBase.png";

function EidGame({ tab1 }) {
  const [country, setCountry] = useState({
    Turkey: true,
    Tunisia: false,
    Bahrain: false,
    Egypt: false,
  });
  const [input, setInput] = useState(1);

  return (
    <div className="eid-game p-rel d-flex fd-column al-center jc-start">
      <GamePoints
        tab1={tab1}
        text="My Eidi Points:"
        icon={eidiIcon}
        points={111111}
        pointsBg={pointsBg}
      />
      <SelectCountry country={country} setCountry={setCountry} />
      <EidGameButtons points={111111} input={input} setInput={setInput} />
      <BeansTreasureBox />
    </div>
  );
}

export default EidGame;
