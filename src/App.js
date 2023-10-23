import './App.css';
import AllComponents from './components/allComponents';
// import { Routes, Route } from 'react-router-dom';
import About from './components/about';
import Projects from './components/projects';
import Challenges from './components/challenges';
import Skills from './components/skills';
import Contact from './components/contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <AllComponents />
      </div>
    </BrowserRouter>
  );
}

export default App;
