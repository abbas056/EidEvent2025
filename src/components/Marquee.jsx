import React, { useContext } from "react";
import FastMarquee from "react-fast-marquee";
import { ApiContext } from "../services/Api";
import { dummyData, goTo, slicePlease } from "../js/helpers";
import borderImg from "../assets/TickertapeFrame.png";
import { unknown } from "../utils/images";

function Marquee({ mainTabs }) {
  const { isLive, tab1Tickertape } = useContext(ApiContext);
  const tab1winners = slicePlease(dummyData, 0, 3);

  // Handle potential errors in parsing
  const parseDescription = (desc) => {
    try {
      return JSON.parse(desc || "[]");
    } catch (error) {
      console.error("Error parsing description:", error);
      return [];
    }
  };

  return (
    <div className="marque-container f-tangoSansItalic">
      <FastMarquee
        direction="left"
        gradient={false}
        gradientColor={[0, 0, 0]}
        speed={70}
      >
        {tab1Tickertape?.list?.map((item, index) => {
          const userId = item.userId;
          const parsedDesc = parseDescription(item.desc);
          const beanCount =
            parsedDesc.find((obj) => obj.desc === "Beans")?.count || 0;
          return (
            <div className="marquee-alternative" key={`${userId}-${index}`}>
              <div className="taxts d-flex al-center p-rel">
                <img
                  onClick={() => goTo(isLive, userId, userId)}
                  className="border-img p-abs"
                  src={borderImg}
                  alt="border"
                  role="presentation"
                />
                <img
                  style={{ outline: "none" }}
                  className="user-img p-abs"
                  src={item.portrait || unknown}
                  alt={`${item.nickname}'s portrait`}
                />
                <div className="text">
                  <div className="content d-flex al-start">
                    <div className="nick-name">
                      <span>{item.nickname}</span> has won{" "}
                      <span>{beanCount}</span> Beans in Eid Around the World
                      game.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </FastMarquee>
    </div>
  );
}

export default Marquee;
