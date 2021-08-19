import React from 'react';
import InputNumber from './InputNumber';

const PuzzleThree = ({ pageNumber, answer, nextPage }) => {
  return (
    <div className="puzzle-container">
      {
        pageNumber === 14 && (
          <InputNumber 
            correctAnswer={answer} 
            nextPage={nextPage}
          />
        )
      }
    </div>
  )
}

export default PuzzleThree;
