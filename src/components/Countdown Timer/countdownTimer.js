import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  return (
    <div>
      <p>Time remaining: {time} seconds</p>
    </div>
  );
}

export default CountdownTimer;
