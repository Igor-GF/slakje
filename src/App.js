import Story from './pages/Story';
import { booksDB } from './booksDB';

function App() {
  return (
    <main className="app">
       <h1>Slakje Storytelling App</h1>
       <Story booksDB={booksDB}/>
    </main>
  );
}

export default App;