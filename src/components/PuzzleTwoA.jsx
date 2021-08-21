import React from 'react';
import InputArray from './InputArray'

const PuzzleTwoA = ({ pageNumber, answerArr, nextPage }) => {
  return (
    <div className="puzzle-container">
      {
        pageNumber === 9 && (
          <InputArray 
            correctAnswer1={answerArr[0]}
            correctAnswer2={answerArr[1]}
            correctAnswer3={answerArr[2]}
            nextPage={nextPage}
          />
        )
      }
    </div>
  )
}

export default PuzzleTwoA;
