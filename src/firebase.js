// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4kNrevAj4OtfLMzBS7CkXRXtM_OSEyZU",
  authDomain: "workout-tracker-c3a68.firebaseapp.com",
  projectId: "workout-tracker-c3a68",
  storageBucket: "workout-tracker-c3a68.firebasestorage.app",
  messagingSenderId: "739781213177",
  appId: "1:739781213177:web:709d2a725ec306bab2db28",
  measurementId: "G-PP6ZVX3EHY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addWorkout = async (data) => {
  try {
    await addDoc(collection(db, "workouts"), data);
    console.log("✅ Workout saved:", data.exercise);
  } catch (error) {
    console.error("❌ Error saving workout:", error);
  }
};

export const getWorkouts = async () => {
  const snapshot = await getDocs(collection(db, "workouts"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
