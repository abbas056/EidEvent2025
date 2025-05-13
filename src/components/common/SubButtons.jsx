import React from "react";

function SubButtons({
  subButton,
  setsubButton,
  btn1Name,
  btn2Name,
  btnBg,
  containerWidth,
  btnWidth,
  btnHeight,
  color,
}) {
  const tabSwitch = (id) => {
    let newCat = {
      btn1: false,
      btn2: false,
    };
    setsubButton({ ...newCat, [id]: true });
  };

  return (
    <div
      className="d-flex jc-s-around al-center m-auto p-rel"
      style={{ width: `${containerWidth}`, marginTop: "4vw" }}
    >
      <button
        onClick={() => tabSwitch(`btn1`)}
        className={subButton.btn1 ? "gray-0" : "gray-1"}
        style={{
          backgroundImage: `url(${btnBg})`,
          backgroundSize: "100% 100%",
          width: `${btnWidth}`,
          height: `${btnHeight}`,
          color: `${color}`,
          fontFamily: `tangoSansItalic`,
          fontSize: "3vw",
          textShadow: "1px 1px black",
        }}
      >
        {/* {button.today && <img src={btn1Name} alt="" />} */}
        {btn1Name}
      </button>
      <button
        onClick={() => tabSwitch(`btn2`)}
        className={subButton.btn2 ? "gray-0" : "gray-1"}
        style={{
          backgroundImage: `url(${btnBg})`,
          backgroundSize: "100% 100%",
          width: `${btnWidth}`,
          height: `${btnHeight}`,
          color: `${color}`,
          fontFamily: `tangoSansItalic`,
          fontSize: "3vw",
          textShadow: "1px 1px black",
        }}
      >
        {/* {button.yesterday && <img src={btn2Name} alt="" />} */}
        {btn2Name}
      </button>
    </div>
  );
}

export default SubButtons;
