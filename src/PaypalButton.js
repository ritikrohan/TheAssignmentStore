import React from "react";

const PaypalButton = () => {
  const handleClick = () => {
    window.location.href = "https://www.paypal.com/ncp/payment/2BPUN76YPXK76";
  };

  return (
    <button onClick={handleClick}>Pay with PayPal</button>
  );
};

export default PaypalButton;