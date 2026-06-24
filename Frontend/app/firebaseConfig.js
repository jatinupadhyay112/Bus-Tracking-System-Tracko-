import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjbd75juvJQG6BxQXY7LiN_BsSZM9i8XA",
  authDomain: "tracko-ef5b0.firebaseapp.com",
  databaseURL: "https://tracko-ef5b0-default-rtdb.firebaseio.com",
  projectId: "tracko-ef5b0",
  storageBucket: "tracko-ef5b0.firebasestorage.app",
  messagingSenderId: "571415114361",
  appId: "1:571415114361:web:17f58b9345712ebde91aa8"
};

export const app = initializeApp(firebaseConfig);

// Add your Google OAuth client IDs here (create them in Firebase Console -> OAuth providers).
// Replace the placeholder strings with your actual client IDs for Expo, iOS, Android and Web.
export const googleClientIds = {
  expoClientId: "YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com",
  iosClientId: "YOUR_IOS_CLIENT_ID.apps.googleusercontent.com",
  androidClientId: "YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com",
  webClientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
};