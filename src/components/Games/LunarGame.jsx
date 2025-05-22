import React, { useContext, useRef, useState } from "react";
import GamePoints from "../common/GamePoints";
import pointsBg from "../../assets/MyTalentPointsBase.png";
import talentPointsIcon from "../../assets/MyTalentPointsIcon.png";
import LunarGameButtons from "../LunarGameButtons";
import { moonlighRecieved, oopsHead, rewardImages } from "../../utils/images";
import {
  callDartApi,
  cross,
  overFlowAuto,
  overFlowHidden,
  successAlert,
  unsuccessAlert,
} from "../../js/helpers";
import { ApiContext } from "../../services/Api";
import Svga from "./../Svga";
import playanimation from "../../assets/moon-game/game.svga";
import talentPointsIconIcon from "../../assets/MyTalentPointsIcon.png";
import { baseUrl } from "../../js/baserUrl";

function LunarGame({ talentPoints }) {
  const moonAnimation = useRef(0);

  const { userInfo, userId, userToken, refreshApi, disable, setDisable } =
    useContext(ApiContext);
  const [speed, setspeed] = useState(1);
  const [alert, setAlert] = useState(false);
  const [alertpopup, setAlertpopup] = useState([]);
  const [animation, setAnimation] = useState(null);
  const playGame = () => {
    setDisable(true);
    callDartApi(
      `${baseUrl}api/activity/eidAl/lunar?playCount=${speed}`,
      userId,
      userToken
    )
      .then((response) => {
        if (response.msg === "success") {
          setAnimation(
            <Svga
              src={playanimation}
              playerRef={moonAnimation}
              id="moonAnimation"
              cssClass={`svga`}
            />
          );

          setTimeout(() => {
            setAlert(true);
            setAlertpopup(
              successAlert(
                moonlighRecieved,
                <div className="w-100 d-flex fd-column al-center jc-center gap-3">
                  <div className="w-80">
                    You have successfully summoned moonlight and have won
                  </div>
                  <div
                    className={
                      response?.data?.rewardList?.length > 3
                        ? "rews-box-max d-flex al-start jc-center gap-2"
                        : "rews-box d-flex al-start jc-center gap-2"
                    }
                  >
                    {response?.data?.rewardList?.map((item, index) => {
                      return (
                        <div
                          className="d-flex al-center jc-center fd-column gap-1"
                          key={index}
                          style={{ width: "15vw" }}
                        >
                          <div className="img-box d-flex al-center jc-center">
                            <img src={rewardImages(item?.desc)} alt="" />
                          </div>
                          <div className="name f-tangoSansItalic">
                            {item?.desc == "Gems" ? (
                              <>x{item?.count} Gems</>
                            ) : (
                              <>
                                {item.desc} x{item.count}{" "}
                                {item.count === 1 ? "day" : "days"}
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            );
            overFlowHidden();
            refreshApi();
          }, 2500);
        } else if (response.msg === "GAME_POINT_NOT_ENOUGH") {
          setAlert(true);
          setAlertpopup(
            unsuccessAlert(
              oopsHead,
              <div className="w-100">
                You don’t have enough talent points{" "}
                <img className="iconn" src={talentPointsIconIcon} alt="" />{" "}
                right now, gather more event gifts to earn talent points and
                return to the altar!
              </div>
            )
          );
          overFlowHidden();
        } else {
          setAlert(true);
          setAlertpopup(unsuccessAlert(oopsHead, response.msg));
          overFlowHidden();
        }
      })
      .catch((error) => {
        setAlert(true);
        setAlertpopup(unsuccessAlert(oopsHead, error.message));
        overFlowHidden();
      });
  };
  const closePopup = () => {
    overFlowAuto();
    setDisable(false);
    setAlert(false);
    setspeed(1);
    setAnimation(null);
  };
  return (
    <>
      <div className="lunar-game d-flex fd-column al-center jc-center p-rel ">
        <GamePoints
          text="My Talent Points:"
          icon={talentPointsIcon}
          points={talentPoints}
          pointsBg={pointsBg}
        />
        <div className="moon-animation p-rel">{animation}</div>
        <LunarGameButtons
          speed={speed}
          setspeed={setspeed}
          playGame={playGame}
          disable={disable}
        />
      </div>
      <div
        className="overlay"
        style={{ visibility: alert ? "visible" : "hidden" }}
      >
        {alert && (
          <div className="game-popup d-flex al-center jc-center f-tangoSans">
            {alertpopup?.map((item, i) => (
              <div key={i} className="success p-rel d-flex al-center jc-center">
                <img className="head p-abs" src={item?.headtext} alt="" />
                <div className="content m-auto p-abs d-flex al-center jc-center">
                  <div className="body-text d-flex al-center jc-center fd-column gap-2">
                    {item.data}
                  </div>
                </div>
                <div className="modal-close p-abs" onClick={closePopup}>
                  <img src={cross()} alt="" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default LunarGame;
