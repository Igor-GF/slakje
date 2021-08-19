import React from 'react';
import InputNumber from './InputNumber';

const PuzzleOne = ({ pageNumber, answer, nextPage }) => {

  return (
    <div className="puzzle-container">
      {
        pageNumber === 5 && (
          <InputNumber 
            correctAnswer={answer} 
            nextPage={nextPage}
          />
        )
      }
    </div>
  )
}

export default PuzzleOne;
