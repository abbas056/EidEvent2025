import React from "react";
import Loader from "../common/Loader";
import { cross } from "../../js/helpers";
import { rewardImages } from "../../utils/images";
import recordsTitle from "../../assets/popups/Records/title.png";

function Records({ close, gameRecords, loadMoreHistory, isLoading, mainTabs }) {
  let rewardsList = gameRecords[0] ? gameRecords.flat() : [];

  return (
    <div className="rewards-history p-rel d-flex al-center jc-center f-tangoSans">
      <img className="head p-abs m-auto" src={recordsTitle} alt="" />
      <div className="inner-content m-auto">
        {mainTabs.tab1 ? (
          <div className="table m-auto d-flex jc-center al-center mb-5 fd-column">
            <div className="heading d-flex">
              <div className="d-flex al-center jc-center w-20">Time (GMT)</div>
              <div className="d-flex al-center jc-center w-20">
                Explore Points
              </div>
              <div className="d-flex al-center jc-center w-20">Key Found</div>
              <div className="d-flex al-center jc-center w-40">Rewards</div>
            </div>
            <div className="body d-flex al-center jc-center">
              {rewardsList?.length === 0 ? (
                <p className="no-data w-100">No Records Found</p>
              ) : (
                <div
                  className={
                    rewardsList?.length <= 2
                      ? "table-data d-flex fd-column "
                      : "table-data-max d-flex fd-column "
                  }
                >
                  {rewardsList?.map((array, index) => {
                    const rewardDTOList = array?.rewardDTOList;
                    const country = array?.map?.country;
                    const keysColor = array?.map?.keysColor;
                    const explorePoints = array?.map?.explorePoints;
                    const keysCount = array?.map?.keysCount;
                    const timeGMT = array?.time;
                    const formattedDate = new Date(timeGMT);
                    return (
                      <div
                        key={index}
                        className="d-flex w-100"
                        style={{
                          borderRadius: "10vw",
                        }}
                      >
                        <div className=" w-20 d-flex al-center jc-center border-1-w bg-orange">
                          {formattedDate.toUTCString()}
                        </div>
                        <div className=" w-20 d-flex al-center jc-center border-1-w bg-orange">
                          {explorePoints}
                        </div>
                        <div className=" w-20 d-flex al-center jc-center border-1-w bg-orange">
                          {keysCount} {keysColor} <br />
                          {keysCount <= 1 ? "Key" : "Keys"}
                        </div>
                        <div className=" w-40 d-flex flex-wrap jc-center al-start  gap-2  border-1-w bg-orange pb-1 pt-1">
                          {rewardDTOList.length === 0 ? (
                            <div className="d-flex al-center fd-column jc-center">
                              <img
                                src={rewardImages("")}
                                style={{ width: "8vw" }}
                              />
                              <span>No reward</span>
                            </div>
                          ) : (
                            rewardDTOList?.map((obj, index) => {
                              return (
                                <div
                                  key={index}
                                  className="rews d-flex al-center jc-center fd-column w-40"
                                >
                                  <div className="rew-img d-flex al-center jc-center">
                                    <img src={rewardImages(obj.desc)} alt="" />
                                  </div>
                                  <div className="desc">
                                    {obj.desc == "Beans" ||
                                    obj.desc == "gems" ? (
                                      <>
                                        {obj.desc} x{obj.count}
                                      </>
                                    ) : (
                                      <>
                                        {obj.desc} x{obj.count}
                                      </>
                                    )}
                                    {obj.desc == "Beans" ||
                                    obj.desc == "gems" ? null : (
                                      <>{obj.count == 1 ? " day" : " days"}</>
                                    )}
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="table m-auto d-flex jc-center al-center mb-5 fd-column">
            <div className="heading d-flex">
              <div className="d-flex al-center jc-center w-40">Time (GMT)</div>
              <div className="d-flex al-center jc-center w-60">Rewards</div>
            </div>
            <div className="body d-flex al-center jc-center">
              {rewardsList?.length === 0 ? (
                <p className="no-data w-100">No Records Found</p>
              ) : (
                <div
                  className={
                    rewardsList?.length <= 2
                      ? "table-data d-flex fd-column "
                      : "table-data-max d-flex fd-column "
                  }
                >
                  {rewardsList?.map((array, index) => {
                    const timeGMT = array?.time;
                    const rewardDTOList = array?.rewardDTOList;
                    const formattedDate = new Date(timeGMT);
                    return (
                      <div
                        key={index}
                        className="d-flex w-100"
                        style={{
                          borderRadius: "10vw",
                        }}
                      >
                        <div className=" w-40 d-flex al-center jc-center border-1-w bg-orange">
                          {formattedDate.toUTCString()}
                        </div>

                        <div className=" w-60 d-flex flex-wrap jc-center al-start  gap-2  border-1-w bg-orange pb-1 pt-1">
                          {rewardDTOList.length === 0 ? (
                            <div className="d-flex al-center fd-column jc-center">
                              <img
                                src={rewardImages("")}
                                style={{ width: "8vw" }}
                              />
                              <span>No reward</span>
                            </div>
                          ) : (
                            rewardDTOList?.map((obj, index) => {
                              return (
                                <div
                                  key={index}
                                  className="rews d-flex al-center jc-center fd-column w-40"
                                >
                                  <div className="rew-img d-flex al-center jc-center">
                                    <img src={rewardImages(obj.desc)} alt="" />
                                  </div>
                                  <div className="desc">
                                    {obj.desc == "Beans" ||
                                    obj.desc == "Gems" ? (
                                      <>
                                        {obj.desc} x{obj.count}
                                      </>
                                    ) : (
                                      <>
                                        {obj.desc} x{obj.count}
                                      </>
                                    )}
                                    {obj.desc == "Beans" ||
                                    obj.desc == "Gems" ? null : (
                                      <>{obj.count == 1 ? " day" : " days"}</>
                                    )}
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
        <>
          {gameRecords[gameRecords?.length - 1]?.length >= 10 ? (
            <div className="see-btn" onClick={loadMoreHistory}>
              <button className="see-more f-acme">
                {isLoading ? <Loader /> : "See More"}
              </button>
            </div>
          ) : null}
        </>
      </div>
      <div className="modal-close p-abs" onClick={close}>
        <img src={cross()} alt="" />
      </div>
    </div>
  );
}

export default Records;
