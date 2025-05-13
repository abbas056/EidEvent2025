import React from "react";
import RewardSlider, { CarouselItem } from "./RewardSlider";
function SliderItems({ rewards }) {
  return (
    <>
      {rewards?.length > 0 && (
        <div className="rewards-slider m-auto">
          <div className="sliderItem d-flex fd-column al-center jc-center m-auto p-rel">
            <RewardSlider>
              {rewards &&
                rewards?.map((item, i) => {
                  let index = i + 1;
                  return (
                    <CarouselItem key={i}>
                      <div
                        className="inner-box d-flex fd-column al-center jc-center p-rel gap-1"
                        key={i}
                      >
                        <div className="rank d-flex fd-column al-center jc-center f-tangoSansItalic">
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
                            )}
                          </span>
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
