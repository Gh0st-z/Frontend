import React, { useState, useEffect } from 'react';

const Timer = () => {
  const initialSeconds = 60; // Initial timer duration
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timerId);
      sendPushNotification();
    }
  }, [seconds, timerId]);

  const startTimer = () => {
    if (seconds > 0) {
      const id = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      setTimerId(id);
    }
  };

  const resetTimer = () => {
    clearInterval(timerId);
    setSeconds(initialSeconds);
  };

  const sendPushNotification = () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Timer Ended', {
          body: 'Your timer has ended.',
        });
      });
    }
  };

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default Timer;