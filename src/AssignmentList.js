// src/components/AssignmentList.js
import React, { useState } from "react";
import { assignments } from "./data/assignments";
import SearchBar from "./SearchBar";
import AssignmentCard from "./AssignmentCard";

const AssignmentList = ({ onAddToCart }) => {
  const [filteredAssignments, setFilteredAssignments] = useState(assignments);

  const handleSearch = (query) => {
    const filtered = assignments.filter((assignment) =>
      assignment.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAssignments(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Available Assignments</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;