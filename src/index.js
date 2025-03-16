import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContactUs from './ContactUs';
import ThankYou from './ThankYou';
import reportWebVitals from './reportWebVitals';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const PAYPAL_CLIENT_ID = "AXZ1WLY7uFGftknbbHiry_6ZvRqySwpJokOFLh8mouJQV00evyzqEaai8SZclUkCccWNrj14strcTalt";

root.render(
  <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assignments/:assignmentName" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/thankYou" element={<ThankYou />} />
        <Route path='/searchPage' element={<SearchPage/>} />
      </Routes>
    </BrowserRouter>
  </PayPalScriptProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();