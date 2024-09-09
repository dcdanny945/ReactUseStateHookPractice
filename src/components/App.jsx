import React, { useState } from "react";

function App() {
  // let time = new Date().toLocaleTimeString();
  // console.log(time);

  // const [currentTime, callingTimeAgain] = useState(time);

  // function GetTime() {
  //   const newTime = new Date().toLocaleTimeString();
  //   callingTimeAgain(newTime);
  // }

  // update time in seconds
  setInterval(getTime, 1000);

  let time = new Date().toLocaleTimeString();
  // console.log(time);

  const [currentTime, getTimeAgain] = useState(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    // console.log(newTime);
    getTimeAgain(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
