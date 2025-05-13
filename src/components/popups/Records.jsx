import React from "react";
import Loader from "../common/Loader";
import { cross } from "../../js/helpers";
import { rewardImages } from "../../utils/images";

function Records({ close, gameRecords, loadMoreHistory, isLoading }) {
  let rewardsList = gameRecords[0] ? gameRecords.flat() : [];
  console.log(rewardsList);

  return (
    <div className="rewards-history p-rel">
      {/* <img className="head p-abs" src={recordsTitle} alt="" /> */}
      <div className="inner-content ">
        <div className="table m-auto d-flex jc-center al-start f-acme mb-5 fd-column gap-2">
          <div className="heading d-flex c-yellow f-bold">
            <div className="d-flex al-center jc-center w-40vw pt-2 pb-2">
              Time(GMT)
            </div>
            <div className="d-flex al-center jc-center w-60vw pt-2 pb-2">
              REWARDS
            </div>
          </div>
          <div className="d-flex al-center jc-center" style={{ width: "100%" }}>
            {rewardsList?.length === 0 ? (
              <p className="no-data f-acme w-100">No Records Found</p>
            ) : (
              <div
                className={
                  rewardsList?.length <= 2
                    ? "table-data d-flex fd-column gap-2"
                    : "table-data-max d-flex fd-column gap-2"
                }
              >
                {rewardsList?.map((array, index) => {
                  const apiDate = array.time;
                  const rewardDTOList = array?.rewardDTOList;
                  const formattedDate = new Date(apiDate).toLocaleString();
                  return (
                    <div
                      key={index}
                      className="d-flex w-85"
                      style={{
                        backgroundColor: "#f9bb72",
                        color: "#8d13c1",
                        borderRadius: "10vw",
                        padding: "0 5vw",
                      }}
                    >
                      <div className=" w-40vw d-flex al-center jc-center ">
                        {formattedDate}
                      </div>
                      <div className=" w-60vw d-flex flex-wrap jc-center al-start  gap-1 pt-2 pb-2">
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
                                className="rews d-flex al-center jc-center w-100  fd-column"
                                style={{ width: "15vw" }}
                              >
                                <div className="rew-img d-flex al-center jc-center">
                                  <img src={rewardImages(obj.desc)} alt="" />
                                </div>
                                <div className="desc">
                                  {obj.desc == "Beans" || obj.desc == "gems" ? (
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
