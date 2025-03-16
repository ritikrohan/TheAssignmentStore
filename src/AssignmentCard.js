// src/components/AssignmentCard.js
import React from "react";

const AssignmentCard = ({ assignment, onAddToCart }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-green-600 mb-2">{assignment.title}</h2>
      <p className="text-gray-900 font-semibold">{assignment.price}</p>
      <button
        onClick={() => onAddToCart(assignment)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AssignmentCard;