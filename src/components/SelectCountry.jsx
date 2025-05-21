import React, { useEffect } from "react";
import turkeyImg from "../assets/TurkeyImg.png";
import tunisiaImg from "../assets/TunisiaImg.png";
import bahrainImg from "../assets/Bahrainimg.png";
import egyptImg from "../assets/EgyptImg.png";

import Animations from "./eid-game-components/Animations";
import GameCountryButtons from "./eid-game-components/CountryButtons";

function SelectCountry({
  country,
  setCountry,
  animation,
  keysFound,
  keyAnimation,
}) {
  useEffect(() => {
    // Preload images
    const preloadImages = [turkeyImg, tunisiaImg, bahrainImg, egyptImg];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
        <GameCountryButtons tabSwitch={tabSwitch} country={country} />
        <div className="bar-bottom d-flex al-center jc-center">
          <span>Turkey</span>
          <span>Tunisia</span>
          <span>Bahrain</span>
          <span>Egypt</span>
        </div>
      </div>
      <div className="country-images p-rel">
        <img
          className="images m-auto"
          loading="eager"
          src={
            country.Turkey
              ? turkeyImg
              : country.Tunisia
              ? tunisiaImg
              : country.Bahrain
              ? bahrainImg
              : egyptImg
          }
          alt="Country Background"
        />
        <Animations
          country={country}
          animation={animation}
          keyAnimation={keyAnimation}
          keysFound={keysFound}
        />
      </div>
    </div>
  );
}

export default SelectCountry;
