import { Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Labyrinth from './components/Labyrinth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Better Living Games</h1>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/games" element={<Labyrinth />} />
        </Routes>
      </main>
      <footer className="App-footer">

      </footer>
    </div >
  );
}

export default App;
