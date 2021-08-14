import React from 'react';

const ParagraphList = ({ paragraphs, onTheRight }) => {
  return (
    <div className={`page-container__text page-container__text${onTheRight}`}>
      {
        paragraphs.map((paragraph, index) => {
          return <h2 key={index}>{paragraph}</h2>
        })
      }       
    </div>
  )
}

export default ParagraphList;
