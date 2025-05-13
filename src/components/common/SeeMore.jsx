import React from "react";

function SeeMore({ active, handleChangeActive, position }) {
  return (
    <div className="see-buttons " style={{ position: `${position}` }}>
      {active ? (
        <button className="m-auto" onClick={handleChangeActive}>
          See More
        </button>
      ) : (
        <button className="m-auto" onClick={handleChangeActive}>
          See Less
        </button>
      )}
    </div>
  );
}

export default SeeMore;
