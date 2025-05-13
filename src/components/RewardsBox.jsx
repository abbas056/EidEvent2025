import React from "react";
import SliderItems from "./rewards-slider/SliderItems";

function RewardsBox({
  tab1,
  value,
  rewButtonsTop,
  rewButtonsBottom,
  potName,
  potImg,
  rewards,
  icon,
}) {
  return (
    <>
      {tab1 || (rewButtonsTop.btn2 && rewButtonsBottom.daily) ? (
        <div
          className="rewards-box-tab1 p-rel m-auto d-flex al-center jc-sEven f-tangoSansItalic"
          style={tab1 ? { marginTop: "37vw" } : { marginTop: "5vw" }}
        >
          <div className="beans-pot d-flex fd-column al-center jc-center gap-1 c-white p-rel">
            <div className="heading d-flex al-center jc-center">{potName}</div>
            <img className="pot" src={potImg} alt="" />
            <div className="bean-num d-flex al-center jc-center gap-1">
              <img src={icon} alt="" />
              <span>{value}</span>
            </div>
          </div>
          <div className="rewards">
            <SliderItems tab1={tab1} rewards={rewards} />
          </div>
        </div>
      ) : (
        <div
          className="rewards-box p-rel m-auto d-flex fd-column al-center jc-sEven f-tangoSansItalic gap-2"
          style={{ marginTop: "0" }}
        >
          <div className="rewards" style={{ width: "100%", height: "45vw" }}>
            <SliderItems rewards={rewards} />
          </div>
          {rewButtonsBottom.overall ? null : (
            <div
              className="beans-pot d-flex fd-column al-center jc-center gap-1 c-white p-rel"
              style={{ width: "100%" }}
            >
              <div className="heading d-flex al-center jc-center">
                {potName}
              </div>
              <img className="pot" src={potImg} alt="" />
              <div className="bean-num d-flex al-center jc-center gap-1">
                <img src={icon} alt="" />
                <span>{value}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default RewardsBox;
