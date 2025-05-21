// src/services/api.js

import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { baserUrl } from "../js/baserUrl";

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
        token: "A14ECE9B090FEB41C6941927CE5740EF6D",
      });

      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    if (user.uid > 0) {
      setIsLoading(true);
      axios
        .get(
          `${baserUrl}api/activity/eidAl/getUserEventInfo?userId=${user.uid}`
        )
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
          `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20250604_eidi_al_adha&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${dateToUse},${countryId}`
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
        `${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20250604_eidi_al_adha&rankIndex=2&pageNum=1&pageSize=20`
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
        `${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20250604_eidi_al_adha&rankIndex=1&pageNum=1&pageSize=20`
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

  const [eventGiftingLeaderboardData, seteventGiftingLeaderboardData] =
    useState([]);
  const [lbButtonsTop, setlbButtonsTop] = useState({
    btn1: true,
    btn2: false,
  });
  const [lbMiddle, setlbMiddle] = useState({
    btn1: true,
    btn2: false,
  });
  const [lbDayButtons, setlbDayButtons] = useState({
    btn1: true,
    btn2: false,
  });

  useEffect(() => {
    if (user.uid > 0) {
      setIsLoading(true);

      let rankIndex = null;
      let dayIndex = null;

      if (lbButtonsTop.btn1 && lbMiddle.btn1) {
        rankIndex = 14;
        dayIndex = lbDayButtons.btn1 ? CurrentDate : PreviousDate;
      } else if (lbButtonsTop.btn1 && lbMiddle.btn2) {
        rankIndex = 12;
      } else if (lbButtonsTop.btn2 && lbMiddle.btn1) {
        rankIndex = 13;
        dayIndex = lbDayButtons.btn1 ? CurrentDate : PreviousDate;
      } else if (lbButtonsTop.btn2 && lbMiddle.btn2) {
        rankIndex = 11;
      }

      // Choose correct API
      const apiUrl = dayIndex
        ? `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20250604_eidi_al_adha&rankIndex=${rankIndex}&pageNum=1&pageSize=20&dayIndex=${dayIndex}`
        : `${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20250604_eidi_al_adha&rankIndex=${rankIndex}&pageNum=1&pageSize=20`;

      axios
        .get(apiUrl)
        .then((response) => {
          seteventGiftingLeaderboardData(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [
    user,
    refresh,
    lbButtonsTop,
    lbMiddle,
    lbDayButtons,
    CurrentDate,
    PreviousDate,
  ]);

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
          lbButtonsTop,
          setlbButtonsTop,
          lbMiddle,
          setlbMiddle,
          lbDayButtons,
          setlbDayButtons,
          eventGiftingLeaderboardData: eventGiftingLeaderboardData?.data,
        }}
      >
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export { ApiContext, EventProvider };
