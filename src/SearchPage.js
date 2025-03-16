// src/App.js
import React, { useState } from "react";
import AssignmentList from "./AssignmentList";
import Cart from "./Cart";

function SearchPage() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (assignment) => {
    setCart([...cart, assignment]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AssignmentList onAddToCart={handleAddToCart} />
        </div>
        <div>
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;