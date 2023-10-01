
import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination-buttons">
        <Link
          to={`/page/${Math.max(1, currentPage - 1)}`}
          className={currentPage === 1 ? 'pagination-button disabled' : 'pagination-button'}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Previous
        </Link>
        {pageNumbers.map((pageNumber) => (
          <Link
            key={pageNumber}
            to={`/page/${pageNumber}`}
            className={currentPage === pageNumber ? 'pagination-button active' : 'pagination-button'}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </Link>
        ))}
        <Link
          to={`/page/${Math.min(totalPages, currentPage + 1)}`}
          className={currentPage === totalPages ? 'pagination-button disabled' : 'pagination-button'}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next
        </Link>
      </div>
      <div className="pagination-count">
        {`From ${currentPage} of Total ${totalPages}`}
      </div>
    </div>
  );
}

export default Pagination;
