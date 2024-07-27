import { auth, db } from './firebase-config.js';  // Import auth and db from firebase-config
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

// Function to handle user registration
function registerUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log('User registered:', userCredential.user);
        alert('Registration successful!');
    })
    .catch((error) => {
        console.error('Error:', error.message);
        alert('Registration failed: ' + error.message);
    });
}

// Function to handle user login
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
        alert('Login successful!');
    })
    .catch((error) => {
        console.error('Error:', error.message);
        alert('Login failed: ' + error.message);
    });
}

// Function to handle appointment booking
function bookAppointment() {
    const teacherId = document.getElementById('teacher-id').value;
    const appointmentDate = document.getElementById('appointment-date').value;

    if (!auth.currentUser) {
        alert('You must be logged in to book an appointment.');
        return;
    }

    addDoc(collection(db, 'appointments'), {
        teacherId: teacherId,
        appointmentDate: appointmentDate,
        studentId: auth.currentUser.uid
    })
    .then(() => {
        console.log('Appointment booked successfully');
        alert('Appointment booked successfully!');
    })
    .catch((error) => {
        console.error('Error:', error.message);
        alert('Booking failed: ' + error.message);
    });
}

// Event listeners for buttons
document.getElementById('register-btn').addEventListener('click', registerUser);
document.getElementById('login-btn').addEventListener('click', loginUser);
document.getElementById('book-appointment-btn').addEventListener('click', bookAppointment);