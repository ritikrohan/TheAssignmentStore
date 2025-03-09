import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = () => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "30", // Replace with your amount
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return fetch("/my-server/capture-paypal-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID
            })
          })
          .then((response) => response.json())
          .then((orderData) => {
                const name = orderData.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
          });
      }}
      onError={(err) => {
        alert(`PayPal Checkout onError`);
        console.error("PayPal Checkout onError", err);
      }}
    />
  );
};

export default PaypalButton;
