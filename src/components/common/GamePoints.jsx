import React from "react";

function GamePoints({ tab1, text, icon, points, pointsBg }) {
  return (
    <div
      className="game-points p-abs d-flex al-center jc-center gap-3 f-tangoSansItalic"
      style={{ backgroundImage: `url(${pointsBg})` }}
    >
      <img src={icon} alt="" />
      <div className="d-flex fd-column al-center jc-center">
        <span>{text}</span>
        <span>{points ? points : 0}</span>
      </div>
    </div>
  );
}

export default GamePoints;
