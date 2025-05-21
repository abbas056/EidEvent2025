import React, { useContext } from "react";
import Guide from "./popups/Guide";
import Records from "./popups/Records";
import { ApiContext } from "../services/Api";
import guideBtn from "../assets/Guide-btn.png";
import recordBtn from "../assets/Records.png";
import eventGiftingBtn from "../assets/event-Gifting.png";
import detailsBtn from "../assets/Details.png";
import EventGifting from "./popups/EventGifting";
import Details from "./popups/Details";

function PopupButtons({
  popupSwitch,
  mainTabs,
  close,
  popup,
  language,
  history,
  gameRecords,
  loadMoreHistory,
  isLoading,
}) {
  const { disable } = useContext(ApiContext);

  return (
    <>
      <div className="popup-buttons">
        <button
          disabled={disable}
          className="p-abs guideBtn"
          onClick={() => popupSwitch("guide")}
        >
          <img src={guideBtn} alt="" />
        </button>
        <button
          disabled={disable}
          className="p-abs RecordsBtn"
          onClick={() => popupSwitch("records")}
        >
          <img src={recordBtn} alt="" />
        </button>
        <button
          disabled={disable}
          className="p-fix eventGiftingBtn"
          onClick={() => popupSwitch("eventGifting")}
        >
          <img src={eventGiftingBtn} alt="" />
        </button>{" "}
        <button
          disabled={disable}
          className="p-abs detailsBtn"
          onClick={() => popupSwitch("details")}
        >
          <img src={detailsBtn} alt="" />
        </button>
      </div>
      <div
        className="overlay"
        style={{ visibility: popup.guide ? "visible" : "hidden" }}
      >
        {popup.guide ? <Guide close={close} language={language} /> : null}
      </div>
      <div
        className="overlay"
        style={{ visibility: popup.eventGifting ? "visible" : "hidden" }}
      >
        {popup.eventGifting ? (
          <EventGifting close={close} eventGifting={popup.eventGifting} />
        ) : null}
      </div>
      <div
        className="overlay"
        style={{ visibility: popup.details ? "visible" : "hidden" }}
      >
        {popup.details ? <Details close={close} mainTabs={mainTabs} /> : null}
      </div>
      <div
        className="overlay"
        style={{ visibility: popup.records ? "visible" : "hidden" }}
      >
        {popup.records ? (
          <Records
            mainTabs={mainTabs}
            close={close}
            history={history}
            gameRecords={gameRecords}
            loadMoreHistory={loadMoreHistory}
            isLoading={isLoading}
          />
        ) : null}
      </div>
    </>
  );
}

export default PopupButtons;
