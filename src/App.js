import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import LanguageBar from "./components/common/LanguageBar";
import { header } from "./utils/images";
import PopupButtons from "./components/PopupButtons";
import { overFlowAuto, overFlowHidden } from "./js/helpers";
import axios from "axios";
import { ApiContext } from "./services/Api";
import { baserUrl } from "./js/baserUrl";
import Marque from "./components/Marquee";
import MainButtons from "./components/MainButtons";
import Footer from "./components/common/Footer";
import btnUp from "./assets/top.png";
import tab1Bg from "./assets/bg.jpg";
import tab2Bg from "./assets/tab2Bg.jpg";

const App = () => {
  let [language, setLanguage] = useState("English");
  const [showBtnUp, setShowBtnUp] = useState(false);
  const [history, setHistory] = useState(false);
  const [gameRecords, setgameRecords] = useState([]);
  const [loadMore, setLoadMore] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { userId, userInfo } = useContext(ApiContext);
  const [mainTabs, setMainTabs] = useState({
    tab1: true,
    tab2: false,
  });
  const [popup, setPopup] = useState({
    guide: false,
    records: false,
    eventGifting: false,
    details: false,
  });
  const popupSwitch = (id) => {
    let newCat = {
      guide: false,
      records: false,
      eventGifting: false,
      details: false,
    };
    setPopup({ ...newCat, [id]: true });
    overFlowHidden();
  };
  const loadMoreHistory = () => {
    setLoadMore(loadMore + 1);
  };
  useEffect(() => {
    if (userId > 0) {
      setIsLoading(true);
      axios
        .get(
          `${baserUrl}api/activity/eidF/getRecordInfoV2?eventDesc=20250604_eidi_al_adha&rankIndex=21&pageNum=${loadMore}&pageSize=20&type=${
            mainTabs.tab1 ? 1 : 2
          }&userId=${userId}`
        )
        .then((response) => {
          if (loadMore >= 2) {
            setgameRecords((prev) => [...prev, response?.data?.data?.list]);
          } else {
            setgameRecords([response?.data?.data?.list]);
          }
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [userInfo, loadMore, userId, mainTabs]);
  const close = () => {
    setPopup(false);
    overFlowAuto();
    setHistory(false);
    setLoadMore(1);
  };
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setShowBtnUp(true);
      } else {
        setShowBtnUp(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="App"
      style={
        mainTabs.tab1
          ? { backgroundImage: `url(${tab1Bg})` }
          : { backgroundImage: `url(${tab2Bg})` }
      }
    >
      <span id="extraContent"></span>
      <LanguageBar setLanguage={setLanguage} language={language} />
      {mainTabs.tab1 ? <Marque mainTabs={mainTabs} /> : null}
      <img className="w-100" src={header} alt="" />
      <MainButtons mainTabs={mainTabs} setMainTabs={setMainTabs} />
      <PopupButtons
        mainTabs={mainTabs}
        popupSwitch={popupSwitch}
        close={close}
        popup={popup}
        language={language}
        history={history}
        gameRecords={gameRecords}
        loadMoreHistory={loadMoreHistory}
        isLoading={isLoading}
      />
      <Footer />
      {showBtnUp && (
        <button
          className="btn-up"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={btnUp} alt="" />
        </button>
      )}
    </div>
  );
};

export default App;
