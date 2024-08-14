import React from "react";

export default function SearchBar({ onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        onChange={onChange}
      />
      <button>Search</button>
    </div>
  );
}
