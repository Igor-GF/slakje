import React from 'react';

const FindEnvelope = ({ pageNumber, envelope, nextPage }) => {

  const onClickHandler = () => {
    nextPage();
  }
  return (
      pageNumber === 8 && (
        <div className="envelope">
          <img src={envelope} alt="ENVELOPE" onClick={onClickHandler}/>
        </div>
      )
  )
}

export default FindEnvelope;
