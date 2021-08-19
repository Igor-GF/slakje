import React from 'react';
import InputNumber from './InputNumber';

const PuzzleTwo = ({ pageNumber, answer, nextPage }) => {
  return (
    <div className="puzzle-container">
      {
        pageNumber === 10 && (
          <InputNumber 
            correctAnswer={answer} 
            nextPage={nextPage}
          />
        )
      }
    </div>
  )
}

export default PuzzleTwo;
