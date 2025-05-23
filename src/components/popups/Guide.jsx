import React, { useState } from "react";
import Content from "./Content";
import { cross } from "../../js/helpers";
import EventGifts from "../common/EventGifts";
import { guideContent } from "../../js/data";
import guideTitle from "../../assets/popups/Guide/title.png";
import btnDown from "../../assets/bottom.png";
import btnUp from "../../assets/top.png";
import box1Title from "../../assets/popups/Guide/eidaroundworld.png";
import box2Title from "../../assets/popups/Guide/lunaraltar.png";
import box3Title from "../../assets/popups/Guide/eventgifting.png";

function Guide({ language, close }) {
  let current;
  language === "Urdu/Hindi"
    ? (current = guideContent.Urdu)
    : (current = guideContent.English);
  const [collapsible, setcollapsible] = useState({
    boxFirst: true,
    boxSecond: false,
    boxThird: false,
  });
  const collapsibleSwitch = (id) => {
    setcollapsible((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the specific box's state
    }));
  };

  return (
    <div
      className="p-rel w-100 d-flex al-start jc-center"
      style={{ height: "100%" }}
    >
      <div className="guide-popup">
        <img className="title f-hunter m-auto p-abs" src={guideTitle} alt="" />
        <div className="container fd-column d-flex al-center jc-center gap-2">
          <EventGifts />
          <div className="guide-popup-content fd-column d-flex al-center jc-center f-tangoSansItalic gap-2">
            <div className="heading">How to play</div>
            <div className="top-text">{current.topText}</div>
            <div className="how-to-play d-flex fd-column jc-center gap-2 m-auto">
              <div className="love-connection">
                <div className="toggle-btn p-rel jc-center al-center d-flex">
                  <img className="title-text" src={box1Title} alt="" />
                  <img
                    className="arrow"
                    onClick={() => collapsibleSwitch("boxFirst")}
                    src={collapsible.boxFirst ? btnDown : btnUp}
                    alt=""
                  />
                </div>
                {collapsible.boxFirst && (
                  <Content
                    boxFirst={collapsible.boxFirst}
                    language={language}
                    content={current.firstBox}
                  />
                )}
              </div>
              <div className="love-dare">
                <div className="toggle-btn p-rel jc-center al-center d-flex">
                  <img className="title-text" src={box2Title} alt="" />
                  <img
                    className="arrow"
                    onClick={() => collapsibleSwitch("boxSecond")}
                    src={collapsible.boxSecond ? btnDown : btnUp}
                    alt=""
                  />
                </div>
                {collapsible.boxSecond && (
                  <Content
                    boxSecond={collapsible.boxSecond}
                    language={language}
                    content={current.secondBox}
                  />
                )}
              </div>
              <div className="talent-tree">
                <div className="toggle-btn p-rel jc-center al-center d-flex">
                  <img className="title-text" src={box3Title} alt="" />
                  <img
                    className="arrow"
                    onClick={() => collapsibleSwitch("boxThird")}
                    src={collapsible.boxThird ? btnDown : btnUp}
                    alt=""
                  />
                </div>
                {collapsible.boxThird && (
                  <Content
                    boxThird={collapsible.boxThird}
                    language={language}
                    content={current.thirdBox}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="close p-abs" onClick={close}>
          <img src={cross()} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Guide;
