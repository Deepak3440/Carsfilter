// App.js file it is
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import carsData from './components/carsData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState('');
  const itemsPerPage = 6;
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
  const navigate = useNavigate();

  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    navigate(`/page/1`);
  };

  const handlePageChange = (newPage) => {
    navigate(`/page/${newPage}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCars = filteredCars.slice(startIndex, endIndex);

  return (
    <div className="App">
      <h1>Car Search</h1>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={displayedCars} />
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default App;
