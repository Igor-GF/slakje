import React, { useState } from "react";
import Story from './pages/Story';
import { booksDB } from './booksDB';
import Home from './pages/Home';

function App() {

  const [story, setStory] = useState(0);

  const startHandler = () => {
    setStory(1);
  }
  return (
    <main className="app">
       <Home start={startHandler}/>
       <Story booksDB={booksDB}/>
    </main>
  );
}

export default App;