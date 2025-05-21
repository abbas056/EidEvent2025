import axios from "axios";
import { unknown } from "../utils/images";
import crossBtn from "../assets/crossbtn.png";
import turkeyIcon from "../assets/Popup-icons/turkey-icon.png";
import tunisiaIcon from "../assets/Popup-icons/tunisia-icon.png";
import bahrainIcon from "../assets/Popup-icons/bahrain-icon.png";
import egyptIcon from "../assets/Popup-icons/egypt-icon.png";

export const overFlowHidden = () => {
  if (typeof window !== "undefined" && window.document) {
    // Save the current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.classList.add("no-scroll");
  }
};
export const overFlowAuto = () => {
  if (typeof window !== "undefined" && window.document) {
    // Retrieve the scroll position and reset
    const scrollY = parseInt(document.body.style.top || "0", 10) * -1;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.classList.remove("no-scroll");
    window.scrollTo(0, scrollY);
  }
};
export const currencySlang = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
export const slicePlease = (array, from, to) => {
  const cutting = array?.slice(from, to);
  return cutting;
};
export const formatData = (originalArray) => {
  const newArray = [];
  for (let i = 0; i < originalArray?.length; i += 3) {
    newArray?.push(originalArray?.slice(i, i + 3));
  }
  return newArray;
};
export function goTo(isLive, userId, roomId) {
  if (window.UA.android) {
    let url = "streamkar://m.streamkar.com/route";
    if (isLive) {
      url = url + "/room?roomId=" + roomId;
    } else {
      url = url + "/user?userId=" + userId;
    }
    if (userId || roomId) {
      window.phone.routeViewPage(url);
    }
  } else {
    window.location.href = "http://www.kktv1.com/m/?roomid=" + userId + "";
  }
}
export const callDartApi = async (url, uid, uToken) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      userId: uid,
      token: uToken,
    },
  };
  const result = await axios.request(config);
  return result.data;
};
export const captureImageError = (event) => {
  event.target.src = unknown;
  return true;
};
export const cross = () => {
  let cross;
  cross = crossBtn;
  return cross;
};
export const successAlert = (yayy, data) => [
  {
    headtext: `${yayy}`,
    data: <>{data}</>,
  },
];
export const unsuccessAlert = (oops, msj) => [
  {
    headtext: `${oops}`,
    data: <>{msj}</>,
  },
];
export const estBeans = (beansValue, country) => {
  let beans;

  if (country.Turkey) {
    beans = Math.floor((beansValue * 10) / 100);
  } else if (country.Tunisia) {
    beans = Math.floor((beansValue * 20) / 100);
  } else if (country.Bahrain) {
    beans = Math.floor((beansValue * 30) / 100);
  } else {
    beans = Math.floor((beansValue * 40) / 100);
  }

  return beans;
};
export const dummyData = [
  {
    userId: 502184267,
    userScore: 3499650000,
    nickName: "Ayaz Alam",
    gender: 1,
    userLevel: 119,
    actorLevel: 0,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000035,
    userScore: 499950000,
    nickName: "test啊啊",
    gender: 1,
    userLevel: 24,
    actorLevel: 10,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 502184264,
    userScore: 128700000,
    nickName: "Kamran Za",
    gender: 1,
    userLevel: 101,
    actorLevel: 0,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128",
  },
  {
    userId: 502184266,
    userScore: 56000000,
    nickName: "PM",
    gender: 1,
    userLevel: 119,
    actorLevel: 0,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 550002950,
    userScore: 50025000,
    nickName: "amain amir2950asdtyu",
    gender: 1,
    userLevel: 59,
    actorLevel: 61,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/550002950_0_1522315889638.jpg!128",
  },
  {
    userId: 502184263,
    userScore: 14175000,
    nickName: "Asif Gu263ab",
    gender: 1,
    userLevel: 119,
    actorLevel: 61,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/502184263_0_1603024352974.png!128",
  },
  {
    userId: 596490297,
    userScore: 4950000,
    nickName: "嘚驾~~😆😆😆😆",
    gender: 1,
    userLevel: 43,
    actorLevel: 18,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/596490297_0_1641434774871.png!128",
  },
  {
    userId: 502184267,
    userScore: 3499650000,
    nickName: "Ayaz Alam",
    gender: 1,
    userLevel: 119,
    actorLevel: 0,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000035,
    userScore: 499950000,
    nickName: "test啊啊",
    gender: 1,
    userLevel: 24,
    actorLevel: 10,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 502184264,
    userScore: 128700000,
    nickName: "Kamran Za",
    gender: 1,
    userLevel: 101,
    actorLevel: 0,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128",
  },
  {
    userId: 502184266,
    userScore: 56000000,
    nickName: "PM",
    gender: 1,
    userLevel: 119,
    actorLevel: 0,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 550002950,
    userScore: 50025000,
    nickName: "amain amir2950asdtyu",
    gender: 1,
    userLevel: 59,
    actorLevel: 61,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/550002950_0_1522315889638.jpg!128",
  },
  {
    userId: 502184263,
    userScore: 14175000,
    nickName: "Asif Gu263ab",
    gender: 1,
    userLevel: 119,
    actorLevel: 61,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/502184263_0_1603024352974.png!128",
  },
  {
    userId: 596490297,
    userScore: 4950000,
    nickName: "嘚驾~~😆😆😆😆",
    gender: 1,
    userLevel: 43,
    actorLevel: 18,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/596490297_0_1641434774871.png!128",
  },
];
export const keys = {
  errorCode: 0,
  msg: "success",
  data: {
    keys: [
      {
        0: 0,
        1: 1,
        2: 3,
        3: 1,
      },
    ],
  },
};
export const countryIcon = (rank) => {
  let icon;
  if (rank === 1) {
    icon = turkeyIcon;
  } else if (rank === 2) {
    icon = tunisiaIcon;
  } else if (rank === 3) {
    icon = bahrainIcon;
  } else {
    icon = egyptIcon;
  }
  return icon;
};
export const estCalculation = (beansValue, index, lbButtonsTop) => {
  let beans;
  if (lbButtonsTop.btn1) {
    if (index === 1) {
      beans = Math.floor((beansValue * 40) / 100);
    } else if (index === 2) {
      beans = Math.floor((beansValue * 30) / 100);
    } else if (index === 3) {
      beans = Math.floor((beansValue * 10) / 100);
    } else if (index === 4) {
      beans = Math.floor((beansValue * 10) / 100);
    } else {
      beans = Math.floor((beansValue * 10) / 100);
    }
  } else {
    if (index === 1) {
      beans = Math.floor((beansValue * 50) / 100);
    } else if (index === 2) {
      beans = Math.floor((beansValue * 30) / 100);
    } else {
      beans = Math.floor((beansValue * 20) / 100);
    }
  }
  return beans;
};
