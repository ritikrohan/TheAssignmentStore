// src/components/Cart.js
import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-700">${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;