import React from 'react';

const Pagination = ({ paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="d-flex justify-content-center">
      <ul className='pagination pagination-lg'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <span onClick={() => paginate(number)} className='page-link'>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
