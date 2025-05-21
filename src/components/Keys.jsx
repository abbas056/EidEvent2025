import React from "react";
import redKey from "../assets/RedKey.png";
import PurpleKey from "../assets/PurpleKey.png";
import GreenKey from "../assets/GreenKey.png";
import BlueKey from "../assets/BlueKey.png";

function Keys({ red = 0, blue = 0, green = 0, purple = 0, chestOpen }) {
  return (
    <div
      className="keys p-abs d-flex al-center jc-s-between gap-4 f-tangoSans"
      style={chestOpen ? { top: "44vw" } : { top: "32vw" }}
    >
      <div className="d-flex al-center jc-center gap-2">
        <div>
          <div className="value d-flex al-center jc-center p-abs">{red}</div>
          <img className={red >= 1 ? "gray-0" : "gray-1"} src={redKey} alt="" />
        </div>
        <div>
          <div className="value d-flex al-center jc-center p-abs">{blue}</div>
          <img
            className={blue >= 1 ? "gray-0" : "gray-1"}
            src={BlueKey}
            alt=""
          />
        </div>
      </div>
      <div className="d-flex al-center jc-center gap-2">
        <div>
          <div className="value d-flex al-center jc-center p-abs">{green}</div>
          <img
            className={green >= 1 ? "gray-0" : "gray-1"}
            src={GreenKey}
            alt=""
          />
        </div>
        <div>
          <div className="value d-flex al-center jc-center p-abs">{purple}</div>
          <img
            className={purple >= 1 ? "gray-0" : "gray-1"}
            src={PurpleKey}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Keys;
