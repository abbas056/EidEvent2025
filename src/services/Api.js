// src/services/api.js

import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";
import axios from "axios";
import { baseUrl } from "../js/baserUrl";

const ApiContext = createContext();

function EventProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [tab1leaderboardData, setTab1LeaderboardData] = useState([]);
  const [tab2leaderboardData, setTab2LeaderboardData] = useState([]);
  const [tab1Tickertape, settab1Tickertape] = useState([]);

  const [disable, setDisable] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    uid: 0,
    token: undefined,
  });

  const isLive = false;
  const refreshApi = () => {
    setRefresh(!refresh);
  };

  const cd = new Date();
  const pd = new Date(cd);
  pd.setDate(cd.getDate() - 1);

  const formatDate = (date) => {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const CurrentDate = formatDate(cd);
  const PreviousDate = formatDate(pd);

  const [country, setCountry] = useState({
    Turkey: true,
    Tunisia: false,
    Bahrain: false,
    Egypt: false,
  });
  const [subButton, setsubButton] = useState({
    btn1: true,
    btn2: false,
  });
  const countryId = useMemo(() => {
    if (country.Turkey) return 1;
    if (country.Tunisia) return 2;
    if (country.Bahrain) return 3;
    return 4;
  }, [country]);

  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          uid: userInfo.userId > 0 ? userInfo.userId : 0,
          token: userInfo.token !== "" ? userInfo.token : null,
        });
        alert(userInfo.token);
      });
    } catch (_error) {
      setUser({
        uid: 596492375,
        token: "A1DE844F71DF3949E891BFC652D39D596A",
      });

      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    if (user.uid > 0) {
      setIsLoading(true);
      axios
        .get(`${baseUrl}api/activity/eidAl/getUserEventInfo?userId=${user.uid}`)
        .then((response) => {
          setUserInfo(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [user, refresh]);

  useEffect(() => {
    if (user.uid > 0 && countryId) {
      setIsLoading(true);
      const dateToUse = subButton.btn1 ? CurrentDate : PreviousDate;

      axios
        .get(
          `${baseUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20250604_eidi_al_adha&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${dateToUse},${countryId}`
        )
        .then((response) => {
          setTab1LeaderboardData(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [user, refresh, countryId, subButton]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baseUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20250604_eidi_al_adha&rankIndex=2&pageNum=1&pageSize=20`
      )
      .then((response) => {
        setTab2LeaderboardData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [user, refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baseUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20250604_eidi_al_adha&rankIndex=1&pageNum=1&pageSize=20`
      )
      .then((response) => {
        settab1Tickertape(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [user, refresh]);

  //Event Gifting APIs
  const eventDesc = "20250604_eidi_al_adha";
  const [gifterOverall, setgifterOverall] = useState([]);
  const [talentOverall, settalentOverall] = useState([]);
  const [gifterToday, setgifterToday] = useState([]);
  const [gifterPrevious, setgifterPrevious] = useState([]);
  const [talentToday, settalentToday] = useState([]);
  const [talentPrevious, settalentPrevious] = useState([]);
  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, gifterOverall: true }));
    axios
      .get(
        `${baseUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=11&pageNum=1&pageSize=20`
      )
      .then((res) => setgifterOverall(res.data))
      .catch((err) => console.error("Error in gifterOverall:", err))
      .finally(() =>
        setIsLoading((prev) => ({ ...prev, gifterOverall: false }))
      );
  }, []);
  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, talentOverall: true }));
    axios
      .get(
        `${baseUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=12&pageNum=1&pageSize=20`
      )
      .then((res) => settalentOverall(res.data))
      .catch((err) => console.error("Error in talentOverall:", err))
      .finally(() =>
        setIsLoading((prev) => ({ ...prev, talentOverall: false }))
      );
  }, []);
  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, gifterToday: true }));
    axios
      .get(
        `${baseUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${CurrentDate}`
      )
      .then((res) => setgifterToday(res.data))
      .catch((err) => console.error("Error in gifterToday:", err))
      .finally(() => setIsLoading((prev) => ({ ...prev, gifterToday: false })));
  }, [CurrentDate]);
  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, gifterPrevious: true }));
    axios
      .get(
        `${baseUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${PreviousDate}`
      )
      .then((res) => setgifterPrevious(res.data))
      .catch((err) => console.error("Error in gifterPrevious:", err))
      .finally(() =>
        setIsLoading((prev) => ({ ...prev, gifterPrevious: false }))
      );
  }, [PreviousDate]);
  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, talentToday: true }));
    axios
      .get(
        `${baseUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${CurrentDate}`
      )
      .then((res) => settalentToday(res.data))
      .catch((err) => console.error("Error in talentToday:", err))
      .finally(() => setIsLoading((prev) => ({ ...prev, talentToday: false })));
  }, [CurrentDate]);
  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, talentPrevious: true }));
    axios
      .get(
        `${baseUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${PreviousDate}`
      )
      .then((res) => settalentPrevious(res.data))
      .catch((err) => console.error("Error in talentPrevious:", err))
      .finally(() =>
        setIsLoading((prev) => ({ ...prev, talentPrevious: false }))
      );
  }, [PreviousDate]);
  return (
    <div>
      <ApiContext.Provider
        value={{
          isLoading,
          setIsLoading,
          refreshApi,
          disable,
          setDisable,
          isLive,
          CurrentDate,
          PreviousDate,
          userId: user?.uid,
          userToken: user?.token,
          userInfo: userInfo?.data,
          tab1leaderboardData: tab1leaderboardData?.data,
          tab2leaderboardData: tab2leaderboardData?.data,
          tab1Tickertape: tab1Tickertape?.data,
          country,
          setCountry,
          subButton,
          setsubButton,
          gifterOverall: gifterOverall?.data,
          talentOverall: talentOverall?.data,
          gifterToday: gifterToday?.data,
          gifterPrevious: gifterPrevious?.data,
          talentToday: talentToday?.data,
          talentPrevious: talentPrevious?.data,
        }}
      >
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export { ApiContext, EventProvider };
