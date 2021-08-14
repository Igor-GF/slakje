import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ParagraphList from '../components/ParagraphList';
import Background from '../components/Background';

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
      
      <Background bgImage={booksDB[0].pages[currPage].pageBg}/>
      
      <ParagraphList paragraphs={booksDB[0].pages[currPage].pageText} onTheRight={booksDB[0].pages[currPage].textRight}/>

      <Navigation nextPage={nextPageHandler} backPage={backPageHandler} pageNumber={currPage}/> 

        
         
    </section>
  )
}

export default Story;
