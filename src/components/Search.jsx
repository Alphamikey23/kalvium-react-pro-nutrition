import React, { useState, useCallback } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = useCallback((event) => {
    const newQuery = event.target.value;
    setSearchTerm(newQuery);
    onSearch(newQuery);
  }, [onSearch]);

  return (
    <div className="field">
      <div className="control">
        <h2>Search</h2>
        <input
          className="input"
          type="text"
          placeholder="Search for a meal..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
