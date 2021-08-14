import React from 'react';

const Navigation = ({ nextPage, backPage, pageNumber }) => {
  return (
    <nav className="navigation-container">

      {
        pageNumber > 0 && (<a className="btn btn--back-page" onClick={backPage}>BACK</a>)
      }      

      <a className="btn btn--next-page" onClick={nextPage}>NEXT</a>

    </nav>
  )
}

export default Navigation;
