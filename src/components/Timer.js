import { token } from '../firebase';
import React, { useState, useEffect } from 'react';
import { auth, messaging, functions } from '../firebase';
import * as jwt_decode from 'jwt-decode';

const TimerApp = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    // Check if the browser supports notifications
    if ('Notification' in window) {
      // Check if notification permission is denied or default
      if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        // Request notification permission
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted!');
          } else {
            console.warn('Notification permission denied.');
          }
        });
      }
    }
  }, []);

  const startTimer = () => {
    if (isNaN(timer) || timer <= 0) {
      alert('Please enter a valid positive number for the timer.');
      return;
    }

    let countdown = timer;

    // Start the countdown
    const intervalId = setInterval(() => {
      countdown--;
      setTimer(countdown);

      if (countdown === 0) {
        // Timer reached 0, stop the countdown and trigger push notification
        clearInterval(intervalId);
        sendPushNotification();
      }
    }, 1000);
  };

  const sendPushNotification = () => {
    // Assuming you have a function to retrieve the JWT token from the user's session
    const get_token = token();

    if (get_token) {
      const decodedToken = jwt_decode(get_token);
      const userId = decodedToken.userId;

      // Assuming you have a Cloud Function deployed to handle push notifications
      const sendNotificationFunction = functions().httpsCallable('sendPushNotification');

      // Call the Cloud Function to send the push notification
      sendNotificationFunction({ userId })
        .then((result) => {
          console.log('Push notification sent:', result.data);
        })
        .catch((error) => {
          console.error('Error sending push notification:', error);
        });
    }
  };

  return (
    <div>
      <h1>Set Timer</h1>
      <label htmlFor="timer">Set timer (in seconds):</label>
      <input
        type="number"
        id="timer"
        min="1"
        value={timer}
        onChange={(e) => setTimer(parseInt(e.target.value, 10))}
      />
      <button onClick={startTimer}>Start Timer</button>
      <div>Time remaining: {timer} seconds</div>
    </div>
  );
};

export default TimerApp;