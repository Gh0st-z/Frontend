// src/Button.js
import React, { useEffect } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';

const Button = () => {
  useEffect(() => {
    const initFirebaseMessaging = async () => {
      try {
        const messaging = getMessaging();
        const currentToken = await getToken(messaging);

        console.log('Current FCM Token:', currentToken);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    initFirebaseMessaging();
  }, []);

  const handleButtonClick = async () => {
    try {
      const messaging = getMessaging();
      const currentToken = await getToken(messaging);

      // Send the FCM token to your server
      sendTokenToServer(currentToken);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendTokenToServer = async (token) => {
    try {
      // Replace the URL with your server endpoint
      const serverUrl = 'http://onlinemedshub.metacept.com.np/token';

      // Send a POST request to your server with the FCM token
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        console.log('Token sent to server successfully.');
      } else {
        console.error('Failed to send token to server.');
      }
    } catch (error) {
      console.error('Error sending token to server:', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Send Notification</button>
    </div>
  );
};

export default Button;