import React from 'react';
import Navigation from '../components/Navigation';
import ParagraphList from '../components/ParagraphList';

const booksDB = [
  {
    id: "s00001y2021",
    title: "Sleepy Volendorpje",
    pages: [
      {
        pageNumber: 1,
        pageBg: "this.",
        pageText: [
          "SSSSSSS",
          "This little bet is Kiko! Hello Kiko!",
          "Kiko looks very excited.",
          "Should we tell our friend what is happening in Volendorpje?!",
          "Kiko nods affirmatively",
          "And do you know why?"
        ]
      },{
        pageNumber: 2,
        pageBg: "this.",
        pageText: [
          "fffffffffffffffff",
          "This little bet is Kiko! Hello Kiko!",
          "Kiko looks very excited.",
          "Should we tell our friend what is happening in Volendorpje?!",
          "Kiko nods affirmatively",
          "And do you know why?"
        ]
      }
    ],
  }
];

const Story = () => {
  return (
    <section className="page-container">
      
      <ParagraphList paragraphs={booksDB[0].pages[0].pageText}/>

      <Navigation />     
         
    </section>
  )
}

export default Story;
