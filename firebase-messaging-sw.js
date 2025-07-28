importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAjuzb9SHhgU5ahs_Zx4YUOQus7bJyg-tA",
  authDomain: "pesanan-ayam-kusara-chicken.firebaseapp.com",
  projectId: "pesanan-ayam-kusara-chicken",
  messagingSenderId: "270019898754",
  appId: "1:270019898754:web:6b7a33f69d504f626d739b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
