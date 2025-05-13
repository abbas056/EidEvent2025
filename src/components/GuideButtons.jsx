import React, { useContext } from "react";
import { howToPlayBtn, rewardInfoBtn, talentBtn, userBtn } from "../utils/images";
import { ApiContext } from "../services/Api";

function GuideButtons({ topBtns, setTopBtns, subBtns, setSubBtns }) {
  const { disable } = useContext(ApiContext);
  const topButtons = (id) => {
    let newCat = {
      howToPlay: false,
      rewardInfo: false,
    };
    setTopBtns({ ...newCat, [id]: true });
  };

  const subButtons = (id) => {
    let newCat = {
      user: false,
      talent: false,
    };
    setSubBtns({ ...newCat, [id]: true });
  };
  return (
    <>
      <div className="top-btns d-flex al-center jc-center m-auto" style={{ width: "85%" }}>
        <button style={{ width: "50%%" }} disabled={disable} onClick={() => topButtons("howToPlay")}>
          <img style={{ width: "70%" }} className={topBtns.howToPlay ? "gray-0" : "gray-1"} src={howToPlayBtn} alt="" />
        </button>
        <button style={{ width: "50%%" }} disabled={disable} onClick={() => topButtons("rewardInfo")}>
          <img
            style={{ width: "70%" }}
            className={topBtns.rewardInfo ? "gray-0" : "gray-1"}
            src={rewardInfoBtn}
            alt=""
          />
        </button>
      </div>
      {topBtns.howToPlay ? null : (
        <div className="sub-btns d-flex al-center jc-center m-auto" style={{ width: "85%" }}>
          <button style={{ width: "30%" }} disabled={disable} onClick={() => subButtons("user")}>
            <img style={{ width: "90%" }} className={subBtns.user ? "gray-0" : "gray-1"} src={userBtn} alt="" />
          </button>
          <button style={{ width: "30%" }} disabled={disable} onClick={() => subButtons("talent")}>
            <img style={{ width: "90%" }} className={subBtns.talent ? "gray-0" : "gray-1"} src={talentBtn} alt="" />
          </button>
        </div>
      )}
    </>
  );
}

export default GuideButtons;
