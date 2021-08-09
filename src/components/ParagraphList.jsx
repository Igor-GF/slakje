import React from 'react';

const ParagraphList = ({ paragraphs }) => {
  return (
    <div className="page-container__text">
      {
        paragraphs.map((paragraph, index) => {
          return <h2 key={index}>{paragraph}</h2>
        })
      }       
    </div>
  )
}

export default ParagraphList;
