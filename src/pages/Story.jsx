import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ParagraphList from '../components/ParagraphList';
import Background from '../components/Background';
import PuzzleOne from '../components/puzzleOne';
import PuzzleTwo from '../components/puzzleTwo';
import PuzzleThree from '../components/puzzleThree';

const Story = ({ booksDB }) => {

  const [currPage, setCurrPage] = useState(0);

  const nextPageHandler = () => {
    setCurrPage( currPage + 1 );
  };

  const backPageHandler = () => {
    setCurrPage( currPage - 1 );
  };

  useEffect(() => {
    console.log("it wotked!!!")
  }, [currPage]);

  return (
    <section className="page-container">
      
      <Background 
        bgImage={booksDB[0].pages[currPage].pageBg}
      />
      
      <ParagraphList 
        paragraphs={booksDB[0].pages[currPage].pageText} 
        onTheRight={booksDB[0].pages[currPage].textRight}
      />

      <PuzzleOne />
      <PuzzleTwo />
      <PuzzleThree />

      <Navigation 
        nextPage={nextPageHandler} 
        backPage={backPageHandler} 
        pageNumber={booksDB[0].pages[currPage].pageNumber}
        totalPages={booksDB[0].pages.length}
      />         
    </section>
  )
}

export default Story;
