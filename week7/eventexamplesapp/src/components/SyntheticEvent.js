import React from "react";

function SyntheticEvent() {
  const handleClick = (e) => {
    e.preventDefault(); // This uses SyntheticEvent
    alert("I was clicked");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={handleClick}>Click Me (Synthetic Event)</button>
    </div>
  );
}

export default SyntheticEvent;
