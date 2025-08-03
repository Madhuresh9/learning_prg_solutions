import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let message;
  let button;

  if (isLoggedIn) {
    message = <h1>Welcome back</h1>;
    button = <button onClick={handleLogout}>Logout</button>;
  } else {
    message = <h1>Please sign up.</h1>;
    button = <button onClick={handleLogin}>Login</button>;
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "100px",
      fontFamily: "Arial, sans-serif"
    }}>
      {message}
      {button}
    </div>
  );
}

export default App;
