import React from 'react';

const Navigation = ({ nextPage, backPage, pageNumber, totalPages }) => {
  return (
    <nav className="navigation-container">

      {
        pageNumber > 1 && (
          <span className="btn btn--back-page" onClick={backPage}>BACK</span>
        )
      }      

      <div className="navigation-container__page-number">
        <h2>{pageNumber}</h2>
      </div>
      

      {
        pageNumber < totalPages && (
          <span className="btn btn--next-page" onClick={nextPage}>NEXT</span>
        )
      } 

    </nav>
  )
}

export default Navigation;
