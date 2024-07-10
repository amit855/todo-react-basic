// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTodos }) => {
  return (
    <input
      type="text"
      placeholder="Search todos"
      onChange={(e) => searchTodos(e.target.value)}
    />
  );
};

export default SearchBar;
