import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyDuJhpaFZ5gX3cMz86F1Ex7RO95idF449w",
  authDomain: "tienda-rollers.firebaseapp.com",
  projectId: "tienda-rollers",
  storageBucket: "tienda-rollers.appspot.com",
  messagingSenderId: "1030100899540",
  appId: "1:1030100899540:web:5581c703a120e2d784cd41"
};

initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

