// Import Firebase functions
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyBsFJovlRE2250nVsWAPuVHqGW_PWEXi0A",
    authDomain:"student-teacher-booking-apt.firebaseapp.com",
    projectId: "student-teacher-booking-apt",
    storageBucket: "student-teacher-booking-apt.appspot.com",
    messagingSenderId: "438465722357",
    appId: "1:438465722357:web:f8daa5fc94d91c26f752bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };