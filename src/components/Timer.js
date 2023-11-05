import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (seconds === 0) {
      clearTimeout(timerId);
      sendPushNotification();
    }
  }, [seconds, timerId]);

  const startTimer = () => {
    if (seconds > 0) {
      const id = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      setTimerId(id);

      // Request notification permission
      if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission()
          .then(permission => {
            if (permission === 'granted') {
              console.log('Notification permission granted');
            }
          });
      }
    }
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
    </div>
  );
};

export default Timer;