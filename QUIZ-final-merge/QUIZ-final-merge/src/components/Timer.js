import React, { useState, useEffect } from "react";

export const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          // Reset the timer when 60 seconds are over
          return initialSeconds;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialSeconds]);

  return <div> {seconds} </div>;
};
