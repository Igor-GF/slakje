import React from 'react';
import PuzzleOne from './PuzzleOne';
import PuzzleTwo from './PuzzleTwo';
import PuzzleThree from './PuzzleThree';

const ParagraphList = ({ paragraphs, onTheRight, pageNumber, answer, nextPage }) => {
  return (
    <div className={`page-container__text page-container__text${onTheRight}`}>
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
