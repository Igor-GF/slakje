import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ParagraphList from '../components/ParagraphList';
import Background from '../components/Background';
import FindEnvelope from '../components/FindEnvelope';

const Story = ({ booksDB }) => {

  const [currPage, setCurrPage] = useState(0);
  const [currBG, setCurrBG] = useState("");

  const nextPageHandler = () => {
    setCurrPage( currPage + 1 );
  };

  const backPageHandler = () => {
    setCurrPage( currPage - 1 );
  };

  useEffect(() => {
    setCurrBG(booksDB[0].pages[currPage].pageBg);
  }, [currPage]);

  return (
    <section className="page-container">
      
      <Background 
        bgImage={currBG}
      />

      <FindEnvelope
        pageNumber={booksDB[0].pages[currPage].pageNumber}
        envelope={booksDB[0].pages[currPage].envelope}
        nextPage={nextPageHandler}
      />      
      
      <ParagraphList 
        paragraphs={booksDB[0].pages[currPage].pageText} 
        onTheRight={booksDB[0].pages[currPage].textRight}
        pageNumber={booksDB[0].pages[currPage].pageNumber}
        answer={booksDB[0].pages[currPage].answer}
        nextPage={nextPageHandler}
        fixedHeight={booksDB[0].pages[currPage].fixedHeight}
      />

      <Navigation 
        nextPage={nextPageHandler} 
        backPage={backPageHandler} 
        pageNumber={booksDB[0].pages[currPage].pageNumber}
        totalPages={booksDB[0].pages.length}
        answer={booksDB[0].pages[currPage].answer}
      />         
    </section>
  )
}

export default Story;
