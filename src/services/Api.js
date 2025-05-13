// src/services/api.js

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baserUrl } from "../js/baserUrl";

const ApiContext = createContext();
function EventProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [dailyTalentToday, setdailyTalentToday] = useState([]);
  const [dailyTalentPrev, setdailyTalentPrev] = useState([]);
  const [dailyUserToday, setdailyUserToday] = useState([]);
  const [dailyUserPrev, setdailyUserPrev] = useState([]);
  const [dailyCombat, setdailyCombat] = useState([]);
  const [tickertape, settickertape] = useState([]);
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

  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          uid: userInfo.userId > 0 ? userInfo.userId : 0,
          token: userInfo.token !== "" ? userInfo.token : null,
        });
      });
    } catch (_error) {
      setUser({
        uid: 0,
        token: "",
      });

      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);
  useEffect(() => {
    setIsLoading(true);
    if (user.uid > 0) {
      axios
        .get(`${baserUrl}api/activity/colorCascade/getUserEventInfo?userId=${user.uid}`)
        .then((response) => {
          setUserInfo(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false); // Ensure loading state is handled even on error
        });
    }
  }, [user, refresh]);

  useEffect(() => {
    if (user.uid > 0) {
      setIsLoading(true);
      axios
        .get(
          `${baserUrl}api/activity/colorCascade/getLeaderboardInfoV2?eventDesc=20250313_color&rankIndex=11&pageNum=1&pageSize=20&userId=${user.uid}&dayIndex=${CurrentDate}`
        )
        .then((response) => {
          setdailyTalentToday(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, refresh]);

  useEffect(() => {
    if (user.uid > 0) {
      setIsLoading(true);
      axios
        .get(
          `${baserUrl}api/activity/colorCascade/getLeaderboardInfoV2?eventDesc=20250313_color&rankIndex=11&pageNum=1&pageSize=20&userId=${user.uid}&dayIndex=${PreviousDate}`
        )
        .then((response) => {
          setdailyTalentPrev(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, refresh]);

  useEffect(() => {
    if (user.uid > 0) {
      setIsLoading(true);
      axios
        .get(
          `${baserUrl}api/activity/colorCascade/getLeaderboardInfoV2?eventDesc=20250313_color&rankIndex=12&pageNum=1&pageSize=20&userId=${user.uid}&dayIndex=${CurrentDate}`
        )
        .then((response) => {
          setdailyUserToday(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, refresh]);

  useEffect(() => {
    if (user.uid > 0) {
      setIsLoading(true);
      axios
        .get(
          `${baserUrl}api/activity/colorCascade/getLeaderboardInfoV2?eventDesc=20250313_color&rankIndex=12&pageNum=1&pageSize=20&userId=${user.uid}&dayIndex=${PreviousDate}`
        )
        .then((response) => {
          setdailyUserPrev(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, refresh]);

  useEffect(() => {
    if (user.uid > 0) {
      setIsLoading(true);
      axios
        .get(`${baserUrl}api/activity/colorCascade/getPartnerShipRankInfo?pageNum=1&pageSize=20&userId=${user.uid}`)
        .then((response) => {
          setdailyCombat(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20250313_color&rankIndex=1&pageNum=1&pageSize=20`)
      .then((response) => {
        settickertape(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

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
          dailyTalentToday: dailyTalentToday?.data,
          dailyTalentPrev: dailyTalentPrev?.data,
          dailyUserToday: dailyUserToday?.data,
          dailyUserPrev: dailyUserPrev?.data,
          dailyCombat: dailyCombat?.data,
          tickertape: tickertape?.data,
        }}
      >
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export { ApiContext, EventProvider };
