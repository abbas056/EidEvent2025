import React from "react";
import turkeyImg from "../assets/TurkeyImg.png";
import tunisiaImg from "../assets/TunisiaImg.png";
import bahrainImg from "../assets/Bahrainimg.png";
import egyptImg from "../assets/EgyptImg.png";
import turkey from "../assets/Turkeyy.png";
import tunisia from "../assets/Tunisia.png";
import bahrain from "../assets/Bahrain.png";
import egypt from "../assets/Egypt.png";
import turkeyactive from "../assets/Turkey1.png";
import tunisiaactive from "../assets/Tunisia1.png";
import bahrainactive from "../assets/Bahrain1.png";
import egyptactive from "../assets/Egypt1.png";

function SelectCountry({ country, setCountry }) {
  const tabSwitch = (id) => {
    let newCat = {
      Turkey: false,
      Tunisia: false,
      Bahrain: false,
      Egypt: false,
    };
    setCountry({ ...newCat, [id]: true });
  };

  return (
    <div className="select-country d-flex fd-column al-center jc-center">
      <div className="game-tabs d-flex fd-column al-center jc-center m-auto f-tangoSansItalic">
        <div className="buttons d-flex al-end jc-s-around ">
          <button onClick={() => tabSwitch("Turkey")}>
            <img src={country.Turkey ? turkeyactive : turkey} alt="" />
          </button>
          <button onClick={() => tabSwitch("Tunisia")}>
            <img src={country.Tunisia ? tunisiaactive : tunisia} alt="" />
          </button>
          <button onClick={() => tabSwitch("Bahrain")}>
            <img src={country.Bahrain ? bahrainactive : bahrain} alt="" />
          </button>
          <button onClick={() => tabSwitch("Egypt")}>
            <img src={country.Egypt ? egyptactive : egypt} alt="" />
          </button>
        </div>
        <div className="bar-bottom d-flex al-center jc-center">
          <span>Turkey</span>
          <span>Tunisia</span>
          <span>Bahrain</span>
          <span>Egypt</span>
        </div>
      </div>
      <div className="country-images">
        <img
          className="m-auto"
          src={
            country.Turkey
              ? turkeyImg
              : country.Tunisia
              ? tunisiaImg
              : country.Bahrain
              ? bahrainImg
              : egyptImg
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default SelectCountry;
