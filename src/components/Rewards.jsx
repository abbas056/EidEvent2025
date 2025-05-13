import React, { useContext } from "react";
import { ApiContext } from "../services/Api";
import { overFlowAuto, overFlowHidden } from "../js/helpers";
import rewardsBtn from "../assets/Rewardsbtn.png";
import RewardsBox from "./RewardsBox";

function Rewards({ tab2, rewards, setrewards, userTalentBtn, setuserTalentBtn }) {
  const { disable } = useContext(ApiContext);
  const openRewards = () => {
    setrewards(true);
    overFlowHidden();
  };

  const close = () => {
    setrewards(false);
    overFlowAuto();
  };
  return (
    <>
      <div>
        <button disabled={disable} onClick={() => openRewards("rewards")} className="rewardsBtn">
          <img className="w-50" src={rewardsBtn} alt="" />
        </button>
      </div>
      <div className="overlay" style={{ visibility: rewards ? "visible" : "hidden" }}>
        {rewards === true ? (
          <RewardsBox tab2={tab2} close={close} userTalentBtn={userTalentBtn} setuserTalentBtn={setuserTalentBtn} />
        ) : null}
      </div>
    </>
  );
}

export default Rewards;
