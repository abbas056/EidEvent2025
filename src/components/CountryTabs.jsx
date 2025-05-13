import React from "react";
import bar from "../assets/Bar.png";

function CountryTabs({ country, setCountry, mtop }) {
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
    <div
      className="country-tabs d-flex fd-column al-center jc-center m-auto"
      style={{ marginTop: `${mtop}` }}
    >
      <div className="buttons d-flex al-center jc-s-around f-tangoSansItalic">
        <button
          onClick={() => tabSwitch("Turkey")}
          className={country.Turkey ? "active" : "not-active"}
        >
          Turkey
        </button>
        <button
          onClick={() => tabSwitch("Tunisia")}
          className={country.Tunisia ? "active" : "not-active"}
        >
          Tunisia
        </button>
        <button
          onClick={() => tabSwitch("Bahrain")}
          className={country.Bahrain ? "active" : "not-active"}
        >
          Bahrain
        </button>
        <button
          onClick={() => tabSwitch("Egypt")}
          className={country.Egypt ? "active" : "not-active"}
        >
          Egypt
        </button>
      </div>
      <img className="bar" src={bar} alt="" />
    </div>
  );
}

export default CountryTabs;
