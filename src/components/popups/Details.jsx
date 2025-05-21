import React from "react";
import { cross } from "../../js/helpers";
import { tab1Details } from "../../js/data";
import detailsBg1 from "../../assets/popups/details/bg.png";
import detailsBg2 from "../../assets/popups/details/smallbg.png";
import detailsTitle from "../../assets/popups/details/title.png";
import { tab2Details } from "./../../js/data";

function Details({ close, mainTabs }) {
  return (
    <>
      {mainTabs.tab1 ? (
        <div
          className="details-popup f-tangoSans p-rel"
          style={{ backgroundImage: `url(${detailsBg1})` }}
        >
          <img className="title p-abs" src={detailsTitle} alt="" />
          <div className="inner-content m-auto">
            <div
              className="head d-flex w-100"
              style={
                mainTabs.tab1 ? { fontSize: "1.7vw" } : { fontSize: "2vw" }
              }
            >
              <div className="w-15 bg-brown d-flex">
                Button <br /> Name
              </div>
              <div className="w-15 bg-brown d-flex">
                Country <br /> Name
              </div>
              <div className="w-10 bg-brown d-flex">Eidi Points Req</div>
              <div className="w-10 bg-brown d-flex">Key</div>
              <div className="w-10 bg-brown d-flex">Explore Points</div>
              <div className="w-40 bg-brown d-flex border-b">Rewards</div>
            </div>

            <div className="body">
              {tab1Details?.data?.map((data, i) => (
                <div className="row d-flex w-100" key={i}>
                  <div className="box w-15 d-flex al-center jc-center">
                    Explore
                  </div>
                  <div className="box w-15 d-flex al-center jc-center">
                    {data.country}
                  </div>
                  <div className="box w-10 d-flex al-center jc-center">
                    {data.pointsReq}
                  </div>
                  <div className="box w-10 d-flex al-center jc-center">
                    {data.key}
                  </div>
                  <div className="box w-10 d-flex al-center jc-center">
                    {data.explorePoints}
                  </div>
                  <div className="box rewards-container d-flex al-start f-wrap jc-center gap-1 w-40">
                    {data.rewards.map((items, j) => (
                      <div
                        className="d-flex fd-column al-center jc-center w-45 gap-1"
                        key={j}
                      >
                        <div className="rew-img d-flex al-center jc-center">
                          <img src={items.pic} alt="" />
                        </div>
                        <span className="details">{items.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="close p-abs" onClick={close}>
            <img src={cross()} alt="" />
          </div>
        </div>
      ) : (
        <div
          className="details-popup f-tangoSans p-rel"
          style={{ backgroundImage: `url(${detailsBg2})`, height: "110vw" }}
        >
          <img
            className="title p-abs"
            src={detailsTitle}
            alt=""
            style={{ top: "6vw" }}
          />
          <div className="inner-content m-auto" style={{ marginTop: "22vw" }}>
            <div className="head d-flex w-100">
              <div className="w-20 bg-brown d-flex">Button Name</div>
              <div className="w-20 bg-brown d-flex">Talent Points Requires</div>
              <div className="w-60 bg-brown d-flex border-b">Rewards</div>
            </div>

            <div className="body">
              {tab2Details?.data?.map((data, i) => (
                <div className="row d-flex w-100" key={i}>
                  <div className="box w-20 d-flex al-center jc-center">
                    Summon Moonlight
                  </div>
                  <div className="d-flex fd-column w-80">
                    <div className="d-flex w-100">
                      <div className="box w-25 d-flex al-center jc-center">
                        {data.pointsReq}
                      </div>
                      <div className="box rewards-container d-flex al-start f-wrap jc-center gap-1 w-75">
                        {data.rewards.map((items, j) => (
                          <div
                            className="d-flex fd-column al-center jc-center w-30 gap-1"
                            key={j}
                          >
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.pic} alt="" />
                            </div>
                            <span className="details">{items.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="close p-abs" onClick={close}>
            <img src={cross()} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
