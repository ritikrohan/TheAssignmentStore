import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const PAYPAL_CLIENT_ID = "AYN401LNroYbpqsP_6jtJKqg32vAy4U18BuJr681bLT4FblGqZpglwk4xjcWYoP3zWGmQZsReleuC3Ie";

root.render(
  <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PayPalScriptProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
