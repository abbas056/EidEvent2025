import React, { useEffect } from "react";
import mascot2 from "../../assets/mascot2.png";
import mascot3 from "../../assets/mascot3.png";
import mascot4 from "../../assets/mascot4.png";
import turkeyGif from "../../assets/tab1GameAnimations/Turkey.gif";
import tunisiaGif from "../../assets/tab1GameAnimations/Tunisia.gif";
import bharainGif from "../../assets/tab1GameAnimations/Bahrain.gif";
import egyptGif from "../../assets/tab1GameAnimations/Egypt.gif";
import turkeyKeyGif from "../../assets/tab1GameAnimations/keysFound/Key-of-Turkey.gif";
import tunisiaKeyGif from "../../assets/tab1GameAnimations/keysFound/Key-of-Tunisia.gif";
import bahrainKeyGif from "../../assets/tab1GameAnimations/keysFound/Key-of-Bahrain.gif";
import egyptKeyGif from "../../assets/tab1GameAnimations/keysFound/Key-of-Egypt.gif";

function Animations({ country, animation, keyAnimation, keysFound }) {
  useEffect(() => {
    // Preload images
    const preloadImages = [
      turkeyGif,
      tunisiaGif,
      bharainGif,
      egyptGif,
      turkeyKeyGif,
      tunisiaKeyGif,
      bahrainKeyGif,
      egyptKeyGif,
      mascot2,
      mascot3,
      mascot4,
    ];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <div className="mascot p-abs">
      {country.Turkey &&
        (animation ? (
          <img
            src={turkeyGif}
            className="animation-turkey"
            alt="Turkey Animation"
          />
        ) : (
          <img src={mascot2} className="mascot-turkey" alt="Turkey Mascot" />
        ))}
      {country.Tunisia &&
        (animation ? (
          <img
            src={tunisiaGif}
            className="animation-tunisia"
            alt="Tunisia Animation"
          />
        ) : (
          <img src={mascot4} className="mascot-tunisia" alt="Tunisia Mascot" />
        ))}
      {country.Bahrain &&
        (animation ? (
          <img
            src={bharainGif}
            className="animation-bahrain"
            alt="Bahrain Animation"
          />
        ) : (
          <img src={mascot3} className="mascot-bahrain" alt="Bahrain Mascot" />
        ))}
      {country.Egypt &&
        (animation ? (
          <img
            src={egyptGif}
            className="animation-egypt"
            alt="Egypt Animation"
          />
        ) : (
          <img src={mascot2} className="mascot-egypt" alt="Egypt Mascot" />
        ))}

      {keyAnimation && keysFound >= 1 && (
        <img
          src={
            country.Turkey
              ? turkeyKeyGif
              : country.Tunisia
              ? tunisiaKeyGif
              : country.Bahrain
              ? bahrainKeyGif
              : egyptKeyGif
          }
          className="key-found"
          alt="Key Animation"
        />
      )}
    </div>
  );
}

export default Animations;
