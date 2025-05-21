import React from "react";
import RewardSlider, { CarouselItem } from "./RewardSlider";
import { gemIcon } from "../../utils/images";
import { countryIcon } from "../../js/helpers";
function SliderItems({ tab1, rewards, rewButtonsBottom, rewButtonsTop }) {
  return (
    <>
      {rewards?.length > 0 && (
        <div className="rewards-slider m-auto">
          <div className="sliderItem d-flex fd-column al-center jc-center m-auto p-rel">
            <RewardSlider
              rewButtonsBottom={rewButtonsBottom}
              rewButtonsTop={rewButtonsTop}
              tab1={tab1}
            >
              {rewards &&
                rewards?.map((item, i) => {
                  let index = i + 1;
                  return (
                    <CarouselItem key={i}>
                      <div
                        className="inner-box d-flex fd-column al-center jc-center p-rel gap-1"
                        key={i}
                      >
                        <div
                          className="rank d-flex fd-column al-center jc-center f-tangoSansItalic"
                          style={
                            rewButtonsBottom?.overall
                              ? { padding: "1vw 3vw" }
                              : { padding: "0" }
                          }
                        >
                          {tab1 ? (
                            <div className="d-flex al-center jc-center gap-1">
                              <img
                                style={{ width: "7vw", height: "7vw" }}
                                src={countryIcon(index)}
                                alt=""
                              />
                              <div className="d-flex fd-column al-center jc-center">
                                <span style={{ fontSize: "2.8vw" }}>
                                  Top {item.rank}{" "}
                                  <sup style={{ marginLeft: "-0.7vw" }}>st</sup>
                                </span>
                                <span className="d-flex al-center jc-center">
                                  {item.country}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <>
                              <span>
                                Top {index}{" "}
                                {index === 1 ? (
                                  <sup style={{ marginLeft: "-0.7vw" }}>st</sup>
                                ) : index === 2 ? (
                                  <sup style={{ marginLeft: "-0.7vw" }}>nd</sup>
                                ) : index === 3 ? (
                                  <sup style={{ marginLeft: "-0.7vw" }}>rd</sup>
                                ) : (
                                  <sup style={{ marginLeft: "-0.7vw" }}>th</sup>
                                )}{" "}
                                {item.name}
                              </span>
                              <span> {item.target}</span>
                            </>
                          )}
                        </div>
                        <div className="rewardImg d-flex al-center jc-center gap-4">
                          {item?.frame?.map((_items, index) => (
                            <div
                              className="img-box d-flex fd-column al-center jc-center"
                              key={index}
                            >
                              <img src={_items.pic} alt="" key={index} />
                            </div>
                          ))}
                        </div>
                        <div className="desc d-flex fd-column jc-center al-center f-tangoSans">
                          {item.desc}
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
            </RewardSlider>
          </div>
        </div>
      )}
    </>
  );
}

export default SliderItems;
