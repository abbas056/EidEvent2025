import React, { useContext, useEffect, useState } from "react";
import pointsIcon from "../assets/ExplorePointsIcon.png";
import openBtn from "../assets/OpenButton.png";
import Keys from "./Keys";
import keyIcon from "../assets/RedKey.png";
import {
  callDartApi,
  cross,
  overFlowAuto,
  overFlowHidden,
  successAlert,
  unsuccessAlert,
} from "../js/helpers";
import handIcon from "../assets/Hand.png";
import { ApiContext } from "../services/Api";
import openChestBg from "../assets/OpenChest.png";
import closeChestBg from "../assets/ClosedChest.png";
import { oopsHead, treasureUnlock } from "../utils/images";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../js/baserUrl";

function BeansTreasureBox({ country, keyInfo, explorePoints, visitTimes }) {
  const { userId, userToken, refreshApi, disable, setDisable } =
    useContext(ApiContext);
  const [showAlert, setShowAlert] = useState(false);
  const [chestOpen, setchestOpen] = useState(false);
  const [alertpopup, setAlertpopup] = useState([]);
  const red = parseInt(keyInfo?.["1"] || 0, 10);
  const blue = parseInt(keyInfo?.["2"] || 0, 10);
  const green = parseInt(keyInfo?.["3"] || 0, 10);
  const purple = parseInt(keyInfo?.["4"] || 0, 10);
  const isActive = red >= 1 && blue >= 1 && green >= 1 && purple >= 1;

  const countryIndexMap = {
    Turkey: "1",
    Tunisia: "2",
    Bahrain: "3",
    Egypt: "4",
  };
  const selectedCountry = Object.keys(country || {}).find((c) => country[c]);
  const selectedExplorePoints =
    selectedCountry &&
    explorePoints &&
    explorePoints[countryIndexMap[selectedCountry]]
      ? explorePoints[countryIndexMap[selectedCountry]]
      : 0;
  const openChest = () => {
    setDisable(true);
    callDartApi(`${baseUrl}api/activity/eidAl/open`, userId, userToken)
      .then((response) => {
        if (response.msg === "success") {
          const beansValue = response?.data?.openBoxTimes * 1000;
          setchestOpen(true);
          setTimeout(() => {
            setShowAlert(true);
            setAlertpopup(
              successAlert(
                treasureUnlock,
                <div className="w-100 fd-column d-flex al-center jc-center gap-2">
                  <div className="w-80">
                    You have successfully opened the Beans Treasure Box using
                    your magical keys{" "}
                    <img
                      style={{ width: "4vw", verticalAlign: "middle" }}
                      src={keyIcon}
                      alt=""
                    />{" "}
                    & have won {beansValue} beans.
                  </div>
                </div>
              )
            );
            overFlowHidden();
            refreshApi();
          }, 2000);
        } else if (response.msg === "BEANS_BOX_LIMIT") {
          setTimeout(() => {
            setShowAlert(true);
            setAlertpopup(
              successAlert(
                oopsHead,
                <div className="w-100 fd-column d-flex al-center jc-center gap-2">
                  <div className="w-80">
                    Daily limit of Bonus beans reward is reached, Come back
                    tommorw to get your Bonus reward.
                  </div>
                </div>
              )
            );
            overFlowHidden();
            refreshApi();
          }, 2000);
        } else {
          setShowAlert(true);
          setAlertpopup(unsuccessAlert(oopsHead, response.msg));
          overFlowHidden();
        }
      })
      .catch((error) => {
        setShowAlert(true);
        setAlertpopup(unsuccessAlert(oopsHead, error.message));
        overFlowHidden();
      });
  };

  const closePopup = () => {
    overFlowAuto();
    setDisable(false);
    setShowAlert(false);
    setchestOpen(false);
  };

  const [toast, setToast] = useState({
    success: "",
    msg: "",
  });
  useEffect(() => {
    if (toast.success !== "") {
      setTimeout(() => {
        setToast({
          success: "",
          msg: "",
        });
      }, 3000);
    }
    return () => {};
  }, [toast]);
  return (
    <>
      <div className="BeansTreasureBox p-abs">
        <div className="heading f-tangoSans">BEANS TREASURE BOX</div>
        {toast.success != "" && <span className="toast">{toast.msg}</span>}
        <div
          className="treasure-box d-flex fd-column al-center jc-center"
          style={
            chestOpen
              ? { backgroundImage: `url(${openChestBg})`, height: "80vw" }
              : { backgroundImage: `url(${closeChestBg})`, height: "75vw" }
          }
        >
          <Keys
            red={red}
            blue={blue}
            green={green}
            purple={purple}
            chestOpen={chestOpen}
          />
          <button
            disabled={disable}
            onClick={() => {
              if (!isActive) {
                setToast({
                  success: "SUCCESS",
                  msg: (
                    <>
                      <b> You're almost there!</b>
                      <br />
                      Collect all key colors to open
                    </>
                  ),
                });
                return;
              }
              openChest();
            }}
          >
            <img
              className={disable || !isActive ? "gray-1" : "gray-0"}
              src={openBtn}
              alt=""
            />
          </button>
          {isActive ? (
            <img className="hand p-abs" src={handIcon} alt="" />
          ) : null}
        </div>
        <div className="explore-points d-flex al-center jc-center gap-2 f-tangoSansItalic">
          <img src={pointsIcon} alt="Points" />
          <div className="d-flex fd-column al-center jc-center">
            <span>My Daily Explore Points:</span>
            <span>{selectedExplorePoints}</span>
          </div>
        </div>
      </div>

      <div
        className="overlay"
        style={{ visibility: showAlert ? "visible" : "hidden" }}
      >
        {showAlert && (
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

export default BeansTreasureBox;
