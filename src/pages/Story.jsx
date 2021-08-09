import React from 'react';
import Navigation from '../components/Navigation';

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
          "SSSSSSS",
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

const textTemp = [
  "This little bet is Kiko! Hello Kiko!",
  "Kiko looks very excited.",
  "Should we tell our friend what is happening in Volendorpje?!",
  "Kiko nods affirmatively",
  "And do you know why?"
];

const Story = () => {
  return (
    <section className="page-container">
      <div className="page-container__text">
        {
          textTemp.map((paragraph, index) => {
            return <h2 key={index}>{paragraph}</h2>
          })
        }       
      </div>

      <Navigation />     
         
    </section>
  )
}

export default Story;
