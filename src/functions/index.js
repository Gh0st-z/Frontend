// functions/index.js

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendPushNotification = functions.firestore
  .document('notifications/{notificationId}')
  .onCreate((snapshot, context) => {
    const notification = snapshot.data();
    const userId = notification.userId; // Replace with your user identifier field
    const payload = {
      notification: {
        title: 'Timer Notification',
        body: 'Your timer has reached 0!',
      },
    };

    // Send the push notification to the user
    return admin.messaging().sendToTopic(userId, payload);
  });