import React, { useContext, useState } from "react";
import { ApiContext } from "../services/Api";
import exploreBtn from "../assets/Explorebutton.png";

function EidGameButtons({ points, input, setInput, playGame, reqPoints }) {
  const { disable, setDisable } = useContext(ApiContext);
  const [error, setError] = useState("Max value = 999");

  const handleInput = (event) => {
    let value = event.target.value;
    let max = points < 999 ? points : 999;
    let val = value.replace(/[^0-9]/g, "").replace(/^0+/, "");
    let number = parseInt(val, 10);
    number = number > max ? max : number <= 0 ? 1 : number;
    setInput(number.toString());
    if (points === 0 && event.target.value === "") {
      setInput("1");
      setDisable(true);
    } else if (points > 1 && event.target.value === "") {
      setError("Enter some value");
      setDisable(true);
    } else if (number === max && value.includes(".")) {
      setInput("1");
    } else if (`${number}`.match(/\.\d+$/)) {
      setInput(number.toString());
      setError("Wrong input value");
      setDisable(true);
    } else if (points === 0) {
      setInput("1");
      setError("Max value = 999");
    } else {
      setError("Max value = 999");
      setDisable(false);
    }
  };
  return (
    <div className="button-section w-70  d-flex al-center jc-sEven gap-4 m-auto">
      <div className="d-flex fd-column al-center jc-end gap-2 h-100">
        <div className="enter-chances d-flex al-center jc-center gap-1 p-rel">
          <input
            className="input-field f-tangoSansItalic"
            placeholder="Type here"
            name="NumInput"
            type="number"
            value={input}
            min={0}
            max={999}
            onChange={handleInput}
          />
        </div>
        <div className="error">{error}</div>
      </div>
      <div className="play-button d-flex fd-column al-center jc-end gap-2">
        <button disabled={disable} onClick={playGame}>
          <img
            className={disable ? "gray-1" : "gray-0"}
            src={exploreBtn}
            alt=""
          />
        </button>
        <span className="error">{reqPoints}k Pts Req</span>
      </div>
    </div>
  );
}

export default EidGameButtons;
