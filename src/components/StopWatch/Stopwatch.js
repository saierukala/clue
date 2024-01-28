import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

export default Stopwatch;
