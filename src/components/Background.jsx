import React from 'react';

const Background = ({ bgImage }) => {
  return (
    <div className="page-container__background">
      <img src={bgImage} alt="it can't charge the BG ..."/>
    </div>
  )
}

export default Background;
