import React from "react";

function Welcome() {
  const sayWelcome = (msg) => {
    alert(`Message: ${msg}`);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => sayWelcome("Welcome to React!")}>Say Welcome</button>
    </div>
  );
}

export default Welcome;
