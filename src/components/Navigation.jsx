import React from 'react';

const Navigation = ({ nextPage, backPage, pageNumber, totalPages }) => {
  return (
    <nav className="navigation-container">

      {
        pageNumber > 1 && (<a className="btn btn--back-page" onClick={backPage}>BACK</a>)
      }      

      <div className="navigation-container__page-number">
        <h2>{pageNumber}</h2>
      </div>
      

      {
        pageNumber < totalPages && (<a className="btn btn--next-page" onClick={nextPage}>NEXT</a>)
      } 

    </nav>
  )
}

export default Navigation;
