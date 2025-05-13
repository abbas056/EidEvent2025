import React from "react";

function Content({ content }) {
  return (
    <div className="text-data">
      <div className="box">
        <ol>{content}</ol>
      </div>
    </div>
  );
}

export default Content;
