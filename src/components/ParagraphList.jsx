import React from 'react';
import PuzzleOne from './PuzzleOne';
import PuzzleTwo from './PuzzleTwo';
import PuzzleThree from './PuzzleThree';
import PuzzleTwoA from './PuzzleTwoA';

const ParagraphList = ({ paragraphs, onTheRight, pageNumber, answer, nextPage, fixedHeight }) => {
  return (
    <div className={`page-container__text page-container__text${onTheRight} ${fixedHeight}`}>
      {
        paragraphs.map((paragraph, index) => {
          return <h2 key={index}>{paragraph}</h2>
        })
      }

      <PuzzleOne 
        answer={answer}
        pageNumber={pageNumber}
        nextPage={nextPage} 
      />
      <PuzzleTwoA
        answerArr={answer}
        pageNumber={pageNumber}
        nextPage={nextPage}
        fixedHeight={fixedHeight}
      />
      <PuzzleTwo 
        answer={answer}
        pageNumber={pageNumber}
        nextPage={nextPage}
      />
      <PuzzleThree 
        answer={answer}
        pageNumber={pageNumber}
        nextPage={nextPage}
      />
      
    </div>
  )
}

export default ParagraphList;
