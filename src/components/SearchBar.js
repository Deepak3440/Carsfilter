
import React, { useState } from 'react';

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search By you choice Car"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <div className="dropdown">
          <label htmlFor="relevance">Relevance:</label>
          <select id="relevance">
            <option value="relevance">Relevance</option>
          
          </select>
        </div>
        <div className="Searchbr">
          <label htmlFor="brands">By Brands:</label>
          <select id="brands" value={selectedBrand} onChange={handleBrandChange}>
            <option value="All">All</option>
            <option value="Brand1">Brand 1</option>
            <option value="Brand2">Brand 2</option>
            
          </select>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
