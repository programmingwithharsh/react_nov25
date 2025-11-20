import { createRoot } from 'react-dom/client'; // Importing es6 module
import React from 'react';
import App from './App'; // Import App component
import 'bootstrap/dist/css/bootstrap.css';

const username = "Dinesh"; // string
const interests = ["Playing basketball", "Playing badminton", "Swimming", "Chess"]; // array
const birth = { // object
  year: 2000,
  place: "Bangalore"
}

createRoot(document.getElementById('root')).render(
  <App x="2" usernameProps={username} interestsProps={interests} bithProps={birth} />
)
