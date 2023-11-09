// src/components/Timer.js

import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; 
import * as jwt_decode from 'jwt-decode';

const TimerApp = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []);

  const sendPushNotification = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken();
        const decodedToken = jwt_decode(idToken);
        const userId = decodedToken.user_id;

        // Replace 'YOUR_SERVER_KEY' with your FCM server key
        const serverKey = 'BOwLKJz6IgSNrAVfsYixdkhxNrXi26nfCOObgwD7xVz4BaJ1caU7OQU7TZW4KnxhDVNE1tQ6xyIrvJ30StTO8Uc';

        const notification = {
          title: 'Timer Notification',
          body: 'Your timer has reached 0!',
        };

        const payload = {
          notification,
          to: userId,
        };

        await fetch('https://fcm.googleapis.com/fcm/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `key=${serverKey}`,
          },
          body: JSON.stringify(payload),
        });

        console.log('Push notification sent successfully!');
      }
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  };

  return (
    <div>
      <p>Timer: {timer} seconds</p>
      <button onClick={sendPushNotification}>Send Push Notification</button>
    </div>
  );
};

export default TimerApp;
