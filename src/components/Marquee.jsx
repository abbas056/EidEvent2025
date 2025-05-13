import React, { useContext } from "react";
import FastMarquee from "react-fast-marquee";
import { ApiContext } from "../services/Api";
import { dummyData, goTo, slicePlease } from "../js/helpers";
import borderImg from "../assets/TickertapeFrame.png";
import { unknown } from "../utils/images";
function Marque({ mainTabs }) {
  const { isLive } = useContext(ApiContext);
  let tab1winners = slicePlease(dummyData, 0, 3);

  return (
    <>
      <div className="marque-container f-tangoSansItalic">
        <FastMarquee
          direction="left"
          gradient={false}
          gradientColor={[0, 0, 0]}
          speed={70}
        >
          {tab1winners?.map((item, index) => {
            const userId = item.userId;
            const userScore = item?.userScore;
            return (
              <div className="marquee-alternative" key={index}>
                <div className="taxts d-flex al-center p-rel">
                  <img
                    onClick={() => {
                      goTo(isLive, userId, userId);
                    }}
                    className="border-img p-abs"
                    src={borderImg}
                    alt=""
                  />
                  <img
                    style={{ outline: "none" }}
                    className="user-img p-abs"
                    src={item.portrait ? item.portrait : unknown}
                    alt=""
                  />
                  <div className="text">
                    <div className="content d-flex al-start ">
                      <div className="nick-name">
                        <span>{item.nickName}</span> has won{" "}
                        <span> {userScore}</span> in Eid Around the World game.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </FastMarquee>
      </div>
    </>
  );
}

export default Marque;
