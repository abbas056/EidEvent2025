import React, { useContext } from "react";
import { ApiContext } from "../services/Api";
import EidAroundTheWorldBtn from "../assets/EidAroundTheWorldBtn.png";
import LunarAltarBtn from "../assets/LunarAltarBtn.png";
import EidAroundTheWorld from "../pages/EidAroundTheWorld";
import LunarAltar from "../pages/LunarAltar";

function MainButtons({ mainTabs, setMainTabs }) {
  const { disable } = useContext(ApiContext);

  const tabSwitch = (id) => {
    let newCat = {
      tab1: false,
      tab2: false,
    };
    setMainTabs({ ...newCat, [id]: true });
  };
  const renderingTabs = () => {
    switch (true) {
      case mainTabs.tab1:
        return <EidAroundTheWorld tab1={mainTabs.tab1} />;
      case mainTabs.tab2:
        return <LunarAltar tab2={mainTabs.tab2} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="tab-buttons w-100 p-rel z-index-1 d-flex al-center jc-center m-auto">
        <button
          disabled={disable}
          className="d-flex al-center jc-start"
          onClick={() => tabSwitch("tab1")}
        >
          <img
            className={mainTabs.tab1 ? "gray-0" : "gray-1"}
            src={EidAroundTheWorldBtn}
            alt=""
          />
        </button>
        <button
          disabled={disable}
          className="d-flex al-center jc-end"
          onClick={() => tabSwitch("tab2")}
        >
          <img
            className={mainTabs.tab2 ? "gray-0" : "gray-1"}
            src={LunarAltarBtn}
            alt=""
          />
        </button>
      </div>
      <div>{renderingTabs()}</div>
    </>
  );
}

export default MainButtons;
