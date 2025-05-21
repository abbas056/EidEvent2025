import React, { useContext, useState } from "react";
import SelectCountry from "../SelectCountry";
import GamePoints from "../common/GamePoints";
import eidiIcon from "../../assets/EidiPointsIcon.png";
import EidGameButtons from "../EidGameButtons";
import BeansTreasureBox from "../BeansTreasureBox";
import pointsBg from "../../assets/EidiPointsBase.png";
import {
  callDartApi,
  cross,
  overFlowAuto,
  overFlowHidden,
  successAlert,
  unsuccessAlert,
} from "../../js/helpers";
import { ApiContext } from "../../services/Api";
import { baserUrl } from "../../js/baserUrl";
import exploreIcon from "../../assets/ExplorePointsIcon.png";
import turkeyIcon from "../../assets/Popup-icons/turkey-icon.png";
import tunisiaIcon from "../../assets/Popup-icons/tunisia-icon.png";
import bahrainIcon from "../../assets/Popup-icons/bahrain-icon.png";
import egyptIcon from "../../assets/Popup-icons/egypt-icon.png";
import redKey from "../../assets/RedKey.png";
import PurpleKey from "../../assets/PurpleKey.png";
import GreenKey from "../../assets/GreenKey.png";
import BlueKey from "../../assets/BlueKey.png";
import eidiPointIcon from "../../assets/EidiPointsIcon.png";
import {
  amazingTour,
  congratulations,
  oopsHead,
  rewardImages,
} from "../../utils/images";

function EidGame({ tab1, gamePoints, keyInfo, explorePoints, visitTimes }) {
  const { userInfo, userId, userToken, refreshApi, disable, setDisable } =
    useContext(ApiContext);

  const [country, setCountry] = useState({
    Turkey: true,
    Tunisia: false,
    Bahrain: false,
    Egypt: false,
  });
  const [input, setInput] = useState(1);
  const [keysFound, setKeysFound] = useState(0);
  const [alert, setAlert] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [keyAnimation, setkeyAnimation] = useState(false);
  const [alertpopup, setAlertpopup] = useState([]);

  let type;
  let countryIcon;
  let keyIcon;
  let countryName;
  let keyColor;
  let reqPoints;
  if (country.Turkey) {
    type = 1;
    countryIcon = turkeyIcon;
    countryName = "Turkey";
    keyIcon = redKey;
    keyColor = "Red";
    reqPoints = "20";
  } else if (country.Tunisia) {
    type = 2;
    countryIcon = tunisiaIcon;
    countryName = "Tunisia";
    keyIcon = BlueKey;
    keyColor = "Blue";
    reqPoints = "30";
  } else if (country.Bahrain) {
    type = 3;
    countryIcon = bahrainIcon;
    countryName = "Bahrain";
    keyIcon = GreenKey;
    keyColor = "Green";
    reqPoints = "40";
  } else {
    type = 4;
    countryIcon = egyptIcon;
    countryName = "Egypt";
    keyIcon = PurpleKey;
    keyColor = "Purple";
    reqPoints = "50";
  }

  const playGame = () => {
    setDisable(true);
    callDartApi(
      `${baserUrl}api/activity/eidAl/playGame?playCount=${input}&type=${type}`,
      userId,
      userToken
    )
      .then((response) => {
        if (response.msg === "success") {
          setAnimation(true);
          const keyCount = response?.data?.keysCount;
          setKeysFound(keyCount);
          const exploreNum = response?.data?.explorePoints;
          if (input === 1) {
            setTimeout(() => {
              setkeyAnimation(true);
              setTimeout(() => {
                setAlert(true);
                setAlertpopup(
                  successAlert(
                    congratulations,
                    <div className="w-100 fd-column d-flex al-center jc-center gap-2">
                      <div className="w-80">
                        You have successfully explored {countryName}{" "}
                        <img className="iconn" src={countryIcon} alt="" /> and
                        have found {keyCount}{" "}
                        <img className="iconn" src={keyIcon} alt="" />{" "}
                        {keyColor} {keyCount === 1 ? "key" : "keys"}, & got{" "}
                        {exploreNum}{" "}
                        <img className="iconn" src={exploreIcon} alt="" />{" "}
                        explore points. You have won
                      </div>
                      <div
                        className={
                          response?.data?.rewardList?.length > 3
                            ? "rews-box-max d-flex al-start jc-center gap-3"
                            : "rews-box d-flex al-start jc-center gap-3"
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
                                {item?.desc == "Beans" ? (
                                  <>x{item?.count} Beans</>
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
              }, 3000);
            }, 2200);
          } else {
            setTimeout(() => {
              setkeyAnimation(true);
              setTimeout(() => {
                setAlert(true);
                setAlertpopup(
                  successAlert(
                    amazingTour,
                    <div className="w-100 d-flex fd-column al-center jc-center gap-3">
                      <div className="w-80">
                        You have successfully explored {countryName}{" "}
                        <img className="iconn" src={countryIcon} alt="" /> and
                        have found {keyCount}{" "}
                        <img className="iconn" src={keyIcon} alt="" />{" "}
                        {keyColor} {keyCount === 1 ? "key" : "keys"}, & got{" "}
                        {exploreNum}{" "}
                        <img className="iconn" src={exploreIcon} alt="" />{" "}
                        explore points. You have won
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
                                {item?.desc == "Beans" ? (
                                  <>x{item?.count} Beans</>
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
              }, 3000);
            }, 2200);
          }
        } else if (response.msg === "GAME_POINT_NOT_ENOUGH") {
          setAlert(true);
          setAlertpopup(
            unsuccessAlert(
              oopsHead,
              <div className="w-100">
                You don’t have enough Eidi Points{" "}
                <img className="iconn" src={eidiPointIcon} alt="" /> right now
                to play, send more event gifts & come back again.
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
    setInput(1);
    setKeysFound(0);
    setAnimation(false);
    setkeyAnimation(false);
  };
  return (
    <>
      <div className="eid-game p-rel d-flex fd-column al-center jc-start">
        <GamePoints
          tab1={tab1}
          text="My Eidi Points:"
          icon={eidiIcon}
          points={gamePoints}
          pointsBg={pointsBg}
        />
        <SelectCountry
          country={country}
          setCountry={setCountry}
          animation={animation}
          keysFound={keysFound}
          keyAnimation={keyAnimation}
        />
        <EidGameButtons
          points={gamePoints}
          input={input}
          setInput={setInput}
          playGame={playGame}
          reqPoints={reqPoints}
        />
        <BeansTreasureBox
          country={country}
          keyInfo={keyInfo}
          explorePoints={explorePoints}
          visitTimes={visitTimes}
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

export default EidGame;
