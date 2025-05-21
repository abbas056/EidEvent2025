import React, { useEffect } from "react";
import turkey from "../../assets/Turkeyy.png";
import tunisia from "../../assets/Tunisia.png";
import bahrain from "../../assets/Bahrain.png";
import egypt from "../../assets/Egypt.png";
import turkeyactive from "../../assets/Turkey1.png";
import tunisiaactive from "../../assets/Tunisia1.png";
import bahrainactive from "../../assets/Bahrain1.png";
import egyptactive from "../../assets/Egypt1.png";

function GameCountryButtons({ tabSwitch, country }) {
  useEffect(() => {
    // Preload images
    const preloadImages = [
      turkey,
      tunisia,
      bahrain,
      egypt,
      turkeyactive,
      tunisiaactive,
      bahrainactive,
      egyptactive,
    ];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <div className="buttons d-flex al-end jc-s-around">
      <button onClick={() => tabSwitch("Turkey")}>
        <img
          className={country.Turkey ? "gray-0" : "gray-1"}
          style={country.Turkey ? { width: "87%" } : { width: "74%" }}
          src={country.Turkey ? turkeyactive : turkey}
          alt="Turkey"
        />
      </button>
      <button onClick={() => tabSwitch("Tunisia")}>
        <img
          className={country.Tunisia ? "gray-0" : "gray-1"}
          style={country.Tunisia ? { width: "87%" } : { width: "74%" }}
          src={country.Tunisia ? tunisiaactive : tunisia}
          alt="Tunisia"
        />
      </button>
      <button onClick={() => tabSwitch("Bahrain")}>
        <img
          className={country.Bahrain ? "gray-0" : "gray-1"}
          style={country.Bahrain ? { width: "87%" } : { width: "68%" }}
          src={country.Bahrain ? bahrainactive : bahrain}
          alt="Bahrain"
        />
      </button>
      <button onClick={() => tabSwitch("Egypt")}>
        <img
          className={country.Egypt ? "gray-0" : "gray-1"}
          style={country.Egypt ? { width: "90%" } : { width: "80%" }}
          src={country.Egypt ? egyptactive : egypt}
          alt="Egypt"
        />
      </button>
    </div>
  );
}

export default GameCountryButtons;
