import React from 'react';

const Categories = ({ filteredItems, category }) => {
  return (
    <div className="btn-container">
      {category.map((ctr, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filteredItems(ctr)}
          >
            {ctr}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;