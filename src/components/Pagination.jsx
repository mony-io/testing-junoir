import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number} className="mr-2 cursor-pointer">
            <a
              className="bg-[#f1f1f1] p-1 px-2 rounded-sm hover:bg-slate-300"
              onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
