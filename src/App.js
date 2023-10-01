
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import carsData from './components/carsData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCars = filteredCars.slice(startIndex, endIndex);

  return (
    <div className="App">
      <h1>Car Search</h1>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={displayedCars} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default App;
